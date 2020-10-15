<p align="center">
    <span class="badge-license">
        <img
        src="https://img.shields.io/github/license/Andrsrz/tyra-web?style=for-the-badge"
        alt="License" />
    </span>
    <span class="badge-buymeacoffee">
        <a href="https://www.buymeacoffee.com/andrsrz"
        title="Donate using Buy Me A Coffee">
        <img
        src="https://img.shields.io/static/v1?label=Buy%20Me%20a%20Beer&message=donate&color=FF813F&style=for-the-badge&logo=buy-me-a-coffee"
        alt="Buy Me A Coffee donate button" />
        </a>
    </span>
</p>

# Tyra Web
Fullstack MEVN Veterinary management application.
- [x] Calendar.
- [x] Clients and Pets.
- [ ] Medical Records.
- [x] Staff Access.
- [ ] Inventory.

## Video Demo
<p align="center">
    <span>
        <a href="https://www.youtube.com/watch?v=p336N-SqQs4"
        title="TyraWeb v0.2-alpha Video Demo">
        <img
        src="http://img.youtube.com/vi/p336N-SqQs4/0.jpg"
        alt="Video Demo v0.2-alpha" />
        </a>
    </span>
</p>

## Dependencies
See ```package.json``` inside ```client/``` and ```server/```.

## Getting Started
You need to have a [MongoDB](https://www.mongodb.com/) in your system. I suggest
that you get it as a [Docker](https://www.docker.com/) image. The following
steps are to setup your database:

### Pull MongoDB Image
``` sh
sudo docker pull mongo
```
### Create Directory in you system to have persistent data
``` sh
sudo mkdir -p /mongodata
```
### Start the Docker Container and Enter the Bash Shell
``` sh
sudo docker run -it -v /mongodata:/data/db -p 27017:27017 --name mongodb -d mongo
sudo docker exec -it mongodb bash
```
### Create DataBase and Collection
``` sh
mongo
> use tyra-web
> db.tyra.insert({ name: 'test' })
```
### Populate DB from your system
``` sh
node server/populatedb.js
```

## App
```client/```
Contains the Vue Application. In here we consume the API to display the
information from the DataBase and also modify that information.

```server/```
Constains the API.

### List of Environment Variables
You need to create two ```.env``` files. One inside ```client/``` and the other
inside ```server/``` and set the following Environment Variables:

```client/.env```
- VUE_APP_NEW_ISSUE
- VUE_APP_MIT
- VUE_APP_TYRAWEB_USERS
- VUE_APP_TYRAWEB_FIND_USER
- VUE_APP_TYRAWEB_LOGIN_USER
- VUE_APP_TYRAWEB_CREATE_USER
- VUE_APP_TYRAWEB_UPDATE_USER
- VUE_APP_TYRAWEB_DELETE_USER
- VUE_APP_TYRAWEB_BREEDS
- VUE_APP_TYRAWEB_CREATE_BREED
- VUE_APP_TYRAWEB_FIND_BREED
- VUE_APP_TYRAWEB_PET
- VUE_APP_TYRAWEB_PETS
- VUE_APP_TYRAWEB_CLIENTS
- VUE_APP_TYRAWEB_CLIENT
- VUE_APP_TYRAWEB_CREATE_CLIENT
- VUE_APP_TYRAWEB_ADD_PET
- VUE_APP_TYRAWEB_SERVICES
- VUE_APP_TYRAWEB_CREATE_SERVICE
- VUE_APP_TYRAWEB_SERVICE
- VUE_APP_TYRAWEB_UPDATE_SERVICE
- VUE_APP_TYRAWEB_DELETE_SERVICE
- VUE_APP_TYRAWEB_DAY_SCHEDULES
- VUE_APP_TYRAWEB_CREATE_DAY_SCHEDULE
- VUE_APP_TYRAWEB_ADD_APPOINTMENT
- VUE_APP_TYRAWEB_UPDATE_APPOINTMNETS

```server/.env```
- MONGODB_TYRAWEB
- MONGODB_TYRAWEB_TEST
- ACCESS_TOKEN_SECRET
- TYRAWEB_ROUTE_USERS
- TYRAWEB_ROUTE_BREED
- TYRAWEB_ROUTE_PETS
- TYRAWEB_ROTUE_CLIENTS
- TYRAWEB_ROUTE_SERVICES
- TYRAWEB_ROUTE_DAY_SCHEDULES

## Contributing
If you find this project usefull for your professional life, consider
making a donation.

For code contributions, please go to our [Contribution File](https://github.com/Andrsrz/tyra-web/blob/master/.github/CONTRIBUTING.md)

## License
[MIT](https://mit-license.org/)
