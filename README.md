
# JBFF challenge:

- [Setup](#setup)
    - [In your system](#in-your-system)
    - [With Docker compose](#docker-compose)
- [Approach](#architecture)
	- [Server](#server)
	- [Client](#client)
- [Testing](#testing)
- [Others](#others)
- [Improvements](#improvements)



## Setup

TWO ways to install:

### In your system

#### Requirements

- Yarn (or npm)
https://yarnpkg.com/

#### Run in dev environment

It will run client and server together following logs
- `yarn start:dev`

#### Run tests
This will run server and client tests
- `yarn test`

#### Build and serve production package

It will build client, then serve in 8080 both client and server together following logs
- `yarn build && yarn serve`

App is now accesible at http://localhost:8080


### Docker compose

#### Requirements

- Docker-compose >= **1.23.2**
https://docs.docker.com/compose/install/


#### Build

It will build the Docker image and stored to be run later

- `./scripts/build.sh`

#### Up

The container opens Ports 9000 and 9001, for client and server.

Run up script:

- `./scripts/up.sh`

It will keep following the logs.
App is now accesible at http://localhost:9000

#### Stop

It stops the container: 

- `./scripts/stop.sh`

#### Restart

Stop + Up

- `./scripts/restart.sh`

#### Logs

To access container logs

- `./scripts/logs.sh -f`

#### Prune

It will remove the Docker container from your system

- `./scripts/prune.sh`

---


### Server:
The structure for this small server is simple: Request are being handled in their corresponding route depending the service we wanted to use and further actions are delegated to their respective controllers.


### Client:

React was selected as the framework to be used for this project. I decided to not to use the common "create-react-app" in order to build it from the scratch and using only the libraries and configurations needed avoiding boilerplate code and not useful libraries:

	- Babel: We could do this just using Vanilla, but ES features are too good to skip. :)
	- Webpack: Faster bundler of the market. It helps to build our application with great flexibility. We use webpack-dev-server in local environment to have hot reloading
HtmlWebpackPlugin allow us to inject an HTML template to the folder. That file contains the root element that will be used as entry point for our React application.

## Testing: 

For testing I decided to use React Testing Library. Since I started using it I felt in love. In fact `Enzyme` drives you to test doing things that a user can not do like using shallow render, getting component instance or getting/setting a component state. If the tests are used in a way like user interacts I ship my code with more confidence.
`RTL` is also faster than `enzyme` as finding methods are lighter.

## Others: 
I wanted to test my skills doing some different rather than run all of this in a regular local server: 

I created a Dockerfile for the lone image we have here. It just starts from last stable node image copying repo files, installing deps then running client and server after the start. Compose helps concentrating all config in the same place. It may not have much sense here as we could do the same with `docker build` and `docker run` commands. However, in order to scale, compose allows us to have several images under the same network, so I decided to go through this way even understanding that at this point can result a bit overkill (I think that to think about scalability is nice to have when you need to develop something, no matter what).
It connects docker `9000` port with the host one. Also creates volumes for the application, dependencies and dist folder.
