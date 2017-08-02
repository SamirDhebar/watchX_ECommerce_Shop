# React eCommerce Site - Outline
This is an outline for the eCommerce website which will be built on the front-end exclusively and rely on previously built back-end code.

## Page Structure
* / - Homepage where users land when arriving to the site
* /cart - Page where users can browse items in their shopping cart
* /checkout - Page where users can see all of the items in their cart and they are ready to checkout and add relevant info
* /AllItems - Page which will display all of the items
* /404 - Error page
* /ordersuccess - Page that displays when a user orders from the site and checkouts out successfully

## Components Required
* Products.js -
 - `props.product.name` - name would be a string
 - `props.product.description` - description would be a string
 - `props.product.cost` - cost would be a number
* Catalog.js - place where items are contained for searching
* Item.js - page where you can see an item one at a time
* Search.js - where a user can search for items
* Cart.js - place that holds users' items before checkout
* Modal.js - customizable alert that pops up when a user first enters the site
* Navigation.js - Bar that allows users to navigate to other parts of the site

## Inspriation
* [Camelbak](https://www.camelbak.com/) - A clean, interactive website that makes looking at backpacks and waterbottles interesting!

## License
This is available under the MIT License. Any distributions of it must also carry
this license.
