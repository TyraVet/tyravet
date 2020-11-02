import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import ClientForm from '@/components/ClientForm.vue';

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
};

const wrapper = shallowMount(ClientForm, { store, localVue });

describe('ClientForm Component', () => {
	const data = ClientForm.data();
	it('Set the correct default data', () => {
		expect(typeof ClientForm.data).toBe('function');
		expect(data.OK).toBe(201);
		expect(data.FEMALE).toMatch('Female');
		expect(data.MALE).toMatch('Male');
		expect(data.clientName).toMatch('');
		expect(data.clientAddressStreet).toMatch('');
		expect(data.clientAddressNumber).toBeNull();
		expect(data.clientAddressIntNumber).toBeNull();
		expect(data.clientAddressPostalCode).toBeNull();
		expect(data.clientPetName).toMatch('');
		expect(data.clientPetAge).toBeNull();
		expect(data.clientPetWeight).toBeNull();
		expect(data.clientPetBirthday).toBeNull();
		expect(data.clientPetBreed).toMatch('');
		expect(data.femaleOrMale).toBeFalsy();
		expect(data.status).toBeNull();
	});

	it('Should have a Success Messages on Create Success Status', async () => {
		wrapper.setData({ status: 201 });
		await wrapper.vm.$nextTick();
		const successMessage = wrapper.get('b-message-stub');
		expect(successMessage.attributes().title).toMatch('Success');
		expect(successMessage.attributes().icon).toMatch('check');
	});

	it('Should have an Error Messages on Create Error Status', async () => {
		wrapper.setData({ status: 401 });
		await wrapper.vm.$nextTick();
		const errorMessage = wrapper.get('b-message-stub');
		expect(errorMessage.attributes().title).toMatch('Error');
		expect(errorMessage.attributes().icon).toMatch('exclamation');
	});
});
