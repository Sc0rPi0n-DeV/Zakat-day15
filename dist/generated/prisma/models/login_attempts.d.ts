import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type login_attemptsModel = runtime.Types.Result.DefaultSelection<Prisma.$login_attemptsPayload>;
export type AggregateLogin_attempts = {
    _count: Login_attemptsCountAggregateOutputType | null;
    _avg: Login_attemptsAvgAggregateOutputType | null;
    _sum: Login_attemptsSumAggregateOutputType | null;
    _min: Login_attemptsMinAggregateOutputType | null;
    _max: Login_attemptsMaxAggregateOutputType | null;
};
export type Login_attemptsAvgAggregateOutputType = {
    attempt_id: number | null;
    user_id: number | null;
};
export type Login_attemptsSumAggregateOutputType = {
    attempt_id: bigint | null;
    user_id: bigint | null;
};
export type Login_attemptsMinAggregateOutputType = {
    attempt_id: bigint | null;
    user_id: bigint | null;
    attempted_at: Date | null;
    success: boolean | null;
    ip_address: string | null;
};
export type Login_attemptsMaxAggregateOutputType = {
    attempt_id: bigint | null;
    user_id: bigint | null;
    attempted_at: Date | null;
    success: boolean | null;
    ip_address: string | null;
};
export type Login_attemptsCountAggregateOutputType = {
    attempt_id: number;
    user_id: number;
    attempted_at: number;
    success: number;
    ip_address: number;
    _all: number;
};
export type Login_attemptsAvgAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
};
export type Login_attemptsSumAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
};
export type Login_attemptsMinAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    attempted_at?: true;
    success?: true;
    ip_address?: true;
};
export type Login_attemptsMaxAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    attempted_at?: true;
    success?: true;
    ip_address?: true;
};
export type Login_attemptsCountAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    attempted_at?: true;
    success?: true;
    ip_address?: true;
    _all?: true;
};
export type Login_attemptsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.login_attemptsWhereInput;
    orderBy?: Prisma.login_attemptsOrderByWithRelationInput | Prisma.login_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.login_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Login_attemptsCountAggregateInputType;
    _avg?: Login_attemptsAvgAggregateInputType;
    _sum?: Login_attemptsSumAggregateInputType;
    _min?: Login_attemptsMinAggregateInputType;
    _max?: Login_attemptsMaxAggregateInputType;
};
export type GetLogin_attemptsAggregateType<T extends Login_attemptsAggregateArgs> = {
    [P in keyof T & keyof AggregateLogin_attempts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLogin_attempts[P]> : Prisma.GetScalarType<T[P], AggregateLogin_attempts[P]>;
};
export type login_attemptsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.login_attemptsWhereInput;
    orderBy?: Prisma.login_attemptsOrderByWithAggregationInput | Prisma.login_attemptsOrderByWithAggregationInput[];
    by: Prisma.Login_attemptsScalarFieldEnum[] | Prisma.Login_attemptsScalarFieldEnum;
    having?: Prisma.login_attemptsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Login_attemptsCountAggregateInputType | true;
    _avg?: Login_attemptsAvgAggregateInputType;
    _sum?: Login_attemptsSumAggregateInputType;
    _min?: Login_attemptsMinAggregateInputType;
    _max?: Login_attemptsMaxAggregateInputType;
};
export type Login_attemptsGroupByOutputType = {
    attempt_id: bigint;
    user_id: bigint | null;
    attempted_at: Date;
    success: boolean;
    ip_address: string | null;
    _count: Login_attemptsCountAggregateOutputType | null;
    _avg: Login_attemptsAvgAggregateOutputType | null;
    _sum: Login_attemptsSumAggregateOutputType | null;
    _min: Login_attemptsMinAggregateOutputType | null;
    _max: Login_attemptsMaxAggregateOutputType | null;
};
export type GetLogin_attemptsGroupByPayload<T extends login_attemptsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Login_attemptsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Login_attemptsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Login_attemptsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Login_attemptsGroupByOutputType[P]>;
}>>;
export type login_attemptsWhereInput = {
    AND?: Prisma.login_attemptsWhereInput | Prisma.login_attemptsWhereInput[];
    OR?: Prisma.login_attemptsWhereInput[];
    NOT?: Prisma.login_attemptsWhereInput | Prisma.login_attemptsWhereInput[];
    attempt_id?: Prisma.BigIntFilter<"login_attempts"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"login_attempts"> | bigint | number | null;
    attempted_at?: Prisma.DateTimeFilter<"login_attempts"> | Date | string;
    success?: Prisma.BoolFilter<"login_attempts"> | boolean;
    ip_address?: Prisma.StringNullableFilter<"login_attempts"> | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type login_attemptsOrderByWithRelationInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type login_attemptsWhereUniqueInput = Prisma.AtLeast<{
    attempt_id?: bigint | number;
    AND?: Prisma.login_attemptsWhereInput | Prisma.login_attemptsWhereInput[];
    OR?: Prisma.login_attemptsWhereInput[];
    NOT?: Prisma.login_attemptsWhereInput | Prisma.login_attemptsWhereInput[];
    user_id?: Prisma.BigIntNullableFilter<"login_attempts"> | bigint | number | null;
    attempted_at?: Prisma.DateTimeFilter<"login_attempts"> | Date | string;
    success?: Prisma.BoolFilter<"login_attempts"> | boolean;
    ip_address?: Prisma.StringNullableFilter<"login_attempts"> | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "attempt_id">;
export type login_attemptsOrderByWithAggregationInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.login_attemptsCountOrderByAggregateInput;
    _avg?: Prisma.login_attemptsAvgOrderByAggregateInput;
    _max?: Prisma.login_attemptsMaxOrderByAggregateInput;
    _min?: Prisma.login_attemptsMinOrderByAggregateInput;
    _sum?: Prisma.login_attemptsSumOrderByAggregateInput;
};
export type login_attemptsScalarWhereWithAggregatesInput = {
    AND?: Prisma.login_attemptsScalarWhereWithAggregatesInput | Prisma.login_attemptsScalarWhereWithAggregatesInput[];
    OR?: Prisma.login_attemptsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.login_attemptsScalarWhereWithAggregatesInput | Prisma.login_attemptsScalarWhereWithAggregatesInput[];
    attempt_id?: Prisma.BigIntWithAggregatesFilter<"login_attempts"> | bigint | number;
    user_id?: Prisma.BigIntNullableWithAggregatesFilter<"login_attempts"> | bigint | number | null;
    attempted_at?: Prisma.DateTimeWithAggregatesFilter<"login_attempts"> | Date | string;
    success?: Prisma.BoolWithAggregatesFilter<"login_attempts"> | boolean;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"login_attempts"> | string | null;
};
export type login_attemptsCreateInput = {
    attempt_id?: bigint | number;
    attempted_at?: Date | string;
    success: boolean;
    ip_address?: string | null;
    users?: Prisma.usersCreateNestedOneWithoutLogin_attemptsInput;
};
export type login_attemptsUncheckedCreateInput = {
    attempt_id?: bigint | number;
    user_id?: bigint | number | null;
    attempted_at?: Date | string;
    success: boolean;
    ip_address?: string | null;
};
export type login_attemptsUpdateInput = {
    attempt_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.usersUpdateOneWithoutLogin_attemptsNestedInput;
};
export type login_attemptsUncheckedUpdateInput = {
    attempt_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type login_attemptsCreateManyInput = {
    attempt_id?: bigint | number;
    user_id?: bigint | number | null;
    attempted_at?: Date | string;
    success: boolean;
    ip_address?: string | null;
};
export type login_attemptsUpdateManyMutationInput = {
    attempt_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type login_attemptsUncheckedUpdateManyInput = {
    attempt_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type login_attemptsCountOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
};
export type login_attemptsAvgOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type login_attemptsMaxOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
};
export type login_attemptsMinOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attempted_at?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
};
export type login_attemptsSumOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type Login_attemptsListRelationFilter = {
    every?: Prisma.login_attemptsWhereInput;
    some?: Prisma.login_attemptsWhereInput;
    none?: Prisma.login_attemptsWhereInput;
};
export type login_attemptsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type login_attemptsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.login_attemptsCreateWithoutUsersInput, Prisma.login_attemptsUncheckedCreateWithoutUsersInput> | Prisma.login_attemptsCreateWithoutUsersInput[] | Prisma.login_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.login_attemptsCreateOrConnectWithoutUsersInput | Prisma.login_attemptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.login_attemptsCreateManyUsersInputEnvelope;
    connect?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
};
export type login_attemptsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.login_attemptsCreateWithoutUsersInput, Prisma.login_attemptsUncheckedCreateWithoutUsersInput> | Prisma.login_attemptsCreateWithoutUsersInput[] | Prisma.login_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.login_attemptsCreateOrConnectWithoutUsersInput | Prisma.login_attemptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.login_attemptsCreateManyUsersInputEnvelope;
    connect?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
};
export type login_attemptsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.login_attemptsCreateWithoutUsersInput, Prisma.login_attemptsUncheckedCreateWithoutUsersInput> | Prisma.login_attemptsCreateWithoutUsersInput[] | Prisma.login_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.login_attemptsCreateOrConnectWithoutUsersInput | Prisma.login_attemptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.login_attemptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.login_attemptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.login_attemptsCreateManyUsersInputEnvelope;
    set?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    disconnect?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    delete?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    connect?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    update?: Prisma.login_attemptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.login_attemptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.login_attemptsUpdateManyWithWhereWithoutUsersInput | Prisma.login_attemptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.login_attemptsScalarWhereInput | Prisma.login_attemptsScalarWhereInput[];
};
export type login_attemptsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.login_attemptsCreateWithoutUsersInput, Prisma.login_attemptsUncheckedCreateWithoutUsersInput> | Prisma.login_attemptsCreateWithoutUsersInput[] | Prisma.login_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.login_attemptsCreateOrConnectWithoutUsersInput | Prisma.login_attemptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.login_attemptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.login_attemptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.login_attemptsCreateManyUsersInputEnvelope;
    set?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    disconnect?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    delete?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    connect?: Prisma.login_attemptsWhereUniqueInput | Prisma.login_attemptsWhereUniqueInput[];
    update?: Prisma.login_attemptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.login_attemptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.login_attemptsUpdateManyWithWhereWithoutUsersInput | Prisma.login_attemptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.login_attemptsScalarWhereInput | Prisma.login_attemptsScalarWhereInput[];
};
export type login_attemptsCreateWithoutUsersInput = {
    attempt_id?: bigint | number;
    attempted_at?: Date | string;
    success: boolean;
    ip_address?: string | null;
};
export type login_attemptsUncheckedCreateWithoutUsersInput = {
    attempt_id?: bigint | number;
    attempted_at?: Date | string;
    success: boolean;
    ip_address?: string | null;
};
export type login_attemptsCreateOrConnectWithoutUsersInput = {
    where: Prisma.login_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.login_attemptsCreateWithoutUsersInput, Prisma.login_attemptsUncheckedCreateWithoutUsersInput>;
};
export type login_attemptsCreateManyUsersInputEnvelope = {
    data: Prisma.login_attemptsCreateManyUsersInput | Prisma.login_attemptsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type login_attemptsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.login_attemptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.login_attemptsUpdateWithoutUsersInput, Prisma.login_attemptsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.login_attemptsCreateWithoutUsersInput, Prisma.login_attemptsUncheckedCreateWithoutUsersInput>;
};
export type login_attemptsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.login_attemptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.login_attemptsUpdateWithoutUsersInput, Prisma.login_attemptsUncheckedUpdateWithoutUsersInput>;
};
export type login_attemptsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.login_attemptsScalarWhereInput;
    data: Prisma.XOR<Prisma.login_attemptsUpdateManyMutationInput, Prisma.login_attemptsUncheckedUpdateManyWithoutUsersInput>;
};
export type login_attemptsScalarWhereInput = {
    AND?: Prisma.login_attemptsScalarWhereInput | Prisma.login_attemptsScalarWhereInput[];
    OR?: Prisma.login_attemptsScalarWhereInput[];
    NOT?: Prisma.login_attemptsScalarWhereInput | Prisma.login_attemptsScalarWhereInput[];
    attempt_id?: Prisma.BigIntFilter<"login_attempts"> | bigint | number;
    user_id?: Prisma.BigIntNullableFilter<"login_attempts"> | bigint | number | null;
    attempted_at?: Prisma.DateTimeFilter<"login_attempts"> | Date | string;
    success?: Prisma.BoolFilter<"login_attempts"> | boolean;
    ip_address?: Prisma.StringNullableFilter<"login_attempts"> | string | null;
};
export type login_attemptsCreateManyUsersInput = {
    attempt_id?: bigint | number;
    attempted_at?: Date | string;
    success: boolean;
    ip_address?: string | null;
};
export type login_attemptsUpdateWithoutUsersInput = {
    attempt_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type login_attemptsUncheckedUpdateWithoutUsersInput = {
    attempt_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type login_attemptsUncheckedUpdateManyWithoutUsersInput = {
    attempt_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    attempted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type login_attemptsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    attempt_id?: boolean;
    user_id?: boolean;
    attempted_at?: boolean;
    success?: boolean;
    ip_address?: boolean;
    users?: boolean | Prisma.login_attempts$usersArgs<ExtArgs>;
}, ExtArgs["result"]["login_attempts"]>;
export type login_attemptsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    attempt_id?: boolean;
    user_id?: boolean;
    attempted_at?: boolean;
    success?: boolean;
    ip_address?: boolean;
    users?: boolean | Prisma.login_attempts$usersArgs<ExtArgs>;
}, ExtArgs["result"]["login_attempts"]>;
export type login_attemptsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    attempt_id?: boolean;
    user_id?: boolean;
    attempted_at?: boolean;
    success?: boolean;
    ip_address?: boolean;
    users?: boolean | Prisma.login_attempts$usersArgs<ExtArgs>;
}, ExtArgs["result"]["login_attempts"]>;
export type login_attemptsSelectScalar = {
    attempt_id?: boolean;
    user_id?: boolean;
    attempted_at?: boolean;
    success?: boolean;
    ip_address?: boolean;
};
export type login_attemptsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"attempt_id" | "user_id" | "attempted_at" | "success" | "ip_address", ExtArgs["result"]["login_attempts"]>;
export type login_attemptsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.login_attempts$usersArgs<ExtArgs>;
};
export type login_attemptsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.login_attempts$usersArgs<ExtArgs>;
};
export type login_attemptsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.login_attempts$usersArgs<ExtArgs>;
};
export type $login_attemptsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "login_attempts";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        attempt_id: bigint;
        user_id: bigint | null;
        attempted_at: Date;
        success: boolean;
        ip_address: string | null;
    }, ExtArgs["result"]["login_attempts"]>;
    composites: {};
};
export type login_attemptsGetPayload<S extends boolean | null | undefined | login_attemptsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload, S>;
export type login_attemptsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<login_attemptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Login_attemptsCountAggregateInputType | true;
};
export interface login_attemptsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['login_attempts'];
        meta: {
            name: 'login_attempts';
        };
    };
    findUnique<T extends login_attemptsFindUniqueArgs>(args: Prisma.SelectSubset<T, login_attemptsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends login_attemptsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, login_attemptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends login_attemptsFindFirstArgs>(args?: Prisma.SelectSubset<T, login_attemptsFindFirstArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends login_attemptsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, login_attemptsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends login_attemptsFindManyArgs>(args?: Prisma.SelectSubset<T, login_attemptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends login_attemptsCreateArgs>(args: Prisma.SelectSubset<T, login_attemptsCreateArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends login_attemptsCreateManyArgs>(args?: Prisma.SelectSubset<T, login_attemptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends login_attemptsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, login_attemptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends login_attemptsDeleteArgs>(args: Prisma.SelectSubset<T, login_attemptsDeleteArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends login_attemptsUpdateArgs>(args: Prisma.SelectSubset<T, login_attemptsUpdateArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends login_attemptsDeleteManyArgs>(args?: Prisma.SelectSubset<T, login_attemptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends login_attemptsUpdateManyArgs>(args: Prisma.SelectSubset<T, login_attemptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends login_attemptsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, login_attemptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends login_attemptsUpsertArgs>(args: Prisma.SelectSubset<T, login_attemptsUpsertArgs<ExtArgs>>): Prisma.Prisma__login_attemptsClient<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends login_attemptsCountArgs>(args?: Prisma.Subset<T, login_attemptsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Login_attemptsCountAggregateOutputType> : number>;
    aggregate<T extends Login_attemptsAggregateArgs>(args: Prisma.Subset<T, Login_attemptsAggregateArgs>): Prisma.PrismaPromise<GetLogin_attemptsAggregateType<T>>;
    groupBy<T extends login_attemptsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: login_attemptsGroupByArgs['orderBy'];
    } : {
        orderBy?: login_attemptsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, login_attemptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogin_attemptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: login_attemptsFieldRefs;
}
export interface Prisma__login_attemptsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.login_attempts$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.login_attempts$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface login_attemptsFieldRefs {
    readonly attempt_id: Prisma.FieldRef<"login_attempts", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"login_attempts", 'BigInt'>;
    readonly attempted_at: Prisma.FieldRef<"login_attempts", 'DateTime'>;
    readonly success: Prisma.FieldRef<"login_attempts", 'Boolean'>;
    readonly ip_address: Prisma.FieldRef<"login_attempts", 'String'>;
}
export type login_attemptsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    where: Prisma.login_attemptsWhereUniqueInput;
};
export type login_attemptsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    where: Prisma.login_attemptsWhereUniqueInput;
};
export type login_attemptsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    where?: Prisma.login_attemptsWhereInput;
    orderBy?: Prisma.login_attemptsOrderByWithRelationInput | Prisma.login_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.login_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Login_attemptsScalarFieldEnum | Prisma.Login_attemptsScalarFieldEnum[];
};
export type login_attemptsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    where?: Prisma.login_attemptsWhereInput;
    orderBy?: Prisma.login_attemptsOrderByWithRelationInput | Prisma.login_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.login_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Login_attemptsScalarFieldEnum | Prisma.Login_attemptsScalarFieldEnum[];
};
export type login_attemptsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    where?: Prisma.login_attemptsWhereInput;
    orderBy?: Prisma.login_attemptsOrderByWithRelationInput | Prisma.login_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.login_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Login_attemptsScalarFieldEnum | Prisma.Login_attemptsScalarFieldEnum[];
};
export type login_attemptsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.login_attemptsCreateInput, Prisma.login_attemptsUncheckedCreateInput>;
};
export type login_attemptsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.login_attemptsCreateManyInput | Prisma.login_attemptsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type login_attemptsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    data: Prisma.login_attemptsCreateManyInput | Prisma.login_attemptsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.login_attemptsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type login_attemptsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.login_attemptsUpdateInput, Prisma.login_attemptsUncheckedUpdateInput>;
    where: Prisma.login_attemptsWhereUniqueInput;
};
export type login_attemptsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.login_attemptsUpdateManyMutationInput, Prisma.login_attemptsUncheckedUpdateManyInput>;
    where?: Prisma.login_attemptsWhereInput;
    limit?: number;
};
export type login_attemptsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.login_attemptsUpdateManyMutationInput, Prisma.login_attemptsUncheckedUpdateManyInput>;
    where?: Prisma.login_attemptsWhereInput;
    limit?: number;
    include?: Prisma.login_attemptsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type login_attemptsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    where: Prisma.login_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.login_attemptsCreateInput, Prisma.login_attemptsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.login_attemptsUpdateInput, Prisma.login_attemptsUncheckedUpdateInput>;
};
export type login_attemptsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
    where: Prisma.login_attemptsWhereUniqueInput;
};
export type login_attemptsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.login_attemptsWhereInput;
    limit?: number;
};
export type login_attempts$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type login_attemptsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.login_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.login_attemptsOmit<ExtArgs> | null;
    include?: Prisma.login_attemptsInclude<ExtArgs> | null;
};
