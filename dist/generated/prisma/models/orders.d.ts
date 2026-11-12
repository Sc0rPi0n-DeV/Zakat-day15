import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ordersModel = runtime.Types.Result.DefaultSelection<Prisma.$ordersPayload>;
export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
};
export type OrdersAvgAggregateOutputType = {
    order_id: number | null;
    customer_id: number | null;
    address_id: number | null;
    shipping_fee: runtime.Decimal | null;
};
export type OrdersSumAggregateOutputType = {
    order_id: bigint | null;
    customer_id: bigint | null;
    address_id: bigint | null;
    shipping_fee: runtime.Decimal | null;
};
export type OrdersMinAggregateOutputType = {
    order_id: bigint | null;
    customer_id: bigint | null;
    address_id: bigint | null;
    status_code: string | null;
    ordered_at: Date | null;
    shipping_fee: runtime.Decimal | null;
    notes: string | null;
};
export type OrdersMaxAggregateOutputType = {
    order_id: bigint | null;
    customer_id: bigint | null;
    address_id: bigint | null;
    status_code: string | null;
    ordered_at: Date | null;
    shipping_fee: runtime.Decimal | null;
    notes: string | null;
};
export type OrdersCountAggregateOutputType = {
    order_id: number;
    customer_id: number;
    address_id: number;
    status_code: number;
    ordered_at: number;
    shipping_fee: number;
    notes: number;
    _all: number;
};
export type OrdersAvgAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    address_id?: true;
    shipping_fee?: true;
};
export type OrdersSumAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    address_id?: true;
    shipping_fee?: true;
};
export type OrdersMinAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    address_id?: true;
    status_code?: true;
    ordered_at?: true;
    shipping_fee?: true;
    notes?: true;
};
export type OrdersMaxAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    address_id?: true;
    status_code?: true;
    ordered_at?: true;
    shipping_fee?: true;
    notes?: true;
};
export type OrdersCountAggregateInputType = {
    order_id?: true;
    customer_id?: true;
    address_id?: true;
    status_code?: true;
    ordered_at?: true;
    shipping_fee?: true;
    notes?: true;
    _all?: true;
};
export type OrdersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrdersCountAggregateInputType;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
};
export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
    [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrders[P]> : Prisma.GetScalarType<T[P], AggregateOrders[P]>;
};
export type ordersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithAggregationInput | Prisma.ordersOrderByWithAggregationInput[];
    by: Prisma.OrdersScalarFieldEnum[] | Prisma.OrdersScalarFieldEnum;
    having?: Prisma.ordersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdersCountAggregateInputType | true;
    _avg?: OrdersAvgAggregateInputType;
    _sum?: OrdersSumAggregateInputType;
    _min?: OrdersMinAggregateInputType;
    _max?: OrdersMaxAggregateInputType;
};
export type OrdersGroupByOutputType = {
    order_id: bigint;
    customer_id: bigint;
    address_id: bigint | null;
    status_code: string;
    ordered_at: Date;
    shipping_fee: runtime.Decimal;
    notes: string | null;
    _count: OrdersCountAggregateOutputType | null;
    _avg: OrdersAvgAggregateOutputType | null;
    _sum: OrdersSumAggregateOutputType | null;
    _min: OrdersMinAggregateOutputType | null;
    _max: OrdersMaxAggregateOutputType | null;
};
export type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrdersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrdersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrdersGroupByOutputType[P]>;
}>>;
export type ordersWhereInput = {
    AND?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    OR?: Prisma.ordersWhereInput[];
    NOT?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    order_id?: Prisma.BigIntFilter<"orders"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"orders"> | bigint | number;
    address_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    status_code?: Prisma.StringFilter<"orders"> | string;
    ordered_at?: Prisma.DateTimeFilter<"orders"> | Date | string;
    shipping_fee?: Prisma.DecimalFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"orders"> | string | null;
    coupon_redemptions?: Prisma.XOR<Prisma.Coupon_redemptionsNullableScalarRelationFilter, Prisma.coupon_redemptionsWhereInput> | null;
    order_items?: Prisma.Order_itemsListRelationFilter;
    order_status_history?: Prisma.Order_status_historyListRelationFilter;
    addresses?: Prisma.XOR<Prisma.AddressesNullableScalarRelationFilter, Prisma.addressesWhereInput> | null;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    order_statuses?: Prisma.XOR<Prisma.Order_statusesScalarRelationFilter, Prisma.order_statusesWhereInput>;
    payments?: Prisma.PaymentsListRelationFilter;
    shipments?: Prisma.ShipmentsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
};
export type ordersOrderByWithRelationInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status_code?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    coupon_redemptions?: Prisma.coupon_redemptionsOrderByWithRelationInput;
    order_items?: Prisma.order_itemsOrderByRelationAggregateInput;
    order_status_history?: Prisma.order_status_historyOrderByRelationAggregateInput;
    addresses?: Prisma.addressesOrderByWithRelationInput;
    customers?: Prisma.customersOrderByWithRelationInput;
    order_statuses?: Prisma.order_statusesOrderByWithRelationInput;
    payments?: Prisma.paymentsOrderByRelationAggregateInput;
    shipments?: Prisma.shipmentsOrderByRelationAggregateInput;
    support_tickets?: Prisma.support_ticketsOrderByRelationAggregateInput;
};
export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: bigint | number;
    AND?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    OR?: Prisma.ordersWhereInput[];
    NOT?: Prisma.ordersWhereInput | Prisma.ordersWhereInput[];
    customer_id?: Prisma.BigIntFilter<"orders"> | bigint | number;
    address_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    status_code?: Prisma.StringFilter<"orders"> | string;
    ordered_at?: Prisma.DateTimeFilter<"orders"> | Date | string;
    shipping_fee?: Prisma.DecimalFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"orders"> | string | null;
    coupon_redemptions?: Prisma.XOR<Prisma.Coupon_redemptionsNullableScalarRelationFilter, Prisma.coupon_redemptionsWhereInput> | null;
    order_items?: Prisma.Order_itemsListRelationFilter;
    order_status_history?: Prisma.Order_status_historyListRelationFilter;
    addresses?: Prisma.XOR<Prisma.AddressesNullableScalarRelationFilter, Prisma.addressesWhereInput> | null;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    order_statuses?: Prisma.XOR<Prisma.Order_statusesScalarRelationFilter, Prisma.order_statusesWhereInput>;
    payments?: Prisma.PaymentsListRelationFilter;
    shipments?: Prisma.ShipmentsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
}, "order_id">;
export type ordersOrderByWithAggregationInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status_code?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ordersCountOrderByAggregateInput;
    _avg?: Prisma.ordersAvgOrderByAggregateInput;
    _max?: Prisma.ordersMaxOrderByAggregateInput;
    _min?: Prisma.ordersMinOrderByAggregateInput;
    _sum?: Prisma.ordersSumOrderByAggregateInput;
};
export type ordersScalarWhereWithAggregatesInput = {
    AND?: Prisma.ordersScalarWhereWithAggregatesInput | Prisma.ordersScalarWhereWithAggregatesInput[];
    OR?: Prisma.ordersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ordersScalarWhereWithAggregatesInput | Prisma.ordersScalarWhereWithAggregatesInput[];
    order_id?: Prisma.BigIntWithAggregatesFilter<"orders"> | bigint | number;
    customer_id?: Prisma.BigIntWithAggregatesFilter<"orders"> | bigint | number;
    address_id?: Prisma.BigIntNullableWithAggregatesFilter<"orders"> | bigint | number | null;
    status_code?: Prisma.StringWithAggregatesFilter<"orders"> | string;
    ordered_at?: Prisma.DateTimeWithAggregatesFilter<"orders"> | Date | string;
    shipping_fee?: Prisma.DecimalWithAggregatesFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"orders"> | string | null;
};
export type ordersCreateInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersUpdateInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateManyInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
};
export type ordersUpdateManyMutationInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ordersUncheckedUpdateManyInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrdersListRelationFilter = {
    every?: Prisma.ordersWhereInput;
    some?: Prisma.ordersWhereInput;
    none?: Prisma.ordersWhereInput;
};
export type ordersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrdersScalarRelationFilter = {
    is?: Prisma.ordersWhereInput;
    isNot?: Prisma.ordersWhereInput;
};
export type ordersCountOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    status_code?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type ordersAvgOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
};
export type ordersMaxOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    status_code?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type ordersMinOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    status_code?: Prisma.SortOrder;
    ordered_at?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type ordersSumOrderByAggregateInput = {
    order_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    address_id?: Prisma.SortOrder;
    shipping_fee?: Prisma.SortOrder;
};
export type OrdersNullableScalarRelationFilter = {
    is?: Prisma.ordersWhereInput | null;
    isNot?: Prisma.ordersWhereInput | null;
};
export type ordersCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutAddressesInput, Prisma.ordersUncheckedCreateWithoutAddressesInput> | Prisma.ordersCreateWithoutAddressesInput[] | Prisma.ordersUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutAddressesInput | Prisma.ordersCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.ordersCreateManyAddressesInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUncheckedCreateNestedManyWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutAddressesInput, Prisma.ordersUncheckedCreateWithoutAddressesInput> | Prisma.ordersCreateWithoutAddressesInput[] | Prisma.ordersUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutAddressesInput | Prisma.ordersCreateOrConnectWithoutAddressesInput[];
    createMany?: Prisma.ordersCreateManyAddressesInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutAddressesInput, Prisma.ordersUncheckedCreateWithoutAddressesInput> | Prisma.ordersCreateWithoutAddressesInput[] | Prisma.ordersUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutAddressesInput | Prisma.ordersCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutAddressesInput | Prisma.ordersUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.ordersCreateManyAddressesInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutAddressesInput | Prisma.ordersUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutAddressesInput | Prisma.ordersUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersUncheckedUpdateManyWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutAddressesInput, Prisma.ordersUncheckedCreateWithoutAddressesInput> | Prisma.ordersCreateWithoutAddressesInput[] | Prisma.ordersUncheckedCreateWithoutAddressesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutAddressesInput | Prisma.ordersCreateOrConnectWithoutAddressesInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutAddressesInput | Prisma.ordersUpsertWithWhereUniqueWithoutAddressesInput[];
    createMany?: Prisma.ordersCreateManyAddressesInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutAddressesInput | Prisma.ordersUpdateWithWhereUniqueWithoutAddressesInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutAddressesInput | Prisma.ordersUpdateManyWithWhereWithoutAddressesInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersCreateNestedOneWithoutCoupon_redemptionsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCoupon_redemptionsInput, Prisma.ordersUncheckedCreateWithoutCoupon_redemptionsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCoupon_redemptionsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneRequiredWithoutCoupon_redemptionsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCoupon_redemptionsInput, Prisma.ordersUncheckedCreateWithoutCoupon_redemptionsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCoupon_redemptionsInput;
    upsert?: Prisma.ordersUpsertWithoutCoupon_redemptionsInput;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutCoupon_redemptionsInput, Prisma.ordersUpdateWithoutCoupon_redemptionsInput>, Prisma.ordersUncheckedUpdateWithoutCoupon_redemptionsInput>;
};
export type ordersCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutCustomersInput | Prisma.ordersUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput> | Prisma.ordersCreateWithoutCustomersInput[] | Prisma.ordersUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutCustomersInput | Prisma.ordersCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.ordersCreateManyCustomersInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput | Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutCustomersInput | Prisma.ordersUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.ordersUpsertWithoutOrder_itemsInput;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.ordersUpdateWithoutOrder_itemsInput>, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
};
export type ordersCreateNestedOneWithoutOrder_status_historyInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_status_historyInput, Prisma.ordersUncheckedCreateWithoutOrder_status_historyInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_status_historyInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneRequiredWithoutOrder_status_historyNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_status_historyInput, Prisma.ordersUncheckedCreateWithoutOrder_status_historyInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_status_historyInput;
    upsert?: Prisma.ordersUpsertWithoutOrder_status_historyInput;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutOrder_status_historyInput, Prisma.ordersUpdateWithoutOrder_status_historyInput>, Prisma.ordersUncheckedUpdateWithoutOrder_status_historyInput>;
};
export type ordersCreateNestedManyWithoutOrder_statusesInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_statusesInput, Prisma.ordersUncheckedCreateWithoutOrder_statusesInput> | Prisma.ordersCreateWithoutOrder_statusesInput[] | Prisma.ordersUncheckedCreateWithoutOrder_statusesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_statusesInput | Prisma.ordersCreateOrConnectWithoutOrder_statusesInput[];
    createMany?: Prisma.ordersCreateManyOrder_statusesInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUncheckedCreateNestedManyWithoutOrder_statusesInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_statusesInput, Prisma.ordersUncheckedCreateWithoutOrder_statusesInput> | Prisma.ordersCreateWithoutOrder_statusesInput[] | Prisma.ordersUncheckedCreateWithoutOrder_statusesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_statusesInput | Prisma.ordersCreateOrConnectWithoutOrder_statusesInput[];
    createMany?: Prisma.ordersCreateManyOrder_statusesInputEnvelope;
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
};
export type ordersUpdateManyWithoutOrder_statusesNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_statusesInput, Prisma.ordersUncheckedCreateWithoutOrder_statusesInput> | Prisma.ordersCreateWithoutOrder_statusesInput[] | Prisma.ordersUncheckedCreateWithoutOrder_statusesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_statusesInput | Prisma.ordersCreateOrConnectWithoutOrder_statusesInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutOrder_statusesInput | Prisma.ordersUpsertWithWhereUniqueWithoutOrder_statusesInput[];
    createMany?: Prisma.ordersCreateManyOrder_statusesInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutOrder_statusesInput | Prisma.ordersUpdateWithWhereUniqueWithoutOrder_statusesInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutOrder_statusesInput | Prisma.ordersUpdateManyWithWhereWithoutOrder_statusesInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersUncheckedUpdateManyWithoutOrder_statusesNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutOrder_statusesInput, Prisma.ordersUncheckedCreateWithoutOrder_statusesInput> | Prisma.ordersCreateWithoutOrder_statusesInput[] | Prisma.ordersUncheckedCreateWithoutOrder_statusesInput[];
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutOrder_statusesInput | Prisma.ordersCreateOrConnectWithoutOrder_statusesInput[];
    upsert?: Prisma.ordersUpsertWithWhereUniqueWithoutOrder_statusesInput | Prisma.ordersUpsertWithWhereUniqueWithoutOrder_statusesInput[];
    createMany?: Prisma.ordersCreateManyOrder_statusesInputEnvelope;
    set?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    disconnect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    delete?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    connect?: Prisma.ordersWhereUniqueInput | Prisma.ordersWhereUniqueInput[];
    update?: Prisma.ordersUpdateWithWhereUniqueWithoutOrder_statusesInput | Prisma.ordersUpdateWithWhereUniqueWithoutOrder_statusesInput[];
    updateMany?: Prisma.ordersUpdateManyWithWhereWithoutOrder_statusesInput | Prisma.ordersUpdateManyWithWhereWithoutOrder_statusesInput[];
    deleteMany?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
};
export type ordersCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.ordersUpsertWithoutPaymentsInput;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutPaymentsInput, Prisma.ordersUpdateWithoutPaymentsInput>, Prisma.ordersUncheckedUpdateWithoutPaymentsInput>;
};
export type ordersCreateNestedOneWithoutShipmentsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutShipmentsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutShipmentsInput;
    upsert?: Prisma.ordersUpsertWithoutShipmentsInput;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutShipmentsInput, Prisma.ordersUpdateWithoutShipmentsInput>, Prisma.ordersUncheckedUpdateWithoutShipmentsInput>;
};
export type ordersCreateNestedOneWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutSupport_ticketsInput, Prisma.ordersUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutSupport_ticketsInput;
    connect?: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateOneWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.ordersCreateWithoutSupport_ticketsInput, Prisma.ordersUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.ordersCreateOrConnectWithoutSupport_ticketsInput;
    upsert?: Prisma.ordersUpsertWithoutSupport_ticketsInput;
    disconnect?: Prisma.ordersWhereInput | boolean;
    delete?: Prisma.ordersWhereInput | boolean;
    connect?: Prisma.ordersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ordersUpdateToOneWithWhereWithoutSupport_ticketsInput, Prisma.ordersUpdateWithoutSupport_ticketsInput>, Prisma.ordersUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type ordersCreateWithoutAddressesInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutAddressesInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutAddressesInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutAddressesInput, Prisma.ordersUncheckedCreateWithoutAddressesInput>;
};
export type ordersCreateManyAddressesInputEnvelope = {
    data: Prisma.ordersCreateManyAddressesInput | Prisma.ordersCreateManyAddressesInput[];
    skipDuplicates?: boolean;
};
export type ordersUpsertWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ordersUpdateWithoutAddressesInput, Prisma.ordersUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutAddressesInput, Prisma.ordersUncheckedCreateWithoutAddressesInput>;
};
export type ordersUpdateWithWhereUniqueWithoutAddressesInput = {
    where: Prisma.ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutAddressesInput, Prisma.ordersUncheckedUpdateWithoutAddressesInput>;
};
export type ordersUpdateManyWithWhereWithoutAddressesInput = {
    where: Prisma.ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyWithoutAddressesInput>;
};
export type ordersScalarWhereInput = {
    AND?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
    OR?: Prisma.ordersScalarWhereInput[];
    NOT?: Prisma.ordersScalarWhereInput | Prisma.ordersScalarWhereInput[];
    order_id?: Prisma.BigIntFilter<"orders"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"orders"> | bigint | number;
    address_id?: Prisma.BigIntNullableFilter<"orders"> | bigint | number | null;
    status_code?: Prisma.StringFilter<"orders"> | string;
    ordered_at?: Prisma.DateTimeFilter<"orders"> | Date | string;
    shipping_fee?: Prisma.DecimalFilter<"orders"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"orders"> | string | null;
};
export type ordersCreateWithoutCoupon_redemptionsInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutCoupon_redemptionsInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutCoupon_redemptionsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCoupon_redemptionsInput, Prisma.ordersUncheckedCreateWithoutCoupon_redemptionsInput>;
};
export type ordersUpsertWithoutCoupon_redemptionsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutCoupon_redemptionsInput, Prisma.ordersUncheckedUpdateWithoutCoupon_redemptionsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCoupon_redemptionsInput, Prisma.ordersUncheckedCreateWithoutCoupon_redemptionsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutCoupon_redemptionsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutCoupon_redemptionsInput, Prisma.ordersUncheckedUpdateWithoutCoupon_redemptionsInput>;
};
export type ordersUpdateWithoutCoupon_redemptionsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutCoupon_redemptionsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutCustomersInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutCustomersInput = {
    order_id?: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutCustomersInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput>;
};
export type ordersCreateManyCustomersInputEnvelope = {
    data: Prisma.ordersCreateManyCustomersInput | Prisma.ordersCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type ordersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ordersUpdateWithoutCustomersInput, Prisma.ordersUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutCustomersInput, Prisma.ordersUncheckedCreateWithoutCustomersInput>;
};
export type ordersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutCustomersInput, Prisma.ordersUncheckedUpdateWithoutCustomersInput>;
};
export type ordersUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyWithoutCustomersInput>;
};
export type ordersCreateWithoutOrder_itemsInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
};
export type ordersUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_itemsInput, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_itemsInput, Prisma.ordersUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_itemsInput, Prisma.ordersUncheckedUpdateWithoutOrder_itemsInput>;
};
export type ordersUpdateWithoutOrder_itemsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutOrder_status_historyInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutOrder_status_historyInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutOrder_status_historyInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_status_historyInput, Prisma.ordersUncheckedCreateWithoutOrder_status_historyInput>;
};
export type ordersUpsertWithoutOrder_status_historyInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_status_historyInput, Prisma.ordersUncheckedUpdateWithoutOrder_status_historyInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_status_historyInput, Prisma.ordersUncheckedCreateWithoutOrder_status_historyInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutOrder_status_historyInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_status_historyInput, Prisma.ordersUncheckedUpdateWithoutOrder_status_historyInput>;
};
export type ordersUpdateWithoutOrder_status_historyInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutOrder_status_historyInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutOrder_statusesInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutOrder_statusesInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutOrder_statusesInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_statusesInput, Prisma.ordersUncheckedCreateWithoutOrder_statusesInput>;
};
export type ordersCreateManyOrder_statusesInputEnvelope = {
    data: Prisma.ordersCreateManyOrder_statusesInput | Prisma.ordersCreateManyOrder_statusesInput[];
    skipDuplicates?: boolean;
};
export type ordersUpsertWithWhereUniqueWithoutOrder_statusesInput = {
    where: Prisma.ordersWhereUniqueInput;
    update: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_statusesInput, Prisma.ordersUncheckedUpdateWithoutOrder_statusesInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutOrder_statusesInput, Prisma.ordersUncheckedCreateWithoutOrder_statusesInput>;
};
export type ordersUpdateWithWhereUniqueWithoutOrder_statusesInput = {
    where: Prisma.ordersWhereUniqueInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutOrder_statusesInput, Prisma.ordersUncheckedUpdateWithoutOrder_statusesInput>;
};
export type ordersUpdateManyWithWhereWithoutOrder_statusesInput = {
    where: Prisma.ordersScalarWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyWithoutOrder_statusesInput>;
};
export type ordersCreateWithoutPaymentsInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutPaymentsInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
};
export type ordersUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutPaymentsInput, Prisma.ordersUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutPaymentsInput, Prisma.ordersUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutPaymentsInput, Prisma.ordersUncheckedUpdateWithoutPaymentsInput>;
};
export type ordersUpdateWithoutPaymentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutPaymentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutShipmentsInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutShipmentsInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutShipmentsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
};
export type ordersUpsertWithoutShipmentsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutShipmentsInput, Prisma.ordersUncheckedUpdateWithoutShipmentsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutShipmentsInput, Prisma.ordersUncheckedCreateWithoutShipmentsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutShipmentsInput, Prisma.ordersUncheckedUpdateWithoutShipmentsInput>;
};
export type ordersUpdateWithoutShipmentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutShipmentsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateWithoutSupport_ticketsInput = {
    order_id?: bigint | number;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrdersInput;
    addresses?: Prisma.addressesCreateNestedOneWithoutOrdersInput;
    customers: Prisma.customersCreateNestedOneWithoutOrdersInput;
    order_statuses: Prisma.order_statusesCreateNestedOneWithoutOrdersInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutOrdersInput;
};
export type ordersUncheckedCreateWithoutSupport_ticketsInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput;
    order_items?: Prisma.order_itemsUncheckedCreateNestedManyWithoutOrdersInput;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrdersInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutOrdersInput;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutOrdersInput;
};
export type ordersCreateOrConnectWithoutSupport_ticketsInput = {
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateWithoutSupport_ticketsInput, Prisma.ordersUncheckedCreateWithoutSupport_ticketsInput>;
};
export type ordersUpsertWithoutSupport_ticketsInput = {
    update: Prisma.XOR<Prisma.ordersUpdateWithoutSupport_ticketsInput, Prisma.ordersUncheckedUpdateWithoutSupport_ticketsInput>;
    create: Prisma.XOR<Prisma.ordersCreateWithoutSupport_ticketsInput, Prisma.ordersUncheckedCreateWithoutSupport_ticketsInput>;
    where?: Prisma.ordersWhereInput;
};
export type ordersUpdateToOneWithWhereWithoutSupport_ticketsInput = {
    where?: Prisma.ordersWhereInput;
    data: Prisma.XOR<Prisma.ordersUpdateWithoutSupport_ticketsInput, Prisma.ordersUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type ordersUpdateWithoutSupport_ticketsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutSupport_ticketsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersCreateManyAddressesInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
};
export type ordersUpdateWithoutAddressesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutAddressesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateManyWithoutAddressesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ordersCreateManyCustomersInput = {
    order_id?: bigint | number;
    address_id?: bigint | number | null;
    status_code: string;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
};
export type ordersUpdateWithoutCustomersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    order_statuses?: Prisma.order_statusesUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutCustomersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateManyWithoutCustomersInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ordersCreateManyOrder_statusesInput = {
    order_id?: bigint | number;
    customer_id: bigint | number;
    address_id?: bigint | number | null;
    ordered_at?: Date | string;
    shipping_fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
};
export type ordersUpdateWithoutOrder_statusesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrdersNestedInput;
    addresses?: Prisma.addressesUpdateOneWithoutOrdersNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateWithoutOrder_statusesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput;
    order_items?: Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrdersNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutOrdersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput;
};
export type ordersUncheckedUpdateManyWithoutOrder_statusesInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    address_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    ordered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipping_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrdersCountOutputType = {
    order_items: number;
    order_status_history: number;
    payments: number;
    shipments: number;
    support_tickets: number;
};
export type OrdersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs;
    order_status_history?: boolean | OrdersCountOutputTypeCountOrder_status_historyArgs;
    payments?: boolean | OrdersCountOutputTypeCountPaymentsArgs;
    shipments?: boolean | OrdersCountOutputTypeCountShipmentsArgs;
    support_tickets?: boolean | OrdersCountOutputTypeCountSupport_ticketsArgs;
};
export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdersCountOutputTypeSelect<ExtArgs> | null;
};
export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
};
export type OrdersCountOutputTypeCountOrder_status_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_status_historyWhereInput;
};
export type OrdersCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
};
export type OrdersCountOutputTypeCountShipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
};
export type OrdersCountOutputTypeCountSupport_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
};
export type ordersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    order_id?: boolean;
    customer_id?: boolean;
    address_id?: boolean;
    status_code?: boolean;
    ordered_at?: boolean;
    shipping_fee?: boolean;
    notes?: boolean;
    coupon_redemptions?: boolean | Prisma.orders$coupon_redemptionsArgs<ExtArgs>;
    order_items?: boolean | Prisma.orders$order_itemsArgs<ExtArgs>;
    order_status_history?: boolean | Prisma.orders$order_status_historyArgs<ExtArgs>;
    addresses?: boolean | Prisma.orders$addressesArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    order_statuses?: boolean | Prisma.order_statusesDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.orders$paymentsArgs<ExtArgs>;
    shipments?: boolean | Prisma.orders$shipmentsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.orders$support_ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orders"]>;
export type ordersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    order_id?: boolean;
    customer_id?: boolean;
    address_id?: boolean;
    status_code?: boolean;
    ordered_at?: boolean;
    shipping_fee?: boolean;
    notes?: boolean;
    addresses?: boolean | Prisma.orders$addressesArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    order_statuses?: boolean | Prisma.order_statusesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orders"]>;
export type ordersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    order_id?: boolean;
    customer_id?: boolean;
    address_id?: boolean;
    status_code?: boolean;
    ordered_at?: boolean;
    shipping_fee?: boolean;
    notes?: boolean;
    addresses?: boolean | Prisma.orders$addressesArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    order_statuses?: boolean | Prisma.order_statusesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orders"]>;
export type ordersSelectScalar = {
    order_id?: boolean;
    customer_id?: boolean;
    address_id?: boolean;
    status_code?: boolean;
    ordered_at?: boolean;
    shipping_fee?: boolean;
    notes?: boolean;
};
export type ordersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"order_id" | "customer_id" | "address_id" | "status_code" | "ordered_at" | "shipping_fee" | "notes", ExtArgs["result"]["orders"]>;
export type ordersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupon_redemptions?: boolean | Prisma.orders$coupon_redemptionsArgs<ExtArgs>;
    order_items?: boolean | Prisma.orders$order_itemsArgs<ExtArgs>;
    order_status_history?: boolean | Prisma.orders$order_status_historyArgs<ExtArgs>;
    addresses?: boolean | Prisma.orders$addressesArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    order_statuses?: boolean | Prisma.order_statusesDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.orders$paymentsArgs<ExtArgs>;
    shipments?: boolean | Prisma.orders$shipmentsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.orders$support_ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ordersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.orders$addressesArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    order_statuses?: boolean | Prisma.order_statusesDefaultArgs<ExtArgs>;
};
export type ordersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.orders$addressesArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    order_statuses?: boolean | Prisma.order_statusesDefaultArgs<ExtArgs>;
};
export type $ordersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "orders";
    objects: {
        coupon_redemptions: Prisma.$coupon_redemptionsPayload<ExtArgs> | null;
        order_items: Prisma.$order_itemsPayload<ExtArgs>[];
        order_status_history: Prisma.$order_status_historyPayload<ExtArgs>[];
        addresses: Prisma.$addressesPayload<ExtArgs> | null;
        customers: Prisma.$customersPayload<ExtArgs>;
        order_statuses: Prisma.$order_statusesPayload<ExtArgs>;
        payments: Prisma.$paymentsPayload<ExtArgs>[];
        shipments: Prisma.$shipmentsPayload<ExtArgs>[];
        support_tickets: Prisma.$support_ticketsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        order_id: bigint;
        customer_id: bigint;
        address_id: bigint | null;
        status_code: string;
        ordered_at: Date;
        shipping_fee: runtime.Decimal;
        notes: string | null;
    }, ExtArgs["result"]["orders"]>;
    composites: {};
};
export type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ordersPayload, S>;
export type ordersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrdersCountAggregateInputType | true;
};
export interface ordersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['orders'];
        meta: {
            name: 'orders';
        };
    };
    findUnique<T extends ordersFindUniqueArgs>(args: Prisma.SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ordersFindFirstArgs>(args?: Prisma.SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ordersFindManyArgs>(args?: Prisma.SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ordersCreateArgs>(args: Prisma.SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ordersCreateManyArgs>(args?: Prisma.SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ordersDeleteArgs>(args: Prisma.SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ordersUpdateArgs>(args: Prisma.SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ordersDeleteManyArgs>(args?: Prisma.SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ordersUpdateManyArgs>(args: Prisma.SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ordersUpsertArgs>(args: Prisma.SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ordersCountArgs>(args?: Prisma.Subset<T, ordersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrdersCountAggregateOutputType> : number>;
    aggregate<T extends OrdersAggregateArgs>(args: Prisma.Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>;
    groupBy<T extends ordersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ordersGroupByArgs['orderBy'];
    } : {
        orderBy?: ordersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ordersFieldRefs;
}
export interface Prisma__ordersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    coupon_redemptions<T extends Prisma.orders$coupon_redemptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$coupon_redemptionsArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    order_items<T extends Prisma.orders$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    order_status_history<T extends Prisma.orders$order_status_historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$order_status_historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    addresses<T extends Prisma.orders$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$addressesArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customers<T extends Prisma.customersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customersDefaultArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order_statuses<T extends Prisma.order_statusesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_statusesDefaultArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.orders$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shipments<T extends Prisma.orders$shipmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    support_tickets<T extends Prisma.orders$support_ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orders$support_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ordersFieldRefs {
    readonly order_id: Prisma.FieldRef<"orders", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"orders", 'BigInt'>;
    readonly address_id: Prisma.FieldRef<"orders", 'BigInt'>;
    readonly status_code: Prisma.FieldRef<"orders", 'String'>;
    readonly ordered_at: Prisma.FieldRef<"orders", 'DateTime'>;
    readonly shipping_fee: Prisma.FieldRef<"orders", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"orders", 'String'>;
}
export type ordersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type ordersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ordersCreateInput, Prisma.ordersUncheckedCreateInput>;
};
export type ordersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ordersCreateManyInput | Prisma.ordersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ordersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    data: Prisma.ordersCreateManyInput | Prisma.ordersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ordersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ordersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ordersUpdateInput, Prisma.ordersUncheckedUpdateInput>;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyInput>;
    where?: Prisma.ordersWhereInput;
    limit?: number;
};
export type ordersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ordersUpdateManyMutationInput, Prisma.ordersUncheckedUpdateManyInput>;
    where?: Prisma.ordersWhereInput;
    limit?: number;
    include?: Prisma.ordersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ordersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
    create: Prisma.XOR<Prisma.ordersCreateInput, Prisma.ordersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ordersUpdateInput, Prisma.ordersUncheckedUpdateInput>;
};
export type ordersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where: Prisma.ordersWhereUniqueInput;
};
export type ordersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
    limit?: number;
};
export type orders$coupon_redemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where?: Prisma.coupon_redemptionsWhereInput;
};
export type orders$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type orders$order_status_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_status_historySelect<ExtArgs> | null;
    omit?: Prisma.order_status_historyOmit<ExtArgs> | null;
    include?: Prisma.order_status_historyInclude<ExtArgs> | null;
    where?: Prisma.order_status_historyWhereInput;
    orderBy?: Prisma.order_status_historyOrderByWithRelationInput | Prisma.order_status_historyOrderByWithRelationInput[];
    cursor?: Prisma.order_status_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_status_historyScalarFieldEnum | Prisma.Order_status_historyScalarFieldEnum[];
};
export type orders$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    where?: Prisma.addressesWhereInput;
};
export type orders$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type orders$shipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type orders$support_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Support_ticketsScalarFieldEnum | Prisma.Support_ticketsScalarFieldEnum[];
};
export type ordersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
};
