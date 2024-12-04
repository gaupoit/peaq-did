# Peaq DID Creator
A simple application to create Decentralized Identifiers (DIDs) using the Peaq Network SDK.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Contribution](#contribution)
- [License](#license)
## Installation
1. Clone the repository:
```bash
git clone https://github.com/VK-Lab/iro-landing-page
```
   
2. Navigate to the project directory:

```bash
cd <project-directory>
```

3. Install dependencies using pnpm:

```
npm install -g pnpm
pnpm install
```

## Usage
To run the application locally:

```
pnpm start
```
This will start the application and connect to the Peaq network.

## Environment Variables
Make sure to have a .env file in the root directory with the following variables:

```
PEAQ_NODE_URL=<your_peaq_node_url>
MNEMONIC_SEED=<your_mnemonic_seed>
IGAM3_M1_SERIES_NUMBER=<your_IGAM3_M1_series_number>
```

## Docker Setup

To build and run the application using Docker:
Build the Docker image:

```
docker build -t peaq-did-creator .
```

Run the Docker container:

```
docker run -p 5000:5000 --env-file .env peaq-did-creator
```

## Contribution

Contributions are welcome! Please open an issue or pull request for any features or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.