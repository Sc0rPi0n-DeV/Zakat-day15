import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type wishlist_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlist_itemsPayload>;
export type AggregateWishlist_items = {
    _count: Wishlist_itemsCountAggregateOutputType | null;
    _avg: Wishlist_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_itemsSumAggregateOutputType | null;
    _min: Wishlist_itemsMinAggregateOutputType | null;
    _max: Wishlist_itemsMaxAggregateOutputType | null;
};
export type Wishlist_itemsAvgAggregateOutputType = {
    wishlist_id: number | null;
    product_id: number | null;
};
export type Wishlist_itemsSumAggregateOutputType = {
    wishlist_id: bigint | null;
    product_id: bigint | null;
};
export type Wishlist_itemsMinAggregateOutputType = {
    wishlist_id: bigint | null;
    product_id: bigint | null;
};
export type Wishlist_itemsMaxAggregateOutputType = {
    wishlist_id: bigint | null;
    product_id: bigint | null;
};
export type Wishlist_itemsCountAggregateOutputType = {
    wishlist_id: number;
    product_id: number;
    _all: number;
};
export type Wishlist_itemsAvgAggregateInputType = {
    wishlist_id?: true;
    product_id?: true;
};
export type Wishlist_itemsSumAggregateInputType = {
    wishlist_id?: true;
    product_id?: true;
};
export type Wishlist_itemsMinAggregateInputType = {
    wishlist_id?: true;
    product_id?: true;
};
export type Wishlist_itemsMaxAggregateInputType = {
    wishlist_id?: true;
    product_id?: true;
};
export type Wishlist_itemsCountAggregateInputType = {
    wishlist_id?: true;
    product_id?: true;
    _all?: true;
};
export type Wishlist_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
    orderBy?: Prisma.wishlist_itemsOrderByWithRelationInput | Prisma.wishlist_itemsOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Wishlist_itemsCountAggregateInputType;
    _avg?: Wishlist_itemsAvgAggregateInputType;
    _sum?: Wishlist_itemsSumAggregateInputType;
    _min?: Wishlist_itemsMinAggregateInputType;
    _max?: Wishlist_itemsMaxAggregateInputType;
};
export type GetWishlist_itemsAggregateType<T extends Wishlist_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlist_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlist_items[P]> : Prisma.GetScalarType<T[P], AggregateWishlist_items[P]>;
};
export type wishlist_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
    orderBy?: Prisma.wishlist_itemsOrderByWithAggregationInput | Prisma.wishlist_itemsOrderByWithAggregationInput[];
    by: Prisma.Wishlist_itemsScalarFieldEnum[] | Prisma.Wishlist_itemsScalarFieldEnum;
    having?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Wishlist_itemsCountAggregateInputType | true;
    _avg?: Wishlist_itemsAvgAggregateInputType;
    _sum?: Wishlist_itemsSumAggregateInputType;
    _min?: Wishlist_itemsMinAggregateInputType;
    _max?: Wishlist_itemsMaxAggregateInputType;
};
export type Wishlist_itemsGroupByOutputType = {
    wishlist_id: bigint;
    product_id: bigint;
    _count: Wishlist_itemsCountAggregateOutputType | null;
    _avg: Wishlist_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_itemsSumAggregateOutputType | null;
    _min: Wishlist_itemsMinAggregateOutputType | null;
    _max: Wishlist_itemsMaxAggregateOutputType | null;
};
export type GetWishlist_itemsGroupByPayload<T extends wishlist_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Wishlist_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Wishlist_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Wishlist_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Wishlist_itemsGroupByOutputType[P]>;
}>>;
export type wishlist_itemsWhereInput = {
    AND?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    OR?: Prisma.wishlist_itemsWhereInput[];
    NOT?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    wishlist_id?: Prisma.BigIntFilter<"wishlist_items"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"wishlist_items"> | bigint | number;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
    wishlists?: Prisma.XOR<Prisma.WishlistsScalarRelationFilter, Prisma.wishlistsWhereInput>;
};
export type wishlist_itemsOrderByWithRelationInput = {
    wishlist_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    products?: Prisma.productsOrderByWithRelationInput;
    wishlists?: Prisma.wishlistsOrderByWithRelationInput;
};
export type wishlist_itemsWhereUniqueInput = Prisma.AtLeast<{
    wishlist_id_product_id?: Prisma.wishlist_itemsWishlist_idProduct_idCompoundUniqueInput;
    AND?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    OR?: Prisma.wishlist_itemsWhereInput[];
    NOT?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    wishlist_id?: Prisma.BigIntFilter<"wishlist_items"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"wishlist_items"> | bigint | number;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
    wishlists?: Prisma.XOR<Prisma.WishlistsScalarRelationFilter, Prisma.wishlistsWhereInput>;
}, "wishlist_id_product_id">;
export type wishlist_itemsOrderByWithAggregationInput = {
    wishlist_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    _count?: Prisma.wishlist_itemsCountOrderByAggregateInput;
    _avg?: Prisma.wishlist_itemsAvgOrderByAggregateInput;
    _max?: Prisma.wishlist_itemsMaxOrderByAggregateInput;
    _min?: Prisma.wishlist_itemsMinOrderByAggregateInput;
    _sum?: Prisma.wishlist_itemsSumOrderByAggregateInput;
};
export type wishlist_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_itemsScalarWhereWithAggregatesInput[];
    wishlist_id?: Prisma.BigIntWithAggregatesFilter<"wishlist_items"> | bigint | number;
    product_id?: Prisma.BigIntWithAggregatesFilter<"wishlist_items"> | bigint | number;
};
export type wishlist_itemsCreateInput = {
    products: Prisma.productsCreateNestedOneWithoutWishlist_itemsInput;
    wishlists: Prisma.wishlistsCreateNestedOneWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateInput = {
    wishlist_id: bigint | number;
    product_id: bigint | number;
};
export type wishlist_itemsUpdateInput = {
    products?: Prisma.productsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
    wishlists?: Prisma.wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type wishlist_itemsCreateManyInput = {
    wishlist_id: bigint | number;
    product_id: bigint | number;
};
export type wishlist_itemsUpdateManyMutationInput = {};
export type wishlist_itemsUncheckedUpdateManyInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type Wishlist_itemsListRelationFilter = {
    every?: Prisma.wishlist_itemsWhereInput;
    some?: Prisma.wishlist_itemsWhereInput;
    none?: Prisma.wishlist_itemsWhereInput;
};
export type wishlist_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type wishlist_itemsWishlist_idProduct_idCompoundUniqueInput = {
    wishlist_id: bigint | number;
    product_id: bigint | number;
};
export type wishlist_itemsCountOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
};
export type wishlist_itemsAvgOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
};
export type wishlist_itemsMaxOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
};
export type wishlist_itemsMinOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
};
export type wishlist_itemsSumOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
};
export type wishlist_itemsCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutProductsInput, Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput> | Prisma.wishlist_itemsCreateWithoutProductsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput | Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyProductsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutProductsInput, Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput> | Prisma.wishlist_itemsCreateWithoutProductsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput | Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyProductsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutProductsInput, Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput> | Prisma.wishlist_itemsCreateWithoutProductsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput | Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutProductsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyProductsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutProductsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutProductsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutProductsInput, Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput> | Prisma.wishlist_itemsCreateWithoutProductsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput | Prisma.wishlist_itemsCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutProductsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyProductsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutProductsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutProductsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsCreateNestedManyWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUpdateManyWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsCreateWithoutProductsInput = {
    wishlists: Prisma.wishlistsCreateNestedOneWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateWithoutProductsInput = {
    wishlist_id: bigint | number;
};
export type wishlist_itemsCreateOrConnectWithoutProductsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutProductsInput, Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput>;
};
export type wishlist_itemsCreateManyProductsInputEnvelope = {
    data: Prisma.wishlist_itemsCreateManyProductsInput | Prisma.wishlist_itemsCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutProductsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutProductsInput, Prisma.wishlist_itemsUncheckedCreateWithoutProductsInput>;
};
export type wishlist_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutProductsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutProductsInput>;
};
export type wishlist_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.wishlist_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyWithoutProductsInput>;
};
export type wishlist_itemsScalarWhereInput = {
    AND?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
    OR?: Prisma.wishlist_itemsScalarWhereInput[];
    NOT?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
    wishlist_id?: Prisma.BigIntFilter<"wishlist_items"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"wishlist_items"> | bigint | number;
};
export type wishlist_itemsCreateWithoutWishlistsInput = {
    products: Prisma.productsCreateNestedOneWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateWithoutWishlistsInput = {
    product_id: bigint | number;
};
export type wishlist_itemsCreateOrConnectWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput>;
};
export type wishlist_itemsCreateManyWishlistsInputEnvelope = {
    data: Prisma.wishlist_itemsCreateManyWishlistsInput | Prisma.wishlist_itemsCreateManyWishlistsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutWishlistsInput>;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput>;
};
export type wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutWishlistsInput>;
};
export type wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsInput>;
};
export type wishlist_itemsCreateManyProductsInput = {
    wishlist_id: bigint | number;
};
export type wishlist_itemsUpdateWithoutProductsInput = {
    wishlists?: Prisma.wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateWithoutProductsInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type wishlist_itemsUncheckedUpdateManyWithoutProductsInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type wishlist_itemsCreateManyWishlistsInput = {
    product_id: bigint | number;
};
export type wishlist_itemsUpdateWithoutWishlistsInput = {
    products?: Prisma.productsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateWithoutWishlistsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type wishlist_itemsUncheckedUpdateManyWithoutWishlistsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type wishlist_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wishlist_id?: boolean;
    product_id?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wishlist_id?: boolean;
    product_id?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wishlist_id?: boolean;
    product_id?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsSelectScalar = {
    wishlist_id?: boolean;
    product_id?: boolean;
};
export type wishlist_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"wishlist_id" | "product_id", ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
};
export type wishlist_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
};
export type wishlist_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
};
export type $wishlist_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlist_items";
    objects: {
        products: Prisma.$productsPayload<ExtArgs>;
        wishlists: Prisma.$wishlistsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        wishlist_id: bigint;
        product_id: bigint;
    }, ExtArgs["result"]["wishlist_items"]>;
    composites: {};
};
export type wishlist_itemsGetPayload<S extends boolean | null | undefined | wishlist_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload, S>;
export type wishlist_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlist_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Wishlist_itemsCountAggregateInputType | true;
};
export interface wishlist_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlist_items'];
        meta: {
            name: 'wishlist_items';
        };
    };
    findUnique<T extends wishlist_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlist_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends wishlist_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlist_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends wishlist_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends wishlist_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends wishlist_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends wishlist_itemsCreateArgs>(args: Prisma.SelectSubset<T, wishlist_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends wishlist_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends wishlist_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends wishlist_itemsDeleteArgs>(args: Prisma.SelectSubset<T, wishlist_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends wishlist_itemsUpdateArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends wishlist_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends wishlist_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends wishlist_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends wishlist_itemsUpsertArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends wishlist_itemsCountArgs>(args?: Prisma.Subset<T, wishlist_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Wishlist_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Wishlist_itemsAggregateArgs>(args: Prisma.Subset<T, Wishlist_itemsAggregateArgs>): Prisma.PrismaPromise<GetWishlist_itemsAggregateType<T>>;
    groupBy<T extends wishlist_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlist_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlist_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlist_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlist_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: wishlist_itemsFieldRefs;
}
export interface Prisma__wishlist_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.productsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productsDefaultArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    wishlists<T extends Prisma.wishlistsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlistsDefaultArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface wishlist_itemsFieldRefs {
    readonly wishlist_id: Prisma.FieldRef<"wishlist_items", 'BigInt'>;
    readonly product_id: Prisma.FieldRef<"wishlist_items", 'BigInt'>;
}
export type wishlist_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
export type wishlist_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
export type wishlist_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wishlist_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wishlist_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wishlist_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wishlist_itemsCreateInput, Prisma.wishlist_itemsUncheckedCreateInput>;
};
export type wishlist_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.wishlist_itemsCreateManyInput | Prisma.wishlist_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type wishlist_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    data: Prisma.wishlist_itemsCreateManyInput | Prisma.wishlist_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.wishlist_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type wishlist_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateInput, Prisma.wishlist_itemsUncheckedUpdateInput>;
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
export type wishlist_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyInput>;
    where?: Prisma.wishlist_itemsWhereInput;
    limit?: number;
};
export type wishlist_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyInput>;
    where?: Prisma.wishlist_itemsWhereInput;
    limit?: number;
    include?: Prisma.wishlist_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type wishlist_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    where: Prisma.wishlist_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateInput, Prisma.wishlist_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateInput, Prisma.wishlist_itemsUncheckedUpdateInput>;
};
export type wishlist_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
export type wishlist_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
    limit?: number;
};
export type wishlist_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
};
