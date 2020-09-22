<template>
  <div class='pet-profile'>
	<section id='pet-header'>
	  <section id='pet-profile-picture-container'>
		<img class='pet-profile-picture'
			 :src='placeholder'>
		<b-field class="file is-primary" :class="{'has-name': !!file}">
		  <b-upload v-model="file" class="file-label">
			<span class="file-cta">
			  <b-icon class="file-icon" icon="upload"></b-icon>
			  <span class="file-label">Click to upload</span>
			</span>
			<span class="file-name" v-if="file">
			  {{ file.name }}
			</span>
		  </b-upload>
		</b-field>
	  </section>
	  <section id='pet-info'>
		<h1 class='is-size-2'>
		  {{ pet.name }}
		</h1>
		<h3 class='is-size-4'>
		  {{ pet.breed.name }}
		</h3>
		<hr/>
		<section id='owner-info'>
		  <h4 class='is-size-5'>
			{{ owner.name }}<br/>
			{{ owner.phone }}<br/>
			{{ owner.address.street }}
			#{{ owner.address.number }},
			P.C. {{ owner.address.postalCode }}
		  </h4>
		</section>
	  </section>
	</section>
	<section id='vaccination-record'>
	  Vaccination Record
	</section>
	<section id='medical-record'>
	  Medical Record
	</section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'PetProfile',
	props: {
		id: String
	},
	data(){
		return{
			placeholder: process.env.VUE_APP_PLACEHOLDER,
			pet: {
				name: '',
				breed: {
					name: ''
				}
			},
			owner: {
				name: '',
				phone: '',
				address: {
					street: '',
					number: '',
					postalCode: ''
				}
			}
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	methods: {
		getPet(){
			axios.get(process.env.VUE_APP_TYRAWEB_PET, {
				params: {
					id: this.id
				},
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.pet = response.data
				this.getOwner()
			}).catch(error => {
				console.error(error)
			})
		},
		getOwner(){
			axios.get(process.env.VUE_APP_TYRAWEB_CLIENT, {
				params: {
					id: this.pet.owner
				},
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.owner = response.data
			}).catch(error => {
				console.error(error)
			})
		}
	},
	created(){
		this.getPet()
	}
}
</script>

<style scoped>
@import '../assets/css/pet-profile.css'
</style>
