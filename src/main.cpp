/*! \file */

/* TYRA by Andres Ruiz */

#include <iostream>
#include <string>
#include <gtkmm-3.0/gtkmm.h>
#include <pqxx/pqxx>
#include "../include/NotebookMain.hpp"
#include "../include/Tyra.hpp"
#include "../include/Owner.hpp"
#include "../include/Pet.hpp"

const std::string USER = "admin";
const std::string PASSWORD = "1234";
const std::string SERVER = "localhost";
const std::string DATABASE = "vet";

const char a = 'a';
const char c = 'c';
const char q = 'q';
const char t = 't';

/* Function declaration */
Pet* createPet(Pet *);

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
	Tyra tyra;
	tyra.printWelcomeMessage();
	while(!quit){
		tyra.printOptions();
		std::cin >> option;
		switch(option){
			case ::a:{
				// Pet pet;
				// createPet(&pet);
				std::cout << "\tSaving to Data base ..." << std::endl;
				/* TODO save to DB */
				std::string connectionUrl = "postgresql://" + ::USER + ":" + ::PASSWORD + "@" + ::SERVER + "/" + ::DATABASE;
				std::string sql = "DROP TABLE pet";
				try{
					pqxx::connection conn(connectionUrl);
					conn.prepare("test", sql);
					pqxx::work work(conn);
					work.commit();
					conn.close();
					std::cout << "\tDone!" << std::endl;
				} catch(std::exception const& e){
					std::cerr << e.what() << std::endl;
				}
				break;
			}
			case ::c:
				break;
			case ::q:
				std::cout << "Exiting program..." << std::endl;
				quit = true;
				break;
			case ::t:
				tyra.printAbout();
				break;
			default:
				std::cout << "Enter a valid option!" << std::endl << std::endl;
				break;
		}
	}

	return 0;
}

/* Function implementation */
Pet* createPet(Pet *myPet){
	std::string input = "";
	Owner owner;
	std::cout << "\t --- Dueño ---" << std::endl;
	std::cout << "\t Nombre: ";
	std::cin.ignore();
	std::getline(std::cin, input);
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
	std::cout << "\t --- Mascota ---" << std::endl;
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
	return myPet;
}
