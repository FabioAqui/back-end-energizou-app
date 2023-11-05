import Company from "../entities/Company";
import ICompany from "../interfaces/ICompany";
import { AppDataSource } from "../../database/data-source";

const companyRepository = AppDataSource.getRepository(Company);

const getCompanies = (): Promise<ICompany[]> => {
    return companyRepository.find();
}

export default { getCompanies };