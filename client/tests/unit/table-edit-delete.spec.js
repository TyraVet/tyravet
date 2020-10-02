import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import TableEditDelete from '@/components/TableEditDelete.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(TableEditDelete, {
	propsData: {
		id: '123',
		text: 'message'
	}, localVue })

describe('TableEditDelete Component', () => {
	const props = wrapper.props()
	it('Should has two props data', () => {
		expect(typeof props.id).toBe('string')
		expect(typeof props.text).toBe('string')
	})

	const main = wrapper.get('#table-edit-delete')
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy()
	})

	it('Should has the Text inside', () => {
		expect(main.text()).toMatch(props.text)
	})

	const buttonContainer = main.get('#button-container')
	const editButton = buttonContainer.get('#edit')
	it('Should has an Edit Button', () => {
		expect(editButton.exists()).toBeTruthy()
		expect(editButton.attributes().title).toMatch('Edit')
		expect(editButton.attributes().type).toMatch('is-warning')
		expect(editButton.attributes().iconpack).toMatch('fas')
		expect(editButton.attributes().iconleft).toMatch('edit')
		expect(editButton.classes()).toContain('has-text-dark')
	})

	const deleteButton = buttonContainer.get('#delete')
	it('Should has an Edit Button', () => {
		expect(deleteButton.exists()).toBeTruthy()
		expect(deleteButton.attributes().title).toMatch('Delete')
		expect(deleteButton.attributes().type).toMatch('is-danger')
		expect(deleteButton.attributes().iconpack).toMatch('fas')
		expect(deleteButton.attributes().iconleft).toMatch('trash-alt')
		expect(deleteButton.classes()).toContain('has-text-white')
	})
})
