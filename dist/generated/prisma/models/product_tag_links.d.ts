import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_tag_linksModel = runtime.Types.Result.DefaultSelection<Prisma.$product_tag_linksPayload>;
export type AggregateProduct_tag_links = {
    _count: Product_tag_linksCountAggregateOutputType | null;
    _avg: Product_tag_linksAvgAggregateOutputType | null;
    _sum: Product_tag_linksSumAggregateOutputType | null;
    _min: Product_tag_linksMinAggregateOutputType | null;
    _max: Product_tag_linksMaxAggregateOutputType | null;
};
export type Product_tag_linksAvgAggregateOutputType = {
    product_id: number | null;
    tag_id: number | null;
};
export type Product_tag_linksSumAggregateOutputType = {
    product_id: bigint | null;
    tag_id: bigint | null;
};
export type Product_tag_linksMinAggregateOutputType = {
    product_id: bigint | null;
    tag_id: bigint | null;
};
export type Product_tag_linksMaxAggregateOutputType = {
    product_id: bigint | null;
    tag_id: bigint | null;
};
export type Product_tag_linksCountAggregateOutputType = {
    product_id: number;
    tag_id: number;
    _all: number;
};
export type Product_tag_linksAvgAggregateInputType = {
    product_id?: true;
    tag_id?: true;
};
export type Product_tag_linksSumAggregateInputType = {
    product_id?: true;
    tag_id?: true;
};
export type Product_tag_linksMinAggregateInputType = {
    product_id?: true;
    tag_id?: true;
};
export type Product_tag_linksMaxAggregateInputType = {
    product_id?: true;
    tag_id?: true;
};
export type Product_tag_linksCountAggregateInputType = {
    product_id?: true;
    tag_id?: true;
    _all?: true;
};
export type Product_tag_linksAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tag_linksWhereInput;
    orderBy?: Prisma.product_tag_linksOrderByWithRelationInput | Prisma.product_tag_linksOrderByWithRelationInput[];
    cursor?: Prisma.product_tag_linksWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_tag_linksCountAggregateInputType;
    _avg?: Product_tag_linksAvgAggregateInputType;
    _sum?: Product_tag_linksSumAggregateInputType;
    _min?: Product_tag_linksMinAggregateInputType;
    _max?: Product_tag_linksMaxAggregateInputType;
};
export type GetProduct_tag_linksAggregateType<T extends Product_tag_linksAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_tag_links]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_tag_links[P]> : Prisma.GetScalarType<T[P], AggregateProduct_tag_links[P]>;
};
export type product_tag_linksGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tag_linksWhereInput;
    orderBy?: Prisma.product_tag_linksOrderByWithAggregationInput | Prisma.product_tag_linksOrderByWithAggregationInput[];
    by: Prisma.Product_tag_linksScalarFieldEnum[] | Prisma.Product_tag_linksScalarFieldEnum;
    having?: Prisma.product_tag_linksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_tag_linksCountAggregateInputType | true;
    _avg?: Product_tag_linksAvgAggregateInputType;
    _sum?: Product_tag_linksSumAggregateInputType;
    _min?: Product_tag_linksMinAggregateInputType;
    _max?: Product_tag_linksMaxAggregateInputType;
};
export type Product_tag_linksGroupByOutputType = {
    product_id: bigint;
    tag_id: bigint;
    _count: Product_tag_linksCountAggregateOutputType | null;
    _avg: Product_tag_linksAvgAggregateOutputType | null;
    _sum: Product_tag_linksSumAggregateOutputType | null;
    _min: Product_tag_linksMinAggregateOutputType | null;
    _max: Product_tag_linksMaxAggregateOutputType | null;
};
export type GetProduct_tag_linksGroupByPayload<T extends product_tag_linksGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_tag_linksGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_tag_linksGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_tag_linksGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_tag_linksGroupByOutputType[P]>;
}>>;
export type product_tag_linksWhereInput = {
    AND?: Prisma.product_tag_linksWhereInput | Prisma.product_tag_linksWhereInput[];
    OR?: Prisma.product_tag_linksWhereInput[];
    NOT?: Prisma.product_tag_linksWhereInput | Prisma.product_tag_linksWhereInput[];
    product_id?: Prisma.BigIntFilter<"product_tag_links"> | bigint | number;
    tag_id?: Prisma.BigIntFilter<"product_tag_links"> | bigint | number;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
    product_tags?: Prisma.XOR<Prisma.Product_tagsScalarRelationFilter, Prisma.product_tagsWhereInput>;
};
export type product_tag_linksOrderByWithRelationInput = {
    product_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
    products?: Prisma.productsOrderByWithRelationInput;
    product_tags?: Prisma.product_tagsOrderByWithRelationInput;
};
export type product_tag_linksWhereUniqueInput = Prisma.AtLeast<{
    product_id_tag_id?: Prisma.product_tag_linksProduct_idTag_idCompoundUniqueInput;
    AND?: Prisma.product_tag_linksWhereInput | Prisma.product_tag_linksWhereInput[];
    OR?: Prisma.product_tag_linksWhereInput[];
    NOT?: Prisma.product_tag_linksWhereInput | Prisma.product_tag_linksWhereInput[];
    product_id?: Prisma.BigIntFilter<"product_tag_links"> | bigint | number;
    tag_id?: Prisma.BigIntFilter<"product_tag_links"> | bigint | number;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
    product_tags?: Prisma.XOR<Prisma.Product_tagsScalarRelationFilter, Prisma.product_tagsWhereInput>;
}, "product_id_tag_id">;
export type product_tag_linksOrderByWithAggregationInput = {
    product_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
    _count?: Prisma.product_tag_linksCountOrderByAggregateInput;
    _avg?: Prisma.product_tag_linksAvgOrderByAggregateInput;
    _max?: Prisma.product_tag_linksMaxOrderByAggregateInput;
    _min?: Prisma.product_tag_linksMinOrderByAggregateInput;
    _sum?: Prisma.product_tag_linksSumOrderByAggregateInput;
};
export type product_tag_linksScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_tag_linksScalarWhereWithAggregatesInput | Prisma.product_tag_linksScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_tag_linksScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_tag_linksScalarWhereWithAggregatesInput | Prisma.product_tag_linksScalarWhereWithAggregatesInput[];
    product_id?: Prisma.BigIntWithAggregatesFilter<"product_tag_links"> | bigint | number;
    tag_id?: Prisma.BigIntWithAggregatesFilter<"product_tag_links"> | bigint | number;
};
export type product_tag_linksCreateInput = {
    products: Prisma.productsCreateNestedOneWithoutProduct_tag_linksInput;
    product_tags: Prisma.product_tagsCreateNestedOneWithoutProduct_tag_linksInput;
};
export type product_tag_linksUncheckedCreateInput = {
    product_id: bigint | number;
    tag_id: bigint | number;
};
export type product_tag_linksUpdateInput = {
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_tag_linksNestedInput;
    product_tags?: Prisma.product_tagsUpdateOneRequiredWithoutProduct_tag_linksNestedInput;
};
export type product_tag_linksUncheckedUpdateInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type product_tag_linksCreateManyInput = {
    product_id: bigint | number;
    tag_id: bigint | number;
};
export type product_tag_linksUpdateManyMutationInput = {};
export type product_tag_linksUncheckedUpdateManyInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type product_tag_linksProduct_idTag_idCompoundUniqueInput = {
    product_id: bigint | number;
    tag_id: bigint | number;
};
export type product_tag_linksCountOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type product_tag_linksAvgOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type product_tag_linksMaxOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type product_tag_linksMinOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type product_tag_linksSumOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    tag_id?: Prisma.SortOrder;
};
export type Product_tag_linksListRelationFilter = {
    every?: Prisma.product_tag_linksWhereInput;
    some?: Prisma.product_tag_linksWhereInput;
    none?: Prisma.product_tag_linksWhereInput;
};
export type product_tag_linksOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type product_tag_linksCreateNestedManyWithoutProduct_tagsInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput> | Prisma.product_tag_linksCreateWithoutProduct_tagsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput | Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProduct_tagsInputEnvelope;
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
};
export type product_tag_linksUncheckedCreateNestedManyWithoutProduct_tagsInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput> | Prisma.product_tag_linksCreateWithoutProduct_tagsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput | Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProduct_tagsInputEnvelope;
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
};
export type product_tag_linksUpdateManyWithoutProduct_tagsNestedInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput> | Prisma.product_tag_linksCreateWithoutProduct_tagsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput | Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput[];
    upsert?: Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProduct_tagsInput | Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProduct_tagsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProduct_tagsInputEnvelope;
    set?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    disconnect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    delete?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    update?: Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProduct_tagsInput | Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProduct_tagsInput[];
    updateMany?: Prisma.product_tag_linksUpdateManyWithWhereWithoutProduct_tagsInput | Prisma.product_tag_linksUpdateManyWithWhereWithoutProduct_tagsInput[];
    deleteMany?: Prisma.product_tag_linksScalarWhereInput | Prisma.product_tag_linksScalarWhereInput[];
};
export type product_tag_linksUncheckedUpdateManyWithoutProduct_tagsNestedInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput> | Prisma.product_tag_linksCreateWithoutProduct_tagsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput | Prisma.product_tag_linksCreateOrConnectWithoutProduct_tagsInput[];
    upsert?: Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProduct_tagsInput | Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProduct_tagsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProduct_tagsInputEnvelope;
    set?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    disconnect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    delete?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    update?: Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProduct_tagsInput | Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProduct_tagsInput[];
    updateMany?: Prisma.product_tag_linksUpdateManyWithWhereWithoutProduct_tagsInput | Prisma.product_tag_linksUpdateManyWithWhereWithoutProduct_tagsInput[];
    deleteMany?: Prisma.product_tag_linksScalarWhereInput | Prisma.product_tag_linksScalarWhereInput[];
};
export type product_tag_linksCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProductsInput, Prisma.product_tag_linksUncheckedCreateWithoutProductsInput> | Prisma.product_tag_linksCreateWithoutProductsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProductsInput | Prisma.product_tag_linksCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProductsInputEnvelope;
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
};
export type product_tag_linksUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProductsInput, Prisma.product_tag_linksUncheckedCreateWithoutProductsInput> | Prisma.product_tag_linksCreateWithoutProductsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProductsInput | Prisma.product_tag_linksCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProductsInputEnvelope;
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
};
export type product_tag_linksUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProductsInput, Prisma.product_tag_linksUncheckedCreateWithoutProductsInput> | Prisma.product_tag_linksCreateWithoutProductsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProductsInput | Prisma.product_tag_linksCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProductsInputEnvelope;
    set?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    disconnect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    delete?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    update?: Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_tag_linksUpdateManyWithWhereWithoutProductsInput | Prisma.product_tag_linksUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_tag_linksScalarWhereInput | Prisma.product_tag_linksScalarWhereInput[];
};
export type product_tag_linksUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProductsInput, Prisma.product_tag_linksUncheckedCreateWithoutProductsInput> | Prisma.product_tag_linksCreateWithoutProductsInput[] | Prisma.product_tag_linksUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_tag_linksCreateOrConnectWithoutProductsInput | Prisma.product_tag_linksCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_tag_linksUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_tag_linksCreateManyProductsInputEnvelope;
    set?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    disconnect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    delete?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    connect?: Prisma.product_tag_linksWhereUniqueInput | Prisma.product_tag_linksWhereUniqueInput[];
    update?: Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_tag_linksUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_tag_linksUpdateManyWithWhereWithoutProductsInput | Prisma.product_tag_linksUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_tag_linksScalarWhereInput | Prisma.product_tag_linksScalarWhereInput[];
};
export type product_tag_linksCreateWithoutProduct_tagsInput = {
    products: Prisma.productsCreateNestedOneWithoutProduct_tag_linksInput;
};
export type product_tag_linksUncheckedCreateWithoutProduct_tagsInput = {
    product_id: bigint | number;
};
export type product_tag_linksCreateOrConnectWithoutProduct_tagsInput = {
    where: Prisma.product_tag_linksWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput>;
};
export type product_tag_linksCreateManyProduct_tagsInputEnvelope = {
    data: Prisma.product_tag_linksCreateManyProduct_tagsInput | Prisma.product_tag_linksCreateManyProduct_tagsInput[];
    skipDuplicates?: boolean;
};
export type product_tag_linksUpsertWithWhereUniqueWithoutProduct_tagsInput = {
    where: Prisma.product_tag_linksWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_tag_linksUpdateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedUpdateWithoutProduct_tagsInput>;
    create: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedCreateWithoutProduct_tagsInput>;
};
export type product_tag_linksUpdateWithWhereUniqueWithoutProduct_tagsInput = {
    where: Prisma.product_tag_linksWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_tag_linksUpdateWithoutProduct_tagsInput, Prisma.product_tag_linksUncheckedUpdateWithoutProduct_tagsInput>;
};
export type product_tag_linksUpdateManyWithWhereWithoutProduct_tagsInput = {
    where: Prisma.product_tag_linksScalarWhereInput;
    data: Prisma.XOR<Prisma.product_tag_linksUpdateManyMutationInput, Prisma.product_tag_linksUncheckedUpdateManyWithoutProduct_tagsInput>;
};
export type product_tag_linksScalarWhereInput = {
    AND?: Prisma.product_tag_linksScalarWhereInput | Prisma.product_tag_linksScalarWhereInput[];
    OR?: Prisma.product_tag_linksScalarWhereInput[];
    NOT?: Prisma.product_tag_linksScalarWhereInput | Prisma.product_tag_linksScalarWhereInput[];
    product_id?: Prisma.BigIntFilter<"product_tag_links"> | bigint | number;
    tag_id?: Prisma.BigIntFilter<"product_tag_links"> | bigint | number;
};
export type product_tag_linksCreateWithoutProductsInput = {
    product_tags: Prisma.product_tagsCreateNestedOneWithoutProduct_tag_linksInput;
};
export type product_tag_linksUncheckedCreateWithoutProductsInput = {
    tag_id: bigint | number;
};
export type product_tag_linksCreateOrConnectWithoutProductsInput = {
    where: Prisma.product_tag_linksWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProductsInput, Prisma.product_tag_linksUncheckedCreateWithoutProductsInput>;
};
export type product_tag_linksCreateManyProductsInputEnvelope = {
    data: Prisma.product_tag_linksCreateManyProductsInput | Prisma.product_tag_linksCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type product_tag_linksUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_tag_linksWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_tag_linksUpdateWithoutProductsInput, Prisma.product_tag_linksUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.product_tag_linksCreateWithoutProductsInput, Prisma.product_tag_linksUncheckedCreateWithoutProductsInput>;
};
export type product_tag_linksUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_tag_linksWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_tag_linksUpdateWithoutProductsInput, Prisma.product_tag_linksUncheckedUpdateWithoutProductsInput>;
};
export type product_tag_linksUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.product_tag_linksScalarWhereInput;
    data: Prisma.XOR<Prisma.product_tag_linksUpdateManyMutationInput, Prisma.product_tag_linksUncheckedUpdateManyWithoutProductsInput>;
};
export type product_tag_linksCreateManyProduct_tagsInput = {
    product_id: bigint | number;
};
export type product_tag_linksUpdateWithoutProduct_tagsInput = {
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_tag_linksNestedInput;
};
export type product_tag_linksUncheckedUpdateWithoutProduct_tagsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type product_tag_linksUncheckedUpdateManyWithoutProduct_tagsInput = {
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type product_tag_linksCreateManyProductsInput = {
    tag_id: bigint | number;
};
export type product_tag_linksUpdateWithoutProductsInput = {
    product_tags?: Prisma.product_tagsUpdateOneRequiredWithoutProduct_tag_linksNestedInput;
};
export type product_tag_linksUncheckedUpdateWithoutProductsInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type product_tag_linksUncheckedUpdateManyWithoutProductsInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type product_tag_linksSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    tag_id?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    product_tags?: boolean | Prisma.product_tagsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_tag_links"]>;
export type product_tag_linksSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    tag_id?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    product_tags?: boolean | Prisma.product_tagsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_tag_links"]>;
export type product_tag_linksSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    tag_id?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    product_tags?: boolean | Prisma.product_tagsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_tag_links"]>;
export type product_tag_linksSelectScalar = {
    product_id?: boolean;
    tag_id?: boolean;
};
export type product_tag_linksOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"product_id" | "tag_id", ExtArgs["result"]["product_tag_links"]>;
export type product_tag_linksInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    product_tags?: boolean | Prisma.product_tagsDefaultArgs<ExtArgs>;
};
export type product_tag_linksIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    product_tags?: boolean | Prisma.product_tagsDefaultArgs<ExtArgs>;
};
export type product_tag_linksIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
    product_tags?: boolean | Prisma.product_tagsDefaultArgs<ExtArgs>;
};
export type $product_tag_linksPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_tag_links";
    objects: {
        products: Prisma.$productsPayload<ExtArgs>;
        product_tags: Prisma.$product_tagsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        product_id: bigint;
        tag_id: bigint;
    }, ExtArgs["result"]["product_tag_links"]>;
    composites: {};
};
export type product_tag_linksGetPayload<S extends boolean | null | undefined | product_tag_linksDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload, S>;
export type product_tag_linksCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_tag_linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_tag_linksCountAggregateInputType | true;
};
export interface product_tag_linksDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_tag_links'];
        meta: {
            name: 'product_tag_links';
        };
    };
    findUnique<T extends product_tag_linksFindUniqueArgs>(args: Prisma.SelectSubset<T, product_tag_linksFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_tag_linksFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_tag_linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_tag_linksFindFirstArgs>(args?: Prisma.SelectSubset<T, product_tag_linksFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_tag_linksFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_tag_linksFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_tag_linksFindManyArgs>(args?: Prisma.SelectSubset<T, product_tag_linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_tag_linksCreateArgs>(args: Prisma.SelectSubset<T, product_tag_linksCreateArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_tag_linksCreateManyArgs>(args?: Prisma.SelectSubset<T, product_tag_linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends product_tag_linksCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, product_tag_linksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends product_tag_linksDeleteArgs>(args: Prisma.SelectSubset<T, product_tag_linksDeleteArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_tag_linksUpdateArgs>(args: Prisma.SelectSubset<T, product_tag_linksUpdateArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_tag_linksDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_tag_linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_tag_linksUpdateManyArgs>(args: Prisma.SelectSubset<T, product_tag_linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends product_tag_linksUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, product_tag_linksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends product_tag_linksUpsertArgs>(args: Prisma.SelectSubset<T, product_tag_linksUpsertArgs<ExtArgs>>): Prisma.Prisma__product_tag_linksClient<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_tag_linksCountArgs>(args?: Prisma.Subset<T, product_tag_linksCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_tag_linksCountAggregateOutputType> : number>;
    aggregate<T extends Product_tag_linksAggregateArgs>(args: Prisma.Subset<T, Product_tag_linksAggregateArgs>): Prisma.PrismaPromise<GetProduct_tag_linksAggregateType<T>>;
    groupBy<T extends product_tag_linksGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_tag_linksGroupByArgs['orderBy'];
    } : {
        orderBy?: product_tag_linksGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_tag_linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_tag_linksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_tag_linksFieldRefs;
}
export interface Prisma__product_tag_linksClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.productsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productsDefaultArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product_tags<T extends Prisma.product_tagsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_tagsDefaultArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_tag_linksFieldRefs {
    readonly product_id: Prisma.FieldRef<"product_tag_links", 'BigInt'>;
    readonly tag_id: Prisma.FieldRef<"product_tag_links", 'BigInt'>;
}
export type product_tag_linksFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    where: Prisma.product_tag_linksWhereUniqueInput;
};
export type product_tag_linksFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    where: Prisma.product_tag_linksWhereUniqueInput;
};
export type product_tag_linksFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_tag_linksFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_tag_linksFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_tag_linksCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_tag_linksCreateInput, Prisma.product_tag_linksUncheckedCreateInput>;
};
export type product_tag_linksCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_tag_linksCreateManyInput | Prisma.product_tag_linksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_tag_linksCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    data: Prisma.product_tag_linksCreateManyInput | Prisma.product_tag_linksCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.product_tag_linksIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type product_tag_linksUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_tag_linksUpdateInput, Prisma.product_tag_linksUncheckedUpdateInput>;
    where: Prisma.product_tag_linksWhereUniqueInput;
};
export type product_tag_linksUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_tag_linksUpdateManyMutationInput, Prisma.product_tag_linksUncheckedUpdateManyInput>;
    where?: Prisma.product_tag_linksWhereInput;
    limit?: number;
};
export type product_tag_linksUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_tag_linksUpdateManyMutationInput, Prisma.product_tag_linksUncheckedUpdateManyInput>;
    where?: Prisma.product_tag_linksWhereInput;
    limit?: number;
    include?: Prisma.product_tag_linksIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type product_tag_linksUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    where: Prisma.product_tag_linksWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_tag_linksCreateInput, Prisma.product_tag_linksUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_tag_linksUpdateInput, Prisma.product_tag_linksUncheckedUpdateInput>;
};
export type product_tag_linksDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    where: Prisma.product_tag_linksWhereUniqueInput;
};
export type product_tag_linksDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tag_linksWhereInput;
    limit?: number;
};
export type product_tag_linksDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
};
