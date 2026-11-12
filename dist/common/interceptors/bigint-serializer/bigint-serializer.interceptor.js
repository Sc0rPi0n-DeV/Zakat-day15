var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, } from '@nestjs/common';
import { map } from 'rxjs';
let BigintSerializerInterceptor = class BigintSerializerInterceptor {
    intercept(context, next) {
        return next.handle().pipe(map((data) => this.serialize(data)));
    }
    serialize(data) {
        return JSON.parse(JSON.stringify(data, (_, value) => typeof value === 'bigint'
            ? value.toString()
            : value));
    }
};
BigintSerializerInterceptor = __decorate([
    Injectable()
], BigintSerializerInterceptor);
export { BigintSerializerInterceptor };
//# sourceMappingURL=bigint-serializer.interceptor.js.map