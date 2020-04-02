/*! \file */

//! Animal class.
/*! Animal class. The most basic for any animal. */

#include<string>
#include "../include/Animal.hpp"

//! Class constructor.
/*! To initialize every attribute of the class. */
Animal::Animal(std::string animalSpecie, std::string animalBreed){
	setSpecie(animalSpecie);
	setBreed(animalBreed);
}

Animal::Animal(){}

//! Setter member taking one argument and returning void.
/*!
 * \param animalSpecie a string argument.
 * \return void. */
void Animal::setSpecie(std::string animalSpecie){
	specie = animalSpecie;
}

//! Getter member taking no arguments and returning a string value.
/*!
 * \return Object's string attribute. */
std::string Animal::getSpecie(){
	return specie;
}

//! Setter member taking one argument and returning void.
/*!
 * \param animalBreed a string argument.
 * \return void. */
void Animal::setBreed(std::string animalBreed){
	breed = animalBreed;
}

//! Getter member taking no arguments and returning a string value.
/*!
 * \return Object's string attribute. */
std::string Animal::getBreed(){
	return breed;
}
