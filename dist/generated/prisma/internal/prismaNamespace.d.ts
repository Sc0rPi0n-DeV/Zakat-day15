import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly addresses: "addresses";
    readonly audit_logs: "audit_logs";
    readonly brands: "brands";
    readonly campaigns: "campaigns";
    readonly carriers: "carriers";
    readonly cart_items: "cart_items";
    readonly carts: "carts";
    readonly categories: "categories";
    readonly cities: "cities";
    readonly countries: "countries";
    readonly coupon_redemptions: "coupon_redemptions";
    readonly coupons: "coupons";
    readonly customers: "customers";
    readonly login_attempts: "login_attempts";
    readonly notifications: "notifications";
    readonly order_items: "order_items";
    readonly order_status_history: "order_status_history";
    readonly order_statuses: "order_statuses";
    readonly orders: "orders";
    readonly payment_methods: "payment_methods";
    readonly payments: "payments";
    readonly permissions: "permissions";
    readonly product_images: "product_images";
    readonly product_price_history: "product_price_history";
    readonly product_tag_links: "product_tag_links";
    readonly product_tags: "product_tags";
    readonly product_variants: "product_variants";
    readonly products: "products";
    readonly purchase_order_items: "purchase_order_items";
    readonly purchase_orders: "purchase_orders";
    readonly refunds: "refunds";
    readonly regions: "regions";
    readonly returns: "returns";
    readonly reviews: "reviews";
    readonly role_permissions: "role_permissions";
    readonly roles: "roles";
    readonly shipment_events: "shipment_events";
    readonly shipments: "shipments";
    readonly shipping_rates: "shipping_rates";
    readonly stock_movements: "stock_movements";
    readonly stocks: "stocks";
    readonly suppliers: "suppliers";
    readonly support_tickets: "support_tickets";
    readonly system_settings: "system_settings";
    readonly ticket_messages: "ticket_messages";
    readonly user_roles: "user_roles";
    readonly user_sessions: "user_sessions";
    readonly users: "users";
    readonly warehouses: "warehouses";
    readonly wishlist_items: "wishlist_items";
    readonly wishlists: "wishlists";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "addresses" | "audit_logs" | "brands" | "campaigns" | "carriers" | "cart_items" | "carts" | "categories" | "cities" | "countries" | "coupon_redemptions" | "coupons" | "customers" | "login_attempts" | "notifications" | "order_items" | "order_status_history" | "order_statuses" | "orders" | "payment_methods" | "payments" | "permissions" | "product_images" | "product_price_history" | "product_tag_links" | "product_tags" | "product_variants" | "products" | "purchase_order_items" | "purchase_orders" | "refunds" | "regions" | "returns" | "reviews" | "role_permissions" | "roles" | "shipment_events" | "shipments" | "shipping_rates" | "stock_movements" | "stocks" | "suppliers" | "support_tickets" | "system_settings" | "ticket_messages" | "user_roles" | "user_sessions" | "users" | "warehouses" | "wishlist_items" | "wishlists";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        addresses: {
            payload: Prisma.$addressesPayload<ExtArgs>;
            fields: Prisma.addressesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.addressesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                findFirst: {
                    args: Prisma.addressesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                findMany: {
                    args: Prisma.addressesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>[];
                };
                create: {
                    args: Prisma.addressesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                createMany: {
                    args: Prisma.addressesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>[];
                };
                delete: {
                    args: Prisma.addressesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                update: {
                    args: Prisma.addressesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                deleteMany: {
                    args: Prisma.addressesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.addressesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>[];
                };
                upsert: {
                    args: Prisma.addressesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$addressesPayload>;
                };
                aggregate: {
                    args: Prisma.AddressesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAddresses>;
                };
                groupBy: {
                    args: Prisma.addressesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.addressesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddressesCountAggregateOutputType> | number;
                };
            };
        };
        audit_logs: {
            payload: Prisma.$audit_logsPayload<ExtArgs>;
            fields: Prisma.audit_logsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.audit_logsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.audit_logsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                findFirst: {
                    args: Prisma.audit_logsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.audit_logsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                findMany: {
                    args: Prisma.audit_logsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                create: {
                    args: Prisma.audit_logsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                createMany: {
                    args: Prisma.audit_logsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.audit_logsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                delete: {
                    args: Prisma.audit_logsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                update: {
                    args: Prisma.audit_logsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                deleteMany: {
                    args: Prisma.audit_logsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.audit_logsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.audit_logsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                upsert: {
                    args: Prisma.audit_logsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                aggregate: {
                    args: Prisma.Audit_logsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAudit_logs>;
                };
                groupBy: {
                    args: Prisma.audit_logsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_logsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.audit_logsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_logsCountAggregateOutputType> | number;
                };
            };
        };
        brands: {
            payload: Prisma.$brandsPayload<ExtArgs>;
            fields: Prisma.brandsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.brandsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.brandsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>;
                };
                findFirst: {
                    args: Prisma.brandsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.brandsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>;
                };
                findMany: {
                    args: Prisma.brandsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>[];
                };
                create: {
                    args: Prisma.brandsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>;
                };
                createMany: {
                    args: Prisma.brandsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.brandsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>[];
                };
                delete: {
                    args: Prisma.brandsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>;
                };
                update: {
                    args: Prisma.brandsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>;
                };
                deleteMany: {
                    args: Prisma.brandsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.brandsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.brandsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>[];
                };
                upsert: {
                    args: Prisma.brandsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$brandsPayload>;
                };
                aggregate: {
                    args: Prisma.BrandsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrands>;
                };
                groupBy: {
                    args: Prisma.brandsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.brandsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandsCountAggregateOutputType> | number;
                };
            };
        };
        campaigns: {
            payload: Prisma.$campaignsPayload<ExtArgs>;
            fields: Prisma.campaignsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.campaignsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.campaignsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>;
                };
                findFirst: {
                    args: Prisma.campaignsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.campaignsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>;
                };
                findMany: {
                    args: Prisma.campaignsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>[];
                };
                create: {
                    args: Prisma.campaignsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>;
                };
                createMany: {
                    args: Prisma.campaignsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.campaignsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>[];
                };
                delete: {
                    args: Prisma.campaignsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>;
                };
                update: {
                    args: Prisma.campaignsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>;
                };
                deleteMany: {
                    args: Prisma.campaignsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.campaignsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.campaignsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>[];
                };
                upsert: {
                    args: Prisma.campaignsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaignsPayload>;
                };
                aggregate: {
                    args: Prisma.CampaignsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCampaigns>;
                };
                groupBy: {
                    args: Prisma.campaignsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.campaignsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignsCountAggregateOutputType> | number;
                };
            };
        };
        carriers: {
            payload: Prisma.$carriersPayload<ExtArgs>;
            fields: Prisma.carriersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.carriersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.carriersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>;
                };
                findFirst: {
                    args: Prisma.carriersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.carriersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>;
                };
                findMany: {
                    args: Prisma.carriersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>[];
                };
                create: {
                    args: Prisma.carriersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>;
                };
                createMany: {
                    args: Prisma.carriersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.carriersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>[];
                };
                delete: {
                    args: Prisma.carriersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>;
                };
                update: {
                    args: Prisma.carriersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>;
                };
                deleteMany: {
                    args: Prisma.carriersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.carriersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.carriersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>[];
                };
                upsert: {
                    args: Prisma.carriersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carriersPayload>;
                };
                aggregate: {
                    args: Prisma.CarriersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCarriers>;
                };
                groupBy: {
                    args: Prisma.carriersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CarriersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.carriersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CarriersCountAggregateOutputType> | number;
                };
            };
        };
        cart_items: {
            payload: Prisma.$cart_itemsPayload<ExtArgs>;
            fields: Prisma.cart_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cart_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cart_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.cart_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cart_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                findMany: {
                    args: Prisma.cart_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>[];
                };
                create: {
                    args: Prisma.cart_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                createMany: {
                    args: Prisma.cart_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cart_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>[];
                };
                delete: {
                    args: Prisma.cart_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                update: {
                    args: Prisma.cart_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.cart_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cart_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cart_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.cart_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cart_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Cart_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart_items>;
                };
                groupBy: {
                    args: Prisma.cart_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cart_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cart_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cart_itemsCountAggregateOutputType> | number;
                };
            };
        };
        carts: {
            payload: Prisma.$cartsPayload<ExtArgs>;
            fields: Prisma.cartsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cartsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                findFirst: {
                    args: Prisma.cartsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                findMany: {
                    args: Prisma.cartsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>[];
                };
                create: {
                    args: Prisma.cartsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                createMany: {
                    args: Prisma.cartsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cartsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>[];
                };
                delete: {
                    args: Prisma.cartsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                update: {
                    args: Prisma.cartsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                deleteMany: {
                    args: Prisma.cartsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cartsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cartsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>[];
                };
                upsert: {
                    args: Prisma.cartsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cartsPayload>;
                };
                aggregate: {
                    args: Prisma.CartsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCarts>;
                };
                groupBy: {
                    args: Prisma.cartsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cartsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartsCountAggregateOutputType> | number;
                };
            };
        };
        categories: {
            payload: Prisma.$categoriesPayload<ExtArgs>;
            fields: Prisma.categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findMany: {
                    args: Prisma.categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                create: {
                    args: Prisma.categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                createMany: {
                    args: Prisma.categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                delete: {
                    args: Prisma.categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                update: {
                    args: Prisma.categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                upsert: {
                    args: Prisma.categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategories>;
                };
                groupBy: {
                    args: Prisma.categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesCountAggregateOutputType> | number;
                };
            };
        };
        cities: {
            payload: Prisma.$citiesPayload<ExtArgs>;
            fields: Prisma.citiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.citiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.citiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>;
                };
                findFirst: {
                    args: Prisma.citiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.citiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>;
                };
                findMany: {
                    args: Prisma.citiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>[];
                };
                create: {
                    args: Prisma.citiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>;
                };
                createMany: {
                    args: Prisma.citiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.citiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>[];
                };
                delete: {
                    args: Prisma.citiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>;
                };
                update: {
                    args: Prisma.citiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>;
                };
                deleteMany: {
                    args: Prisma.citiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.citiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.citiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>[];
                };
                upsert: {
                    args: Prisma.citiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$citiesPayload>;
                };
                aggregate: {
                    args: Prisma.CitiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCities>;
                };
                groupBy: {
                    args: Prisma.citiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.citiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CitiesCountAggregateOutputType> | number;
                };
            };
        };
        countries: {
            payload: Prisma.$countriesPayload<ExtArgs>;
            fields: Prisma.countriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.countriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.countriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>;
                };
                findFirst: {
                    args: Prisma.countriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.countriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>;
                };
                findMany: {
                    args: Prisma.countriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>[];
                };
                create: {
                    args: Prisma.countriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>;
                };
                createMany: {
                    args: Prisma.countriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.countriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>[];
                };
                delete: {
                    args: Prisma.countriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>;
                };
                update: {
                    args: Prisma.countriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>;
                };
                deleteMany: {
                    args: Prisma.countriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.countriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.countriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>[];
                };
                upsert: {
                    args: Prisma.countriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$countriesPayload>;
                };
                aggregate: {
                    args: Prisma.CountriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountries>;
                };
                groupBy: {
                    args: Prisma.countriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.countriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountriesCountAggregateOutputType> | number;
                };
            };
        };
        coupon_redemptions: {
            payload: Prisma.$coupon_redemptionsPayload<ExtArgs>;
            fields: Prisma.coupon_redemptionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.coupon_redemptionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.coupon_redemptionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>;
                };
                findFirst: {
                    args: Prisma.coupon_redemptionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.coupon_redemptionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>;
                };
                findMany: {
                    args: Prisma.coupon_redemptionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>[];
                };
                create: {
                    args: Prisma.coupon_redemptionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>;
                };
                createMany: {
                    args: Prisma.coupon_redemptionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.coupon_redemptionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>[];
                };
                delete: {
                    args: Prisma.coupon_redemptionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>;
                };
                update: {
                    args: Prisma.coupon_redemptionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>;
                };
                deleteMany: {
                    args: Prisma.coupon_redemptionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.coupon_redemptionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.coupon_redemptionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>[];
                };
                upsert: {
                    args: Prisma.coupon_redemptionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coupon_redemptionsPayload>;
                };
                aggregate: {
                    args: Prisma.Coupon_redemptionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCoupon_redemptions>;
                };
                groupBy: {
                    args: Prisma.coupon_redemptionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Coupon_redemptionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.coupon_redemptionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Coupon_redemptionsCountAggregateOutputType> | number;
                };
            };
        };
        coupons: {
            payload: Prisma.$couponsPayload<ExtArgs>;
            fields: Prisma.couponsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.couponsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.couponsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                findFirst: {
                    args: Prisma.couponsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.couponsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                findMany: {
                    args: Prisma.couponsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>[];
                };
                create: {
                    args: Prisma.couponsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                createMany: {
                    args: Prisma.couponsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.couponsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>[];
                };
                delete: {
                    args: Prisma.couponsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                update: {
                    args: Prisma.couponsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                deleteMany: {
                    args: Prisma.couponsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.couponsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.couponsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>[];
                };
                upsert: {
                    args: Prisma.couponsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$couponsPayload>;
                };
                aggregate: {
                    args: Prisma.CouponsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCoupons>;
                };
                groupBy: {
                    args: Prisma.couponsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.couponsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponsCountAggregateOutputType> | number;
                };
            };
        };
        customers: {
            payload: Prisma.$customersPayload<ExtArgs>;
            fields: Prisma.customersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findFirst: {
                    args: Prisma.customersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findMany: {
                    args: Prisma.customersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                create: {
                    args: Prisma.customersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                createMany: {
                    args: Prisma.customersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                delete: {
                    args: Prisma.customersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                update: {
                    args: Prisma.customersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                deleteMany: {
                    args: Prisma.customersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                upsert: {
                    args: Prisma.customersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                aggregate: {
                    args: Prisma.CustomersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomers>;
                };
                groupBy: {
                    args: Prisma.customersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersCountAggregateOutputType> | number;
                };
            };
        };
        login_attempts: {
            payload: Prisma.$login_attemptsPayload<ExtArgs>;
            fields: Prisma.login_attemptsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.login_attemptsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.login_attemptsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>;
                };
                findFirst: {
                    args: Prisma.login_attemptsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.login_attemptsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>;
                };
                findMany: {
                    args: Prisma.login_attemptsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>[];
                };
                create: {
                    args: Prisma.login_attemptsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>;
                };
                createMany: {
                    args: Prisma.login_attemptsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.login_attemptsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>[];
                };
                delete: {
                    args: Prisma.login_attemptsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>;
                };
                update: {
                    args: Prisma.login_attemptsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>;
                };
                deleteMany: {
                    args: Prisma.login_attemptsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.login_attemptsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.login_attemptsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>[];
                };
                upsert: {
                    args: Prisma.login_attemptsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$login_attemptsPayload>;
                };
                aggregate: {
                    args: Prisma.Login_attemptsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLogin_attempts>;
                };
                groupBy: {
                    args: Prisma.login_attemptsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Login_attemptsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.login_attemptsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Login_attemptsCountAggregateOutputType> | number;
                };
            };
        };
        notifications: {
            payload: Prisma.$notificationsPayload<ExtArgs>;
            fields: Prisma.notificationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notificationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findFirst: {
                    args: Prisma.notificationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findMany: {
                    args: Prisma.notificationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                create: {
                    args: Prisma.notificationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                createMany: {
                    args: Prisma.notificationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                delete: {
                    args: Prisma.notificationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                update: {
                    args: Prisma.notificationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                deleteMany: {
                    args: Prisma.notificationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notificationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                upsert: {
                    args: Prisma.notificationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotifications>;
                };
                groupBy: {
                    args: Prisma.notificationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notificationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsCountAggregateOutputType> | number;
                };
            };
        };
        order_items: {
            payload: Prisma.$order_itemsPayload<ExtArgs>;
            fields: Prisma.order_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.order_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findMany: {
                    args: Prisma.order_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                create: {
                    args: Prisma.order_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                createMany: {
                    args: Prisma.order_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                delete: {
                    args: Prisma.order_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                update: {
                    args: Prisma.order_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.order_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.order_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Order_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_items>;
                };
                groupBy: {
                    args: Prisma.order_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsCountAggregateOutputType> | number;
                };
            };
        };
        order_status_history: {
            payload: Prisma.$order_status_historyPayload<ExtArgs>;
            fields: Prisma.order_status_historyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_status_historyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_status_historyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                findFirst: {
                    args: Prisma.order_status_historyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_status_historyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                findMany: {
                    args: Prisma.order_status_historyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                create: {
                    args: Prisma.order_status_historyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                createMany: {
                    args: Prisma.order_status_historyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_status_historyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                delete: {
                    args: Prisma.order_status_historyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                update: {
                    args: Prisma.order_status_historyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                deleteMany: {
                    args: Prisma.order_status_historyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_status_historyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_status_historyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                upsert: {
                    args: Prisma.order_status_historyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                aggregate: {
                    args: Prisma.Order_status_historyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_status_history>;
                };
                groupBy: {
                    args: Prisma.order_status_historyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_status_historyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_status_historyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_status_historyCountAggregateOutputType> | number;
                };
            };
        };
        order_statuses: {
            payload: Prisma.$order_statusesPayload<ExtArgs>;
            fields: Prisma.order_statusesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_statusesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_statusesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>;
                };
                findFirst: {
                    args: Prisma.order_statusesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_statusesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>;
                };
                findMany: {
                    args: Prisma.order_statusesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>[];
                };
                create: {
                    args: Prisma.order_statusesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>;
                };
                createMany: {
                    args: Prisma.order_statusesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_statusesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>[];
                };
                delete: {
                    args: Prisma.order_statusesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>;
                };
                update: {
                    args: Prisma.order_statusesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>;
                };
                deleteMany: {
                    args: Prisma.order_statusesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_statusesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_statusesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>[];
                };
                upsert: {
                    args: Prisma.order_statusesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_statusesPayload>;
                };
                aggregate: {
                    args: Prisma.Order_statusesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_statuses>;
                };
                groupBy: {
                    args: Prisma.order_statusesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_statusesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_statusesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_statusesCountAggregateOutputType> | number;
                };
            };
        };
        orders: {
            payload: Prisma.$ordersPayload<ExtArgs>;
            fields: Prisma.ordersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ordersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findFirst: {
                    args: Prisma.ordersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findMany: {
                    args: Prisma.ordersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                create: {
                    args: Prisma.ordersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                createMany: {
                    args: Prisma.ordersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                delete: {
                    args: Prisma.ordersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                update: {
                    args: Prisma.ordersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                deleteMany: {
                    args: Prisma.ordersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ordersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                upsert: {
                    args: Prisma.ordersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                aggregate: {
                    args: Prisma.OrdersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrders>;
                };
                groupBy: {
                    args: Prisma.ordersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ordersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersCountAggregateOutputType> | number;
                };
            };
        };
        payment_methods: {
            payload: Prisma.$payment_methodsPayload<ExtArgs>;
            fields: Prisma.payment_methodsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.payment_methodsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.payment_methodsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                findFirst: {
                    args: Prisma.payment_methodsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.payment_methodsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                findMany: {
                    args: Prisma.payment_methodsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>[];
                };
                create: {
                    args: Prisma.payment_methodsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                createMany: {
                    args: Prisma.payment_methodsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.payment_methodsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>[];
                };
                delete: {
                    args: Prisma.payment_methodsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                update: {
                    args: Prisma.payment_methodsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                deleteMany: {
                    args: Prisma.payment_methodsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.payment_methodsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.payment_methodsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>[];
                };
                upsert: {
                    args: Prisma.payment_methodsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payment_methodsPayload>;
                };
                aggregate: {
                    args: Prisma.Payment_methodsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment_methods>;
                };
                groupBy: {
                    args: Prisma.payment_methodsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payment_methodsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.payment_methodsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payment_methodsCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        permissions: {
            payload: Prisma.$permissionsPayload<ExtArgs>;
            fields: Prisma.permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findMany: {
                    args: Prisma.permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                create: {
                    args: Prisma.permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                createMany: {
                    args: Prisma.permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.permissionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                delete: {
                    args: Prisma.permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                update: {
                    args: Prisma.permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.permissionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                upsert: {
                    args: Prisma.permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermissions>;
                };
                groupBy: {
                    args: Prisma.permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsCountAggregateOutputType> | number;
                };
            };
        };
        product_images: {
            payload: Prisma.$product_imagesPayload<ExtArgs>;
            fields: Prisma.product_imagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_imagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_imagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>;
                };
                findFirst: {
                    args: Prisma.product_imagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_imagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>;
                };
                findMany: {
                    args: Prisma.product_imagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>[];
                };
                create: {
                    args: Prisma.product_imagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>;
                };
                createMany: {
                    args: Prisma.product_imagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.product_imagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>[];
                };
                delete: {
                    args: Prisma.product_imagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>;
                };
                update: {
                    args: Prisma.product_imagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>;
                };
                deleteMany: {
                    args: Prisma.product_imagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_imagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.product_imagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>[];
                };
                upsert: {
                    args: Prisma.product_imagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_imagesPayload>;
                };
                aggregate: {
                    args: Prisma.Product_imagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_images>;
                };
                groupBy: {
                    args: Prisma.product_imagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_imagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_imagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_imagesCountAggregateOutputType> | number;
                };
            };
        };
        product_price_history: {
            payload: Prisma.$product_price_historyPayload<ExtArgs>;
            fields: Prisma.product_price_historyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_price_historyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_price_historyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>;
                };
                findFirst: {
                    args: Prisma.product_price_historyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_price_historyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>;
                };
                findMany: {
                    args: Prisma.product_price_historyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>[];
                };
                create: {
                    args: Prisma.product_price_historyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>;
                };
                createMany: {
                    args: Prisma.product_price_historyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.product_price_historyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>[];
                };
                delete: {
                    args: Prisma.product_price_historyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>;
                };
                update: {
                    args: Prisma.product_price_historyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>;
                };
                deleteMany: {
                    args: Prisma.product_price_historyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_price_historyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.product_price_historyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>[];
                };
                upsert: {
                    args: Prisma.product_price_historyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_price_historyPayload>;
                };
                aggregate: {
                    args: Prisma.Product_price_historyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_price_history>;
                };
                groupBy: {
                    args: Prisma.product_price_historyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_price_historyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_price_historyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_price_historyCountAggregateOutputType> | number;
                };
            };
        };
        product_tag_links: {
            payload: Prisma.$product_tag_linksPayload<ExtArgs>;
            fields: Prisma.product_tag_linksFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_tag_linksFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_tag_linksFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>;
                };
                findFirst: {
                    args: Prisma.product_tag_linksFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_tag_linksFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>;
                };
                findMany: {
                    args: Prisma.product_tag_linksFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>[];
                };
                create: {
                    args: Prisma.product_tag_linksCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>;
                };
                createMany: {
                    args: Prisma.product_tag_linksCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.product_tag_linksCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>[];
                };
                delete: {
                    args: Prisma.product_tag_linksDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>;
                };
                update: {
                    args: Prisma.product_tag_linksUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>;
                };
                deleteMany: {
                    args: Prisma.product_tag_linksDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_tag_linksUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.product_tag_linksUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>[];
                };
                upsert: {
                    args: Prisma.product_tag_linksUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tag_linksPayload>;
                };
                aggregate: {
                    args: Prisma.Product_tag_linksAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_tag_links>;
                };
                groupBy: {
                    args: Prisma.product_tag_linksGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_tag_linksGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_tag_linksCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_tag_linksCountAggregateOutputType> | number;
                };
            };
        };
        product_tags: {
            payload: Prisma.$product_tagsPayload<ExtArgs>;
            fields: Prisma.product_tagsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_tagsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_tagsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>;
                };
                findFirst: {
                    args: Prisma.product_tagsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_tagsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>;
                };
                findMany: {
                    args: Prisma.product_tagsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>[];
                };
                create: {
                    args: Prisma.product_tagsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>;
                };
                createMany: {
                    args: Prisma.product_tagsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.product_tagsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>[];
                };
                delete: {
                    args: Prisma.product_tagsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>;
                };
                update: {
                    args: Prisma.product_tagsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>;
                };
                deleteMany: {
                    args: Prisma.product_tagsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_tagsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.product_tagsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>[];
                };
                upsert: {
                    args: Prisma.product_tagsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_tagsPayload>;
                };
                aggregate: {
                    args: Prisma.Product_tagsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_tags>;
                };
                groupBy: {
                    args: Prisma.product_tagsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_tagsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_tagsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_tagsCountAggregateOutputType> | number;
                };
            };
        };
        product_variants: {
            payload: Prisma.$product_variantsPayload<ExtArgs>;
            fields: Prisma.product_variantsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_variantsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_variantsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>;
                };
                findFirst: {
                    args: Prisma.product_variantsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_variantsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>;
                };
                findMany: {
                    args: Prisma.product_variantsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>[];
                };
                create: {
                    args: Prisma.product_variantsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>;
                };
                createMany: {
                    args: Prisma.product_variantsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.product_variantsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>[];
                };
                delete: {
                    args: Prisma.product_variantsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>;
                };
                update: {
                    args: Prisma.product_variantsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>;
                };
                deleteMany: {
                    args: Prisma.product_variantsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_variantsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.product_variantsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>[];
                };
                upsert: {
                    args: Prisma.product_variantsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_variantsPayload>;
                };
                aggregate: {
                    args: Prisma.Product_variantsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_variants>;
                };
                groupBy: {
                    args: Prisma.product_variantsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_variantsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_variantsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_variantsCountAggregateOutputType> | number;
                };
            };
        };
        products: {
            payload: Prisma.$productsPayload<ExtArgs>;
            fields: Prisma.productsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.productsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                findFirst: {
                    args: Prisma.productsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                findMany: {
                    args: Prisma.productsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>[];
                };
                create: {
                    args: Prisma.productsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                createMany: {
                    args: Prisma.productsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>[];
                };
                delete: {
                    args: Prisma.productsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                update: {
                    args: Prisma.productsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                deleteMany: {
                    args: Prisma.productsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.productsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>[];
                };
                upsert: {
                    args: Prisma.productsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$productsPayload>;
                };
                aggregate: {
                    args: Prisma.ProductsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProducts>;
                };
                groupBy: {
                    args: Prisma.productsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.productsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductsCountAggregateOutputType> | number;
                };
            };
        };
        purchase_order_items: {
            payload: Prisma.$purchase_order_itemsPayload<ExtArgs>;
            fields: Prisma.purchase_order_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.purchase_order_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.purchase_order_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.purchase_order_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.purchase_order_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>;
                };
                findMany: {
                    args: Prisma.purchase_order_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>[];
                };
                create: {
                    args: Prisma.purchase_order_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>;
                };
                createMany: {
                    args: Prisma.purchase_order_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.purchase_order_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>[];
                };
                delete: {
                    args: Prisma.purchase_order_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>;
                };
                update: {
                    args: Prisma.purchase_order_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.purchase_order_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.purchase_order_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.purchase_order_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.purchase_order_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_order_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Purchase_order_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchase_order_items>;
                };
                groupBy: {
                    args: Prisma.purchase_order_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_order_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.purchase_order_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_order_itemsCountAggregateOutputType> | number;
                };
            };
        };
        purchase_orders: {
            payload: Prisma.$purchase_ordersPayload<ExtArgs>;
            fields: Prisma.purchase_ordersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.purchase_ordersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.purchase_ordersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>;
                };
                findFirst: {
                    args: Prisma.purchase_ordersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.purchase_ordersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>;
                };
                findMany: {
                    args: Prisma.purchase_ordersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>[];
                };
                create: {
                    args: Prisma.purchase_ordersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>;
                };
                createMany: {
                    args: Prisma.purchase_ordersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.purchase_ordersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>[];
                };
                delete: {
                    args: Prisma.purchase_ordersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>;
                };
                update: {
                    args: Prisma.purchase_ordersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>;
                };
                deleteMany: {
                    args: Prisma.purchase_ordersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.purchase_ordersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.purchase_ordersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>[];
                };
                upsert: {
                    args: Prisma.purchase_ordersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$purchase_ordersPayload>;
                };
                aggregate: {
                    args: Prisma.Purchase_ordersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePurchase_orders>;
                };
                groupBy: {
                    args: Prisma.purchase_ordersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_ordersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.purchase_ordersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Purchase_ordersCountAggregateOutputType> | number;
                };
            };
        };
        refunds: {
            payload: Prisma.$refundsPayload<ExtArgs>;
            fields: Prisma.refundsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.refundsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.refundsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>;
                };
                findFirst: {
                    args: Prisma.refundsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.refundsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>;
                };
                findMany: {
                    args: Prisma.refundsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>[];
                };
                create: {
                    args: Prisma.refundsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>;
                };
                createMany: {
                    args: Prisma.refundsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.refundsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>[];
                };
                delete: {
                    args: Prisma.refundsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>;
                };
                update: {
                    args: Prisma.refundsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>;
                };
                deleteMany: {
                    args: Prisma.refundsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.refundsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.refundsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>[];
                };
                upsert: {
                    args: Prisma.refundsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refundsPayload>;
                };
                aggregate: {
                    args: Prisma.RefundsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefunds>;
                };
                groupBy: {
                    args: Prisma.refundsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.refundsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundsCountAggregateOutputType> | number;
                };
            };
        };
        regions: {
            payload: Prisma.$regionsPayload<ExtArgs>;
            fields: Prisma.regionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.regionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.regionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>;
                };
                findFirst: {
                    args: Prisma.regionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.regionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>;
                };
                findMany: {
                    args: Prisma.regionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>[];
                };
                create: {
                    args: Prisma.regionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>;
                };
                createMany: {
                    args: Prisma.regionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.regionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>[];
                };
                delete: {
                    args: Prisma.regionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>;
                };
                update: {
                    args: Prisma.regionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>;
                };
                deleteMany: {
                    args: Prisma.regionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.regionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.regionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>[];
                };
                upsert: {
                    args: Prisma.regionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$regionsPayload>;
                };
                aggregate: {
                    args: Prisma.RegionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRegions>;
                };
                groupBy: {
                    args: Prisma.regionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.regionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegionsCountAggregateOutputType> | number;
                };
            };
        };
        returns: {
            payload: Prisma.$returnsPayload<ExtArgs>;
            fields: Prisma.returnsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.returnsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.returnsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>;
                };
                findFirst: {
                    args: Prisma.returnsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.returnsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>;
                };
                findMany: {
                    args: Prisma.returnsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>[];
                };
                create: {
                    args: Prisma.returnsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>;
                };
                createMany: {
                    args: Prisma.returnsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.returnsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>[];
                };
                delete: {
                    args: Prisma.returnsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>;
                };
                update: {
                    args: Prisma.returnsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>;
                };
                deleteMany: {
                    args: Prisma.returnsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.returnsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.returnsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>[];
                };
                upsert: {
                    args: Prisma.returnsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$returnsPayload>;
                };
                aggregate: {
                    args: Prisma.ReturnsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReturns>;
                };
                groupBy: {
                    args: Prisma.returnsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReturnsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.returnsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReturnsCountAggregateOutputType> | number;
                };
            };
        };
        reviews: {
            payload: Prisma.$reviewsPayload<ExtArgs>;
            fields: Prisma.reviewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.reviewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findFirst: {
                    args: Prisma.reviewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findMany: {
                    args: Prisma.reviewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                create: {
                    args: Prisma.reviewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                createMany: {
                    args: Prisma.reviewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                delete: {
                    args: Prisma.reviewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                update: {
                    args: Prisma.reviewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                deleteMany: {
                    args: Prisma.reviewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.reviewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                upsert: {
                    args: Prisma.reviewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReviews>;
                };
                groupBy: {
                    args: Prisma.reviewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.reviewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsCountAggregateOutputType> | number;
                };
            };
        };
        role_permissions: {
            payload: Prisma.$role_permissionsPayload<ExtArgs>;
            fields: Prisma.role_permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.role_permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.role_permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.role_permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.role_permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                findMany: {
                    args: Prisma.role_permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                create: {
                    args: Prisma.role_permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                createMany: {
                    args: Prisma.role_permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.role_permissionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                delete: {
                    args: Prisma.role_permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                update: {
                    args: Prisma.role_permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.role_permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.role_permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.role_permissionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                upsert: {
                    args: Prisma.role_permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Role_permissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole_permissions>;
                };
                groupBy: {
                    args: Prisma.role_permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_permissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.role_permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_permissionsCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        shipment_events: {
            payload: Prisma.$shipment_eventsPayload<ExtArgs>;
            fields: Prisma.shipment_eventsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.shipment_eventsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.shipment_eventsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>;
                };
                findFirst: {
                    args: Prisma.shipment_eventsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.shipment_eventsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>;
                };
                findMany: {
                    args: Prisma.shipment_eventsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>[];
                };
                create: {
                    args: Prisma.shipment_eventsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>;
                };
                createMany: {
                    args: Prisma.shipment_eventsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.shipment_eventsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>[];
                };
                delete: {
                    args: Prisma.shipment_eventsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>;
                };
                update: {
                    args: Prisma.shipment_eventsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>;
                };
                deleteMany: {
                    args: Prisma.shipment_eventsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.shipment_eventsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.shipment_eventsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>[];
                };
                upsert: {
                    args: Prisma.shipment_eventsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipment_eventsPayload>;
                };
                aggregate: {
                    args: Prisma.Shipment_eventsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShipment_events>;
                };
                groupBy: {
                    args: Prisma.shipment_eventsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Shipment_eventsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.shipment_eventsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Shipment_eventsCountAggregateOutputType> | number;
                };
            };
        };
        shipments: {
            payload: Prisma.$shipmentsPayload<ExtArgs>;
            fields: Prisma.shipmentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.shipmentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.shipmentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>;
                };
                findFirst: {
                    args: Prisma.shipmentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.shipmentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>;
                };
                findMany: {
                    args: Prisma.shipmentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>[];
                };
                create: {
                    args: Prisma.shipmentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>;
                };
                createMany: {
                    args: Prisma.shipmentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.shipmentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>[];
                };
                delete: {
                    args: Prisma.shipmentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>;
                };
                update: {
                    args: Prisma.shipmentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>;
                };
                deleteMany: {
                    args: Prisma.shipmentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.shipmentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.shipmentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>[];
                };
                upsert: {
                    args: Prisma.shipmentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipmentsPayload>;
                };
                aggregate: {
                    args: Prisma.ShipmentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShipments>;
                };
                groupBy: {
                    args: Prisma.shipmentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.shipmentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentsCountAggregateOutputType> | number;
                };
            };
        };
        shipping_rates: {
            payload: Prisma.$shipping_ratesPayload<ExtArgs>;
            fields: Prisma.shipping_ratesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.shipping_ratesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.shipping_ratesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>;
                };
                findFirst: {
                    args: Prisma.shipping_ratesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.shipping_ratesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>;
                };
                findMany: {
                    args: Prisma.shipping_ratesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>[];
                };
                create: {
                    args: Prisma.shipping_ratesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>;
                };
                createMany: {
                    args: Prisma.shipping_ratesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.shipping_ratesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>[];
                };
                delete: {
                    args: Prisma.shipping_ratesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>;
                };
                update: {
                    args: Prisma.shipping_ratesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>;
                };
                deleteMany: {
                    args: Prisma.shipping_ratesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.shipping_ratesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.shipping_ratesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>[];
                };
                upsert: {
                    args: Prisma.shipping_ratesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$shipping_ratesPayload>;
                };
                aggregate: {
                    args: Prisma.Shipping_ratesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShipping_rates>;
                };
                groupBy: {
                    args: Prisma.shipping_ratesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Shipping_ratesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.shipping_ratesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Shipping_ratesCountAggregateOutputType> | number;
                };
            };
        };
        stock_movements: {
            payload: Prisma.$stock_movementsPayload<ExtArgs>;
            fields: Prisma.stock_movementsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.stock_movementsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.stock_movementsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>;
                };
                findFirst: {
                    args: Prisma.stock_movementsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.stock_movementsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>;
                };
                findMany: {
                    args: Prisma.stock_movementsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>[];
                };
                create: {
                    args: Prisma.stock_movementsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>;
                };
                createMany: {
                    args: Prisma.stock_movementsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.stock_movementsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>[];
                };
                delete: {
                    args: Prisma.stock_movementsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>;
                };
                update: {
                    args: Prisma.stock_movementsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>;
                };
                deleteMany: {
                    args: Prisma.stock_movementsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.stock_movementsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.stock_movementsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>[];
                };
                upsert: {
                    args: Prisma.stock_movementsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_movementsPayload>;
                };
                aggregate: {
                    args: Prisma.Stock_movementsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStock_movements>;
                };
                groupBy: {
                    args: Prisma.stock_movementsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stock_movementsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.stock_movementsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stock_movementsCountAggregateOutputType> | number;
                };
            };
        };
        stocks: {
            payload: Prisma.$stocksPayload<ExtArgs>;
            fields: Prisma.stocksFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.stocksFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.stocksFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                findFirst: {
                    args: Prisma.stocksFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.stocksFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                findMany: {
                    args: Prisma.stocksFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>[];
                };
                create: {
                    args: Prisma.stocksCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                createMany: {
                    args: Prisma.stocksCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.stocksCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>[];
                };
                delete: {
                    args: Prisma.stocksDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                update: {
                    args: Prisma.stocksUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                deleteMany: {
                    args: Prisma.stocksDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.stocksUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.stocksUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>[];
                };
                upsert: {
                    args: Prisma.stocksUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stocksPayload>;
                };
                aggregate: {
                    args: Prisma.StocksAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStocks>;
                };
                groupBy: {
                    args: Prisma.stocksGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StocksGroupByOutputType>[];
                };
                count: {
                    args: Prisma.stocksCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StocksCountAggregateOutputType> | number;
                };
            };
        };
        suppliers: {
            payload: Prisma.$suppliersPayload<ExtArgs>;
            fields: Prisma.suppliersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.suppliersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.suppliersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>;
                };
                findFirst: {
                    args: Prisma.suppliersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.suppliersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>;
                };
                findMany: {
                    args: Prisma.suppliersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>[];
                };
                create: {
                    args: Prisma.suppliersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>;
                };
                createMany: {
                    args: Prisma.suppliersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.suppliersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>[];
                };
                delete: {
                    args: Prisma.suppliersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>;
                };
                update: {
                    args: Prisma.suppliersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>;
                };
                deleteMany: {
                    args: Prisma.suppliersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.suppliersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.suppliersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>[];
                };
                upsert: {
                    args: Prisma.suppliersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$suppliersPayload>;
                };
                aggregate: {
                    args: Prisma.SuppliersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSuppliers>;
                };
                groupBy: {
                    args: Prisma.suppliersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuppliersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.suppliersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuppliersCountAggregateOutputType> | number;
                };
            };
        };
        support_tickets: {
            payload: Prisma.$support_ticketsPayload<ExtArgs>;
            fields: Prisma.support_ticketsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.support_ticketsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.support_ticketsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                findFirst: {
                    args: Prisma.support_ticketsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.support_ticketsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                findMany: {
                    args: Prisma.support_ticketsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>[];
                };
                create: {
                    args: Prisma.support_ticketsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                createMany: {
                    args: Prisma.support_ticketsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.support_ticketsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>[];
                };
                delete: {
                    args: Prisma.support_ticketsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                update: {
                    args: Prisma.support_ticketsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                deleteMany: {
                    args: Prisma.support_ticketsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.support_ticketsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.support_ticketsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>[];
                };
                upsert: {
                    args: Prisma.support_ticketsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                aggregate: {
                    args: Prisma.Support_ticketsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupport_tickets>;
                };
                groupBy: {
                    args: Prisma.support_ticketsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Support_ticketsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.support_ticketsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Support_ticketsCountAggregateOutputType> | number;
                };
            };
        };
        system_settings: {
            payload: Prisma.$system_settingsPayload<ExtArgs>;
            fields: Prisma.system_settingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.system_settingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.system_settingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                findFirst: {
                    args: Prisma.system_settingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.system_settingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                findMany: {
                    args: Prisma.system_settingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>[];
                };
                create: {
                    args: Prisma.system_settingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                createMany: {
                    args: Prisma.system_settingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.system_settingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>[];
                };
                delete: {
                    args: Prisma.system_settingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                update: {
                    args: Prisma.system_settingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                deleteMany: {
                    args: Prisma.system_settingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.system_settingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.system_settingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>[];
                };
                upsert: {
                    args: Prisma.system_settingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                aggregate: {
                    args: Prisma.System_settingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSystem_settings>;
                };
                groupBy: {
                    args: Prisma.system_settingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.System_settingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.system_settingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.System_settingsCountAggregateOutputType> | number;
                };
            };
        };
        ticket_messages: {
            payload: Prisma.$ticket_messagesPayload<ExtArgs>;
            fields: Prisma.ticket_messagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ticket_messagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ticket_messagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>;
                };
                findFirst: {
                    args: Prisma.ticket_messagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ticket_messagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>;
                };
                findMany: {
                    args: Prisma.ticket_messagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>[];
                };
                create: {
                    args: Prisma.ticket_messagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>;
                };
                createMany: {
                    args: Prisma.ticket_messagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ticket_messagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>[];
                };
                delete: {
                    args: Prisma.ticket_messagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>;
                };
                update: {
                    args: Prisma.ticket_messagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>;
                };
                deleteMany: {
                    args: Prisma.ticket_messagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ticket_messagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ticket_messagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>[];
                };
                upsert: {
                    args: Prisma.ticket_messagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticket_messagesPayload>;
                };
                aggregate: {
                    args: Prisma.Ticket_messagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTicket_messages>;
                };
                groupBy: {
                    args: Prisma.ticket_messagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ticket_messagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ticket_messagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ticket_messagesCountAggregateOutputType> | number;
                };
            };
        };
        user_roles: {
            payload: Prisma.$user_rolesPayload<ExtArgs>;
            fields: Prisma.user_rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findFirst: {
                    args: Prisma.user_rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findMany: {
                    args: Prisma.user_rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                create: {
                    args: Prisma.user_rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                createMany: {
                    args: Prisma.user_rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                delete: {
                    args: Prisma.user_rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                update: {
                    args: Prisma.user_rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                upsert: {
                    args: Prisma.user_rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                aggregate: {
                    args: Prisma.User_rolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_roles>;
                };
                groupBy: {
                    args: Prisma.user_rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesCountAggregateOutputType> | number;
                };
            };
        };
        user_sessions: {
            payload: Prisma.$user_sessionsPayload<ExtArgs>;
            fields: Prisma.user_sessionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_sessionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_sessionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                findFirst: {
                    args: Prisma.user_sessionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_sessionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                findMany: {
                    args: Prisma.user_sessionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>[];
                };
                create: {
                    args: Prisma.user_sessionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                createMany: {
                    args: Prisma.user_sessionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_sessionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>[];
                };
                delete: {
                    args: Prisma.user_sessionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                update: {
                    args: Prisma.user_sessionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                deleteMany: {
                    args: Prisma.user_sessionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_sessionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_sessionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>[];
                };
                upsert: {
                    args: Prisma.user_sessionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_sessionsPayload>;
                };
                aggregate: {
                    args: Prisma.User_sessionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_sessions>;
                };
                groupBy: {
                    args: Prisma.user_sessionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_sessionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_sessionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_sessionsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        warehouses: {
            payload: Prisma.$warehousesPayload<ExtArgs>;
            fields: Prisma.warehousesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.warehousesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.warehousesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>;
                };
                findFirst: {
                    args: Prisma.warehousesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.warehousesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>;
                };
                findMany: {
                    args: Prisma.warehousesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>[];
                };
                create: {
                    args: Prisma.warehousesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>;
                };
                createMany: {
                    args: Prisma.warehousesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.warehousesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>[];
                };
                delete: {
                    args: Prisma.warehousesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>;
                };
                update: {
                    args: Prisma.warehousesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>;
                };
                deleteMany: {
                    args: Prisma.warehousesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.warehousesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.warehousesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>[];
                };
                upsert: {
                    args: Prisma.warehousesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warehousesPayload>;
                };
                aggregate: {
                    args: Prisma.WarehousesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWarehouses>;
                };
                groupBy: {
                    args: Prisma.warehousesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WarehousesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.warehousesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WarehousesCountAggregateOutputType> | number;
                };
            };
        };
        wishlist_items: {
            payload: Prisma.$wishlist_itemsPayload<ExtArgs>;
            fields: Prisma.wishlist_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlist_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlist_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.wishlist_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlist_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                findMany: {
                    args: Prisma.wishlist_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>[];
                };
                create: {
                    args: Prisma.wishlist_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                createMany: {
                    args: Prisma.wishlist_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlist_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>[];
                };
                delete: {
                    args: Prisma.wishlist_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                update: {
                    args: Prisma.wishlist_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlist_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlist_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlist_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.wishlist_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Wishlist_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlist_items>;
                };
                groupBy: {
                    args: Prisma.wishlist_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlist_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_itemsCountAggregateOutputType> | number;
                };
            };
        };
        wishlists: {
            payload: Prisma.$wishlistsPayload<ExtArgs>;
            fields: Prisma.wishlistsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlistsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlistsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                findFirst: {
                    args: Prisma.wishlistsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlistsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                findMany: {
                    args: Prisma.wishlistsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>[];
                };
                create: {
                    args: Prisma.wishlistsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                createMany: {
                    args: Prisma.wishlistsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlistsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>[];
                };
                delete: {
                    args: Prisma.wishlistsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                update: {
                    args: Prisma.wishlistsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlistsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlistsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlistsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>[];
                };
                upsert: {
                    args: Prisma.wishlistsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                aggregate: {
                    args: Prisma.WishlistsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlists>;
                };
                groupBy: {
                    args: Prisma.wishlistsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlistsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AddressesScalarFieldEnum: {
    readonly address_id: "address_id";
    readonly customer_id: "customer_id";
    readonly city_id: "city_id";
    readonly street_address: "street_address";
    readonly postal_code: "postal_code";
    readonly is_default: "is_default";
};
export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum];
export declare const Audit_logsScalarFieldEnum: {
    readonly audit_id: "audit_id";
    readonly actor_user_id: "actor_user_id";
    readonly table_name: "table_name";
    readonly action: "action";
    readonly old_data: "old_data";
    readonly new_data: "new_data";
    readonly occurred_at: "occurred_at";
};
export type Audit_logsScalarFieldEnum = (typeof Audit_logsScalarFieldEnum)[keyof typeof Audit_logsScalarFieldEnum];
export declare const BrandsScalarFieldEnum: {
    readonly brand_id: "brand_id";
    readonly brand_name: "brand_name";
};
export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum];
export declare const CampaignsScalarFieldEnum: {
    readonly campaign_id: "campaign_id";
    readonly campaign_name: "campaign_name";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly budget: "budget";
};
export type CampaignsScalarFieldEnum = (typeof CampaignsScalarFieldEnum)[keyof typeof CampaignsScalarFieldEnum];
export declare const CarriersScalarFieldEnum: {
    readonly carrier_id: "carrier_id";
    readonly carrier_name: "carrier_name";
};
export type CarriersScalarFieldEnum = (typeof CarriersScalarFieldEnum)[keyof typeof CarriersScalarFieldEnum];
export declare const Cart_itemsScalarFieldEnum: {
    readonly cart_id: "cart_id";
    readonly variant_id: "variant_id";
    readonly quantity: "quantity";
};
export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum];
export declare const CartsScalarFieldEnum: {
    readonly cart_id: "cart_id";
    readonly customer_id: "customer_id";
    readonly created_at: "created_at";
};
export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum];
export declare const CategoriesScalarFieldEnum: {
    readonly category_id: "category_id";
    readonly parent_id: "parent_id";
    readonly category_name: "category_name";
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const CitiesScalarFieldEnum: {
    readonly city_id: "city_id";
    readonly region_id: "region_id";
    readonly city_name: "city_name";
};
export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum];
export declare const CountriesScalarFieldEnum: {
    readonly country_code: "country_code";
    readonly country_name: "country_name";
};
export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum];
export declare const Coupon_redemptionsScalarFieldEnum: {
    readonly coupon_id: "coupon_id";
    readonly order_id: "order_id";
    readonly redeemed_at: "redeemed_at";
};
export type Coupon_redemptionsScalarFieldEnum = (typeof Coupon_redemptionsScalarFieldEnum)[keyof typeof Coupon_redemptionsScalarFieldEnum];
export declare const CouponsScalarFieldEnum: {
    readonly coupon_id: "coupon_id";
    readonly coupon_code: "coupon_code";
    readonly percent_off: "percent_off";
    readonly starts_at: "starts_at";
    readonly expires_at: "expires_at";
};
export type CouponsScalarFieldEnum = (typeof CouponsScalarFieldEnum)[keyof typeof CouponsScalarFieldEnum];
export declare const CustomersScalarFieldEnum: {
    readonly customer_id: "customer_id";
    readonly user_id: "user_id";
    readonly loyalty_points: "loyalty_points";
    readonly date_of_birth: "date_of_birth";
};
export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum];
export declare const Login_attemptsScalarFieldEnum: {
    readonly attempt_id: "attempt_id";
    readonly user_id: "user_id";
    readonly attempted_at: "attempted_at";
    readonly success: "success";
    readonly ip_address: "ip_address";
};
export type Login_attemptsScalarFieldEnum = (typeof Login_attemptsScalarFieldEnum)[keyof typeof Login_attemptsScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly notification_id: "notification_id";
    readonly user_id: "user_id";
    readonly message: "message";
    readonly read_at: "read_at";
    readonly created_at: "created_at";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const Order_itemsScalarFieldEnum: {
    readonly order_item_id: "order_item_id";
    readonly order_id: "order_id";
    readonly variant_id: "variant_id";
    readonly quantity: "quantity";
    readonly unit_price: "unit_price";
    readonly discount_amount: "discount_amount";
};
export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum];
export declare const Order_status_historyScalarFieldEnum: {
    readonly history_id: "history_id";
    readonly order_id: "order_id";
    readonly status_code: "status_code";
    readonly changed_at: "changed_at";
};
export type Order_status_historyScalarFieldEnum = (typeof Order_status_historyScalarFieldEnum)[keyof typeof Order_status_historyScalarFieldEnum];
export declare const Order_statusesScalarFieldEnum: {
    readonly status_code: "status_code";
    readonly description: "description";
};
export type Order_statusesScalarFieldEnum = (typeof Order_statusesScalarFieldEnum)[keyof typeof Order_statusesScalarFieldEnum];
export declare const OrdersScalarFieldEnum: {
    readonly order_id: "order_id";
    readonly customer_id: "customer_id";
    readonly address_id: "address_id";
    readonly status_code: "status_code";
    readonly ordered_at: "ordered_at";
    readonly shipping_fee: "shipping_fee";
    readonly notes: "notes";
};
export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];
export declare const Payment_methodsScalarFieldEnum: {
    readonly method_id: "method_id";
    readonly method_name: "method_name";
};
export type Payment_methodsScalarFieldEnum = (typeof Payment_methodsScalarFieldEnum)[keyof typeof Payment_methodsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly payment_id: "payment_id";
    readonly order_id: "order_id";
    readonly method_id: "method_id";
    readonly amount: "amount";
    readonly status: "status";
    readonly paid_at: "paid_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PermissionsScalarFieldEnum: {
    readonly permission_id: "permission_id";
    readonly permission_code: "permission_code";
    readonly description: "description";
};
export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum];
export declare const Product_imagesScalarFieldEnum: {
    readonly image_id: "image_id";
    readonly product_id: "product_id";
    readonly image_url: "image_url";
    readonly sort_order: "sort_order";
};
export type Product_imagesScalarFieldEnum = (typeof Product_imagesScalarFieldEnum)[keyof typeof Product_imagesScalarFieldEnum];
export declare const Product_price_historyScalarFieldEnum: {
    readonly history_id: "history_id";
    readonly product_id: "product_id";
    readonly old_price: "old_price";
    readonly new_price: "new_price";
    readonly changed_at: "changed_at";
};
export type Product_price_historyScalarFieldEnum = (typeof Product_price_historyScalarFieldEnum)[keyof typeof Product_price_historyScalarFieldEnum];
export declare const Product_tag_linksScalarFieldEnum: {
    readonly product_id: "product_id";
    readonly tag_id: "tag_id";
};
export type Product_tag_linksScalarFieldEnum = (typeof Product_tag_linksScalarFieldEnum)[keyof typeof Product_tag_linksScalarFieldEnum];
export declare const Product_tagsScalarFieldEnum: {
    readonly tag_id: "tag_id";
    readonly tag_name: "tag_name";
};
export type Product_tagsScalarFieldEnum = (typeof Product_tagsScalarFieldEnum)[keyof typeof Product_tagsScalarFieldEnum];
export declare const Product_variantsScalarFieldEnum: {
    readonly variant_id: "variant_id";
    readonly product_id: "product_id";
    readonly variant_sku: "variant_sku";
    readonly color: "color";
    readonly size: "size";
    readonly price_delta: "price_delta";
};
export type Product_variantsScalarFieldEnum = (typeof Product_variantsScalarFieldEnum)[keyof typeof Product_variantsScalarFieldEnum];
export declare const ProductsScalarFieldEnum: {
    readonly product_id: "product_id";
    readonly category_id: "category_id";
    readonly brand_id: "brand_id";
    readonly sku: "sku";
    readonly product_name: "product_name";
    readonly description: "description";
    readonly base_price: "base_price";
    readonly attributes: "attributes";
    readonly tags: "tags";
    readonly active: "active";
    readonly created_at: "created_at";
};
export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum];
export declare const Purchase_order_itemsScalarFieldEnum: {
    readonly purchase_order_id: "purchase_order_id";
    readonly variant_id: "variant_id";
    readonly quantity: "quantity";
    readonly unit_cost: "unit_cost";
};
export type Purchase_order_itemsScalarFieldEnum = (typeof Purchase_order_itemsScalarFieldEnum)[keyof typeof Purchase_order_itemsScalarFieldEnum];
export declare const Purchase_ordersScalarFieldEnum: {
    readonly purchase_order_id: "purchase_order_id";
    readonly supplier_id: "supplier_id";
    readonly warehouse_id: "warehouse_id";
    readonly status: "status";
    readonly ordered_at: "ordered_at";
};
export type Purchase_ordersScalarFieldEnum = (typeof Purchase_ordersScalarFieldEnum)[keyof typeof Purchase_ordersScalarFieldEnum];
export declare const RefundsScalarFieldEnum: {
    readonly refund_id: "refund_id";
    readonly payment_id: "payment_id";
    readonly amount: "amount";
    readonly reason: "reason";
    readonly refunded_at: "refunded_at";
};
export type RefundsScalarFieldEnum = (typeof RefundsScalarFieldEnum)[keyof typeof RefundsScalarFieldEnum];
export declare const RegionsScalarFieldEnum: {
    readonly region_id: "region_id";
    readonly country_code: "country_code";
    readonly region_name: "region_name";
};
export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum];
export declare const ReturnsScalarFieldEnum: {
    readonly return_id: "return_id";
    readonly order_item_id: "order_item_id";
    readonly quantity: "quantity";
    readonly reason: "reason";
    readonly status: "status";
};
export type ReturnsScalarFieldEnum = (typeof ReturnsScalarFieldEnum)[keyof typeof ReturnsScalarFieldEnum];
export declare const ReviewsScalarFieldEnum: {
    readonly review_id: "review_id";
    readonly customer_id: "customer_id";
    readonly product_id: "product_id";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly created_at: "created_at";
};
export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];
export declare const Role_permissionsScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly permission_id: "permission_id";
};
export type Role_permissionsScalarFieldEnum = (typeof Role_permissionsScalarFieldEnum)[keyof typeof Role_permissionsScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly role_name: "role_name";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const Shipment_eventsScalarFieldEnum: {
    readonly event_id: "event_id";
    readonly shipment_id: "shipment_id";
    readonly event_type: "event_type";
    readonly event_at: "event_at";
    readonly details: "details";
};
export type Shipment_eventsScalarFieldEnum = (typeof Shipment_eventsScalarFieldEnum)[keyof typeof Shipment_eventsScalarFieldEnum];
export declare const ShipmentsScalarFieldEnum: {
    readonly shipment_id: "shipment_id";
    readonly order_id: "order_id";
    readonly carrier_id: "carrier_id";
    readonly tracking_number: "tracking_number";
    readonly status: "status";
    readonly shipped_at: "shipped_at";
    readonly delivered_at: "delivered_at";
};
export type ShipmentsScalarFieldEnum = (typeof ShipmentsScalarFieldEnum)[keyof typeof ShipmentsScalarFieldEnum];
export declare const Shipping_ratesScalarFieldEnum: {
    readonly rate_id: "rate_id";
    readonly carrier_id: "carrier_id";
    readonly country_code: "country_code";
    readonly base_fee: "base_fee";
};
export type Shipping_ratesScalarFieldEnum = (typeof Shipping_ratesScalarFieldEnum)[keyof typeof Shipping_ratesScalarFieldEnum];
export declare const Stock_movementsScalarFieldEnum: {
    readonly movement_id: "movement_id";
    readonly warehouse_id: "warehouse_id";
    readonly variant_id: "variant_id";
    readonly quantity_change: "quantity_change";
    readonly reason: "reason";
    readonly moved_at: "moved_at";
};
export type Stock_movementsScalarFieldEnum = (typeof Stock_movementsScalarFieldEnum)[keyof typeof Stock_movementsScalarFieldEnum];
export declare const StocksScalarFieldEnum: {
    readonly warehouse_id: "warehouse_id";
    readonly variant_id: "variant_id";
    readonly quantity: "quantity";
    readonly reserved_quantity: "reserved_quantity";
};
export type StocksScalarFieldEnum = (typeof StocksScalarFieldEnum)[keyof typeof StocksScalarFieldEnum];
export declare const SuppliersScalarFieldEnum: {
    readonly supplier_id: "supplier_id";
    readonly supplier_name: "supplier_name";
    readonly email: "email";
};
export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum];
export declare const Support_ticketsScalarFieldEnum: {
    readonly ticket_id: "ticket_id";
    readonly customer_id: "customer_id";
    readonly order_id: "order_id";
    readonly subject: "subject";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type Support_ticketsScalarFieldEnum = (typeof Support_ticketsScalarFieldEnum)[keyof typeof Support_ticketsScalarFieldEnum];
export declare const System_settingsScalarFieldEnum: {
    readonly setting_key: "setting_key";
    readonly setting_value: "setting_value";
};
export type System_settingsScalarFieldEnum = (typeof System_settingsScalarFieldEnum)[keyof typeof System_settingsScalarFieldEnum];
export declare const Ticket_messagesScalarFieldEnum: {
    readonly message_id: "message_id";
    readonly ticket_id: "ticket_id";
    readonly author_user_id: "author_user_id";
    readonly message_body: "message_body";
    readonly sent_at: "sent_at";
};
export type Ticket_messagesScalarFieldEnum = (typeof Ticket_messagesScalarFieldEnum)[keyof typeof Ticket_messagesScalarFieldEnum];
export declare const User_rolesScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly role_id: "role_id";
    readonly assigned_at: "assigned_at";
};
export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum];
export declare const User_sessionsScalarFieldEnum: {
    readonly session_id: "session_id";
    readonly user_id: "user_id";
    readonly created_at: "created_at";
    readonly expires_at: "expires_at";
    readonly revoked_at: "revoked_at";
};
export type User_sessionsScalarFieldEnum = (typeof User_sessionsScalarFieldEnum)[keyof typeof User_sessionsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly full_name: "full_name";
    readonly phone: "phone";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly metadata: "metadata";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const WarehousesScalarFieldEnum: {
    readonly warehouse_id: "warehouse_id";
    readonly warehouse_name: "warehouse_name";
    readonly city_id: "city_id";
};
export type WarehousesScalarFieldEnum = (typeof WarehousesScalarFieldEnum)[keyof typeof WarehousesScalarFieldEnum];
export declare const Wishlist_itemsScalarFieldEnum: {
    readonly wishlist_id: "wishlist_id";
    readonly product_id: "product_id";
};
export type Wishlist_itemsScalarFieldEnum = (typeof Wishlist_itemsScalarFieldEnum)[keyof typeof Wishlist_itemsScalarFieldEnum];
export declare const WishlistsScalarFieldEnum: {
    readonly wishlist_id: "wishlist_id";
    readonly customer_id: "customer_id";
    readonly wishlist_name: "wishlist_name";
};
export type WishlistsScalarFieldEnum = (typeof WishlistsScalarFieldEnum)[keyof typeof WishlistsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    addresses?: Prisma.addressesOmit;
    audit_logs?: Prisma.audit_logsOmit;
    brands?: Prisma.brandsOmit;
    campaigns?: Prisma.campaignsOmit;
    carriers?: Prisma.carriersOmit;
    cart_items?: Prisma.cart_itemsOmit;
    carts?: Prisma.cartsOmit;
    categories?: Prisma.categoriesOmit;
    cities?: Prisma.citiesOmit;
    countries?: Prisma.countriesOmit;
    coupon_redemptions?: Prisma.coupon_redemptionsOmit;
    coupons?: Prisma.couponsOmit;
    customers?: Prisma.customersOmit;
    login_attempts?: Prisma.login_attemptsOmit;
    notifications?: Prisma.notificationsOmit;
    order_items?: Prisma.order_itemsOmit;
    order_status_history?: Prisma.order_status_historyOmit;
    order_statuses?: Prisma.order_statusesOmit;
    orders?: Prisma.ordersOmit;
    payment_methods?: Prisma.payment_methodsOmit;
    payments?: Prisma.paymentsOmit;
    permissions?: Prisma.permissionsOmit;
    product_images?: Prisma.product_imagesOmit;
    product_price_history?: Prisma.product_price_historyOmit;
    product_tag_links?: Prisma.product_tag_linksOmit;
    product_tags?: Prisma.product_tagsOmit;
    product_variants?: Prisma.product_variantsOmit;
    products?: Prisma.productsOmit;
    purchase_order_items?: Prisma.purchase_order_itemsOmit;
    purchase_orders?: Prisma.purchase_ordersOmit;
    refunds?: Prisma.refundsOmit;
    regions?: Prisma.regionsOmit;
    returns?: Prisma.returnsOmit;
    reviews?: Prisma.reviewsOmit;
    role_permissions?: Prisma.role_permissionsOmit;
    roles?: Prisma.rolesOmit;
    shipment_events?: Prisma.shipment_eventsOmit;
    shipments?: Prisma.shipmentsOmit;
    shipping_rates?: Prisma.shipping_ratesOmit;
    stock_movements?: Prisma.stock_movementsOmit;
    stocks?: Prisma.stocksOmit;
    suppliers?: Prisma.suppliersOmit;
    support_tickets?: Prisma.support_ticketsOmit;
    system_settings?: Prisma.system_settingsOmit;
    ticket_messages?: Prisma.ticket_messagesOmit;
    user_roles?: Prisma.user_rolesOmit;
    user_sessions?: Prisma.user_sessionsOmit;
    users?: Prisma.usersOmit;
    warehouses?: Prisma.warehousesOmit;
    wishlist_items?: Prisma.wishlist_itemsOmit;
    wishlists?: Prisma.wishlistsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
