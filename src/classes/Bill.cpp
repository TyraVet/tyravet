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
void setProducts(std::vector<Product> bProducts){
	products = bProducts;
}

std::vector<Product> getProducts(){
	return products;
}

// Methods
double calculateTotal(){
	for(int i = 0; i < products.size(); i++){
		total += products[i];
	}

	return total;
}
