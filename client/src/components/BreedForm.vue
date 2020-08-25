<template>
  <form>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>Create Breed</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
		   <b-field label='Name'>
			 <b-input type='text'
					  :value='name'
					  required>
			 </b-input>
		   </b-field>
	  </section>
	  <footer class='modal-card-foot'>
		<button class='button'
				type='button'
				@click=close()>
		  Cancel
		</button>
		<button class='button is-success'>
		  Accept
		</button>
	  </footer>
	</div>
  </form>
</template>

<script>
export default {
	name: 'BreedForm',
	data() {
		return {
			name: ''
		}
	},
	methods: {
		close(){
			this.$emit('close')
		}
	}
}
</script>
