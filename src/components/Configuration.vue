<template lang='pug'>
section#configuration
	span.title-container
		h1#configuration-title.is-size-4.has-text-primary-dark {{ title }}
	form#configuration-form
		b-field#label-vet-name( label='Veterinary Name' )
		b-input#input-vet-name(
			v-model='vetName'
			type='text'
			maxlength='20'
		)
		b-field#section-address.flex-vertical(
			label='Address'
			grouped
			group-multiline
			position='is-centered'
		)
			b-field#label-street( label='Street' )
			b-input#input-street(
				v-model='street'
				type='text'
				maxlength='50'
			)
			b-field#label-number( label='Number' )
			b-input#input-number(
				v-model='number'
				type='phone-number'
				maxlength='5'
			)
			b-field#label-int-number( label='Internal Number' )
			b-input#input-int-number(
				v-model='intNumber'
				type='phone-number'
				maxlength='5'
			)
			b-field#label-zip-code( label='Zip Code' )
			b-input#input-zip-code(
				v-model='zipCode'
				type='phone-number'
				maxlength='6'
			)
			b-field#label-state-or-province( label='State/Province' )
			b-input#input-state-or-province(
				v-model='stateOrProvince'
				type='text'
				maxlength='20'
			)
			b-field#label-country( label='Country' )
			b-input#input-country(
				v-model='country'
				type='text'
				maxlength='20'
			)
		b-field#label-vet-logo( label='Veterinary Logo' )
		b-field#section-head-of-medics.flex-vertical(
			label='Veterinarian Head of Medics'
			grouped
			group-multiline
			position='is-centered'
		)
			b-field#label-name( label='Name' )
			b-input#input-name(
				v-model='name'
				type='text'
				maxlength='50'
			)
			b-field#label-code( label='Code' )
			b-input#input-code(
				v-model='code'
				type='text'
				maxlength='30'
			)
		span#button-container
			b-button.button.is-success(
				@click='send()'
			) {{ labelButtonAccept }}
			b-icon#success-icon(
				title='Success'
				type='is-success'
				pack='fas'
				size='is-large'
				icon='check'
				v-if='status === OK || status === CREATED'
			)
			b-icon#error-icon(
				title='Error'
				type='is-danger'
				pack='fas'
				size='is-large'
				icon='exclamation'
				v-if='status === AUTH || status === NOT_FOUND || status === ERROR'
			)
</template>

<script lang='js'>
import axios from 'axios'

export const OK = 200
export const CREATED = 201
export const AUTH = 401
export const NOT_FOUND = 404
export const ERROR = 406

export default {
	name: 'Configuration',
	data(){
		return{
			OK,
			CREATED,
			AUTH,
			NOT_FOUND,
			ERROR,
			title: 'Configuration',
			labelButtonAccept: 'Accept',
			status: null,
			vetName: '',
			street: '',
			number: 0,
			intNumber: 0,
			zipCode: 0,
			stateOrProvince: '',
			country: '',
			vetLogo: '',
			name: '',
			code: ''
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	methods: {
		init(){ this.getSetup() },
		getSetup(){
			axios.get(process.env.VUE_APP_TYRAWEB_GET_CONFIG, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				console.error(error)
			})
		},
		send(){
			axios.post(process.env.VUE_APP_TYRAWEB_CONFIG, {
				vetName: this.vetName,
				street: this.street,
				number: this.number,
				intNumber: this.intNumber,
				zipCode: this.zipCode,
				stateOfProvince: this.stateOrProvince,
				country: this.country,
				vetLogo: this.vetLogo,
				name: this.name,
				code: this.code
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				console.log(response)
			}).catch(error => {
				console.error(error)
			})
		},
		setOnSuccess(response){
			const data = response.data
			this.status = response.status

			this.vetName = data.vetName
			this.street = data.vetAddress.street
			this.number = data.vetAddress.number
			this.intNumber = data.vetAddress.intNumber
			this.zipCode = data.vetAddress.zipCode
			this.stateOrProvince = data.vetAddress.stateOrProvince
			this.country = data.vetAddress.country
			this.vetLogo = data.vetLogo
			this.name = data.vetHeadOfMedics.name
			this.code = data.vetHeadOfMedics.code
		}
	},
	created(){
		this.init()
	}
}
</script>

<style lang='css' scoped>
@import '../assets/css/titles.css';
@import '../assets/css/configuration-form.css';
</style>
