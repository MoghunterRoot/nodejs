const express = require('express');
const morgan = require('morgan')
const config = require("./config")
const {success, error} = require('functions')
const app = express();
const bodyParser = require("body-parser")

const members = [
	{
		id: 1, 
		name: "Vincent",
	},
	{
		id: 2, 
		name: "Axel",
	},
	{
		id: 3, 
		name: "Aurelie",
	},
	{
		id: 4, 
		name: "Sylvia",
	},
]
let MembersRouter = express.Router()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(config.rootAPI, MembersRouter)

MembersRouter.route("/:id")

	// get a Member 
	.get((req , res) => {
		let index = getIndex(req.params.id)
		if (typeof(index) == "string"){
			res.json(error(index))
		} else {
			res.json(success(members[index]))
		}
	})

	// Update a member
	.put( (req, res) => {
		let index = getIndex(req.params.id)
		if (typeof(index) == "string"){
			res.json(error(index))
		} else {
			let same = false; 
			for (let i = 0; i < members.length; i++){
				if (req.body.name == members[i].name && req.params.id != members[i].id ){
					same = true;
					break
				}
			}
			if (same){
				res.json(error('same name'))
			} else {
				members[index].name = req.body.name
				res.json(success(true))
			}
		}
	})

	// Delete a member
	.delete((req, res)=> {
		let index = getIndex(req.params.id)
		if (typeof(index) == "string"){
			res.json(error(index))
		} else {
			members.splice(index, 1)
			res.json(success(members))
		}
	})

MembersRouter.route("/")
	// Get All members
	.get( (req,res) => {
		if (req.query.max != undefined && req.query.max > 0){
			res.json(success(members.slice(0, req.query.max)))
		} else if (req.query.max != undefined){
			res.json(error("Error - Wrong max value"))
		} else {
			res.json(members)
		}
	})
	// Add a member 
	.post( (req, res) => {
		if (req.body){
			let sameName = false;
			for (let i = 0; i < members.length; i++){
				if (members[i].name == req.body.name){
					
					sameName = true;
					break
				}
			}
			if (sameName){
				res.json(error("Error - Name Already Taken"))
			} else {
				let member = {
					id: createID(),
					name: req.body.name,	
				}
				members.push(member)
				res.json(success(member))
			}
		} else {
			res.json(error("Error - No name Value "))
		}
	})

app.listen(config.port, () => console.log("started on port " + config.port))

function getIndex(id){
	for (let i = 0; i < members.length; i++){
		if (members[i].id == id)
			return i
	}
	return 'Error - request have  wrong id'
}

function createID(){
	return members[members.length-1].id + 1
}