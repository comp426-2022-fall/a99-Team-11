import Database from "better-sqlite3"
export {add_item,delete_items,list_items}
import md5 from "md5"

let db= new Database('./grocery.db')

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


// Password ='11'
// username ='team11'

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


function login (user, pass) {
    let pass_en =md5(pass)
    let find_login =`SELECT user_name,password from user_auth where user_name = '${user}' and password='${pass_en}'`
    try {
        let list=db.prepare(find_login)
        console.log ((list.all()))
        } 
        catch (error ){
           console.error(error)
       }
    }

    login('team11','12')