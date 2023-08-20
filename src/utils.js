import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt' 
import {faker } from '@faker-js/faker'


export const createHash = password => bcrypt.hashSync(password,bcrypt.genSaltSync(10))
export const isValidPassword = (user, password) => bcrypt.compareSync(password,user.password)


export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        stock: faker.random.numeric(1),
        image: faker.image.image()
    }
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

// console.log(__filename)
// console.log(__dirname)

export default __dirname; // Basicamente, __dirname es el directorio donde se encuentra este archivo