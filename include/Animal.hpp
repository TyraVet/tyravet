#pragma once

/*! Animal class */
#include <string>
#include <boost/serialization/access.hpp>

class Animal{
	public:
		Animal(std::string, std::string); // Constructor
		Animal(); // Default
		~Animal();
		void setSpecie(std::string);
		std::string getSpecie();
		void setBreed(std::string);
		std::string getBreed();
	private:
		// Attributes
		std::string specie;
		std::string breed;
		// To serialize
		friend class boost::serialization::access;
		template<class Archive>
		void serialize(Archive &ar, const unsigned int version){
			ar << specie;
			ar << breed;
		}
};
