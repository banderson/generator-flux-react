# generator-flux

> [Flux](http://facebook.github.io/flux/)/[React](http://facebook.github.io/react/) application generator

## Getting Started

### What is Flux?

It's an "Application Architecture for Building User Interfaces", built by the team at Facebook. It's a set of patterns building larger applications on top of the incredible [React](http://facebook.github.io/react/) component library.

![http://facebook.github.io/flux/docs/overview.html#content](http://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

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


### Configuration Options

During install-time, you will be prompted to enter some information to help create the project structure and `package.json` file:

* __Application name__ (_string_): A human-readable name for your project, i.e. "My Flux Application"
* __Machine-readable name__ (_string_): This will be used in `package.json` as your project identifier, and is generated automatically from the _Application Name_ if you choose the default.
* __Application Description__ (_string_): Describe your application in one sentence, to be used in `package.json` and the generated `README.md`


### Running the scaffolded project

Once your project is generated, you can build and open the built application by running:

```bash
$ npm start
```

That will launch the app and rebuild whenever you change application code. If you prefer to just build without the `watch` functionality, run:

```bash
$ npm run build
```


## After First Run

The flux generator is still useful even after your app is fully generated. It comes with several subgenerators that you can invoke at any time to add new:

#### Components
```bash
$ yo flux:component ComponentName
```

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


## License

MIT
