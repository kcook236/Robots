const express = require("express")
const router = express.Router()


router.get("/users/:id", function(request, response){
  const robot = parseInt(request.params.id)
  let profile = false
  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].id === robot){
      profile = data.users[i]
    }
  }
  const dataInfo = data.users
  response.render("profile", {
    profile: profile,
    data: dataInfo
  })
})
