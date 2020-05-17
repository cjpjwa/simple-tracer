# simple-tracer
Simple Tracer is a progressive web app (PWA) to create a simple manual contact diary. 
You can just set a contact duration, date/time and a contact information.
The contacts for each day are shown on the app start page. 
A report of all data can be created in CSV format.
Working sample can be found here: https://str.cjpj.de

## Data Saving
The contact data is saved via indexedDB. 
The optional password is saved via localstorage.

## Data encryption and hashing
Optional password can be set to protect app access and to encrypt saved contact data (using crypto-js).
When setting a password, data is encrypted using AES, password is hashed via SHA256.
With no individual password the contact data is encrypted with a default password.

## Used Libs
- [crypto-js](https://github.com/brix/crypto-js) under [The MIT Licenseb](https://github.com/brix/crypto-js/blob/develop/LICENSE)
- [simple-app-Shell](https://github.com/cjpjwa/simple-app-shell) under [The MIT License](https://github.com/cjpjwa/simple-app-shell/blob/master/LICENSE)
