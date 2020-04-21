CPP= g++
STANDAR= -std=c++11
I_CATCH_SINGLE_INCLUDE= -I/usr/include/catch2

blitting: test-blitName.o test-main.o
	$(CPP) $(STANDAR) -Wall $(I_CATCH_SINGLE_INCLUDE) -o blitting test-main.o test-blitName.o

test-blitName.o: test-blitName.cpp
	$(CPP) $(STANDAR) -Wall $(I_CATCH_SINGLE_INCLUDE) -c test-blitName.cpp

test-main.o: test-main.cpp
	$(CPP) $(STANDAR) -Wall $(I_CATCH_SINGLE_INCLUDE) -c test-main.cpp

clean:
	rm *.o blitting
