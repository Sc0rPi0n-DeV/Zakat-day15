import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type couponsModel = runtime.Types.Result.DefaultSelection<Prisma.$couponsPayload>;
export type AggregateCoupons = {
    _count: CouponsCountAggregateOutputType | null;
    _avg: CouponsAvgAggregateOutputType | null;
    _sum: CouponsSumAggregateOutputType | null;
    _min: CouponsMinAggregateOutputType | null;
    _max: CouponsMaxAggregateOutputType | null;
};
export type CouponsAvgAggregateOutputType = {
    coupon_id: number | null;
    percent_off: runtime.Decimal | null;
};
export type CouponsSumAggregateOutputType = {
    coupon_id: bigint | null;
    percent_off: runtime.Decimal | null;
};
export type CouponsMinAggregateOutputType = {
    coupon_id: bigint | null;
    coupon_code: string | null;
    percent_off: runtime.Decimal | null;
    starts_at: Date | null;
    expires_at: Date | null;
};
export type CouponsMaxAggregateOutputType = {
    coupon_id: bigint | null;
    coupon_code: string | null;
    percent_off: runtime.Decimal | null;
    starts_at: Date | null;
    expires_at: Date | null;
};
export type CouponsCountAggregateOutputType = {
    coupon_id: number;
    coupon_code: number;
    percent_off: number;
    starts_at: number;
    expires_at: number;
    _all: number;
};
export type CouponsAvgAggregateInputType = {
    coupon_id?: true;
    percent_off?: true;
};
export type CouponsSumAggregateInputType = {
    coupon_id?: true;
    percent_off?: true;
};
export type CouponsMinAggregateInputType = {
    coupon_id?: true;
    coupon_code?: true;
    percent_off?: true;
    starts_at?: true;
    expires_at?: true;
};
export type CouponsMaxAggregateInputType = {
    coupon_id?: true;
    coupon_code?: true;
    percent_off?: true;
    starts_at?: true;
    expires_at?: true;
};
export type CouponsCountAggregateInputType = {
    coupon_id?: true;
    coupon_code?: true;
    percent_off?: true;
    starts_at?: true;
    expires_at?: true;
    _all?: true;
};
export type CouponsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CouponsCountAggregateInputType;
    _avg?: CouponsAvgAggregateInputType;
    _sum?: CouponsSumAggregateInputType;
    _min?: CouponsMinAggregateInputType;
    _max?: CouponsMaxAggregateInputType;
};
export type GetCouponsAggregateType<T extends CouponsAggregateArgs> = {
    [P in keyof T & keyof AggregateCoupons]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCoupons[P]> : Prisma.GetScalarType<T[P], AggregateCoupons[P]>;
};
export type couponsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithAggregationInput | Prisma.couponsOrderByWithAggregationInput[];
    by: Prisma.CouponsScalarFieldEnum[] | Prisma.CouponsScalarFieldEnum;
    having?: Prisma.couponsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CouponsCountAggregateInputType | true;
    _avg?: CouponsAvgAggregateInputType;
    _sum?: CouponsSumAggregateInputType;
    _min?: CouponsMinAggregateInputType;
    _max?: CouponsMaxAggregateInputType;
};
export type CouponsGroupByOutputType = {
    coupon_id: bigint;
    coupon_code: string;
    percent_off: runtime.Decimal;
    starts_at: Date | null;
    expires_at: Date | null;
    _count: CouponsCountAggregateOutputType | null;
    _avg: CouponsAvgAggregateOutputType | null;
    _sum: CouponsSumAggregateOutputType | null;
    _min: CouponsMinAggregateOutputType | null;
    _max: CouponsMaxAggregateOutputType | null;
};
export type GetCouponsGroupByPayload<T extends couponsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CouponsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CouponsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CouponsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CouponsGroupByOutputType[P]>;
}>>;
export type couponsWhereInput = {
    AND?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    OR?: Prisma.couponsWhereInput[];
    NOT?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    coupon_id?: Prisma.BigIntFilter<"coupons"> | bigint | number;
    coupon_code?: Prisma.StringFilter<"coupons"> | string;
    percent_off?: Prisma.DecimalFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    coupon_redemptions?: Prisma.Coupon_redemptionsListRelationFilter;
};
export type couponsOrderByWithRelationInput = {
    coupon_id?: Prisma.SortOrder;
    coupon_code?: Prisma.SortOrder;
    percent_off?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    coupon_redemptions?: Prisma.coupon_redemptionsOrderByRelationAggregateInput;
};
export type couponsWhereUniqueInput = Prisma.AtLeast<{
    coupon_id?: bigint | number;
    coupon_code?: string;
    AND?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    OR?: Prisma.couponsWhereInput[];
    NOT?: Prisma.couponsWhereInput | Prisma.couponsWhereInput[];
    percent_off?: Prisma.DecimalFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"coupons"> | Date | string | null;
    coupon_redemptions?: Prisma.Coupon_redemptionsListRelationFilter;
}, "coupon_id" | "coupon_code">;
export type couponsOrderByWithAggregationInput = {
    coupon_id?: Prisma.SortOrder;
    coupon_code?: Prisma.SortOrder;
    percent_off?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.couponsCountOrderByAggregateInput;
    _avg?: Prisma.couponsAvgOrderByAggregateInput;
    _max?: Prisma.couponsMaxOrderByAggregateInput;
    _min?: Prisma.couponsMinOrderByAggregateInput;
    _sum?: Prisma.couponsSumOrderByAggregateInput;
};
export type couponsScalarWhereWithAggregatesInput = {
    AND?: Prisma.couponsScalarWhereWithAggregatesInput | Prisma.couponsScalarWhereWithAggregatesInput[];
    OR?: Prisma.couponsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.couponsScalarWhereWithAggregatesInput | Prisma.couponsScalarWhereWithAggregatesInput[];
    coupon_id?: Prisma.BigIntWithAggregatesFilter<"coupons"> | bigint | number;
    coupon_code?: Prisma.StringWithAggregatesFilter<"coupons"> | string;
    percent_off?: Prisma.DecimalWithAggregatesFilter<"coupons"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.DateTimeNullableWithAggregatesFilter<"coupons"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableWithAggregatesFilter<"coupons"> | Date | string | null;
};
export type couponsCreateInput = {
    coupon_id?: bigint | number;
    coupon_code: string;
    percent_off: runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsCreateNestedManyWithoutCouponsInput;
};
export type couponsUncheckedCreateInput = {
    coupon_id?: bigint | number;
    coupon_code: string;
    percent_off: runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedCreateNestedManyWithoutCouponsInput;
};
export type couponsUpdateInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_code?: Prisma.StringFieldUpdateOperationsInput | string;
    percent_off?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUpdateManyWithoutCouponsNestedInput;
};
export type couponsUncheckedUpdateInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_code?: Prisma.StringFieldUpdateOperationsInput | string;
    percent_off?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    coupon_redemptions?: Prisma.coupon_redemptionsUncheckedUpdateManyWithoutCouponsNestedInput;
};
export type couponsCreateManyInput = {
    coupon_id?: bigint | number;
    coupon_code: string;
    percent_off: runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type couponsUpdateManyMutationInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_code?: Prisma.StringFieldUpdateOperationsInput | string;
    percent_off?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type couponsUncheckedUpdateManyInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_code?: Prisma.StringFieldUpdateOperationsInput | string;
    percent_off?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CouponsScalarRelationFilter = {
    is?: Prisma.couponsWhereInput;
    isNot?: Prisma.couponsWhereInput;
};
export type couponsCountOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    coupon_code?: Prisma.SortOrder;
    percent_off?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type couponsAvgOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    percent_off?: Prisma.SortOrder;
};
export type couponsMaxOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    coupon_code?: Prisma.SortOrder;
    percent_off?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type couponsMinOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    coupon_code?: Prisma.SortOrder;
    percent_off?: Prisma.SortOrder;
    starts_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
};
export type couponsSumOrderByAggregateInput = {
    coupon_id?: Prisma.SortOrder;
    percent_off?: Prisma.SortOrder;
};
export type couponsCreateNestedOneWithoutCoupon_redemptionsInput = {
    create?: Prisma.XOR<Prisma.couponsCreateWithoutCoupon_redemptionsInput, Prisma.couponsUncheckedCreateWithoutCoupon_redemptionsInput>;
    connectOrCreate?: Prisma.couponsCreateOrConnectWithoutCoupon_redemptionsInput;
    connect?: Prisma.couponsWhereUniqueInput;
};
export type couponsUpdateOneRequiredWithoutCoupon_redemptionsNestedInput = {
    create?: Prisma.XOR<Prisma.couponsCreateWithoutCoupon_redemptionsInput, Prisma.couponsUncheckedCreateWithoutCoupon_redemptionsInput>;
    connectOrCreate?: Prisma.couponsCreateOrConnectWithoutCoupon_redemptionsInput;
    upsert?: Prisma.couponsUpsertWithoutCoupon_redemptionsInput;
    connect?: Prisma.couponsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.couponsUpdateToOneWithWhereWithoutCoupon_redemptionsInput, Prisma.couponsUpdateWithoutCoupon_redemptionsInput>, Prisma.couponsUncheckedUpdateWithoutCoupon_redemptionsInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type couponsCreateWithoutCoupon_redemptionsInput = {
    coupon_id?: bigint | number;
    coupon_code: string;
    percent_off: runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type couponsUncheckedCreateWithoutCoupon_redemptionsInput = {
    coupon_id?: bigint | number;
    coupon_code: string;
    percent_off: runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Date | string | null;
    expires_at?: Date | string | null;
};
export type couponsCreateOrConnectWithoutCoupon_redemptionsInput = {
    where: Prisma.couponsWhereUniqueInput;
    create: Prisma.XOR<Prisma.couponsCreateWithoutCoupon_redemptionsInput, Prisma.couponsUncheckedCreateWithoutCoupon_redemptionsInput>;
};
export type couponsUpsertWithoutCoupon_redemptionsInput = {
    update: Prisma.XOR<Prisma.couponsUpdateWithoutCoupon_redemptionsInput, Prisma.couponsUncheckedUpdateWithoutCoupon_redemptionsInput>;
    create: Prisma.XOR<Prisma.couponsCreateWithoutCoupon_redemptionsInput, Prisma.couponsUncheckedCreateWithoutCoupon_redemptionsInput>;
    where?: Prisma.couponsWhereInput;
};
export type couponsUpdateToOneWithWhereWithoutCoupon_redemptionsInput = {
    where?: Prisma.couponsWhereInput;
    data: Prisma.XOR<Prisma.couponsUpdateWithoutCoupon_redemptionsInput, Prisma.couponsUncheckedUpdateWithoutCoupon_redemptionsInput>;
};
export type couponsUpdateWithoutCoupon_redemptionsInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_code?: Prisma.StringFieldUpdateOperationsInput | string;
    percent_off?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type couponsUncheckedUpdateWithoutCoupon_redemptionsInput = {
    coupon_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    coupon_code?: Prisma.StringFieldUpdateOperationsInput | string;
    percent_off?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    starts_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CouponsCountOutputType = {
    coupon_redemptions: number;
};
export type CouponsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupon_redemptions?: boolean | CouponsCountOutputTypeCountCoupon_redemptionsArgs;
};
export type CouponsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponsCountOutputTypeSelect<ExtArgs> | null;
};
export type CouponsCountOutputTypeCountCoupon_redemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.coupon_redemptionsWhereInput;
};
export type couponsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    coupon_id?: boolean;
    coupon_code?: boolean;
    percent_off?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
    coupon_redemptions?: boolean | Prisma.coupons$coupon_redemptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CouponsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coupons"]>;
export type couponsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    coupon_id?: boolean;
    coupon_code?: boolean;
    percent_off?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
}, ExtArgs["result"]["coupons"]>;
export type couponsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    coupon_id?: boolean;
    coupon_code?: boolean;
    percent_off?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
}, ExtArgs["result"]["coupons"]>;
export type couponsSelectScalar = {
    coupon_id?: boolean;
    coupon_code?: boolean;
    percent_off?: boolean;
    starts_at?: boolean;
    expires_at?: boolean;
};
export type couponsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"coupon_id" | "coupon_code" | "percent_off" | "starts_at" | "expires_at", ExtArgs["result"]["coupons"]>;
export type couponsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupon_redemptions?: boolean | Prisma.coupons$coupon_redemptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CouponsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type couponsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type couponsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $couponsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "coupons";
    objects: {
        coupon_redemptions: Prisma.$coupon_redemptionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        coupon_id: bigint;
        coupon_code: string;
        percent_off: runtime.Decimal;
        starts_at: Date | null;
        expires_at: Date | null;
    }, ExtArgs["result"]["coupons"]>;
    composites: {};
};
export type couponsGetPayload<S extends boolean | null | undefined | couponsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$couponsPayload, S>;
export type couponsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<couponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CouponsCountAggregateInputType | true;
};
export interface couponsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['coupons'];
        meta: {
            name: 'coupons';
        };
    };
    findUnique<T extends couponsFindUniqueArgs>(args: Prisma.SelectSubset<T, couponsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends couponsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, couponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends couponsFindFirstArgs>(args?: Prisma.SelectSubset<T, couponsFindFirstArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends couponsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, couponsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends couponsFindManyArgs>(args?: Prisma.SelectSubset<T, couponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends couponsCreateArgs>(args: Prisma.SelectSubset<T, couponsCreateArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends couponsCreateManyArgs>(args?: Prisma.SelectSubset<T, couponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends couponsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, couponsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends couponsDeleteArgs>(args: Prisma.SelectSubset<T, couponsDeleteArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends couponsUpdateArgs>(args: Prisma.SelectSubset<T, couponsUpdateArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends couponsDeleteManyArgs>(args?: Prisma.SelectSubset<T, couponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends couponsUpdateManyArgs>(args: Prisma.SelectSubset<T, couponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends couponsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, couponsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends couponsUpsertArgs>(args: Prisma.SelectSubset<T, couponsUpsertArgs<ExtArgs>>): Prisma.Prisma__couponsClient<runtime.Types.Result.GetResult<Prisma.$couponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends couponsCountArgs>(args?: Prisma.Subset<T, couponsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CouponsCountAggregateOutputType> : number>;
    aggregate<T extends CouponsAggregateArgs>(args: Prisma.Subset<T, CouponsAggregateArgs>): Prisma.PrismaPromise<GetCouponsAggregateType<T>>;
    groupBy<T extends couponsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: couponsGroupByArgs['orderBy'];
    } : {
        orderBy?: couponsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, couponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: couponsFieldRefs;
}
export interface Prisma__couponsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    coupon_redemptions<T extends Prisma.coupons$coupon_redemptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coupons$coupon_redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$coupon_redemptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface couponsFieldRefs {
    readonly coupon_id: Prisma.FieldRef<"coupons", 'BigInt'>;
    readonly coupon_code: Prisma.FieldRef<"coupons", 'String'>;
    readonly percent_off: Prisma.FieldRef<"coupons", 'Decimal'>;
    readonly starts_at: Prisma.FieldRef<"coupons", 'DateTime'>;
    readonly expires_at: Prisma.FieldRef<"coupons", 'DateTime'>;
}
export type couponsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponsScalarFieldEnum | Prisma.CouponsScalarFieldEnum[];
};
export type couponsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponsScalarFieldEnum | Prisma.CouponsScalarFieldEnum[];
};
export type couponsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where?: Prisma.couponsWhereInput;
    orderBy?: Prisma.couponsOrderByWithRelationInput | Prisma.couponsOrderByWithRelationInput[];
    cursor?: Prisma.couponsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponsScalarFieldEnum | Prisma.CouponsScalarFieldEnum[];
};
export type couponsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.couponsCreateInput, Prisma.couponsUncheckedCreateInput>;
};
export type couponsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.couponsCreateManyInput | Prisma.couponsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type couponsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    data: Prisma.couponsCreateManyInput | Prisma.couponsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type couponsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.couponsUpdateInput, Prisma.couponsUncheckedUpdateInput>;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.couponsUpdateManyMutationInput, Prisma.couponsUncheckedUpdateManyInput>;
    where?: Prisma.couponsWhereInput;
    limit?: number;
};
export type couponsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.couponsUpdateManyMutationInput, Prisma.couponsUncheckedUpdateManyInput>;
    where?: Prisma.couponsWhereInput;
    limit?: number;
};
export type couponsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
    create: Prisma.XOR<Prisma.couponsCreateInput, Prisma.couponsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.couponsUpdateInput, Prisma.couponsUncheckedUpdateInput>;
};
export type couponsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
    where: Prisma.couponsWhereUniqueInput;
};
export type couponsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.couponsWhereInput;
    limit?: number;
};
export type coupons$coupon_redemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coupon_redemptionsSelect<ExtArgs> | null;
    omit?: Prisma.coupon_redemptionsOmit<ExtArgs> | null;
    include?: Prisma.coupon_redemptionsInclude<ExtArgs> | null;
    where?: Prisma.coupon_redemptionsWhereInput;
    orderBy?: Prisma.coupon_redemptionsOrderByWithRelationInput | Prisma.coupon_redemptionsOrderByWithRelationInput[];
    cursor?: Prisma.coupon_redemptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Coupon_redemptionsScalarFieldEnum | Prisma.Coupon_redemptionsScalarFieldEnum[];
};
export type couponsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.couponsSelect<ExtArgs> | null;
    omit?: Prisma.couponsOmit<ExtArgs> | null;
    include?: Prisma.couponsInclude<ExtArgs> | null;
};
