import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null,
		config: null,
		sideBarOpen: true,
		today: new Date(new Date().setHours(0, 0, 0, 0)),
		statuses: {
			OK: 200,
			CREATED: 201,
			AUTH: 401,
			NOT_FOUND: 404,
			ERROR: 406
		},
		winWidth: window.innerWidth
	},
	mutations: {
		fillUser(state, user){
			state.user = {
				_id: user._id,
				username: user.username,
				type: user.type,
				token: user.token
			}
		},
		logOutUser(state){
			state.user = null
		},
		changeSideBarState(state){
			if(state.sideBarOpen)
				state.sideBarOpen = false
			else if(!state.sideBarOpen)
				state.sideBarOpen = true
		},
		fillConfig(state, config){
			state.config = {
				vetName: config.vetName,
				vetAddress: {
					street: config.vetAddress.street,
					number: config.vetAddress.number,
					intNumber: config.vetAddress.intNumber,
					zipCode: config.vetAddress.zipCode,
					stateOrProvince: config.vetAddress.stateOrProvince,
					country: config.vetAddress.country
				},
				vetLogo: config.vetLogo,
				vetHeadOfMedics: {
					name: config.vetHeadOfMedics.name,
					code: config.vetHeadOfMedics.code
				}
			}
		}
	}
})

export default store
