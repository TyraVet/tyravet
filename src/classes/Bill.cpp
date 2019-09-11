/*
 * Bill class implementation
*/

#include <vector>
#include <string>
#include "Bill.h"

// Constructor
Bill::Bill(std::vector<Product> bProducts){
	setProducts(bProducts);
}

// Setters and getters
void Bill::setProducts(std::vector<Product> bProducts){
	products = bProducts;
}

std::vector<Product> Bill::getProducts(){
	return products;
}

// Methods
double Bill::calculateTotal(){
	for(int i = 0; i < products.size(); i++){
		total += products[i].getPrice();
	}

	return total;
}
