const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require("./data")
const MongoClient = require("mongodb")

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))


const url = "mongodb://127.0.0.1:27017/robots"

// MongoClient.connect(url, function(err, db) {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Successfully connected to the database');
//   }
//   for (var i = 0; i < data.users.length; i++) {
//     const user = data.users[i];
//     db.collection("users").updateOne(
//       {id: user.id},
//       user,
//       {upsert: true}
//     )
//   }
// })

app.get("/", function(request, response){
  MongoClient.connect(url, function(err, db){
    db.collection("users").find().toArray().then(function(users){
      response.render('index', {
        users: users
      })
    })
  })
})

app.get("/users/:id", function(req, res){
  MongoClient.connect(url, function(err, db){
    db.collection("users").findOne({id: parseInt(req.params.id) }).then(function(user){
      res.render("profile", {
        user: user
      })
    })
  })
})



app.listen(3000, function(){
  console.log("Express started on port 3000")
})
