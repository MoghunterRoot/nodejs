const mysql = require("mysql")

var db = mysql.createConnection({
	host: "localhost",
	database: "nodejs",
	user: "root",
	password: "po"

})

db.connect((err) => {
	if(err)
		console.log(err.message)	
	
	else 
		console.log("Successfuly Connected to database")	
})
