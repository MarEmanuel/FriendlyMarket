interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;

    // > Se añade un constructor que por defecto inicializa cualquier producto en cero, que luego se reemplaza por el producto recibido.
    constructor() {
        this.id = 0;
        this.title = '';
        this.description = '';
        this.category = '';
        this.price = 0;
        this.discountPercentage = 0;
        this.rating = 0;
        this.stock = 0;
        this.tags = [];
        this.brand = '';
        this.sku = '';
        this.weight = 0;
        this.dimensions = { width: 0, height: 0, depth: 0 };
        this.warrantyInformation = '';
        this.shippingInformation = '';
        this.availabilityStatus = '';
        this.reviews = [];
        this.returnPolicy = '';
        this.minimumOrderQuantity = 0;
        this.meta = { createdAt: '', updatedAt: '', barcode: '', qrCode: '' };
        this.images = [];
        this.thumbnail = '';
    }
}
