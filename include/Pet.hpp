#pragma once

/*! Pet class */
#include "Animal.hpp"
#include "Owner.hpp"

class Pet: public Animal{
	public:
		Pet(std::string, std::string, // Animal
		    std::string, std::string, Owner*); // Pet
		Pet(); // Default
		~Pet();
		void setName(std::string); // Setters and getters
		std::string getName();
		void setBirthday(std::string);
		std::string getBirthday();
		void setOwner(Owner*);
		Owner* getOwner();
		void setAge(int);
		int getAge();
	private:
		// Attributes
		std::string name; /*!< Pet's name. */
		std::string birthday; /*!< Pet's birthay. */
		Owner* myOwner; /*!< Pet's owner. */
		int age; /*!< Pet's age. */
};
