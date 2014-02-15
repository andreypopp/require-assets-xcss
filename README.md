# require-assets-xcss

xCSS transform for  [require-assets][].

## Installation

    % npm install require-assets require-assets-xcss

## Usage

Use `require-assets-xcss/url` function to reference static assets (images,
fonts, ...):

    @require "require-assets-xcss/url" as url

    .Component {
      background-image: url(./spinner.gif)
    }

Use transform to extract asset registry into JSON file:

    % xcss -t [ require-assets-xcss --output ./assets.json ] ...
