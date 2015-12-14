# React Typescript Webpack *FLUXless* Todo Example [![Build Status](https://travis-ci.org/tomastrajan/react-typescript-webpack.svg)](https://travis-ci.org/tomastrajan/react-typescript-webpack)
Seed for building React app using *FLUXless* architecture, Typescript and Webpack build

Check out the [Demo](http://tomastrajan.github.io/react-typescript-webpack/)

## Features
This is a simple Todos application with some sweet extra features like authentication (using Auth0) and persistence (separate node.js backend application - check out the gihub repository of [todos-server](https://github.com/tomastrajan/todos-server))

* **FLUXless architecture** - simple one way data flow (just components, services, models)
* **guest mode** - local storage pesistence
* **persistence** - separate node.js backend application for authenticated users
* **authentication** - [Auth0](https://auth0.com/) 3rd party API with Google+ social login
* **material design** - material-ui, react-bootstrap, material bootswatch theme
* **[continuous deployment](https://medium.com/@tomastrajan/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889)** - travis ci build + deployment to gh-pages branch fo the repository (GitHub Pages)

## Preview 

![Components](/assets/screenshot1.png?raw=true "React Typescript Webpack FLUXless Example")


> **Disclaimer**: I think Flux architecture is a great idea but it is always good to
understand the bigger picture and related trade-offs...


## Motivation for FLUXless architecture
In software development, we should strive to attain deeper understanding of
concepts instead of falling for the  ever-changing _HypeOfThe~~Month~~Year_. I was
[interested](https://medium.com/@tomastrajan/introduction-to-react-and-flux-6043d63610cd)
and a bit skeptical about the latest Flux hype and all the different
libraries it spawned during relatively short period of time. Researching the topic
brought fruit pretty quickly. In my opinion, this thread on
[reddit](https://www.reddit.com/r/programming/comments/25nrb5/facebook_mvc_does_not_scale_use_flux_instead/)
contains lot of insight into the situation.


> TLDR; MVC done incorrectly doesn't scale so we replaced it with MVC done correctly and gave it a cooler name.

or

> As far as I can tell (and as others have said) - FB seems to have missed the boat here. Their FLUX diagram is what I understood proper MVC to be...


These and other similar comments are hinting that Flux is a specific implementation of MVC
and that the main point (or constraint) is that the data should **ALWAYS** flow just in one direction.
Flux implementations usually achieve that by decoupling of all logic calls (in `Actions`)
by event bus (`Dispatcher`) from their execution (in `Stores`). As it turned out,
one way data flow is also easily achievable by using more familiar architecture with
React components, services and models (check
[todo.container.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/ui/todo.container.tsx),
[todo.service.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.service.ts),
[todo.model.ts](https://github.com/tomastrajan/react-typescript-webpack/blob/master/src/todo/todo.model.ts)
to get an idea).


### Architecture
The main concept at the core of all Flux implementations is that the data must always flow
in one direction. This is a worthy cause and it brings a lot of benefits to the table
during development and maintenance of projects. With such an architecture project state
becomes predictable, easier to reason about and debug.

##### Event bus vs explicit calls
Flux decouples logic by implementing event bus with the `Dispatcher`
being responsible for dispatching `Actions` generated events to all the `Stores`.
As everything, `events` too come with a trade-off. They enforce decoupling of application logic
by their very nature. The cost of that is that it is usually much harder to track and
debug event-heavy code. Yes you can store and get complete history of what happened but
you lose ability to easily comprehend scope of all the logic that will be executed as
a result of producing single event. It might be matter of subjective preference but if
you need to orchestrate business logic though various domains, nothing beats explicit
calls.

## UI
#### React components
In this example we are using two types of React components with different set
of responsibilities.

#### Container components
Container components are fulfilling couple of responsibilities:
* hold current application state
* register model change listeners to get notified on model data change
* retrieve actual data on model change
* pass state to children children components through their props
* implement calls to domain  & application services

Template of container components consist purely of other React components
(no own layout or functionality).

```typescript
export default class TodoContainer extends React.Component<{}, {}> {

    constructor(props) {
        super(props);
        this.state = this._buildState();
    }

    componentDidMount() { TodoModel.observable.addListener(this._onModelUpdate.bind(this)); }
    componentWillUnmount() { TodoModel.observable.removeListener(this._onModelUpdate.bind(this)); }

    _onModelUpdate() {
        this.setState(this._buildState());
    }

    _buildState() {
        return {
            todos: TodoModel.getTodos()
        }
    }

    addTodo(description: string) { /* ... */ }

    // simplified for brevity

    render() {
        return(
            <TodoComponent todos={this.state.todos} addTodo={this.addTodo.bind(this)} />
        );
    }

}

```

#### Simple components
Simple components receive all their data and actions through properties (from parent component).
They may implement their own local `state` and logic used for UI interaction but
this `state` must have no influence on real application state stored in models.

## Logic
#### Domain separation
...

#### Application services
...

#### Services
Services (~`Actions` / `Stores`) are used to implement domain specific business and
infrastructure logic. Services of particular domain can `import` only other services
belonging to that domain. All inter-domain orchestration must be implemented using
`application services`. Logic can be separated into multiple services based on concern
(eg: business logic, persistence, ...).

#### Models
Models (~`Stores`) are responsible for holding app state during it's runtime. They implement
observe/notify design pattern so that all interested `container components` can use model's
`addListener` method to register callback to be notified when the model data change.
This implementation enforces **one way data flow**.
Model has full control of the (possibly custom) notification behaviour.

#### Propagating model changes back to React components
...

### How to run the project
1. `npm i`
2. `npm start`
