import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import Appointment from '@/components/Appointment.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy Appointment */
const appointment = {
	service: {
		name: ''
	},
	clientId: '',
	petId: '',
	hour: '',
	done: false,
};

const appointmentWithNotes = {
	service: {
		name: ''
	},
	clientId: '',
	petId: '',
	hour: '',
	done: false,
	notes: 'This is a note'
};

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
};

const wrapper = shallowMount(Appointment, { store,
											propsData: { appointment },
											localVue });

describe('Appointment Component', () => {
	it('Shoudl have the appointment Object', () => {
		expect(wrapper.props().appointment).toBeTruthy();
	});

	const data = wrapper.vm.$data;
	it('Set the correct default data', () => {
		expect(typeof data).toBe('object');
		expect(data.titleNotes).toMatch('Notes');
		expect(data.isDone).toBeFalsy();
		expect(typeof data.client).toBe('object');
		expect(typeof data.pet).toBe('object');
	});

	const main = wrapper.get('#appointment-main');
	const appointmentSection = main.get('section');
	it('Should has a main div', () => {
		expect(main.exists()).toBeTruthy();
		expect(appointmentSection.exists()).toBeTruthy();
		expect(appointmentSection.attributes('title')).toMatch('Appointment');
	});

	const checkbox = appointmentSection.get('b-checkbox-stub');
	it('Shoudl has a checkbox to change appoitnment state', () => {
		expect(checkbox.exists()).toBeTruthy();
		expect(checkbox.attributes('type')).toMatch('is-success');
	});

	const appointmentContainer = appointmentSection.get('div');
	const appointment = appointmentContainer.get('#appointment-container');
	it('Should has the appointment info', () => {
		expect(appointment.exists()).toBeTruthy();

		const service = appointment.get('#service');
		expect(service.exists()).toBeTruthy();
		expect(service.classes()).toContain('is-size-5');
		expect(service.classes()).toContain('has-text-primary');

		const pet = appointment.get('#pet');
		expect(pet.exists()).toBeTruthy();
		expect(pet.attributes('title')).toMatch('Go Pet Profile');
		expect(pet.attributes('type')).toMatch('is-primary-light');

		const petText = pet.get('#pet-text');
		expect(petText.exists()).toBeTruthy();
		expect(petText.classes()).toContain('is-size-5');
		expect(petText.classes()).toContain('has-text-dark');

		const client = appointment.get('#client');
		expect(client.exists()).toBeTruthy();
		expect(client.classes()).toContain('is-size-5');
		expect(client.classes()).toContain('has-text-grey-darker');
	});

	it("Should has notes if there were set", () => {
		const wrapper2 = shallowMount(Appointment, {
			store,
			propsData: { appointment: appointmentWithNotes },
			localVue
		});

		const main2 = wrapper2.get('#appointment-main');
		const appointmentSection2 = main2.get('#appointment-section');
		const appointmentContainer2 = appointmentSection2.get('div')
		const notesContainer = appointmentContainer2.get('#notes-container');
		expect(notesContainer.exists()).toBeTruthy();

		const titleContainer = notesContainer.get('#notes-title-container');
		const icon = titleContainer.get('b-icon-stub');
		expect(icon.attributes('id')).toMatch('notes-icon');
		expect(icon.attributes('type')).toMatch('is-icon');
		expect(icon.attributes('pack')).toMatch('far');
		expect(icon.attributes('icon')).toMatch('sticky-note');
		expect(icon.attributes('size')).toMatch('is-small');

		const title = titleContainer.get('h3');
		expect(title.exists()).toBeTruthy();
		expect(title.attributes('id')).toMatch('notes-title');
		expect(title.classes()).toContain('is-size-6');
		expect(title.classes()).toContain('has-text-danger');
		expect(title.text()).toMatch(data.titleNotes + ' :');

		const notes = notesContainer.get('#notes');
		expect(notes.exists()).toBeTruthy();
		expect(notes.classes()).toContain('is-size-6');
		expect(notes.classes()).toContain('has-text-dark');
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy();
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.goPetProfile).toBeTruthy();
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.send).toBeTruthy();
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.getClient).toBeTruthy();
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.getPet).toBeTruthy();
	});
});
