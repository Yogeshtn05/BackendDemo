import express from 'express';
import { fetch, update, check, deleteid, addUser } from '../controller/Usercontroller.js'; // Import the new addUser function
const router = express.Router();

// Existing routes
router.post('/fetch', fetch);
router.put('/update/:id', update);
router.get('/check', check);
router.delete('/delete/:id', deleteid);

// New route for adding a user
router.post('/add', addUser);  // This will handle POST requests to /api/add

export default router;
