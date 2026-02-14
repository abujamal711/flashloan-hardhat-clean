async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);
  console.log("Balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  const Contract = await ethers.getContractFactory("FlashLoanArbitrage");
  const contract = await Contract.deploy();

  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
