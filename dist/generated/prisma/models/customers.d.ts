import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customersModel = runtime.Types.Result.DefaultSelection<Prisma.$customersPayload>;
export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null;
    _avg: CustomersAvgAggregateOutputType | null;
    _sum: CustomersSumAggregateOutputType | null;
    _min: CustomersMinAggregateOutputType | null;
    _max: CustomersMaxAggregateOutputType | null;
};
export type CustomersAvgAggregateOutputType = {
    customer_id: number | null;
    user_id: number | null;
    loyalty_points: number | null;
};
export type CustomersSumAggregateOutputType = {
    customer_id: bigint | null;
    user_id: bigint | null;
    loyalty_points: number | null;
};
export type CustomersMinAggregateOutputType = {
    customer_id: bigint | null;
    user_id: bigint | null;
    loyalty_points: number | null;
    date_of_birth: Date | null;
};
export type CustomersMaxAggregateOutputType = {
    customer_id: bigint | null;
    user_id: bigint | null;
    loyalty_points: number | null;
    date_of_birth: Date | null;
};
export type CustomersCountAggregateOutputType = {
    customer_id: number;
    user_id: number;
    loyalty_points: number;
    date_of_birth: number;
    _all: number;
};
export type CustomersAvgAggregateInputType = {
    customer_id?: true;
    user_id?: true;
    loyalty_points?: true;
};
export type CustomersSumAggregateInputType = {
    customer_id?: true;
    user_id?: true;
    loyalty_points?: true;
};
export type CustomersMinAggregateInputType = {
    customer_id?: true;
    user_id?: true;
    loyalty_points?: true;
    date_of_birth?: true;
};
export type CustomersMaxAggregateInputType = {
    customer_id?: true;
    user_id?: true;
    loyalty_points?: true;
    date_of_birth?: true;
};
export type CustomersCountAggregateInputType = {
    customer_id?: true;
    user_id?: true;
    loyalty_points?: true;
    date_of_birth?: true;
    _all?: true;
};
export type CustomersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomersCountAggregateInputType;
    _avg?: CustomersAvgAggregateInputType;
    _sum?: CustomersSumAggregateInputType;
    _min?: CustomersMinAggregateInputType;
    _max?: CustomersMaxAggregateInputType;
};
export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomers[P]> : Prisma.GetScalarType<T[P], AggregateCustomers[P]>;
};
export type customersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithAggregationInput | Prisma.customersOrderByWithAggregationInput[];
    by: Prisma.CustomersScalarFieldEnum[] | Prisma.CustomersScalarFieldEnum;
    having?: Prisma.customersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomersCountAggregateInputType | true;
    _avg?: CustomersAvgAggregateInputType;
    _sum?: CustomersSumAggregateInputType;
    _min?: CustomersMinAggregateInputType;
    _max?: CustomersMaxAggregateInputType;
};
export type CustomersGroupByOutputType = {
    customer_id: bigint;
    user_id: bigint;
    loyalty_points: number;
    date_of_birth: Date | null;
    _count: CustomersCountAggregateOutputType | null;
    _avg: CustomersAvgAggregateOutputType | null;
    _sum: CustomersSumAggregateOutputType | null;
    _min: CustomersMinAggregateOutputType | null;
    _max: CustomersMaxAggregateOutputType | null;
};
export type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomersGroupByOutputType[P]>;
}>>;
export type customersWhereInput = {
    AND?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    OR?: Prisma.customersWhereInput[];
    NOT?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    customer_id?: Prisma.BigIntFilter<"customers"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"customers"> | bigint | number;
    loyalty_points?: Prisma.IntFilter<"customers"> | number;
    date_of_birth?: Prisma.DateTimeNullableFilter<"customers"> | Date | string | null;
    addresses?: Prisma.AddressesListRelationFilter;
    carts?: Prisma.CartsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    orders?: Prisma.OrdersListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
};
export type customersOrderByWithRelationInput = {
    customer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    loyalty_points?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrderInput | Prisma.SortOrder;
    addresses?: Prisma.addressesOrderByRelationAggregateInput;
    carts?: Prisma.cartsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
    reviews?: Prisma.reviewsOrderByRelationAggregateInput;
    support_tickets?: Prisma.support_ticketsOrderByRelationAggregateInput;
    wishlists?: Prisma.wishlistsOrderByRelationAggregateInput;
};
export type customersWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: bigint | number;
    user_id?: bigint | number;
    AND?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    OR?: Prisma.customersWhereInput[];
    NOT?: Prisma.customersWhereInput | Prisma.customersWhereInput[];
    loyalty_points?: Prisma.IntFilter<"customers"> | number;
    date_of_birth?: Prisma.DateTimeNullableFilter<"customers"> | Date | string | null;
    addresses?: Prisma.AddressesListRelationFilter;
    carts?: Prisma.CartsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    orders?: Prisma.OrdersListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
}, "customer_id" | "user_id">;
export type customersOrderByWithAggregationInput = {
    customer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    loyalty_points?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.customersCountOrderByAggregateInput;
    _avg?: Prisma.customersAvgOrderByAggregateInput;
    _max?: Prisma.customersMaxOrderByAggregateInput;
    _min?: Prisma.customersMinOrderByAggregateInput;
    _sum?: Prisma.customersSumOrderByAggregateInput;
};
export type customersScalarWhereWithAggregatesInput = {
    AND?: Prisma.customersScalarWhereWithAggregatesInput | Prisma.customersScalarWhereWithAggregatesInput[];
    OR?: Prisma.customersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customersScalarWhereWithAggregatesInput | Prisma.customersScalarWhereWithAggregatesInput[];
    customer_id?: Prisma.BigIntWithAggregatesFilter<"customers"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"customers"> | bigint | number;
    loyalty_points?: Prisma.IntWithAggregatesFilter<"customers"> | number;
    date_of_birth?: Prisma.DateTimeNullableWithAggregatesFilter<"customers"> | Date | string | null;
};
export type customersCreateInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersUpdateInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateManyInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
};
export type customersUpdateManyMutationInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customersUncheckedUpdateManyInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CustomersScalarRelationFilter = {
    is?: Prisma.customersWhereInput;
    isNot?: Prisma.customersWhereInput;
};
export type customersCountOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    loyalty_points?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
};
export type customersAvgOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    loyalty_points?: Prisma.SortOrder;
};
export type customersMaxOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    loyalty_points?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
};
export type customersMinOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    loyalty_points?: Prisma.SortOrder;
    date_of_birth?: Prisma.SortOrder;
};
export type customersSumOrderByAggregateInput = {
    customer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    loyalty_points?: Prisma.SortOrder;
};
export type CustomersNullableScalarRelationFilter = {
    is?: Prisma.customersWhereInput | null;
    isNot?: Prisma.customersWhereInput | null;
};
export type customersCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutAddressesInput, Prisma.customersUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutAddressesInput, Prisma.customersUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.customersUpsertWithoutAddressesInput;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutAddressesInput, Prisma.customersUpdateWithoutAddressesInput>, Prisma.customersUncheckedUpdateWithoutAddressesInput>;
};
export type customersCreateNestedOneWithoutCartsInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutCartsInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutCartsInput;
    upsert?: Prisma.customersUpsertWithoutCartsInput;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutCartsInput, Prisma.customersUpdateWithoutCartsInput>, Prisma.customersUncheckedUpdateWithoutCartsInput>;
};
export type customersCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.customersUpsertWithoutOrdersInput;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutOrdersInput, Prisma.customersUpdateWithoutOrdersInput>, Prisma.customersUncheckedUpdateWithoutOrdersInput>;
};
export type customersCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.customersUpsertWithoutReviewsInput;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutReviewsInput, Prisma.customersUpdateWithoutReviewsInput>, Prisma.customersUncheckedUpdateWithoutReviewsInput>;
};
export type customersCreateNestedOneWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutSupport_ticketsInput, Prisma.customersUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutSupport_ticketsInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneRequiredWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutSupport_ticketsInput, Prisma.customersUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutSupport_ticketsInput;
    upsert?: Prisma.customersUpsertWithoutSupport_ticketsInput;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutSupport_ticketsInput, Prisma.customersUpdateWithoutSupport_ticketsInput>, Prisma.customersUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type customersCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.customersUpsertWithoutUsersInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutUsersInput, Prisma.customersUpdateWithoutUsersInput>, Prisma.customersUncheckedUpdateWithoutUsersInput>;
};
export type customersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.customersUpsertWithoutUsersInput;
    disconnect?: Prisma.customersWhereInput | boolean;
    delete?: Prisma.customersWhereInput | boolean;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutUsersInput, Prisma.customersUpdateWithoutUsersInput>, Prisma.customersUncheckedUpdateWithoutUsersInput>;
};
export type customersCreateNestedOneWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutWishlistsInput, Prisma.customersUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutWishlistsInput;
    connect?: Prisma.customersWhereUniqueInput;
};
export type customersUpdateOneRequiredWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.customersCreateWithoutWishlistsInput, Prisma.customersUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.customersCreateOrConnectWithoutWishlistsInput;
    upsert?: Prisma.customersUpsertWithoutWishlistsInput;
    connect?: Prisma.customersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customersUpdateToOneWithWhereWithoutWishlistsInput, Prisma.customersUpdateWithoutWishlistsInput>, Prisma.customersUncheckedUpdateWithoutWishlistsInput>;
};
export type customersCreateWithoutAddressesInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutAddressesInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutAddressesInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutAddressesInput, Prisma.customersUncheckedCreateWithoutAddressesInput>;
};
export type customersUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutAddressesInput, Prisma.customersUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutAddressesInput, Prisma.customersUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutAddressesInput, Prisma.customersUncheckedUpdateWithoutAddressesInput>;
};
export type customersUpdateWithoutAddressesInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutAddressesInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutCartsInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutCartsInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutCartsInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
};
export type customersUpsertWithoutCartsInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutCartsInput, Prisma.customersUncheckedUpdateWithoutCartsInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutCartsInput, Prisma.customersUncheckedCreateWithoutCartsInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutCartsInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutCartsInput, Prisma.customersUncheckedUpdateWithoutCartsInput>;
};
export type customersUpdateWithoutCartsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutCartsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutOrdersInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutOrdersInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutOrdersInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
};
export type customersUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutOrdersInput, Prisma.customersUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutOrdersInput, Prisma.customersUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutOrdersInput, Prisma.customersUncheckedUpdateWithoutOrdersInput>;
};
export type customersUpdateWithoutOrdersInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutOrdersInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutReviewsInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutReviewsInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutReviewsInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
};
export type customersUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutReviewsInput, Prisma.customersUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutReviewsInput, Prisma.customersUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutReviewsInput, Prisma.customersUncheckedUpdateWithoutReviewsInput>;
};
export type customersUpdateWithoutReviewsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutReviewsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutSupport_ticketsInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutSupport_ticketsInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutSupport_ticketsInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutSupport_ticketsInput, Prisma.customersUncheckedCreateWithoutSupport_ticketsInput>;
};
export type customersUpsertWithoutSupport_ticketsInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutSupport_ticketsInput, Prisma.customersUncheckedUpdateWithoutSupport_ticketsInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutSupport_ticketsInput, Prisma.customersUncheckedCreateWithoutSupport_ticketsInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutSupport_ticketsInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutSupport_ticketsInput, Prisma.customersUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type customersUpdateWithoutSupport_ticketsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutSupport_ticketsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutUsersInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutUsersInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutCustomersInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutUsersInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
};
export type customersUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutUsersInput, Prisma.customersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutUsersInput, Prisma.customersUncheckedCreateWithoutUsersInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutUsersInput, Prisma.customersUncheckedUpdateWithoutUsersInput>;
};
export type customersUpdateWithoutUsersInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutUsersInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type customersCreateWithoutWishlistsInput = {
    customer_id?: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsCreateNestedManyWithoutCustomersInput;
    users: Prisma.usersCreateNestedOneWithoutCustomersInput;
    orders?: Prisma.ordersCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutCustomersInput;
};
export type customersUncheckedCreateWithoutWishlistsInput = {
    customer_id?: bigint | number;
    user_id: bigint | number;
    loyalty_points?: number;
    date_of_birth?: Date | string | null;
    addresses?: Prisma.addressesUncheckedCreateNestedManyWithoutCustomersInput;
    carts?: Prisma.cartsUncheckedCreateNestedManyWithoutCustomersInput;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutCustomersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutCustomersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutCustomersInput;
};
export type customersCreateOrConnectWithoutWishlistsInput = {
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateWithoutWishlistsInput, Prisma.customersUncheckedCreateWithoutWishlistsInput>;
};
export type customersUpsertWithoutWishlistsInput = {
    update: Prisma.XOR<Prisma.customersUpdateWithoutWishlistsInput, Prisma.customersUncheckedUpdateWithoutWishlistsInput>;
    create: Prisma.XOR<Prisma.customersCreateWithoutWishlistsInput, Prisma.customersUncheckedCreateWithoutWishlistsInput>;
    where?: Prisma.customersWhereInput;
};
export type customersUpdateToOneWithWhereWithoutWishlistsInput = {
    where?: Prisma.customersWhereInput;
    data: Prisma.XOR<Prisma.customersUpdateWithoutWishlistsInput, Prisma.customersUncheckedUpdateWithoutWishlistsInput>;
};
export type customersUpdateWithoutWishlistsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUpdateManyWithoutCustomersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput;
    orders?: Prisma.ordersUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutCustomersNestedInput;
};
export type customersUncheckedUpdateWithoutWishlistsInput = {
    customer_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    loyalty_points?: Prisma.IntFieldUpdateOperationsInput | number;
    date_of_birth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    addresses?: Prisma.addressesUncheckedUpdateManyWithoutCustomersNestedInput;
    carts?: Prisma.cartsUncheckedUpdateManyWithoutCustomersNestedInput;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutCustomersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutCustomersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutCustomersNestedInput;
};
export type CustomersCountOutputType = {
    addresses: number;
    carts: number;
    orders: number;
    reviews: number;
    support_tickets: number;
    wishlists: number;
};
export type CustomersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | CustomersCountOutputTypeCountAddressesArgs;
    carts?: boolean | CustomersCountOutputTypeCountCartsArgs;
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs;
    reviews?: boolean | CustomersCountOutputTypeCountReviewsArgs;
    support_tickets?: boolean | CustomersCountOutputTypeCountSupport_ticketsArgs;
    wishlists?: boolean | CustomersCountOutputTypeCountWishlistsArgs;
};
export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomersCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomersCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.addressesWhereInput;
};
export type CustomersCountOutputTypeCountCartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartsWhereInput;
};
export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type CustomersCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type CustomersCountOutputTypeCountSupport_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
};
export type CustomersCountOutputTypeCountWishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
};
export type customersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_id?: boolean;
    user_id?: boolean;
    loyalty_points?: boolean;
    date_of_birth?: boolean;
    addresses?: boolean | Prisma.customers$addressesArgs<ExtArgs>;
    carts?: boolean | Prisma.customers$cartsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.customers$ordersArgs<ExtArgs>;
    reviews?: boolean | Prisma.customers$reviewsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.customers$support_ticketsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.customers$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customers"]>;
export type customersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_id?: boolean;
    user_id?: boolean;
    loyalty_points?: boolean;
    date_of_birth?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customers"]>;
export type customersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_id?: boolean;
    user_id?: boolean;
    loyalty_points?: boolean;
    date_of_birth?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customers"]>;
export type customersSelectScalar = {
    customer_id?: boolean;
    user_id?: boolean;
    loyalty_points?: boolean;
    date_of_birth?: boolean;
};
export type customersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"customer_id" | "user_id" | "loyalty_points" | "date_of_birth", ExtArgs["result"]["customers"]>;
export type customersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    addresses?: boolean | Prisma.customers$addressesArgs<ExtArgs>;
    carts?: boolean | Prisma.customers$cartsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.customers$ordersArgs<ExtArgs>;
    reviews?: boolean | Prisma.customers$reviewsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.customers$support_ticketsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.customers$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type customersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type customersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $customersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customers";
    objects: {
        addresses: Prisma.$addressesPayload<ExtArgs>[];
        carts: Prisma.$cartsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>[];
        reviews: Prisma.$reviewsPayload<ExtArgs>[];
        support_tickets: Prisma.$support_ticketsPayload<ExtArgs>[];
        wishlists: Prisma.$wishlistsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        customer_id: bigint;
        user_id: bigint;
        loyalty_points: number;
        date_of_birth: Date | null;
    }, ExtArgs["result"]["customers"]>;
    composites: {};
};
export type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customersPayload, S>;
export type customersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomersCountAggregateInputType | true;
};
export interface customersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customers'];
        meta: {
            name: 'customers';
        };
    };
    findUnique<T extends customersFindUniqueArgs>(args: Prisma.SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customersFindFirstArgs>(args?: Prisma.SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customersFindManyArgs>(args?: Prisma.SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customersCreateArgs>(args: Prisma.SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customersCreateManyArgs>(args?: Prisma.SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends customersDeleteArgs>(args: Prisma.SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customersUpdateArgs>(args: Prisma.SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customersDeleteManyArgs>(args?: Prisma.SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customersUpdateManyArgs>(args: Prisma.SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends customersUpsertArgs>(args: Prisma.SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customersCountArgs>(args?: Prisma.Subset<T, customersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomersCountAggregateOutputType> : number>;
    aggregate<T extends CustomersAggregateArgs>(args: Prisma.Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>;
    groupBy<T extends customersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customersGroupByArgs['orderBy'];
    } : {
        orderBy?: customersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customersFieldRefs;
}
export interface Prisma__customersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    addresses<T extends Prisma.customers$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    carts<T extends Prisma.customers$cartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.customers$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.customers$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    support_tickets<T extends Prisma.customers$support_ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$support_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlists<T extends Prisma.customers$wishlistsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customers$wishlistsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customersFieldRefs {
    readonly customer_id: Prisma.FieldRef<"customers", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"customers", 'BigInt'>;
    readonly loyalty_points: Prisma.FieldRef<"customers", 'Int'>;
    readonly date_of_birth: Prisma.FieldRef<"customers", 'DateTime'>;
}
export type customersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
    orderBy?: Prisma.customersOrderByWithRelationInput | Prisma.customersOrderByWithRelationInput[];
    cursor?: Prisma.customersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomersScalarFieldEnum | Prisma.CustomersScalarFieldEnum[];
};
export type customersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customersCreateInput, Prisma.customersUncheckedCreateInput>;
};
export type customersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customersCreateManyInput | Prisma.customersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    data: Prisma.customersCreateManyInput | Prisma.customersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.customersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type customersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customersUpdateInput, Prisma.customersUncheckedUpdateInput>;
    where: Prisma.customersWhereUniqueInput;
};
export type customersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customersUpdateManyMutationInput, Prisma.customersUncheckedUpdateManyInput>;
    where?: Prisma.customersWhereInput;
    limit?: number;
};
export type customersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customersUpdateManyMutationInput, Prisma.customersUncheckedUpdateManyInput>;
    where?: Prisma.customersWhereInput;
    limit?: number;
    include?: Prisma.customersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type customersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
    create: Prisma.XOR<Prisma.customersCreateInput, Prisma.customersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customersUpdateInput, Prisma.customersUncheckedUpdateInput>;
};
export type customersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where: Prisma.customersWhereUniqueInput;
};
export type customersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customersWhereInput;
    limit?: number;
};
export type customers$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customers$cartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cartsSelect<ExtArgs> | null;
    omit?: Prisma.cartsOmit<ExtArgs> | null;
    include?: Prisma.cartsInclude<ExtArgs> | null;
    where?: Prisma.cartsWhereInput;
    orderBy?: Prisma.cartsOrderByWithRelationInput | Prisma.cartsOrderByWithRelationInput[];
    cursor?: Prisma.cartsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartsScalarFieldEnum | Prisma.CartsScalarFieldEnum[];
};
export type customers$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customers$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
export type customers$support_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customers$wishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    cursor?: Prisma.wishlistsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
export type customersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
};
