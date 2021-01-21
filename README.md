# microfrontend-monorepo
This project is a POC (Proof of concept) to display the capabilities of microfrontends.

This project is commited as a monorepo. But it could, and should, be maintained in separate application specific repositories.

## Microfrontend architecture in a nutshell
A bit of history to set the stage. As microservices started to gain some tracktion 

## Applications
### Shell
This application is the user facing application that will do the microfrontend composition.
### Cart
This application exposes a module which contains routing for '/cart' route aswell as subroutes.
### Catalog
This application exposes a module which contains routing for '/catalog' route as well as subroutes.
### Dashboard
### Header
### Footer


## Build and Run

### Start the shell application
```bash 
cd shell
yarn install 
ng serve 
```

### Start the microfrontends
Each microfrontend is supposed to be deployed and hosted individually so this repository don't contain any toolings for starting them all in one go.

#### Catalog
```bash
cd catalog
yarn install
ng serve --port 5100
```

#### Cart
```bash
cd cart
yarn install
ng serve --port 5200
```

#### Dashboard
```bash
cd dashboard
yarn install
ng serve --port 5000
```
