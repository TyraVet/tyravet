import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import AppointmentForm from '@/components/AppointmentForm.vue';

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

/* Dummy Hour */
const hour = {
	hour: ''
};

const wrapper = shallowMount(AppointmentForm, { propsData: { hour }, store, localVue });

describe('AppointmentForm Component', () => {
	const data = AppointmentForm.data();
	it('Set the correct default data', () => {
		expect(typeof AppointmentForm.data).toBe('function');
		expect(data.OK).toBe(201);
		expect(data.title).toMatch('New Appointment');
		expect(data.labelButtonCancel).toMatch('Cancel');
		expect(data.labelButtonAccept).toMatch('Accept');
		expect(data.services).toEqual(expect.arrayContaining([]));
		expect(data.clients).toEqual(expect.arrayContaining([]));
		expect(data.pets).toEqual(expect.arrayContaining([]));
		expect(data.service).toBeNull();
		expect(data.client).toBeNull();
		expect(data.notes).toMatch('');
	});

	const main = wrapper.get('#client-form');
	const modal = main.get('.modal-card');
	it('Should has a main form', () => {
		expect(main.exists()).toBeTruthy();
		expect(modal.exists()).toBeTruthy();
	});

	const modalHeader = modal.get('.modal-card-head');
	it('Should has a modal header', () => {
		expect(modalHeader.exists()).toBeTruthy();

		const title = modalHeader.get('p');
		expect(title.exists()).toBeTruthy();
		expect(title.classes()).toContain('modal-card-title');
		expect(title.text()).toMatch(data.title);

		const buttonClose = modalHeader.get('button');
		expect(buttonClose.exists()).toBeTruthy();
		expect(buttonClose.classes()).toContain('delete');
		expect(buttonClose.attributes('type')).toMatch('button');
	});

	const modalBody = modal.get('.modal-card-body');
	it('Should has a modal body', () => {
		expect(modalBody.exists()).toBeTruthy();

		const fieldClient = modalBody.get('#client');
		expect(fieldClient.exists()).toBeTruthy();
		expect(fieldClient.attributes('label')).toMatch('Client');

		const selectClient = fieldClient.get('b-select-stub');
		expect(selectClient.exists()).toBeTruthy();

		const fieldService = modalBody.get('#service');
		expect(fieldService.exists()).toBeTruthy();
		expect(fieldService.attributes('label')).toMatch('Service');

		const selectService = fieldService.get('b-select-stub');
		expect(selectService.exists()).toBeTruthy();

		const fieldHour = modalBody.get('#hour');
		expect(fieldHour.exists()).toBeTruthy();
		expect(fieldHour.attributes('label')).toMatch('Hour')

		const inputHour = fieldHour.get('b-input-stub');
		expect(inputHour.exists()).toBeTruthy();
		expect(inputHour.attributes('type')).toMatch('text');
		expect(inputHour.attributes('required')).toBeTruthy();
		expect(inputHour.attributes('disabled')).toBeTruthy();

		const fieldNotes = modalBody.get('#notes');
		expect(fieldNotes.exists()).toBeTruthy();
		expect(fieldNotes.attributes('label')).toMatch('Notes');

		const inputNotes = fieldNotes.get('b-input-stub');
		expect(inputNotes.exists()).toBeTruthy();
		expect(inputNotes.attributes('type')).toMatch('textarea');
		expect(inputNotes.attributes('maxlength')).toMatch('500');
	});

	const modalFooter = modal.get('.modal-card-foot');
	it('Should has a modal footer', () => {
		expect(modalFooter.exists()).toBeTruthy();

		const buttonCancel = modalFooter.get('button');
		expect(buttonCancel.exists()).toBeTruthy();
		expect(buttonCancel.classes()).toContain('button');
		expect(buttonCancel.attributes('type')).toMatch('button');
		expect(buttonCancel.text()).toMatch(data.labelButtonCancel);

		const buttonAccept = modalFooter.get('b-button-stub');
		expect(buttonAccept.exists()).toBeTruthy();
		expect(buttonAccept.classes()).toContain('button');
		expect(buttonAccept.classes()).toContain('is-success');
		expect(buttonAccept.text()).toMatch(data.labelButtonAccept);
	});
});
