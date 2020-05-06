/*! \file */

/* TYRA by Andres Ruiz */

#include <iostream>
#include <string>
#include <ncurses.h>
#include "../include/Tyra.hpp"
#include "../include/Owner.hpp"
#include "../include/Pet.hpp"

const char a = 'a';
const char c = 'c';
const char q = 'q';
const char t = 't';

int main(int argc, char* argv[]){
	initscr();

	/* MENU */
	char option = 't';
	bool quit = false;
	Tyra tyra;
	refresh();
	tyra.printWelcomeMessage();
	while(!quit){
		refresh();
		tyra.printOptions();
		std::cin >> option;
		switch(option){
			case ::a:
				break;
			case ::c:
				break;
			case ::q:
				refresh();
				std::cout << "Exiting program..." << std::endl;
				quit = true;
				break;
			case ::t:
				refresh();
				tyra.printAbout();
				break;
			default:
				refresh();
				std::cout << "Enter a valid option!" << std::endl << std::endl;
				break;
		}
	}

	endwin();
	return 0;
}
