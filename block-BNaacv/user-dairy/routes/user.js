var express = require('express');

var router = express.Router();

router.get('/new', (req, res) => {
  res.render('form');
});

router.get('/:id', (req, res) => {
  res.render('userDetails', {
    user: { name: 'Altcampus', email: 'user@altcampus.io' },
  });
});
router.get('/', (req, res) => {
  res.render('users', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

router.post("/",(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

module.exports = router;