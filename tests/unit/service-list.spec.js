import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import ServiceList from '@/components/ServiceList.vue';
import TableEditDelete from '@/components/TableEditDelete.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
};

const wrapper = shallowMount(ServiceList, { store, localVue });

describe('ServiceList Component', () => {
	const data = ServiceList.data();
	it('Sets the correct default data', () => {
		expect(typeof ServiceList.data).toBe('function');
		expect(data.services).toEqual(expect.arrayContaining([]));
		expect(data.isBordered).toBeTruthy();
		expect(data.hasMobileCards).toBeFalsy();
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy();
	});

	it('Should has a getServices method', () => {
		expect(wrapper.vm.getServices).toBeTruthy();
	});

	const main = wrapper.get('#service-list');
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy();
	});

	const table = main.get('b-table-stub');
	it('Should has a table child', () => {
		expect(table.exists()).toBeTruthy();
	});

	const nameColumn = table.get('#name-column');
	it('Table should has a Name Column', () => {
		expect(nameColumn.exists()).toBeTruthy();
		expect(nameColumn.attributes().searchable).toBeTruthy();
		expect(nameColumn.attributes().field).toMatch('name');
		expect(nameColumn.attributes().label).toMatch('Name');
	});

	const priceColumn = table.get('#price-column');
	it('Table should has a Price Column', () => {
		expect(priceColumn.exists()).toBeTruthy();
		expect(priceColumn.attributes().field).toMatch('price');
		expect(priceColumn.attributes().label).toMatch('Price');
	});

	const typeColumn = table.get('#type-column');
	it('Table shoudl has a Type Column', () => {
		expect(typeColumn.exists()).toBeTruthy();
		expect(typeColumn.attributes().field).toMatch('type');
		expect(typeColumn.attributes().label).toMatch('Type');
	});

	it('Should has TableEditDelete Components as Childs', () => {
		expect(main.findComponent(TableEditDelete)).toBeTruthy();
	});
});
