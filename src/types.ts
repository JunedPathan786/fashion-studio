export interface CollectionCategory {
  id: string;
  name: string;
  tagline: string;
  image: string;
  itemCount?: string;
  description: string;
  featuredItems: CollectionItem[];
}

export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  fabric?: string;
  fit?: string;
  price?: string;
  originalPrice?: string;
  priceNote?: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
}

export interface AccessoryProduct {
  id: string;
  title: string;
  category: 'Watches' | 'Sunglasses' | 'Belts';
  price: string;
  originalPrice?: string;
  tag: string;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  colorOptions?: string[];
  specs?: { label: string; value: string }[];
}

export interface LookbookStory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
  tags: string[];
  aspect: string;
}

export interface StudioService {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: 'Sparkles' | 'Shirt' | 'Tag' | 'UserCheck' | 'Scissors' | 'Clock';
}

export interface StoreInfo {
  name: string;
  tagline: string;
  positioning: string;
  phone: string;
  whatsappNumber: string;
  whatsappGroupUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  location: string;
  city: string;
  landmark: string;
  timings: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
}
