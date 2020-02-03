const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

// html routes
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get("/exercise", function (req, res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
router.get('/stats', function(req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(workout => {
        res.json(workout)
    }).catch(err => {res.status(404).json(err)})
})
router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).sort({ date: -1 })
    .then(workout => {
        res.json(workout)
    }).catch(err => {res.status(404).json(err)})
})

module.exports = router;