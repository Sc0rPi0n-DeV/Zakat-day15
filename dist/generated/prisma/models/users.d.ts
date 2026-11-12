import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    user_id: number | null;
};
export type UsersSumAggregateOutputType = {
    user_id: bigint | null;
};
export type UsersMinAggregateOutputType = {
    user_id: bigint | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    phone: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type UsersMaxAggregateOutputType = {
    user_id: bigint | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    phone: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type UsersCountAggregateOutputType = {
    user_id: number;
    email: number;
    password_hash: number;
    full_name: number;
    phone: number;
    is_active: number;
    created_at: number;
    metadata: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    user_id?: true;
};
export type UsersSumAggregateInputType = {
    user_id?: true;
};
export type UsersMinAggregateInputType = {
    user_id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    is_active?: true;
    created_at?: true;
};
export type UsersMaxAggregateInputType = {
    user_id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    is_active?: true;
    created_at?: true;
};
export type UsersCountAggregateInputType = {
    user_id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    is_active?: true;
    created_at?: true;
    metadata?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    user_id: bigint;
    email: string;
    password_hash: string;
    full_name: string;
    phone: string | null;
    is_active: boolean;
    created_at: Date;
    metadata: runtime.JsonValue;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    user_id?: Prisma.BigIntFilter<"users"> | bigint | number;
    email?: Prisma.StringFilter<"users"> | string;
    password_hash?: Prisma.StringFilter<"users"> | string;
    full_name?: Prisma.StringFilter<"users"> | string;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    is_active?: Prisma.BoolFilter<"users"> | boolean;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    metadata?: Prisma.JsonFilter<"users">;
    audit_logs?: Prisma.Audit_logsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    login_attempts?: Prisma.Login_attemptsListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
    ticket_messages?: Prisma.Ticket_messagesListRelationFilter;
    user_roles?: Prisma.User_rolesListRelationFilter;
    user_sessions?: Prisma.User_sessionsListRelationFilter;
};
export type usersOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    audit_logs?: Prisma.audit_logsOrderByRelationAggregateInput;
    customers?: Prisma.customersOrderByWithRelationInput;
    login_attempts?: Prisma.login_attemptsOrderByRelationAggregateInput;
    notifications?: Prisma.notificationsOrderByRelationAggregateInput;
    ticket_messages?: Prisma.ticket_messagesOrderByRelationAggregateInput;
    user_roles?: Prisma.user_rolesOrderByRelationAggregateInput;
    user_sessions?: Prisma.user_sessionsOrderByRelationAggregateInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number;
    email?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    password_hash?: Prisma.StringFilter<"users"> | string;
    full_name?: Prisma.StringFilter<"users"> | string;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    is_active?: Prisma.BoolFilter<"users"> | boolean;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    metadata?: Prisma.JsonFilter<"users">;
    audit_logs?: Prisma.Audit_logsListRelationFilter;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    login_attempts?: Prisma.Login_attemptsListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
    ticket_messages?: Prisma.Ticket_messagesListRelationFilter;
    user_roles?: Prisma.User_rolesListRelationFilter;
    user_sessions?: Prisma.User_sessionsListRelationFilter;
}, "user_id" | "email">;
export type usersOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    user_id?: Prisma.BigIntWithAggregatesFilter<"users"> | bigint | number;
    email?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"users"> | string;
    full_name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"users"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
    metadata?: Prisma.JsonWithAggregatesFilter<"users">;
};
export type usersCreateInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersUpdateInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type usersUpdateManyMutationInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type usersUncheckedUpdateManyInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type UsersNullableScalarRelationFilter = {
    is?: Prisma.usersWhereInput | null;
    isNot?: Prisma.usersWhereInput | null;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type usersCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutAudit_logsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAudit_logsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneWithoutAudit_logsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAudit_logsInput;
    upsert?: Prisma.usersUpsertWithoutAudit_logsInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutAudit_logsInput, Prisma.usersUpdateWithoutAudit_logsInput>, Prisma.usersUncheckedUpdateWithoutAudit_logsInput>;
};
export type usersCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.usersUpsertWithoutCustomersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutCustomersInput, Prisma.usersUpdateWithoutCustomersInput>, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
};
export type usersCreateNestedOneWithoutLogin_attemptsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutLogin_attemptsInput, Prisma.usersUncheckedCreateWithoutLogin_attemptsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutLogin_attemptsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneWithoutLogin_attemptsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutLogin_attemptsInput, Prisma.usersUncheckedCreateWithoutLogin_attemptsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutLogin_attemptsInput;
    upsert?: Prisma.usersUpsertWithoutLogin_attemptsInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutLogin_attemptsInput, Prisma.usersUpdateWithoutLogin_attemptsInput>, Prisma.usersUncheckedUpdateWithoutLogin_attemptsInput>;
};
export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.usersUpsertWithoutNotificationsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutNotificationsInput, Prisma.usersUpdateWithoutNotificationsInput>, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
};
export type usersCreateNestedOneWithoutTicket_messagesInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTicket_messagesInput, Prisma.usersUncheckedCreateWithoutTicket_messagesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTicket_messagesInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneWithoutTicket_messagesNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTicket_messagesInput, Prisma.usersUncheckedCreateWithoutTicket_messagesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTicket_messagesInput;
    upsert?: Prisma.usersUpsertWithoutTicket_messagesInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutTicket_messagesInput, Prisma.usersUpdateWithoutTicket_messagesInput>, Prisma.usersUncheckedUpdateWithoutTicket_messagesInput>;
};
export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_rolesInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_rolesInput;
    upsert?: Prisma.usersUpsertWithoutUser_rolesInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutUser_rolesInput, Prisma.usersUpdateWithoutUser_rolesInput>, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
};
export type usersCreateNestedOneWithoutUser_sessionsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_sessionsInput, Prisma.usersUncheckedCreateWithoutUser_sessionsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_sessionsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutUser_sessionsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_sessionsInput, Prisma.usersUncheckedCreateWithoutUser_sessionsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_sessionsInput;
    upsert?: Prisma.usersUpsertWithoutUser_sessionsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutUser_sessionsInput, Prisma.usersUpdateWithoutUser_sessionsInput>, Prisma.usersUncheckedUpdateWithoutUser_sessionsInput>;
};
export type usersCreateWithoutAudit_logsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutAudit_logsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutAudit_logsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
};
export type usersUpsertWithoutAudit_logsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutAudit_logsInput, Prisma.usersUncheckedUpdateWithoutAudit_logsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutAudit_logsInput, Prisma.usersUncheckedUpdateWithoutAudit_logsInput>;
};
export type usersUpdateWithoutAudit_logsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutAudit_logsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutCustomersInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutCustomersInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutCustomersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
};
export type usersUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutCustomersInput, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutCustomersInput, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
};
export type usersUpdateWithoutCustomersInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutCustomersInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutLogin_attemptsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutLogin_attemptsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutLogin_attemptsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutLogin_attemptsInput, Prisma.usersUncheckedCreateWithoutLogin_attemptsInput>;
};
export type usersUpsertWithoutLogin_attemptsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutLogin_attemptsInput, Prisma.usersUncheckedUpdateWithoutLogin_attemptsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutLogin_attemptsInput, Prisma.usersUncheckedCreateWithoutLogin_attemptsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutLogin_attemptsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutLogin_attemptsInput, Prisma.usersUncheckedUpdateWithoutLogin_attemptsInput>;
};
export type usersUpdateWithoutLogin_attemptsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutLogin_attemptsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutNotificationsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutNotificationsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsUncheckedCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
};
export type usersUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutNotificationsInput, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutNotificationsInput, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
};
export type usersUpdateWithoutNotificationsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutNotificationsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUncheckedUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutTicket_messagesInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutTicket_messagesInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutTicket_messagesInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutTicket_messagesInput, Prisma.usersUncheckedCreateWithoutTicket_messagesInput>;
};
export type usersUpsertWithoutTicket_messagesInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutTicket_messagesInput, Prisma.usersUncheckedUpdateWithoutTicket_messagesInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutTicket_messagesInput, Prisma.usersUncheckedCreateWithoutTicket_messagesInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutTicket_messagesInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutTicket_messagesInput, Prisma.usersUncheckedUpdateWithoutTicket_messagesInput>;
};
export type usersUpdateWithoutTicket_messagesInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutTicket_messagesInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutUser_rolesInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutUser_rolesInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutUsersInput;
    user_sessions?: Prisma.user_sessionsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
};
export type usersUpsertWithoutUser_rolesInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutUser_rolesInput, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutUser_rolesInput, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
};
export type usersUpdateWithoutUser_rolesInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutUser_rolesInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput;
    user_sessions?: Prisma.user_sessionsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutUser_sessionsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutUser_sessionsInput = {
    user_id?: bigint | number;
    email: string;
    password_hash: string;
    full_name: string;
    phone?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    login_attempts?: Prisma.login_attemptsUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutUser_sessionsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_sessionsInput, Prisma.usersUncheckedCreateWithoutUser_sessionsInput>;
};
export type usersUpsertWithoutUser_sessionsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutUser_sessionsInput, Prisma.usersUncheckedUpdateWithoutUser_sessionsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_sessionsInput, Prisma.usersUncheckedCreateWithoutUser_sessionsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutUser_sessionsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutUser_sessionsInput, Prisma.usersUncheckedUpdateWithoutUser_sessionsInput>;
};
export type usersUpdateWithoutUser_sessionsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutUser_sessionsInput = {
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    login_attempts?: Prisma.login_attemptsUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    ticket_messages?: Prisma.ticket_messagesUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
};
export type UsersCountOutputType = {
    audit_logs: number;
    login_attempts: number;
    notifications: number;
    ticket_messages: number;
    user_roles: number;
    user_sessions: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    audit_logs?: boolean | UsersCountOutputTypeCountAudit_logsArgs;
    login_attempts?: boolean | UsersCountOutputTypeCountLogin_attemptsArgs;
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs;
    ticket_messages?: boolean | UsersCountOutputTypeCountTicket_messagesArgs;
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs;
    user_sessions?: boolean | UsersCountOutputTypeCountUser_sessionsArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountAudit_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logsWhereInput;
};
export type UsersCountOutputTypeCountLogin_attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.login_attemptsWhereInput;
};
export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
};
export type UsersCountOutputTypeCountTicket_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticket_messagesWhereInput;
};
export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_rolesWhereInput;
};
export type UsersCountOutputTypeCountUser_sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_sessionsWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    metadata?: boolean;
    audit_logs?: boolean | Prisma.users$audit_logsArgs<ExtArgs>;
    customers?: boolean | Prisma.users$customersArgs<ExtArgs>;
    login_attempts?: boolean | Prisma.users$login_attemptsArgs<ExtArgs>;
    notifications?: boolean | Prisma.users$notificationsArgs<ExtArgs>;
    ticket_messages?: boolean | Prisma.users$ticket_messagesArgs<ExtArgs>;
    user_roles?: boolean | Prisma.users$user_rolesArgs<ExtArgs>;
    user_sessions?: boolean | Prisma.users$user_sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    metadata?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    metadata?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    user_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    metadata?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "email" | "password_hash" | "full_name" | "phone" | "is_active" | "created_at" | "metadata", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    audit_logs?: boolean | Prisma.users$audit_logsArgs<ExtArgs>;
    customers?: boolean | Prisma.users$customersArgs<ExtArgs>;
    login_attempts?: boolean | Prisma.users$login_attemptsArgs<ExtArgs>;
    notifications?: boolean | Prisma.users$notificationsArgs<ExtArgs>;
    ticket_messages?: boolean | Prisma.users$ticket_messagesArgs<ExtArgs>;
    user_roles?: boolean | Prisma.users$user_rolesArgs<ExtArgs>;
    user_sessions?: boolean | Prisma.users$user_sessionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        audit_logs: Prisma.$audit_logsPayload<ExtArgs>[];
        customers: Prisma.$customersPayload<ExtArgs> | null;
        login_attempts: Prisma.$login_attemptsPayload<ExtArgs>[];
        notifications: Prisma.$notificationsPayload<ExtArgs>[];
        ticket_messages: Prisma.$ticket_messagesPayload<ExtArgs>[];
        user_roles: Prisma.$user_rolesPayload<ExtArgs>[];
        user_sessions: Prisma.$user_sessionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: bigint;
        email: string;
        password_hash: string;
        full_name: string;
        phone: string | null;
        is_active: boolean;
        created_at: Date;
        metadata: runtime.JsonValue;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    audit_logs<T extends Prisma.users$audit_logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customers<T extends Prisma.users$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    login_attempts<T extends Prisma.users$login_attemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$login_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$login_attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.users$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ticket_messages<T extends Prisma.users$ticket_messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$ticket_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticket_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_roles<T extends Prisma.users$user_rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_sessions<T extends Prisma.users$user_sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$user_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly user_id: Prisma.FieldRef<"users", 'BigInt'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly password_hash: Prisma.FieldRef<"users", 'String'>;
    readonly full_name: Prisma.FieldRef<"users", 'String'>;
    readonly phone: Prisma.FieldRef<"users", 'String'>;
    readonly is_active: Prisma.FieldRef<"users", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly metadata: Prisma.FieldRef<"users", 'Json'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type users$audit_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where?: Prisma.audit_logsWhereInput;
    orderBy?: Prisma.audit_logsOrderByWithRelationInput | Prisma.audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logsScalarFieldEnum | Prisma.Audit_logsScalarFieldEnum[];
};
export type users$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type users$login_attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type users$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type users$ticket_messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type users$user_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithRelationInput | Prisma.user_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_rolesScalarFieldEnum | Prisma.User_rolesScalarFieldEnum[];
};
export type users$user_sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_sessionsSelect<ExtArgs> | null;
    omit?: Prisma.user_sessionsOmit<ExtArgs> | null;
    include?: Prisma.user_sessionsInclude<ExtArgs> | null;
    where?: Prisma.user_sessionsWhereInput;
    orderBy?: Prisma.user_sessionsOrderByWithRelationInput | Prisma.user_sessionsOrderByWithRelationInput[];
    cursor?: Prisma.user_sessionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_sessionsScalarFieldEnum | Prisma.User_sessionsScalarFieldEnum[];
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
};
