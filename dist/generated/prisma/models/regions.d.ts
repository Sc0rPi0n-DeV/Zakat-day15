import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type regionsModel = runtime.Types.Result.DefaultSelection<Prisma.$regionsPayload>;
export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null;
    _avg: RegionsAvgAggregateOutputType | null;
    _sum: RegionsSumAggregateOutputType | null;
    _min: RegionsMinAggregateOutputType | null;
    _max: RegionsMaxAggregateOutputType | null;
};
export type RegionsAvgAggregateOutputType = {
    region_id: number | null;
};
export type RegionsSumAggregateOutputType = {
    region_id: bigint | null;
};
export type RegionsMinAggregateOutputType = {
    region_id: bigint | null;
    country_code: string | null;
    region_name: string | null;
};
export type RegionsMaxAggregateOutputType = {
    region_id: bigint | null;
    country_code: string | null;
    region_name: string | null;
};
export type RegionsCountAggregateOutputType = {
    region_id: number;
    country_code: number;
    region_name: number;
    _all: number;
};
export type RegionsAvgAggregateInputType = {
    region_id?: true;
};
export type RegionsSumAggregateInputType = {
    region_id?: true;
};
export type RegionsMinAggregateInputType = {
    region_id?: true;
    country_code?: true;
    region_name?: true;
};
export type RegionsMaxAggregateInputType = {
    region_id?: true;
    country_code?: true;
    region_name?: true;
};
export type RegionsCountAggregateInputType = {
    region_id?: true;
    country_code?: true;
    region_name?: true;
    _all?: true;
};
export type RegionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithRelationInput | Prisma.regionsOrderByWithRelationInput[];
    cursor?: Prisma.regionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegionsCountAggregateInputType;
    _avg?: RegionsAvgAggregateInputType;
    _sum?: RegionsSumAggregateInputType;
    _min?: RegionsMinAggregateInputType;
    _max?: RegionsMaxAggregateInputType;
};
export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
    [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegions[P]> : Prisma.GetScalarType<T[P], AggregateRegions[P]>;
};
export type regionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.regionsWhereInput;
    orderBy?: Prisma.regionsOrderByWithAggregationInput | Prisma.regionsOrderByWithAggregationInput[];
    by: Prisma.RegionsScalarFieldEnum[] | Prisma.RegionsScalarFieldEnum;
    having?: Prisma.regionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegionsCountAggregateInputType | true;
    _avg?: RegionsAvgAggregateInputType;
    _sum?: RegionsSumAggregateInputType;
    _min?: RegionsMinAggregateInputType;
    _max?: RegionsMaxAggregateInputType;
};
export type RegionsGroupByOutputType = {
    region_id: bigint;
    country_code: string;
    region_name: string;
    _count: RegionsCountAggregateOutputType | null;
    _avg: RegionsAvgAggregateOutputType | null;
    _sum: RegionsSumAggregateOutputType | null;
    _min: RegionsMinAggregateOutputType | null;
    _max: RegionsMaxAggregateOutputType | null;
};
export type GetRegionsGroupByPayload<T extends regionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegionsGroupByOutputType[P]>;
}>>;
export type regionsWhereInput = {
    AND?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    OR?: Prisma.regionsWhereInput[];
    NOT?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    region_id?: Prisma.BigIntFilter<"regions"> | bigint | number;
    country_code?: Prisma.StringFilter<"regions"> | string;
    region_name?: Prisma.StringFilter<"regions"> | string;
    cities?: Prisma.CitiesListRelationFilter;
    countries?: Prisma.XOR<Prisma.CountriesScalarRelationFilter, Prisma.countriesWhereInput>;
};
export type regionsOrderByWithRelationInput = {
    region_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    region_name?: Prisma.SortOrder;
    cities?: Prisma.citiesOrderByRelationAggregateInput;
    countries?: Prisma.countriesOrderByWithRelationInput;
};
export type regionsWhereUniqueInput = Prisma.AtLeast<{
    region_id?: bigint | number;
    AND?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    OR?: Prisma.regionsWhereInput[];
    NOT?: Prisma.regionsWhereInput | Prisma.regionsWhereInput[];
    country_code?: Prisma.StringFilter<"regions"> | string;
    region_name?: Prisma.StringFilter<"regions"> | string;
    cities?: Prisma.CitiesListRelationFilter;
    countries?: Prisma.XOR<Prisma.CountriesScalarRelationFilter, Prisma.countriesWhereInput>;
}, "region_id">;
export type regionsOrderByWithAggregationInput = {
    region_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    region_name?: Prisma.SortOrder;
    _count?: Prisma.regionsCountOrderByAggregateInput;
    _avg?: Prisma.regionsAvgOrderByAggregateInput;
    _max?: Prisma.regionsMaxOrderByAggregateInput;
    _min?: Prisma.regionsMinOrderByAggregateInput;
    _sum?: Prisma.regionsSumOrderByAggregateInput;
};
export type regionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.regionsScalarWhereWithAggregatesInput | Prisma.regionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.regionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.regionsScalarWhereWithAggregatesInput | Prisma.regionsScalarWhereWithAggregatesInput[];
    region_id?: Prisma.BigIntWithAggregatesFilter<"regions"> | bigint | number;
    country_code?: Prisma.StringWithAggregatesFilter<"regions"> | string;
    region_name?: Prisma.StringWithAggregatesFilter<"regions"> | string;
};
export type regionsCreateInput = {
    region_id?: bigint | number;
    region_name: string;
    cities?: Prisma.citiesCreateNestedManyWithoutRegionsInput;
    countries: Prisma.countriesCreateNestedOneWithoutRegionsInput;
};
export type regionsUncheckedCreateInput = {
    region_id?: bigint | number;
    country_code: string;
    region_name: string;
    cities?: Prisma.citiesUncheckedCreateNestedManyWithoutRegionsInput;
};
export type regionsUpdateInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
    cities?: Prisma.citiesUpdateManyWithoutRegionsNestedInput;
    countries?: Prisma.countriesUpdateOneRequiredWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
    cities?: Prisma.citiesUncheckedUpdateManyWithoutRegionsNestedInput;
};
export type regionsCreateManyInput = {
    region_id?: bigint | number;
    country_code: string;
    region_name: string;
};
export type regionsUpdateManyMutationInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type regionsUncheckedUpdateManyInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegionsScalarRelationFilter = {
    is?: Prisma.regionsWhereInput;
    isNot?: Prisma.regionsWhereInput;
};
export type RegionsListRelationFilter = {
    every?: Prisma.regionsWhereInput;
    some?: Prisma.regionsWhereInput;
    none?: Prisma.regionsWhereInput;
};
export type regionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type regionsCountOrderByAggregateInput = {
    region_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    region_name?: Prisma.SortOrder;
};
export type regionsAvgOrderByAggregateInput = {
    region_id?: Prisma.SortOrder;
};
export type regionsMaxOrderByAggregateInput = {
    region_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    region_name?: Prisma.SortOrder;
};
export type regionsMinOrderByAggregateInput = {
    region_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    region_name?: Prisma.SortOrder;
};
export type regionsSumOrderByAggregateInput = {
    region_id?: Prisma.SortOrder;
};
export type regionsCreateNestedOneWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCitiesInput, Prisma.regionsUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCitiesInput;
    connect?: Prisma.regionsWhereUniqueInput;
};
export type regionsUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCitiesInput, Prisma.regionsUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCitiesInput;
    upsert?: Prisma.regionsUpsertWithoutCitiesInput;
    connect?: Prisma.regionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.regionsUpdateToOneWithWhereWithoutCitiesInput, Prisma.regionsUpdateWithoutCitiesInput>, Prisma.regionsUncheckedUpdateWithoutCitiesInput>;
};
export type regionsCreateNestedManyWithoutCountriesInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCountriesInput, Prisma.regionsUncheckedCreateWithoutCountriesInput> | Prisma.regionsCreateWithoutCountriesInput[] | Prisma.regionsUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCountriesInput | Prisma.regionsCreateOrConnectWithoutCountriesInput[];
    createMany?: Prisma.regionsCreateManyCountriesInputEnvelope;
    connect?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
};
export type regionsUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCountriesInput, Prisma.regionsUncheckedCreateWithoutCountriesInput> | Prisma.regionsCreateWithoutCountriesInput[] | Prisma.regionsUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCountriesInput | Prisma.regionsCreateOrConnectWithoutCountriesInput[];
    createMany?: Prisma.regionsCreateManyCountriesInputEnvelope;
    connect?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
};
export type regionsUpdateManyWithoutCountriesNestedInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCountriesInput, Prisma.regionsUncheckedCreateWithoutCountriesInput> | Prisma.regionsCreateWithoutCountriesInput[] | Prisma.regionsUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCountriesInput | Prisma.regionsCreateOrConnectWithoutCountriesInput[];
    upsert?: Prisma.regionsUpsertWithWhereUniqueWithoutCountriesInput | Prisma.regionsUpsertWithWhereUniqueWithoutCountriesInput[];
    createMany?: Prisma.regionsCreateManyCountriesInputEnvelope;
    set?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    disconnect?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    delete?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    connect?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    update?: Prisma.regionsUpdateWithWhereUniqueWithoutCountriesInput | Prisma.regionsUpdateWithWhereUniqueWithoutCountriesInput[];
    updateMany?: Prisma.regionsUpdateManyWithWhereWithoutCountriesInput | Prisma.regionsUpdateManyWithWhereWithoutCountriesInput[];
    deleteMany?: Prisma.regionsScalarWhereInput | Prisma.regionsScalarWhereInput[];
};
export type regionsUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: Prisma.XOR<Prisma.regionsCreateWithoutCountriesInput, Prisma.regionsUncheckedCreateWithoutCountriesInput> | Prisma.regionsCreateWithoutCountriesInput[] | Prisma.regionsUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.regionsCreateOrConnectWithoutCountriesInput | Prisma.regionsCreateOrConnectWithoutCountriesInput[];
    upsert?: Prisma.regionsUpsertWithWhereUniqueWithoutCountriesInput | Prisma.regionsUpsertWithWhereUniqueWithoutCountriesInput[];
    createMany?: Prisma.regionsCreateManyCountriesInputEnvelope;
    set?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    disconnect?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    delete?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    connect?: Prisma.regionsWhereUniqueInput | Prisma.regionsWhereUniqueInput[];
    update?: Prisma.regionsUpdateWithWhereUniqueWithoutCountriesInput | Prisma.regionsUpdateWithWhereUniqueWithoutCountriesInput[];
    updateMany?: Prisma.regionsUpdateManyWithWhereWithoutCountriesInput | Prisma.regionsUpdateManyWithWhereWithoutCountriesInput[];
    deleteMany?: Prisma.regionsScalarWhereInput | Prisma.regionsScalarWhereInput[];
};
export type regionsCreateWithoutCitiesInput = {
    region_id?: bigint | number;
    region_name: string;
    countries: Prisma.countriesCreateNestedOneWithoutRegionsInput;
};
export type regionsUncheckedCreateWithoutCitiesInput = {
    region_id?: bigint | number;
    country_code: string;
    region_name: string;
};
export type regionsCreateOrConnectWithoutCitiesInput = {
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateWithoutCitiesInput, Prisma.regionsUncheckedCreateWithoutCitiesInput>;
};
export type regionsUpsertWithoutCitiesInput = {
    update: Prisma.XOR<Prisma.regionsUpdateWithoutCitiesInput, Prisma.regionsUncheckedUpdateWithoutCitiesInput>;
    create: Prisma.XOR<Prisma.regionsCreateWithoutCitiesInput, Prisma.regionsUncheckedCreateWithoutCitiesInput>;
    where?: Prisma.regionsWhereInput;
};
export type regionsUpdateToOneWithWhereWithoutCitiesInput = {
    where?: Prisma.regionsWhereInput;
    data: Prisma.XOR<Prisma.regionsUpdateWithoutCitiesInput, Prisma.regionsUncheckedUpdateWithoutCitiesInput>;
};
export type regionsUpdateWithoutCitiesInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
    countries?: Prisma.countriesUpdateOneRequiredWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateWithoutCitiesInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type regionsCreateWithoutCountriesInput = {
    region_id?: bigint | number;
    region_name: string;
    cities?: Prisma.citiesCreateNestedManyWithoutRegionsInput;
};
export type regionsUncheckedCreateWithoutCountriesInput = {
    region_id?: bigint | number;
    region_name: string;
    cities?: Prisma.citiesUncheckedCreateNestedManyWithoutRegionsInput;
};
export type regionsCreateOrConnectWithoutCountriesInput = {
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateWithoutCountriesInput, Prisma.regionsUncheckedCreateWithoutCountriesInput>;
};
export type regionsCreateManyCountriesInputEnvelope = {
    data: Prisma.regionsCreateManyCountriesInput | Prisma.regionsCreateManyCountriesInput[];
    skipDuplicates?: boolean;
};
export type regionsUpsertWithWhereUniqueWithoutCountriesInput = {
    where: Prisma.regionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.regionsUpdateWithoutCountriesInput, Prisma.regionsUncheckedUpdateWithoutCountriesInput>;
    create: Prisma.XOR<Prisma.regionsCreateWithoutCountriesInput, Prisma.regionsUncheckedCreateWithoutCountriesInput>;
};
export type regionsUpdateWithWhereUniqueWithoutCountriesInput = {
    where: Prisma.regionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.regionsUpdateWithoutCountriesInput, Prisma.regionsUncheckedUpdateWithoutCountriesInput>;
};
export type regionsUpdateManyWithWhereWithoutCountriesInput = {
    where: Prisma.regionsScalarWhereInput;
    data: Prisma.XOR<Prisma.regionsUpdateManyMutationInput, Prisma.regionsUncheckedUpdateManyWithoutCountriesInput>;
};
export type regionsScalarWhereInput = {
    AND?: Prisma.regionsScalarWhereInput | Prisma.regionsScalarWhereInput[];
    OR?: Prisma.regionsScalarWhereInput[];
    NOT?: Prisma.regionsScalarWhereInput | Prisma.regionsScalarWhereInput[];
    region_id?: Prisma.BigIntFilter<"regions"> | bigint | number;
    country_code?: Prisma.StringFilter<"regions"> | string;
    region_name?: Prisma.StringFilter<"regions"> | string;
};
export type regionsCreateManyCountriesInput = {
    region_id?: bigint | number;
    region_name: string;
};
export type regionsUpdateWithoutCountriesInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
    cities?: Prisma.citiesUpdateManyWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateWithoutCountriesInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
    cities?: Prisma.citiesUncheckedUpdateManyWithoutRegionsNestedInput;
};
export type regionsUncheckedUpdateManyWithoutCountriesInput = {
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegionsCountOutputType = {
    cities: number;
};
export type RegionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | RegionsCountOutputTypeCountCitiesArgs;
};
export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegionsCountOutputTypeSelect<ExtArgs> | null;
};
export type RegionsCountOutputTypeCountCitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citiesWhereInput;
};
export type regionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    region_id?: boolean;
    country_code?: boolean;
    region_name?: boolean;
    cities?: boolean | Prisma.regions$citiesArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RegionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regions"]>;
export type regionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    region_id?: boolean;
    country_code?: boolean;
    region_name?: boolean;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regions"]>;
export type regionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    region_id?: boolean;
    country_code?: boolean;
    region_name?: boolean;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regions"]>;
export type regionsSelectScalar = {
    region_id?: boolean;
    country_code?: boolean;
    region_name?: boolean;
};
export type regionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"region_id" | "country_code" | "region_name", ExtArgs["result"]["regions"]>;
export type regionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | Prisma.regions$citiesArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RegionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type regionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
};
export type regionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
};
export type $regionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "regions";
    objects: {
        cities: Prisma.$citiesPayload<ExtArgs>[];
        countries: Prisma.$countriesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        region_id: bigint;
        country_code: string;
        region_name: string;
    }, ExtArgs["result"]["regions"]>;
    composites: {};
};
export type regionsGetPayload<S extends boolean | null | undefined | regionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$regionsPayload, S>;
export type regionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<regionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegionsCountAggregateInputType | true;
};
export interface regionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['regions'];
        meta: {
            name: 'regions';
        };
    };
    findUnique<T extends regionsFindUniqueArgs>(args: Prisma.SelectSubset<T, regionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends regionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, regionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends regionsFindFirstArgs>(args?: Prisma.SelectSubset<T, regionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends regionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, regionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends regionsFindManyArgs>(args?: Prisma.SelectSubset<T, regionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends regionsCreateArgs>(args: Prisma.SelectSubset<T, regionsCreateArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends regionsCreateManyArgs>(args?: Prisma.SelectSubset<T, regionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends regionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, regionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends regionsDeleteArgs>(args: Prisma.SelectSubset<T, regionsDeleteArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends regionsUpdateArgs>(args: Prisma.SelectSubset<T, regionsUpdateArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends regionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, regionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends regionsUpdateManyArgs>(args: Prisma.SelectSubset<T, regionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends regionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, regionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends regionsUpsertArgs>(args: Prisma.SelectSubset<T, regionsUpsertArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends regionsCountArgs>(args?: Prisma.Subset<T, regionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegionsCountAggregateOutputType> : number>;
    aggregate<T extends RegionsAggregateArgs>(args: Prisma.Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>;
    groupBy<T extends regionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: regionsGroupByArgs['orderBy'];
    } : {
        orderBy?: regionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, regionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: regionsFieldRefs;
}
export interface Prisma__regionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cities<T extends Prisma.regions$citiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.regions$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    countries<T extends Prisma.countriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.countriesDefaultArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface regionsFieldRefs {
    readonly region_id: Prisma.FieldRef<"regions", 'BigInt'>;
    readonly country_code: Prisma.FieldRef<"regions", 'String'>;
    readonly region_name: Prisma.FieldRef<"regions", 'String'>;
}
export type regionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type regionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type regionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type regionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.regionsCreateInput, Prisma.regionsUncheckedCreateInput>;
};
export type regionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.regionsCreateManyInput | Prisma.regionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type regionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    data: Prisma.regionsCreateManyInput | Prisma.regionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.regionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type regionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.regionsUpdateInput, Prisma.regionsUncheckedUpdateInput>;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.regionsUpdateManyMutationInput, Prisma.regionsUncheckedUpdateManyInput>;
    where?: Prisma.regionsWhereInput;
    limit?: number;
};
export type regionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.regionsUpdateManyMutationInput, Prisma.regionsUncheckedUpdateManyInput>;
    where?: Prisma.regionsWhereInput;
    limit?: number;
    include?: Prisma.regionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type regionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.regionsCreateInput, Prisma.regionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.regionsUpdateInput, Prisma.regionsUncheckedUpdateInput>;
};
export type regionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
    where: Prisma.regionsWhereUniqueInput;
};
export type regionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.regionsWhereInput;
    limit?: number;
};
export type regions$citiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    where?: Prisma.citiesWhereInput;
    orderBy?: Prisma.citiesOrderByWithRelationInput | Prisma.citiesOrderByWithRelationInput[];
    cursor?: Prisma.citiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CitiesScalarFieldEnum | Prisma.CitiesScalarFieldEnum[];
};
export type regionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.regionsSelect<ExtArgs> | null;
    omit?: Prisma.regionsOmit<ExtArgs> | null;
    include?: Prisma.regionsInclude<ExtArgs> | null;
};
