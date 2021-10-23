const router = require('express').Router()
const db = require('../../config/connection')


//"/api/reviews"
router.get('/',(req,res)=>{
    const query = 'SELECT * FROM reviews'
    db.query(query, (err, data) => {
        if(err){
            res.status(500).json({error:"you messed up"});
            return;
        }
        res.json(data);
    });
});

router.post('/:id',(req,res)=> {

    const query ='INSERT INTO reviews (movie_id, review) VALUES (?, ?)';

        db.query(query, [req.params.id, req.body.name] ,(err, data) => {
            if (err) {
                res.status(500).json({ error: 'you messed up' });
                return;
            }
            res.json(data);
        });
});

router.put('/:id',(req,res)=>{
    const query = "UPDATE reviews SET review=(?) WHERE movie_id=?";

    db.query(query,[req.body.name ,req.params.id], (err,data)=>{
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });
})

router.delete('/:id', (req,res)=>{
    
    const query = 'DELETE FROM reviews WHERE id=?';

    db.query(query, req.params.id, (err,data)=>{
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });
});




module.exports = router