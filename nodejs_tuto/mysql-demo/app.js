const mysql = require("mysql")

var db = mysql.createConnection({
	host: "localhost",
	database: "nodejs",
	user: "root",
	password: ""

})

db.connect((err) => {
	if(err)
		console.log(err.message)	
	else 
		console.log("===== CONNECTION =====\n")
		console.log(' Connected to database on localhost:3306\n')

		db.query("SELECT * from members", (err, result) => {
			if (err){
				console.log(err.message)
			}
			else {
				console.log("====== SQL QUERY =======\n")
				console.log(result)
				console.log("The Result of Query is " + "["+result[2].name+"]") 	
			}
		})
		
})
