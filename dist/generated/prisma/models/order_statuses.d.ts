import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type order_statusesModel = runtime.Types.Result.DefaultSelection<Prisma.$order_statusesPayload>;
export type AggregateOrder_statuses = {
    _count: Order_statusesCountAggregateOutputType | null;
    _min: Order_statusesMinAggregateOutputType | null;
    _max: Order_statusesMaxAggregateOutputType | null;
};
export type Order_statusesMinAggregateOutputType = {
    status_code: string | null;
    description: string | null;
};
export type Order_statusesMaxAggregateOutputType = {
    status_code: string | null;
    description: string | null;
};
export type Order_statusesCountAggregateOutputType = {
    status_code: number;
    description: number;
    _all: number;
};
export type Order_statusesMinAggregateInputType = {
    status_code?: true;
    description?: true;
};
export type Order_statusesMaxAggregateInputType = {
    status_code?: true;
    description?: true;
};
export type Order_statusesCountAggregateInputType = {
    status_code?: true;
    description?: true;
    _all?: true;
};
export type Order_statusesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_statusesWhereInput;
    orderBy?: Prisma.order_statusesOrderByWithRelationInput | Prisma.order_statusesOrderByWithRelationInput[];
    cursor?: Prisma.order_statusesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Order_statusesCountAggregateInputType;
    _min?: Order_statusesMinAggregateInputType;
    _max?: Order_statusesMaxAggregateInputType;
};
export type GetOrder_statusesAggregateType<T extends Order_statusesAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_statuses]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder_statuses[P]> : Prisma.GetScalarType<T[P], AggregateOrder_statuses[P]>;
};
export type order_statusesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_statusesWhereInput;
    orderBy?: Prisma.order_statusesOrderByWithAggregationInput | Prisma.order_statusesOrderByWithAggregationInput[];
    by: Prisma.Order_statusesScalarFieldEnum[] | Prisma.Order_statusesScalarFieldEnum;
    having?: Prisma.order_statusesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_statusesCountAggregateInputType | true;
    _min?: Order_statusesMinAggregateInputType;
    _max?: Order_statusesMaxAggregateInputType;
};
export type Order_statusesGroupByOutputType = {
    status_code: string;
    description: string | null;
    _count: Order_statusesCountAggregateOutputType | null;
    _min: Order_statusesMinAggregateOutputType | null;
    _max: Order_statusesMaxAggregateOutputType | null;
};
export type GetOrder_statusesGroupByPayload<T extends order_statusesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Order_statusesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Order_statusesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Order_statusesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Order_statusesGroupByOutputType[P]>;
}>>;
export type order_statusesWhereInput = {
    AND?: Prisma.order_statusesWhereInput | Prisma.order_statusesWhereInput[];
    OR?: Prisma.order_statusesWhereInput[];
    NOT?: Prisma.order_statusesWhereInput | Prisma.order_statusesWhereInput[];
    status_code?: Prisma.StringFilter<"order_statuses"> | string;
    description?: Prisma.StringNullableFilter<"order_statuses"> | string | null;
    order_status_history?: Prisma.Order_status_historyListRelationFilter;
    orders?: Prisma.OrdersListRelationFilter;
};
export type order_statusesOrderByWithRelationInput = {
    status_code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_status_history?: Prisma.order_status_historyOrderByRelationAggregateInput;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
};
export type order_statusesWhereUniqueInput = Prisma.AtLeast<{
    status_code?: string;
    AND?: Prisma.order_statusesWhereInput | Prisma.order_statusesWhereInput[];
    OR?: Prisma.order_statusesWhereInput[];
    NOT?: Prisma.order_statusesWhereInput | Prisma.order_statusesWhereInput[];
    description?: Prisma.StringNullableFilter<"order_statuses"> | string | null;
    order_status_history?: Prisma.Order_status_historyListRelationFilter;
    orders?: Prisma.OrdersListRelationFilter;
}, "status_code">;
export type order_statusesOrderByWithAggregationInput = {
    status_code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.order_statusesCountOrderByAggregateInput;
    _max?: Prisma.order_statusesMaxOrderByAggregateInput;
    _min?: Prisma.order_statusesMinOrderByAggregateInput;
};
export type order_statusesScalarWhereWithAggregatesInput = {
    AND?: Prisma.order_statusesScalarWhereWithAggregatesInput | Prisma.order_statusesScalarWhereWithAggregatesInput[];
    OR?: Prisma.order_statusesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.order_statusesScalarWhereWithAggregatesInput | Prisma.order_statusesScalarWhereWithAggregatesInput[];
    status_code?: Prisma.StringWithAggregatesFilter<"order_statuses"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"order_statuses"> | string | null;
};
export type order_statusesCreateInput = {
    status_code: string;
    description?: string | null;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrder_statusesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutOrder_statusesInput;
};
export type order_statusesUncheckedCreateInput = {
    status_code: string;
    description?: string | null;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrder_statusesInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutOrder_statusesInput;
};
export type order_statusesUpdateInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrder_statusesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutOrder_statusesNestedInput;
};
export type order_statusesUncheckedUpdateInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrder_statusesNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutOrder_statusesNestedInput;
};
export type order_statusesCreateManyInput = {
    status_code: string;
    description?: string | null;
};
export type order_statusesUpdateManyMutationInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type order_statusesUncheckedUpdateManyInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Order_statusesScalarRelationFilter = {
    is?: Prisma.order_statusesWhereInput;
    isNot?: Prisma.order_statusesWhereInput;
};
export type order_statusesCountOrderByAggregateInput = {
    status_code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type order_statusesMaxOrderByAggregateInput = {
    status_code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type order_statusesMinOrderByAggregateInput = {
    status_code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type order_statusesCreateNestedOneWithoutOrder_status_historyInput = {
    create?: Prisma.XOR<Prisma.order_statusesCreateWithoutOrder_status_historyInput, Prisma.order_statusesUncheckedCreateWithoutOrder_status_historyInput>;
    connectOrCreate?: Prisma.order_statusesCreateOrConnectWithoutOrder_status_historyInput;
    connect?: Prisma.order_statusesWhereUniqueInput;
};
export type order_statusesUpdateOneRequiredWithoutOrder_status_historyNestedInput = {
    create?: Prisma.XOR<Prisma.order_statusesCreateWithoutOrder_status_historyInput, Prisma.order_statusesUncheckedCreateWithoutOrder_status_historyInput>;
    connectOrCreate?: Prisma.order_statusesCreateOrConnectWithoutOrder_status_historyInput;
    upsert?: Prisma.order_statusesUpsertWithoutOrder_status_historyInput;
    connect?: Prisma.order_statusesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.order_statusesUpdateToOneWithWhereWithoutOrder_status_historyInput, Prisma.order_statusesUpdateWithoutOrder_status_historyInput>, Prisma.order_statusesUncheckedUpdateWithoutOrder_status_historyInput>;
};
export type order_statusesCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_statusesCreateWithoutOrdersInput, Prisma.order_statusesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.order_statusesCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.order_statusesWhereUniqueInput;
};
export type order_statusesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_statusesCreateWithoutOrdersInput, Prisma.order_statusesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.order_statusesCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.order_statusesUpsertWithoutOrdersInput;
    connect?: Prisma.order_statusesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.order_statusesUpdateToOneWithWhereWithoutOrdersInput, Prisma.order_statusesUpdateWithoutOrdersInput>, Prisma.order_statusesUncheckedUpdateWithoutOrdersInput>;
};
export type order_statusesCreateWithoutOrder_status_historyInput = {
    status_code: string;
    description?: string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutOrder_statusesInput;
};
export type order_statusesUncheckedCreateWithoutOrder_status_historyInput = {
    status_code: string;
    description?: string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutOrder_statusesInput;
};
export type order_statusesCreateOrConnectWithoutOrder_status_historyInput = {
    where: Prisma.order_statusesWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_statusesCreateWithoutOrder_status_historyInput, Prisma.order_statusesUncheckedCreateWithoutOrder_status_historyInput>;
};
export type order_statusesUpsertWithoutOrder_status_historyInput = {
    update: Prisma.XOR<Prisma.order_statusesUpdateWithoutOrder_status_historyInput, Prisma.order_statusesUncheckedUpdateWithoutOrder_status_historyInput>;
    create: Prisma.XOR<Prisma.order_statusesCreateWithoutOrder_status_historyInput, Prisma.order_statusesUncheckedCreateWithoutOrder_status_historyInput>;
    where?: Prisma.order_statusesWhereInput;
};
export type order_statusesUpdateToOneWithWhereWithoutOrder_status_historyInput = {
    where?: Prisma.order_statusesWhereInput;
    data: Prisma.XOR<Prisma.order_statusesUpdateWithoutOrder_status_historyInput, Prisma.order_statusesUncheckedUpdateWithoutOrder_status_historyInput>;
};
export type order_statusesUpdateWithoutOrder_status_historyInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.ordersUpdateManyWithoutOrder_statusesNestedInput;
};
export type order_statusesUncheckedUpdateWithoutOrder_status_historyInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutOrder_statusesNestedInput;
};
export type order_statusesCreateWithoutOrdersInput = {
    status_code: string;
    description?: string | null;
    order_status_history?: Prisma.order_status_historyCreateNestedManyWithoutOrder_statusesInput;
};
export type order_statusesUncheckedCreateWithoutOrdersInput = {
    status_code: string;
    description?: string | null;
    order_status_history?: Prisma.order_status_historyUncheckedCreateNestedManyWithoutOrder_statusesInput;
};
export type order_statusesCreateOrConnectWithoutOrdersInput = {
    where: Prisma.order_statusesWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_statusesCreateWithoutOrdersInput, Prisma.order_statusesUncheckedCreateWithoutOrdersInput>;
};
export type order_statusesUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.order_statusesUpdateWithoutOrdersInput, Prisma.order_statusesUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.order_statusesCreateWithoutOrdersInput, Prisma.order_statusesUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.order_statusesWhereInput;
};
export type order_statusesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.order_statusesWhereInput;
    data: Prisma.XOR<Prisma.order_statusesUpdateWithoutOrdersInput, Prisma.order_statusesUncheckedUpdateWithoutOrdersInput>;
};
export type order_statusesUpdateWithoutOrdersInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_status_history?: Prisma.order_status_historyUpdateManyWithoutOrder_statusesNestedInput;
};
export type order_statusesUncheckedUpdateWithoutOrdersInput = {
    status_code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_status_history?: Prisma.order_status_historyUncheckedUpdateManyWithoutOrder_statusesNestedInput;
};
export type Order_statusesCountOutputType = {
    order_status_history: number;
    orders: number;
};
export type Order_statusesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_status_history?: boolean | Order_statusesCountOutputTypeCountOrder_status_historyArgs;
    orders?: boolean | Order_statusesCountOutputTypeCountOrdersArgs;
};
export type Order_statusesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Order_statusesCountOutputTypeSelect<ExtArgs> | null;
};
export type Order_statusesCountOutputTypeCountOrder_status_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_status_historyWhereInput;
};
export type Order_statusesCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type order_statusesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    status_code?: boolean;
    description?: boolean;
    order_status_history?: boolean | Prisma.order_statuses$order_status_historyArgs<ExtArgs>;
    orders?: boolean | Prisma.order_statuses$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.Order_statusesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_statuses"]>;
export type order_statusesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    status_code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["order_statuses"]>;
export type order_statusesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    status_code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["order_statuses"]>;
export type order_statusesSelectScalar = {
    status_code?: boolean;
    description?: boolean;
};
export type order_statusesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"status_code" | "description", ExtArgs["result"]["order_statuses"]>;
export type order_statusesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_status_history?: boolean | Prisma.order_statuses$order_status_historyArgs<ExtArgs>;
    orders?: boolean | Prisma.order_statuses$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.Order_statusesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type order_statusesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type order_statusesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $order_statusesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order_statuses";
    objects: {
        order_status_history: Prisma.$order_status_historyPayload<ExtArgs>[];
        orders: Prisma.$ordersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        status_code: string;
        description: string | null;
    }, ExtArgs["result"]["order_statuses"]>;
    composites: {};
};
export type order_statusesGetPayload<S extends boolean | null | undefined | order_statusesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$order_statusesPayload, S>;
export type order_statusesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<order_statusesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Order_statusesCountAggregateInputType | true;
};
export interface order_statusesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order_statuses'];
        meta: {
            name: 'order_statuses';
        };
    };
    findUnique<T extends order_statusesFindUniqueArgs>(args: Prisma.SelectSubset<T, order_statusesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends order_statusesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, order_statusesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends order_statusesFindFirstArgs>(args?: Prisma.SelectSubset<T, order_statusesFindFirstArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends order_statusesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, order_statusesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends order_statusesFindManyArgs>(args?: Prisma.SelectSubset<T, order_statusesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends order_statusesCreateArgs>(args: Prisma.SelectSubset<T, order_statusesCreateArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends order_statusesCreateManyArgs>(args?: Prisma.SelectSubset<T, order_statusesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends order_statusesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, order_statusesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends order_statusesDeleteArgs>(args: Prisma.SelectSubset<T, order_statusesDeleteArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends order_statusesUpdateArgs>(args: Prisma.SelectSubset<T, order_statusesUpdateArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends order_statusesDeleteManyArgs>(args?: Prisma.SelectSubset<T, order_statusesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends order_statusesUpdateManyArgs>(args: Prisma.SelectSubset<T, order_statusesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends order_statusesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, order_statusesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends order_statusesUpsertArgs>(args: Prisma.SelectSubset<T, order_statusesUpsertArgs<ExtArgs>>): Prisma.Prisma__order_statusesClient<runtime.Types.Result.GetResult<Prisma.$order_statusesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends order_statusesCountArgs>(args?: Prisma.Subset<T, order_statusesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Order_statusesCountAggregateOutputType> : number>;
    aggregate<T extends Order_statusesAggregateArgs>(args: Prisma.Subset<T, Order_statusesAggregateArgs>): Prisma.PrismaPromise<GetOrder_statusesAggregateType<T>>;
    groupBy<T extends order_statusesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: order_statusesGroupByArgs['orderBy'];
    } : {
        orderBy?: order_statusesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, order_statusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_statusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: order_statusesFieldRefs;
}
export interface Prisma__order_statusesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_status_history<T extends Prisma.order_statuses$order_status_historyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_statuses$order_status_historyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_status_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.order_statuses$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order_statuses$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface order_statusesFieldRefs {
    readonly status_code: Prisma.FieldRef<"order_statuses", 'String'>;
    readonly description: Prisma.FieldRef<"order_statuses", 'String'>;
}
export type order_statusesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    where: Prisma.order_statusesWhereUniqueInput;
};
export type order_statusesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    where: Prisma.order_statusesWhereUniqueInput;
};
export type order_statusesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    where?: Prisma.order_statusesWhereInput;
    orderBy?: Prisma.order_statusesOrderByWithRelationInput | Prisma.order_statusesOrderByWithRelationInput[];
    cursor?: Prisma.order_statusesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_statusesScalarFieldEnum | Prisma.Order_statusesScalarFieldEnum[];
};
export type order_statusesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    where?: Prisma.order_statusesWhereInput;
    orderBy?: Prisma.order_statusesOrderByWithRelationInput | Prisma.order_statusesOrderByWithRelationInput[];
    cursor?: Prisma.order_statusesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_statusesScalarFieldEnum | Prisma.Order_statusesScalarFieldEnum[];
};
export type order_statusesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    where?: Prisma.order_statusesWhereInput;
    orderBy?: Prisma.order_statusesOrderByWithRelationInput | Prisma.order_statusesOrderByWithRelationInput[];
    cursor?: Prisma.order_statusesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_statusesScalarFieldEnum | Prisma.Order_statusesScalarFieldEnum[];
};
export type order_statusesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_statusesCreateInput, Prisma.order_statusesUncheckedCreateInput>;
};
export type order_statusesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.order_statusesCreateManyInput | Prisma.order_statusesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_statusesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    data: Prisma.order_statusesCreateManyInput | Prisma.order_statusesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_statusesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_statusesUpdateInput, Prisma.order_statusesUncheckedUpdateInput>;
    where: Prisma.order_statusesWhereUniqueInput;
};
export type order_statusesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.order_statusesUpdateManyMutationInput, Prisma.order_statusesUncheckedUpdateManyInput>;
    where?: Prisma.order_statusesWhereInput;
    limit?: number;
};
export type order_statusesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_statusesUpdateManyMutationInput, Prisma.order_statusesUncheckedUpdateManyInput>;
    where?: Prisma.order_statusesWhereInput;
    limit?: number;
};
export type order_statusesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    where: Prisma.order_statusesWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_statusesCreateInput, Prisma.order_statusesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.order_statusesUpdateInput, Prisma.order_statusesUncheckedUpdateInput>;
};
export type order_statusesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
    where: Prisma.order_statusesWhereUniqueInput;
};
export type order_statusesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_statusesWhereInput;
    limit?: number;
};
export type order_statuses$order_status_historyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_statuses$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type order_statusesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_statusesSelect<ExtArgs> | null;
    omit?: Prisma.order_statusesOmit<ExtArgs> | null;
    include?: Prisma.order_statusesInclude<ExtArgs> | null;
};
