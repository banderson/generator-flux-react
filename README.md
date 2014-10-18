# generator-flux

> [Flux](http://facebook.github.io/flux/)/[React](http://facebook.github.io/react/) application generator


## Getting Started

### What is Flux?

It's an "Application Architecture for Building User Interfaces", built by the team at Facebook. It's a set of patterns building larger applications on top of the incredible [React](http://facebook.github.io/react/) component library.

![http://facebook.github.io/flux/docs/overview.html#content](http://facebook.github.io/react/img/blog/flux-diagram.png)

### Prerequisites

You must have [Node.js w/NPM](http://nodejs.org/) installed. I recommend installing via [homebrew](http://brew.sh/), but you should be able to use the [pre-built installers](http://nodejs.org/download/) if you prefer.

Also, `generator-flux` is a [Yeoman](http://yeoman.io/) generator. If you do not have Yeoman installed, first run:

```bash
$ npm install -g yo
```

### Installing the generator

To install generator-flux from npm, run:

```bash
$ npm install -g generator-flux
```

Finally, initiate the generator:

```bash
$ yo flux
```


## After First Run

The flux generator is still usefull even after your app is first generated. It comes with several subgenerators that you can invoke at any time to add new:

#### Dispatchers
```bash
$ yo flux:dispatcher DispatcherName
```

#### Stores
```bash
$ yo flux:store StoreName
```

#### Actions
```bash
$ yo flux:action ActionCreatorName
```


### Configuration Options

During install-time, you will be prompted to enter a few pieces of information to help create a sane project structure and `package.json` file:

* __Application name__ (_string_): A human-readable name for your project, i.e. "My Flux Application"
* __Machine-readable name__ (string): This will be used in `package.json` as your project identifier
* __Application Description__ (string): Describe your application in one sentence, to be used in `package.json` and the generated `README.md`


## License

MIT
