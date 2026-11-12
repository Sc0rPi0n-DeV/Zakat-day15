import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_variantsModel = runtime.Types.Result.DefaultSelection<Prisma.$product_variantsPayload>;
export type AggregateProduct_variants = {
    _count: Product_variantsCountAggregateOutputType | null;
    _avg: Product_variantsAvgAggregateOutputType | null;
    _sum: Product_variantsSumAggregateOutputType | null;
    _min: Product_variantsMinAggregateOutputType | null;
    _max: Product_variantsMaxAggregateOutputType | null;
};
export type Product_variantsAvgAggregateOutputType = {
    variant_id: number | null;
    product_id: number | null;
    price_delta: runtime.Decimal | null;
};
export type Product_variantsSumAggregateOutputType = {
    variant_id: bigint | null;
    product_id: bigint | null;
    price_delta: runtime.Decimal | null;
};
export type Product_variantsMinAggregateOutputType = {
    variant_id: bigint | null;
    product_id: bigint | null;
    variant_sku: string | null;
    color: string | null;
    size: string | null;
    price_delta: runtime.Decimal | null;
};
export type Product_variantsMaxAggregateOutputType = {
    variant_id: bigint | null;
    product_id: bigint | null;
    variant_sku: string | null;
    color: string | null;
    size: string | null;
    price_delta: runtime.Decimal | null;
};
export type Product_variantsCountAggregateOutputType = {
    variant_id: number;
    product_id: number;
    variant_sku: number;
    color: number;
    size: number;
    price_delta: number;
    _all: number;
};
export type Product_variantsAvgAggregateInputType = {
    variant_id?: true;
    product_id?: true;
    price_delta?: true;
};
export type Product_variantsSumAggregateInputType = {
    variant_id?: true;
    product_id?: true;
    price_delta?: true;
};
export type Product_variantsMinAggregateInputType = {
    variant_id?: true;
    product_id?: true;
    variant_sku?: true;
    color?: true;
    size?: true;
    price_delta?: true;
};
export type Product_variantsMaxAggregateInputType = {
    variant_id?: true;
    product_id?: true;
    variant_sku?: true;
    color?: true;
    size?: true;
    price_delta?: true;
};
export type Product_variantsCountAggregateInputType = {
    variant_id?: true;
    product_id?: true;
    variant_sku?: true;
    color?: true;
    size?: true;
    price_delta?: true;
    _all?: true;
};
export type Product_variantsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_variantsWhereInput;
    orderBy?: Prisma.product_variantsOrderByWithRelationInput | Prisma.product_variantsOrderByWithRelationInput[];
    cursor?: Prisma.product_variantsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_variantsCountAggregateInputType;
    _avg?: Product_variantsAvgAggregateInputType;
    _sum?: Product_variantsSumAggregateInputType;
    _min?: Product_variantsMinAggregateInputType;
    _max?: Product_variantsMaxAggregateInputType;
};
export type GetProduct_variantsAggregateType<T extends Product_variantsAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_variants]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_variants[P]> : Prisma.GetScalarType<T[P], AggregateProduct_variants[P]>;
};
export type product_variantsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_variantsWhereInput;
    orderBy?: Prisma.product_variantsOrderByWithAggregationInput | Prisma.product_variantsOrderByWithAggregationInput[];
    by: Prisma.Product_variantsScalarFieldEnum[] | Prisma.Product_variantsScalarFieldEnum;
    having?: Prisma.product_variantsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_variantsCountAggregateInputType | true;
    _avg?: Product_variantsAvgAggregateInputType;
    _sum?: Product_variantsSumAggregateInputType;
    _min?: Product_variantsMinAggregateInputType;
    _max?: Product_variantsMaxAggregateInputType;
};
export type Product_variantsGroupByOutputType = {
    variant_id: bigint;
    product_id: bigint;
    variant_sku: string;
    color: string | null;
    size: string | null;
    price_delta: runtime.Decimal;
    _count: Product_variantsCountAggregateOutputType | null;
    _avg: Product_variantsAvgAggregateOutputType | null;
    _sum: Product_variantsSumAggregateOutputType | null;
    _min: Product_variantsMinAggregateOutputType | null;
    _max: Product_variantsMaxAggregateOutputType | null;
};
export type GetProduct_variantsGroupByPayload<T extends product_variantsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_variantsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_variantsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_variantsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_variantsGroupByOutputType[P]>;
}>>;
export type product_variantsWhereInput = {
    AND?: Prisma.product_variantsWhereInput | Prisma.product_variantsWhereInput[];
    OR?: Prisma.product_variantsWhereInput[];
    NOT?: Prisma.product_variantsWhereInput | Prisma.product_variantsWhereInput[];
    variant_id?: Prisma.BigIntFilter<"product_variants"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_variants"> | bigint | number;
    variant_sku?: Prisma.StringFilter<"product_variants"> | string;
    color?: Prisma.StringNullableFilter<"product_variants"> | string | null;
    size?: Prisma.StringNullableFilter<"product_variants"> | string | null;
    price_delta?: Prisma.DecimalFilter<"product_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    order_items?: Prisma.Order_itemsListRelationFilter;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
    purchase_order_items?: Prisma.Purchase_order_itemsListRelationFilter;
    stock_movements?: Prisma.Stock_movementsListRelationFilter;
    stocks?: Prisma.StocksListRelationFilter;
};
export type product_variantsOrderByWithRelationInput = {
    variant_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    variant_sku?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    size?: Prisma.SortOrderInput | Prisma.SortOrder;
    price_delta?: Prisma.SortOrder;
    cart_items?: Prisma.cart_itemsOrderByRelationAggregateInput;
    order_items?: Prisma.order_itemsOrderByRelationAggregateInput;
    products?: Prisma.productsOrderByWithRelationInput;
    purchase_order_items?: Prisma.purchase_order_itemsOrderByRelationAggregateInput;
    stock_movements?: Prisma.stock_movementsOrderByRelationAggregateInput;
    stocks?: Prisma.stocksOrderByRelationAggregateInput;
};
export type product_variantsWhereUniqueInput = Prisma.AtLeast<{
    variant_id?: bigint | number;
    variant_sku?: string;
    AND?: Prisma.product_variantsWhereInput | Prisma.product_variantsWhereInput[];
    OR?: Prisma.product_variantsWhereInput[];
    NOT?: Prisma.product_variantsWhereInput | Prisma.product_variantsWhereInput[];
    product_id?: Prisma.BigIntFilter<"product_variants"> | bigint | number;
    color?: Prisma.StringNullableFilter<"product_variants"> | string | null;
    size?: Prisma.StringNullableFilter<"product_variants"> | string | null;
    price_delta?: Prisma.DecimalFilter<"product_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.Cart_itemsListRelationFilter;
    order_items?: Prisma.Order_itemsListRelationFilter;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
    purchase_order_items?: Prisma.Purchase_order_itemsListRelationFilter;
    stock_movements?: Prisma.Stock_movementsListRelationFilter;
    stocks?: Prisma.StocksListRelationFilter;
}, "variant_id" | "variant_sku">;
export type product_variantsOrderByWithAggregationInput = {
    variant_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    variant_sku?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    size?: Prisma.SortOrderInput | Prisma.SortOrder;
    price_delta?: Prisma.SortOrder;
    _count?: Prisma.product_variantsCountOrderByAggregateInput;
    _avg?: Prisma.product_variantsAvgOrderByAggregateInput;
    _max?: Prisma.product_variantsMaxOrderByAggregateInput;
    _min?: Prisma.product_variantsMinOrderByAggregateInput;
    _sum?: Prisma.product_variantsSumOrderByAggregateInput;
};
export type product_variantsScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_variantsScalarWhereWithAggregatesInput | Prisma.product_variantsScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_variantsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_variantsScalarWhereWithAggregatesInput | Prisma.product_variantsScalarWhereWithAggregatesInput[];
    variant_id?: Prisma.BigIntWithAggregatesFilter<"product_variants"> | bigint | number;
    product_id?: Prisma.BigIntWithAggregatesFilter<"product_variants"> | bigint | number;
    variant_sku?: Prisma.StringWithAggregatesFilter<"product_variants"> | string;
    color?: Prisma.StringNullableWithAggregatesFilter<"product_variants"> | string | null;
    size?: Prisma.StringNullableWithAggregatesFilter<"product_variants"> | string | null;
    price_delta?: Prisma.DecimalWithAggregatesFilter<"product_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type product_variantsCreateInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutProduct_variantsInput;
    products: Prisma.productsCreateNestedOneWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUncheckedCreateInput = {
    variant_id?: bigint | number;
    product_id: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUpdateInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsCreateManyInput = {
    variant_id?: bigint | number;
    product_id: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type product_variantsUpdateManyMutationInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type product_variantsUncheckedUpdateManyInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Product_variantsScalarRelationFilter = {
    is?: Prisma.product_variantsWhereInput;
    isNot?: Prisma.product_variantsWhereInput;
};
export type product_variantsCountOrderByAggregateInput = {
    variant_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    variant_sku?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    price_delta?: Prisma.SortOrder;
};
export type product_variantsAvgOrderByAggregateInput = {
    variant_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    price_delta?: Prisma.SortOrder;
};
export type product_variantsMaxOrderByAggregateInput = {
    variant_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    variant_sku?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    price_delta?: Prisma.SortOrder;
};
export type product_variantsMinOrderByAggregateInput = {
    variant_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    variant_sku?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    price_delta?: Prisma.SortOrder;
};
export type product_variantsSumOrderByAggregateInput = {
    variant_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    price_delta?: Prisma.SortOrder;
};
export type Product_variantsListRelationFilter = {
    every?: Prisma.product_variantsWhereInput;
    some?: Prisma.product_variantsWhereInput;
    none?: Prisma.product_variantsWhereInput;
};
export type product_variantsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type product_variantsCreateNestedOneWithoutCart_itemsInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutCart_itemsInput, Prisma.product_variantsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutCart_itemsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutCart_itemsInput, Prisma.product_variantsUncheckedCreateWithoutCart_itemsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutCart_itemsInput;
    upsert?: Prisma.product_variantsUpsertWithoutCart_itemsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_variantsUpdateToOneWithWhereWithoutCart_itemsInput, Prisma.product_variantsUpdateWithoutCart_itemsInput>, Prisma.product_variantsUncheckedUpdateWithoutCart_itemsInput>;
};
export type product_variantsCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutOrder_itemsInput, Prisma.product_variantsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutOrder_itemsInput, Prisma.product_variantsUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.product_variantsUpsertWithoutOrder_itemsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_variantsUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.product_variantsUpdateWithoutOrder_itemsInput>, Prisma.product_variantsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type product_variantsCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutProductsInput, Prisma.product_variantsUncheckedCreateWithoutProductsInput> | Prisma.product_variantsCreateWithoutProductsInput[] | Prisma.product_variantsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutProductsInput | Prisma.product_variantsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_variantsCreateManyProductsInputEnvelope;
    connect?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
};
export type product_variantsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutProductsInput, Prisma.product_variantsUncheckedCreateWithoutProductsInput> | Prisma.product_variantsCreateWithoutProductsInput[] | Prisma.product_variantsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutProductsInput | Prisma.product_variantsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_variantsCreateManyProductsInputEnvelope;
    connect?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
};
export type product_variantsUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutProductsInput, Prisma.product_variantsUncheckedCreateWithoutProductsInput> | Prisma.product_variantsCreateWithoutProductsInput[] | Prisma.product_variantsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutProductsInput | Prisma.product_variantsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_variantsUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_variantsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_variantsCreateManyProductsInputEnvelope;
    set?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    disconnect?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    delete?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    connect?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    update?: Prisma.product_variantsUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_variantsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_variantsUpdateManyWithWhereWithoutProductsInput | Prisma.product_variantsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_variantsScalarWhereInput | Prisma.product_variantsScalarWhereInput[];
};
export type product_variantsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutProductsInput, Prisma.product_variantsUncheckedCreateWithoutProductsInput> | Prisma.product_variantsCreateWithoutProductsInput[] | Prisma.product_variantsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutProductsInput | Prisma.product_variantsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_variantsUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_variantsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_variantsCreateManyProductsInputEnvelope;
    set?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    disconnect?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    delete?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    connect?: Prisma.product_variantsWhereUniqueInput | Prisma.product_variantsWhereUniqueInput[];
    update?: Prisma.product_variantsUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_variantsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_variantsUpdateManyWithWhereWithoutProductsInput | Prisma.product_variantsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_variantsScalarWhereInput | Prisma.product_variantsScalarWhereInput[];
};
export type product_variantsCreateNestedOneWithoutPurchase_order_itemsInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutPurchase_order_itemsInput, Prisma.product_variantsUncheckedCreateWithoutPurchase_order_itemsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutPurchase_order_itemsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsUpdateOneRequiredWithoutPurchase_order_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutPurchase_order_itemsInput, Prisma.product_variantsUncheckedCreateWithoutPurchase_order_itemsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutPurchase_order_itemsInput;
    upsert?: Prisma.product_variantsUpsertWithoutPurchase_order_itemsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_variantsUpdateToOneWithWhereWithoutPurchase_order_itemsInput, Prisma.product_variantsUpdateWithoutPurchase_order_itemsInput>, Prisma.product_variantsUncheckedUpdateWithoutPurchase_order_itemsInput>;
};
export type product_variantsCreateNestedOneWithoutStock_movementsInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutStock_movementsInput, Prisma.product_variantsUncheckedCreateWithoutStock_movementsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutStock_movementsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsUpdateOneRequiredWithoutStock_movementsNestedInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutStock_movementsInput, Prisma.product_variantsUncheckedCreateWithoutStock_movementsInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutStock_movementsInput;
    upsert?: Prisma.product_variantsUpsertWithoutStock_movementsInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_variantsUpdateToOneWithWhereWithoutStock_movementsInput, Prisma.product_variantsUpdateWithoutStock_movementsInput>, Prisma.product_variantsUncheckedUpdateWithoutStock_movementsInput>;
};
export type product_variantsCreateNestedOneWithoutStocksInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutStocksInput, Prisma.product_variantsUncheckedCreateWithoutStocksInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutStocksInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsUpdateOneRequiredWithoutStocksNestedInput = {
    create?: Prisma.XOR<Prisma.product_variantsCreateWithoutStocksInput, Prisma.product_variantsUncheckedCreateWithoutStocksInput>;
    connectOrCreate?: Prisma.product_variantsCreateOrConnectWithoutStocksInput;
    upsert?: Prisma.product_variantsUpsertWithoutStocksInput;
    connect?: Prisma.product_variantsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_variantsUpdateToOneWithWhereWithoutStocksInput, Prisma.product_variantsUpdateWithoutStocksInput>, Prisma.product_variantsUncheckedUpdateWithoutStocksInput>;
};
export type product_variantsCreateWithoutCart_itemsInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutProduct_variantsInput;
    products: Prisma.productsCreateNestedOneWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUncheckedCreateWithoutCart_itemsInput = {
    variant_id?: bigint | number;
    product_id: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsCreateOrConnectWithoutCart_itemsInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutCart_itemsInput, Prisma.product_variantsUncheckedCreateWithoutCart_itemsInput>;
};
export type product_variantsUpsertWithoutCart_itemsInput = {
    update: Prisma.XOR<Prisma.product_variantsUpdateWithoutCart_itemsInput, Prisma.product_variantsUncheckedUpdateWithoutCart_itemsInput>;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutCart_itemsInput, Prisma.product_variantsUncheckedCreateWithoutCart_itemsInput>;
    where?: Prisma.product_variantsWhereInput;
};
export type product_variantsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: Prisma.product_variantsWhereInput;
    data: Prisma.XOR<Prisma.product_variantsUpdateWithoutCart_itemsInput, Prisma.product_variantsUncheckedUpdateWithoutCart_itemsInput>;
};
export type product_variantsUpdateWithoutCart_itemsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_items?: Prisma.order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateWithoutCart_itemsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsCreateWithoutOrder_itemsInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutProduct_variantsInput;
    products: Prisma.productsCreateNestedOneWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUncheckedCreateWithoutOrder_itemsInput = {
    variant_id?: bigint | number;
    product_id: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutOrder_itemsInput, Prisma.product_variantsUncheckedCreateWithoutOrder_itemsInput>;
};
export type product_variantsUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.product_variantsUpdateWithoutOrder_itemsInput, Prisma.product_variantsUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutOrder_itemsInput, Prisma.product_variantsUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.product_variantsWhereInput;
};
export type product_variantsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.product_variantsWhereInput;
    data: Prisma.XOR<Prisma.product_variantsUpdateWithoutOrder_itemsInput, Prisma.product_variantsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type product_variantsUpdateWithoutOrder_itemsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutProduct_variantsNestedInput;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateWithoutOrder_itemsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsCreateWithoutProductsInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUncheckedCreateWithoutProductsInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsCreateOrConnectWithoutProductsInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutProductsInput, Prisma.product_variantsUncheckedCreateWithoutProductsInput>;
};
export type product_variantsCreateManyProductsInputEnvelope = {
    data: Prisma.product_variantsCreateManyProductsInput | Prisma.product_variantsCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type product_variantsUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_variantsUpdateWithoutProductsInput, Prisma.product_variantsUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutProductsInput, Prisma.product_variantsUncheckedCreateWithoutProductsInput>;
};
export type product_variantsUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_variantsUpdateWithoutProductsInput, Prisma.product_variantsUncheckedUpdateWithoutProductsInput>;
};
export type product_variantsUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.product_variantsScalarWhereInput;
    data: Prisma.XOR<Prisma.product_variantsUpdateManyMutationInput, Prisma.product_variantsUncheckedUpdateManyWithoutProductsInput>;
};
export type product_variantsScalarWhereInput = {
    AND?: Prisma.product_variantsScalarWhereInput | Prisma.product_variantsScalarWhereInput[];
    OR?: Prisma.product_variantsScalarWhereInput[];
    NOT?: Prisma.product_variantsScalarWhereInput | Prisma.product_variantsScalarWhereInput[];
    variant_id?: Prisma.BigIntFilter<"product_variants"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_variants"> | bigint | number;
    variant_sku?: Prisma.StringFilter<"product_variants"> | string;
    color?: Prisma.StringNullableFilter<"product_variants"> | string | null;
    size?: Prisma.StringNullableFilter<"product_variants"> | string | null;
    price_delta?: Prisma.DecimalFilter<"product_variants"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type product_variantsCreateWithoutPurchase_order_itemsInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutProduct_variantsInput;
    products: Prisma.productsCreateNestedOneWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUncheckedCreateWithoutPurchase_order_itemsInput = {
    variant_id?: bigint | number;
    product_id: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsCreateOrConnectWithoutPurchase_order_itemsInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutPurchase_order_itemsInput, Prisma.product_variantsUncheckedCreateWithoutPurchase_order_itemsInput>;
};
export type product_variantsUpsertWithoutPurchase_order_itemsInput = {
    update: Prisma.XOR<Prisma.product_variantsUpdateWithoutPurchase_order_itemsInput, Prisma.product_variantsUncheckedUpdateWithoutPurchase_order_itemsInput>;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutPurchase_order_itemsInput, Prisma.product_variantsUncheckedCreateWithoutPurchase_order_itemsInput>;
    where?: Prisma.product_variantsWhereInput;
};
export type product_variantsUpdateToOneWithWhereWithoutPurchase_order_itemsInput = {
    where?: Prisma.product_variantsWhereInput;
    data: Prisma.XOR<Prisma.product_variantsUpdateWithoutPurchase_order_itemsInput, Prisma.product_variantsUncheckedUpdateWithoutPurchase_order_itemsInput>;
};
export type product_variantsUpdateWithoutPurchase_order_itemsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateWithoutPurchase_order_itemsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsCreateWithoutStock_movementsInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutProduct_variantsInput;
    products: Prisma.productsCreateNestedOneWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUncheckedCreateWithoutStock_movementsInput = {
    variant_id?: bigint | number;
    product_id: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsCreateOrConnectWithoutStock_movementsInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutStock_movementsInput, Prisma.product_variantsUncheckedCreateWithoutStock_movementsInput>;
};
export type product_variantsUpsertWithoutStock_movementsInput = {
    update: Prisma.XOR<Prisma.product_variantsUpdateWithoutStock_movementsInput, Prisma.product_variantsUncheckedUpdateWithoutStock_movementsInput>;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutStock_movementsInput, Prisma.product_variantsUncheckedCreateWithoutStock_movementsInput>;
    where?: Prisma.product_variantsWhereInput;
};
export type product_variantsUpdateToOneWithWhereWithoutStock_movementsInput = {
    where?: Prisma.product_variantsWhereInput;
    data: Prisma.XOR<Prisma.product_variantsUpdateWithoutStock_movementsInput, Prisma.product_variantsUncheckedUpdateWithoutStock_movementsInput>;
};
export type product_variantsUpdateWithoutStock_movementsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateWithoutStock_movementsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsCreateWithoutStocksInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutProduct_variantsInput;
    products: Prisma.productsCreateNestedOneWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsUncheckedCreateWithoutStocksInput = {
    variant_id?: bigint | number;
    product_id: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutProduct_variantsInput;
};
export type product_variantsCreateOrConnectWithoutStocksInput = {
    where: Prisma.product_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutStocksInput, Prisma.product_variantsUncheckedCreateWithoutStocksInput>;
};
export type product_variantsUpsertWithoutStocksInput = {
    update: Prisma.XOR<Prisma.product_variantsUpdateWithoutStocksInput, Prisma.product_variantsUncheckedUpdateWithoutStocksInput>;
    create: Prisma.XOR<Prisma.product_variantsCreateWithoutStocksInput, Prisma.product_variantsUncheckedCreateWithoutStocksInput>;
    where?: Prisma.product_variantsWhereInput;
};
export type product_variantsUpdateToOneWithWhereWithoutStocksInput = {
    where?: Prisma.product_variantsWhereInput;
    data: Prisma.XOR<Prisma.product_variantsUpdateWithoutStocksInput, Prisma.product_variantsUncheckedUpdateWithoutStocksInput>;
};
export type product_variantsUpdateWithoutStocksInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateWithoutStocksInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsCreateManyProductsInput = {
    variant_id?: bigint | number;
    variant_sku: string;
    color?: string | null;
    size?: string | null;
    price_delta?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type product_variantsUpdateWithoutProductsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateWithoutProductsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cart_items?: Prisma.cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutProduct_variantsNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutProduct_variantsNestedInput;
};
export type product_variantsUncheckedUpdateManyWithoutProductsInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_sku?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price_delta?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Product_variantsCountOutputType = {
    cart_items: number;
    order_items: number;
    purchase_order_items: number;
    stock_movements: number;
    stocks: number;
};
export type Product_variantsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | Product_variantsCountOutputTypeCountCart_itemsArgs;
    order_items?: boolean | Product_variantsCountOutputTypeCountOrder_itemsArgs;
    purchase_order_items?: boolean | Product_variantsCountOutputTypeCountPurchase_order_itemsArgs;
    stock_movements?: boolean | Product_variantsCountOutputTypeCountStock_movementsArgs;
    stocks?: boolean | Product_variantsCountOutputTypeCountStocksArgs;
};
export type Product_variantsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Product_variantsCountOutputTypeSelect<ExtArgs> | null;
};
export type Product_variantsCountOutputTypeCountCart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cart_itemsWhereInput;
};
export type Product_variantsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
};
export type Product_variantsCountOutputTypeCountPurchase_order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_order_itemsWhereInput;
};
export type Product_variantsCountOutputTypeCountStock_movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_movementsWhereInput;
};
export type Product_variantsCountOutputTypeCountStocksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
};
export type product_variantsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    variant_id?: boolean;
    product_id?: boolean;
    variant_sku?: boolean;
    color?: boolean;
    size?: boolean;
    price_delta?: boolean;
    cart_items?: boolean | Prisma.product_variants$cart_itemsArgs<ExtArgs>;
    order_items?: boolean | Prisma.product_variants$order_itemsArgs<ExtArgs>;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    purchase_order_items?: boolean | Prisma.product_variants$purchase_order_itemsArgs<ExtArgs>;
    stock_movements?: boolean | Prisma.product_variants$stock_movementsArgs<ExtArgs>;
    stocks?: boolean | Prisma.product_variants$stocksArgs<ExtArgs>;
    _count?: boolean | Prisma.Product_variantsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_variants"]>;
export type product_variantsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    variant_id?: boolean;
    product_id?: boolean;
    variant_sku?: boolean;
    color?: boolean;
    size?: boolean;
    price_delta?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_variants"]>;
export type product_variantsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    variant_id?: boolean;
    product_id?: boolean;
    variant_sku?: boolean;
    color?: boolean;
    size?: boolean;
    price_delta?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_variants"]>;
export type product_variantsSelectScalar = {
    variant_id?: boolean;
    product_id?: boolean;
    variant_sku?: boolean;
    color?: boolean;
    size?: boolean;
    price_delta?: boolean;
};
export type product_variantsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"variant_id" | "product_id" | "variant_sku" | "color" | "size" | "price_delta", ExtArgs["result"]["product_variants"]>;
export type product_variantsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cart_items?: boolean | Prisma.product_variants$cart_itemsArgs<ExtArgs>;
    order_items?: boolean | Prisma.product_variants$order_itemsArgs<ExtArgs>;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    purchase_order_items?: boolean | Prisma.product_variants$purchase_order_itemsArgs<ExtArgs>;
    stock_movements?: boolean | Prisma.product_variants$stock_movementsArgs<ExtArgs>;
    stocks?: boolean | Prisma.product_variants$stocksArgs<ExtArgs>;
    _count?: boolean | Prisma.Product_variantsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type product_variantsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type product_variantsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type $product_variantsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_variants";
    objects: {
        cart_items: Prisma.$cart_itemsPayload<ExtArgs>[];
        order_items: Prisma.$order_itemsPayload<ExtArgs>[];
        products: Prisma.$productsPayload<ExtArgs>;
        purchase_order_items: Prisma.$purchase_order_itemsPayload<ExtArgs>[];
        stock_movements: Prisma.$stock_movementsPayload<ExtArgs>[];
        stocks: Prisma.$stocksPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        variant_id: bigint;
        product_id: bigint;
        variant_sku: string;
        color: string | null;
        size: string | null;
        price_delta: runtime.Decimal;
    }, ExtArgs["result"]["product_variants"]>;
    composites: {};
};
export type product_variantsGetPayload<S extends boolean | null | undefined | product_variantsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_variantsPayload, S>;
export type product_variantsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_variantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_variantsCountAggregateInputType | true;
};
export interface product_variantsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_variants'];
        meta: {
            name: 'product_variants';
        };
    };
    findUnique<T extends product_variantsFindUniqueArgs>(args: Prisma.SelectSubset<T, product_variantsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_variantsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_variantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_variantsFindFirstArgs>(args?: Prisma.SelectSubset<T, product_variantsFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_variantsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_variantsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_variantsFindManyArgs>(args?: Prisma.SelectSubset<T, product_variantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_variantsCreateArgs>(args: Prisma.SelectSubset<T, product_variantsCreateArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_variantsCreateManyArgs>(args?: Prisma.SelectSubset<T, product_variantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends product_variantsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, product_variantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends product_variantsDeleteArgs>(args: Prisma.SelectSubset<T, product_variantsDeleteArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_variantsUpdateArgs>(args: Prisma.SelectSubset<T, product_variantsUpdateArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_variantsDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_variantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_variantsUpdateManyArgs>(args: Prisma.SelectSubset<T, product_variantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends product_variantsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, product_variantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends product_variantsUpsertArgs>(args: Prisma.SelectSubset<T, product_variantsUpsertArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_variantsCountArgs>(args?: Prisma.Subset<T, product_variantsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_variantsCountAggregateOutputType> : number>;
    aggregate<T extends Product_variantsAggregateArgs>(args: Prisma.Subset<T, Product_variantsAggregateArgs>): Prisma.PrismaPromise<GetProduct_variantsAggregateType<T>>;
    groupBy<T extends product_variantsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_variantsGroupByArgs['orderBy'];
    } : {
        orderBy?: product_variantsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_variantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_variantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_variantsFieldRefs;
}
export interface Prisma__product_variantsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cart_items<T extends Prisma.product_variants$cart_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variants$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    order_items<T extends Prisma.product_variants$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variants$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.productsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productsDefaultArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    purchase_order_items<T extends Prisma.product_variants$purchase_order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variants$purchase_order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stock_movements<T extends Prisma.product_variants$stock_movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variants$stock_movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stocks<T extends Prisma.product_variants$stocksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variants$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_variantsFieldRefs {
    readonly variant_id: Prisma.FieldRef<"product_variants", 'BigInt'>;
    readonly product_id: Prisma.FieldRef<"product_variants", 'BigInt'>;
    readonly variant_sku: Prisma.FieldRef<"product_variants", 'String'>;
    readonly color: Prisma.FieldRef<"product_variants", 'String'>;
    readonly size: Prisma.FieldRef<"product_variants", 'String'>;
    readonly price_delta: Prisma.FieldRef<"product_variants", 'Decimal'>;
}
export type product_variantsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_variantsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_variantsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_variantsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_variantsCreateInput, Prisma.product_variantsUncheckedCreateInput>;
};
export type product_variantsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_variantsCreateManyInput | Prisma.product_variantsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_variantsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    data: Prisma.product_variantsCreateManyInput | Prisma.product_variantsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.product_variantsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type product_variantsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_variantsUpdateInput, Prisma.product_variantsUncheckedUpdateInput>;
    where: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_variantsUpdateManyMutationInput, Prisma.product_variantsUncheckedUpdateManyInput>;
    where?: Prisma.product_variantsWhereInput;
    limit?: number;
};
export type product_variantsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_variantsUpdateManyMutationInput, Prisma.product_variantsUncheckedUpdateManyInput>;
    where?: Prisma.product_variantsWhereInput;
    limit?: number;
    include?: Prisma.product_variantsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type product_variantsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where: Prisma.product_variantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_variantsCreateInput, Prisma.product_variantsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_variantsUpdateInput, Prisma.product_variantsUncheckedUpdateInput>;
};
export type product_variantsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
    where: Prisma.product_variantsWhereUniqueInput;
};
export type product_variantsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_variantsWhereInput;
    limit?: number;
};
export type product_variants$cart_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cart_itemsSelect<ExtArgs> | null;
    omit?: Prisma.cart_itemsOmit<ExtArgs> | null;
    include?: Prisma.cart_itemsInclude<ExtArgs> | null;
    where?: Prisma.cart_itemsWhereInput;
    orderBy?: Prisma.cart_itemsOrderByWithRelationInput | Prisma.cart_itemsOrderByWithRelationInput[];
    cursor?: Prisma.cart_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cart_itemsScalarFieldEnum | Prisma.Cart_itemsScalarFieldEnum[];
};
export type product_variants$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type product_variants$purchase_order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
    where?: Prisma.purchase_order_itemsWhereInput;
    orderBy?: Prisma.purchase_order_itemsOrderByWithRelationInput | Prisma.purchase_order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.purchase_order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Purchase_order_itemsScalarFieldEnum | Prisma.Purchase_order_itemsScalarFieldEnum[];
};
export type product_variants$stock_movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
    where?: Prisma.stock_movementsWhereInput;
    orderBy?: Prisma.stock_movementsOrderByWithRelationInput | Prisma.stock_movementsOrderByWithRelationInput[];
    cursor?: Prisma.stock_movementsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Stock_movementsScalarFieldEnum | Prisma.Stock_movementsScalarFieldEnum[];
};
export type product_variants$stocksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithRelationInput | Prisma.stocksOrderByWithRelationInput[];
    cursor?: Prisma.stocksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StocksScalarFieldEnum | Prisma.StocksScalarFieldEnum[];
};
export type product_variantsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_variantsSelect<ExtArgs> | null;
    omit?: Prisma.product_variantsOmit<ExtArgs> | null;
    include?: Prisma.product_variantsInclude<ExtArgs> | null;
};
