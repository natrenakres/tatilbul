export interface HotelRecord {
    id: string;    
    name: string;
    star: number;
    description?: string | undefined;
    address?: string | undefined;
    image?: string | undefined;    
    latitude?: string | undefined;
    longitude?: string | undefined;
}

export interface Hotel {
    name: string;
    description?: string | undefined;
    address?: string | undefined;
    image?: string | undefined;    
    latitude?: string | undefined;
    longitude?: string | undefined;
    star: number
}