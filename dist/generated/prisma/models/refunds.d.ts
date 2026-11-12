import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type refundsModel = runtime.Types.Result.DefaultSelection<Prisma.$refundsPayload>;
export type AggregateRefunds = {
    _count: RefundsCountAggregateOutputType | null;
    _avg: RefundsAvgAggregateOutputType | null;
    _sum: RefundsSumAggregateOutputType | null;
    _min: RefundsMinAggregateOutputType | null;
    _max: RefundsMaxAggregateOutputType | null;
};
export type RefundsAvgAggregateOutputType = {
    refund_id: number | null;
    payment_id: number | null;
    amount: runtime.Decimal | null;
};
export type RefundsSumAggregateOutputType = {
    refund_id: bigint | null;
    payment_id: bigint | null;
    amount: runtime.Decimal | null;
};
export type RefundsMinAggregateOutputType = {
    refund_id: bigint | null;
    payment_id: bigint | null;
    amount: runtime.Decimal | null;
    reason: string | null;
    refunded_at: Date | null;
};
export type RefundsMaxAggregateOutputType = {
    refund_id: bigint | null;
    payment_id: bigint | null;
    amount: runtime.Decimal | null;
    reason: string | null;
    refunded_at: Date | null;
};
export type RefundsCountAggregateOutputType = {
    refund_id: number;
    payment_id: number;
    amount: number;
    reason: number;
    refunded_at: number;
    _all: number;
};
export type RefundsAvgAggregateInputType = {
    refund_id?: true;
    payment_id?: true;
    amount?: true;
};
export type RefundsSumAggregateInputType = {
    refund_id?: true;
    payment_id?: true;
    amount?: true;
};
export type RefundsMinAggregateInputType = {
    refund_id?: true;
    payment_id?: true;
    amount?: true;
    reason?: true;
    refunded_at?: true;
};
export type RefundsMaxAggregateInputType = {
    refund_id?: true;
    payment_id?: true;
    amount?: true;
    reason?: true;
    refunded_at?: true;
};
export type RefundsCountAggregateInputType = {
    refund_id?: true;
    payment_id?: true;
    amount?: true;
    reason?: true;
    refunded_at?: true;
    _all?: true;
};
export type RefundsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithRelationInput | Prisma.refundsOrderByWithRelationInput[];
    cursor?: Prisma.refundsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefundsCountAggregateInputType;
    _avg?: RefundsAvgAggregateInputType;
    _sum?: RefundsSumAggregateInputType;
    _min?: RefundsMinAggregateInputType;
    _max?: RefundsMaxAggregateInputType;
};
export type GetRefundsAggregateType<T extends RefundsAggregateArgs> = {
    [P in keyof T & keyof AggregateRefunds]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefunds[P]> : Prisma.GetScalarType<T[P], AggregateRefunds[P]>;
};
export type refundsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
    orderBy?: Prisma.refundsOrderByWithAggregationInput | Prisma.refundsOrderByWithAggregationInput[];
    by: Prisma.RefundsScalarFieldEnum[] | Prisma.RefundsScalarFieldEnum;
    having?: Prisma.refundsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefundsCountAggregateInputType | true;
    _avg?: RefundsAvgAggregateInputType;
    _sum?: RefundsSumAggregateInputType;
    _min?: RefundsMinAggregateInputType;
    _max?: RefundsMaxAggregateInputType;
};
export type RefundsGroupByOutputType = {
    refund_id: bigint;
    payment_id: bigint;
    amount: runtime.Decimal;
    reason: string | null;
    refunded_at: Date | null;
    _count: RefundsCountAggregateOutputType | null;
    _avg: RefundsAvgAggregateOutputType | null;
    _sum: RefundsSumAggregateOutputType | null;
    _min: RefundsMinAggregateOutputType | null;
    _max: RefundsMaxAggregateOutputType | null;
};
export type GetRefundsGroupByPayload<T extends refundsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefundsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefundsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefundsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefundsGroupByOutputType[P]>;
}>>;
export type refundsWhereInput = {
    AND?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    OR?: Prisma.refundsWhereInput[];
    NOT?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    refund_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    payment_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    amount?: Prisma.DecimalFilter<"refunds"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"refunds"> | string | null;
    refunded_at?: Prisma.DateTimeNullableFilter<"refunds"> | Date | string | null;
    payments?: Prisma.XOR<Prisma.PaymentsScalarRelationFilter, Prisma.paymentsWhereInput>;
};
export type refundsOrderByWithRelationInput = {
    refund_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    refunded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    payments?: Prisma.paymentsOrderByWithRelationInput;
};
export type refundsWhereUniqueInput = Prisma.AtLeast<{
    refund_id?: bigint | number;
    AND?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    OR?: Prisma.refundsWhereInput[];
    NOT?: Prisma.refundsWhereInput | Prisma.refundsWhereInput[];
    payment_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    amount?: Prisma.DecimalFilter<"refunds"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"refunds"> | string | null;
    refunded_at?: Prisma.DateTimeNullableFilter<"refunds"> | Date | string | null;
    payments?: Prisma.XOR<Prisma.PaymentsScalarRelationFilter, Prisma.paymentsWhereInput>;
}, "refund_id">;
export type refundsOrderByWithAggregationInput = {
    refund_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    refunded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.refundsCountOrderByAggregateInput;
    _avg?: Prisma.refundsAvgOrderByAggregateInput;
    _max?: Prisma.refundsMaxOrderByAggregateInput;
    _min?: Prisma.refundsMinOrderByAggregateInput;
    _sum?: Prisma.refundsSumOrderByAggregateInput;
};
export type refundsScalarWhereWithAggregatesInput = {
    AND?: Prisma.refundsScalarWhereWithAggregatesInput | Prisma.refundsScalarWhereWithAggregatesInput[];
    OR?: Prisma.refundsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.refundsScalarWhereWithAggregatesInput | Prisma.refundsScalarWhereWithAggregatesInput[];
    refund_id?: Prisma.BigIntWithAggregatesFilter<"refunds"> | bigint | number;
    payment_id?: Prisma.BigIntWithAggregatesFilter<"refunds"> | bigint | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"refunds"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"refunds"> | string | null;
    refunded_at?: Prisma.DateTimeNullableWithAggregatesFilter<"refunds"> | Date | string | null;
};
export type refundsCreateInput = {
    refund_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    refunded_at?: Date | string | null;
    payments: Prisma.paymentsCreateNestedOneWithoutRefundsInput;
};
export type refundsUncheckedCreateInput = {
    refund_id?: bigint | number;
    payment_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    refunded_at?: Date | string | null;
};
export type refundsUpdateInput = {
    refund_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refunded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payments?: Prisma.paymentsUpdateOneRequiredWithoutRefundsNestedInput;
};
export type refundsUncheckedUpdateInput = {
    refund_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refunded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsCreateManyInput = {
    refund_id?: bigint | number;
    payment_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    refunded_at?: Date | string | null;
};
export type refundsUpdateManyMutationInput = {
    refund_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refunded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsUncheckedUpdateManyInput = {
    refund_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    payment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refunded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefundsListRelationFilter = {
    every?: Prisma.refundsWhereInput;
    some?: Prisma.refundsWhereInput;
    none?: Prisma.refundsWhereInput;
};
export type refundsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type refundsCountOrderByAggregateInput = {
    refund_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refunded_at?: Prisma.SortOrder;
};
export type refundsAvgOrderByAggregateInput = {
    refund_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type refundsMaxOrderByAggregateInput = {
    refund_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refunded_at?: Prisma.SortOrder;
};
export type refundsMinOrderByAggregateInput = {
    refund_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    refunded_at?: Prisma.SortOrder;
};
export type refundsSumOrderByAggregateInput = {
    refund_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type refundsCreateNestedManyWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutPaymentsInput, Prisma.refundsUncheckedCreateWithoutPaymentsInput> | Prisma.refundsCreateWithoutPaymentsInput[] | Prisma.refundsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutPaymentsInput | Prisma.refundsCreateOrConnectWithoutPaymentsInput[];
    createMany?: Prisma.refundsCreateManyPaymentsInputEnvelope;
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
};
export type refundsUncheckedCreateNestedManyWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutPaymentsInput, Prisma.refundsUncheckedCreateWithoutPaymentsInput> | Prisma.refundsCreateWithoutPaymentsInput[] | Prisma.refundsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutPaymentsInput | Prisma.refundsCreateOrConnectWithoutPaymentsInput[];
    createMany?: Prisma.refundsCreateManyPaymentsInputEnvelope;
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
};
export type refundsUpdateManyWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutPaymentsInput, Prisma.refundsUncheckedCreateWithoutPaymentsInput> | Prisma.refundsCreateWithoutPaymentsInput[] | Prisma.refundsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutPaymentsInput | Prisma.refundsCreateOrConnectWithoutPaymentsInput[];
    upsert?: Prisma.refundsUpsertWithWhereUniqueWithoutPaymentsInput | Prisma.refundsUpsertWithWhereUniqueWithoutPaymentsInput[];
    createMany?: Prisma.refundsCreateManyPaymentsInputEnvelope;
    set?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    disconnect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    delete?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    update?: Prisma.refundsUpdateWithWhereUniqueWithoutPaymentsInput | Prisma.refundsUpdateWithWhereUniqueWithoutPaymentsInput[];
    updateMany?: Prisma.refundsUpdateManyWithWhereWithoutPaymentsInput | Prisma.refundsUpdateManyWithWhereWithoutPaymentsInput[];
    deleteMany?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
};
export type refundsUncheckedUpdateManyWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.refundsCreateWithoutPaymentsInput, Prisma.refundsUncheckedCreateWithoutPaymentsInput> | Prisma.refundsCreateWithoutPaymentsInput[] | Prisma.refundsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.refundsCreateOrConnectWithoutPaymentsInput | Prisma.refundsCreateOrConnectWithoutPaymentsInput[];
    upsert?: Prisma.refundsUpsertWithWhereUniqueWithoutPaymentsInput | Prisma.refundsUpsertWithWhereUniqueWithoutPaymentsInput[];
    createMany?: Prisma.refundsCreateManyPaymentsInputEnvelope;
    set?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    disconnect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    delete?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    connect?: Prisma.refundsWhereUniqueInput | Prisma.refundsWhereUniqueInput[];
    update?: Prisma.refundsUpdateWithWhereUniqueWithoutPaymentsInput | Prisma.refundsUpdateWithWhereUniqueWithoutPaymentsInput[];
    updateMany?: Prisma.refundsUpdateManyWithWhereWithoutPaymentsInput | Prisma.refundsUpdateManyWithWhereWithoutPaymentsInput[];
    deleteMany?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
};
export type refundsCreateWithoutPaymentsInput = {
    refund_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    refunded_at?: Date | string | null;
};
export type refundsUncheckedCreateWithoutPaymentsInput = {
    refund_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    refunded_at?: Date | string | null;
};
export type refundsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.refundsWhereUniqueInput;
    create: Prisma.XOR<Prisma.refundsCreateWithoutPaymentsInput, Prisma.refundsUncheckedCreateWithoutPaymentsInput>;
};
export type refundsCreateManyPaymentsInputEnvelope = {
    data: Prisma.refundsCreateManyPaymentsInput | Prisma.refundsCreateManyPaymentsInput[];
    skipDuplicates?: boolean;
};
export type refundsUpsertWithWhereUniqueWithoutPaymentsInput = {
    where: Prisma.refundsWhereUniqueInput;
    update: Prisma.XOR<Prisma.refundsUpdateWithoutPaymentsInput, Prisma.refundsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.refundsCreateWithoutPaymentsInput, Prisma.refundsUncheckedCreateWithoutPaymentsInput>;
};
export type refundsUpdateWithWhereUniqueWithoutPaymentsInput = {
    where: Prisma.refundsWhereUniqueInput;
    data: Prisma.XOR<Prisma.refundsUpdateWithoutPaymentsInput, Prisma.refundsUncheckedUpdateWithoutPaymentsInput>;
};
export type refundsUpdateManyWithWhereWithoutPaymentsInput = {
    where: Prisma.refundsScalarWhereInput;
    data: Prisma.XOR<Prisma.refundsUpdateManyMutationInput, Prisma.refundsUncheckedUpdateManyWithoutPaymentsInput>;
};
export type refundsScalarWhereInput = {
    AND?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
    OR?: Prisma.refundsScalarWhereInput[];
    NOT?: Prisma.refundsScalarWhereInput | Prisma.refundsScalarWhereInput[];
    refund_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    payment_id?: Prisma.BigIntFilter<"refunds"> | bigint | number;
    amount?: Prisma.DecimalFilter<"refunds"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"refunds"> | string | null;
    refunded_at?: Prisma.DateTimeNullableFilter<"refunds"> | Date | string | null;
};
export type refundsCreateManyPaymentsInput = {
    refund_id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    refunded_at?: Date | string | null;
};
export type refundsUpdateWithoutPaymentsInput = {
    refund_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refunded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsUncheckedUpdateWithoutPaymentsInput = {
    refund_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refunded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsUncheckedUpdateManyWithoutPaymentsInput = {
    refund_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refunded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type refundsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    refund_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
    reason?: boolean;
    refunded_at?: boolean;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refunds"]>;
export type refundsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    refund_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
    reason?: boolean;
    refunded_at?: boolean;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refunds"]>;
export type refundsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    refund_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
    reason?: boolean;
    refunded_at?: boolean;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refunds"]>;
export type refundsSelectScalar = {
    refund_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
    reason?: boolean;
    refunded_at?: boolean;
};
export type refundsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"refund_id" | "payment_id" | "amount" | "reason" | "refunded_at", ExtArgs["result"]["refunds"]>;
export type refundsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
};
export type refundsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
};
export type refundsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
};
export type $refundsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "refunds";
    objects: {
        payments: Prisma.$paymentsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        refund_id: bigint;
        payment_id: bigint;
        amount: runtime.Decimal;
        reason: string | null;
        refunded_at: Date | null;
    }, ExtArgs["result"]["refunds"]>;
    composites: {};
};
export type refundsGetPayload<S extends boolean | null | undefined | refundsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$refundsPayload, S>;
export type refundsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<refundsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefundsCountAggregateInputType | true;
};
export interface refundsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['refunds'];
        meta: {
            name: 'refunds';
        };
    };
    findUnique<T extends refundsFindUniqueArgs>(args: Prisma.SelectSubset<T, refundsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends refundsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, refundsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends refundsFindFirstArgs>(args?: Prisma.SelectSubset<T, refundsFindFirstArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends refundsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, refundsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends refundsFindManyArgs>(args?: Prisma.SelectSubset<T, refundsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends refundsCreateArgs>(args: Prisma.SelectSubset<T, refundsCreateArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends refundsCreateManyArgs>(args?: Prisma.SelectSubset<T, refundsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends refundsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, refundsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends refundsDeleteArgs>(args: Prisma.SelectSubset<T, refundsDeleteArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends refundsUpdateArgs>(args: Prisma.SelectSubset<T, refundsUpdateArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends refundsDeleteManyArgs>(args?: Prisma.SelectSubset<T, refundsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends refundsUpdateManyArgs>(args: Prisma.SelectSubset<T, refundsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends refundsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, refundsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends refundsUpsertArgs>(args: Prisma.SelectSubset<T, refundsUpsertArgs<ExtArgs>>): Prisma.Prisma__refundsClient<runtime.Types.Result.GetResult<Prisma.$refundsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends refundsCountArgs>(args?: Prisma.Subset<T, refundsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefundsCountAggregateOutputType> : number>;
    aggregate<T extends RefundsAggregateArgs>(args: Prisma.Subset<T, RefundsAggregateArgs>): Prisma.PrismaPromise<GetRefundsAggregateType<T>>;
    groupBy<T extends refundsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: refundsGroupByArgs['orderBy'];
    } : {
        orderBy?: refundsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, refundsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: refundsFieldRefs;
}
export interface Prisma__refundsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payments<T extends Prisma.paymentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.paymentsDefaultArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface refundsFieldRefs {
    readonly refund_id: Prisma.FieldRef<"refunds", 'BigInt'>;
    readonly payment_id: Prisma.FieldRef<"refunds", 'BigInt'>;
    readonly amount: Prisma.FieldRef<"refunds", 'Decimal'>;
    readonly reason: Prisma.FieldRef<"refunds", 'String'>;
    readonly refunded_at: Prisma.FieldRef<"refunds", 'DateTime'>;
}
export type refundsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type refundsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type refundsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type refundsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refundsCreateInput, Prisma.refundsUncheckedCreateInput>;
};
export type refundsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.refundsCreateManyInput | Prisma.refundsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type refundsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    data: Prisma.refundsCreateManyInput | Prisma.refundsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.refundsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type refundsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refundsUpdateInput, Prisma.refundsUncheckedUpdateInput>;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.refundsUpdateManyMutationInput, Prisma.refundsUncheckedUpdateManyInput>;
    where?: Prisma.refundsWhereInput;
    limit?: number;
};
export type refundsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refundsUpdateManyMutationInput, Prisma.refundsUncheckedUpdateManyInput>;
    where?: Prisma.refundsWhereInput;
    limit?: number;
    include?: Prisma.refundsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type refundsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
    create: Prisma.XOR<Prisma.refundsCreateInput, Prisma.refundsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.refundsUpdateInput, Prisma.refundsUncheckedUpdateInput>;
};
export type refundsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
    where: Prisma.refundsWhereUniqueInput;
};
export type refundsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refundsWhereInput;
    limit?: number;
};
export type refundsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refundsSelect<ExtArgs> | null;
    omit?: Prisma.refundsOmit<ExtArgs> | null;
    include?: Prisma.refundsInclude<ExtArgs> | null;
};
