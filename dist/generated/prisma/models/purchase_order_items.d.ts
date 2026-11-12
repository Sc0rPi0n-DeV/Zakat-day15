import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type purchase_order_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$purchase_order_itemsPayload>;
export type AggregatePurchase_order_items = {
    _count: Purchase_order_itemsCountAggregateOutputType | null;
    _avg: Purchase_order_itemsAvgAggregateOutputType | null;
    _sum: Purchase_order_itemsSumAggregateOutputType | null;
    _min: Purchase_order_itemsMinAggregateOutputType | null;
    _max: Purchase_order_itemsMaxAggregateOutputType | null;
};
export type Purchase_order_itemsAvgAggregateOutputType = {
    purchase_order_id: number | null;
    variant_id: number | null;
    quantity: number | null;
    unit_cost: runtime.Decimal | null;
};
export type Purchase_order_itemsSumAggregateOutputType = {
    purchase_order_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    unit_cost: runtime.Decimal | null;
};
export type Purchase_order_itemsMinAggregateOutputType = {
    purchase_order_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    unit_cost: runtime.Decimal | null;
};
export type Purchase_order_itemsMaxAggregateOutputType = {
    purchase_order_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    unit_cost: runtime.Decimal | null;
};
export type Purchase_order_itemsCountAggregateOutputType = {
    purchase_order_id: number;
    variant_id: number;
    quantity: number;
    unit_cost: number;
    _all: number;
};
export type Purchase_order_itemsAvgAggregateInputType = {
    purchase_order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_cost?: true;
};
export type Purchase_order_itemsSumAggregateInputType = {
    purchase_order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_cost?: true;
};
export type Purchase_order_itemsMinAggregateInputType = {
    purchase_order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_cost?: true;
};
export type Purchase_order_itemsMaxAggregateInputType = {
    purchase_order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_cost?: true;
};
export type Purchase_order_itemsCountAggregateInputType = {
    purchase_order_id?: true;
    variant_id?: true;
    quantity?: true;
    unit_cost?: true;
    _all?: true;
};
export type Purchase_order_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_order_itemsWhereInput;
    orderBy?: Prisma.purchase_order_itemsOrderByWithRelationInput | Prisma.purchase_order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.purchase_order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Purchase_order_itemsCountAggregateInputType;
    _avg?: Purchase_order_itemsAvgAggregateInputType;
    _sum?: Purchase_order_itemsSumAggregateInputType;
    _min?: Purchase_order_itemsMinAggregateInputType;
    _max?: Purchase_order_itemsMaxAggregateInputType;
};
export type GetPurchase_order_itemsAggregateType<T extends Purchase_order_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase_order_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase_order_items[P]> : Prisma.GetScalarType<T[P], AggregatePurchase_order_items[P]>;
};
export type purchase_order_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_order_itemsWhereInput;
    orderBy?: Prisma.purchase_order_itemsOrderByWithAggregationInput | Prisma.purchase_order_itemsOrderByWithAggregationInput[];
    by: Prisma.Purchase_order_itemsScalarFieldEnum[] | Prisma.Purchase_order_itemsScalarFieldEnum;
    having?: Prisma.purchase_order_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Purchase_order_itemsCountAggregateInputType | true;
    _avg?: Purchase_order_itemsAvgAggregateInputType;
    _sum?: Purchase_order_itemsSumAggregateInputType;
    _min?: Purchase_order_itemsMinAggregateInputType;
    _max?: Purchase_order_itemsMaxAggregateInputType;
};
export type Purchase_order_itemsGroupByOutputType = {
    purchase_order_id: bigint;
    variant_id: bigint;
    quantity: number;
    unit_cost: runtime.Decimal;
    _count: Purchase_order_itemsCountAggregateOutputType | null;
    _avg: Purchase_order_itemsAvgAggregateOutputType | null;
    _sum: Purchase_order_itemsSumAggregateOutputType | null;
    _min: Purchase_order_itemsMinAggregateOutputType | null;
    _max: Purchase_order_itemsMaxAggregateOutputType | null;
};
export type GetPurchase_order_itemsGroupByPayload<T extends purchase_order_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Purchase_order_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Purchase_order_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Purchase_order_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Purchase_order_itemsGroupByOutputType[P]>;
}>>;
export type purchase_order_itemsWhereInput = {
    AND?: Prisma.purchase_order_itemsWhereInput | Prisma.purchase_order_itemsWhereInput[];
    OR?: Prisma.purchase_order_itemsWhereInput[];
    NOT?: Prisma.purchase_order_itemsWhereInput | Prisma.purchase_order_itemsWhereInput[];
    purchase_order_id?: Prisma.BigIntFilter<"purchase_order_items"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"purchase_order_items"> | bigint | number;
    quantity?: Prisma.IntFilter<"purchase_order_items"> | number;
    unit_cost?: Prisma.DecimalFilter<"purchase_order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase_orders?: Prisma.XOR<Prisma.Purchase_ordersScalarRelationFilter, Prisma.purchase_ordersWhereInput>;
    product_variants?: Prisma.XOR<Prisma.Product_variantsScalarRelationFilter, Prisma.product_variantsWhereInput>;
};
export type purchase_order_itemsOrderByWithRelationInput = {
    purchase_order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_cost?: Prisma.SortOrder;
    purchase_orders?: Prisma.purchase_ordersOrderByWithRelationInput;
    product_variants?: Prisma.product_variantsOrderByWithRelationInput;
};
export type purchase_order_itemsWhereUniqueInput = Prisma.AtLeast<{
    purchase_order_id_variant_id?: Prisma.purchase_order_itemsPurchase_order_idVariant_idCompoundUniqueInput;
    AND?: Prisma.purchase_order_itemsWhereInput | Prisma.purchase_order_itemsWhereInput[];
    OR?: Prisma.purchase_order_itemsWhereInput[];
    NOT?: Prisma.purchase_order_itemsWhereInput | Prisma.purchase_order_itemsWhereInput[];
    purchase_order_id?: Prisma.BigIntFilter<"purchase_order_items"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"purchase_order_items"> | bigint | number;
    quantity?: Prisma.IntFilter<"purchase_order_items"> | number;
    unit_cost?: Prisma.DecimalFilter<"purchase_order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase_orders?: Prisma.XOR<Prisma.Purchase_ordersScalarRelationFilter, Prisma.purchase_ordersWhereInput>;
    product_variants?: Prisma.XOR<Prisma.Product_variantsScalarRelationFilter, Prisma.product_variantsWhereInput>;
}, "purchase_order_id_variant_id">;
export type purchase_order_itemsOrderByWithAggregationInput = {
    purchase_order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_cost?: Prisma.SortOrder;
    _count?: Prisma.purchase_order_itemsCountOrderByAggregateInput;
    _avg?: Prisma.purchase_order_itemsAvgOrderByAggregateInput;
    _max?: Prisma.purchase_order_itemsMaxOrderByAggregateInput;
    _min?: Prisma.purchase_order_itemsMinOrderByAggregateInput;
    _sum?: Prisma.purchase_order_itemsSumOrderByAggregateInput;
};
export type purchase_order_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.purchase_order_itemsScalarWhereWithAggregatesInput | Prisma.purchase_order_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.purchase_order_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.purchase_order_itemsScalarWhereWithAggregatesInput | Prisma.purchase_order_itemsScalarWhereWithAggregatesInput[];
    purchase_order_id?: Prisma.BigIntWithAggregatesFilter<"purchase_order_items"> | bigint | number;
    variant_id?: Prisma.BigIntWithAggregatesFilter<"purchase_order_items"> | bigint | number;
    quantity?: Prisma.IntWithAggregatesFilter<"purchase_order_items"> | number;
    unit_cost?: Prisma.DecimalWithAggregatesFilter<"purchase_order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsCreateInput = {
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase_orders: Prisma.purchase_ordersCreateNestedOneWithoutPurchase_order_itemsInput;
    product_variants: Prisma.product_variantsCreateNestedOneWithoutPurchase_order_itemsInput;
};
export type purchase_order_itemsUncheckedCreateInput = {
    purchase_order_id: bigint | number;
    variant_id: bigint | number;
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase_orders?: Prisma.purchase_ordersUpdateOneRequiredWithoutPurchase_order_itemsNestedInput;
    product_variants?: Prisma.product_variantsUpdateOneRequiredWithoutPurchase_order_itemsNestedInput;
};
export type purchase_order_itemsUncheckedUpdateInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsCreateManyInput = {
    purchase_order_id: bigint | number;
    variant_id: bigint | number;
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsUncheckedUpdateManyInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Purchase_order_itemsListRelationFilter = {
    every?: Prisma.purchase_order_itemsWhereInput;
    some?: Prisma.purchase_order_itemsWhereInput;
    none?: Prisma.purchase_order_itemsWhereInput;
};
export type purchase_order_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type purchase_order_itemsPurchase_order_idVariant_idCompoundUniqueInput = {
    purchase_order_id: bigint | number;
    variant_id: bigint | number;
};
export type purchase_order_itemsCountOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_cost?: Prisma.SortOrder;
};
export type purchase_order_itemsAvgOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_cost?: Prisma.SortOrder;
};
export type purchase_order_itemsMaxOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_cost?: Prisma.SortOrder;
};
export type purchase_order_itemsMinOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_cost?: Prisma.SortOrder;
};
export type purchase_order_itemsSumOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_cost?: Prisma.SortOrder;
};
export type purchase_order_itemsCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
};
export type purchase_order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
};
export type purchase_order_itemsUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    disconnect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    delete?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    update?: Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.purchase_order_itemsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.purchase_order_itemsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.purchase_order_itemsScalarWhereInput | Prisma.purchase_order_itemsScalarWhereInput[];
};
export type purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput> | Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput | Prisma.purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    disconnect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    delete?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    update?: Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.purchase_order_itemsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.purchase_order_itemsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.purchase_order_itemsScalarWhereInput | Prisma.purchase_order_itemsScalarWhereInput[];
};
export type purchase_order_itemsCreateNestedManyWithoutPurchase_ordersInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput> | Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput | Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyPurchase_ordersInputEnvelope;
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
};
export type purchase_order_itemsUncheckedCreateNestedManyWithoutPurchase_ordersInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput> | Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput | Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyPurchase_ordersInputEnvelope;
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
};
export type purchase_order_itemsUpdateManyWithoutPurchase_ordersNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput> | Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput | Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput[];
    upsert?: Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutPurchase_ordersInput | Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutPurchase_ordersInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyPurchase_ordersInputEnvelope;
    set?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    disconnect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    delete?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    update?: Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutPurchase_ordersInput | Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutPurchase_ordersInput[];
    updateMany?: Prisma.purchase_order_itemsUpdateManyWithWhereWithoutPurchase_ordersInput | Prisma.purchase_order_itemsUpdateManyWithWhereWithoutPurchase_ordersInput[];
    deleteMany?: Prisma.purchase_order_itemsScalarWhereInput | Prisma.purchase_order_itemsScalarWhereInput[];
};
export type purchase_order_itemsUncheckedUpdateManyWithoutPurchase_ordersNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput> | Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput[] | Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput[];
    connectOrCreate?: Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput | Prisma.purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput[];
    upsert?: Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutPurchase_ordersInput | Prisma.purchase_order_itemsUpsertWithWhereUniqueWithoutPurchase_ordersInput[];
    createMany?: Prisma.purchase_order_itemsCreateManyPurchase_ordersInputEnvelope;
    set?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    disconnect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    delete?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    connect?: Prisma.purchase_order_itemsWhereUniqueInput | Prisma.purchase_order_itemsWhereUniqueInput[];
    update?: Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutPurchase_ordersInput | Prisma.purchase_order_itemsUpdateWithWhereUniqueWithoutPurchase_ordersInput[];
    updateMany?: Prisma.purchase_order_itemsUpdateManyWithWhereWithoutPurchase_ordersInput | Prisma.purchase_order_itemsUpdateManyWithWhereWithoutPurchase_ordersInput[];
    deleteMany?: Prisma.purchase_order_itemsScalarWhereInput | Prisma.purchase_order_itemsScalarWhereInput[];
};
export type purchase_order_itemsCreateWithoutProduct_variantsInput = {
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase_orders: Prisma.purchase_ordersCreateNestedOneWithoutPurchase_order_itemsInput;
};
export type purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput = {
    purchase_order_id: bigint | number;
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsCreateOrConnectWithoutProduct_variantsInput = {
    where: Prisma.purchase_order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput>;
};
export type purchase_order_itemsCreateManyProduct_variantsInputEnvelope = {
    data: Prisma.purchase_order_itemsCreateManyProduct_variantsInput | Prisma.purchase_order_itemsCreateManyProduct_variantsInput[];
    skipDuplicates?: boolean;
};
export type purchase_order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.purchase_order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.purchase_order_itemsUpdateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedUpdateWithoutProduct_variantsInput>;
    create: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedCreateWithoutProduct_variantsInput>;
};
export type purchase_order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.purchase_order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.purchase_order_itemsUpdateWithoutProduct_variantsInput, Prisma.purchase_order_itemsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type purchase_order_itemsUpdateManyWithWhereWithoutProduct_variantsInput = {
    where: Prisma.purchase_order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.purchase_order_itemsUpdateManyMutationInput, Prisma.purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsInput>;
};
export type purchase_order_itemsScalarWhereInput = {
    AND?: Prisma.purchase_order_itemsScalarWhereInput | Prisma.purchase_order_itemsScalarWhereInput[];
    OR?: Prisma.purchase_order_itemsScalarWhereInput[];
    NOT?: Prisma.purchase_order_itemsScalarWhereInput | Prisma.purchase_order_itemsScalarWhereInput[];
    purchase_order_id?: Prisma.BigIntFilter<"purchase_order_items"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"purchase_order_items"> | bigint | number;
    quantity?: Prisma.IntFilter<"purchase_order_items"> | number;
    unit_cost?: Prisma.DecimalFilter<"purchase_order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsCreateWithoutPurchase_ordersInput = {
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    product_variants: Prisma.product_variantsCreateNestedOneWithoutPurchase_order_itemsInput;
};
export type purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput = {
    variant_id: bigint | number;
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsCreateOrConnectWithoutPurchase_ordersInput = {
    where: Prisma.purchase_order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput>;
};
export type purchase_order_itemsCreateManyPurchase_ordersInputEnvelope = {
    data: Prisma.purchase_order_itemsCreateManyPurchase_ordersInput | Prisma.purchase_order_itemsCreateManyPurchase_ordersInput[];
    skipDuplicates?: boolean;
};
export type purchase_order_itemsUpsertWithWhereUniqueWithoutPurchase_ordersInput = {
    where: Prisma.purchase_order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.purchase_order_itemsUpdateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedUpdateWithoutPurchase_ordersInput>;
    create: Prisma.XOR<Prisma.purchase_order_itemsCreateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedCreateWithoutPurchase_ordersInput>;
};
export type purchase_order_itemsUpdateWithWhereUniqueWithoutPurchase_ordersInput = {
    where: Prisma.purchase_order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.purchase_order_itemsUpdateWithoutPurchase_ordersInput, Prisma.purchase_order_itemsUncheckedUpdateWithoutPurchase_ordersInput>;
};
export type purchase_order_itemsUpdateManyWithWhereWithoutPurchase_ordersInput = {
    where: Prisma.purchase_order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.purchase_order_itemsUpdateManyMutationInput, Prisma.purchase_order_itemsUncheckedUpdateManyWithoutPurchase_ordersInput>;
};
export type purchase_order_itemsCreateManyProduct_variantsInput = {
    purchase_order_id: bigint | number;
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsUpdateWithoutProduct_variantsInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    purchase_orders?: Prisma.purchase_ordersUpdateOneRequiredWithoutPurchase_order_itemsNestedInput;
};
export type purchase_order_itemsUncheckedUpdateWithoutProduct_variantsInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsUncheckedUpdateManyWithoutProduct_variantsInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsCreateManyPurchase_ordersInput = {
    variant_id: bigint | number;
    quantity: number;
    unit_cost: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsUpdateWithoutPurchase_ordersInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    product_variants?: Prisma.product_variantsUpdateOneRequiredWithoutPurchase_order_itemsNestedInput;
};
export type purchase_order_itemsUncheckedUpdateWithoutPurchase_ordersInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsUncheckedUpdateManyWithoutPurchase_ordersInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_cost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type purchase_order_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchase_order_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    unit_cost?: boolean;
    purchase_orders?: boolean | Prisma.purchase_ordersDefaultArgs<ExtArgs>;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_order_items"]>;
export type purchase_order_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchase_order_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    unit_cost?: boolean;
    purchase_orders?: boolean | Prisma.purchase_ordersDefaultArgs<ExtArgs>;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_order_items"]>;
export type purchase_order_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchase_order_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    unit_cost?: boolean;
    purchase_orders?: boolean | Prisma.purchase_ordersDefaultArgs<ExtArgs>;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_order_items"]>;
export type purchase_order_itemsSelectScalar = {
    purchase_order_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    unit_cost?: boolean;
};
export type purchase_order_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"purchase_order_id" | "variant_id" | "quantity" | "unit_cost", ExtArgs["result"]["purchase_order_items"]>;
export type purchase_order_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_orders?: boolean | Prisma.purchase_ordersDefaultArgs<ExtArgs>;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
};
export type purchase_order_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_orders?: boolean | Prisma.purchase_ordersDefaultArgs<ExtArgs>;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
};
export type purchase_order_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_orders?: boolean | Prisma.purchase_ordersDefaultArgs<ExtArgs>;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
};
export type $purchase_order_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "purchase_order_items";
    objects: {
        purchase_orders: Prisma.$purchase_ordersPayload<ExtArgs>;
        product_variants: Prisma.$product_variantsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        purchase_order_id: bigint;
        variant_id: bigint;
        quantity: number;
        unit_cost: runtime.Decimal;
    }, ExtArgs["result"]["purchase_order_items"]>;
    composites: {};
};
export type purchase_order_itemsGetPayload<S extends boolean | null | undefined | purchase_order_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload, S>;
export type purchase_order_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<purchase_order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Purchase_order_itemsCountAggregateInputType | true;
};
export interface purchase_order_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['purchase_order_items'];
        meta: {
            name: 'purchase_order_items';
        };
    };
    findUnique<T extends purchase_order_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends purchase_order_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends purchase_order_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, purchase_order_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends purchase_order_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, purchase_order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends purchase_order_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, purchase_order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends purchase_order_itemsCreateArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends purchase_order_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, purchase_order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends purchase_order_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, purchase_order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends purchase_order_itemsDeleteArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends purchase_order_itemsUpdateArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends purchase_order_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, purchase_order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends purchase_order_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends purchase_order_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends purchase_order_itemsUpsertArgs>(args: Prisma.SelectSubset<T, purchase_order_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__purchase_order_itemsClient<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends purchase_order_itemsCountArgs>(args?: Prisma.Subset<T, purchase_order_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Purchase_order_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Purchase_order_itemsAggregateArgs>(args: Prisma.Subset<T, Purchase_order_itemsAggregateArgs>): Prisma.PrismaPromise<GetPurchase_order_itemsAggregateType<T>>;
    groupBy<T extends purchase_order_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: purchase_order_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: purchase_order_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, purchase_order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchase_order_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: purchase_order_itemsFieldRefs;
}
export interface Prisma__purchase_order_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchase_orders<T extends Prisma.purchase_ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.purchase_ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product_variants<T extends Prisma.product_variantsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variantsDefaultArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface purchase_order_itemsFieldRefs {
    readonly purchase_order_id: Prisma.FieldRef<"purchase_order_items", 'BigInt'>;
    readonly variant_id: Prisma.FieldRef<"purchase_order_items", 'BigInt'>;
    readonly quantity: Prisma.FieldRef<"purchase_order_items", 'Int'>;
    readonly unit_cost: Prisma.FieldRef<"purchase_order_items", 'Decimal'>;
}
export type purchase_order_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
    where: Prisma.purchase_order_itemsWhereUniqueInput;
};
export type purchase_order_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
    where: Prisma.purchase_order_itemsWhereUniqueInput;
};
export type purchase_order_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type purchase_order_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type purchase_order_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type purchase_order_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.purchase_order_itemsCreateInput, Prisma.purchase_order_itemsUncheckedCreateInput>;
};
export type purchase_order_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.purchase_order_itemsCreateManyInput | Prisma.purchase_order_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type purchase_order_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    data: Prisma.purchase_order_itemsCreateManyInput | Prisma.purchase_order_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.purchase_order_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type purchase_order_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.purchase_order_itemsUpdateInput, Prisma.purchase_order_itemsUncheckedUpdateInput>;
    where: Prisma.purchase_order_itemsWhereUniqueInput;
};
export type purchase_order_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.purchase_order_itemsUpdateManyMutationInput, Prisma.purchase_order_itemsUncheckedUpdateManyInput>;
    where?: Prisma.purchase_order_itemsWhereInput;
    limit?: number;
};
export type purchase_order_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.purchase_order_itemsUpdateManyMutationInput, Prisma.purchase_order_itemsUncheckedUpdateManyInput>;
    where?: Prisma.purchase_order_itemsWhereInput;
    limit?: number;
    include?: Prisma.purchase_order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type purchase_order_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
    where: Prisma.purchase_order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.purchase_order_itemsCreateInput, Prisma.purchase_order_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.purchase_order_itemsUpdateInput, Prisma.purchase_order_itemsUncheckedUpdateInput>;
};
export type purchase_order_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
    where: Prisma.purchase_order_itemsWhereUniqueInput;
};
export type purchase_order_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_order_itemsWhereInput;
    limit?: number;
};
export type purchase_order_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.purchase_order_itemsOmit<ExtArgs> | null;
    include?: Prisma.purchase_order_itemsInclude<ExtArgs> | null;
};
