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
				if(this.$router)
					this.$router.push('/log-in')
		}
	},
	mounted(){
		this.init()
	},
	computed: {
		user(){
			if(this.$store)
				return this.$store.state.user
			else
				return null
		}
	}
}
</script>
