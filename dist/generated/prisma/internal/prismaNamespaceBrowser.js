import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    addresses: 'addresses',
    audit_logs: 'audit_logs',
    brands: 'brands',
    campaigns: 'campaigns',
    carriers: 'carriers',
    cart_items: 'cart_items',
    carts: 'carts',
    categories: 'categories',
    cities: 'cities',
    countries: 'countries',
    coupon_redemptions: 'coupon_redemptions',
    coupons: 'coupons',
    customers: 'customers',
    login_attempts: 'login_attempts',
    notifications: 'notifications',
    order_items: 'order_items',
    order_status_history: 'order_status_history',
    order_statuses: 'order_statuses',
    orders: 'orders',
    payment_methods: 'payment_methods',
    payments: 'payments',
    permissions: 'permissions',
    product_images: 'product_images',
    product_price_history: 'product_price_history',
    product_tag_links: 'product_tag_links',
    product_tags: 'product_tags',
    product_variants: 'product_variants',
    products: 'products',
    purchase_order_items: 'purchase_order_items',
    purchase_orders: 'purchase_orders',
    refunds: 'refunds',
    regions: 'regions',
    returns: 'returns',
    reviews: 'reviews',
    role_permissions: 'role_permissions',
    roles: 'roles',
    shipment_events: 'shipment_events',
    shipments: 'shipments',
    shipping_rates: 'shipping_rates',
    stock_movements: 'stock_movements',
    stocks: 'stocks',
    suppliers: 'suppliers',
    support_tickets: 'support_tickets',
    system_settings: 'system_settings',
    ticket_messages: 'ticket_messages',
    user_roles: 'user_roles',
    user_sessions: 'user_sessions',
    users: 'users',
    warehouses: 'warehouses',
    wishlist_items: 'wishlist_items',
    wishlists: 'wishlists'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const AddressesScalarFieldEnum = {
    address_id: 'address_id',
    customer_id: 'customer_id',
    city_id: 'city_id',
    street_address: 'street_address',
    postal_code: 'postal_code',
    is_default: 'is_default'
};
export const Audit_logsScalarFieldEnum = {
    audit_id: 'audit_id',
    actor_user_id: 'actor_user_id',
    table_name: 'table_name',
    action: 'action',
    old_data: 'old_data',
    new_data: 'new_data',
    occurred_at: 'occurred_at'
};
export const BrandsScalarFieldEnum = {
    brand_id: 'brand_id',
    brand_name: 'brand_name'
};
export const CampaignsScalarFieldEnum = {
    campaign_id: 'campaign_id',
    campaign_name: 'campaign_name',
    start_date: 'start_date',
    end_date: 'end_date',
    budget: 'budget'
};
export const CarriersScalarFieldEnum = {
    carrier_id: 'carrier_id',
    carrier_name: 'carrier_name'
};
export const Cart_itemsScalarFieldEnum = {
    cart_id: 'cart_id',
    variant_id: 'variant_id',
    quantity: 'quantity'
};
export const CartsScalarFieldEnum = {
    cart_id: 'cart_id',
    customer_id: 'customer_id',
    created_at: 'created_at'
};
export const CategoriesScalarFieldEnum = {
    category_id: 'category_id',
    parent_id: 'parent_id',
    category_name: 'category_name'
};
export const CitiesScalarFieldEnum = {
    city_id: 'city_id',
    region_id: 'region_id',
    city_name: 'city_name'
};
export const CountriesScalarFieldEnum = {
    country_code: 'country_code',
    country_name: 'country_name'
};
export const Coupon_redemptionsScalarFieldEnum = {
    coupon_id: 'coupon_id',
    order_id: 'order_id',
    redeemed_at: 'redeemed_at'
};
export const CouponsScalarFieldEnum = {
    coupon_id: 'coupon_id',
    coupon_code: 'coupon_code',
    percent_off: 'percent_off',
    starts_at: 'starts_at',
    expires_at: 'expires_at'
};
export const CustomersScalarFieldEnum = {
    customer_id: 'customer_id',
    user_id: 'user_id',
    loyalty_points: 'loyalty_points',
    date_of_birth: 'date_of_birth'
};
export const Login_attemptsScalarFieldEnum = {
    attempt_id: 'attempt_id',
    user_id: 'user_id',
    attempted_at: 'attempted_at',
    success: 'success',
    ip_address: 'ip_address'
};
export const NotificationsScalarFieldEnum = {
    notification_id: 'notification_id',
    user_id: 'user_id',
    message: 'message',
    read_at: 'read_at',
    created_at: 'created_at'
};
export const Order_itemsScalarFieldEnum = {
    order_item_id: 'order_item_id',
    order_id: 'order_id',
    variant_id: 'variant_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    discount_amount: 'discount_amount'
};
export const Order_status_historyScalarFieldEnum = {
    history_id: 'history_id',
    order_id: 'order_id',
    status_code: 'status_code',
    changed_at: 'changed_at'
};
export const Order_statusesScalarFieldEnum = {
    status_code: 'status_code',
    description: 'description'
};
export const OrdersScalarFieldEnum = {
    order_id: 'order_id',
    customer_id: 'customer_id',
    address_id: 'address_id',
    status_code: 'status_code',
    ordered_at: 'ordered_at',
    shipping_fee: 'shipping_fee',
    notes: 'notes'
};
export const Payment_methodsScalarFieldEnum = {
    method_id: 'method_id',
    method_name: 'method_name'
};
export const PaymentsScalarFieldEnum = {
    payment_id: 'payment_id',
    order_id: 'order_id',
    method_id: 'method_id',
    amount: 'amount',
    status: 'status',
    paid_at: 'paid_at'
};
export const PermissionsScalarFieldEnum = {
    permission_id: 'permission_id',
    permission_code: 'permission_code',
    description: 'description'
};
export const Product_imagesScalarFieldEnum = {
    image_id: 'image_id',
    product_id: 'product_id',
    image_url: 'image_url',
    sort_order: 'sort_order'
};
export const Product_price_historyScalarFieldEnum = {
    history_id: 'history_id',
    product_id: 'product_id',
    old_price: 'old_price',
    new_price: 'new_price',
    changed_at: 'changed_at'
};
export const Product_tag_linksScalarFieldEnum = {
    product_id: 'product_id',
    tag_id: 'tag_id'
};
export const Product_tagsScalarFieldEnum = {
    tag_id: 'tag_id',
    tag_name: 'tag_name'
};
export const Product_variantsScalarFieldEnum = {
    variant_id: 'variant_id',
    product_id: 'product_id',
    variant_sku: 'variant_sku',
    color: 'color',
    size: 'size',
    price_delta: 'price_delta'
};
export const ProductsScalarFieldEnum = {
    product_id: 'product_id',
    category_id: 'category_id',
    brand_id: 'brand_id',
    sku: 'sku',
    product_name: 'product_name',
    description: 'description',
    base_price: 'base_price',
    attributes: 'attributes',
    tags: 'tags',
    active: 'active',
    created_at: 'created_at'
};
export const Purchase_order_itemsScalarFieldEnum = {
    purchase_order_id: 'purchase_order_id',
    variant_id: 'variant_id',
    quantity: 'quantity',
    unit_cost: 'unit_cost'
};
export const Purchase_ordersScalarFieldEnum = {
    purchase_order_id: 'purchase_order_id',
    supplier_id: 'supplier_id',
    warehouse_id: 'warehouse_id',
    status: 'status',
    ordered_at: 'ordered_at'
};
export const RefundsScalarFieldEnum = {
    refund_id: 'refund_id',
    payment_id: 'payment_id',
    amount: 'amount',
    reason: 'reason',
    refunded_at: 'refunded_at'
};
export const RegionsScalarFieldEnum = {
    region_id: 'region_id',
    country_code: 'country_code',
    region_name: 'region_name'
};
export const ReturnsScalarFieldEnum = {
    return_id: 'return_id',
    order_item_id: 'order_item_id',
    quantity: 'quantity',
    reason: 'reason',
    status: 'status'
};
export const ReviewsScalarFieldEnum = {
    review_id: 'review_id',
    customer_id: 'customer_id',
    product_id: 'product_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
};
export const Role_permissionsScalarFieldEnum = {
    role_id: 'role_id',
    permission_id: 'permission_id'
};
export const RolesScalarFieldEnum = {
    role_id: 'role_id',
    role_name: 'role_name'
};
export const Shipment_eventsScalarFieldEnum = {
    event_id: 'event_id',
    shipment_id: 'shipment_id',
    event_type: 'event_type',
    event_at: 'event_at',
    details: 'details'
};
export const ShipmentsScalarFieldEnum = {
    shipment_id: 'shipment_id',
    order_id: 'order_id',
    carrier_id: 'carrier_id',
    tracking_number: 'tracking_number',
    status: 'status',
    shipped_at: 'shipped_at',
    delivered_at: 'delivered_at'
};
export const Shipping_ratesScalarFieldEnum = {
    rate_id: 'rate_id',
    carrier_id: 'carrier_id',
    country_code: 'country_code',
    base_fee: 'base_fee'
};
export const Stock_movementsScalarFieldEnum = {
    movement_id: 'movement_id',
    warehouse_id: 'warehouse_id',
    variant_id: 'variant_id',
    quantity_change: 'quantity_change',
    reason: 'reason',
    moved_at: 'moved_at'
};
export const StocksScalarFieldEnum = {
    warehouse_id: 'warehouse_id',
    variant_id: 'variant_id',
    quantity: 'quantity',
    reserved_quantity: 'reserved_quantity'
};
export const SuppliersScalarFieldEnum = {
    supplier_id: 'supplier_id',
    supplier_name: 'supplier_name',
    email: 'email'
};
export const Support_ticketsScalarFieldEnum = {
    ticket_id: 'ticket_id',
    customer_id: 'customer_id',
    order_id: 'order_id',
    subject: 'subject',
    status: 'status',
    created_at: 'created_at'
};
export const System_settingsScalarFieldEnum = {
    setting_key: 'setting_key',
    setting_value: 'setting_value'
};
export const Ticket_messagesScalarFieldEnum = {
    message_id: 'message_id',
    ticket_id: 'ticket_id',
    author_user_id: 'author_user_id',
    message_body: 'message_body',
    sent_at: 'sent_at'
};
export const User_rolesScalarFieldEnum = {
    user_id: 'user_id',
    role_id: 'role_id',
    assigned_at: 'assigned_at'
};
export const User_sessionsScalarFieldEnum = {
    session_id: 'session_id',
    user_id: 'user_id',
    created_at: 'created_at',
    expires_at: 'expires_at',
    revoked_at: 'revoked_at'
};
export const UsersScalarFieldEnum = {
    user_id: 'user_id',
    email: 'email',
    password_hash: 'password_hash',
    full_name: 'full_name',
    phone: 'phone',
    is_active: 'is_active',
    created_at: 'created_at',
    metadata: 'metadata'
};
export const WarehousesScalarFieldEnum = {
    warehouse_id: 'warehouse_id',
    warehouse_name: 'warehouse_name',
    city_id: 'city_id'
};
export const Wishlist_itemsScalarFieldEnum = {
    wishlist_id: 'wishlist_id',
    product_id: 'product_id'
};
export const WishlistsScalarFieldEnum = {
    wishlist_id: 'wishlist_id',
    customer_id: 'customer_id',
    wishlist_name: 'wishlist_name'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map