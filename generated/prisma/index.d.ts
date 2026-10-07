
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Lease
 * 
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model LeaseField
 * 
 */
export type LeaseField = $Result.DefaultSelection<Prisma.$LeaseFieldPayload>
/**
 * Model LeaseFlag
 * 
 */
export type LeaseFlag = $Result.DefaultSelection<Prisma.$LeaseFlagPayload>
/**
 * Model RuleResult
 * 
 */
export type RuleResult = $Result.DefaultSelection<Prisma.$RuleResultPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model WorkOrder
 * 
 */
export type WorkOrder = $Result.DefaultSelection<Prisma.$WorkOrderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Units
 * const units = await prisma.unit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Units
   * const units = await prisma.unit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leases
    * const leases = await prisma.lease.findMany()
    * ```
    */
  get lease(): Prisma.LeaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaseField`: Exposes CRUD operations for the **LeaseField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaseFields
    * const leaseFields = await prisma.leaseField.findMany()
    * ```
    */
  get leaseField(): Prisma.LeaseFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaseFlag`: Exposes CRUD operations for the **LeaseFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaseFlags
    * const leaseFlags = await prisma.leaseFlag.findMany()
    * ```
    */
  get leaseFlag(): Prisma.LeaseFlagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruleResult`: Exposes CRUD operations for the **RuleResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RuleResults
    * const ruleResults = await prisma.ruleResult.findMany()
    * ```
    */
  get ruleResult(): Prisma.RuleResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workOrder`: Exposes CRUD operations for the **WorkOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkOrders
    * const workOrders = await prisma.workOrder.findMany()
    * ```
    */
  get workOrder(): Prisma.WorkOrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Unit: 'Unit',
    Lease: 'Lease',
    LeaseField: 'LeaseField',
    LeaseFlag: 'LeaseFlag',
    RuleResult: 'RuleResult',
    Issue: 'Issue',
    WorkOrder: 'WorkOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "unit" | "lease" | "leaseField" | "leaseFlag" | "ruleResult" | "issue" | "workOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      LeaseField: {
        payload: Prisma.$LeaseFieldPayload<ExtArgs>
        fields: Prisma.LeaseFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload>
          }
          findFirst: {
            args: Prisma.LeaseFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload>
          }
          findMany: {
            args: Prisma.LeaseFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload>[]
          }
          create: {
            args: Prisma.LeaseFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload>
          }
          createMany: {
            args: Prisma.LeaseFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LeaseFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload>
          }
          update: {
            args: Prisma.LeaseFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload>
          }
          deleteMany: {
            args: Prisma.LeaseFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaseFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFieldPayload>
          }
          aggregate: {
            args: Prisma.LeaseFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaseField>
          }
          groupBy: {
            args: Prisma.LeaseFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseFieldCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseFieldCountAggregateOutputType> | number
          }
        }
      }
      LeaseFlag: {
        payload: Prisma.$LeaseFlagPayload<ExtArgs>
        fields: Prisma.LeaseFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload>
          }
          findFirst: {
            args: Prisma.LeaseFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload>
          }
          findMany: {
            args: Prisma.LeaseFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload>[]
          }
          create: {
            args: Prisma.LeaseFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload>
          }
          createMany: {
            args: Prisma.LeaseFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LeaseFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload>
          }
          update: {
            args: Prisma.LeaseFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload>
          }
          deleteMany: {
            args: Prisma.LeaseFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaseFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaseFlagPayload>
          }
          aggregate: {
            args: Prisma.LeaseFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaseFlag>
          }
          groupBy: {
            args: Prisma.LeaseFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseFlagCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseFlagCountAggregateOutputType> | number
          }
        }
      }
      RuleResult: {
        payload: Prisma.$RuleResultPayload<ExtArgs>
        fields: Prisma.RuleResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload>
          }
          findFirst: {
            args: Prisma.RuleResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload>
          }
          findMany: {
            args: Prisma.RuleResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload>[]
          }
          create: {
            args: Prisma.RuleResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload>
          }
          createMany: {
            args: Prisma.RuleResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RuleResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload>
          }
          update: {
            args: Prisma.RuleResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload>
          }
          deleteMany: {
            args: Prisma.RuleResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RuleResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleResultPayload>
          }
          aggregate: {
            args: Prisma.RuleResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuleResult>
          }
          groupBy: {
            args: Prisma.RuleResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleResultCountArgs<ExtArgs>
            result: $Utils.Optional<RuleResultCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      WorkOrder: {
        payload: Prisma.$WorkOrderPayload<ExtArgs>
        fields: Prisma.WorkOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findFirst: {
            args: Prisma.WorkOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findMany: {
            args: Prisma.WorkOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          create: {
            args: Prisma.WorkOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          createMany: {
            args: Prisma.WorkOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          update: {
            args: Prisma.WorkOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          deleteMany: {
            args: Prisma.WorkOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          aggregate: {
            args: Prisma.WorkOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkOrder>
          }
          groupBy: {
            args: Prisma.WorkOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkOrderCountArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    unit?: UnitOmit
    lease?: LeaseOmit
    leaseField?: LeaseFieldOmit
    leaseFlag?: LeaseFlagOmit
    ruleResult?: RuleResultOmit
    issue?: IssueOmit
    workOrder?: WorkOrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    issues: number
    leases: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | UnitCountOutputTypeCountIssuesArgs
    leases?: boolean | UnitCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type LeaseCountOutputType
   */

  export type LeaseCountOutputType = {
    fields: number
    flags: number
    ruleResults: number
  }

  export type LeaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | LeaseCountOutputTypeCountFieldsArgs
    flags?: boolean | LeaseCountOutputTypeCountFlagsArgs
    ruleResults?: boolean | LeaseCountOutputTypeCountRuleResultsArgs
  }

  // Custom InputTypes
  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseCountOutputType
     */
    select?: LeaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseFieldWhereInput
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseFlagWhereInput
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountRuleResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    areaSqm: number | null
  }

  export type UnitSumAggregateOutputType = {
    areaSqm: number | null
  }

  export type UnitMinAggregateOutputType = {
    unitId: string | null
    buildingId: string | null
    propertyId: string | null
    label: string | null
    type: string | null
    areaSqm: number | null
    parkingBay: string | null
    status: string | null
  }

  export type UnitMaxAggregateOutputType = {
    unitId: string | null
    buildingId: string | null
    propertyId: string | null
    label: string | null
    type: string | null
    areaSqm: number | null
    parkingBay: string | null
    status: string | null
  }

  export type UnitCountAggregateOutputType = {
    unitId: number
    buildingId: number
    propertyId: number
    label: number
    type: number
    areaSqm: number
    parkingBay: number
    status: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    areaSqm?: true
  }

  export type UnitSumAggregateInputType = {
    areaSqm?: true
  }

  export type UnitMinAggregateInputType = {
    unitId?: true
    buildingId?: true
    propertyId?: true
    label?: true
    type?: true
    areaSqm?: true
    parkingBay?: true
    status?: true
  }

  export type UnitMaxAggregateInputType = {
    unitId?: true
    buildingId?: true
    propertyId?: true
    label?: true
    type?: true
    areaSqm?: true
    parkingBay?: true
    status?: true
  }

  export type UnitCountAggregateInputType = {
    unitId?: true
    buildingId?: true
    propertyId?: true
    label?: true
    type?: true
    areaSqm?: true
    parkingBay?: true
    status?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay: string | null
    status: string
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitId?: boolean
    buildingId?: boolean
    propertyId?: boolean
    label?: boolean
    type?: boolean
    areaSqm?: boolean
    parkingBay?: boolean
    status?: boolean
    issues?: boolean | Unit$issuesArgs<ExtArgs>
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>



  export type UnitSelectScalar = {
    unitId?: boolean
    buildingId?: boolean
    propertyId?: boolean
    label?: boolean
    type?: boolean
    areaSqm?: boolean
    parkingBay?: boolean
    status?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"unitId" | "buildingId" | "propertyId" | "label" | "type" | "areaSqm" | "parkingBay" | "status", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | Unit$issuesArgs<ExtArgs>
    leases?: boolean | Unit$leasesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      issues: Prisma.$IssuePayload<ExtArgs>[]
      leases: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      unitId: string
      buildingId: string
      propertyId: string
      label: string
      type: string
      areaSqm: number
      parkingBay: string | null
      status: string
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `unitId`
     * const unitWithUnitIdOnly = await prisma.unit.findMany({ select: { unitId: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issues<T extends Unit$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leases<T extends Unit$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly unitId: FieldRef<"Unit", 'String'>
    readonly buildingId: FieldRef<"Unit", 'String'>
    readonly propertyId: FieldRef<"Unit", 'String'>
    readonly label: FieldRef<"Unit", 'String'>
    readonly type: FieldRef<"Unit", 'String'>
    readonly areaSqm: FieldRef<"Unit", 'Int'>
    readonly parkingBay: FieldRef<"Unit", 'String'>
    readonly status: FieldRef<"Unit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.issues
   */
  export type Unit$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Unit.leases
   */
  export type Unit$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    fileName: string | null
    rawText: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    fileName: string | null
    rawText: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    unitId: number
    fileName: number
    rawText: number
    status: number
    createdAt: number
    _all: number
  }


  export type LeaseMinAggregateInputType = {
    id?: true
    unitId?: true
    fileName?: true
    rawText?: true
    status?: true
    createdAt?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    unitId?: true
    fileName?: true
    rawText?: true
    status?: true
    createdAt?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    unitId?: true
    fileName?: true
    rawText?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LeaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leases
    **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }




  export type LeaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithAggregationInput | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: string
    unitId: string | null
    fileName: string
    rawText: string
    status: string
    createdAt: Date
    _count: LeaseCountAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >


  export type LeaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    fileName?: boolean
    rawText?: boolean
    status?: boolean
    createdAt?: boolean
    unit?: boolean | Lease$unitArgs<ExtArgs>
    fields?: boolean | Lease$fieldsArgs<ExtArgs>
    flags?: boolean | Lease$flagsArgs<ExtArgs>
    ruleResults?: boolean | Lease$ruleResultsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>



  export type LeaseSelectScalar = {
    id?: boolean
    unitId?: boolean
    fileName?: boolean
    rawText?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LeaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "fileName" | "rawText" | "status" | "createdAt", ExtArgs["result"]["lease"]>
  export type LeaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | Lease$unitArgs<ExtArgs>
    fields?: boolean | Lease$fieldsArgs<ExtArgs>
    flags?: boolean | Lease$flagsArgs<ExtArgs>
    ruleResults?: boolean | Lease$ruleResultsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LeasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lease"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs> | null
      fields: Prisma.$LeaseFieldPayload<ExtArgs>[]
      flags: Prisma.$LeaseFlagPayload<ExtArgs>[]
      ruleResults: Prisma.$RuleResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string | null
      fileName: string
      rawText: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["lease"]>
    composites: {}
  }

  type LeaseGetPayload<S extends boolean | null | undefined | LeaseDefaultArgs> = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseCountAggregateInputType | true
    }

  export interface LeaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lease'], meta: { name: 'Lease' } }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     * 
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFindManyArgs>(args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     * 
     */
    create<T extends LeaseCreateArgs>(args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseCreateManyArgs>(args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     * 
     */
    delete<T extends LeaseDeleteArgs>(args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseUpdateArgs>(args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseDeleteManyArgs>(args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseUpdateManyArgs>(args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
    **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseAggregateArgs>(args: Subset<T, LeaseAggregateArgs>): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lease model
   */
  readonly fields: LeaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends Lease$unitArgs<ExtArgs> = {}>(args?: Subset<T, Lease$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fields<T extends Lease$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flags<T extends Lease$flagsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ruleResults<T extends Lease$ruleResultsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$ruleResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lease model
   */
  interface LeaseFieldRefs {
    readonly id: FieldRef<"Lease", 'String'>
    readonly unitId: FieldRef<"Lease", 'String'>
    readonly fileName: FieldRef<"Lease", 'String'>
    readonly rawText: FieldRef<"Lease", 'String'>
    readonly status: FieldRef<"Lease", 'String'>
    readonly createdAt: FieldRef<"Lease", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to delete.
     */
    limit?: number
  }

  /**
   * Lease.unit
   */
  export type Lease$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * Lease.fields
   */
  export type Lease$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    where?: LeaseFieldWhereInput
    orderBy?: LeaseFieldOrderByWithRelationInput | LeaseFieldOrderByWithRelationInput[]
    cursor?: LeaseFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseFieldScalarFieldEnum | LeaseFieldScalarFieldEnum[]
  }

  /**
   * Lease.flags
   */
  export type Lease$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    where?: LeaseFlagWhereInput
    orderBy?: LeaseFlagOrderByWithRelationInput | LeaseFlagOrderByWithRelationInput[]
    cursor?: LeaseFlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseFlagScalarFieldEnum | LeaseFlagScalarFieldEnum[]
  }

  /**
   * Lease.ruleResults
   */
  export type Lease$ruleResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    where?: RuleResultWhereInput
    orderBy?: RuleResultOrderByWithRelationInput | RuleResultOrderByWithRelationInput[]
    cursor?: RuleResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleResultScalarFieldEnum | RuleResultScalarFieldEnum[]
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }


  /**
   * Model LeaseField
   */

  export type AggregateLeaseField = {
    _count: LeaseFieldCountAggregateOutputType | null
    _avg: LeaseFieldAvgAggregateOutputType | null
    _sum: LeaseFieldSumAggregateOutputType | null
    _min: LeaseFieldMinAggregateOutputType | null
    _max: LeaseFieldMaxAggregateOutputType | null
  }

  export type LeaseFieldAvgAggregateOutputType = {
    confidence: number | null
  }

  export type LeaseFieldSumAggregateOutputType = {
    confidence: number | null
  }

  export type LeaseFieldMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    key: string | null
    value: string | null
    confidence: number | null
    sourceSnippet: string | null
    sourceLocation: string | null
    status: string | null
    reviewedAt: Date | null
    reviewedBy: string | null
  }

  export type LeaseFieldMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    key: string | null
    value: string | null
    confidence: number | null
    sourceSnippet: string | null
    sourceLocation: string | null
    status: string | null
    reviewedAt: Date | null
    reviewedBy: string | null
  }

  export type LeaseFieldCountAggregateOutputType = {
    id: number
    leaseId: number
    key: number
    value: number
    confidence: number
    sourceSnippet: number
    sourceLocation: number
    status: number
    reviewedAt: number
    reviewedBy: number
    _all: number
  }


  export type LeaseFieldAvgAggregateInputType = {
    confidence?: true
  }

  export type LeaseFieldSumAggregateInputType = {
    confidence?: true
  }

  export type LeaseFieldMinAggregateInputType = {
    id?: true
    leaseId?: true
    key?: true
    value?: true
    confidence?: true
    sourceSnippet?: true
    sourceLocation?: true
    status?: true
    reviewedAt?: true
    reviewedBy?: true
  }

  export type LeaseFieldMaxAggregateInputType = {
    id?: true
    leaseId?: true
    key?: true
    value?: true
    confidence?: true
    sourceSnippet?: true
    sourceLocation?: true
    status?: true
    reviewedAt?: true
    reviewedBy?: true
  }

  export type LeaseFieldCountAggregateInputType = {
    id?: true
    leaseId?: true
    key?: true
    value?: true
    confidence?: true
    sourceSnippet?: true
    sourceLocation?: true
    status?: true
    reviewedAt?: true
    reviewedBy?: true
    _all?: true
  }

  export type LeaseFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseField to aggregate.
     */
    where?: LeaseFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFields to fetch.
     */
    orderBy?: LeaseFieldOrderByWithRelationInput | LeaseFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaseFields
    **/
    _count?: true | LeaseFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseFieldMaxAggregateInputType
  }

  export type GetLeaseFieldAggregateType<T extends LeaseFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaseField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaseField[P]>
      : GetScalarType<T[P], AggregateLeaseField[P]>
  }




  export type LeaseFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseFieldWhereInput
    orderBy?: LeaseFieldOrderByWithAggregationInput | LeaseFieldOrderByWithAggregationInput[]
    by: LeaseFieldScalarFieldEnum[] | LeaseFieldScalarFieldEnum
    having?: LeaseFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseFieldCountAggregateInputType | true
    _avg?: LeaseFieldAvgAggregateInputType
    _sum?: LeaseFieldSumAggregateInputType
    _min?: LeaseFieldMinAggregateInputType
    _max?: LeaseFieldMaxAggregateInputType
  }

  export type LeaseFieldGroupByOutputType = {
    id: string
    leaseId: string
    key: string
    value: string
    confidence: number
    sourceSnippet: string
    sourceLocation: string | null
    status: string
    reviewedAt: Date | null
    reviewedBy: string | null
    _count: LeaseFieldCountAggregateOutputType | null
    _avg: LeaseFieldAvgAggregateOutputType | null
    _sum: LeaseFieldSumAggregateOutputType | null
    _min: LeaseFieldMinAggregateOutputType | null
    _max: LeaseFieldMaxAggregateOutputType | null
  }

  type GetLeaseFieldGroupByPayload<T extends LeaseFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseFieldGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseFieldGroupByOutputType[P]>
        }
      >
    >


  export type LeaseFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    key?: boolean
    value?: boolean
    confidence?: boolean
    sourceSnippet?: boolean
    sourceLocation?: boolean
    status?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaseField"]>



  export type LeaseFieldSelectScalar = {
    id?: boolean
    leaseId?: boolean
    key?: boolean
    value?: boolean
    confidence?: boolean
    sourceSnippet?: boolean
    sourceLocation?: boolean
    status?: boolean
    reviewedAt?: boolean
    reviewedBy?: boolean
  }

  export type LeaseFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaseId" | "key" | "value" | "confidence" | "sourceSnippet" | "sourceLocation" | "status" | "reviewedAt" | "reviewedBy", ExtArgs["result"]["leaseField"]>
  export type LeaseFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $LeaseFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaseField"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaseId: string
      key: string
      value: string
      confidence: number
      sourceSnippet: string
      sourceLocation: string | null
      status: string
      reviewedAt: Date | null
      reviewedBy: string | null
    }, ExtArgs["result"]["leaseField"]>
    composites: {}
  }

  type LeaseFieldGetPayload<S extends boolean | null | undefined | LeaseFieldDefaultArgs> = $Result.GetResult<Prisma.$LeaseFieldPayload, S>

  type LeaseFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseFieldCountAggregateInputType | true
    }

  export interface LeaseFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaseField'], meta: { name: 'LeaseField' } }
    /**
     * Find zero or one LeaseField that matches the filter.
     * @param {LeaseFieldFindUniqueArgs} args - Arguments to find a LeaseField
     * @example
     * // Get one LeaseField
     * const leaseField = await prisma.leaseField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFieldFindUniqueArgs>(args: SelectSubset<T, LeaseFieldFindUniqueArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaseField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFieldFindUniqueOrThrowArgs} args - Arguments to find a LeaseField
     * @example
     * // Get one LeaseField
     * const leaseField = await prisma.leaseField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaseField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFieldFindFirstArgs} args - Arguments to find a LeaseField
     * @example
     * // Get one LeaseField
     * const leaseField = await prisma.leaseField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFieldFindFirstArgs>(args?: SelectSubset<T, LeaseFieldFindFirstArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaseField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFieldFindFirstOrThrowArgs} args - Arguments to find a LeaseField
     * @example
     * // Get one LeaseField
     * const leaseField = await prisma.leaseField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaseFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaseFields
     * const leaseFields = await prisma.leaseField.findMany()
     * 
     * // Get first 10 LeaseFields
     * const leaseFields = await prisma.leaseField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseFieldWithIdOnly = await prisma.leaseField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFieldFindManyArgs>(args?: SelectSubset<T, LeaseFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaseField.
     * @param {LeaseFieldCreateArgs} args - Arguments to create a LeaseField.
     * @example
     * // Create one LeaseField
     * const LeaseField = await prisma.leaseField.create({
     *   data: {
     *     // ... data to create a LeaseField
     *   }
     * })
     * 
     */
    create<T extends LeaseFieldCreateArgs>(args: SelectSubset<T, LeaseFieldCreateArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaseFields.
     * @param {LeaseFieldCreateManyArgs} args - Arguments to create many LeaseFields.
     * @example
     * // Create many LeaseFields
     * const leaseField = await prisma.leaseField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseFieldCreateManyArgs>(args?: SelectSubset<T, LeaseFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LeaseField.
     * @param {LeaseFieldDeleteArgs} args - Arguments to delete one LeaseField.
     * @example
     * // Delete one LeaseField
     * const LeaseField = await prisma.leaseField.delete({
     *   where: {
     *     // ... filter to delete one LeaseField
     *   }
     * })
     * 
     */
    delete<T extends LeaseFieldDeleteArgs>(args: SelectSubset<T, LeaseFieldDeleteArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaseField.
     * @param {LeaseFieldUpdateArgs} args - Arguments to update one LeaseField.
     * @example
     * // Update one LeaseField
     * const leaseField = await prisma.leaseField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseFieldUpdateArgs>(args: SelectSubset<T, LeaseFieldUpdateArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaseFields.
     * @param {LeaseFieldDeleteManyArgs} args - Arguments to filter LeaseFields to delete.
     * @example
     * // Delete a few LeaseFields
     * const { count } = await prisma.leaseField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseFieldDeleteManyArgs>(args?: SelectSubset<T, LeaseFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaseFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaseFields
     * const leaseField = await prisma.leaseField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseFieldUpdateManyArgs>(args: SelectSubset<T, LeaseFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LeaseField.
     * @param {LeaseFieldUpsertArgs} args - Arguments to update or create a LeaseField.
     * @example
     * // Update or create a LeaseField
     * const leaseField = await prisma.leaseField.upsert({
     *   create: {
     *     // ... data to create a LeaseField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaseField we want to update
     *   }
     * })
     */
    upsert<T extends LeaseFieldUpsertArgs>(args: SelectSubset<T, LeaseFieldUpsertArgs<ExtArgs>>): Prisma__LeaseFieldClient<$Result.GetResult<Prisma.$LeaseFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaseFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFieldCountArgs} args - Arguments to filter LeaseFields to count.
     * @example
     * // Count the number of LeaseFields
     * const count = await prisma.leaseField.count({
     *   where: {
     *     // ... the filter for the LeaseFields we want to count
     *   }
     * })
    **/
    count<T extends LeaseFieldCountArgs>(
      args?: Subset<T, LeaseFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaseField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseFieldAggregateArgs>(args: Subset<T, LeaseFieldAggregateArgs>): Prisma.PrismaPromise<GetLeaseFieldAggregateType<T>>

    /**
     * Group by LeaseField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseFieldGroupByArgs['orderBy'] }
        : { orderBy?: LeaseFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaseField model
   */
  readonly fields: LeaseFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaseField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaseField model
   */
  interface LeaseFieldFieldRefs {
    readonly id: FieldRef<"LeaseField", 'String'>
    readonly leaseId: FieldRef<"LeaseField", 'String'>
    readonly key: FieldRef<"LeaseField", 'String'>
    readonly value: FieldRef<"LeaseField", 'String'>
    readonly confidence: FieldRef<"LeaseField", 'Float'>
    readonly sourceSnippet: FieldRef<"LeaseField", 'String'>
    readonly sourceLocation: FieldRef<"LeaseField", 'String'>
    readonly status: FieldRef<"LeaseField", 'String'>
    readonly reviewedAt: FieldRef<"LeaseField", 'DateTime'>
    readonly reviewedBy: FieldRef<"LeaseField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeaseField findUnique
   */
  export type LeaseFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * Filter, which LeaseField to fetch.
     */
    where: LeaseFieldWhereUniqueInput
  }

  /**
   * LeaseField findUniqueOrThrow
   */
  export type LeaseFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * Filter, which LeaseField to fetch.
     */
    where: LeaseFieldWhereUniqueInput
  }

  /**
   * LeaseField findFirst
   */
  export type LeaseFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * Filter, which LeaseField to fetch.
     */
    where?: LeaseFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFields to fetch.
     */
    orderBy?: LeaseFieldOrderByWithRelationInput | LeaseFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseFields.
     */
    cursor?: LeaseFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseFields.
     */
    distinct?: LeaseFieldScalarFieldEnum | LeaseFieldScalarFieldEnum[]
  }

  /**
   * LeaseField findFirstOrThrow
   */
  export type LeaseFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * Filter, which LeaseField to fetch.
     */
    where?: LeaseFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFields to fetch.
     */
    orderBy?: LeaseFieldOrderByWithRelationInput | LeaseFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseFields.
     */
    cursor?: LeaseFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseFields.
     */
    distinct?: LeaseFieldScalarFieldEnum | LeaseFieldScalarFieldEnum[]
  }

  /**
   * LeaseField findMany
   */
  export type LeaseFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * Filter, which LeaseFields to fetch.
     */
    where?: LeaseFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFields to fetch.
     */
    orderBy?: LeaseFieldOrderByWithRelationInput | LeaseFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaseFields.
     */
    cursor?: LeaseFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFields.
     */
    skip?: number
    distinct?: LeaseFieldScalarFieldEnum | LeaseFieldScalarFieldEnum[]
  }

  /**
   * LeaseField create
   */
  export type LeaseFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaseField.
     */
    data: XOR<LeaseFieldCreateInput, LeaseFieldUncheckedCreateInput>
  }

  /**
   * LeaseField createMany
   */
  export type LeaseFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaseFields.
     */
    data: LeaseFieldCreateManyInput | LeaseFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaseField update
   */
  export type LeaseFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaseField.
     */
    data: XOR<LeaseFieldUpdateInput, LeaseFieldUncheckedUpdateInput>
    /**
     * Choose, which LeaseField to update.
     */
    where: LeaseFieldWhereUniqueInput
  }

  /**
   * LeaseField updateMany
   */
  export type LeaseFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaseFields.
     */
    data: XOR<LeaseFieldUpdateManyMutationInput, LeaseFieldUncheckedUpdateManyInput>
    /**
     * Filter which LeaseFields to update
     */
    where?: LeaseFieldWhereInput
    /**
     * Limit how many LeaseFields to update.
     */
    limit?: number
  }

  /**
   * LeaseField upsert
   */
  export type LeaseFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaseField to update in case it exists.
     */
    where: LeaseFieldWhereUniqueInput
    /**
     * In case the LeaseField found by the `where` argument doesn't exist, create a new LeaseField with this data.
     */
    create: XOR<LeaseFieldCreateInput, LeaseFieldUncheckedCreateInput>
    /**
     * In case the LeaseField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseFieldUpdateInput, LeaseFieldUncheckedUpdateInput>
  }

  /**
   * LeaseField delete
   */
  export type LeaseFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
    /**
     * Filter which LeaseField to delete.
     */
    where: LeaseFieldWhereUniqueInput
  }

  /**
   * LeaseField deleteMany
   */
  export type LeaseFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseFields to delete
     */
    where?: LeaseFieldWhereInput
    /**
     * Limit how many LeaseFields to delete.
     */
    limit?: number
  }

  /**
   * LeaseField without action
   */
  export type LeaseFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseField
     */
    select?: LeaseFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseField
     */
    omit?: LeaseFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFieldInclude<ExtArgs> | null
  }


  /**
   * Model LeaseFlag
   */

  export type AggregateLeaseFlag = {
    _count: LeaseFlagCountAggregateOutputType | null
    _min: LeaseFlagMinAggregateOutputType | null
    _max: LeaseFlagMaxAggregateOutputType | null
  }

  export type LeaseFlagMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    kind: string | null
    severity: string | null
    message: string | null
    evidence: string | null
    status: string | null
  }

  export type LeaseFlagMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    kind: string | null
    severity: string | null
    message: string | null
    evidence: string | null
    status: string | null
  }

  export type LeaseFlagCountAggregateOutputType = {
    id: number
    leaseId: number
    kind: number
    severity: number
    message: number
    evidence: number
    status: number
    _all: number
  }


  export type LeaseFlagMinAggregateInputType = {
    id?: true
    leaseId?: true
    kind?: true
    severity?: true
    message?: true
    evidence?: true
    status?: true
  }

  export type LeaseFlagMaxAggregateInputType = {
    id?: true
    leaseId?: true
    kind?: true
    severity?: true
    message?: true
    evidence?: true
    status?: true
  }

  export type LeaseFlagCountAggregateInputType = {
    id?: true
    leaseId?: true
    kind?: true
    severity?: true
    message?: true
    evidence?: true
    status?: true
    _all?: true
  }

  export type LeaseFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseFlag to aggregate.
     */
    where?: LeaseFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFlags to fetch.
     */
    orderBy?: LeaseFlagOrderByWithRelationInput | LeaseFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaseFlags
    **/
    _count?: true | LeaseFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseFlagMaxAggregateInputType
  }

  export type GetLeaseFlagAggregateType<T extends LeaseFlagAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaseFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaseFlag[P]>
      : GetScalarType<T[P], AggregateLeaseFlag[P]>
  }




  export type LeaseFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseFlagWhereInput
    orderBy?: LeaseFlagOrderByWithAggregationInput | LeaseFlagOrderByWithAggregationInput[]
    by: LeaseFlagScalarFieldEnum[] | LeaseFlagScalarFieldEnum
    having?: LeaseFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseFlagCountAggregateInputType | true
    _min?: LeaseFlagMinAggregateInputType
    _max?: LeaseFlagMaxAggregateInputType
  }

  export type LeaseFlagGroupByOutputType = {
    id: string
    leaseId: string
    kind: string
    severity: string
    message: string
    evidence: string | null
    status: string
    _count: LeaseFlagCountAggregateOutputType | null
    _min: LeaseFlagMinAggregateOutputType | null
    _max: LeaseFlagMaxAggregateOutputType | null
  }

  type GetLeaseFlagGroupByPayload<T extends LeaseFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseFlagGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseFlagGroupByOutputType[P]>
        }
      >
    >


  export type LeaseFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    kind?: boolean
    severity?: boolean
    message?: boolean
    evidence?: boolean
    status?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaseFlag"]>



  export type LeaseFlagSelectScalar = {
    id?: boolean
    leaseId?: boolean
    kind?: boolean
    severity?: boolean
    message?: boolean
    evidence?: boolean
    status?: boolean
  }

  export type LeaseFlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaseId" | "kind" | "severity" | "message" | "evidence" | "status", ExtArgs["result"]["leaseFlag"]>
  export type LeaseFlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $LeaseFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaseFlag"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaseId: string
      kind: string
      severity: string
      message: string
      evidence: string | null
      status: string
    }, ExtArgs["result"]["leaseFlag"]>
    composites: {}
  }

  type LeaseFlagGetPayload<S extends boolean | null | undefined | LeaseFlagDefaultArgs> = $Result.GetResult<Prisma.$LeaseFlagPayload, S>

  type LeaseFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseFlagCountAggregateInputType | true
    }

  export interface LeaseFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaseFlag'], meta: { name: 'LeaseFlag' } }
    /**
     * Find zero or one LeaseFlag that matches the filter.
     * @param {LeaseFlagFindUniqueArgs} args - Arguments to find a LeaseFlag
     * @example
     * // Get one LeaseFlag
     * const leaseFlag = await prisma.leaseFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFlagFindUniqueArgs>(args: SelectSubset<T, LeaseFlagFindUniqueArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaseFlag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFlagFindUniqueOrThrowArgs} args - Arguments to find a LeaseFlag
     * @example
     * // Get one LeaseFlag
     * const leaseFlag = await prisma.leaseFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaseFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFlagFindFirstArgs} args - Arguments to find a LeaseFlag
     * @example
     * // Get one LeaseFlag
     * const leaseFlag = await prisma.leaseFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFlagFindFirstArgs>(args?: SelectSubset<T, LeaseFlagFindFirstArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaseFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFlagFindFirstOrThrowArgs} args - Arguments to find a LeaseFlag
     * @example
     * // Get one LeaseFlag
     * const leaseFlag = await prisma.leaseFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaseFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaseFlags
     * const leaseFlags = await prisma.leaseFlag.findMany()
     * 
     * // Get first 10 LeaseFlags
     * const leaseFlags = await prisma.leaseFlag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseFlagWithIdOnly = await prisma.leaseFlag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFlagFindManyArgs>(args?: SelectSubset<T, LeaseFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaseFlag.
     * @param {LeaseFlagCreateArgs} args - Arguments to create a LeaseFlag.
     * @example
     * // Create one LeaseFlag
     * const LeaseFlag = await prisma.leaseFlag.create({
     *   data: {
     *     // ... data to create a LeaseFlag
     *   }
     * })
     * 
     */
    create<T extends LeaseFlagCreateArgs>(args: SelectSubset<T, LeaseFlagCreateArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaseFlags.
     * @param {LeaseFlagCreateManyArgs} args - Arguments to create many LeaseFlags.
     * @example
     * // Create many LeaseFlags
     * const leaseFlag = await prisma.leaseFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseFlagCreateManyArgs>(args?: SelectSubset<T, LeaseFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LeaseFlag.
     * @param {LeaseFlagDeleteArgs} args - Arguments to delete one LeaseFlag.
     * @example
     * // Delete one LeaseFlag
     * const LeaseFlag = await prisma.leaseFlag.delete({
     *   where: {
     *     // ... filter to delete one LeaseFlag
     *   }
     * })
     * 
     */
    delete<T extends LeaseFlagDeleteArgs>(args: SelectSubset<T, LeaseFlagDeleteArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaseFlag.
     * @param {LeaseFlagUpdateArgs} args - Arguments to update one LeaseFlag.
     * @example
     * // Update one LeaseFlag
     * const leaseFlag = await prisma.leaseFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseFlagUpdateArgs>(args: SelectSubset<T, LeaseFlagUpdateArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaseFlags.
     * @param {LeaseFlagDeleteManyArgs} args - Arguments to filter LeaseFlags to delete.
     * @example
     * // Delete a few LeaseFlags
     * const { count } = await prisma.leaseFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseFlagDeleteManyArgs>(args?: SelectSubset<T, LeaseFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaseFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaseFlags
     * const leaseFlag = await prisma.leaseFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseFlagUpdateManyArgs>(args: SelectSubset<T, LeaseFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LeaseFlag.
     * @param {LeaseFlagUpsertArgs} args - Arguments to update or create a LeaseFlag.
     * @example
     * // Update or create a LeaseFlag
     * const leaseFlag = await prisma.leaseFlag.upsert({
     *   create: {
     *     // ... data to create a LeaseFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaseFlag we want to update
     *   }
     * })
     */
    upsert<T extends LeaseFlagUpsertArgs>(args: SelectSubset<T, LeaseFlagUpsertArgs<ExtArgs>>): Prisma__LeaseFlagClient<$Result.GetResult<Prisma.$LeaseFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaseFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFlagCountArgs} args - Arguments to filter LeaseFlags to count.
     * @example
     * // Count the number of LeaseFlags
     * const count = await prisma.leaseFlag.count({
     *   where: {
     *     // ... the filter for the LeaseFlags we want to count
     *   }
     * })
    **/
    count<T extends LeaseFlagCountArgs>(
      args?: Subset<T, LeaseFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaseFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseFlagAggregateArgs>(args: Subset<T, LeaseFlagAggregateArgs>): Prisma.PrismaPromise<GetLeaseFlagAggregateType<T>>

    /**
     * Group by LeaseFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseFlagGroupByArgs['orderBy'] }
        : { orderBy?: LeaseFlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaseFlag model
   */
  readonly fields: LeaseFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaseFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaseFlag model
   */
  interface LeaseFlagFieldRefs {
    readonly id: FieldRef<"LeaseFlag", 'String'>
    readonly leaseId: FieldRef<"LeaseFlag", 'String'>
    readonly kind: FieldRef<"LeaseFlag", 'String'>
    readonly severity: FieldRef<"LeaseFlag", 'String'>
    readonly message: FieldRef<"LeaseFlag", 'String'>
    readonly evidence: FieldRef<"LeaseFlag", 'String'>
    readonly status: FieldRef<"LeaseFlag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeaseFlag findUnique
   */
  export type LeaseFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * Filter, which LeaseFlag to fetch.
     */
    where: LeaseFlagWhereUniqueInput
  }

  /**
   * LeaseFlag findUniqueOrThrow
   */
  export type LeaseFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * Filter, which LeaseFlag to fetch.
     */
    where: LeaseFlagWhereUniqueInput
  }

  /**
   * LeaseFlag findFirst
   */
  export type LeaseFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * Filter, which LeaseFlag to fetch.
     */
    where?: LeaseFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFlags to fetch.
     */
    orderBy?: LeaseFlagOrderByWithRelationInput | LeaseFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseFlags.
     */
    cursor?: LeaseFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseFlags.
     */
    distinct?: LeaseFlagScalarFieldEnum | LeaseFlagScalarFieldEnum[]
  }

  /**
   * LeaseFlag findFirstOrThrow
   */
  export type LeaseFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * Filter, which LeaseFlag to fetch.
     */
    where?: LeaseFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFlags to fetch.
     */
    orderBy?: LeaseFlagOrderByWithRelationInput | LeaseFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaseFlags.
     */
    cursor?: LeaseFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaseFlags.
     */
    distinct?: LeaseFlagScalarFieldEnum | LeaseFlagScalarFieldEnum[]
  }

  /**
   * LeaseFlag findMany
   */
  export type LeaseFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * Filter, which LeaseFlags to fetch.
     */
    where?: LeaseFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaseFlags to fetch.
     */
    orderBy?: LeaseFlagOrderByWithRelationInput | LeaseFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaseFlags.
     */
    cursor?: LeaseFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaseFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaseFlags.
     */
    skip?: number
    distinct?: LeaseFlagScalarFieldEnum | LeaseFlagScalarFieldEnum[]
  }

  /**
   * LeaseFlag create
   */
  export type LeaseFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaseFlag.
     */
    data: XOR<LeaseFlagCreateInput, LeaseFlagUncheckedCreateInput>
  }

  /**
   * LeaseFlag createMany
   */
  export type LeaseFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaseFlags.
     */
    data: LeaseFlagCreateManyInput | LeaseFlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaseFlag update
   */
  export type LeaseFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaseFlag.
     */
    data: XOR<LeaseFlagUpdateInput, LeaseFlagUncheckedUpdateInput>
    /**
     * Choose, which LeaseFlag to update.
     */
    where: LeaseFlagWhereUniqueInput
  }

  /**
   * LeaseFlag updateMany
   */
  export type LeaseFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaseFlags.
     */
    data: XOR<LeaseFlagUpdateManyMutationInput, LeaseFlagUncheckedUpdateManyInput>
    /**
     * Filter which LeaseFlags to update
     */
    where?: LeaseFlagWhereInput
    /**
     * Limit how many LeaseFlags to update.
     */
    limit?: number
  }

  /**
   * LeaseFlag upsert
   */
  export type LeaseFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaseFlag to update in case it exists.
     */
    where: LeaseFlagWhereUniqueInput
    /**
     * In case the LeaseFlag found by the `where` argument doesn't exist, create a new LeaseFlag with this data.
     */
    create: XOR<LeaseFlagCreateInput, LeaseFlagUncheckedCreateInput>
    /**
     * In case the LeaseFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseFlagUpdateInput, LeaseFlagUncheckedUpdateInput>
  }

  /**
   * LeaseFlag delete
   */
  export type LeaseFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
    /**
     * Filter which LeaseFlag to delete.
     */
    where: LeaseFlagWhereUniqueInput
  }

  /**
   * LeaseFlag deleteMany
   */
  export type LeaseFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaseFlags to delete
     */
    where?: LeaseFlagWhereInput
    /**
     * Limit how many LeaseFlags to delete.
     */
    limit?: number
  }

  /**
   * LeaseFlag without action
   */
  export type LeaseFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseFlag
     */
    select?: LeaseFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaseFlag
     */
    omit?: LeaseFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseFlagInclude<ExtArgs> | null
  }


  /**
   * Model RuleResult
   */

  export type AggregateRuleResult = {
    _count: RuleResultCountAggregateOutputType | null
    _min: RuleResultMinAggregateOutputType | null
    _max: RuleResultMaxAggregateOutputType | null
  }

  export type RuleResultMinAggregateOutputType = {
    id: string | null
    leaseId: string | null
    ruleId: string | null
    status: string | null
    reason: string | null
    severity: string | null
    sourceRef: string | null
    status2: string | null
  }

  export type RuleResultMaxAggregateOutputType = {
    id: string | null
    leaseId: string | null
    ruleId: string | null
    status: string | null
    reason: string | null
    severity: string | null
    sourceRef: string | null
    status2: string | null
  }

  export type RuleResultCountAggregateOutputType = {
    id: number
    leaseId: number
    ruleId: number
    status: number
    reason: number
    severity: number
    sourceRef: number
    status2: number
    _all: number
  }


  export type RuleResultMinAggregateInputType = {
    id?: true
    leaseId?: true
    ruleId?: true
    status?: true
    reason?: true
    severity?: true
    sourceRef?: true
    status2?: true
  }

  export type RuleResultMaxAggregateInputType = {
    id?: true
    leaseId?: true
    ruleId?: true
    status?: true
    reason?: true
    severity?: true
    sourceRef?: true
    status2?: true
  }

  export type RuleResultCountAggregateInputType = {
    id?: true
    leaseId?: true
    ruleId?: true
    status?: true
    reason?: true
    severity?: true
    sourceRef?: true
    status2?: true
    _all?: true
  }

  export type RuleResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleResult to aggregate.
     */
    where?: RuleResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleResults to fetch.
     */
    orderBy?: RuleResultOrderByWithRelationInput | RuleResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RuleResults
    **/
    _count?: true | RuleResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleResultMaxAggregateInputType
  }

  export type GetRuleResultAggregateType<T extends RuleResultAggregateArgs> = {
        [P in keyof T & keyof AggregateRuleResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuleResult[P]>
      : GetScalarType<T[P], AggregateRuleResult[P]>
  }




  export type RuleResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleResultWhereInput
    orderBy?: RuleResultOrderByWithAggregationInput | RuleResultOrderByWithAggregationInput[]
    by: RuleResultScalarFieldEnum[] | RuleResultScalarFieldEnum
    having?: RuleResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleResultCountAggregateInputType | true
    _min?: RuleResultMinAggregateInputType
    _max?: RuleResultMaxAggregateInputType
  }

  export type RuleResultGroupByOutputType = {
    id: string
    leaseId: string
    ruleId: string
    status: string
    reason: string
    severity: string
    sourceRef: string | null
    status2: string
    _count: RuleResultCountAggregateOutputType | null
    _min: RuleResultMinAggregateOutputType | null
    _max: RuleResultMaxAggregateOutputType | null
  }

  type GetRuleResultGroupByPayload<T extends RuleResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleResultGroupByOutputType[P]>
            : GetScalarType<T[P], RuleResultGroupByOutputType[P]>
        }
      >
    >


  export type RuleResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaseId?: boolean
    ruleId?: boolean
    status?: boolean
    reason?: boolean
    severity?: boolean
    sourceRef?: boolean
    status2?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruleResult"]>



  export type RuleResultSelectScalar = {
    id?: boolean
    leaseId?: boolean
    ruleId?: boolean
    status?: boolean
    reason?: boolean
    severity?: boolean
    sourceRef?: boolean
    status2?: boolean
  }

  export type RuleResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaseId" | "ruleId" | "status" | "reason" | "severity" | "sourceRef" | "status2", ExtArgs["result"]["ruleResult"]>
  export type RuleResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $RuleResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RuleResult"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaseId: string
      ruleId: string
      status: string
      reason: string
      severity: string
      sourceRef: string | null
      status2: string
    }, ExtArgs["result"]["ruleResult"]>
    composites: {}
  }

  type RuleResultGetPayload<S extends boolean | null | undefined | RuleResultDefaultArgs> = $Result.GetResult<Prisma.$RuleResultPayload, S>

  type RuleResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleResultCountAggregateInputType | true
    }

  export interface RuleResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RuleResult'], meta: { name: 'RuleResult' } }
    /**
     * Find zero or one RuleResult that matches the filter.
     * @param {RuleResultFindUniqueArgs} args - Arguments to find a RuleResult
     * @example
     * // Get one RuleResult
     * const ruleResult = await prisma.ruleResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleResultFindUniqueArgs>(args: SelectSubset<T, RuleResultFindUniqueArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RuleResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleResultFindUniqueOrThrowArgs} args - Arguments to find a RuleResult
     * @example
     * // Get one RuleResult
     * const ruleResult = await prisma.ruleResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleResultFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleResultFindFirstArgs} args - Arguments to find a RuleResult
     * @example
     * // Get one RuleResult
     * const ruleResult = await prisma.ruleResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleResultFindFirstArgs>(args?: SelectSubset<T, RuleResultFindFirstArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleResultFindFirstOrThrowArgs} args - Arguments to find a RuleResult
     * @example
     * // Get one RuleResult
     * const ruleResult = await prisma.ruleResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleResultFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RuleResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RuleResults
     * const ruleResults = await prisma.ruleResult.findMany()
     * 
     * // Get first 10 RuleResults
     * const ruleResults = await prisma.ruleResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleResultWithIdOnly = await prisma.ruleResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleResultFindManyArgs>(args?: SelectSubset<T, RuleResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RuleResult.
     * @param {RuleResultCreateArgs} args - Arguments to create a RuleResult.
     * @example
     * // Create one RuleResult
     * const RuleResult = await prisma.ruleResult.create({
     *   data: {
     *     // ... data to create a RuleResult
     *   }
     * })
     * 
     */
    create<T extends RuleResultCreateArgs>(args: SelectSubset<T, RuleResultCreateArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RuleResults.
     * @param {RuleResultCreateManyArgs} args - Arguments to create many RuleResults.
     * @example
     * // Create many RuleResults
     * const ruleResult = await prisma.ruleResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleResultCreateManyArgs>(args?: SelectSubset<T, RuleResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RuleResult.
     * @param {RuleResultDeleteArgs} args - Arguments to delete one RuleResult.
     * @example
     * // Delete one RuleResult
     * const RuleResult = await prisma.ruleResult.delete({
     *   where: {
     *     // ... filter to delete one RuleResult
     *   }
     * })
     * 
     */
    delete<T extends RuleResultDeleteArgs>(args: SelectSubset<T, RuleResultDeleteArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RuleResult.
     * @param {RuleResultUpdateArgs} args - Arguments to update one RuleResult.
     * @example
     * // Update one RuleResult
     * const ruleResult = await prisma.ruleResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleResultUpdateArgs>(args: SelectSubset<T, RuleResultUpdateArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RuleResults.
     * @param {RuleResultDeleteManyArgs} args - Arguments to filter RuleResults to delete.
     * @example
     * // Delete a few RuleResults
     * const { count } = await prisma.ruleResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleResultDeleteManyArgs>(args?: SelectSubset<T, RuleResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RuleResults
     * const ruleResult = await prisma.ruleResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleResultUpdateManyArgs>(args: SelectSubset<T, RuleResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RuleResult.
     * @param {RuleResultUpsertArgs} args - Arguments to update or create a RuleResult.
     * @example
     * // Update or create a RuleResult
     * const ruleResult = await prisma.ruleResult.upsert({
     *   create: {
     *     // ... data to create a RuleResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RuleResult we want to update
     *   }
     * })
     */
    upsert<T extends RuleResultUpsertArgs>(args: SelectSubset<T, RuleResultUpsertArgs<ExtArgs>>): Prisma__RuleResultClient<$Result.GetResult<Prisma.$RuleResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RuleResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleResultCountArgs} args - Arguments to filter RuleResults to count.
     * @example
     * // Count the number of RuleResults
     * const count = await prisma.ruleResult.count({
     *   where: {
     *     // ... the filter for the RuleResults we want to count
     *   }
     * })
    **/
    count<T extends RuleResultCountArgs>(
      args?: Subset<T, RuleResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RuleResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuleResultAggregateArgs>(args: Subset<T, RuleResultAggregateArgs>): Prisma.PrismaPromise<GetRuleResultAggregateType<T>>

    /**
     * Group by RuleResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RuleResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleResultGroupByArgs['orderBy'] }
        : { orderBy?: RuleResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RuleResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RuleResult model
   */
  readonly fields: RuleResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RuleResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RuleResult model
   */
  interface RuleResultFieldRefs {
    readonly id: FieldRef<"RuleResult", 'String'>
    readonly leaseId: FieldRef<"RuleResult", 'String'>
    readonly ruleId: FieldRef<"RuleResult", 'String'>
    readonly status: FieldRef<"RuleResult", 'String'>
    readonly reason: FieldRef<"RuleResult", 'String'>
    readonly severity: FieldRef<"RuleResult", 'String'>
    readonly sourceRef: FieldRef<"RuleResult", 'String'>
    readonly status2: FieldRef<"RuleResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RuleResult findUnique
   */
  export type RuleResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * Filter, which RuleResult to fetch.
     */
    where: RuleResultWhereUniqueInput
  }

  /**
   * RuleResult findUniqueOrThrow
   */
  export type RuleResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * Filter, which RuleResult to fetch.
     */
    where: RuleResultWhereUniqueInput
  }

  /**
   * RuleResult findFirst
   */
  export type RuleResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * Filter, which RuleResult to fetch.
     */
    where?: RuleResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleResults to fetch.
     */
    orderBy?: RuleResultOrderByWithRelationInput | RuleResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleResults.
     */
    cursor?: RuleResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleResults.
     */
    distinct?: RuleResultScalarFieldEnum | RuleResultScalarFieldEnum[]
  }

  /**
   * RuleResult findFirstOrThrow
   */
  export type RuleResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * Filter, which RuleResult to fetch.
     */
    where?: RuleResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleResults to fetch.
     */
    orderBy?: RuleResultOrderByWithRelationInput | RuleResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleResults.
     */
    cursor?: RuleResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleResults.
     */
    distinct?: RuleResultScalarFieldEnum | RuleResultScalarFieldEnum[]
  }

  /**
   * RuleResult findMany
   */
  export type RuleResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * Filter, which RuleResults to fetch.
     */
    where?: RuleResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleResults to fetch.
     */
    orderBy?: RuleResultOrderByWithRelationInput | RuleResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RuleResults.
     */
    cursor?: RuleResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleResults.
     */
    skip?: number
    distinct?: RuleResultScalarFieldEnum | RuleResultScalarFieldEnum[]
  }

  /**
   * RuleResult create
   */
  export type RuleResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * The data needed to create a RuleResult.
     */
    data: XOR<RuleResultCreateInput, RuleResultUncheckedCreateInput>
  }

  /**
   * RuleResult createMany
   */
  export type RuleResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RuleResults.
     */
    data: RuleResultCreateManyInput | RuleResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleResult update
   */
  export type RuleResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * The data needed to update a RuleResult.
     */
    data: XOR<RuleResultUpdateInput, RuleResultUncheckedUpdateInput>
    /**
     * Choose, which RuleResult to update.
     */
    where: RuleResultWhereUniqueInput
  }

  /**
   * RuleResult updateMany
   */
  export type RuleResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RuleResults.
     */
    data: XOR<RuleResultUpdateManyMutationInput, RuleResultUncheckedUpdateManyInput>
    /**
     * Filter which RuleResults to update
     */
    where?: RuleResultWhereInput
    /**
     * Limit how many RuleResults to update.
     */
    limit?: number
  }

  /**
   * RuleResult upsert
   */
  export type RuleResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * The filter to search for the RuleResult to update in case it exists.
     */
    where: RuleResultWhereUniqueInput
    /**
     * In case the RuleResult found by the `where` argument doesn't exist, create a new RuleResult with this data.
     */
    create: XOR<RuleResultCreateInput, RuleResultUncheckedCreateInput>
    /**
     * In case the RuleResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleResultUpdateInput, RuleResultUncheckedUpdateInput>
  }

  /**
   * RuleResult delete
   */
  export type RuleResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
    /**
     * Filter which RuleResult to delete.
     */
    where: RuleResultWhereUniqueInput
  }

  /**
   * RuleResult deleteMany
   */
  export type RuleResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleResults to delete
     */
    where?: RuleResultWhereInput
    /**
     * Limit how many RuleResults to delete.
     */
    limit?: number
  }

  /**
   * RuleResult without action
   */
  export type RuleResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleResult
     */
    select?: RuleResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleResult
     */
    omit?: RuleResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleResultInclude<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    photoPaths: string | null
    condition: string | null
    conditionScore: string | null
    contents: string | null
    damages: string | null
    createdAt: Date | null
  }

  export type IssueMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    photoPaths: string | null
    condition: string | null
    conditionScore: string | null
    contents: string | null
    damages: string | null
    createdAt: Date | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    unitId: number
    photoPaths: number
    condition: number
    conditionScore: number
    contents: number
    damages: number
    createdAt: number
    _all: number
  }


  export type IssueMinAggregateInputType = {
    id?: true
    unitId?: true
    photoPaths?: true
    condition?: true
    conditionScore?: true
    contents?: true
    damages?: true
    createdAt?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    unitId?: true
    photoPaths?: true
    condition?: true
    conditionScore?: true
    contents?: true
    damages?: true
    createdAt?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    unitId?: true
    photoPaths?: true
    condition?: true
    conditionScore?: true
    contents?: true
    damages?: true
    createdAt?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: string
    unitId: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt: Date
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    photoPaths?: boolean
    condition?: boolean
    conditionScore?: boolean
    contents?: boolean
    damages?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    workOrder?: boolean | Issue$workOrderArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>



  export type IssueSelectScalar = {
    id?: boolean
    unitId?: boolean
    photoPaths?: boolean
    condition?: boolean
    conditionScore?: boolean
    contents?: boolean
    damages?: boolean
    createdAt?: boolean
  }

  export type IssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "photoPaths" | "condition" | "conditionScore" | "contents" | "damages" | "createdAt", ExtArgs["result"]["issue"]>
  export type IssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    workOrder?: boolean | Issue$workOrderArgs<ExtArgs>
  }

  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      workOrder: Prisma.$WorkOrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      photoPaths: string
      condition: string
      conditionScore: string
      contents: string
      damages: string
      createdAt: Date
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workOrder<T extends Issue$workOrderArgs<ExtArgs> = {}>(args?: Subset<T, Issue$workOrderArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issue model
   */
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'String'>
    readonly unitId: FieldRef<"Issue", 'String'>
    readonly photoPaths: FieldRef<"Issue", 'String'>
    readonly condition: FieldRef<"Issue", 'String'>
    readonly conditionScore: FieldRef<"Issue", 'String'>
    readonly contents: FieldRef<"Issue", 'String'>
    readonly damages: FieldRef<"Issue", 'String'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issue.workOrder
   */
  export type Issue$workOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
  }


  /**
   * Model WorkOrder
   */

  export type AggregateWorkOrder = {
    _count: WorkOrderCountAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  export type WorkOrderMinAggregateOutputType = {
    id: string | null
    issueId: string | null
    unitId: string | null
    title: string | null
    description: string | null
    status: string | null
    reviewedAt: Date | null
  }

  export type WorkOrderMaxAggregateOutputType = {
    id: string | null
    issueId: string | null
    unitId: string | null
    title: string | null
    description: string | null
    status: string | null
    reviewedAt: Date | null
  }

  export type WorkOrderCountAggregateOutputType = {
    id: number
    issueId: number
    unitId: number
    title: number
    description: number
    status: number
    reviewedAt: number
    _all: number
  }


  export type WorkOrderMinAggregateInputType = {
    id?: true
    issueId?: true
    unitId?: true
    title?: true
    description?: true
    status?: true
    reviewedAt?: true
  }

  export type WorkOrderMaxAggregateInputType = {
    id?: true
    issueId?: true
    unitId?: true
    title?: true
    description?: true
    status?: true
    reviewedAt?: true
  }

  export type WorkOrderCountAggregateInputType = {
    id?: true
    issueId?: true
    unitId?: true
    title?: true
    description?: true
    status?: true
    reviewedAt?: true
    _all?: true
  }

  export type WorkOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrder to aggregate.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkOrders
    **/
    _count?: true | WorkOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkOrderMaxAggregateInputType
  }

  export type GetWorkOrderAggregateType<T extends WorkOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkOrder[P]>
      : GetScalarType<T[P], AggregateWorkOrder[P]>
  }




  export type WorkOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithAggregationInput | WorkOrderOrderByWithAggregationInput[]
    by: WorkOrderScalarFieldEnum[] | WorkOrderScalarFieldEnum
    having?: WorkOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkOrderCountAggregateInputType | true
    _min?: WorkOrderMinAggregateInputType
    _max?: WorkOrderMaxAggregateInputType
  }

  export type WorkOrderGroupByOutputType = {
    id: string
    issueId: string
    unitId: string
    title: string
    description: string
    status: string
    reviewedAt: Date | null
    _count: WorkOrderCountAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  type GetWorkOrderGroupByPayload<T extends WorkOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
            : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
        }
      >
    >


  export type WorkOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    unitId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    reviewedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workOrder"]>



  export type WorkOrderSelectScalar = {
    id?: boolean
    issueId?: boolean
    unitId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    reviewedAt?: boolean
  }

  export type WorkOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issueId" | "unitId" | "title" | "description" | "status" | "reviewedAt", ExtArgs["result"]["workOrder"]>
  export type WorkOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }

  export type $WorkOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkOrder"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      issueId: string
      unitId: string
      title: string
      description: string
      status: string
      reviewedAt: Date | null
    }, ExtArgs["result"]["workOrder"]>
    composites: {}
  }

  type WorkOrderGetPayload<S extends boolean | null | undefined | WorkOrderDefaultArgs> = $Result.GetResult<Prisma.$WorkOrderPayload, S>

  type WorkOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkOrderCountAggregateInputType | true
    }

  export interface WorkOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkOrder'], meta: { name: 'WorkOrder' } }
    /**
     * Find zero or one WorkOrder that matches the filter.
     * @param {WorkOrderFindUniqueArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkOrderFindUniqueArgs>(args: SelectSubset<T, WorkOrderFindUniqueArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkOrderFindUniqueOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkOrderFindFirstArgs>(args?: SelectSubset<T, WorkOrderFindFirstArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkOrders
     * const workOrders = await prisma.workOrder.findMany()
     * 
     * // Get first 10 WorkOrders
     * const workOrders = await prisma.workOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workOrderWithIdOnly = await prisma.workOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkOrderFindManyArgs>(args?: SelectSubset<T, WorkOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkOrder.
     * @param {WorkOrderCreateArgs} args - Arguments to create a WorkOrder.
     * @example
     * // Create one WorkOrder
     * const WorkOrder = await prisma.workOrder.create({
     *   data: {
     *     // ... data to create a WorkOrder
     *   }
     * })
     * 
     */
    create<T extends WorkOrderCreateArgs>(args: SelectSubset<T, WorkOrderCreateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkOrders.
     * @param {WorkOrderCreateManyArgs} args - Arguments to create many WorkOrders.
     * @example
     * // Create many WorkOrders
     * const workOrder = await prisma.workOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkOrderCreateManyArgs>(args?: SelectSubset<T, WorkOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkOrder.
     * @param {WorkOrderDeleteArgs} args - Arguments to delete one WorkOrder.
     * @example
     * // Delete one WorkOrder
     * const WorkOrder = await prisma.workOrder.delete({
     *   where: {
     *     // ... filter to delete one WorkOrder
     *   }
     * })
     * 
     */
    delete<T extends WorkOrderDeleteArgs>(args: SelectSubset<T, WorkOrderDeleteArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkOrder.
     * @param {WorkOrderUpdateArgs} args - Arguments to update one WorkOrder.
     * @example
     * // Update one WorkOrder
     * const workOrder = await prisma.workOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkOrderUpdateArgs>(args: SelectSubset<T, WorkOrderUpdateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkOrders.
     * @param {WorkOrderDeleteManyArgs} args - Arguments to filter WorkOrders to delete.
     * @example
     * // Delete a few WorkOrders
     * const { count } = await prisma.workOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkOrderDeleteManyArgs>(args?: SelectSubset<T, WorkOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkOrders
     * const workOrder = await prisma.workOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkOrderUpdateManyArgs>(args: SelectSubset<T, WorkOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkOrder.
     * @param {WorkOrderUpsertArgs} args - Arguments to update or create a WorkOrder.
     * @example
     * // Update or create a WorkOrder
     * const workOrder = await prisma.workOrder.upsert({
     *   create: {
     *     // ... data to create a WorkOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkOrder we want to update
     *   }
     * })
     */
    upsert<T extends WorkOrderUpsertArgs>(args: SelectSubset<T, WorkOrderUpsertArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderCountArgs} args - Arguments to filter WorkOrders to count.
     * @example
     * // Count the number of WorkOrders
     * const count = await prisma.workOrder.count({
     *   where: {
     *     // ... the filter for the WorkOrders we want to count
     *   }
     * })
    **/
    count<T extends WorkOrderCountArgs>(
      args?: Subset<T, WorkOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkOrderAggregateArgs>(args: Subset<T, WorkOrderAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderAggregateType<T>>

    /**
     * Group by WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkOrderGroupByArgs['orderBy'] }
        : { orderBy?: WorkOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkOrder model
   */
  readonly fields: WorkOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkOrder model
   */
  interface WorkOrderFieldRefs {
    readonly id: FieldRef<"WorkOrder", 'String'>
    readonly issueId: FieldRef<"WorkOrder", 'String'>
    readonly unitId: FieldRef<"WorkOrder", 'String'>
    readonly title: FieldRef<"WorkOrder", 'String'>
    readonly description: FieldRef<"WorkOrder", 'String'>
    readonly status: FieldRef<"WorkOrder", 'String'>
    readonly reviewedAt: FieldRef<"WorkOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkOrder findUnique
   */
  export type WorkOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findUniqueOrThrow
   */
  export type WorkOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findFirst
   */
  export type WorkOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findFirstOrThrow
   */
  export type WorkOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findMany
   */
  export type WorkOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrders to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder create
   */
  export type WorkOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkOrder.
     */
    data: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
  }

  /**
   * WorkOrder createMany
   */
  export type WorkOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkOrders.
     */
    data: WorkOrderCreateManyInput | WorkOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkOrder update
   */
  export type WorkOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkOrder.
     */
    data: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
    /**
     * Choose, which WorkOrder to update.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder updateMany
   */
  export type WorkOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkOrders.
     */
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrders to update
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to update.
     */
    limit?: number
  }

  /**
   * WorkOrder upsert
   */
  export type WorkOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkOrder to update in case it exists.
     */
    where: WorkOrderWhereUniqueInput
    /**
     * In case the WorkOrder found by the `where` argument doesn't exist, create a new WorkOrder with this data.
     */
    create: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
    /**
     * In case the WorkOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
  }

  /**
   * WorkOrder delete
   */
  export type WorkOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter which WorkOrder to delete.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder deleteMany
   */
  export type WorkOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrders to delete
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to delete.
     */
    limit?: number
  }

  /**
   * WorkOrder without action
   */
  export type WorkOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UnitScalarFieldEnum: {
    unitId: 'unitId',
    buildingId: 'buildingId',
    propertyId: 'propertyId',
    label: 'label',
    type: 'type',
    areaSqm: 'areaSqm',
    parkingBay: 'parkingBay',
    status: 'status'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const LeaseScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    fileName: 'fileName',
    rawText: 'rawText',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]


  export const LeaseFieldScalarFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    key: 'key',
    value: 'value',
    confidence: 'confidence',
    sourceSnippet: 'sourceSnippet',
    sourceLocation: 'sourceLocation',
    status: 'status',
    reviewedAt: 'reviewedAt',
    reviewedBy: 'reviewedBy'
  };

  export type LeaseFieldScalarFieldEnum = (typeof LeaseFieldScalarFieldEnum)[keyof typeof LeaseFieldScalarFieldEnum]


  export const LeaseFlagScalarFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    kind: 'kind',
    severity: 'severity',
    message: 'message',
    evidence: 'evidence',
    status: 'status'
  };

  export type LeaseFlagScalarFieldEnum = (typeof LeaseFlagScalarFieldEnum)[keyof typeof LeaseFlagScalarFieldEnum]


  export const RuleResultScalarFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    ruleId: 'ruleId',
    status: 'status',
    reason: 'reason',
    severity: 'severity',
    sourceRef: 'sourceRef',
    status2: 'status2'
  };

  export type RuleResultScalarFieldEnum = (typeof RuleResultScalarFieldEnum)[keyof typeof RuleResultScalarFieldEnum]


  export const IssueScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    photoPaths: 'photoPaths',
    condition: 'condition',
    conditionScore: 'conditionScore',
    contents: 'contents',
    damages: 'damages',
    createdAt: 'createdAt'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const WorkOrderScalarFieldEnum: {
    id: 'id',
    issueId: 'issueId',
    unitId: 'unitId',
    title: 'title',
    description: 'description',
    status: 'status',
    reviewedAt: 'reviewedAt'
  };

  export type WorkOrderScalarFieldEnum = (typeof WorkOrderScalarFieldEnum)[keyof typeof WorkOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UnitOrderByRelevanceFieldEnum: {
    unitId: 'unitId',
    buildingId: 'buildingId',
    propertyId: 'propertyId',
    label: 'label',
    type: 'type',
    parkingBay: 'parkingBay',
    status: 'status'
  };

  export type UnitOrderByRelevanceFieldEnum = (typeof UnitOrderByRelevanceFieldEnum)[keyof typeof UnitOrderByRelevanceFieldEnum]


  export const LeaseOrderByRelevanceFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    fileName: 'fileName',
    rawText: 'rawText',
    status: 'status'
  };

  export type LeaseOrderByRelevanceFieldEnum = (typeof LeaseOrderByRelevanceFieldEnum)[keyof typeof LeaseOrderByRelevanceFieldEnum]


  export const LeaseFieldOrderByRelevanceFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    key: 'key',
    value: 'value',
    sourceSnippet: 'sourceSnippet',
    sourceLocation: 'sourceLocation',
    status: 'status',
    reviewedBy: 'reviewedBy'
  };

  export type LeaseFieldOrderByRelevanceFieldEnum = (typeof LeaseFieldOrderByRelevanceFieldEnum)[keyof typeof LeaseFieldOrderByRelevanceFieldEnum]


  export const LeaseFlagOrderByRelevanceFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    kind: 'kind',
    severity: 'severity',
    message: 'message',
    evidence: 'evidence',
    status: 'status'
  };

  export type LeaseFlagOrderByRelevanceFieldEnum = (typeof LeaseFlagOrderByRelevanceFieldEnum)[keyof typeof LeaseFlagOrderByRelevanceFieldEnum]


  export const RuleResultOrderByRelevanceFieldEnum: {
    id: 'id',
    leaseId: 'leaseId',
    ruleId: 'ruleId',
    status: 'status',
    reason: 'reason',
    severity: 'severity',
    sourceRef: 'sourceRef',
    status2: 'status2'
  };

  export type RuleResultOrderByRelevanceFieldEnum = (typeof RuleResultOrderByRelevanceFieldEnum)[keyof typeof RuleResultOrderByRelevanceFieldEnum]


  export const IssueOrderByRelevanceFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    photoPaths: 'photoPaths',
    condition: 'condition',
    conditionScore: 'conditionScore',
    contents: 'contents',
    damages: 'damages'
  };

  export type IssueOrderByRelevanceFieldEnum = (typeof IssueOrderByRelevanceFieldEnum)[keyof typeof IssueOrderByRelevanceFieldEnum]


  export const WorkOrderOrderByRelevanceFieldEnum: {
    id: 'id',
    issueId: 'issueId',
    unitId: 'unitId',
    title: 'title',
    description: 'description',
    status: 'status'
  };

  export type WorkOrderOrderByRelevanceFieldEnum = (typeof WorkOrderOrderByRelevanceFieldEnum)[keyof typeof WorkOrderOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    unitId?: StringFilter<"Unit"> | string
    buildingId?: StringFilter<"Unit"> | string
    propertyId?: StringFilter<"Unit"> | string
    label?: StringFilter<"Unit"> | string
    type?: StringFilter<"Unit"> | string
    areaSqm?: IntFilter<"Unit"> | number
    parkingBay?: StringNullableFilter<"Unit"> | string | null
    status?: StringFilter<"Unit"> | string
    issues?: IssueListRelationFilter
    leases?: LeaseListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    unitId?: SortOrder
    buildingId?: SortOrder
    propertyId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    areaSqm?: SortOrder
    parkingBay?: SortOrderInput | SortOrder
    status?: SortOrder
    issues?: IssueOrderByRelationAggregateInput
    leases?: LeaseOrderByRelationAggregateInput
    _relevance?: UnitOrderByRelevanceInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    unitId?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    buildingId?: StringFilter<"Unit"> | string
    propertyId?: StringFilter<"Unit"> | string
    label?: StringFilter<"Unit"> | string
    type?: StringFilter<"Unit"> | string
    areaSqm?: IntFilter<"Unit"> | number
    parkingBay?: StringNullableFilter<"Unit"> | string | null
    status?: StringFilter<"Unit"> | string
    issues?: IssueListRelationFilter
    leases?: LeaseListRelationFilter
  }, "unitId">

  export type UnitOrderByWithAggregationInput = {
    unitId?: SortOrder
    buildingId?: SortOrder
    propertyId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    areaSqm?: SortOrder
    parkingBay?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    unitId?: StringWithAggregatesFilter<"Unit"> | string
    buildingId?: StringWithAggregatesFilter<"Unit"> | string
    propertyId?: StringWithAggregatesFilter<"Unit"> | string
    label?: StringWithAggregatesFilter<"Unit"> | string
    type?: StringWithAggregatesFilter<"Unit"> | string
    areaSqm?: IntWithAggregatesFilter<"Unit"> | number
    parkingBay?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    status?: StringWithAggregatesFilter<"Unit"> | string
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: StringFilter<"Lease"> | string
    unitId?: StringNullableFilter<"Lease"> | string | null
    fileName?: StringFilter<"Lease"> | string
    rawText?: StringFilter<"Lease"> | string
    status?: StringFilter<"Lease"> | string
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    fields?: LeaseFieldListRelationFilter
    flags?: LeaseFlagListRelationFilter
    ruleResults?: RuleResultListRelationFilter
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrderInput | SortOrder
    fileName?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    fields?: LeaseFieldOrderByRelationAggregateInput
    flags?: LeaseFlagOrderByRelationAggregateInput
    ruleResults?: RuleResultOrderByRelationAggregateInput
    _relevance?: LeaseOrderByRelevanceInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    unitId?: StringNullableFilter<"Lease"> | string | null
    fileName?: StringFilter<"Lease"> | string
    rawText?: StringFilter<"Lease"> | string
    status?: StringFilter<"Lease"> | string
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    fields?: LeaseFieldListRelationFilter
    flags?: LeaseFlagListRelationFilter
    ruleResults?: RuleResultListRelationFilter
  }, "id">

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrderInput | SortOrder
    fileName?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lease"> | string
    unitId?: StringNullableWithAggregatesFilter<"Lease"> | string | null
    fileName?: StringWithAggregatesFilter<"Lease"> | string
    rawText?: StringWithAggregatesFilter<"Lease"> | string
    status?: StringWithAggregatesFilter<"Lease"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
  }

  export type LeaseFieldWhereInput = {
    AND?: LeaseFieldWhereInput | LeaseFieldWhereInput[]
    OR?: LeaseFieldWhereInput[]
    NOT?: LeaseFieldWhereInput | LeaseFieldWhereInput[]
    id?: StringFilter<"LeaseField"> | string
    leaseId?: StringFilter<"LeaseField"> | string
    key?: StringFilter<"LeaseField"> | string
    value?: StringFilter<"LeaseField"> | string
    confidence?: FloatFilter<"LeaseField"> | number
    sourceSnippet?: StringFilter<"LeaseField"> | string
    sourceLocation?: StringNullableFilter<"LeaseField"> | string | null
    status?: StringFilter<"LeaseField"> | string
    reviewedAt?: DateTimeNullableFilter<"LeaseField"> | Date | string | null
    reviewedBy?: StringNullableFilter<"LeaseField"> | string | null
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type LeaseFieldOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    confidence?: SortOrder
    sourceSnippet?: SortOrder
    sourceLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    lease?: LeaseOrderByWithRelationInput
    _relevance?: LeaseFieldOrderByRelevanceInput
  }

  export type LeaseFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseFieldWhereInput | LeaseFieldWhereInput[]
    OR?: LeaseFieldWhereInput[]
    NOT?: LeaseFieldWhereInput | LeaseFieldWhereInput[]
    leaseId?: StringFilter<"LeaseField"> | string
    key?: StringFilter<"LeaseField"> | string
    value?: StringFilter<"LeaseField"> | string
    confidence?: FloatFilter<"LeaseField"> | number
    sourceSnippet?: StringFilter<"LeaseField"> | string
    sourceLocation?: StringNullableFilter<"LeaseField"> | string | null
    status?: StringFilter<"LeaseField"> | string
    reviewedAt?: DateTimeNullableFilter<"LeaseField"> | Date | string | null
    reviewedBy?: StringNullableFilter<"LeaseField"> | string | null
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }, "id">

  export type LeaseFieldOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    confidence?: SortOrder
    sourceSnippet?: SortOrder
    sourceLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    _count?: LeaseFieldCountOrderByAggregateInput
    _avg?: LeaseFieldAvgOrderByAggregateInput
    _max?: LeaseFieldMaxOrderByAggregateInput
    _min?: LeaseFieldMinOrderByAggregateInput
    _sum?: LeaseFieldSumOrderByAggregateInput
  }

  export type LeaseFieldScalarWhereWithAggregatesInput = {
    AND?: LeaseFieldScalarWhereWithAggregatesInput | LeaseFieldScalarWhereWithAggregatesInput[]
    OR?: LeaseFieldScalarWhereWithAggregatesInput[]
    NOT?: LeaseFieldScalarWhereWithAggregatesInput | LeaseFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaseField"> | string
    leaseId?: StringWithAggregatesFilter<"LeaseField"> | string
    key?: StringWithAggregatesFilter<"LeaseField"> | string
    value?: StringWithAggregatesFilter<"LeaseField"> | string
    confidence?: FloatWithAggregatesFilter<"LeaseField"> | number
    sourceSnippet?: StringWithAggregatesFilter<"LeaseField"> | string
    sourceLocation?: StringNullableWithAggregatesFilter<"LeaseField"> | string | null
    status?: StringWithAggregatesFilter<"LeaseField"> | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"LeaseField"> | Date | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"LeaseField"> | string | null
  }

  export type LeaseFlagWhereInput = {
    AND?: LeaseFlagWhereInput | LeaseFlagWhereInput[]
    OR?: LeaseFlagWhereInput[]
    NOT?: LeaseFlagWhereInput | LeaseFlagWhereInput[]
    id?: StringFilter<"LeaseFlag"> | string
    leaseId?: StringFilter<"LeaseFlag"> | string
    kind?: StringFilter<"LeaseFlag"> | string
    severity?: StringFilter<"LeaseFlag"> | string
    message?: StringFilter<"LeaseFlag"> | string
    evidence?: StringNullableFilter<"LeaseFlag"> | string | null
    status?: StringFilter<"LeaseFlag"> | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type LeaseFlagOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    kind?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    evidence?: SortOrderInput | SortOrder
    status?: SortOrder
    lease?: LeaseOrderByWithRelationInput
    _relevance?: LeaseFlagOrderByRelevanceInput
  }

  export type LeaseFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseFlagWhereInput | LeaseFlagWhereInput[]
    OR?: LeaseFlagWhereInput[]
    NOT?: LeaseFlagWhereInput | LeaseFlagWhereInput[]
    leaseId?: StringFilter<"LeaseFlag"> | string
    kind?: StringFilter<"LeaseFlag"> | string
    severity?: StringFilter<"LeaseFlag"> | string
    message?: StringFilter<"LeaseFlag"> | string
    evidence?: StringNullableFilter<"LeaseFlag"> | string | null
    status?: StringFilter<"LeaseFlag"> | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }, "id">

  export type LeaseFlagOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    kind?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    evidence?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: LeaseFlagCountOrderByAggregateInput
    _max?: LeaseFlagMaxOrderByAggregateInput
    _min?: LeaseFlagMinOrderByAggregateInput
  }

  export type LeaseFlagScalarWhereWithAggregatesInput = {
    AND?: LeaseFlagScalarWhereWithAggregatesInput | LeaseFlagScalarWhereWithAggregatesInput[]
    OR?: LeaseFlagScalarWhereWithAggregatesInput[]
    NOT?: LeaseFlagScalarWhereWithAggregatesInput | LeaseFlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaseFlag"> | string
    leaseId?: StringWithAggregatesFilter<"LeaseFlag"> | string
    kind?: StringWithAggregatesFilter<"LeaseFlag"> | string
    severity?: StringWithAggregatesFilter<"LeaseFlag"> | string
    message?: StringWithAggregatesFilter<"LeaseFlag"> | string
    evidence?: StringNullableWithAggregatesFilter<"LeaseFlag"> | string | null
    status?: StringWithAggregatesFilter<"LeaseFlag"> | string
  }

  export type RuleResultWhereInput = {
    AND?: RuleResultWhereInput | RuleResultWhereInput[]
    OR?: RuleResultWhereInput[]
    NOT?: RuleResultWhereInput | RuleResultWhereInput[]
    id?: StringFilter<"RuleResult"> | string
    leaseId?: StringFilter<"RuleResult"> | string
    ruleId?: StringFilter<"RuleResult"> | string
    status?: StringFilter<"RuleResult"> | string
    reason?: StringFilter<"RuleResult"> | string
    severity?: StringFilter<"RuleResult"> | string
    sourceRef?: StringNullableFilter<"RuleResult"> | string | null
    status2?: StringFilter<"RuleResult"> | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type RuleResultOrderByWithRelationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    ruleId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    severity?: SortOrder
    sourceRef?: SortOrderInput | SortOrder
    status2?: SortOrder
    lease?: LeaseOrderByWithRelationInput
    _relevance?: RuleResultOrderByRelevanceInput
  }

  export type RuleResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leaseId_ruleId?: RuleResultLeaseIdRuleIdCompoundUniqueInput
    AND?: RuleResultWhereInput | RuleResultWhereInput[]
    OR?: RuleResultWhereInput[]
    NOT?: RuleResultWhereInput | RuleResultWhereInput[]
    leaseId?: StringFilter<"RuleResult"> | string
    ruleId?: StringFilter<"RuleResult"> | string
    status?: StringFilter<"RuleResult"> | string
    reason?: StringFilter<"RuleResult"> | string
    severity?: StringFilter<"RuleResult"> | string
    sourceRef?: StringNullableFilter<"RuleResult"> | string | null
    status2?: StringFilter<"RuleResult"> | string
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }, "id" | "leaseId_ruleId">

  export type RuleResultOrderByWithAggregationInput = {
    id?: SortOrder
    leaseId?: SortOrder
    ruleId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    severity?: SortOrder
    sourceRef?: SortOrderInput | SortOrder
    status2?: SortOrder
    _count?: RuleResultCountOrderByAggregateInput
    _max?: RuleResultMaxOrderByAggregateInput
    _min?: RuleResultMinOrderByAggregateInput
  }

  export type RuleResultScalarWhereWithAggregatesInput = {
    AND?: RuleResultScalarWhereWithAggregatesInput | RuleResultScalarWhereWithAggregatesInput[]
    OR?: RuleResultScalarWhereWithAggregatesInput[]
    NOT?: RuleResultScalarWhereWithAggregatesInput | RuleResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RuleResult"> | string
    leaseId?: StringWithAggregatesFilter<"RuleResult"> | string
    ruleId?: StringWithAggregatesFilter<"RuleResult"> | string
    status?: StringWithAggregatesFilter<"RuleResult"> | string
    reason?: StringWithAggregatesFilter<"RuleResult"> | string
    severity?: StringWithAggregatesFilter<"RuleResult"> | string
    sourceRef?: StringNullableWithAggregatesFilter<"RuleResult"> | string | null
    status2?: StringWithAggregatesFilter<"RuleResult"> | string
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: StringFilter<"Issue"> | string
    unitId?: StringFilter<"Issue"> | string
    photoPaths?: StringFilter<"Issue"> | string
    condition?: StringFilter<"Issue"> | string
    conditionScore?: StringFilter<"Issue"> | string
    contents?: StringFilter<"Issue"> | string
    damages?: StringFilter<"Issue"> | string
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    workOrder?: XOR<WorkOrderNullableScalarRelationFilter, WorkOrderWhereInput> | null
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    photoPaths?: SortOrder
    condition?: SortOrder
    conditionScore?: SortOrder
    contents?: SortOrder
    damages?: SortOrder
    createdAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    workOrder?: WorkOrderOrderByWithRelationInput
    _relevance?: IssueOrderByRelevanceInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    unitId?: StringFilter<"Issue"> | string
    photoPaths?: StringFilter<"Issue"> | string
    condition?: StringFilter<"Issue"> | string
    conditionScore?: StringFilter<"Issue"> | string
    contents?: StringFilter<"Issue"> | string
    damages?: StringFilter<"Issue"> | string
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    workOrder?: XOR<WorkOrderNullableScalarRelationFilter, WorkOrderWhereInput> | null
  }, "id">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    photoPaths?: SortOrder
    condition?: SortOrder
    conditionScore?: SortOrder
    contents?: SortOrder
    damages?: SortOrder
    createdAt?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Issue"> | string
    unitId?: StringWithAggregatesFilter<"Issue"> | string
    photoPaths?: StringWithAggregatesFilter<"Issue"> | string
    condition?: StringWithAggregatesFilter<"Issue"> | string
    conditionScore?: StringWithAggregatesFilter<"Issue"> | string
    contents?: StringWithAggregatesFilter<"Issue"> | string
    damages?: StringWithAggregatesFilter<"Issue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
  }

  export type WorkOrderWhereInput = {
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    id?: StringFilter<"WorkOrder"> | string
    issueId?: StringFilter<"WorkOrder"> | string
    unitId?: StringFilter<"WorkOrder"> | string
    title?: StringFilter<"WorkOrder"> | string
    description?: StringFilter<"WorkOrder"> | string
    status?: StringFilter<"WorkOrder"> | string
    reviewedAt?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
  }

  export type WorkOrderOrderByWithRelationInput = {
    id?: SortOrder
    issueId?: SortOrder
    unitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    issue?: IssueOrderByWithRelationInput
    _relevance?: WorkOrderOrderByRelevanceInput
  }

  export type WorkOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    issueId?: string
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    unitId?: StringFilter<"WorkOrder"> | string
    title?: StringFilter<"WorkOrder"> | string
    description?: StringFilter<"WorkOrder"> | string
    status?: StringFilter<"WorkOrder"> | string
    reviewedAt?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
  }, "id" | "issueId">

  export type WorkOrderOrderByWithAggregationInput = {
    id?: SortOrder
    issueId?: SortOrder
    unitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    _count?: WorkOrderCountOrderByAggregateInput
    _max?: WorkOrderMaxOrderByAggregateInput
    _min?: WorkOrderMinOrderByAggregateInput
  }

  export type WorkOrderScalarWhereWithAggregatesInput = {
    AND?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    OR?: WorkOrderScalarWhereWithAggregatesInput[]
    NOT?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkOrder"> | string
    issueId?: StringWithAggregatesFilter<"WorkOrder"> | string
    unitId?: StringWithAggregatesFilter<"WorkOrder"> | string
    title?: StringWithAggregatesFilter<"WorkOrder"> | string
    description?: StringWithAggregatesFilter<"WorkOrder"> | string
    status?: StringWithAggregatesFilter<"WorkOrder"> | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
  }

  export type UnitCreateInput = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay?: string | null
    status: string
    issues?: IssueCreateNestedManyWithoutUnitInput
    leases?: LeaseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay?: string | null
    status: string
    issues?: IssueUncheckedCreateNestedManyWithoutUnitInput
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    issues?: IssueUpdateManyWithoutUnitNestedInput
    leases?: LeaseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    issues?: IssueUncheckedUpdateManyWithoutUnitNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay?: string | null
    status: string
  }

  export type UnitUpdateManyMutationInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UnitUncheckedUpdateManyInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseCreateInput = {
    id?: string
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    unit?: UnitCreateNestedOneWithoutLeasesInput
    fields?: LeaseFieldCreateNestedManyWithoutLeaseInput
    flags?: LeaseFlagCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: string
    unitId?: string | null
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    fields?: LeaseFieldUncheckedCreateNestedManyWithoutLeaseInput
    flags?: LeaseFlagUncheckedCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutLeasesNestedInput
    fields?: LeaseFieldUpdateManyWithoutLeaseNestedInput
    flags?: LeaseFlagUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: LeaseFieldUncheckedUpdateManyWithoutLeaseNestedInput
    flags?: LeaseFlagUncheckedUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateManyInput = {
    id?: string
    unitId?: string | null
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
  }

  export type LeaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseFieldCreateInput = {
    id?: string
    key: string
    value: string
    confidence: number
    sourceSnippet: string
    sourceLocation?: string | null
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
    lease: LeaseCreateNestedOneWithoutFieldsInput
  }

  export type LeaseFieldUncheckedCreateInput = {
    id?: string
    leaseId: string
    key: string
    value: string
    confidence: number
    sourceSnippet: string
    sourceLocation?: string | null
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type LeaseFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    sourceSnippet?: StringFieldUpdateOperationsInput | string
    sourceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lease?: LeaseUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type LeaseFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    sourceSnippet?: StringFieldUpdateOperationsInput | string
    sourceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseFieldCreateManyInput = {
    id?: string
    leaseId: string
    key: string
    value: string
    confidence: number
    sourceSnippet: string
    sourceLocation?: string | null
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type LeaseFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    sourceSnippet?: StringFieldUpdateOperationsInput | string
    sourceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    sourceSnippet?: StringFieldUpdateOperationsInput | string
    sourceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseFlagCreateInput = {
    id?: string
    kind: string
    severity: string
    message: string
    evidence?: string | null
    status?: string
    lease: LeaseCreateNestedOneWithoutFlagsInput
  }

  export type LeaseFlagUncheckedCreateInput = {
    id?: string
    leaseId: string
    kind: string
    severity: string
    message: string
    evidence?: string | null
    status?: string
  }

  export type LeaseFlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lease?: LeaseUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type LeaseFlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseFlagCreateManyInput = {
    id?: string
    leaseId: string
    kind: string
    severity: string
    message: string
    evidence?: string | null
    status?: string
  }

  export type LeaseFlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseFlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RuleResultCreateInput = {
    id?: string
    ruleId: string
    status: string
    reason: string
    severity: string
    sourceRef?: string | null
    status2?: string
    lease: LeaseCreateNestedOneWithoutRuleResultsInput
  }

  export type RuleResultUncheckedCreateInput = {
    id?: string
    leaseId: string
    ruleId: string
    status: string
    reason: string
    severity: string
    sourceRef?: string | null
    status2?: string
  }

  export type RuleResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceRef?: NullableStringFieldUpdateOperationsInput | string | null
    status2?: StringFieldUpdateOperationsInput | string
    lease?: LeaseUpdateOneRequiredWithoutRuleResultsNestedInput
  }

  export type RuleResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceRef?: NullableStringFieldUpdateOperationsInput | string | null
    status2?: StringFieldUpdateOperationsInput | string
  }

  export type RuleResultCreateManyInput = {
    id?: string
    leaseId: string
    ruleId: string
    status: string
    reason: string
    severity: string
    sourceRef?: string | null
    status2?: string
  }

  export type RuleResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceRef?: NullableStringFieldUpdateOperationsInput | string | null
    status2?: StringFieldUpdateOperationsInput | string
  }

  export type RuleResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaseId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceRef?: NullableStringFieldUpdateOperationsInput | string | null
    status2?: StringFieldUpdateOperationsInput | string
  }

  export type IssueCreateInput = {
    id?: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutIssuesInput
    workOrder?: WorkOrderCreateNestedOneWithoutIssueInput
  }

  export type IssueUncheckedCreateInput = {
    id?: string
    unitId: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
    workOrder?: WorkOrderUncheckedCreateNestedOneWithoutIssueInput
  }

  export type IssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutIssuesNestedInput
    workOrder?: WorkOrderUpdateOneWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOrder?: WorkOrderUncheckedUpdateOneWithoutIssueNestedInput
  }

  export type IssueCreateManyInput = {
    id?: string
    unitId: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
  }

  export type IssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderCreateInput = {
    id?: string
    unitId: string
    title: string
    description: string
    status?: string
    reviewedAt?: Date | string | null
    issue: IssueCreateNestedOneWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateInput = {
    id?: string
    issueId: string
    unitId: string
    title: string
    description: string
    status?: string
    reviewedAt?: Date | string | null
  }

  export type WorkOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issue?: IssueUpdateOneRequiredWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkOrderCreateManyInput = {
    id?: string
    issueId: string
    unitId: string
    title: string
    description: string
    status?: string
    reviewedAt?: Date | string | null
  }

  export type WorkOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitOrderByRelevanceInput = {
    fields: UnitOrderByRelevanceFieldEnum | UnitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UnitCountOrderByAggregateInput = {
    unitId?: SortOrder
    buildingId?: SortOrder
    propertyId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    areaSqm?: SortOrder
    parkingBay?: SortOrder
    status?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    areaSqm?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    unitId?: SortOrder
    buildingId?: SortOrder
    propertyId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    areaSqm?: SortOrder
    parkingBay?: SortOrder
    status?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    unitId?: SortOrder
    buildingId?: SortOrder
    propertyId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    areaSqm?: SortOrder
    parkingBay?: SortOrder
    status?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    areaSqm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UnitNullableScalarRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type LeaseFieldListRelationFilter = {
    every?: LeaseFieldWhereInput
    some?: LeaseFieldWhereInput
    none?: LeaseFieldWhereInput
  }

  export type LeaseFlagListRelationFilter = {
    every?: LeaseFlagWhereInput
    some?: LeaseFlagWhereInput
    none?: LeaseFlagWhereInput
  }

  export type RuleResultListRelationFilter = {
    every?: RuleResultWhereInput
    some?: RuleResultWhereInput
    none?: RuleResultWhereInput
  }

  export type LeaseFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseFlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseOrderByRelevanceInput = {
    fields: LeaseOrderByRelevanceFieldEnum | LeaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    fileName?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    fileName?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    fileName?: SortOrder
    rawText?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LeaseScalarRelationFilter = {
    is?: LeaseWhereInput
    isNot?: LeaseWhereInput
  }

  export type LeaseFieldOrderByRelevanceInput = {
    fields: LeaseFieldOrderByRelevanceFieldEnum | LeaseFieldOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LeaseFieldCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    confidence?: SortOrder
    sourceSnippet?: SortOrder
    sourceLocation?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
  }

  export type LeaseFieldAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type LeaseFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    confidence?: SortOrder
    sourceSnippet?: SortOrder
    sourceLocation?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
  }

  export type LeaseFieldMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    confidence?: SortOrder
    sourceSnippet?: SortOrder
    sourceLocation?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
    reviewedBy?: SortOrder
  }

  export type LeaseFieldSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LeaseFlagOrderByRelevanceInput = {
    fields: LeaseFlagOrderByRelevanceFieldEnum | LeaseFlagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LeaseFlagCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    kind?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    evidence?: SortOrder
    status?: SortOrder
  }

  export type LeaseFlagMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    kind?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    evidence?: SortOrder
    status?: SortOrder
  }

  export type LeaseFlagMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    kind?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    evidence?: SortOrder
    status?: SortOrder
  }

  export type RuleResultOrderByRelevanceInput = {
    fields: RuleResultOrderByRelevanceFieldEnum | RuleResultOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RuleResultLeaseIdRuleIdCompoundUniqueInput = {
    leaseId: string
    ruleId: string
  }

  export type RuleResultCountOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    ruleId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    severity?: SortOrder
    sourceRef?: SortOrder
    status2?: SortOrder
  }

  export type RuleResultMaxOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    ruleId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    severity?: SortOrder
    sourceRef?: SortOrder
    status2?: SortOrder
  }

  export type RuleResultMinOrderByAggregateInput = {
    id?: SortOrder
    leaseId?: SortOrder
    ruleId?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    severity?: SortOrder
    sourceRef?: SortOrder
    status2?: SortOrder
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type WorkOrderNullableScalarRelationFilter = {
    is?: WorkOrderWhereInput | null
    isNot?: WorkOrderWhereInput | null
  }

  export type IssueOrderByRelevanceInput = {
    fields: IssueOrderByRelevanceFieldEnum | IssueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    photoPaths?: SortOrder
    condition?: SortOrder
    conditionScore?: SortOrder
    contents?: SortOrder
    damages?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    photoPaths?: SortOrder
    condition?: SortOrder
    conditionScore?: SortOrder
    contents?: SortOrder
    damages?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    photoPaths?: SortOrder
    condition?: SortOrder
    conditionScore?: SortOrder
    contents?: SortOrder
    damages?: SortOrder
    createdAt?: SortOrder
  }

  export type IssueScalarRelationFilter = {
    is?: IssueWhereInput
    isNot?: IssueWhereInput
  }

  export type WorkOrderOrderByRelevanceInput = {
    fields: WorkOrderOrderByRelevanceFieldEnum | WorkOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkOrderCountOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    unitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
  }

  export type WorkOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    unitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
  }

  export type WorkOrderMinOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    unitId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    reviewedAt?: SortOrder
  }

  export type IssueCreateNestedManyWithoutUnitInput = {
    create?: XOR<IssueCreateWithoutUnitInput, IssueUncheckedCreateWithoutUnitInput> | IssueCreateWithoutUnitInput[] | IssueUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutUnitInput | IssueCreateOrConnectWithoutUnitInput[]
    createMany?: IssueCreateManyUnitInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<IssueCreateWithoutUnitInput, IssueUncheckedCreateWithoutUnitInput> | IssueCreateWithoutUnitInput[] | IssueUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutUnitInput | IssueCreateOrConnectWithoutUnitInput[]
    createMany?: IssueCreateManyUnitInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IssueUpdateManyWithoutUnitNestedInput = {
    create?: XOR<IssueCreateWithoutUnitInput, IssueUncheckedCreateWithoutUnitInput> | IssueCreateWithoutUnitInput[] | IssueUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutUnitInput | IssueCreateOrConnectWithoutUnitInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutUnitInput | IssueUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: IssueCreateManyUnitInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutUnitInput | IssueUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutUnitInput | IssueUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<IssueCreateWithoutUnitInput, IssueUncheckedCreateWithoutUnitInput> | IssueCreateWithoutUnitInput[] | IssueUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutUnitInput | IssueCreateOrConnectWithoutUnitInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutUnitInput | IssueUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: IssueCreateManyUnitInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutUnitInput | IssueUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutUnitInput | IssueUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput> | LeaseCreateWithoutUnitInput[] | LeaseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutUnitInput | LeaseCreateOrConnectWithoutUnitInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutUnitInput | LeaseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: LeaseCreateManyUnitInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutUnitInput | LeaseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutUnitInput | LeaseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UnitCreateNestedOneWithoutLeasesInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    connect?: UnitWhereUniqueInput
  }

  export type LeaseFieldCreateNestedManyWithoutLeaseInput = {
    create?: XOR<LeaseFieldCreateWithoutLeaseInput, LeaseFieldUncheckedCreateWithoutLeaseInput> | LeaseFieldCreateWithoutLeaseInput[] | LeaseFieldUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFieldCreateOrConnectWithoutLeaseInput | LeaseFieldCreateOrConnectWithoutLeaseInput[]
    createMany?: LeaseFieldCreateManyLeaseInputEnvelope
    connect?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
  }

  export type LeaseFlagCreateNestedManyWithoutLeaseInput = {
    create?: XOR<LeaseFlagCreateWithoutLeaseInput, LeaseFlagUncheckedCreateWithoutLeaseInput> | LeaseFlagCreateWithoutLeaseInput[] | LeaseFlagUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFlagCreateOrConnectWithoutLeaseInput | LeaseFlagCreateOrConnectWithoutLeaseInput[]
    createMany?: LeaseFlagCreateManyLeaseInputEnvelope
    connect?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
  }

  export type RuleResultCreateNestedManyWithoutLeaseInput = {
    create?: XOR<RuleResultCreateWithoutLeaseInput, RuleResultUncheckedCreateWithoutLeaseInput> | RuleResultCreateWithoutLeaseInput[] | RuleResultUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RuleResultCreateOrConnectWithoutLeaseInput | RuleResultCreateOrConnectWithoutLeaseInput[]
    createMany?: RuleResultCreateManyLeaseInputEnvelope
    connect?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
  }

  export type LeaseFieldUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<LeaseFieldCreateWithoutLeaseInput, LeaseFieldUncheckedCreateWithoutLeaseInput> | LeaseFieldCreateWithoutLeaseInput[] | LeaseFieldUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFieldCreateOrConnectWithoutLeaseInput | LeaseFieldCreateOrConnectWithoutLeaseInput[]
    createMany?: LeaseFieldCreateManyLeaseInputEnvelope
    connect?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
  }

  export type LeaseFlagUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<LeaseFlagCreateWithoutLeaseInput, LeaseFlagUncheckedCreateWithoutLeaseInput> | LeaseFlagCreateWithoutLeaseInput[] | LeaseFlagUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFlagCreateOrConnectWithoutLeaseInput | LeaseFlagCreateOrConnectWithoutLeaseInput[]
    createMany?: LeaseFlagCreateManyLeaseInputEnvelope
    connect?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
  }

  export type RuleResultUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<RuleResultCreateWithoutLeaseInput, RuleResultUncheckedCreateWithoutLeaseInput> | RuleResultCreateWithoutLeaseInput[] | RuleResultUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RuleResultCreateOrConnectWithoutLeaseInput | RuleResultCreateOrConnectWithoutLeaseInput[]
    createMany?: RuleResultCreateManyLeaseInputEnvelope
    connect?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UnitUpdateOneWithoutLeasesNestedInput = {
    create?: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutLeasesInput
    upsert?: UnitUpsertWithoutLeasesInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutLeasesInput, UnitUpdateWithoutLeasesInput>, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type LeaseFieldUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<LeaseFieldCreateWithoutLeaseInput, LeaseFieldUncheckedCreateWithoutLeaseInput> | LeaseFieldCreateWithoutLeaseInput[] | LeaseFieldUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFieldCreateOrConnectWithoutLeaseInput | LeaseFieldCreateOrConnectWithoutLeaseInput[]
    upsert?: LeaseFieldUpsertWithWhereUniqueWithoutLeaseInput | LeaseFieldUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: LeaseFieldCreateManyLeaseInputEnvelope
    set?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    disconnect?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    delete?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    connect?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    update?: LeaseFieldUpdateWithWhereUniqueWithoutLeaseInput | LeaseFieldUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: LeaseFieldUpdateManyWithWhereWithoutLeaseInput | LeaseFieldUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: LeaseFieldScalarWhereInput | LeaseFieldScalarWhereInput[]
  }

  export type LeaseFlagUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<LeaseFlagCreateWithoutLeaseInput, LeaseFlagUncheckedCreateWithoutLeaseInput> | LeaseFlagCreateWithoutLeaseInput[] | LeaseFlagUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFlagCreateOrConnectWithoutLeaseInput | LeaseFlagCreateOrConnectWithoutLeaseInput[]
    upsert?: LeaseFlagUpsertWithWhereUniqueWithoutLeaseInput | LeaseFlagUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: LeaseFlagCreateManyLeaseInputEnvelope
    set?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    disconnect?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    delete?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    connect?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    update?: LeaseFlagUpdateWithWhereUniqueWithoutLeaseInput | LeaseFlagUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: LeaseFlagUpdateManyWithWhereWithoutLeaseInput | LeaseFlagUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: LeaseFlagScalarWhereInput | LeaseFlagScalarWhereInput[]
  }

  export type RuleResultUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<RuleResultCreateWithoutLeaseInput, RuleResultUncheckedCreateWithoutLeaseInput> | RuleResultCreateWithoutLeaseInput[] | RuleResultUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RuleResultCreateOrConnectWithoutLeaseInput | RuleResultCreateOrConnectWithoutLeaseInput[]
    upsert?: RuleResultUpsertWithWhereUniqueWithoutLeaseInput | RuleResultUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: RuleResultCreateManyLeaseInputEnvelope
    set?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    disconnect?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    delete?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    connect?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    update?: RuleResultUpdateWithWhereUniqueWithoutLeaseInput | RuleResultUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: RuleResultUpdateManyWithWhereWithoutLeaseInput | RuleResultUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: RuleResultScalarWhereInput | RuleResultScalarWhereInput[]
  }

  export type LeaseFieldUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<LeaseFieldCreateWithoutLeaseInput, LeaseFieldUncheckedCreateWithoutLeaseInput> | LeaseFieldCreateWithoutLeaseInput[] | LeaseFieldUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFieldCreateOrConnectWithoutLeaseInput | LeaseFieldCreateOrConnectWithoutLeaseInput[]
    upsert?: LeaseFieldUpsertWithWhereUniqueWithoutLeaseInput | LeaseFieldUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: LeaseFieldCreateManyLeaseInputEnvelope
    set?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    disconnect?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    delete?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    connect?: LeaseFieldWhereUniqueInput | LeaseFieldWhereUniqueInput[]
    update?: LeaseFieldUpdateWithWhereUniqueWithoutLeaseInput | LeaseFieldUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: LeaseFieldUpdateManyWithWhereWithoutLeaseInput | LeaseFieldUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: LeaseFieldScalarWhereInput | LeaseFieldScalarWhereInput[]
  }

  export type LeaseFlagUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<LeaseFlagCreateWithoutLeaseInput, LeaseFlagUncheckedCreateWithoutLeaseInput> | LeaseFlagCreateWithoutLeaseInput[] | LeaseFlagUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: LeaseFlagCreateOrConnectWithoutLeaseInput | LeaseFlagCreateOrConnectWithoutLeaseInput[]
    upsert?: LeaseFlagUpsertWithWhereUniqueWithoutLeaseInput | LeaseFlagUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: LeaseFlagCreateManyLeaseInputEnvelope
    set?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    disconnect?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    delete?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    connect?: LeaseFlagWhereUniqueInput | LeaseFlagWhereUniqueInput[]
    update?: LeaseFlagUpdateWithWhereUniqueWithoutLeaseInput | LeaseFlagUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: LeaseFlagUpdateManyWithWhereWithoutLeaseInput | LeaseFlagUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: LeaseFlagScalarWhereInput | LeaseFlagScalarWhereInput[]
  }

  export type RuleResultUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<RuleResultCreateWithoutLeaseInput, RuleResultUncheckedCreateWithoutLeaseInput> | RuleResultCreateWithoutLeaseInput[] | RuleResultUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: RuleResultCreateOrConnectWithoutLeaseInput | RuleResultCreateOrConnectWithoutLeaseInput[]
    upsert?: RuleResultUpsertWithWhereUniqueWithoutLeaseInput | RuleResultUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: RuleResultCreateManyLeaseInputEnvelope
    set?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    disconnect?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    delete?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    connect?: RuleResultWhereUniqueInput | RuleResultWhereUniqueInput[]
    update?: RuleResultUpdateWithWhereUniqueWithoutLeaseInput | RuleResultUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: RuleResultUpdateManyWithWhereWithoutLeaseInput | RuleResultUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: RuleResultScalarWhereInput | RuleResultScalarWhereInput[]
  }

  export type LeaseCreateNestedOneWithoutFieldsInput = {
    create?: XOR<LeaseCreateWithoutFieldsInput, LeaseUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutFieldsInput
    connect?: LeaseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LeaseUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<LeaseCreateWithoutFieldsInput, LeaseUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutFieldsInput
    upsert?: LeaseUpsertWithoutFieldsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutFieldsInput, LeaseUpdateWithoutFieldsInput>, LeaseUncheckedUpdateWithoutFieldsInput>
  }

  export type LeaseCreateNestedOneWithoutFlagsInput = {
    create?: XOR<LeaseCreateWithoutFlagsInput, LeaseUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutFlagsInput
    connect?: LeaseWhereUniqueInput
  }

  export type LeaseUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<LeaseCreateWithoutFlagsInput, LeaseUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutFlagsInput
    upsert?: LeaseUpsertWithoutFlagsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutFlagsInput, LeaseUpdateWithoutFlagsInput>, LeaseUncheckedUpdateWithoutFlagsInput>
  }

  export type LeaseCreateNestedOneWithoutRuleResultsInput = {
    create?: XOR<LeaseCreateWithoutRuleResultsInput, LeaseUncheckedCreateWithoutRuleResultsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutRuleResultsInput
    connect?: LeaseWhereUniqueInput
  }

  export type LeaseUpdateOneRequiredWithoutRuleResultsNestedInput = {
    create?: XOR<LeaseCreateWithoutRuleResultsInput, LeaseUncheckedCreateWithoutRuleResultsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutRuleResultsInput
    upsert?: LeaseUpsertWithoutRuleResultsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutRuleResultsInput, LeaseUpdateWithoutRuleResultsInput>, LeaseUncheckedUpdateWithoutRuleResultsInput>
  }

  export type UnitCreateNestedOneWithoutIssuesInput = {
    create?: XOR<UnitCreateWithoutIssuesInput, UnitUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutIssuesInput
    connect?: UnitWhereUniqueInput
  }

  export type WorkOrderCreateNestedOneWithoutIssueInput = {
    create?: XOR<WorkOrderCreateWithoutIssueInput, WorkOrderUncheckedCreateWithoutIssueInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutIssueInput
    connect?: WorkOrderWhereUniqueInput
  }

  export type WorkOrderUncheckedCreateNestedOneWithoutIssueInput = {
    create?: XOR<WorkOrderCreateWithoutIssueInput, WorkOrderUncheckedCreateWithoutIssueInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutIssueInput
    connect?: WorkOrderWhereUniqueInput
  }

  export type UnitUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<UnitCreateWithoutIssuesInput, UnitUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutIssuesInput
    upsert?: UnitUpsertWithoutIssuesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutIssuesInput, UnitUpdateWithoutIssuesInput>, UnitUncheckedUpdateWithoutIssuesInput>
  }

  export type WorkOrderUpdateOneWithoutIssueNestedInput = {
    create?: XOR<WorkOrderCreateWithoutIssueInput, WorkOrderUncheckedCreateWithoutIssueInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutIssueInput
    upsert?: WorkOrderUpsertWithoutIssueInput
    disconnect?: WorkOrderWhereInput | boolean
    delete?: WorkOrderWhereInput | boolean
    connect?: WorkOrderWhereUniqueInput
    update?: XOR<XOR<WorkOrderUpdateToOneWithWhereWithoutIssueInput, WorkOrderUpdateWithoutIssueInput>, WorkOrderUncheckedUpdateWithoutIssueInput>
  }

  export type WorkOrderUncheckedUpdateOneWithoutIssueNestedInput = {
    create?: XOR<WorkOrderCreateWithoutIssueInput, WorkOrderUncheckedCreateWithoutIssueInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutIssueInput
    upsert?: WorkOrderUpsertWithoutIssueInput
    disconnect?: WorkOrderWhereInput | boolean
    delete?: WorkOrderWhereInput | boolean
    connect?: WorkOrderWhereUniqueInput
    update?: XOR<XOR<WorkOrderUpdateToOneWithWhereWithoutIssueInput, WorkOrderUpdateWithoutIssueInput>, WorkOrderUncheckedUpdateWithoutIssueInput>
  }

  export type IssueCreateNestedOneWithoutWorkOrderInput = {
    create?: XOR<IssueCreateWithoutWorkOrderInput, IssueUncheckedCreateWithoutWorkOrderInput>
    connectOrCreate?: IssueCreateOrConnectWithoutWorkOrderInput
    connect?: IssueWhereUniqueInput
  }

  export type IssueUpdateOneRequiredWithoutWorkOrderNestedInput = {
    create?: XOR<IssueCreateWithoutWorkOrderInput, IssueUncheckedCreateWithoutWorkOrderInput>
    connectOrCreate?: IssueCreateOrConnectWithoutWorkOrderInput
    upsert?: IssueUpsertWithoutWorkOrderInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutWorkOrderInput, IssueUpdateWithoutWorkOrderInput>, IssueUncheckedUpdateWithoutWorkOrderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IssueCreateWithoutUnitInput = {
    id?: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
    workOrder?: WorkOrderCreateNestedOneWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutUnitInput = {
    id?: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
    workOrder?: WorkOrderUncheckedCreateNestedOneWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutUnitInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutUnitInput, IssueUncheckedCreateWithoutUnitInput>
  }

  export type IssueCreateManyUnitInputEnvelope = {
    data: IssueCreateManyUnitInput | IssueCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutUnitInput = {
    id?: string
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    fields?: LeaseFieldCreateNestedManyWithoutLeaseInput
    flags?: LeaseFlagCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutUnitInput = {
    id?: string
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    fields?: LeaseFieldUncheckedCreateNestedManyWithoutLeaseInput
    flags?: LeaseFlagUncheckedCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseCreateManyUnitInputEnvelope = {
    data: LeaseCreateManyUnitInput | LeaseCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type IssueUpsertWithWhereUniqueWithoutUnitInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutUnitInput, IssueUncheckedUpdateWithoutUnitInput>
    create: XOR<IssueCreateWithoutUnitInput, IssueUncheckedCreateWithoutUnitInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutUnitInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutUnitInput, IssueUncheckedUpdateWithoutUnitInput>
  }

  export type IssueUpdateManyWithWhereWithoutUnitInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutUnitInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: StringFilter<"Issue"> | string
    unitId?: StringFilter<"Issue"> | string
    photoPaths?: StringFilter<"Issue"> | string
    condition?: StringFilter<"Issue"> | string
    conditionScore?: StringFilter<"Issue"> | string
    contents?: StringFilter<"Issue"> | string
    damages?: StringFilter<"Issue"> | string
    createdAt?: DateTimeFilter<"Issue"> | Date | string
  }

  export type LeaseUpsertWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
    create: XOR<LeaseCreateWithoutUnitInput, LeaseUncheckedCreateWithoutUnitInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutUnitInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutUnitInput, LeaseUncheckedUpdateWithoutUnitInput>
  }

  export type LeaseUpdateManyWithWhereWithoutUnitInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutUnitInput>
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: StringFilter<"Lease"> | string
    unitId?: StringNullableFilter<"Lease"> | string | null
    fileName?: StringFilter<"Lease"> | string
    rawText?: StringFilter<"Lease"> | string
    status?: StringFilter<"Lease"> | string
    createdAt?: DateTimeFilter<"Lease"> | Date | string
  }

  export type UnitCreateWithoutLeasesInput = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay?: string | null
    status: string
    issues?: IssueCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutLeasesInput = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay?: string | null
    status: string
    issues?: IssueUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutLeasesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
  }

  export type LeaseFieldCreateWithoutLeaseInput = {
    id?: string
    key: string
    value: string
    confidence: number
    sourceSnippet: string
    sourceLocation?: string | null
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type LeaseFieldUncheckedCreateWithoutLeaseInput = {
    id?: string
    key: string
    value: string
    confidence: number
    sourceSnippet: string
    sourceLocation?: string | null
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type LeaseFieldCreateOrConnectWithoutLeaseInput = {
    where: LeaseFieldWhereUniqueInput
    create: XOR<LeaseFieldCreateWithoutLeaseInput, LeaseFieldUncheckedCreateWithoutLeaseInput>
  }

  export type LeaseFieldCreateManyLeaseInputEnvelope = {
    data: LeaseFieldCreateManyLeaseInput | LeaseFieldCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type LeaseFlagCreateWithoutLeaseInput = {
    id?: string
    kind: string
    severity: string
    message: string
    evidence?: string | null
    status?: string
  }

  export type LeaseFlagUncheckedCreateWithoutLeaseInput = {
    id?: string
    kind: string
    severity: string
    message: string
    evidence?: string | null
    status?: string
  }

  export type LeaseFlagCreateOrConnectWithoutLeaseInput = {
    where: LeaseFlagWhereUniqueInput
    create: XOR<LeaseFlagCreateWithoutLeaseInput, LeaseFlagUncheckedCreateWithoutLeaseInput>
  }

  export type LeaseFlagCreateManyLeaseInputEnvelope = {
    data: LeaseFlagCreateManyLeaseInput | LeaseFlagCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type RuleResultCreateWithoutLeaseInput = {
    id?: string
    ruleId: string
    status: string
    reason: string
    severity: string
    sourceRef?: string | null
    status2?: string
  }

  export type RuleResultUncheckedCreateWithoutLeaseInput = {
    id?: string
    ruleId: string
    status: string
    reason: string
    severity: string
    sourceRef?: string | null
    status2?: string
  }

  export type RuleResultCreateOrConnectWithoutLeaseInput = {
    where: RuleResultWhereUniqueInput
    create: XOR<RuleResultCreateWithoutLeaseInput, RuleResultUncheckedCreateWithoutLeaseInput>
  }

  export type RuleResultCreateManyLeaseInputEnvelope = {
    data: RuleResultCreateManyLeaseInput | RuleResultCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithoutLeasesInput = {
    update: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
    create: XOR<UnitCreateWithoutLeasesInput, UnitUncheckedCreateWithoutLeasesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutLeasesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutLeasesInput, UnitUncheckedUpdateWithoutLeasesInput>
  }

  export type UnitUpdateWithoutLeasesInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    issues?: IssueUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutLeasesInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    issues?: IssueUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type LeaseFieldUpsertWithWhereUniqueWithoutLeaseInput = {
    where: LeaseFieldWhereUniqueInput
    update: XOR<LeaseFieldUpdateWithoutLeaseInput, LeaseFieldUncheckedUpdateWithoutLeaseInput>
    create: XOR<LeaseFieldCreateWithoutLeaseInput, LeaseFieldUncheckedCreateWithoutLeaseInput>
  }

  export type LeaseFieldUpdateWithWhereUniqueWithoutLeaseInput = {
    where: LeaseFieldWhereUniqueInput
    data: XOR<LeaseFieldUpdateWithoutLeaseInput, LeaseFieldUncheckedUpdateWithoutLeaseInput>
  }

  export type LeaseFieldUpdateManyWithWhereWithoutLeaseInput = {
    where: LeaseFieldScalarWhereInput
    data: XOR<LeaseFieldUpdateManyMutationInput, LeaseFieldUncheckedUpdateManyWithoutLeaseInput>
  }

  export type LeaseFieldScalarWhereInput = {
    AND?: LeaseFieldScalarWhereInput | LeaseFieldScalarWhereInput[]
    OR?: LeaseFieldScalarWhereInput[]
    NOT?: LeaseFieldScalarWhereInput | LeaseFieldScalarWhereInput[]
    id?: StringFilter<"LeaseField"> | string
    leaseId?: StringFilter<"LeaseField"> | string
    key?: StringFilter<"LeaseField"> | string
    value?: StringFilter<"LeaseField"> | string
    confidence?: FloatFilter<"LeaseField"> | number
    sourceSnippet?: StringFilter<"LeaseField"> | string
    sourceLocation?: StringNullableFilter<"LeaseField"> | string | null
    status?: StringFilter<"LeaseField"> | string
    reviewedAt?: DateTimeNullableFilter<"LeaseField"> | Date | string | null
    reviewedBy?: StringNullableFilter<"LeaseField"> | string | null
  }

  export type LeaseFlagUpsertWithWhereUniqueWithoutLeaseInput = {
    where: LeaseFlagWhereUniqueInput
    update: XOR<LeaseFlagUpdateWithoutLeaseInput, LeaseFlagUncheckedUpdateWithoutLeaseInput>
    create: XOR<LeaseFlagCreateWithoutLeaseInput, LeaseFlagUncheckedCreateWithoutLeaseInput>
  }

  export type LeaseFlagUpdateWithWhereUniqueWithoutLeaseInput = {
    where: LeaseFlagWhereUniqueInput
    data: XOR<LeaseFlagUpdateWithoutLeaseInput, LeaseFlagUncheckedUpdateWithoutLeaseInput>
  }

  export type LeaseFlagUpdateManyWithWhereWithoutLeaseInput = {
    where: LeaseFlagScalarWhereInput
    data: XOR<LeaseFlagUpdateManyMutationInput, LeaseFlagUncheckedUpdateManyWithoutLeaseInput>
  }

  export type LeaseFlagScalarWhereInput = {
    AND?: LeaseFlagScalarWhereInput | LeaseFlagScalarWhereInput[]
    OR?: LeaseFlagScalarWhereInput[]
    NOT?: LeaseFlagScalarWhereInput | LeaseFlagScalarWhereInput[]
    id?: StringFilter<"LeaseFlag"> | string
    leaseId?: StringFilter<"LeaseFlag"> | string
    kind?: StringFilter<"LeaseFlag"> | string
    severity?: StringFilter<"LeaseFlag"> | string
    message?: StringFilter<"LeaseFlag"> | string
    evidence?: StringNullableFilter<"LeaseFlag"> | string | null
    status?: StringFilter<"LeaseFlag"> | string
  }

  export type RuleResultUpsertWithWhereUniqueWithoutLeaseInput = {
    where: RuleResultWhereUniqueInput
    update: XOR<RuleResultUpdateWithoutLeaseInput, RuleResultUncheckedUpdateWithoutLeaseInput>
    create: XOR<RuleResultCreateWithoutLeaseInput, RuleResultUncheckedCreateWithoutLeaseInput>
  }

  export type RuleResultUpdateWithWhereUniqueWithoutLeaseInput = {
    where: RuleResultWhereUniqueInput
    data: XOR<RuleResultUpdateWithoutLeaseInput, RuleResultUncheckedUpdateWithoutLeaseInput>
  }

  export type RuleResultUpdateManyWithWhereWithoutLeaseInput = {
    where: RuleResultScalarWhereInput
    data: XOR<RuleResultUpdateManyMutationInput, RuleResultUncheckedUpdateManyWithoutLeaseInput>
  }

  export type RuleResultScalarWhereInput = {
    AND?: RuleResultScalarWhereInput | RuleResultScalarWhereInput[]
    OR?: RuleResultScalarWhereInput[]
    NOT?: RuleResultScalarWhereInput | RuleResultScalarWhereInput[]
    id?: StringFilter<"RuleResult"> | string
    leaseId?: StringFilter<"RuleResult"> | string
    ruleId?: StringFilter<"RuleResult"> | string
    status?: StringFilter<"RuleResult"> | string
    reason?: StringFilter<"RuleResult"> | string
    severity?: StringFilter<"RuleResult"> | string
    sourceRef?: StringNullableFilter<"RuleResult"> | string | null
    status2?: StringFilter<"RuleResult"> | string
  }

  export type LeaseCreateWithoutFieldsInput = {
    id?: string
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    unit?: UnitCreateNestedOneWithoutLeasesInput
    flags?: LeaseFlagCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutFieldsInput = {
    id?: string
    unitId?: string | null
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    flags?: LeaseFlagUncheckedCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutFieldsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutFieldsInput, LeaseUncheckedCreateWithoutFieldsInput>
  }

  export type LeaseUpsertWithoutFieldsInput = {
    update: XOR<LeaseUpdateWithoutFieldsInput, LeaseUncheckedUpdateWithoutFieldsInput>
    create: XOR<LeaseCreateWithoutFieldsInput, LeaseUncheckedCreateWithoutFieldsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutFieldsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutFieldsInput, LeaseUncheckedUpdateWithoutFieldsInput>
  }

  export type LeaseUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutLeasesNestedInput
    flags?: LeaseFlagUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: LeaseFlagUncheckedUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateWithoutFlagsInput = {
    id?: string
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    unit?: UnitCreateNestedOneWithoutLeasesInput
    fields?: LeaseFieldCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutFlagsInput = {
    id?: string
    unitId?: string | null
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    fields?: LeaseFieldUncheckedCreateNestedManyWithoutLeaseInput
    ruleResults?: RuleResultUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutFlagsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutFlagsInput, LeaseUncheckedCreateWithoutFlagsInput>
  }

  export type LeaseUpsertWithoutFlagsInput = {
    update: XOR<LeaseUpdateWithoutFlagsInput, LeaseUncheckedUpdateWithoutFlagsInput>
    create: XOR<LeaseCreateWithoutFlagsInput, LeaseUncheckedCreateWithoutFlagsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutFlagsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutFlagsInput, LeaseUncheckedUpdateWithoutFlagsInput>
  }

  export type LeaseUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutLeasesNestedInput
    fields?: LeaseFieldUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: LeaseFieldUncheckedUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateWithoutRuleResultsInput = {
    id?: string
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    unit?: UnitCreateNestedOneWithoutLeasesInput
    fields?: LeaseFieldCreateNestedManyWithoutLeaseInput
    flags?: LeaseFlagCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutRuleResultsInput = {
    id?: string
    unitId?: string | null
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
    fields?: LeaseFieldUncheckedCreateNestedManyWithoutLeaseInput
    flags?: LeaseFlagUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutRuleResultsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutRuleResultsInput, LeaseUncheckedCreateWithoutRuleResultsInput>
  }

  export type LeaseUpsertWithoutRuleResultsInput = {
    update: XOR<LeaseUpdateWithoutRuleResultsInput, LeaseUncheckedUpdateWithoutRuleResultsInput>
    create: XOR<LeaseCreateWithoutRuleResultsInput, LeaseUncheckedCreateWithoutRuleResultsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutRuleResultsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutRuleResultsInput, LeaseUncheckedUpdateWithoutRuleResultsInput>
  }

  export type LeaseUpdateWithoutRuleResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutLeasesNestedInput
    fields?: LeaseFieldUpdateManyWithoutLeaseNestedInput
    flags?: LeaseFlagUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutRuleResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: LeaseFieldUncheckedUpdateManyWithoutLeaseNestedInput
    flags?: LeaseFlagUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type UnitCreateWithoutIssuesInput = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay?: string | null
    status: string
    leases?: LeaseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutIssuesInput = {
    unitId: string
    buildingId: string
    propertyId: string
    label: string
    type: string
    areaSqm: number
    parkingBay?: string | null
    status: string
    leases?: LeaseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutIssuesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutIssuesInput, UnitUncheckedCreateWithoutIssuesInput>
  }

  export type WorkOrderCreateWithoutIssueInput = {
    id?: string
    unitId: string
    title: string
    description: string
    status?: string
    reviewedAt?: Date | string | null
  }

  export type WorkOrderUncheckedCreateWithoutIssueInput = {
    id?: string
    unitId: string
    title: string
    description: string
    status?: string
    reviewedAt?: Date | string | null
  }

  export type WorkOrderCreateOrConnectWithoutIssueInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutIssueInput, WorkOrderUncheckedCreateWithoutIssueInput>
  }

  export type UnitUpsertWithoutIssuesInput = {
    update: XOR<UnitUpdateWithoutIssuesInput, UnitUncheckedUpdateWithoutIssuesInput>
    create: XOR<UnitCreateWithoutIssuesInput, UnitUncheckedCreateWithoutIssuesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutIssuesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutIssuesInput, UnitUncheckedUpdateWithoutIssuesInput>
  }

  export type UnitUpdateWithoutIssuesInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutIssuesInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    buildingId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    areaSqm?: IntFieldUpdateOperationsInput | number
    parkingBay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type WorkOrderUpsertWithoutIssueInput = {
    update: XOR<WorkOrderUpdateWithoutIssueInput, WorkOrderUncheckedUpdateWithoutIssueInput>
    create: XOR<WorkOrderCreateWithoutIssueInput, WorkOrderUncheckedCreateWithoutIssueInput>
    where?: WorkOrderWhereInput
  }

  export type WorkOrderUpdateToOneWithWhereWithoutIssueInput = {
    where?: WorkOrderWhereInput
    data: XOR<WorkOrderUpdateWithoutIssueInput, WorkOrderUncheckedUpdateWithoutIssueInput>
  }

  export type WorkOrderUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkOrderUncheckedUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssueCreateWithoutWorkOrderInput = {
    id?: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateWithoutWorkOrderInput = {
    id?: string
    unitId: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
  }

  export type IssueCreateOrConnectWithoutWorkOrderInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutWorkOrderInput, IssueUncheckedCreateWithoutWorkOrderInput>
  }

  export type IssueUpsertWithoutWorkOrderInput = {
    update: XOR<IssueUpdateWithoutWorkOrderInput, IssueUncheckedUpdateWithoutWorkOrderInput>
    create: XOR<IssueCreateWithoutWorkOrderInput, IssueUncheckedCreateWithoutWorkOrderInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutWorkOrderInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutWorkOrderInput, IssueUncheckedUpdateWithoutWorkOrderInput>
  }

  export type IssueUpdateWithoutWorkOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateWithoutWorkOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateManyUnitInput = {
    id?: string
    photoPaths: string
    condition: string
    conditionScore: string
    contents: string
    damages: string
    createdAt?: Date | string
  }

  export type LeaseCreateManyUnitInput = {
    id?: string
    fileName: string
    rawText: string
    status?: string
    createdAt?: Date | string
  }

  export type IssueUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOrder?: WorkOrderUpdateOneWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOrder?: WorkOrderUncheckedUpdateOneWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    photoPaths?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    conditionScore?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    damages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: LeaseFieldUpdateManyWithoutLeaseNestedInput
    flags?: LeaseFlagUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: LeaseFieldUncheckedUpdateManyWithoutLeaseNestedInput
    flags?: LeaseFlagUncheckedUpdateManyWithoutLeaseNestedInput
    ruleResults?: RuleResultUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseFieldCreateManyLeaseInput = {
    id?: string
    key: string
    value: string
    confidence: number
    sourceSnippet: string
    sourceLocation?: string | null
    status?: string
    reviewedAt?: Date | string | null
    reviewedBy?: string | null
  }

  export type LeaseFlagCreateManyLeaseInput = {
    id?: string
    kind: string
    severity: string
    message: string
    evidence?: string | null
    status?: string
  }

  export type RuleResultCreateManyLeaseInput = {
    id?: string
    ruleId: string
    status: string
    reason: string
    severity: string
    sourceRef?: string | null
    status2?: string
  }

  export type LeaseFieldUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    sourceSnippet?: StringFieldUpdateOperationsInput | string
    sourceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseFieldUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    sourceSnippet?: StringFieldUpdateOperationsInput | string
    sourceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseFieldUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    sourceSnippet?: StringFieldUpdateOperationsInput | string
    sourceLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaseFlagUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseFlagUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseFlagUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RuleResultUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceRef?: NullableStringFieldUpdateOperationsInput | string | null
    status2?: StringFieldUpdateOperationsInput | string
  }

  export type RuleResultUncheckedUpdateWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceRef?: NullableStringFieldUpdateOperationsInput | string | null
    status2?: StringFieldUpdateOperationsInput | string
  }

  export type RuleResultUncheckedUpdateManyWithoutLeaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceRef?: NullableStringFieldUpdateOperationsInput | string | null
    status2?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}