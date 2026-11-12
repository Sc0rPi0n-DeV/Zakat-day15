import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_price_historyModel = runtime.Types.Result.DefaultSelection<Prisma.$product_price_historyPayload>;
export type AggregateProduct_price_history = {
    _count: Product_price_historyCountAggregateOutputType | null;
    _avg: Product_price_historyAvgAggregateOutputType | null;
    _sum: Product_price_historySumAggregateOutputType | null;
    _min: Product_price_historyMinAggregateOutputType | null;
    _max: Product_price_historyMaxAggregateOutputType | null;
};
export type Product_price_historyAvgAggregateOutputType = {
    history_id: number | null;
    product_id: number | null;
    old_price: runtime.Decimal | null;
    new_price: runtime.Decimal | null;
};
export type Product_price_historySumAggregateOutputType = {
    history_id: bigint | null;
    product_id: bigint | null;
    old_price: runtime.Decimal | null;
    new_price: runtime.Decimal | null;
};
export type Product_price_historyMinAggregateOutputType = {
    history_id: bigint | null;
    product_id: bigint | null;
    old_price: runtime.Decimal | null;
    new_price: runtime.Decimal | null;
    changed_at: Date | null;
};
export type Product_price_historyMaxAggregateOutputType = {
    history_id: bigint | null;
    product_id: bigint | null;
    old_price: runtime.Decimal | null;
    new_price: runtime.Decimal | null;
    changed_at: Date | null;
};
export type Product_price_historyCountAggregateOutputType = {
    history_id: number;
    product_id: number;
    old_price: number;
    new_price: number;
    changed_at: number;
    _all: number;
};
export type Product_price_historyAvgAggregateInputType = {
    history_id?: true;
    product_id?: true;
    old_price?: true;
    new_price?: true;
};
export type Product_price_historySumAggregateInputType = {
    history_id?: true;
    product_id?: true;
    old_price?: true;
    new_price?: true;
};
export type Product_price_historyMinAggregateInputType = {
    history_id?: true;
    product_id?: true;
    old_price?: true;
    new_price?: true;
    changed_at?: true;
};
export type Product_price_historyMaxAggregateInputType = {
    history_id?: true;
    product_id?: true;
    old_price?: true;
    new_price?: true;
    changed_at?: true;
};
export type Product_price_historyCountAggregateInputType = {
    history_id?: true;
    product_id?: true;
    old_price?: true;
    new_price?: true;
    changed_at?: true;
    _all?: true;
};
export type Product_price_historyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_price_historyWhereInput;
    orderBy?: Prisma.product_price_historyOrderByWithRelationInput | Prisma.product_price_historyOrderByWithRelationInput[];
    cursor?: Prisma.product_price_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_price_historyCountAggregateInputType;
    _avg?: Product_price_historyAvgAggregateInputType;
    _sum?: Product_price_historySumAggregateInputType;
    _min?: Product_price_historyMinAggregateInputType;
    _max?: Product_price_historyMaxAggregateInputType;
};
export type GetProduct_price_historyAggregateType<T extends Product_price_historyAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_price_history]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_price_history[P]> : Prisma.GetScalarType<T[P], AggregateProduct_price_history[P]>;
};
export type product_price_historyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_price_historyWhereInput;
    orderBy?: Prisma.product_price_historyOrderByWithAggregationInput | Prisma.product_price_historyOrderByWithAggregationInput[];
    by: Prisma.Product_price_historyScalarFieldEnum[] | Prisma.Product_price_historyScalarFieldEnum;
    having?: Prisma.product_price_historyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_price_historyCountAggregateInputType | true;
    _avg?: Product_price_historyAvgAggregateInputType;
    _sum?: Product_price_historySumAggregateInputType;
    _min?: Product_price_historyMinAggregateInputType;
    _max?: Product_price_historyMaxAggregateInputType;
};
export type Product_price_historyGroupByOutputType = {
    history_id: bigint;
    product_id: bigint;
    old_price: runtime.Decimal | null;
    new_price: runtime.Decimal;
    changed_at: Date;
    _count: Product_price_historyCountAggregateOutputType | null;
    _avg: Product_price_historyAvgAggregateOutputType | null;
    _sum: Product_price_historySumAggregateOutputType | null;
    _min: Product_price_historyMinAggregateOutputType | null;
    _max: Product_price_historyMaxAggregateOutputType | null;
};
export type GetProduct_price_historyGroupByPayload<T extends product_price_historyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_price_historyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_price_historyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_price_historyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_price_historyGroupByOutputType[P]>;
}>>;
export type product_price_historyWhereInput = {
    AND?: Prisma.product_price_historyWhereInput | Prisma.product_price_historyWhereInput[];
    OR?: Prisma.product_price_historyWhereInput[];
    NOT?: Prisma.product_price_historyWhereInput | Prisma.product_price_historyWhereInput[];
    history_id?: Prisma.BigIntFilter<"product_price_history"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_price_history"> | bigint | number;
    old_price?: Prisma.DecimalNullableFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFilter<"product_price_history"> | Date | string;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
};
export type product_price_historyOrderByWithRelationInput = {
    history_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    old_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_price?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
    products?: Prisma.productsOrderByWithRelationInput;
};
export type product_price_historyWhereUniqueInput = Prisma.AtLeast<{
    history_id?: bigint | number;
    AND?: Prisma.product_price_historyWhereInput | Prisma.product_price_historyWhereInput[];
    OR?: Prisma.product_price_historyWhereInput[];
    NOT?: Prisma.product_price_historyWhereInput | Prisma.product_price_historyWhereInput[];
    product_id?: Prisma.BigIntFilter<"product_price_history"> | bigint | number;
    old_price?: Prisma.DecimalNullableFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFilter<"product_price_history"> | Date | string;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
}, "history_id">;
export type product_price_historyOrderByWithAggregationInput = {
    history_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    old_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_price?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
    _count?: Prisma.product_price_historyCountOrderByAggregateInput;
    _avg?: Prisma.product_price_historyAvgOrderByAggregateInput;
    _max?: Prisma.product_price_historyMaxOrderByAggregateInput;
    _min?: Prisma.product_price_historyMinOrderByAggregateInput;
    _sum?: Prisma.product_price_historySumOrderByAggregateInput;
};
export type product_price_historyScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_price_historyScalarWhereWithAggregatesInput | Prisma.product_price_historyScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_price_historyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_price_historyScalarWhereWithAggregatesInput | Prisma.product_price_historyScalarWhereWithAggregatesInput[];
    history_id?: Prisma.BigIntWithAggregatesFilter<"product_price_history"> | bigint | number;
    product_id?: Prisma.BigIntWithAggregatesFilter<"product_price_history"> | bigint | number;
    old_price?: Prisma.DecimalNullableWithAggregatesFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalWithAggregatesFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeWithAggregatesFilter<"product_price_history"> | Date | string;
};
export type product_price_historyCreateInput = {
    history_id?: bigint | number;
    old_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Date | string;
    products: Prisma.productsCreateNestedOneWithoutProduct_price_historyInput;
};
export type product_price_historyUncheckedCreateInput = {
    history_id?: bigint | number;
    product_id: bigint | number;
    old_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Date | string;
};
export type product_price_historyUpdateInput = {
    history_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    old_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_price_historyNestedInput;
};
export type product_price_historyUncheckedUpdateInput = {
    history_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    old_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_price_historyCreateManyInput = {
    history_id?: bigint | number;
    product_id: bigint | number;
    old_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Date | string;
};
export type product_price_historyUpdateManyMutationInput = {
    history_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    old_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_price_historyUncheckedUpdateManyInput = {
    history_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    old_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_price_historyCountOrderByAggregateInput = {
    history_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    old_price?: Prisma.SortOrder;
    new_price?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
};
export type product_price_historyAvgOrderByAggregateInput = {
    history_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    old_price?: Prisma.SortOrder;
    new_price?: Prisma.SortOrder;
};
export type product_price_historyMaxOrderByAggregateInput = {
    history_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    old_price?: Prisma.SortOrder;
    new_price?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
};
export type product_price_historyMinOrderByAggregateInput = {
    history_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    old_price?: Prisma.SortOrder;
    new_price?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
};
export type product_price_historySumOrderByAggregateInput = {
    history_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    old_price?: Prisma.SortOrder;
    new_price?: Prisma.SortOrder;
};
export type Product_price_historyListRelationFilter = {
    every?: Prisma.product_price_historyWhereInput;
    some?: Prisma.product_price_historyWhereInput;
    none?: Prisma.product_price_historyWhereInput;
};
export type product_price_historyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type product_price_historyCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_price_historyCreateWithoutProductsInput, Prisma.product_price_historyUncheckedCreateWithoutProductsInput> | Prisma.product_price_historyCreateWithoutProductsInput[] | Prisma.product_price_historyUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_price_historyCreateOrConnectWithoutProductsInput | Prisma.product_price_historyCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_price_historyCreateManyProductsInputEnvelope;
    connect?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
};
export type product_price_historyUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_price_historyCreateWithoutProductsInput, Prisma.product_price_historyUncheckedCreateWithoutProductsInput> | Prisma.product_price_historyCreateWithoutProductsInput[] | Prisma.product_price_historyUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_price_historyCreateOrConnectWithoutProductsInput | Prisma.product_price_historyCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_price_historyCreateManyProductsInputEnvelope;
    connect?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
};
export type product_price_historyUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_price_historyCreateWithoutProductsInput, Prisma.product_price_historyUncheckedCreateWithoutProductsInput> | Prisma.product_price_historyCreateWithoutProductsInput[] | Prisma.product_price_historyUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_price_historyCreateOrConnectWithoutProductsInput | Prisma.product_price_historyCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_price_historyUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_price_historyUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_price_historyCreateManyProductsInputEnvelope;
    set?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    disconnect?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    delete?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    connect?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    update?: Prisma.product_price_historyUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_price_historyUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_price_historyUpdateManyWithWhereWithoutProductsInput | Prisma.product_price_historyUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_price_historyScalarWhereInput | Prisma.product_price_historyScalarWhereInput[];
};
export type product_price_historyUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_price_historyCreateWithoutProductsInput, Prisma.product_price_historyUncheckedCreateWithoutProductsInput> | Prisma.product_price_historyCreateWithoutProductsInput[] | Prisma.product_price_historyUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_price_historyCreateOrConnectWithoutProductsInput | Prisma.product_price_historyCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_price_historyUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_price_historyUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_price_historyCreateManyProductsInputEnvelope;
    set?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    disconnect?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    delete?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    connect?: Prisma.product_price_historyWhereUniqueInput | Prisma.product_price_historyWhereUniqueInput[];
    update?: Prisma.product_price_historyUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_price_historyUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_price_historyUpdateManyWithWhereWithoutProductsInput | Prisma.product_price_historyUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_price_historyScalarWhereInput | Prisma.product_price_historyScalarWhereInput[];
};
export type product_price_historyCreateWithoutProductsInput = {
    history_id?: bigint | number;
    old_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Date | string;
};
export type product_price_historyUncheckedCreateWithoutProductsInput = {
    history_id?: bigint | number;
    old_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Date | string;
};
export type product_price_historyCreateOrConnectWithoutProductsInput = {
    where: Prisma.product_price_historyWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_price_historyCreateWithoutProductsInput, Prisma.product_price_historyUncheckedCreateWithoutProductsInput>;
};
export type product_price_historyCreateManyProductsInputEnvelope = {
    data: Prisma.product_price_historyCreateManyProductsInput | Prisma.product_price_historyCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type product_price_historyUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_price_historyWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_price_historyUpdateWithoutProductsInput, Prisma.product_price_historyUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.product_price_historyCreateWithoutProductsInput, Prisma.product_price_historyUncheckedCreateWithoutProductsInput>;
};
export type product_price_historyUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_price_historyWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_price_historyUpdateWithoutProductsInput, Prisma.product_price_historyUncheckedUpdateWithoutProductsInput>;
};
export type product_price_historyUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.product_price_historyScalarWhereInput;
    data: Prisma.XOR<Prisma.product_price_historyUpdateManyMutationInput, Prisma.product_price_historyUncheckedUpdateManyWithoutProductsInput>;
};
export type product_price_historyScalarWhereInput = {
    AND?: Prisma.product_price_historyScalarWhereInput | Prisma.product_price_historyScalarWhereInput[];
    OR?: Prisma.product_price_historyScalarWhereInput[];
    NOT?: Prisma.product_price_historyScalarWhereInput | Prisma.product_price_historyScalarWhereInput[];
    history_id?: Prisma.BigIntFilter<"product_price_history"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_price_history"> | bigint | number;
    old_price?: Prisma.DecimalNullableFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFilter<"product_price_history"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFilter<"product_price_history"> | Date | string;
};
export type product_price_historyCreateManyProductsInput = {
    history_id?: bigint | number;
    old_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Date | string;
};
export type product_price_historyUpdateWithoutProductsInput = {
    history_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    old_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_price_historyUncheckedUpdateWithoutProductsInput = {
    history_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    old_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_price_historyUncheckedUpdateManyWithoutProductsInput = {
    history_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    old_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    new_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_price_historySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    history_id?: boolean;
    product_id?: boolean;
    old_price?: boolean;
    new_price?: boolean;
    changed_at?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_price_history"]>;
export type product_price_historySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    history_id?: boolean;
    product_id?: boolean;
    old_price?: boolean;
    new_price?: boolean;
    changed_at?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_price_history"]>;
export type product_price_historySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    history_id?: boolean;
    product_id?: boolean;
    old_price?: boolean;
    new_price?: boolean;
    changed_at?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_price_history"]>;
export type product_price_historySelectScalar = {
    history_id?: boolean;
    product_id?: boolean;
    old_price?: boolean;
    new_price?: boolean;
    changed_at?: boolean;
};
export type product_price_historyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"history_id" | "product_id" | "old_price" | "new_price" | "changed_at", ExtArgs["result"]["product_price_history"]>;
export type product_price_historyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type product_price_historyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type product_price_historyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type $product_price_historyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_price_history";
    objects: {
        products: Prisma.$productsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        history_id: bigint;
        product_id: bigint;
        old_price: runtime.Decimal | null;
        new_price: runtime.Decimal;
        changed_at: Date;
    }, ExtArgs["result"]["product_price_history"]>;
    composites: {};
};
export type product_price_historyGetPayload<S extends boolean | null | undefined | product_price_historyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload, S>;
export type product_price_historyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_price_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_price_historyCountAggregateInputType | true;
};
export interface product_price_historyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_price_history'];
        meta: {
            name: 'product_price_history';
        };
    };
    findUnique<T extends product_price_historyFindUniqueArgs>(args: Prisma.SelectSubset<T, product_price_historyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_price_historyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_price_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_price_historyFindFirstArgs>(args?: Prisma.SelectSubset<T, product_price_historyFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_price_historyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_price_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_price_historyFindManyArgs>(args?: Prisma.SelectSubset<T, product_price_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_price_historyCreateArgs>(args: Prisma.SelectSubset<T, product_price_historyCreateArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_price_historyCreateManyArgs>(args?: Prisma.SelectSubset<T, product_price_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends product_price_historyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, product_price_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends product_price_historyDeleteArgs>(args: Prisma.SelectSubset<T, product_price_historyDeleteArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_price_historyUpdateArgs>(args: Prisma.SelectSubset<T, product_price_historyUpdateArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_price_historyDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_price_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_price_historyUpdateManyArgs>(args: Prisma.SelectSubset<T, product_price_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends product_price_historyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, product_price_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends product_price_historyUpsertArgs>(args: Prisma.SelectSubset<T, product_price_historyUpsertArgs<ExtArgs>>): Prisma.Prisma__product_price_historyClient<runtime.Types.Result.GetResult<Prisma.$product_price_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_price_historyCountArgs>(args?: Prisma.Subset<T, product_price_historyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_price_historyCountAggregateOutputType> : number>;
    aggregate<T extends Product_price_historyAggregateArgs>(args: Prisma.Subset<T, Product_price_historyAggregateArgs>): Prisma.PrismaPromise<GetProduct_price_historyAggregateType<T>>;
    groupBy<T extends product_price_historyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_price_historyGroupByArgs['orderBy'];
    } : {
        orderBy?: product_price_historyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_price_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_price_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_price_historyFieldRefs;
}
export interface Prisma__product_price_historyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.productsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productsDefaultArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_price_historyFieldRefs {
    readonly history_id: Prisma.FieldRef<"product_price_history", 'BigInt'>;
    readonly product_id: Prisma.FieldRef<"product_price_history", 'BigInt'>;
    readonly old_price: Prisma.FieldRef<"product_price_history", 'Decimal'>;
    readonly new_price: Prisma.FieldRef<"product_price_history", 'Decimal'>;
    readonly changed_at: Prisma.FieldRef<"product_price_history", 'DateTime'>;
}
export type product_price_historyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
    where: Prisma.product_price_historyWhereUniqueInput;
};
export type product_price_historyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
    where: Prisma.product_price_historyWhereUniqueInput;
};
export type product_price_historyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_price_historyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_price_historyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type product_price_historyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_price_historyCreateInput, Prisma.product_price_historyUncheckedCreateInput>;
};
export type product_price_historyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_price_historyCreateManyInput | Prisma.product_price_historyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_price_historyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    data: Prisma.product_price_historyCreateManyInput | Prisma.product_price_historyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.product_price_historyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type product_price_historyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_price_historyUpdateInput, Prisma.product_price_historyUncheckedUpdateInput>;
    where: Prisma.product_price_historyWhereUniqueInput;
};
export type product_price_historyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_price_historyUpdateManyMutationInput, Prisma.product_price_historyUncheckedUpdateManyInput>;
    where?: Prisma.product_price_historyWhereInput;
    limit?: number;
};
export type product_price_historyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_price_historyUpdateManyMutationInput, Prisma.product_price_historyUncheckedUpdateManyInput>;
    where?: Prisma.product_price_historyWhereInput;
    limit?: number;
    include?: Prisma.product_price_historyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type product_price_historyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
    where: Prisma.product_price_historyWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_price_historyCreateInput, Prisma.product_price_historyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_price_historyUpdateInput, Prisma.product_price_historyUncheckedUpdateInput>;
};
export type product_price_historyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
    where: Prisma.product_price_historyWhereUniqueInput;
};
export type product_price_historyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_price_historyWhereInput;
    limit?: number;
};
export type product_price_historyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_price_historySelect<ExtArgs> | null;
    omit?: Prisma.product_price_historyOmit<ExtArgs> | null;
    include?: Prisma.product_price_historyInclude<ExtArgs> | null;
};
