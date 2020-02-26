tyra: src/main.cpp src/classes/wxWidgets/TyraApp.cpp src/classes/wxWidgets/StartupFrame.cpp
	g++ src/main.cpp src/classes/wxWidgets/*.cpp `wx-config --libs` `wx-config --cppflags` -o tyra

clean:
	rm *.o tyra
