#include <iostream>
#include <string>
#include "../include/AddPet.hpp"

AddPet::AddPet() : labelPet("Add a new Pet"),
                   labelPetSpecie("Specie : "),
                   labelPetBreed("Breed : "){
    this->set_title("Pet");
    this->set_default_size(300, 600);

    // Add Main Grid to Window
    this->add(gridMain);
    // Populate Grid
    gridMain.add(labelPetSpecie);
    gridMain.add(entryPetSpecie);
    // gridMain.attach_next_to(labelPetBreed, labelPetSpecie, Gtk::POS_BOTTOM, 2, 1);

    // Button event
    buttonAddPet.signal_clicked().connect(sigc::mem_fun(*this, &AddPet::on_button_add_pet));

    // And show it
    this->show_all_children();
}

AddPet::~AddPet(){}

void AddPet::on_button_add_pet(){
    std::cout << "Button clicked\n";
}
