/*! \file */

//! Pet class.
/*! Pet class is meant to stored all the information of a single pet. */

#include<string>
#include "../include/Pet.hpp"

//! Class constructor
/*!
 * To initialize every attribute of the class. */
Pet::Pet(std::string petSpecie, std::string petBreed, std::string petGender,
		 std::string petName, std::string petBirthday, Owner petOwner)
	: Animal(petSpecie, petBreed, petGender){
	setName(petName);
	setBirthday(petBirthday);
	setOwner(petOwner);
}

Pet::Pet(){}
Pet::~Pet(){ printf("Deleting Pet ...\n"); }

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
 * \param petOwner object.
 * \return void. */
void Pet::setOwner(Owner petOwner){ myOwner = petOwner;}

// Getter member taking no arguments and returning an object
/*!
 * \return Owner object. */
Owner Pet::getOwner(){ return myOwner; }

// Setter member taking one argument and returning void.
/*!
 * \param petAge a string argument.
 * \return void. */
void Pet::setAge(int petAge){ age = petAge; }

// Getter member taking no arguments and returning a string value.
/*!
 * \return Object's string attribute. */
int Pet::getAge(){ return age; }
