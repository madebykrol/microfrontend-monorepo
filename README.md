# microfrontend-monorepo
This project is a POC (Proof of concept) to display the capabilities of microfrontends.

This project is commited as a monorepo. But it could, and should, be maintained in separate application specific repositories.

## Microfrontend architecture in a nutshell
A bit of history to set the stage. As microservices have started to gain some tracktion and popularity and the benefits started to become clear people began thinking about how to reap some of the benefits in other areas aswell.

The major benefits of using a microservice approach is that you can have completely isolated teams that work independent of other teams to deliver hightquality software faster as they don't need to worry about stepping on other teams / developers toes. The teams can focus on building one part of the system with the technologies and processes that they know best.

### Que microfrontends.
With microfrontends we further enhance the teams ability to be self sufficient and work independantly by instead of having one frontend team working on a large monolithic UI. We instead create fullstack teams where the team contain not just backend developers for the microservice but frontend developers aswell. 
This means that the team can focus on delivering value to the application end to end using the technologies and processes that suits them. Each team can deliver a small portion of the applications UI isolated from the rest and simultaniously delivering a small portion of the applications service layer. All without having to worry about crashing the whole system if a bug occured or risking a major history rewrite of the source control repository if a merge has blown up.


## Applications
### Shell
This application is the user facing application that will do the microfrontend composition.
### Cart
This application exposes a module which contains routing for '/cart' route aswell as subroutes.
### Catalog
This application exposes a module which contains routing for '/catalog' route as well as subroutes.
### Dashboard
### Header
This application exposes a header component which displays a top navigation.
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
#### Dashboard
```bash
cd dashboard
yarn install
ng serve --port 5000
```

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
#### Header
```bash
cd header
yarn install
ng serve --port 5500
```

## Considerations
Look further into the ability for the shell application to use the more generic concept of web-components instead of angular specifics to make the application even more framework / platform agnostic. The ideal scenario would be for each individual microfrontend to be able to run either Angular, Vue or React harmoniously in the Shell app.

Some other things that are not solved in this repository is framework agnostic routing. The shell app is made with angular and is thus using Angulars routing. This gives some benefits in that each microfrontend can expose a module which in turn has subrouting which will automatically hook into the shell routes. The drawbacks are the angular vendor-lock-in. 