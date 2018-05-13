
import express   from 'express';

export function deleteGlobal() {
    var router = express.Router(); 
    
    router.get('/', function(req, res) { 
        res.json({ message: 'deleted with succesfull', codeMessage: 200 }); 
    });
    return router 
}