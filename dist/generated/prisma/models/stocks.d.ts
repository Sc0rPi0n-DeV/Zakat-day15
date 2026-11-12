import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type stocksModel = runtime.Types.Result.DefaultSelection<Prisma.$stocksPayload>;
export type AggregateStocks = {
    _count: StocksCountAggregateOutputType | null;
    _avg: StocksAvgAggregateOutputType | null;
    _sum: StocksSumAggregateOutputType | null;
    _min: StocksMinAggregateOutputType | null;
    _max: StocksMaxAggregateOutputType | null;
};
export type StocksAvgAggregateOutputType = {
    warehouse_id: number | null;
    variant_id: number | null;
    quantity: number | null;
    reserved_quantity: number | null;
};
export type StocksSumAggregateOutputType = {
    warehouse_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    reserved_quantity: number | null;
};
export type StocksMinAggregateOutputType = {
    warehouse_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    reserved_quantity: number | null;
};
export type StocksMaxAggregateOutputType = {
    warehouse_id: bigint | null;
    variant_id: bigint | null;
    quantity: number | null;
    reserved_quantity: number | null;
};
export type StocksCountAggregateOutputType = {
    warehouse_id: number;
    variant_id: number;
    quantity: number;
    reserved_quantity: number;
    _all: number;
};
export type StocksAvgAggregateInputType = {
    warehouse_id?: true;
    variant_id?: true;
    quantity?: true;
    reserved_quantity?: true;
};
export type StocksSumAggregateInputType = {
    warehouse_id?: true;
    variant_id?: true;
    quantity?: true;
    reserved_quantity?: true;
};
export type StocksMinAggregateInputType = {
    warehouse_id?: true;
    variant_id?: true;
    quantity?: true;
    reserved_quantity?: true;
};
export type StocksMaxAggregateInputType = {
    warehouse_id?: true;
    variant_id?: true;
    quantity?: true;
    reserved_quantity?: true;
};
export type StocksCountAggregateInputType = {
    warehouse_id?: true;
    variant_id?: true;
    quantity?: true;
    reserved_quantity?: true;
    _all?: true;
};
export type StocksAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithRelationInput | Prisma.stocksOrderByWithRelationInput[];
    cursor?: Prisma.stocksWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StocksCountAggregateInputType;
    _avg?: StocksAvgAggregateInputType;
    _sum?: StocksSumAggregateInputType;
    _min?: StocksMinAggregateInputType;
    _max?: StocksMaxAggregateInputType;
};
export type GetStocksAggregateType<T extends StocksAggregateArgs> = {
    [P in keyof T & keyof AggregateStocks]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStocks[P]> : Prisma.GetScalarType<T[P], AggregateStocks[P]>;
};
export type stocksGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
    orderBy?: Prisma.stocksOrderByWithAggregationInput | Prisma.stocksOrderByWithAggregationInput[];
    by: Prisma.StocksScalarFieldEnum[] | Prisma.StocksScalarFieldEnum;
    having?: Prisma.stocksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StocksCountAggregateInputType | true;
    _avg?: StocksAvgAggregateInputType;
    _sum?: StocksSumAggregateInputType;
    _min?: StocksMinAggregateInputType;
    _max?: StocksMaxAggregateInputType;
};
export type StocksGroupByOutputType = {
    warehouse_id: bigint;
    variant_id: bigint;
    quantity: number;
    reserved_quantity: number;
    _count: StocksCountAggregateOutputType | null;
    _avg: StocksAvgAggregateOutputType | null;
    _sum: StocksSumAggregateOutputType | null;
    _min: StocksMinAggregateOutputType | null;
    _max: StocksMaxAggregateOutputType | null;
};
export type GetStocksGroupByPayload<T extends stocksGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StocksGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StocksGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StocksGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StocksGroupByOutputType[P]>;
}>>;
export type stocksWhereInput = {
    AND?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    OR?: Prisma.stocksWhereInput[];
    NOT?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    warehouse_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    quantity?: Prisma.IntFilter<"stocks"> | number;
    reserved_quantity?: Prisma.IntFilter<"stocks"> | number;
    product_variants?: Prisma.XOR<Prisma.Product_variantsScalarRelationFilter, Prisma.product_variantsWhereInput>;
    warehouses?: Prisma.XOR<Prisma.WarehousesScalarRelationFilter, Prisma.warehousesWhereInput>;
};
export type stocksOrderByWithRelationInput = {
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved_quantity?: Prisma.SortOrder;
    product_variants?: Prisma.product_variantsOrderByWithRelationInput;
    warehouses?: Prisma.warehousesOrderByWithRelationInput;
};
export type stocksWhereUniqueInput = Prisma.AtLeast<{
    warehouse_id_variant_id?: Prisma.stocksWarehouse_idVariant_idCompoundUniqueInput;
    AND?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    OR?: Prisma.stocksWhereInput[];
    NOT?: Prisma.stocksWhereInput | Prisma.stocksWhereInput[];
    warehouse_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    quantity?: Prisma.IntFilter<"stocks"> | number;
    reserved_quantity?: Prisma.IntFilter<"stocks"> | number;
    product_variants?: Prisma.XOR<Prisma.Product_variantsScalarRelationFilter, Prisma.product_variantsWhereInput>;
    warehouses?: Prisma.XOR<Prisma.WarehousesScalarRelationFilter, Prisma.warehousesWhereInput>;
}, "warehouse_id_variant_id">;
export type stocksOrderByWithAggregationInput = {
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved_quantity?: Prisma.SortOrder;
    _count?: Prisma.stocksCountOrderByAggregateInput;
    _avg?: Prisma.stocksAvgOrderByAggregateInput;
    _max?: Prisma.stocksMaxOrderByAggregateInput;
    _min?: Prisma.stocksMinOrderByAggregateInput;
    _sum?: Prisma.stocksSumOrderByAggregateInput;
};
export type stocksScalarWhereWithAggregatesInput = {
    AND?: Prisma.stocksScalarWhereWithAggregatesInput | Prisma.stocksScalarWhereWithAggregatesInput[];
    OR?: Prisma.stocksScalarWhereWithAggregatesInput[];
    NOT?: Prisma.stocksScalarWhereWithAggregatesInput | Prisma.stocksScalarWhereWithAggregatesInput[];
    warehouse_id?: Prisma.BigIntWithAggregatesFilter<"stocks"> | bigint | number;
    variant_id?: Prisma.BigIntWithAggregatesFilter<"stocks"> | bigint | number;
    quantity?: Prisma.IntWithAggregatesFilter<"stocks"> | number;
    reserved_quantity?: Prisma.IntWithAggregatesFilter<"stocks"> | number;
};
export type stocksCreateInput = {
    quantity?: number;
    reserved_quantity?: number;
    product_variants: Prisma.product_variantsCreateNestedOneWithoutStocksInput;
    warehouses: Prisma.warehousesCreateNestedOneWithoutStocksInput;
};
export type stocksUncheckedCreateInput = {
    warehouse_id: bigint | number;
    variant_id: bigint | number;
    quantity?: number;
    reserved_quantity?: number;
};
export type stocksUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    product_variants?: Prisma.product_variantsUpdateOneRequiredWithoutStocksNestedInput;
    warehouses?: Prisma.warehousesUpdateOneRequiredWithoutStocksNestedInput;
};
export type stocksUncheckedUpdateInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type stocksCreateManyInput = {
    warehouse_id: bigint | number;
    variant_id: bigint | number;
    quantity?: number;
    reserved_quantity?: number;
};
export type stocksUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type stocksUncheckedUpdateManyInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StocksListRelationFilter = {
    every?: Prisma.stocksWhereInput;
    some?: Prisma.stocksWhereInput;
    none?: Prisma.stocksWhereInput;
};
export type stocksOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type stocksWarehouse_idVariant_idCompoundUniqueInput = {
    warehouse_id: bigint | number;
    variant_id: bigint | number;
};
export type stocksCountOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved_quantity?: Prisma.SortOrder;
};
export type stocksAvgOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved_quantity?: Prisma.SortOrder;
};
export type stocksMaxOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved_quantity?: Prisma.SortOrder;
};
export type stocksMinOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved_quantity?: Prisma.SortOrder;
};
export type stocksSumOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved_quantity?: Prisma.SortOrder;
};
export type stocksCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutProduct_variantsInput, Prisma.stocksUncheckedCreateWithoutProduct_variantsInput> | Prisma.stocksCreateWithoutProduct_variantsInput[] | Prisma.stocksUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutProduct_variantsInput | Prisma.stocksCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.stocksCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
};
export type stocksUncheckedCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutProduct_variantsInput, Prisma.stocksUncheckedCreateWithoutProduct_variantsInput> | Prisma.stocksCreateWithoutProduct_variantsInput[] | Prisma.stocksUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutProduct_variantsInput | Prisma.stocksCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.stocksCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
};
export type stocksUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutProduct_variantsInput, Prisma.stocksUncheckedCreateWithoutProduct_variantsInput> | Prisma.stocksCreateWithoutProduct_variantsInput[] | Prisma.stocksUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutProduct_variantsInput | Prisma.stocksCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.stocksUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.stocksUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.stocksCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    disconnect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    delete?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    update?: Prisma.stocksUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.stocksUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.stocksUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.stocksUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.stocksScalarWhereInput | Prisma.stocksScalarWhereInput[];
};
export type stocksUncheckedUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutProduct_variantsInput, Prisma.stocksUncheckedCreateWithoutProduct_variantsInput> | Prisma.stocksCreateWithoutProduct_variantsInput[] | Prisma.stocksUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutProduct_variantsInput | Prisma.stocksCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.stocksUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.stocksUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.stocksCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    disconnect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    delete?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    update?: Prisma.stocksUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.stocksUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.stocksUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.stocksUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.stocksScalarWhereInput | Prisma.stocksScalarWhereInput[];
};
export type stocksCreateNestedManyWithoutWarehousesInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutWarehousesInput, Prisma.stocksUncheckedCreateWithoutWarehousesInput> | Prisma.stocksCreateWithoutWarehousesInput[] | Prisma.stocksUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutWarehousesInput | Prisma.stocksCreateOrConnectWithoutWarehousesInput[];
    createMany?: Prisma.stocksCreateManyWarehousesInputEnvelope;
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
};
export type stocksUncheckedCreateNestedManyWithoutWarehousesInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutWarehousesInput, Prisma.stocksUncheckedCreateWithoutWarehousesInput> | Prisma.stocksCreateWithoutWarehousesInput[] | Prisma.stocksUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutWarehousesInput | Prisma.stocksCreateOrConnectWithoutWarehousesInput[];
    createMany?: Prisma.stocksCreateManyWarehousesInputEnvelope;
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
};
export type stocksUpdateManyWithoutWarehousesNestedInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutWarehousesInput, Prisma.stocksUncheckedCreateWithoutWarehousesInput> | Prisma.stocksCreateWithoutWarehousesInput[] | Prisma.stocksUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutWarehousesInput | Prisma.stocksCreateOrConnectWithoutWarehousesInput[];
    upsert?: Prisma.stocksUpsertWithWhereUniqueWithoutWarehousesInput | Prisma.stocksUpsertWithWhereUniqueWithoutWarehousesInput[];
    createMany?: Prisma.stocksCreateManyWarehousesInputEnvelope;
    set?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    disconnect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    delete?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    update?: Prisma.stocksUpdateWithWhereUniqueWithoutWarehousesInput | Prisma.stocksUpdateWithWhereUniqueWithoutWarehousesInput[];
    updateMany?: Prisma.stocksUpdateManyWithWhereWithoutWarehousesInput | Prisma.stocksUpdateManyWithWhereWithoutWarehousesInput[];
    deleteMany?: Prisma.stocksScalarWhereInput | Prisma.stocksScalarWhereInput[];
};
export type stocksUncheckedUpdateManyWithoutWarehousesNestedInput = {
    create?: Prisma.XOR<Prisma.stocksCreateWithoutWarehousesInput, Prisma.stocksUncheckedCreateWithoutWarehousesInput> | Prisma.stocksCreateWithoutWarehousesInput[] | Prisma.stocksUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stocksCreateOrConnectWithoutWarehousesInput | Prisma.stocksCreateOrConnectWithoutWarehousesInput[];
    upsert?: Prisma.stocksUpsertWithWhereUniqueWithoutWarehousesInput | Prisma.stocksUpsertWithWhereUniqueWithoutWarehousesInput[];
    createMany?: Prisma.stocksCreateManyWarehousesInputEnvelope;
    set?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    disconnect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    delete?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    connect?: Prisma.stocksWhereUniqueInput | Prisma.stocksWhereUniqueInput[];
    update?: Prisma.stocksUpdateWithWhereUniqueWithoutWarehousesInput | Prisma.stocksUpdateWithWhereUniqueWithoutWarehousesInput[];
    updateMany?: Prisma.stocksUpdateManyWithWhereWithoutWarehousesInput | Prisma.stocksUpdateManyWithWhereWithoutWarehousesInput[];
    deleteMany?: Prisma.stocksScalarWhereInput | Prisma.stocksScalarWhereInput[];
};
export type stocksCreateWithoutProduct_variantsInput = {
    quantity?: number;
    reserved_quantity?: number;
    warehouses: Prisma.warehousesCreateNestedOneWithoutStocksInput;
};
export type stocksUncheckedCreateWithoutProduct_variantsInput = {
    warehouse_id: bigint | number;
    quantity?: number;
    reserved_quantity?: number;
};
export type stocksCreateOrConnectWithoutProduct_variantsInput = {
    where: Prisma.stocksWhereUniqueInput;
    create: Prisma.XOR<Prisma.stocksCreateWithoutProduct_variantsInput, Prisma.stocksUncheckedCreateWithoutProduct_variantsInput>;
};
export type stocksCreateManyProduct_variantsInputEnvelope = {
    data: Prisma.stocksCreateManyProduct_variantsInput | Prisma.stocksCreateManyProduct_variantsInput[];
    skipDuplicates?: boolean;
};
export type stocksUpsertWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.stocksWhereUniqueInput;
    update: Prisma.XOR<Prisma.stocksUpdateWithoutProduct_variantsInput, Prisma.stocksUncheckedUpdateWithoutProduct_variantsInput>;
    create: Prisma.XOR<Prisma.stocksCreateWithoutProduct_variantsInput, Prisma.stocksUncheckedCreateWithoutProduct_variantsInput>;
};
export type stocksUpdateWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.stocksWhereUniqueInput;
    data: Prisma.XOR<Prisma.stocksUpdateWithoutProduct_variantsInput, Prisma.stocksUncheckedUpdateWithoutProduct_variantsInput>;
};
export type stocksUpdateManyWithWhereWithoutProduct_variantsInput = {
    where: Prisma.stocksScalarWhereInput;
    data: Prisma.XOR<Prisma.stocksUpdateManyMutationInput, Prisma.stocksUncheckedUpdateManyWithoutProduct_variantsInput>;
};
export type stocksScalarWhereInput = {
    AND?: Prisma.stocksScalarWhereInput | Prisma.stocksScalarWhereInput[];
    OR?: Prisma.stocksScalarWhereInput[];
    NOT?: Prisma.stocksScalarWhereInput | Prisma.stocksScalarWhereInput[];
    warehouse_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"stocks"> | bigint | number;
    quantity?: Prisma.IntFilter<"stocks"> | number;
    reserved_quantity?: Prisma.IntFilter<"stocks"> | number;
};
export type stocksCreateWithoutWarehousesInput = {
    quantity?: number;
    reserved_quantity?: number;
    product_variants: Prisma.product_variantsCreateNestedOneWithoutStocksInput;
};
export type stocksUncheckedCreateWithoutWarehousesInput = {
    variant_id: bigint | number;
    quantity?: number;
    reserved_quantity?: number;
};
export type stocksCreateOrConnectWithoutWarehousesInput = {
    where: Prisma.stocksWhereUniqueInput;
    create: Prisma.XOR<Prisma.stocksCreateWithoutWarehousesInput, Prisma.stocksUncheckedCreateWithoutWarehousesInput>;
};
export type stocksCreateManyWarehousesInputEnvelope = {
    data: Prisma.stocksCreateManyWarehousesInput | Prisma.stocksCreateManyWarehousesInput[];
    skipDuplicates?: boolean;
};
export type stocksUpsertWithWhereUniqueWithoutWarehousesInput = {
    where: Prisma.stocksWhereUniqueInput;
    update: Prisma.XOR<Prisma.stocksUpdateWithoutWarehousesInput, Prisma.stocksUncheckedUpdateWithoutWarehousesInput>;
    create: Prisma.XOR<Prisma.stocksCreateWithoutWarehousesInput, Prisma.stocksUncheckedCreateWithoutWarehousesInput>;
};
export type stocksUpdateWithWhereUniqueWithoutWarehousesInput = {
    where: Prisma.stocksWhereUniqueInput;
    data: Prisma.XOR<Prisma.stocksUpdateWithoutWarehousesInput, Prisma.stocksUncheckedUpdateWithoutWarehousesInput>;
};
export type stocksUpdateManyWithWhereWithoutWarehousesInput = {
    where: Prisma.stocksScalarWhereInput;
    data: Prisma.XOR<Prisma.stocksUpdateManyMutationInput, Prisma.stocksUncheckedUpdateManyWithoutWarehousesInput>;
};
export type stocksCreateManyProduct_variantsInput = {
    warehouse_id: bigint | number;
    quantity?: number;
    reserved_quantity?: number;
};
export type stocksUpdateWithoutProduct_variantsInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    warehouses?: Prisma.warehousesUpdateOneRequiredWithoutStocksNestedInput;
};
export type stocksUncheckedUpdateWithoutProduct_variantsInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type stocksUncheckedUpdateManyWithoutProduct_variantsInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type stocksCreateManyWarehousesInput = {
    variant_id: bigint | number;
    quantity?: number;
    reserved_quantity?: number;
};
export type stocksUpdateWithoutWarehousesInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    product_variants?: Prisma.product_variantsUpdateOneRequiredWithoutStocksNestedInput;
};
export type stocksUncheckedUpdateWithoutWarehousesInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type stocksUncheckedUpdateManyWithoutWarehousesInput = {
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved_quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type stocksSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    reserved_quantity?: boolean;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stocks"]>;
export type stocksSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    reserved_quantity?: boolean;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stocks"]>;
export type stocksSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    reserved_quantity?: boolean;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stocks"]>;
export type stocksSelectScalar = {
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity?: boolean;
    reserved_quantity?: boolean;
};
export type stocksOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"warehouse_id" | "variant_id" | "quantity" | "reserved_quantity", ExtArgs["result"]["stocks"]>;
export type stocksInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type stocksIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type stocksIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type $stocksPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "stocks";
    objects: {
        product_variants: Prisma.$product_variantsPayload<ExtArgs>;
        warehouses: Prisma.$warehousesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        warehouse_id: bigint;
        variant_id: bigint;
        quantity: number;
        reserved_quantity: number;
    }, ExtArgs["result"]["stocks"]>;
    composites: {};
};
export type stocksGetPayload<S extends boolean | null | undefined | stocksDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$stocksPayload, S>;
export type stocksCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<stocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StocksCountAggregateInputType | true;
};
export interface stocksDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['stocks'];
        meta: {
            name: 'stocks';
        };
    };
    findUnique<T extends stocksFindUniqueArgs>(args: Prisma.SelectSubset<T, stocksFindUniqueArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends stocksFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, stocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends stocksFindFirstArgs>(args?: Prisma.SelectSubset<T, stocksFindFirstArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends stocksFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, stocksFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends stocksFindManyArgs>(args?: Prisma.SelectSubset<T, stocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends stocksCreateArgs>(args: Prisma.SelectSubset<T, stocksCreateArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends stocksCreateManyArgs>(args?: Prisma.SelectSubset<T, stocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends stocksCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, stocksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends stocksDeleteArgs>(args: Prisma.SelectSubset<T, stocksDeleteArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends stocksUpdateArgs>(args: Prisma.SelectSubset<T, stocksUpdateArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends stocksDeleteManyArgs>(args?: Prisma.SelectSubset<T, stocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends stocksUpdateManyArgs>(args: Prisma.SelectSubset<T, stocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends stocksUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, stocksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends stocksUpsertArgs>(args: Prisma.SelectSubset<T, stocksUpsertArgs<ExtArgs>>): Prisma.Prisma__stocksClient<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends stocksCountArgs>(args?: Prisma.Subset<T, stocksCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StocksCountAggregateOutputType> : number>;
    aggregate<T extends StocksAggregateArgs>(args: Prisma.Subset<T, StocksAggregateArgs>): Prisma.PrismaPromise<GetStocksAggregateType<T>>;
    groupBy<T extends stocksGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: stocksGroupByArgs['orderBy'];
    } : {
        orderBy?: stocksGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, stocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: stocksFieldRefs;
}
export interface Prisma__stocksClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product_variants<T extends Prisma.product_variantsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variantsDefaultArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouses<T extends Prisma.warehousesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warehousesDefaultArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface stocksFieldRefs {
    readonly warehouse_id: Prisma.FieldRef<"stocks", 'BigInt'>;
    readonly variant_id: Prisma.FieldRef<"stocks", 'BigInt'>;
    readonly quantity: Prisma.FieldRef<"stocks", 'Int'>;
    readonly reserved_quantity: Prisma.FieldRef<"stocks", 'Int'>;
}
export type stocksFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type stocksFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type stocksFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type stocksCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stocksCreateInput, Prisma.stocksUncheckedCreateInput>;
};
export type stocksCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.stocksCreateManyInput | Prisma.stocksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stocksCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    data: Prisma.stocksCreateManyInput | Prisma.stocksCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.stocksIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type stocksUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stocksUpdateInput, Prisma.stocksUncheckedUpdateInput>;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.stocksUpdateManyMutationInput, Prisma.stocksUncheckedUpdateManyInput>;
    where?: Prisma.stocksWhereInput;
    limit?: number;
};
export type stocksUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stocksUpdateManyMutationInput, Prisma.stocksUncheckedUpdateManyInput>;
    where?: Prisma.stocksWhereInput;
    limit?: number;
    include?: Prisma.stocksIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type stocksUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
    create: Prisma.XOR<Prisma.stocksCreateInput, Prisma.stocksUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.stocksUpdateInput, Prisma.stocksUncheckedUpdateInput>;
};
export type stocksDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
    where: Prisma.stocksWhereUniqueInput;
};
export type stocksDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
    limit?: number;
};
export type stocksDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stocksSelect<ExtArgs> | null;
    omit?: Prisma.stocksOmit<ExtArgs> | null;
    include?: Prisma.stocksInclude<ExtArgs> | null;
};
