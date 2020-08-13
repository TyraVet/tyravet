<template>
  <div class='navbar'>
	<b-button type='is-primary'
			  icon-pack='fas'
			  icon-left='bars'
			  @click=openSideBar()>
	  {{ menu }}
	</b-button>
	<h1 class='is-size-3'>{{ title }}</h1>
	<SideBar v-if='user'></SideBar>
  </div>
</template>

<script>
import SideBar from '@/components/NavBar.vue'

export default {
	name: 'NavBar',
	components: { SideBar },
	data() {
		return {
			title: 'Tyra Web',
			menu: 'Menu',
			user: null
		}
	},
	methods: {
		openSideBar() {
			alert('Hi')
		}
	}
}
</script>

<style>
@import '../assets/css/navbar.css'
</style>
