<img src="src/assets/images/shoppingCart.png" align="right" />

# React eCommerce Project [![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/samirdhebar/Price-Buzz/master/LICENSE.md)
Front-end project app utilizing React. This React project is an eCommerce website that will showcase products, allow users to add them to the shopping cart and finally check out with all of one's products when the user has completed shopping.

## Getting Started

You must be on a Node version greater than 6 to use this. Once you've npm
installed, there are only two commands:

* `npm run start` - Runs the development server (Specify port with PORT, default 3000)
* `npm run build` - Builds the production version, which goes into `dist`

## Project Structure

```
.
├── src                # Source code, including raw assets
│   ├── App.jsx        ### The top-level component for React
│   ├── App.scss       ### Any general, non-component styling done here
│   ├── assets         ### Static assets
│   │   ├── fonts      ##### Fonts(eot|otf|ttf|woff|woff2)
│   │   └── images     ##### Images (gif|png|jpe?g|svg|ico)
│   ├── components     ### Any shared components
│   ├── index.ejs      ### HTML template for the app
│   └── index.js       ### Webpack entry point / component mounting
├── dist               # Any built files are here, not checked in
└── webpack.config.js  # Webpack configuration for dev _and_ production
```

## Inspiration
* [Camelbak](https://www.camelbak.com/) - A clean, interactive website that makes looking at backpacks and waterbottles interesting!

## Contribute

Contributions are always welcome!
Please read the [contribution guidelines](Contributing.md) first.

## License

<img src="src/assets/images/mitLicense.png" align= "center" />  This eCommerce React site is available the under the [MIT License](https://github.com/samirdhebar/Price-Buzz/blob/master/LICENSE.md).
