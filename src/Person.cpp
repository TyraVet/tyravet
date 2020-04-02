/*! \file */

//! Person class.
/*!
  Person class. The most basic for any person.
*/

#include <string>
#include "../include/Person.hpp"

//! Class constructor.
/*!
 To initialize every attribute of the class.
*/
Person::Person(std::string personName, std::string personLastName, std::string personGender){
	setName(personName);
	setLastName(personLastName);
	setGender(personGender);
}

Person::Person(){} // Default
Person::~Person(){}

//! Setter member taking one argument and returning void.
/*!
 \param personName a string argument.
 \return void.
*/
void Person::setName(std::string personName){ name = personName; }

//! Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Person::getName(){ return name; }

//! Setter member taking one argument and returning void.
/*!
 \param personLastName a string argument.
 \return void.
*/
void Person::setLastName(std::string personLastName){ lastName = personLastName; }

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Person::getLastName(){ return lastName; }

// Setter member taking one argument and returning void.
/*!
 \param personGender a string argument.
 \return void.
*/
void Person::setGender(std::string personGender){ gender = personGender; }

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Person::getGender(){ return gender; }
