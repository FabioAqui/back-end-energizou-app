import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateCompaniesTable1699185533692} from './migrations/1699185533692-CreateCompaniesTable'
import Company from "../app/entities/Company"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "R00t@2023",
    database: "projeto_energizou",
    synchronize: true,
    logging: false,
    entities: [Company],
    migrations: [CreateCompaniesTable1699185533692],
    subscribers: [],
})
