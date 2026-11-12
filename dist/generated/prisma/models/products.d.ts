import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type productsModel = runtime.Types.Result.DefaultSelection<Prisma.$productsPayload>;
export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
export type ProductsAvgAggregateOutputType = {
    product_id: number | null;
    category_id: number | null;
    brand_id: number | null;
    base_price: runtime.Decimal | null;
};
export type ProductsSumAggregateOutputType = {
    product_id: bigint | null;
    category_id: bigint | null;
    brand_id: bigint | null;
    base_price: runtime.Decimal | null;
};
export type ProductsMinAggregateOutputType = {
    product_id: bigint | null;
    category_id: bigint | null;
    brand_id: bigint | null;
    sku: string | null;
    product_name: string | null;
    description: string | null;
    base_price: runtime.Decimal | null;
    active: boolean | null;
    created_at: Date | null;
};
export type ProductsMaxAggregateOutputType = {
    product_id: bigint | null;
    category_id: bigint | null;
    brand_id: bigint | null;
    sku: string | null;
    product_name: string | null;
    description: string | null;
    base_price: runtime.Decimal | null;
    active: boolean | null;
    created_at: Date | null;
};
export type ProductsCountAggregateOutputType = {
    product_id: number;
    category_id: number;
    brand_id: number;
    sku: number;
    product_name: number;
    description: number;
    base_price: number;
    attributes: number;
    tags: number;
    active: number;
    created_at: number;
    _all: number;
};
export type ProductsAvgAggregateInputType = {
    product_id?: true;
    category_id?: true;
    brand_id?: true;
    base_price?: true;
};
export type ProductsSumAggregateInputType = {
    product_id?: true;
    category_id?: true;
    brand_id?: true;
    base_price?: true;
};
export type ProductsMinAggregateInputType = {
    product_id?: true;
    category_id?: true;
    brand_id?: true;
    sku?: true;
    product_name?: true;
    description?: true;
    base_price?: true;
    active?: true;
    created_at?: true;
};
export type ProductsMaxAggregateInputType = {
    product_id?: true;
    category_id?: true;
    brand_id?: true;
    sku?: true;
    product_name?: true;
    description?: true;
    base_price?: true;
    active?: true;
    created_at?: true;
};
export type ProductsCountAggregateInputType = {
    product_id?: true;
    category_id?: true;
    brand_id?: true;
    sku?: true;
    product_name?: true;
    description?: true;
    base_price?: true;
    attributes?: true;
    tags?: true;
    active?: true;
    created_at?: true;
    _all?: true;
};
export type ProductsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductsCountAggregateInputType;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
    [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducts[P]> : Prisma.GetScalarType<T[P], AggregateProducts[P]>;
};
export type productsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithAggregationInput | Prisma.productsOrderByWithAggregationInput[];
    by: Prisma.ProductsScalarFieldEnum[] | Prisma.ProductsScalarFieldEnum;
    having?: Prisma.productsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductsCountAggregateInputType | true;
    _avg?: ProductsAvgAggregateInputType;
    _sum?: ProductsSumAggregateInputType;
    _min?: ProductsMinAggregateInputType;
    _max?: ProductsMaxAggregateInputType;
};
export type ProductsGroupByOutputType = {
    product_id: bigint;
    category_id: bigint;
    brand_id: bigint | null;
    sku: string;
    product_name: string;
    description: string | null;
    base_price: runtime.Decimal;
    attributes: runtime.JsonValue;
    tags: string[];
    active: boolean;
    created_at: Date;
    _count: ProductsCountAggregateOutputType | null;
    _avg: ProductsAvgAggregateOutputType | null;
    _sum: ProductsSumAggregateOutputType | null;
    _min: ProductsMinAggregateOutputType | null;
    _max: ProductsMaxAggregateOutputType | null;
};
export type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductsGroupByOutputType[P]>;
}>>;
export type productsWhereInput = {
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    product_id?: Prisma.BigIntFilter<"products"> | bigint | number;
    category_id?: Prisma.BigIntFilter<"products"> | bigint | number;
    brand_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    sku?: Prisma.StringFilter<"products"> | string;
    product_name?: Prisma.StringFilter<"products"> | string;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    base_price?: Prisma.DecimalFilter<"products"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonFilter<"products">;
    tags?: Prisma.StringNullableListFilter<"products">;
    active?: Prisma.BoolFilter<"products"> | boolean;
    created_at?: Prisma.DateTimeFilter<"products"> | Date | string;
    product_images?: Prisma.Product_imagesListRelationFilter;
    product_price_history?: Prisma.Product_price_historyListRelationFilter;
    product_tag_links?: Prisma.Product_tag_linksListRelationFilter;
    product_variants?: Prisma.Product_variantsListRelationFilter;
    brands?: Prisma.XOR<Prisma.BrandsNullableScalarRelationFilter, Prisma.brandsWhereInput> | null;
    categories?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.categoriesWhereInput>;
    reviews?: Prisma.ReviewsListRelationFilter;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
};
export type productsOrderByWithRelationInput = {
    product_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    brand_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    product_images?: Prisma.product_imagesOrderByRelationAggregateInput;
    product_price_history?: Prisma.product_price_historyOrderByRelationAggregateInput;
    product_tag_links?: Prisma.product_tag_linksOrderByRelationAggregateInput;
    product_variants?: Prisma.product_variantsOrderByRelationAggregateInput;
    brands?: Prisma.brandsOrderByWithRelationInput;
    categories?: Prisma.categoriesOrderByWithRelationInput;
    reviews?: Prisma.reviewsOrderByRelationAggregateInput;
    wishlist_items?: Prisma.wishlist_itemsOrderByRelationAggregateInput;
};
export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: bigint | number;
    sku?: string;
    AND?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    OR?: Prisma.productsWhereInput[];
    NOT?: Prisma.productsWhereInput | Prisma.productsWhereInput[];
    category_id?: Prisma.BigIntFilter<"products"> | bigint | number;
    brand_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    product_name?: Prisma.StringFilter<"products"> | string;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    base_price?: Prisma.DecimalFilter<"products"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonFilter<"products">;
    tags?: Prisma.StringNullableListFilter<"products">;
    active?: Prisma.BoolFilter<"products"> | boolean;
    created_at?: Prisma.DateTimeFilter<"products"> | Date | string;
    product_images?: Prisma.Product_imagesListRelationFilter;
    product_price_history?: Prisma.Product_price_historyListRelationFilter;
    product_tag_links?: Prisma.Product_tag_linksListRelationFilter;
    product_variants?: Prisma.Product_variantsListRelationFilter;
    brands?: Prisma.XOR<Prisma.BrandsNullableScalarRelationFilter, Prisma.brandsWhereInput> | null;
    categories?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.categoriesWhereInput>;
    reviews?: Prisma.ReviewsListRelationFilter;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
}, "product_id" | "sku">;
export type productsOrderByWithAggregationInput = {
    product_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    brand_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.productsCountOrderByAggregateInput;
    _avg?: Prisma.productsAvgOrderByAggregateInput;
    _max?: Prisma.productsMaxOrderByAggregateInput;
    _min?: Prisma.productsMinOrderByAggregateInput;
    _sum?: Prisma.productsSumOrderByAggregateInput;
};
export type productsScalarWhereWithAggregatesInput = {
    AND?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    OR?: Prisma.productsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.productsScalarWhereWithAggregatesInput | Prisma.productsScalarWhereWithAggregatesInput[];
    product_id?: Prisma.BigIntWithAggregatesFilter<"products"> | bigint | number;
    category_id?: Prisma.BigIntWithAggregatesFilter<"products"> | bigint | number;
    brand_id?: Prisma.BigIntNullableWithAggregatesFilter<"products"> | bigint | number | null;
    sku?: Prisma.StringWithAggregatesFilter<"products"> | string;
    product_name?: Prisma.StringWithAggregatesFilter<"products"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"products"> | string | null;
    base_price?: Prisma.DecimalWithAggregatesFilter<"products"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonWithAggregatesFilter<"products">;
    tags?: Prisma.StringNullableListFilter<"products">;
    active?: Prisma.BoolWithAggregatesFilter<"products"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"products"> | Date | string;
};
export type productsCreateInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsUpdateInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateManyInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
};
export type productsUpdateManyMutationInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productsUncheckedUpdateManyInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductsListRelationFilter = {
    every?: Prisma.productsWhereInput;
    some?: Prisma.productsWhereInput;
    none?: Prisma.productsWhereInput;
};
export type productsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductsScalarRelationFilter = {
    is?: Prisma.productsWhereInput;
    isNot?: Prisma.productsWhereInput;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type productsCountOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    brand_id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type productsAvgOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    brand_id?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
};
export type productsMaxOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    brand_id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type productsMinOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    brand_id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    product_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type productsSumOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    brand_id?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
};
export type productsCreateNestedManyWithoutBrandsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutBrandsInput, Prisma.productsUncheckedCreateWithoutBrandsInput> | Prisma.productsCreateWithoutBrandsInput[] | Prisma.productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutBrandsInput | Prisma.productsCreateOrConnectWithoutBrandsInput[];
    createMany?: Prisma.productsCreateManyBrandsInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUncheckedCreateNestedManyWithoutBrandsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutBrandsInput, Prisma.productsUncheckedCreateWithoutBrandsInput> | Prisma.productsCreateWithoutBrandsInput[] | Prisma.productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutBrandsInput | Prisma.productsCreateOrConnectWithoutBrandsInput[];
    createMany?: Prisma.productsCreateManyBrandsInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUpdateManyWithoutBrandsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutBrandsInput, Prisma.productsUncheckedCreateWithoutBrandsInput> | Prisma.productsCreateWithoutBrandsInput[] | Prisma.productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutBrandsInput | Prisma.productsCreateOrConnectWithoutBrandsInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutBrandsInput | Prisma.productsUpsertWithWhereUniqueWithoutBrandsInput[];
    createMany?: Prisma.productsCreateManyBrandsInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutBrandsInput | Prisma.productsUpdateWithWhereUniqueWithoutBrandsInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutBrandsInput | Prisma.productsUpdateManyWithWhereWithoutBrandsInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsUncheckedUpdateManyWithoutBrandsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutBrandsInput, Prisma.productsUncheckedCreateWithoutBrandsInput> | Prisma.productsCreateWithoutBrandsInput[] | Prisma.productsUncheckedCreateWithoutBrandsInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutBrandsInput | Prisma.productsCreateOrConnectWithoutBrandsInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutBrandsInput | Prisma.productsUpsertWithWhereUniqueWithoutBrandsInput[];
    createMany?: Prisma.productsCreateManyBrandsInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutBrandsInput | Prisma.productsUpdateWithWhereUniqueWithoutBrandsInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutBrandsInput | Prisma.productsUpdateManyWithWhereWithoutBrandsInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
};
export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutCategoriesInput | Prisma.productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput> | Prisma.productsCreateWithoutCategoriesInput[] | Prisma.productsUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutCategoriesInput | Prisma.productsCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.productsCreateManyCategoriesInputEnvelope;
    set?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    disconnect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    delete?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    connect?: Prisma.productsWhereUniqueInput | Prisma.productsWhereUniqueInput[];
    update?: Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.productsUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.productsUpdateManyWithWhereWithoutCategoriesInput | Prisma.productsUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
};
export type productsCreateNestedOneWithoutProduct_imagesInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_imagesInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneRequiredWithoutProduct_imagesNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_imagesInput;
    upsert?: Prisma.productsUpsertWithoutProduct_imagesInput;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutProduct_imagesInput, Prisma.productsUpdateWithoutProduct_imagesInput>, Prisma.productsUncheckedUpdateWithoutProduct_imagesInput>;
};
export type productsCreateNestedOneWithoutProduct_price_historyInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_price_historyInput, Prisma.productsUncheckedCreateWithoutProduct_price_historyInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_price_historyInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneRequiredWithoutProduct_price_historyNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_price_historyInput, Prisma.productsUncheckedCreateWithoutProduct_price_historyInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_price_historyInput;
    upsert?: Prisma.productsUpsertWithoutProduct_price_historyInput;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutProduct_price_historyInput, Prisma.productsUpdateWithoutProduct_price_historyInput>, Prisma.productsUncheckedUpdateWithoutProduct_price_historyInput>;
};
export type productsCreateNestedOneWithoutProduct_tag_linksInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_tag_linksInput, Prisma.productsUncheckedCreateWithoutProduct_tag_linksInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_tag_linksInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneRequiredWithoutProduct_tag_linksNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_tag_linksInput, Prisma.productsUncheckedCreateWithoutProduct_tag_linksInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_tag_linksInput;
    upsert?: Prisma.productsUpsertWithoutProduct_tag_linksInput;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutProduct_tag_linksInput, Prisma.productsUpdateWithoutProduct_tag_linksInput>, Prisma.productsUncheckedUpdateWithoutProduct_tag_linksInput>;
};
export type productsCreateNestedOneWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_variantsInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneRequiredWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutProduct_variantsInput;
    upsert?: Prisma.productsUpsertWithoutProduct_variantsInput;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutProduct_variantsInput, Prisma.productsUpdateWithoutProduct_variantsInput>, Prisma.productsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type productsCreatetagsInput = {
    set: string[];
};
export type productsUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type productsCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.productsUpsertWithoutReviewsInput;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutReviewsInput, Prisma.productsUpdateWithoutReviewsInput>, Prisma.productsUncheckedUpdateWithoutReviewsInput>;
};
export type productsCreateNestedOneWithoutWishlist_itemsInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutWishlist_itemsInput, Prisma.productsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutWishlist_itemsInput;
    connect?: Prisma.productsWhereUniqueInput;
};
export type productsUpdateOneRequiredWithoutWishlist_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.productsCreateWithoutWishlist_itemsInput, Prisma.productsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.productsCreateOrConnectWithoutWishlist_itemsInput;
    upsert?: Prisma.productsUpsertWithoutWishlist_itemsInput;
    connect?: Prisma.productsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productsUpdateToOneWithWhereWithoutWishlist_itemsInput, Prisma.productsUpdateWithoutWishlist_itemsInput>, Prisma.productsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type productsCreateWithoutBrandsInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutBrandsInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutBrandsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutBrandsInput, Prisma.productsUncheckedCreateWithoutBrandsInput>;
};
export type productsCreateManyBrandsInputEnvelope = {
    data: Prisma.productsCreateManyBrandsInput | Prisma.productsCreateManyBrandsInput[];
    skipDuplicates?: boolean;
};
export type productsUpsertWithWhereUniqueWithoutBrandsInput = {
    where: Prisma.productsWhereUniqueInput;
    update: Prisma.XOR<Prisma.productsUpdateWithoutBrandsInput, Prisma.productsUncheckedUpdateWithoutBrandsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutBrandsInput, Prisma.productsUncheckedCreateWithoutBrandsInput>;
};
export type productsUpdateWithWhereUniqueWithoutBrandsInput = {
    where: Prisma.productsWhereUniqueInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutBrandsInput, Prisma.productsUncheckedUpdateWithoutBrandsInput>;
};
export type productsUpdateManyWithWhereWithoutBrandsInput = {
    where: Prisma.productsScalarWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyWithoutBrandsInput>;
};
export type productsScalarWhereInput = {
    AND?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
    OR?: Prisma.productsScalarWhereInput[];
    NOT?: Prisma.productsScalarWhereInput | Prisma.productsScalarWhereInput[];
    product_id?: Prisma.BigIntFilter<"products"> | bigint | number;
    category_id?: Prisma.BigIntFilter<"products"> | bigint | number;
    brand_id?: Prisma.BigIntNullableFilter<"products"> | bigint | number | null;
    sku?: Prisma.StringFilter<"products"> | string;
    product_name?: Prisma.StringFilter<"products"> | string;
    description?: Prisma.StringNullableFilter<"products"> | string | null;
    base_price?: Prisma.DecimalFilter<"products"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonFilter<"products">;
    tags?: Prisma.StringNullableListFilter<"products">;
    active?: Prisma.BoolFilter<"products"> | boolean;
    created_at?: Prisma.DateTimeFilter<"products"> | Date | string;
};
export type productsCreateWithoutCategoriesInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutCategoriesInput = {
    product_id?: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput>;
};
export type productsCreateManyCategoriesInputEnvelope = {
    data: Prisma.productsCreateManyCategoriesInput | Prisma.productsCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
};
export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    update: Prisma.XOR<Prisma.productsUpdateWithoutCategoriesInput, Prisma.productsUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutCategoriesInput, Prisma.productsUncheckedCreateWithoutCategoriesInput>;
};
export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.productsWhereUniqueInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutCategoriesInput, Prisma.productsUncheckedUpdateWithoutCategoriesInput>;
};
export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: Prisma.productsScalarWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyWithoutCategoriesInput>;
};
export type productsCreateWithoutProduct_imagesInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutProduct_imagesInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutProduct_imagesInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
};
export type productsUpsertWithoutProduct_imagesInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutProduct_imagesInput, Prisma.productsUncheckedUpdateWithoutProduct_imagesInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_imagesInput, Prisma.productsUncheckedCreateWithoutProduct_imagesInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutProduct_imagesInput, Prisma.productsUncheckedUpdateWithoutProduct_imagesInput>;
};
export type productsUpdateWithoutProduct_imagesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutProduct_imagesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutProduct_price_historyInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutProduct_price_historyInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutProduct_price_historyInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_price_historyInput, Prisma.productsUncheckedCreateWithoutProduct_price_historyInput>;
};
export type productsUpsertWithoutProduct_price_historyInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutProduct_price_historyInput, Prisma.productsUncheckedUpdateWithoutProduct_price_historyInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_price_historyInput, Prisma.productsUncheckedCreateWithoutProduct_price_historyInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutProduct_price_historyInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutProduct_price_historyInput, Prisma.productsUncheckedUpdateWithoutProduct_price_historyInput>;
};
export type productsUpdateWithoutProduct_price_historyInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutProduct_price_historyInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutProduct_tag_linksInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutProduct_tag_linksInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutProduct_tag_linksInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_tag_linksInput, Prisma.productsUncheckedCreateWithoutProduct_tag_linksInput>;
};
export type productsUpsertWithoutProduct_tag_linksInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutProduct_tag_linksInput, Prisma.productsUncheckedUpdateWithoutProduct_tag_linksInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_tag_linksInput, Prisma.productsUncheckedCreateWithoutProduct_tag_linksInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutProduct_tag_linksInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutProduct_tag_linksInput, Prisma.productsUncheckedUpdateWithoutProduct_tag_linksInput>;
};
export type productsUpdateWithoutProduct_tag_linksInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutProduct_tag_linksInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutProduct_variantsInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutProduct_variantsInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutProduct_variantsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
};
export type productsUpsertWithoutProduct_variantsInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutProduct_variantsInput, Prisma.productsUncheckedUpdateWithoutProduct_variantsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutProduct_variantsInput, Prisma.productsUncheckedCreateWithoutProduct_variantsInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutProduct_variantsInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutProduct_variantsInput, Prisma.productsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type productsUpdateWithoutProduct_variantsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutProduct_variantsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutReviewsInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutReviewsInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutReviewsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
};
export type productsUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutReviewsInput, Prisma.productsUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutReviewsInput, Prisma.productsUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutReviewsInput, Prisma.productsUncheckedUpdateWithoutReviewsInput>;
};
export type productsUpdateWithoutReviewsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutReviewsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateWithoutWishlist_itemsInput = {
    product_id?: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsCreateNestedManyWithoutProductsInput;
    brands?: Prisma.brandsCreateNestedOneWithoutProductsInput;
    categories: Prisma.categoriesCreateNestedOneWithoutProductsInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutProductsInput;
};
export type productsUncheckedCreateWithoutWishlist_itemsInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
    product_images?: Prisma.product_imagesUncheckedCreateNestedManyWithoutProductsInput;
    product_price_history?: Prisma.product_price_historyUncheckedCreateNestedManyWithoutProductsInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProductsInput;
    product_variants?: Prisma.product_variantsUncheckedCreateNestedManyWithoutProductsInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutProductsInput;
};
export type productsCreateOrConnectWithoutWishlist_itemsInput = {
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateWithoutWishlist_itemsInput, Prisma.productsUncheckedCreateWithoutWishlist_itemsInput>;
};
export type productsUpsertWithoutWishlist_itemsInput = {
    update: Prisma.XOR<Prisma.productsUpdateWithoutWishlist_itemsInput, Prisma.productsUncheckedUpdateWithoutWishlist_itemsInput>;
    create: Prisma.XOR<Prisma.productsCreateWithoutWishlist_itemsInput, Prisma.productsUncheckedCreateWithoutWishlist_itemsInput>;
    where?: Prisma.productsWhereInput;
};
export type productsUpdateToOneWithWhereWithoutWishlist_itemsInput = {
    where?: Prisma.productsWhereInput;
    data: Prisma.XOR<Prisma.productsUpdateWithoutWishlist_itemsInput, Prisma.productsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type productsUpdateWithoutWishlist_itemsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutWishlist_itemsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsCreateManyBrandsInput = {
    product_id?: bigint | number;
    category_id: bigint | number;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
};
export type productsUpdateWithoutBrandsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    categories?: Prisma.categoriesUpdateOneRequiredWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutBrandsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateManyWithoutBrandsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productsCreateManyCategoriesInput = {
    product_id?: bigint | number;
    brand_id?: bigint | number | null;
    sku: string;
    product_name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsCreatetagsInput | string[];
    active?: boolean;
    created_at?: Date | string;
};
export type productsUpdateWithoutCategoriesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUpdateManyWithoutProductsNestedInput;
    brands?: Prisma.brandsUpdateOneWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateWithoutCategoriesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_images?: Prisma.product_imagesUncheckedUpdateManyWithoutProductsNestedInput;
    product_price_history?: Prisma.product_price_historyUncheckedUpdateManyWithoutProductsNestedInput;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput;
    product_variants?: Prisma.product_variantsUncheckedUpdateManyWithoutProductsNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutProductsNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput;
};
export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    product_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    tags?: Prisma.productsUpdatetagsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductsCountOutputType = {
    product_images: number;
    product_price_history: number;
    product_tag_links: number;
    product_variants: number;
    reviews: number;
    wishlist_items: number;
};
export type ProductsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_images?: boolean | ProductsCountOutputTypeCountProduct_imagesArgs;
    product_price_history?: boolean | ProductsCountOutputTypeCountProduct_price_historyArgs;
    product_tag_links?: boolean | ProductsCountOutputTypeCountProduct_tag_linksArgs;
    product_variants?: boolean | ProductsCountOutputTypeCountProduct_variantsArgs;
    reviews?: boolean | ProductsCountOutputTypeCountReviewsArgs;
    wishlist_items?: boolean | ProductsCountOutputTypeCountWishlist_itemsArgs;
};
export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductsCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductsCountOutputTypeCountProduct_imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_imagesWhereInput;
};
export type ProductsCountOutputTypeCountProduct_price_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_price_historyWhereInput;
};
export type ProductsCountOutputTypeCountProduct_tag_linksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tag_linksWhereInput;
};
export type ProductsCountOutputTypeCountProduct_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_variantsWhereInput;
};
export type ProductsCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type ProductsCountOutputTypeCountWishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
};
export type productsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    category_id?: boolean;
    brand_id?: boolean;
    sku?: boolean;
    product_name?: boolean;
    description?: boolean;
    base_price?: boolean;
    attributes?: boolean;
    tags?: boolean;
    active?: boolean;
    created_at?: boolean;
    product_images?: boolean | Prisma.products$product_imagesArgs<ExtArgs>;
    product_price_history?: boolean | Prisma.products$product_price_historyArgs<ExtArgs>;
    product_tag_links?: boolean | Prisma.products$product_tag_linksArgs<ExtArgs>;
    product_variants?: boolean | Prisma.products$product_variantsArgs<ExtArgs>;
    brands?: boolean | Prisma.products$brandsArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.products$reviewsArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.products$wishlist_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    category_id?: boolean;
    brand_id?: boolean;
    sku?: boolean;
    product_name?: boolean;
    description?: boolean;
    base_price?: boolean;
    attributes?: boolean;
    tags?: boolean;
    active?: boolean;
    created_at?: boolean;
    brands?: boolean | Prisma.products$brandsArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    category_id?: boolean;
    brand_id?: boolean;
    sku?: boolean;
    product_name?: boolean;
    description?: boolean;
    base_price?: boolean;
    attributes?: boolean;
    tags?: boolean;
    active?: boolean;
    created_at?: boolean;
    brands?: boolean | Prisma.products$brandsArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["products"]>;
export type productsSelectScalar = {
    product_id?: boolean;
    category_id?: boolean;
    brand_id?: boolean;
    sku?: boolean;
    product_name?: boolean;
    description?: boolean;
    base_price?: boolean;
    attributes?: boolean;
    tags?: boolean;
    active?: boolean;
    created_at?: boolean;
};
export type productsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"product_id" | "category_id" | "brand_id" | "sku" | "product_name" | "description" | "base_price" | "attributes" | "tags" | "active" | "created_at", ExtArgs["result"]["products"]>;
export type productsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_images?: boolean | Prisma.products$product_imagesArgs<ExtArgs>;
    product_price_history?: boolean | Prisma.products$product_price_historyArgs<ExtArgs>;
    product_tag_links?: boolean | Prisma.products$product_tag_linksArgs<ExtArgs>;
    product_variants?: boolean | Prisma.products$product_variantsArgs<ExtArgs>;
    brands?: boolean | Prisma.products$brandsArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.products$reviewsArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.products$wishlist_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type productsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brands?: boolean | Prisma.products$brandsArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
};
export type productsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brands?: boolean | Prisma.products$brandsArgs<ExtArgs>;
    categories?: boolean | Prisma.categoriesDefaultArgs<ExtArgs>;
};
export type $productsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "products";
    objects: {
        product_images: Prisma.$product_imagesPayload<ExtArgs>[];
        product_price_history: Prisma.$product_price_historyPayload<ExtArgs>[];
        product_tag_links: Prisma.$product_tag_linksPayload<ExtArgs>[];
        product_variants: Prisma.$product_variantsPayload<ExtArgs>[];
        brands: Prisma.$brandsPayload<ExtArgs> | null;
        categories: Prisma.$categoriesPayload<ExtArgs>;
        reviews: Prisma.$reviewsPayload<ExtArgs>[];
        wishlist_items: Prisma.$wishlist_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        product_id: bigint;
        category_id: bigint;
        brand_id: bigint | null;
        sku: string;
        product_name: string;
        description: string | null;
        base_price: runtime.Decimal;
        attributes: runtime.JsonValue;
        tags: string[];
        active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["products"]>;
    composites: {};
};
export type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$productsPayload, S>;
export type productsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductsCountAggregateInputType | true;
};
export interface productsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['products'];
        meta: {
            name: 'products';
        };
    };
    findUnique<T extends productsFindUniqueArgs>(args: Prisma.SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends productsFindFirstArgs>(args?: Prisma.SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends productsFindManyArgs>(args?: Prisma.SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends productsCreateArgs>(args: Prisma.SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends productsCreateManyArgs>(args?: Prisma.SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends productsDeleteArgs>(args: Prisma.SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends productsUpdateArgs>(args: Prisma.SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends productsDeleteManyArgs>(args?: Prisma.SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends productsUpdateManyArgs>(args: Prisma.SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends productsUpsertArgs>(args: Prisma.SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends productsCountArgs>(args?: Prisma.Subset<T, productsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductsCountAggregateOutputType> : number>;
    aggregate<T extends ProductsAggregateArgs>(args: Prisma.Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>;
    groupBy<T extends productsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: productsGroupByArgs['orderBy'];
    } : {
        orderBy?: productsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: productsFieldRefs;
}
export interface Prisma__productsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product_images<T extends Prisma.products$product_imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    product_price_history<T extends Prisma.products$product_price_historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$product_price_historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    product_tag_links<T extends Prisma.products$product_tag_linksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$product_tag_linksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    product_variants<T extends Prisma.products$product_variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$product_variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    brands<T extends Prisma.products$brandsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$brandsArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    categories<T extends Prisma.categoriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoriesDefaultArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviews<T extends Prisma.products$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_items<T extends Prisma.products$wishlist_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.products$wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface productsFieldRefs {
    readonly product_id: Prisma.FieldRef<"products", 'BigInt'>;
    readonly category_id: Prisma.FieldRef<"products", 'BigInt'>;
    readonly brand_id: Prisma.FieldRef<"products", 'BigInt'>;
    readonly sku: Prisma.FieldRef<"products", 'String'>;
    readonly product_name: Prisma.FieldRef<"products", 'String'>;
    readonly description: Prisma.FieldRef<"products", 'String'>;
    readonly base_price: Prisma.FieldRef<"products", 'Decimal'>;
    readonly attributes: Prisma.FieldRef<"products", 'Json'>;
    readonly tags: Prisma.FieldRef<"products", 'String[]'>;
    readonly active: Prisma.FieldRef<"products", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"products", 'DateTime'>;
}
export type productsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type productsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
};
export type productsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.productsCreateManyInput | Prisma.productsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    data: Prisma.productsCreateManyInput | Prisma.productsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.productsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type productsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
    where: Prisma.productsWhereUniqueInput;
};
export type productsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyInput>;
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type productsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productsUpdateManyMutationInput, Prisma.productsUncheckedUpdateManyInput>;
    where?: Prisma.productsWhereInput;
    limit?: number;
    include?: Prisma.productsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type productsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
    create: Prisma.XOR<Prisma.productsCreateInput, Prisma.productsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.productsUpdateInput, Prisma.productsUncheckedUpdateInput>;
};
export type productsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where: Prisma.productsWhereUniqueInput;
};
export type productsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
    limit?: number;
};
export type products$product_imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where?: Prisma.product_imagesWhereInput;
    orderBy?: Prisma.product_imagesOrderByWithRelationInput | Prisma.product_imagesOrderByWithRelationInput[];
    cursor?: Prisma.product_imagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_imagesScalarFieldEnum | Prisma.Product_imagesScalarFieldEnum[];
};
export type products$product_price_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
    where?: Prisma.product_price_historyWhereInput;
    orderBy?: Prisma.product_price_historyOrderByWithRelationInput | Prisma.product_price_historyOrderByWithRelationInput[];
    cursor?: Prisma.product_price_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_price_historyScalarFieldEnum | Prisma.Product_price_historyScalarFieldEnum[];
};
export type products$product_tag_linksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    where?: Prisma.product_tag_linksWhereInput;
    orderBy?: Prisma.product_tag_linksOrderByWithRelationInput | Prisma.product_tag_linksOrderByWithRelationInput[];
    cursor?: Prisma.product_tag_linksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_tag_linksScalarFieldEnum | Prisma.Product_tag_linksScalarFieldEnum[];
};
export type products$product_variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where?: Prisma.product_variantsWhereInput;
    orderBy?: Prisma.product_variantsOrderByWithRelationInput | Prisma.product_variantsOrderByWithRelationInput[];
    cursor?: Prisma.product_variantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_variantsScalarFieldEnum | Prisma.Product_variantsScalarFieldEnum[];
};
export type products$brandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where?: Prisma.brandsWhereInput;
};
export type products$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
export type products$wishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    where?: Prisma.wishlist_itemsWhereInput;
    orderBy?: Prisma.wishlist_itemsOrderByWithRelationInput | Prisma.wishlist_itemsOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wishlist_itemsScalarFieldEnum | Prisma.Wishlist_itemsScalarFieldEnum[];
};
export type productsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
};
