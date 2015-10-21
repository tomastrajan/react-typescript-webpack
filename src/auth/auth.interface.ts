export interface Profile {
    _id: string;
    aud: string;
    clientID: string;
    created_at: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    gender: string;
    given_name: string;
    global_client_id: string;
    iat: number;
    identities: Identity[];
    iss: string;
    locale: string;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: string;
    user_id: string;
}

interface Identity {
    access_token: string;
    connection: string;
    expires_in: number;
    isSocial: boolean;
    provider: string;
    user_id: string;
}