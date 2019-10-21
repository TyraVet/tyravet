/*
 * TYRA
 * By Andrés Ruiz
*/

#include <iostream>
#include <string>
#include <vector>
#include "classes/Owner.h"
#include "classes/Pet.h"
#include "classes/Bill.h"
#include "classes/Product.h"

// Function declaration
void displayWelcomeMessage();
void displayMenuOptions();

int main(){
	bool menu = true;
	char option;
	
	displayWelcomeMessage();
	while(menu){
		displayMenuOptions();
		std::cin >> option;
		switch(option){
			case 'q' :
				menu = false;
				break;
			case 'A' :
				break;
			case 'B' :
				break;
			default :
				break;
		}
	}
	
	return 0;
}

// Function implementation
void displayWelcomeMessage(){
	std::cout << " | ------------------------------------ |\n";
	std::cout << " | \t\t\t\t\t|\n";
	std::cout << " |\t\tWelcome to TYRA\t\t|\n";
	std::cout << " |\tYour Veterinary Management!\t|\n";
	std::cout << " |\t\t\t\t\t|\n";
	std::cout << " | ------------------------------------ |\n" << std::endl;
}

void displayMenuOptions(){
	std::cout << "Enter the letter of the option :\n";
	std::cout << "A : New entry.\n";
	std::cout << "B : Print database.\n";
	std::cout << "q : Quit.\n";
}
