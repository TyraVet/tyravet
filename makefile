CPP= g++
STANDAR= -std=c++17
DEBUG= -g
LBOOST= -I/usr/local/boost_1_72_0
LPQXX= -lpqxx -lpq
LSERIALIZATION= /usr/local/lib/libboost_serialization.a
CFLAGS = `pkg-config --cflags --libs gtkmm-3.0`

# Release
tyra: src/main.cpp NotebookMain.o AddPet.o PostgreSQL.o Owner.o Person.o Pet.o Animal.o
	$(CPP) $(STANDAR) src/main.cpp NotebookMain.o AddPet.o PostgreSQL.o Owner.o Person.o Pet.o Animal.o $(LBOOST) $(LPQXX) $(CFLAGS) -o tyra $(LSERIALIZATION)

# Debug
tyra-debug: src/main.cpp NotebookMain.o AddPet.o PostgreSQL.o Owner.o Person.o Pet.o Animal.o
	$(CPP) $(STANDAR) $(DEBUG) src/main.cpp NotebookMain.o AddPet.o PostgreSQL.o Owner.o Person.o Pet.o Animal.o $(LBOOST) $(LPQXX) $(CFLAGS) -o tyra-debug $(LSERIALIZATION)

NotebookMain.o: src/NotebookMain.cpp
	$(CPP) $(STANDAR) -c src/NotebookMain.cpp $(CFLAGS)

AddPet.o: src/AddPet.cpp
	$(CPP) $(STANDAR) -c src/AddPet.cpp $(CFLAGS) $(LPQXX)

PostgreSQL.o: src/PostgreSQL.cpp
	$(CPP) $(STANDAR) -c src/PostgreSQL.cpp $(LPQXX)

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
