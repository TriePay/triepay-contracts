# TriePay Hardhat

## Basic Hardhat Cmds

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```
## Contract Deploy

rename .env.example to .env, setup necessary environment variables and run below cmds:

```shell
npx hardhat run --network ethereum scripts/deploy.ts
npx hardhat run --network bsc scripts/deploy.ts
npx hardhat run --network polygon scripts/deploy.ts
npx hardhat run --network avalanche scripts/deploy.ts
npx hardhat run --network fantom scripts/deploy.ts
```
