import { Router } from 'express';
import companyRouter from '../controllers/CompanyController';

const routers = Router();

routers.use('/companies', companyRouter);

export default routers;