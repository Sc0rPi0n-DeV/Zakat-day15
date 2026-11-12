import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type suppliersModel = runtime.Types.Result.DefaultSelection<Prisma.$suppliersPayload>;
export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null;
    _avg: SuppliersAvgAggregateOutputType | null;
    _sum: SuppliersSumAggregateOutputType | null;
    _min: SuppliersMinAggregateOutputType | null;
    _max: SuppliersMaxAggregateOutputType | null;
};
export type SuppliersAvgAggregateOutputType = {
    supplier_id: number | null;
};
export type SuppliersSumAggregateOutputType = {
    supplier_id: bigint | null;
};
export type SuppliersMinAggregateOutputType = {
    supplier_id: bigint | null;
    supplier_name: string | null;
    email: string | null;
};
export type SuppliersMaxAggregateOutputType = {
    supplier_id: bigint | null;
    supplier_name: string | null;
    email: string | null;
};
export type SuppliersCountAggregateOutputType = {
    supplier_id: number;
    supplier_name: number;
    email: number;
    _all: number;
};
export type SuppliersAvgAggregateInputType = {
    supplier_id?: true;
};
export type SuppliersSumAggregateInputType = {
    supplier_id?: true;
};
export type SuppliersMinAggregateInputType = {
    supplier_id?: true;
    supplier_name?: true;
    email?: true;
};
export type SuppliersMaxAggregateInputType = {
    supplier_id?: true;
    supplier_name?: true;
    email?: true;
};
export type SuppliersCountAggregateInputType = {
    supplier_id?: true;
    supplier_name?: true;
    email?: true;
    _all?: true;
};
export type SuppliersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.suppliersWhereInput;
    orderBy?: Prisma.suppliersOrderByWithRelationInput | Prisma.suppliersOrderByWithRelationInput[];
    cursor?: Prisma.suppliersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SuppliersCountAggregateInputType;
    _avg?: SuppliersAvgAggregateInputType;
    _sum?: SuppliersSumAggregateInputType;
    _min?: SuppliersMinAggregateInputType;
    _max?: SuppliersMaxAggregateInputType;
};
export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
    [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSuppliers[P]> : Prisma.GetScalarType<T[P], AggregateSuppliers[P]>;
};
export type suppliersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.suppliersWhereInput;
    orderBy?: Prisma.suppliersOrderByWithAggregationInput | Prisma.suppliersOrderByWithAggregationInput[];
    by: Prisma.SuppliersScalarFieldEnum[] | Prisma.SuppliersScalarFieldEnum;
    having?: Prisma.suppliersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SuppliersCountAggregateInputType | true;
    _avg?: SuppliersAvgAggregateInputType;
    _sum?: SuppliersSumAggregateInputType;
    _min?: SuppliersMinAggregateInputType;
    _max?: SuppliersMaxAggregateInputType;
};
export type SuppliersGroupByOutputType = {
    supplier_id: bigint;
    supplier_name: string;
    email: string | null;
    _count: SuppliersCountAggregateOutputType | null;
    _avg: SuppliersAvgAggregateOutputType | null;
    _sum: SuppliersSumAggregateOutputType | null;
    _min: SuppliersMinAggregateOutputType | null;
    _max: SuppliersMaxAggregateOutputType | null;
};
export type GetSuppliersGroupByPayload<T extends suppliersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SuppliersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SuppliersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SuppliersGroupByOutputType[P]>;
}>>;
export type suppliersWhereInput = {
    AND?: Prisma.suppliersWhereInput | Prisma.suppliersWhereInput[];
    OR?: Prisma.suppliersWhereInput[];
    NOT?: Prisma.suppliersWhereInput | Prisma.suppliersWhereInput[];
    supplier_id?: Prisma.BigIntFilter<"suppliers"> | bigint | number;
    supplier_name?: Prisma.StringFilter<"suppliers"> | string;
    email?: Prisma.StringNullableFilter<"suppliers"> | string | null;
    purchase_orders?: Prisma.Purchase_ordersListRelationFilter;
};
export type suppliersOrderByWithRelationInput = {
    supplier_id?: Prisma.SortOrder;
    supplier_name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchase_orders?: Prisma.purchase_ordersOrderByRelationAggregateInput;
};
export type suppliersWhereUniqueInput = Prisma.AtLeast<{
    supplier_id?: bigint | number;
    AND?: Prisma.suppliersWhereInput | Prisma.suppliersWhereInput[];
    OR?: Prisma.suppliersWhereInput[];
    NOT?: Prisma.suppliersWhereInput | Prisma.suppliersWhereInput[];
    supplier_name?: Prisma.StringFilter<"suppliers"> | string;
    email?: Prisma.StringNullableFilter<"suppliers"> | string | null;
    purchase_orders?: Prisma.Purchase_ordersListRelationFilter;
}, "supplier_id">;
export type suppliersOrderByWithAggregationInput = {
    supplier_id?: Prisma.SortOrder;
    supplier_name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.suppliersCountOrderByAggregateInput;
    _avg?: Prisma.suppliersAvgOrderByAggregateInput;
    _max?: Prisma.suppliersMaxOrderByAggregateInput;
    _min?: Prisma.suppliersMinOrderByAggregateInput;
    _sum?: Prisma.suppliersSumOrderByAggregateInput;
};
export type suppliersScalarWhereWithAggregatesInput = {
    AND?: Prisma.suppliersScalarWhereWithAggregatesInput | Prisma.suppliersScalarWhereWithAggregatesInput[];
    OR?: Prisma.suppliersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.suppliersScalarWhereWithAggregatesInput | Prisma.suppliersScalarWhereWithAggregatesInput[];
    supplier_id?: Prisma.BigIntWithAggregatesFilter<"suppliers"> | bigint | number;
    supplier_name?: Prisma.StringWithAggregatesFilter<"suppliers"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"suppliers"> | string | null;
};
export type suppliersCreateInput = {
    supplier_id?: bigint | number;
    supplier_name: string;
    email?: string | null;
    purchase_orders?: Prisma.purchase_ordersCreateNestedManyWithoutSuppliersInput;
};
export type suppliersUncheckedCreateInput = {
    supplier_id?: bigint | number;
    supplier_name: string;
    email?: string | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedCreateNestedManyWithoutSuppliersInput;
};
export type suppliersUpdateInput = {
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_orders?: Prisma.purchase_ordersUpdateManyWithoutSuppliersNestedInput;
};
export type suppliersUncheckedUpdateInput = {
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_orders?: Prisma.purchase_ordersUncheckedUpdateManyWithoutSuppliersNestedInput;
};
export type suppliersCreateManyInput = {
    supplier_id?: bigint | number;
    supplier_name: string;
    email?: string | null;
};
export type suppliersUpdateManyMutationInput = {
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type suppliersUncheckedUpdateManyInput = {
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SuppliersScalarRelationFilter = {
    is?: Prisma.suppliersWhereInput;
    isNot?: Prisma.suppliersWhereInput;
};
export type suppliersCountOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    supplier_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type suppliersAvgOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
};
export type suppliersMaxOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    supplier_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type suppliersMinOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    supplier_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type suppliersSumOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
};
export type suppliersCreateNestedOneWithoutPurchase_ordersInput = {
    create?: Prisma.XOR<Prisma.suppliersCreateWithoutPurchase_ordersInput, Prisma.suppliersUncheckedCreateWithoutPurchase_ordersInput>;
    connectOrCreate?: Prisma.suppliersCreateOrConnectWithoutPurchase_ordersInput;
    connect?: Prisma.suppliersWhereUniqueInput;
};
export type suppliersUpdateOneRequiredWithoutPurchase_ordersNestedInput = {
    create?: Prisma.XOR<Prisma.suppliersCreateWithoutPurchase_ordersInput, Prisma.suppliersUncheckedCreateWithoutPurchase_ordersInput>;
    connectOrCreate?: Prisma.suppliersCreateOrConnectWithoutPurchase_ordersInput;
    upsert?: Prisma.suppliersUpsertWithoutPurchase_ordersInput;
    connect?: Prisma.suppliersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.suppliersUpdateToOneWithWhereWithoutPurchase_ordersInput, Prisma.suppliersUpdateWithoutPurchase_ordersInput>, Prisma.suppliersUncheckedUpdateWithoutPurchase_ordersInput>;
};
export type suppliersCreateWithoutPurchase_ordersInput = {
    supplier_id?: bigint | number;
    supplier_name: string;
    email?: string | null;
};
export type suppliersUncheckedCreateWithoutPurchase_ordersInput = {
    supplier_id?: bigint | number;
    supplier_name: string;
    email?: string | null;
};
export type suppliersCreateOrConnectWithoutPurchase_ordersInput = {
    where: Prisma.suppliersWhereUniqueInput;
    create: Prisma.XOR<Prisma.suppliersCreateWithoutPurchase_ordersInput, Prisma.suppliersUncheckedCreateWithoutPurchase_ordersInput>;
};
export type suppliersUpsertWithoutPurchase_ordersInput = {
    update: Prisma.XOR<Prisma.suppliersUpdateWithoutPurchase_ordersInput, Prisma.suppliersUncheckedUpdateWithoutPurchase_ordersInput>;
    create: Prisma.XOR<Prisma.suppliersCreateWithoutPurchase_ordersInput, Prisma.suppliersUncheckedCreateWithoutPurchase_ordersInput>;
    where?: Prisma.suppliersWhereInput;
};
export type suppliersUpdateToOneWithWhereWithoutPurchase_ordersInput = {
    where?: Prisma.suppliersWhereInput;
    data: Prisma.XOR<Prisma.suppliersUpdateWithoutPurchase_ordersInput, Prisma.suppliersUncheckedUpdateWithoutPurchase_ordersInput>;
};
export type suppliersUpdateWithoutPurchase_ordersInput = {
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type suppliersUncheckedUpdateWithoutPurchase_ordersInput = {
    supplier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    supplier_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type SuppliersCountOutputType = {
    purchase_orders: number;
};
export type SuppliersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_orders?: boolean | SuppliersCountOutputTypeCountPurchase_ordersArgs;
};
export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SuppliersCountOutputTypeSelect<ExtArgs> | null;
};
export type SuppliersCountOutputTypeCountPurchase_ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.purchase_ordersWhereInput;
};
export type suppliersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    supplier_name?: boolean;
    email?: boolean;
    purchase_orders?: boolean | Prisma.suppliers$purchase_ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.SuppliersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suppliers"]>;
export type suppliersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    supplier_name?: boolean;
    email?: boolean;
}, ExtArgs["result"]["suppliers"]>;
export type suppliersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    supplier_name?: boolean;
    email?: boolean;
}, ExtArgs["result"]["suppliers"]>;
export type suppliersSelectScalar = {
    supplier_id?: boolean;
    supplier_name?: boolean;
    email?: boolean;
};
export type suppliersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplier_id" | "supplier_name" | "email", ExtArgs["result"]["suppliers"]>;
export type suppliersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchase_orders?: boolean | Prisma.suppliers$purchase_ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.SuppliersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type suppliersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type suppliersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $suppliersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "suppliers";
    objects: {
        purchase_orders: Prisma.$purchase_ordersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplier_id: bigint;
        supplier_name: string;
        email: string | null;
    }, ExtArgs["result"]["suppliers"]>;
    composites: {};
};
export type suppliersGetPayload<S extends boolean | null | undefined | suppliersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$suppliersPayload, S>;
export type suppliersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<suppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SuppliersCountAggregateInputType | true;
};
export interface suppliersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['suppliers'];
        meta: {
            name: 'suppliers';
        };
    };
    findUnique<T extends suppliersFindUniqueArgs>(args: Prisma.SelectSubset<T, suppliersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends suppliersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, suppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends suppliersFindFirstArgs>(args?: Prisma.SelectSubset<T, suppliersFindFirstArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends suppliersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, suppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends suppliersFindManyArgs>(args?: Prisma.SelectSubset<T, suppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends suppliersCreateArgs>(args: Prisma.SelectSubset<T, suppliersCreateArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends suppliersCreateManyArgs>(args?: Prisma.SelectSubset<T, suppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends suppliersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, suppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends suppliersDeleteArgs>(args: Prisma.SelectSubset<T, suppliersDeleteArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends suppliersUpdateArgs>(args: Prisma.SelectSubset<T, suppliersUpdateArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends suppliersDeleteManyArgs>(args?: Prisma.SelectSubset<T, suppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends suppliersUpdateManyArgs>(args: Prisma.SelectSubset<T, suppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends suppliersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, suppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends suppliersUpsertArgs>(args: Prisma.SelectSubset<T, suppliersUpsertArgs<ExtArgs>>): Prisma.Prisma__suppliersClient<runtime.Types.Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends suppliersCountArgs>(args?: Prisma.Subset<T, suppliersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SuppliersCountAggregateOutputType> : number>;
    aggregate<T extends SuppliersAggregateArgs>(args: Prisma.Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>;
    groupBy<T extends suppliersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: suppliersGroupByArgs['orderBy'];
    } : {
        orderBy?: suppliersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, suppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: suppliersFieldRefs;
}
export interface Prisma__suppliersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchase_orders<T extends Prisma.suppliers$purchase_ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.suppliers$purchase_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$purchase_ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface suppliersFieldRefs {
    readonly supplier_id: Prisma.FieldRef<"suppliers", 'BigInt'>;
    readonly supplier_name: Prisma.FieldRef<"suppliers", 'String'>;
    readonly email: Prisma.FieldRef<"suppliers", 'String'>;
}
export type suppliersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    where: Prisma.suppliersWhereUniqueInput;
};
export type suppliersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    where: Prisma.suppliersWhereUniqueInput;
};
export type suppliersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    where?: Prisma.suppliersWhereInput;
    orderBy?: Prisma.suppliersOrderByWithRelationInput | Prisma.suppliersOrderByWithRelationInput[];
    cursor?: Prisma.suppliersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SuppliersScalarFieldEnum | Prisma.SuppliersScalarFieldEnum[];
};
export type suppliersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    where?: Prisma.suppliersWhereInput;
    orderBy?: Prisma.suppliersOrderByWithRelationInput | Prisma.suppliersOrderByWithRelationInput[];
    cursor?: Prisma.suppliersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SuppliersScalarFieldEnum | Prisma.SuppliersScalarFieldEnum[];
};
export type suppliersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    where?: Prisma.suppliersWhereInput;
    orderBy?: Prisma.suppliersOrderByWithRelationInput | Prisma.suppliersOrderByWithRelationInput[];
    cursor?: Prisma.suppliersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SuppliersScalarFieldEnum | Prisma.SuppliersScalarFieldEnum[];
};
export type suppliersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.suppliersCreateInput, Prisma.suppliersUncheckedCreateInput>;
};
export type suppliersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.suppliersCreateManyInput | Prisma.suppliersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type suppliersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    data: Prisma.suppliersCreateManyInput | Prisma.suppliersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type suppliersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.suppliersUpdateInput, Prisma.suppliersUncheckedUpdateInput>;
    where: Prisma.suppliersWhereUniqueInput;
};
export type suppliersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.suppliersUpdateManyMutationInput, Prisma.suppliersUncheckedUpdateManyInput>;
    where?: Prisma.suppliersWhereInput;
    limit?: number;
};
export type suppliersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.suppliersUpdateManyMutationInput, Prisma.suppliersUncheckedUpdateManyInput>;
    where?: Prisma.suppliersWhereInput;
    limit?: number;
};
export type suppliersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    where: Prisma.suppliersWhereUniqueInput;
    create: Prisma.XOR<Prisma.suppliersCreateInput, Prisma.suppliersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.suppliersUpdateInput, Prisma.suppliersUncheckedUpdateInput>;
};
export type suppliersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
    where: Prisma.suppliersWhereUniqueInput;
};
export type suppliersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.suppliersWhereInput;
    limit?: number;
};
export type suppliers$purchase_ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type suppliersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.suppliersSelect<ExtArgs> | null;
    omit?: Prisma.suppliersOmit<ExtArgs> | null;
    include?: Prisma.suppliersInclude<ExtArgs> | null;
};
