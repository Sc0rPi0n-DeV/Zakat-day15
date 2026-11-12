import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_tagsModel = runtime.Types.Result.DefaultSelection<Prisma.$product_tagsPayload>;
export type AggregateProduct_tags = {
    _count: Product_tagsCountAggregateOutputType | null;
    _avg: Product_tagsAvgAggregateOutputType | null;
    _sum: Product_tagsSumAggregateOutputType | null;
    _min: Product_tagsMinAggregateOutputType | null;
    _max: Product_tagsMaxAggregateOutputType | null;
};
export type Product_tagsAvgAggregateOutputType = {
    tag_id: number | null;
};
export type Product_tagsSumAggregateOutputType = {
    tag_id: bigint | null;
};
export type Product_tagsMinAggregateOutputType = {
    tag_id: bigint | null;
    tag_name: string | null;
};
export type Product_tagsMaxAggregateOutputType = {
    tag_id: bigint | null;
    tag_name: string | null;
};
export type Product_tagsCountAggregateOutputType = {
    tag_id: number;
    tag_name: number;
    _all: number;
};
export type Product_tagsAvgAggregateInputType = {
    tag_id?: true;
};
export type Product_tagsSumAggregateInputType = {
    tag_id?: true;
};
export type Product_tagsMinAggregateInputType = {
    tag_id?: true;
    tag_name?: true;
};
export type Product_tagsMaxAggregateInputType = {
    tag_id?: true;
    tag_name?: true;
};
export type Product_tagsCountAggregateInputType = {
    tag_id?: true;
    tag_name?: true;
    _all?: true;
};
export type Product_tagsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tagsWhereInput;
    orderBy?: Prisma.product_tagsOrderByWithRelationInput | Prisma.product_tagsOrderByWithRelationInput[];
    cursor?: Prisma.product_tagsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_tagsCountAggregateInputType;
    _avg?: Product_tagsAvgAggregateInputType;
    _sum?: Product_tagsSumAggregateInputType;
    _min?: Product_tagsMinAggregateInputType;
    _max?: Product_tagsMaxAggregateInputType;
};
export type GetProduct_tagsAggregateType<T extends Product_tagsAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_tags]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_tags[P]> : Prisma.GetScalarType<T[P], AggregateProduct_tags[P]>;
};
export type product_tagsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tagsWhereInput;
    orderBy?: Prisma.product_tagsOrderByWithAggregationInput | Prisma.product_tagsOrderByWithAggregationInput[];
    by: Prisma.Product_tagsScalarFieldEnum[] | Prisma.Product_tagsScalarFieldEnum;
    having?: Prisma.product_tagsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_tagsCountAggregateInputType | true;
    _avg?: Product_tagsAvgAggregateInputType;
    _sum?: Product_tagsSumAggregateInputType;
    _min?: Product_tagsMinAggregateInputType;
    _max?: Product_tagsMaxAggregateInputType;
};
export type Product_tagsGroupByOutputType = {
    tag_id: bigint;
    tag_name: string;
    _count: Product_tagsCountAggregateOutputType | null;
    _avg: Product_tagsAvgAggregateOutputType | null;
    _sum: Product_tagsSumAggregateOutputType | null;
    _min: Product_tagsMinAggregateOutputType | null;
    _max: Product_tagsMaxAggregateOutputType | null;
};
export type GetProduct_tagsGroupByPayload<T extends product_tagsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_tagsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_tagsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_tagsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_tagsGroupByOutputType[P]>;
}>>;
export type product_tagsWhereInput = {
    AND?: Prisma.product_tagsWhereInput | Prisma.product_tagsWhereInput[];
    OR?: Prisma.product_tagsWhereInput[];
    NOT?: Prisma.product_tagsWhereInput | Prisma.product_tagsWhereInput[];
    tag_id?: Prisma.BigIntFilter<"product_tags"> | bigint | number;
    tag_name?: Prisma.StringFilter<"product_tags"> | string;
    product_tag_links?: Prisma.Product_tag_linksListRelationFilter;
};
export type product_tagsOrderByWithRelationInput = {
    tag_id?: Prisma.SortOrder;
    tag_name?: Prisma.SortOrder;
    product_tag_links?: Prisma.product_tag_linksOrderByRelationAggregateInput;
};
export type product_tagsWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: bigint | number;
    tag_name?: string;
    AND?: Prisma.product_tagsWhereInput | Prisma.product_tagsWhereInput[];
    OR?: Prisma.product_tagsWhereInput[];
    NOT?: Prisma.product_tagsWhereInput | Prisma.product_tagsWhereInput[];
    product_tag_links?: Prisma.Product_tag_linksListRelationFilter;
}, "tag_id" | "tag_name">;
export type product_tagsOrderByWithAggregationInput = {
    tag_id?: Prisma.SortOrder;
    tag_name?: Prisma.SortOrder;
    _count?: Prisma.product_tagsCountOrderByAggregateInput;
    _avg?: Prisma.product_tagsAvgOrderByAggregateInput;
    _max?: Prisma.product_tagsMaxOrderByAggregateInput;
    _min?: Prisma.product_tagsMinOrderByAggregateInput;
    _sum?: Prisma.product_tagsSumOrderByAggregateInput;
};
export type product_tagsScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_tagsScalarWhereWithAggregatesInput | Prisma.product_tagsScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_tagsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_tagsScalarWhereWithAggregatesInput | Prisma.product_tagsScalarWhereWithAggregatesInput[];
    tag_id?: Prisma.BigIntWithAggregatesFilter<"product_tags"> | bigint | number;
    tag_name?: Prisma.StringWithAggregatesFilter<"product_tags"> | string;
};
export type product_tagsCreateInput = {
    tag_id?: bigint | number;
    tag_name: string;
    product_tag_links?: Prisma.product_tag_linksCreateNestedManyWithoutProduct_tagsInput;
};
export type product_tagsUncheckedCreateInput = {
    tag_id?: bigint | number;
    tag_name: string;
    product_tag_links?: Prisma.product_tag_linksUncheckedCreateNestedManyWithoutProduct_tagsInput;
};
export type product_tagsUpdateInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_name?: Prisma.StringFieldUpdateOperationsInput | string;
    product_tag_links?: Prisma.product_tag_linksUpdateManyWithoutProduct_tagsNestedInput;
};
export type product_tagsUncheckedUpdateInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_name?: Prisma.StringFieldUpdateOperationsInput | string;
    product_tag_links?: Prisma.product_tag_linksUncheckedUpdateManyWithoutProduct_tagsNestedInput;
};
export type product_tagsCreateManyInput = {
    tag_id?: bigint | number;
    tag_name: string;
};
export type product_tagsUpdateManyMutationInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type product_tagsUncheckedUpdateManyInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Product_tagsScalarRelationFilter = {
    is?: Prisma.product_tagsWhereInput;
    isNot?: Prisma.product_tagsWhereInput;
};
export type product_tagsCountOrderByAggregateInput = {
    tag_id?: Prisma.SortOrder;
    tag_name?: Prisma.SortOrder;
};
export type product_tagsAvgOrderByAggregateInput = {
    tag_id?: Prisma.SortOrder;
};
export type product_tagsMaxOrderByAggregateInput = {
    tag_id?: Prisma.SortOrder;
    tag_name?: Prisma.SortOrder;
};
export type product_tagsMinOrderByAggregateInput = {
    tag_id?: Prisma.SortOrder;
    tag_name?: Prisma.SortOrder;
};
export type product_tagsSumOrderByAggregateInput = {
    tag_id?: Prisma.SortOrder;
};
export type product_tagsCreateNestedOneWithoutProduct_tag_linksInput = {
    create?: Prisma.XOR<Prisma.product_tagsCreateWithoutProduct_tag_linksInput, Prisma.product_tagsUncheckedCreateWithoutProduct_tag_linksInput>;
    connectOrCreate?: Prisma.product_tagsCreateOrConnectWithoutProduct_tag_linksInput;
    connect?: Prisma.product_tagsWhereUniqueInput;
};
export type product_tagsUpdateOneRequiredWithoutProduct_tag_linksNestedInput = {
    create?: Prisma.XOR<Prisma.product_tagsCreateWithoutProduct_tag_linksInput, Prisma.product_tagsUncheckedCreateWithoutProduct_tag_linksInput>;
    connectOrCreate?: Prisma.product_tagsCreateOrConnectWithoutProduct_tag_linksInput;
    upsert?: Prisma.product_tagsUpsertWithoutProduct_tag_linksInput;
    connect?: Prisma.product_tagsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_tagsUpdateToOneWithWhereWithoutProduct_tag_linksInput, Prisma.product_tagsUpdateWithoutProduct_tag_linksInput>, Prisma.product_tagsUncheckedUpdateWithoutProduct_tag_linksInput>;
};
export type product_tagsCreateWithoutProduct_tag_linksInput = {
    tag_id?: bigint | number;
    tag_name: string;
};
export type product_tagsUncheckedCreateWithoutProduct_tag_linksInput = {
    tag_id?: bigint | number;
    tag_name: string;
};
export type product_tagsCreateOrConnectWithoutProduct_tag_linksInput = {
    where: Prisma.product_tagsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_tagsCreateWithoutProduct_tag_linksInput, Prisma.product_tagsUncheckedCreateWithoutProduct_tag_linksInput>;
};
export type product_tagsUpsertWithoutProduct_tag_linksInput = {
    update: Prisma.XOR<Prisma.product_tagsUpdateWithoutProduct_tag_linksInput, Prisma.product_tagsUncheckedUpdateWithoutProduct_tag_linksInput>;
    create: Prisma.XOR<Prisma.product_tagsCreateWithoutProduct_tag_linksInput, Prisma.product_tagsUncheckedCreateWithoutProduct_tag_linksInput>;
    where?: Prisma.product_tagsWhereInput;
};
export type product_tagsUpdateToOneWithWhereWithoutProduct_tag_linksInput = {
    where?: Prisma.product_tagsWhereInput;
    data: Prisma.XOR<Prisma.product_tagsUpdateWithoutProduct_tag_linksInput, Prisma.product_tagsUncheckedUpdateWithoutProduct_tag_linksInput>;
};
export type product_tagsUpdateWithoutProduct_tag_linksInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type product_tagsUncheckedUpdateWithoutProduct_tag_linksInput = {
    tag_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tag_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Product_tagsCountOutputType = {
    product_tag_links: number;
};
export type Product_tagsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_tag_links?: boolean | Product_tagsCountOutputTypeCountProduct_tag_linksArgs;
};
export type Product_tagsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Product_tagsCountOutputTypeSelect<ExtArgs> | null;
};
export type Product_tagsCountOutputTypeCountProduct_tag_linksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tag_linksWhereInput;
};
export type product_tagsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tag_id?: boolean;
    tag_name?: boolean;
    product_tag_links?: boolean | Prisma.product_tags$product_tag_linksArgs<ExtArgs>;
    _count?: boolean | Prisma.Product_tagsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_tags"]>;
export type product_tagsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tag_id?: boolean;
    tag_name?: boolean;
}, ExtArgs["result"]["product_tags"]>;
export type product_tagsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tag_id?: boolean;
    tag_name?: boolean;
}, ExtArgs["result"]["product_tags"]>;
export type product_tagsSelectScalar = {
    tag_id?: boolean;
    tag_name?: boolean;
};
export type product_tagsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"tag_id" | "tag_name", ExtArgs["result"]["product_tags"]>;
export type product_tagsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_tag_links?: boolean | Prisma.product_tags$product_tag_linksArgs<ExtArgs>;
    _count?: boolean | Prisma.Product_tagsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type product_tagsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type product_tagsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $product_tagsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_tags";
    objects: {
        product_tag_links: Prisma.$product_tag_linksPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        tag_id: bigint;
        tag_name: string;
    }, ExtArgs["result"]["product_tags"]>;
    composites: {};
};
export type product_tagsGetPayload<S extends boolean | null | undefined | product_tagsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_tagsPayload, S>;
export type product_tagsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_tagsCountAggregateInputType | true;
};
export interface product_tagsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_tags'];
        meta: {
            name: 'product_tags';
        };
    };
    findUnique<T extends product_tagsFindUniqueArgs>(args: Prisma.SelectSubset<T, product_tagsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_tagsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_tagsFindFirstArgs>(args?: Prisma.SelectSubset<T, product_tagsFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_tagsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_tagsFindManyArgs>(args?: Prisma.SelectSubset<T, product_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_tagsCreateArgs>(args: Prisma.SelectSubset<T, product_tagsCreateArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_tagsCreateManyArgs>(args?: Prisma.SelectSubset<T, product_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends product_tagsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, product_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends product_tagsDeleteArgs>(args: Prisma.SelectSubset<T, product_tagsDeleteArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_tagsUpdateArgs>(args: Prisma.SelectSubset<T, product_tagsUpdateArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_tagsDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_tagsUpdateManyArgs>(args: Prisma.SelectSubset<T, product_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends product_tagsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, product_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends product_tagsUpsertArgs>(args: Prisma.SelectSubset<T, product_tagsUpsertArgs<ExtArgs>>): Prisma.Prisma__product_tagsClient<runtime.Types.Result.GetResult<Prisma.$product_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_tagsCountArgs>(args?: Prisma.Subset<T, product_tagsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_tagsCountAggregateOutputType> : number>;
    aggregate<T extends Product_tagsAggregateArgs>(args: Prisma.Subset<T, Product_tagsAggregateArgs>): Prisma.PrismaPromise<GetProduct_tagsAggregateType<T>>;
    groupBy<T extends product_tagsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_tagsGroupByArgs['orderBy'];
    } : {
        orderBy?: product_tagsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_tagsFieldRefs;
}
export interface Prisma__product_tagsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product_tag_links<T extends Prisma.product_tags$product_tag_linksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_tags$product_tag_linksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_tag_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_tagsFieldRefs {
    readonly tag_id: Prisma.FieldRef<"product_tags", 'BigInt'>;
    readonly tag_name: Prisma.FieldRef<"product_tags", 'String'>;
}
export type product_tagsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    where: Prisma.product_tagsWhereUniqueInput;
};
export type product_tagsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    where: Prisma.product_tagsWhereUniqueInput;
};
export type product_tagsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    where?: Prisma.product_tagsWhereInput;
    orderBy?: Prisma.product_tagsOrderByWithRelationInput | Prisma.product_tagsOrderByWithRelationInput[];
    cursor?: Prisma.product_tagsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_tagsScalarFieldEnum | Prisma.Product_tagsScalarFieldEnum[];
};
export type product_tagsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    where?: Prisma.product_tagsWhereInput;
    orderBy?: Prisma.product_tagsOrderByWithRelationInput | Prisma.product_tagsOrderByWithRelationInput[];
    cursor?: Prisma.product_tagsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_tagsScalarFieldEnum | Prisma.Product_tagsScalarFieldEnum[];
};
export type product_tagsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    where?: Prisma.product_tagsWhereInput;
    orderBy?: Prisma.product_tagsOrderByWithRelationInput | Prisma.product_tagsOrderByWithRelationInput[];
    cursor?: Prisma.product_tagsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_tagsScalarFieldEnum | Prisma.Product_tagsScalarFieldEnum[];
};
export type product_tagsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_tagsCreateInput, Prisma.product_tagsUncheckedCreateInput>;
};
export type product_tagsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_tagsCreateManyInput | Prisma.product_tagsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_tagsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    data: Prisma.product_tagsCreateManyInput | Prisma.product_tagsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_tagsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_tagsUpdateInput, Prisma.product_tagsUncheckedUpdateInput>;
    where: Prisma.product_tagsWhereUniqueInput;
};
export type product_tagsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_tagsUpdateManyMutationInput, Prisma.product_tagsUncheckedUpdateManyInput>;
    where?: Prisma.product_tagsWhereInput;
    limit?: number;
};
export type product_tagsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_tagsUpdateManyMutationInput, Prisma.product_tagsUncheckedUpdateManyInput>;
    where?: Prisma.product_tagsWhereInput;
    limit?: number;
};
export type product_tagsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    where: Prisma.product_tagsWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_tagsCreateInput, Prisma.product_tagsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_tagsUpdateInput, Prisma.product_tagsUncheckedUpdateInput>;
};
export type product_tagsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
    where: Prisma.product_tagsWhereUniqueInput;
};
export type product_tagsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_tagsWhereInput;
    limit?: number;
};
export type product_tags$product_tag_linksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tag_linksSelect<ExtArgs> | null;
    omit?: Prisma.product_tag_linksOmit<ExtArgs> | null;
    include?: Prisma.product_tag_linksInclude<ExtArgs> | null;
    where?: Prisma.product_tag_linksWhereInput;
    orderBy?: Prisma.product_tag_linksOrderByWithRelationInput | Prisma.product_tag_linksOrderByWithRelationInput[];
    cursor?: Prisma.product_tag_linksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_tag_linksScalarFieldEnum | Prisma.Product_tag_linksScalarFieldEnum[];
};
export type product_tagsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_tagsSelect<ExtArgs> | null;
    omit?: Prisma.product_tagsOmit<ExtArgs> | null;
    include?: Prisma.product_tagsInclude<ExtArgs> | null;
};
