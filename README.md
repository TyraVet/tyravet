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
VueJS Application

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
See ```package.json```

## Getting Started
Please first get the [API](https://github.com/tyra-web/tyra-web-api) running before.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### List of Environment Variables
### ```.env```
#### ```host``` and ```port``` are from where you are serving your API.
| Name | Value |
| ---- | ----- |
| VUE_APP_TYRAWEB_CONFIG | host:port/config |
| VUE_APP_TYRAWEB_GET_CONFIG | host:port/config/setup |
| VUE_APP_TYRAWEB_USERS | host:port/users |
| VUE_APP_TYRAWEB_FIND_USER | host:port/users/find |
| VUE_APP_TYRAWEB_LOGIN_USER | host:port/users/login |
| VUE_APP_TYRAWEB_CREATE_USER | host:port/users/signup |
| VUE_APP_TYRAWEB_UPDATE_USER | host:port/users/update |
| VUE_APP_TYRAWEB_DELETE_USER | host:port/users/delete |
| VUE_APP_TYRAWEB_BREEDS | host:port/breeds |
| VUE_APP_TYRAWEB_CREATE_BREED | host:port/breeds/create |
| VUE_APP_TYRAWEB_FIND_BREED | host:port/breeds/find |
| VUE_APP_TYRAWEB_UPDATE_BREED | host:port/breeds/update |
| VUE_APP_TYRAWEB_DELETE_BREED | host:port/breeds/delete |
| VUE_APP_TYRAWEB_PET | host:port/pets |
| VUE_APP_TYRAWEB_PETS | host:port/pets/all |
| VUE_APP_TYRAWEB_PET_ADD_VACCINATION_RECORD | host:port/pets/add-vaccination-record |
| VUE_APP_TYRAWEB_ADD_PET | host:port/pets/add-pet |
| VUE_APP_TYRAWEB_PET_ADD_PICTURE | host:port/pets/upload-picture |
| VUE_APP_TYRAWEB_PROFILE_PICTURE | host:port/pets/picture |
| VUE_APP_TYRAWEB_CLIENTS | host:port/clients |
| VUE_APP_TYRAWEB_CLIENT | host:port/clients/client |
| VUE_APP_TYRAWEB_CREATE_CLIENT | host:port/clients/create |
| VUE_APP_TYRAWEB_SERVICES | host:port/services |
| VUE_APP_TYRAWEB_CREATE_SERVICE | host:port/services/create |
| VUE_APP_TYRAWEB_SERVICE | host:port/services/find |
| VUE_APP_TYRAWEB_VACCINATION_SERVICES | host:port/services/shots |
| VUE_APP_TYRAWEB_UPDATE_SERVICE | host:port/services/update |
| VUE_APP_TYRAWEB_DELETE_SERVICE | host:port/services/delete |
| VUE_APP_TYRAWEB_DAY_SCHEDULES | host:port/dayschedule |
| VUE_APP_TYRAWEB_CREATE_DAY_SCHEDULE | host:port/dayschedules |
| VUE_APP_TYRAWEB_ADD_APPOINTMENT | host:port/dayschedules/add-appointment |
| VUE_APP_TYRAWEB_UPDATE_APPOINTMNETS | host:port/dayschedules/update-appointment |
| VUE_APP_PLACEHOLDER | https://via.placeholder.com/500/?text=No+Profile+Picture |

## Contributing
If you find this project usefull for your professional life, consider
making a donation.

For code contributions, please go to our [Contribution File](https://github.com/tyra-web/tyra-web/blob/master/.github/CONTRIBUTING.md)

## License
[MIT](https://mit-license.org/)
