<template>
  <div class='pick-date'>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
		<b-field label='Select Date'>
		  <b-datepicker v-model='date'
						trap-focus>
		  </b-datepicker>
		</b-field>
	  </section>
	  <footer class='modal-card-foot'>
		<button class='button'
				type='button'
				@click=close()>
		  Cancel
		</button>
		<b-button class='button is-success'
				@click=send()>
		  Accept
		</b-button>
	  </footer>
	</div>
  </div>
</template>

<script>
export default {
	name: 'PickDate',
	data() {
		return {
			title: 'Select Date',
			date: null
		}
	},
	methods: {
		close(){
			this.$emit('close')
		}
	}
}
</script>
