export interface LoginResult {
    errors?: {
        email?: string[] | undefined;
    } | undefined | null
}