<template>
  <div class='breed-list'>
	<b-table :data='breeds' :bordered='isBordered'>
	  <b-table-column field='name' label='Name' v-slot='props'>
		{{ props.row.name }}
	  </b-table-column>
	</b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'BreedList',
	data() {
		return {
			breeds: [],
			isBordered: true
		}
	},
	methods: {
		init(){
			this.getBreeds()
		},
		getBreeds(){
			axios.get(process.env.VUE_APP_TYRAWEB_BREEDS, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then((response) => {
				this.breeds = response.data
			}).catch((error) => {
				console.error(error)
			})
		}
	},
	mounted(){
		this.init()
	}
}
</script>
