<template>
  <section id='table-edit-delete'>
	{{ text }}
	<b-button id='edit'
			  title='Edit'
			  type='is-warning'
			  icon-pack='fas'
			  icon-left='edit'
			  class='has-text-dark'></b-button>
	<b-button id='delete'
			  title='Delete'
			  type='is-danger'
			  icon-pack='fas'
			  icon-left='trash-alt'
			  class='has-text-white'></b-button>
  </section>
</template>

<script>
export default {
	name: 'TableEditDelete',
	props: {
		id: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
@import '../assets/css/table-edit-delete.css'
</style>
