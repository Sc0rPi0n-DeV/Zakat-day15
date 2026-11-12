import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type citiesModel = runtime.Types.Result.DefaultSelection<Prisma.$citiesPayload>;
export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null;
    _avg: CitiesAvgAggregateOutputType | null;
    _sum: CitiesSumAggregateOutputType | null;
    _min: CitiesMinAggregateOutputType | null;
    _max: CitiesMaxAggregateOutputType | null;
};
export type CitiesAvgAggregateOutputType = {
    city_id: number | null;
    region_id: number | null;
};
export type CitiesSumAggregateOutputType = {
    city_id: bigint | null;
    region_id: bigint | null;
};
export type CitiesMinAggregateOutputType = {
    city_id: bigint | null;
    region_id: bigint | null;
    city_name: string | null;
};
export type CitiesMaxAggregateOutputType = {
    city_id: bigint | null;
    region_id: bigint | null;
    city_name: string | null;
};
export type CitiesCountAggregateOutputType = {
    city_id: number;
    region_id: number;
    city_name: number;
    _all: number;
};
export type CitiesAvgAggregateInputType = {
    city_id?: true;
    region_id?: true;
};
export type CitiesSumAggregateInputType = {
    city_id?: true;
    region_id?: true;
};
export type CitiesMinAggregateInputType = {
    city_id?: true;
    region_id?: true;
    city_name?: true;
};
export type CitiesMaxAggregateInputType = {
    city_id?: true;
    region_id?: true;
    city_name?: true;
};
export type CitiesCountAggregateInputType = {
    city_id?: true;
    region_id?: true;
    city_name?: true;
    _all?: true;
};
export type CitiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citiesWhereInput;
    orderBy?: Prisma.citiesOrderByWithRelationInput | Prisma.citiesOrderByWithRelationInput[];
    cursor?: Prisma.citiesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CitiesCountAggregateInputType;
    _avg?: CitiesAvgAggregateInputType;
    _sum?: CitiesSumAggregateInputType;
    _min?: CitiesMinAggregateInputType;
    _max?: CitiesMaxAggregateInputType;
};
export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
    [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCities[P]> : Prisma.GetScalarType<T[P], AggregateCities[P]>;
};
export type citiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citiesWhereInput;
    orderBy?: Prisma.citiesOrderByWithAggregationInput | Prisma.citiesOrderByWithAggregationInput[];
    by: Prisma.CitiesScalarFieldEnum[] | Prisma.CitiesScalarFieldEnum;
    having?: Prisma.citiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CitiesCountAggregateInputType | true;
    _avg?: CitiesAvgAggregateInputType;
    _sum?: CitiesSumAggregateInputType;
    _min?: CitiesMinAggregateInputType;
    _max?: CitiesMaxAggregateInputType;
};
export type CitiesGroupByOutputType = {
    city_id: bigint;
    region_id: bigint;
    city_name: string;
    _count: CitiesCountAggregateOutputType | null;
    _avg: CitiesAvgAggregateOutputType | null;
    _sum: CitiesSumAggregateOutputType | null;
    _min: CitiesMinAggregateOutputType | null;
    _max: CitiesMaxAggregateOutputType | null;
};
export type GetCitiesGroupByPayload<T extends citiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CitiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CitiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CitiesGroupByOutputType[P]>;
}>>;
export type citiesWhereInput = {
    AND?: Prisma.citiesWhereInput | Prisma.citiesWhereInput[];
    OR?: Prisma.citiesWhereInput[];
    NOT?: Prisma.citiesWhereInput | Prisma.citiesWhereInput[];
    city_id?: Prisma.BigIntFilter<"cities"> | bigint | number;
    region_id?: Prisma.BigIntFilter<"cities"> | bigint | number;
    city_name?: Prisma.StringFilter<"cities"> | string;
    addresses?: Prisma.AddressesListRelationFilter;
    regions?: Prisma.XOR<Prisma.RegionsScalarRelationFilter, Prisma.regionsWhereInput>;
    warehouses?: Prisma.WarehousesListRelationFilter;
};
export type citiesOrderByWithRelationInput = {
    city_id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    city_name?: Prisma.SortOrder;
    addresses?: Prisma.addressesOrderByRelationAggregateInput;
    regions?: Prisma.regionsOrderByWithRelationInput;
    warehouses?: Prisma.warehousesOrderByRelationAggregateInput;
};
export type citiesWhereUniqueInput = Prisma.AtLeast<{
    city_id?: bigint | number;
    AND?: Prisma.citiesWhereInput | Prisma.citiesWhereInput[];
    OR?: Prisma.citiesWhereInput[];
    NOT?: Prisma.citiesWhereInput | Prisma.citiesWhereInput[];
    region_id?: Prisma.BigIntFilter<"cities"> | bigint | number;
    city_name?: Prisma.StringFilter<"cities"> | string;
    addresses?: Prisma.AddressesListRelationFilter;
    regions?: Prisma.XOR<Prisma.RegionsScalarRelationFilter, Prisma.regionsWhereInput>;
    warehouses?: Prisma.WarehousesListRelationFilter;
}, "city_id">;
export type citiesOrderByWithAggregationInput = {
    city_id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    city_name?: Prisma.SortOrder;
    _count?: Prisma.citiesCountOrderByAggregateInput;
    _avg?: Prisma.citiesAvgOrderByAggregateInput;
    _max?: Prisma.citiesMaxOrderByAggregateInput;
    _min?: Prisma.citiesMinOrderByAggregateInput;
    _sum?: Prisma.citiesSumOrderByAggregateInput;
};
export type citiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.citiesScalarWhereWithAggregatesInput | Prisma.citiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.citiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.citiesScalarWhereWithAggregatesInput | Prisma.citiesScalarWhereWithAggregatesInput[];
    city_id?: Prisma.BigIntWithAggregatesFilter<"cities"> | bigint | number;
    region_id?: Prisma.BigIntWithAggregatesFilter<"cities"> | bigint | number;
    city_name?: Prisma.StringWithAggregatesFilter<"cities"> | string;
};
export type citiesCreateInput = {
    city_id?: bigint | number;
    city_name: string;
    addresses?: Prisma.addressesCreateNestedManyWithoutCitiesInput;
    regions: Prisma.regionsCreateNestedOneWithoutCitiesInput;
    warehouses?: Prisma.warehousesCreateNestedManyWithoutCitiesInput;
};
export type citiesUncheckedCreateInput = {
    city_id?: bigint | number;
    region_id: bigint | number;
    city_name: string;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCitiesInput;
    warehouses?: Prisma.warehousesUncheckedCreateNestedManyWithoutCitiesInput;
};
export type citiesUpdateInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.addressesUpdateManyWithoutCitiesNestedInput;
    regions?: Prisma.regionsUpdateOneRequiredWithoutCitiesNestedInput;
    warehouses?: Prisma.warehousesUpdateManyWithoutCitiesNestedInput;
};
export type citiesUncheckedUpdateInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCitiesNestedInput;
    warehouses?: Prisma.warehousesUncheckedUpdateManyWithoutCitiesNestedInput;
};
export type citiesCreateManyInput = {
    city_id?: bigint | number;
    region_id: bigint | number;
    city_name: string;
};
export type citiesUpdateManyMutationInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type citiesUncheckedUpdateManyInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CitiesScalarRelationFilter = {
    is?: Prisma.citiesWhereInput;
    isNot?: Prisma.citiesWhereInput;
};
export type citiesCountOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    city_name?: Prisma.SortOrder;
};
export type citiesAvgOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
};
export type citiesMaxOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    city_name?: Prisma.SortOrder;
};
export type citiesMinOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
    city_name?: Prisma.SortOrder;
};
export type citiesSumOrderByAggregateInput = {
    city_id?: Prisma.SortOrder;
    region_id?: Prisma.SortOrder;
};
export type CitiesListRelationFilter = {
    every?: Prisma.citiesWhereInput;
    some?: Prisma.citiesWhereInput;
    none?: Prisma.citiesWhereInput;
};
export type citiesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CitiesNullableScalarRelationFilter = {
    is?: Prisma.citiesWhereInput | null;
    isNot?: Prisma.citiesWhereInput | null;
};
export type citiesCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutAddressesInput, Prisma.citiesUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.citiesWhereUniqueInput;
};
export type citiesUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutAddressesInput, Prisma.citiesUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.citiesUpsertWithoutAddressesInput;
    connect?: Prisma.citiesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.citiesUpdateToOneWithWhereWithoutAddressesInput, Prisma.citiesUpdateWithoutAddressesInput>, Prisma.citiesUncheckedUpdateWithoutAddressesInput>;
};
export type citiesCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutRegionsInput, Prisma.citiesUncheckedCreateWithoutRegionsInput> | Prisma.citiesCreateWithoutRegionsInput[] | Prisma.citiesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutRegionsInput | Prisma.citiesCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.citiesCreateManyRegionsInputEnvelope;
    connect?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
};
export type citiesUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutRegionsInput, Prisma.citiesUncheckedCreateWithoutRegionsInput> | Prisma.citiesCreateWithoutRegionsInput[] | Prisma.citiesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutRegionsInput | Prisma.citiesCreateOrConnectWithoutRegionsInput[];
    createMany?: Prisma.citiesCreateManyRegionsInputEnvelope;
    connect?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
};
export type citiesUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutRegionsInput, Prisma.citiesUncheckedCreateWithoutRegionsInput> | Prisma.citiesCreateWithoutRegionsInput[] | Prisma.citiesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutRegionsInput | Prisma.citiesCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.citiesUpsertWithWhereUniqueWithoutRegionsInput | Prisma.citiesUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.citiesCreateManyRegionsInputEnvelope;
    set?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    disconnect?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    delete?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    connect?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    update?: Prisma.citiesUpdateWithWhereUniqueWithoutRegionsInput | Prisma.citiesUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.citiesUpdateManyWithWhereWithoutRegionsInput | Prisma.citiesUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.citiesScalarWhereInput | Prisma.citiesScalarWhereInput[];
};
export type citiesUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutRegionsInput, Prisma.citiesUncheckedCreateWithoutRegionsInput> | Prisma.citiesCreateWithoutRegionsInput[] | Prisma.citiesUncheckedCreateWithoutRegionsInput[];
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutRegionsInput | Prisma.citiesCreateOrConnectWithoutRegionsInput[];
    upsert?: Prisma.citiesUpsertWithWhereUniqueWithoutRegionsInput | Prisma.citiesUpsertWithWhereUniqueWithoutRegionsInput[];
    createMany?: Prisma.citiesCreateManyRegionsInputEnvelope;
    set?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    disconnect?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    delete?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    connect?: Prisma.citiesWhereUniqueInput | Prisma.citiesWhereUniqueInput[];
    update?: Prisma.citiesUpdateWithWhereUniqueWithoutRegionsInput | Prisma.citiesUpdateWithWhereUniqueWithoutRegionsInput[];
    updateMany?: Prisma.citiesUpdateManyWithWhereWithoutRegionsInput | Prisma.citiesUpdateManyWithWhereWithoutRegionsInput[];
    deleteMany?: Prisma.citiesScalarWhereInput | Prisma.citiesScalarWhereInput[];
};
export type citiesCreateNestedOneWithoutWarehousesInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutWarehousesInput, Prisma.citiesUncheckedCreateWithoutWarehousesInput>;
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutWarehousesInput;
    connect?: Prisma.citiesWhereUniqueInput;
};
export type citiesUpdateOneWithoutWarehousesNestedInput = {
    create?: Prisma.XOR<Prisma.citiesCreateWithoutWarehousesInput, Prisma.citiesUncheckedCreateWithoutWarehousesInput>;
    connectOrCreate?: Prisma.citiesCreateOrConnectWithoutWarehousesInput;
    upsert?: Prisma.citiesUpsertWithoutWarehousesInput;
    disconnect?: Prisma.citiesWhereInput | boolean;
    delete?: Prisma.citiesWhereInput | boolean;
    connect?: Prisma.citiesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.citiesUpdateToOneWithWhereWithoutWarehousesInput, Prisma.citiesUpdateWithoutWarehousesInput>, Prisma.citiesUncheckedUpdateWithoutWarehousesInput>;
};
export type citiesCreateWithoutAddressesInput = {
    city_id?: bigint | number;
    city_name: string;
    regions: Prisma.regionsCreateNestedOneWithoutCitiesInput;
    warehouses?: Prisma.warehousesCreateNestedManyWithoutCitiesInput;
};
export type citiesUncheckedCreateWithoutAddressesInput = {
    city_id?: bigint | number;
    region_id: bigint | number;
    city_name: string;
    warehouses?: Prisma.warehousesUncheckedCreateNestedManyWithoutCitiesInput;
};
export type citiesCreateOrConnectWithoutAddressesInput = {
    where: Prisma.citiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.citiesCreateWithoutAddressesInput, Prisma.citiesUncheckedCreateWithoutAddressesInput>;
};
export type citiesUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.citiesUpdateWithoutAddressesInput, Prisma.citiesUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.citiesCreateWithoutAddressesInput, Prisma.citiesUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.citiesWhereInput;
};
export type citiesUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.citiesWhereInput;
    data: Prisma.XOR<Prisma.citiesUpdateWithoutAddressesInput, Prisma.citiesUncheckedUpdateWithoutAddressesInput>;
};
export type citiesUpdateWithoutAddressesInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    regions?: Prisma.regionsUpdateOneRequiredWithoutCitiesNestedInput;
    warehouses?: Prisma.warehousesUpdateManyWithoutCitiesNestedInput;
};
export type citiesUncheckedUpdateWithoutAddressesInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouses?: Prisma.warehousesUncheckedUpdateManyWithoutCitiesNestedInput;
};
export type citiesCreateWithoutRegionsInput = {
    city_id?: bigint | number;
    city_name: string;
    addresses?: Prisma.addressesCreateNestedManyWithoutCitiesInput;
    warehouses?: Prisma.warehousesCreateNestedManyWithoutCitiesInput;
};
export type citiesUncheckedCreateWithoutRegionsInput = {
    city_id?: bigint | number;
    city_name: string;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCitiesInput;
    warehouses?: Prisma.warehousesUncheckedCreateNestedManyWithoutCitiesInput;
};
export type citiesCreateOrConnectWithoutRegionsInput = {
    where: Prisma.citiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.citiesCreateWithoutRegionsInput, Prisma.citiesUncheckedCreateWithoutRegionsInput>;
};
export type citiesCreateManyRegionsInputEnvelope = {
    data: Prisma.citiesCreateManyRegionsInput | Prisma.citiesCreateManyRegionsInput[];
    skipDuplicates?: boolean;
};
export type citiesUpsertWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.citiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.citiesUpdateWithoutRegionsInput, Prisma.citiesUncheckedUpdateWithoutRegionsInput>;
    create: Prisma.XOR<Prisma.citiesCreateWithoutRegionsInput, Prisma.citiesUncheckedCreateWithoutRegionsInput>;
};
export type citiesUpdateWithWhereUniqueWithoutRegionsInput = {
    where: Prisma.citiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.citiesUpdateWithoutRegionsInput, Prisma.citiesUncheckedUpdateWithoutRegionsInput>;
};
export type citiesUpdateManyWithWhereWithoutRegionsInput = {
    where: Prisma.citiesScalarWhereInput;
    data: Prisma.XOR<Prisma.citiesUpdateManyMutationInput, Prisma.citiesUncheckedUpdateManyWithoutRegionsInput>;
};
export type citiesScalarWhereInput = {
    AND?: Prisma.citiesScalarWhereInput | Prisma.citiesScalarWhereInput[];
    OR?: Prisma.citiesScalarWhereInput[];
    NOT?: Prisma.citiesScalarWhereInput | Prisma.citiesScalarWhereInput[];
    city_id?: Prisma.BigIntFilter<"cities"> | bigint | number;
    region_id?: Prisma.BigIntFilter<"cities"> | bigint | number;
    city_name?: Prisma.StringFilter<"cities"> | string;
};
export type citiesCreateWithoutWarehousesInput = {
    city_id?: bigint | number;
    city_name: string;
    addresses?: Prisma.addressesCreateNestedManyWithoutCitiesInput;
    regions: Prisma.regionsCreateNestedOneWithoutCitiesInput;
};
export type citiesUncheckedCreateWithoutWarehousesInput = {
    city_id?: bigint | number;
    region_id: bigint | number;
    city_name: string;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCitiesInput;
};
export type citiesCreateOrConnectWithoutWarehousesInput = {
    where: Prisma.citiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.citiesCreateWithoutWarehousesInput, Prisma.citiesUncheckedCreateWithoutWarehousesInput>;
};
export type citiesUpsertWithoutWarehousesInput = {
    update: Prisma.XOR<Prisma.citiesUpdateWithoutWarehousesInput, Prisma.citiesUncheckedUpdateWithoutWarehousesInput>;
    create: Prisma.XOR<Prisma.citiesCreateWithoutWarehousesInput, Prisma.citiesUncheckedCreateWithoutWarehousesInput>;
    where?: Prisma.citiesWhereInput;
};
export type citiesUpdateToOneWithWhereWithoutWarehousesInput = {
    where?: Prisma.citiesWhereInput;
    data: Prisma.XOR<Prisma.citiesUpdateWithoutWarehousesInput, Prisma.citiesUncheckedUpdateWithoutWarehousesInput>;
};
export type citiesUpdateWithoutWarehousesInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.addressesUpdateManyWithoutCitiesNestedInput;
    regions?: Prisma.regionsUpdateOneRequiredWithoutCitiesNestedInput;
};
export type citiesUncheckedUpdateWithoutWarehousesInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    region_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCitiesNestedInput;
};
export type citiesCreateManyRegionsInput = {
    city_id?: bigint | number;
    city_name: string;
};
export type citiesUpdateWithoutRegionsInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.addressesUpdateManyWithoutCitiesNestedInput;
    warehouses?: Prisma.warehousesUpdateManyWithoutCitiesNestedInput;
};
export type citiesUncheckedUpdateWithoutRegionsInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCitiesNestedInput;
    warehouses?: Prisma.warehousesUncheckedUpdateManyWithoutCitiesNestedInput;
};
export type citiesUncheckedUpdateManyWithoutRegionsInput = {
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CitiesCountOutputType = {
    addresses: number;
    warehouses: number;
};
export type CitiesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | CitiesCountOutputTypeCountAddressesArgs;
    warehouses?: boolean | CitiesCountOutputTypeCountWarehousesArgs;
};
export type CitiesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitiesCountOutputTypeSelect<ExtArgs> | null;
};
export type CitiesCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressesWhereInput;
};
export type CitiesCountOutputTypeCountWarehousesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warehousesWhereInput;
};
export type citiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    city_id?: boolean;
    region_id?: boolean;
    city_name?: boolean;
    addresses?: boolean | Prisma.cities$addressesArgs<ExtArgs>;
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.cities$warehousesArgs<ExtArgs>;
    _count?: boolean | Prisma.CitiesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cities"]>;
export type citiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    city_id?: boolean;
    region_id?: boolean;
    city_name?: boolean;
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cities"]>;
export type citiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    city_id?: boolean;
    region_id?: boolean;
    city_name?: boolean;
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cities"]>;
export type citiesSelectScalar = {
    city_id?: boolean;
    region_id?: boolean;
    city_name?: boolean;
};
export type citiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"city_id" | "region_id" | "city_name", ExtArgs["result"]["cities"]>;
export type citiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.cities$addressesArgs<ExtArgs>;
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
    warehouses?: boolean | Prisma.cities$warehousesArgs<ExtArgs>;
    _count?: boolean | Prisma.CitiesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type citiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
};
export type citiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    regions?: boolean | Prisma.regionsDefaultArgs<ExtArgs>;
};
export type $citiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cities";
    objects: {
        addresses: Prisma.$addressesPayload<ExtArgs>[];
        regions: Prisma.$regionsPayload<ExtArgs>;
        warehouses: Prisma.$warehousesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        city_id: bigint;
        region_id: bigint;
        city_name: string;
    }, ExtArgs["result"]["cities"]>;
    composites: {};
};
export type citiesGetPayload<S extends boolean | null | undefined | citiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$citiesPayload, S>;
export type citiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<citiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CitiesCountAggregateInputType | true;
};
export interface citiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cities'];
        meta: {
            name: 'cities';
        };
    };
    findUnique<T extends citiesFindUniqueArgs>(args: Prisma.SelectSubset<T, citiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, citiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends citiesFindFirstArgs>(args?: Prisma.SelectSubset<T, citiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, citiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends citiesFindManyArgs>(args?: Prisma.SelectSubset<T, citiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends citiesCreateArgs>(args: Prisma.SelectSubset<T, citiesCreateArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends citiesCreateManyArgs>(args?: Prisma.SelectSubset<T, citiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends citiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, citiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends citiesDeleteArgs>(args: Prisma.SelectSubset<T, citiesDeleteArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends citiesUpdateArgs>(args: Prisma.SelectSubset<T, citiesUpdateArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends citiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, citiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends citiesUpdateManyArgs>(args: Prisma.SelectSubset<T, citiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends citiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, citiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends citiesUpsertArgs>(args: Prisma.SelectSubset<T, citiesUpsertArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends citiesCountArgs>(args?: Prisma.Subset<T, citiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CitiesCountAggregateOutputType> : number>;
    aggregate<T extends CitiesAggregateArgs>(args: Prisma.Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>;
    groupBy<T extends citiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: citiesGroupByArgs['orderBy'];
    } : {
        orderBy?: citiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, citiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: citiesFieldRefs;
}
export interface Prisma__citiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    addresses<T extends Prisma.cities$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cities$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    regions<T extends Prisma.regionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.regionsDefaultArgs<ExtArgs>>): Prisma.Prisma__regionsClient<runtime.Types.Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouses<T extends Prisma.cities$warehousesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cities$warehousesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface citiesFieldRefs {
    readonly city_id: Prisma.FieldRef<"cities", 'BigInt'>;
    readonly region_id: Prisma.FieldRef<"cities", 'BigInt'>;
    readonly city_name: Prisma.FieldRef<"cities", 'String'>;
}
export type citiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    where: Prisma.citiesWhereUniqueInput;
};
export type citiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    where: Prisma.citiesWhereUniqueInput;
};
export type citiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type citiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.citiesCreateInput, Prisma.citiesUncheckedCreateInput>;
};
export type citiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.citiesCreateManyInput | Prisma.citiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type citiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    data: Prisma.citiesCreateManyInput | Prisma.citiesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.citiesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type citiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.citiesUpdateInput, Prisma.citiesUncheckedUpdateInput>;
    where: Prisma.citiesWhereUniqueInput;
};
export type citiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.citiesUpdateManyMutationInput, Prisma.citiesUncheckedUpdateManyInput>;
    where?: Prisma.citiesWhereInput;
    limit?: number;
};
export type citiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.citiesUpdateManyMutationInput, Prisma.citiesUncheckedUpdateManyInput>;
    where?: Prisma.citiesWhereInput;
    limit?: number;
    include?: Prisma.citiesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type citiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    where: Prisma.citiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.citiesCreateInput, Prisma.citiesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.citiesUpdateInput, Prisma.citiesUncheckedUpdateInput>;
};
export type citiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
    where: Prisma.citiesWhereUniqueInput;
};
export type citiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.citiesWhereInput;
    limit?: number;
};
export type cities$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    where?: Prisma.addressesWhereInput;
    orderBy?: Prisma.addressesOrderByWithRelationInput | Prisma.addressesOrderByWithRelationInput[];
    cursor?: Prisma.addressesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AddressesScalarFieldEnum | Prisma.AddressesScalarFieldEnum[];
};
export type cities$warehousesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warehousesSelect<ExtArgs> | null;
    omit?: Prisma.warehousesOmit<ExtArgs> | null;
    include?: Prisma.warehousesInclude<ExtArgs> | null;
    where?: Prisma.warehousesWhereInput;
    orderBy?: Prisma.warehousesOrderByWithRelationInput | Prisma.warehousesOrderByWithRelationInput[];
    cursor?: Prisma.warehousesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehousesScalarFieldEnum | Prisma.WarehousesScalarFieldEnum[];
};
export type citiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.citiesSelect<ExtArgs> | null;
    omit?: Prisma.citiesOmit<ExtArgs> | null;
    include?: Prisma.citiesInclude<ExtArgs> | null;
};
