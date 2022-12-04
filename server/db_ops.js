import Database from "better-sqlite3"
export {add_item,delete_items,list_items}
import md5 from "md5"


// Creation of Database 
let db= new Database('./grocery.db')

/* ---------------------------------------------
Creation of table grocery_list
Columns :
id PK and auto increment 
item not null 
will return error as table is already created 
-----------------------------------------------*/

let table = 
       'CREATE TABLE grocery_list (\
        id INTEGER PRIMARY KEY AUTOINCREMENT ,\
        item TEXT NOT NULL );'

try {
    db.exec (table)
    console.log('Table created')
} catch (error ){
    console.error(error.message)
}

/* ---------------------------------------------
Creation of table user_auth
Columns :
id PK and auto increment 
user_name not null 
password not null (encryted using md5)
will return error as table is already created 
-----------------------------------------------*/

let table_2 = 
       'CREATE TABLE user_auth (\
        id INTEGER PRIMARY KEY AUTOINCREMENT ,\
        user_name TEXT NOT NULL,\
        password TEXT NOT NULL);'

try {
    db.exec (table_2)
    console.log('Table created')
} catch (error ){
    console.error(error.message)
}


/* ---------------------------------------------
Function adds items to the table.  
-----------------------------------------------*/

function add_item (items) {
     let add_items_grocery = `INSERT INTO grocery_list (item) values ('${items}')`
     try {
     db.exec(add_items_grocery)
     console.log('Record added successfully')
     } 
     catch (error ){
        console.error(error)
    }
}


/* ---------------------------------------------
Function returns grocery_list  
-----------------------------------------------*/

function list_items () {
    let list_items = `select * from grocery_list`
    try {
    let list=db.prepare(list_items)
    return list.all()
    } 
    catch (error ){
       console.error(error)
   }
}

/* ---------------------------------------------
Function deletes grocery_list  

Currently will never enter error state sqllite returns 
0records in case of no deletion or records not present 
in table 
-----------------------------------------------*/

function delete_items (id) {
    let delete_items = `Delete from  grocery_list where id = '${id}'`
    try {
        db.exec(delete_items)
        console.log('Item deleted successfully')
    } 
    catch (error){
       console.error(error.message)
   }
}

/* ---------------------------------------------
function to login a user.  

I have already added one user to the table 
// Password ='11'
// username ='team11'

* Please note that password should be given in '' i.e '11', otherwise the encryp will produce a different output 

-----------------------------------------------*/

function login (user, pass) {
    let pass_en =md5(pass)
    let find_login =`SELECT user_name,password from user_auth where user_name = '${user}' and password='${pass_en}'`
    try {
        let list=db.prepare(find_login)
        return (list.all())
        } 
        catch (error ){
           console.error(error)
       }
    }

