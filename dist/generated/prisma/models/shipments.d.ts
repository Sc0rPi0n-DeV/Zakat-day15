import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type shipmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$shipmentsPayload>;
export type AggregateShipments = {
    _count: ShipmentsCountAggregateOutputType | null;
    _avg: ShipmentsAvgAggregateOutputType | null;
    _sum: ShipmentsSumAggregateOutputType | null;
    _min: ShipmentsMinAggregateOutputType | null;
    _max: ShipmentsMaxAggregateOutputType | null;
};
export type ShipmentsAvgAggregateOutputType = {
    shipment_id: number | null;
    order_id: number | null;
    carrier_id: number | null;
};
export type ShipmentsSumAggregateOutputType = {
    shipment_id: bigint | null;
    order_id: bigint | null;
    carrier_id: bigint | null;
};
export type ShipmentsMinAggregateOutputType = {
    shipment_id: bigint | null;
    order_id: bigint | null;
    carrier_id: bigint | null;
    tracking_number: string | null;
    status: string | null;
    shipped_at: Date | null;
    delivered_at: Date | null;
};
export type ShipmentsMaxAggregateOutputType = {
    shipment_id: bigint | null;
    order_id: bigint | null;
    carrier_id: bigint | null;
    tracking_number: string | null;
    status: string | null;
    shipped_at: Date | null;
    delivered_at: Date | null;
};
export type ShipmentsCountAggregateOutputType = {
    shipment_id: number;
    order_id: number;
    carrier_id: number;
    tracking_number: number;
    status: number;
    shipped_at: number;
    delivered_at: number;
    _all: number;
};
export type ShipmentsAvgAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    carrier_id?: true;
};
export type ShipmentsSumAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    carrier_id?: true;
};
export type ShipmentsMinAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    carrier_id?: true;
    tracking_number?: true;
    status?: true;
    shipped_at?: true;
    delivered_at?: true;
};
export type ShipmentsMaxAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    carrier_id?: true;
    tracking_number?: true;
    status?: true;
    shipped_at?: true;
    delivered_at?: true;
};
export type ShipmentsCountAggregateInputType = {
    shipment_id?: true;
    order_id?: true;
    carrier_id?: true;
    tracking_number?: true;
    status?: true;
    shipped_at?: true;
    delivered_at?: true;
    _all?: true;
};
export type ShipmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShipmentsCountAggregateInputType;
    _avg?: ShipmentsAvgAggregateInputType;
    _sum?: ShipmentsSumAggregateInputType;
    _min?: ShipmentsMinAggregateInputType;
    _max?: ShipmentsMaxAggregateInputType;
};
export type GetShipmentsAggregateType<T extends ShipmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateShipments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipments[P]> : Prisma.GetScalarType<T[P], AggregateShipments[P]>;
};
export type shipmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithAggregationInput | Prisma.shipmentsOrderByWithAggregationInput[];
    by: Prisma.ShipmentsScalarFieldEnum[] | Prisma.ShipmentsScalarFieldEnum;
    having?: Prisma.shipmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShipmentsCountAggregateInputType | true;
    _avg?: ShipmentsAvgAggregateInputType;
    _sum?: ShipmentsSumAggregateInputType;
    _min?: ShipmentsMinAggregateInputType;
    _max?: ShipmentsMaxAggregateInputType;
};
export type ShipmentsGroupByOutputType = {
    shipment_id: bigint;
    order_id: bigint;
    carrier_id: bigint | null;
    tracking_number: string | null;
    status: string;
    shipped_at: Date | null;
    delivered_at: Date | null;
    _count: ShipmentsCountAggregateOutputType | null;
    _avg: ShipmentsAvgAggregateOutputType | null;
    _sum: ShipmentsSumAggregateOutputType | null;
    _min: ShipmentsMinAggregateOutputType | null;
    _max: ShipmentsMaxAggregateOutputType | null;
};
export type GetShipmentsGroupByPayload<T extends shipmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShipmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShipmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShipmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShipmentsGroupByOutputType[P]>;
}>>;
export type shipmentsWhereInput = {
    AND?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    OR?: Prisma.shipmentsWhereInput[];
    NOT?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    shipment_id?: Prisma.BigIntFilter<"shipments"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"shipments"> | bigint | number;
    carrier_id?: Prisma.BigIntNullableFilter<"shipments"> | bigint | number | null;
    tracking_number?: Prisma.StringNullableFilter<"shipments"> | string | null;
    status?: Prisma.StringFilter<"shipments"> | string;
    shipped_at?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
    shipment_events?: Prisma.Shipment_eventsListRelationFilter;
    carriers?: Prisma.XOR<Prisma.CarriersNullableScalarRelationFilter, Prisma.carriersWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
};
export type shipmentsOrderByWithRelationInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tracking_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipped_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    shipment_events?: Prisma.shipment_eventsOrderByRelationAggregateInput;
    carriers?: Prisma.carriersOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type shipmentsWhereUniqueInput = Prisma.AtLeast<{
    shipment_id?: bigint | number;
    tracking_number?: string;
    AND?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    OR?: Prisma.shipmentsWhereInput[];
    NOT?: Prisma.shipmentsWhereInput | Prisma.shipmentsWhereInput[];
    order_id?: Prisma.BigIntFilter<"shipments"> | bigint | number;
    carrier_id?: Prisma.BigIntNullableFilter<"shipments"> | bigint | number | null;
    status?: Prisma.StringFilter<"shipments"> | string;
    shipped_at?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
    shipment_events?: Prisma.Shipment_eventsListRelationFilter;
    carriers?: Prisma.XOR<Prisma.CarriersNullableScalarRelationFilter, Prisma.carriersWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
}, "shipment_id" | "tracking_number">;
export type shipmentsOrderByWithAggregationInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tracking_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipped_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.shipmentsCountOrderByAggregateInput;
    _avg?: Prisma.shipmentsAvgOrderByAggregateInput;
    _max?: Prisma.shipmentsMaxOrderByAggregateInput;
    _min?: Prisma.shipmentsMinOrderByAggregateInput;
    _sum?: Prisma.shipmentsSumOrderByAggregateInput;
};
export type shipmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.shipmentsScalarWhereWithAggregatesInput | Prisma.shipmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.shipmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.shipmentsScalarWhereWithAggregatesInput | Prisma.shipmentsScalarWhereWithAggregatesInput[];
    shipment_id?: Prisma.BigIntWithAggregatesFilter<"shipments"> | bigint | number;
    order_id?: Prisma.BigIntWithAggregatesFilter<"shipments"> | bigint | number;
    carrier_id?: Prisma.BigIntNullableWithAggregatesFilter<"shipments"> | bigint | number | null;
    tracking_number?: Prisma.StringNullableWithAggregatesFilter<"shipments"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"shipments"> | string;
    shipped_at?: Prisma.DateTimeNullableWithAggregatesFilter<"shipments"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableWithAggregatesFilter<"shipments"> | Date | string | null;
};
export type shipmentsCreateInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
    shipment_events?: Prisma.shipment_eventsCreateNestedManyWithoutShipmentsInput;
    carriers?: Prisma.carriersCreateNestedOneWithoutShipmentsInput;
    orders: Prisma.ordersCreateNestedOneWithoutShipmentsInput;
};
export type shipmentsUncheckedCreateInput = {
    shipment_id?: bigint | number;
    order_id: bigint | number;
    carrier_id?: bigint | number | null;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
    shipment_events?: Prisma.shipment_eventsUncheckedCreateNestedManyWithoutShipmentsInput;
};
export type shipmentsUpdateInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipment_events?: Prisma.shipment_eventsUpdateManyWithoutShipmentsNestedInput;
    carriers?: Prisma.carriersUpdateOneWithoutShipmentsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutShipmentsNestedInput;
};
export type shipmentsUncheckedUpdateInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipment_events?: Prisma.shipment_eventsUncheckedUpdateManyWithoutShipmentsNestedInput;
};
export type shipmentsCreateManyInput = {
    shipment_id?: bigint | number;
    order_id: bigint | number;
    carrier_id?: bigint | number | null;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type shipmentsUpdateManyMutationInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsUncheckedUpdateManyInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShipmentsListRelationFilter = {
    every?: Prisma.shipmentsWhereInput;
    some?: Prisma.shipmentsWhereInput;
    none?: Prisma.shipmentsWhereInput;
};
export type shipmentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShipmentsScalarRelationFilter = {
    is?: Prisma.shipmentsWhereInput;
    isNot?: Prisma.shipmentsWhereInput;
};
export type shipmentsCountOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    tracking_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipped_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
};
export type shipmentsAvgOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
};
export type shipmentsMaxOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    tracking_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipped_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
};
export type shipmentsMinOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    tracking_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipped_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
};
export type shipmentsSumOrderByAggregateInput = {
    shipment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
};
export type shipmentsCreateNestedManyWithoutCarriersInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutCarriersInput, Prisma.shipmentsUncheckedCreateWithoutCarriersInput> | Prisma.shipmentsCreateWithoutCarriersInput[] | Prisma.shipmentsUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutCarriersInput | Prisma.shipmentsCreateOrConnectWithoutCarriersInput[];
    createMany?: Prisma.shipmentsCreateManyCarriersInputEnvelope;
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
};
export type shipmentsUncheckedCreateNestedManyWithoutCarriersInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutCarriersInput, Prisma.shipmentsUncheckedCreateWithoutCarriersInput> | Prisma.shipmentsCreateWithoutCarriersInput[] | Prisma.shipmentsUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutCarriersInput | Prisma.shipmentsCreateOrConnectWithoutCarriersInput[];
    createMany?: Prisma.shipmentsCreateManyCarriersInputEnvelope;
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
};
export type shipmentsUpdateManyWithoutCarriersNestedInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutCarriersInput, Prisma.shipmentsUncheckedCreateWithoutCarriersInput> | Prisma.shipmentsCreateWithoutCarriersInput[] | Prisma.shipmentsUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutCarriersInput | Prisma.shipmentsCreateOrConnectWithoutCarriersInput[];
    upsert?: Prisma.shipmentsUpsertWithWhereUniqueWithoutCarriersInput | Prisma.shipmentsUpsertWithWhereUniqueWithoutCarriersInput[];
    createMany?: Prisma.shipmentsCreateManyCarriersInputEnvelope;
    set?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    disconnect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    delete?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    update?: Prisma.shipmentsUpdateWithWhereUniqueWithoutCarriersInput | Prisma.shipmentsUpdateWithWhereUniqueWithoutCarriersInput[];
    updateMany?: Prisma.shipmentsUpdateManyWithWhereWithoutCarriersInput | Prisma.shipmentsUpdateManyWithWhereWithoutCarriersInput[];
    deleteMany?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
};
export type shipmentsUncheckedUpdateManyWithoutCarriersNestedInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutCarriersInput, Prisma.shipmentsUncheckedCreateWithoutCarriersInput> | Prisma.shipmentsCreateWithoutCarriersInput[] | Prisma.shipmentsUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutCarriersInput | Prisma.shipmentsCreateOrConnectWithoutCarriersInput[];
    upsert?: Prisma.shipmentsUpsertWithWhereUniqueWithoutCarriersInput | Prisma.shipmentsUpsertWithWhereUniqueWithoutCarriersInput[];
    createMany?: Prisma.shipmentsCreateManyCarriersInputEnvelope;
    set?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    disconnect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    delete?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    update?: Prisma.shipmentsUpdateWithWhereUniqueWithoutCarriersInput | Prisma.shipmentsUpdateWithWhereUniqueWithoutCarriersInput[];
    updateMany?: Prisma.shipmentsUpdateManyWithWhereWithoutCarriersInput | Prisma.shipmentsUpdateManyWithWhereWithoutCarriersInput[];
    deleteMany?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
};
export type shipmentsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
};
export type shipmentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
};
export type shipmentsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    set?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    disconnect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    delete?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    update?: Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput | Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
};
export type shipmentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput> | Prisma.shipmentsCreateWithoutOrdersInput[] | Prisma.shipmentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutOrdersInput | Prisma.shipmentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.shipmentsCreateManyOrdersInputEnvelope;
    set?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    disconnect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    delete?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    connect?: Prisma.shipmentsWhereUniqueInput | Prisma.shipmentsWhereUniqueInput[];
    update?: Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.shipmentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput | Prisma.shipmentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
};
export type shipmentsCreateNestedOneWithoutShipment_eventsInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutShipment_eventsInput, Prisma.shipmentsUncheckedCreateWithoutShipment_eventsInput>;
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutShipment_eventsInput;
    connect?: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsUpdateOneRequiredWithoutShipment_eventsNestedInput = {
    create?: Prisma.XOR<Prisma.shipmentsCreateWithoutShipment_eventsInput, Prisma.shipmentsUncheckedCreateWithoutShipment_eventsInput>;
    connectOrCreate?: Prisma.shipmentsCreateOrConnectWithoutShipment_eventsInput;
    upsert?: Prisma.shipmentsUpsertWithoutShipment_eventsInput;
    connect?: Prisma.shipmentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.shipmentsUpdateToOneWithWhereWithoutShipment_eventsInput, Prisma.shipmentsUpdateWithoutShipment_eventsInput>, Prisma.shipmentsUncheckedUpdateWithoutShipment_eventsInput>;
};
export type shipmentsCreateWithoutCarriersInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
    shipment_events?: Prisma.shipment_eventsCreateNestedManyWithoutShipmentsInput;
    orders: Prisma.ordersCreateNestedOneWithoutShipmentsInput;
};
export type shipmentsUncheckedCreateWithoutCarriersInput = {
    shipment_id?: bigint | number;
    order_id: bigint | number;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
    shipment_events?: Prisma.shipment_eventsUncheckedCreateNestedManyWithoutShipmentsInput;
};
export type shipmentsCreateOrConnectWithoutCarriersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutCarriersInput, Prisma.shipmentsUncheckedCreateWithoutCarriersInput>;
};
export type shipmentsCreateManyCarriersInputEnvelope = {
    data: Prisma.shipmentsCreateManyCarriersInput | Prisma.shipmentsCreateManyCarriersInput[];
    skipDuplicates?: boolean;
};
export type shipmentsUpsertWithWhereUniqueWithoutCarriersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.shipmentsUpdateWithoutCarriersInput, Prisma.shipmentsUncheckedUpdateWithoutCarriersInput>;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutCarriersInput, Prisma.shipmentsUncheckedCreateWithoutCarriersInput>;
};
export type shipmentsUpdateWithWhereUniqueWithoutCarriersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.shipmentsUpdateWithoutCarriersInput, Prisma.shipmentsUncheckedUpdateWithoutCarriersInput>;
};
export type shipmentsUpdateManyWithWhereWithoutCarriersInput = {
    where: Prisma.shipmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.shipmentsUpdateManyMutationInput, Prisma.shipmentsUncheckedUpdateManyWithoutCarriersInput>;
};
export type shipmentsScalarWhereInput = {
    AND?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
    OR?: Prisma.shipmentsScalarWhereInput[];
    NOT?: Prisma.shipmentsScalarWhereInput | Prisma.shipmentsScalarWhereInput[];
    shipment_id?: Prisma.BigIntFilter<"shipments"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"shipments"> | bigint | number;
    carrier_id?: Prisma.BigIntNullableFilter<"shipments"> | bigint | number | null;
    tracking_number?: Prisma.StringNullableFilter<"shipments"> | string | null;
    status?: Prisma.StringFilter<"shipments"> | string;
    shipped_at?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"shipments"> | Date | string | null;
};
export type shipmentsCreateWithoutOrdersInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
    shipment_events?: Prisma.shipment_eventsCreateNestedManyWithoutShipmentsInput;
    carriers?: Prisma.carriersCreateNestedOneWithoutShipmentsInput;
};
export type shipmentsUncheckedCreateWithoutOrdersInput = {
    shipment_id?: bigint | number;
    carrier_id?: bigint | number | null;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
    shipment_events?: Prisma.shipment_eventsUncheckedCreateNestedManyWithoutShipmentsInput;
};
export type shipmentsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput>;
};
export type shipmentsCreateManyOrdersInputEnvelope = {
    data: Prisma.shipmentsCreateManyOrdersInput | Prisma.shipmentsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type shipmentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.shipmentsUpdateWithoutOrdersInput, Prisma.shipmentsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutOrdersInput, Prisma.shipmentsUncheckedCreateWithoutOrdersInput>;
};
export type shipmentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.shipmentsUpdateWithoutOrdersInput, Prisma.shipmentsUncheckedUpdateWithoutOrdersInput>;
};
export type shipmentsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.shipmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.shipmentsUpdateManyMutationInput, Prisma.shipmentsUncheckedUpdateManyWithoutOrdersInput>;
};
export type shipmentsCreateWithoutShipment_eventsInput = {
    shipment_id?: bigint | number;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
    carriers?: Prisma.carriersCreateNestedOneWithoutShipmentsInput;
    orders: Prisma.ordersCreateNestedOneWithoutShipmentsInput;
};
export type shipmentsUncheckedCreateWithoutShipment_eventsInput = {
    shipment_id?: bigint | number;
    order_id: bigint | number;
    carrier_id?: bigint | number | null;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type shipmentsCreateOrConnectWithoutShipment_eventsInput = {
    where: Prisma.shipmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutShipment_eventsInput, Prisma.shipmentsUncheckedCreateWithoutShipment_eventsInput>;
};
export type shipmentsUpsertWithoutShipment_eventsInput = {
    update: Prisma.XOR<Prisma.shipmentsUpdateWithoutShipment_eventsInput, Prisma.shipmentsUncheckedUpdateWithoutShipment_eventsInput>;
    create: Prisma.XOR<Prisma.shipmentsCreateWithoutShipment_eventsInput, Prisma.shipmentsUncheckedCreateWithoutShipment_eventsInput>;
    where?: Prisma.shipmentsWhereInput;
};
export type shipmentsUpdateToOneWithWhereWithoutShipment_eventsInput = {
    where?: Prisma.shipmentsWhereInput;
    data: Prisma.XOR<Prisma.shipmentsUpdateWithoutShipment_eventsInput, Prisma.shipmentsUncheckedUpdateWithoutShipment_eventsInput>;
};
export type shipmentsUpdateWithoutShipment_eventsInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carriers?: Prisma.carriersUpdateOneWithoutShipmentsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutShipmentsNestedInput;
};
export type shipmentsUncheckedUpdateWithoutShipment_eventsInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsCreateManyCarriersInput = {
    shipment_id?: bigint | number;
    order_id: bigint | number;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type shipmentsUpdateWithoutCarriersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipment_events?: Prisma.shipment_eventsUpdateManyWithoutShipmentsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutShipmentsNestedInput;
};
export type shipmentsUncheckedUpdateWithoutCarriersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipment_events?: Prisma.shipment_eventsUncheckedUpdateManyWithoutShipmentsNestedInput;
};
export type shipmentsUncheckedUpdateManyWithoutCarriersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type shipmentsCreateManyOrdersInput = {
    shipment_id?: bigint | number;
    carrier_id?: bigint | number | null;
    tracking_number?: string | null;
    status?: string;
    shipped_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type shipmentsUpdateWithoutOrdersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipment_events?: Prisma.shipment_eventsUpdateManyWithoutShipmentsNestedInput;
    carriers?: Prisma.carriersUpdateOneWithoutShipmentsNestedInput;
};
export type shipmentsUncheckedUpdateWithoutOrdersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shipment_events?: Prisma.shipment_eventsUncheckedUpdateManyWithoutShipmentsNestedInput;
};
export type shipmentsUncheckedUpdateManyWithoutOrdersInput = {
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    tracking_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipped_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShipmentsCountOutputType = {
    shipment_events: number;
};
export type ShipmentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipment_events?: boolean | ShipmentsCountOutputTypeCountShipment_eventsArgs;
};
export type ShipmentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentsCountOutputTypeSelect<ExtArgs> | null;
};
export type ShipmentsCountOutputTypeCountShipment_eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipment_eventsWhereInput;
};
export type shipmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    shipment_id?: boolean;
    order_id?: boolean;
    carrier_id?: boolean;
    tracking_number?: boolean;
    status?: boolean;
    shipped_at?: boolean;
    delivered_at?: boolean;
    shipment_events?: boolean | Prisma.shipments$shipment_eventsArgs<ExtArgs>;
    carriers?: boolean | Prisma.shipments$carriersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ShipmentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipments"]>;
export type shipmentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    shipment_id?: boolean;
    order_id?: boolean;
    carrier_id?: boolean;
    tracking_number?: boolean;
    status?: boolean;
    shipped_at?: boolean;
    delivered_at?: boolean;
    carriers?: boolean | Prisma.shipments$carriersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipments"]>;
export type shipmentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    shipment_id?: boolean;
    order_id?: boolean;
    carrier_id?: boolean;
    tracking_number?: boolean;
    status?: boolean;
    shipped_at?: boolean;
    delivered_at?: boolean;
    carriers?: boolean | Prisma.shipments$carriersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipments"]>;
export type shipmentsSelectScalar = {
    shipment_id?: boolean;
    order_id?: boolean;
    carrier_id?: boolean;
    tracking_number?: boolean;
    status?: boolean;
    shipped_at?: boolean;
    delivered_at?: boolean;
};
export type shipmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"shipment_id" | "order_id" | "carrier_id" | "tracking_number" | "status" | "shipped_at" | "delivered_at", ExtArgs["result"]["shipments"]>;
export type shipmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipment_events?: boolean | Prisma.shipments$shipment_eventsArgs<ExtArgs>;
    carriers?: boolean | Prisma.shipments$carriersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ShipmentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type shipmentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carriers?: boolean | Prisma.shipments$carriersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type shipmentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carriers?: boolean | Prisma.shipments$carriersArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $shipmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "shipments";
    objects: {
        shipment_events: Prisma.$shipment_eventsPayload<ExtArgs>[];
        carriers: Prisma.$carriersPayload<ExtArgs> | null;
        orders: Prisma.$ordersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        shipment_id: bigint;
        order_id: bigint;
        carrier_id: bigint | null;
        tracking_number: string | null;
        status: string;
        shipped_at: Date | null;
        delivered_at: Date | null;
    }, ExtArgs["result"]["shipments"]>;
    composites: {};
};
export type shipmentsGetPayload<S extends boolean | null | undefined | shipmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$shipmentsPayload, S>;
export type shipmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<shipmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentsCountAggregateInputType | true;
};
export interface shipmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['shipments'];
        meta: {
            name: 'shipments';
        };
    };
    findUnique<T extends shipmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, shipmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends shipmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, shipmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends shipmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, shipmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends shipmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, shipmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends shipmentsFindManyArgs>(args?: Prisma.SelectSubset<T, shipmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends shipmentsCreateArgs>(args: Prisma.SelectSubset<T, shipmentsCreateArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends shipmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, shipmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends shipmentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, shipmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends shipmentsDeleteArgs>(args: Prisma.SelectSubset<T, shipmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends shipmentsUpdateArgs>(args: Prisma.SelectSubset<T, shipmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends shipmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, shipmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends shipmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, shipmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends shipmentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, shipmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends shipmentsUpsertArgs>(args: Prisma.SelectSubset<T, shipmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends shipmentsCountArgs>(args?: Prisma.Subset<T, shipmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShipmentsCountAggregateOutputType> : number>;
    aggregate<T extends ShipmentsAggregateArgs>(args: Prisma.Subset<T, ShipmentsAggregateArgs>): Prisma.PrismaPromise<GetShipmentsAggregateType<T>>;
    groupBy<T extends shipmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: shipmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: shipmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, shipmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: shipmentsFieldRefs;
}
export interface Prisma__shipmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shipment_events<T extends Prisma.shipments$shipment_eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.shipments$shipment_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    carriers<T extends Prisma.shipments$carriersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.shipments$carriersArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface shipmentsFieldRefs {
    readonly shipment_id: Prisma.FieldRef<"shipments", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"shipments", 'BigInt'>;
    readonly carrier_id: Prisma.FieldRef<"shipments", 'BigInt'>;
    readonly tracking_number: Prisma.FieldRef<"shipments", 'String'>;
    readonly status: Prisma.FieldRef<"shipments", 'String'>;
    readonly shipped_at: Prisma.FieldRef<"shipments", 'DateTime'>;
    readonly delivered_at: Prisma.FieldRef<"shipments", 'DateTime'>;
}
export type shipmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentsScalarFieldEnum | Prisma.ShipmentsScalarFieldEnum[];
};
export type shipmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentsScalarFieldEnum | Prisma.ShipmentsScalarFieldEnum[];
};
export type shipmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where?: Prisma.shipmentsWhereInput;
    orderBy?: Prisma.shipmentsOrderByWithRelationInput | Prisma.shipmentsOrderByWithRelationInput[];
    cursor?: Prisma.shipmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentsScalarFieldEnum | Prisma.ShipmentsScalarFieldEnum[];
};
export type shipmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipmentsCreateInput, Prisma.shipmentsUncheckedCreateInput>;
};
export type shipmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.shipmentsCreateManyInput | Prisma.shipmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type shipmentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    data: Prisma.shipmentsCreateManyInput | Prisma.shipmentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.shipmentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type shipmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipmentsUpdateInput, Prisma.shipmentsUncheckedUpdateInput>;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.shipmentsUpdateManyMutationInput, Prisma.shipmentsUncheckedUpdateManyInput>;
    where?: Prisma.shipmentsWhereInput;
    limit?: number;
};
export type shipmentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipmentsUpdateManyMutationInput, Prisma.shipmentsUncheckedUpdateManyInput>;
    where?: Prisma.shipmentsWhereInput;
    limit?: number;
    include?: Prisma.shipmentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type shipmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipmentsCreateInput, Prisma.shipmentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.shipmentsUpdateInput, Prisma.shipmentsUncheckedUpdateInput>;
};
export type shipmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
    where: Prisma.shipmentsWhereUniqueInput;
};
export type shipmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
    limit?: number;
};
export type shipments$shipment_eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where?: Prisma.shipment_eventsWhereInput;
    orderBy?: Prisma.shipment_eventsOrderByWithRelationInput | Prisma.shipment_eventsOrderByWithRelationInput[];
    cursor?: Prisma.shipment_eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Shipment_eventsScalarFieldEnum | Prisma.Shipment_eventsScalarFieldEnum[];
};
export type shipments$carriersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where?: Prisma.carriersWhereInput;
};
export type shipmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipmentsSelect<ExtArgs> | null;
    omit?: Prisma.shipmentsOmit<ExtArgs> | null;
    include?: Prisma.shipmentsInclude<ExtArgs> | null;
};
