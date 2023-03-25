import cors from 'cors';
import express from 'express';

const configExpress = (app) =>{
 app.use(cors());
 app.use(express.json());
}

export default configExpress;
