<template>
  <div id='app'>
	<NavBar></NavBar>
	<router-view id='router'/>
	<Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'app',
	components: { NavBar, Footer },
	methods: {
		/* Redirect to LogIn page if there is no user stored */
		init(){
			if(!this.user)
				this.$router.push({ name: 'log-in' })
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

#router {
  height: 80%;
}
</style>
