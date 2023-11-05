import { Request, Response, Router } from 'express';
import Company from '../entities/Company';
import CompanyRepository from '../repositories/CompanyRepository';
import ICompany from '../interfaces/ICompany';

const companyRouter = Router();

companyRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const companies = await CompanyRepository.getCompanies();
    return res.status(200).json(companies);
});

export default companyRouter;