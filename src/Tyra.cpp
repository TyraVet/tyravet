#include <iostream>
#include <string>
#include "../include/Tyra.hpp"

/* Tyra class */

Tyra::Tyra(){}
Tyra::~Tyra(){}

std::string Tyra::getCreator(){ return CREATOR; }
std::string Tyra::getWebPage(){ return WEB_PAGE; }

void Tyra::printWelcomeMessage(){ std::cout << "Welcome to Tyra!" << std::endl; }

void Tyra::printOptions(){
	std::cout << "a - Add new Pet" << std::endl;
	std::cout << "c - Check DataBase" << std::endl;
	std::cout << "q - Exit the program" << std::endl;
	std::cout << "t - About" << std::endl << std::endl;
}

void Tyra::printAbout(){
	std::cout << "Tyra. Veterinary Management" << std::endl;
	std::cout << "By " << getCreator() << std::endl;
	std::cout << getWebPage() << std::endl;
}
