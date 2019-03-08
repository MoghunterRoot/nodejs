require("babel-register")

console.log("Début");



// fonction anonyme s'execute automatiquement
//async await
(async()=> {
	try {
		console.log("ma fonction Anonyme")
		let member = await getMember()
		let articles = await getArticles(member)
		console.log(articles)
	} catch(err) {
		console.log(err.message)
	}
})()


getMember()
	.then(member=> getArticles(member))
	.then(articles =>console.log(articles))
	.catch(err => console.log(err.message))

function getMember(){
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
			resolve('Member 1')
		}, 3000)
	}) 
}
//callback
function getArticles(member){
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
			resolve([1,2,3])
			//reject(new Error("Error during getArticles()"))
		}, 3000)
	}) 
}
console.log("fin")

//promesse en parallèle 

 p1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("promise 1")
	},1500)
})

p2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("promise 2")
	},3000)
})

Promise.all([p1, p2])
	.then((result)=> console.log(result))

	
Promise.race([p1, p2])
	.then((result)=> console.log(result))


//Promise
new Promise((resolve, reject)=> {
	setTimeout(() => {
		resolve('all good')
		//reject(new Error("Error during..."))
	},5000)
})

	.then(message =>console.log(message))
	.catch(err => console.log(err.message))


