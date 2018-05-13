
import express   from 'express';

export function saveGlobal() {
    var router = express.Router(); 

    function globalReq(req, res) { 
        res.json({ message: 'Save with succesfull', codeMessage: 200 }); 
    };
    router.post('/', function(req, res) { 
        res.json({ message: 'Save with succesfull', codeMessage: 200 }); 
    });
    router.put('/', function(req, res) { 
        
        res.json({ message: 'Save with succesfull', codeMessage: 200 }); 
    });
    router.get('/', function(req, res) { 
        res.json({ message: 'Save with succesfull', codeMessage: 200 }); 
    });
    router.get('/a', function(req, res) { 
        res.json({ message: 'Save with succesfull a', codeMessage: 200 }); 
    });
    return router 
}