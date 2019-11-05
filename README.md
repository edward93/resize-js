# resize-js
![npm (scoped)](https://img.shields.io/npm/v/@edward1993/resize-js?style=flat-square)
[![Build Status](https://travis-ci.org/edward93/resize-js.svg?branch=master)](https://travis-ci.org/edward93/resize-js)
## Powerful yet simple image manipulation tool
*NOTE:* This tool uses `sharp` for image manipulation. More info [here](https://github.com/lovell/sharp)

## Install
```bash
npm i -g @edward1993/resize-js
```
## Usage
```bash
resize-js <filename|glob> [width:number] [grayscale:boolean]
```
### Example
```bash
resize-js ./*.jpg 300 # this will find all the JPG images, resize them (width: 300 px height: auto) 
                      # and store them alongside with existing ones (resized_<original_file_name.jpg>)
resize-js ./*.png 25 true # this will do similar operation as the one above 
                          # with addition of converting an image to grayscale
```

## Limitations
Currently supported image formats are **JPEG, PNG, WebP, GIF, SVG, TIFF**