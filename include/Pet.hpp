#pragma once

/*! Pet class */
#include "Animal.hpp"

class Pet: public Animal{
	public:
		Pet(std::string, std::string, // Animal
		    std::string, std::string); // Pet
		Pet(); // Default
		~Pet();
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
