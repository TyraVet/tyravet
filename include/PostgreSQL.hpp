#pragma once

#include <pqxx/pqxx>
#include "DataBase.hpp"

class PostgreSQL{
	friend class DataBase<PostgreSQL>;
	public:
		PostgreSQL();
		virtual ~PostgreSQL();
		pqxx::connection connect(const std::string& server, const std::string& user,
								 const std::string& password, const std::string& database);
		void execute(std::string& sql, pqxx::connection& connection);
		void close(pqxx::connection& connection);
};
