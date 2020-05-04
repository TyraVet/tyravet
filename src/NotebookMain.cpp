#include <iostream>
#include <string>
#include "../include/NotebookMain.hpp"
#include "../include/AddPet.hpp"

NotebookMain::NotebookMain() : labelHospital("Hello from inside Hospital!"),
								labelInventory("Hello from inside Inventory!"),
								labelTest("Hello from inside Appointments"){
	this->set_title("Tyra");
	this->set_default_size(640, 480);

	/* Create Calendar Box */
	boxCalendar.set_orientation(Gtk::ORIENTATION_VERTICAL);
	boxCalendar.pack_start(calendar);
	buttonAddAppointment.set_label("Add Appointment");
	boxCalendar.pack_start(buttonAddAppointment);
	/* Create Appointments Box */
	boxAppointments.set_orientation(Gtk::ORIENTATION_VERTICAL);
	boxAppointments.pack_start(labelTest);
	/* Create Datebok Box */
	boxDatebook.set_orientation(Gtk::ORIENTATION_HORIZONTAL);
	boxDatebook.pack_start(boxCalendar);
	boxDatebook.pack_end(boxAppointments);

	/* Set Notebook */
	notebookMain.set_border_width(0);
	/* Add Notebook tabs */
	notebookMain.append_page(boxDatebook, "Datebook");
	notebookMain.append_page(labelHospital, "Hospital");
	notebookMain.append_page(labelInventory, "Inventory");

	/* Switch tabs */
	notebookMain.signal_switch_page().connect(
		sigc::mem_fun(*this, &NotebookMain::on_notebook_switch_page));
	/* Get Date */
	buttonAddAppointment.signal_clicked().connect(
		sigc::mem_fun(*this, &NotebookMain::on_button_add_appointment));

	/* Add Main Window (Notebook) */
	this->add(notebookMain);
	this->show_all_children();
}

NotebookMain::~NotebookMain(){}

void NotebookMain::on_notebook_switch_page(Gtk::Widget * /* page */, guint page_num){
	std::cout << "Switched to tab with index : " << page_num << std::endl;
}

void NotebookMain::on_button_add_appointment(){
	unsigned int year, month, day;
	calendar.get_date(year, month, day);
	// AddPet window;
	// window.show();
}
