<template lang='pug'>
form#vaccination-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
				@click='close()'
			)
		section.modal-card-body
			b-field#vaccination-label-application-date-title(
				label='Application Date'
			)
			b-field#vaccination-label-application-date(
				:label='recordApplicationDate'
			)
			b-field#vaccination-label-shot( label='Shot' )
			b-select#vaccination-select-shot(
				required
				v-model='recordShot'
			)
				option(
					v-for='(shot, index) in services'
					:key='index'
					:value='shot.name'
				) {{ shot.name }}
			b-field#vaccination-label-next-date(
				label='Next Application Date'
			)
			b-datepicker#vaccination-datepicker-next-date(
				inline
				required
				v-model='recordNextDate'
				:min-date='minDate'
			)
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) {{ labelButtonCancel }}
			b-button.button.is-success(
				@click='send()'
			) {{ labelButtonAccept }}
			b-icon#success-icon(
				title='Success'
				type='is-success'
				pack='fas'
				size='is-large'
				icon='check'
				v-if='status === CREATED'
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
import moment from 'moment'
import axios from 'axios'

export const CREATED = 201
export const AUTH = 401
export const NOT_FOUND = 404
export const ERROR = 406

export default {
	name: 'VaccinationForm',
	props: {
		petId: {
			type: String,
			required: true
		},
		records: {
			type: Array,
			required: true
		}
	},
	data(){
		return{
			CREATED,
			AUTH,
			NOT_FOUND,
			ERROR,
			title: 'Add Record',
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			minDate: new Date(),
			recordApplicationDate: moment(this.minDate).format('YYYY-MM-DD'),
			recordShot: '',
			recordNextDate: new Date(),
			services: null,
			status: null
		}
	},
	methods: {
		/* Init method to fetch from the API the shots. */
		init(){ this.getShots() },
		/* Close the modal through emitting the event. */
		close(){ this.$emit('close') },
		/* POST request to store the vaccination record in the pet. */
		send(){
			axios.post(process.env.VUE_APP_TYRAWEB_PET_ADD_VACCINATION_RECORD, {
				id: this.petId,
				applicationDate: this.$store.state.today,
				shot: this.recordShot,
				medic: this.$store.state.user.username,
				nextApplicationDate: moment(this.recordNextDate).format('YYYY-MM-DD'),
				vaccinationRecords: this.records
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				console.log(response)
			}).catch(error => {
				console.error(error)
			})
		},
		/* GET request to get the vaccination services (shots). */
		getShots(){
			axios.get(process.env.VUE_APP_TYRAWEB_VACCINATION_SERVICES, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				this.services = response.data
			}).catch(error => {
				console.error(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>
