'use strict';

var waves = {};

// ui components
waves.ui = {
  timeline: require('timeline'),
  layer: require('layer'),
  waveform: require('waveform'),
  segment: require('segment'),
  marker: require('marker'),
  breakpoint: require('breakpoint'),
  label: require('label'),
  zoomer: require('zoomer'),
  utils: require('utils')
};

waves.loaders = require('loaders');

waves.audio = {};

waves.lfo = {};

// expose d3;
waves.d3 = waves.ui.timeline.d3;

module.exports = waves;