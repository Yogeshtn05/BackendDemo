import express from 'express';
import { fetch, update,check,deleteid } from '../controller/Usercontroller.js';
const router = express.Router();

router.post('/fetch', fetch);
router.put('/update/:id', update);
router.get('/check',check);
router.delete('/delete/:id',deleteid)

export default router;