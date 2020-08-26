<template>
  <div>
	<h1>List</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'BreedList',
	data() {
		return {
			breeds: []
		}
	},
	methods: {
		init(){
			console.log(this.$store.state.user.token)
			this.getBreeds()
		},
		getBreeds(){
			axios.get(process.env.VUE_APP_TYRAWEB_BREEDS, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then((response) => {
				console.log(response)
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
