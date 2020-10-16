<template lang='pug'>
div#pet-profile
	section#pet-header
		section#pet-profile-picture-container
			img#pet-profile-picture(
				:src='placeholder'
			)
			b-field.file.is-primary(
				name='picture'
				native
				:class="{'has-name': !!file}"
			)
				b-upload.file-label( v-model='file' )
					span.file-cta
						b-icon.file-icon( icon='upload' )
						span.file-label(
							title='Upload Picture'
						) Click to upload
		section#pet-info
			h1.is-size-2 {{ pet.name }}
			h3.is-size-4 {{ pet.breed.name }}
			hr
			section#owner-info
				h4.is-size-5
					| {{ owner.name }}
					br
					| {{ owner.phone }}
					br
					| {{ owner.address.street }}
					| {{ owner.address.number }}
					br
					| P.C. {{ owner.address.postalCode }}
	VaccinationRecord
	MedicalRecord
</template>

<script lang='js'>
import VaccinationRecord from './VaccinationRecord.vue'
import MedicalRecord from './MedicalRecord.vue'
import axios from 'axios'

export default {
	name: 'PetProfile',
	components: { VaccinationRecord, MedicalRecord },
	props: {
		id: String
	},
	data(){
		return{
			placeholder: process.env.VUE_APP_PLACEHOLDER,
			file: null,
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
	watch: {
		/* We need a FormData object to send files over requests
		 * so we append our image to that object to send it. */
		file: function(){
			const formData = new FormData()
			formData.append('picture', this.file, this.file.name)
			this.sendPicture(formData)
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
		},
		sendPicture(picture){
			axios.post(process.env.VUE_APP_TYRAWEB_PET_ADD_PICTURE, picture, {
				headers: {
					Authorization: 'Bearer ' + this.user.token,
					'Content-Type': 'multipart/form-data'
				}
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
