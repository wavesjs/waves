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
  label: require('label')
};

waves.helpers = {
  zoomer: require('zoomer'),
  loaders: require('loaders')
};

waves.utils = require('utils');

waves.audio = {};

// expose d3;
waves.d3 = waves.ui.timeline.d3;

module.exports = waves;