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
		b-button.button.is-success(
			@click='send()'
		) {{ labelButtonAccept }}
</template>

<script lang='js'>
import axios from 'axios'

export default {
	name: 'Configuration',
	data(){
		return{
			title: 'Configuration',
			labelButtonAccept: 'Accept',
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
	methods: {
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
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				console.log(response)
			}).catch(error => {
				console.error(error)
			})
		}
	}
}
</script>

<style lang='css' scoped>
@import '../assets/css/titles.css';
@import '../assets/css/configuration-form.css';
</style>
