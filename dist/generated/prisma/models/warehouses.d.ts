import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type warehousesModel = runtime.Types.Result.DefaultSelection<Prisma.$warehousesPayload>;
export type AggregateWarehouses = {
    _count: WarehousesCountAggregateOutputType | null;
    _avg: WarehousesAvgAggregateOutputType | null;
    _sum: WarehousesSumAggregateOutputType | null;
    _min: WarehousesMinAggregateOutputType | null;
    _max: WarehousesMaxAggregateOutputType | null;
};
export type WarehousesAvgAggregateOutputType = {
    warehouse_id: number | null;
    city_id: number | null;
};
export type WarehousesSumAggregateOutputType = {
    warehouse_id: bigint | null;
    city_id: bigint | null;
};
export type WarehousesMinAggregateOutputType = {
    warehouse_id: bigint | null;
    warehouse_name: string | null;
    city_id: bigint | null;
};
export type WarehousesMaxAggregateOutputType = {
    warehouse_id: bigint | null;
    warehouse_name: string | null;
    city_id: bigint | null;
};
export type WarehousesCountAggregateOutputType = {
    warehouse_id: number;
    warehouse_name: number;
    city_id: number;
    _all: number;
};
export type WarehousesAvgAggregateInputType = {
    warehouse_id?: true;
    city_id?: true;
};
export type WarehousesSumAggregateInputType = {
    warehouse_id?: true;
    city_id?: true;
};
export type WarehousesMinAggregateInputType = {
    warehouse_id?: true;
    warehouse_name?: true;
    city_id?: true;
};
export type WarehousesMaxAggregateInputType = {
    warehouse_id?: true;
    warehouse_name?: true;
    city_id?: true;
};
export type WarehousesCountAggregateInputType = {
    warehouse_id?: true;
    warehouse_name?: true;
    city_id?: true;
    _all?: true;
};
export type WarehousesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warehousesWhereInput;
    orderBy?: Prisma.warehousesOrderByWithRelationInput | Prisma.warehousesOrderByWithRelationInput[];
    cursor?: Prisma.warehousesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WarehousesCountAggregateInputType;
    _avg?: WarehousesAvgAggregateInputType;
    _sum?: WarehousesSumAggregateInputType;
    _min?: WarehousesMinAggregateInputType;
    _max?: WarehousesMaxAggregateInputType;
};
export type GetWarehousesAggregateType<T extends WarehousesAggregateArgs> = {
    [P in keyof T & keyof AggregateWarehouses]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWarehouses[P]> : Prisma.GetScalarType<T[P], AggregateWarehouses[P]>;
};
export type warehousesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warehousesWhereInput;
    orderBy?: Prisma.warehousesOrderByWithAggregationInput | Prisma.warehousesOrderByWithAggregationInput[];
    by: Prisma.WarehousesScalarFieldEnum[] | Prisma.WarehousesScalarFieldEnum;
    having?: Prisma.warehousesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WarehousesCountAggregateInputType | true;
    _avg?: WarehousesAvgAggregateInputType;
    _sum?: WarehousesSumAggregateInputType;
    _min?: WarehousesMinAggregateInputType;
    _max?: WarehousesMaxAggregateInputType;
};
export type WarehousesGroupByOutputType = {
    warehouse_id: bigint;
    warehouse_name: string;
    city_id: bigint | null;
    _count: WarehousesCountAggregateOutputType | null;
    _avg: WarehousesAvgAggregateOutputType | null;
    _sum: WarehousesSumAggregateOutputType | null;
    _min: WarehousesMinAggregateOutputType | null;
    _max: WarehousesMaxAggregateOutputType | null;
};
export type GetWarehousesGroupByPayload<T extends warehousesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WarehousesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WarehousesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WarehousesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WarehousesGroupByOutputType[P]>;
}>>;
export type warehousesWhereInput = {
    AND?: Prisma.warehousesWhereInput | Prisma.warehousesWhereInput[];
    OR?: Prisma.warehousesWhereInput[];
    NOT?: Prisma.warehousesWhereInput | Prisma.warehousesWhereInput[];
    warehouse_id?: Prisma.BigIntFilter<"warehouses"> | bigint | number;
    warehouse_name?: Prisma.StringFilter<"warehouses"> | string;
    city_id?: Prisma.BigIntNullableFilter<"warehouses"> | bigint | number | null;
    purchase_orders?: Prisma.Purchase_ordersListRelationFilter;
    stock_movements?: Prisma.Stock_movementsListRelationFilter;
    stocks?: Prisma.StocksListRelationFilter;
    cities?: Prisma.XOR<Prisma.CitiesNullableScalarRelationFilter, Prisma.citiesWhereInput> | null;
};
export type warehousesOrderByWithRelationInput = {
    warehouse_id?: Prisma.SortOrder;
    warehouse_name?: Prisma.SortOrder;
    city_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchase_orders?: Prisma.purchase_ordersOrderByRelationAggregateInput;
    stock_movements?: Prisma.stock_movementsOrderByRelationAggregateInput;
    stocks?: Prisma.stocksOrderByRelationAggregateInput;
    cities?: Prisma.citiesOrderByWithRelationInput;
};
export type warehousesWhereUniqueInput = Prisma.AtLeast<{
    warehouse_id?: bigint | number;
    AND?: Prisma.warehousesWhereInput | Prisma.warehousesWhereInput[];
    OR?: Prisma.warehousesWhereInput[];
    NOT?: Prisma.warehousesWhereInput | Prisma.warehousesWhereInput[];
    warehouse_name?: Prisma.StringFilter<"warehouses"> | string;
    city_id?: Prisma.BigIntNullableFilter<"warehouses"> | bigint | number | null;
    purchase_orders?: Prisma.Purchase_ordersListRelationFilter;
    stock_movements?: Prisma.Stock_movementsListRelationFilter;
    stocks?: Prisma.StocksListRelationFilter;
    cities?: Prisma.XOR<Prisma.CitiesNullableScalarRelationFilter, Prisma.citiesWhereInput> | null;
}, "warehouse_id">;
export type warehousesOrderByWithAggregationInput = {
    warehouse_id?: Prisma.SortOrder;
    warehouse_name?: Prisma.SortOrder;
    city_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.warehousesCountOrderByAggregateInput;
    _avg?: Prisma.warehousesAvgOrderByAggregateInput;
    _max?: Prisma.warehousesMaxOrderByAggregateInput;
    _min?: Prisma.warehousesMinOrderByAggregateInput;
    _sum?: Prisma.warehousesSumOrderByAggregateInput;
};
export type warehousesScalarWhereWithAggregatesInput = {
    AND?: Prisma.warehousesScalarWhereWithAggregatesInput | Prisma.warehousesScalarWhereWithAggregatesInput[];
    OR?: Prisma.warehousesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.warehousesScalarWhereWithAggregatesInput | Prisma.warehousesScalarWhereWithAggregatesInput[];
    warehouse_id?: Prisma.BigIntWithAggregatesFilter<"warehouses"> | bigint | number;
    warehouse_name?: Prisma.StringWithAggregatesFilter<"warehouses"> | string;
    city_id?: Prisma.BigIntNullableWithAggregatesFilter<"warehouses"> | bigint | number | null;
};
export type warehousesCreateInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    purchase_orders?: Prisma.purchase_ordersCreateNestedManyWithoutWarehousesInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutWarehousesInput;
    cities?: Prisma.citiesCreateNestedOneWithoutWarehousesInput;
};
export type warehousesUncheckedCreateInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    city_id?: bigint | number | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedCreateNestedManyWithoutWarehousesInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutWarehousesInput;
};
export type warehousesUpdateInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_orders?: Prisma.purchase_ordersUpdateManyWithoutWarehousesNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutWarehousesNestedInput;
    cities?: Prisma.citiesUpdateOneWithoutWarehousesNestedInput;
};
export type warehousesUncheckedUpdateInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedUpdateManyWithoutWarehousesNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutWarehousesNestedInput;
};
export type warehousesCreateManyInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    city_id?: bigint | number | null;
};
export type warehousesUpdateManyMutationInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type warehousesUncheckedUpdateManyInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type WarehousesListRelationFilter = {
    every?: Prisma.warehousesWhereInput;
    some?: Prisma.warehousesWhereInput;
    none?: Prisma.warehousesWhereInput;
};
export type warehousesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WarehousesScalarRelationFilter = {
    is?: Prisma.warehousesWhereInput;
    isNot?: Prisma.warehousesWhereInput;
};
export type warehousesCountOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    warehouse_name?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type warehousesAvgOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type warehousesMaxOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    warehouse_name?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type warehousesMinOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    warehouse_name?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type warehousesSumOrderByAggregateInput = {
    warehouse_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type warehousesCreateNestedManyWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutCitiesInput, Prisma.warehousesUncheckedCreateWithoutCitiesInput> | Prisma.warehousesCreateWithoutCitiesInput[] | Prisma.warehousesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutCitiesInput | Prisma.warehousesCreateOrConnectWithoutCitiesInput[];
    createMany?: Prisma.warehousesCreateManyCitiesInputEnvelope;
    connect?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
};
export type warehousesUncheckedCreateNestedManyWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutCitiesInput, Prisma.warehousesUncheckedCreateWithoutCitiesInput> | Prisma.warehousesCreateWithoutCitiesInput[] | Prisma.warehousesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutCitiesInput | Prisma.warehousesCreateOrConnectWithoutCitiesInput[];
    createMany?: Prisma.warehousesCreateManyCitiesInputEnvelope;
    connect?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
};
export type warehousesUpdateManyWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutCitiesInput, Prisma.warehousesUncheckedCreateWithoutCitiesInput> | Prisma.warehousesCreateWithoutCitiesInput[] | Prisma.warehousesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutCitiesInput | Prisma.warehousesCreateOrConnectWithoutCitiesInput[];
    upsert?: Prisma.warehousesUpsertWithWhereUniqueWithoutCitiesInput | Prisma.warehousesUpsertWithWhereUniqueWithoutCitiesInput[];
    createMany?: Prisma.warehousesCreateManyCitiesInputEnvelope;
    set?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    disconnect?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    delete?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    connect?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    update?: Prisma.warehousesUpdateWithWhereUniqueWithoutCitiesInput | Prisma.warehousesUpdateWithWhereUniqueWithoutCitiesInput[];
    updateMany?: Prisma.warehousesUpdateManyWithWhereWithoutCitiesInput | Prisma.warehousesUpdateManyWithWhereWithoutCitiesInput[];
    deleteMany?: Prisma.warehousesScalarWhereInput | Prisma.warehousesScalarWhereInput[];
};
export type warehousesUncheckedUpdateManyWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutCitiesInput, Prisma.warehousesUncheckedCreateWithoutCitiesInput> | Prisma.warehousesCreateWithoutCitiesInput[] | Prisma.warehousesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutCitiesInput | Prisma.warehousesCreateOrConnectWithoutCitiesInput[];
    upsert?: Prisma.warehousesUpsertWithWhereUniqueWithoutCitiesInput | Prisma.warehousesUpsertWithWhereUniqueWithoutCitiesInput[];
    createMany?: Prisma.warehousesCreateManyCitiesInputEnvelope;
    set?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    disconnect?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    delete?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    connect?: Prisma.warehousesWhereUniqueInput | Prisma.warehousesWhereUniqueInput[];
    update?: Prisma.warehousesUpdateWithWhereUniqueWithoutCitiesInput | Prisma.warehousesUpdateWithWhereUniqueWithoutCitiesInput[];
    updateMany?: Prisma.warehousesUpdateManyWithWhereWithoutCitiesInput | Prisma.warehousesUpdateManyWithWhereWithoutCitiesInput[];
    deleteMany?: Prisma.warehousesScalarWhereInput | Prisma.warehousesScalarWhereInput[];
};
export type warehousesCreateNestedOneWithoutPurchase_ordersInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutPurchase_ordersInput, Prisma.warehousesUncheckedCreateWithoutPurchase_ordersInput>;
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutPurchase_ordersInput;
    connect?: Prisma.warehousesWhereUniqueInput;
};
export type warehousesUpdateOneRequiredWithoutPurchase_ordersNestedInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutPurchase_ordersInput, Prisma.warehousesUncheckedCreateWithoutPurchase_ordersInput>;
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutPurchase_ordersInput;
    upsert?: Prisma.warehousesUpsertWithoutPurchase_ordersInput;
    connect?: Prisma.warehousesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.warehousesUpdateToOneWithWhereWithoutPurchase_ordersInput, Prisma.warehousesUpdateWithoutPurchase_ordersInput>, Prisma.warehousesUncheckedUpdateWithoutPurchase_ordersInput>;
};
export type warehousesCreateNestedOneWithoutStock_movementsInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutStock_movementsInput, Prisma.warehousesUncheckedCreateWithoutStock_movementsInput>;
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutStock_movementsInput;
    connect?: Prisma.warehousesWhereUniqueInput;
};
export type warehousesUpdateOneRequiredWithoutStock_movementsNestedInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutStock_movementsInput, Prisma.warehousesUncheckedCreateWithoutStock_movementsInput>;
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutStock_movementsInput;
    upsert?: Prisma.warehousesUpsertWithoutStock_movementsInput;
    connect?: Prisma.warehousesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.warehousesUpdateToOneWithWhereWithoutStock_movementsInput, Prisma.warehousesUpdateWithoutStock_movementsInput>, Prisma.warehousesUncheckedUpdateWithoutStock_movementsInput>;
};
export type warehousesCreateNestedOneWithoutStocksInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutStocksInput, Prisma.warehousesUncheckedCreateWithoutStocksInput>;
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutStocksInput;
    connect?: Prisma.warehousesWhereUniqueInput;
};
export type warehousesUpdateOneRequiredWithoutStocksNestedInput = {
    create?: Prisma.XOR<Prisma.warehousesCreateWithoutStocksInput, Prisma.warehousesUncheckedCreateWithoutStocksInput>;
    connectOrCreate?: Prisma.warehousesCreateOrConnectWithoutStocksInput;
    upsert?: Prisma.warehousesUpsertWithoutStocksInput;
    connect?: Prisma.warehousesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.warehousesUpdateToOneWithWhereWithoutStocksInput, Prisma.warehousesUpdateWithoutStocksInput>, Prisma.warehousesUncheckedUpdateWithoutStocksInput>;
};
export type warehousesCreateWithoutCitiesInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    purchase_orders?: Prisma.purchase_ordersCreateNestedManyWithoutWarehousesInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutWarehousesInput;
};
export type warehousesUncheckedCreateWithoutCitiesInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    purchase_orders?: Prisma.purchase_ordersUncheckedCreateNestedManyWithoutWarehousesInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutWarehousesInput;
};
export type warehousesCreateOrConnectWithoutCitiesInput = {
    where: Prisma.warehousesWhereUniqueInput;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutCitiesInput, Prisma.warehousesUncheckedCreateWithoutCitiesInput>;
};
export type warehousesCreateManyCitiesInputEnvelope = {
    data: Prisma.warehousesCreateManyCitiesInput | Prisma.warehousesCreateManyCitiesInput[];
    skipDuplicates?: boolean;
};
export type warehousesUpsertWithWhereUniqueWithoutCitiesInput = {
    where: Prisma.warehousesWhereUniqueInput;
    update: Prisma.XOR<Prisma.warehousesUpdateWithoutCitiesInput, Prisma.warehousesUncheckedUpdateWithoutCitiesInput>;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutCitiesInput, Prisma.warehousesUncheckedCreateWithoutCitiesInput>;
};
export type warehousesUpdateWithWhereUniqueWithoutCitiesInput = {
    where: Prisma.warehousesWhereUniqueInput;
    data: Prisma.XOR<Prisma.warehousesUpdateWithoutCitiesInput, Prisma.warehousesUncheckedUpdateWithoutCitiesInput>;
};
export type warehousesUpdateManyWithWhereWithoutCitiesInput = {
    where: Prisma.warehousesScalarWhereInput;
    data: Prisma.XOR<Prisma.warehousesUpdateManyMutationInput, Prisma.warehousesUncheckedUpdateManyWithoutCitiesInput>;
};
export type warehousesScalarWhereInput = {
    AND?: Prisma.warehousesScalarWhereInput | Prisma.warehousesScalarWhereInput[];
    OR?: Prisma.warehousesScalarWhereInput[];
    NOT?: Prisma.warehousesScalarWhereInput | Prisma.warehousesScalarWhereInput[];
    warehouse_id?: Prisma.BigIntFilter<"warehouses"> | bigint | number;
    warehouse_name?: Prisma.StringFilter<"warehouses"> | string;
    city_id?: Prisma.BigIntNullableFilter<"warehouses"> | bigint | number | null;
};
export type warehousesCreateWithoutPurchase_ordersInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutWarehousesInput;
    cities?: Prisma.citiesCreateNestedOneWithoutWarehousesInput;
};
export type warehousesUncheckedCreateWithoutPurchase_ordersInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    city_id?: bigint | number | null;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutWarehousesInput;
};
export type warehousesCreateOrConnectWithoutPurchase_ordersInput = {
    where: Prisma.warehousesWhereUniqueInput;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutPurchase_ordersInput, Prisma.warehousesUncheckedCreateWithoutPurchase_ordersInput>;
};
export type warehousesUpsertWithoutPurchase_ordersInput = {
    update: Prisma.XOR<Prisma.warehousesUpdateWithoutPurchase_ordersInput, Prisma.warehousesUncheckedUpdateWithoutPurchase_ordersInput>;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutPurchase_ordersInput, Prisma.warehousesUncheckedCreateWithoutPurchase_ordersInput>;
    where?: Prisma.warehousesWhereInput;
};
export type warehousesUpdateToOneWithWhereWithoutPurchase_ordersInput = {
    where?: Prisma.warehousesWhereInput;
    data: Prisma.XOR<Prisma.warehousesUpdateWithoutPurchase_ordersInput, Prisma.warehousesUncheckedUpdateWithoutPurchase_ordersInput>;
};
export type warehousesUpdateWithoutPurchase_ordersInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutWarehousesNestedInput;
    cities?: Prisma.citiesUpdateOneWithoutWarehousesNestedInput;
};
export type warehousesUncheckedUpdateWithoutPurchase_ordersInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutWarehousesNestedInput;
};
export type warehousesCreateWithoutStock_movementsInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    purchase_orders?: Prisma.purchase_ordersCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksCreateNestedManyWithoutWarehousesInput;
    cities?: Prisma.citiesCreateNestedOneWithoutWarehousesInput;
};
export type warehousesUncheckedCreateWithoutStock_movementsInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    city_id?: bigint | number | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedCreateNestedManyWithoutWarehousesInput;
    stocks?: Prisma.stocksUncheckedCreateNestedManyWithoutWarehousesInput;
};
export type warehousesCreateOrConnectWithoutStock_movementsInput = {
    where: Prisma.warehousesWhereUniqueInput;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutStock_movementsInput, Prisma.warehousesUncheckedCreateWithoutStock_movementsInput>;
};
export type warehousesUpsertWithoutStock_movementsInput = {
    update: Prisma.XOR<Prisma.warehousesUpdateWithoutStock_movementsInput, Prisma.warehousesUncheckedUpdateWithoutStock_movementsInput>;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutStock_movementsInput, Prisma.warehousesUncheckedCreateWithoutStock_movementsInput>;
    where?: Prisma.warehousesWhereInput;
};
export type warehousesUpdateToOneWithWhereWithoutStock_movementsInput = {
    where?: Prisma.warehousesWhereInput;
    data: Prisma.XOR<Prisma.warehousesUpdateWithoutStock_movementsInput, Prisma.warehousesUncheckedUpdateWithoutStock_movementsInput>;
};
export type warehousesUpdateWithoutStock_movementsInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_orders?: Prisma.purchase_ordersUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutWarehousesNestedInput;
    cities?: Prisma.citiesUpdateOneWithoutWarehousesNestedInput;
};
export type warehousesUncheckedUpdateWithoutStock_movementsInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutWarehousesNestedInput;
};
export type warehousesCreateWithoutStocksInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    purchase_orders?: Prisma.purchase_ordersCreateNestedManyWithoutWarehousesInput;
    stock_movements?: Prisma.stock_movementsCreateNestedManyWithoutWarehousesInput;
    cities?: Prisma.citiesCreateNestedOneWithoutWarehousesInput;
};
export type warehousesUncheckedCreateWithoutStocksInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
    city_id?: bigint | number | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedCreateNestedManyWithoutWarehousesInput;
    stock_movements?: Prisma.stock_movementsUncheckedCreateNestedManyWithoutWarehousesInput;
};
export type warehousesCreateOrConnectWithoutStocksInput = {
    where: Prisma.warehousesWhereUniqueInput;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutStocksInput, Prisma.warehousesUncheckedCreateWithoutStocksInput>;
};
export type warehousesUpsertWithoutStocksInput = {
    update: Prisma.XOR<Prisma.warehousesUpdateWithoutStocksInput, Prisma.warehousesUncheckedUpdateWithoutStocksInput>;
    create: Prisma.XOR<Prisma.warehousesCreateWithoutStocksInput, Prisma.warehousesUncheckedCreateWithoutStocksInput>;
    where?: Prisma.warehousesWhereInput;
};
export type warehousesUpdateToOneWithWhereWithoutStocksInput = {
    where?: Prisma.warehousesWhereInput;
    data: Prisma.XOR<Prisma.warehousesUpdateWithoutStocksInput, Prisma.warehousesUncheckedUpdateWithoutStocksInput>;
};
export type warehousesUpdateWithoutStocksInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_orders?: Prisma.purchase_ordersUpdateManyWithoutWarehousesNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutWarehousesNestedInput;
    cities?: Prisma.citiesUpdateOneWithoutWarehousesNestedInput;
};
export type warehousesUncheckedUpdateWithoutStocksInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    city_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedUpdateManyWithoutWarehousesNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutWarehousesNestedInput;
};
export type warehousesCreateManyCitiesInput = {
    warehouse_id?: bigint | number;
    warehouse_name: string;
};
export type warehousesUpdateWithoutCitiesInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_orders?: Prisma.purchase_ordersUpdateManyWithoutWarehousesNestedInput;
    stock_movements?: Prisma.stock_movementsUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUpdateManyWithoutWarehousesNestedInput;
};
export type warehousesUncheckedUpdateWithoutCitiesInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_orders?: Prisma.purchase_ordersUncheckedUpdateManyWithoutWarehousesNestedInput;
    stock_movements?: Prisma.stock_movementsUncheckedUpdateManyWithoutWarehousesNestedInput;
    stocks?: Prisma.stocksUncheckedUpdateManyWithoutWarehousesNestedInput;
};
export type warehousesUncheckedUpdateManyWithoutCitiesInput = {
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type WarehousesCountOutputType = {
    purchase_orders: number;
    stock_movements: number;
    stocks: number;
};
export type WarehousesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_orders?: boolean | WarehousesCountOutputTypeCountPurchase_ordersArgs;
    stock_movements?: boolean | WarehousesCountOutputTypeCountStock_movementsArgs;
    stocks?: boolean | WarehousesCountOutputTypeCountStocksArgs;
};
export type WarehousesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehousesCountOutputTypeSelect<ExtArgs> | null;
};
export type WarehousesCountOutputTypeCountPurchase_ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_ordersWhereInput;
};
export type WarehousesCountOutputTypeCountStock_movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_movementsWhereInput;
};
export type WarehousesCountOutputTypeCountStocksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stocksWhereInput;
};
export type warehousesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    warehouse_id?: boolean;
    warehouse_name?: boolean;
    city_id?: boolean;
    purchase_orders?: boolean | Prisma.warehouses$purchase_ordersArgs<ExtArgs>;
    stock_movements?: boolean | Prisma.warehouses$stock_movementsArgs<ExtArgs>;
    stocks?: boolean | Prisma.warehouses$stocksArgs<ExtArgs>;
    cities?: boolean | Prisma.warehouses$citiesArgs<ExtArgs>;
    _count?: boolean | Prisma.WarehousesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warehouses"]>;
export type warehousesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    warehouse_id?: boolean;
    warehouse_name?: boolean;
    city_id?: boolean;
    cities?: boolean | Prisma.warehouses$citiesArgs<ExtArgs>;
}, ExtArgs["result"]["warehouses"]>;
export type warehousesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    warehouse_id?: boolean;
    warehouse_name?: boolean;
    city_id?: boolean;
    cities?: boolean | Prisma.warehouses$citiesArgs<ExtArgs>;
}, ExtArgs["result"]["warehouses"]>;
export type warehousesSelectScalar = {
    warehouse_id?: boolean;
    warehouse_name?: boolean;
    city_id?: boolean;
};
export type warehousesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"warehouse_id" | "warehouse_name" | "city_id", ExtArgs["result"]["warehouses"]>;
export type warehousesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_orders?: boolean | Prisma.warehouses$purchase_ordersArgs<ExtArgs>;
    stock_movements?: boolean | Prisma.warehouses$stock_movementsArgs<ExtArgs>;
    stocks?: boolean | Prisma.warehouses$stocksArgs<ExtArgs>;
    cities?: boolean | Prisma.warehouses$citiesArgs<ExtArgs>;
    _count?: boolean | Prisma.WarehousesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type warehousesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | Prisma.warehouses$citiesArgs<ExtArgs>;
};
export type warehousesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | Prisma.warehouses$citiesArgs<ExtArgs>;
};
export type $warehousesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "warehouses";
    objects: {
        purchase_orders: Prisma.$purchase_ordersPayload<ExtArgs>[];
        stock_movements: Prisma.$stock_movementsPayload<ExtArgs>[];
        stocks: Prisma.$stocksPayload<ExtArgs>[];
        cities: Prisma.$citiesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        warehouse_id: bigint;
        warehouse_name: string;
        city_id: bigint | null;
    }, ExtArgs["result"]["warehouses"]>;
    composites: {};
};
export type warehousesGetPayload<S extends boolean | null | undefined | warehousesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$warehousesPayload, S>;
export type warehousesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<warehousesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WarehousesCountAggregateInputType | true;
};
export interface warehousesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['warehouses'];
        meta: {
            name: 'warehouses';
        };
    };
    findUnique<T extends warehousesFindUniqueArgs>(args: Prisma.SelectSubset<T, warehousesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends warehousesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, warehousesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends warehousesFindFirstArgs>(args?: Prisma.SelectSubset<T, warehousesFindFirstArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends warehousesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, warehousesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends warehousesFindManyArgs>(args?: Prisma.SelectSubset<T, warehousesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends warehousesCreateArgs>(args: Prisma.SelectSubset<T, warehousesCreateArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends warehousesCreateManyArgs>(args?: Prisma.SelectSubset<T, warehousesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends warehousesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, warehousesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends warehousesDeleteArgs>(args: Prisma.SelectSubset<T, warehousesDeleteArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends warehousesUpdateArgs>(args: Prisma.SelectSubset<T, warehousesUpdateArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends warehousesDeleteManyArgs>(args?: Prisma.SelectSubset<T, warehousesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends warehousesUpdateManyArgs>(args: Prisma.SelectSubset<T, warehousesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends warehousesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, warehousesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends warehousesUpsertArgs>(args: Prisma.SelectSubset<T, warehousesUpsertArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends warehousesCountArgs>(args?: Prisma.Subset<T, warehousesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WarehousesCountAggregateOutputType> : number>;
    aggregate<T extends WarehousesAggregateArgs>(args: Prisma.Subset<T, WarehousesAggregateArgs>): Prisma.PrismaPromise<GetWarehousesAggregateType<T>>;
    groupBy<T extends warehousesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: warehousesGroupByArgs['orderBy'];
    } : {
        orderBy?: warehousesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, warehousesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehousesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: warehousesFieldRefs;
}
export interface Prisma__warehousesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchase_orders<T extends Prisma.warehouses$purchase_ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warehouses$purchase_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stock_movements<T extends Prisma.warehouses$stock_movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warehouses$stock_movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stocks<T extends Prisma.warehouses$stocksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warehouses$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cities<T extends Prisma.warehouses$citiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warehouses$citiesArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface warehousesFieldRefs {
    readonly warehouse_id: Prisma.FieldRef<"warehouses", 'BigInt'>;
    readonly warehouse_name: Prisma.FieldRef<"warehouses", 'String'>;
    readonly city_id: Prisma.FieldRef<"warehouses", 'BigInt'>;
}
export type warehousesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where: Prisma.warehousesWhereUniqueInput;
};
export type warehousesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where: Prisma.warehousesWhereUniqueInput;
};
export type warehousesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where?: Prisma.warehousesWhereInput;
    orderBy?: Prisma.warehousesOrderByWithRelationInput | Prisma.warehousesOrderByWithRelationInput[];
    cursor?: Prisma.warehousesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehousesScalarFieldEnum | Prisma.WarehousesScalarFieldEnum[];
};
export type warehousesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where?: Prisma.warehousesWhereInput;
    orderBy?: Prisma.warehousesOrderByWithRelationInput | Prisma.warehousesOrderByWithRelationInput[];
    cursor?: Prisma.warehousesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehousesScalarFieldEnum | Prisma.WarehousesScalarFieldEnum[];
};
export type warehousesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where?: Prisma.warehousesWhereInput;
    orderBy?: Prisma.warehousesOrderByWithRelationInput | Prisma.warehousesOrderByWithRelationInput[];
    cursor?: Prisma.warehousesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehousesScalarFieldEnum | Prisma.WarehousesScalarFieldEnum[];
};
export type warehousesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.warehousesCreateInput, Prisma.warehousesUncheckedCreateInput>;
};
export type warehousesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.warehousesCreateManyInput | Prisma.warehousesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type warehousesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    data: Prisma.warehousesCreateManyInput | Prisma.warehousesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.warehousesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type warehousesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.warehousesUpdateInput, Prisma.warehousesUncheckedUpdateInput>;
    where: Prisma.warehousesWhereUniqueInput;
};
export type warehousesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.warehousesUpdateManyMutationInput, Prisma.warehousesUncheckedUpdateManyInput>;
    where?: Prisma.warehousesWhereInput;
    limit?: number;
};
export type warehousesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.warehousesUpdateManyMutationInput, Prisma.warehousesUncheckedUpdateManyInput>;
    where?: Prisma.warehousesWhereInput;
    limit?: number;
    include?: Prisma.warehousesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type warehousesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where: Prisma.warehousesWhereUniqueInput;
    create: Prisma.XOR<Prisma.warehousesCreateInput, Prisma.warehousesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.warehousesUpdateInput, Prisma.warehousesUncheckedUpdateInput>;
};
export type warehousesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where: Prisma.warehousesWhereUniqueInput;
};
export type warehousesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warehousesWhereInput;
    limit?: number;
};
export type warehouses$purchase_ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
    where?: Prisma.purchase_ordersWhereInput;
    orderBy?: Prisma.purchase_ordersOrderByWithRelationInput | Prisma.purchase_ordersOrderByWithRelationInput[];
    cursor?: Prisma.purchase_ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Purchase_ordersScalarFieldEnum | Prisma.Purchase_ordersScalarFieldEnum[];
};
export type warehouses$stock_movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type warehouses$stocksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type warehouses$citiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    where?: Prisma.citiesWhereInput;
};
export type warehousesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
};
