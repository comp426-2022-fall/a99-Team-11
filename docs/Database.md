# Database 

Our database grocery.db uses SQLite3. 

# Tables 

The database has two main tables:

| Tables        | Purpose       |
| ------------- |:-------------:| 
| grocery_list  | To store list of grocery items | 
|  user_auth    | To store user authentication information      |  

### Grocery list 

| Columns       | Purpose       |
| ------------- |:-------------:| 
| id  | *Pk set to autoincrement  | 
| item      | Stores the list of grocery items     | 

### user_auth 

| Columns       | Purpose       |
| ------------- |:-------------:| 
| id  | *Pk set to autoincrement  | 
| user_name      | Stores user name     |
| password      | Stores hashed password    |

*Please note table user_auth is only present in the backend and is part of our long term vision. 

The file db_ops.js has all the reuseable code to interact with the database:

### 1. function add_item:

Adds items to the database table grocery_list.

### 2. function list_items:

List all items stored in the database table grocery_list. 

### 3. function delete_items:

Deletes each items stored in the database table grocery_list. 

### 4. function login:

Looks up user information in user_auth for login. 





