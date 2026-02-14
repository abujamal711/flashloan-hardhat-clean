const { expect } = require("chai");

describe("FlashLoanArbitrage", function () {
  it("Should deploy correctly", async function () {
    const Contract = await ethers.getContractFactory("FlashLoanArbitrage");
    const contract = await Contract.deploy();
    await contract.waitForDeployment();
    expect(await contract.getAddress()).to.be.properAddress;
  });
});
