import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type shipping_ratesModel = runtime.Types.Result.DefaultSelection<Prisma.$shipping_ratesPayload>;
export type AggregateShipping_rates = {
    _count: Shipping_ratesCountAggregateOutputType | null;
    _avg: Shipping_ratesAvgAggregateOutputType | null;
    _sum: Shipping_ratesSumAggregateOutputType | null;
    _min: Shipping_ratesMinAggregateOutputType | null;
    _max: Shipping_ratesMaxAggregateOutputType | null;
};
export type Shipping_ratesAvgAggregateOutputType = {
    rate_id: number | null;
    carrier_id: number | null;
    base_fee: runtime.Decimal | null;
};
export type Shipping_ratesSumAggregateOutputType = {
    rate_id: bigint | null;
    carrier_id: bigint | null;
    base_fee: runtime.Decimal | null;
};
export type Shipping_ratesMinAggregateOutputType = {
    rate_id: bigint | null;
    carrier_id: bigint | null;
    country_code: string | null;
    base_fee: runtime.Decimal | null;
};
export type Shipping_ratesMaxAggregateOutputType = {
    rate_id: bigint | null;
    carrier_id: bigint | null;
    country_code: string | null;
    base_fee: runtime.Decimal | null;
};
export type Shipping_ratesCountAggregateOutputType = {
    rate_id: number;
    carrier_id: number;
    country_code: number;
    base_fee: number;
    _all: number;
};
export type Shipping_ratesAvgAggregateInputType = {
    rate_id?: true;
    carrier_id?: true;
    base_fee?: true;
};
export type Shipping_ratesSumAggregateInputType = {
    rate_id?: true;
    carrier_id?: true;
    base_fee?: true;
};
export type Shipping_ratesMinAggregateInputType = {
    rate_id?: true;
    carrier_id?: true;
    country_code?: true;
    base_fee?: true;
};
export type Shipping_ratesMaxAggregateInputType = {
    rate_id?: true;
    carrier_id?: true;
    country_code?: true;
    base_fee?: true;
};
export type Shipping_ratesCountAggregateInputType = {
    rate_id?: true;
    carrier_id?: true;
    country_code?: true;
    base_fee?: true;
    _all?: true;
};
export type Shipping_ratesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipping_ratesWhereInput;
    orderBy?: Prisma.shipping_ratesOrderByWithRelationInput | Prisma.shipping_ratesOrderByWithRelationInput[];
    cursor?: Prisma.shipping_ratesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Shipping_ratesCountAggregateInputType;
    _avg?: Shipping_ratesAvgAggregateInputType;
    _sum?: Shipping_ratesSumAggregateInputType;
    _min?: Shipping_ratesMinAggregateInputType;
    _max?: Shipping_ratesMaxAggregateInputType;
};
export type GetShipping_ratesAggregateType<T extends Shipping_ratesAggregateArgs> = {
    [P in keyof T & keyof AggregateShipping_rates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipping_rates[P]> : Prisma.GetScalarType<T[P], AggregateShipping_rates[P]>;
};
export type shipping_ratesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipping_ratesWhereInput;
    orderBy?: Prisma.shipping_ratesOrderByWithAggregationInput | Prisma.shipping_ratesOrderByWithAggregationInput[];
    by: Prisma.Shipping_ratesScalarFieldEnum[] | Prisma.Shipping_ratesScalarFieldEnum;
    having?: Prisma.shipping_ratesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Shipping_ratesCountAggregateInputType | true;
    _avg?: Shipping_ratesAvgAggregateInputType;
    _sum?: Shipping_ratesSumAggregateInputType;
    _min?: Shipping_ratesMinAggregateInputType;
    _max?: Shipping_ratesMaxAggregateInputType;
};
export type Shipping_ratesGroupByOutputType = {
    rate_id: bigint;
    carrier_id: bigint;
    country_code: string;
    base_fee: runtime.Decimal;
    _count: Shipping_ratesCountAggregateOutputType | null;
    _avg: Shipping_ratesAvgAggregateOutputType | null;
    _sum: Shipping_ratesSumAggregateOutputType | null;
    _min: Shipping_ratesMinAggregateOutputType | null;
    _max: Shipping_ratesMaxAggregateOutputType | null;
};
export type GetShipping_ratesGroupByPayload<T extends shipping_ratesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Shipping_ratesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Shipping_ratesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Shipping_ratesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Shipping_ratesGroupByOutputType[P]>;
}>>;
export type shipping_ratesWhereInput = {
    AND?: Prisma.shipping_ratesWhereInput | Prisma.shipping_ratesWhereInput[];
    OR?: Prisma.shipping_ratesWhereInput[];
    NOT?: Prisma.shipping_ratesWhereInput | Prisma.shipping_ratesWhereInput[];
    rate_id?: Prisma.BigIntFilter<"shipping_rates"> | bigint | number;
    carrier_id?: Prisma.BigIntFilter<"shipping_rates"> | bigint | number;
    country_code?: Prisma.StringFilter<"shipping_rates"> | string;
    base_fee?: Prisma.DecimalFilter<"shipping_rates"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriers?: Prisma.XOR<Prisma.CarriersScalarRelationFilter, Prisma.carriersWhereInput>;
    countries?: Prisma.XOR<Prisma.CountriesScalarRelationFilter, Prisma.countriesWhereInput>;
};
export type shipping_ratesOrderByWithRelationInput = {
    rate_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    base_fee?: Prisma.SortOrder;
    carriers?: Prisma.carriersOrderByWithRelationInput;
    countries?: Prisma.countriesOrderByWithRelationInput;
};
export type shipping_ratesWhereUniqueInput = Prisma.AtLeast<{
    rate_id?: bigint | number;
    AND?: Prisma.shipping_ratesWhereInput | Prisma.shipping_ratesWhereInput[];
    OR?: Prisma.shipping_ratesWhereInput[];
    NOT?: Prisma.shipping_ratesWhereInput | Prisma.shipping_ratesWhereInput[];
    carrier_id?: Prisma.BigIntFilter<"shipping_rates"> | bigint | number;
    country_code?: Prisma.StringFilter<"shipping_rates"> | string;
    base_fee?: Prisma.DecimalFilter<"shipping_rates"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriers?: Prisma.XOR<Prisma.CarriersScalarRelationFilter, Prisma.carriersWhereInput>;
    countries?: Prisma.XOR<Prisma.CountriesScalarRelationFilter, Prisma.countriesWhereInput>;
}, "rate_id">;
export type shipping_ratesOrderByWithAggregationInput = {
    rate_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    base_fee?: Prisma.SortOrder;
    _count?: Prisma.shipping_ratesCountOrderByAggregateInput;
    _avg?: Prisma.shipping_ratesAvgOrderByAggregateInput;
    _max?: Prisma.shipping_ratesMaxOrderByAggregateInput;
    _min?: Prisma.shipping_ratesMinOrderByAggregateInput;
    _sum?: Prisma.shipping_ratesSumOrderByAggregateInput;
};
export type shipping_ratesScalarWhereWithAggregatesInput = {
    AND?: Prisma.shipping_ratesScalarWhereWithAggregatesInput | Prisma.shipping_ratesScalarWhereWithAggregatesInput[];
    OR?: Prisma.shipping_ratesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.shipping_ratesScalarWhereWithAggregatesInput | Prisma.shipping_ratesScalarWhereWithAggregatesInput[];
    rate_id?: Prisma.BigIntWithAggregatesFilter<"shipping_rates"> | bigint | number;
    carrier_id?: Prisma.BigIntWithAggregatesFilter<"shipping_rates"> | bigint | number;
    country_code?: Prisma.StringWithAggregatesFilter<"shipping_rates"> | string;
    base_fee?: Prisma.DecimalWithAggregatesFilter<"shipping_rates"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesCreateInput = {
    rate_id?: bigint | number;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriers: Prisma.carriersCreateNestedOneWithoutShipping_ratesInput;
    countries: Prisma.countriesCreateNestedOneWithoutShipping_ratesInput;
};
export type shipping_ratesUncheckedCreateInput = {
    rate_id?: bigint | number;
    carrier_id: bigint | number;
    country_code: string;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesUpdateInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriers?: Prisma.carriersUpdateOneRequiredWithoutShipping_ratesNestedInput;
    countries?: Prisma.countriesUpdateOneRequiredWithoutShipping_ratesNestedInput;
};
export type shipping_ratesUncheckedUpdateInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesCreateManyInput = {
    rate_id?: bigint | number;
    carrier_id: bigint | number;
    country_code: string;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesUpdateManyMutationInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesUncheckedUpdateManyInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Shipping_ratesListRelationFilter = {
    every?: Prisma.shipping_ratesWhereInput;
    some?: Prisma.shipping_ratesWhereInput;
    none?: Prisma.shipping_ratesWhereInput;
};
export type shipping_ratesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type shipping_ratesCountOrderByAggregateInput = {
    rate_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    base_fee?: Prisma.SortOrder;
};
export type shipping_ratesAvgOrderByAggregateInput = {
    rate_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    base_fee?: Prisma.SortOrder;
};
export type shipping_ratesMaxOrderByAggregateInput = {
    rate_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    base_fee?: Prisma.SortOrder;
};
export type shipping_ratesMinOrderByAggregateInput = {
    rate_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    base_fee?: Prisma.SortOrder;
};
export type shipping_ratesSumOrderByAggregateInput = {
    rate_id?: Prisma.SortOrder;
    carrier_id?: Prisma.SortOrder;
    base_fee?: Prisma.SortOrder;
};
export type shipping_ratesCreateNestedManyWithoutCarriersInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCarriersInput, Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput> | Prisma.shipping_ratesCreateWithoutCarriersInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput | Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput[];
    createMany?: Prisma.shipping_ratesCreateManyCarriersInputEnvelope;
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
};
export type shipping_ratesUncheckedCreateNestedManyWithoutCarriersInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCarriersInput, Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput> | Prisma.shipping_ratesCreateWithoutCarriersInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput | Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput[];
    createMany?: Prisma.shipping_ratesCreateManyCarriersInputEnvelope;
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
};
export type shipping_ratesUpdateManyWithoutCarriersNestedInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCarriersInput, Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput> | Prisma.shipping_ratesCreateWithoutCarriersInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput | Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput[];
    upsert?: Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCarriersInput | Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCarriersInput[];
    createMany?: Prisma.shipping_ratesCreateManyCarriersInputEnvelope;
    set?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    disconnect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    delete?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    update?: Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCarriersInput | Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCarriersInput[];
    updateMany?: Prisma.shipping_ratesUpdateManyWithWhereWithoutCarriersInput | Prisma.shipping_ratesUpdateManyWithWhereWithoutCarriersInput[];
    deleteMany?: Prisma.shipping_ratesScalarWhereInput | Prisma.shipping_ratesScalarWhereInput[];
};
export type shipping_ratesUncheckedUpdateManyWithoutCarriersNestedInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCarriersInput, Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput> | Prisma.shipping_ratesCreateWithoutCarriersInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput | Prisma.shipping_ratesCreateOrConnectWithoutCarriersInput[];
    upsert?: Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCarriersInput | Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCarriersInput[];
    createMany?: Prisma.shipping_ratesCreateManyCarriersInputEnvelope;
    set?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    disconnect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    delete?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    update?: Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCarriersInput | Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCarriersInput[];
    updateMany?: Prisma.shipping_ratesUpdateManyWithWhereWithoutCarriersInput | Prisma.shipping_ratesUpdateManyWithWhereWithoutCarriersInput[];
    deleteMany?: Prisma.shipping_ratesScalarWhereInput | Prisma.shipping_ratesScalarWhereInput[];
};
export type shipping_ratesCreateNestedManyWithoutCountriesInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCountriesInput, Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput> | Prisma.shipping_ratesCreateWithoutCountriesInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput | Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput[];
    createMany?: Prisma.shipping_ratesCreateManyCountriesInputEnvelope;
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
};
export type shipping_ratesUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCountriesInput, Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput> | Prisma.shipping_ratesCreateWithoutCountriesInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput | Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput[];
    createMany?: Prisma.shipping_ratesCreateManyCountriesInputEnvelope;
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
};
export type shipping_ratesUpdateManyWithoutCountriesNestedInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCountriesInput, Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput> | Prisma.shipping_ratesCreateWithoutCountriesInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput | Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput[];
    upsert?: Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCountriesInput | Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCountriesInput[];
    createMany?: Prisma.shipping_ratesCreateManyCountriesInputEnvelope;
    set?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    disconnect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    delete?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    update?: Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCountriesInput | Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCountriesInput[];
    updateMany?: Prisma.shipping_ratesUpdateManyWithWhereWithoutCountriesInput | Prisma.shipping_ratesUpdateManyWithWhereWithoutCountriesInput[];
    deleteMany?: Prisma.shipping_ratesScalarWhereInput | Prisma.shipping_ratesScalarWhereInput[];
};
export type shipping_ratesUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCountriesInput, Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput> | Prisma.shipping_ratesCreateWithoutCountriesInput[] | Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput[];
    connectOrCreate?: Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput | Prisma.shipping_ratesCreateOrConnectWithoutCountriesInput[];
    upsert?: Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCountriesInput | Prisma.shipping_ratesUpsertWithWhereUniqueWithoutCountriesInput[];
    createMany?: Prisma.shipping_ratesCreateManyCountriesInputEnvelope;
    set?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    disconnect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    delete?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    connect?: Prisma.shipping_ratesWhereUniqueInput | Prisma.shipping_ratesWhereUniqueInput[];
    update?: Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCountriesInput | Prisma.shipping_ratesUpdateWithWhereUniqueWithoutCountriesInput[];
    updateMany?: Prisma.shipping_ratesUpdateManyWithWhereWithoutCountriesInput | Prisma.shipping_ratesUpdateManyWithWhereWithoutCountriesInput[];
    deleteMany?: Prisma.shipping_ratesScalarWhereInput | Prisma.shipping_ratesScalarWhereInput[];
};
export type shipping_ratesCreateWithoutCarriersInput = {
    rate_id?: bigint | number;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    countries: Prisma.countriesCreateNestedOneWithoutShipping_ratesInput;
};
export type shipping_ratesUncheckedCreateWithoutCarriersInput = {
    rate_id?: bigint | number;
    country_code: string;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesCreateOrConnectWithoutCarriersInput = {
    where: Prisma.shipping_ratesWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCarriersInput, Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput>;
};
export type shipping_ratesCreateManyCarriersInputEnvelope = {
    data: Prisma.shipping_ratesCreateManyCarriersInput | Prisma.shipping_ratesCreateManyCarriersInput[];
    skipDuplicates?: boolean;
};
export type shipping_ratesUpsertWithWhereUniqueWithoutCarriersInput = {
    where: Prisma.shipping_ratesWhereUniqueInput;
    update: Prisma.XOR<Prisma.shipping_ratesUpdateWithoutCarriersInput, Prisma.shipping_ratesUncheckedUpdateWithoutCarriersInput>;
    create: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCarriersInput, Prisma.shipping_ratesUncheckedCreateWithoutCarriersInput>;
};
export type shipping_ratesUpdateWithWhereUniqueWithoutCarriersInput = {
    where: Prisma.shipping_ratesWhereUniqueInput;
    data: Prisma.XOR<Prisma.shipping_ratesUpdateWithoutCarriersInput, Prisma.shipping_ratesUncheckedUpdateWithoutCarriersInput>;
};
export type shipping_ratesUpdateManyWithWhereWithoutCarriersInput = {
    where: Prisma.shipping_ratesScalarWhereInput;
    data: Prisma.XOR<Prisma.shipping_ratesUpdateManyMutationInput, Prisma.shipping_ratesUncheckedUpdateManyWithoutCarriersInput>;
};
export type shipping_ratesScalarWhereInput = {
    AND?: Prisma.shipping_ratesScalarWhereInput | Prisma.shipping_ratesScalarWhereInput[];
    OR?: Prisma.shipping_ratesScalarWhereInput[];
    NOT?: Prisma.shipping_ratesScalarWhereInput | Prisma.shipping_ratesScalarWhereInput[];
    rate_id?: Prisma.BigIntFilter<"shipping_rates"> | bigint | number;
    carrier_id?: Prisma.BigIntFilter<"shipping_rates"> | bigint | number;
    country_code?: Prisma.StringFilter<"shipping_rates"> | string;
    base_fee?: Prisma.DecimalFilter<"shipping_rates"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesCreateWithoutCountriesInput = {
    rate_id?: bigint | number;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriers: Prisma.carriersCreateNestedOneWithoutShipping_ratesInput;
};
export type shipping_ratesUncheckedCreateWithoutCountriesInput = {
    rate_id?: bigint | number;
    carrier_id: bigint | number;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesCreateOrConnectWithoutCountriesInput = {
    where: Prisma.shipping_ratesWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCountriesInput, Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput>;
};
export type shipping_ratesCreateManyCountriesInputEnvelope = {
    data: Prisma.shipping_ratesCreateManyCountriesInput | Prisma.shipping_ratesCreateManyCountriesInput[];
    skipDuplicates?: boolean;
};
export type shipping_ratesUpsertWithWhereUniqueWithoutCountriesInput = {
    where: Prisma.shipping_ratesWhereUniqueInput;
    update: Prisma.XOR<Prisma.shipping_ratesUpdateWithoutCountriesInput, Prisma.shipping_ratesUncheckedUpdateWithoutCountriesInput>;
    create: Prisma.XOR<Prisma.shipping_ratesCreateWithoutCountriesInput, Prisma.shipping_ratesUncheckedCreateWithoutCountriesInput>;
};
export type shipping_ratesUpdateWithWhereUniqueWithoutCountriesInput = {
    where: Prisma.shipping_ratesWhereUniqueInput;
    data: Prisma.XOR<Prisma.shipping_ratesUpdateWithoutCountriesInput, Prisma.shipping_ratesUncheckedUpdateWithoutCountriesInput>;
};
export type shipping_ratesUpdateManyWithWhereWithoutCountriesInput = {
    where: Prisma.shipping_ratesScalarWhereInput;
    data: Prisma.XOR<Prisma.shipping_ratesUpdateManyMutationInput, Prisma.shipping_ratesUncheckedUpdateManyWithoutCountriesInput>;
};
export type shipping_ratesCreateManyCarriersInput = {
    rate_id?: bigint | number;
    country_code: string;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesUpdateWithoutCarriersInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    countries?: Prisma.countriesUpdateOneRequiredWithoutShipping_ratesNestedInput;
};
export type shipping_ratesUncheckedUpdateWithoutCarriersInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesUncheckedUpdateManyWithoutCarriersInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesCreateManyCountriesInput = {
    rate_id?: bigint | number;
    carrier_id: bigint | number;
    base_fee: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesUpdateWithoutCountriesInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriers?: Prisma.carriersUpdateOneRequiredWithoutShipping_ratesNestedInput;
};
export type shipping_ratesUncheckedUpdateWithoutCountriesInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesUncheckedUpdateManyWithoutCountriesInput = {
    rate_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    carrier_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    base_fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type shipping_ratesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    rate_id?: boolean;
    carrier_id?: boolean;
    country_code?: boolean;
    base_fee?: boolean;
    carriers?: boolean | Prisma.carriersDefaultArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipping_rates"]>;
export type shipping_ratesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    rate_id?: boolean;
    carrier_id?: boolean;
    country_code?: boolean;
    base_fee?: boolean;
    carriers?: boolean | Prisma.carriersDefaultArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipping_rates"]>;
export type shipping_ratesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    rate_id?: boolean;
    carrier_id?: boolean;
    country_code?: boolean;
    base_fee?: boolean;
    carriers?: boolean | Prisma.carriersDefaultArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipping_rates"]>;
export type shipping_ratesSelectScalar = {
    rate_id?: boolean;
    carrier_id?: boolean;
    country_code?: boolean;
    base_fee?: boolean;
};
export type shipping_ratesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"rate_id" | "carrier_id" | "country_code" | "base_fee", ExtArgs["result"]["shipping_rates"]>;
export type shipping_ratesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carriers?: boolean | Prisma.carriersDefaultArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
};
export type shipping_ratesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carriers?: boolean | Prisma.carriersDefaultArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
};
export type shipping_ratesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carriers?: boolean | Prisma.carriersDefaultArgs<ExtArgs>;
    countries?: boolean | Prisma.countriesDefaultArgs<ExtArgs>;
};
export type $shipping_ratesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "shipping_rates";
    objects: {
        carriers: Prisma.$carriersPayload<ExtArgs>;
        countries: Prisma.$countriesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        rate_id: bigint;
        carrier_id: bigint;
        country_code: string;
        base_fee: runtime.Decimal;
    }, ExtArgs["result"]["shipping_rates"]>;
    composites: {};
};
export type shipping_ratesGetPayload<S extends boolean | null | undefined | shipping_ratesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload, S>;
export type shipping_ratesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<shipping_ratesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Shipping_ratesCountAggregateInputType | true;
};
export interface shipping_ratesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['shipping_rates'];
        meta: {
            name: 'shipping_rates';
        };
    };
    findUnique<T extends shipping_ratesFindUniqueArgs>(args: Prisma.SelectSubset<T, shipping_ratesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends shipping_ratesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, shipping_ratesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends shipping_ratesFindFirstArgs>(args?: Prisma.SelectSubset<T, shipping_ratesFindFirstArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends shipping_ratesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, shipping_ratesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends shipping_ratesFindManyArgs>(args?: Prisma.SelectSubset<T, shipping_ratesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends shipping_ratesCreateArgs>(args: Prisma.SelectSubset<T, shipping_ratesCreateArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends shipping_ratesCreateManyArgs>(args?: Prisma.SelectSubset<T, shipping_ratesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends shipping_ratesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, shipping_ratesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends shipping_ratesDeleteArgs>(args: Prisma.SelectSubset<T, shipping_ratesDeleteArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends shipping_ratesUpdateArgs>(args: Prisma.SelectSubset<T, shipping_ratesUpdateArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends shipping_ratesDeleteManyArgs>(args?: Prisma.SelectSubset<T, shipping_ratesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends shipping_ratesUpdateManyArgs>(args: Prisma.SelectSubset<T, shipping_ratesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends shipping_ratesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, shipping_ratesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends shipping_ratesUpsertArgs>(args: Prisma.SelectSubset<T, shipping_ratesUpsertArgs<ExtArgs>>): Prisma.Prisma__shipping_ratesClient<runtime.Types.Result.GetResult<Prisma.$shipping_ratesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends shipping_ratesCountArgs>(args?: Prisma.Subset<T, shipping_ratesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Shipping_ratesCountAggregateOutputType> : number>;
    aggregate<T extends Shipping_ratesAggregateArgs>(args: Prisma.Subset<T, Shipping_ratesAggregateArgs>): Prisma.PrismaPromise<GetShipping_ratesAggregateType<T>>;
    groupBy<T extends shipping_ratesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: shipping_ratesGroupByArgs['orderBy'];
    } : {
        orderBy?: shipping_ratesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, shipping_ratesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipping_ratesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: shipping_ratesFieldRefs;
}
export interface Prisma__shipping_ratesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    carriers<T extends Prisma.carriersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carriersDefaultArgs<ExtArgs>>): Prisma.Prisma__carriersClient<runtime.Types.Result.GetResult<Prisma.$carriersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    countries<T extends Prisma.countriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.countriesDefaultArgs<ExtArgs>>): Prisma.Prisma__countriesClient<runtime.Types.Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface shipping_ratesFieldRefs {
    readonly rate_id: Prisma.FieldRef<"shipping_rates", 'BigInt'>;
    readonly carrier_id: Prisma.FieldRef<"shipping_rates", 'BigInt'>;
    readonly country_code: Prisma.FieldRef<"shipping_rates", 'String'>;
    readonly base_fee: Prisma.FieldRef<"shipping_rates", 'Decimal'>;
}
export type shipping_ratesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
    where: Prisma.shipping_ratesWhereUniqueInput;
};
export type shipping_ratesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
    where: Prisma.shipping_ratesWhereUniqueInput;
};
export type shipping_ratesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type shipping_ratesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type shipping_ratesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type shipping_ratesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipping_ratesCreateInput, Prisma.shipping_ratesUncheckedCreateInput>;
};
export type shipping_ratesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.shipping_ratesCreateManyInput | Prisma.shipping_ratesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type shipping_ratesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    data: Prisma.shipping_ratesCreateManyInput | Prisma.shipping_ratesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.shipping_ratesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type shipping_ratesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipping_ratesUpdateInput, Prisma.shipping_ratesUncheckedUpdateInput>;
    where: Prisma.shipping_ratesWhereUniqueInput;
};
export type shipping_ratesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.shipping_ratesUpdateManyMutationInput, Prisma.shipping_ratesUncheckedUpdateManyInput>;
    where?: Prisma.shipping_ratesWhereInput;
    limit?: number;
};
export type shipping_ratesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipping_ratesUpdateManyMutationInput, Prisma.shipping_ratesUncheckedUpdateManyInput>;
    where?: Prisma.shipping_ratesWhereInput;
    limit?: number;
    include?: Prisma.shipping_ratesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type shipping_ratesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
    where: Prisma.shipping_ratesWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipping_ratesCreateInput, Prisma.shipping_ratesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.shipping_ratesUpdateInput, Prisma.shipping_ratesUncheckedUpdateInput>;
};
export type shipping_ratesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
    where: Prisma.shipping_ratesWhereUniqueInput;
};
export type shipping_ratesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipping_ratesWhereInput;
    limit?: number;
};
export type shipping_ratesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipping_ratesSelect<ExtArgs> | null;
    omit?: Prisma.shipping_ratesOmit<ExtArgs> | null;
    include?: Prisma.shipping_ratesInclude<ExtArgs> | null;
};
