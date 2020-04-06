/*! \file */

//! Pacient class.
/*! Pacient class.*/

#include "../include/Pacient.hpp"

//! Class constructor.
/*! To initialize the status of the pacient. */
Pacient::Pacient(int pacientStatus){
    setStatus(pacientStatus);
}

Pacient::~Pacient(){}

// Setter member taking one argument and returning void.
/*!
 * \param pacientStatus an int argument.
 * \return void. */
void Pacient::setStatus(int pacientStatus){
    myStatus = pacientStatus;
}

// Getter member taking no arguments and returning and int.
/*!
 * \return int. */
int Pacient::getStatus(){ return myStatus; }

// Setter member taking one object argument and returning void.
/*!
 * \param pacientPet as a Pet object.
 * \return void. */
void Pacient::setPet(Pet pacientPet){ myPet = pacientPet; }

// Getter member taking no arguments and returning a Pet object.
/*!
 * \return Pet object. */
Pet Pacient::getPet(){ return myPet; }
