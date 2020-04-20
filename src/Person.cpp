/*! \file */

//! Person class.
/*!
  Person class. The most basic for any person.
*/

#include <iostream>
#include <sstream>
#include <algorithm>
#include <iterator>
#include <string>
#include <vector>
#include "../include/Person.hpp"

//! Class constructor.
/*! To initialize every attribute of the class. */
Person::Person(std::string personName){
	std::vector<std::string> nameBlitted = blitName(personName);
	setName(nameBlitted[0]);
	setLastName(nameBlitted[1]);
}

Person::Person(){} /* Default */
Person::~Person(){}

//! Setter member taking one argument and returning void.
/*!
  * \param personName a string argument.
 * \return void. */
void Person::setName(std::string personName){ name = personName; }

//! Getter member taking no argument and returning a string value.
/*!
 * \return Object's string attribute. */
std::string Person::getName(){ return name; }

//! Setter member taking one argument and returning void.
/*!
 * \param personLastName a string argument.
 * \return void. */
void Person::setLastName(std::string personLastName){ lastName = personLastName; }

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
	copy(std::istream_iterator<std::string>(iss), std::istream_iterator<std::string>(), std::ostream_iterator<std::string>(std::cout, "\n"));
	std::vector<std::string> nameBlitted{std::istream_iterator<std::string>{iss}, std::istream_iterator<std::string>{}};
	return nameBlitted;
}
