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
					:value='shot'
				) {{ service.name }}
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
			)
			b-icon#error-icon(
				title='Error'
				type='is-danger'
				pack='fas'
				size='is-large'
				icon='exclamation'
			)
</template>

<script lang='js'>
import moment from 'moment'

export default {
	name: 'VaccinationForm',
	props: {
		petId: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			title: 'Add Record',
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			minDate: new Date(),
			recordApplicationDate: moment(this.minDate).format('YYYY-MM-DD'),
			recordShot: '',
			recordMedic: '',
			recordNextDate: new Date(),
			services: null
		}
	},
	methods: {
		init(){},
		close(){ this.$emit('close') },
		send(){}
	},
	created(){
		this.init()
	}
}
</script>
