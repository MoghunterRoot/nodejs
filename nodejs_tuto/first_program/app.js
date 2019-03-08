/*
* Pour lancer le programme dans la console on fera " node <le_nom_du_programme>"
*/ 


// inclusion d'un module 


const fs = require("fs");
require("http");


// function en ES6 

setTimeout(()=>{
	console.log("test")
})

setTimeout(() => console.log("test 2"))

// utilisation des modules 
console.log(os.arch())

//lire un fichier
fs.readFile("text.txt", "utf-8", (err, data) => {
	if (err){
		console.log(err);
	} else {
	console.log(data);
	// ecrire dans un fichier 
	fs.writeFile('text.txt', 'Hello Node.js', 'utf8', (err) => {
		
		fs.readFile("text.txt", "utf-8", (err, data) => {
			console.log(data)
		} )
	})
	
}
})
