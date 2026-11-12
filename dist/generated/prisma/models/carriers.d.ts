import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type carriersModel = runtime.Types.Result.DefaultSelection<Prisma.$carriersPayload>;
export type AggregateCarriers = {
    _count: CarriersCountAggregateOutputType | null;
    _avg: CarriersAvgAggregateOutputType | null;
    _sum: CarriersSumAggregateOutputType | null;
    _min: CarriersMinAggregateOutputType | null;
    _max: CarriersMaxAggregateOutputType | null;
};
export type CarriersAvgAggregateOutputType = {
    carrier_id: number | null;
};
export type CarriersSumAggregateOutputType = {
    carrier_id: bigint | null;
};
export type CarriersMinAggregateOutputType = {
    carrier_id: bigint | null;
    carrier_name: string | null;
};
export type CarriersMaxAggregateOutputType = {
    carrier_id: bigint | null;
    carrier_name: string | null;
};
export type CarriersCountAggregateOutputType = {
    carrier_id: number;
    carrier_name: number;
    _all: number;
};
export type CarriersAvgAggregateInputType = {
    carrier_id?: true;
};
export type CarriersSumAggregateInputType = {
    carrier_id?: true;
};
export type CarriersMinAggregateInputType = {
    carrier_id?: true;
    carrier_name?: true;
};
export type CarriersMaxAggregateInputType = {
    carrier_id?: true;
    carrier_name?: true;
};
export type CarriersCountAggregateInputType = {
    carrier_id?: true;
    carrier_name?: true;
    _all?: true;
};
export type CarriersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carriersWhereInput;
    orderBy?: Prisma.carriersOrderByWithRelationInput | Prisma.carriersOrderByWithRelationInput[];
    cursor?: Prisma.carriersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CarriersCountAggregateInputType;
    _avg?: CarriersAvgAggregateInputType;
    _sum?: CarriersSumAggregateInputType;
    _min?: CarriersMinAggregateInputType;
    _max?: CarriersMaxAggregateInputType;
};
export type GetCarriersAggregateType<T extends CarriersAggregateArgs> = {
    [P in keyof T & keyof AggregateCarriers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarriers[P]> : Prisma.GetScalarType<T[P], AggregateCarriers[P]>;
};
export type carriersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carriersWhereInput;
    orderBy?: Prisma.carriersOrderByWithAggregationInput | Prisma.carriersOrderByWithAggregationInput[];
    by: Prisma.CarriersScalarFieldEnum[] | Prisma.CarriersScalarFieldEnum;
    having?: Prisma.carriersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarriersCountAggregateInputType | true;
    _avg?: CarriersAvgAggregateInputType;
    _sum?: CarriersSumAggregateInputType;
    _min?: CarriersMinAggregateInputType;
    _max?: CarriersMaxAggregateInputType;
};
export type CarriersGroupByOutputType = {
    carrier_id: bigint;
    carrier_name: string;
    _count: CarriersCountAggregateOutputType | null;
    _avg: CarriersAvgAggregateOutputType | null;
    _sum: CarriersSumAggregateOutputType | null;
    _min: CarriersMinAggregateOutputType | null;
    _max: CarriersMaxAggregateOutputType | null;
};
export type GetCarriersGroupByPayload<T extends carriersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CarriersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CarriersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CarriersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CarriersGroupByOutputType[P]>;
}>>;
export type carriersWhereInput = {
    AND?: Prisma.carriersWhereInput | Prisma.carriersWhereInput[];
    OR?: Prisma.carriersWhereInput[];
    NOT?: Prisma.carriersWhereInput | Prisma.carriersWhereInput[];
    carrier_id?: Prisma.BigIntFilter<"carriers"> | bigint | number;
    carrier_name?: Prisma.StringFilter<"carriers"> | string;
    shipments?: Prisma.ShipmentsListRelationFilter;
    shipping_rates?: Prisma.Shipping_ratesListRelationFilter;
};
export type carriersOrderByWithRelationInput = {
    carrier_id?: Prisma.SortOrder;
    carrier_name?: Prisma.SortOrder;
    shipments?: Prisma.shipmentsOrderByRelationAggregateInput;
    shipping_rates?: Prisma.shipping_ratesOrderByRelationAggregateInput;
};
export type carriersWhereUniqueInput = Prisma.AtLeast<{
    carrier_id?: bigint | number;
    carrier_name?: string;
    AND?: Prisma.carriersWhereInput | Prisma.carriersWhereInput[];
    OR?: Prisma.carriersWhereInput[];
    NOT?: Prisma.carriersWhereInput | Prisma.carriersWhereInput[];
    shipments?: Prisma.ShipmentsListRelationFilter;
    shipping_rates?: Prisma.Shipping_ratesListRelationFilter;
}, "carrier_id" | "carrier_name">;
export type carriersOrderByWithAggregationInput = {
    carrier_id?: Prisma.SortOrder;
    carrier_name?: Prisma.SortOrder;
    _count?: Prisma.carriersCountOrderByAggregateInput;
    _avg?: Prisma.carriersAvgOrderByAggregateInput;
    _max?: Prisma.carriersMaxOrderByAggregateInput;
    _min?: Prisma.carriersMinOrderByAggregateInput;
    _sum?: Prisma.carriersSumOrderByAggregateInput;
};
export type carriersScalarWhereWithAggregatesInput = {
    AND?: Prisma.carriersScalarWhereWithAggregatesInput | Prisma.carriersScalarWhereWithAggregatesInput[];
    OR?: Prisma.carriersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.carriersScalarWhereWithAggregatesInput | Prisma.carriersScalarWhereWithAggregatesInput[];
    carrier_id?: Prisma.BigIntWithAggregatesFilter<"carriers"> | bigint | number;
    carrier_name?: Prisma.StringWithAggregatesFilter<"carriers"> | string;
};
export type carriersCreateInput = {
    carrier_id?: bigint | number;
    carrier_name: string;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutCarriersInput;
    shipping_rates?: Prisma.shipping_ratesCreateNestedManyWithoutCarriersInput;
};
export type carriersUncheckedCreateInput = {
    carrier_id?: bigint | number;
    carrier_name: string;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutCarriersInput;
    shipping_rates?: Prisma.shipping_ratesUncheckedCreateNestedManyWithoutCarriersInput;
};
export type carriersUpdateInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipments?: Prisma.shipmentsUpdateManyWithoutCarriersNestedInput;
    shipping_rates?: Prisma.shipping_ratesUpdateManyWithoutCarriersNestedInput;
};
export type carriersUncheckedUpdateInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutCarriersNestedInput;
    shipping_rates?: Prisma.shipping_ratesUncheckedUpdateManyWithoutCarriersNestedInput;
};
export type carriersCreateManyInput = {
    carrier_id?: bigint | number;
    carrier_name: string;
};
export type carriersUpdateManyMutationInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type carriersUncheckedUpdateManyInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type carriersCountOrderByAggregateInput = {
    carrier_id?: Prisma.SortOrder;
    carrier_name?: Prisma.SortOrder;
};
export type carriersAvgOrderByAggregateInput = {
    carrier_id?: Prisma.SortOrder;
};
export type carriersMaxOrderByAggregateInput = {
    carrier_id?: Prisma.SortOrder;
    carrier_name?: Prisma.SortOrder;
};
export type carriersMinOrderByAggregateInput = {
    carrier_id?: Prisma.SortOrder;
    carrier_name?: Prisma.SortOrder;
};
export type carriersSumOrderByAggregateInput = {
    carrier_id?: Prisma.SortOrder;
};
export type CarriersNullableScalarRelationFilter = {
    is?: Prisma.carriersWhereInput | null;
    isNot?: Prisma.carriersWhereInput | null;
};
export type CarriersScalarRelationFilter = {
    is?: Prisma.carriersWhereInput;
    isNot?: Prisma.carriersWhereInput;
};
export type carriersCreateNestedOneWithoutShipmentsInput = {
    create?: Prisma.XOR<Prisma.carriersCreateWithoutShipmentsInput, Prisma.carriersUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.carriersCreateOrConnectWithoutShipmentsInput;
    connect?: Prisma.carriersWhereUniqueInput;
};
export type carriersUpdateOneWithoutShipmentsNestedInput = {
    create?: Prisma.XOR<Prisma.carriersCreateWithoutShipmentsInput, Prisma.carriersUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.carriersCreateOrConnectWithoutShipmentsInput;
    upsert?: Prisma.carriersUpsertWithoutShipmentsInput;
    disconnect?: Prisma.carriersWhereInput | boolean;
    delete?: Prisma.carriersWhereInput | boolean;
    connect?: Prisma.carriersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.carriersUpdateToOneWithWhereWithoutShipmentsInput, Prisma.carriersUpdateWithoutShipmentsInput>, Prisma.carriersUncheckedUpdateWithoutShipmentsInput>;
};
export type carriersCreateNestedOneWithoutShipping_ratesInput = {
    create?: Prisma.XOR<Prisma.carriersCreateWithoutShipping_ratesInput, Prisma.carriersUncheckedCreateWithoutShipping_ratesInput>;
    connectOrCreate?: Prisma.carriersCreateOrConnectWithoutShipping_ratesInput;
    connect?: Prisma.carriersWhereUniqueInput;
};
export type carriersUpdateOneRequiredWithoutShipping_ratesNestedInput = {
    create?: Prisma.XOR<Prisma.carriersCreateWithoutShipping_ratesInput, Prisma.carriersUncheckedCreateWithoutShipping_ratesInput>;
    connectOrCreate?: Prisma.carriersCreateOrConnectWithoutShipping_ratesInput;
    upsert?: Prisma.carriersUpsertWithoutShipping_ratesInput;
    connect?: Prisma.carriersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.carriersUpdateToOneWithWhereWithoutShipping_ratesInput, Prisma.carriersUpdateWithoutShipping_ratesInput>, Prisma.carriersUncheckedUpdateWithoutShipping_ratesInput>;
};
export type carriersCreateWithoutShipmentsInput = {
    carrier_id?: bigint | number;
    carrier_name: string;
    shipping_rates?: Prisma.shipping_ratesCreateNestedManyWithoutCarriersInput;
};
export type carriersUncheckedCreateWithoutShipmentsInput = {
    carrier_id?: bigint | number;
    carrier_name: string;
    shipping_rates?: Prisma.shipping_ratesUncheckedCreateNestedManyWithoutCarriersInput;
};
export type carriersCreateOrConnectWithoutShipmentsInput = {
    where: Prisma.carriersWhereUniqueInput;
    create: Prisma.XOR<Prisma.carriersCreateWithoutShipmentsInput, Prisma.carriersUncheckedCreateWithoutShipmentsInput>;
};
export type carriersUpsertWithoutShipmentsInput = {
    update: Prisma.XOR<Prisma.carriersUpdateWithoutShipmentsInput, Prisma.carriersUncheckedUpdateWithoutShipmentsInput>;
    create: Prisma.XOR<Prisma.carriersCreateWithoutShipmentsInput, Prisma.carriersUncheckedCreateWithoutShipmentsInput>;
    where?: Prisma.carriersWhereInput;
};
export type carriersUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: Prisma.carriersWhereInput;
    data: Prisma.XOR<Prisma.carriersUpdateWithoutShipmentsInput, Prisma.carriersUncheckedUpdateWithoutShipmentsInput>;
};
export type carriersUpdateWithoutShipmentsInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipping_rates?: Prisma.shipping_ratesUpdateManyWithoutCarriersNestedInput;
};
export type carriersUncheckedUpdateWithoutShipmentsInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipping_rates?: Prisma.shipping_ratesUncheckedUpdateManyWithoutCarriersNestedInput;
};
export type carriersCreateWithoutShipping_ratesInput = {
    carrier_id?: bigint | number;
    carrier_name: string;
    shipments?: Prisma.shipmentsCreateNestedManyWithoutCarriersInput;
};
export type carriersUncheckedCreateWithoutShipping_ratesInput = {
    carrier_id?: bigint | number;
    carrier_name: string;
    shipments?: Prisma.shipmentsUncheckedCreateNestedManyWithoutCarriersInput;
};
export type carriersCreateOrConnectWithoutShipping_ratesInput = {
    where: Prisma.carriersWhereUniqueInput;
    create: Prisma.XOR<Prisma.carriersCreateWithoutShipping_ratesInput, Prisma.carriersUncheckedCreateWithoutShipping_ratesInput>;
};
export type carriersUpsertWithoutShipping_ratesInput = {
    update: Prisma.XOR<Prisma.carriersUpdateWithoutShipping_ratesInput, Prisma.carriersUncheckedUpdateWithoutShipping_ratesInput>;
    create: Prisma.XOR<Prisma.carriersCreateWithoutShipping_ratesInput, Prisma.carriersUncheckedCreateWithoutShipping_ratesInput>;
    where?: Prisma.carriersWhereInput;
};
export type carriersUpdateToOneWithWhereWithoutShipping_ratesInput = {
    where?: Prisma.carriersWhereInput;
    data: Prisma.XOR<Prisma.carriersUpdateWithoutShipping_ratesInput, Prisma.carriersUncheckedUpdateWithoutShipping_ratesInput>;
};
export type carriersUpdateWithoutShipping_ratesInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipments?: Prisma.shipmentsUpdateManyWithoutCarriersNestedInput;
};
export type carriersUncheckedUpdateWithoutShipping_ratesInput = {
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipments?: Prisma.shipmentsUncheckedUpdateManyWithoutCarriersNestedInput;
};
export type CarriersCountOutputType = {
    shipments: number;
    shipping_rates: number;
};
export type CarriersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipments?: boolean | CarriersCountOutputTypeCountShipmentsArgs;
    shipping_rates?: boolean | CarriersCountOutputTypeCountShipping_ratesArgs;
};
export type CarriersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarriersCountOutputTypeSelect<ExtArgs> | null;
};
export type CarriersCountOutputTypeCountShipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipmentsWhereInput;
};
export type CarriersCountOutputTypeCountShipping_ratesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipping_ratesWhereInput;
};
export type carriersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    carrier_id?: boolean;
    carrier_name?: boolean;
    shipments?: boolean | Prisma.carriers$shipmentsArgs<ExtArgs>;
    shipping_rates?: boolean | Prisma.carriers$shipping_ratesArgs<ExtArgs>;
    _count?: boolean | Prisma.CarriersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carriers"]>;
export type carriersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    carrier_id?: boolean;
    carrier_name?: boolean;
}, ExtArgs["result"]["carriers"]>;
export type carriersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    carrier_id?: boolean;
    carrier_name?: boolean;
}, ExtArgs["result"]["carriers"]>;
export type carriersSelectScalar = {
    carrier_id?: boolean;
    carrier_name?: boolean;
};
export type carriersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"carrier_id" | "carrier_name", ExtArgs["result"]["carriers"]>;
export type carriersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipments?: boolean | Prisma.carriers$shipmentsArgs<ExtArgs>;
    shipping_rates?: boolean | Prisma.carriers$shipping_ratesArgs<ExtArgs>;
    _count?: boolean | Prisma.CarriersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type carriersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type carriersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $carriersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "carriers";
    objects: {
        shipments: Prisma.$shipmentsPayload<ExtArgs>[];
        shipping_rates: Prisma.$shipping_ratesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        carrier_id: bigint;
        carrier_name: string;
    }, ExtArgs["result"]["carriers"]>;
    composites: {};
};
export type carriersGetPayload<S extends boolean | null | undefined | carriersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$carriersPayload, S>;
export type carriersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<carriersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarriersCountAggregateInputType | true;
};
export interface carriersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['carriers'];
        meta: {
            name: 'carriers';
        };
    };
    findUnique<T extends carriersFindUniqueArgs>(args: Prisma.SelectSubset<T, carriersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends carriersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, carriersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends carriersFindFirstArgs>(args?: Prisma.SelectSubset<T, carriersFindFirstArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends carriersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, carriersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends carriersFindManyArgs>(args?: Prisma.SelectSubset<T, carriersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends carriersCreateArgs>(args: Prisma.SelectSubset<T, carriersCreateArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends carriersCreateManyArgs>(args?: Prisma.SelectSubset<T, carriersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends carriersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, carriersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends carriersDeleteArgs>(args: Prisma.SelectSubset<T, carriersDeleteArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends carriersUpdateArgs>(args: Prisma.SelectSubset<T, carriersUpdateArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends carriersDeleteManyArgs>(args?: Prisma.SelectSubset<T, carriersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends carriersUpdateManyArgs>(args: Prisma.SelectSubset<T, carriersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends carriersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, carriersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends carriersUpsertArgs>(args: Prisma.SelectSubset<T, carriersUpsertArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends carriersCountArgs>(args?: Prisma.Subset<T, carriersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CarriersCountAggregateOutputType> : number>;
    aggregate<T extends CarriersAggregateArgs>(args: Prisma.Subset<T, CarriersAggregateArgs>): Prisma.PrismaPromise<GetCarriersAggregateType<T>>;
    groupBy<T extends carriersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: carriersGroupByArgs['orderBy'];
    } : {
        orderBy?: carriersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, carriersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarriersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: carriersFieldRefs;
}
export interface Prisma__carriersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shipments<T extends Prisma.carriers$shipmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carriers$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shipping_rates<T extends Prisma.carriers$shipping_ratesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carriers$shipping_ratesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface carriersFieldRefs {
    readonly carrier_id: Prisma.FieldRef<"carriers", 'BigInt'>;
    readonly carrier_name: Prisma.FieldRef<"carriers", 'String'>;
}
export type carriersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where: Prisma.carriersWhereUniqueInput;
};
export type carriersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where: Prisma.carriersWhereUniqueInput;
};
export type carriersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where?: Prisma.carriersWhereInput;
    orderBy?: Prisma.carriersOrderByWithRelationInput | Prisma.carriersOrderByWithRelationInput[];
    cursor?: Prisma.carriersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarriersScalarFieldEnum | Prisma.CarriersScalarFieldEnum[];
};
export type carriersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where?: Prisma.carriersWhereInput;
    orderBy?: Prisma.carriersOrderByWithRelationInput | Prisma.carriersOrderByWithRelationInput[];
    cursor?: Prisma.carriersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarriersScalarFieldEnum | Prisma.CarriersScalarFieldEnum[];
};
export type carriersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where?: Prisma.carriersWhereInput;
    orderBy?: Prisma.carriersOrderByWithRelationInput | Prisma.carriersOrderByWithRelationInput[];
    cursor?: Prisma.carriersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarriersScalarFieldEnum | Prisma.CarriersScalarFieldEnum[];
};
export type carriersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carriersCreateInput, Prisma.carriersUncheckedCreateInput>;
};
export type carriersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.carriersCreateManyInput | Prisma.carriersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type carriersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    data: Prisma.carriersCreateManyInput | Prisma.carriersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type carriersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carriersUpdateInput, Prisma.carriersUncheckedUpdateInput>;
    where: Prisma.carriersWhereUniqueInput;
};
export type carriersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.carriersUpdateManyMutationInput, Prisma.carriersUncheckedUpdateManyInput>;
    where?: Prisma.carriersWhereInput;
    limit?: number;
};
export type carriersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carriersUpdateManyMutationInput, Prisma.carriersUncheckedUpdateManyInput>;
    where?: Prisma.carriersWhereInput;
    limit?: number;
};
export type carriersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where: Prisma.carriersWhereUniqueInput;
    create: Prisma.XOR<Prisma.carriersCreateInput, Prisma.carriersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.carriersUpdateInput, Prisma.carriersUncheckedUpdateInput>;
};
export type carriersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
    where: Prisma.carriersWhereUniqueInput;
};
export type carriersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carriersWhereInput;
    limit?: number;
};
export type carriers$shipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type carriers$shipping_ratesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
    where?: Prisma.shipping_ratesWhereInput;
    orderBy?: Prisma.shipping_ratesOrderByWithRelationInput | Prisma.shipping_ratesOrderByWithRelationInput[];
    cursor?: Prisma.shipping_ratesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Shipping_ratesScalarFieldEnum | Prisma.Shipping_ratesScalarFieldEnum[];
};
export type carriersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carriersSelect<ExtArgs> | null;
    omit?: Prisma.carriersOmit<ExtArgs> | null;
    include?: Prisma.carriersInclude<ExtArgs> | null;
};
