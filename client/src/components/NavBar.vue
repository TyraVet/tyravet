<template>
  <div class='navbar has-background-primary-dark'>
	<b-button title='Menu'
			  type='is-primary'
			  icon-pack='fas'
			  icon-left='bars'
			  @click=changeSideBarState()
			  v-if='user'>
	  {{ menu }}
	</b-button>
	<SideBar v-if='user'></SideBar>
	<h1 title='Title'
		class='is-size-3 has-text-primary-white'>
	  {{ title }}
	</h1>
  </div>
</template>

<script lang='js'>
import SideBar from '@/components/SideBar.vue'

export default {
	name: 'NavBar',
	components: { SideBar },
	data() {
		return {
			title: 'Tyra Web',
			menu: 'Menu'
		}
	},
	methods: {
		changeSideBarState(){
			this.$store.commit('changeSideBarState')
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	}
}
</script>

<style>
@import '../assets/css/navbar.css'
</style>
