import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
