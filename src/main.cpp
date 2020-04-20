/*! \file */

/* TYRA by Andres Ruiz */

#include <iostream>
#include <string>
#include <gtkmm-3.0/gtkmm.h>
#include "../include/NotebookMain.hpp" /* GUI */

const char a = 'a';
const char c = 'c';
const char q = 'q';
const char t = 't';
const std::string WEB_PAGE = "https://github.com/Andrsrz";

/* Function declaration */
void printWelcomeMessage();
void printOptions();
void printAbout();

int main(int argc, char* argv[]){
	/* GUI */
	if(argc > 1){
		/*
		* I needed to create an aditional string to compare to.
		* It tourns out that a char* and a string can't be compared.
		*/
		std::string arg1(argv[1]);
		if(arg1 == "-gui"){
			auto app = Gtk::Application::create("dev.tyra");
			NotebookMain notebookMain;
			return app->run(notebookMain);
		}
	}

	/* MENU */
	char option;
	bool quit = false;
	printWelcomeMessage();
	while(!quit){
		printOptions();
		std::cin >> option;
		switch(option){
			case ::a:
				break;
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
