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

## FAQ
Why Mongo? - I wanted to quickly use a database to have the capability of having a more flexible search on the package name than just an exact match, Mongo also provides for a utility to select certain fields of the document which helped filtering unwanted ones.

Why a Schema? - It's important to document what's in the database! 

Why a controller, model and route file? - I like to keep files small and modular, the separation of concerns helps with clarity and makes working with several monitors/columns easier!

Why make the packages a JSON file and import to Mongo? - The file was close to a JSON file and I was able to quickly convert it just using find and replaces with VScode, I wanted to solve that using code but in the end I found much quicker to just do it with VSCode which provides great tools for this kind of problem, I wanted to start coding as fast as possible and for me, doing this just took about 10 minutes.
```