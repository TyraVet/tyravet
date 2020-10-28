<template lang='pug'>
form#vaccination-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
			)
		section.modal-card-body
			b-field#vaccination-label-application-date(
				label='Application Date'
			)
			b-datepicker#vaccination-datepicker-application-date(
				inline
				required
				v-model='recordApplicationDate'
				:min-date='recordApplicationDate'
				:max-date='recordApplicationDate'
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
			b-field#vaccination-label-next-date( label='Next Date' )
			b-datepicker#vaccination-datepicker-next-date(
				inline
				required
				v-model='recordNextDate'
				:min-date='recordApplicationDate'
			)
		footer.modal-card-foot
			button.button(
				type='button'
			) {{ labelButtonCancel }}
			b-button.button.is-success() {{ labelButtonAccept }}
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
			recordApplicationDate: new Date(),
			recordShot: '',
			recordMedic: '',
			recordNextDate: new Date(),
			services: null
		}
	}
}
</script>
