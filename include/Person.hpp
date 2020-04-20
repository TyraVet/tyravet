#pragma once

/*! Person class */
#include <string>
#include <vector>
#include <boost/serialization/access.hpp>

class Person{
	public:
		Person(std::string name);
		Person(); // Default
		~Person();
		void setName(std::string name);
		std::string getName();
		void setLastName(std::string lastName);
		std::string getLastName();
		std::string getFullName();
		std::vector<std::string> blitName(std::string name);
	private:
		// Attributes
		std::string name; /*!< Person's name. */
		std::string lastName; /*!< Person's lastname. */
		// To serialize
		friend class boost::serialization::access;
		template<class Archive>
		void serialize(Archive &ar, const unsigned int version){
			ar << name;
			ar << lastName;
		}
};
