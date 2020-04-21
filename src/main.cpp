/*! \file */

/* TYRA by Andres Ruiz */

#include <iostream>
#include <string>
// #include <gtkmm-3.0/gtkmm.h>
// #include "../include/NotebookMain.hpp" /* GUI */
#include "../include/Owner.hpp"
#include "../include/Pet.hpp"
// #include "../include/DataBase.hpp"
// #include "../include/PostgreSQL.hpp"

const char a = 'a';
const char c = 'c';
const char q = 'q';
const char t = 't';
const std::string WEB_PAGE = "https://github.com/Andrsrz";

/* Function declaration */
void printWelcomeMessage();
void printOptions();
void printAbout();
void createPet(Pet *);

int main(int argc, char* argv[]){
	/* GUI */
	if(argc > 1){
		/*
		* I needed to create an aditional string to compare to.
		* It tourns out that a char* and a string can't be compared.
		*/
		std::string arg1(argv[1]);
		if(arg1 == "-gui"){
			// auto app = Gtk::Application::create("dev.tyra");
			// NotebookMain notebookMain;
			// return app->run(notebookMain);
		}
	}

	/* MENU */
	char option = 't';
	bool quit = false;
	printWelcomeMessage();
	while(!quit){
		printOptions();
		std::cin >> option;
		switch(option){
			case ::a:{
				Pet pet;
				createPet(&pet);
				std::cout << pet.getName();
				std::cout << pet.getOwner().getName();
				std::cout << "\tSaving to Data base ...\n";
				/* TODO save to DB */
				std::cout << "\tDone!\n";
				break;
			}
			case ::c:
				break;
			case ::q:
				std::cout << "Exiting program...\n";
				quit = true;
				break;
			case ::t:
				printAbout();
				break;
			default:
				std::cout << "Enter a valid option!\n\n";
				break;
		}
	}

	return 0;
}

/* Function implementation */
void printWelcomeMessage(){ std::cout << "\tWelcome to Tyra!\n"; }

void printOptions(){
	std::cout << "\ta - Add new Pet\n";
	std::cout << "\tc - Check DataBase\n";
	std::cout << "\tq - Exit the program\n";
	std::cout << "\tt - About\n\n";
}

void printAbout(){
	std::cout << "\tTyra. Veterinary Management.\n";
	std::cout << "\tBy Andres Ruiz\n";
	std::cout << "\t" << ::WEB_PAGE << "\n";
}

void createPet(Pet *myPet){
	std::string input = "";
	Owner owner;
	std::cout << "\t --- Dueño ---\n";
	std::cout << "\t Nombre: ";
	std::cin.ignore();
	std::getline(std::cin, input);
	std::cout << input << std::endl;
	owner.setName(input);
	std::cout << "\t Correo electronico: ";
	std::cin >> input;
	owner.setEmail(input);
	std::cout << "\t Direccion: ";
	std::cin >> input;
	owner.setAddress(input);
	std::cout << "\t Numero celular: ";
	std::cin >> input;
	owner.setPhoneNumber(input);
	std::cout << "\t --- Mascota ---\n";
	std::cout << "\t Nombre: ";
	std::cin >> input;
	myPet->setName(input);
	std::cout << "\t Especie: ";
	std::cin >> input;
	myPet->setSpecie(input);
	std::cout << "\t Raza: ";
	std::cin >> input;
	myPet->setBreed(input);
	std::cout << "\t Genero: ";
	std::cin >> input;
	myPet->setGender(input);
	std::cout << "\t Cumpleaños: ";
	std::cin >> input;
	myPet->setBirthday(input);
	myPet->setOwner(owner);
}
