import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type stock_movementsModel = runtime.Types.Result.DefaultSelection<Prisma.$stock_movementsPayload>;
export type AggregateStock_movements = {
    _count: Stock_movementsCountAggregateOutputType | null;
    _avg: Stock_movementsAvgAggregateOutputType | null;
    _sum: Stock_movementsSumAggregateOutputType | null;
    _min: Stock_movementsMinAggregateOutputType | null;
    _max: Stock_movementsMaxAggregateOutputType | null;
};
export type Stock_movementsAvgAggregateOutputType = {
    movement_id: number | null;
    warehouse_id: number | null;
    variant_id: number | null;
    quantity_change: number | null;
};
export type Stock_movementsSumAggregateOutputType = {
    movement_id: bigint | null;
    warehouse_id: bigint | null;
    variant_id: bigint | null;
    quantity_change: number | null;
};
export type Stock_movementsMinAggregateOutputType = {
    movement_id: bigint | null;
    warehouse_id: bigint | null;
    variant_id: bigint | null;
    quantity_change: number | null;
    reason: string | null;
    moved_at: Date | null;
};
export type Stock_movementsMaxAggregateOutputType = {
    movement_id: bigint | null;
    warehouse_id: bigint | null;
    variant_id: bigint | null;
    quantity_change: number | null;
    reason: string | null;
    moved_at: Date | null;
};
export type Stock_movementsCountAggregateOutputType = {
    movement_id: number;
    warehouse_id: number;
    variant_id: number;
    quantity_change: number;
    reason: number;
    moved_at: number;
    _all: number;
};
export type Stock_movementsAvgAggregateInputType = {
    movement_id?: true;
    warehouse_id?: true;
    variant_id?: true;
    quantity_change?: true;
};
export type Stock_movementsSumAggregateInputType = {
    movement_id?: true;
    warehouse_id?: true;
    variant_id?: true;
    quantity_change?: true;
};
export type Stock_movementsMinAggregateInputType = {
    movement_id?: true;
    warehouse_id?: true;
    variant_id?: true;
    quantity_change?: true;
    reason?: true;
    moved_at?: true;
};
export type Stock_movementsMaxAggregateInputType = {
    movement_id?: true;
    warehouse_id?: true;
    variant_id?: true;
    quantity_change?: true;
    reason?: true;
    moved_at?: true;
};
export type Stock_movementsCountAggregateInputType = {
    movement_id?: true;
    warehouse_id?: true;
    variant_id?: true;
    quantity_change?: true;
    reason?: true;
    moved_at?: true;
    _all?: true;
};
export type Stock_movementsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_movementsWhereInput;
    orderBy?: Prisma.stock_movementsOrderByWithRelationInput | Prisma.stock_movementsOrderByWithRelationInput[];
    cursor?: Prisma.stock_movementsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Stock_movementsCountAggregateInputType;
    _avg?: Stock_movementsAvgAggregateInputType;
    _sum?: Stock_movementsSumAggregateInputType;
    _min?: Stock_movementsMinAggregateInputType;
    _max?: Stock_movementsMaxAggregateInputType;
};
export type GetStock_movementsAggregateType<T extends Stock_movementsAggregateArgs> = {
    [P in keyof T & keyof AggregateStock_movements]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStock_movements[P]> : Prisma.GetScalarType<T[P], AggregateStock_movements[P]>;
};
export type stock_movementsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_movementsWhereInput;
    orderBy?: Prisma.stock_movementsOrderByWithAggregationInput | Prisma.stock_movementsOrderByWithAggregationInput[];
    by: Prisma.Stock_movementsScalarFieldEnum[] | Prisma.Stock_movementsScalarFieldEnum;
    having?: Prisma.stock_movementsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Stock_movementsCountAggregateInputType | true;
    _avg?: Stock_movementsAvgAggregateInputType;
    _sum?: Stock_movementsSumAggregateInputType;
    _min?: Stock_movementsMinAggregateInputType;
    _max?: Stock_movementsMaxAggregateInputType;
};
export type Stock_movementsGroupByOutputType = {
    movement_id: bigint;
    warehouse_id: bigint;
    variant_id: bigint;
    quantity_change: number;
    reason: string;
    moved_at: Date;
    _count: Stock_movementsCountAggregateOutputType | null;
    _avg: Stock_movementsAvgAggregateOutputType | null;
    _sum: Stock_movementsSumAggregateOutputType | null;
    _min: Stock_movementsMinAggregateOutputType | null;
    _max: Stock_movementsMaxAggregateOutputType | null;
};
export type GetStock_movementsGroupByPayload<T extends stock_movementsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Stock_movementsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Stock_movementsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Stock_movementsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Stock_movementsGroupByOutputType[P]>;
}>>;
export type stock_movementsWhereInput = {
    AND?: Prisma.stock_movementsWhereInput | Prisma.stock_movementsWhereInput[];
    OR?: Prisma.stock_movementsWhereInput[];
    NOT?: Prisma.stock_movementsWhereInput | Prisma.stock_movementsWhereInput[];
    movement_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    warehouse_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    quantity_change?: Prisma.IntFilter<"stock_movements"> | number;
    reason?: Prisma.StringFilter<"stock_movements"> | string;
    moved_at?: Prisma.DateTimeFilter<"stock_movements"> | Date | string;
    product_variants?: Prisma.XOR<Prisma.Product_variantsScalarRelationFilter, Prisma.product_variantsWhereInput>;
    warehouses?: Prisma.XOR<Prisma.WarehousesScalarRelationFilter, Prisma.warehousesWhereInput>;
};
export type stock_movementsOrderByWithRelationInput = {
    movement_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity_change?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    moved_at?: Prisma.SortOrder;
    product_variants?: Prisma.product_variantsOrderByWithRelationInput;
    warehouses?: Prisma.warehousesOrderByWithRelationInput;
};
export type stock_movementsWhereUniqueInput = Prisma.AtLeast<{
    movement_id?: bigint | number;
    AND?: Prisma.stock_movementsWhereInput | Prisma.stock_movementsWhereInput[];
    OR?: Prisma.stock_movementsWhereInput[];
    NOT?: Prisma.stock_movementsWhereInput | Prisma.stock_movementsWhereInput[];
    warehouse_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    quantity_change?: Prisma.IntFilter<"stock_movements"> | number;
    reason?: Prisma.StringFilter<"stock_movements"> | string;
    moved_at?: Prisma.DateTimeFilter<"stock_movements"> | Date | string;
    product_variants?: Prisma.XOR<Prisma.Product_variantsScalarRelationFilter, Prisma.product_variantsWhereInput>;
    warehouses?: Prisma.XOR<Prisma.WarehousesScalarRelationFilter, Prisma.warehousesWhereInput>;
}, "movement_id">;
export type stock_movementsOrderByWithAggregationInput = {
    movement_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity_change?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    moved_at?: Prisma.SortOrder;
    _count?: Prisma.stock_movementsCountOrderByAggregateInput;
    _avg?: Prisma.stock_movementsAvgOrderByAggregateInput;
    _max?: Prisma.stock_movementsMaxOrderByAggregateInput;
    _min?: Prisma.stock_movementsMinOrderByAggregateInput;
    _sum?: Prisma.stock_movementsSumOrderByAggregateInput;
};
export type stock_movementsScalarWhereWithAggregatesInput = {
    AND?: Prisma.stock_movementsScalarWhereWithAggregatesInput | Prisma.stock_movementsScalarWhereWithAggregatesInput[];
    OR?: Prisma.stock_movementsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.stock_movementsScalarWhereWithAggregatesInput | Prisma.stock_movementsScalarWhereWithAggregatesInput[];
    movement_id?: Prisma.BigIntWithAggregatesFilter<"stock_movements"> | bigint | number;
    warehouse_id?: Prisma.BigIntWithAggregatesFilter<"stock_movements"> | bigint | number;
    variant_id?: Prisma.BigIntWithAggregatesFilter<"stock_movements"> | bigint | number;
    quantity_change?: Prisma.IntWithAggregatesFilter<"stock_movements"> | number;
    reason?: Prisma.StringWithAggregatesFilter<"stock_movements"> | string;
    moved_at?: Prisma.DateTimeWithAggregatesFilter<"stock_movements"> | Date | string;
};
export type stock_movementsCreateInput = {
    movement_id?: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
    product_variants: Prisma.product_variantsCreateNestedOneWithoutStock_movementsInput;
    warehouses: Prisma.warehousesCreateNestedOneWithoutStock_movementsInput;
};
export type stock_movementsUncheckedCreateInput = {
    movement_id?: bigint | number;
    warehouse_id: bigint | number;
    variant_id: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
};
export type stock_movementsUpdateInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_variants?: Prisma.product_variantsUpdateOneRequiredWithoutStock_movementsNestedInput;
    warehouses?: Prisma.warehousesUpdateOneRequiredWithoutStock_movementsNestedInput;
};
export type stock_movementsUncheckedUpdateInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stock_movementsCreateManyInput = {
    movement_id?: bigint | number;
    warehouse_id: bigint | number;
    variant_id: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
};
export type stock_movementsUpdateManyMutationInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stock_movementsUncheckedUpdateManyInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Stock_movementsListRelationFilter = {
    every?: Prisma.stock_movementsWhereInput;
    some?: Prisma.stock_movementsWhereInput;
    none?: Prisma.stock_movementsWhereInput;
};
export type stock_movementsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type stock_movementsCountOrderByAggregateInput = {
    movement_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity_change?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    moved_at?: Prisma.SortOrder;
};
export type stock_movementsAvgOrderByAggregateInput = {
    movement_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity_change?: Prisma.SortOrder;
};
export type stock_movementsMaxOrderByAggregateInput = {
    movement_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity_change?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    moved_at?: Prisma.SortOrder;
};
export type stock_movementsMinOrderByAggregateInput = {
    movement_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity_change?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    moved_at?: Prisma.SortOrder;
};
export type stock_movementsSumOrderByAggregateInput = {
    movement_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    variant_id?: Prisma.SortOrder;
    quantity_change?: Prisma.SortOrder;
};
export type stock_movementsCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput> | Prisma.stock_movementsCreateWithoutProduct_variantsInput[] | Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput | Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.stock_movementsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
};
export type stock_movementsUncheckedCreateNestedManyWithoutProduct_variantsInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput> | Prisma.stock_movementsCreateWithoutProduct_variantsInput[] | Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput | Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput[];
    createMany?: Prisma.stock_movementsCreateManyProduct_variantsInputEnvelope;
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
};
export type stock_movementsUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput> | Prisma.stock_movementsCreateWithoutProduct_variantsInput[] | Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput | Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.stock_movementsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.stock_movementsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.stock_movementsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    disconnect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    delete?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    update?: Prisma.stock_movementsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.stock_movementsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.stock_movementsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.stock_movementsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.stock_movementsScalarWhereInput | Prisma.stock_movementsScalarWhereInput[];
};
export type stock_movementsUncheckedUpdateManyWithoutProduct_variantsNestedInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput> | Prisma.stock_movementsCreateWithoutProduct_variantsInput[] | Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput | Prisma.stock_movementsCreateOrConnectWithoutProduct_variantsInput[];
    upsert?: Prisma.stock_movementsUpsertWithWhereUniqueWithoutProduct_variantsInput | Prisma.stock_movementsUpsertWithWhereUniqueWithoutProduct_variantsInput[];
    createMany?: Prisma.stock_movementsCreateManyProduct_variantsInputEnvelope;
    set?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    disconnect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    delete?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    update?: Prisma.stock_movementsUpdateWithWhereUniqueWithoutProduct_variantsInput | Prisma.stock_movementsUpdateWithWhereUniqueWithoutProduct_variantsInput[];
    updateMany?: Prisma.stock_movementsUpdateManyWithWhereWithoutProduct_variantsInput | Prisma.stock_movementsUpdateManyWithWhereWithoutProduct_variantsInput[];
    deleteMany?: Prisma.stock_movementsScalarWhereInput | Prisma.stock_movementsScalarWhereInput[];
};
export type stock_movementsCreateNestedManyWithoutWarehousesInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutWarehousesInput, Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput> | Prisma.stock_movementsCreateWithoutWarehousesInput[] | Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput | Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput[];
    createMany?: Prisma.stock_movementsCreateManyWarehousesInputEnvelope;
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
};
export type stock_movementsUncheckedCreateNestedManyWithoutWarehousesInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutWarehousesInput, Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput> | Prisma.stock_movementsCreateWithoutWarehousesInput[] | Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput | Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput[];
    createMany?: Prisma.stock_movementsCreateManyWarehousesInputEnvelope;
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
};
export type stock_movementsUpdateManyWithoutWarehousesNestedInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutWarehousesInput, Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput> | Prisma.stock_movementsCreateWithoutWarehousesInput[] | Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput | Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput[];
    upsert?: Prisma.stock_movementsUpsertWithWhereUniqueWithoutWarehousesInput | Prisma.stock_movementsUpsertWithWhereUniqueWithoutWarehousesInput[];
    createMany?: Prisma.stock_movementsCreateManyWarehousesInputEnvelope;
    set?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    disconnect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    delete?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    update?: Prisma.stock_movementsUpdateWithWhereUniqueWithoutWarehousesInput | Prisma.stock_movementsUpdateWithWhereUniqueWithoutWarehousesInput[];
    updateMany?: Prisma.stock_movementsUpdateManyWithWhereWithoutWarehousesInput | Prisma.stock_movementsUpdateManyWithWhereWithoutWarehousesInput[];
    deleteMany?: Prisma.stock_movementsScalarWhereInput | Prisma.stock_movementsScalarWhereInput[];
};
export type stock_movementsUncheckedUpdateManyWithoutWarehousesNestedInput = {
    create?: Prisma.XOR<Prisma.stock_movementsCreateWithoutWarehousesInput, Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput> | Prisma.stock_movementsCreateWithoutWarehousesInput[] | Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput | Prisma.stock_movementsCreateOrConnectWithoutWarehousesInput[];
    upsert?: Prisma.stock_movementsUpsertWithWhereUniqueWithoutWarehousesInput | Prisma.stock_movementsUpsertWithWhereUniqueWithoutWarehousesInput[];
    createMany?: Prisma.stock_movementsCreateManyWarehousesInputEnvelope;
    set?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    disconnect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    delete?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    connect?: Prisma.stock_movementsWhereUniqueInput | Prisma.stock_movementsWhereUniqueInput[];
    update?: Prisma.stock_movementsUpdateWithWhereUniqueWithoutWarehousesInput | Prisma.stock_movementsUpdateWithWhereUniqueWithoutWarehousesInput[];
    updateMany?: Prisma.stock_movementsUpdateManyWithWhereWithoutWarehousesInput | Prisma.stock_movementsUpdateManyWithWhereWithoutWarehousesInput[];
    deleteMany?: Prisma.stock_movementsScalarWhereInput | Prisma.stock_movementsScalarWhereInput[];
};
export type stock_movementsCreateWithoutProduct_variantsInput = {
    movement_id?: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
    warehouses: Prisma.warehousesCreateNestedOneWithoutStock_movementsInput;
};
export type stock_movementsUncheckedCreateWithoutProduct_variantsInput = {
    movement_id?: bigint | number;
    warehouse_id: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
};
export type stock_movementsCreateOrConnectWithoutProduct_variantsInput = {
    where: Prisma.stock_movementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.stock_movementsCreateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput>;
};
export type stock_movementsCreateManyProduct_variantsInputEnvelope = {
    data: Prisma.stock_movementsCreateManyProduct_variantsInput | Prisma.stock_movementsCreateManyProduct_variantsInput[];
    skipDuplicates?: boolean;
};
export type stock_movementsUpsertWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.stock_movementsWhereUniqueInput;
    update: Prisma.XOR<Prisma.stock_movementsUpdateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedUpdateWithoutProduct_variantsInput>;
    create: Prisma.XOR<Prisma.stock_movementsCreateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedCreateWithoutProduct_variantsInput>;
};
export type stock_movementsUpdateWithWhereUniqueWithoutProduct_variantsInput = {
    where: Prisma.stock_movementsWhereUniqueInput;
    data: Prisma.XOR<Prisma.stock_movementsUpdateWithoutProduct_variantsInput, Prisma.stock_movementsUncheckedUpdateWithoutProduct_variantsInput>;
};
export type stock_movementsUpdateManyWithWhereWithoutProduct_variantsInput = {
    where: Prisma.stock_movementsScalarWhereInput;
    data: Prisma.XOR<Prisma.stock_movementsUpdateManyMutationInput, Prisma.stock_movementsUncheckedUpdateManyWithoutProduct_variantsInput>;
};
export type stock_movementsScalarWhereInput = {
    AND?: Prisma.stock_movementsScalarWhereInput | Prisma.stock_movementsScalarWhereInput[];
    OR?: Prisma.stock_movementsScalarWhereInput[];
    NOT?: Prisma.stock_movementsScalarWhereInput | Prisma.stock_movementsScalarWhereInput[];
    movement_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    warehouse_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    variant_id?: Prisma.BigIntFilter<"stock_movements"> | bigint | number;
    quantity_change?: Prisma.IntFilter<"stock_movements"> | number;
    reason?: Prisma.StringFilter<"stock_movements"> | string;
    moved_at?: Prisma.DateTimeFilter<"stock_movements"> | Date | string;
};
export type stock_movementsCreateWithoutWarehousesInput = {
    movement_id?: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
    product_variants: Prisma.product_variantsCreateNestedOneWithoutStock_movementsInput;
};
export type stock_movementsUncheckedCreateWithoutWarehousesInput = {
    movement_id?: bigint | number;
    variant_id: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
};
export type stock_movementsCreateOrConnectWithoutWarehousesInput = {
    where: Prisma.stock_movementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.stock_movementsCreateWithoutWarehousesInput, Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput>;
};
export type stock_movementsCreateManyWarehousesInputEnvelope = {
    data: Prisma.stock_movementsCreateManyWarehousesInput | Prisma.stock_movementsCreateManyWarehousesInput[];
    skipDuplicates?: boolean;
};
export type stock_movementsUpsertWithWhereUniqueWithoutWarehousesInput = {
    where: Prisma.stock_movementsWhereUniqueInput;
    update: Prisma.XOR<Prisma.stock_movementsUpdateWithoutWarehousesInput, Prisma.stock_movementsUncheckedUpdateWithoutWarehousesInput>;
    create: Prisma.XOR<Prisma.stock_movementsCreateWithoutWarehousesInput, Prisma.stock_movementsUncheckedCreateWithoutWarehousesInput>;
};
export type stock_movementsUpdateWithWhereUniqueWithoutWarehousesInput = {
    where: Prisma.stock_movementsWhereUniqueInput;
    data: Prisma.XOR<Prisma.stock_movementsUpdateWithoutWarehousesInput, Prisma.stock_movementsUncheckedUpdateWithoutWarehousesInput>;
};
export type stock_movementsUpdateManyWithWhereWithoutWarehousesInput = {
    where: Prisma.stock_movementsScalarWhereInput;
    data: Prisma.XOR<Prisma.stock_movementsUpdateManyMutationInput, Prisma.stock_movementsUncheckedUpdateManyWithoutWarehousesInput>;
};
export type stock_movementsCreateManyProduct_variantsInput = {
    movement_id?: bigint | number;
    warehouse_id: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
};
export type stock_movementsUpdateWithoutProduct_variantsInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouses?: Prisma.warehousesUpdateOneRequiredWithoutStock_movementsNestedInput;
};
export type stock_movementsUncheckedUpdateWithoutProduct_variantsInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stock_movementsUncheckedUpdateManyWithoutProduct_variantsInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stock_movementsCreateManyWarehousesInput = {
    movement_id?: bigint | number;
    variant_id: bigint | number;
    quantity_change: number;
    reason: string;
    moved_at?: Date | string;
};
export type stock_movementsUpdateWithoutWarehousesInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_variants?: Prisma.product_variantsUpdateOneRequiredWithoutStock_movementsNestedInput;
};
export type stock_movementsUncheckedUpdateWithoutWarehousesInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stock_movementsUncheckedUpdateManyWithoutWarehousesInput = {
    movement_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    variant_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity_change?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    moved_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stock_movementsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    movement_id?: boolean;
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity_change?: boolean;
    reason?: boolean;
    moved_at?: boolean;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stock_movements"]>;
export type stock_movementsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    movement_id?: boolean;
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity_change?: boolean;
    reason?: boolean;
    moved_at?: boolean;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stock_movements"]>;
export type stock_movementsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    movement_id?: boolean;
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity_change?: boolean;
    reason?: boolean;
    moved_at?: boolean;
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stock_movements"]>;
export type stock_movementsSelectScalar = {
    movement_id?: boolean;
    warehouse_id?: boolean;
    variant_id?: boolean;
    quantity_change?: boolean;
    reason?: boolean;
    moved_at?: boolean;
};
export type stock_movementsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"movement_id" | "warehouse_id" | "variant_id" | "quantity_change" | "reason" | "moved_at", ExtArgs["result"]["stock_movements"]>;
export type stock_movementsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type stock_movementsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type stock_movementsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_variants?: boolean | Prisma.product_variantsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type $stock_movementsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "stock_movements";
    objects: {
        product_variants: Prisma.$product_variantsPayload<ExtArgs>;
        warehouses: Prisma.$warehousesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        movement_id: bigint;
        warehouse_id: bigint;
        variant_id: bigint;
        quantity_change: number;
        reason: string;
        moved_at: Date;
    }, ExtArgs["result"]["stock_movements"]>;
    composites: {};
};
export type stock_movementsGetPayload<S extends boolean | null | undefined | stock_movementsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload, S>;
export type stock_movementsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<stock_movementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Stock_movementsCountAggregateInputType | true;
};
export interface stock_movementsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['stock_movements'];
        meta: {
            name: 'stock_movements';
        };
    };
    findUnique<T extends stock_movementsFindUniqueArgs>(args: Prisma.SelectSubset<T, stock_movementsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends stock_movementsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, stock_movementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends stock_movementsFindFirstArgs>(args?: Prisma.SelectSubset<T, stock_movementsFindFirstArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends stock_movementsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, stock_movementsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends stock_movementsFindManyArgs>(args?: Prisma.SelectSubset<T, stock_movementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends stock_movementsCreateArgs>(args: Prisma.SelectSubset<T, stock_movementsCreateArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends stock_movementsCreateManyArgs>(args?: Prisma.SelectSubset<T, stock_movementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends stock_movementsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, stock_movementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends stock_movementsDeleteArgs>(args: Prisma.SelectSubset<T, stock_movementsDeleteArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends stock_movementsUpdateArgs>(args: Prisma.SelectSubset<T, stock_movementsUpdateArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends stock_movementsDeleteManyArgs>(args?: Prisma.SelectSubset<T, stock_movementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends stock_movementsUpdateManyArgs>(args: Prisma.SelectSubset<T, stock_movementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends stock_movementsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, stock_movementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends stock_movementsUpsertArgs>(args: Prisma.SelectSubset<T, stock_movementsUpsertArgs<ExtArgs>>): Prisma.Prisma__stock_movementsClient<runtime.Types.Result.GetResult<Prisma.$stock_movementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends stock_movementsCountArgs>(args?: Prisma.Subset<T, stock_movementsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Stock_movementsCountAggregateOutputType> : number>;
    aggregate<T extends Stock_movementsAggregateArgs>(args: Prisma.Subset<T, Stock_movementsAggregateArgs>): Prisma.PrismaPromise<GetStock_movementsAggregateType<T>>;
    groupBy<T extends stock_movementsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: stock_movementsGroupByArgs['orderBy'];
    } : {
        orderBy?: stock_movementsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, stock_movementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_movementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: stock_movementsFieldRefs;
}
export interface Prisma__stock_movementsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product_variants<T extends Prisma.product_variantsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_variantsDefaultArgs<ExtArgs>>): Prisma.Prisma__product_variantsClient<runtime.Types.Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouses<T extends Prisma.warehousesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warehousesDefaultArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface stock_movementsFieldRefs {
    readonly movement_id: Prisma.FieldRef<"stock_movements", 'BigInt'>;
    readonly warehouse_id: Prisma.FieldRef<"stock_movements", 'BigInt'>;
    readonly variant_id: Prisma.FieldRef<"stock_movements", 'BigInt'>;
    readonly quantity_change: Prisma.FieldRef<"stock_movements", 'Int'>;
    readonly reason: Prisma.FieldRef<"stock_movements", 'String'>;
    readonly moved_at: Prisma.FieldRef<"stock_movements", 'DateTime'>;
}
export type stock_movementsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
    where: Prisma.stock_movementsWhereUniqueInput;
};
export type stock_movementsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
    where: Prisma.stock_movementsWhereUniqueInput;
};
export type stock_movementsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type stock_movementsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type stock_movementsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type stock_movementsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_movementsCreateInput, Prisma.stock_movementsUncheckedCreateInput>;
};
export type stock_movementsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.stock_movementsCreateManyInput | Prisma.stock_movementsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stock_movementsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    data: Prisma.stock_movementsCreateManyInput | Prisma.stock_movementsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.stock_movementsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type stock_movementsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_movementsUpdateInput, Prisma.stock_movementsUncheckedUpdateInput>;
    where: Prisma.stock_movementsWhereUniqueInput;
};
export type stock_movementsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.stock_movementsUpdateManyMutationInput, Prisma.stock_movementsUncheckedUpdateManyInput>;
    where?: Prisma.stock_movementsWhereInput;
    limit?: number;
};
export type stock_movementsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_movementsUpdateManyMutationInput, Prisma.stock_movementsUncheckedUpdateManyInput>;
    where?: Prisma.stock_movementsWhereInput;
    limit?: number;
    include?: Prisma.stock_movementsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type stock_movementsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
    where: Prisma.stock_movementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.stock_movementsCreateInput, Prisma.stock_movementsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.stock_movementsUpdateInput, Prisma.stock_movementsUncheckedUpdateInput>;
};
export type stock_movementsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
    where: Prisma.stock_movementsWhereUniqueInput;
};
export type stock_movementsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_movementsWhereInput;
    limit?: number;
};
export type stock_movementsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_movementsSelect<ExtArgs> | null;
    omit?: Prisma.stock_movementsOmit<ExtArgs> | null;
    include?: Prisma.stock_movementsInclude<ExtArgs> | null;
};
