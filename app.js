var express = require('express')
var app = express()
var fakeActivities = require('./fakeActivity.json')

app.get('/api/v1/activity/all', function (req, res) {
  res.send(fakeActivities)
})

app.get('/api/v1/activity/:id', function (req, res) {
  var activity = fakeActivities.filter(function (activity) {
    return (activity.id === req.params.id)
  })
  res.send(activity)
})






app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
