import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
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
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
