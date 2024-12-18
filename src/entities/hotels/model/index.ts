
export interface HotelRecord {
    id: string;    
    name: string;
    star: number;
    description?: string | undefined;
    address?: string | undefined;
    image?: string | undefined;    
    latitude?: number | undefined;
    longitude?: number | undefined;
}

export interface Hotel {
    name: string | undefined;
    description?: string | undefined;
    address?: string | undefined;
    image?: string | undefined;    
    latitude?: number | undefined;
    longitude?: number | undefined;
    star: number | undefined,
    link?: string | undefined
}

export const TestHotel: Hotel =  {
    name: 'Hotel München Palace 2',
    description: '1 A luxurious 5-star hotel offering elegant rooms and suites with a blend of modern and classic styles. It features a gourmet restaurant, a bar, a fitness centre, and a spa area with a sauna and steam bath. Free WiFi is available throughout the property.',
    address: 'Trogerstraße 21, Bogenhausen, 81675 München, Germany',
    link: 'https://www.munich-palace.de/en/',
    image: 'https://www.small-luxury-hotels.com/content/dam/slh/hotels/europe/germany/hotel-munich-palace/SLH-Hotel-Munich-Palace-Munich-Germany-04.jpg.adapt.crop16x9.1200w.jpg',
    star: 5,
    latitude: 48.144779,
    longitude: 11.607640
  }