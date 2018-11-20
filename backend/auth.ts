import * as jwt from 'jsonwebtoken';
import { User, users } from './users';
import { apiConfig } from './api-config';
import { Request, Response} from 'express';


export const handleAuthentication = (req: Request, res: Response) => {
    const user = req.body;

    if (isValid(user)) {
        const { name, email } = users[user.email];
        const accessToken = jwt.sign({
            sub: email,             // subject
            iss: 'meat-api',        // issuer = emissor do token
        }, apiConfig.secret);       // secret
        res.json({ name, email, accessToken});
    } else {
        res.status(403).json({ message: 'dados inválidos' });
    }
};

const isValid = (user: User) => {
    if (!user) return false;
    
    const dbUser = users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
};
