<template>
  <div class='pet-list'>
	<span v-if='pets.length > 0'>
	  <b-table :data='pets'
			   :bordered='isBordered'
			   :mobile-cards='hasMobileCards'>
		<b-table-column field='name'
						label='Name'
						searchable
						v-slot='props'>
			<b-button title='Go Pet Profile'
					  class='button-pet'
					  type='is-primary-light'
					  @click=goPetProfile(props.row._id)>
			  {{ props.row.name }}
			</b-button>
		</b-table-column>
		<b-table-column field='breed'
						label='Breed'
						v-slot='props'>
			  {{ props.row.breed.name }}
		</b-table-column>
	  </b-table>
	</span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'PetsList',
	data(){
		return{
			pets: [],
			isBordered: true,
			hasMobileCards: false
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	methods: {
		init(){
			this.getPets()
		},
		setOnSuccess(res){
			this.pets = res.data
		},
		getPets(){
			axios.get(process.env.VUE_APP_TYRAWEB_PETS, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.setOnSuccess(response)
			}).catch((error) => {
				console.error(error)
			})
		},
		goPetProfile(id){
			this.$router.push({ name: 'pet', params: { id } })
		}
	},
	created() {
		this.init()
	}
}
</script>
