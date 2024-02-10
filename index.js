const cluster = require('cluster');
const { exec } = require('child_process');
const os = require('os');
const numWorkers = 8; // Set to 8 workers

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    const args = process.argv.slice(2);
    const durationHours = parseFloat(args.pop());
    const ipAddresses = args;

    if (ipAddresses.length === 0 || isNaN(durationHours)) {
        console.log('Usage: node pingWorkers.js <ip1> <ip2> ... <duration in hours>');
        process.exit(1);
    }

    while (ipAddresses.length < numWorkers) {
        ipAddresses.push(...ipAddresses.slice(0, numWorkers - ipAddresses.length));
    }

    for (let i = 0; i < numWorkers; i++) {
        const worker = cluster.fork();
        worker.send({ ip: ipAddresses[i % ipAddresses.length], durationHours });
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    console.log(`Worker ${process.pid} started`);

    const pingIP = (ip, durationHours) => {
        const endTime = Date.now() + durationHours * 3600 * 1000;
        let pingCount = 0;
        const pingCmd = os.platform() === 'win32' ? `ping -n 1 ${ip}` : `ping -c 1 ${ip}`;

        const pingLoop = () => {
            exec(pingCmd, (error, stdout, stderr) => {
                pingCount++;
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`Ping #${pingCount} results for ${ip}: ${stdout}`);
                if (Date.now() < endTime) {
                    pingLoop(); // Remove setTimeout to immediately start the next ping
                } else {
                    console.log(`Completed ${pingCount} pings to ${ip} over ${durationHours} hour(s).`);
                }
            });
        };

        pingLoop();
    };

    process.on('message', ({ ip, durationHours }) => {
        console.log(`Worker ${process.pid} starting pings to ${ip} for ${durationHours} hour(s)`);
        pingIP(ip, durationHours);
    });
}



// Example usage node index.js 192.168.1.1 5
// This will ping IP 192.168.1.1 for 5 hour(s)
