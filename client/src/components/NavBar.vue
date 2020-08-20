<template>
  <div class='navbar'>
	<b-button type='is-primary'
			  icon-pack='fas'
			  icon-left='bars'
			  @click=openSideBar()
			  v-if='user'>
	  {{ menu }}
	</b-button>
	<h1 class='is-size-3'>{{ title }}</h1>
	<SideBar v-if='user'></SideBar>
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
			menu: 'Menu',
			sideBarOpen: false
		}
	},
	methods: {
		openSideBar() {
			this.sideBarOpen = true
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
