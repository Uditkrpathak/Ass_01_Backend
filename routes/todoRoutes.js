import express from 'express';
import { createTodo, getTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.post('/post', createTodo);
router.get('/get', getTodo);
router.delete('/:id', deleteTodo);

export default router;
