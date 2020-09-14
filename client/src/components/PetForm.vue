<template>
  <form id='pet-form'>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close()></button>
	  </header>
	  <section class='modal-card-body'>
		<b-field label='Pet'
				 grouped
				 group-multiline
				 position='is-centered'>
		  <b-field label='Name'>
			<b-input type='text'
					 v-model='petName'
					 required></b-input>
		  </b-field>
		  <b-field label='Birthday'>
			<b-datepicker v-model='petBirthday'
						  :max-date='maxDate'>
			</b-datepicker>
		  </b-field>
		  <b-field label='Age'>
			<b-input type='tel'
					 v-model='petAge'
					 min='0'
					 maxlength='2'></b-input>
		  </b-field>
		  <b-field label='Weighht'>
			<b-input type='number'
					 v-model='petWeight'
					 min='0'
					 maxlength='4'></b-input>
		  </b-field>
		  <b-field label='Breed'>
			<b-select v-model='petBreed'
					  required>
			  <option v-for='(breed, index) in breeds'
					  :key=index
					  :value='breed'>
				{{ breed.name }}
			  </option>
			</b-select>
		  </b-field>
		</b-field>
	  </section>
	  <footer class='modal-card-foot'>
		<button class='button'
				type='button'
				@click=close()>
		  Cancel
		</button>
		<b-button class='button is-success'
				  @click=send()>
		  Accept
		</b-button>
	  </footer>
	</div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
	name: 'PetForm',
	props: {
		id: String
	},
	data(){
		return{
			title: 'Add Pet',
			breeds: [],
			petName: '',
			petAge: null,
			petWeight: null,
			petBirthday: null,
			petBreed: '',
			maxDate: new Date()
		}
	},
	watch: {
		petBirthday: function(){
			this.calculageAge(this.petBirthday)
		}
	},
	methods: {
		init(){
			this.getBreeds()
		},
		close(){
			this.$emit('close')
		},
		calculateAge(date){
			const today = new Date()
			this.petAge = today.getFullYear() - date.getFullYear()
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
		},
		send(){
			axios.post(process.env.VUE_APP_TYRAWEB_ADD_PET, {
				/* Client */
				id: this.id,
				/* Pet */
				petName: this.petName,
				petBirthday: this.petBirthday,
				petAge: this.petAge,
				petWeight: this.petWeight,
				petBreed: this.petBreed
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				console.log(response)
			}).catch(error => {
				console.log(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>
