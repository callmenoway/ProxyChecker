# ProxyChecker

**ProxyChecker** is a simple Node.js script to verify the functionality of HTTP/SOCKS proxies. It reads a list of proxies from a text file, checks their availability, and saves all the working proxies to a separate file.

## Features

- Reads proxy list from a file (`proxies.txt`)
- Verifies each proxy by attempting a connection
- Saves all functional proxies to `working_proxies.txt`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/callmenoway/ProxyChecker.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ProxyChecker
    ```
3. Install required dependencies:
    ```bash
    npm install
    ```

### Usage

1. Add your list of proxies (one per line) to `proxies.txt`:
    ```bash
    123.45.67.89:8080
    98.76.54.32:3128
    12.34.56.78:1080
    ```

2. Run the script:
```bash
node proxychecker.js
```
3. All working proxies will be saved to working_proxies.txt in the root directory.

### Customization
You can modify the script to:

* Support different proxy types (HTTP, HTTPS, SOCKS4, SOCKS5)
* Customize timeout settings or connection parameters

### Files
* ```proxychecker.js``` - Main script to check proxies  
* ```proxies.txt``` - Input file containing the list of proxies to test  
* ```working_proxies.txt``` - Output file with all verified working proxies  

### Contributing
Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss the proposed changes.
