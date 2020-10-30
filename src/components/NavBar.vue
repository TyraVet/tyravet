<template lang='pug'>
div.navbar.has-background-primary-dark
	b-button(
		title='Menu'
		type='is-primary'
		icon-pack='fas'
		icon-left='bars'
		@click='changeSideBarState()'
		v-if='user'
	) {{ menu }}
	SideBar( v-if='user' )
	h1.is-size-3.has-text-primary-white(
		title='Title'
	) {{ title }}
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
