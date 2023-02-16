
const hre = require("hardhat");

async function main() {

  const[owner]=await hre.ethers.getSigners();
  const LandContract= await hre.ethers.getContractFactory("Land");
  const contract = await LandContract.deploy();

  await contract.deployed();

  console.log(`The Contract Deployed At Address: ${contract.address}`);
  console.log(`The Contract Owner Who Deployed The Contract Is:${owner.address}`);
   
  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//Contract Address-> 0x784d4449c5E0f026F51Af8f50A86D249EBcb5e69
