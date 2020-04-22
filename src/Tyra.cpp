#include <iostream>
#include <string>
#include "../include/Tyra.hpp"

/* Tyra class */

Tyra::Tyra(){}
Tyra::~Tyra(){}

std::string Tyra::getCreator(){ return CREATOR; }
std::string Tyra::getWebPage(){ return WEB_PAGE; }

void Tyra::printWelcomeMessage(){ std::cout << "\tWelcome to Tyra!" << std::endl; }

void Tyra::printOptions(){
	std::cout << "\ta - Add new Pet" << std::endl;
	std::cout << "\tc - Check DataBase" << std::endl;
	std::cout << "\tq - Exit the program" << std::endl;
	std::cout << "\tt - About" << std::endl << std::endl;
}

void Tyra::printAbout(){
	std::cout << "\tTyra. Veterinary Management" << std::endl;
	std::cout << "\tBy " << getCreator() << std::endl;
	std::cout << "\t" << getWebPage() << std::endl;
}
