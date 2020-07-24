# Experta Example Test

Backoffice created using [React-Admin](https://marmelab.com/react-admin/) library.

# Installation
After cloning the project:
```sh
$ cd experta-test
$ yarn install
$ yarn start
```

# Enviroment
[Experta Test](https://thirsty-shaw-3ee261.netlify.app/)

# Arquitechture
The project is written on JS using the library React with also some other libraries like react-admin and material-ui for components and css.

The mock for displaying the data is implemented in the ```dataProvider``` file. Internally of react-admin, this library uses redux for store and display this data. There it can be  the code to communicate with de backend (endpoints).

It uses i18n for default and custom translations.

## Improvements:
- Make test files to every component.
- The cuit validation can it be call after the save button is clicked, to avoid calling the method after a number is pressed.
- Connect the app to a backend for store data.

