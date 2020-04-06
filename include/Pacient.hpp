#pragma once

/*! Pacient class */
#include "Pet.hpp"

class Pacient : public Pet{
    public:
        Pacient(int);
        ~Pacient();
        void setStatus(int);
        int getStatus();
        void setPet(Pet);
        Pet getPet();
    private:
        // Attributes
        int myStatus; /*!< Pacient status. */
        Pet myPet; /*!< Pacient = Pet. */
};
