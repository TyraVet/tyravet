#pragma once

#include <gtkmm.h>

class AddPet : public Gtk::Window{
    public:
        AddPet();
        virtual ~AddPet();

    protected:
        // Signal handlers
        void on_button_add_pet();

        // Member widgets
        Gtk::Grid gridMain;
        Gtk::Label labelPet, labelPetSpecie, labelPetBreed, labelPetName, labelPetBirthday,
            labelOwnerName, labelOwnerLastName, labelOwnerGender, labelOwnerEmail,
            labelOwnerAddress, labelOwnerPhoneNumber;
        Gtk::Entry entryPetSpecie, entryPetBreed, entryPetName, entryPetBirthday,
            entryOwnerName, entryOwnerLastName, entryOwnerGender, entryOwnerEmail,
            entryOwnerAddress, entryOwnerPhoneNumber;
        Gtk::Button buttonAddPet;
};
