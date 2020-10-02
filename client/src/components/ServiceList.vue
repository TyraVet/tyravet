<template>
  <div id='service-list'>
	<b-table :data='services'
			 :bordered='isBordered'
			 :mobile-cards='hasMobileCards'>
	  <b-table-column id='name-column'
					  searchable
					  field='name'
					  label='Name'
					  v-slot='props'>
		{{ props.row.name }}
	  </b-table-column>
	  <b-table-column id='price-column'
					  field='price'
					  label='Price'
					  v-slot='props'>
		$ {{ props.row.price }}.00
	  </b-table-column>
	</b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ServiceList',
	data() {
		return {
			services: [],
			isBordered: true,
			hasMobileCards: false
		}
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	methods: {
		init(){
			this.getServices()
		},
		getServices(){
			axios.get(process.env.VUE_APP_TYRAWEB_SERVICES, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.services = response.data
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
