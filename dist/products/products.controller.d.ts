import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): string;
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        product_id: bigint;
        category_id: bigint;
        brand_id: bigint | null;
        sku: string;
        product_name: string;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        attributes: import("@prisma/client/runtime/client").JsonValue;
        tags: string[];
        active: boolean;
        created_at: Date;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
