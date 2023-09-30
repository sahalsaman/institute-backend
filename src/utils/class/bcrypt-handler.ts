
import bcrypt from 'bcrypt'
const saltRounds = 10;

export class BcryptHandler {
    constructor() {

    }

    getPasswordHash = async (password: string): Promise<string> => {
        return await bcrypt.hash(password, saltRounds)
    }

    //function to verify password
    verifyPasswordHash = async (hash: string, password: string) => {
        return await bcrypt.compare(password, hash)
    }

}
