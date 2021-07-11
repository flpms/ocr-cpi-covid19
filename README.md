# ocr-cpi-covid19

## Requirements

- `imagemagick`
- `tesseract`
- `brew` (For MacOS)
- `Node v14`
- `npm` or `yarn`

## Install

`npm install`

## Process files

### PDF Images

Some PDFs are images, so they need conversion before pass on OCR, to facilitate that it I created the `convert-pdf-images`,

__STEP 1__ 
Run `node convert-pdf-images`, so you can generate PNGs from it, after pass filelocation with filename

__STEP 2__
Run `node ocr.js` after change the json for filelist
