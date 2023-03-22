<p align="center">
<img src="https://app.ipbase.com/img/logo/ipbase.png" width="300"/>
</p>

# ipbase-js: Geolocation API for JavaScript

This package is a JavaScript wrapper for [ipbase.com] that aims to make the usage of the API as easy as possible in your project.

## Installation

### npm
```shell
npm install --save @everapi/ipbase-js
```
### yarn
```shell
yarn add @everapi/ipbase-js
```

## Import

```js
import CurrencyAPI from '@everapi/ipbase-js';
```

or use it directly in a Browser:

```html
<script src="path/to/ipbase-js/index.js"></script>
```

## Usage

Initialize the API with your API Key (get one for free at [ipbase.com]):

```js
const ipBase = new Ipbase('YOUR-API-KEY');
```

Afterwards you can make calls to the API like this:

```js
ipBase.info({
        ip: '1.1.1.1',
        language: 'de'
    }).then(response => {
        console.log(response);
    });
```

Find out more about our endpoints, parameters and response data structure in the [docs]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[docs]: https://ipbase.com/docs
[ipbase.com]: https://ipbase.com
