CPP= g++
STANDAR= -std=c++17
LBOOST= -I/usr/local/boost_1_72_0
LPQXX= -lpqxx -lpq
LSERIALIZATION= /usr/local/lib/libboost_serialization.a
CFLAGS = `pkg-config --cflags --libs gtkmm-3.0`

tyra: src/main.cpp NotebookMain.o AddPet.o Owner.o Person.o Pet.o Animal.o
	$(CPP) $(STANDAR) src/main.cpp NotebookMain.o AddPet.o Owner.o Person.o Pet.o Animal.o $(LBOOST) $(LPQXX) $(CFLAGS) -o tyra $(LSERIALIZATION)

NotebookMain.o: src/NotebookMain.cpp
	$(CPP) $(STANDAR) -c src/NotebookMain.cpp $(CFLAGS)

AddPet.o: src/AddPet.cpp
	$(CPP) $(STANDAR) -c src/AddPet.cpp $(CFLAGS) $(LPQXX)

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
