import { Alchemy } from "alchemy-sdk";
import { settings } from "../constants";

export class Ethereum {
  /* eslint-disable */
  constructor(ethProvider = new Alchemy(settings)) {
    this.ethProvider = ethProvider;
  }
  /* eslint-enable */

  #latestsBlock = [];

  async getBlockNumber() {
    return await this.ethProvider.core.getBlockNumber();
  }

  async getBlock(blockNumber) {
    return await this.ethProvider.core.getBlock(blockNumber);
  }

  async setLatestBlock() {
    const latestBlock = await this.getBlockNumber();
    let blocks = [];
    for (let i = latestBlock; i > latestBlock - 10; i--) {
      const block = await this.getBlock(i);
      blocks.push(block);
    }

    this.#latestsBlock = blocks;
  }

  async getLatestBlocks() {
    await this.setLatestBlock();
    return this.#latestsBlock;
  }
}
