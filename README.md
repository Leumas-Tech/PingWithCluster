# PingCluster.js Usage Guide
## Introduction
PingCluster.js is a Node.js script designed for educational purposes to demonstrate how distributed systems can perform network tasks, such as pinging a list of IP addresses for a specified duration. This script utilizes Node.js clusters to parallelize ping requests, making it a powerful tool for understanding network interactions and load distribution.

## Disclaimer
This tool is intended strictly for educational and testing purposes on networks and systems you have explicit authorization to test. It is provided "as is", without warranty of any kind. The user must adhere to all applicable laws and ethical guidelines. Unauthorized use of this tool against any network or IP address without explicit permission is prohibited and may be illegal.

## Prerequisites
Node.js installed on your system
Basic understanding of command-line operations
Permission to test the target IP addresses
Installation
Clone the GitHub repository to your local machine:

```
git clone https://github.com/Leumas-Tech/PingWithCluster
```
Change directory into the cloned repository:
``
cd PingWithCluster
```
To use PingCluster.js, follow these steps:

Open your terminal or command prompt.
Navigate to the directory where PingCluster.js is located.
Run the script using Node.js, specifying the target IP addresses and the duration for the pings in hours:

```
node index.js <ip1> <ip2> ... <duration in hours>
```

Example:
```
node index.js 192.168.1.1 5
```
This command will ping the IP address 192.168.1.1 for 5 hours using 8 parallel workers.

## Important Notes
Only test on IP addresses you own or have explicit permission to test.
The script is designed for educational purposes to understand network behavior under controlled conditions.

**Misuse of this script for unauthorized network attacks, such as DDoS (Distributed Denial of Service), is illegal and strictly prohibited.**

## Ethical Considerations
While PingCluster.js can technically be adapted for use in network attack scenarios, such as DDoS attacks through distribution on multiple systems (e.g., via a trojan horse), we strongly emphasize that this script is provided for educational use only. The knowledge and tools shared should be used responsibly to learn about network security and system administration, not for malicious activities.

## Contribution
Contributions to improve PingCluster.js for educational purposes are welcome. Please ensure that all contributions adhere to ethical guidelines and legal standards.
