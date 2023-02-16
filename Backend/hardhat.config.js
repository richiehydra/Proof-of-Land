require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:
  {
    mumbai:
    {
      url:"https://polygon-mumbai.g.alchemy.com/v2/gL6GpM9u8J_66t94oX7S-KZcEOBBpKzC",
      accounts:["8a4f69299d51bc57c82246e00f914eea83b4719de46c56e3bcbb3aef6d5251f4"],
    }
  }
};
