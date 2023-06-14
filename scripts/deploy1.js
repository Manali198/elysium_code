async function main() {

	const [deployer] = await ethers.getSigners();

	console.log(
	"Deploying contracts with the account:",
	deployer.address
	);

	console.log("Account balance:", (await deployer.getBalance()).toString());

	const Elysium = await ethers.getContractFactory("Elysium");
	const elysium = await Elysium.deploy("Elysium","ely",18,100000000,1,2,1,"0xC44F050de700AD3D45069165bF7dacC6cB438dab");

	console.log("Contract deployed at:", elysium.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });