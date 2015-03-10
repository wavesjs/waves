# waves

WAVES library repository

## Documentation

[https://waves.github.io/](https://wavesjs.github.io/)

this bundle is basically a wrapper for the `waves-ui`, `waves-audio`, `waves-loader` and `waves-lfo` libraries

## Use

#### CommonJS (browserify)

install with npm

```bash
npm install --save wavesjs/waves
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

the library is exposed in `window.waves`


## Custom build

to create your own custom build, you need to remove/comment all the component you don't need in `waves.js`, then run

```bash
npm run bundle
```

## License

This module is released under the BSD-3-Clause license.

Acknowledgments

This code is part of the WAVE project, funded by ANR (The French National Research Agency).





