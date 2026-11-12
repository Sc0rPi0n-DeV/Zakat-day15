import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type addressesModel = runtime.Types.Result.DefaultSelection<Prisma.$addressesPayload>;
export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null;
    _avg: AddressesAvgAggregateOutputType | null;
    _sum: AddressesSumAggregateOutputType | null;
    _min: AddressesMinAggregateOutputType | null;
    _max: AddressesMaxAggregateOutputType | null;
};
export type AddressesAvgAggregateOutputType = {
    address_id: number | null;
    customer_id: number | null;
    city_id: number | null;
};
export type AddressesSumAggregateOutputType = {
    address_id: bigint | null;
    customer_id: bigint | null;
    city_id: bigint | null;
};
export type AddressesMinAggregateOutputType = {
    address_id: bigint | null;
    customer_id: bigint | null;
    city_id: bigint | null;
    street_address: string | null;
    postal_code: string | null;
    is_default: boolean | null;
};
export type AddressesMaxAggregateOutputType = {
    address_id: bigint | null;
    customer_id: bigint | null;
    city_id: bigint | null;
    street_address: string | null;
    postal_code: string | null;
    is_default: boolean | null;
};
export type AddressesCountAggregateOutputType = {
    address_id: number;
    customer_id: number;
    city_id: number;
    street_address: number;
    postal_code: number;
    is_default: number;
    _all: number;
};
export type AddressesAvgAggregateInputType = {
    address_id?: true;
    customer_id?: true;
    city_id?: true;
};
export type AddressesSumAggregateInputType = {
    address_id?: true;
    customer_id?: true;
    city_id?: true;
};
export type AddressesMinAggregateInputType = {
    address_id?: true;
    customer_id?: true;
    city_id?: true;
    street_address?: true;
    postal_code?: true;
    is_default?: true;
};
export type AddressesMaxAggregateInputType = {
    address_id?: true;
    customer_id?: true;
    city_id?: true;
    street_address?: true;
    postal_code?: true;
    is_default?: true;
};
export type AddressesCountAggregateInputType = {
    address_id?: true;
    customer_id?: true;
    city_id?: true;
    street_address?: true;
    postal_code?: true;
    is_default?: true;
    _all?: true;
};
export type AddressesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressesWhereInput;
    orderBy?: Prisma.addressesOrderByWithRelationInput | Prisma.addressesOrderByWithRelationInput[];
    cursor?: Prisma.addressesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AddressesCountAggregateInputType;
    _avg?: AddressesAvgAggregateInputType;
    _sum?: AddressesSumAggregateInputType;
    _min?: AddressesMinAggregateInputType;
    _max?: AddressesMaxAggregateInputType;
};
export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
    [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAddresses[P]> : Prisma.GetScalarType<T[P], AggregateAddresses[P]>;
};
export type addressesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressesWhereInput;
    orderBy?: Prisma.addressesOrderByWithAggregationInput | Prisma.addressesOrderByWithAggregationInput[];
    by: Prisma.AddressesScalarFieldEnum[] | Prisma.AddressesScalarFieldEnum;
    having?: Prisma.addressesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressesCountAggregateInputType | true;
    _avg?: AddressesAvgAggregateInputType;
    _sum?: AddressesSumAggregateInputType;
    _min?: AddressesMinAggregateInputType;
    _max?: AddressesMaxAggregateInputType;
};
export type AddressesGroupByOutputType = {
    address_id: bigint;
    customer_id: bigint;
    city_id: bigint;
    street_address: string;
    postal_code: string | null;
    is_default: boolean;
    _count: AddressesCountAggregateOutputType | null;
    _avg: AddressesAvgAggregateOutputType | null;
    _sum: AddressesSumAggregateOutputType | null;
    _min: AddressesMinAggregateOutputType | null;
    _max: AddressesMaxAggregateOutputType | null;
};
export type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AddressesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AddressesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AddressesGroupByOutputType[P]>;
}>>;
export type addressesWhereInput = {
    AND?: Prisma.addressesWhereInput | Prisma.addressesWhereInput[];
    OR?: Prisma.addressesWhereInput[];
    NOT?: Prisma.addressesWhereInput | Prisma.addressesWhereInput[];
    address_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    city_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    street_address?: Prisma.StringFilter<"addresses"> | string;
    postal_code?: Prisma.StringNullableFilter<"addresses"> | string | null;
    is_default?: Prisma.BoolFilter<"addresses"> | boolean;
    cities?: Prisma.XOR<Prisma.CitiesScalarRelationFilter, Prisma.citiesWhereInput>;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    orders?: Prisma.OrdersListRelationFilter;
};
export type addressesOrderByWithRelationInput = {
    address_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    street_address?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    cities?: Prisma.citiesOrderByWithRelationInput;
    customers?: Prisma.customersOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
};
export type addressesWhereUniqueInput = Prisma.AtLeast<{
    address_id?: bigint | number;
    AND?: Prisma.addressesWhereInput | Prisma.addressesWhereInput[];
    OR?: Prisma.addressesWhereInput[];
    NOT?: Prisma.addressesWhereInput | Prisma.addressesWhereInput[];
    customer_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    city_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    street_address?: Prisma.StringFilter<"addresses"> | string;
    postal_code?: Prisma.StringNullableFilter<"addresses"> | string | null;
    is_default?: Prisma.BoolFilter<"addresses"> | boolean;
    cities?: Prisma.XOR<Prisma.CitiesScalarRelationFilter, Prisma.citiesWhereInput>;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    orders?: Prisma.OrdersListRelationFilter;
}, "address_id">;
export type addressesOrderByWithAggregationInput = {
    address_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    street_address?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
    _count?: Prisma.addressesCountOrderByAggregateInput;
    _avg?: Prisma.addressesAvgOrderByAggregateInput;
    _max?: Prisma.addressesMaxOrderByAggregateInput;
    _min?: Prisma.addressesMinOrderByAggregateInput;
    _sum?: Prisma.addressesSumOrderByAggregateInput;
};
export type addressesScalarWhereWithAggregatesInput = {
    AND?: Prisma.addressesScalarWhereWithAggregatesInput | Prisma.addressesScalarWhereWithAggregatesInput[];
    OR?: Prisma.addressesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.addressesScalarWhereWithAggregatesInput | Prisma.addressesScalarWhereWithAggregatesInput[];
    address_id?: Prisma.BigIntWithAggregatesFilter<"addresses"> | bigint | number;
    customer_id?: Prisma.BigIntWithAggregatesFilter<"addresses"> | bigint | number;
    city_id?: Prisma.BigIntWithAggregatesFilter<"addresses"> | bigint | number;
    street_address?: Prisma.StringWithAggregatesFilter<"addresses"> | string;
    postal_code?: Prisma.StringNullableWithAggregatesFilter<"addresses"> | string | null;
    is_default?: Prisma.BoolWithAggregatesFilter<"addresses"> | boolean;
};
export type addressesCreateInput = {
    address_id?: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
    cities: Prisma.citiesCreateNestedOneWithoutAddressesInput;
    customers: Prisma.customersCreateNestedOneWithoutAddressesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutAddressesInput;
};
export type addressesUncheckedCreateInput = {
    address_id?: bigint | number;
    customer_id: bigint | number;
    city_id: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutAddressesInput;
};
export type addressesUpdateInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cities?: Prisma.citiesUpdateOneRequiredWithoutAddressesNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutAddressesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutAddressesNestedInput;
};
export type addressesUncheckedUpdateInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutAddressesNestedInput;
};
export type addressesCreateManyInput = {
    address_id?: bigint | number;
    customer_id: bigint | number;
    city_id: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
};
export type addressesUpdateManyMutationInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type addressesUncheckedUpdateManyInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type addressesCountOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    street_address?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type addressesAvgOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type addressesMaxOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    street_address?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type addressesMinOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
    street_address?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    is_default?: Prisma.SortOrder;
};
export type addressesSumOrderByAggregateInput = {
    address_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    city_id?: Prisma.SortOrder;
};
export type AddressesListRelationFilter = {
    every?: Prisma.addressesWhereInput;
    some?: Prisma.addressesWhereInput;
    none?: Prisma.addressesWhereInput;
};
export type addressesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AddressesNullableScalarRelationFilter = {
    is?: Prisma.addressesWhereInput | null;
    isNot?: Prisma.addressesWhereInput | null;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type addressesCreateNestedManyWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCitiesInput, Prisma.addressesUncheckedCreateWithoutCitiesInput> | Prisma.addressesCreateWithoutCitiesInput[] | Prisma.addressesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCitiesInput | Prisma.addressesCreateOrConnectWithoutCitiesInput[];
    createMany?: Prisma.addressesCreateManyCitiesInputEnvelope;
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
};
export type addressesUncheckedCreateNestedManyWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCitiesInput, Prisma.addressesUncheckedCreateWithoutCitiesInput> | Prisma.addressesCreateWithoutCitiesInput[] | Prisma.addressesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCitiesInput | Prisma.addressesCreateOrConnectWithoutCitiesInput[];
    createMany?: Prisma.addressesCreateManyCitiesInputEnvelope;
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
};
export type addressesUpdateManyWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCitiesInput, Prisma.addressesUncheckedCreateWithoutCitiesInput> | Prisma.addressesCreateWithoutCitiesInput[] | Prisma.addressesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCitiesInput | Prisma.addressesCreateOrConnectWithoutCitiesInput[];
    upsert?: Prisma.addressesUpsertWithWhereUniqueWithoutCitiesInput | Prisma.addressesUpsertWithWhereUniqueWithoutCitiesInput[];
    createMany?: Prisma.addressesCreateManyCitiesInputEnvelope;
    set?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    disconnect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    delete?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    update?: Prisma.addressesUpdateWithWhereUniqueWithoutCitiesInput | Prisma.addressesUpdateWithWhereUniqueWithoutCitiesInput[];
    updateMany?: Prisma.addressesUpdateManyWithWhereWithoutCitiesInput | Prisma.addressesUpdateManyWithWhereWithoutCitiesInput[];
    deleteMany?: Prisma.addressesScalarWhereInput | Prisma.addressesScalarWhereInput[];
};
export type addressesUncheckedUpdateManyWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCitiesInput, Prisma.addressesUncheckedCreateWithoutCitiesInput> | Prisma.addressesCreateWithoutCitiesInput[] | Prisma.addressesUncheckedCreateWithoutCitiesInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCitiesInput | Prisma.addressesCreateOrConnectWithoutCitiesInput[];
    upsert?: Prisma.addressesUpsertWithWhereUniqueWithoutCitiesInput | Prisma.addressesUpsertWithWhereUniqueWithoutCitiesInput[];
    createMany?: Prisma.addressesCreateManyCitiesInputEnvelope;
    set?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    disconnect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    delete?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    update?: Prisma.addressesUpdateWithWhereUniqueWithoutCitiesInput | Prisma.addressesUpdateWithWhereUniqueWithoutCitiesInput[];
    updateMany?: Prisma.addressesUpdateManyWithWhereWithoutCitiesInput | Prisma.addressesUpdateManyWithWhereWithoutCitiesInput[];
    deleteMany?: Prisma.addressesScalarWhereInput | Prisma.addressesScalarWhereInput[];
};
export type addressesCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCustomersInput, Prisma.addressesUncheckedCreateWithoutCustomersInput> | Prisma.addressesCreateWithoutCustomersInput[] | Prisma.addressesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCustomersInput | Prisma.addressesCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.addressesCreateManyCustomersInputEnvelope;
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
};
export type addressesUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCustomersInput, Prisma.addressesUncheckedCreateWithoutCustomersInput> | Prisma.addressesCreateWithoutCustomersInput[] | Prisma.addressesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCustomersInput | Prisma.addressesCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.addressesCreateManyCustomersInputEnvelope;
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
};
export type addressesUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCustomersInput, Prisma.addressesUncheckedCreateWithoutCustomersInput> | Prisma.addressesCreateWithoutCustomersInput[] | Prisma.addressesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCustomersInput | Prisma.addressesCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.addressesUpsertWithWhereUniqueWithoutCustomersInput | Prisma.addressesUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.addressesCreateManyCustomersInputEnvelope;
    set?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    disconnect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    delete?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    update?: Prisma.addressesUpdateWithWhereUniqueWithoutCustomersInput | Prisma.addressesUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.addressesUpdateManyWithWhereWithoutCustomersInput | Prisma.addressesUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.addressesScalarWhereInput | Prisma.addressesScalarWhereInput[];
};
export type addressesUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutCustomersInput, Prisma.addressesUncheckedCreateWithoutCustomersInput> | Prisma.addressesCreateWithoutCustomersInput[] | Prisma.addressesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutCustomersInput | Prisma.addressesCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.addressesUpsertWithWhereUniqueWithoutCustomersInput | Prisma.addressesUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.addressesCreateManyCustomersInputEnvelope;
    set?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    disconnect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    delete?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    connect?: Prisma.addressesWhereUniqueInput | Prisma.addressesWhereUniqueInput[];
    update?: Prisma.addressesUpdateWithWhereUniqueWithoutCustomersInput | Prisma.addressesUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.addressesUpdateManyWithWhereWithoutCustomersInput | Prisma.addressesUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.addressesScalarWhereInput | Prisma.addressesScalarWhereInput[];
};
export type addressesCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutOrdersInput, Prisma.addressesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.addressesWhereUniqueInput;
};
export type addressesUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.addressesCreateWithoutOrdersInput, Prisma.addressesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.addressesCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.addressesUpsertWithoutOrdersInput;
    disconnect?: Prisma.addressesWhereInput | boolean;
    delete?: Prisma.addressesWhereInput | boolean;
    connect?: Prisma.addressesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.addressesUpdateToOneWithWhereWithoutOrdersInput, Prisma.addressesUpdateWithoutOrdersInput>, Prisma.addressesUncheckedUpdateWithoutOrdersInput>;
};
export type addressesCreateWithoutCitiesInput = {
    address_id?: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
    customers: Prisma.customersCreateNestedOneWithoutAddressesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutAddressesInput;
};
export type addressesUncheckedCreateWithoutCitiesInput = {
    address_id?: bigint | number;
    customer_id: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutAddressesInput;
};
export type addressesCreateOrConnectWithoutCitiesInput = {
    where: Prisma.addressesWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressesCreateWithoutCitiesInput, Prisma.addressesUncheckedCreateWithoutCitiesInput>;
};
export type addressesCreateManyCitiesInputEnvelope = {
    data: Prisma.addressesCreateManyCitiesInput | Prisma.addressesCreateManyCitiesInput[];
    skipDuplicates?: boolean;
};
export type addressesUpsertWithWhereUniqueWithoutCitiesInput = {
    where: Prisma.addressesWhereUniqueInput;
    update: Prisma.XOR<Prisma.addressesUpdateWithoutCitiesInput, Prisma.addressesUncheckedUpdateWithoutCitiesInput>;
    create: Prisma.XOR<Prisma.addressesCreateWithoutCitiesInput, Prisma.addressesUncheckedCreateWithoutCitiesInput>;
};
export type addressesUpdateWithWhereUniqueWithoutCitiesInput = {
    where: Prisma.addressesWhereUniqueInput;
    data: Prisma.XOR<Prisma.addressesUpdateWithoutCitiesInput, Prisma.addressesUncheckedUpdateWithoutCitiesInput>;
};
export type addressesUpdateManyWithWhereWithoutCitiesInput = {
    where: Prisma.addressesScalarWhereInput;
    data: Prisma.XOR<Prisma.addressesUpdateManyMutationInput, Prisma.addressesUncheckedUpdateManyWithoutCitiesInput>;
};
export type addressesScalarWhereInput = {
    AND?: Prisma.addressesScalarWhereInput | Prisma.addressesScalarWhereInput[];
    OR?: Prisma.addressesScalarWhereInput[];
    NOT?: Prisma.addressesScalarWhereInput | Prisma.addressesScalarWhereInput[];
    address_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    city_id?: Prisma.BigIntFilter<"addresses"> | bigint | number;
    street_address?: Prisma.StringFilter<"addresses"> | string;
    postal_code?: Prisma.StringNullableFilter<"addresses"> | string | null;
    is_default?: Prisma.BoolFilter<"addresses"> | boolean;
};
export type addressesCreateWithoutCustomersInput = {
    address_id?: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
    cities: Prisma.citiesCreateNestedOneWithoutAddressesInput;
    orders?: Prisma.ordersCreateNestedManyWithoutAddressesInput;
};
export type addressesUncheckedCreateWithoutCustomersInput = {
    address_id?: bigint | number;
    city_id: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutAddressesInput;
};
export type addressesCreateOrConnectWithoutCustomersInput = {
    where: Prisma.addressesWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressesCreateWithoutCustomersInput, Prisma.addressesUncheckedCreateWithoutCustomersInput>;
};
export type addressesCreateManyCustomersInputEnvelope = {
    data: Prisma.addressesCreateManyCustomersInput | Prisma.addressesCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type addressesUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.addressesWhereUniqueInput;
    update: Prisma.XOR<Prisma.addressesUpdateWithoutCustomersInput, Prisma.addressesUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.addressesCreateWithoutCustomersInput, Prisma.addressesUncheckedCreateWithoutCustomersInput>;
};
export type addressesUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.addressesWhereUniqueInput;
    data: Prisma.XOR<Prisma.addressesUpdateWithoutCustomersInput, Prisma.addressesUncheckedUpdateWithoutCustomersInput>;
};
export type addressesUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.addressesScalarWhereInput;
    data: Prisma.XOR<Prisma.addressesUpdateManyMutationInput, Prisma.addressesUncheckedUpdateManyWithoutCustomersInput>;
};
export type addressesCreateWithoutOrdersInput = {
    address_id?: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
    cities: Prisma.citiesCreateNestedOneWithoutAddressesInput;
    customers: Prisma.customersCreateNestedOneWithoutAddressesInput;
};
export type addressesUncheckedCreateWithoutOrdersInput = {
    address_id?: bigint | number;
    customer_id: bigint | number;
    city_id: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
};
export type addressesCreateOrConnectWithoutOrdersInput = {
    where: Prisma.addressesWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressesCreateWithoutOrdersInput, Prisma.addressesUncheckedCreateWithoutOrdersInput>;
};
export type addressesUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.addressesUpdateWithoutOrdersInput, Prisma.addressesUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.addressesCreateWithoutOrdersInput, Prisma.addressesUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.addressesWhereInput;
};
export type addressesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.addressesWhereInput;
    data: Prisma.XOR<Prisma.addressesUpdateWithoutOrdersInput, Prisma.addressesUncheckedUpdateWithoutOrdersInput>;
};
export type addressesUpdateWithoutOrdersInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cities?: Prisma.citiesUpdateOneRequiredWithoutAddressesNestedInput;
    customers?: Prisma.customersUpdateOneRequiredWithoutAddressesNestedInput;
};
export type addressesUncheckedUpdateWithoutOrdersInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type addressesCreateManyCitiesInput = {
    address_id?: bigint | number;
    customer_id: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
};
export type addressesUpdateWithoutCitiesInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    customers?: Prisma.customersUpdateOneRequiredWithoutAddressesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutAddressesNestedInput;
};
export type addressesUncheckedUpdateWithoutCitiesInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutAddressesNestedInput;
};
export type addressesUncheckedUpdateManyWithoutCitiesInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type addressesCreateManyCustomersInput = {
    address_id?: bigint | number;
    city_id: bigint | number;
    street_address: string;
    postal_code?: string | null;
    is_default?: boolean;
};
export type addressesUpdateWithoutCustomersInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cities?: Prisma.citiesUpdateOneRequiredWithoutAddressesNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutAddressesNestedInput;
};
export type addressesUncheckedUpdateWithoutCustomersInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutAddressesNestedInput;
};
export type addressesUncheckedUpdateManyWithoutCustomersInput = {
    address_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    city_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    street_address?: Prisma.StringFieldUpdateOperationsInput | string;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_default?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AddressesCountOutputType = {
    orders: number;
};
export type AddressesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | AddressesCountOutputTypeCountOrdersArgs;
};
export type AddressesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AddressesCountOutputTypeSelect<ExtArgs> | null;
};
export type AddressesCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type addressesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    address_id?: boolean;
    customer_id?: boolean;
    city_id?: boolean;
    street_address?: boolean;
    postal_code?: boolean;
    is_default?: boolean;
    cities?: boolean | Prisma.citiesDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.addresses$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.AddressesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["addresses"]>;
export type addressesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    address_id?: boolean;
    customer_id?: boolean;
    city_id?: boolean;
    street_address?: boolean;
    postal_code?: boolean;
    is_default?: boolean;
    cities?: boolean | Prisma.citiesDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["addresses"]>;
export type addressesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    address_id?: boolean;
    customer_id?: boolean;
    city_id?: boolean;
    street_address?: boolean;
    postal_code?: boolean;
    is_default?: boolean;
    cities?: boolean | Prisma.citiesDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["addresses"]>;
export type addressesSelectScalar = {
    address_id?: boolean;
    customer_id?: boolean;
    city_id?: boolean;
    street_address?: boolean;
    postal_code?: boolean;
    is_default?: boolean;
};
export type addressesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"address_id" | "customer_id" | "city_id" | "street_address" | "postal_code" | "is_default", ExtArgs["result"]["addresses"]>;
export type addressesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | Prisma.citiesDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.addresses$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.AddressesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type addressesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | Prisma.citiesDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
};
export type addressesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | Prisma.citiesDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
};
export type $addressesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "addresses";
    objects: {
        cities: Prisma.$citiesPayload<ExtArgs>;
        customers: Prisma.$customersPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        address_id: bigint;
        customer_id: bigint;
        city_id: bigint;
        street_address: string;
        postal_code: string | null;
        is_default: boolean;
    }, ExtArgs["result"]["addresses"]>;
    composites: {};
};
export type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$addressesPayload, S>;
export type addressesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AddressesCountAggregateInputType | true;
};
export interface addressesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['addresses'];
        meta: {
            name: 'addresses';
        };
    };
    findUnique<T extends addressesFindUniqueArgs>(args: Prisma.SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends addressesFindFirstArgs>(args?: Prisma.SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends addressesFindManyArgs>(args?: Prisma.SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends addressesCreateArgs>(args: Prisma.SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends addressesCreateManyArgs>(args?: Prisma.SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends addressesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, addressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends addressesDeleteArgs>(args: Prisma.SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends addressesUpdateArgs>(args: Prisma.SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends addressesDeleteManyArgs>(args?: Prisma.SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends addressesUpdateManyArgs>(args: Prisma.SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends addressesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, addressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends addressesUpsertArgs>(args: Prisma.SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma.Prisma__addressesClient<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends addressesCountArgs>(args?: Prisma.Subset<T, addressesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AddressesCountAggregateOutputType> : number>;
    aggregate<T extends AddressesAggregateArgs>(args: Prisma.Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>;
    groupBy<T extends addressesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: addressesGroupByArgs['orderBy'];
    } : {
        orderBy?: addressesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: addressesFieldRefs;
}
export interface Prisma__addressesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cities<T extends Prisma.citiesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.citiesDefaultArgs<ExtArgs>>): Prisma.Prisma__citiesClient<runtime.Types.Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customers<T extends Prisma.customersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customersDefaultArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.addresses$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.addresses$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface addressesFieldRefs {
    readonly address_id: Prisma.FieldRef<"addresses", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"addresses", 'BigInt'>;
    readonly city_id: Prisma.FieldRef<"addresses", 'BigInt'>;
    readonly street_address: Prisma.FieldRef<"addresses", 'String'>;
    readonly postal_code: Prisma.FieldRef<"addresses", 'String'>;
    readonly is_default: Prisma.FieldRef<"addresses", 'Boolean'>;
}
export type addressesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    where: Prisma.addressesWhereUniqueInput;
};
export type addressesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    where: Prisma.addressesWhereUniqueInput;
};
export type addressesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type addressesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type addressesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type addressesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.addressesCreateInput, Prisma.addressesUncheckedCreateInput>;
};
export type addressesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.addressesCreateManyInput | Prisma.addressesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type addressesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    data: Prisma.addressesCreateManyInput | Prisma.addressesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.addressesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type addressesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.addressesUpdateInput, Prisma.addressesUncheckedUpdateInput>;
    where: Prisma.addressesWhereUniqueInput;
};
export type addressesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.addressesUpdateManyMutationInput, Prisma.addressesUncheckedUpdateManyInput>;
    where?: Prisma.addressesWhereInput;
    limit?: number;
};
export type addressesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.addressesUpdateManyMutationInput, Prisma.addressesUncheckedUpdateManyInput>;
    where?: Prisma.addressesWhereInput;
    limit?: number;
    include?: Prisma.addressesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type addressesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    where: Prisma.addressesWhereUniqueInput;
    create: Prisma.XOR<Prisma.addressesCreateInput, Prisma.addressesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.addressesUpdateInput, Prisma.addressesUncheckedUpdateInput>;
};
export type addressesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
    where: Prisma.addressesWhereUniqueInput;
};
export type addressesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressesWhereInput;
    limit?: number;
};
export type addresses$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type addressesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.addressesSelect<ExtArgs> | null;
    omit?: Prisma.addressesOmit<ExtArgs> | null;
    include?: Prisma.addressesInclude<ExtArgs> | null;
};
