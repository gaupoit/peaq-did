import pkg from "@peaq-network/sdk";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Configuration
const config = {
  nodeUrl: process.env.PEAQ_NODE_URL || "wss://wsspc1-qa.agung.peaq.network",
  seed: process.env.MNEMONIC_SEED,
  did: process.env.IGAM3_M1_SERIES_NUMBER,
  connectionTimeout: 15000, // Reduced timeout to 15 seconds
  maxRetries: 3,
  accountInitTimeout: 10000, // 10 seconds timeout for account initialization
};

const createSdkInstance = async ({ nodeUrl, seed }) => {
  try {
    const sdkInstance = await pkg.Sdk.createInstance({
      baseUrl: nodeUrl,
      seed,
    });
    return sdkInstance;
  } catch (error) {
    console.error(`Failed to create SDK instance: ${error}`);
    throw error;
  }
};

const createDID = async (sdk, nameDID) => {
  const block_hash = await sdk.did.create({ name: nameDID });
  return block_hash;
};

// Example usage
const main = async () => {
  const nameDID = config.did;
  // see SDK Quickstart for createSdkInstance() function
  const sdk = await createSdkInstance(config);
  await sdk.connect();

  try {
    const hash = await createDID(sdk, nameDID);
    console.log(hash);
  } catch (error) {
    console.error(`Failed to create SDK instance: ${error}`);
    throw error;
  } finally {
    await sdk.disconnect();
  }
};

main();
