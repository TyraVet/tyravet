<template lang='pug'>
div#app
	NavBar( v-if='user && navbar' )#nav-bar
	SideBar( v-if='user && sidebar' )#side-bar
	router-view#router
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '@/eventBus.js'
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
	name: 'app',
	components: { NavBar, SideBar },
	data() {
		return {
			navbar: false,
			sidebar: false,
			status: 0,
			error: ''
		}
	},
	computed: {
		user(){ return this.$store.state.user },
		statuses(){ return this.$store.state.statuses },
		config(){ return this.$store.state.config },
		winWidth(){ return this.$store.state.winWidth }
	},
	methods: {
		/* Redirect to LogIn page if there is no user stored */
		init(){
			if(!this.$cookies.get('user'))
				this.$router.replace({ name: 'log-in' }).catch(() => {})
			else
				this.fillUserFromCookies()

			if(this.winWidth >= 900)
				this.sidebar = true
			else
				this.navbar = true
		},
		setUserOnSuccess(response, user){
			this.status = response.status

			if(this.status === this.statuses.OK){
				this.$store.commit('fillUser', user)
				this.getSetup()
			}
		},
		setConfigOnSuccess(response){
			this.status = response.status

			/* Once we get our config object we emit an event
			 * to tell our SideBar component that it needs to change
			 * the app title. */
			if(this.status === this.statuses.OK){
				this.$store.commit('fillConfig', response.data)
				EventBus.$emit('update-config')
			}
		},
		setOnError(error){
			if(error.response){
				this.status = error.response.status
				this.error = error.response.statusText
			}else if(error.request){
				this.error = error.request
			}else{
				this.error = error.message
			}
			console.error(this.error)

			/* Redirect to LogIn if any error occurs */
			this.$router.replace({ name: 'log-in' }).catch(() => {})
		},
		fillUserFromCookies(){
			const user = {
				_id: this.$cookies.get('user')._id,
				username: this.$cookies.get('user').username,
				type: this.$cookies.get('user').type,
				token: this.$cookies.get('user').token
			}

			this.validateUser(user)
		},
		/* POST request to our API
		 * To check if the User from the cookies exists in the
		 * database. */
		validateUser(user){
			axios.get(process.env.VUE_APP_TYRAWEB_FIND_USER, {
				params: {
					id: user._id
				},
				headers: {
					Authorization: 'Bearer ' + user.token
				}
			}).then((response) => {
				this.setUserOnSuccess(response, user)
			}).catch((error) => {
				this.setOnError(error)
			})
		},
		getSetup(){
			axios.get(process.env.VUE_APP_TYRAWEB_GET_CONFIG, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setConfigOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>

<style lang='css'>
@import 'assets/css/app.css';
</style>
