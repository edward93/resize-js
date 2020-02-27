# resize-js

![npm (scoped)](https://img.shields.io/npm/v/@edward1993/resize-js?style=flat-square)
[![Build Status](https://travis-ci.org/edward93/resize-js.svg?branch=master)](https://travis-ci.org/edward93/resize-js)

## Powerful yet simple image manipulation tool

_NOTE:_ This tool uses `sharp` for image manipulation. More info [here](https://github.com/lovell/sharp)

## Announcements

New `v1.1.0` version is here. Check out the [Release Notes](./docs/releaseNotes.md).\
*With this new release it is possible specify 'grayscale' argument only skipping 'width'.*\
*New output parameter is added which allows you to specify where to save your "modified" images.*

## Install

```bash
npm i -g @edward1993/resize-js
```

## Usage

```bash
Usage: resize-js [options]

Options:
  --version        Show version number                                 [boolean]
  --file, -f       file or glob                              [string] [required]
  --width, -w      width of the output image in pixels                  [number]
  --grayscale, -g  Convert to grayscale               [boolean] [default: false]
  --output, -o     Output folder                         [string] [default: "."]
  -h, --help       Show help                                           [boolean]

Examples:
  resize-js -f ./img.png -w 25 -g

Copyright 2020
```

### 

## Limitations

Currently supported image formats are **JPEG, PNG, WebP, GIF, SVG, TIFF**
