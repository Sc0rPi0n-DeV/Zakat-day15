import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type paymentsModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentsPayload>;
export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type PaymentsAvgAggregateOutputType = {
    payment_id: number | null;
    order_id: number | null;
    method_id: number | null;
    amount: runtime.Decimal | null;
};
export type PaymentsSumAggregateOutputType = {
    payment_id: bigint | null;
    order_id: bigint | null;
    method_id: bigint | null;
    amount: runtime.Decimal | null;
};
export type PaymentsMinAggregateOutputType = {
    payment_id: bigint | null;
    order_id: bigint | null;
    method_id: bigint | null;
    amount: runtime.Decimal | null;
    status: string | null;
    paid_at: Date | null;
};
export type PaymentsMaxAggregateOutputType = {
    payment_id: bigint | null;
    order_id: bigint | null;
    method_id: bigint | null;
    amount: runtime.Decimal | null;
    status: string | null;
    paid_at: Date | null;
};
export type PaymentsCountAggregateOutputType = {
    payment_id: number;
    order_id: number;
    method_id: number;
    amount: number;
    status: number;
    paid_at: number;
    _all: number;
};
export type PaymentsAvgAggregateInputType = {
    payment_id?: true;
    order_id?: true;
    method_id?: true;
    amount?: true;
};
export type PaymentsSumAggregateInputType = {
    payment_id?: true;
    order_id?: true;
    method_id?: true;
    amount?: true;
};
export type PaymentsMinAggregateInputType = {
    payment_id?: true;
    order_id?: true;
    method_id?: true;
    amount?: true;
    status?: true;
    paid_at?: true;
};
export type PaymentsMaxAggregateInputType = {
    payment_id?: true;
    order_id?: true;
    method_id?: true;
    amount?: true;
    status?: true;
    paid_at?: true;
};
export type PaymentsCountAggregateInputType = {
    payment_id?: true;
    order_id?: true;
    method_id?: true;
    amount?: true;
    status?: true;
    paid_at?: true;
    _all?: true;
};
export type PaymentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentsCountAggregateInputType;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayments[P]> : Prisma.GetScalarType<T[P], AggregatePayments[P]>;
};
export type paymentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithAggregationInput | Prisma.paymentsOrderByWithAggregationInput[];
    by: Prisma.PaymentsScalarFieldEnum[] | Prisma.PaymentsScalarFieldEnum;
    having?: Prisma.paymentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentsCountAggregateInputType | true;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type PaymentsGroupByOutputType = {
    payment_id: bigint;
    order_id: bigint;
    method_id: bigint;
    amount: runtime.Decimal;
    status: string;
    paid_at: Date | null;
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]>;
}>>;
export type paymentsWhereInput = {
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    payment_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    method_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"payments"> | string;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    payment_methods?: Prisma.XOR<Prisma.Payment_methodsScalarRelationFilter, Prisma.payment_methodsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    refunds?: Prisma.RefundsListRelationFilter;
};
export type paymentsOrderByWithRelationInput = {
    payment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    method_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_methods?: Prisma.payment_methodsOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
    refunds?: Prisma.refundsOrderByRelationAggregateInput;
};
export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: bigint | number;
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    order_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    method_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"payments"> | string;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    payment_methods?: Prisma.XOR<Prisma.Payment_methodsScalarRelationFilter, Prisma.payment_methodsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    refunds?: Prisma.RefundsListRelationFilter;
}, "payment_id">;
export type paymentsOrderByWithAggregationInput = {
    payment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    method_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.paymentsCountOrderByAggregateInput;
    _avg?: Prisma.paymentsAvgOrderByAggregateInput;
    _max?: Prisma.paymentsMaxOrderByAggregateInput;
    _min?: Prisma.paymentsMinOrderByAggregateInput;
    _sum?: Prisma.paymentsSumOrderByAggregateInput;
};
export type paymentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    payment_id?: Prisma.BigIntWithAggregatesFilter<"payments"> | bigint | number;
    order_id?: Prisma.BigIntWithAggregatesFilter<"payments"> | bigint | number;
    method_id?: Prisma.BigIntWithAggregatesFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringWithAggregatesFilter<"payments"> | string;
    paid_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null;
};
export type paymentsCreateInput = {
    payment_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
    payment_methods: Prisma.payment_methodsCreateNestedOneWithoutPaymentsInput;
    orders: Prisma.ordersCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutPaymentsInput;
};
export type paymentsUncheckedCreateInput = {
    payment_id?: bigint | number;
    order_id: bigint | number;
    method_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutPaymentsInput;
};
export type paymentsUpdateInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_methods?: Prisma.payment_methodsUpdateOneRequiredWithoutPaymentsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    method_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutPaymentsNestedInput;
};
export type paymentsCreateManyInput = {
    payment_id?: bigint | number;
    order_id: bigint | number;
    method_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
};
export type paymentsUpdateManyMutationInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsUncheckedUpdateManyInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    method_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentsListRelationFilter = {
    every?: Prisma.paymentsWhereInput;
    some?: Prisma.paymentsWhereInput;
    none?: Prisma.paymentsWhereInput;
};
export type paymentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type paymentsCountOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    method_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type paymentsAvgOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    method_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type paymentsMaxOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    method_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type paymentsMinOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    method_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
};
export type paymentsSumOrderByAggregateInput = {
    payment_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    method_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type PaymentsScalarRelationFilter = {
    is?: Prisma.paymentsWhereInput;
    isNot?: Prisma.paymentsWhereInput;
};
export type paymentsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput | Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput | Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateNestedManyWithoutPayment_methodsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutPayment_methodsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutPayment_methodsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput | Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutPayment_methodsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput> | Prisma.paymentsCreateWithoutPayment_methodsInput[] | Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput | Prisma.paymentsCreateOrConnectWithoutPayment_methodsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput[];
    createMany?: Prisma.paymentsCreateManyPayment_methodsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput | Prisma.paymentsUpdateManyWithWhereWithoutPayment_methodsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateNestedOneWithoutRefundsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutRefundsInput, Prisma.paymentsUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutRefundsInput;
    connect?: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutRefundsInput, Prisma.paymentsUncheckedCreateWithoutRefundsInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutRefundsInput;
    upsert?: Prisma.paymentsUpsertWithoutRefundsInput;
    connect?: Prisma.paymentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.paymentsUpdateToOneWithWhereWithoutRefundsInput, Prisma.paymentsUpdateWithoutRefundsInput>, Prisma.paymentsUncheckedUpdateWithoutRefundsInput>;
};
export type paymentsCreateWithoutOrdersInput = {
    payment_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
    payment_methods: Prisma.payment_methodsCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutOrdersInput = {
    payment_id?: bigint | number;
    method_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutPaymentsInput;
};
export type paymentsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput>;
};
export type paymentsCreateManyOrdersInputEnvelope = {
    data: Prisma.paymentsCreateManyOrdersInput | Prisma.paymentsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutOrdersInput, Prisma.paymentsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutOrdersInput, Prisma.paymentsUncheckedUpdateWithoutOrdersInput>;
};
export type paymentsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutOrdersInput>;
};
export type paymentsScalarWhereInput = {
    AND?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    OR?: Prisma.paymentsScalarWhereInput[];
    NOT?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    payment_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    method_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"payments"> | string;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
};
export type paymentsCreateWithoutPayment_methodsInput = {
    payment_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
    orders: Prisma.ordersCreateNestedOneWithoutPaymentsInput;
    refunds?: Prisma.refundsCreateNestedManyWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutPayment_methodsInput = {
    payment_id?: bigint | number;
    order_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
    refunds?: Prisma.refundsUncheckedCreateNestedManyWithoutPaymentsInput;
};
export type paymentsCreateOrConnectWithoutPayment_methodsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput>;
};
export type paymentsCreateManyPayment_methodsInputEnvelope = {
    data: Prisma.paymentsCreateManyPayment_methodsInput | Prisma.paymentsCreateManyPayment_methodsInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutPayment_methodsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutPayment_methodsInput, Prisma.paymentsUncheckedUpdateWithoutPayment_methodsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutPayment_methodsInput, Prisma.paymentsUncheckedCreateWithoutPayment_methodsInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutPayment_methodsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutPayment_methodsInput, Prisma.paymentsUncheckedUpdateWithoutPayment_methodsInput>;
};
export type paymentsUpdateManyWithWhereWithoutPayment_methodsInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutPayment_methodsInput>;
};
export type paymentsCreateWithoutRefundsInput = {
    payment_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
    payment_methods: Prisma.payment_methodsCreateNestedOneWithoutPaymentsInput;
    orders: Prisma.ordersCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutRefundsInput = {
    payment_id?: bigint | number;
    order_id: bigint | number;
    method_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
};
export type paymentsCreateOrConnectWithoutRefundsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutRefundsInput, Prisma.paymentsUncheckedCreateWithoutRefundsInput>;
};
export type paymentsUpsertWithoutRefundsInput = {
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutRefundsInput, Prisma.paymentsUncheckedUpdateWithoutRefundsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutRefundsInput, Prisma.paymentsUncheckedCreateWithoutRefundsInput>;
    where?: Prisma.paymentsWhereInput;
};
export type paymentsUpdateToOneWithWhereWithoutRefundsInput = {
    where?: Prisma.paymentsWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutRefundsInput, Prisma.paymentsUncheckedUpdateWithoutRefundsInput>;
};
export type paymentsUpdateWithoutRefundsInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_methods?: Prisma.payment_methodsUpdateOneRequiredWithoutPaymentsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutRefundsInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    method_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsCreateManyOrdersInput = {
    payment_id?: bigint | number;
    method_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
};
export type paymentsUpdateWithoutOrdersInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_methods?: Prisma.payment_methodsUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutOrdersInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    method_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateManyWithoutOrdersInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    method_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type paymentsCreateManyPayment_methodsInput = {
    payment_id?: bigint | number;
    order_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    paid_at?: Date | string | null;
};
export type paymentsUpdateWithoutPayment_methodsInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutPaymentsNestedInput;
    refunds?: Prisma.refundsUpdateManyWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutPayment_methodsInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refunds?: Prisma.refundsUncheckedUpdateManyWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateManyWithoutPayment_methodsInput = {
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PaymentsCountOutputType = {
    refunds: number;
};
export type PaymentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refunds?: boolean | PaymentsCountOutputTypeCountRefundsArgs;
};
export type PaymentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentsCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentsCountOutputTypeCountRefundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
};
export type paymentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    payment_id?: boolean;
    order_id?: boolean;
    method_id?: boolean;
    amount?: boolean;
    status?: boolean;
    paid_at?: boolean;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    refunds?: boolean | Prisma.payments$refundsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    payment_id?: boolean;
    order_id?: boolean;
    method_id?: boolean;
    amount?: boolean;
    status?: boolean;
    paid_at?: boolean;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    payment_id?: boolean;
    order_id?: boolean;
    method_id?: boolean;
    amount?: boolean;
    status?: boolean;
    paid_at?: boolean;
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectScalar = {
    payment_id?: boolean;
    order_id?: boolean;
    method_id?: boolean;
    amount?: boolean;
    status?: boolean;
    paid_at?: boolean;
};
export type paymentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"payment_id" | "order_id" | "method_id" | "amount" | "status" | "paid_at", ExtArgs["result"]["payments"]>;
export type paymentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    refunds?: boolean | Prisma.payments$refundsArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type paymentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment_methods?: boolean | Prisma.payment_methodsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $paymentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payments";
    objects: {
        payment_methods: Prisma.$payment_methodsPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>;
        refunds: Prisma.$refundsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        payment_id: bigint;
        order_id: bigint;
        method_id: bigint;
        amount: runtime.Decimal;
        status: string;
        paid_at: Date | null;
    }, ExtArgs["result"]["payments"]>;
    composites: {};
};
export type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentsPayload, S>;
export type paymentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentsCountAggregateInputType | true;
};
export interface paymentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payments'];
        meta: {
            name: 'payments';
        };
    };
    findUnique<T extends paymentsFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends paymentsFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends paymentsFindManyArgs>(args?: Prisma.SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends paymentsCreateArgs>(args: Prisma.SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends paymentsCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends paymentsDeleteArgs>(args: Prisma.SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends paymentsUpdateArgs>(args: Prisma.SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends paymentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends paymentsUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends paymentsUpsertArgs>(args: Prisma.SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends paymentsCountArgs>(args?: Prisma.Subset<T, paymentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentsCountAggregateOutputType> : number>;
    aggregate<T extends PaymentsAggregateArgs>(args: Prisma.Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>;
    groupBy<T extends paymentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentsGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: paymentsFieldRefs;
}
export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment_methods<T extends Prisma.payment_methodsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payment_methodsDefaultArgs<ExtArgs>>): Prisma.Prisma__payment_methodsClient<runtime.Types.Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    refunds<T extends Prisma.payments$refundsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payments$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface paymentsFieldRefs {
    readonly payment_id: Prisma.FieldRef<"payments", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"payments", 'BigInt'>;
    readonly method_id: Prisma.FieldRef<"payments", 'BigInt'>;
    readonly amount: Prisma.FieldRef<"payments", 'Decimal'>;
    readonly status: Prisma.FieldRef<"payments", 'String'>;
    readonly paid_at: Prisma.FieldRef<"payments", 'DateTime'>;
}
export type paymentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
};
export type paymentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type paymentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.paymentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
    include?: Prisma.paymentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
};
export type paymentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type payments$refundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithRelationInput | Prisma.refundsOrderByWithRelationInput[];
    cursor?: Prisma.refundsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundsScalarFieldEnum | Prisma.RefundsScalarFieldEnum[];
};
export type paymentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
};
