# resize-js
## Powerful yet simple images resize tool
*NOTE:* This tool uses `sharp` for image manipulation. More info [here](https://github.com/lovell/sharp)

## Usage
```bash
resize-js <filename|glob> [width:number]
```
### Example
```bash
resize-js ./*.jpg 300 # this will find all the JPG images, resize them (width: 300 px height: auto) 
                      # and store them alongside with existing ones (resized_<original_file_name.jpg>)
```

## Limitations
Currently supported image formats are **JPEG, PNG, WebP, GIF, SVG, TIFF**