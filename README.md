

Node.js application to perform basic CRUD operations on Products PostgreSQL DB table. Authentication/security has been implemented using bcrypt/JWT.

# User Can Perform

1. Signup
2. Login
3. Update his details
4. Delete his account
5. Create Product
6. Delete/DeleteAll Products
7. Update Product
8. View/ViewAll Products

# Steps to install

1. Extract The Given package

2. Use "npm install " to generate node_modules at the root of the directory

3. Create DB using queries DBCREATION.txt and change the DBName in .env of root directory

4. Start: npm run start and use postman collection in case if want to test

5. Use Postman collection with proper Auth "Token" in header part of PostMan(ex: Key:Authorization, val: Bearer "Token") returned after Login
