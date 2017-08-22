const express = require("express")
const router = express.Router()


router.get("/", function(request, response){
  const title = "hello"
  response.render('index', {
    title: title,
    data: data.users
  })
})

module.exports = router
