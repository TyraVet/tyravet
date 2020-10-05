<template>
  <div id='breed-list'>
	<b-table :data='breeds'
			 :bordered='isBordered'
			 :mobile-cards='hasMobileCards'>
	  <b-table-column field='name'
					  label='Name'
					  v-slot='props'>
		<TableEditDelete :text='props.row.name' :id='props.row._id' :type='"breed"'>
		</TableEditDelete>
	  </b-table-column>
	</b-table>
  </div>
</template>

<script lang='js'>
import TableEditDelete from '@/components/TableEditDelete.vue'
import axios from 'axios'

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
	}
}
</script>
