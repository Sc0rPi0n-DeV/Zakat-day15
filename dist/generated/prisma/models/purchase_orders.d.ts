import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type purchase_ordersModel = runtime.Types.Result.DefaultSelection<Prisma.$purchase_ordersPayload>;
export type AggregatePurchase_orders = {
    _count: Purchase_ordersCountAggregateOutputType | null;
    _avg: Purchase_ordersAvgAggregateOutputType | null;
    _sum: Purchase_ordersSumAggregateOutputType | null;
    _min: Purchase_ordersMinAggregateOutputType | null;
    _max: Purchase_ordersMaxAggregateOutputType | null;
};
export type Purchase_ordersAvgAggregateOutputType = {
    purchase_order_id: number | null;
    supplier_id: number | null;
    warehouse_id: number | null;
};
export type Purchase_ordersSumAggregateOutputType = {
    purchase_order_id: bigint | null;
    supplier_id: bigint | null;
    warehouse_id: bigint | null;
};
export type Purchase_ordersMinAggregateOutputType = {
    purchase_order_id: bigint | null;
    supplier_id: bigint | null;
    warehouse_id: bigint | null;
    status: string | null;
    ordered_at: Date | null;
};
export type Purchase_ordersMaxAggregateOutputType = {
    purchase_order_id: bigint | null;
    supplier_id: bigint | null;
    warehouse_id: bigint | null;
    status: string | null;
    ordered_at: Date | null;
};
export type Purchase_ordersCountAggregateOutputType = {
    purchase_order_id: number;
    supplier_id: number;
    warehouse_id: number;
    status: number;
    ordered_at: number;
    _all: number;
};
export type Purchase_ordersAvgAggregateInputType = {
    purchase_order_id?: true;
    supplier_id?: true;
    warehouse_id?: true;
};
export type Purchase_ordersSumAggregateInputType = {
    purchase_order_id?: true;
    supplier_id?: true;
    warehouse_id?: true;
};
export type Purchase_ordersMinAggregateInputType = {
    purchase_order_id?: true;
    supplier_id?: true;
    warehouse_id?: true;
    status?: true;
    ordered_at?: true;
};
export type Purchase_ordersMaxAggregateInputType = {
    purchase_order_id?: true;
    supplier_id?: true;
    warehouse_id?: true;
    status?: true;
    ordered_at?: true;
};
export type Purchase_ordersCountAggregateInputType = {
    purchase_order_id?: true;
    supplier_id?: true;
    warehouse_id?: true;
    status?: true;
    ordered_at?: true;
    _all?: true;
};
export type Purchase_ordersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_ordersWhereInput;
    orderBy?: Prisma.purchase_ordersOrderByWithRelationInput | Prisma.purchase_ordersOrderByWithRelationInput[];
    cursor?: Prisma.purchase_ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Purchase_ordersCountAggregateInputType;
    _avg?: Purchase_ordersAvgAggregateInputType;
    _sum?: Purchase_ordersSumAggregateInputType;
    _min?: Purchase_ordersMinAggregateInputType;
    _max?: Purchase_ordersMaxAggregateInputType;
};
export type GetPurchase_ordersAggregateType<T extends Purchase_ordersAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase_orders]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase_orders[P]> : Prisma.GetScalarType<T[P], AggregatePurchase_orders[P]>;
};
export type purchase_ordersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_ordersWhereInput;
    orderBy?: Prisma.purchase_ordersOrderByWithAggregationInput | Prisma.purchase_ordersOrderByWithAggregationInput[];
    by: Prisma.Purchase_ordersScalarFieldEnum[] | Prisma.Purchase_ordersScalarFieldEnum;
    having?: Prisma.purchase_ordersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Purchase_ordersCountAggregateInputType | true;
    _avg?: Purchase_ordersAvgAggregateInputType;
    _sum?: Purchase_ordersSumAggregateInputType;
    _min?: Purchase_ordersMinAggregateInputType;
    _max?: Purchase_ordersMaxAggregateInputType;
};
export type Purchase_ordersGroupByOutputType = {
    purchase_order_id: bigint;
    supplier_id: bigint;
    warehouse_id: bigint;
    status: string;
    ordered_at: Date;
    _count: Purchase_ordersCountAggregateOutputType | null;
    _avg: Purchase_ordersAvgAggregateOutputType | null;
    _sum: Purchase_ordersSumAggregateOutputType | null;
    _min: Purchase_ordersMinAggregateOutputType | null;
    _max: Purchase_ordersMaxAggregateOutputType | null;
};
export type GetPurchase_ordersGroupByPayload<T extends purchase_ordersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Purchase_ordersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Purchase_ordersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Purchase_ordersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Purchase_ordersGroupByOutputType[P]>;
}>>;
export type purchase_ordersWhereInput = {
    AND?: Prisma.purchase_ordersWhereInput | Prisma.purchase_ordersWhereInput[];
    OR?: Prisma.purchase_ordersWhereInput[];
    NOT?: Prisma.purchase_ordersWhereInput | Prisma.purchase_ordersWhereInput[];
    purchase_order_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    supplier_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    warehouse_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    status?: Prisma.StringFilter<"purchase_orders"> | string;
    ordered_at?: Prisma.DateTimeFilter<"purchase_orders"> | Date | string;
    purchase_order_items?: Prisma.Purchase_order_itemsListRelationFilter;
    suppliers?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.suppliersWhereInput>;
    warehouses?: Prisma.XOR<Prisma.WarehousesScalarRelationFilter, Prisma.warehousesWhereInput>;
};
export type purchase_ordersOrderByWithRelationInput = {
    purchase_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
    purchase_order_items?: Prisma.purchase_order_itemsOrderByRelationAggregateInput;
    suppliers?: Prisma.suppliersOrderByWithRelationInput;
    warehouses?: Prisma.warehousesOrderByWithRelationInput;
};
export type purchase_ordersWhereUniqueInput = Prisma.AtLeast<{
    purchase_order_id?: bigint | number;
    AND?: Prisma.purchase_ordersWhereInput | Prisma.purchase_ordersWhereInput[];
    OR?: Prisma.purchase_ordersWhereInput[];
    NOT?: Prisma.purchase_ordersWhereInput | Prisma.purchase_ordersWhereInput[];
    supplier_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    warehouse_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    status?: Prisma.StringFilter<"purchase_orders"> | string;
    ordered_at?: Prisma.DateTimeFilter<"purchase_orders"> | Date | string;
    purchase_order_items?: Prisma.Purchase_order_itemsListRelationFilter;
    suppliers?: Prisma.XOR<Prisma.SuppliersScalarRelationFilter, Prisma.suppliersWhereInput>;
    warehouses?: Prisma.XOR<Prisma.WarehousesScalarRelationFilter, Prisma.warehousesWhereInput>;
}, "purchase_order_id">;
export type purchase_ordersOrderByWithAggregationInput = {
    purchase_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
    _count?: Prisma.purchase_ordersCountOrderByAggregateInput;
    _avg?: Prisma.purchase_ordersAvgOrderByAggregateInput;
    _max?: Prisma.purchase_ordersMaxOrderByAggregateInput;
    _min?: Prisma.purchase_ordersMinOrderByAggregateInput;
    _sum?: Prisma.purchase_ordersSumOrderByAggregateInput;
};
export type purchase_ordersScalarWhereWithAggregatesInput = {
    AND?: Prisma.purchase_ordersScalarWhereWithAggregatesInput | Prisma.purchase_ordersScalarWhereWithAggregatesInput[];
    OR?: Prisma.purchase_ordersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.purchase_ordersScalarWhereWithAggregatesInput | Prisma.purchase_ordersScalarWhereWithAggregatesInput[];
    purchase_order_id?: Prisma.BigIntWithAggregatesFilter<"purchase_orders"> | bigint | number;
    supplier_id?: Prisma.BigIntWithAggregatesFilter<"purchase_orders"> | bigint | number;
    warehouse_id?: Prisma.BigIntWithAggregatesFilter<"purchase_orders"> | bigint | number;
    status?: Prisma.StringWithAggregatesFilter<"purchase_orders"> | string;
    ordered_at?: Prisma.DateTimeWithAggregatesFilter<"purchase_orders"> | Date | string;
};
export type purchase_ordersCreateInput = {
    purchase_order_id?: bigint | number;
    status?: string;
    ordered_at?: Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutPurchase_ordersInput;
    suppliers: Prisma.suppliersCreateNestedOneWithoutPurchase_ordersInput;
    warehouses: Prisma.warehousesCreateNestedOneWithoutPurchase_ordersInput;
};
export type purchase_ordersUncheckedCreateInput = {
    purchase_order_id?: bigint | number;
    supplier_id: bigint | number;
    warehouse_id: bigint | number;
    status?: string;
    ordered_at?: Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutPurchase_ordersInput;
};
export type purchase_ordersUpdateInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutPurchase_ordersNestedInput;
    suppliers?: Prisma.suppliersUpdateOneRequiredWithoutPurchase_ordersNestedInput;
    warehouses?: Prisma.warehousesUpdateOneRequiredWithoutPurchase_ordersNestedInput;
};
export type purchase_ordersUncheckedUpdateInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutPurchase_ordersNestedInput;
};
export type purchase_ordersCreateManyInput = {
    purchase_order_id?: bigint | number;
    supplier_id: bigint | number;
    warehouse_id: bigint | number;
    status?: string;
    ordered_at?: Date | string;
};
export type purchase_ordersUpdateManyMutationInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type purchase_ordersUncheckedUpdateManyInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Purchase_ordersScalarRelationFilter = {
    is?: Prisma.purchase_ordersWhereInput;
    isNot?: Prisma.purchase_ordersWhereInput;
};
export type purchase_ordersCountOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
};
export type purchase_ordersAvgOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
};
export type purchase_ordersMaxOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
};
export type purchase_ordersMinOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
};
export type purchase_ordersSumOrderByAggregateInput = {
    purchase_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    warehouse_id?: Prisma.SortOrder;
};
export type Purchase_ordersListRelationFilter = {
    every?: Prisma.purchase_ordersWhereInput;
    some?: Prisma.purchase_ordersWhereInput;
    none?: Prisma.purchase_ordersWhereInput;
};
export type purchase_ordersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type purchase_ordersCreateNestedOneWithoutPurchase_order_itemsInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutPurchase_order_itemsInput, Prisma.purchase_ordersUncheckedCreateWithoutPurchase_order_itemsInput>;
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutPurchase_order_itemsInput;
    connect?: Prisma.purchase_ordersWhereUniqueInput;
};
export type purchase_ordersUpdateOneRequiredWithoutPurchase_order_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutPurchase_order_itemsInput, Prisma.purchase_ordersUncheckedCreateWithoutPurchase_order_itemsInput>;
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutPurchase_order_itemsInput;
    upsert?: Prisma.purchase_ordersUpsertWithoutPurchase_order_itemsInput;
    connect?: Prisma.purchase_ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.purchase_ordersUpdateToOneWithWhereWithoutPurchase_order_itemsInput, Prisma.purchase_ordersUpdateWithoutPurchase_order_itemsInput>, Prisma.purchase_ordersUncheckedUpdateWithoutPurchase_order_itemsInput>;
};
export type purchase_ordersCreateNestedManyWithoutSuppliersInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput> | Prisma.purchase_ordersCreateWithoutSuppliersInput[] | Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput | Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput[];
    createMany?: Prisma.purchase_ordersCreateManySuppliersInputEnvelope;
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
};
export type purchase_ordersUncheckedCreateNestedManyWithoutSuppliersInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput> | Prisma.purchase_ordersCreateWithoutSuppliersInput[] | Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput | Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput[];
    createMany?: Prisma.purchase_ordersCreateManySuppliersInputEnvelope;
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
};
export type purchase_ordersUpdateManyWithoutSuppliersNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput> | Prisma.purchase_ordersCreateWithoutSuppliersInput[] | Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput | Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput[];
    upsert?: Prisma.purchase_ordersUpsertWithWhereUniqueWithoutSuppliersInput | Prisma.purchase_ordersUpsertWithWhereUniqueWithoutSuppliersInput[];
    createMany?: Prisma.purchase_ordersCreateManySuppliersInputEnvelope;
    set?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    disconnect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    delete?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    update?: Prisma.purchase_ordersUpdateWithWhereUniqueWithoutSuppliersInput | Prisma.purchase_ordersUpdateWithWhereUniqueWithoutSuppliersInput[];
    updateMany?: Prisma.purchase_ordersUpdateManyWithWhereWithoutSuppliersInput | Prisma.purchase_ordersUpdateManyWithWhereWithoutSuppliersInput[];
    deleteMany?: Prisma.purchase_ordersScalarWhereInput | Prisma.purchase_ordersScalarWhereInput[];
};
export type purchase_ordersUncheckedUpdateManyWithoutSuppliersNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput> | Prisma.purchase_ordersCreateWithoutSuppliersInput[] | Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput | Prisma.purchase_ordersCreateOrConnectWithoutSuppliersInput[];
    upsert?: Prisma.purchase_ordersUpsertWithWhereUniqueWithoutSuppliersInput | Prisma.purchase_ordersUpsertWithWhereUniqueWithoutSuppliersInput[];
    createMany?: Prisma.purchase_ordersCreateManySuppliersInputEnvelope;
    set?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    disconnect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    delete?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    update?: Prisma.purchase_ordersUpdateWithWhereUniqueWithoutSuppliersInput | Prisma.purchase_ordersUpdateWithWhereUniqueWithoutSuppliersInput[];
    updateMany?: Prisma.purchase_ordersUpdateManyWithWhereWithoutSuppliersInput | Prisma.purchase_ordersUpdateManyWithWhereWithoutSuppliersInput[];
    deleteMany?: Prisma.purchase_ordersScalarWhereInput | Prisma.purchase_ordersScalarWhereInput[];
};
export type purchase_ordersCreateNestedManyWithoutWarehousesInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput> | Prisma.purchase_ordersCreateWithoutWarehousesInput[] | Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput | Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput[];
    createMany?: Prisma.purchase_ordersCreateManyWarehousesInputEnvelope;
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
};
export type purchase_ordersUncheckedCreateNestedManyWithoutWarehousesInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput> | Prisma.purchase_ordersCreateWithoutWarehousesInput[] | Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput | Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput[];
    createMany?: Prisma.purchase_ordersCreateManyWarehousesInputEnvelope;
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
};
export type purchase_ordersUpdateManyWithoutWarehousesNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput> | Prisma.purchase_ordersCreateWithoutWarehousesInput[] | Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput | Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput[];
    upsert?: Prisma.purchase_ordersUpsertWithWhereUniqueWithoutWarehousesInput | Prisma.purchase_ordersUpsertWithWhereUniqueWithoutWarehousesInput[];
    createMany?: Prisma.purchase_ordersCreateManyWarehousesInputEnvelope;
    set?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    disconnect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    delete?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    update?: Prisma.purchase_ordersUpdateWithWhereUniqueWithoutWarehousesInput | Prisma.purchase_ordersUpdateWithWhereUniqueWithoutWarehousesInput[];
    updateMany?: Prisma.purchase_ordersUpdateManyWithWhereWithoutWarehousesInput | Prisma.purchase_ordersUpdateManyWithWhereWithoutWarehousesInput[];
    deleteMany?: Prisma.purchase_ordersScalarWhereInput | Prisma.purchase_ordersScalarWhereInput[];
};
export type purchase_ordersUncheckedUpdateManyWithoutWarehousesNestedInput = {
    create?: Prisma.XOR<Prisma.purchase_ordersCreateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput> | Prisma.purchase_ordersCreateWithoutWarehousesInput[] | Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput[];
    connectOrCreate?: Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput | Prisma.purchase_ordersCreateOrConnectWithoutWarehousesInput[];
    upsert?: Prisma.purchase_ordersUpsertWithWhereUniqueWithoutWarehousesInput | Prisma.purchase_ordersUpsertWithWhereUniqueWithoutWarehousesInput[];
    createMany?: Prisma.purchase_ordersCreateManyWarehousesInputEnvelope;
    set?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    disconnect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    delete?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    connect?: Prisma.purchase_ordersWhereUniqueInput | Prisma.purchase_ordersWhereUniqueInput[];
    update?: Prisma.purchase_ordersUpdateWithWhereUniqueWithoutWarehousesInput | Prisma.purchase_ordersUpdateWithWhereUniqueWithoutWarehousesInput[];
    updateMany?: Prisma.purchase_ordersUpdateManyWithWhereWithoutWarehousesInput | Prisma.purchase_ordersUpdateManyWithWhereWithoutWarehousesInput[];
    deleteMany?: Prisma.purchase_ordersScalarWhereInput | Prisma.purchase_ordersScalarWhereInput[];
};
export type purchase_ordersCreateWithoutPurchase_order_itemsInput = {
    purchase_order_id?: bigint | number;
    status?: string;
    ordered_at?: Date | string;
    suppliers: Prisma.suppliersCreateNestedOneWithoutPurchase_ordersInput;
    warehouses: Prisma.warehousesCreateNestedOneWithoutPurchase_ordersInput;
};
export type purchase_ordersUncheckedCreateWithoutPurchase_order_itemsInput = {
    purchase_order_id?: bigint | number;
    supplier_id: bigint | number;
    warehouse_id: bigint | number;
    status?: string;
    ordered_at?: Date | string;
};
export type purchase_ordersCreateOrConnectWithoutPurchase_order_itemsInput = {
    where: Prisma.purchase_ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.purchase_ordersCreateWithoutPurchase_order_itemsInput, Prisma.purchase_ordersUncheckedCreateWithoutPurchase_order_itemsInput>;
};
export type purchase_ordersUpsertWithoutPurchase_order_itemsInput = {
    update: Prisma.XOR<Prisma.purchase_ordersUpdateWithoutPurchase_order_itemsInput, Prisma.purchase_ordersUncheckedUpdateWithoutPurchase_order_itemsInput>;
    create: Prisma.XOR<Prisma.purchase_ordersCreateWithoutPurchase_order_itemsInput, Prisma.purchase_ordersUncheckedCreateWithoutPurchase_order_itemsInput>;
    where?: Prisma.purchase_ordersWhereInput;
};
export type purchase_ordersUpdateToOneWithWhereWithoutPurchase_order_itemsInput = {
    where?: Prisma.purchase_ordersWhereInput;
    data: Prisma.XOR<Prisma.purchase_ordersUpdateWithoutPurchase_order_itemsInput, Prisma.purchase_ordersUncheckedUpdateWithoutPurchase_order_itemsInput>;
};
export type purchase_ordersUpdateWithoutPurchase_order_itemsInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    suppliers?: Prisma.suppliersUpdateOneRequiredWithoutPurchase_ordersNestedInput;
    warehouses?: Prisma.warehousesUpdateOneRequiredWithoutPurchase_ordersNestedInput;
};
export type purchase_ordersUncheckedUpdateWithoutPurchase_order_itemsInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type purchase_ordersCreateWithoutSuppliersInput = {
    purchase_order_id?: bigint | number;
    status?: string;
    ordered_at?: Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutPurchase_ordersInput;
    warehouses: Prisma.warehousesCreateNestedOneWithoutPurchase_ordersInput;
};
export type purchase_ordersUncheckedCreateWithoutSuppliersInput = {
    purchase_order_id?: bigint | number;
    warehouse_id: bigint | number;
    status?: string;
    ordered_at?: Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutPurchase_ordersInput;
};
export type purchase_ordersCreateOrConnectWithoutSuppliersInput = {
    where: Prisma.purchase_ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.purchase_ordersCreateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput>;
};
export type purchase_ordersCreateManySuppliersInputEnvelope = {
    data: Prisma.purchase_ordersCreateManySuppliersInput | Prisma.purchase_ordersCreateManySuppliersInput[];
    skipDuplicates?: boolean;
};
export type purchase_ordersUpsertWithWhereUniqueWithoutSuppliersInput = {
    where: Prisma.purchase_ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.purchase_ordersUpdateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedUpdateWithoutSuppliersInput>;
    create: Prisma.XOR<Prisma.purchase_ordersCreateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedCreateWithoutSuppliersInput>;
};
export type purchase_ordersUpdateWithWhereUniqueWithoutSuppliersInput = {
    where: Prisma.purchase_ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.purchase_ordersUpdateWithoutSuppliersInput, Prisma.purchase_ordersUncheckedUpdateWithoutSuppliersInput>;
};
export type purchase_ordersUpdateManyWithWhereWithoutSuppliersInput = {
    where: Prisma.purchase_ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.purchase_ordersUpdateManyMutationInput, Prisma.purchase_ordersUncheckedUpdateManyWithoutSuppliersInput>;
};
export type purchase_ordersScalarWhereInput = {
    AND?: Prisma.purchase_ordersScalarWhereInput | Prisma.purchase_ordersScalarWhereInput[];
    OR?: Prisma.purchase_ordersScalarWhereInput[];
    NOT?: Prisma.purchase_ordersScalarWhereInput | Prisma.purchase_ordersScalarWhereInput[];
    purchase_order_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    supplier_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    warehouse_id?: Prisma.BigIntFilter<"purchase_orders"> | bigint | number;
    status?: Prisma.StringFilter<"purchase_orders"> | string;
    ordered_at?: Prisma.DateTimeFilter<"purchase_orders"> | Date | string;
};
export type purchase_ordersCreateWithoutWarehousesInput = {
    purchase_order_id?: bigint | number;
    status?: string;
    ordered_at?: Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsCreateNestedManyWithoutPurchase_ordersInput;
    suppliers: Prisma.suppliersCreateNestedOneWithoutPurchase_ordersInput;
};
export type purchase_ordersUncheckedCreateWithoutWarehousesInput = {
    purchase_order_id?: bigint | number;
    supplier_id: bigint | number;
    status?: string;
    ordered_at?: Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedCreateNestedManyWithoutPurchase_ordersInput;
};
export type purchase_ordersCreateOrConnectWithoutWarehousesInput = {
    where: Prisma.purchase_ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.purchase_ordersCreateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput>;
};
export type purchase_ordersCreateManyWarehousesInputEnvelope = {
    data: Prisma.purchase_ordersCreateManyWarehousesInput | Prisma.purchase_ordersCreateManyWarehousesInput[];
    skipDuplicates?: boolean;
};
export type purchase_ordersUpsertWithWhereUniqueWithoutWarehousesInput = {
    where: Prisma.purchase_ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.purchase_ordersUpdateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedUpdateWithoutWarehousesInput>;
    create: Prisma.XOR<Prisma.purchase_ordersCreateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedCreateWithoutWarehousesInput>;
};
export type purchase_ordersUpdateWithWhereUniqueWithoutWarehousesInput = {
    where: Prisma.purchase_ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.purchase_ordersUpdateWithoutWarehousesInput, Prisma.purchase_ordersUncheckedUpdateWithoutWarehousesInput>;
};
export type purchase_ordersUpdateManyWithWhereWithoutWarehousesInput = {
    where: Prisma.purchase_ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.purchase_ordersUpdateManyMutationInput, Prisma.purchase_ordersUncheckedUpdateManyWithoutWarehousesInput>;
};
export type purchase_ordersCreateManySuppliersInput = {
    purchase_order_id?: bigint | number;
    warehouse_id: bigint | number;
    status?: string;
    ordered_at?: Date | string;
};
export type purchase_ordersUpdateWithoutSuppliersInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutPurchase_ordersNestedInput;
    warehouses?: Prisma.warehousesUpdateOneRequiredWithoutPurchase_ordersNestedInput;
};
export type purchase_ordersUncheckedUpdateWithoutSuppliersInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutPurchase_ordersNestedInput;
};
export type purchase_ordersUncheckedUpdateManyWithoutSuppliersInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    warehouse_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type purchase_ordersCreateManyWarehousesInput = {
    purchase_order_id?: bigint | number;
    supplier_id: bigint | number;
    status?: string;
    ordered_at?: Date | string;
};
export type purchase_ordersUpdateWithoutWarehousesInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUpdateManyWithoutPurchase_ordersNestedInput;
    suppliers?: Prisma.suppliersUpdateOneRequiredWithoutPurchase_ordersNestedInput;
};
export type purchase_ordersUncheckedUpdateWithoutWarehousesInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_order_items?: Prisma.purchase_order_itemsUncheckedUpdateManyWithoutPurchase_ordersNestedInput;
};
export type purchase_ordersUncheckedUpdateManyWithoutWarehousesInput = {
    purchase_order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Purchase_ordersCountOutputType = {
    purchase_order_items: number;
};
export type Purchase_ordersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_order_items?: boolean | Purchase_ordersCountOutputTypeCountPurchase_order_itemsArgs;
};
export type Purchase_ordersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Purchase_ordersCountOutputTypeSelect<ExtArgs> | null;
};
export type Purchase_ordersCountOutputTypeCountPurchase_order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_order_itemsWhereInput;
};
export type purchase_ordersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchase_order_id?: boolean;
    supplier_id?: boolean;
    warehouse_id?: boolean;
    status?: boolean;
    ordered_at?: boolean;
    purchase_order_items?: boolean | Prisma.purchase_orders$purchase_order_itemsArgs<ExtArgs>;
    suppliers?: boolean | Prisma.suppliersDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Purchase_ordersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_orders"]>;
export type purchase_ordersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchase_order_id?: boolean;
    supplier_id?: boolean;
    warehouse_id?: boolean;
    status?: boolean;
    ordered_at?: boolean;
    suppliers?: boolean | Prisma.suppliersDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_orders"]>;
export type purchase_ordersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    purchase_order_id?: boolean;
    supplier_id?: boolean;
    warehouse_id?: boolean;
    status?: boolean;
    ordered_at?: boolean;
    suppliers?: boolean | Prisma.suppliersDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase_orders"]>;
export type purchase_ordersSelectScalar = {
    purchase_order_id?: boolean;
    supplier_id?: boolean;
    warehouse_id?: boolean;
    status?: boolean;
    ordered_at?: boolean;
};
export type purchase_ordersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"purchase_order_id" | "supplier_id" | "warehouse_id" | "status" | "ordered_at", ExtArgs["result"]["purchase_orders"]>;
export type purchase_ordersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_order_items?: boolean | Prisma.purchase_orders$purchase_order_itemsArgs<ExtArgs>;
    suppliers?: boolean | Prisma.suppliersDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Purchase_ordersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type purchase_ordersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    suppliers?: boolean | Prisma.suppliersDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type purchase_ordersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    suppliers?: boolean | Prisma.suppliersDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.warehousesDefaultArgs<ExtArgs>;
};
export type $purchase_ordersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "purchase_orders";
    objects: {
        purchase_order_items: Prisma.$purchase_order_itemsPayload<ExtArgs>[];
        suppliers: Prisma.$suppliersPayload<ExtArgs>;
        warehouses: Prisma.$warehousesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        purchase_order_id: bigint;
        supplier_id: bigint;
        warehouse_id: bigint;
        status: string;
        ordered_at: Date;
    }, ExtArgs["result"]["purchase_orders"]>;
    composites: {};
};
export type purchase_ordersGetPayload<S extends boolean | null | undefined | purchase_ordersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload, S>;
export type purchase_ordersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<purchase_ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Purchase_ordersCountAggregateInputType | true;
};
export interface purchase_ordersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['purchase_orders'];
        meta: {
            name: 'purchase_orders';
        };
    };
    findUnique<T extends purchase_ordersFindUniqueArgs>(args: Prisma.SelectSubset<T, purchase_ordersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends purchase_ordersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, purchase_ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends purchase_ordersFindFirstArgs>(args?: Prisma.SelectSubset<T, purchase_ordersFindFirstArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends purchase_ordersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, purchase_ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends purchase_ordersFindManyArgs>(args?: Prisma.SelectSubset<T, purchase_ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends purchase_ordersCreateArgs>(args: Prisma.SelectSubset<T, purchase_ordersCreateArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends purchase_ordersCreateManyArgs>(args?: Prisma.SelectSubset<T, purchase_ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends purchase_ordersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, purchase_ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends purchase_ordersDeleteArgs>(args: Prisma.SelectSubset<T, purchase_ordersDeleteArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends purchase_ordersUpdateArgs>(args: Prisma.SelectSubset<T, purchase_ordersUpdateArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends purchase_ordersDeleteManyArgs>(args?: Prisma.SelectSubset<T, purchase_ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends purchase_ordersUpdateManyArgs>(args: Prisma.SelectSubset<T, purchase_ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends purchase_ordersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, purchase_ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends purchase_ordersUpsertArgs>(args: Prisma.SelectSubset<T, purchase_ordersUpsertArgs<ExtArgs>>): Prisma.Prisma__purchase_ordersClient<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends purchase_ordersCountArgs>(args?: Prisma.Subset<T, purchase_ordersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Purchase_ordersCountAggregateOutputType> : number>;
    aggregate<T extends Purchase_ordersAggregateArgs>(args: Prisma.Subset<T, Purchase_ordersAggregateArgs>): Prisma.PrismaPromise<GetPurchase_ordersAggregateType<T>>;
    groupBy<T extends purchase_ordersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: purchase_ordersGroupByArgs['orderBy'];
    } : {
        orderBy?: purchase_ordersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, purchase_ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchase_ordersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: purchase_ordersFieldRefs;
}
export interface Prisma__purchase_ordersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchase_order_items<T extends Prisma.purchase_orders$purchase_order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.purchase_orders$purchase_order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    suppliers<T extends Prisma.suppliersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.suppliersDefaultArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouses<T extends Prisma.warehousesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warehousesDefaultArgs<ExtArgs>>): Prisma.Prisma__warehousesClient<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface purchase_ordersFieldRefs {
    readonly purchase_order_id: Prisma.FieldRef<"purchase_orders", 'BigInt'>;
    readonly supplier_id: Prisma.FieldRef<"purchase_orders", 'BigInt'>;
    readonly warehouse_id: Prisma.FieldRef<"purchase_orders", 'BigInt'>;
    readonly status: Prisma.FieldRef<"purchase_orders", 'String'>;
    readonly ordered_at: Prisma.FieldRef<"purchase_orders", 'DateTime'>;
}
export type purchase_ordersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
    where: Prisma.purchase_ordersWhereUniqueInput;
};
export type purchase_ordersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
    where: Prisma.purchase_ordersWhereUniqueInput;
};
export type purchase_ordersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type purchase_ordersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type purchase_ordersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type purchase_ordersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.purchase_ordersCreateInput, Prisma.purchase_ordersUncheckedCreateInput>;
};
export type purchase_ordersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.purchase_ordersCreateManyInput | Prisma.purchase_ordersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type purchase_ordersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    data: Prisma.purchase_ordersCreateManyInput | Prisma.purchase_ordersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.purchase_ordersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type purchase_ordersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.purchase_ordersUpdateInput, Prisma.purchase_ordersUncheckedUpdateInput>;
    where: Prisma.purchase_ordersWhereUniqueInput;
};
export type purchase_ordersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.purchase_ordersUpdateManyMutationInput, Prisma.purchase_ordersUncheckedUpdateManyInput>;
    where?: Prisma.purchase_ordersWhereInput;
    limit?: number;
};
export type purchase_ordersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.purchase_ordersUpdateManyMutationInput, Prisma.purchase_ordersUncheckedUpdateManyInput>;
    where?: Prisma.purchase_ordersWhereInput;
    limit?: number;
    include?: Prisma.purchase_ordersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type purchase_ordersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
    where: Prisma.purchase_ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.purchase_ordersCreateInput, Prisma.purchase_ordersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.purchase_ordersUpdateInput, Prisma.purchase_ordersUncheckedUpdateInput>;
};
export type purchase_ordersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
    where: Prisma.purchase_ordersWhereUniqueInput;
};
export type purchase_ordersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_ordersWhereInput;
    limit?: number;
};
export type purchase_orders$purchase_order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type purchase_ordersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.purchase_ordersSelect<ExtArgs> | null;
    omit?: Prisma.purchase_ordersOmit<ExtArgs> | null;
    include?: Prisma.purchase_ordersInclude<ExtArgs> | null;
};
