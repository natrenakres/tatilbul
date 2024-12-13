export interface Hotel {
    $id: string;
    user_id: string;
    name: string;
    description?: string | undefined;
    address?: string | undefined;
    image?: string | undefined;    
}