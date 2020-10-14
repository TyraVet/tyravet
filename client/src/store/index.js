import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null,
		sideBarOpen: false,
		today: new Date(new Date().setHours(0, 0, 0, 0))
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
