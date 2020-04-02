#pragma once

/*! Person class */
#include<string>

class Person{
	public:
		Person(std::string, std::string, std::string);
		Person(); // Default
		~Person();
		void setName(std::string);
		std::string getName();
		void setLastName(std::string);
		std::string getLastName();
		void setGender(std::string);
		std::string getGender();
	private:
		std::string name; /*!< Person's name. */
		std::string lastName; /*!< Person's lastname. */
		std::string gender; /*!< Person's gender. */
};
