# Tyra Web
Fullstack MEVN Veterinary management application.
- Calendar.
- Clients.
- Staff Access (Users).
- Inventory (CRUD).

## Dependencies
See ```package.json``` inside ```client/``` and ```server/```.

## Getting Started
```client/```
Contains the Vue Application. In here we consume the API to display the
information from the DataBase and also modify that information.

```server/```
Constains the API.

List of Environment Variables

```client/.env```
- VUE_APP_NEW_ISSUE
- VUE_APP_MIT
- VUE_APP_TYRAWEB_FIND_USER
- VUE_APP_TYRAWEB_LOGIN_USER
- VUE_APP_TYRAWEB_CREATE_USER
- VUE_APP_TYRAWEB_BREEDS
- VUE_APP_TYRAWEB_CREATE_BREED
- VUE_APP_TYRAWEB_CREATE_CLIENT

```server/.env```
- MONGODB_TYRAWEB
- ACCESS_TOKEN_SECRET
- TYRAWEB_ROUTE_USERS
- TYRAWEB_ROUTE_BREED
- TYRAWEB_ROTUE_CLIENTS


## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License
[MIT](https://mit-license.org/)
