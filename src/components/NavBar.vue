<template lang='pug'>
div.navbar.has-background-primary-dark
	b-button(
		title='Menu'
		type='is-primary'
		icon-pack='fas'
		icon-left='bars'
		@click='changeSideBarState()'
	) {{ menu }}
	h1.is-size-3.has-text-primary-white(
		title='Title'
	) {{ title }}
	SideBar( :isMobile='mobile' )
</template>

<script lang='js'>
import { EventBus } from '@/eventBus.js'
import SideBar from '@/components/SideBar.vue'

export default {
	name: 'NavBar',
	components: { SideBar },
	data() {
		return {
			title: 'Tyra Web',
			menu: 'Menu',
			mobile: true
		}
	},
	computed: {
		config(){ return this.$store.state.config }
	},
	methods: {
		init(){ if(this.config) this.title = this.config.vetName },
		changeSideBarState(){ this.$store.commit('changeSideBarState') }
	},
	created(){
		/* Event Listeners
		 *
		 * Listens when the config object is updated. Then
		 * it updates the app title. */
		EventBus.$on('update-config', () => {
			this.title = this.config.vetName
		})
	},
	mounted(){
		this.init()
	}
}
</script>

<style scoped>
@import '../assets/css/navbar.css'
</style>
