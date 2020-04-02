/*! \file */

//! Client class.
/*! Client class is a client itself, containing a Pet and an Owner. */

#include <string>
#include "../include/Client.hpp"

//! Class constructor
/*! To initialize every attribute of the class. */
Client::Client(Owner myOwner, Pet myPet){
    setOwner(myOwner);
    setPet(myPet);
}

Client::Client(){}

// Setter member taking one argument and returning void.
/*!
 * \param Owner object.
 * \return void. */
void Client::setOwner(Owner clientOwner){ myOwner = clientOwner; }

// Getter member taking no arguments and returning an Owner object.
/*!
 * \return Owner object. */
Owner Client::getOwner(){ return myOwner; }

// Setter member taking one argument and returning void.
/*!
 * \param Pet object.
 * \return void. */
void Client::setPet(Pet clientPet){ myPet = clientPet; }

// Getter member taking no arguments and returning a Pet object.
/*!
 * \return Pet object. */
Pet Client::getPet(){ return myPet; }
