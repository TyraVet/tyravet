/*! \file */

//! Person class.
/*!
  Person class. The most basic for any person.
*/

#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include "../include/Person.hpp"

//! Class constructor.
/*! To initialize every attribute of the class. */
Person::Person(std::string personName){
	setName(personName);
}

Person::Person(){} /* Default */
Person::~Person(){}

//! Setter member taking one argument and returning void.
/*!
  * \param personName a string argument.
 * \return void. */
void Person::setName(std::string personName){
	std::vector<std::string> nameBlitted = blitName(personName);
	name = nameBlitted[0];
	lastName = nameBlitted[1];
}

//! Getter member taking no argument and returning a string value.
/*!
 * \return Object's string attribute. */
std::string Person::getName(){ return name; }

// Getter member taking no argument and returning a string value.
/*!
 * \return Object's string attribute. */
std::string Person::getLastName(){ return lastName; }

// Getter member taking no argument and returning a string value.
/*!
 * \return Object's string attributes. */
std::string Person::getFullName(){ return name + lastName; }

// Method to slpit the string that is given as parameter in constructor.
/*!
 * \param personName a string argument.
 * \return vector<string> containing the splitted name. */
std::vector<std::string> Person::blitName(std::string personName){
	std::istringstream iss(personName);
	std::vector<std::string> vect;

	do{
		std::string substr;
		iss >> substr;
		if(substr == "") /* No empty string in vector */
			break;
		vect.push_back(substr);
	}while(iss);

	return vect;
}
