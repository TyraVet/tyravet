#pragma once

/*! Client class */
#include <string>
#include "Owner.hpp"
#include "Pet.hpp"

class Client{
    public:
        Client(Owner, Pet);
        Client(); // Default
        ~Client();
        void setOwner(Owner); // Setters and getters
        Owner getOwner();
        void setPet(Pet);
        Pet getPet();
    private:
        Owner myOwner;
        Pet myPet;
};
