import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type countriesModel = runtime.Types.Result.DefaultSelection<Prisma.$countriesPayload>;
export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null;
    _min: CountriesMinAggregateOutputType | null;
    _max: CountriesMaxAggregateOutputType | null;
};
export type CountriesMinAggregateOutputType = {
    country_code: string | null;
    country_name: string | null;
};
export type CountriesMaxAggregateOutputType = {
    country_code: string | null;
    country_name: string | null;
};
export type CountriesCountAggregateOutputType = {
    country_code: number;
    country_name: number;
    _all: number;
};
export type CountriesMinAggregateInputType = {
    country_code?: true;
    country_name?: true;
};
export type CountriesMaxAggregateInputType = {
    country_code?: true;
    country_name?: true;
};
export type CountriesCountAggregateInputType = {
    country_code?: true;
    country_name?: true;
    _all?: true;
};
export type CountriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countriesWhereInput;
    orderBy?: Prisma.countriesOrderByWithRelationInput | Prisma.countriesOrderByWithRelationInput[];
    cursor?: Prisma.countriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CountriesCountAggregateInputType;
    _min?: CountriesMinAggregateInputType;
    _max?: CountriesMaxAggregateInputType;
};
export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCountries[P]> : Prisma.GetScalarType<T[P], AggregateCountries[P]>;
};
export type countriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countriesWhereInput;
    orderBy?: Prisma.countriesOrderByWithAggregationInput | Prisma.countriesOrderByWithAggregationInput[];
    by: Prisma.CountriesScalarFieldEnum[] | Prisma.CountriesScalarFieldEnum;
    having?: Prisma.countriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CountriesCountAggregateInputType | true;
    _min?: CountriesMinAggregateInputType;
    _max?: CountriesMaxAggregateInputType;
};
export type CountriesGroupByOutputType = {
    country_code: string;
    country_name: string;
    _count: CountriesCountAggregateOutputType | null;
    _min: CountriesMinAggregateOutputType | null;
    _max: CountriesMaxAggregateOutputType | null;
};
export type GetCountriesGroupByPayload<T extends countriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CountriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CountriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CountriesGroupByOutputType[P]>;
}>>;
export type countriesWhereInput = {
    AND?: Prisma.countriesWhereInput | Prisma.countriesWhereInput[];
    OR?: Prisma.countriesWhereInput[];
    NOT?: Prisma.countriesWhereInput | Prisma.countriesWhereInput[];
    country_code?: Prisma.StringFilter<"countries"> | string;
    country_name?: Prisma.StringFilter<"countries"> | string;
    regions?: Prisma.RegionsListRelationFilter;
    shipping_rates?: Prisma.Shipping_ratesListRelationFilter;
};
export type countriesOrderByWithRelationInput = {
    country_code?: Prisma.SortOrder;
    country_name?: Prisma.SortOrder;
    regions?: Prisma.regionsOrderByRelationAggregateInput;
    shipping_rates?: Prisma.shipping_ratesOrderByRelationAggregateInput;
};
export type countriesWhereUniqueInput = Prisma.AtLeast<{
    country_code?: string;
    AND?: Prisma.countriesWhereInput | Prisma.countriesWhereInput[];
    OR?: Prisma.countriesWhereInput[];
    NOT?: Prisma.countriesWhereInput | Prisma.countriesWhereInput[];
    country_name?: Prisma.StringFilter<"countries"> | string;
    regions?: Prisma.RegionsListRelationFilter;
    shipping_rates?: Prisma.Shipping_ratesListRelationFilter;
}, "country_code">;
export type countriesOrderByWithAggregationInput = {
    country_code?: Prisma.SortOrder;
    country_name?: Prisma.SortOrder;
    _count?: Prisma.countriesCountOrderByAggregateInput;
    _max?: Prisma.countriesMaxOrderByAggregateInput;
    _min?: Prisma.countriesMinOrderByAggregateInput;
};
export type countriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.countriesScalarWhereWithAggregatesInput | Prisma.countriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.countriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.countriesScalarWhereWithAggregatesInput | Prisma.countriesScalarWhereWithAggregatesInput[];
    country_code?: Prisma.StringWithAggregatesFilter<"countries"> | string;
    country_name?: Prisma.StringWithAggregatesFilter<"countries"> | string;
};
export type countriesCreateInput = {
    country_code: string;
    country_name: string;
    regions?: Prisma.regionsCreateNestedManyWithoutCountriesInput;
    shipping_rates?: Prisma.shipping_ratesCreateNestedManyWithoutCountriesInput;
};
export type countriesUncheckedCreateInput = {
    country_code: string;
    country_name: string;
    regions?: Prisma.regionsUncheckedCreateNestedManyWithoutCountriesInput;
    shipping_rates?: Prisma.shipping_ratesUncheckedCreateNestedManyWithoutCountriesInput;
};
export type countriesUpdateInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
    regions?: Prisma.regionsUpdateManyWithoutCountriesNestedInput;
    shipping_rates?: Prisma.shipping_ratesUpdateManyWithoutCountriesNestedInput;
};
export type countriesUncheckedUpdateInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
    regions?: Prisma.regionsUncheckedUpdateManyWithoutCountriesNestedInput;
    shipping_rates?: Prisma.shipping_ratesUncheckedUpdateManyWithoutCountriesNestedInput;
};
export type countriesCreateManyInput = {
    country_code: string;
    country_name: string;
};
export type countriesUpdateManyMutationInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type countriesUncheckedUpdateManyInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type countriesCountOrderByAggregateInput = {
    country_code?: Prisma.SortOrder;
    country_name?: Prisma.SortOrder;
};
export type countriesMaxOrderByAggregateInput = {
    country_code?: Prisma.SortOrder;
    country_name?: Prisma.SortOrder;
};
export type countriesMinOrderByAggregateInput = {
    country_code?: Prisma.SortOrder;
    country_name?: Prisma.SortOrder;
};
export type CountriesScalarRelationFilter = {
    is?: Prisma.countriesWhereInput;
    isNot?: Prisma.countriesWhereInput;
};
export type countriesCreateNestedOneWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.countriesCreateWithoutRegionsInput, Prisma.countriesUncheckedCreateWithoutRegionsInput>;
    connectOrCreate?: Prisma.countriesCreateOrConnectWithoutRegionsInput;
    connect?: Prisma.countriesWhereUniqueInput;
};
export type countriesUpdateOneRequiredWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.countriesCreateWithoutRegionsInput, Prisma.countriesUncheckedCreateWithoutRegionsInput>;
    connectOrCreate?: Prisma.countriesCreateOrConnectWithoutRegionsInput;
    upsert?: Prisma.countriesUpsertWithoutRegionsInput;
    connect?: Prisma.countriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.countriesUpdateToOneWithWhereWithoutRegionsInput, Prisma.countriesUpdateWithoutRegionsInput>, Prisma.countriesUncheckedUpdateWithoutRegionsInput>;
};
export type countriesCreateNestedOneWithoutShipping_ratesInput = {
    create?: Prisma.XOR<Prisma.countriesCreateWithoutShipping_ratesInput, Prisma.countriesUncheckedCreateWithoutShipping_ratesInput>;
    connectOrCreate?: Prisma.countriesCreateOrConnectWithoutShipping_ratesInput;
    connect?: Prisma.countriesWhereUniqueInput;
};
export type countriesUpdateOneRequiredWithoutShipping_ratesNestedInput = {
    create?: Prisma.XOR<Prisma.countriesCreateWithoutShipping_ratesInput, Prisma.countriesUncheckedCreateWithoutShipping_ratesInput>;
    connectOrCreate?: Prisma.countriesCreateOrConnectWithoutShipping_ratesInput;
    upsert?: Prisma.countriesUpsertWithoutShipping_ratesInput;
    connect?: Prisma.countriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.countriesUpdateToOneWithWhereWithoutShipping_ratesInput, Prisma.countriesUpdateWithoutShipping_ratesInput>, Prisma.countriesUncheckedUpdateWithoutShipping_ratesInput>;
};
export type countriesCreateWithoutRegionsInput = {
    country_code: string;
    country_name: string;
    shipping_rates?: Prisma.shipping_ratesCreateNestedManyWithoutCountriesInput;
};
export type countriesUncheckedCreateWithoutRegionsInput = {
    country_code: string;
    country_name: string;
    shipping_rates?: Prisma.shipping_ratesUncheckedCreateNestedManyWithoutCountriesInput;
};
export type countriesCreateOrConnectWithoutRegionsInput = {
    where: Prisma.countriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.countriesCreateWithoutRegionsInput, Prisma.countriesUncheckedCreateWithoutRegionsInput>;
};
export type countriesUpsertWithoutRegionsInput = {
    update: Prisma.XOR<Prisma.countriesUpdateWithoutRegionsInput, Prisma.countriesUncheckedUpdateWithoutRegionsInput>;
    create: Prisma.XOR<Prisma.countriesCreateWithoutRegionsInput, Prisma.countriesUncheckedCreateWithoutRegionsInput>;
    where?: Prisma.countriesWhereInput;
};
export type countriesUpdateToOneWithWhereWithoutRegionsInput = {
    where?: Prisma.countriesWhereInput;
    data: Prisma.XOR<Prisma.countriesUpdateWithoutRegionsInput, Prisma.countriesUncheckedUpdateWithoutRegionsInput>;
};
export type countriesUpdateWithoutRegionsInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipping_rates?: Prisma.shipping_ratesUpdateManyWithoutCountriesNestedInput;
};
export type countriesUncheckedUpdateWithoutRegionsInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
    shipping_rates?: Prisma.shipping_ratesUncheckedUpdateManyWithoutCountriesNestedInput;
};
export type countriesCreateWithoutShipping_ratesInput = {
    country_code: string;
    country_name: string;
    regions?: Prisma.regionsCreateNestedManyWithoutCountriesInput;
};
export type countriesUncheckedCreateWithoutShipping_ratesInput = {
    country_code: string;
    country_name: string;
    regions?: Prisma.regionsUncheckedCreateNestedManyWithoutCountriesInput;
};
export type countriesCreateOrConnectWithoutShipping_ratesInput = {
    where: Prisma.countriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.countriesCreateWithoutShipping_ratesInput, Prisma.countriesUncheckedCreateWithoutShipping_ratesInput>;
};
export type countriesUpsertWithoutShipping_ratesInput = {
    update: Prisma.XOR<Prisma.countriesUpdateWithoutShipping_ratesInput, Prisma.countriesUncheckedUpdateWithoutShipping_ratesInput>;
    create: Prisma.XOR<Prisma.countriesCreateWithoutShipping_ratesInput, Prisma.countriesUncheckedCreateWithoutShipping_ratesInput>;
    where?: Prisma.countriesWhereInput;
};
export type countriesUpdateToOneWithWhereWithoutShipping_ratesInput = {
    where?: Prisma.countriesWhereInput;
    data: Prisma.XOR<Prisma.countriesUpdateWithoutShipping_ratesInput, Prisma.countriesUncheckedUpdateWithoutShipping_ratesInput>;
};
export type countriesUpdateWithoutShipping_ratesInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
    regions?: Prisma.regionsUpdateManyWithoutCountriesNestedInput;
};
export type countriesUncheckedUpdateWithoutShipping_ratesInput = {
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    country_name?: Prisma.StringFieldUpdateOperationsInput | string;
    regions?: Prisma.regionsUncheckedUpdateManyWithoutCountriesNestedInput;
};
export type CountriesCountOutputType = {
    regions: number;
    shipping_rates: number;
};
export type CountriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | CountriesCountOutputTypeCountRegionsArgs;
    shipping_rates?: boolean | CountriesCountOutputTypeCountShipping_ratesArgs;
};
export type CountriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountriesCountOutputTypeSelect<ExtArgs> | null;
};
export type CountriesCountOutputTypeCountRegionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.regionsWhereInput;
};
export type CountriesCountOutputTypeCountShipping_ratesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipping_ratesWhereInput;
};
export type countriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    country_code?: boolean;
    country_name?: boolean;
    regions?: boolean | Prisma.countries$regionsArgs<ExtArgs>;
    shipping_rates?: boolean | Prisma.countries$shipping_ratesArgs<ExtArgs>;
    _count?: boolean | Prisma.CountriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["countries"]>;
export type countriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    country_code?: boolean;
    country_name?: boolean;
}, ExtArgs["result"]["countries"]>;
export type countriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    country_code?: boolean;
    country_name?: boolean;
}, ExtArgs["result"]["countries"]>;
export type countriesSelectScalar = {
    country_code?: boolean;
    country_name?: boolean;
};
export type countriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"country_code" | "country_name", ExtArgs["result"]["countries"]>;
export type countriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.countries$regionsArgs<ExtArgs>;
    shipping_rates?: boolean | Prisma.countries$shipping_ratesArgs<ExtArgs>;
    _count?: boolean | Prisma.CountriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type countriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type countriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $countriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "countries";
    objects: {
        regions: Prisma.$regionsPayload<ExtArgs>[];
        shipping_rates: Prisma.$shipping_ratesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        country_code: string;
        country_name: string;
    }, ExtArgs["result"]["countries"]>;
    composites: {};
};
export type countriesGetPayload<S extends boolean | null | undefined | countriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$countriesPayload, S>;
export type countriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<countriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CountriesCountAggregateInputType | true;
};
export interface countriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['countries'];
        meta: {
            name: 'countries';
        };
    };
    findUnique<T extends countriesFindUniqueArgs>(args: Prisma.SelectSubset<T, countriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends countriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, countriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends countriesFindFirstArgs>(args?: Prisma.SelectSubset<T, countriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends countriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, countriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends countriesFindManyArgs>(args?: Prisma.SelectSubset<T, countriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends countriesCreateArgs>(args: Prisma.SelectSubset<T, countriesCreateArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends countriesCreateManyArgs>(args?: Prisma.SelectSubset<T, countriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends countriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, countriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends countriesDeleteArgs>(args: Prisma.SelectSubset<T, countriesDeleteArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends countriesUpdateArgs>(args: Prisma.SelectSubset<T, countriesUpdateArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends countriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, countriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends countriesUpdateManyArgs>(args: Prisma.SelectSubset<T, countriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends countriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, countriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends countriesUpsertArgs>(args: Prisma.SelectSubset<T, countriesUpsertArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends countriesCountArgs>(args?: Prisma.Subset<T, countriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CountriesCountAggregateOutputType> : number>;
    aggregate<T extends CountriesAggregateArgs>(args: Prisma.Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>;
    groupBy<T extends countriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: countriesGroupByArgs['orderBy'];
    } : {
        orderBy?: countriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, countriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: countriesFieldRefs;
}
export interface Prisma__countriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    regions<T extends Prisma.countries$regionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.countries$regionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shipping_rates<T extends Prisma.countries$shipping_ratesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.countries$shipping_ratesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface countriesFieldRefs {
    readonly country_code: Prisma.FieldRef<"countries", 'String'>;
    readonly country_name: Prisma.FieldRef<"countries", 'String'>;
}
export type countriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    where: Prisma.countriesWhereUniqueInput;
};
export type countriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    where: Prisma.countriesWhereUniqueInput;
};
export type countriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    where?: Prisma.countriesWhereInput;
    orderBy?: Prisma.countriesOrderByWithRelationInput | Prisma.countriesOrderByWithRelationInput[];
    cursor?: Prisma.countriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountriesScalarFieldEnum | Prisma.CountriesScalarFieldEnum[];
};
export type countriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    where?: Prisma.countriesWhereInput;
    orderBy?: Prisma.countriesOrderByWithRelationInput | Prisma.countriesOrderByWithRelationInput[];
    cursor?: Prisma.countriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountriesScalarFieldEnum | Prisma.CountriesScalarFieldEnum[];
};
export type countriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    where?: Prisma.countriesWhereInput;
    orderBy?: Prisma.countriesOrderByWithRelationInput | Prisma.countriesOrderByWithRelationInput[];
    cursor?: Prisma.countriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountriesScalarFieldEnum | Prisma.CountriesScalarFieldEnum[];
};
export type countriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countriesCreateInput, Prisma.countriesUncheckedCreateInput>;
};
export type countriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.countriesCreateManyInput | Prisma.countriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type countriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    data: Prisma.countriesCreateManyInput | Prisma.countriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type countriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countriesUpdateInput, Prisma.countriesUncheckedUpdateInput>;
    where: Prisma.countriesWhereUniqueInput;
};
export type countriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.countriesUpdateManyMutationInput, Prisma.countriesUncheckedUpdateManyInput>;
    where?: Prisma.countriesWhereInput;
    limit?: number;
};
export type countriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countriesUpdateManyMutationInput, Prisma.countriesUncheckedUpdateManyInput>;
    where?: Prisma.countriesWhereInput;
    limit?: number;
};
export type countriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    where: Prisma.countriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.countriesCreateInput, Prisma.countriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.countriesUpdateInput, Prisma.countriesUncheckedUpdateInput>;
};
export type countriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
    where: Prisma.countriesWhereUniqueInput;
};
export type countriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countriesWhereInput;
    limit?: number;
};
export type countries$regionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithRelationInput | Prisma.regionsOrderByWithRelationInput[];
    cursor?: Prisma.regionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegionsScalarFieldEnum | Prisma.RegionsScalarFieldEnum[];
};
export type countries$shipping_ratesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type countriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countriesSelect<ExtArgs> | null;
    omit?: Prisma.countriesOmit<ExtArgs> | null;
    include?: Prisma.countriesInclude<ExtArgs> | null;
};
