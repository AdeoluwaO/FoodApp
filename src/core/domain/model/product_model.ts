interface Prod {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

class ProductModel {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    constructor({ id,
        title,
        price,
        category,
        description,
        image,
    }: Prod) {
            this.id = id,
            this.title = title,
            this.price = price,
            this.category = category,
            this.description = description,
            this.image = image
    }
}