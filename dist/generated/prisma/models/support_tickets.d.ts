import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type support_ticketsModel = runtime.Types.Result.DefaultSelection<Prisma.$support_ticketsPayload>;
export type AggregateSupport_tickets = {
    _count: Support_ticketsCountAggregateOutputType | null;
    _avg: Support_ticketsAvgAggregateOutputType | null;
    _sum: Support_ticketsSumAggregateOutputType | null;
    _min: Support_ticketsMinAggregateOutputType | null;
    _max: Support_ticketsMaxAggregateOutputType | null;
};
export type Support_ticketsAvgAggregateOutputType = {
    ticket_id: number | null;
    customer_id: number | null;
    order_id: number | null;
};
export type Support_ticketsSumAggregateOutputType = {
    ticket_id: bigint | null;
    customer_id: bigint | null;
    order_id: bigint | null;
};
export type Support_ticketsMinAggregateOutputType = {
    ticket_id: bigint | null;
    customer_id: bigint | null;
    order_id: bigint | null;
    subject: string | null;
    status: string | null;
    created_at: Date | null;
};
export type Support_ticketsMaxAggregateOutputType = {
    ticket_id: bigint | null;
    customer_id: bigint | null;
    order_id: bigint | null;
    subject: string | null;
    status: string | null;
    created_at: Date | null;
};
export type Support_ticketsCountAggregateOutputType = {
    ticket_id: number;
    customer_id: number;
    order_id: number;
    subject: number;
    status: number;
    created_at: number;
    _all: number;
};
export type Support_ticketsAvgAggregateInputType = {
    ticket_id?: true;
    customer_id?: true;
    order_id?: true;
};
export type Support_ticketsSumAggregateInputType = {
    ticket_id?: true;
    customer_id?: true;
    order_id?: true;
};
export type Support_ticketsMinAggregateInputType = {
    ticket_id?: true;
    customer_id?: true;
    order_id?: true;
    subject?: true;
    status?: true;
    created_at?: true;
};
export type Support_ticketsMaxAggregateInputType = {
    ticket_id?: true;
    customer_id?: true;
    order_id?: true;
    subject?: true;
    status?: true;
    created_at?: true;
};
export type Support_ticketsCountAggregateInputType = {
    ticket_id?: true;
    customer_id?: true;
    order_id?: true;
    subject?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type Support_ticketsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Support_ticketsCountAggregateInputType;
    _avg?: Support_ticketsAvgAggregateInputType;
    _sum?: Support_ticketsSumAggregateInputType;
    _min?: Support_ticketsMinAggregateInputType;
    _max?: Support_ticketsMaxAggregateInputType;
};
export type GetSupport_ticketsAggregateType<T extends Support_ticketsAggregateArgs> = {
    [P in keyof T & keyof AggregateSupport_tickets]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupport_tickets[P]> : Prisma.GetScalarType<T[P], AggregateSupport_tickets[P]>;
};
export type support_ticketsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithAggregationInput | Prisma.support_ticketsOrderByWithAggregationInput[];
    by: Prisma.Support_ticketsScalarFieldEnum[] | Prisma.Support_ticketsScalarFieldEnum;
    having?: Prisma.support_ticketsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Support_ticketsCountAggregateInputType | true;
    _avg?: Support_ticketsAvgAggregateInputType;
    _sum?: Support_ticketsSumAggregateInputType;
    _min?: Support_ticketsMinAggregateInputType;
    _max?: Support_ticketsMaxAggregateInputType;
};
export type Support_ticketsGroupByOutputType = {
    ticket_id: bigint;
    customer_id: bigint;
    order_id: bigint | null;
    subject: string;
    status: string;
    created_at: Date;
    _count: Support_ticketsCountAggregateOutputType | null;
    _avg: Support_ticketsAvgAggregateOutputType | null;
    _sum: Support_ticketsSumAggregateOutputType | null;
    _min: Support_ticketsMinAggregateOutputType | null;
    _max: Support_ticketsMaxAggregateOutputType | null;
};
export type GetSupport_ticketsGroupByPayload<T extends support_ticketsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Support_ticketsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Support_ticketsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Support_ticketsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Support_ticketsGroupByOutputType[P]>;
}>>;
export type support_ticketsWhereInput = {
    AND?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    OR?: Prisma.support_ticketsWhereInput[];
    NOT?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    ticket_id?: Prisma.BigIntFilter<"support_tickets"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"support_tickets"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"support_tickets"> | bigint | number | null;
    subject?: Prisma.StringFilter<"support_tickets"> | string;
    status?: Prisma.StringFilter<"support_tickets"> | string;
    created_at?: Prisma.DateTimeFilter<"support_tickets"> | Date | string;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    ticket_messages?: Prisma.Ticket_messagesListRelationFilter;
};
export type support_ticketsOrderByWithRelationInput = {
    ticket_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    customers?: Prisma.customersOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
    ticket_messages?: Prisma.ticket_messagesOrderByRelationAggregateInput;
};
export type support_ticketsWhereUniqueInput = Prisma.AtLeast<{
    ticket_id?: bigint | number;
    AND?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    OR?: Prisma.support_ticketsWhereInput[];
    NOT?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    customer_id?: Prisma.BigIntFilter<"support_tickets"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"support_tickets"> | bigint | number | null;
    subject?: Prisma.StringFilter<"support_tickets"> | string;
    status?: Prisma.StringFilter<"support_tickets"> | string;
    created_at?: Prisma.DateTimeFilter<"support_tickets"> | Date | string;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    ticket_messages?: Prisma.Ticket_messagesListRelationFilter;
}, "ticket_id">;
export type support_ticketsOrderByWithAggregationInput = {
    ticket_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.support_ticketsCountOrderByAggregateInput;
    _avg?: Prisma.support_ticketsAvgOrderByAggregateInput;
    _max?: Prisma.support_ticketsMaxOrderByAggregateInput;
    _min?: Prisma.support_ticketsMinOrderByAggregateInput;
    _sum?: Prisma.support_ticketsSumOrderByAggregateInput;
};
export type support_ticketsScalarWhereWithAggregatesInput = {
    AND?: Prisma.support_ticketsScalarWhereWithAggregatesInput | Prisma.support_ticketsScalarWhereWithAggregatesInput[];
    OR?: Prisma.support_ticketsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.support_ticketsScalarWhereWithAggregatesInput | Prisma.support_ticketsScalarWhereWithAggregatesInput[];
    ticket_id?: Prisma.BigIntWithAggregatesFilter<"support_tickets"> | bigint | number;
    customer_id?: Prisma.BigIntWithAggregatesFilter<"support_tickets"> | bigint | number;
    order_id?: Prisma.BigIntNullableWithAggregatesFilter<"support_tickets"> | bigint | number | null;
    subject?: Prisma.StringWithAggregatesFilter<"support_tickets"> | string;
    status?: Prisma.StringWithAggregatesFilter<"support_tickets"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"support_tickets"> | Date | string;
};
export type support_ticketsCreateInput = {
    ticket_id?: bigint | number;
    subject: string;
    status?: string;
    created_at?: Date | string;
    customers: Prisma.customersCreateNestedOneWithoutSupport_ticketsInput;
    orders?: Prisma.ordersCreateNestedOneWithoutSupport_ticketsInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateInput = {
    ticket_id?: bigint | number;
    customer_id: bigint | number;
    order_id?: bigint | number | null;
    subject: string;
    status?: string;
    created_at?: Date | string;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutSupport_ticketsInput;
};
export type support_ticketsUpdateInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.customersUpdateOneRequiredWithoutSupport_ticketsNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutSupport_ticketsNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutSupport_ticketsNestedInput;
};
export type support_ticketsCreateManyInput = {
    ticket_id?: bigint | number;
    customer_id: bigint | number;
    order_id?: bigint | number | null;
    subject: string;
    status?: string;
    created_at?: Date | string;
};
export type support_ticketsUpdateManyMutationInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type support_ticketsUncheckedUpdateManyInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Support_ticketsListRelationFilter = {
    every?: Prisma.support_ticketsWhereInput;
    some?: Prisma.support_ticketsWhereInput;
    none?: Prisma.support_ticketsWhereInput;
};
export type support_ticketsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type support_ticketsCountOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type support_ticketsAvgOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type support_ticketsMaxOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type support_ticketsMinOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type support_ticketsSumOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type Support_ticketsScalarRelationFilter = {
    is?: Prisma.support_ticketsWhereInput;
    isNot?: Prisma.support_ticketsWhereInput;
};
export type support_ticketsCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutCustomersInput, Prisma.support_ticketsUncheckedCreateWithoutCustomersInput> | Prisma.support_ticketsCreateWithoutCustomersInput[] | Prisma.support_ticketsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutCustomersInput | Prisma.support_ticketsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.support_ticketsCreateManyCustomersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutCustomersInput, Prisma.support_ticketsUncheckedCreateWithoutCustomersInput> | Prisma.support_ticketsCreateWithoutCustomersInput[] | Prisma.support_ticketsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutCustomersInput | Prisma.support_ticketsCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.support_ticketsCreateManyCustomersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutCustomersInput, Prisma.support_ticketsUncheckedCreateWithoutCustomersInput> | Prisma.support_ticketsCreateWithoutCustomersInput[] | Prisma.support_ticketsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutCustomersInput | Prisma.support_ticketsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.support_ticketsCreateManyCustomersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutCustomersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutCustomersInput, Prisma.support_ticketsUncheckedCreateWithoutCustomersInput> | Prisma.support_ticketsCreateWithoutCustomersInput[] | Prisma.support_ticketsUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutCustomersInput | Prisma.support_ticketsCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutCustomersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.support_ticketsCreateManyCustomersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutCustomersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutCustomersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsCreateNestedOneWithoutTicket_messagesInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutTicket_messagesInput, Prisma.support_ticketsUncheckedCreateWithoutTicket_messagesInput>;
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutTicket_messagesInput;
    connect?: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsUpdateOneRequiredWithoutTicket_messagesNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutTicket_messagesInput, Prisma.support_ticketsUncheckedCreateWithoutTicket_messagesInput>;
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutTicket_messagesInput;
    upsert?: Prisma.support_ticketsUpsertWithoutTicket_messagesInput;
    connect?: Prisma.support_ticketsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.support_ticketsUpdateToOneWithWhereWithoutTicket_messagesInput, Prisma.support_ticketsUpdateWithoutTicket_messagesInput>, Prisma.support_ticketsUncheckedUpdateWithoutTicket_messagesInput>;
};
export type support_ticketsCreateWithoutCustomersInput = {
    ticket_id?: bigint | number;
    subject: string;
    status?: string;
    created_at?: Date | string;
    orders?: Prisma.ordersCreateNestedOneWithoutSupport_ticketsInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateWithoutCustomersInput = {
    ticket_id?: bigint | number;
    order_id?: bigint | number | null;
    subject: string;
    status?: string;
    created_at?: Date | string;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutSupport_ticketsInput;
};
export type support_ticketsCreateOrConnectWithoutCustomersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutCustomersInput, Prisma.support_ticketsUncheckedCreateWithoutCustomersInput>;
};
export type support_ticketsCreateManyCustomersInputEnvelope = {
    data: Prisma.support_ticketsCreateManyCustomersInput | Prisma.support_ticketsCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type support_ticketsUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    update: Prisma.XOR<Prisma.support_ticketsUpdateWithoutCustomersInput, Prisma.support_ticketsUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutCustomersInput, Prisma.support_ticketsUncheckedCreateWithoutCustomersInput>;
};
export type support_ticketsUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateWithoutCustomersInput, Prisma.support_ticketsUncheckedUpdateWithoutCustomersInput>;
};
export type support_ticketsUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.support_ticketsScalarWhereInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersInput>;
};
export type support_ticketsScalarWhereInput = {
    AND?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
    OR?: Prisma.support_ticketsScalarWhereInput[];
    NOT?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
    ticket_id?: Prisma.BigIntFilter<"support_tickets"> | bigint | number;
    customer_id?: Prisma.BigIntFilter<"support_tickets"> | bigint | number;
    order_id?: Prisma.BigIntNullableFilter<"support_tickets"> | bigint | number | null;
    subject?: Prisma.StringFilter<"support_tickets"> | string;
    status?: Prisma.StringFilter<"support_tickets"> | string;
    created_at?: Prisma.DateTimeFilter<"support_tickets"> | Date | string;
};
export type support_ticketsCreateWithoutOrdersInput = {
    ticket_id?: bigint | number;
    subject: string;
    status?: string;
    created_at?: Date | string;
    customers: Prisma.customersCreateNestedOneWithoutSupport_ticketsInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateWithoutOrdersInput = {
    ticket_id?: bigint | number;
    customer_id: bigint | number;
    subject: string;
    status?: string;
    created_at?: Date | string;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutSupport_ticketsInput;
};
export type support_ticketsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput>;
};
export type support_ticketsCreateManyOrdersInputEnvelope = {
    data: Prisma.support_ticketsCreateManyOrdersInput | Prisma.support_ticketsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type support_ticketsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    update: Prisma.XOR<Prisma.support_ticketsUpdateWithoutOrdersInput, Prisma.support_ticketsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput>;
};
export type support_ticketsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateWithoutOrdersInput, Prisma.support_ticketsUncheckedUpdateWithoutOrdersInput>;
};
export type support_ticketsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.support_ticketsScalarWhereInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersInput>;
};
export type support_ticketsCreateWithoutTicket_messagesInput = {
    ticket_id?: bigint | number;
    subject: string;
    status?: string;
    created_at?: Date | string;
    customers: Prisma.customersCreateNestedOneWithoutSupport_ticketsInput;
    orders?: Prisma.ordersCreateNestedOneWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateWithoutTicket_messagesInput = {
    ticket_id?: bigint | number;
    customer_id: bigint | number;
    order_id?: bigint | number | null;
    subject: string;
    status?: string;
    created_at?: Date | string;
};
export type support_ticketsCreateOrConnectWithoutTicket_messagesInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutTicket_messagesInput, Prisma.support_ticketsUncheckedCreateWithoutTicket_messagesInput>;
};
export type support_ticketsUpsertWithoutTicket_messagesInput = {
    update: Prisma.XOR<Prisma.support_ticketsUpdateWithoutTicket_messagesInput, Prisma.support_ticketsUncheckedUpdateWithoutTicket_messagesInput>;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutTicket_messagesInput, Prisma.support_ticketsUncheckedCreateWithoutTicket_messagesInput>;
    where?: Prisma.support_ticketsWhereInput;
};
export type support_ticketsUpdateToOneWithWhereWithoutTicket_messagesInput = {
    where?: Prisma.support_ticketsWhereInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateWithoutTicket_messagesInput, Prisma.support_ticketsUncheckedUpdateWithoutTicket_messagesInput>;
};
export type support_ticketsUpdateWithoutTicket_messagesInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.customersUpdateOneRequiredWithoutSupport_ticketsNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateWithoutTicket_messagesInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type support_ticketsCreateManyCustomersInput = {
    ticket_id?: bigint | number;
    order_id?: bigint | number | null;
    subject: string;
    status?: string;
    created_at?: Date | string;
};
export type support_ticketsUpdateWithoutCustomersInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.ordersUpdateOneWithoutSupport_ticketsNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateWithoutCustomersInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateManyWithoutCustomersInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type support_ticketsCreateManyOrdersInput = {
    ticket_id?: bigint | number;
    customer_id: bigint | number;
    subject: string;
    status?: string;
    created_at?: Date | string;
};
export type support_ticketsUpdateWithoutOrdersInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.customersUpdateOneRequiredWithoutSupport_ticketsNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateWithoutOrdersInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateManyWithoutOrdersInput = {
    ticket_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Support_ticketsCountOutputType = {
    ticket_messages: number;
};
export type Support_ticketsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ticket_messages?: boolean | Support_ticketsCountOutputTypeCountTicket_messagesArgs;
};
export type Support_ticketsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Support_ticketsCountOutputTypeSelect<ExtArgs> | null;
};
export type Support_ticketsCountOutputTypeCountTicket_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticket_messagesWhereInput;
};
export type support_ticketsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ticket_id?: boolean;
    customer_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    status?: boolean;
    created_at?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    ticket_messages?: boolean | Prisma.support_tickets$ticket_messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.Support_ticketsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["support_tickets"]>;
export type support_ticketsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ticket_id?: boolean;
    customer_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    status?: boolean;
    created_at?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
}, ExtArgs["result"]["support_tickets"]>;
export type support_ticketsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ticket_id?: boolean;
    customer_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    status?: boolean;
    created_at?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
}, ExtArgs["result"]["support_tickets"]>;
export type support_ticketsSelectScalar = {
    ticket_id?: boolean;
    customer_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type support_ticketsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ticket_id" | "customer_id" | "order_id" | "subject" | "status" | "created_at", ExtArgs["result"]["support_tickets"]>;
export type support_ticketsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    ticket_messages?: boolean | Prisma.support_tickets$ticket_messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.Support_ticketsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type support_ticketsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
};
export type support_ticketsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
};
export type $support_ticketsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "support_tickets";
    objects: {
        customers: Prisma.$customersPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs> | null;
        ticket_messages: Prisma.$ticket_messagesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ticket_id: bigint;
        customer_id: bigint;
        order_id: bigint | null;
        subject: string;
        status: string;
        created_at: Date;
    }, ExtArgs["result"]["support_tickets"]>;
    composites: {};
};
export type support_ticketsGetPayload<S extends boolean | null | undefined | support_ticketsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload, S>;
export type support_ticketsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<support_ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Support_ticketsCountAggregateInputType | true;
};
export interface support_ticketsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['support_tickets'];
        meta: {
            name: 'support_tickets';
        };
    };
    findUnique<T extends support_ticketsFindUniqueArgs>(args: Prisma.SelectSubset<T, support_ticketsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends support_ticketsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, support_ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends support_ticketsFindFirstArgs>(args?: Prisma.SelectSubset<T, support_ticketsFindFirstArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends support_ticketsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, support_ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends support_ticketsFindManyArgs>(args?: Prisma.SelectSubset<T, support_ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends support_ticketsCreateArgs>(args: Prisma.SelectSubset<T, support_ticketsCreateArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends support_ticketsCreateManyArgs>(args?: Prisma.SelectSubset<T, support_ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends support_ticketsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, support_ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends support_ticketsDeleteArgs>(args: Prisma.SelectSubset<T, support_ticketsDeleteArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends support_ticketsUpdateArgs>(args: Prisma.SelectSubset<T, support_ticketsUpdateArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends support_ticketsDeleteManyArgs>(args?: Prisma.SelectSubset<T, support_ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends support_ticketsUpdateManyArgs>(args: Prisma.SelectSubset<T, support_ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends support_ticketsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, support_ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends support_ticketsUpsertArgs>(args: Prisma.SelectSubset<T, support_ticketsUpsertArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends support_ticketsCountArgs>(args?: Prisma.Subset<T, support_ticketsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Support_ticketsCountAggregateOutputType> : number>;
    aggregate<T extends Support_ticketsAggregateArgs>(args: Prisma.Subset<T, Support_ticketsAggregateArgs>): Prisma.PrismaPromise<GetSupport_ticketsAggregateType<T>>;
    groupBy<T extends support_ticketsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: support_ticketsGroupByArgs['orderBy'];
    } : {
        orderBy?: support_ticketsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, support_ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupport_ticketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: support_ticketsFieldRefs;
}
export interface Prisma__support_ticketsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customers<T extends Prisma.customersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customersDefaultArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.support_tickets$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.support_tickets$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ticket_messages<T extends Prisma.support_tickets$ticket_messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.support_tickets$ticket_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface support_ticketsFieldRefs {
    readonly ticket_id: Prisma.FieldRef<"support_tickets", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"support_tickets", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"support_tickets", 'BigInt'>;
    readonly subject: Prisma.FieldRef<"support_tickets", 'String'>;
    readonly status: Prisma.FieldRef<"support_tickets", 'String'>;
    readonly created_at: Prisma.FieldRef<"support_tickets", 'DateTime'>;
}
export type support_ticketsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Support_ticketsScalarFieldEnum | Prisma.Support_ticketsScalarFieldEnum[];
};
export type support_ticketsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Support_ticketsScalarFieldEnum | Prisma.Support_ticketsScalarFieldEnum[];
};
export type support_ticketsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Support_ticketsScalarFieldEnum | Prisma.Support_ticketsScalarFieldEnum[];
};
export type support_ticketsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.support_ticketsCreateInput, Prisma.support_ticketsUncheckedCreateInput>;
};
export type support_ticketsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.support_ticketsCreateManyInput | Prisma.support_ticketsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type support_ticketsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    data: Prisma.support_ticketsCreateManyInput | Prisma.support_ticketsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.support_ticketsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type support_ticketsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.support_ticketsUpdateInput, Prisma.support_ticketsUncheckedUpdateInput>;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyInput>;
    where?: Prisma.support_ticketsWhereInput;
    limit?: number;
};
export type support_ticketsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyInput>;
    where?: Prisma.support_ticketsWhereInput;
    limit?: number;
    include?: Prisma.support_ticketsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type support_ticketsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateInput, Prisma.support_ticketsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.support_ticketsUpdateInput, Prisma.support_ticketsUncheckedUpdateInput>;
};
export type support_ticketsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
    limit?: number;
};
export type support_tickets$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type support_tickets$ticket_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type support_ticketsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
};
