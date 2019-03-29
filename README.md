# Obsolete: use [Create React App](https://github.com/facebook/create-react-app) / [Redux starter kit](https://github.com/reduxjs/redux-starter-kit)

# generator-flux

> [Flux](http://facebook.github.io/flux/)/[React](http://facebook.github.io/react/) application generator

#### _Interested in taking next-gen Flux for a spin?_
Try the new [generator-redux](https://github.com/banderson/generator-redux) to get a sneak peek at the future of functional Flux/React!

## Getting Started

### What is Flux?

It's an "Application Architecture for Building User Interfaces", built by the team at Facebook. It's a set of patterns building larger applications on top of the incredible [React](http://facebook.github.io/react/) component library.

![http://facebook.github.io/flux/docs/overview.html#content](http://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)


### Features:
- [x] Facebook's Flux architecture (using official [dispatcher](https://github.com/facebook/flux/blob/master/src/Dispatcher.js))
- [x] [Gulp](http://gulpjs.com/) for builds
- [x] [Browserify](http://browserify.org/) and CJS modules
- [x] [Babel](https://babeljs.io/) for es6 transpilation
- [x] Static server with livereload
- [x] SASS CSS preprocessor

### Basic Support
- [ ] Choice of UI Framework (React-Bootstrap, Material UI)

#### Coming soon:
- [ ] React-router
- [ ] Storage options: `localStorage` and Firebase to start
- [ ] Test generation (likely using Jest)
- [ ] Cleaner ActionCreator patterns

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
* __Application Description__ (_string_): Describe your application in one sentence, to be used in `package.json` and the generated `README.md`


### Running the scaffolded project

The generated project includes a live-reloading static server on port `8080` (you can change the port in the `gulpfile.js` config), which will build, launch, and rebuild the app whenever you change application code. To start the server, run:

```bash
$ npm start
```

To run the live-reloading static server on port `8080` with source maps enabled (don't use source maps for production!), run: 

```bash
$ npm run dev
```

If you prefer to just build without the live reload and build-on-each-change watcher, run:

```bash
$ npm run build
```


## After First Run

The flux generator is still useful even after your app is fully generated. It comes with several subgenerators that you can invoke at any time to add new:

#### Components
```bash
$ yo flux:component ComponentName
```

#### Actions
```bash
$ yo flux:action ActionCreatorName
```

#### Stores
```bash
$ yo flux:store StoreName
```


## License

MIT
