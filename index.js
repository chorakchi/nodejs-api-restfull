
import express   from 'express';
import  bodyParser from 'body-parser';
import {myFund} from './my-fund';
import {deleteGlobal} from './delete-global';
import {saveGlobal} from './save-global';



var app = express()
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);

var port = process.env.PORT || 8000;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// REGISTER ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/my-fund', myFund());
app.use('/api/delete-global', deleteGlobal());
app.use('/api/save-global', saveGlobal());
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('system run in  ' + port);