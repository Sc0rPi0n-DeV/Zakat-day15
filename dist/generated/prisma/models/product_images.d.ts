import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_imagesModel = runtime.Types.Result.DefaultSelection<Prisma.$product_imagesPayload>;
export type AggregateProduct_images = {
    _count: Product_imagesCountAggregateOutputType | null;
    _avg: Product_imagesAvgAggregateOutputType | null;
    _sum: Product_imagesSumAggregateOutputType | null;
    _min: Product_imagesMinAggregateOutputType | null;
    _max: Product_imagesMaxAggregateOutputType | null;
};
export type Product_imagesAvgAggregateOutputType = {
    image_id: number | null;
    product_id: number | null;
    sort_order: number | null;
};
export type Product_imagesSumAggregateOutputType = {
    image_id: bigint | null;
    product_id: bigint | null;
    sort_order: number | null;
};
export type Product_imagesMinAggregateOutputType = {
    image_id: bigint | null;
    product_id: bigint | null;
    image_url: string | null;
    sort_order: number | null;
};
export type Product_imagesMaxAggregateOutputType = {
    image_id: bigint | null;
    product_id: bigint | null;
    image_url: string | null;
    sort_order: number | null;
};
export type Product_imagesCountAggregateOutputType = {
    image_id: number;
    product_id: number;
    image_url: number;
    sort_order: number;
    _all: number;
};
export type Product_imagesAvgAggregateInputType = {
    image_id?: true;
    product_id?: true;
    sort_order?: true;
};
export type Product_imagesSumAggregateInputType = {
    image_id?: true;
    product_id?: true;
    sort_order?: true;
};
export type Product_imagesMinAggregateInputType = {
    image_id?: true;
    product_id?: true;
    image_url?: true;
    sort_order?: true;
};
export type Product_imagesMaxAggregateInputType = {
    image_id?: true;
    product_id?: true;
    image_url?: true;
    sort_order?: true;
};
export type Product_imagesCountAggregateInputType = {
    image_id?: true;
    product_id?: true;
    image_url?: true;
    sort_order?: true;
    _all?: true;
};
export type Product_imagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_imagesWhereInput;
    orderBy?: Prisma.product_imagesOrderByWithRelationInput | Prisma.product_imagesOrderByWithRelationInput[];
    cursor?: Prisma.product_imagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_imagesCountAggregateInputType;
    _avg?: Product_imagesAvgAggregateInputType;
    _sum?: Product_imagesSumAggregateInputType;
    _min?: Product_imagesMinAggregateInputType;
    _max?: Product_imagesMaxAggregateInputType;
};
export type GetProduct_imagesAggregateType<T extends Product_imagesAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_images]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_images[P]> : Prisma.GetScalarType<T[P], AggregateProduct_images[P]>;
};
export type product_imagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_imagesWhereInput;
    orderBy?: Prisma.product_imagesOrderByWithAggregationInput | Prisma.product_imagesOrderByWithAggregationInput[];
    by: Prisma.Product_imagesScalarFieldEnum[] | Prisma.Product_imagesScalarFieldEnum;
    having?: Prisma.product_imagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_imagesCountAggregateInputType | true;
    _avg?: Product_imagesAvgAggregateInputType;
    _sum?: Product_imagesSumAggregateInputType;
    _min?: Product_imagesMinAggregateInputType;
    _max?: Product_imagesMaxAggregateInputType;
};
export type Product_imagesGroupByOutputType = {
    image_id: bigint;
    product_id: bigint;
    image_url: string;
    sort_order: number;
    _count: Product_imagesCountAggregateOutputType | null;
    _avg: Product_imagesAvgAggregateOutputType | null;
    _sum: Product_imagesSumAggregateOutputType | null;
    _min: Product_imagesMinAggregateOutputType | null;
    _max: Product_imagesMaxAggregateOutputType | null;
};
export type GetProduct_imagesGroupByPayload<T extends product_imagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_imagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_imagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_imagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_imagesGroupByOutputType[P]>;
}>>;
export type product_imagesWhereInput = {
    AND?: Prisma.product_imagesWhereInput | Prisma.product_imagesWhereInput[];
    OR?: Prisma.product_imagesWhereInput[];
    NOT?: Prisma.product_imagesWhereInput | Prisma.product_imagesWhereInput[];
    image_id?: Prisma.BigIntFilter<"product_images"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_images"> | bigint | number;
    image_url?: Prisma.StringFilter<"product_images"> | string;
    sort_order?: Prisma.IntFilter<"product_images"> | number;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
};
export type product_imagesOrderByWithRelationInput = {
    image_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    products?: Prisma.productsOrderByWithRelationInput;
};
export type product_imagesWhereUniqueInput = Prisma.AtLeast<{
    image_id?: bigint | number;
    AND?: Prisma.product_imagesWhereInput | Prisma.product_imagesWhereInput[];
    OR?: Prisma.product_imagesWhereInput[];
    NOT?: Prisma.product_imagesWhereInput | Prisma.product_imagesWhereInput[];
    product_id?: Prisma.BigIntFilter<"product_images"> | bigint | number;
    image_url?: Prisma.StringFilter<"product_images"> | string;
    sort_order?: Prisma.IntFilter<"product_images"> | number;
    products?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.productsWhereInput>;
}, "image_id">;
export type product_imagesOrderByWithAggregationInput = {
    image_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    _count?: Prisma.product_imagesCountOrderByAggregateInput;
    _avg?: Prisma.product_imagesAvgOrderByAggregateInput;
    _max?: Prisma.product_imagesMaxOrderByAggregateInput;
    _min?: Prisma.product_imagesMinOrderByAggregateInput;
    _sum?: Prisma.product_imagesSumOrderByAggregateInput;
};
export type product_imagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_imagesScalarWhereWithAggregatesInput | Prisma.product_imagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_imagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_imagesScalarWhereWithAggregatesInput | Prisma.product_imagesScalarWhereWithAggregatesInput[];
    image_id?: Prisma.BigIntWithAggregatesFilter<"product_images"> | bigint | number;
    product_id?: Prisma.BigIntWithAggregatesFilter<"product_images"> | bigint | number;
    image_url?: Prisma.StringWithAggregatesFilter<"product_images"> | string;
    sort_order?: Prisma.IntWithAggregatesFilter<"product_images"> | number;
};
export type product_imagesCreateInput = {
    image_id?: bigint | number;
    image_url: string;
    sort_order?: number;
    products: Prisma.productsCreateNestedOneWithoutProduct_imagesInput;
};
export type product_imagesUncheckedCreateInput = {
    image_id?: bigint | number;
    product_id: bigint | number;
    image_url: string;
    sort_order?: number;
};
export type product_imagesUpdateInput = {
    image_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    products?: Prisma.productsUpdateOneRequiredWithoutProduct_imagesNestedInput;
};
export type product_imagesUncheckedUpdateInput = {
    image_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type product_imagesCreateManyInput = {
    image_id?: bigint | number;
    product_id: bigint | number;
    image_url: string;
    sort_order?: number;
};
export type product_imagesUpdateManyMutationInput = {
    image_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type product_imagesUncheckedUpdateManyInput = {
    image_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    product_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type product_imagesCountOrderByAggregateInput = {
    image_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type product_imagesAvgOrderByAggregateInput = {
    image_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type product_imagesMaxOrderByAggregateInput = {
    image_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type product_imagesMinOrderByAggregateInput = {
    image_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type product_imagesSumOrderByAggregateInput = {
    image_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type Product_imagesListRelationFilter = {
    every?: Prisma.product_imagesWhereInput;
    some?: Prisma.product_imagesWhereInput;
    none?: Prisma.product_imagesWhereInput;
};
export type product_imagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type product_imagesCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_imagesCreateWithoutProductsInput, Prisma.product_imagesUncheckedCreateWithoutProductsInput> | Prisma.product_imagesCreateWithoutProductsInput[] | Prisma.product_imagesUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_imagesCreateOrConnectWithoutProductsInput | Prisma.product_imagesCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_imagesCreateManyProductsInputEnvelope;
    connect?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
};
export type product_imagesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.product_imagesCreateWithoutProductsInput, Prisma.product_imagesUncheckedCreateWithoutProductsInput> | Prisma.product_imagesCreateWithoutProductsInput[] | Prisma.product_imagesUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_imagesCreateOrConnectWithoutProductsInput | Prisma.product_imagesCreateOrConnectWithoutProductsInput[];
    createMany?: Prisma.product_imagesCreateManyProductsInputEnvelope;
    connect?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
};
export type product_imagesUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_imagesCreateWithoutProductsInput, Prisma.product_imagesUncheckedCreateWithoutProductsInput> | Prisma.product_imagesCreateWithoutProductsInput[] | Prisma.product_imagesUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_imagesCreateOrConnectWithoutProductsInput | Prisma.product_imagesCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_imagesUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_imagesUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_imagesCreateManyProductsInputEnvelope;
    set?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    disconnect?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    delete?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    connect?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    update?: Prisma.product_imagesUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_imagesUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_imagesUpdateManyWithWhereWithoutProductsInput | Prisma.product_imagesUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_imagesScalarWhereInput | Prisma.product_imagesScalarWhereInput[];
};
export type product_imagesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.product_imagesCreateWithoutProductsInput, Prisma.product_imagesUncheckedCreateWithoutProductsInput> | Prisma.product_imagesCreateWithoutProductsInput[] | Prisma.product_imagesUncheckedCreateWithoutProductsInput[];
    connectOrCreate?: Prisma.product_imagesCreateOrConnectWithoutProductsInput | Prisma.product_imagesCreateOrConnectWithoutProductsInput[];
    upsert?: Prisma.product_imagesUpsertWithWhereUniqueWithoutProductsInput | Prisma.product_imagesUpsertWithWhereUniqueWithoutProductsInput[];
    createMany?: Prisma.product_imagesCreateManyProductsInputEnvelope;
    set?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    disconnect?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    delete?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    connect?: Prisma.product_imagesWhereUniqueInput | Prisma.product_imagesWhereUniqueInput[];
    update?: Prisma.product_imagesUpdateWithWhereUniqueWithoutProductsInput | Prisma.product_imagesUpdateWithWhereUniqueWithoutProductsInput[];
    updateMany?: Prisma.product_imagesUpdateManyWithWhereWithoutProductsInput | Prisma.product_imagesUpdateManyWithWhereWithoutProductsInput[];
    deleteMany?: Prisma.product_imagesScalarWhereInput | Prisma.product_imagesScalarWhereInput[];
};
export type product_imagesCreateWithoutProductsInput = {
    image_id?: bigint | number;
    image_url: string;
    sort_order?: number;
};
export type product_imagesUncheckedCreateWithoutProductsInput = {
    image_id?: bigint | number;
    image_url: string;
    sort_order?: number;
};
export type product_imagesCreateOrConnectWithoutProductsInput = {
    where: Prisma.product_imagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_imagesCreateWithoutProductsInput, Prisma.product_imagesUncheckedCreateWithoutProductsInput>;
};
export type product_imagesCreateManyProductsInputEnvelope = {
    data: Prisma.product_imagesCreateManyProductsInput | Prisma.product_imagesCreateManyProductsInput[];
    skipDuplicates?: boolean;
};
export type product_imagesUpsertWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_imagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_imagesUpdateWithoutProductsInput, Prisma.product_imagesUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.product_imagesCreateWithoutProductsInput, Prisma.product_imagesUncheckedCreateWithoutProductsInput>;
};
export type product_imagesUpdateWithWhereUniqueWithoutProductsInput = {
    where: Prisma.product_imagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_imagesUpdateWithoutProductsInput, Prisma.product_imagesUncheckedUpdateWithoutProductsInput>;
};
export type product_imagesUpdateManyWithWhereWithoutProductsInput = {
    where: Prisma.product_imagesScalarWhereInput;
    data: Prisma.XOR<Prisma.product_imagesUpdateManyMutationInput, Prisma.product_imagesUncheckedUpdateManyWithoutProductsInput>;
};
export type product_imagesScalarWhereInput = {
    AND?: Prisma.product_imagesScalarWhereInput | Prisma.product_imagesScalarWhereInput[];
    OR?: Prisma.product_imagesScalarWhereInput[];
    NOT?: Prisma.product_imagesScalarWhereInput | Prisma.product_imagesScalarWhereInput[];
    image_id?: Prisma.BigIntFilter<"product_images"> | bigint | number;
    product_id?: Prisma.BigIntFilter<"product_images"> | bigint | number;
    image_url?: Prisma.StringFilter<"product_images"> | string;
    sort_order?: Prisma.IntFilter<"product_images"> | number;
};
export type product_imagesCreateManyProductsInput = {
    image_id?: bigint | number;
    image_url: string;
    sort_order?: number;
};
export type product_imagesUpdateWithoutProductsInput = {
    image_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type product_imagesUncheckedUpdateWithoutProductsInput = {
    image_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type product_imagesUncheckedUpdateManyWithoutProductsInput = {
    image_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type product_imagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    image_id?: boolean;
    product_id?: boolean;
    image_url?: boolean;
    sort_order?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_images"]>;
export type product_imagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    image_id?: boolean;
    product_id?: boolean;
    image_url?: boolean;
    sort_order?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_images"]>;
export type product_imagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    image_id?: boolean;
    product_id?: boolean;
    image_url?: boolean;
    sort_order?: boolean;
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_images"]>;
export type product_imagesSelectScalar = {
    image_id?: boolean;
    product_id?: boolean;
    image_url?: boolean;
    sort_order?: boolean;
};
export type product_imagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"image_id" | "product_id" | "image_url" | "sort_order", ExtArgs["result"]["product_images"]>;
export type product_imagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type product_imagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type product_imagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.productsDefaultArgs<ExtArgs>;
};
export type $product_imagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_images";
    objects: {
        products: Prisma.$productsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        image_id: bigint;
        product_id: bigint;
        image_url: string;
        sort_order: number;
    }, ExtArgs["result"]["product_images"]>;
    composites: {};
};
export type product_imagesGetPayload<S extends boolean | null | undefined | product_imagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_imagesPayload, S>;
export type product_imagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_imagesCountAggregateInputType | true;
};
export interface product_imagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_images'];
        meta: {
            name: 'product_images';
        };
    };
    findUnique<T extends product_imagesFindUniqueArgs>(args: Prisma.SelectSubset<T, product_imagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_imagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_imagesFindFirstArgs>(args?: Prisma.SelectSubset<T, product_imagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_imagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_imagesFindManyArgs>(args?: Prisma.SelectSubset<T, product_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_imagesCreateArgs>(args: Prisma.SelectSubset<T, product_imagesCreateArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_imagesCreateManyArgs>(args?: Prisma.SelectSubset<T, product_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends product_imagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, product_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends product_imagesDeleteArgs>(args: Prisma.SelectSubset<T, product_imagesDeleteArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_imagesUpdateArgs>(args: Prisma.SelectSubset<T, product_imagesUpdateArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_imagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_imagesUpdateManyArgs>(args: Prisma.SelectSubset<T, product_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends product_imagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, product_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends product_imagesUpsertArgs>(args: Prisma.SelectSubset<T, product_imagesUpsertArgs<ExtArgs>>): Prisma.Prisma__product_imagesClient<runtime.Types.Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_imagesCountArgs>(args?: Prisma.Subset<T, product_imagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_imagesCountAggregateOutputType> : number>;
    aggregate<T extends Product_imagesAggregateArgs>(args: Prisma.Subset<T, Product_imagesAggregateArgs>): Prisma.PrismaPromise<GetProduct_imagesAggregateType<T>>;
    groupBy<T extends product_imagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_imagesGroupByArgs['orderBy'];
    } : {
        orderBy?: product_imagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_imagesFieldRefs;
}
export interface Prisma__product_imagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.productsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productsDefaultArgs<ExtArgs>>): Prisma.Prisma__productsClient<runtime.Types.Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_imagesFieldRefs {
    readonly image_id: Prisma.FieldRef<"product_images", 'BigInt'>;
    readonly product_id: Prisma.FieldRef<"product_images", 'BigInt'>;
    readonly image_url: Prisma.FieldRef<"product_images", 'String'>;
    readonly sort_order: Prisma.FieldRef<"product_images", 'Int'>;
}
export type product_imagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where: Prisma.product_imagesWhereUniqueInput;
};
export type product_imagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where: Prisma.product_imagesWhereUniqueInput;
};
export type product_imagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where?: Prisma.product_imagesWhereInput;
    orderBy?: Prisma.product_imagesOrderByWithRelationInput | Prisma.product_imagesOrderByWithRelationInput[];
    cursor?: Prisma.product_imagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_imagesScalarFieldEnum | Prisma.Product_imagesScalarFieldEnum[];
};
export type product_imagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where?: Prisma.product_imagesWhereInput;
    orderBy?: Prisma.product_imagesOrderByWithRelationInput | Prisma.product_imagesOrderByWithRelationInput[];
    cursor?: Prisma.product_imagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_imagesScalarFieldEnum | Prisma.Product_imagesScalarFieldEnum[];
};
export type product_imagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where?: Prisma.product_imagesWhereInput;
    orderBy?: Prisma.product_imagesOrderByWithRelationInput | Prisma.product_imagesOrderByWithRelationInput[];
    cursor?: Prisma.product_imagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_imagesScalarFieldEnum | Prisma.Product_imagesScalarFieldEnum[];
};
export type product_imagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_imagesCreateInput, Prisma.product_imagesUncheckedCreateInput>;
};
export type product_imagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_imagesCreateManyInput | Prisma.product_imagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_imagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    data: Prisma.product_imagesCreateManyInput | Prisma.product_imagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.product_imagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type product_imagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_imagesUpdateInput, Prisma.product_imagesUncheckedUpdateInput>;
    where: Prisma.product_imagesWhereUniqueInput;
};
export type product_imagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_imagesUpdateManyMutationInput, Prisma.product_imagesUncheckedUpdateManyInput>;
    where?: Prisma.product_imagesWhereInput;
    limit?: number;
};
export type product_imagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_imagesUpdateManyMutationInput, Prisma.product_imagesUncheckedUpdateManyInput>;
    where?: Prisma.product_imagesWhereInput;
    limit?: number;
    include?: Prisma.product_imagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type product_imagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where: Prisma.product_imagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_imagesCreateInput, Prisma.product_imagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_imagesUpdateInput, Prisma.product_imagesUncheckedUpdateInput>;
};
export type product_imagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
    where: Prisma.product_imagesWhereUniqueInput;
};
export type product_imagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_imagesWhereInput;
    limit?: number;
};
export type product_imagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_imagesSelect<ExtArgs> | null;
    omit?: Prisma.product_imagesOmit<ExtArgs> | null;
    include?: Prisma.product_imagesInclude<ExtArgs> | null;
};
