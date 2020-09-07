<template>
  <div id='app'>
	<NavBar></NavBar>
	<router-view id='router'/>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'

export default {
	name: 'app',
	components: { NavBar },
	data() {
		return {
			status: '',
			error: ''
		}
	},
	methods: {
		/* Redirect to LogIn page if there is no user stored */
		init(){
			if(!this.$cookies.get('user'))
				this.$router.push({ name: 'log-in' }).catch(() => {})
			else
				this.fillUserFromCookies()
		},
		setOnSuccess(response){
			this.status = response.status
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
		/* POST request to out API
		 * To check if the User from the cookies exists in the
		 * database. */
		validateUser(user){
			axios.post(process.env.VUE_APP_TYRAWEB_FIND_USER, {
				_id: user._id
			}, {
				headers: {
					Authorization: 'Bearer ' + user.token
				}
			}).then((response) => {
				this.setOnSuccess(response)

				if(this.status === 200)
					this.$store.commit('fillUser', user)
			}).catch((error) => {
				this.setOnError(error)
				/* Redirect to LogIn if any error occurs */
				this.$router.push({ name: 'log-in' }).catch(() => {})
			})
		}
	},
	created(){
		this.init()
	},
	computed: {
		user(){
			return this.$store.state.user
		},
		today(){
			return this.$store.state.today
		}
	}
}
</script>

<style lang='css' scoped>
#app {
  height: 100%;
}
</style>
