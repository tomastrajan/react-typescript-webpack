# React Typescript Webpack *FLUXless* Todo Example [![Build Status](https://travis-ci.org/tomastrajan/react-typescript-webpack.svg)](https://travis-ci.org/tomastrajan/react-typescript-webpack)
Seed for building React app using *FLUXless* architecture, Typescript and Webpack build

Check out the [Demo](http://tomastrajan.github.io/react-typescript-webpack/)

## Features
This is a simple Todos application with some sweet extra features like authentication (using Auth0)
and persistence (separate node.js backend application - check out the gihub repository of
[todos-server](https://github.com/tomastrajan/todos-server))

* **FLUXless architecture** - simple one way data flow (just components, services, models)
* **guest mode** - local storage persistence
* **persistence** - separate node.js backend application for authenticated users
* **authentication** - [Auth0](https://auth0.com/) 3rd party API with Google+ social login
* **material design** - material-ui, react-bootstrap, material bootswatch theme
* **[continuous deployment](https://medium.com/@tomastrajan/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889)** - travis ci build + deployment to gh-pages branch fo the repository (GitHub Pages)

#### How to run the project
1. `npm i`
2. `npm start`

## Preview 

![Components](/assets/screenshot1.png?raw=true "React Typescript Webpack FLUXless Example")


> **Disclaimer**: I think Flux architecture and it's multiple implementations are great
idea but it is always good to understand the bigger picture and related trade-offs...


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

> As far as I can tell (and as others have said) - FB seems to have missed the boat here. Their FLUX diagram
is what I understood proper MVC to be...


These and many other similar comments are hinting that Flux may be just a specific implementation of MVC
and that the main point (or constraint) is that the data must **ALWAYS** flow in one direction.
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
being responsible for dispatching `Action` generated events to all the `Stores`.
As everything, `events` too come with a trade-off. They enforce decoupling of application logic
by their very nature. The cost of that is that it is usually much harder to track and
debug event-heavy code. Yes you can store complete event history to see what happened
in your application but you lose ability to easily comprehend scope of all the logic
that will be executed as a result of producing single event. Another problem is
assuring that the dependent operations happen in correct order (`waitsFor` from original
Facebook's Flux example'). It might be matter of subjective preference but if you
need to orchestrate complex business flows through various domains, nothing beats explicit calls.

## UI
#### React components
In this example we are using two types of React components with different set
of responsibilities.

#### Container components
Container components are handling following tasks:
* hold current (rendered) application state
* register model change listeners to get notified on model data change
* retrieve actual data on model change
* pass state to children components through their props
* implement calls to domain & application services (and pass them to children)

Template of container components consist purely of other React components
(no own layout or functionality).

```typescript
export default class TodoContainer extends React.Component<{}, {}> {

    constructor(props) {
        super(props);
        this.state = this._buildState();
    }

    // register model data change listeners
    componentDidMount() { TodoModel.observable.addListener(this._onModelUpdate.bind(this)); }
    componentWillUnmount() { TodoModel.observable.removeListener(this._onModelUpdate.bind(this)); }

    // handle model data change
    _onModelUpdate() {
        this.setState(this._buildState());
    }

    // helper function for retrieving state on model data change
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
Simple components receive all their data and functionality through props (from parent component).
They can implement their own local `state` and logic for handling of internal UI interactions
but all mutations to the application state stored in `models` can only be achieved by executing
functions received from parent through props (which are in turn calling domain and application services).


## Logic
#### Domain separation
As applications grow larger it is usually a good idea to split functionality into
multiple folders (packages) by their respective concern. In the perfect world these
concerns would be perfectly orthogonal so we didn't have to implement any cross
domain orchestration or cross-cutting concerns. Unfortunately, that's rarely
the case and we usually have to deal with cross-domain coordination when
implementing our business flows.

#### Application services
Application services (`~Actions`) are used to implement cross-domain orchestration. They are the
only type of service which are allowed to `import` services from other domain packages.
They only execute functionality of imported domain services and contain no business logic on their own.

#### (Domain) Services
Services (~`Actions` / `Stores`) are used to implement domain specific business and
infrastructure logic. Services of particular domain can `import` only other services
belonging to that domain. All inter-domain orchestration must be implemented using
`application services`. Logic can be separated into multiple services based on concern
(eg: business logic, persistence, ...).

#### Models
Models (~`Stores`) are responsible for holding app state during it's runtime. They implement
observe/notify design pattern so that all interested `container components` can use model's
`addListener` method to register callback to be notified when the model data change.
This implementation enables **one way data flow**.
Model has full control of the (possibly custom) notification behaviour, while component
knows what kind of data it needs to retrieve from model after being notified.

All `get` data functions of the model create copy of the retrieved data so that
they prevent direct mutation of model's data through shared reference.
Also, while it is theoretically possible for component to directly call
other model's methods, as guideline only `listener` and `get` methods are allowed.

## Contributing
Don't hesitate to fork / submit PR with enhancements if you found this example useful.

#### TODO
* tslint
* unit tests
* integration tests
* add notifications / alerts for operation's outcomes
* cleanup of styling (select just one component library)
* add form validation messages