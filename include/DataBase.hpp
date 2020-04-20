#pragma once

#include <string>
#include <pqxx/pqxx>

template<typename T>
class DataBase{
	public:
		DataBase(){
			setConnected(false);
		}

		virtual ~DataBase(){
			if(getConnected()){
					getDataBaseEngine().close();
			}
		}

		void setConnected(bool isConnected){
			connected = isConnected;
		}

		bool getConnected(){
			return connected;
		}

		void setDataBaseEngine(T engine){
			dataBaseEngine = engine;
		}

		T getDataBaseEngine(){
			return dataBaseEngine;
		}

		void connect(const std::string& server, const std::string& user,
					 const std::string& password, const std::string& database){
			dataBaseEngine.connect(server, user, password, database);
			setConnected(true);
		}
	private:
		T dataBaseEngine;
		bool connected;
};
