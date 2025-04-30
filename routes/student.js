import express from 'express';
import {
    addStudent, 
    deleteStudent, 
    getAllStudent, 
    updateStudent
} from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudent);
router.post('/addStudent', addStudent);
router.delete('/deleteStudent', deleteStudent);
router.patch('/updateStudent', updateStudent);

export default router;