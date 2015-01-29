# waves

WAVES library repository

## Documentation

[https://ircam-rnd.github.io/waves/](https://ircam-rnd.github.io/waves/)

## Use

#### CommonJS (browserify)

install with npm

```bash
npm install --save ircam-rnd/waves
```

consume in your modules

```javascript
var waves = require('waves');
```

#### AMD (requireJS)

add the waves library to your config

```javascript
requirejs.config({
  paths: {
    waves: 'path/to/waves.umd'
  }
});
```

consume in your modules

```javascript
define(['waves'], function(waves) {
  var timeline = waves.ui.timeline();

  // ...
});
```

#### Global

add the script tag in your at the bottom of the `<body>`

```html
<script scr="/path/to/waves.umd.js"></script>
```

the libray is exposed in `window.waves`


## Custom build

to create your own custom build, you need to

```bash
npm install -g browserify
npm install -g uglify-js
```

remove/comment all the component you don't need in `waves.js`, then run

```bash
npm run build
```

## List of components

#### UI

- [`timeline`](https://github.com/Ircam-RnD/timeline)
- [`layer`](https://github.com/Ircam-RnD/layer)
- [`waveform`](https://github.com/Ircam-RnD/waveform)
- [`segment`](https://github.com/Ircam-RnD/segment)
- [`marker`](https://github.com/Ircam-RnD/marker)
- [`breakpoint`](https://github.com/Ircam-RnD/breakpoint)
- [`label`](https://github.com/Ircam-RnD/label)

#### UI.Helpers

- [`zoomer`](https://github.com/Ircam-RnD/zoomer)
- [`loaders`](https://github.com/Ircam-RnD/loaders)

#### Audio

#### Utils

- [`utils`](https://github.com/Ircam-RnD/utils)

