/*
 * TYRA
 * By Andrés Ruiz
*/

#include <iostream> // Input/output
#include <string>
#include <vector>
#include <unistd.h> // Access to POSIX
#include <term.h> // ncurses library
// My header files
#include "classes/Owner.h"
#include "classes/Pet.h"
#include "classes/Bill.h"
#include "classes/Product.h"

// Function declaration
void clearScreen();
void displayWelcomeMessage();
void displayMenuOptions();
std::vector<Owner> makeOwnerEntry(std::vector<Owner>);
void printDataBase(std::vector<Owner>);

int main(){
	bool menu = true;
	char option;
	std::vector<Owner> ownerVector;
	
	displayWelcomeMessage();
	while(menu){
		displayMenuOptions();
		std::cout << "> ";
		std::cin >> option;
		switch(option){
			case 'q' :
				clearScreen();
				menu = false;
				break;
			case 'A' :
				clearScreen();
				ownerVector = makeOwnerEntry(ownerVector);
				break;
			case 'B' :
				clearScreen();
				printDataBase(ownerVector);
				break;
			default :
				break;
		}
	}
	
	return 0;
}

// Function implementation
void clearScreen(){
	if(!cur_term){
		int result;
		setupterm( NULL, STDOUT_FILENO, &result );
		if (result <= 0) return;
	}

	putp( tigetstr( "clear" ) );
}

void displayWelcomeMessage(){
	std::cout << " | ------------------------------------ |\n";
	std::cout << " | \t\t\t\t\t|\n";
	std::cout << " |\t\tWelcome to TYRA\t\t|\n";
	std::cout << " |\tYour Veterinary Management!\t|\n";
	std::cout << " |\t\t\t\t\t|\n";
	std::cout << " | ------------------------------------ |\n" << std::endl;
}

void displayMenuOptions(){
	std::cout << "\nEnter the letter of the option :\n";
	std::cout << "A : New entry.\n";
	std::cout << "B : Print database.\n";
	std::cout << "q : Quit.\n\n";
}

std::vector<Owner> makeOwnerEntry(std::vector<Owner> myOwnerVector){
	std::string ownerName = "", ownerLastName = "";
	std::string ownerEmail = "", ownerAddress = "";
	std::string ownerPhoneNumber = "";

	std::cout << "Enter owner information\n";
	std::cout << "Name : ";
	std::cin.ignore();
	std::getline(std::cin, ownerName);
	std::cout << "Last Name : ";
	std::getline(std::cin, ownerLastName);
	std::cout << "Email : ";
	std::cin >> ownerEmail;
	std::cout << "Address : ";
	std::cin.ignore();
	std::getline(std::cin, ownerAddress);
	std::cout << "Phone Number : ";
	std::cin >> ownerPhoneNumber;

	Owner myOwner(ownerName, ownerLastName, ownerEmail, ownerAddress, ownerPhoneNumber);
	myOwnerVector.push_back(myOwner);

	return myOwnerVector;
}

void printDataBase(std::vector<Owner> myOwnerVector){
	for(int i = 0; i < myOwnerVector.size(); i++){
		std::cout << myOwnerVector[i].getName() << " " << myOwnerVector[i].getLastName() << std::endl;
		std::cout << myOwnerVector[i].getAddress() << std::endl;
		std::cout << myOwnerVector[i].getPhoneNumber() << std::endl;
	}
}
