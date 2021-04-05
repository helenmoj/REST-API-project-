REST-API-project-
Node.js Rest APIs example with Express, Sequelize &amp; MySQL

NOTE, need to tidy up readme

Express is one of the most popular web frameworks for Node.js that supports routing, middleware, view system… Sequelize is a promise-based Node.js ORM that supports the dialects for Postgres, MySQL, SQL Server… In this tutorial, I will show you step by step to build Node.js Restful CRUD API using Express, Sequelize with MySQL database.


Run our Node.js application with command: node server.js.
The console shows:

Server is running on port 8080.
Executing (default): DROP TABLE IF EXISTS `tutorials`;
Executing (default): CREATE TABLE IF NOT EXISTS `tutorials` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `description` VARCHAR(255), `published` TINYINT(1), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `tutorials`
Drop and re-sync db.
Using Postman, we’re gonna test all the Apis above.

- Create a new Tutorial using POST /tutorials Api

{
"title": JS: Node Tut #1,
"description": "Tut#1 Description"
}


- Retrieve all Tutorials using GET /tutorials Api

http://localhost:8080/api/tutorials/2


- Update a Tutorial using PUT /tutorials/:id Api


{
"published": true
}


- Check tutorials table after some rows were updated:


mysql> select * from tutorials;
+----+-------------------+-------------------+-----------+---------------------+---------------------+
| id | title             | description       | published | createdAt           | updatedAt           |
+----+-------------------+-------------------+-----------+---------------------+---------------------+
|  1 | JS: Node Tut #1   | Tut#1 Description |         0 | 2019-12-13 01:13:57 | 2019-12-13 01:13:57 |
|  2 | JS: Node Tut #2   | Tut#2 Description |         0 | 2019-12-13 01:16:08 | 2019-12-13 01:16:08 |
|  3 | JS: Vue Tut #3    | Tut#3 Description |         1 | 2019-12-13 01:16:24 | 2019-12-13 01:22:51 |
|  4 | Vue Tut #4        | Tut#4 Description |         1 | 2019-12-13 01:16:48 | 2019-12-13 01:25:28 |
|  5 | Node & Vue Tut #5 | Tut#5 Description |         1 | 2019-12-13 01:16:58 | 2019-12-13 01:25:30 |
+----+-------------------+-------------------+-----------+---------------------+---------------------+


- Find all Tutorials which title contains ‘node’: GET /tutorials?title=node

- Find all published Tutorials using GET /tutorials/published Api

- Delete a Tutorial using DELETE /tutorials/:id Api

- Delete all Tutorials using DELETE /tutorials Api

