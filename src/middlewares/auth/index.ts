
import { ITokenPayload } from "../../types/interfaces/app-context-interfaces";
import { errorMessage } from "../../types/variables/contants";
import { Role } from "../../types/variables/enum";
export const apiAccess = (roles?: Role[]) => {
    return (req: any, res: any, next: any) => {
        const token = req.headers['Authorization'] || req.headers['authorization'];
        if (!token) return res.status(401).send(errorMessage[401]);
        else {
            // farebase.verifyToken(token).then((decodedToken) => {
            //     const payload: ITokenPayload = decodedToken
            //     req.payload = payload;
            //     if (!roles || !roles.length || roles.includes(payload.role)) next();
            //     else return res.status(401).send(errorMessage[401]);
            // }).catch(() => res.status(401).send(errorMessage[401]))
        }
    }
}

