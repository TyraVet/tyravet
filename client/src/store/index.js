import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null,
		sideBarOpen: false
	},
	mutations: {
		fillUser(state, user){
			state.user = {
				_id: user._id,
				username: user.username,
				token: user.token
			}
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
