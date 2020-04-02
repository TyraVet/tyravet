/*! \file */

//! Pet class.
/*! Pet class is meant to stored all the information of a single pet. */

#include<string>
#include "../include/Pet.hpp"

//! Class constructor
/*!
 * To initialize every attribute of the class. */
Pet::Pet(std::string petSpecie, std::string petBreed,
		 std::string petName, std::string petBirthday)
	: Animal(petSpecie, petBreed){
	setName(petName);
	setBirthday(petBirthday);
}

Pet::Pet(){}

//! Setter member taking one argument and returning void.
/*!
 * \param petName a string argument.
 * \return void. */
void Pet::setName(std::string petName){ name = petName; }

//! Getter member taking no arguments and returning a string value.
/*!
 * \return Object's string attribute. */
std::string Pet::getName(){ return name; }

// Setter member taking one argument and returning void.
/*!
 * \param petBirthday a string argument.
 * \return void. */
void Pet::setBirthday(std::string pBirthday){ birthday = pBirthday; }

// Getter member taking no arguments and returning a string value.
/*!
 * \return Object's string attribute. */
std::string Pet::getBirthday(){ return birthday; }

// Setter member taking one argument and returning void.
/*!
 * \param petAge a string argument.
 * \return void. */
void Pet::setAge(int petAge){ age = petAge; }

// Getter member taking no arguments and returning a string value.
/*!
 * \return Object's string attribute. */
int Pet::getAge(){ return age; }
