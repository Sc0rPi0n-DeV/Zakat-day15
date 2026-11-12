import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get addresses(): Prisma.addressesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get audit_logs(): Prisma.audit_logsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get brands(): Prisma.brandsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get campaigns(): Prisma.campaignsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get carriers(): Prisma.carriersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cart_items(): Prisma.cart_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get carts(): Prisma.cartsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get categories(): Prisma.categoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cities(): Prisma.citiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get countries(): Prisma.countriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get coupon_redemptions(): Prisma.coupon_redemptionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get coupons(): Prisma.couponsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customers(): Prisma.customersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get login_attempts(): Prisma.login_attemptsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notifications(): Prisma.notificationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_items(): Prisma.order_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_status_history(): Prisma.order_status_historyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_statuses(): Prisma.order_statusesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orders(): Prisma.ordersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payment_methods(): Prisma.payment_methodsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payments(): Prisma.paymentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get permissions(): Prisma.permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_images(): Prisma.product_imagesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_price_history(): Prisma.product_price_historyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_tag_links(): Prisma.product_tag_linksDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_tags(): Prisma.product_tagsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_variants(): Prisma.product_variantsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get products(): Prisma.productsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get purchase_order_items(): Prisma.purchase_order_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get purchase_orders(): Prisma.purchase_ordersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refunds(): Prisma.refundsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get regions(): Prisma.regionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get returns(): Prisma.returnsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reviews(): Prisma.reviewsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role_permissions(): Prisma.role_permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roles(): Prisma.rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shipment_events(): Prisma.shipment_eventsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shipments(): Prisma.shipmentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shipping_rates(): Prisma.shipping_ratesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stock_movements(): Prisma.stock_movementsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stocks(): Prisma.stocksDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get suppliers(): Prisma.suppliersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get support_tickets(): Prisma.support_ticketsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get system_settings(): Prisma.system_settingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ticket_messages(): Prisma.ticket_messagesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_roles(): Prisma.user_rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_sessions(): Prisma.user_sessionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get warehouses(): Prisma.warehousesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wishlist_items(): Prisma.wishlist_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wishlists(): Prisma.wishlistsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
