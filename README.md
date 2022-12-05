# TickesT

- This is a project to publish events and manage tickets and their purchases
- Each purchase will mint an NFT token
- As price might change over the time, users might ensure their ticket by sending extra money. So when extra money is received this contract will reward with a token that will be used to buy items during the event


## setup
```shell
npm install
```

## Compile project
```shell
npx hardhat compile
```

## Run Test
```shell
npx hardhat test
```
## Prerequisies for deployment
This deployment assumes assets are already uploaded to an ipfs and TicketsT deployment need to recieve by param a list of the generated CIDs. This will be use for each mint 

## Deployment
This deployment is compound by: 
- TicketsT
- EventToken (ERC20)
- TicketItem (ERC721)

run:
```shell
npx hardhat run scripts/deploy_tickets_t.ts 
```

Demo:
To be run, demo.ts needs to be updated with the related addresses for each contract previously deployed
```shell
npx hardhat run scripts/demo.ts 
```