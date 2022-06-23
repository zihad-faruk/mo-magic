# mo-magic

## Installation steps
1. First install the node module by running the following command inside the root directory

 ```
 npm install
 ```
 this will install the api part .
 
 2. Copy env_example file, rename it to .env and then change necessary variables . To avoid any problems run in 5000 port .
 3. Then go to frontend folder and run the above command again . This will install the frontend part .
 4. Then run ```npm run server``` to start the backend .
 5. Execute ```npm run client``` to start the backend .
 
 ## Business Logics
 1. Api to create product is provided in the collection
 2. Two types of product can be created [single,multiple]
 3. multiple type products need atleast one type of variant(color/size)
 4. variants(color/size) should be given comman separated
 
 ## Additional Informations
 * The db is hosted in mongo db atlas .
 * All the api are availale in this [POSTMAN Collection](https://www.getpostman.com/collections/bb0f88ce5a1cb3ccb319)
