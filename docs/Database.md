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


