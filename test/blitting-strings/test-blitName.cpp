#include <iostream>
#include <sstream>
#include <algorithm>
#include <iterator>
#include <string>
#include <vector>
#include <catch2/catch.hpp>

std::string blitName(std::string str){
	std::istringstream iss(str);
	copy(std::istream_iterator<std::string>(iss), std::istream_iterator<std::string>(), std::ostream_iterator<std::string>(std::cout, "\n"));
	std::vector<std::string> blitted{std::istream_iterator<std::string>{iss}, std::istream_iterator<std::string>{}};
	return blitted[0] + " pene " + blitted[1];
}

TEST_CASE("1: blitName.", "[multi-file:2]"){
	REQUIRE(blitName("Andres Ruiz") == "Andres pene Ruiz");
}
