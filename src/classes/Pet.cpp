/*! \file */

/*
 * Pet class implementation
*/

#include<string>
#include "Pet.h"

// Constructor
Pet::Pet(std::string pName, std::string pSpecie, std::string pBreed, std::string pBirthday){
	setName(pName);
	setSpecie(pSpecie);
	setBreed(pBreed);
	setBirthday(pBirthday);
}

// Setters and getters
void Pet::setName(std::string pName){
	name = pName;
}

std::string Pet::getName(){
	return name;
}

void Pet::setSpecie(std::string pSpecie){
	specie = pSpecie;
}

std::string Pet::getSpecie(){
	return specie;
}

void Pet::setBreed(std::string pBreed){
	breed = pBreed;
}

std::string Pet::getBreed(){
	return breed;
}

void Pet::setBirthday(std::string pBirthday){
	birthday = pBirthday;
}

std::string Pet::getBirthday(){
	return birthday;
}

void Pet::setAge(int pAge){
	age = pAge;
}

int Pet::getAge(){
	return age;
}
