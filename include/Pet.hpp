#pragma once

/*! Pet class */
#include "Animal.hpp"

class Pet: public Animal{
	public:
		Pet(std::string, std::string, // Animal
			std::string, std::string); // Pet
		// Animal : specie, breed
		// Pet : name, birthday
		void setName(std::string); // Setters and getters
		std::string getName();
		void setBirthday(std::string);
		std::string getBirthday();
		void setAge(int);
		int getAge();
	private:
		// Attributes
		std::string name;
		std::string birthday;
		int age;
};
