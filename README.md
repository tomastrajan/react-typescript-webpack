# React Typescript Webpack *FLUXless* Todo Example
Seed for building React app using *FLUXless* architecture, Typescript and Webpack build

Check out the [Demo](http://tomastrajan.github.io/react-typescript-webpack/)

## Features
This is a simple Todos application with some sweet extra features like authentication (using Auth0) and persistence (separate node.js backend application - check out the gihub repository of [todos-server](https://github.com/tomastrajan/todos-server))

* **authentication** - [Auth0](https://auth0.com/) 3rd party API with Google+ social login
* **persistence** - separate node.js backend application for authenticated users
* **guest mode** - local storage pesistence
* **FLUXless architecture** - simple one way data flow (just components, services, models)
* **material design** - material-ui, react-bootstrap, material bootswatch theme

## Preview 

![Components](/assets/screenshot1.png?raw=true "React Typescript Webpack FLUXless Example")

## Motivation for FLUXless architecture
In software development, we should strive to attain deeper understanding of concepts instead of falling for the  everchanging `HypeOfTheMonth`. I was a bit skeptical about the latest Flux hype and all the different libraries it spawned during relatively short period of time. Reasearching the topic brought fruit pretty quickly. In my oppinion, this guy on [reddit](https://www.reddit.com/r/programming/comments/25nrb5/facebook_mvc_does_not_scale_use_flux_instead/) described the situation perfectly.


> TLDR; MVC done incorrectly doesn't scale so we replaced it with MVC done correctly and gave it a cooler name.


That means Flux in fact is a implementation of MVC and the main point (or constraint) is that the data should flow **ALWAYS** in one direction.
As it turned out, this is easily achievable just by using services (check 
[todo.service.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.service.ts) and 
[todo.model.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.model.ts) to get an idea). 


### Architecture
The main concept at the core of all Flux implementations is that the data must always flow in one direction. This is a worthy cause and it brings a lot of benefits to the table during development and maintenance of projects. With such an architecure project state becomes predictable, easier to reason about and debug. 


#### React components
...

#### Services
...

#### Application services
...

#### Models
...

#### Propagating model changes back to React components
...

### How to run the project
1. `npm i`
2. `npm i bootstrap` then copy `bootstrap/dist/fonts` into `bootswatch/` (workaround)
3. `npm start`
