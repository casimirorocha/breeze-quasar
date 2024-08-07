export interface User {
    id: number;
    username: string;
    avatar: string;
    name: string;
    email: string;
    email_verified_at: string;
    token: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
