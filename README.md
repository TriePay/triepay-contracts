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

## Contract Addresses
Blockchain|Address
---|---
ethereum | [0x504356d1893813e92b5534627aBa342efE54db69](https://etherscan.io/address/0x504356d1893813e92b5534627aBa342efE54db69)
bsc | [0x504356d1893813e92b5534627aBa342efE54db69](https://bscscan.com/address/0x504356d1893813e92b5534627aba342efe54db69)
polygon | [0x504356d1893813e92b5534627aBa342efE54db69](https://polygonscan.com/address/0x504356d1893813e92b5534627aba342efe54db69)
avalanche | [0x504356d1893813e92b5534627aBa342efE54db69](https://snowtrace.io/address/0x504356d1893813e92b5534627aba342efe54db69)
fantom | [0x504356d1893813e92b5534627aBa342efE54db69](https://ftmscan.com/address/0x504356d1893813e92b5534627aba342efe54db69)
