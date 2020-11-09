<template lang='pug'>
div.modal-card( style='width: auto' )
	header.modal-card-head
		p.modal-card-title {{ title }}
		button(
			type='button'
			class='delete'
			@click='close()'
		)
	main.modal-card-body
		slot( name='main' )
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
import { EventBus } from '../eventBus.js'

export default {
	name: 'Modal',
	props: {
		title: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept'
		}
	},
	methods: {
		close(){
			this.$emit('close')
		},
		send(){ EventBus.$emit('api-request-breed') }
	}
}
</script>
