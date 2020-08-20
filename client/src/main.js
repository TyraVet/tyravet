import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import './variables.scss'
import './assets/css/no-margin-nor-padding.css'

Vue.use(Vuex)
Vue.use(Buefy, {
	defaultIconPack: 'fas'
})

Vue.config.productionTip = false

const store = new Vuex.Store({
	state: {
		user: null
	},
	mutations: {
		fillUser(state, user){
			state.user = {
				_id: user._id,
				username: user.username,
				token: user.token
			}
		}
	}
})

new Vue({
	store: store,
	router: router,
	render: h => h(App)
}).$mount('#app')
