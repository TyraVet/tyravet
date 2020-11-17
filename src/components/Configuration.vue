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
				v-if='status === statuses.OK || status === statuses.CREATED'
			)
			b-icon#error-icon(
				title='Error'
				type='is-danger'
				pack='fas'
				size='is-large'
				icon='exclamation'
				v-if='status === statuses.AUTH || status === statuses.NOT_FOUND || status === statuses.ERROR'
			)
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '@/eventBus.js'

export default {
	name: 'Configuration',
	data(){
		return{
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
		user(){ return this.$store.state.user },
		config(){ return this.$store.state.config },
		statuses(){ return this.$store.state.statuses }
	},
	methods: {
		init(){ this.setConfigFromStore() },
		setConfigFromStore(){
			this.vetName = this.config.vetName
			this.street = this.config.vetAddress.street
			this.number = this.config.vetAddress.number
			this.intNumber = this.config.vetAddress.intNumber
			this.zipCode = this.config.vetAddress.zipCode
			this.stateOrProvince = this.config.vetAddress.stateOfProvince
			this.country = this.config.vetAddress.country
			this.vetLogo = this.config.vetLogo
			this.name = this.config.vetHeadOfMedics.name
			this.code = this.config.vetHeadOfMedics.code
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
				this.setConfigOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		},
		setConfigOnSuccess(response){
			this.status = response.status

			/* Once we get our config object we emit an event
			 * to tell our SideBar component that it needs to change
			 * the app title. */
			if(this.status === this.statuses.OK){
				this.$store.commit('fillConfig', response.data)
				EventBus.$emit('update-config')
			}
		},
		setOnError(error){
			if(error.response)
				this.status = error.response.status

			console.error(error)
		}
	},
	mounted(){
		this.init()
	}
}
</script>

<style lang='css' scoped>
@import '../assets/css/titles.css';
@import '../assets/css/configuration-form.css';
</style>
