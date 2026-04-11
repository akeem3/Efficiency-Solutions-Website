
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
 * Model BrandingCategory
 * 
 */
export type BrandingCategory = $Result.DefaultSelection<Prisma.$BrandingCategoryPayload>
/**
 * Model BrandingProduct
 * 
 */
export type BrandingProduct = $Result.DefaultSelection<Prisma.$BrandingProductPayload>
/**
 * Model LogisticsCategory
 * 
 */
export type LogisticsCategory = $Result.DefaultSelection<Prisma.$LogisticsCategoryPayload>
/**
 * Model LogisticsVehicle
 * 
 */
export type LogisticsVehicle = $Result.DefaultSelection<Prisma.$LogisticsVehiclePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BrandingCategories
 * const brandingCategories = await prisma.brandingCategory.findMany()
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
   * // Fetch zero or more BrandingCategories
   * const brandingCategories = await prisma.brandingCategory.findMany()
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
   * `prisma.brandingCategory`: Exposes CRUD operations for the **BrandingCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandingCategories
    * const brandingCategories = await prisma.brandingCategory.findMany()
    * ```
    */
  get brandingCategory(): Prisma.BrandingCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brandingProduct`: Exposes CRUD operations for the **BrandingProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandingProducts
    * const brandingProducts = await prisma.brandingProduct.findMany()
    * ```
    */
  get brandingProduct(): Prisma.BrandingProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logisticsCategory`: Exposes CRUD operations for the **LogisticsCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogisticsCategories
    * const logisticsCategories = await prisma.logisticsCategory.findMany()
    * ```
    */
  get logisticsCategory(): Prisma.LogisticsCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logisticsVehicle`: Exposes CRUD operations for the **LogisticsVehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogisticsVehicles
    * const logisticsVehicles = await prisma.logisticsVehicle.findMany()
    * ```
    */
  get logisticsVehicle(): Prisma.LogisticsVehicleDelegate<ExtArgs, ClientOptions>;
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
    BrandingCategory: 'BrandingCategory',
    BrandingProduct: 'BrandingProduct',
    LogisticsCategory: 'LogisticsCategory',
    LogisticsVehicle: 'LogisticsVehicle'
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
      modelProps: "brandingCategory" | "brandingProduct" | "logisticsCategory" | "logisticsVehicle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BrandingCategory: {
        payload: Prisma.$BrandingCategoryPayload<ExtArgs>
        fields: Prisma.BrandingCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandingCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandingCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>
          }
          findFirst: {
            args: Prisma.BrandingCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandingCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>
          }
          findMany: {
            args: Prisma.BrandingCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>[]
          }
          create: {
            args: Prisma.BrandingCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>
          }
          createMany: {
            args: Prisma.BrandingCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandingCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>[]
          }
          delete: {
            args: Prisma.BrandingCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>
          }
          update: {
            args: Prisma.BrandingCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BrandingCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandingCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandingCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>[]
          }
          upsert: {
            args: Prisma.BrandingCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingCategoryPayload>
          }
          aggregate: {
            args: Prisma.BrandingCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrandingCategory>
          }
          groupBy: {
            args: Prisma.BrandingCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandingCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandingCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BrandingCategoryCountAggregateOutputType> | number
          }
        }
      }
      BrandingProduct: {
        payload: Prisma.$BrandingProductPayload<ExtArgs>
        fields: Prisma.BrandingProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandingProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandingProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>
          }
          findFirst: {
            args: Prisma.BrandingProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandingProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>
          }
          findMany: {
            args: Prisma.BrandingProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>[]
          }
          create: {
            args: Prisma.BrandingProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>
          }
          createMany: {
            args: Prisma.BrandingProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandingProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>[]
          }
          delete: {
            args: Prisma.BrandingProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>
          }
          update: {
            args: Prisma.BrandingProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>
          }
          deleteMany: {
            args: Prisma.BrandingProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandingProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandingProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>[]
          }
          upsert: {
            args: Prisma.BrandingProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandingProductPayload>
          }
          aggregate: {
            args: Prisma.BrandingProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrandingProduct>
          }
          groupBy: {
            args: Prisma.BrandingProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandingProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandingProductCountArgs<ExtArgs>
            result: $Utils.Optional<BrandingProductCountAggregateOutputType> | number
          }
        }
      }
      LogisticsCategory: {
        payload: Prisma.$LogisticsCategoryPayload<ExtArgs>
        fields: Prisma.LogisticsCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogisticsCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogisticsCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>
          }
          findFirst: {
            args: Prisma.LogisticsCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogisticsCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>
          }
          findMany: {
            args: Prisma.LogisticsCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>[]
          }
          create: {
            args: Prisma.LogisticsCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>
          }
          createMany: {
            args: Prisma.LogisticsCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogisticsCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>[]
          }
          delete: {
            args: Prisma.LogisticsCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>
          }
          update: {
            args: Prisma.LogisticsCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>
          }
          deleteMany: {
            args: Prisma.LogisticsCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogisticsCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogisticsCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>[]
          }
          upsert: {
            args: Prisma.LogisticsCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsCategoryPayload>
          }
          aggregate: {
            args: Prisma.LogisticsCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogisticsCategory>
          }
          groupBy: {
            args: Prisma.LogisticsCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogisticsCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogisticsCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<LogisticsCategoryCountAggregateOutputType> | number
          }
        }
      }
      LogisticsVehicle: {
        payload: Prisma.$LogisticsVehiclePayload<ExtArgs>
        fields: Prisma.LogisticsVehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogisticsVehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogisticsVehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>
          }
          findFirst: {
            args: Prisma.LogisticsVehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogisticsVehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>
          }
          findMany: {
            args: Prisma.LogisticsVehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>[]
          }
          create: {
            args: Prisma.LogisticsVehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>
          }
          createMany: {
            args: Prisma.LogisticsVehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogisticsVehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>[]
          }
          delete: {
            args: Prisma.LogisticsVehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>
          }
          update: {
            args: Prisma.LogisticsVehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>
          }
          deleteMany: {
            args: Prisma.LogisticsVehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogisticsVehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogisticsVehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>[]
          }
          upsert: {
            args: Prisma.LogisticsVehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsVehiclePayload>
          }
          aggregate: {
            args: Prisma.LogisticsVehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogisticsVehicle>
          }
          groupBy: {
            args: Prisma.LogisticsVehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogisticsVehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogisticsVehicleCountArgs<ExtArgs>
            result: $Utils.Optional<LogisticsVehicleCountAggregateOutputType> | number
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
    brandingCategory?: BrandingCategoryOmit
    brandingProduct?: BrandingProductOmit
    logisticsCategory?: LogisticsCategoryOmit
    logisticsVehicle?: LogisticsVehicleOmit
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
   * Count Type BrandingCategoryCountOutputType
   */

  export type BrandingCategoryCountOutputType = {
    products: number
  }

  export type BrandingCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandingCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandingCategoryCountOutputType without action
   */
  export type BrandingCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategoryCountOutputType
     */
    select?: BrandingCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandingCategoryCountOutputType without action
   */
  export type BrandingCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandingProductWhereInput
  }


  /**
   * Count Type LogisticsCategoryCountOutputType
   */

  export type LogisticsCategoryCountOutputType = {
    vehicles: number
  }

  export type LogisticsCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | LogisticsCategoryCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes
  /**
   * LogisticsCategoryCountOutputType without action
   */
  export type LogisticsCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategoryCountOutputType
     */
    select?: LogisticsCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LogisticsCategoryCountOutputType without action
   */
  export type LogisticsCategoryCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogisticsVehicleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BrandingCategory
   */

  export type AggregateBrandingCategory = {
    _count: BrandingCategoryCountAggregateOutputType | null
    _min: BrandingCategoryMinAggregateOutputType | null
    _max: BrandingCategoryMaxAggregateOutputType | null
  }

  export type BrandingCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandingCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandingCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandingCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandingCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandingCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandingCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandingCategory to aggregate.
     */
    where?: BrandingCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingCategories to fetch.
     */
    orderBy?: BrandingCategoryOrderByWithRelationInput | BrandingCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandingCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandingCategories
    **/
    _count?: true | BrandingCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandingCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandingCategoryMaxAggregateInputType
  }

  export type GetBrandingCategoryAggregateType<T extends BrandingCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandingCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandingCategory[P]>
      : GetScalarType<T[P], AggregateBrandingCategory[P]>
  }




  export type BrandingCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandingCategoryWhereInput
    orderBy?: BrandingCategoryOrderByWithAggregationInput | BrandingCategoryOrderByWithAggregationInput[]
    by: BrandingCategoryScalarFieldEnum[] | BrandingCategoryScalarFieldEnum
    having?: BrandingCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandingCategoryCountAggregateInputType | true
    _min?: BrandingCategoryMinAggregateInputType
    _max?: BrandingCategoryMaxAggregateInputType
  }

  export type BrandingCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BrandingCategoryCountAggregateOutputType | null
    _min: BrandingCategoryMinAggregateOutputType | null
    _max: BrandingCategoryMaxAggregateOutputType | null
  }

  type GetBrandingCategoryGroupByPayload<T extends BrandingCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandingCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandingCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandingCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BrandingCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BrandingCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | BrandingCategory$productsArgs<ExtArgs>
    _count?: boolean | BrandingCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brandingCategory"]>

  export type BrandingCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brandingCategory"]>

  export type BrandingCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brandingCategory"]>

  export type BrandingCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandingCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["brandingCategory"]>
  export type BrandingCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandingCategory$productsArgs<ExtArgs>
    _count?: boolean | BrandingCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandingCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandingCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandingCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandingCategory"
    objects: {
      products: Prisma.$BrandingProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brandingCategory"]>
    composites: {}
  }

  type BrandingCategoryGetPayload<S extends boolean | null | undefined | BrandingCategoryDefaultArgs> = $Result.GetResult<Prisma.$BrandingCategoryPayload, S>

  type BrandingCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandingCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandingCategoryCountAggregateInputType | true
    }

  export interface BrandingCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandingCategory'], meta: { name: 'BrandingCategory' } }
    /**
     * Find zero or one BrandingCategory that matches the filter.
     * @param {BrandingCategoryFindUniqueArgs} args - Arguments to find a BrandingCategory
     * @example
     * // Get one BrandingCategory
     * const brandingCategory = await prisma.brandingCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandingCategoryFindUniqueArgs>(args: SelectSubset<T, BrandingCategoryFindUniqueArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrandingCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandingCategoryFindUniqueOrThrowArgs} args - Arguments to find a BrandingCategory
     * @example
     * // Get one BrandingCategory
     * const brandingCategory = await prisma.brandingCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandingCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandingCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrandingCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingCategoryFindFirstArgs} args - Arguments to find a BrandingCategory
     * @example
     * // Get one BrandingCategory
     * const brandingCategory = await prisma.brandingCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandingCategoryFindFirstArgs>(args?: SelectSubset<T, BrandingCategoryFindFirstArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrandingCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingCategoryFindFirstOrThrowArgs} args - Arguments to find a BrandingCategory
     * @example
     * // Get one BrandingCategory
     * const brandingCategory = await prisma.brandingCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandingCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandingCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrandingCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandingCategories
     * const brandingCategories = await prisma.brandingCategory.findMany()
     * 
     * // Get first 10 BrandingCategories
     * const brandingCategories = await prisma.brandingCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandingCategoryWithIdOnly = await prisma.brandingCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandingCategoryFindManyArgs>(args?: SelectSubset<T, BrandingCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrandingCategory.
     * @param {BrandingCategoryCreateArgs} args - Arguments to create a BrandingCategory.
     * @example
     * // Create one BrandingCategory
     * const BrandingCategory = await prisma.brandingCategory.create({
     *   data: {
     *     // ... data to create a BrandingCategory
     *   }
     * })
     * 
     */
    create<T extends BrandingCategoryCreateArgs>(args: SelectSubset<T, BrandingCategoryCreateArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrandingCategories.
     * @param {BrandingCategoryCreateManyArgs} args - Arguments to create many BrandingCategories.
     * @example
     * // Create many BrandingCategories
     * const brandingCategory = await prisma.brandingCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandingCategoryCreateManyArgs>(args?: SelectSubset<T, BrandingCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrandingCategories and returns the data saved in the database.
     * @param {BrandingCategoryCreateManyAndReturnArgs} args - Arguments to create many BrandingCategories.
     * @example
     * // Create many BrandingCategories
     * const brandingCategory = await prisma.brandingCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrandingCategories and only return the `id`
     * const brandingCategoryWithIdOnly = await prisma.brandingCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandingCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandingCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrandingCategory.
     * @param {BrandingCategoryDeleteArgs} args - Arguments to delete one BrandingCategory.
     * @example
     * // Delete one BrandingCategory
     * const BrandingCategory = await prisma.brandingCategory.delete({
     *   where: {
     *     // ... filter to delete one BrandingCategory
     *   }
     * })
     * 
     */
    delete<T extends BrandingCategoryDeleteArgs>(args: SelectSubset<T, BrandingCategoryDeleteArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrandingCategory.
     * @param {BrandingCategoryUpdateArgs} args - Arguments to update one BrandingCategory.
     * @example
     * // Update one BrandingCategory
     * const brandingCategory = await prisma.brandingCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandingCategoryUpdateArgs>(args: SelectSubset<T, BrandingCategoryUpdateArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrandingCategories.
     * @param {BrandingCategoryDeleteManyArgs} args - Arguments to filter BrandingCategories to delete.
     * @example
     * // Delete a few BrandingCategories
     * const { count } = await prisma.brandingCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandingCategoryDeleteManyArgs>(args?: SelectSubset<T, BrandingCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandingCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandingCategories
     * const brandingCategory = await prisma.brandingCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandingCategoryUpdateManyArgs>(args: SelectSubset<T, BrandingCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandingCategories and returns the data updated in the database.
     * @param {BrandingCategoryUpdateManyAndReturnArgs} args - Arguments to update many BrandingCategories.
     * @example
     * // Update many BrandingCategories
     * const brandingCategory = await prisma.brandingCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrandingCategories and only return the `id`
     * const brandingCategoryWithIdOnly = await prisma.brandingCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandingCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandingCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrandingCategory.
     * @param {BrandingCategoryUpsertArgs} args - Arguments to update or create a BrandingCategory.
     * @example
     * // Update or create a BrandingCategory
     * const brandingCategory = await prisma.brandingCategory.upsert({
     *   create: {
     *     // ... data to create a BrandingCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandingCategory we want to update
     *   }
     * })
     */
    upsert<T extends BrandingCategoryUpsertArgs>(args: SelectSubset<T, BrandingCategoryUpsertArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrandingCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingCategoryCountArgs} args - Arguments to filter BrandingCategories to count.
     * @example
     * // Count the number of BrandingCategories
     * const count = await prisma.brandingCategory.count({
     *   where: {
     *     // ... the filter for the BrandingCategories we want to count
     *   }
     * })
    **/
    count<T extends BrandingCategoryCountArgs>(
      args?: Subset<T, BrandingCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandingCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandingCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandingCategoryAggregateArgs>(args: Subset<T, BrandingCategoryAggregateArgs>): Prisma.PrismaPromise<GetBrandingCategoryAggregateType<T>>

    /**
     * Group by BrandingCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingCategoryGroupByArgs} args - Group by arguments.
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
      T extends BrandingCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandingCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BrandingCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandingCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandingCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandingCategory model
   */
  readonly fields: BrandingCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandingCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandingCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends BrandingCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, BrandingCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BrandingCategory model
   */
  interface BrandingCategoryFieldRefs {
    readonly id: FieldRef<"BrandingCategory", 'String'>
    readonly name: FieldRef<"BrandingCategory", 'String'>
    readonly createdAt: FieldRef<"BrandingCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BrandingCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BrandingCategory findUnique
   */
  export type BrandingCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandingCategory to fetch.
     */
    where: BrandingCategoryWhereUniqueInput
  }

  /**
   * BrandingCategory findUniqueOrThrow
   */
  export type BrandingCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandingCategory to fetch.
     */
    where: BrandingCategoryWhereUniqueInput
  }

  /**
   * BrandingCategory findFirst
   */
  export type BrandingCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandingCategory to fetch.
     */
    where?: BrandingCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingCategories to fetch.
     */
    orderBy?: BrandingCategoryOrderByWithRelationInput | BrandingCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandingCategories.
     */
    cursor?: BrandingCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandingCategories.
     */
    distinct?: BrandingCategoryScalarFieldEnum | BrandingCategoryScalarFieldEnum[]
  }

  /**
   * BrandingCategory findFirstOrThrow
   */
  export type BrandingCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandingCategory to fetch.
     */
    where?: BrandingCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingCategories to fetch.
     */
    orderBy?: BrandingCategoryOrderByWithRelationInput | BrandingCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandingCategories.
     */
    cursor?: BrandingCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandingCategories.
     */
    distinct?: BrandingCategoryScalarFieldEnum | BrandingCategoryScalarFieldEnum[]
  }

  /**
   * BrandingCategory findMany
   */
  export type BrandingCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BrandingCategories to fetch.
     */
    where?: BrandingCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingCategories to fetch.
     */
    orderBy?: BrandingCategoryOrderByWithRelationInput | BrandingCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandingCategories.
     */
    cursor?: BrandingCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingCategories.
     */
    skip?: number
    distinct?: BrandingCategoryScalarFieldEnum | BrandingCategoryScalarFieldEnum[]
  }

  /**
   * BrandingCategory create
   */
  export type BrandingCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandingCategory.
     */
    data: XOR<BrandingCategoryCreateInput, BrandingCategoryUncheckedCreateInput>
  }

  /**
   * BrandingCategory createMany
   */
  export type BrandingCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandingCategories.
     */
    data: BrandingCategoryCreateManyInput | BrandingCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrandingCategory createManyAndReturn
   */
  export type BrandingCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many BrandingCategories.
     */
    data: BrandingCategoryCreateManyInput | BrandingCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrandingCategory update
   */
  export type BrandingCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandingCategory.
     */
    data: XOR<BrandingCategoryUpdateInput, BrandingCategoryUncheckedUpdateInput>
    /**
     * Choose, which BrandingCategory to update.
     */
    where: BrandingCategoryWhereUniqueInput
  }

  /**
   * BrandingCategory updateMany
   */
  export type BrandingCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandingCategories.
     */
    data: XOR<BrandingCategoryUpdateManyMutationInput, BrandingCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BrandingCategories to update
     */
    where?: BrandingCategoryWhereInput
    /**
     * Limit how many BrandingCategories to update.
     */
    limit?: number
  }

  /**
   * BrandingCategory updateManyAndReturn
   */
  export type BrandingCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * The data used to update BrandingCategories.
     */
    data: XOR<BrandingCategoryUpdateManyMutationInput, BrandingCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BrandingCategories to update
     */
    where?: BrandingCategoryWhereInput
    /**
     * Limit how many BrandingCategories to update.
     */
    limit?: number
  }

  /**
   * BrandingCategory upsert
   */
  export type BrandingCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandingCategory to update in case it exists.
     */
    where: BrandingCategoryWhereUniqueInput
    /**
     * In case the BrandingCategory found by the `where` argument doesn't exist, create a new BrandingCategory with this data.
     */
    create: XOR<BrandingCategoryCreateInput, BrandingCategoryUncheckedCreateInput>
    /**
     * In case the BrandingCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandingCategoryUpdateInput, BrandingCategoryUncheckedUpdateInput>
  }

  /**
   * BrandingCategory delete
   */
  export type BrandingCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    /**
     * Filter which BrandingCategory to delete.
     */
    where: BrandingCategoryWhereUniqueInput
  }

  /**
   * BrandingCategory deleteMany
   */
  export type BrandingCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandingCategories to delete
     */
    where?: BrandingCategoryWhereInput
    /**
     * Limit how many BrandingCategories to delete.
     */
    limit?: number
  }

  /**
   * BrandingCategory.products
   */
  export type BrandingCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    where?: BrandingProductWhereInput
    orderBy?: BrandingProductOrderByWithRelationInput | BrandingProductOrderByWithRelationInput[]
    cursor?: BrandingProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandingProductScalarFieldEnum | BrandingProductScalarFieldEnum[]
  }

  /**
   * BrandingCategory without action
   */
  export type BrandingCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
  }


  /**
   * Model BrandingProduct
   */

  export type AggregateBrandingProduct = {
    _count: BrandingProductCountAggregateOutputType | null
    _avg: BrandingProductAvgAggregateOutputType | null
    _sum: BrandingProductSumAggregateOutputType | null
    _min: BrandingProductMinAggregateOutputType | null
    _max: BrandingProductMaxAggregateOutputType | null
  }

  export type BrandingProductAvgAggregateOutputType = {
    price: number | null
  }

  export type BrandingProductSumAggregateOutputType = {
    price: number | null
  }

  export type BrandingProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    categoryId: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandingProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    categoryId: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandingProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    category: number
    categoryId: number
    imageUrl: number
    imageUrls: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandingProductAvgAggregateInputType = {
    price?: true
  }

  export type BrandingProductSumAggregateInputType = {
    price?: true
  }

  export type BrandingProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    categoryId?: true
    imageUrl?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandingProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    categoryId?: true
    imageUrl?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandingProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    categoryId?: true
    imageUrl?: true
    imageUrls?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandingProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandingProduct to aggregate.
     */
    where?: BrandingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingProducts to fetch.
     */
    orderBy?: BrandingProductOrderByWithRelationInput | BrandingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandingProducts
    **/
    _count?: true | BrandingProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandingProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandingProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandingProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandingProductMaxAggregateInputType
  }

  export type GetBrandingProductAggregateType<T extends BrandingProductAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandingProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandingProduct[P]>
      : GetScalarType<T[P], AggregateBrandingProduct[P]>
  }




  export type BrandingProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandingProductWhereInput
    orderBy?: BrandingProductOrderByWithAggregationInput | BrandingProductOrderByWithAggregationInput[]
    by: BrandingProductScalarFieldEnum[] | BrandingProductScalarFieldEnum
    having?: BrandingProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandingProductCountAggregateInputType | true
    _avg?: BrandingProductAvgAggregateInputType
    _sum?: BrandingProductSumAggregateInputType
    _min?: BrandingProductMinAggregateInputType
    _max?: BrandingProductMaxAggregateInputType
  }

  export type BrandingProductGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number | null
    category: string
    categoryId: string | null
    imageUrl: string
    imageUrls: string[]
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: BrandingProductCountAggregateOutputType | null
    _avg: BrandingProductAvgAggregateOutputType | null
    _sum: BrandingProductSumAggregateOutputType | null
    _min: BrandingProductMinAggregateOutputType | null
    _max: BrandingProductMaxAggregateOutputType | null
  }

  type GetBrandingProductGroupByPayload<T extends BrandingProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandingProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandingProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandingProductGroupByOutputType[P]>
            : GetScalarType<T[P], BrandingProductGroupByOutputType[P]>
        }
      >
    >


  export type BrandingProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryRel?: boolean | BrandingProduct$categoryRelArgs<ExtArgs>
  }, ExtArgs["result"]["brandingProduct"]>

  export type BrandingProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryRel?: boolean | BrandingProduct$categoryRelArgs<ExtArgs>
  }, ExtArgs["result"]["brandingProduct"]>

  export type BrandingProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryRel?: boolean | BrandingProduct$categoryRelArgs<ExtArgs>
  }, ExtArgs["result"]["brandingProduct"]>

  export type BrandingProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandingProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "category" | "categoryId" | "imageUrl" | "imageUrls" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["brandingProduct"]>
  export type BrandingProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRel?: boolean | BrandingProduct$categoryRelArgs<ExtArgs>
  }
  export type BrandingProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRel?: boolean | BrandingProduct$categoryRelArgs<ExtArgs>
  }
  export type BrandingProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRel?: boolean | BrandingProduct$categoryRelArgs<ExtArgs>
  }

  export type $BrandingProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandingProduct"
    objects: {
      categoryRel: Prisma.$BrandingCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number | null
      category: string
      categoryId: string | null
      imageUrl: string
      imageUrls: string[]
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brandingProduct"]>
    composites: {}
  }

  type BrandingProductGetPayload<S extends boolean | null | undefined | BrandingProductDefaultArgs> = $Result.GetResult<Prisma.$BrandingProductPayload, S>

  type BrandingProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandingProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandingProductCountAggregateInputType | true
    }

  export interface BrandingProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandingProduct'], meta: { name: 'BrandingProduct' } }
    /**
     * Find zero or one BrandingProduct that matches the filter.
     * @param {BrandingProductFindUniqueArgs} args - Arguments to find a BrandingProduct
     * @example
     * // Get one BrandingProduct
     * const brandingProduct = await prisma.brandingProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandingProductFindUniqueArgs>(args: SelectSubset<T, BrandingProductFindUniqueArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BrandingProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandingProductFindUniqueOrThrowArgs} args - Arguments to find a BrandingProduct
     * @example
     * // Get one BrandingProduct
     * const brandingProduct = await prisma.brandingProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandingProductFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandingProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrandingProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingProductFindFirstArgs} args - Arguments to find a BrandingProduct
     * @example
     * // Get one BrandingProduct
     * const brandingProduct = await prisma.brandingProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandingProductFindFirstArgs>(args?: SelectSubset<T, BrandingProductFindFirstArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BrandingProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingProductFindFirstOrThrowArgs} args - Arguments to find a BrandingProduct
     * @example
     * // Get one BrandingProduct
     * const brandingProduct = await prisma.brandingProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandingProductFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandingProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BrandingProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandingProducts
     * const brandingProducts = await prisma.brandingProduct.findMany()
     * 
     * // Get first 10 BrandingProducts
     * const brandingProducts = await prisma.brandingProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandingProductWithIdOnly = await prisma.brandingProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandingProductFindManyArgs>(args?: SelectSubset<T, BrandingProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BrandingProduct.
     * @param {BrandingProductCreateArgs} args - Arguments to create a BrandingProduct.
     * @example
     * // Create one BrandingProduct
     * const BrandingProduct = await prisma.brandingProduct.create({
     *   data: {
     *     // ... data to create a BrandingProduct
     *   }
     * })
     * 
     */
    create<T extends BrandingProductCreateArgs>(args: SelectSubset<T, BrandingProductCreateArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BrandingProducts.
     * @param {BrandingProductCreateManyArgs} args - Arguments to create many BrandingProducts.
     * @example
     * // Create many BrandingProducts
     * const brandingProduct = await prisma.brandingProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandingProductCreateManyArgs>(args?: SelectSubset<T, BrandingProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BrandingProducts and returns the data saved in the database.
     * @param {BrandingProductCreateManyAndReturnArgs} args - Arguments to create many BrandingProducts.
     * @example
     * // Create many BrandingProducts
     * const brandingProduct = await prisma.brandingProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BrandingProducts and only return the `id`
     * const brandingProductWithIdOnly = await prisma.brandingProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandingProductCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandingProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BrandingProduct.
     * @param {BrandingProductDeleteArgs} args - Arguments to delete one BrandingProduct.
     * @example
     * // Delete one BrandingProduct
     * const BrandingProduct = await prisma.brandingProduct.delete({
     *   where: {
     *     // ... filter to delete one BrandingProduct
     *   }
     * })
     * 
     */
    delete<T extends BrandingProductDeleteArgs>(args: SelectSubset<T, BrandingProductDeleteArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BrandingProduct.
     * @param {BrandingProductUpdateArgs} args - Arguments to update one BrandingProduct.
     * @example
     * // Update one BrandingProduct
     * const brandingProduct = await prisma.brandingProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandingProductUpdateArgs>(args: SelectSubset<T, BrandingProductUpdateArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BrandingProducts.
     * @param {BrandingProductDeleteManyArgs} args - Arguments to filter BrandingProducts to delete.
     * @example
     * // Delete a few BrandingProducts
     * const { count } = await prisma.brandingProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandingProductDeleteManyArgs>(args?: SelectSubset<T, BrandingProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandingProducts
     * const brandingProduct = await prisma.brandingProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandingProductUpdateManyArgs>(args: SelectSubset<T, BrandingProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandingProducts and returns the data updated in the database.
     * @param {BrandingProductUpdateManyAndReturnArgs} args - Arguments to update many BrandingProducts.
     * @example
     * // Update many BrandingProducts
     * const brandingProduct = await prisma.brandingProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BrandingProducts and only return the `id`
     * const brandingProductWithIdOnly = await prisma.brandingProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandingProductUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandingProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BrandingProduct.
     * @param {BrandingProductUpsertArgs} args - Arguments to update or create a BrandingProduct.
     * @example
     * // Update or create a BrandingProduct
     * const brandingProduct = await prisma.brandingProduct.upsert({
     *   create: {
     *     // ... data to create a BrandingProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandingProduct we want to update
     *   }
     * })
     */
    upsert<T extends BrandingProductUpsertArgs>(args: SelectSubset<T, BrandingProductUpsertArgs<ExtArgs>>): Prisma__BrandingProductClient<$Result.GetResult<Prisma.$BrandingProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BrandingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingProductCountArgs} args - Arguments to filter BrandingProducts to count.
     * @example
     * // Count the number of BrandingProducts
     * const count = await prisma.brandingProduct.count({
     *   where: {
     *     // ... the filter for the BrandingProducts we want to count
     *   }
     * })
    **/
    count<T extends BrandingProductCountArgs>(
      args?: Subset<T, BrandingProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandingProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandingProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandingProductAggregateArgs>(args: Subset<T, BrandingProductAggregateArgs>): Prisma.PrismaPromise<GetBrandingProductAggregateType<T>>

    /**
     * Group by BrandingProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandingProductGroupByArgs} args - Group by arguments.
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
      T extends BrandingProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandingProductGroupByArgs['orderBy'] }
        : { orderBy?: BrandingProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandingProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandingProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandingProduct model
   */
  readonly fields: BrandingProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandingProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandingProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryRel<T extends BrandingProduct$categoryRelArgs<ExtArgs> = {}>(args?: Subset<T, BrandingProduct$categoryRelArgs<ExtArgs>>): Prisma__BrandingCategoryClient<$Result.GetResult<Prisma.$BrandingCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BrandingProduct model
   */
  interface BrandingProductFieldRefs {
    readonly id: FieldRef<"BrandingProduct", 'String'>
    readonly name: FieldRef<"BrandingProduct", 'String'>
    readonly description: FieldRef<"BrandingProduct", 'String'>
    readonly price: FieldRef<"BrandingProduct", 'Int'>
    readonly category: FieldRef<"BrandingProduct", 'String'>
    readonly categoryId: FieldRef<"BrandingProduct", 'String'>
    readonly imageUrl: FieldRef<"BrandingProduct", 'String'>
    readonly imageUrls: FieldRef<"BrandingProduct", 'String[]'>
    readonly isFeatured: FieldRef<"BrandingProduct", 'Boolean'>
    readonly createdAt: FieldRef<"BrandingProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"BrandingProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BrandingProduct findUnique
   */
  export type BrandingProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * Filter, which BrandingProduct to fetch.
     */
    where: BrandingProductWhereUniqueInput
  }

  /**
   * BrandingProduct findUniqueOrThrow
   */
  export type BrandingProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * Filter, which BrandingProduct to fetch.
     */
    where: BrandingProductWhereUniqueInput
  }

  /**
   * BrandingProduct findFirst
   */
  export type BrandingProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * Filter, which BrandingProduct to fetch.
     */
    where?: BrandingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingProducts to fetch.
     */
    orderBy?: BrandingProductOrderByWithRelationInput | BrandingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandingProducts.
     */
    cursor?: BrandingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandingProducts.
     */
    distinct?: BrandingProductScalarFieldEnum | BrandingProductScalarFieldEnum[]
  }

  /**
   * BrandingProduct findFirstOrThrow
   */
  export type BrandingProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * Filter, which BrandingProduct to fetch.
     */
    where?: BrandingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingProducts to fetch.
     */
    orderBy?: BrandingProductOrderByWithRelationInput | BrandingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandingProducts.
     */
    cursor?: BrandingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandingProducts.
     */
    distinct?: BrandingProductScalarFieldEnum | BrandingProductScalarFieldEnum[]
  }

  /**
   * BrandingProduct findMany
   */
  export type BrandingProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * Filter, which BrandingProducts to fetch.
     */
    where?: BrandingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandingProducts to fetch.
     */
    orderBy?: BrandingProductOrderByWithRelationInput | BrandingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandingProducts.
     */
    cursor?: BrandingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandingProducts.
     */
    skip?: number
    distinct?: BrandingProductScalarFieldEnum | BrandingProductScalarFieldEnum[]
  }

  /**
   * BrandingProduct create
   */
  export type BrandingProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandingProduct.
     */
    data: XOR<BrandingProductCreateInput, BrandingProductUncheckedCreateInput>
  }

  /**
   * BrandingProduct createMany
   */
  export type BrandingProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandingProducts.
     */
    data: BrandingProductCreateManyInput | BrandingProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BrandingProduct createManyAndReturn
   */
  export type BrandingProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * The data used to create many BrandingProducts.
     */
    data: BrandingProductCreateManyInput | BrandingProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrandingProduct update
   */
  export type BrandingProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandingProduct.
     */
    data: XOR<BrandingProductUpdateInput, BrandingProductUncheckedUpdateInput>
    /**
     * Choose, which BrandingProduct to update.
     */
    where: BrandingProductWhereUniqueInput
  }

  /**
   * BrandingProduct updateMany
   */
  export type BrandingProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandingProducts.
     */
    data: XOR<BrandingProductUpdateManyMutationInput, BrandingProductUncheckedUpdateManyInput>
    /**
     * Filter which BrandingProducts to update
     */
    where?: BrandingProductWhereInput
    /**
     * Limit how many BrandingProducts to update.
     */
    limit?: number
  }

  /**
   * BrandingProduct updateManyAndReturn
   */
  export type BrandingProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * The data used to update BrandingProducts.
     */
    data: XOR<BrandingProductUpdateManyMutationInput, BrandingProductUncheckedUpdateManyInput>
    /**
     * Filter which BrandingProducts to update
     */
    where?: BrandingProductWhereInput
    /**
     * Limit how many BrandingProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BrandingProduct upsert
   */
  export type BrandingProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandingProduct to update in case it exists.
     */
    where: BrandingProductWhereUniqueInput
    /**
     * In case the BrandingProduct found by the `where` argument doesn't exist, create a new BrandingProduct with this data.
     */
    create: XOR<BrandingProductCreateInput, BrandingProductUncheckedCreateInput>
    /**
     * In case the BrandingProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandingProductUpdateInput, BrandingProductUncheckedUpdateInput>
  }

  /**
   * BrandingProduct delete
   */
  export type BrandingProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
    /**
     * Filter which BrandingProduct to delete.
     */
    where: BrandingProductWhereUniqueInput
  }

  /**
   * BrandingProduct deleteMany
   */
  export type BrandingProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandingProducts to delete
     */
    where?: BrandingProductWhereInput
    /**
     * Limit how many BrandingProducts to delete.
     */
    limit?: number
  }

  /**
   * BrandingProduct.categoryRel
   */
  export type BrandingProduct$categoryRelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingCategory
     */
    select?: BrandingCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingCategory
     */
    omit?: BrandingCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingCategoryInclude<ExtArgs> | null
    where?: BrandingCategoryWhereInput
  }

  /**
   * BrandingProduct without action
   */
  export type BrandingProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandingProduct
     */
    select?: BrandingProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BrandingProduct
     */
    omit?: BrandingProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandingProductInclude<ExtArgs> | null
  }


  /**
   * Model LogisticsCategory
   */

  export type AggregateLogisticsCategory = {
    _count: LogisticsCategoryCountAggregateOutputType | null
    _min: LogisticsCategoryMinAggregateOutputType | null
    _max: LogisticsCategoryMaxAggregateOutputType | null
  }

  export type LogisticsCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogisticsCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogisticsCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LogisticsCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogisticsCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogisticsCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LogisticsCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsCategory to aggregate.
     */
    where?: LogisticsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsCategories to fetch.
     */
    orderBy?: LogisticsCategoryOrderByWithRelationInput | LogisticsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogisticsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogisticsCategories
    **/
    _count?: true | LogisticsCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogisticsCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogisticsCategoryMaxAggregateInputType
  }

  export type GetLogisticsCategoryAggregateType<T extends LogisticsCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLogisticsCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogisticsCategory[P]>
      : GetScalarType<T[P], AggregateLogisticsCategory[P]>
  }




  export type LogisticsCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogisticsCategoryWhereInput
    orderBy?: LogisticsCategoryOrderByWithAggregationInput | LogisticsCategoryOrderByWithAggregationInput[]
    by: LogisticsCategoryScalarFieldEnum[] | LogisticsCategoryScalarFieldEnum
    having?: LogisticsCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogisticsCategoryCountAggregateInputType | true
    _min?: LogisticsCategoryMinAggregateInputType
    _max?: LogisticsCategoryMaxAggregateInputType
  }

  export type LogisticsCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: LogisticsCategoryCountAggregateOutputType | null
    _min: LogisticsCategoryMinAggregateOutputType | null
    _max: LogisticsCategoryMaxAggregateOutputType | null
  }

  type GetLogisticsCategoryGroupByPayload<T extends LogisticsCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogisticsCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogisticsCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogisticsCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], LogisticsCategoryGroupByOutputType[P]>
        }
      >
    >


  export type LogisticsCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | LogisticsCategory$vehiclesArgs<ExtArgs>
    _count?: boolean | LogisticsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logisticsCategory"]>

  export type LogisticsCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["logisticsCategory"]>

  export type LogisticsCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["logisticsCategory"]>

  export type LogisticsCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LogisticsCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["logisticsCategory"]>
  export type LogisticsCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | LogisticsCategory$vehiclesArgs<ExtArgs>
    _count?: boolean | LogisticsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LogisticsCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LogisticsCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LogisticsCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogisticsCategory"
    objects: {
      vehicles: Prisma.$LogisticsVehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["logisticsCategory"]>
    composites: {}
  }

  type LogisticsCategoryGetPayload<S extends boolean | null | undefined | LogisticsCategoryDefaultArgs> = $Result.GetResult<Prisma.$LogisticsCategoryPayload, S>

  type LogisticsCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogisticsCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogisticsCategoryCountAggregateInputType | true
    }

  export interface LogisticsCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogisticsCategory'], meta: { name: 'LogisticsCategory' } }
    /**
     * Find zero or one LogisticsCategory that matches the filter.
     * @param {LogisticsCategoryFindUniqueArgs} args - Arguments to find a LogisticsCategory
     * @example
     * // Get one LogisticsCategory
     * const logisticsCategory = await prisma.logisticsCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogisticsCategoryFindUniqueArgs>(args: SelectSubset<T, LogisticsCategoryFindUniqueArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogisticsCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogisticsCategoryFindUniqueOrThrowArgs} args - Arguments to find a LogisticsCategory
     * @example
     * // Get one LogisticsCategory
     * const logisticsCategory = await prisma.logisticsCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogisticsCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LogisticsCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogisticsCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsCategoryFindFirstArgs} args - Arguments to find a LogisticsCategory
     * @example
     * // Get one LogisticsCategory
     * const logisticsCategory = await prisma.logisticsCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogisticsCategoryFindFirstArgs>(args?: SelectSubset<T, LogisticsCategoryFindFirstArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogisticsCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsCategoryFindFirstOrThrowArgs} args - Arguments to find a LogisticsCategory
     * @example
     * // Get one LogisticsCategory
     * const logisticsCategory = await prisma.logisticsCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogisticsCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LogisticsCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogisticsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogisticsCategories
     * const logisticsCategories = await prisma.logisticsCategory.findMany()
     * 
     * // Get first 10 LogisticsCategories
     * const logisticsCategories = await prisma.logisticsCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logisticsCategoryWithIdOnly = await prisma.logisticsCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogisticsCategoryFindManyArgs>(args?: SelectSubset<T, LogisticsCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogisticsCategory.
     * @param {LogisticsCategoryCreateArgs} args - Arguments to create a LogisticsCategory.
     * @example
     * // Create one LogisticsCategory
     * const LogisticsCategory = await prisma.logisticsCategory.create({
     *   data: {
     *     // ... data to create a LogisticsCategory
     *   }
     * })
     * 
     */
    create<T extends LogisticsCategoryCreateArgs>(args: SelectSubset<T, LogisticsCategoryCreateArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogisticsCategories.
     * @param {LogisticsCategoryCreateManyArgs} args - Arguments to create many LogisticsCategories.
     * @example
     * // Create many LogisticsCategories
     * const logisticsCategory = await prisma.logisticsCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogisticsCategoryCreateManyArgs>(args?: SelectSubset<T, LogisticsCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogisticsCategories and returns the data saved in the database.
     * @param {LogisticsCategoryCreateManyAndReturnArgs} args - Arguments to create many LogisticsCategories.
     * @example
     * // Create many LogisticsCategories
     * const logisticsCategory = await prisma.logisticsCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogisticsCategories and only return the `id`
     * const logisticsCategoryWithIdOnly = await prisma.logisticsCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogisticsCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LogisticsCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogisticsCategory.
     * @param {LogisticsCategoryDeleteArgs} args - Arguments to delete one LogisticsCategory.
     * @example
     * // Delete one LogisticsCategory
     * const LogisticsCategory = await prisma.logisticsCategory.delete({
     *   where: {
     *     // ... filter to delete one LogisticsCategory
     *   }
     * })
     * 
     */
    delete<T extends LogisticsCategoryDeleteArgs>(args: SelectSubset<T, LogisticsCategoryDeleteArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogisticsCategory.
     * @param {LogisticsCategoryUpdateArgs} args - Arguments to update one LogisticsCategory.
     * @example
     * // Update one LogisticsCategory
     * const logisticsCategory = await prisma.logisticsCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogisticsCategoryUpdateArgs>(args: SelectSubset<T, LogisticsCategoryUpdateArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogisticsCategories.
     * @param {LogisticsCategoryDeleteManyArgs} args - Arguments to filter LogisticsCategories to delete.
     * @example
     * // Delete a few LogisticsCategories
     * const { count } = await prisma.logisticsCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogisticsCategoryDeleteManyArgs>(args?: SelectSubset<T, LogisticsCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogisticsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogisticsCategories
     * const logisticsCategory = await prisma.logisticsCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogisticsCategoryUpdateManyArgs>(args: SelectSubset<T, LogisticsCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogisticsCategories and returns the data updated in the database.
     * @param {LogisticsCategoryUpdateManyAndReturnArgs} args - Arguments to update many LogisticsCategories.
     * @example
     * // Update many LogisticsCategories
     * const logisticsCategory = await prisma.logisticsCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogisticsCategories and only return the `id`
     * const logisticsCategoryWithIdOnly = await prisma.logisticsCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogisticsCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LogisticsCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogisticsCategory.
     * @param {LogisticsCategoryUpsertArgs} args - Arguments to update or create a LogisticsCategory.
     * @example
     * // Update or create a LogisticsCategory
     * const logisticsCategory = await prisma.logisticsCategory.upsert({
     *   create: {
     *     // ... data to create a LogisticsCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogisticsCategory we want to update
     *   }
     * })
     */
    upsert<T extends LogisticsCategoryUpsertArgs>(args: SelectSubset<T, LogisticsCategoryUpsertArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogisticsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsCategoryCountArgs} args - Arguments to filter LogisticsCategories to count.
     * @example
     * // Count the number of LogisticsCategories
     * const count = await prisma.logisticsCategory.count({
     *   where: {
     *     // ... the filter for the LogisticsCategories we want to count
     *   }
     * })
    **/
    count<T extends LogisticsCategoryCountArgs>(
      args?: Subset<T, LogisticsCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogisticsCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogisticsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogisticsCategoryAggregateArgs>(args: Subset<T, LogisticsCategoryAggregateArgs>): Prisma.PrismaPromise<GetLogisticsCategoryAggregateType<T>>

    /**
     * Group by LogisticsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsCategoryGroupByArgs} args - Group by arguments.
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
      T extends LogisticsCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogisticsCategoryGroupByArgs['orderBy'] }
        : { orderBy?: LogisticsCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogisticsCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogisticsCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogisticsCategory model
   */
  readonly fields: LogisticsCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogisticsCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogisticsCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends LogisticsCategory$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, LogisticsCategory$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LogisticsCategory model
   */
  interface LogisticsCategoryFieldRefs {
    readonly id: FieldRef<"LogisticsCategory", 'String'>
    readonly name: FieldRef<"LogisticsCategory", 'String'>
    readonly createdAt: FieldRef<"LogisticsCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"LogisticsCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogisticsCategory findUnique
   */
  export type LogisticsCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsCategory to fetch.
     */
    where: LogisticsCategoryWhereUniqueInput
  }

  /**
   * LogisticsCategory findUniqueOrThrow
   */
  export type LogisticsCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsCategory to fetch.
     */
    where: LogisticsCategoryWhereUniqueInput
  }

  /**
   * LogisticsCategory findFirst
   */
  export type LogisticsCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsCategory to fetch.
     */
    where?: LogisticsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsCategories to fetch.
     */
    orderBy?: LogisticsCategoryOrderByWithRelationInput | LogisticsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsCategories.
     */
    cursor?: LogisticsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsCategories.
     */
    distinct?: LogisticsCategoryScalarFieldEnum | LogisticsCategoryScalarFieldEnum[]
  }

  /**
   * LogisticsCategory findFirstOrThrow
   */
  export type LogisticsCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsCategory to fetch.
     */
    where?: LogisticsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsCategories to fetch.
     */
    orderBy?: LogisticsCategoryOrderByWithRelationInput | LogisticsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsCategories.
     */
    cursor?: LogisticsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsCategories.
     */
    distinct?: LogisticsCategoryScalarFieldEnum | LogisticsCategoryScalarFieldEnum[]
  }

  /**
   * LogisticsCategory findMany
   */
  export type LogisticsCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsCategories to fetch.
     */
    where?: LogisticsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsCategories to fetch.
     */
    orderBy?: LogisticsCategoryOrderByWithRelationInput | LogisticsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogisticsCategories.
     */
    cursor?: LogisticsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsCategories.
     */
    skip?: number
    distinct?: LogisticsCategoryScalarFieldEnum | LogisticsCategoryScalarFieldEnum[]
  }

  /**
   * LogisticsCategory create
   */
  export type LogisticsCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LogisticsCategory.
     */
    data: XOR<LogisticsCategoryCreateInput, LogisticsCategoryUncheckedCreateInput>
  }

  /**
   * LogisticsCategory createMany
   */
  export type LogisticsCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogisticsCategories.
     */
    data: LogisticsCategoryCreateManyInput | LogisticsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogisticsCategory createManyAndReturn
   */
  export type LogisticsCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many LogisticsCategories.
     */
    data: LogisticsCategoryCreateManyInput | LogisticsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogisticsCategory update
   */
  export type LogisticsCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LogisticsCategory.
     */
    data: XOR<LogisticsCategoryUpdateInput, LogisticsCategoryUncheckedUpdateInput>
    /**
     * Choose, which LogisticsCategory to update.
     */
    where: LogisticsCategoryWhereUniqueInput
  }

  /**
   * LogisticsCategory updateMany
   */
  export type LogisticsCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogisticsCategories.
     */
    data: XOR<LogisticsCategoryUpdateManyMutationInput, LogisticsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LogisticsCategories to update
     */
    where?: LogisticsCategoryWhereInput
    /**
     * Limit how many LogisticsCategories to update.
     */
    limit?: number
  }

  /**
   * LogisticsCategory updateManyAndReturn
   */
  export type LogisticsCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * The data used to update LogisticsCategories.
     */
    data: XOR<LogisticsCategoryUpdateManyMutationInput, LogisticsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LogisticsCategories to update
     */
    where?: LogisticsCategoryWhereInput
    /**
     * Limit how many LogisticsCategories to update.
     */
    limit?: number
  }

  /**
   * LogisticsCategory upsert
   */
  export type LogisticsCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LogisticsCategory to update in case it exists.
     */
    where: LogisticsCategoryWhereUniqueInput
    /**
     * In case the LogisticsCategory found by the `where` argument doesn't exist, create a new LogisticsCategory with this data.
     */
    create: XOR<LogisticsCategoryCreateInput, LogisticsCategoryUncheckedCreateInput>
    /**
     * In case the LogisticsCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogisticsCategoryUpdateInput, LogisticsCategoryUncheckedUpdateInput>
  }

  /**
   * LogisticsCategory delete
   */
  export type LogisticsCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    /**
     * Filter which LogisticsCategory to delete.
     */
    where: LogisticsCategoryWhereUniqueInput
  }

  /**
   * LogisticsCategory deleteMany
   */
  export type LogisticsCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsCategories to delete
     */
    where?: LogisticsCategoryWhereInput
    /**
     * Limit how many LogisticsCategories to delete.
     */
    limit?: number
  }

  /**
   * LogisticsCategory.vehicles
   */
  export type LogisticsCategory$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    where?: LogisticsVehicleWhereInput
    orderBy?: LogisticsVehicleOrderByWithRelationInput | LogisticsVehicleOrderByWithRelationInput[]
    cursor?: LogisticsVehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogisticsVehicleScalarFieldEnum | LogisticsVehicleScalarFieldEnum[]
  }

  /**
   * LogisticsCategory without action
   */
  export type LogisticsCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
  }


  /**
   * Model LogisticsVehicle
   */

  export type AggregateLogisticsVehicle = {
    _count: LogisticsVehicleCountAggregateOutputType | null
    _avg: LogisticsVehicleAvgAggregateOutputType | null
    _sum: LogisticsVehicleSumAggregateOutputType | null
    _min: LogisticsVehicleMinAggregateOutputType | null
    _max: LogisticsVehicleMaxAggregateOutputType | null
  }

  export type LogisticsVehicleAvgAggregateOutputType = {
    pricePerDay: number | null
  }

  export type LogisticsVehicleSumAggregateOutputType = {
    pricePerDay: number | null
  }

  export type LogisticsVehicleMinAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    description: string | null
    pricePerDay: number | null
    category: string | null
    categoryId: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogisticsVehicleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    description: string | null
    pricePerDay: number | null
    category: string | null
    categoryId: string | null
    imageUrl: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogisticsVehicleCountAggregateOutputType = {
    id: number
    name: number
    model: number
    description: number
    pricePerDay: number
    category: number
    categoryId: number
    imageUrl: number
    imageUrls: number
    features: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LogisticsVehicleAvgAggregateInputType = {
    pricePerDay?: true
  }

  export type LogisticsVehicleSumAggregateInputType = {
    pricePerDay?: true
  }

  export type LogisticsVehicleMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    description?: true
    pricePerDay?: true
    category?: true
    categoryId?: true
    imageUrl?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogisticsVehicleMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    description?: true
    pricePerDay?: true
    category?: true
    categoryId?: true
    imageUrl?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogisticsVehicleCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    description?: true
    pricePerDay?: true
    category?: true
    categoryId?: true
    imageUrl?: true
    imageUrls?: true
    features?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LogisticsVehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsVehicle to aggregate.
     */
    where?: LogisticsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsVehicles to fetch.
     */
    orderBy?: LogisticsVehicleOrderByWithRelationInput | LogisticsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogisticsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogisticsVehicles
    **/
    _count?: true | LogisticsVehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogisticsVehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogisticsVehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogisticsVehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogisticsVehicleMaxAggregateInputType
  }

  export type GetLogisticsVehicleAggregateType<T extends LogisticsVehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateLogisticsVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogisticsVehicle[P]>
      : GetScalarType<T[P], AggregateLogisticsVehicle[P]>
  }




  export type LogisticsVehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogisticsVehicleWhereInput
    orderBy?: LogisticsVehicleOrderByWithAggregationInput | LogisticsVehicleOrderByWithAggregationInput[]
    by: LogisticsVehicleScalarFieldEnum[] | LogisticsVehicleScalarFieldEnum
    having?: LogisticsVehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogisticsVehicleCountAggregateInputType | true
    _avg?: LogisticsVehicleAvgAggregateInputType
    _sum?: LogisticsVehicleSumAggregateInputType
    _min?: LogisticsVehicleMinAggregateInputType
    _max?: LogisticsVehicleMaxAggregateInputType
  }

  export type LogisticsVehicleGroupByOutputType = {
    id: string
    name: string
    model: string
    description: string
    pricePerDay: number
    category: string
    categoryId: string | null
    imageUrl: string
    imageUrls: string[]
    features: string[]
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: LogisticsVehicleCountAggregateOutputType | null
    _avg: LogisticsVehicleAvgAggregateOutputType | null
    _sum: LogisticsVehicleSumAggregateOutputType | null
    _min: LogisticsVehicleMinAggregateOutputType | null
    _max: LogisticsVehicleMaxAggregateOutputType | null
  }

  type GetLogisticsVehicleGroupByPayload<T extends LogisticsVehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogisticsVehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogisticsVehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogisticsVehicleGroupByOutputType[P]>
            : GetScalarType<T[P], LogisticsVehicleGroupByOutputType[P]>
        }
      >
    >


  export type LogisticsVehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    pricePerDay?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    features?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryRel?: boolean | LogisticsVehicle$categoryRelArgs<ExtArgs>
  }, ExtArgs["result"]["logisticsVehicle"]>

  export type LogisticsVehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    pricePerDay?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    features?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryRel?: boolean | LogisticsVehicle$categoryRelArgs<ExtArgs>
  }, ExtArgs["result"]["logisticsVehicle"]>

  export type LogisticsVehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    pricePerDay?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    features?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryRel?: boolean | LogisticsVehicle$categoryRelArgs<ExtArgs>
  }, ExtArgs["result"]["logisticsVehicle"]>

  export type LogisticsVehicleSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    description?: boolean
    pricePerDay?: boolean
    category?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    imageUrls?: boolean
    features?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LogisticsVehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "description" | "pricePerDay" | "category" | "categoryId" | "imageUrl" | "imageUrls" | "features" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["logisticsVehicle"]>
  export type LogisticsVehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRel?: boolean | LogisticsVehicle$categoryRelArgs<ExtArgs>
  }
  export type LogisticsVehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRel?: boolean | LogisticsVehicle$categoryRelArgs<ExtArgs>
  }
  export type LogisticsVehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryRel?: boolean | LogisticsVehicle$categoryRelArgs<ExtArgs>
  }

  export type $LogisticsVehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogisticsVehicle"
    objects: {
      categoryRel: Prisma.$LogisticsCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      model: string
      description: string
      pricePerDay: number
      category: string
      categoryId: string | null
      imageUrl: string
      imageUrls: string[]
      features: string[]
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["logisticsVehicle"]>
    composites: {}
  }

  type LogisticsVehicleGetPayload<S extends boolean | null | undefined | LogisticsVehicleDefaultArgs> = $Result.GetResult<Prisma.$LogisticsVehiclePayload, S>

  type LogisticsVehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogisticsVehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogisticsVehicleCountAggregateInputType | true
    }

  export interface LogisticsVehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogisticsVehicle'], meta: { name: 'LogisticsVehicle' } }
    /**
     * Find zero or one LogisticsVehicle that matches the filter.
     * @param {LogisticsVehicleFindUniqueArgs} args - Arguments to find a LogisticsVehicle
     * @example
     * // Get one LogisticsVehicle
     * const logisticsVehicle = await prisma.logisticsVehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogisticsVehicleFindUniqueArgs>(args: SelectSubset<T, LogisticsVehicleFindUniqueArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogisticsVehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogisticsVehicleFindUniqueOrThrowArgs} args - Arguments to find a LogisticsVehicle
     * @example
     * // Get one LogisticsVehicle
     * const logisticsVehicle = await prisma.logisticsVehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogisticsVehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, LogisticsVehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogisticsVehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsVehicleFindFirstArgs} args - Arguments to find a LogisticsVehicle
     * @example
     * // Get one LogisticsVehicle
     * const logisticsVehicle = await prisma.logisticsVehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogisticsVehicleFindFirstArgs>(args?: SelectSubset<T, LogisticsVehicleFindFirstArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogisticsVehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsVehicleFindFirstOrThrowArgs} args - Arguments to find a LogisticsVehicle
     * @example
     * // Get one LogisticsVehicle
     * const logisticsVehicle = await prisma.logisticsVehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogisticsVehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, LogisticsVehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogisticsVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsVehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogisticsVehicles
     * const logisticsVehicles = await prisma.logisticsVehicle.findMany()
     * 
     * // Get first 10 LogisticsVehicles
     * const logisticsVehicles = await prisma.logisticsVehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logisticsVehicleWithIdOnly = await prisma.logisticsVehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogisticsVehicleFindManyArgs>(args?: SelectSubset<T, LogisticsVehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogisticsVehicle.
     * @param {LogisticsVehicleCreateArgs} args - Arguments to create a LogisticsVehicle.
     * @example
     * // Create one LogisticsVehicle
     * const LogisticsVehicle = await prisma.logisticsVehicle.create({
     *   data: {
     *     // ... data to create a LogisticsVehicle
     *   }
     * })
     * 
     */
    create<T extends LogisticsVehicleCreateArgs>(args: SelectSubset<T, LogisticsVehicleCreateArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogisticsVehicles.
     * @param {LogisticsVehicleCreateManyArgs} args - Arguments to create many LogisticsVehicles.
     * @example
     * // Create many LogisticsVehicles
     * const logisticsVehicle = await prisma.logisticsVehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogisticsVehicleCreateManyArgs>(args?: SelectSubset<T, LogisticsVehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogisticsVehicles and returns the data saved in the database.
     * @param {LogisticsVehicleCreateManyAndReturnArgs} args - Arguments to create many LogisticsVehicles.
     * @example
     * // Create many LogisticsVehicles
     * const logisticsVehicle = await prisma.logisticsVehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogisticsVehicles and only return the `id`
     * const logisticsVehicleWithIdOnly = await prisma.logisticsVehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogisticsVehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, LogisticsVehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogisticsVehicle.
     * @param {LogisticsVehicleDeleteArgs} args - Arguments to delete one LogisticsVehicle.
     * @example
     * // Delete one LogisticsVehicle
     * const LogisticsVehicle = await prisma.logisticsVehicle.delete({
     *   where: {
     *     // ... filter to delete one LogisticsVehicle
     *   }
     * })
     * 
     */
    delete<T extends LogisticsVehicleDeleteArgs>(args: SelectSubset<T, LogisticsVehicleDeleteArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogisticsVehicle.
     * @param {LogisticsVehicleUpdateArgs} args - Arguments to update one LogisticsVehicle.
     * @example
     * // Update one LogisticsVehicle
     * const logisticsVehicle = await prisma.logisticsVehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogisticsVehicleUpdateArgs>(args: SelectSubset<T, LogisticsVehicleUpdateArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogisticsVehicles.
     * @param {LogisticsVehicleDeleteManyArgs} args - Arguments to filter LogisticsVehicles to delete.
     * @example
     * // Delete a few LogisticsVehicles
     * const { count } = await prisma.logisticsVehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogisticsVehicleDeleteManyArgs>(args?: SelectSubset<T, LogisticsVehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogisticsVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsVehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogisticsVehicles
     * const logisticsVehicle = await prisma.logisticsVehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogisticsVehicleUpdateManyArgs>(args: SelectSubset<T, LogisticsVehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogisticsVehicles and returns the data updated in the database.
     * @param {LogisticsVehicleUpdateManyAndReturnArgs} args - Arguments to update many LogisticsVehicles.
     * @example
     * // Update many LogisticsVehicles
     * const logisticsVehicle = await prisma.logisticsVehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogisticsVehicles and only return the `id`
     * const logisticsVehicleWithIdOnly = await prisma.logisticsVehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogisticsVehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, LogisticsVehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogisticsVehicle.
     * @param {LogisticsVehicleUpsertArgs} args - Arguments to update or create a LogisticsVehicle.
     * @example
     * // Update or create a LogisticsVehicle
     * const logisticsVehicle = await prisma.logisticsVehicle.upsert({
     *   create: {
     *     // ... data to create a LogisticsVehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogisticsVehicle we want to update
     *   }
     * })
     */
    upsert<T extends LogisticsVehicleUpsertArgs>(args: SelectSubset<T, LogisticsVehicleUpsertArgs<ExtArgs>>): Prisma__LogisticsVehicleClient<$Result.GetResult<Prisma.$LogisticsVehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogisticsVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsVehicleCountArgs} args - Arguments to filter LogisticsVehicles to count.
     * @example
     * // Count the number of LogisticsVehicles
     * const count = await prisma.logisticsVehicle.count({
     *   where: {
     *     // ... the filter for the LogisticsVehicles we want to count
     *   }
     * })
    **/
    count<T extends LogisticsVehicleCountArgs>(
      args?: Subset<T, LogisticsVehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogisticsVehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogisticsVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsVehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogisticsVehicleAggregateArgs>(args: Subset<T, LogisticsVehicleAggregateArgs>): Prisma.PrismaPromise<GetLogisticsVehicleAggregateType<T>>

    /**
     * Group by LogisticsVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsVehicleGroupByArgs} args - Group by arguments.
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
      T extends LogisticsVehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogisticsVehicleGroupByArgs['orderBy'] }
        : { orderBy?: LogisticsVehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogisticsVehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogisticsVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogisticsVehicle model
   */
  readonly fields: LogisticsVehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogisticsVehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogisticsVehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryRel<T extends LogisticsVehicle$categoryRelArgs<ExtArgs> = {}>(args?: Subset<T, LogisticsVehicle$categoryRelArgs<ExtArgs>>): Prisma__LogisticsCategoryClient<$Result.GetResult<Prisma.$LogisticsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LogisticsVehicle model
   */
  interface LogisticsVehicleFieldRefs {
    readonly id: FieldRef<"LogisticsVehicle", 'String'>
    readonly name: FieldRef<"LogisticsVehicle", 'String'>
    readonly model: FieldRef<"LogisticsVehicle", 'String'>
    readonly description: FieldRef<"LogisticsVehicle", 'String'>
    readonly pricePerDay: FieldRef<"LogisticsVehicle", 'Int'>
    readonly category: FieldRef<"LogisticsVehicle", 'String'>
    readonly categoryId: FieldRef<"LogisticsVehicle", 'String'>
    readonly imageUrl: FieldRef<"LogisticsVehicle", 'String'>
    readonly imageUrls: FieldRef<"LogisticsVehicle", 'String[]'>
    readonly features: FieldRef<"LogisticsVehicle", 'String[]'>
    readonly isFeatured: FieldRef<"LogisticsVehicle", 'Boolean'>
    readonly createdAt: FieldRef<"LogisticsVehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"LogisticsVehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogisticsVehicle findUnique
   */
  export type LogisticsVehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsVehicle to fetch.
     */
    where: LogisticsVehicleWhereUniqueInput
  }

  /**
   * LogisticsVehicle findUniqueOrThrow
   */
  export type LogisticsVehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsVehicle to fetch.
     */
    where: LogisticsVehicleWhereUniqueInput
  }

  /**
   * LogisticsVehicle findFirst
   */
  export type LogisticsVehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsVehicle to fetch.
     */
    where?: LogisticsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsVehicles to fetch.
     */
    orderBy?: LogisticsVehicleOrderByWithRelationInput | LogisticsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsVehicles.
     */
    cursor?: LogisticsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsVehicles.
     */
    distinct?: LogisticsVehicleScalarFieldEnum | LogisticsVehicleScalarFieldEnum[]
  }

  /**
   * LogisticsVehicle findFirstOrThrow
   */
  export type LogisticsVehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsVehicle to fetch.
     */
    where?: LogisticsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsVehicles to fetch.
     */
    orderBy?: LogisticsVehicleOrderByWithRelationInput | LogisticsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsVehicles.
     */
    cursor?: LogisticsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsVehicles.
     */
    distinct?: LogisticsVehicleScalarFieldEnum | LogisticsVehicleScalarFieldEnum[]
  }

  /**
   * LogisticsVehicle findMany
   */
  export type LogisticsVehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * Filter, which LogisticsVehicles to fetch.
     */
    where?: LogisticsVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsVehicles to fetch.
     */
    orderBy?: LogisticsVehicleOrderByWithRelationInput | LogisticsVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogisticsVehicles.
     */
    cursor?: LogisticsVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsVehicles.
     */
    skip?: number
    distinct?: LogisticsVehicleScalarFieldEnum | LogisticsVehicleScalarFieldEnum[]
  }

  /**
   * LogisticsVehicle create
   */
  export type LogisticsVehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a LogisticsVehicle.
     */
    data: XOR<LogisticsVehicleCreateInput, LogisticsVehicleUncheckedCreateInput>
  }

  /**
   * LogisticsVehicle createMany
   */
  export type LogisticsVehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogisticsVehicles.
     */
    data: LogisticsVehicleCreateManyInput | LogisticsVehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogisticsVehicle createManyAndReturn
   */
  export type LogisticsVehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * The data used to create many LogisticsVehicles.
     */
    data: LogisticsVehicleCreateManyInput | LogisticsVehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogisticsVehicle update
   */
  export type LogisticsVehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a LogisticsVehicle.
     */
    data: XOR<LogisticsVehicleUpdateInput, LogisticsVehicleUncheckedUpdateInput>
    /**
     * Choose, which LogisticsVehicle to update.
     */
    where: LogisticsVehicleWhereUniqueInput
  }

  /**
   * LogisticsVehicle updateMany
   */
  export type LogisticsVehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogisticsVehicles.
     */
    data: XOR<LogisticsVehicleUpdateManyMutationInput, LogisticsVehicleUncheckedUpdateManyInput>
    /**
     * Filter which LogisticsVehicles to update
     */
    where?: LogisticsVehicleWhereInput
    /**
     * Limit how many LogisticsVehicles to update.
     */
    limit?: number
  }

  /**
   * LogisticsVehicle updateManyAndReturn
   */
  export type LogisticsVehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * The data used to update LogisticsVehicles.
     */
    data: XOR<LogisticsVehicleUpdateManyMutationInput, LogisticsVehicleUncheckedUpdateManyInput>
    /**
     * Filter which LogisticsVehicles to update
     */
    where?: LogisticsVehicleWhereInput
    /**
     * Limit how many LogisticsVehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogisticsVehicle upsert
   */
  export type LogisticsVehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the LogisticsVehicle to update in case it exists.
     */
    where: LogisticsVehicleWhereUniqueInput
    /**
     * In case the LogisticsVehicle found by the `where` argument doesn't exist, create a new LogisticsVehicle with this data.
     */
    create: XOR<LogisticsVehicleCreateInput, LogisticsVehicleUncheckedCreateInput>
    /**
     * In case the LogisticsVehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogisticsVehicleUpdateInput, LogisticsVehicleUncheckedUpdateInput>
  }

  /**
   * LogisticsVehicle delete
   */
  export type LogisticsVehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
    /**
     * Filter which LogisticsVehicle to delete.
     */
    where: LogisticsVehicleWhereUniqueInput
  }

  /**
   * LogisticsVehicle deleteMany
   */
  export type LogisticsVehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsVehicles to delete
     */
    where?: LogisticsVehicleWhereInput
    /**
     * Limit how many LogisticsVehicles to delete.
     */
    limit?: number
  }

  /**
   * LogisticsVehicle.categoryRel
   */
  export type LogisticsVehicle$categoryRelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsCategory
     */
    select?: LogisticsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsCategory
     */
    omit?: LogisticsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsCategoryInclude<ExtArgs> | null
    where?: LogisticsCategoryWhereInput
  }

  /**
   * LogisticsVehicle without action
   */
  export type LogisticsVehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsVehicle
     */
    select?: LogisticsVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsVehicle
     */
    omit?: LogisticsVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogisticsVehicleInclude<ExtArgs> | null
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


  export const BrandingCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandingCategoryScalarFieldEnum = (typeof BrandingCategoryScalarFieldEnum)[keyof typeof BrandingCategoryScalarFieldEnum]


  export const BrandingProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    categoryId: 'categoryId',
    imageUrl: 'imageUrl',
    imageUrls: 'imageUrls',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandingProductScalarFieldEnum = (typeof BrandingProductScalarFieldEnum)[keyof typeof BrandingProductScalarFieldEnum]


  export const LogisticsCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LogisticsCategoryScalarFieldEnum = (typeof LogisticsCategoryScalarFieldEnum)[keyof typeof LogisticsCategoryScalarFieldEnum]


  export const LogisticsVehicleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    description: 'description',
    pricePerDay: 'pricePerDay',
    category: 'category',
    categoryId: 'categoryId',
    imageUrl: 'imageUrl',
    imageUrls: 'imageUrls',
    features: 'features',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LogisticsVehicleScalarFieldEnum = (typeof LogisticsVehicleScalarFieldEnum)[keyof typeof LogisticsVehicleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BrandingCategoryWhereInput = {
    AND?: BrandingCategoryWhereInput | BrandingCategoryWhereInput[]
    OR?: BrandingCategoryWhereInput[]
    NOT?: BrandingCategoryWhereInput | BrandingCategoryWhereInput[]
    id?: StringFilter<"BrandingCategory"> | string
    name?: StringFilter<"BrandingCategory"> | string
    createdAt?: DateTimeFilter<"BrandingCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BrandingCategory"> | Date | string
    products?: BrandingProductListRelationFilter
  }

  export type BrandingCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: BrandingProductOrderByRelationAggregateInput
  }

  export type BrandingCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BrandingCategoryWhereInput | BrandingCategoryWhereInput[]
    OR?: BrandingCategoryWhereInput[]
    NOT?: BrandingCategoryWhereInput | BrandingCategoryWhereInput[]
    createdAt?: DateTimeFilter<"BrandingCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BrandingCategory"> | Date | string
    products?: BrandingProductListRelationFilter
  }, "id" | "name">

  export type BrandingCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandingCategoryCountOrderByAggregateInput
    _max?: BrandingCategoryMaxOrderByAggregateInput
    _min?: BrandingCategoryMinOrderByAggregateInput
  }

  export type BrandingCategoryScalarWhereWithAggregatesInput = {
    AND?: BrandingCategoryScalarWhereWithAggregatesInput | BrandingCategoryScalarWhereWithAggregatesInput[]
    OR?: BrandingCategoryScalarWhereWithAggregatesInput[]
    NOT?: BrandingCategoryScalarWhereWithAggregatesInput | BrandingCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BrandingCategory"> | string
    name?: StringWithAggregatesFilter<"BrandingCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BrandingCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BrandingCategory"> | Date | string
  }

  export type BrandingProductWhereInput = {
    AND?: BrandingProductWhereInput | BrandingProductWhereInput[]
    OR?: BrandingProductWhereInput[]
    NOT?: BrandingProductWhereInput | BrandingProductWhereInput[]
    id?: StringFilter<"BrandingProduct"> | string
    name?: StringFilter<"BrandingProduct"> | string
    description?: StringFilter<"BrandingProduct"> | string
    price?: IntNullableFilter<"BrandingProduct"> | number | null
    category?: StringFilter<"BrandingProduct"> | string
    categoryId?: StringNullableFilter<"BrandingProduct"> | string | null
    imageUrl?: StringFilter<"BrandingProduct"> | string
    imageUrls?: StringNullableListFilter<"BrandingProduct">
    isFeatured?: BoolFilter<"BrandingProduct"> | boolean
    createdAt?: DateTimeFilter<"BrandingProduct"> | Date | string
    updatedAt?: DateTimeFilter<"BrandingProduct"> | Date | string
    categoryRel?: XOR<BrandingCategoryNullableScalarRelationFilter, BrandingCategoryWhereInput> | null
  }

  export type BrandingProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryRel?: BrandingCategoryOrderByWithRelationInput
  }

  export type BrandingProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandingProductWhereInput | BrandingProductWhereInput[]
    OR?: BrandingProductWhereInput[]
    NOT?: BrandingProductWhereInput | BrandingProductWhereInput[]
    name?: StringFilter<"BrandingProduct"> | string
    description?: StringFilter<"BrandingProduct"> | string
    price?: IntNullableFilter<"BrandingProduct"> | number | null
    category?: StringFilter<"BrandingProduct"> | string
    categoryId?: StringNullableFilter<"BrandingProduct"> | string | null
    imageUrl?: StringFilter<"BrandingProduct"> | string
    imageUrls?: StringNullableListFilter<"BrandingProduct">
    isFeatured?: BoolFilter<"BrandingProduct"> | boolean
    createdAt?: DateTimeFilter<"BrandingProduct"> | Date | string
    updatedAt?: DateTimeFilter<"BrandingProduct"> | Date | string
    categoryRel?: XOR<BrandingCategoryNullableScalarRelationFilter, BrandingCategoryWhereInput> | null
  }, "id">

  export type BrandingProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandingProductCountOrderByAggregateInput
    _avg?: BrandingProductAvgOrderByAggregateInput
    _max?: BrandingProductMaxOrderByAggregateInput
    _min?: BrandingProductMinOrderByAggregateInput
    _sum?: BrandingProductSumOrderByAggregateInput
  }

  export type BrandingProductScalarWhereWithAggregatesInput = {
    AND?: BrandingProductScalarWhereWithAggregatesInput | BrandingProductScalarWhereWithAggregatesInput[]
    OR?: BrandingProductScalarWhereWithAggregatesInput[]
    NOT?: BrandingProductScalarWhereWithAggregatesInput | BrandingProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BrandingProduct"> | string
    name?: StringWithAggregatesFilter<"BrandingProduct"> | string
    description?: StringWithAggregatesFilter<"BrandingProduct"> | string
    price?: IntNullableWithAggregatesFilter<"BrandingProduct"> | number | null
    category?: StringWithAggregatesFilter<"BrandingProduct"> | string
    categoryId?: StringNullableWithAggregatesFilter<"BrandingProduct"> | string | null
    imageUrl?: StringWithAggregatesFilter<"BrandingProduct"> | string
    imageUrls?: StringNullableListFilter<"BrandingProduct">
    isFeatured?: BoolWithAggregatesFilter<"BrandingProduct"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BrandingProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BrandingProduct"> | Date | string
  }

  export type LogisticsCategoryWhereInput = {
    AND?: LogisticsCategoryWhereInput | LogisticsCategoryWhereInput[]
    OR?: LogisticsCategoryWhereInput[]
    NOT?: LogisticsCategoryWhereInput | LogisticsCategoryWhereInput[]
    id?: StringFilter<"LogisticsCategory"> | string
    name?: StringFilter<"LogisticsCategory"> | string
    createdAt?: DateTimeFilter<"LogisticsCategory"> | Date | string
    updatedAt?: DateTimeFilter<"LogisticsCategory"> | Date | string
    vehicles?: LogisticsVehicleListRelationFilter
  }

  export type LogisticsCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: LogisticsVehicleOrderByRelationAggregateInput
  }

  export type LogisticsCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LogisticsCategoryWhereInput | LogisticsCategoryWhereInput[]
    OR?: LogisticsCategoryWhereInput[]
    NOT?: LogisticsCategoryWhereInput | LogisticsCategoryWhereInput[]
    createdAt?: DateTimeFilter<"LogisticsCategory"> | Date | string
    updatedAt?: DateTimeFilter<"LogisticsCategory"> | Date | string
    vehicles?: LogisticsVehicleListRelationFilter
  }, "id" | "name">

  export type LogisticsCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LogisticsCategoryCountOrderByAggregateInput
    _max?: LogisticsCategoryMaxOrderByAggregateInput
    _min?: LogisticsCategoryMinOrderByAggregateInput
  }

  export type LogisticsCategoryScalarWhereWithAggregatesInput = {
    AND?: LogisticsCategoryScalarWhereWithAggregatesInput | LogisticsCategoryScalarWhereWithAggregatesInput[]
    OR?: LogisticsCategoryScalarWhereWithAggregatesInput[]
    NOT?: LogisticsCategoryScalarWhereWithAggregatesInput | LogisticsCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogisticsCategory"> | string
    name?: StringWithAggregatesFilter<"LogisticsCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LogisticsCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LogisticsCategory"> | Date | string
  }

  export type LogisticsVehicleWhereInput = {
    AND?: LogisticsVehicleWhereInput | LogisticsVehicleWhereInput[]
    OR?: LogisticsVehicleWhereInput[]
    NOT?: LogisticsVehicleWhereInput | LogisticsVehicleWhereInput[]
    id?: StringFilter<"LogisticsVehicle"> | string
    name?: StringFilter<"LogisticsVehicle"> | string
    model?: StringFilter<"LogisticsVehicle"> | string
    description?: StringFilter<"LogisticsVehicle"> | string
    pricePerDay?: IntFilter<"LogisticsVehicle"> | number
    category?: StringFilter<"LogisticsVehicle"> | string
    categoryId?: StringNullableFilter<"LogisticsVehicle"> | string | null
    imageUrl?: StringFilter<"LogisticsVehicle"> | string
    imageUrls?: StringNullableListFilter<"LogisticsVehicle">
    features?: StringNullableListFilter<"LogisticsVehicle">
    isFeatured?: BoolFilter<"LogisticsVehicle"> | boolean
    createdAt?: DateTimeFilter<"LogisticsVehicle"> | Date | string
    updatedAt?: DateTimeFilter<"LogisticsVehicle"> | Date | string
    categoryRel?: XOR<LogisticsCategoryNullableScalarRelationFilter, LogisticsCategoryWhereInput> | null
  }

  export type LogisticsVehicleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    category?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    features?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryRel?: LogisticsCategoryOrderByWithRelationInput
  }

  export type LogisticsVehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogisticsVehicleWhereInput | LogisticsVehicleWhereInput[]
    OR?: LogisticsVehicleWhereInput[]
    NOT?: LogisticsVehicleWhereInput | LogisticsVehicleWhereInput[]
    name?: StringFilter<"LogisticsVehicle"> | string
    model?: StringFilter<"LogisticsVehicle"> | string
    description?: StringFilter<"LogisticsVehicle"> | string
    pricePerDay?: IntFilter<"LogisticsVehicle"> | number
    category?: StringFilter<"LogisticsVehicle"> | string
    categoryId?: StringNullableFilter<"LogisticsVehicle"> | string | null
    imageUrl?: StringFilter<"LogisticsVehicle"> | string
    imageUrls?: StringNullableListFilter<"LogisticsVehicle">
    features?: StringNullableListFilter<"LogisticsVehicle">
    isFeatured?: BoolFilter<"LogisticsVehicle"> | boolean
    createdAt?: DateTimeFilter<"LogisticsVehicle"> | Date | string
    updatedAt?: DateTimeFilter<"LogisticsVehicle"> | Date | string
    categoryRel?: XOR<LogisticsCategoryNullableScalarRelationFilter, LogisticsCategoryWhereInput> | null
  }, "id">

  export type LogisticsVehicleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    category?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    features?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LogisticsVehicleCountOrderByAggregateInput
    _avg?: LogisticsVehicleAvgOrderByAggregateInput
    _max?: LogisticsVehicleMaxOrderByAggregateInput
    _min?: LogisticsVehicleMinOrderByAggregateInput
    _sum?: LogisticsVehicleSumOrderByAggregateInput
  }

  export type LogisticsVehicleScalarWhereWithAggregatesInput = {
    AND?: LogisticsVehicleScalarWhereWithAggregatesInput | LogisticsVehicleScalarWhereWithAggregatesInput[]
    OR?: LogisticsVehicleScalarWhereWithAggregatesInput[]
    NOT?: LogisticsVehicleScalarWhereWithAggregatesInput | LogisticsVehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogisticsVehicle"> | string
    name?: StringWithAggregatesFilter<"LogisticsVehicle"> | string
    model?: StringWithAggregatesFilter<"LogisticsVehicle"> | string
    description?: StringWithAggregatesFilter<"LogisticsVehicle"> | string
    pricePerDay?: IntWithAggregatesFilter<"LogisticsVehicle"> | number
    category?: StringWithAggregatesFilter<"LogisticsVehicle"> | string
    categoryId?: StringNullableWithAggregatesFilter<"LogisticsVehicle"> | string | null
    imageUrl?: StringWithAggregatesFilter<"LogisticsVehicle"> | string
    imageUrls?: StringNullableListFilter<"LogisticsVehicle">
    features?: StringNullableListFilter<"LogisticsVehicle">
    isFeatured?: BoolWithAggregatesFilter<"LogisticsVehicle"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LogisticsVehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LogisticsVehicle"> | Date | string
  }

  export type BrandingCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: BrandingProductCreateNestedManyWithoutCategoryRelInput
  }

  export type BrandingCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: BrandingProductUncheckedCreateNestedManyWithoutCategoryRelInput
  }

  export type BrandingCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: BrandingProductUpdateManyWithoutCategoryRelNestedInput
  }

  export type BrandingCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: BrandingProductUncheckedUpdateManyWithoutCategoryRelNestedInput
  }

  export type BrandingCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingProductCreateInput = {
    id?: string
    name: string
    description: string
    price?: number | null
    category: string
    imageUrl: string
    imageUrls?: BrandingProductCreateimageUrlsInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryRel?: BrandingCategoryCreateNestedOneWithoutProductsInput
  }

  export type BrandingProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price?: number | null
    category: string
    categoryId?: string | null
    imageUrl: string
    imageUrls?: BrandingProductCreateimageUrlsInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: BrandingProductUpdateimageUrlsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryRel?: BrandingCategoryUpdateOneWithoutProductsNestedInput
  }

  export type BrandingProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: BrandingProductUpdateimageUrlsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingProductCreateManyInput = {
    id?: string
    name: string
    description: string
    price?: number | null
    category: string
    categoryId?: string | null
    imageUrl: string
    imageUrls?: BrandingProductCreateimageUrlsInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: BrandingProductUpdateimageUrlsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: BrandingProductUpdateimageUrlsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: LogisticsVehicleCreateNestedManyWithoutCategoryRelInput
  }

  export type LogisticsCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: LogisticsVehicleUncheckedCreateNestedManyWithoutCategoryRelInput
  }

  export type LogisticsCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: LogisticsVehicleUpdateManyWithoutCategoryRelNestedInput
  }

  export type LogisticsCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: LogisticsVehicleUncheckedUpdateManyWithoutCategoryRelNestedInput
  }

  export type LogisticsCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsVehicleCreateInput = {
    id?: string
    name: string
    model: string
    description: string
    pricePerDay: number
    category: string
    imageUrl: string
    imageUrls?: LogisticsVehicleCreateimageUrlsInput | string[]
    features?: LogisticsVehicleCreatefeaturesInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryRel?: LogisticsCategoryCreateNestedOneWithoutVehiclesInput
  }

  export type LogisticsVehicleUncheckedCreateInput = {
    id?: string
    name: string
    model: string
    description: string
    pricePerDay: number
    category: string
    categoryId?: string | null
    imageUrl: string
    imageUrls?: LogisticsVehicleCreateimageUrlsInput | string[]
    features?: LogisticsVehicleCreatefeaturesInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsVehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: LogisticsVehicleUpdateimageUrlsInput | string[]
    features?: LogisticsVehicleUpdatefeaturesInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryRel?: LogisticsCategoryUpdateOneWithoutVehiclesNestedInput
  }

  export type LogisticsVehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: LogisticsVehicleUpdateimageUrlsInput | string[]
    features?: LogisticsVehicleUpdatefeaturesInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsVehicleCreateManyInput = {
    id?: string
    name: string
    model: string
    description: string
    pricePerDay: number
    category: string
    categoryId?: string | null
    imageUrl: string
    imageUrls?: LogisticsVehicleCreateimageUrlsInput | string[]
    features?: LogisticsVehicleCreatefeaturesInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsVehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: LogisticsVehicleUpdateimageUrlsInput | string[]
    features?: LogisticsVehicleUpdatefeaturesInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsVehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: LogisticsVehicleUpdateimageUrlsInput | string[]
    features?: LogisticsVehicleUpdatefeaturesInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BrandingProductListRelationFilter = {
    every?: BrandingProductWhereInput
    some?: BrandingProductWhereInput
    none?: BrandingProductWhereInput
  }

  export type BrandingProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandingCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandingCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandingCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BrandingCategoryNullableScalarRelationFilter = {
    is?: BrandingCategoryWhereInput | null
    isNot?: BrandingCategoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BrandingProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandingProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BrandingProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandingProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandingProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LogisticsVehicleListRelationFilter = {
    every?: LogisticsVehicleWhereInput
    some?: LogisticsVehicleWhereInput
    none?: LogisticsVehicleWhereInput
  }

  export type LogisticsVehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogisticsCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogisticsCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogisticsCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LogisticsCategoryNullableScalarRelationFilter = {
    is?: LogisticsCategoryWhereInput | null
    isNot?: LogisticsCategoryWhereInput | null
  }

  export type LogisticsVehicleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
    imageUrls?: SortOrder
    features?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogisticsVehicleAvgOrderByAggregateInput = {
    pricePerDay?: SortOrder
  }

  export type LogisticsVehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogisticsVehicleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    description?: SortOrder
    pricePerDay?: SortOrder
    category?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogisticsVehicleSumOrderByAggregateInput = {
    pricePerDay?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BrandingProductCreateNestedManyWithoutCategoryRelInput = {
    create?: XOR<BrandingProductCreateWithoutCategoryRelInput, BrandingProductUncheckedCreateWithoutCategoryRelInput> | BrandingProductCreateWithoutCategoryRelInput[] | BrandingProductUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: BrandingProductCreateOrConnectWithoutCategoryRelInput | BrandingProductCreateOrConnectWithoutCategoryRelInput[]
    createMany?: BrandingProductCreateManyCategoryRelInputEnvelope
    connect?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
  }

  export type BrandingProductUncheckedCreateNestedManyWithoutCategoryRelInput = {
    create?: XOR<BrandingProductCreateWithoutCategoryRelInput, BrandingProductUncheckedCreateWithoutCategoryRelInput> | BrandingProductCreateWithoutCategoryRelInput[] | BrandingProductUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: BrandingProductCreateOrConnectWithoutCategoryRelInput | BrandingProductCreateOrConnectWithoutCategoryRelInput[]
    createMany?: BrandingProductCreateManyCategoryRelInputEnvelope
    connect?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BrandingProductUpdateManyWithoutCategoryRelNestedInput = {
    create?: XOR<BrandingProductCreateWithoutCategoryRelInput, BrandingProductUncheckedCreateWithoutCategoryRelInput> | BrandingProductCreateWithoutCategoryRelInput[] | BrandingProductUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: BrandingProductCreateOrConnectWithoutCategoryRelInput | BrandingProductCreateOrConnectWithoutCategoryRelInput[]
    upsert?: BrandingProductUpsertWithWhereUniqueWithoutCategoryRelInput | BrandingProductUpsertWithWhereUniqueWithoutCategoryRelInput[]
    createMany?: BrandingProductCreateManyCategoryRelInputEnvelope
    set?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    disconnect?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    delete?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    connect?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    update?: BrandingProductUpdateWithWhereUniqueWithoutCategoryRelInput | BrandingProductUpdateWithWhereUniqueWithoutCategoryRelInput[]
    updateMany?: BrandingProductUpdateManyWithWhereWithoutCategoryRelInput | BrandingProductUpdateManyWithWhereWithoutCategoryRelInput[]
    deleteMany?: BrandingProductScalarWhereInput | BrandingProductScalarWhereInput[]
  }

  export type BrandingProductUncheckedUpdateManyWithoutCategoryRelNestedInput = {
    create?: XOR<BrandingProductCreateWithoutCategoryRelInput, BrandingProductUncheckedCreateWithoutCategoryRelInput> | BrandingProductCreateWithoutCategoryRelInput[] | BrandingProductUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: BrandingProductCreateOrConnectWithoutCategoryRelInput | BrandingProductCreateOrConnectWithoutCategoryRelInput[]
    upsert?: BrandingProductUpsertWithWhereUniqueWithoutCategoryRelInput | BrandingProductUpsertWithWhereUniqueWithoutCategoryRelInput[]
    createMany?: BrandingProductCreateManyCategoryRelInputEnvelope
    set?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    disconnect?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    delete?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    connect?: BrandingProductWhereUniqueInput | BrandingProductWhereUniqueInput[]
    update?: BrandingProductUpdateWithWhereUniqueWithoutCategoryRelInput | BrandingProductUpdateWithWhereUniqueWithoutCategoryRelInput[]
    updateMany?: BrandingProductUpdateManyWithWhereWithoutCategoryRelInput | BrandingProductUpdateManyWithWhereWithoutCategoryRelInput[]
    deleteMany?: BrandingProductScalarWhereInput | BrandingProductScalarWhereInput[]
  }

  export type BrandingProductCreateimageUrlsInput = {
    set: string[]
  }

  export type BrandingCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandingCategoryCreateWithoutProductsInput, BrandingCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandingCategoryCreateOrConnectWithoutProductsInput
    connect?: BrandingCategoryWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BrandingProductUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BrandingCategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BrandingCategoryCreateWithoutProductsInput, BrandingCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandingCategoryCreateOrConnectWithoutProductsInput
    upsert?: BrandingCategoryUpsertWithoutProductsInput
    disconnect?: BrandingCategoryWhereInput | boolean
    delete?: BrandingCategoryWhereInput | boolean
    connect?: BrandingCategoryWhereUniqueInput
    update?: XOR<XOR<BrandingCategoryUpdateToOneWithWhereWithoutProductsInput, BrandingCategoryUpdateWithoutProductsInput>, BrandingCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LogisticsVehicleCreateNestedManyWithoutCategoryRelInput = {
    create?: XOR<LogisticsVehicleCreateWithoutCategoryRelInput, LogisticsVehicleUncheckedCreateWithoutCategoryRelInput> | LogisticsVehicleCreateWithoutCategoryRelInput[] | LogisticsVehicleUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: LogisticsVehicleCreateOrConnectWithoutCategoryRelInput | LogisticsVehicleCreateOrConnectWithoutCategoryRelInput[]
    createMany?: LogisticsVehicleCreateManyCategoryRelInputEnvelope
    connect?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
  }

  export type LogisticsVehicleUncheckedCreateNestedManyWithoutCategoryRelInput = {
    create?: XOR<LogisticsVehicleCreateWithoutCategoryRelInput, LogisticsVehicleUncheckedCreateWithoutCategoryRelInput> | LogisticsVehicleCreateWithoutCategoryRelInput[] | LogisticsVehicleUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: LogisticsVehicleCreateOrConnectWithoutCategoryRelInput | LogisticsVehicleCreateOrConnectWithoutCategoryRelInput[]
    createMany?: LogisticsVehicleCreateManyCategoryRelInputEnvelope
    connect?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
  }

  export type LogisticsVehicleUpdateManyWithoutCategoryRelNestedInput = {
    create?: XOR<LogisticsVehicleCreateWithoutCategoryRelInput, LogisticsVehicleUncheckedCreateWithoutCategoryRelInput> | LogisticsVehicleCreateWithoutCategoryRelInput[] | LogisticsVehicleUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: LogisticsVehicleCreateOrConnectWithoutCategoryRelInput | LogisticsVehicleCreateOrConnectWithoutCategoryRelInput[]
    upsert?: LogisticsVehicleUpsertWithWhereUniqueWithoutCategoryRelInput | LogisticsVehicleUpsertWithWhereUniqueWithoutCategoryRelInput[]
    createMany?: LogisticsVehicleCreateManyCategoryRelInputEnvelope
    set?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    disconnect?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    delete?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    connect?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    update?: LogisticsVehicleUpdateWithWhereUniqueWithoutCategoryRelInput | LogisticsVehicleUpdateWithWhereUniqueWithoutCategoryRelInput[]
    updateMany?: LogisticsVehicleUpdateManyWithWhereWithoutCategoryRelInput | LogisticsVehicleUpdateManyWithWhereWithoutCategoryRelInput[]
    deleteMany?: LogisticsVehicleScalarWhereInput | LogisticsVehicleScalarWhereInput[]
  }

  export type LogisticsVehicleUncheckedUpdateManyWithoutCategoryRelNestedInput = {
    create?: XOR<LogisticsVehicleCreateWithoutCategoryRelInput, LogisticsVehicleUncheckedCreateWithoutCategoryRelInput> | LogisticsVehicleCreateWithoutCategoryRelInput[] | LogisticsVehicleUncheckedCreateWithoutCategoryRelInput[]
    connectOrCreate?: LogisticsVehicleCreateOrConnectWithoutCategoryRelInput | LogisticsVehicleCreateOrConnectWithoutCategoryRelInput[]
    upsert?: LogisticsVehicleUpsertWithWhereUniqueWithoutCategoryRelInput | LogisticsVehicleUpsertWithWhereUniqueWithoutCategoryRelInput[]
    createMany?: LogisticsVehicleCreateManyCategoryRelInputEnvelope
    set?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    disconnect?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    delete?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    connect?: LogisticsVehicleWhereUniqueInput | LogisticsVehicleWhereUniqueInput[]
    update?: LogisticsVehicleUpdateWithWhereUniqueWithoutCategoryRelInput | LogisticsVehicleUpdateWithWhereUniqueWithoutCategoryRelInput[]
    updateMany?: LogisticsVehicleUpdateManyWithWhereWithoutCategoryRelInput | LogisticsVehicleUpdateManyWithWhereWithoutCategoryRelInput[]
    deleteMany?: LogisticsVehicleScalarWhereInput | LogisticsVehicleScalarWhereInput[]
  }

  export type LogisticsVehicleCreateimageUrlsInput = {
    set: string[]
  }

  export type LogisticsVehicleCreatefeaturesInput = {
    set: string[]
  }

  export type LogisticsCategoryCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<LogisticsCategoryCreateWithoutVehiclesInput, LogisticsCategoryUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: LogisticsCategoryCreateOrConnectWithoutVehiclesInput
    connect?: LogisticsCategoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LogisticsVehicleUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LogisticsVehicleUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LogisticsCategoryUpdateOneWithoutVehiclesNestedInput = {
    create?: XOR<LogisticsCategoryCreateWithoutVehiclesInput, LogisticsCategoryUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: LogisticsCategoryCreateOrConnectWithoutVehiclesInput
    upsert?: LogisticsCategoryUpsertWithoutVehiclesInput
    disconnect?: LogisticsCategoryWhereInput | boolean
    delete?: LogisticsCategoryWhereInput | boolean
    connect?: LogisticsCategoryWhereUniqueInput
    update?: XOR<XOR<LogisticsCategoryUpdateToOneWithWhereWithoutVehiclesInput, LogisticsCategoryUpdateWithoutVehiclesInput>, LogisticsCategoryUncheckedUpdateWithoutVehiclesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BrandingProductCreateWithoutCategoryRelInput = {
    id?: string
    name: string
    description: string
    price?: number | null
    category: string
    imageUrl: string
    imageUrls?: BrandingProductCreateimageUrlsInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingProductUncheckedCreateWithoutCategoryRelInput = {
    id?: string
    name: string
    description: string
    price?: number | null
    category: string
    imageUrl: string
    imageUrls?: BrandingProductCreateimageUrlsInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingProductCreateOrConnectWithoutCategoryRelInput = {
    where: BrandingProductWhereUniqueInput
    create: XOR<BrandingProductCreateWithoutCategoryRelInput, BrandingProductUncheckedCreateWithoutCategoryRelInput>
  }

  export type BrandingProductCreateManyCategoryRelInputEnvelope = {
    data: BrandingProductCreateManyCategoryRelInput | BrandingProductCreateManyCategoryRelInput[]
    skipDuplicates?: boolean
  }

  export type BrandingProductUpsertWithWhereUniqueWithoutCategoryRelInput = {
    where: BrandingProductWhereUniqueInput
    update: XOR<BrandingProductUpdateWithoutCategoryRelInput, BrandingProductUncheckedUpdateWithoutCategoryRelInput>
    create: XOR<BrandingProductCreateWithoutCategoryRelInput, BrandingProductUncheckedCreateWithoutCategoryRelInput>
  }

  export type BrandingProductUpdateWithWhereUniqueWithoutCategoryRelInput = {
    where: BrandingProductWhereUniqueInput
    data: XOR<BrandingProductUpdateWithoutCategoryRelInput, BrandingProductUncheckedUpdateWithoutCategoryRelInput>
  }

  export type BrandingProductUpdateManyWithWhereWithoutCategoryRelInput = {
    where: BrandingProductScalarWhereInput
    data: XOR<BrandingProductUpdateManyMutationInput, BrandingProductUncheckedUpdateManyWithoutCategoryRelInput>
  }

  export type BrandingProductScalarWhereInput = {
    AND?: BrandingProductScalarWhereInput | BrandingProductScalarWhereInput[]
    OR?: BrandingProductScalarWhereInput[]
    NOT?: BrandingProductScalarWhereInput | BrandingProductScalarWhereInput[]
    id?: StringFilter<"BrandingProduct"> | string
    name?: StringFilter<"BrandingProduct"> | string
    description?: StringFilter<"BrandingProduct"> | string
    price?: IntNullableFilter<"BrandingProduct"> | number | null
    category?: StringFilter<"BrandingProduct"> | string
    categoryId?: StringNullableFilter<"BrandingProduct"> | string | null
    imageUrl?: StringFilter<"BrandingProduct"> | string
    imageUrls?: StringNullableListFilter<"BrandingProduct">
    isFeatured?: BoolFilter<"BrandingProduct"> | boolean
    createdAt?: DateTimeFilter<"BrandingProduct"> | Date | string
    updatedAt?: DateTimeFilter<"BrandingProduct"> | Date | string
  }

  export type BrandingCategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingCategoryCreateOrConnectWithoutProductsInput = {
    where: BrandingCategoryWhereUniqueInput
    create: XOR<BrandingCategoryCreateWithoutProductsInput, BrandingCategoryUncheckedCreateWithoutProductsInput>
  }

  export type BrandingCategoryUpsertWithoutProductsInput = {
    update: XOR<BrandingCategoryUpdateWithoutProductsInput, BrandingCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandingCategoryCreateWithoutProductsInput, BrandingCategoryUncheckedCreateWithoutProductsInput>
    where?: BrandingCategoryWhereInput
  }

  export type BrandingCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandingCategoryWhereInput
    data: XOR<BrandingCategoryUpdateWithoutProductsInput, BrandingCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type BrandingCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsVehicleCreateWithoutCategoryRelInput = {
    id?: string
    name: string
    model: string
    description: string
    pricePerDay: number
    category: string
    imageUrl: string
    imageUrls?: LogisticsVehicleCreateimageUrlsInput | string[]
    features?: LogisticsVehicleCreatefeaturesInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsVehicleUncheckedCreateWithoutCategoryRelInput = {
    id?: string
    name: string
    model: string
    description: string
    pricePerDay: number
    category: string
    imageUrl: string
    imageUrls?: LogisticsVehicleCreateimageUrlsInput | string[]
    features?: LogisticsVehicleCreatefeaturesInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsVehicleCreateOrConnectWithoutCategoryRelInput = {
    where: LogisticsVehicleWhereUniqueInput
    create: XOR<LogisticsVehicleCreateWithoutCategoryRelInput, LogisticsVehicleUncheckedCreateWithoutCategoryRelInput>
  }

  export type LogisticsVehicleCreateManyCategoryRelInputEnvelope = {
    data: LogisticsVehicleCreateManyCategoryRelInput | LogisticsVehicleCreateManyCategoryRelInput[]
    skipDuplicates?: boolean
  }

  export type LogisticsVehicleUpsertWithWhereUniqueWithoutCategoryRelInput = {
    where: LogisticsVehicleWhereUniqueInput
    update: XOR<LogisticsVehicleUpdateWithoutCategoryRelInput, LogisticsVehicleUncheckedUpdateWithoutCategoryRelInput>
    create: XOR<LogisticsVehicleCreateWithoutCategoryRelInput, LogisticsVehicleUncheckedCreateWithoutCategoryRelInput>
  }

  export type LogisticsVehicleUpdateWithWhereUniqueWithoutCategoryRelInput = {
    where: LogisticsVehicleWhereUniqueInput
    data: XOR<LogisticsVehicleUpdateWithoutCategoryRelInput, LogisticsVehicleUncheckedUpdateWithoutCategoryRelInput>
  }

  export type LogisticsVehicleUpdateManyWithWhereWithoutCategoryRelInput = {
    where: LogisticsVehicleScalarWhereInput
    data: XOR<LogisticsVehicleUpdateManyMutationInput, LogisticsVehicleUncheckedUpdateManyWithoutCategoryRelInput>
  }

  export type LogisticsVehicleScalarWhereInput = {
    AND?: LogisticsVehicleScalarWhereInput | LogisticsVehicleScalarWhereInput[]
    OR?: LogisticsVehicleScalarWhereInput[]
    NOT?: LogisticsVehicleScalarWhereInput | LogisticsVehicleScalarWhereInput[]
    id?: StringFilter<"LogisticsVehicle"> | string
    name?: StringFilter<"LogisticsVehicle"> | string
    model?: StringFilter<"LogisticsVehicle"> | string
    description?: StringFilter<"LogisticsVehicle"> | string
    pricePerDay?: IntFilter<"LogisticsVehicle"> | number
    category?: StringFilter<"LogisticsVehicle"> | string
    categoryId?: StringNullableFilter<"LogisticsVehicle"> | string | null
    imageUrl?: StringFilter<"LogisticsVehicle"> | string
    imageUrls?: StringNullableListFilter<"LogisticsVehicle">
    features?: StringNullableListFilter<"LogisticsVehicle">
    isFeatured?: BoolFilter<"LogisticsVehicle"> | boolean
    createdAt?: DateTimeFilter<"LogisticsVehicle"> | Date | string
    updatedAt?: DateTimeFilter<"LogisticsVehicle"> | Date | string
  }

  export type LogisticsCategoryCreateWithoutVehiclesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsCategoryUncheckedCreateWithoutVehiclesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsCategoryCreateOrConnectWithoutVehiclesInput = {
    where: LogisticsCategoryWhereUniqueInput
    create: XOR<LogisticsCategoryCreateWithoutVehiclesInput, LogisticsCategoryUncheckedCreateWithoutVehiclesInput>
  }

  export type LogisticsCategoryUpsertWithoutVehiclesInput = {
    update: XOR<LogisticsCategoryUpdateWithoutVehiclesInput, LogisticsCategoryUncheckedUpdateWithoutVehiclesInput>
    create: XOR<LogisticsCategoryCreateWithoutVehiclesInput, LogisticsCategoryUncheckedCreateWithoutVehiclesInput>
    where?: LogisticsCategoryWhereInput
  }

  export type LogisticsCategoryUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: LogisticsCategoryWhereInput
    data: XOR<LogisticsCategoryUpdateWithoutVehiclesInput, LogisticsCategoryUncheckedUpdateWithoutVehiclesInput>
  }

  export type LogisticsCategoryUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsCategoryUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingProductCreateManyCategoryRelInput = {
    id?: string
    name: string
    description: string
    price?: number | null
    category: string
    imageUrl: string
    imageUrls?: BrandingProductCreateimageUrlsInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandingProductUpdateWithoutCategoryRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: BrandingProductUpdateimageUrlsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingProductUncheckedUpdateWithoutCategoryRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: BrandingProductUpdateimageUrlsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandingProductUncheckedUpdateManyWithoutCategoryRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: BrandingProductUpdateimageUrlsInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsVehicleCreateManyCategoryRelInput = {
    id?: string
    name: string
    model: string
    description: string
    pricePerDay: number
    category: string
    imageUrl: string
    imageUrls?: LogisticsVehicleCreateimageUrlsInput | string[]
    features?: LogisticsVehicleCreatefeaturesInput | string[]
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LogisticsVehicleUpdateWithoutCategoryRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: LogisticsVehicleUpdateimageUrlsInput | string[]
    features?: LogisticsVehicleUpdatefeaturesInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsVehicleUncheckedUpdateWithoutCategoryRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: LogisticsVehicleUpdateimageUrlsInput | string[]
    features?: LogisticsVehicleUpdatefeaturesInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsVehicleUncheckedUpdateManyWithoutCategoryRelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerDay?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageUrls?: LogisticsVehicleUpdateimageUrlsInput | string[]
    features?: LogisticsVehicleUpdatefeaturesInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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