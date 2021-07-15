const functions = require("firebase-functions");
const expreee = require('express')

const app = express()

    app.get('/baseballteams', (req, res) => {
        res.send('ummmm..teh Metz?')
    })
    
    app.get('/basketball', (req, res) => {
            res.send('ummmm..the Heat?')

    })

    app.get('/my-little-ponnies', (req, res) => {
        res.send ('You found the secret page. Go ponies, Go?')
    })



exports.app = functions.https.onRequest(app)





// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//