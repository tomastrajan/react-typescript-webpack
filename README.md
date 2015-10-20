# React Typescript Webpack FluXXX™ Example
Seed for building React app using FluXXX™ architecture, Typescript and Webpack build

## FluXXX™
Porn Flux? Or maybe more like naked Flux. I am not buying the whole Flux hype and I think that one guy on [reddit](https://www.reddit.com/r/programming/comments/25nrb5/facebook_mvc_does_not_scale_use_flux_instead/) 
described the situation perfectly.

> TLDR; MVC done incorrectly doesn't scale so we replaced it with MVC done correctly and gave it a cooler name.

That means Flux in fact is a implementation of MVC and the main point is that the data should flow **ALWAYS** in one direction.
This is easily achievable just by using services (check 
[todo.service.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.service.ts) and 
[todo.model.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.model.ts) to get an idea).

![Components](/assets/screenshot.png?raw=true "React Typescript Webpack FluXXX Example")

### How to
1. `npm i`
2. `npm i bootstrap` then copy `bootstrap/dist/fonts` into `bootswatch/` (workaround)
3. `npm start`
