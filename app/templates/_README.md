
# <%= appName %> (<%= appSlug %>)

> <%= appDesc %>

## Running your project

To build, launch, and rebuild the app whenever you change application code, run:

```bash
$ npm start
```

If you prefer to just build without the auto-rebuild functionality, run:

```bash
$ npm run build
```


## Generating Additional Code

You can add additional functionality to your application by invoking the subgenerators included in the Flux Generator. You can add components using the following commands:

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
