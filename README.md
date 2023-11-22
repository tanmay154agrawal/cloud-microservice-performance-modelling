# cloud-microservice-performance-modelling

## Introduction

The aim of this project is to solve the problem of
finding the best-suited resources for the microservice to be
deployed on so that the whole application achieves the best
performance at the same time minimizing the resources
consumption.
## Dependencies

- [k6](https://k6.io/): Load testing tool
- [Prometheus](https://prometheus.io/): Monitoring and alerting toolkit
- [Flask](https://flask.palletsprojects.com/): Python web framework
- [Docker](https://www.docker.com/): Containerization platform

## Installation
- Experiement with different VM's by building the docker image of the two microservice which are prime-app and webac-app.
- Prime-app compute prime sum upto the number provided and webac app simply prints hello world
- Build the Docker image of the two microservice and scale the application by using kubernetes.
- Artificial load is generated using load.js file which can be run using K6.
- Performance can be monitored by running various queries on the following url.
- http://your-vm-ip:9090/graphs


