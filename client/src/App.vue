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
			if(!this.user)
				this.$router.push('/log-in')
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

<style scoped>
#app {
  height: 100%;
}

#router {
  height: 80%;
}
</style>
