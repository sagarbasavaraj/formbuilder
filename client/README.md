form-builder
======================

Form builder application written using Angular, node and mongodb.

### Dependencies

* AngularJS 1.4.2
* NodeJs 0.10.0 +
* NPM
* MongoDb
* Bootstrap 3.3.5
* Gulp (to build the project) 3.9.0

## Installing the Application

## prerequisite.
* Install NodeJs
* Install Mongodb

* First install bower and gulp globally if you don't have already:
 ```
  $ npm install -g gulp
  $ npm install -g bower 
 ```

* Clone git repo and cd to server folder: 
 ``` 
  $ git clone <git path>
  $ cd form-builder/server
 ```
  
* Install required node packages: 
 ``` 
  $ npm install 
  Start mongodb - 
  $ mongod --dbpath <set db path>
  Example: mongod --dbpath C:\form-builder\server\data
  Create database:
  $mongo
  >use formbuilder
 ``` 
  *Start server
  ```
  $cd server
  $npm start
  ``` 
 
 *Client side install
 ```
 $cd client
 ```
 *Install node pacakages.
  ```
  $npm install
  ```
* And finally, install bower dependencies: 
 ``` 
  $ bower install 
 ``` 
 
## Launching the App

* Start the gulp: 
 ```
  $ gulp serve - To run the application
  $ gulp test - To run the unit test cases.
  $ gulp protractor - To run the e2e test case. Please close chrome and run this command otherwise some time we may 
                      get InvalidElementStateError.
 ```
 
* It will open the app in your default browser. 

### Technical Details

Currently following use case is implemented:
1. Create and save form -  Completed with unit test and e2e test cases.

Yet to implement.
1. Show all saved forms - API is implemented but need to integrate with UI.
2. Edit form - not yet implemented.
3. Delete form - not yet implemented.
4. Update form - not yet implemented.

