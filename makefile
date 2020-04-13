CPP= g++
STANDAR= -std=c++17
LIBRARY= -I /usr/local/boost_1_72_0
SERIALIZATION= /usr/local/lib/libboost_serialization.a
CFLAGS = `pkg-config --cflags --libs gtkmm-3.0`

tyra: src/main.cpp NotebookMain.o AddPet.o Owner.o Person.o Pet.o Animal.o
	$(CPP) $(STANDAR) src/main.cpp NotebookMain.o AddPet.o Owner.o Person.o Pet.o Animal.o $(LIBRARY) $(CFLAGS) -o tyra $(SERIALIZATION)

NotebookMain.o: src/NotebookMain.cpp
	$(CPP) $(STANDAR) -c src/NotebookMain.cpp $(CFLAGS)

AddPet.o: src/AddPet.cpp
	$(CPP) $(STANDAR) -c src/AddPet.cpp $(CFLAGS)

Owner.o: src/Owner.cpp
	$(CPP) $(STANDAR) -c src/Owner.cpp

Person.o: src/Person.cpp
	$(CPP) $(STANDAR) -c src/Person.cpp

Pet.o: src/Pet.cpp
	$(CPP) $(STANDAR) -c src/Pet.cpp

Animal.o: src/Animal.cpp
	$(CPP) $(STANDAR) -c src/Animal.cpp

clean:
	rm *.o tyra
