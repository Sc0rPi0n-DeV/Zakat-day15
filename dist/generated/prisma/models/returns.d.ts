import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type returnsModel = runtime.Types.Result.DefaultSelection<Prisma.$returnsPayload>;
export type AggregateReturns = {
    _count: ReturnsCountAggregateOutputType | null;
    _avg: ReturnsAvgAggregateOutputType | null;
    _sum: ReturnsSumAggregateOutputType | null;
    _min: ReturnsMinAggregateOutputType | null;
    _max: ReturnsMaxAggregateOutputType | null;
};
export type ReturnsAvgAggregateOutputType = {
    return_id: number | null;
    order_item_id: number | null;
    quantity: number | null;
};
export type ReturnsSumAggregateOutputType = {
    return_id: bigint | null;
    order_item_id: bigint | null;
    quantity: number | null;
};
export type ReturnsMinAggregateOutputType = {
    return_id: bigint | null;
    order_item_id: bigint | null;
    quantity: number | null;
    reason: string | null;
    status: string | null;
};
export type ReturnsMaxAggregateOutputType = {
    return_id: bigint | null;
    order_item_id: bigint | null;
    quantity: number | null;
    reason: string | null;
    status: string | null;
};
export type ReturnsCountAggregateOutputType = {
    return_id: number;
    order_item_id: number;
    quantity: number;
    reason: number;
    status: number;
    _all: number;
};
export type ReturnsAvgAggregateInputType = {
    return_id?: true;
    order_item_id?: true;
    quantity?: true;
};
export type ReturnsSumAggregateInputType = {
    return_id?: true;
    order_item_id?: true;
    quantity?: true;
};
export type ReturnsMinAggregateInputType = {
    return_id?: true;
    order_item_id?: true;
    quantity?: true;
    reason?: true;
    status?: true;
};
export type ReturnsMaxAggregateInputType = {
    return_id?: true;
    order_item_id?: true;
    quantity?: true;
    reason?: true;
    status?: true;
};
export type ReturnsCountAggregateInputType = {
    return_id?: true;
    order_item_id?: true;
    quantity?: true;
    reason?: true;
    status?: true;
    _all?: true;
};
export type ReturnsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.returnsWhereInput;
    orderBy?: Prisma.returnsOrderByWithRelationInput | Prisma.returnsOrderByWithRelationInput[];
    cursor?: Prisma.returnsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReturnsCountAggregateInputType;
    _avg?: ReturnsAvgAggregateInputType;
    _sum?: ReturnsSumAggregateInputType;
    _min?: ReturnsMinAggregateInputType;
    _max?: ReturnsMaxAggregateInputType;
};
export type GetReturnsAggregateType<T extends ReturnsAggregateArgs> = {
    [P in keyof T & keyof AggregateReturns]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReturns[P]> : Prisma.GetScalarType<T[P], AggregateReturns[P]>;
};
export type returnsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.returnsWhereInput;
    orderBy?: Prisma.returnsOrderByWithAggregationInput | Prisma.returnsOrderByWithAggregationInput[];
    by: Prisma.ReturnsScalarFieldEnum[] | Prisma.ReturnsScalarFieldEnum;
    having?: Prisma.returnsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReturnsCountAggregateInputType | true;
    _avg?: ReturnsAvgAggregateInputType;
    _sum?: ReturnsSumAggregateInputType;
    _min?: ReturnsMinAggregateInputType;
    _max?: ReturnsMaxAggregateInputType;
};
export type ReturnsGroupByOutputType = {
    return_id: bigint;
    order_item_id: bigint;
    quantity: number;
    reason: string | null;
    status: string;
    _count: ReturnsCountAggregateOutputType | null;
    _avg: ReturnsAvgAggregateOutputType | null;
    _sum: ReturnsSumAggregateOutputType | null;
    _min: ReturnsMinAggregateOutputType | null;
    _max: ReturnsMaxAggregateOutputType | null;
};
export type GetReturnsGroupByPayload<T extends returnsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReturnsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReturnsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReturnsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReturnsGroupByOutputType[P]>;
}>>;
export type returnsWhereInput = {
    AND?: Prisma.returnsWhereInput | Prisma.returnsWhereInput[];
    OR?: Prisma.returnsWhereInput[];
    NOT?: Prisma.returnsWhereInput | Prisma.returnsWhereInput[];
    return_id?: Prisma.BigIntFilter<"returns"> | bigint | number;
    order_item_id?: Prisma.BigIntFilter<"returns"> | bigint | number;
    quantity?: Prisma.IntFilter<"returns"> | number;
    reason?: Prisma.StringNullableFilter<"returns"> | string | null;
    status?: Prisma.StringFilter<"returns"> | string;
    order_items?: Prisma.XOR<Prisma.Order_itemsScalarRelationFilter, Prisma.order_itemsWhereInput>;
};
export type returnsOrderByWithRelationInput = {
    return_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    order_items?: Prisma.order_itemsOrderByWithRelationInput;
};
export type returnsWhereUniqueInput = Prisma.AtLeast<{
    return_id?: bigint | number;
    AND?: Prisma.returnsWhereInput | Prisma.returnsWhereInput[];
    OR?: Prisma.returnsWhereInput[];
    NOT?: Prisma.returnsWhereInput | Prisma.returnsWhereInput[];
    order_item_id?: Prisma.BigIntFilter<"returns"> | bigint | number;
    quantity?: Prisma.IntFilter<"returns"> | number;
    reason?: Prisma.StringNullableFilter<"returns"> | string | null;
    status?: Prisma.StringFilter<"returns"> | string;
    order_items?: Prisma.XOR<Prisma.Order_itemsScalarRelationFilter, Prisma.order_itemsWhereInput>;
}, "return_id">;
export type returnsOrderByWithAggregationInput = {
    return_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.returnsCountOrderByAggregateInput;
    _avg?: Prisma.returnsAvgOrderByAggregateInput;
    _max?: Prisma.returnsMaxOrderByAggregateInput;
    _min?: Prisma.returnsMinOrderByAggregateInput;
    _sum?: Prisma.returnsSumOrderByAggregateInput;
};
export type returnsScalarWhereWithAggregatesInput = {
    AND?: Prisma.returnsScalarWhereWithAggregatesInput | Prisma.returnsScalarWhereWithAggregatesInput[];
    OR?: Prisma.returnsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.returnsScalarWhereWithAggregatesInput | Prisma.returnsScalarWhereWithAggregatesInput[];
    return_id?: Prisma.BigIntWithAggregatesFilter<"returns"> | bigint | number;
    order_item_id?: Prisma.BigIntWithAggregatesFilter<"returns"> | bigint | number;
    quantity?: Prisma.IntWithAggregatesFilter<"returns"> | number;
    reason?: Prisma.StringNullableWithAggregatesFilter<"returns"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"returns"> | string;
};
export type returnsCreateInput = {
    return_id?: bigint | number;
    quantity: number;
    reason?: string | null;
    status?: string;
    order_items: Prisma.order_itemsCreateNestedOneWithoutReturnsInput;
};
export type returnsUncheckedCreateInput = {
    return_id?: bigint | number;
    order_item_id: bigint | number;
    quantity: number;
    reason?: string | null;
    status?: string;
};
export type returnsUpdateInput = {
    return_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    order_items?: Prisma.order_itemsUpdateOneRequiredWithoutReturnsNestedInput;
};
export type returnsUncheckedUpdateInput = {
    return_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type returnsCreateManyInput = {
    return_id?: bigint | number;
    order_item_id: bigint | number;
    quantity: number;
    reason?: string | null;
    status?: string;
};
export type returnsUpdateManyMutationInput = {
    return_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type returnsUncheckedUpdateManyInput = {
    return_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReturnsListRelationFilter = {
    every?: Prisma.returnsWhereInput;
    some?: Prisma.returnsWhereInput;
    none?: Prisma.returnsWhereInput;
};
export type returnsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type returnsCountOrderByAggregateInput = {
    return_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type returnsAvgOrderByAggregateInput = {
    return_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type returnsMaxOrderByAggregateInput = {
    return_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type returnsMinOrderByAggregateInput = {
    return_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type returnsSumOrderByAggregateInput = {
    return_id?: Prisma.SortOrder;
    order_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type returnsCreateNestedManyWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.returnsCreateWithoutOrder_itemsInput, Prisma.returnsUncheckedCreateWithoutOrder_itemsInput> | Prisma.returnsCreateWithoutOrder_itemsInput[] | Prisma.returnsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.returnsCreateOrConnectWithoutOrder_itemsInput | Prisma.returnsCreateOrConnectWithoutOrder_itemsInput[];
    createMany?: Prisma.returnsCreateManyOrder_itemsInputEnvelope;
    connect?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
};
export type returnsUncheckedCreateNestedManyWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.returnsCreateWithoutOrder_itemsInput, Prisma.returnsUncheckedCreateWithoutOrder_itemsInput> | Prisma.returnsCreateWithoutOrder_itemsInput[] | Prisma.returnsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.returnsCreateOrConnectWithoutOrder_itemsInput | Prisma.returnsCreateOrConnectWithoutOrder_itemsInput[];
    createMany?: Prisma.returnsCreateManyOrder_itemsInputEnvelope;
    connect?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
};
export type returnsUpdateManyWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.returnsCreateWithoutOrder_itemsInput, Prisma.returnsUncheckedCreateWithoutOrder_itemsInput> | Prisma.returnsCreateWithoutOrder_itemsInput[] | Prisma.returnsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.returnsCreateOrConnectWithoutOrder_itemsInput | Prisma.returnsCreateOrConnectWithoutOrder_itemsInput[];
    upsert?: Prisma.returnsUpsertWithWhereUniqueWithoutOrder_itemsInput | Prisma.returnsUpsertWithWhereUniqueWithoutOrder_itemsInput[];
    createMany?: Prisma.returnsCreateManyOrder_itemsInputEnvelope;
    set?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    disconnect?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    delete?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    connect?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    update?: Prisma.returnsUpdateWithWhereUniqueWithoutOrder_itemsInput | Prisma.returnsUpdateWithWhereUniqueWithoutOrder_itemsInput[];
    updateMany?: Prisma.returnsUpdateManyWithWhereWithoutOrder_itemsInput | Prisma.returnsUpdateManyWithWhereWithoutOrder_itemsInput[];
    deleteMany?: Prisma.returnsScalarWhereInput | Prisma.returnsScalarWhereInput[];
};
export type returnsUncheckedUpdateManyWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.returnsCreateWithoutOrder_itemsInput, Prisma.returnsUncheckedCreateWithoutOrder_itemsInput> | Prisma.returnsCreateWithoutOrder_itemsInput[] | Prisma.returnsUncheckedCreateWithoutOrder_itemsInput[];
    connectOrCreate?: Prisma.returnsCreateOrConnectWithoutOrder_itemsInput | Prisma.returnsCreateOrConnectWithoutOrder_itemsInput[];
    upsert?: Prisma.returnsUpsertWithWhereUniqueWithoutOrder_itemsInput | Prisma.returnsUpsertWithWhereUniqueWithoutOrder_itemsInput[];
    createMany?: Prisma.returnsCreateManyOrder_itemsInputEnvelope;
    set?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    disconnect?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    delete?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    connect?: Prisma.returnsWhereUniqueInput | Prisma.returnsWhereUniqueInput[];
    update?: Prisma.returnsUpdateWithWhereUniqueWithoutOrder_itemsInput | Prisma.returnsUpdateWithWhereUniqueWithoutOrder_itemsInput[];
    updateMany?: Prisma.returnsUpdateManyWithWhereWithoutOrder_itemsInput | Prisma.returnsUpdateManyWithWhereWithoutOrder_itemsInput[];
    deleteMany?: Prisma.returnsScalarWhereInput | Prisma.returnsScalarWhereInput[];
};
export type returnsCreateWithoutOrder_itemsInput = {
    return_id?: bigint | number;
    quantity: number;
    reason?: string | null;
    status?: string;
};
export type returnsUncheckedCreateWithoutOrder_itemsInput = {
    return_id?: bigint | number;
    quantity: number;
    reason?: string | null;
    status?: string;
};
export type returnsCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.returnsWhereUniqueInput;
    create: Prisma.XOR<Prisma.returnsCreateWithoutOrder_itemsInput, Prisma.returnsUncheckedCreateWithoutOrder_itemsInput>;
};
export type returnsCreateManyOrder_itemsInputEnvelope = {
    data: Prisma.returnsCreateManyOrder_itemsInput | Prisma.returnsCreateManyOrder_itemsInput[];
    skipDuplicates?: boolean;
};
export type returnsUpsertWithWhereUniqueWithoutOrder_itemsInput = {
    where: Prisma.returnsWhereUniqueInput;
    update: Prisma.XOR<Prisma.returnsUpdateWithoutOrder_itemsInput, Prisma.returnsUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.returnsCreateWithoutOrder_itemsInput, Prisma.returnsUncheckedCreateWithoutOrder_itemsInput>;
};
export type returnsUpdateWithWhereUniqueWithoutOrder_itemsInput = {
    where: Prisma.returnsWhereUniqueInput;
    data: Prisma.XOR<Prisma.returnsUpdateWithoutOrder_itemsInput, Prisma.returnsUncheckedUpdateWithoutOrder_itemsInput>;
};
export type returnsUpdateManyWithWhereWithoutOrder_itemsInput = {
    where: Prisma.returnsScalarWhereInput;
    data: Prisma.XOR<Prisma.returnsUpdateManyMutationInput, Prisma.returnsUncheckedUpdateManyWithoutOrder_itemsInput>;
};
export type returnsScalarWhereInput = {
    AND?: Prisma.returnsScalarWhereInput | Prisma.returnsScalarWhereInput[];
    OR?: Prisma.returnsScalarWhereInput[];
    NOT?: Prisma.returnsScalarWhereInput | Prisma.returnsScalarWhereInput[];
    return_id?: Prisma.BigIntFilter<"returns"> | bigint | number;
    order_item_id?: Prisma.BigIntFilter<"returns"> | bigint | number;
    quantity?: Prisma.IntFilter<"returns"> | number;
    reason?: Prisma.StringNullableFilter<"returns"> | string | null;
    status?: Prisma.StringFilter<"returns"> | string;
};
export type returnsCreateManyOrder_itemsInput = {
    return_id?: bigint | number;
    quantity: number;
    reason?: string | null;
    status?: string;
};
export type returnsUpdateWithoutOrder_itemsInput = {
    return_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type returnsUncheckedUpdateWithoutOrder_itemsInput = {
    return_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type returnsUncheckedUpdateManyWithoutOrder_itemsInput = {
    return_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type returnsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    return_id?: boolean;
    order_item_id?: boolean;
    quantity?: boolean;
    reason?: boolean;
    status?: boolean;
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["returns"]>;
export type returnsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    return_id?: boolean;
    order_item_id?: boolean;
    quantity?: boolean;
    reason?: boolean;
    status?: boolean;
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["returns"]>;
export type returnsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    return_id?: boolean;
    order_item_id?: boolean;
    quantity?: boolean;
    reason?: boolean;
    status?: boolean;
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["returns"]>;
export type returnsSelectScalar = {
    return_id?: boolean;
    order_item_id?: boolean;
    quantity?: boolean;
    reason?: boolean;
    status?: boolean;
};
export type returnsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"return_id" | "order_item_id" | "quantity" | "reason" | "status", ExtArgs["result"]["returns"]>;
export type returnsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
};
export type returnsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
};
export type returnsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.order_itemsDefaultArgs<ExtArgs>;
};
export type $returnsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "returns";
    objects: {
        order_items: Prisma.$order_itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        return_id: bigint;
        order_item_id: bigint;
        quantity: number;
        reason: string | null;
        status: string;
    }, ExtArgs["result"]["returns"]>;
    composites: {};
};
export type returnsGetPayload<S extends boolean | null | undefined | returnsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$returnsPayload, S>;
export type returnsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<returnsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReturnsCountAggregateInputType | true;
};
export interface returnsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['returns'];
        meta: {
            name: 'returns';
        };
    };
    findUnique<T extends returnsFindUniqueArgs>(args: Prisma.SelectSubset<T, returnsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends returnsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, returnsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends returnsFindFirstArgs>(args?: Prisma.SelectSubset<T, returnsFindFirstArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends returnsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, returnsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends returnsFindManyArgs>(args?: Prisma.SelectSubset<T, returnsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends returnsCreateArgs>(args: Prisma.SelectSubset<T, returnsCreateArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends returnsCreateManyArgs>(args?: Prisma.SelectSubset<T, returnsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends returnsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, returnsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends returnsDeleteArgs>(args: Prisma.SelectSubset<T, returnsDeleteArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends returnsUpdateArgs>(args: Prisma.SelectSubset<T, returnsUpdateArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends returnsDeleteManyArgs>(args?: Prisma.SelectSubset<T, returnsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends returnsUpdateManyArgs>(args: Prisma.SelectSubset<T, returnsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends returnsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, returnsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends returnsUpsertArgs>(args: Prisma.SelectSubset<T, returnsUpsertArgs<ExtArgs>>): Prisma.Prisma__returnsClient<runtime.Types.Result.GetResult<Prisma.$returnsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends returnsCountArgs>(args?: Prisma.Subset<T, returnsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReturnsCountAggregateOutputType> : number>;
    aggregate<T extends ReturnsAggregateArgs>(args: Prisma.Subset<T, ReturnsAggregateArgs>): Prisma.PrismaPromise<GetReturnsAggregateType<T>>;
    groupBy<T extends returnsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: returnsGroupByArgs['orderBy'];
    } : {
        orderBy?: returnsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, returnsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: returnsFieldRefs;
}
export interface Prisma__returnsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_items<T extends Prisma.order_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface returnsFieldRefs {
    readonly return_id: Prisma.FieldRef<"returns", 'BigInt'>;
    readonly order_item_id: Prisma.FieldRef<"returns", 'BigInt'>;
    readonly quantity: Prisma.FieldRef<"returns", 'Int'>;
    readonly reason: Prisma.FieldRef<"returns", 'String'>;
    readonly status: Prisma.FieldRef<"returns", 'String'>;
}
export type returnsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    where: Prisma.returnsWhereUniqueInput;
};
export type returnsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    where: Prisma.returnsWhereUniqueInput;
};
export type returnsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    where?: Prisma.returnsWhereInput;
    orderBy?: Prisma.returnsOrderByWithRelationInput | Prisma.returnsOrderByWithRelationInput[];
    cursor?: Prisma.returnsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReturnsScalarFieldEnum | Prisma.ReturnsScalarFieldEnum[];
};
export type returnsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    where?: Prisma.returnsWhereInput;
    orderBy?: Prisma.returnsOrderByWithRelationInput | Prisma.returnsOrderByWithRelationInput[];
    cursor?: Prisma.returnsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReturnsScalarFieldEnum | Prisma.ReturnsScalarFieldEnum[];
};
export type returnsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    where?: Prisma.returnsWhereInput;
    orderBy?: Prisma.returnsOrderByWithRelationInput | Prisma.returnsOrderByWithRelationInput[];
    cursor?: Prisma.returnsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReturnsScalarFieldEnum | Prisma.ReturnsScalarFieldEnum[];
};
export type returnsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.returnsCreateInput, Prisma.returnsUncheckedCreateInput>;
};
export type returnsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.returnsCreateManyInput | Prisma.returnsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type returnsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    data: Prisma.returnsCreateManyInput | Prisma.returnsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.returnsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type returnsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.returnsUpdateInput, Prisma.returnsUncheckedUpdateInput>;
    where: Prisma.returnsWhereUniqueInput;
};
export type returnsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.returnsUpdateManyMutationInput, Prisma.returnsUncheckedUpdateManyInput>;
    where?: Prisma.returnsWhereInput;
    limit?: number;
};
export type returnsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.returnsUpdateManyMutationInput, Prisma.returnsUncheckedUpdateManyInput>;
    where?: Prisma.returnsWhereInput;
    limit?: number;
    include?: Prisma.returnsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type returnsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    where: Prisma.returnsWhereUniqueInput;
    create: Prisma.XOR<Prisma.returnsCreateInput, Prisma.returnsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.returnsUpdateInput, Prisma.returnsUncheckedUpdateInput>;
};
export type returnsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
    where: Prisma.returnsWhereUniqueInput;
};
export type returnsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.returnsWhereInput;
    limit?: number;
};
export type returnsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.returnsSelect<ExtArgs> | null;
    omit?: Prisma.returnsOmit<ExtArgs> | null;
    include?: Prisma.returnsInclude<ExtArgs> | null;
};
