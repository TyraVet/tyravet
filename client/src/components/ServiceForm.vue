<template lang='pug'>
form#service-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
				@click='close()'
			)
		section.modal-card-body
			b-field( label='Name' )
			b-input(
				type='text'
				v-model='serviceName',
				required
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
				v-if='status === 201 || status === 200'
			)
			b-icon#error-icon(
				title='Error'
				type='is-danger'
				pack='fas'
				size='is-large'
				icon='exclamation'
				v-if='status === 401 || status === 404'
			)
</template>

<script lang='js'>
export default {
	name: 'ServiceForm',
	props: {
		serviceId: {
			type: String,
			default: '',
			required: false
		}
	},
	data(){
		return{
			title: '',
			serviceName: '',
			servicePrice: 0,
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			status: 0
		}
	}
}
</script>
