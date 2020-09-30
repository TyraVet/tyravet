import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import SideBar from '@/components/SideBar.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: { name: '' },
	token: ''
}

const wrapper = shallowMount(SideBar, { store, localVue })

describe('SideBar Component', () => {
	const main = wrapper.get('#side-bar')

	it('Sets the correct default data', () => {
		const data = SideBar.data()
		expect(typeof SideBar.data).toBe('function')
		expect(data.open).toBeFalsy()
		expect(data.canCancel).toBeFalsy()
		expect(data.fullwidth).toBeTruthy()
		expect(data.fullheight).toBeTruthy()
		expect(data.contribute).toBeTruthy()
		expect(data.bug).toBeTruthy()
		expect(data.mit).toBeTruthy()
		expect(data.isAdmin).toBeFalsy()
	})

	const sideBar = main.get('b-sidebar-stub')
	it('Should has a Side Bar Component', () => {
		expect(sideBar.exists()).toBeTruthy()
		expect(sideBar.attributes().type).toMatch('is-primary-light')
	})

	const menuContainer = sideBar.get('#menu-container')
	const menu = menuContainer.get('b-menu-stub')
	it('Should has a menu container inside SideBar', () => {
		expect(menu.exists()).toBeTruthy()
		expect(menu.attributes().accordion).toBeTruthy()
		expect(menu.attributes().activable).toBeTruthy()
	})

	const menuList = menu.get('b-menu-list-stub')
	it('Should has a menu list inside Menu', () => {
		expect(menuList.exists()).toBeTruthy()
		expect(menuList.attributes().label).toMatch('Menu')
	})

	it('Should has a Panel Section if Admin', async () => {
		await wrapper.setData({ isAdmin: true })

		const panel = menuList.get('#panel')
		expect(panel.exists()).toBeTruthy()
		expect(panel.attributes().label).toMatch('Panel')
		expect(panel.attributes().iconpack).toMatch('fas')
		expect(panel.attributes().icon).toMatch('database')

		const home = panel.get('#panel-home').get('b-menu-item-stub')
		expect(home.exists()).toBeTruthy()
		expect(home.attributes().label).toMatch('Home')
		expect(home.attributes().iconpack).toMatch('fas')
		expect(home.attributes().icon).toMatch('home')
		expect(home.attributes().tag).toMatch('router-link')
		expect(home.attributes().to).toMatch('/panel')

		const services = panel.get('#panel-services').get('b-menu-item-stub')
		expect(services.exists()).toBeTruthy()
		expect(services.attributes().label).toMatch('Services')
		expect(services.attributes().iconpack).toMatch('fas')
		expect(services.attributes().icon).toMatch('database')
		expect(services.attributes().tag).toMatch('router-link')
		expect(services.attributes().to).toMatch('/panel/services')

		const breeds = panel.get('#panel-breeds').get('b-menu-item-stub')
		expect(breeds.exists()).toBeTruthy()
		expect(breeds.attributes().label).toMatch('Breeds')
		expect(breeds.attributes().iconpack).toMatch('fas')
		expect(breeds.attributes().icon).toMatch('database')
		expect(breeds.attributes().tag).toMatch('router-link')
		expect(breeds.attributes().to).toMatch('/panel/breeds')

		await wrapper.setData({ isAdmin: false })
	})

	it('Should has a Schedule Section', () => {
		const schedule = menuList.get('#schedule')
		expect(schedule.exists()).toBeTruthy()
		expect(schedule.attributes().label).toMatch('Schedule')
		expect(schedule.attributes().iconpack).toMatch('fas')
		expect(schedule.attributes().icon).toMatch('calendar')

		const home = schedule.get('#schedule-home').get('b-menu-item-stub')
		expect(home.exists()).toBeTruthy()
		expect(home.attributes().label).toMatch('Home')
		expect(home.attributes().iconpack).toMatch('fas')
		expect(home.attributes().icon).toMatch('home')
		expect(home.attributes().tag).toMatch('router-link')
		expect(home.attributes().to).toMatch('/')

		const clients = schedule.get('#schedule-clients').get('b-menu-item-stub')
		expect(clients.exists()).toBeTruthy()
		expect(clients.attributes().label).toMatch('Clients Book')
		expect(clients.attributes().iconpack).toMatch('fas')
		expect(clients.attributes().icon).toMatch('address-book')
		expect(clients.attributes().tag).toMatch('router-link')
		expect(clients.attributes().to).toMatch('/clients')

		const pets = schedule.get('#schedule-pets').get('b-menu-item-stub')
		expect(pets.exists()).toBeTruthy()
		expect(pets.attributes().label).toMatch('Pets Book')
		expect(pets.attributes().iconpack).toMatch('fas')
		expect(pets.attributes().icon).toMatch('paw')
		expect(pets.attributes().tag).toMatch('router-link')
		expect(pets.attributes().to).toMatch('/pets')
	})

	it('Should has a Hospital Section', () => {
		const hospital = menuList.get('#hospital')
		expect(hospital.exists()).toBeTruthy()
	})

	it('Should has an Inventory Section', () => {
		const inventory = menuList.get('#inventory')
		expect(inventory.exists()).toBeTruthy()
	})

	it('Should has an Actions Section', () => {
		const actions = menu.get('#actions')
		expect(actions.exists()).toBeTruthy()
	})

	it('Should has an About Section', () => {
		const about = menu.get('#about')
		expect(about.exists()).toBeTruthy()
	})

	it('Should open and close the Sidebar on Store Commit', () => {
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
		wrapper.vm.$store.commit('changeSideBarState')
		expect(wrapper.vm.$store.state.sideBarOpen).toBeTruthy()
		wrapper.vm.$store.commit('changeSideBarState')
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
	})
})
