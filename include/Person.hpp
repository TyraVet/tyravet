#pragma once

/*! Person class */
#include <string>
#include <boost/serialization/access.hpp>

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
		// Attributes
		std::string name; /*!< Person's name. */
		std::string lastName; /*!< Person's lastname. */
		std::string gender; /*!< Person's gender. */
		// To serialize
		friend class boost::serialization::access;
		template<class Archive>
		void serialize(Archive &ar, const unsigned int version){
			ar << name;
			ar << lastName;
			ar << gender;
		}
};
