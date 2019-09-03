steps

-git status
-mkidr folderName
-cd folderName
-git init
-npm init -y
-code .
(in package.json add a line "server": "nodemon index.js" under scripts)
-npm i nodemon -D <- install nodemon as a dependency

-npx gitignore node <- ignores node.modules

endpoint(url + http method) === function

POST /api/movies (body: movie) === postApiMovies(movie)

|non REST         | REST                    |
|:--------------- |:------------------------|
|/createMovie     | POST /api/movies        |
|/removeMovie/:id | |DELETE /api/movies/:id |

Other Approuches to building Web APIs

- GraphQL
- gRPC
- RPC
- SOAP