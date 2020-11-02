import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import PetForm from '@/components/PetForm.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
};

const wrapper = shallowMount(PetForm, { store, localVue });

describe('Pet Form', () => {
	const data = PetForm.data();
	it('Shoudl set the correct default data', () => {
		expect(typeof PetForm.data).toBe('function');
		expect(data.OK).toBe(201);
		expect(data.ERROR).toBe(403);
		expect(data.SERVER_ERROR).toBe(500);
		expect(data.FEMALE).toMatch('Female');
		expect(data.MALE).toMatch('Male');
		expect(data.title).toMatch('Add Pet');
		expect(data.breeds).toEqual(expect.arrayContaining([]));
		expect(data.petName).toMatch('');
		expect(data.petAge).toBeNull();
		expect(data.petWeight).toBeNull();
		expect(data.petBirthday).toBeNull();
		expect(data.petBreed).toMatch('');
		expect(data.femaleOrMale).toBeFalsy();
	});
});
