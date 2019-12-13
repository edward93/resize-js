# Resize JS

## v1.0.0
- Added 'yargs'
- Updated documentations

## v0.1.0 - v0.3.0 (pre releases)
**This is an old release consider upgrading to latest stable**
### Usage

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
