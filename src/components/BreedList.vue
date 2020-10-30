<template lang='pug'>
div#breed-list
	b-table(
		:data='breeds'
		:bordered='isBordered'
		:mobile-cards='hasMobileCards'
	)
		b-table-column(
			field='name'
			label='Name'
			v-slot='props'
		)
			TableEditDelete(
				:text='props.row.name'
				:id='props.row._id'
				:type='"breed"'
			)
</template>

<script lang='js'>
import axios from 'axios'
import TableEditDelete from '@/components/TableEditDelete.vue'
import { EventBus } from '../eventBus.js'

export default {
	name: 'BreedList',
	components: { TableEditDelete },
	data() {
		return {
			breeds: [],
			isBordered: true,
			hasMobileCards: false
		}
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	methods: {
		init(){
			this.getBreeds()
		},
		getBreeds(){
			axios.get(process.env.VUE_APP_TYRAWEB_BREEDS, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.breeds = response.data
			}).catch((error) => {
				console.error(error)
			})
		}
	},
	created(){
		this.init()

		/* Event Listeners */

		/* When a breed is created, updated or deleted, fetch
		 * the breeds again to render to updated list. */
		EventBus.$on('update-breeds', () => {
			this.getBreeds()
		})
	}
}
</script>
