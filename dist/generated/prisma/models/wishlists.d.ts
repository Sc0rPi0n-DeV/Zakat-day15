import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type wishlistsModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlistsPayload>;
export type AggregateWishlists = {
    _count: WishlistsCountAggregateOutputType | null;
    _avg: WishlistsAvgAggregateOutputType | null;
    _sum: WishlistsSumAggregateOutputType | null;
    _min: WishlistsMinAggregateOutputType | null;
    _max: WishlistsMaxAggregateOutputType | null;
};
export type WishlistsAvgAggregateOutputType = {
    wishlist_id: number | null;
    customer_id: number | null;
};
export type WishlistsSumAggregateOutputType = {
    wishlist_id: bigint | null;
    customer_id: bigint | null;
};
export type WishlistsMinAggregateOutputType = {
    wishlist_id: bigint | null;
    customer_id: bigint | null;
    wishlist_name: string | null;
};
export type WishlistsMaxAggregateOutputType = {
    wishlist_id: bigint | null;
    customer_id: bigint | null;
    wishlist_name: string | null;
};
export type WishlistsCountAggregateOutputType = {
    wishlist_id: number;
    customer_id: number;
    wishlist_name: number;
    _all: number;
};
export type WishlistsAvgAggregateInputType = {
    wishlist_id?: true;
    customer_id?: true;
};
export type WishlistsSumAggregateInputType = {
    wishlist_id?: true;
    customer_id?: true;
};
export type WishlistsMinAggregateInputType = {
    wishlist_id?: true;
    customer_id?: true;
    wishlist_name?: true;
};
export type WishlistsMaxAggregateInputType = {
    wishlist_id?: true;
    customer_id?: true;
    wishlist_name?: true;
};
export type WishlistsCountAggregateInputType = {
    wishlist_id?: true;
    customer_id?: true;
    wishlist_name?: true;
    _all?: true;
};
export type WishlistsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    cursor?: Prisma.wishlistsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WishlistsCountAggregateInputType;
    _avg?: WishlistsAvgAggregateInputType;
    _sum?: WishlistsSumAggregateInputType;
    _min?: WishlistsMinAggregateInputType;
    _max?: WishlistsMaxAggregateInputType;
};
export type GetWishlistsAggregateType<T extends WishlistsAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlists]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlists[P]> : Prisma.GetScalarType<T[P], AggregateWishlists[P]>;
};
export type wishlistsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithAggregationInput | Prisma.wishlistsOrderByWithAggregationInput[];
    by: Prisma.WishlistsScalarFieldEnum[] | Prisma.WishlistsScalarFieldEnum;
    having?: Prisma.wishlistsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WishlistsCountAggregateInputType | true;
    _avg?: WishlistsAvgAggregateInputType;
    _sum?: WishlistsSumAggregateInputType;
    _min?: WishlistsMinAggregateInputType;
    _max?: WishlistsMaxAggregateInputType;
};
export type WishlistsGroupByOutputType = {
    wishlist_id: bigint;
    customer_id: bigint;
    wishlist_name: string;
    _count: WishlistsCountAggregateOutputType | null;
    _avg: WishlistsAvgAggregateOutputType | null;
    _sum: WishlistsSumAggregateOutputType | null;
    _min: WishlistsMinAggregateOutputType | null;
    _max: WishlistsMaxAggregateOutputType | null;
};
export type GetWishlistsGroupByPayload<T extends wishlistsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WishlistsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WishlistsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WishlistsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WishlistsGroupByOutputType[P]>;
}>>;
export type wishlistsWhereInput = {
    AND?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    OR?: Prisma.wishlistsWhereInput[];
    NOT?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    wishlist_id?: Prisma.BigIntFilter<"wishlists"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"wishlists"> | bigint | number;
    wishlist_name?: Prisma.StringFilter<"wishlists"> | string;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
};
export type wishlistsOrderByWithRelationInput = {
    wishlist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    wishlist_name?: Prisma.SortOrder;
    wishlist_items?: Prisma.wishlist_itemsOrderByRelationAggregateInput;
    customers?: Prisma.customersOrderByWithRelationInput;
};
export type wishlistsWhereUniqueInput = Prisma.AtLeast<{
    wishlist_id?: bigint | number;
    AND?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    OR?: Prisma.wishlistsWhereInput[];
    NOT?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    customer_id?: Prisma.BigIntFilter<"wishlists"> | bigint | number;
    wishlist_name?: Prisma.StringFilter<"wishlists"> | string;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
}, "wishlist_id">;
export type wishlistsOrderByWithAggregationInput = {
    wishlist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    wishlist_name?: Prisma.SortOrder;
    _count?: Prisma.wishlistsCountOrderByAggregateInput;
    _avg?: Prisma.wishlistsAvgOrderByAggregateInput;
    _max?: Prisma.wishlistsMaxOrderByAggregateInput;
    _min?: Prisma.wishlistsMinOrderByAggregateInput;
    _sum?: Prisma.wishlistsSumOrderByAggregateInput;
};
export type wishlistsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlistsScalarWhereWithAggregatesInput | Prisma.wishlistsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlistsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlistsScalarWhereWithAggregatesInput | Prisma.wishlistsScalarWhereWithAggregatesInput[];
    wishlist_id?: Prisma.BigIntWithAggregatesFilter<"wishlists"> | bigint | number;
    customer_id?: Prisma.BigIntWithAggregatesFilter<"wishlists"> | bigint | number;
    wishlist_name?: Prisma.StringWithAggregatesFilter<"wishlists"> | string;
};
export type wishlistsCreateInput = {
    wishlist_id?: bigint | number;
    wishlist_name?: string;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutWishlistsInput;
    customers: Prisma.customersCreateNestedOneWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateInput = {
    wishlist_id?: bigint | number;
    customer_id: bigint | number;
    wishlist_name?: string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput;
};
export type wishlistsUpdateInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutWishlistsNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput;
};
export type wishlistsCreateManyInput = {
    wishlist_id?: bigint | number;
    customer_id: bigint | number;
    wishlist_name?: string;
};
export type wishlistsUpdateManyMutationInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlistsUncheckedUpdateManyInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type WishlistsListRelationFilter = {
    every?: Prisma.wishlistsWhereInput;
    some?: Prisma.wishlistsWhereInput;
    none?: Prisma.wishlistsWhereInput;
};
export type wishlistsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WishlistsScalarRelationFilter = {
    is?: Prisma.wishlistsWhereInput;
    isNot?: Prisma.wishlistsWhereInput;
};
export type wishlistsCountOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    wishlist_name?: Prisma.SortOrder;
};
export type wishlistsAvgOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
};
export type wishlistsMaxOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    wishlist_name?: Prisma.SortOrder;
};
export type wishlistsMinOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    wishlist_name?: Prisma.SortOrder;
};
export type wishlistsSumOrderByAggregateInput = {
    wishlist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
};
export type wishlistsCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutCustomersInput, Prisma.wishlistsUncheckedCreateWithoutCustomersInput> | Prisma.wishlistsCreateWithoutCustomersInput[] | Prisma.wishlistsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutCustomersInput | Prisma.wishlistsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.wishlistsCreateManyCustomersInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutCustomersInput, Prisma.wishlistsUncheckedCreateWithoutCustomersInput> | Prisma.wishlistsCreateWithoutCustomersInput[] | Prisma.wishlistsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutCustomersInput | Prisma.wishlistsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.wishlistsCreateManyCustomersInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutCustomersInput, Prisma.wishlistsUncheckedCreateWithoutCustomersInput> | Prisma.wishlistsCreateWithoutCustomersInput[] | Prisma.wishlistsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutCustomersInput | Prisma.wishlistsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.wishlistsCreateManyCustomersInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutCustomersInput | Prisma.wishlistsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutCustomersInput, Prisma.wishlistsUncheckedCreateWithoutCustomersInput> | Prisma.wishlistsCreateWithoutCustomersInput[] | Prisma.wishlistsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutCustomersInput | Prisma.wishlistsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.wishlistsCreateManyCustomersInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutCustomersInput | Prisma.wishlistsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsCreateNestedOneWithoutWishlist_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutWishlist_itemsInput;
    connect?: Prisma.wishlistsWhereUniqueInput;
};
export type wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutWishlist_itemsInput;
    upsert?: Prisma.wishlistsUpsertWithoutWishlist_itemsInput;
    connect?: Prisma.wishlistsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlistsUpdateToOneWithWhereWithoutWishlist_itemsInput, Prisma.wishlistsUpdateWithoutWishlist_itemsInput>, Prisma.wishlistsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type wishlistsCreateWithoutCustomersInput = {
    wishlist_id?: bigint | number;
    wishlist_name?: string;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateWithoutCustomersInput = {
    wishlist_id?: bigint | number;
    wishlist_name?: string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput;
};
export type wishlistsCreateOrConnectWithoutCustomersInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutCustomersInput, Prisma.wishlistsUncheckedCreateWithoutCustomersInput>;
};
export type wishlistsCreateManyCustomersInputEnvelope = {
    data: Prisma.wishlistsCreateManyCustomersInput | Prisma.wishlistsCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type wishlistsUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlistsUpdateWithoutCustomersInput, Prisma.wishlistsUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutCustomersInput, Prisma.wishlistsUncheckedCreateWithoutCustomersInput>;
};
export type wishlistsUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateWithoutCustomersInput, Prisma.wishlistsUncheckedUpdateWithoutCustomersInput>;
};
export type wishlistsUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.wishlistsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyWithoutCustomersInput>;
};
export type wishlistsScalarWhereInput = {
    AND?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
    OR?: Prisma.wishlistsScalarWhereInput[];
    NOT?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
    wishlist_id?: Prisma.BigIntFilter<"wishlists"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"wishlists"> | bigint | number;
    wishlist_name?: Prisma.StringFilter<"wishlists"> | string;
};
export type wishlistsCreateWithoutWishlist_itemsInput = {
    wishlist_id?: bigint | number;
    wishlist_name?: string;
    customers: Prisma.customersCreateNestedOneWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateWithoutWishlist_itemsInput = {
    wishlist_id?: bigint | number;
    customer_id: bigint | number;
    wishlist_name?: string;
};
export type wishlistsCreateOrConnectWithoutWishlist_itemsInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
};
export type wishlistsUpsertWithoutWishlist_itemsInput = {
    update: Prisma.XOR<Prisma.wishlistsUpdateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedUpdateWithoutWishlist_itemsInput>;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
    where?: Prisma.wishlistsWhereInput;
};
export type wishlistsUpdateToOneWithWhereWithoutWishlist_itemsInput = {
    where?: Prisma.wishlistsWhereInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type wishlistsUpdateWithoutWishlist_itemsInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customers?: Prisma.customersUpdateOneRequiredWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateWithoutWishlist_itemsInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlistsCreateManyCustomersInput = {
    wishlist_id?: bigint | number;
    wishlist_name?: string;
};
export type wishlistsUpdateWithoutCustomersInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateWithoutCustomersInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateManyWithoutCustomersInput = {
    wishlist_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    wishlist_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type WishlistsCountOutputType = {
    wishlist_items: number;
};
export type WishlistsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist_items?: boolean | WishlistsCountOutputTypeCountWishlist_itemsArgs;
};
export type WishlistsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistsCountOutputTypeSelect<ExtArgs> | null;
};
export type WishlistsCountOutputTypeCountWishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
};
export type wishlistsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wishlist_id?: boolean;
    customer_id?: boolean;
    wishlist_name?: boolean;
    wishlist_items?: boolean | Prisma.wishlists$wishlist_itemsArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WishlistsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlists"]>;
export type wishlistsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wishlist_id?: boolean;
    customer_id?: boolean;
    wishlist_name?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlists"]>;
export type wishlistsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wishlist_id?: boolean;
    customer_id?: boolean;
    wishlist_name?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlists"]>;
export type wishlistsSelectScalar = {
    wishlist_id?: boolean;
    customer_id?: boolean;
    wishlist_name?: boolean;
};
export type wishlistsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"wishlist_id" | "customer_id" | "wishlist_name", ExtArgs["result"]["wishlists"]>;
export type wishlistsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist_items?: boolean | Prisma.wishlists$wishlist_itemsArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WishlistsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type wishlistsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
};
export type wishlistsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
};
export type $wishlistsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlists";
    objects: {
        wishlist_items: Prisma.$wishlist_itemsPayload<ExtArgs>[];
        customers: Prisma.$customersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        wishlist_id: bigint;
        customer_id: bigint;
        wishlist_name: string;
    }, ExtArgs["result"]["wishlists"]>;
    composites: {};
};
export type wishlistsGetPayload<S extends boolean | null | undefined | wishlistsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlistsPayload, S>;
export type wishlistsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WishlistsCountAggregateInputType | true;
};
export interface wishlistsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlists'];
        meta: {
            name: 'wishlists';
        };
    };
    findUnique<T extends wishlistsFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlistsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends wishlistsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends wishlistsFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlistsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends wishlistsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlistsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends wishlistsFindManyArgs>(args?: Prisma.SelectSubset<T, wishlistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends wishlistsCreateArgs>(args: Prisma.SelectSubset<T, wishlistsCreateArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends wishlistsCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends wishlistsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends wishlistsDeleteArgs>(args: Prisma.SelectSubset<T, wishlistsDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends wishlistsUpdateArgs>(args: Prisma.SelectSubset<T, wishlistsUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends wishlistsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends wishlistsUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends wishlistsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends wishlistsUpsertArgs>(args: Prisma.SelectSubset<T, wishlistsUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends wishlistsCountArgs>(args?: Prisma.Subset<T, wishlistsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WishlistsCountAggregateOutputType> : number>;
    aggregate<T extends WishlistsAggregateArgs>(args: Prisma.Subset<T, WishlistsAggregateArgs>): Prisma.PrismaPromise<GetWishlistsAggregateType<T>>;
    groupBy<T extends wishlistsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlistsGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlistsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: wishlistsFieldRefs;
}
export interface Prisma__wishlistsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wishlist_items<T extends Prisma.wishlists$wishlist_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlists$wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customers<T extends Prisma.customersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customersDefaultArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface wishlistsFieldRefs {
    readonly wishlist_id: Prisma.FieldRef<"wishlists", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"wishlists", 'BigInt'>;
    readonly wishlist_name: Prisma.FieldRef<"wishlists", 'String'>;
}
export type wishlistsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where: Prisma.wishlistsWhereUniqueInput;
};
export type wishlistsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where: Prisma.wishlistsWhereUniqueInput;
};
export type wishlistsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    cursor?: Prisma.wishlistsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
export type wishlistsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    cursor?: Prisma.wishlistsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
export type wishlistsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    cursor?: Prisma.wishlistsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
export type wishlistsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wishlistsCreateInput, Prisma.wishlistsUncheckedCreateInput>;
};
export type wishlistsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.wishlistsCreateManyInput | Prisma.wishlistsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type wishlistsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    data: Prisma.wishlistsCreateManyInput | Prisma.wishlistsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.wishlistsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type wishlistsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wishlistsUpdateInput, Prisma.wishlistsUncheckedUpdateInput>;
    where: Prisma.wishlistsWhereUniqueInput;
};
export type wishlistsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyInput>;
    where?: Prisma.wishlistsWhereInput;
    limit?: number;
};
export type wishlistsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyInput>;
    where?: Prisma.wishlistsWhereInput;
    limit?: number;
    include?: Prisma.wishlistsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type wishlistsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where: Prisma.wishlistsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistsCreateInput, Prisma.wishlistsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.wishlistsUpdateInput, Prisma.wishlistsUncheckedUpdateInput>;
};
export type wishlistsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where: Prisma.wishlistsWhereUniqueInput;
};
export type wishlistsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
    limit?: number;
};
export type wishlists$wishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type wishlistsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
};
