import Company from "../entities/Company";
import ICompany from "../interfaces/ICompany";
import { AppDataSource } from "../../database/data-source";
import { error } from "console";

const companyRepository = AppDataSource.getRepository(Company);

const getCompanies = (): Promise<ICompany[]> => {
    return companyRepository.find();
}

const getCompanyById = async (idt: number): Promise<ICompany | undefined> => {
    try {
        const company = await companyRepository.findOne({where: {id: idt}});
    
        if (!company){
            throw new Error("Empresa não encontrada");
        };
    
        return company;
      } catch (error) {
        throw error;
      }
}


const deleteCompany = (id: number): Promise<void> => {
    return companyRepository.delete(id).then(() => {});
}

const updateCompany = (idt: number, updatedCompanyData: Partial<ICompany>): Promise<ICompany | undefined> => {
    return companyRepository
    .findOne({where: {id: idt}})
    .then((company) => {
        if (company) {
          companyRepository.merge(company, updatedCompanyData);
          return companyRepository.save(company);
        }
        return undefined;
    });
}
const newCompany = (newCompanyData: ICompany): Promise<ICompany> => {
    const newCompany = companyRepository.create(newCompanyData);
    return companyRepository.save(newCompany);
}

export default { getCompanies, getCompanyById, deleteCompany, newCompany, updateCompany };