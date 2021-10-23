const router = require('express').Router();
const db = require('../../config/connection')

//"/api/movie"
router.get('/', (req,res)=>{
    const query = 'SELECT * FROM movie'

    db.query(query, (err,data) => {
        if(err){
            res.status(500).json({error:"you messed up"});
            return;
        }
        res.json(data);
    });
});

router.get('/reviews',(req,res)=>{
    const query = 'SELECT movie.id, movie.movie_name AS movie, reviews.review AS review FROM reviews JOIN movie ON reviews.movie_id = movie.id'
    db.query(query, (err, data) => {
        if(err){
            res.status(500).json({error:"you messed up"});
            return;
        }
        res.json(data);
    });
});

router.post('/', (req,res) => {
    const query = 'INSERT INTO movie (movie_name) VALUES(?)'

    db.query(query, req.body.name, (err,data) => {
        if(err){
            res.status(500).json({error:"you messed up"});
            return;
        }
        res.json(data);
    });
})

router.put('/:id',(req,res)=>{
    const query="UPDATE movie SET movie_name=(?) WHERE id=?";

    db.query(query,[req.body.name ,req.params.id], (err,data)=>{
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });
})

router.delete('/:id', (req,res) => {
    const query = "DELETE FROM movie WHERE id=?"

    db.query(query, req.params.id, (err,data) => {
        if(err){
            res.status(500).json({error:"you messed up"});
            return;
        }
        res.json(data);
    });
});



module.exports = router