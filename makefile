CPP= g++
STANDAR= -std=c++17
OBJ= -c
DEBUG= -g
WARN= -Wall
EXEC= -o
LBOOST= -I/usr/local/boost_1_72_0
LSERIALIZATION= /usr/local/lib/libboost_serialization.a
LPQXX= -lpqxx -lpq
CFLAGS = `pkg-config --cflags --libs gtkmm-3.0`
EXEC_RELEASE= tyra
EXEC_DEBUG= tyra-debug

# Multiple executables
.TYRA: all release debug
all: release debug
release: $(EXEC_RELEASE)
debug: $(EXEC_DEBUG)

# Release
$(EXEC_RELEASE): src/main.cpp NotebookMain.o AddPet.o AddAppointment.o Tyra.o Owner.o Person.o Pet.o Animal.o
	$(CPP) $(STANDAR) $(WARN) src/main.cpp NotebookMain.o AddPet.o AddAppointment.o Tyra.o Owner.o Person.o Pet.o Animal.o $(LBOOST) $(LPQXX) $(CFLAGS) $(EXEC) $(EXEC_RELEASE) $(LSERIALIZATION)

# Debug
$(EXEC_DEBUG): src/main.cpp NotebookMain.o AddPet.o AddAppointment.o Tyra.o Owner.o Person.o Pet.o Animal.o
	$(CPP) $(STANDAR) $(DEBUG) $(WARN) src/main.cpp NotebookMain.o AddPet.o AddAppointment.o Tyra.o Owner.o Person.o Pet.o Animal.o $(LBOOST) $(LPQXX) $(CFLAGS) $(EXEC) $(EXEC_DEBUG) $(LSERIALIZATION)

NotebookMain.o: src/NotebookMain.cpp
	$(CPP) $(STANDAR) $(OBJ) src/NotebookMain.cpp $(CFLAGS)

AddPet.o: src/AddPet.cpp
	$(CPP) $(STANDAR) $(OBJ) src/AddPet.cpp $(CFLAGS) $(LPQXX)

AddAppointment.o: src/AddAppointment.cpp
	$(CPP) $(STANDAR) $(OBJ) src/AddAppointment.cpp $(CFLAGS)

Tyra.o: src/Tyra.cpp
	$(CPP) $(STANDAR) $(OBJ) src/Tyra.cpp

Owner.o: src/Owner.cpp
	$(CPP) $(STANDAR) $(OBJ) src/Owner.cpp

Person.o: src/Person.cpp
	$(CPP) $(STANDAR) $(OBJ) src/Person.cpp

Pet.o: src/Pet.cpp
	$(CPP) $(STANDAR) $(OBJ) src/Pet.cpp

Animal.o: src/Animal.cpp
	$(CPP) $(STANDAR) $(OBJ) src/Animal.cpp

clean:
	rm *.o tyra tyra-debug
