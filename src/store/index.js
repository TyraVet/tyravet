import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null,
		sideBarOpen: true,
		today: new Date(new Date().setHours(0, 0, 0, 0)),
		status: {
			OK: 200,
			CREATED: 201,
			AUTH: 401,
			NOT_FOUND: 404,
			ERROR: 406
		}
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
		}
	}
})

export default store
