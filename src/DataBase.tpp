#include <string>
#include "../include/DataBase.hpp"

template<typename T>
DataBase<T>::DataBase(){
	setConnected(false);
}

template<typename T>
DataBase<T>::~DataBase(){
	if(connected)
		dataBaseEngine.close();
}

template<typename T>
void DataBase<T>::setConnected(bool isConnected){
	connected = isConnected;
}

template<typename T>
bool DataBase<T>::getConnected(){ return connected; }

template<typename T>
void DataBase<T>::setDataBaseEngine(T engine){
	dataBaseEngine = engine;
}

template<typename T>
T DataBase<T>::getDataBaseEngine(){ return dataBaseEngine; }

template<typename T>
void DataBase<T>::connect(const std::string& server, const std::string& user,
					   const std::string& password, const std::string& database){
	dataBaseEngine.connect(server, user, password, database);
	setConnected(true);
}

template<typename T>
DataBase<T>& DataBase<T>::operator<< (const std::string& sql){
	dataBaseEngine.execute(sql);
	return *this;
}
