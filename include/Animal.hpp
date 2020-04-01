#pragma once

/*! Animal class */
#include <string>

class Animal{
public:
	Animal(std::string, std::string); // Constructor
	void setSpecie(std::string);
	std::string getSpecie();
	void setBreed(std::string);
	std::string getBreed();
private:
	// Attributes
	std::string specie;
	std::string breed;
};
