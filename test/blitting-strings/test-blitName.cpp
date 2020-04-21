#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <catch2/catch.hpp>

int blitName(std::string str){
	std::istringstream iss(str);
	std::vector<std::string> vect;

	do{
		std::string substr;
		iss >> substr;
		if(substr == "")
			break;
		vect.push_back(substr);
	}while(iss);

	return vect.size();
}

TEST_CASE("1: blitName.", "[multi-file:2]"){
	REQUIRE(blitName("This is a great test") == 5);
	REQUIRE(blitName("Made by me") == 3);
	REQUIRE(blitName("Andres Ruiz") == 2);
}
