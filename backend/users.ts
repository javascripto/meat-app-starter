
export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {}

    public matches(another: User): boolean {
        return another !== undefined && 
            another.email === this.email && 
            another.password === this.password;
    }
}

export const users: { [key: string]: User } = {
    'amanda@gmail.com': new User('Amanda', 'amanda@gmail.com', 'amanda21'),
    'juliana@gmail.com': new User('Juliana', 'juliana@gmail.com', 'juliana23'),
};
