# Installation

Run `npm install` to install all dependencies, all you should actually need is Mongodb, Mongoose and Nodemon

# Creating the package DB

I converted the packages file into a handy JSON file in order to be able to import it into a mongo database using `mongoimport --db packageSearch --collection package --type json --file packagesData.json --jsonArray`

The first option is the name of the db, the second the name off the collection, third will be the type of file, fourth is the path to said file and the sixth is a flag to let mongoimport know that it's an array and should create several documents

## Running the server

`npm start` and `mongod`  in that order

## Querying the service
I've created two routes for this service, both are a `GET` method and are the following:
http://localhost:3000/packages
Which will return ALL the packages
http://localhost:3000/packages/search
Which needs a `query` property on the body of the request and will query the database for a package with a name that includes the query. 
```