# mo-magic

## Prerequisites
1. node v14.15.4 or above
2. npm v6.14.10 or above

## Installation steps
1. First install the node module by running the following command inside the root directory

 ```
 npm install
 ```
 this will install the api part .
 
 2. Copy env_example file, rename it to .env and then change necessary variables .
 3. Then go to frontend folder and run the above command again . This will install the frontend part .
 4. Inside frontend folder copy env.local_example , rename it to .env.local and then change necessary variables . 
 5. Then run ```npm run server``` from the root folder to start the backend .
 6. Execute ```npm run client``` from the root folder to start the frontend .
 
 ## Business Logics
 1. Api to create product is provided in the collection
 2. Two types of product can be created [single,multiple]
 3. multiple type products need atleast one type of variant(color/size)
 4. variants(color/size) should be given comman separated
 
 ## Additional Informations
 * The db is hosted in mongo db atlas .
 * All the api are availale in this [POSTMAN Collection](https://www.getpostman.com/collections/bb0f88ce5a1cb3ccb319)
