import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type coupon_redemptionsModel = runtime.Types.Result.DefaultSelection<Prisma.$coupon_redemptionsPayload>;
export type AggregateCoupon_redemptions = {
    _count: Coupon_redemptionsCountAggregateOutputType | null;
    _avg: Coupon_redemptionsAvgAggregateOutputType | null;
    _sum: Coupon_redemptionsSumAggregateOutputType | null;
    _min: Coupon_redemptionsMinAggregateOutputType | null;
    _max: Coupon_redemptionsMaxAggregateOutputType | null;
};
export type Coupon_redemptionsAvgAggregateOutputType = {
    coupon_id: number | null;
    order_id: number | null;
};
export type Coupon_redemptionsSumAggregateOutputType = {
    coupon_id: bigint | null;
    order_id: bigint | null;
};
export type Coupon_redemptionsMinAggregateOutputType = {
    coupon_id: bigint | null;
    order_id: bigint | null;
    redeemed_at: Date | null;
};
export type Coupon_redemptionsMaxAggregateOutputType = {
    coupon_id: bigint | null;
    order_id: bigint | null;
    redeemed_at: Date | null;
};
export type Coupon_redemptionsCountAggregateOutputType = {
    coupon_id: number;
    order_id: number;
    redeemed_at: number;
    _all: number;
};
export type Coupon_redemptionsAvgAggregateInputType = {
    coupon_id?: true;
    order_id?: true;
};
export type Coupon_redemptionsSumAggregateInputType = {
    coupon_id?: true;
    order_id?: true;
};
export type Coupon_redemptionsMinAggregateInputType = {
    coupon_id?: true;
    order_id?: true;
    redeemed_at?: true;
};
export type Coupon_redemptionsMaxAggregateInputType = {
    coupon_id?: true;
    order_id?: true;
    redeemed_at?: true;
};
export type Coupon_redemptionsCountAggregateInputType = {
    coupon_id?: true;
    order_id?: true;
    redeemed_at?: true;
    _all?: true;
};
export type Coupon_redemptionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.coupon_redemptionsWhereInput;
    orderBy?: Prisma.coupon_redemptionsOrderByWithRelationInput | Prisma.coupon_redemptionsOrderByWithRelationInput[];
    cursor?: Prisma.coupon_redemptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Coupon_redemptionsCountAggregateInputType;
    _avg?: Coupon_redemptionsAvgAggregateInputType;
    _sum?: Coupon_redemptionsSumAggregateInputType;
    _min?: Coupon_redemptionsMinAggregateInputType;
    _max?: Coupon_redemptionsMaxAggregateInputType;
};
export type GetCoupon_redemptionsAggregateType<T extends Coupon_redemptionsAggregateArgs> = {
    [P in keyof T & keyof AggregateCoupon_redemptions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCoupon_redemptions[P]> : Prisma.GetScalarType<T[P], AggregateCoupon_redemptions[P]>;
};
export type coupon_redemptionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.coupon_redemptionsWhereInput;
    orderBy?: Prisma.coupon_redemptionsOrderByWithAggregationInput | Prisma.coupon_redemptionsOrderByWithAggregationInput[];
    by: Prisma.Coupon_redemptionsScalarFieldEnum[] | Prisma.Coupon_redemptionsScalarFieldEnum;
    having?: Prisma.coupon_redemptionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Coupon_redemptionsCountAggregateInputType | true;
    _avg?: Coupon_redemptionsAvgAggregateInputType;
    _sum?: Coupon_redemptionsSumAggregateInputType;
    _min?: Coupon_redemptionsMinAggregateInputType;
    _max?: Coupon_redemptionsMaxAggregateInputType;
};
export type Coupon_redemptionsGroupByOutputType = {
    coupon_id: bigint;
    order_id: bigint;
    redeemed_at: Date | null;
    _count: Coupon_redemptionsCountAggregateOutputType | null;
    _avg: Coupon_redemptionsAvgAggregateOutputType | null;
    _sum: Coupon_redemptionsSumAggregateOutputType | null;
    _min: Coupon_redemptionsMinAggregateOutputType | null;
    _max: Coupon_redemptionsMaxAggregateOutputType | null;
};
export type GetCoupon_redemptionsGroupByPayload<T extends coupon_redemptionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Coupon_redemptionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Coupon_redemptionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Coupon_redemptionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Coupon_redemptionsGroupByOutputType[P]>;
}>>;
export type coupon_redemptionsWhereInput = {
    AND?: Prisma.coupon_redemptionsWhereInput | Prisma.coupon_redemptionsWhereInput[];
    OR?: Prisma.coupon_redemptionsWhereInput[];
    NOT?: Prisma.coupon_redemptionsWhereInput | Prisma.coupon_redemptionsWhereInput[];
    coupon_id?: Prisma.BigIntFilter<"coupon_redemptions"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"coupon_redemptions"> | bigint | number;
    redeemed_at?: Prisma.DateTimeNullableFilter<"coupon_redemptions"> | Date | string | null;
    coupons?: Prisma.XOR<Prisma.CouponsScalarRelationFilter, Prisma.couponsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
};
export type coupon_redemptionsOrderByWithRelationInput = {
    coupon_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    redeemed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    coupons?: Prisma.couponsOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type coupon_redemptionsWhereUniqueInput = Prisma.AtLeast<{
    order_id?: bigint | number;
    coupon_id_order_id?: Prisma.coupon_redemptionsCoupon_idOrder_idCompoundUniqueInput;
    AND?: Prisma.coupon_redemptionsWhereInput | Prisma.coupon_redemptionsWhereInput[];
    OR?: Prisma.coupon_redemptionsWhereInput[];
    NOT?: Prisma.coupon_redemptionsWhereInput | Prisma.coupon_redemptionsWhereInput[];
    coupon_id?: Prisma.BigIntFilter<"coupon_redemptions"> | bigint | number;
    redeemed_at?: Prisma.DateTimeNullableFilter<"coupon_redemptions"> | Date | string | null;
    coupons?: Prisma.XOR<Prisma.CouponsScalarRelationFilter, Prisma.couponsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
}, "coupon_id_order_id" | "order_id">;
export type coupon_redemptionsOrderByWithAggregationInput = {
    coupon_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    redeemed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.coupon_redemptionsCountOrderByAggregateInput;
    _avg?: Prisma.coupon_redemptionsAvgOrderByAggregateInput;
    _max?: Prisma.coupon_redemptionsMaxOrderByAggregateInput;
    _min?: Prisma.coupon_redemptionsMinOrderByAggregateInput;
    _sum?: Prisma.coupon_redemptionsSumOrderByAggregateInput;
};
export type coupon_redemptionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.coupon_redemptionsScalarWhereWithAggregatesInput | Prisma.coupon_redemptionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.coupon_redemptionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.coupon_redemptionsScalarWhereWithAggregatesInput | Prisma.coupon_redemptionsScalarWhereWithAggregatesInput[];
    coupon_id?: Prisma.BigIntWithAggregatesFilter<"coupon_redemptions"> | bigint | number;
    order_id?: Prisma.BigIntWithAggregatesFilter<"coupon_redemptions"> | bigint | number;
    redeemed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"coupon_redemptions"> | Date | string | null;
};
export type coupon_redemptionsCreateInput = {
    redeemed_at?: Date | string | null;
    coupons: Prisma.couponsCreateNestedOneWithoutCoupon_redemptionsInput;
    orders: Prisma.ordersCreateNestedOneWithoutCoupon_redemptionsInput;
};
export type coupon_redemptionsUncheckedCreateInput = {
    coupon_id: bigint | number;
    order_id: bigint | number;
    redeemed_at?: Date | string | null;
};
export type coupon_redemptionsUpdateInput = {
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    coupons?: Prisma.couponsUpdateOneRequiredWithoutCoupon_redemptionsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutCoupon_redemptionsNestedInput;
};
export type coupon_redemptionsUncheckedUpdateInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type coupon_redemptionsCreateManyInput = {
    coupon_id: bigint | number;
    order_id: bigint | number;
    redeemed_at?: Date | string | null;
};
export type coupon_redemptionsUpdateManyMutationInput = {
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type coupon_redemptionsUncheckedUpdateManyInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type coupon_redemptionsCoupon_idOrder_idCompoundUniqueInput = {
    coupon_id: bigint | number;
    order_id: bigint | number;
};
export type coupon_redemptionsCountOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    redeemed_at?: Prisma.SortOrder;
};
export type coupon_redemptionsAvgOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type coupon_redemptionsMaxOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    redeemed_at?: Prisma.SortOrder;
};
export type coupon_redemptionsMinOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    redeemed_at?: Prisma.SortOrder;
};
export type coupon_redemptionsSumOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type Coupon_redemptionsListRelationFilter = {
    every?: Prisma.coupon_redemptionsWhereInput;
    some?: Prisma.coupon_redemptionsWhereInput;
    none?: Prisma.coupon_redemptionsWhereInput;
};
export type coupon_redemptionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Coupon_redemptionsNullableScalarRelationFilter = {
    is?: Prisma.coupon_redemptionsWhereInput | null;
    isNot?: Prisma.coupon_redemptionsWhereInput | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type coupon_redemptionsCreateNestedManyWithoutCouponsInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput> | Prisma.coupon_redemptionsCreateWithoutCouponsInput[] | Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput | Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput[];
    createMany?: Prisma.coupon_redemptionsCreateManyCouponsInputEnvelope;
    connect?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
};
export type coupon_redemptionsUncheckedCreateNestedManyWithoutCouponsInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput> | Prisma.coupon_redemptionsCreateWithoutCouponsInput[] | Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput | Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput[];
    createMany?: Prisma.coupon_redemptionsCreateManyCouponsInputEnvelope;
    connect?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
};
export type coupon_redemptionsUpdateManyWithoutCouponsNestedInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput> | Prisma.coupon_redemptionsCreateWithoutCouponsInput[] | Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput | Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput[];
    upsert?: Prisma.coupon_redemptionsUpsertWithWhereUniqueWithoutCouponsInput | Prisma.coupon_redemptionsUpsertWithWhereUniqueWithoutCouponsInput[];
    createMany?: Prisma.coupon_redemptionsCreateManyCouponsInputEnvelope;
    set?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    disconnect?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    delete?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    connect?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    update?: Prisma.coupon_redemptionsUpdateWithWhereUniqueWithoutCouponsInput | Prisma.coupon_redemptionsUpdateWithWhereUniqueWithoutCouponsInput[];
    updateMany?: Prisma.coupon_redemptionsUpdateManyWithWhereWithoutCouponsInput | Prisma.coupon_redemptionsUpdateManyWithWhereWithoutCouponsInput[];
    deleteMany?: Prisma.coupon_redemptionsScalarWhereInput | Prisma.coupon_redemptionsScalarWhereInput[];
};
export type coupon_redemptionsUncheckedUpdateManyWithoutCouponsNestedInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput> | Prisma.coupon_redemptionsCreateWithoutCouponsInput[] | Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput[];
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput | Prisma.coupon_redemptionsCreateOrConnectWithoutCouponsInput[];
    upsert?: Prisma.coupon_redemptionsUpsertWithWhereUniqueWithoutCouponsInput | Prisma.coupon_redemptionsUpsertWithWhereUniqueWithoutCouponsInput[];
    createMany?: Prisma.coupon_redemptionsCreateManyCouponsInputEnvelope;
    set?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    disconnect?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    delete?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    connect?: Prisma.coupon_redemptionsWhereUniqueInput | Prisma.coupon_redemptionsWhereUniqueInput[];
    update?: Prisma.coupon_redemptionsUpdateWithWhereUniqueWithoutCouponsInput | Prisma.coupon_redemptionsUpdateWithWhereUniqueWithoutCouponsInput[];
    updateMany?: Prisma.coupon_redemptionsUpdateManyWithWhereWithoutCouponsInput | Prisma.coupon_redemptionsUpdateManyWithWhereWithoutCouponsInput[];
    deleteMany?: Prisma.coupon_redemptionsScalarWhereInput | Prisma.coupon_redemptionsScalarWhereInput[];
};
export type coupon_redemptionsCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.coupon_redemptionsWhereUniqueInput;
};
export type coupon_redemptionsUncheckedCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.coupon_redemptionsWhereUniqueInput;
};
export type coupon_redemptionsUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.coupon_redemptionsUpsertWithoutOrdersInput;
    disconnect?: Prisma.coupon_redemptionsWhereInput | boolean;
    delete?: Prisma.coupon_redemptionsWhereInput | boolean;
    connect?: Prisma.coupon_redemptionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.coupon_redemptionsUpdateToOneWithWhereWithoutOrdersInput, Prisma.coupon_redemptionsUpdateWithoutOrdersInput>, Prisma.coupon_redemptionsUncheckedUpdateWithoutOrdersInput>;
};
export type coupon_redemptionsUncheckedUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.coupon_redemptionsCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.coupon_redemptionsUpsertWithoutOrdersInput;
    disconnect?: Prisma.coupon_redemptionsWhereInput | boolean;
    delete?: Prisma.coupon_redemptionsWhereInput | boolean;
    connect?: Prisma.coupon_redemptionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.coupon_redemptionsUpdateToOneWithWhereWithoutOrdersInput, Prisma.coupon_redemptionsUpdateWithoutOrdersInput>, Prisma.coupon_redemptionsUncheckedUpdateWithoutOrdersInput>;
};
export type coupon_redemptionsCreateWithoutCouponsInput = {
    redeemed_at?: Date | string | null;
    orders: Prisma.ordersCreateNestedOneWithoutCoupon_redemptionsInput;
};
export type coupon_redemptionsUncheckedCreateWithoutCouponsInput = {
    order_id: bigint | number;
    redeemed_at?: Date | string | null;
};
export type coupon_redemptionsCreateOrConnectWithoutCouponsInput = {
    where: Prisma.coupon_redemptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput>;
};
export type coupon_redemptionsCreateManyCouponsInputEnvelope = {
    data: Prisma.coupon_redemptionsCreateManyCouponsInput | Prisma.coupon_redemptionsCreateManyCouponsInput[];
    skipDuplicates?: boolean;
};
export type coupon_redemptionsUpsertWithWhereUniqueWithoutCouponsInput = {
    where: Prisma.coupon_redemptionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.coupon_redemptionsUpdateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedUpdateWithoutCouponsInput>;
    create: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedCreateWithoutCouponsInput>;
};
export type coupon_redemptionsUpdateWithWhereUniqueWithoutCouponsInput = {
    where: Prisma.coupon_redemptionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.coupon_redemptionsUpdateWithoutCouponsInput, Prisma.coupon_redemptionsUncheckedUpdateWithoutCouponsInput>;
};
export type coupon_redemptionsUpdateManyWithWhereWithoutCouponsInput = {
    where: Prisma.coupon_redemptionsScalarWhereInput;
    data: Prisma.XOR<Prisma.coupon_redemptionsUpdateManyMutationInput, Prisma.coupon_redemptionsUncheckedUpdateManyWithoutCouponsInput>;
};
export type coupon_redemptionsScalarWhereInput = {
    AND?: Prisma.coupon_redemptionsScalarWhereInput | Prisma.coupon_redemptionsScalarWhereInput[];
    OR?: Prisma.coupon_redemptionsScalarWhereInput[];
    NOT?: Prisma.coupon_redemptionsScalarWhereInput | Prisma.coupon_redemptionsScalarWhereInput[];
    coupon_id?: Prisma.BigIntFilter<"coupon_redemptions"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"coupon_redemptions"> | bigint | number;
    redeemed_at?: Prisma.DateTimeNullableFilter<"coupon_redemptions"> | Date | string | null;
};
export type coupon_redemptionsCreateWithoutOrdersInput = {
    redeemed_at?: Date | string | null;
    coupons: Prisma.couponsCreateNestedOneWithoutCoupon_redemptionsInput;
};
export type coupon_redemptionsUncheckedCreateWithoutOrdersInput = {
    coupon_id: bigint | number;
    redeemed_at?: Date | string | null;
};
export type coupon_redemptionsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.coupon_redemptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedCreateWithoutOrdersInput>;
};
export type coupon_redemptionsUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.coupon_redemptionsUpdateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.coupon_redemptionsCreateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.coupon_redemptionsWhereInput;
};
export type coupon_redemptionsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.coupon_redemptionsWhereInput;
    data: Prisma.XOR<Prisma.coupon_redemptionsUpdateWithoutOrdersInput, Prisma.coupon_redemptionsUncheckedUpdateWithoutOrdersInput>;
};
export type coupon_redemptionsUpdateWithoutOrdersInput = {
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    coupons?: Prisma.couponsUpdateOneRequiredWithoutCoupon_redemptionsNestedInput;
};
export type coupon_redemptionsUncheckedUpdateWithoutOrdersInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type coupon_redemptionsCreateManyCouponsInput = {
    order_id: bigint | number;
    redeemed_at?: Date | string | null;
};
export type coupon_redemptionsUpdateWithoutCouponsInput = {
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutCoupon_redemptionsNestedInput;
};
export type coupon_redemptionsUncheckedUpdateWithoutCouponsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type coupon_redemptionsUncheckedUpdateManyWithoutCouponsInput = {
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    redeemed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type coupon_redemptionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    coupon_id?: boolean;
    order_id?: boolean;
    redeemed_at?: boolean;
    coupons?: boolean | Prisma.couponsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coupon_redemptions"]>;
export type coupon_redemptionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    coupon_id?: boolean;
    order_id?: boolean;
    redeemed_at?: boolean;
    coupons?: boolean | Prisma.couponsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coupon_redemptions"]>;
export type coupon_redemptionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    coupon_id?: boolean;
    order_id?: boolean;
    redeemed_at?: boolean;
    coupons?: boolean | Prisma.couponsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coupon_redemptions"]>;
export type coupon_redemptionsSelectScalar = {
    coupon_id?: boolean;
    order_id?: boolean;
    redeemed_at?: boolean;
};
export type coupon_redemptionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"coupon_id" | "order_id" | "redeemed_at", ExtArgs["result"]["coupon_redemptions"]>;
export type coupon_redemptionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupons?: boolean | Prisma.couponsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type coupon_redemptionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupons?: boolean | Prisma.couponsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type coupon_redemptionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupons?: boolean | Prisma.couponsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $coupon_redemptionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "coupon_redemptions";
    objects: {
        coupons: Prisma.$couponsPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        coupon_id: bigint;
        order_id: bigint;
        redeemed_at: Date | null;
    }, ExtArgs["result"]["coupon_redemptions"]>;
    composites: {};
};
export type coupon_redemptionsGetPayload<S extends boolean | null | undefined | coupon_redemptionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload, S>;
export type coupon_redemptionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<coupon_redemptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Coupon_redemptionsCountAggregateInputType | true;
};
export interface coupon_redemptionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['coupon_redemptions'];
        meta: {
            name: 'coupon_redemptions';
        };
    };
    findUnique<T extends coupon_redemptionsFindUniqueArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends coupon_redemptionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends coupon_redemptionsFindFirstArgs>(args?: Prisma.SelectSubset<T, coupon_redemptionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends coupon_redemptionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, coupon_redemptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends coupon_redemptionsFindManyArgs>(args?: Prisma.SelectSubset<T, coupon_redemptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends coupon_redemptionsCreateArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsCreateArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends coupon_redemptionsCreateManyArgs>(args?: Prisma.SelectSubset<T, coupon_redemptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends coupon_redemptionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, coupon_redemptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends coupon_redemptionsDeleteArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsDeleteArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends coupon_redemptionsUpdateArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsUpdateArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends coupon_redemptionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, coupon_redemptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends coupon_redemptionsUpdateManyArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends coupon_redemptionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends coupon_redemptionsUpsertArgs>(args: Prisma.SelectSubset<T, coupon_redemptionsUpsertArgs<ExtArgs>>): Prisma.Prisma__coupon_redemptionsClient<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends coupon_redemptionsCountArgs>(args?: Prisma.Subset<T, coupon_redemptionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Coupon_redemptionsCountAggregateOutputType> : number>;
    aggregate<T extends Coupon_redemptionsAggregateArgs>(args: Prisma.Subset<T, Coupon_redemptionsAggregateArgs>): Prisma.PrismaPromise<GetCoupon_redemptionsAggregateType<T>>;
    groupBy<T extends coupon_redemptionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: coupon_redemptionsGroupByArgs['orderBy'];
    } : {
        orderBy?: coupon_redemptionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, coupon_redemptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoupon_redemptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: coupon_redemptionsFieldRefs;
}
export interface Prisma__coupon_redemptionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    coupons<T extends Prisma.couponsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.couponsDefaultArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface coupon_redemptionsFieldRefs {
    readonly coupon_id: Prisma.FieldRef<"coupon_redemptions", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"coupon_redemptions", 'BigInt'>;
    readonly redeemed_at: Prisma.FieldRef<"coupon_redemptions", 'DateTime'>;
}
export type coupon_redemptionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where: Prisma.coupon_redemptionsWhereUniqueInput;
};
export type coupon_redemptionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where: Prisma.coupon_redemptionsWhereUniqueInput;
};
export type coupon_redemptionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where?: Prisma.coupon_redemptionsWhereInput;
    orderBy?: Prisma.coupon_redemptionsOrderByWithRelationInput | Prisma.coupon_redemptionsOrderByWithRelationInput[];
    cursor?: Prisma.coupon_redemptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Coupon_redemptionsScalarFieldEnum | Prisma.Coupon_redemptionsScalarFieldEnum[];
};
export type coupon_redemptionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where?: Prisma.coupon_redemptionsWhereInput;
    orderBy?: Prisma.coupon_redemptionsOrderByWithRelationInput | Prisma.coupon_redemptionsOrderByWithRelationInput[];
    cursor?: Prisma.coupon_redemptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Coupon_redemptionsScalarFieldEnum | Prisma.Coupon_redemptionsScalarFieldEnum[];
};
export type coupon_redemptionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where?: Prisma.coupon_redemptionsWhereInput;
    orderBy?: Prisma.coupon_redemptionsOrderByWithRelationInput | Prisma.coupon_redemptionsOrderByWithRelationInput[];
    cursor?: Prisma.coupon_redemptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Coupon_redemptionsScalarFieldEnum | Prisma.Coupon_redemptionsScalarFieldEnum[];
};
export type coupon_redemptionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.coupon_redemptionsCreateInput, Prisma.coupon_redemptionsUncheckedCreateInput>;
};
export type coupon_redemptionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.coupon_redemptionsCreateManyInput | Prisma.coupon_redemptionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type coupon_redemptionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    data: Prisma.coupon_redemptionsCreateManyInput | Prisma.coupon_redemptionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.coupon_redemptionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type coupon_redemptionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.coupon_redemptionsUpdateInput, Prisma.coupon_redemptionsUncheckedUpdateInput>;
    where: Prisma.coupon_redemptionsWhereUniqueInput;
};
export type coupon_redemptionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.coupon_redemptionsUpdateManyMutationInput, Prisma.coupon_redemptionsUncheckedUpdateManyInput>;
    where?: Prisma.coupon_redemptionsWhereInput;
    limit?: number;
};
export type coupon_redemptionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.coupon_redemptionsUpdateManyMutationInput, Prisma.coupon_redemptionsUncheckedUpdateManyInput>;
    where?: Prisma.coupon_redemptionsWhereInput;
    limit?: number;
    include?: Prisma.coupon_redemptionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type coupon_redemptionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where: Prisma.coupon_redemptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.coupon_redemptionsCreateInput, Prisma.coupon_redemptionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.coupon_redemptionsUpdateInput, Prisma.coupon_redemptionsUncheckedUpdateInput>;
};
export type coupon_redemptionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where: Prisma.coupon_redemptionsWhereUniqueInput;
};
export type coupon_redemptionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.coupon_redemptionsWhereInput;
    limit?: number;
};
export type coupon_redemptionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
};
