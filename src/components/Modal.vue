<template lang='pug'>
div.modal-card( style='width: auto' )
	header.modal-card-head
		p.modal-card-title {{ title }}
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
import { EventBus } from '../eventBus.js'

export default {
	name: 'Modal',
	props: {
		title: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			status: null
		}
	},
	computed: {
		statuses(){ return this.$store.state.statuses }
	},
	methods: {
		/* So that this is not the actual 'modal' that is launched,
		 * we need to tell the actual 'modal' that it's need to be closed. */
		close(){ EventBus.$emit('close-modal') },
		/* Depending on the type of the modal, we emit the event
		 * so that the actual 'modal' can do the corresponding requests
		 * to the API. */
		send(){
			if(this.type === 'breed')
				EventBus.$emit('request-breed')
		}
	},
	created(){
		/* Event Listeners
		 *
		 * When the request is done, we listen to get the status code
		 * and set the corresponding icon. */
		EventBus.$on('status', status => { this.status = status })
	}
}
</script>
