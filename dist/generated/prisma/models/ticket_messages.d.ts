import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ticket_messagesModel = runtime.Types.Result.DefaultSelection<Prisma.$ticket_messagesPayload>;
export type AggregateTicket_messages = {
    _count: Ticket_messagesCountAggregateOutputType | null;
    _avg: Ticket_messagesAvgAggregateOutputType | null;
    _sum: Ticket_messagesSumAggregateOutputType | null;
    _min: Ticket_messagesMinAggregateOutputType | null;
    _max: Ticket_messagesMaxAggregateOutputType | null;
};
export type Ticket_messagesAvgAggregateOutputType = {
    message_id: number | null;
    ticket_id: number | null;
    author_user_id: number | null;
};
export type Ticket_messagesSumAggregateOutputType = {
    message_id: bigint | null;
    ticket_id: bigint | null;
    author_user_id: bigint | null;
};
export type Ticket_messagesMinAggregateOutputType = {
    message_id: bigint | null;
    ticket_id: bigint | null;
    author_user_id: bigint | null;
    message_body: string | null;
    sent_at: Date | null;
};
export type Ticket_messagesMaxAggregateOutputType = {
    message_id: bigint | null;
    ticket_id: bigint | null;
    author_user_id: bigint | null;
    message_body: string | null;
    sent_at: Date | null;
};
export type Ticket_messagesCountAggregateOutputType = {
    message_id: number;
    ticket_id: number;
    author_user_id: number;
    message_body: number;
    sent_at: number;
    _all: number;
};
export type Ticket_messagesAvgAggregateInputType = {
    message_id?: true;
    ticket_id?: true;
    author_user_id?: true;
};
export type Ticket_messagesSumAggregateInputType = {
    message_id?: true;
    ticket_id?: true;
    author_user_id?: true;
};
export type Ticket_messagesMinAggregateInputType = {
    message_id?: true;
    ticket_id?: true;
    author_user_id?: true;
    message_body?: true;
    sent_at?: true;
};
export type Ticket_messagesMaxAggregateInputType = {
    message_id?: true;
    ticket_id?: true;
    author_user_id?: true;
    message_body?: true;
    sent_at?: true;
};
export type Ticket_messagesCountAggregateInputType = {
    message_id?: true;
    ticket_id?: true;
    author_user_id?: true;
    message_body?: true;
    sent_at?: true;
    _all?: true;
};
export type Ticket_messagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticket_messagesWhereInput;
    orderBy?: Prisma.ticket_messagesOrderByWithRelationInput | Prisma.ticket_messagesOrderByWithRelationInput[];
    cursor?: Prisma.ticket_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Ticket_messagesCountAggregateInputType;
    _avg?: Ticket_messagesAvgAggregateInputType;
    _sum?: Ticket_messagesSumAggregateInputType;
    _min?: Ticket_messagesMinAggregateInputType;
    _max?: Ticket_messagesMaxAggregateInputType;
};
export type GetTicket_messagesAggregateType<T extends Ticket_messagesAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket_messages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTicket_messages[P]> : Prisma.GetScalarType<T[P], AggregateTicket_messages[P]>;
};
export type ticket_messagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticket_messagesWhereInput;
    orderBy?: Prisma.ticket_messagesOrderByWithAggregationInput | Prisma.ticket_messagesOrderByWithAggregationInput[];
    by: Prisma.Ticket_messagesScalarFieldEnum[] | Prisma.Ticket_messagesScalarFieldEnum;
    having?: Prisma.ticket_messagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ticket_messagesCountAggregateInputType | true;
    _avg?: Ticket_messagesAvgAggregateInputType;
    _sum?: Ticket_messagesSumAggregateInputType;
    _min?: Ticket_messagesMinAggregateInputType;
    _max?: Ticket_messagesMaxAggregateInputType;
};
export type Ticket_messagesGroupByOutputType = {
    message_id: bigint;
    ticket_id: bigint;
    author_user_id: bigint | null;
    message_body: string;
    sent_at: Date | null;
    _count: Ticket_messagesCountAggregateOutputType | null;
    _avg: Ticket_messagesAvgAggregateOutputType | null;
    _sum: Ticket_messagesSumAggregateOutputType | null;
    _min: Ticket_messagesMinAggregateOutputType | null;
    _max: Ticket_messagesMaxAggregateOutputType | null;
};
export type GetTicket_messagesGroupByPayload<T extends ticket_messagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ticket_messagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ticket_messagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ticket_messagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ticket_messagesGroupByOutputType[P]>;
}>>;
export type ticket_messagesWhereInput = {
    AND?: Prisma.ticket_messagesWhereInput | Prisma.ticket_messagesWhereInput[];
    OR?: Prisma.ticket_messagesWhereInput[];
    NOT?: Prisma.ticket_messagesWhereInput | Prisma.ticket_messagesWhereInput[];
    message_id?: Prisma.BigIntFilter<"ticket_messages"> | bigint | number;
    ticket_id?: Prisma.BigIntFilter<"ticket_messages"> | bigint | number;
    author_user_id?: Prisma.BigIntNullableFilter<"ticket_messages"> | bigint | number | null;
    message_body?: Prisma.StringFilter<"ticket_messages"> | string;
    sent_at?: Prisma.DateTimeNullableFilter<"ticket_messages"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    support_tickets?: Prisma.XOR<Prisma.Support_ticketsScalarRelationFilter, Prisma.support_ticketsWhereInput>;
};
export type ticket_messagesOrderByWithRelationInput = {
    message_id?: Prisma.SortOrder;
    ticket_id?: Prisma.SortOrder;
    author_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    message_body?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    support_tickets?: Prisma.support_ticketsOrderByWithRelationInput;
};
export type ticket_messagesWhereUniqueInput = Prisma.AtLeast<{
    message_id?: bigint | number;
    AND?: Prisma.ticket_messagesWhereInput | Prisma.ticket_messagesWhereInput[];
    OR?: Prisma.ticket_messagesWhereInput[];
    NOT?: Prisma.ticket_messagesWhereInput | Prisma.ticket_messagesWhereInput[];
    ticket_id?: Prisma.BigIntFilter<"ticket_messages"> | bigint | number;
    author_user_id?: Prisma.BigIntNullableFilter<"ticket_messages"> | bigint | number | null;
    message_body?: Prisma.StringFilter<"ticket_messages"> | string;
    sent_at?: Prisma.DateTimeNullableFilter<"ticket_messages"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    support_tickets?: Prisma.XOR<Prisma.Support_ticketsScalarRelationFilter, Prisma.support_ticketsWhereInput>;
}, "message_id">;
export type ticket_messagesOrderByWithAggregationInput = {
    message_id?: Prisma.SortOrder;
    ticket_id?: Prisma.SortOrder;
    author_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    message_body?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ticket_messagesCountOrderByAggregateInput;
    _avg?: Prisma.ticket_messagesAvgOrderByAggregateInput;
    _max?: Prisma.ticket_messagesMaxOrderByAggregateInput;
    _min?: Prisma.ticket_messagesMinOrderByAggregateInput;
    _sum?: Prisma.ticket_messagesSumOrderByAggregateInput;
};
export type ticket_messagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.ticket_messagesScalarWhereWithAggregatesInput | Prisma.ticket_messagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.ticket_messagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ticket_messagesScalarWhereWithAggregatesInput | Prisma.ticket_messagesScalarWhereWithAggregatesInput[];
    message_id?: Prisma.BigIntWithAggregatesFilter<"ticket_messages"> | bigint | number;
    ticket_id?: Prisma.BigIntWithAggregatesFilter<"ticket_messages"> | bigint | number;
    author_user_id?: Prisma.BigIntNullableWithAggregatesFilter<"ticket_messages"> | bigint | number | null;
    message_body?: Prisma.StringWithAggregatesFilter<"ticket_messages"> | string;
    sent_at?: Prisma.DateTimeNullableWithAggregatesFilter<"ticket_messages"> | Date | string | null;
};
export type ticket_messagesCreateInput = {
    message_id?: bigint | number;
    message_body: string;
    sent_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutTicket_messagesInput;
    support_tickets: Prisma.support_ticketsCreateNestedOneWithoutTicket_messagesInput;
};
export type ticket_messagesUncheckedCreateInput = {
    message_id?: bigint | number;
    ticket_id: bigint | number;
    author_user_id?: bigint | number | null;
    message_body: string;
    sent_at?: Date | string | null;
};
export type ticket_messagesUpdateInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutTicket_messagesNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateOneRequiredWithoutTicket_messagesNestedInput;
};
export type ticket_messagesUncheckedUpdateInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    author_user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ticket_messagesCreateManyInput = {
    message_id?: bigint | number;
    ticket_id: bigint | number;
    author_user_id?: bigint | number | null;
    message_body: string;
    sent_at?: Date | string | null;
};
export type ticket_messagesUpdateManyMutationInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ticket_messagesUncheckedUpdateManyInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    author_user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Ticket_messagesListRelationFilter = {
    every?: Prisma.ticket_messagesWhereInput;
    some?: Prisma.ticket_messagesWhereInput;
    none?: Prisma.ticket_messagesWhereInput;
};
export type ticket_messagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ticket_messagesCountOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    ticket_id?: Prisma.SortOrder;
    author_user_id?: Prisma.SortOrder;
    message_body?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
};
export type ticket_messagesAvgOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    ticket_id?: Prisma.SortOrder;
    author_user_id?: Prisma.SortOrder;
};
export type ticket_messagesMaxOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    ticket_id?: Prisma.SortOrder;
    author_user_id?: Prisma.SortOrder;
    message_body?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
};
export type ticket_messagesMinOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    ticket_id?: Prisma.SortOrder;
    author_user_id?: Prisma.SortOrder;
    message_body?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
};
export type ticket_messagesSumOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    ticket_id?: Prisma.SortOrder;
    author_user_id?: Prisma.SortOrder;
};
export type ticket_messagesCreateNestedManyWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput> | Prisma.ticket_messagesCreateWithoutSupport_ticketsInput[] | Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput | Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput[];
    createMany?: Prisma.ticket_messagesCreateManySupport_ticketsInputEnvelope;
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
};
export type ticket_messagesUncheckedCreateNestedManyWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput> | Prisma.ticket_messagesCreateWithoutSupport_ticketsInput[] | Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput | Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput[];
    createMany?: Prisma.ticket_messagesCreateManySupport_ticketsInputEnvelope;
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
};
export type ticket_messagesUpdateManyWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput> | Prisma.ticket_messagesCreateWithoutSupport_ticketsInput[] | Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput | Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput[];
    upsert?: Prisma.ticket_messagesUpsertWithWhereUniqueWithoutSupport_ticketsInput | Prisma.ticket_messagesUpsertWithWhereUniqueWithoutSupport_ticketsInput[];
    createMany?: Prisma.ticket_messagesCreateManySupport_ticketsInputEnvelope;
    set?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    disconnect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    delete?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    update?: Prisma.ticket_messagesUpdateWithWhereUniqueWithoutSupport_ticketsInput | Prisma.ticket_messagesUpdateWithWhereUniqueWithoutSupport_ticketsInput[];
    updateMany?: Prisma.ticket_messagesUpdateManyWithWhereWithoutSupport_ticketsInput | Prisma.ticket_messagesUpdateManyWithWhereWithoutSupport_ticketsInput[];
    deleteMany?: Prisma.ticket_messagesScalarWhereInput | Prisma.ticket_messagesScalarWhereInput[];
};
export type ticket_messagesUncheckedUpdateManyWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput> | Prisma.ticket_messagesCreateWithoutSupport_ticketsInput[] | Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput | Prisma.ticket_messagesCreateOrConnectWithoutSupport_ticketsInput[];
    upsert?: Prisma.ticket_messagesUpsertWithWhereUniqueWithoutSupport_ticketsInput | Prisma.ticket_messagesUpsertWithWhereUniqueWithoutSupport_ticketsInput[];
    createMany?: Prisma.ticket_messagesCreateManySupport_ticketsInputEnvelope;
    set?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    disconnect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    delete?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    update?: Prisma.ticket_messagesUpdateWithWhereUniqueWithoutSupport_ticketsInput | Prisma.ticket_messagesUpdateWithWhereUniqueWithoutSupport_ticketsInput[];
    updateMany?: Prisma.ticket_messagesUpdateManyWithWhereWithoutSupport_ticketsInput | Prisma.ticket_messagesUpdateManyWithWhereWithoutSupport_ticketsInput[];
    deleteMany?: Prisma.ticket_messagesScalarWhereInput | Prisma.ticket_messagesScalarWhereInput[];
};
export type ticket_messagesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutUsersInput, Prisma.ticket_messagesUncheckedCreateWithoutUsersInput> | Prisma.ticket_messagesCreateWithoutUsersInput[] | Prisma.ticket_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutUsersInput | Prisma.ticket_messagesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.ticket_messagesCreateManyUsersInputEnvelope;
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
};
export type ticket_messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutUsersInput, Prisma.ticket_messagesUncheckedCreateWithoutUsersInput> | Prisma.ticket_messagesCreateWithoutUsersInput[] | Prisma.ticket_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutUsersInput | Prisma.ticket_messagesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.ticket_messagesCreateManyUsersInputEnvelope;
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
};
export type ticket_messagesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutUsersInput, Prisma.ticket_messagesUncheckedCreateWithoutUsersInput> | Prisma.ticket_messagesCreateWithoutUsersInput[] | Prisma.ticket_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutUsersInput | Prisma.ticket_messagesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.ticket_messagesUpsertWithWhereUniqueWithoutUsersInput | Prisma.ticket_messagesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.ticket_messagesCreateManyUsersInputEnvelope;
    set?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    disconnect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    delete?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    update?: Prisma.ticket_messagesUpdateWithWhereUniqueWithoutUsersInput | Prisma.ticket_messagesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.ticket_messagesUpdateManyWithWhereWithoutUsersInput | Prisma.ticket_messagesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.ticket_messagesScalarWhereInput | Prisma.ticket_messagesScalarWhereInput[];
};
export type ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.ticket_messagesCreateWithoutUsersInput, Prisma.ticket_messagesUncheckedCreateWithoutUsersInput> | Prisma.ticket_messagesCreateWithoutUsersInput[] | Prisma.ticket_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.ticket_messagesCreateOrConnectWithoutUsersInput | Prisma.ticket_messagesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.ticket_messagesUpsertWithWhereUniqueWithoutUsersInput | Prisma.ticket_messagesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.ticket_messagesCreateManyUsersInputEnvelope;
    set?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    disconnect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    delete?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    connect?: Prisma.ticket_messagesWhereUniqueInput | Prisma.ticket_messagesWhereUniqueInput[];
    update?: Prisma.ticket_messagesUpdateWithWhereUniqueWithoutUsersInput | Prisma.ticket_messagesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.ticket_messagesUpdateManyWithWhereWithoutUsersInput | Prisma.ticket_messagesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.ticket_messagesScalarWhereInput | Prisma.ticket_messagesScalarWhereInput[];
};
export type ticket_messagesCreateWithoutSupport_ticketsInput = {
    message_id?: bigint | number;
    message_body: string;
    sent_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutTicket_messagesInput;
};
export type ticket_messagesUncheckedCreateWithoutSupport_ticketsInput = {
    message_id?: bigint | number;
    author_user_id?: bigint | number | null;
    message_body: string;
    sent_at?: Date | string | null;
};
export type ticket_messagesCreateOrConnectWithoutSupport_ticketsInput = {
    where: Prisma.ticket_messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticket_messagesCreateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput>;
};
export type ticket_messagesCreateManySupport_ticketsInputEnvelope = {
    data: Prisma.ticket_messagesCreateManySupport_ticketsInput | Prisma.ticket_messagesCreateManySupport_ticketsInput[];
    skipDuplicates?: boolean;
};
export type ticket_messagesUpsertWithWhereUniqueWithoutSupport_ticketsInput = {
    where: Prisma.ticket_messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ticket_messagesUpdateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedUpdateWithoutSupport_ticketsInput>;
    create: Prisma.XOR<Prisma.ticket_messagesCreateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedCreateWithoutSupport_ticketsInput>;
};
export type ticket_messagesUpdateWithWhereUniqueWithoutSupport_ticketsInput = {
    where: Prisma.ticket_messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ticket_messagesUpdateWithoutSupport_ticketsInput, Prisma.ticket_messagesUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type ticket_messagesUpdateManyWithWhereWithoutSupport_ticketsInput = {
    where: Prisma.ticket_messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.ticket_messagesUpdateManyMutationInput, Prisma.ticket_messagesUncheckedUpdateManyWithoutSupport_ticketsInput>;
};
export type ticket_messagesScalarWhereInput = {
    AND?: Prisma.ticket_messagesScalarWhereInput | Prisma.ticket_messagesScalarWhereInput[];
    OR?: Prisma.ticket_messagesScalarWhereInput[];
    NOT?: Prisma.ticket_messagesScalarWhereInput | Prisma.ticket_messagesScalarWhereInput[];
    message_id?: Prisma.BigIntFilter<"ticket_messages"> | bigint | number;
    ticket_id?: Prisma.BigIntFilter<"ticket_messages"> | bigint | number;
    author_user_id?: Prisma.BigIntNullableFilter<"ticket_messages"> | bigint | number | null;
    message_body?: Prisma.StringFilter<"ticket_messages"> | string;
    sent_at?: Prisma.DateTimeNullableFilter<"ticket_messages"> | Date | string | null;
};
export type ticket_messagesCreateWithoutUsersInput = {
    message_id?: bigint | number;
    message_body: string;
    sent_at?: Date | string | null;
    support_tickets: Prisma.support_ticketsCreateNestedOneWithoutTicket_messagesInput;
};
export type ticket_messagesUncheckedCreateWithoutUsersInput = {
    message_id?: bigint | number;
    ticket_id: bigint | number;
    message_body: string;
    sent_at?: Date | string | null;
};
export type ticket_messagesCreateOrConnectWithoutUsersInput = {
    where: Prisma.ticket_messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticket_messagesCreateWithoutUsersInput, Prisma.ticket_messagesUncheckedCreateWithoutUsersInput>;
};
export type ticket_messagesCreateManyUsersInputEnvelope = {
    data: Prisma.ticket_messagesCreateManyUsersInput | Prisma.ticket_messagesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type ticket_messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.ticket_messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.ticket_messagesUpdateWithoutUsersInput, Prisma.ticket_messagesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.ticket_messagesCreateWithoutUsersInput, Prisma.ticket_messagesUncheckedCreateWithoutUsersInput>;
};
export type ticket_messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.ticket_messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.ticket_messagesUpdateWithoutUsersInput, Prisma.ticket_messagesUncheckedUpdateWithoutUsersInput>;
};
export type ticket_messagesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.ticket_messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.ticket_messagesUpdateManyMutationInput, Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersInput>;
};
export type ticket_messagesCreateManySupport_ticketsInput = {
    message_id?: bigint | number;
    author_user_id?: bigint | number | null;
    message_body: string;
    sent_at?: Date | string | null;
};
export type ticket_messagesUpdateWithoutSupport_ticketsInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutTicket_messagesNestedInput;
};
export type ticket_messagesUncheckedUpdateWithoutSupport_ticketsInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    author_user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ticket_messagesUncheckedUpdateManyWithoutSupport_ticketsInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    author_user_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ticket_messagesCreateManyUsersInput = {
    message_id?: bigint | number;
    ticket_id: bigint | number;
    message_body: string;
    sent_at?: Date | string | null;
};
export type ticket_messagesUpdateWithoutUsersInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    support_tickets?: Prisma.support_ticketsUpdateOneRequiredWithoutTicket_messagesNestedInput;
};
export type ticket_messagesUncheckedUpdateWithoutUsersInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ticket_messagesUncheckedUpdateManyWithoutUsersInput = {
    message_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    message_body?: Prisma.StringFieldUpdateOperationsInput | string;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ticket_messagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    ticket_id?: boolean;
    author_user_id?: boolean;
    message_body?: boolean;
    sent_at?: boolean;
    users?: boolean | Prisma.ticket_messages$usersArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.support_ticketsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticket_messages"]>;
export type ticket_messagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    ticket_id?: boolean;
    author_user_id?: boolean;
    message_body?: boolean;
    sent_at?: boolean;
    users?: boolean | Prisma.ticket_messages$usersArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.support_ticketsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticket_messages"]>;
export type ticket_messagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    ticket_id?: boolean;
    author_user_id?: boolean;
    message_body?: boolean;
    sent_at?: boolean;
    users?: boolean | Prisma.ticket_messages$usersArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.support_ticketsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticket_messages"]>;
export type ticket_messagesSelectScalar = {
    message_id?: boolean;
    ticket_id?: boolean;
    author_user_id?: boolean;
    message_body?: boolean;
    sent_at?: boolean;
};
export type ticket_messagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"message_id" | "ticket_id" | "author_user_id" | "message_body" | "sent_at", ExtArgs["result"]["ticket_messages"]>;
export type ticket_messagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.ticket_messages$usersArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.support_ticketsDefaultArgs<ExtArgs>;
};
export type ticket_messagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.ticket_messages$usersArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.support_ticketsDefaultArgs<ExtArgs>;
};
export type ticket_messagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.ticket_messages$usersArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.support_ticketsDefaultArgs<ExtArgs>;
};
export type $ticket_messagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ticket_messages";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        support_tickets: Prisma.$support_ticketsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        message_id: bigint;
        ticket_id: bigint;
        author_user_id: bigint | null;
        message_body: string;
        sent_at: Date | null;
    }, ExtArgs["result"]["ticket_messages"]>;
    composites: {};
};
export type ticket_messagesGetPayload<S extends boolean | null | undefined | ticket_messagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload, S>;
export type ticket_messagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ticket_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Ticket_messagesCountAggregateInputType | true;
};
export interface ticket_messagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ticket_messages'];
        meta: {
            name: 'ticket_messages';
        };
    };
    findUnique<T extends ticket_messagesFindUniqueArgs>(args: Prisma.SelectSubset<T, ticket_messagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ticket_messagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ticket_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ticket_messagesFindFirstArgs>(args?: Prisma.SelectSubset<T, ticket_messagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ticket_messagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ticket_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ticket_messagesFindManyArgs>(args?: Prisma.SelectSubset<T, ticket_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ticket_messagesCreateArgs>(args: Prisma.SelectSubset<T, ticket_messagesCreateArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ticket_messagesCreateManyArgs>(args?: Prisma.SelectSubset<T, ticket_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ticket_messagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ticket_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ticket_messagesDeleteArgs>(args: Prisma.SelectSubset<T, ticket_messagesDeleteArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ticket_messagesUpdateArgs>(args: Prisma.SelectSubset<T, ticket_messagesUpdateArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ticket_messagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, ticket_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ticket_messagesUpdateManyArgs>(args: Prisma.SelectSubset<T, ticket_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ticket_messagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ticket_messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ticket_messagesUpsertArgs>(args: Prisma.SelectSubset<T, ticket_messagesUpsertArgs<ExtArgs>>): Prisma.Prisma__ticket_messagesClient<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ticket_messagesCountArgs>(args?: Prisma.Subset<T, ticket_messagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ticket_messagesCountAggregateOutputType> : number>;
    aggregate<T extends Ticket_messagesAggregateArgs>(args: Prisma.Subset<T, Ticket_messagesAggregateArgs>): Prisma.PrismaPromise<GetTicket_messagesAggregateType<T>>;
    groupBy<T extends ticket_messagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ticket_messagesGroupByArgs['orderBy'];
    } : {
        orderBy?: ticket_messagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ticket_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicket_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ticket_messagesFieldRefs;
}
export interface Prisma__ticket_messagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.ticket_messages$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ticket_messages$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    support_tickets<T extends Prisma.support_ticketsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.support_ticketsDefaultArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ticket_messagesFieldRefs {
    readonly message_id: Prisma.FieldRef<"ticket_messages", 'BigInt'>;
    readonly ticket_id: Prisma.FieldRef<"ticket_messages", 'BigInt'>;
    readonly author_user_id: Prisma.FieldRef<"ticket_messages", 'BigInt'>;
    readonly message_body: Prisma.FieldRef<"ticket_messages", 'String'>;
    readonly sent_at: Prisma.FieldRef<"ticket_messages", 'DateTime'>;
}
export type ticket_messagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    where: Prisma.ticket_messagesWhereUniqueInput;
};
export type ticket_messagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    where: Prisma.ticket_messagesWhereUniqueInput;
};
export type ticket_messagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    where?: Prisma.ticket_messagesWhereInput;
    orderBy?: Prisma.ticket_messagesOrderByWithRelationInput | Prisma.ticket_messagesOrderByWithRelationInput[];
    cursor?: Prisma.ticket_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ticket_messagesScalarFieldEnum | Prisma.Ticket_messagesScalarFieldEnum[];
};
export type ticket_messagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    where?: Prisma.ticket_messagesWhereInput;
    orderBy?: Prisma.ticket_messagesOrderByWithRelationInput | Prisma.ticket_messagesOrderByWithRelationInput[];
    cursor?: Prisma.ticket_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ticket_messagesScalarFieldEnum | Prisma.Ticket_messagesScalarFieldEnum[];
};
export type ticket_messagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    where?: Prisma.ticket_messagesWhereInput;
    orderBy?: Prisma.ticket_messagesOrderByWithRelationInput | Prisma.ticket_messagesOrderByWithRelationInput[];
    cursor?: Prisma.ticket_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Ticket_messagesScalarFieldEnum | Prisma.Ticket_messagesScalarFieldEnum[];
};
export type ticket_messagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticket_messagesCreateInput, Prisma.ticket_messagesUncheckedCreateInput>;
};
export type ticket_messagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ticket_messagesCreateManyInput | Prisma.ticket_messagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ticket_messagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    data: Prisma.ticket_messagesCreateManyInput | Prisma.ticket_messagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ticket_messagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ticket_messagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticket_messagesUpdateInput, Prisma.ticket_messagesUncheckedUpdateInput>;
    where: Prisma.ticket_messagesWhereUniqueInput;
};
export type ticket_messagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ticket_messagesUpdateManyMutationInput, Prisma.ticket_messagesUncheckedUpdateManyInput>;
    where?: Prisma.ticket_messagesWhereInput;
    limit?: number;
};
export type ticket_messagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticket_messagesUpdateManyMutationInput, Prisma.ticket_messagesUncheckedUpdateManyInput>;
    where?: Prisma.ticket_messagesWhereInput;
    limit?: number;
    include?: Prisma.ticket_messagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ticket_messagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    where: Prisma.ticket_messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticket_messagesCreateInput, Prisma.ticket_messagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ticket_messagesUpdateInput, Prisma.ticket_messagesUncheckedUpdateInput>;
};
export type ticket_messagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
    where: Prisma.ticket_messagesWhereUniqueInput;
};
export type ticket_messagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticket_messagesWhereInput;
    limit?: number;
};
export type ticket_messages$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type ticket_messagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticket_messagesSelect<ExtArgs> | null;
    omit?: Prisma.ticket_messagesOmit<ExtArgs> | null;
    include?: Prisma.ticket_messagesInclude<ExtArgs> | null;
};
