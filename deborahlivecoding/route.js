import express from 'express';

let router = express.Router();

let users =[ 'deborah', 'hakima', 'mathieu', 'asma' ];

router.get ('/', (req, res) =>{
	res.status (200).send (users);
});

router.get ('/:paramid', (req, res) =>{
	let id = req.params.paramid;
	res.status (200).send (users[id]);
});

export { router };