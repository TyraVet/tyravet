<template>
  <div id='app'>
	<NavBar></NavBar>
	<router-view id='router'/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
	name: 'app',
	components: { NavBar },
	methods: {
		/* Redirect to LogIn page if there is no user stored */
		init(){
			if(!this.$cookies.get('user'))
				this.$router.push({ name: 'log-in' }).catch(() => {})
			else
				this.fillUserFromCookies()
		},
		fillUserFromCookies(){
			const user = {
				_id: this.$cookies.get('user')._id,
				username: this.$cookies.get('user').username,
				type: this.$cookies.get('user').type,
				token: this.$cookies.get('user').token
			}
			this.$store.commit('fillUser', user)
		}
	},
	mounted(){
		this.init()
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	}
}
</script>

<style lang='css' scoped>
#app {
  height: 100%;
}
</style>
