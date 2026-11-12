import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type brandsModel = runtime.Types.Result.DefaultSelection<Prisma.$brandsPayload>;
export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null;
    _avg: BrandsAvgAggregateOutputType | null;
    _sum: BrandsSumAggregateOutputType | null;
    _min: BrandsMinAggregateOutputType | null;
    _max: BrandsMaxAggregateOutputType | null;
};
export type BrandsAvgAggregateOutputType = {
    brand_id: number | null;
};
export type BrandsSumAggregateOutputType = {
    brand_id: bigint | null;
};
export type BrandsMinAggregateOutputType = {
    brand_id: bigint | null;
    brand_name: string | null;
};
export type BrandsMaxAggregateOutputType = {
    brand_id: bigint | null;
    brand_name: string | null;
};
export type BrandsCountAggregateOutputType = {
    brand_id: number;
    brand_name: number;
    _all: number;
};
export type BrandsAvgAggregateInputType = {
    brand_id?: true;
};
export type BrandsSumAggregateInputType = {
    brand_id?: true;
};
export type BrandsMinAggregateInputType = {
    brand_id?: true;
    brand_name?: true;
};
export type BrandsMaxAggregateInputType = {
    brand_id?: true;
    brand_name?: true;
};
export type BrandsCountAggregateInputType = {
    brand_id?: true;
    brand_name?: true;
    _all?: true;
};
export type BrandsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.brandsWhereInput;
    orderBy?: Prisma.brandsOrderByWithRelationInput | Prisma.brandsOrderByWithRelationInput[];
    cursor?: Prisma.brandsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BrandsCountAggregateInputType;
    _avg?: BrandsAvgAggregateInputType;
    _sum?: BrandsSumAggregateInputType;
    _min?: BrandsMinAggregateInputType;
    _max?: BrandsMaxAggregateInputType;
};
export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
    [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrands[P]> : Prisma.GetScalarType<T[P], AggregateBrands[P]>;
};
export type brandsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.brandsWhereInput;
    orderBy?: Prisma.brandsOrderByWithAggregationInput | Prisma.brandsOrderByWithAggregationInput[];
    by: Prisma.BrandsScalarFieldEnum[] | Prisma.BrandsScalarFieldEnum;
    having?: Prisma.brandsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandsCountAggregateInputType | true;
    _avg?: BrandsAvgAggregateInputType;
    _sum?: BrandsSumAggregateInputType;
    _min?: BrandsMinAggregateInputType;
    _max?: BrandsMaxAggregateInputType;
};
export type BrandsGroupByOutputType = {
    brand_id: bigint;
    brand_name: string;
    _count: BrandsCountAggregateOutputType | null;
    _avg: BrandsAvgAggregateOutputType | null;
    _sum: BrandsSumAggregateOutputType | null;
    _min: BrandsMinAggregateOutputType | null;
    _max: BrandsMaxAggregateOutputType | null;
};
export type GetBrandsGroupByPayload<T extends brandsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandsGroupByOutputType[P]>;
}>>;
export type brandsWhereInput = {
    AND?: Prisma.brandsWhereInput | Prisma.brandsWhereInput[];
    OR?: Prisma.brandsWhereInput[];
    NOT?: Prisma.brandsWhereInput | Prisma.brandsWhereInput[];
    brand_id?: Prisma.BigIntFilter<"brands"> | bigint | number;
    brand_name?: Prisma.StringFilter<"brands"> | string;
    products?: Prisma.ProductsListRelationFilter;
};
export type brandsOrderByWithRelationInput = {
    brand_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
    products?: Prisma.productsOrderByRelationAggregateInput;
};
export type brandsWhereUniqueInput = Prisma.AtLeast<{
    brand_id?: bigint | number;
    brand_name?: string;
    AND?: Prisma.brandsWhereInput | Prisma.brandsWhereInput[];
    OR?: Prisma.brandsWhereInput[];
    NOT?: Prisma.brandsWhereInput | Prisma.brandsWhereInput[];
    products?: Prisma.ProductsListRelationFilter;
}, "brand_id" | "brand_name">;
export type brandsOrderByWithAggregationInput = {
    brand_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
    _count?: Prisma.brandsCountOrderByAggregateInput;
    _avg?: Prisma.brandsAvgOrderByAggregateInput;
    _max?: Prisma.brandsMaxOrderByAggregateInput;
    _min?: Prisma.brandsMinOrderByAggregateInput;
    _sum?: Prisma.brandsSumOrderByAggregateInput;
};
export type brandsScalarWhereWithAggregatesInput = {
    AND?: Prisma.brandsScalarWhereWithAggregatesInput | Prisma.brandsScalarWhereWithAggregatesInput[];
    OR?: Prisma.brandsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.brandsScalarWhereWithAggregatesInput | Prisma.brandsScalarWhereWithAggregatesInput[];
    brand_id?: Prisma.BigIntWithAggregatesFilter<"brands"> | bigint | number;
    brand_name?: Prisma.StringWithAggregatesFilter<"brands"> | string;
};
export type brandsCreateInput = {
    brand_id?: bigint | number;
    brand_name: string;
    products?: Prisma.productsCreateNestedManyWithoutBrandsInput;
};
export type brandsUncheckedCreateInput = {
    brand_id?: bigint | number;
    brand_name: string;
    products?: Prisma.productsUncheckedCreateNestedManyWithoutBrandsInput;
};
export type brandsUpdateInput = {
    brand_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
    products?: Prisma.productsUpdateManyWithoutBrandsNestedInput;
};
export type brandsUncheckedUpdateInput = {
    brand_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
    products?: Prisma.productsUncheckedUpdateManyWithoutBrandsNestedInput;
};
export type brandsCreateManyInput = {
    brand_id?: bigint | number;
    brand_name: string;
};
export type brandsUpdateManyMutationInput = {
    brand_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type brandsUncheckedUpdateManyInput = {
    brand_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type brandsCountOrderByAggregateInput = {
    brand_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
};
export type brandsAvgOrderByAggregateInput = {
    brand_id?: Prisma.SortOrder;
};
export type brandsMaxOrderByAggregateInput = {
    brand_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
};
export type brandsMinOrderByAggregateInput = {
    brand_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
};
export type brandsSumOrderByAggregateInput = {
    brand_id?: Prisma.SortOrder;
};
export type BrandsNullableScalarRelationFilter = {
    is?: Prisma.brandsWhereInput | null;
    isNot?: Prisma.brandsWhereInput | null;
};
export type brandsCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.brandsCreateWithoutProductsInput, Prisma.brandsUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.brandsCreateOrConnectWithoutProductsInput;
    connect?: Prisma.brandsWhereUniqueInput;
};
export type brandsUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.brandsCreateWithoutProductsInput, Prisma.brandsUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.brandsCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.brandsUpsertWithoutProductsInput;
    disconnect?: Prisma.brandsWhereInput | boolean;
    delete?: Prisma.brandsWhereInput | boolean;
    connect?: Prisma.brandsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.brandsUpdateToOneWithWhereWithoutProductsInput, Prisma.brandsUpdateWithoutProductsInput>, Prisma.brandsUncheckedUpdateWithoutProductsInput>;
};
export type brandsCreateWithoutProductsInput = {
    brand_id?: bigint | number;
    brand_name: string;
};
export type brandsUncheckedCreateWithoutProductsInput = {
    brand_id?: bigint | number;
    brand_name: string;
};
export type brandsCreateOrConnectWithoutProductsInput = {
    where: Prisma.brandsWhereUniqueInput;
    create: Prisma.XOR<Prisma.brandsCreateWithoutProductsInput, Prisma.brandsUncheckedCreateWithoutProductsInput>;
};
export type brandsUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.brandsUpdateWithoutProductsInput, Prisma.brandsUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.brandsCreateWithoutProductsInput, Prisma.brandsUncheckedCreateWithoutProductsInput>;
    where?: Prisma.brandsWhereInput;
};
export type brandsUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.brandsWhereInput;
    data: Prisma.XOR<Prisma.brandsUpdateWithoutProductsInput, Prisma.brandsUncheckedUpdateWithoutProductsInput>;
};
export type brandsUpdateWithoutProductsInput = {
    brand_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type brandsUncheckedUpdateWithoutProductsInput = {
    brand_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BrandsCountOutputType = {
    products: number;
};
export type BrandsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | BrandsCountOutputTypeCountProductsArgs;
};
export type BrandsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandsCountOutputTypeSelect<ExtArgs> | null;
};
export type BrandsCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productsWhereInput;
};
export type brandsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brand_id?: boolean;
    brand_name?: boolean;
    products?: boolean | Prisma.brands$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brands"]>;
export type brandsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brand_id?: boolean;
    brand_name?: boolean;
}, ExtArgs["result"]["brands"]>;
export type brandsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    brand_id?: boolean;
    brand_name?: boolean;
}, ExtArgs["result"]["brands"]>;
export type brandsSelectScalar = {
    brand_id?: boolean;
    brand_name?: boolean;
};
export type brandsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"brand_id" | "brand_name", ExtArgs["result"]["brands"]>;
export type brandsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.brands$productsArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type brandsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type brandsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $brandsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "brands";
    objects: {
        products: Prisma.$productsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        brand_id: bigint;
        brand_name: string;
    }, ExtArgs["result"]["brands"]>;
    composites: {};
};
export type brandsGetPayload<S extends boolean | null | undefined | brandsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$brandsPayload, S>;
export type brandsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<brandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandsCountAggregateInputType | true;
};
export interface brandsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['brands'];
        meta: {
            name: 'brands';
        };
    };
    findUnique<T extends brandsFindUniqueArgs>(args: Prisma.SelectSubset<T, brandsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends brandsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, brandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends brandsFindFirstArgs>(args?: Prisma.SelectSubset<T, brandsFindFirstArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends brandsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, brandsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends brandsFindManyArgs>(args?: Prisma.SelectSubset<T, brandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends brandsCreateArgs>(args: Prisma.SelectSubset<T, brandsCreateArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends brandsCreateManyArgs>(args?: Prisma.SelectSubset<T, brandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends brandsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, brandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends brandsDeleteArgs>(args: Prisma.SelectSubset<T, brandsDeleteArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends brandsUpdateArgs>(args: Prisma.SelectSubset<T, brandsUpdateArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends brandsDeleteManyArgs>(args?: Prisma.SelectSubset<T, brandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends brandsUpdateManyArgs>(args: Prisma.SelectSubset<T, brandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends brandsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, brandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends brandsUpsertArgs>(args: Prisma.SelectSubset<T, brandsUpsertArgs<ExtArgs>>): Prisma.Prisma__brandsClient<runtime.Types.Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends brandsCountArgs>(args?: Prisma.Subset<T, brandsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandsCountAggregateOutputType> : number>;
    aggregate<T extends BrandsAggregateArgs>(args: Prisma.Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>;
    groupBy<T extends brandsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: brandsGroupByArgs['orderBy'];
    } : {
        orderBy?: brandsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, brandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: brandsFieldRefs;
}
export interface Prisma__brandsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.brands$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.brands$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface brandsFieldRefs {
    readonly brand_id: Prisma.FieldRef<"brands", 'BigInt'>;
    readonly brand_name: Prisma.FieldRef<"brands", 'String'>;
}
export type brandsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where: Prisma.brandsWhereUniqueInput;
};
export type brandsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where: Prisma.brandsWhereUniqueInput;
};
export type brandsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where?: Prisma.brandsWhereInput;
    orderBy?: Prisma.brandsOrderByWithRelationInput | Prisma.brandsOrderByWithRelationInput[];
    cursor?: Prisma.brandsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandsScalarFieldEnum | Prisma.BrandsScalarFieldEnum[];
};
export type brandsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where?: Prisma.brandsWhereInput;
    orderBy?: Prisma.brandsOrderByWithRelationInput | Prisma.brandsOrderByWithRelationInput[];
    cursor?: Prisma.brandsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandsScalarFieldEnum | Prisma.BrandsScalarFieldEnum[];
};
export type brandsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where?: Prisma.brandsWhereInput;
    orderBy?: Prisma.brandsOrderByWithRelationInput | Prisma.brandsOrderByWithRelationInput[];
    cursor?: Prisma.brandsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandsScalarFieldEnum | Prisma.BrandsScalarFieldEnum[];
};
export type brandsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.brandsCreateInput, Prisma.brandsUncheckedCreateInput>;
};
export type brandsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.brandsCreateManyInput | Prisma.brandsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type brandsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    data: Prisma.brandsCreateManyInput | Prisma.brandsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type brandsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.brandsUpdateInput, Prisma.brandsUncheckedUpdateInput>;
    where: Prisma.brandsWhereUniqueInput;
};
export type brandsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.brandsUpdateManyMutationInput, Prisma.brandsUncheckedUpdateManyInput>;
    where?: Prisma.brandsWhereInput;
    limit?: number;
};
export type brandsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.brandsUpdateManyMutationInput, Prisma.brandsUncheckedUpdateManyInput>;
    where?: Prisma.brandsWhereInput;
    limit?: number;
};
export type brandsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where: Prisma.brandsWhereUniqueInput;
    create: Prisma.XOR<Prisma.brandsCreateInput, Prisma.brandsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.brandsUpdateInput, Prisma.brandsUncheckedUpdateInput>;
};
export type brandsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
    where: Prisma.brandsWhereUniqueInput;
};
export type brandsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.brandsWhereInput;
    limit?: number;
};
export type brands$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productsSelect<ExtArgs> | null;
    omit?: Prisma.productsOmit<ExtArgs> | null;
    include?: Prisma.productsInclude<ExtArgs> | null;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput | Prisma.productsOrderByWithRelationInput[];
    cursor?: Prisma.productsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductsScalarFieldEnum | Prisma.ProductsScalarFieldEnum[];
};
export type brandsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.brandsSelect<ExtArgs> | null;
    omit?: Prisma.brandsOmit<ExtArgs> | null;
    include?: Prisma.brandsInclude<ExtArgs> | null;
};
