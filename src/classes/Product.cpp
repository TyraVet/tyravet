/*
 * Product class implementation
*/

#include <string>
#include "Product.h"

// Constructor
Product::Product(int pID, double pPrice, std::string pCategory){
	setID(pID);
	setPrice(pPrice);
	setCategory(pCategory);
}

// Setters and getters
void Product::setID(int pID){
	ID = pID;
}

int Product::getID(){
	return ID;
}

void Product::setPrice(double pPrice){
	price = pPrice;
}

double Product::getPrice(){
	return price;
}

void Product::setCategory(std::string pCategory){
	category = pCategory;
}

std::string Product::getCategory(){
	return category;
}
