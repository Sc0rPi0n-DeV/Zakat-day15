import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type campaignsModel = runtime.Types.Result.DefaultSelection<Prisma.$campaignsPayload>;
export type AggregateCampaigns = {
    _count: CampaignsCountAggregateOutputType | null;
    _avg: CampaignsAvgAggregateOutputType | null;
    _sum: CampaignsSumAggregateOutputType | null;
    _min: CampaignsMinAggregateOutputType | null;
    _max: CampaignsMaxAggregateOutputType | null;
};
export type CampaignsAvgAggregateOutputType = {
    campaign_id: number | null;
    budget: runtime.Decimal | null;
};
export type CampaignsSumAggregateOutputType = {
    campaign_id: bigint | null;
    budget: runtime.Decimal | null;
};
export type CampaignsMinAggregateOutputType = {
    campaign_id: bigint | null;
    campaign_name: string | null;
    start_date: Date | null;
    end_date: Date | null;
    budget: runtime.Decimal | null;
};
export type CampaignsMaxAggregateOutputType = {
    campaign_id: bigint | null;
    campaign_name: string | null;
    start_date: Date | null;
    end_date: Date | null;
    budget: runtime.Decimal | null;
};
export type CampaignsCountAggregateOutputType = {
    campaign_id: number;
    campaign_name: number;
    start_date: number;
    end_date: number;
    budget: number;
    _all: number;
};
export type CampaignsAvgAggregateInputType = {
    campaign_id?: true;
    budget?: true;
};
export type CampaignsSumAggregateInputType = {
    campaign_id?: true;
    budget?: true;
};
export type CampaignsMinAggregateInputType = {
    campaign_id?: true;
    campaign_name?: true;
    start_date?: true;
    end_date?: true;
    budget?: true;
};
export type CampaignsMaxAggregateInputType = {
    campaign_id?: true;
    campaign_name?: true;
    start_date?: true;
    end_date?: true;
    budget?: true;
};
export type CampaignsCountAggregateInputType = {
    campaign_id?: true;
    campaign_name?: true;
    start_date?: true;
    end_date?: true;
    budget?: true;
    _all?: true;
};
export type CampaignsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.campaignsWhereInput;
    orderBy?: Prisma.campaignsOrderByWithRelationInput | Prisma.campaignsOrderByWithRelationInput[];
    cursor?: Prisma.campaignsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CampaignsCountAggregateInputType;
    _avg?: CampaignsAvgAggregateInputType;
    _sum?: CampaignsSumAggregateInputType;
    _min?: CampaignsMinAggregateInputType;
    _max?: CampaignsMaxAggregateInputType;
};
export type GetCampaignsAggregateType<T extends CampaignsAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaigns]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaigns[P]> : Prisma.GetScalarType<T[P], AggregateCampaigns[P]>;
};
export type campaignsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.campaignsWhereInput;
    orderBy?: Prisma.campaignsOrderByWithAggregationInput | Prisma.campaignsOrderByWithAggregationInput[];
    by: Prisma.CampaignsScalarFieldEnum[] | Prisma.CampaignsScalarFieldEnum;
    having?: Prisma.campaignsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignsCountAggregateInputType | true;
    _avg?: CampaignsAvgAggregateInputType;
    _sum?: CampaignsSumAggregateInputType;
    _min?: CampaignsMinAggregateInputType;
    _max?: CampaignsMaxAggregateInputType;
};
export type CampaignsGroupByOutputType = {
    campaign_id: bigint;
    campaign_name: string;
    start_date: Date;
    end_date: Date;
    budget: runtime.Decimal | null;
    _count: CampaignsCountAggregateOutputType | null;
    _avg: CampaignsAvgAggregateOutputType | null;
    _sum: CampaignsSumAggregateOutputType | null;
    _min: CampaignsMinAggregateOutputType | null;
    _max: CampaignsMaxAggregateOutputType | null;
};
export type GetCampaignsGroupByPayload<T extends campaignsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignsGroupByOutputType[P]>;
}>>;
export type campaignsWhereInput = {
    AND?: Prisma.campaignsWhereInput | Prisma.campaignsWhereInput[];
    OR?: Prisma.campaignsWhereInput[];
    NOT?: Prisma.campaignsWhereInput | Prisma.campaignsWhereInput[];
    campaign_id?: Prisma.BigIntFilter<"campaigns"> | bigint | number;
    campaign_name?: Prisma.StringFilter<"campaigns"> | string;
    start_date?: Prisma.DateTimeFilter<"campaigns"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"campaigns"> | Date | string;
    budget?: Prisma.DecimalNullableFilter<"campaigns"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsOrderByWithRelationInput = {
    campaign_id?: Prisma.SortOrder;
    campaign_name?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    budget?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type campaignsWhereUniqueInput = Prisma.AtLeast<{
    campaign_id?: bigint | number;
    AND?: Prisma.campaignsWhereInput | Prisma.campaignsWhereInput[];
    OR?: Prisma.campaignsWhereInput[];
    NOT?: Prisma.campaignsWhereInput | Prisma.campaignsWhereInput[];
    campaign_name?: Prisma.StringFilter<"campaigns"> | string;
    start_date?: Prisma.DateTimeFilter<"campaigns"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"campaigns"> | Date | string;
    budget?: Prisma.DecimalNullableFilter<"campaigns"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "campaign_id">;
export type campaignsOrderByWithAggregationInput = {
    campaign_id?: Prisma.SortOrder;
    campaign_name?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    budget?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.campaignsCountOrderByAggregateInput;
    _avg?: Prisma.campaignsAvgOrderByAggregateInput;
    _max?: Prisma.campaignsMaxOrderByAggregateInput;
    _min?: Prisma.campaignsMinOrderByAggregateInput;
    _sum?: Prisma.campaignsSumOrderByAggregateInput;
};
export type campaignsScalarWhereWithAggregatesInput = {
    AND?: Prisma.campaignsScalarWhereWithAggregatesInput | Prisma.campaignsScalarWhereWithAggregatesInput[];
    OR?: Prisma.campaignsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.campaignsScalarWhereWithAggregatesInput | Prisma.campaignsScalarWhereWithAggregatesInput[];
    campaign_id?: Prisma.BigIntWithAggregatesFilter<"campaigns"> | bigint | number;
    campaign_name?: Prisma.StringWithAggregatesFilter<"campaigns"> | string;
    start_date?: Prisma.DateTimeWithAggregatesFilter<"campaigns"> | Date | string;
    end_date?: Prisma.DateTimeWithAggregatesFilter<"campaigns"> | Date | string;
    budget?: Prisma.DecimalNullableWithAggregatesFilter<"campaigns"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsCreateInput = {
    campaign_id?: bigint | number;
    campaign_name: string;
    start_date: Date | string;
    end_date: Date | string;
    budget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsUncheckedCreateInput = {
    campaign_id?: bigint | number;
    campaign_name: string;
    start_date: Date | string;
    end_date: Date | string;
    budget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsUpdateInput = {
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsUncheckedUpdateInput = {
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsCreateManyInput = {
    campaign_id?: bigint | number;
    campaign_name: string;
    start_date: Date | string;
    end_date: Date | string;
    budget?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsUpdateManyMutationInput = {
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsUncheckedUpdateManyInput = {
    campaign_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    campaign_name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    budget?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type campaignsCountOrderByAggregateInput = {
    campaign_id?: Prisma.SortOrder;
    campaign_name?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
};
export type campaignsAvgOrderByAggregateInput = {
    campaign_id?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
};
export type campaignsMaxOrderByAggregateInput = {
    campaign_id?: Prisma.SortOrder;
    campaign_name?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
};
export type campaignsMinOrderByAggregateInput = {
    campaign_id?: Prisma.SortOrder;
    campaign_name?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
};
export type campaignsSumOrderByAggregateInput = {
    campaign_id?: Prisma.SortOrder;
    budget?: Prisma.SortOrder;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type campaignsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    campaign_id?: boolean;
    campaign_name?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    budget?: boolean;
}, ExtArgs["result"]["campaigns"]>;
export type campaignsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    campaign_id?: boolean;
    campaign_name?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    budget?: boolean;
}, ExtArgs["result"]["campaigns"]>;
export type campaignsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    campaign_id?: boolean;
    campaign_name?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    budget?: boolean;
}, ExtArgs["result"]["campaigns"]>;
export type campaignsSelectScalar = {
    campaign_id?: boolean;
    campaign_name?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    budget?: boolean;
};
export type campaignsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"campaign_id" | "campaign_name" | "start_date" | "end_date" | "budget", ExtArgs["result"]["campaigns"]>;
export type $campaignsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "campaigns";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        campaign_id: bigint;
        campaign_name: string;
        start_date: Date;
        end_date: Date;
        budget: runtime.Decimal | null;
    }, ExtArgs["result"]["campaigns"]>;
    composites: {};
};
export type campaignsGetPayload<S extends boolean | null | undefined | campaignsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$campaignsPayload, S>;
export type campaignsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<campaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignsCountAggregateInputType | true;
};
export interface campaignsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['campaigns'];
        meta: {
            name: 'campaigns';
        };
    };
    findUnique<T extends campaignsFindUniqueArgs>(args: Prisma.SelectSubset<T, campaignsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends campaignsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, campaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends campaignsFindFirstArgs>(args?: Prisma.SelectSubset<T, campaignsFindFirstArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends campaignsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, campaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends campaignsFindManyArgs>(args?: Prisma.SelectSubset<T, campaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends campaignsCreateArgs>(args: Prisma.SelectSubset<T, campaignsCreateArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends campaignsCreateManyArgs>(args?: Prisma.SelectSubset<T, campaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends campaignsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, campaignsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends campaignsDeleteArgs>(args: Prisma.SelectSubset<T, campaignsDeleteArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends campaignsUpdateArgs>(args: Prisma.SelectSubset<T, campaignsUpdateArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends campaignsDeleteManyArgs>(args?: Prisma.SelectSubset<T, campaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends campaignsUpdateManyArgs>(args: Prisma.SelectSubset<T, campaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends campaignsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, campaignsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends campaignsUpsertArgs>(args: Prisma.SelectSubset<T, campaignsUpsertArgs<ExtArgs>>): Prisma.Prisma__campaignsClient<runtime.Types.Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends campaignsCountArgs>(args?: Prisma.Subset<T, campaignsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignsCountAggregateOutputType> : number>;
    aggregate<T extends CampaignsAggregateArgs>(args: Prisma.Subset<T, CampaignsAggregateArgs>): Prisma.PrismaPromise<GetCampaignsAggregateType<T>>;
    groupBy<T extends campaignsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: campaignsGroupByArgs['orderBy'];
    } : {
        orderBy?: campaignsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, campaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: campaignsFieldRefs;
}
export interface Prisma__campaignsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface campaignsFieldRefs {
    readonly campaign_id: Prisma.FieldRef<"campaigns", 'BigInt'>;
    readonly campaign_name: Prisma.FieldRef<"campaigns", 'String'>;
    readonly start_date: Prisma.FieldRef<"campaigns", 'DateTime'>;
    readonly end_date: Prisma.FieldRef<"campaigns", 'DateTime'>;
    readonly budget: Prisma.FieldRef<"campaigns", 'Decimal'>;
}
export type campaignsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    where: Prisma.campaignsWhereUniqueInput;
};
export type campaignsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    where: Prisma.campaignsWhereUniqueInput;
};
export type campaignsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    where?: Prisma.campaignsWhereInput;
    orderBy?: Prisma.campaignsOrderByWithRelationInput | Prisma.campaignsOrderByWithRelationInput[];
    cursor?: Prisma.campaignsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignsScalarFieldEnum | Prisma.CampaignsScalarFieldEnum[];
};
export type campaignsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    where?: Prisma.campaignsWhereInput;
    orderBy?: Prisma.campaignsOrderByWithRelationInput | Prisma.campaignsOrderByWithRelationInput[];
    cursor?: Prisma.campaignsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignsScalarFieldEnum | Prisma.CampaignsScalarFieldEnum[];
};
export type campaignsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    where?: Prisma.campaignsWhereInput;
    orderBy?: Prisma.campaignsOrderByWithRelationInput | Prisma.campaignsOrderByWithRelationInput[];
    cursor?: Prisma.campaignsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignsScalarFieldEnum | Prisma.CampaignsScalarFieldEnum[];
};
export type campaignsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.campaignsCreateInput, Prisma.campaignsUncheckedCreateInput>;
};
export type campaignsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.campaignsCreateManyInput | Prisma.campaignsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type campaignsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    data: Prisma.campaignsCreateManyInput | Prisma.campaignsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type campaignsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.campaignsUpdateInput, Prisma.campaignsUncheckedUpdateInput>;
    where: Prisma.campaignsWhereUniqueInput;
};
export type campaignsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.campaignsUpdateManyMutationInput, Prisma.campaignsUncheckedUpdateManyInput>;
    where?: Prisma.campaignsWhereInput;
    limit?: number;
};
export type campaignsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.campaignsUpdateManyMutationInput, Prisma.campaignsUncheckedUpdateManyInput>;
    where?: Prisma.campaignsWhereInput;
    limit?: number;
};
export type campaignsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    where: Prisma.campaignsWhereUniqueInput;
    create: Prisma.XOR<Prisma.campaignsCreateInput, Prisma.campaignsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.campaignsUpdateInput, Prisma.campaignsUncheckedUpdateInput>;
};
export type campaignsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
    where: Prisma.campaignsWhereUniqueInput;
};
export type campaignsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.campaignsWhereInput;
    limit?: number;
};
export type campaignsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaignsSelect<ExtArgs> | null;
    omit?: Prisma.campaignsOmit<ExtArgs> | null;
};
