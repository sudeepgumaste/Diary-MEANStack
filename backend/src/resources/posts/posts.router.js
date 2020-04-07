import {Router} from 'express';
import {getPosts, createPost, updatePost, deletePost, getPostById} from './posts.controller'

import {verifyToken} from '../auth/auth.middleware';

export const postsRouter = Router();

postsRouter.get('/', verifyToken, getPosts);
postsRouter.get('/:id', verifyToken, getPostById);
postsRouter.post('/create', verifyToken, createPost);
postsRouter.patch('/:id', verifyToken, updatePost);
postsRouter.delete('/:id', verifyToken, deletePost);