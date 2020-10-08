<template lang='pug'>
section#delete-confirmation.modal-card( style: 'width: auto' )
	header.modal-card-head
		p.modal-card-title(
			:title='title'
		) {{ title }}
		button.delete(
			title='Close'
			type='button',
			@click='close()'
		)
	section.modal-card-body
		h1#message.is-size-4.has-text-danger(
			:title='danger'
			style='margin: auto; width: 80%;'
		) {{ danger }}
	footer.modal-card-foot
		button.button(
			:title='labelButtonCancel'
			type='button'
			@click='close()'
		) {{ labelButtonCancel }}
		b-button.button.is-danger(
			:title='labelButtonAccept'
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
			v-if='status === 401 || status === 403 || status === 404'
		)
</template>

<script lang='js'>
import axios from 'axios'

export default {
	name: 'DeleteConfirmation',
	props: {
		type: {
			type: String,
			required: true
		},
		objectId: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			status: 0,
			title: 'Delete Confirmation',
			danger: 'Are you sure you want to delete this item? Proceed with caution.',
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept'
		}
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	methods: {
		/* Close the modal through emitting the event. */
		close(){
			this.$emit('close')
		},
		send(){
			if(this.type === 'service')
				this.deleteService()
		},
		/* Set Success status to show check icon. */
		setOnSuccess(response){
			this.status = response.status
		},
		/* Set Error status to show warning icon. */
		setOnError(error){
			this.status = error.response.status
		},
		deleteService(){
			axios.get(process.env.VUE_APP_TYRAWEB_DELETE_SERVICE, {
				params: {
					id: this.objectId
				},
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		}
	}
}
</script>
