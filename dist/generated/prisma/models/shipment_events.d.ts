import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type shipment_eventsModel = runtime.Types.Result.DefaultSelection<Prisma.$shipment_eventsPayload>;
export type AggregateShipment_events = {
    _count: Shipment_eventsCountAggregateOutputType | null;
    _avg: Shipment_eventsAvgAggregateOutputType | null;
    _sum: Shipment_eventsSumAggregateOutputType | null;
    _min: Shipment_eventsMinAggregateOutputType | null;
    _max: Shipment_eventsMaxAggregateOutputType | null;
};
export type Shipment_eventsAvgAggregateOutputType = {
    event_id: number | null;
    shipment_id: number | null;
};
export type Shipment_eventsSumAggregateOutputType = {
    event_id: bigint | null;
    shipment_id: bigint | null;
};
export type Shipment_eventsMinAggregateOutputType = {
    event_id: bigint | null;
    shipment_id: bigint | null;
    event_type: string | null;
    event_at: Date | null;
};
export type Shipment_eventsMaxAggregateOutputType = {
    event_id: bigint | null;
    shipment_id: bigint | null;
    event_type: string | null;
    event_at: Date | null;
};
export type Shipment_eventsCountAggregateOutputType = {
    event_id: number;
    shipment_id: number;
    event_type: number;
    event_at: number;
    details: number;
    _all: number;
};
export type Shipment_eventsAvgAggregateInputType = {
    event_id?: true;
    shipment_id?: true;
};
export type Shipment_eventsSumAggregateInputType = {
    event_id?: true;
    shipment_id?: true;
};
export type Shipment_eventsMinAggregateInputType = {
    event_id?: true;
    shipment_id?: true;
    event_type?: true;
    event_at?: true;
};
export type Shipment_eventsMaxAggregateInputType = {
    event_id?: true;
    shipment_id?: true;
    event_type?: true;
    event_at?: true;
};
export type Shipment_eventsCountAggregateInputType = {
    event_id?: true;
    shipment_id?: true;
    event_type?: true;
    event_at?: true;
    details?: true;
    _all?: true;
};
export type Shipment_eventsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipment_eventsWhereInput;
    orderBy?: Prisma.shipment_eventsOrderByWithRelationInput | Prisma.shipment_eventsOrderByWithRelationInput[];
    cursor?: Prisma.shipment_eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Shipment_eventsCountAggregateInputType;
    _avg?: Shipment_eventsAvgAggregateInputType;
    _sum?: Shipment_eventsSumAggregateInputType;
    _min?: Shipment_eventsMinAggregateInputType;
    _max?: Shipment_eventsMaxAggregateInputType;
};
export type GetShipment_eventsAggregateType<T extends Shipment_eventsAggregateArgs> = {
    [P in keyof T & keyof AggregateShipment_events]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipment_events[P]> : Prisma.GetScalarType<T[P], AggregateShipment_events[P]>;
};
export type shipment_eventsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipment_eventsWhereInput;
    orderBy?: Prisma.shipment_eventsOrderByWithAggregationInput | Prisma.shipment_eventsOrderByWithAggregationInput[];
    by: Prisma.Shipment_eventsScalarFieldEnum[] | Prisma.Shipment_eventsScalarFieldEnum;
    having?: Prisma.shipment_eventsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Shipment_eventsCountAggregateInputType | true;
    _avg?: Shipment_eventsAvgAggregateInputType;
    _sum?: Shipment_eventsSumAggregateInputType;
    _min?: Shipment_eventsMinAggregateInputType;
    _max?: Shipment_eventsMaxAggregateInputType;
};
export type Shipment_eventsGroupByOutputType = {
    event_id: bigint;
    shipment_id: bigint;
    event_type: string;
    event_at: Date;
    details: runtime.JsonValue;
    _count: Shipment_eventsCountAggregateOutputType | null;
    _avg: Shipment_eventsAvgAggregateOutputType | null;
    _sum: Shipment_eventsSumAggregateOutputType | null;
    _min: Shipment_eventsMinAggregateOutputType | null;
    _max: Shipment_eventsMaxAggregateOutputType | null;
};
export type GetShipment_eventsGroupByPayload<T extends shipment_eventsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Shipment_eventsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Shipment_eventsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Shipment_eventsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Shipment_eventsGroupByOutputType[P]>;
}>>;
export type shipment_eventsWhereInput = {
    AND?: Prisma.shipment_eventsWhereInput | Prisma.shipment_eventsWhereInput[];
    OR?: Prisma.shipment_eventsWhereInput[];
    NOT?: Prisma.shipment_eventsWhereInput | Prisma.shipment_eventsWhereInput[];
    event_id?: Prisma.BigIntFilter<"shipment_events"> | bigint | number;
    shipment_id?: Prisma.BigIntFilter<"shipment_events"> | bigint | number;
    event_type?: Prisma.StringFilter<"shipment_events"> | string;
    event_at?: Prisma.DateTimeFilter<"shipment_events"> | Date | string;
    details?: Prisma.JsonFilter<"shipment_events">;
    shipments?: Prisma.XOR<Prisma.ShipmentsScalarRelationFilter, Prisma.shipmentsWhereInput>;
};
export type shipment_eventsOrderByWithRelationInput = {
    event_id?: Prisma.SortOrder;
    shipment_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_at?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    shipments?: Prisma.shipmentsOrderByWithRelationInput;
};
export type shipment_eventsWhereUniqueInput = Prisma.AtLeast<{
    event_id?: bigint | number;
    AND?: Prisma.shipment_eventsWhereInput | Prisma.shipment_eventsWhereInput[];
    OR?: Prisma.shipment_eventsWhereInput[];
    NOT?: Prisma.shipment_eventsWhereInput | Prisma.shipment_eventsWhereInput[];
    shipment_id?: Prisma.BigIntFilter<"shipment_events"> | bigint | number;
    event_type?: Prisma.StringFilter<"shipment_events"> | string;
    event_at?: Prisma.DateTimeFilter<"shipment_events"> | Date | string;
    details?: Prisma.JsonFilter<"shipment_events">;
    shipments?: Prisma.XOR<Prisma.ShipmentsScalarRelationFilter, Prisma.shipmentsWhereInput>;
}, "event_id">;
export type shipment_eventsOrderByWithAggregationInput = {
    event_id?: Prisma.SortOrder;
    shipment_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_at?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    _count?: Prisma.shipment_eventsCountOrderByAggregateInput;
    _avg?: Prisma.shipment_eventsAvgOrderByAggregateInput;
    _max?: Prisma.shipment_eventsMaxOrderByAggregateInput;
    _min?: Prisma.shipment_eventsMinOrderByAggregateInput;
    _sum?: Prisma.shipment_eventsSumOrderByAggregateInput;
};
export type shipment_eventsScalarWhereWithAggregatesInput = {
    AND?: Prisma.shipment_eventsScalarWhereWithAggregatesInput | Prisma.shipment_eventsScalarWhereWithAggregatesInput[];
    OR?: Prisma.shipment_eventsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.shipment_eventsScalarWhereWithAggregatesInput | Prisma.shipment_eventsScalarWhereWithAggregatesInput[];
    event_id?: Prisma.BigIntWithAggregatesFilter<"shipment_events"> | bigint | number;
    shipment_id?: Prisma.BigIntWithAggregatesFilter<"shipment_events"> | bigint | number;
    event_type?: Prisma.StringWithAggregatesFilter<"shipment_events"> | string;
    event_at?: Prisma.DateTimeWithAggregatesFilter<"shipment_events"> | Date | string;
    details?: Prisma.JsonWithAggregatesFilter<"shipment_events">;
};
export type shipment_eventsCreateInput = {
    event_id?: bigint | number;
    event_type: string;
    event_at?: Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    shipments: Prisma.shipmentsCreateNestedOneWithoutShipment_eventsInput;
};
export type shipment_eventsUncheckedCreateInput = {
    event_id?: bigint | number;
    shipment_id: bigint | number;
    event_type: string;
    event_at?: Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsUpdateInput = {
    event_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    event_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    shipments?: Prisma.shipmentsUpdateOneRequiredWithoutShipment_eventsNestedInput;
};
export type shipment_eventsUncheckedUpdateInput = {
    event_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    event_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsCreateManyInput = {
    event_id?: bigint | number;
    shipment_id: bigint | number;
    event_type: string;
    event_at?: Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsUpdateManyMutationInput = {
    event_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    event_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsUncheckedUpdateManyInput = {
    event_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    shipment_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    event_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsCountOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    shipment_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_at?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
};
export type shipment_eventsAvgOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    shipment_id?: Prisma.SortOrder;
};
export type shipment_eventsMaxOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    shipment_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_at?: Prisma.SortOrder;
};
export type shipment_eventsMinOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    shipment_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    event_at?: Prisma.SortOrder;
};
export type shipment_eventsSumOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    shipment_id?: Prisma.SortOrder;
};
export type Shipment_eventsListRelationFilter = {
    every?: Prisma.shipment_eventsWhereInput;
    some?: Prisma.shipment_eventsWhereInput;
    none?: Prisma.shipment_eventsWhereInput;
};
export type shipment_eventsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type shipment_eventsCreateNestedManyWithoutShipmentsInput = {
    create?: Prisma.XOR<Prisma.shipment_eventsCreateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput> | Prisma.shipment_eventsCreateWithoutShipmentsInput[] | Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput[];
    connectOrCreate?: Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput | Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput[];
    createMany?: Prisma.shipment_eventsCreateManyShipmentsInputEnvelope;
    connect?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
};
export type shipment_eventsUncheckedCreateNestedManyWithoutShipmentsInput = {
    create?: Prisma.XOR<Prisma.shipment_eventsCreateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput> | Prisma.shipment_eventsCreateWithoutShipmentsInput[] | Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput[];
    connectOrCreate?: Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput | Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput[];
    createMany?: Prisma.shipment_eventsCreateManyShipmentsInputEnvelope;
    connect?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
};
export type shipment_eventsUpdateManyWithoutShipmentsNestedInput = {
    create?: Prisma.XOR<Prisma.shipment_eventsCreateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput> | Prisma.shipment_eventsCreateWithoutShipmentsInput[] | Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput[];
    connectOrCreate?: Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput | Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput[];
    upsert?: Prisma.shipment_eventsUpsertWithWhereUniqueWithoutShipmentsInput | Prisma.shipment_eventsUpsertWithWhereUniqueWithoutShipmentsInput[];
    createMany?: Prisma.shipment_eventsCreateManyShipmentsInputEnvelope;
    set?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    disconnect?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    delete?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    connect?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    update?: Prisma.shipment_eventsUpdateWithWhereUniqueWithoutShipmentsInput | Prisma.shipment_eventsUpdateWithWhereUniqueWithoutShipmentsInput[];
    updateMany?: Prisma.shipment_eventsUpdateManyWithWhereWithoutShipmentsInput | Prisma.shipment_eventsUpdateManyWithWhereWithoutShipmentsInput[];
    deleteMany?: Prisma.shipment_eventsScalarWhereInput | Prisma.shipment_eventsScalarWhereInput[];
};
export type shipment_eventsUncheckedUpdateManyWithoutShipmentsNestedInput = {
    create?: Prisma.XOR<Prisma.shipment_eventsCreateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput> | Prisma.shipment_eventsCreateWithoutShipmentsInput[] | Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput[];
    connectOrCreate?: Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput | Prisma.shipment_eventsCreateOrConnectWithoutShipmentsInput[];
    upsert?: Prisma.shipment_eventsUpsertWithWhereUniqueWithoutShipmentsInput | Prisma.shipment_eventsUpsertWithWhereUniqueWithoutShipmentsInput[];
    createMany?: Prisma.shipment_eventsCreateManyShipmentsInputEnvelope;
    set?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    disconnect?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    delete?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    connect?: Prisma.shipment_eventsWhereUniqueInput | Prisma.shipment_eventsWhereUniqueInput[];
    update?: Prisma.shipment_eventsUpdateWithWhereUniqueWithoutShipmentsInput | Prisma.shipment_eventsUpdateWithWhereUniqueWithoutShipmentsInput[];
    updateMany?: Prisma.shipment_eventsUpdateManyWithWhereWithoutShipmentsInput | Prisma.shipment_eventsUpdateManyWithWhereWithoutShipmentsInput[];
    deleteMany?: Prisma.shipment_eventsScalarWhereInput | Prisma.shipment_eventsScalarWhereInput[];
};
export type shipment_eventsCreateWithoutShipmentsInput = {
    event_id?: bigint | number;
    event_type: string;
    event_at?: Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsUncheckedCreateWithoutShipmentsInput = {
    event_id?: bigint | number;
    event_type: string;
    event_at?: Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsCreateOrConnectWithoutShipmentsInput = {
    where: Prisma.shipment_eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipment_eventsCreateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput>;
};
export type shipment_eventsCreateManyShipmentsInputEnvelope = {
    data: Prisma.shipment_eventsCreateManyShipmentsInput | Prisma.shipment_eventsCreateManyShipmentsInput[];
    skipDuplicates?: boolean;
};
export type shipment_eventsUpsertWithWhereUniqueWithoutShipmentsInput = {
    where: Prisma.shipment_eventsWhereUniqueInput;
    update: Prisma.XOR<Prisma.shipment_eventsUpdateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedUpdateWithoutShipmentsInput>;
    create: Prisma.XOR<Prisma.shipment_eventsCreateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedCreateWithoutShipmentsInput>;
};
export type shipment_eventsUpdateWithWhereUniqueWithoutShipmentsInput = {
    where: Prisma.shipment_eventsWhereUniqueInput;
    data: Prisma.XOR<Prisma.shipment_eventsUpdateWithoutShipmentsInput, Prisma.shipment_eventsUncheckedUpdateWithoutShipmentsInput>;
};
export type shipment_eventsUpdateManyWithWhereWithoutShipmentsInput = {
    where: Prisma.shipment_eventsScalarWhereInput;
    data: Prisma.XOR<Prisma.shipment_eventsUpdateManyMutationInput, Prisma.shipment_eventsUncheckedUpdateManyWithoutShipmentsInput>;
};
export type shipment_eventsScalarWhereInput = {
    AND?: Prisma.shipment_eventsScalarWhereInput | Prisma.shipment_eventsScalarWhereInput[];
    OR?: Prisma.shipment_eventsScalarWhereInput[];
    NOT?: Prisma.shipment_eventsScalarWhereInput | Prisma.shipment_eventsScalarWhereInput[];
    event_id?: Prisma.BigIntFilter<"shipment_events"> | bigint | number;
    shipment_id?: Prisma.BigIntFilter<"shipment_events"> | bigint | number;
    event_type?: Prisma.StringFilter<"shipment_events"> | string;
    event_at?: Prisma.DateTimeFilter<"shipment_events"> | Date | string;
    details?: Prisma.JsonFilter<"shipment_events">;
};
export type shipment_eventsCreateManyShipmentsInput = {
    event_id?: bigint | number;
    event_type: string;
    event_at?: Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsUpdateWithoutShipmentsInput = {
    event_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    event_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsUncheckedUpdateWithoutShipmentsInput = {
    event_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    event_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsUncheckedUpdateManyWithoutShipmentsInput = {
    event_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    event_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type shipment_eventsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    event_id?: boolean;
    shipment_id?: boolean;
    event_type?: boolean;
    event_at?: boolean;
    details?: boolean;
    shipments?: boolean | Prisma.shipmentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment_events"]>;
export type shipment_eventsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    event_id?: boolean;
    shipment_id?: boolean;
    event_type?: boolean;
    event_at?: boolean;
    details?: boolean;
    shipments?: boolean | Prisma.shipmentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment_events"]>;
export type shipment_eventsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    event_id?: boolean;
    shipment_id?: boolean;
    event_type?: boolean;
    event_at?: boolean;
    details?: boolean;
    shipments?: boolean | Prisma.shipmentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipment_events"]>;
export type shipment_eventsSelectScalar = {
    event_id?: boolean;
    shipment_id?: boolean;
    event_type?: boolean;
    event_at?: boolean;
    details?: boolean;
};
export type shipment_eventsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"event_id" | "shipment_id" | "event_type" | "event_at" | "details", ExtArgs["result"]["shipment_events"]>;
export type shipment_eventsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipments?: boolean | Prisma.shipmentsDefaultArgs<ExtArgs>;
};
export type shipment_eventsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipments?: boolean | Prisma.shipmentsDefaultArgs<ExtArgs>;
};
export type shipment_eventsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipments?: boolean | Prisma.shipmentsDefaultArgs<ExtArgs>;
};
export type $shipment_eventsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "shipment_events";
    objects: {
        shipments: Prisma.$shipmentsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        event_id: bigint;
        shipment_id: bigint;
        event_type: string;
        event_at: Date;
        details: runtime.JsonValue;
    }, ExtArgs["result"]["shipment_events"]>;
    composites: {};
};
export type shipment_eventsGetPayload<S extends boolean | null | undefined | shipment_eventsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload, S>;
export type shipment_eventsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<shipment_eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Shipment_eventsCountAggregateInputType | true;
};
export interface shipment_eventsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['shipment_events'];
        meta: {
            name: 'shipment_events';
        };
    };
    findUnique<T extends shipment_eventsFindUniqueArgs>(args: Prisma.SelectSubset<T, shipment_eventsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends shipment_eventsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, shipment_eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends shipment_eventsFindFirstArgs>(args?: Prisma.SelectSubset<T, shipment_eventsFindFirstArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends shipment_eventsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, shipment_eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends shipment_eventsFindManyArgs>(args?: Prisma.SelectSubset<T, shipment_eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends shipment_eventsCreateArgs>(args: Prisma.SelectSubset<T, shipment_eventsCreateArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends shipment_eventsCreateManyArgs>(args?: Prisma.SelectSubset<T, shipment_eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends shipment_eventsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, shipment_eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends shipment_eventsDeleteArgs>(args: Prisma.SelectSubset<T, shipment_eventsDeleteArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends shipment_eventsUpdateArgs>(args: Prisma.SelectSubset<T, shipment_eventsUpdateArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends shipment_eventsDeleteManyArgs>(args?: Prisma.SelectSubset<T, shipment_eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends shipment_eventsUpdateManyArgs>(args: Prisma.SelectSubset<T, shipment_eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends shipment_eventsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, shipment_eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends shipment_eventsUpsertArgs>(args: Prisma.SelectSubset<T, shipment_eventsUpsertArgs<ExtArgs>>): Prisma.Prisma__shipment_eventsClient<runtime.Types.Result.GetResult<Prisma.$shipment_eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends shipment_eventsCountArgs>(args?: Prisma.Subset<T, shipment_eventsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Shipment_eventsCountAggregateOutputType> : number>;
    aggregate<T extends Shipment_eventsAggregateArgs>(args: Prisma.Subset<T, Shipment_eventsAggregateArgs>): Prisma.PrismaPromise<GetShipment_eventsAggregateType<T>>;
    groupBy<T extends shipment_eventsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: shipment_eventsGroupByArgs['orderBy'];
    } : {
        orderBy?: shipment_eventsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, shipment_eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipment_eventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: shipment_eventsFieldRefs;
}
export interface Prisma__shipment_eventsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shipments<T extends Prisma.shipmentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.shipmentsDefaultArgs<ExtArgs>>): Prisma.Prisma__shipmentsClient<runtime.Types.Result.GetResult<Prisma.$shipmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface shipment_eventsFieldRefs {
    readonly event_id: Prisma.FieldRef<"shipment_events", 'BigInt'>;
    readonly shipment_id: Prisma.FieldRef<"shipment_events", 'BigInt'>;
    readonly event_type: Prisma.FieldRef<"shipment_events", 'String'>;
    readonly event_at: Prisma.FieldRef<"shipment_events", 'DateTime'>;
    readonly details: Prisma.FieldRef<"shipment_events", 'Json'>;
}
export type shipment_eventsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where: Prisma.shipment_eventsWhereUniqueInput;
};
export type shipment_eventsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where: Prisma.shipment_eventsWhereUniqueInput;
};
export type shipment_eventsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where?: Prisma.shipment_eventsWhereInput;
    orderBy?: Prisma.shipment_eventsOrderByWithRelationInput | Prisma.shipment_eventsOrderByWithRelationInput[];
    cursor?: Prisma.shipment_eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Shipment_eventsScalarFieldEnum | Prisma.Shipment_eventsScalarFieldEnum[];
};
export type shipment_eventsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where?: Prisma.shipment_eventsWhereInput;
    orderBy?: Prisma.shipment_eventsOrderByWithRelationInput | Prisma.shipment_eventsOrderByWithRelationInput[];
    cursor?: Prisma.shipment_eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Shipment_eventsScalarFieldEnum | Prisma.Shipment_eventsScalarFieldEnum[];
};
export type shipment_eventsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where?: Prisma.shipment_eventsWhereInput;
    orderBy?: Prisma.shipment_eventsOrderByWithRelationInput | Prisma.shipment_eventsOrderByWithRelationInput[];
    cursor?: Prisma.shipment_eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Shipment_eventsScalarFieldEnum | Prisma.Shipment_eventsScalarFieldEnum[];
};
export type shipment_eventsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipment_eventsCreateInput, Prisma.shipment_eventsUncheckedCreateInput>;
};
export type shipment_eventsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.shipment_eventsCreateManyInput | Prisma.shipment_eventsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type shipment_eventsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    data: Prisma.shipment_eventsCreateManyInput | Prisma.shipment_eventsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.shipment_eventsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type shipment_eventsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipment_eventsUpdateInput, Prisma.shipment_eventsUncheckedUpdateInput>;
    where: Prisma.shipment_eventsWhereUniqueInput;
};
export type shipment_eventsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.shipment_eventsUpdateManyMutationInput, Prisma.shipment_eventsUncheckedUpdateManyInput>;
    where?: Prisma.shipment_eventsWhereInput;
    limit?: number;
};
export type shipment_eventsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.shipment_eventsUpdateManyMutationInput, Prisma.shipment_eventsUncheckedUpdateManyInput>;
    where?: Prisma.shipment_eventsWhereInput;
    limit?: number;
    include?: Prisma.shipment_eventsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type shipment_eventsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where: Prisma.shipment_eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.shipment_eventsCreateInput, Prisma.shipment_eventsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.shipment_eventsUpdateInput, Prisma.shipment_eventsUncheckedUpdateInput>;
};
export type shipment_eventsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
    where: Prisma.shipment_eventsWhereUniqueInput;
};
export type shipment_eventsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.shipment_eventsWhereInput;
    limit?: number;
};
export type shipment_eventsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.shipment_eventsSelect<ExtArgs> | null;
    omit?: Prisma.shipment_eventsOmit<ExtArgs> | null;
    include?: Prisma.shipment_eventsInclude<ExtArgs> | null;
};
