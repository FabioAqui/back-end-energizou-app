import { Request, Response, Router } from 'express';
import Company from '../entities/Company';
import CompanyRepository from '../repositories/CompanyRepository';
import ICompany from '../interfaces/ICompany';

const companyRouter = Router();

companyRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const companies = await CompanyRepository.getCompanies();
    return res.status(200).json(companies);
});

companyRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    const companies = await CompanyRepository.newCompany(req.body);
    return res.status(200).json(companies);
});

companyRouter.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const companies = await CompanyRepository.getCompanyById(id);
    return res.status(200).json(companies);
});

companyRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const company = await CompanyRepository.updateCompany(id, req.body);
    return res.status(201).json(company);
});

companyRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const companies = await CompanyRepository.deleteCompany(id);
    return res.status(201).json({message:"Empresa removida com sucesso!"});
});


export default companyRouter;