const fs = require("fs");

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