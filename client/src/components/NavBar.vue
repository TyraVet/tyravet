<template>
  <div class='navbar has-background-primary-dark'>
	<b-button type='is-primary'
			  icon-pack='fas'
			  icon-left='bars'
			  @click=changeSideBarState()
			  v-if='user'>
	  {{ menu }}
	</b-button>
	<SideBar v-if='user'></SideBar>
	<h1 class='is-size-3 has-text-primary-light'>{{ title }}</h1>
  </div>
</template>

<script>
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
