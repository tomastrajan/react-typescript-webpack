# React Typescript Webpack FluXXX™ Todo Example
Seed for building React app using FluXXX™ architecture, Typescript and Webpack build

Check out the [Demo](http://tomastrajan.github.io/react-typescript-webpack/)

## Features
This is a simple Todos application with some sweet extra features like authentication (using Auth0) and persistence (separate node.js backend application - check out the gihub repository of [todos-server](https://github.com/tomastrajan/todos-server))

* **authentication** - [Auth0](https://auth0.com/) 3rd party API with Google+ social login
* **persistence** - separate node.js backend application for authenticated users
* **guest mode** - local storage pesistence
* **fluxxx architecture** - simple one way data flow (just components, services, models)
* **material design** - material-ui, react-bootstrap, material bootswatch theme

## Preview 

![Components](/assets/screenshot.png?raw=true "React Typescript Webpack FluXXX Example")

## FluXXX™
Porn Flux? Or maybe more like naked Flux. I am not buying the whole Flux hype and I think that one guy on [reddit](https://www.reddit.com/r/programming/comments/25nrb5/facebook_mvc_does_not_scale_use_flux_instead/) 
described the situation perfectly.

> TLDR; MVC done incorrectly doesn't scale so we replaced it with MVC done correctly and gave it a cooler name.

That means Flux in fact is a implementation of MVC and the main point is that the data should flow **ALWAYS** in one direction.
This is easily achievable just by using services (check 
[todo.service.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.service.ts) and 
[todo.model.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.model.ts) to get an idea).


### How to run
1. `npm i`
2. `npm i bootstrap` then copy `bootstrap/dist/fonts` into `bootswatch/` (workaround)
3. `npm start`
