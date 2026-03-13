
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tenants
 * 
 */
export type tenants = $Result.DefaultSelection<Prisma.$tenantsPayload>
/**
 * Model eventos
 * 
 */
export type eventos = $Result.DefaultSelection<Prisma.$eventosPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model TicketType
 * 
 */
export type TicketType = $Result.DefaultSelection<Prisma.$TicketTypePayload>
/**
 * Model BatchTicket
 * 
 */
export type BatchTicket = $Result.DefaultSelection<Prisma.$BatchTicketPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model GlobalPaymentConfig
 * 
 */
export type GlobalPaymentConfig = $Result.DefaultSelection<Prisma.$GlobalPaymentConfigPayload>
/**
 * Model StripeAccount
 * 
 */
export type StripeAccount = $Result.DefaultSelection<Prisma.$StripeAccountPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventoStatus: {
  ativo: 'ativo',
  encerrado: 'encerrado',
  rascunho: 'rascunho'
};

export type EventoStatus = (typeof EventoStatus)[keyof typeof EventoStatus]


export const CargoUsuario: {
  membro: 'membro',
  admin: 'admin',
  global_admin: 'global_admin'
};

export type CargoUsuario = (typeof CargoUsuario)[keyof typeof CargoUsuario]


export const InscricaoStatus: {
  pendente: 'pendente',
  confirmada: 'confirmada',
  cancelada: 'cancelada'
};

export type InscricaoStatus = (typeof InscricaoStatus)[keyof typeof InscricaoStatus]


export const TenantStatus: {
  ativo: 'ativo',
  cancelado: 'cancelado',
  suspenso: 'suspenso'
};

export type TenantStatus = (typeof TenantStatus)[keyof typeof TenantStatus]


export const TicketStatus: {
  VALID: 'VALID',
  USED: 'USED',
  CANCELED: 'CANCELED',
  REFUNDED: 'REFUNDED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const StripeAccountType: {
  STANDARD: 'STANDARD',
  EXPRESS: 'EXPRESS',
  CUSTOM: 'CUSTOM'
};

export type StripeAccountType = (typeof StripeAccountType)[keyof typeof StripeAccountType]


export const StripeAccountStatus: {
  PENDING: 'PENDING',
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
  RESTRICTED: 'RESTRICTED'
};

export type StripeAccountStatus = (typeof StripeAccountStatus)[keyof typeof StripeAccountStatus]


export const StripeAccountBusinessType: {
  INDIVIDUAL: 'INDIVIDUAL',
  COMPANY: 'COMPANY'
};

export type StripeAccountBusinessType = (typeof StripeAccountBusinessType)[keyof typeof StripeAccountBusinessType]


export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PAID: 'PAID',
  CONFIRMED: 'CONFIRMED',
  EXPIRED: 'EXPIRED',
  FAILED: 'FAILED',
  CANCELED: 'CANCELED',
  REFUNDED: 'REFUNDED',
  PARTIAL_REFUND: 'PARTIAL_REFUND'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  PIX: 'PIX',
  BOLETO: 'BOLETO',
  WALLET: 'WALLET'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const ReservationStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CONVERTED: 'CONVERTED',
  CANCELLED: 'CANCELLED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type EventoStatus = $Enums.EventoStatus

export const EventoStatus: typeof $Enums.EventoStatus

export type CargoUsuario = $Enums.CargoUsuario

export const CargoUsuario: typeof $Enums.CargoUsuario

export type InscricaoStatus = $Enums.InscricaoStatus

export const InscricaoStatus: typeof $Enums.InscricaoStatus

export type TenantStatus = $Enums.TenantStatus

export const TenantStatus: typeof $Enums.TenantStatus

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type StripeAccountType = $Enums.StripeAccountType

export const StripeAccountType: typeof $Enums.StripeAccountType

export type StripeAccountStatus = $Enums.StripeAccountStatus

export const StripeAccountStatus: typeof $Enums.StripeAccountStatus

export type StripeAccountBusinessType = $Enums.StripeAccountBusinessType

export const StripeAccountBusinessType: typeof $Enums.StripeAccountBusinessType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenants.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenants`: Exposes CRUD operations for the **tenants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenants.findMany()
    * ```
    */
  get tenants(): Prisma.tenantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.eventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketType`: Exposes CRUD operations for the **TicketType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTypes
    * const ticketTypes = await prisma.ticketType.findMany()
    * ```
    */
  get ticketType(): Prisma.TicketTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batchTicket`: Exposes CRUD operations for the **BatchTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BatchTickets
    * const batchTickets = await prisma.batchTicket.findMany()
    * ```
    */
  get batchTicket(): Prisma.BatchTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalPaymentConfig`: Exposes CRUD operations for the **GlobalPaymentConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalPaymentConfigs
    * const globalPaymentConfigs = await prisma.globalPaymentConfig.findMany()
    * ```
    */
  get globalPaymentConfig(): Prisma.GlobalPaymentConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stripeAccount`: Exposes CRUD operations for the **StripeAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StripeAccounts
    * const stripeAccounts = await prisma.stripeAccount.findMany()
    * ```
    */
  get stripeAccount(): Prisma.StripeAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    tenants: 'tenants',
    eventos: 'eventos',
    Batch: 'Batch',
    TicketType: 'TicketType',
    BatchTicket: 'BatchTicket',
    Ticket: 'Ticket',
    usuarios: 'usuarios',
    GlobalPaymentConfig: 'GlobalPaymentConfig',
    StripeAccount: 'StripeAccount',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Reservation: 'Reservation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenants" | "eventos" | "batch" | "ticketType" | "batchTicket" | "ticket" | "usuarios" | "globalPaymentConfig" | "stripeAccount" | "order" | "orderItem" | "reservation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tenants: {
        payload: Prisma.$tenantsPayload<ExtArgs>
        fields: Prisma.tenantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tenantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tenantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          findFirst: {
            args: Prisma.tenantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tenantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          findMany: {
            args: Prisma.tenantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>[]
          }
          create: {
            args: Prisma.tenantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          createMany: {
            args: Prisma.tenantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tenantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          update: {
            args: Prisma.tenantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          deleteMany: {
            args: Prisma.tenantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tenantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tenantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          aggregate: {
            args: Prisma.TenantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenants>
          }
          groupBy: {
            args: Prisma.tenantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tenantsCountArgs<ExtArgs>
            result: $Utils.Optional<TenantsCountAggregateOutputType> | number
          }
        }
      }
      eventos: {
        payload: Prisma.$eventosPayload<ExtArgs>
        fields: Prisma.eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findFirst: {
            args: Prisma.eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findMany: {
            args: Prisma.eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          create: {
            args: Prisma.eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          createMany: {
            args: Prisma.eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          update: {
            args: Prisma.eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          deleteMany: {
            args: Prisma.eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      TicketType: {
        payload: Prisma.$TicketTypePayload<ExtArgs>
        fields: Prisma.TicketTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findFirst: {
            args: Prisma.TicketTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findMany: {
            args: Prisma.TicketTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          create: {
            args: Prisma.TicketTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          createMany: {
            args: Prisma.TicketTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          update: {
            args: Prisma.TicketTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          deleteMany: {
            args: Prisma.TicketTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          aggregate: {
            args: Prisma.TicketTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketType>
          }
          groupBy: {
            args: Prisma.TicketTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeCountAggregateOutputType> | number
          }
        }
      }
      BatchTicket: {
        payload: Prisma.$BatchTicketPayload<ExtArgs>
        fields: Prisma.BatchTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload>
          }
          findFirst: {
            args: Prisma.BatchTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload>
          }
          findMany: {
            args: Prisma.BatchTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload>[]
          }
          create: {
            args: Prisma.BatchTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload>
          }
          createMany: {
            args: Prisma.BatchTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BatchTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload>
          }
          update: {
            args: Prisma.BatchTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload>
          }
          deleteMany: {
            args: Prisma.BatchTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BatchTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchTicketPayload>
          }
          aggregate: {
            args: Prisma.BatchTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatchTicket>
          }
          groupBy: {
            args: Prisma.BatchTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchTicketCountArgs<ExtArgs>
            result: $Utils.Optional<BatchTicketCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      GlobalPaymentConfig: {
        payload: Prisma.$GlobalPaymentConfigPayload<ExtArgs>
        fields: Prisma.GlobalPaymentConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalPaymentConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalPaymentConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload>
          }
          findFirst: {
            args: Prisma.GlobalPaymentConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalPaymentConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload>
          }
          findMany: {
            args: Prisma.GlobalPaymentConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload>[]
          }
          create: {
            args: Prisma.GlobalPaymentConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload>
          }
          createMany: {
            args: Prisma.GlobalPaymentConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GlobalPaymentConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload>
          }
          update: {
            args: Prisma.GlobalPaymentConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload>
          }
          deleteMany: {
            args: Prisma.GlobalPaymentConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalPaymentConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GlobalPaymentConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalPaymentConfigPayload>
          }
          aggregate: {
            args: Prisma.GlobalPaymentConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalPaymentConfig>
          }
          groupBy: {
            args: Prisma.GlobalPaymentConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalPaymentConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalPaymentConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalPaymentConfigCountAggregateOutputType> | number
          }
        }
      }
      StripeAccount: {
        payload: Prisma.$StripeAccountPayload<ExtArgs>
        fields: Prisma.StripeAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StripeAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StripeAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload>
          }
          findFirst: {
            args: Prisma.StripeAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StripeAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload>
          }
          findMany: {
            args: Prisma.StripeAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload>[]
          }
          create: {
            args: Prisma.StripeAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload>
          }
          createMany: {
            args: Prisma.StripeAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StripeAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload>
          }
          update: {
            args: Prisma.StripeAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload>
          }
          deleteMany: {
            args: Prisma.StripeAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StripeAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StripeAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeAccountPayload>
          }
          aggregate: {
            args: Prisma.StripeAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStripeAccount>
          }
          groupBy: {
            args: Prisma.StripeAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<StripeAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.StripeAccountCountArgs<ExtArgs>
            result: $Utils.Optional<StripeAccountCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tenants?: tenantsOmit
    eventos?: eventosOmit
    batch?: BatchOmit
    ticketType?: TicketTypeOmit
    batchTicket?: BatchTicketOmit
    ticket?: TicketOmit
    usuarios?: usuariosOmit
    globalPaymentConfig?: GlobalPaymentConfigOmit
    stripeAccount?: StripeAccountOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    reservation?: ReservationOmit
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
   * Count Type TenantsCountOutputType
   */

  export type TenantsCountOutputType = {
    usuarios: number
    eventos: number
    orders: number
  }

  export type TenantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | TenantsCountOutputTypeCountUsuariosArgs
    eventos?: boolean | TenantsCountOutputTypeCountEventosArgs
    orders?: boolean | TenantsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantsCountOutputType
     */
    select?: TenantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type EventosCountOutputType
   */

  export type EventosCountOutputType = {
    batches: number
    tickets: number
    orders: number
  }

  export type EventosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | EventosCountOutputTypeCountBatchesArgs
    tickets?: boolean | EventosCountOutputTypeCountTicketsArgs
    orders?: boolean | EventosCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventosCountOutputType
     */
    select?: EventosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    batchTickets: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batchTickets?: boolean | BatchCountOutputTypeCountBatchTicketsArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountBatchTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchTicketWhereInput
  }


  /**
   * Count Type TicketTypeCountOutputType
   */

  export type TicketTypeCountOutputType = {
    batchTickets: number
  }

  export type TicketTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batchTickets?: boolean | TicketTypeCountOutputTypeCountBatchTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTypeCountOutputType
     */
    select?: TicketTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeCountBatchTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchTicketWhereInput
  }


  /**
   * Count Type BatchTicketCountOutputType
   */

  export type BatchTicketCountOutputType = {
    tickets: number
    orderItems: number
    reservations: number
  }

  export type BatchTicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | BatchTicketCountOutputTypeCountTicketsArgs
    orderItems?: boolean | BatchTicketCountOutputTypeCountOrderItemsArgs
    reservations?: boolean | BatchTicketCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * BatchTicketCountOutputType without action
   */
  export type BatchTicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicketCountOutputType
     */
    select?: BatchTicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchTicketCountOutputType without action
   */
  export type BatchTicketCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * BatchTicketCountOutputType without action
   */
  export type BatchTicketCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * BatchTicketCountOutputType without action
   */
  export type BatchTicketCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    orders: number
    tickets: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UsuariosCountOutputTypeCountOrdersArgs
    tickets?: boolean | UsuariosCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    tickets: number
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | OrderCountOutputTypeCountTicketsArgs
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tenants
   */

  export type AggregateTenants = {
    _count: TenantsCountAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  export type TenantsMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    site: string | null
    slug: string | null
    status: $Enums.TenantStatus | null
    createdAt: Date | null
    updated_at: Date | null
    logoUrl: string | null
  }

  export type TenantsMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    site: string | null
    slug: string | null
    status: $Enums.TenantStatus | null
    createdAt: Date | null
    updated_at: Date | null
    logoUrl: string | null
  }

  export type TenantsCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    telefone: number
    email: number
    site: number
    slug: number
    status: number
    createdAt: number
    updated_at: number
    logoUrl: number
    _all: number
  }


  export type TenantsMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    email?: true
    site?: true
    slug?: true
    status?: true
    createdAt?: true
    updated_at?: true
    logoUrl?: true
  }

  export type TenantsMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    email?: true
    site?: true
    slug?: true
    status?: true
    createdAt?: true
    updated_at?: true
    logoUrl?: true
  }

  export type TenantsCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    email?: true
    site?: true
    slug?: true
    status?: true
    createdAt?: true
    updated_at?: true
    logoUrl?: true
    _all?: true
  }

  export type TenantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenants to aggregate.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tenants
    **/
    _count?: true | TenantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantsMaxAggregateInputType
  }

  export type GetTenantsAggregateType<T extends TenantsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenants[P]>
      : GetScalarType<T[P], AggregateTenants[P]>
  }




  export type tenantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenantsWhereInput
    orderBy?: tenantsOrderByWithAggregationInput | tenantsOrderByWithAggregationInput[]
    by: TenantsScalarFieldEnum[] | TenantsScalarFieldEnum
    having?: tenantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantsCountAggregateInputType | true
    _min?: TenantsMinAggregateInputType
    _max?: TenantsMaxAggregateInputType
  }

  export type TenantsGroupByOutputType = {
    id: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site: string | null
    slug: string
    status: $Enums.TenantStatus
    createdAt: Date
    updated_at: Date
    logoUrl: string | null
    _count: TenantsCountAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  type GetTenantsGroupByPayload<T extends tenantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantsGroupByOutputType[P]>
            : GetScalarType<T[P], TenantsGroupByOutputType[P]>
        }
      >
    >


  export type tenantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    site?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updated_at?: boolean
    logoUrl?: boolean
    usuarios?: boolean | tenants$usuariosArgs<ExtArgs>
    eventos?: boolean | tenants$eventosArgs<ExtArgs>
    stripeAccount?: boolean | tenants$stripeAccountArgs<ExtArgs>
    orders?: boolean | tenants$ordersArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenants"]>



  export type tenantsSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    site?: boolean
    slug?: boolean
    status?: boolean
    createdAt?: boolean
    updated_at?: boolean
    logoUrl?: boolean
  }

  export type tenantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "telefone" | "email" | "site" | "slug" | "status" | "createdAt" | "updated_at" | "logoUrl", ExtArgs["result"]["tenants"]>
  export type tenantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tenants$usuariosArgs<ExtArgs>
    eventos?: boolean | tenants$eventosArgs<ExtArgs>
    stripeAccount?: boolean | tenants$stripeAccountArgs<ExtArgs>
    orders?: boolean | tenants$ordersArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tenantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tenants"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>[]
      eventos: Prisma.$eventosPayload<ExtArgs>[]
      stripeAccount: Prisma.$StripeAccountPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cnpj: string
      telefone: string
      email: string
      site: string | null
      slug: string
      status: $Enums.TenantStatus
      createdAt: Date
      updated_at: Date
      logoUrl: string | null
    }, ExtArgs["result"]["tenants"]>
    composites: {}
  }

  type tenantsGetPayload<S extends boolean | null | undefined | tenantsDefaultArgs> = $Result.GetResult<Prisma.$tenantsPayload, S>

  type tenantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tenantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantsCountAggregateInputType | true
    }

  export interface tenantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tenants'], meta: { name: 'tenants' } }
    /**
     * Find zero or one Tenants that matches the filter.
     * @param {tenantsFindUniqueArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tenantsFindUniqueArgs>(args: SelectSubset<T, tenantsFindUniqueArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tenantsFindUniqueOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tenantsFindUniqueOrThrowArgs>(args: SelectSubset<T, tenantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindFirstArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tenantsFindFirstArgs>(args?: SelectSubset<T, tenantsFindFirstArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindFirstOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tenantsFindFirstOrThrowArgs>(args?: SelectSubset<T, tenantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenants.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantsWithIdOnly = await prisma.tenants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tenantsFindManyArgs>(args?: SelectSubset<T, tenantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenants.
     * @param {tenantsCreateArgs} args - Arguments to create a Tenants.
     * @example
     * // Create one Tenants
     * const Tenants = await prisma.tenants.create({
     *   data: {
     *     // ... data to create a Tenants
     *   }
     * })
     * 
     */
    create<T extends tenantsCreateArgs>(args: SelectSubset<T, tenantsCreateArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {tenantsCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenants = await prisma.tenants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tenantsCreateManyArgs>(args?: SelectSubset<T, tenantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tenants.
     * @param {tenantsDeleteArgs} args - Arguments to delete one Tenants.
     * @example
     * // Delete one Tenants
     * const Tenants = await prisma.tenants.delete({
     *   where: {
     *     // ... filter to delete one Tenants
     *   }
     * })
     * 
     */
    delete<T extends tenantsDeleteArgs>(args: SelectSubset<T, tenantsDeleteArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenants.
     * @param {tenantsUpdateArgs} args - Arguments to update one Tenants.
     * @example
     * // Update one Tenants
     * const tenants = await prisma.tenants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tenantsUpdateArgs>(args: SelectSubset<T, tenantsUpdateArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {tenantsDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tenantsDeleteManyArgs>(args?: SelectSubset<T, tenantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenants = await prisma.tenants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tenantsUpdateManyArgs>(args: SelectSubset<T, tenantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenants.
     * @param {tenantsUpsertArgs} args - Arguments to update or create a Tenants.
     * @example
     * // Update or create a Tenants
     * const tenants = await prisma.tenants.upsert({
     *   create: {
     *     // ... data to create a Tenants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenants we want to update
     *   }
     * })
     */
    upsert<T extends tenantsUpsertArgs>(args: SelectSubset<T, tenantsUpsertArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenants.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends tenantsCountArgs>(
      args?: Subset<T, tenantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantsAggregateArgs>(args: Subset<T, TenantsAggregateArgs>): Prisma.PrismaPromise<GetTenantsAggregateType<T>>

    /**
     * Group by Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsGroupByArgs} args - Group by arguments.
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
      T extends tenantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tenantsGroupByArgs['orderBy'] }
        : { orderBy?: tenantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tenantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tenants model
   */
  readonly fields: tenantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tenants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tenantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tenants$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tenants$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventos<T extends tenants$eventosArgs<ExtArgs> = {}>(args?: Subset<T, tenants$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stripeAccount<T extends tenants$stripeAccountArgs<ExtArgs> = {}>(args?: Subset<T, tenants$stripeAccountArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends tenants$ordersArgs<ExtArgs> = {}>(args?: Subset<T, tenants$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tenants model
   */
  interface tenantsFieldRefs {
    readonly id: FieldRef<"tenants", 'String'>
    readonly nome: FieldRef<"tenants", 'String'>
    readonly cnpj: FieldRef<"tenants", 'String'>
    readonly telefone: FieldRef<"tenants", 'String'>
    readonly email: FieldRef<"tenants", 'String'>
    readonly site: FieldRef<"tenants", 'String'>
    readonly slug: FieldRef<"tenants", 'String'>
    readonly status: FieldRef<"tenants", 'TenantStatus'>
    readonly createdAt: FieldRef<"tenants", 'DateTime'>
    readonly updated_at: FieldRef<"tenants", 'DateTime'>
    readonly logoUrl: FieldRef<"tenants", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tenants findUnique
   */
  export type tenantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants findUniqueOrThrow
   */
  export type tenantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants findFirst
   */
  export type tenantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants findFirstOrThrow
   */
  export type tenantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants findMany
   */
  export type tenantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants create
   */
  export type tenantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The data needed to create a tenants.
     */
    data: XOR<tenantsCreateInput, tenantsUncheckedCreateInput>
  }

  /**
   * tenants createMany
   */
  export type tenantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tenants.
     */
    data: tenantsCreateManyInput | tenantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tenants update
   */
  export type tenantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The data needed to update a tenants.
     */
    data: XOR<tenantsUpdateInput, tenantsUncheckedUpdateInput>
    /**
     * Choose, which tenants to update.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants updateMany
   */
  export type tenantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tenants.
     */
    data: XOR<tenantsUpdateManyMutationInput, tenantsUncheckedUpdateManyInput>
    /**
     * Filter which tenants to update
     */
    where?: tenantsWhereInput
    /**
     * Limit how many tenants to update.
     */
    limit?: number
  }

  /**
   * tenants upsert
   */
  export type tenantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The filter to search for the tenants to update in case it exists.
     */
    where: tenantsWhereUniqueInput
    /**
     * In case the tenants found by the `where` argument doesn't exist, create a new tenants with this data.
     */
    create: XOR<tenantsCreateInput, tenantsUncheckedCreateInput>
    /**
     * In case the tenants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tenantsUpdateInput, tenantsUncheckedUpdateInput>
  }

  /**
   * tenants delete
   */
  export type tenantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter which tenants to delete.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants deleteMany
   */
  export type tenantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenants to delete
     */
    where?: tenantsWhereInput
    /**
     * Limit how many tenants to delete.
     */
    limit?: number
  }

  /**
   * tenants.usuarios
   */
  export type tenants$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * tenants.eventos
   */
  export type tenants$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    cursor?: eventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * tenants.stripeAccount
   */
  export type tenants$stripeAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    where?: StripeAccountWhereInput
  }

  /**
   * tenants.orders
   */
  export type tenants$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * tenants without action
   */
  export type tenantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
  }


  /**
   * Model eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    titulo: string | null
    descricao: string | null
    linkSlug: string | null
    startDate: Date | null
    closingDate: Date | null
    status: $Enums.EventoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventosMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    titulo: string | null
    descricao: string | null
    linkSlug: string | null
    startDate: Date | null
    closingDate: Date | null
    status: $Enums.EventoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventosCountAggregateOutputType = {
    id: number
    tenantId: number
    titulo: number
    descricao: number
    linkSlug: number
    startDate: number
    closingDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventosMinAggregateInputType = {
    id?: true
    tenantId?: true
    titulo?: true
    descricao?: true
    linkSlug?: true
    startDate?: true
    closingDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventosMaxAggregateInputType = {
    id?: true
    tenantId?: true
    titulo?: true
    descricao?: true
    linkSlug?: true
    startDate?: true
    closingDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventosCountAggregateInputType = {
    id?: true
    tenantId?: true
    titulo?: true
    descricao?: true
    linkSlug?: true
    startDate?: true
    closingDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to aggregate.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithAggregationInput | eventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id: string
    tenantId: string
    titulo: string
    descricao: string | null
    linkSlug: string
    startDate: Date
    closingDate: Date
    status: $Enums.EventoStatus
    createdAt: Date
    updatedAt: Date
    _count: EventosCountAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    titulo?: boolean
    descricao?: boolean
    linkSlug?: boolean
    startDate?: boolean
    closingDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    batches?: boolean | eventos$batchesArgs<ExtArgs>
    tickets?: boolean | eventos$ticketsArgs<ExtArgs>
    orders?: boolean | eventos$ordersArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>



  export type eventosSelectScalar = {
    id?: boolean
    tenantId?: boolean
    titulo?: boolean
    descricao?: boolean
    linkSlug?: boolean
    startDate?: boolean
    closingDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type eventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "titulo" | "descricao" | "linkSlug" | "startDate" | "closingDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["eventos"]>
  export type eventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    batches?: boolean | eventos$batchesArgs<ExtArgs>
    tickets?: boolean | eventos$ticketsArgs<ExtArgs>
    orders?: boolean | eventos$ordersArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos"
    objects: {
      tenant: Prisma.$tenantsPayload<ExtArgs>
      batches: Prisma.$BatchPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      titulo: string
      descricao: string | null
      linkSlug: string
      startDate: Date
      closingDate: Date
      status: $Enums.EventoStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type eventosGetPayload<S extends boolean | null | undefined | eventosDefaultArgs> = $Result.GetResult<Prisma.$eventosPayload, S>

  type eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos'], meta: { name: 'eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {eventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventosFindUniqueArgs>(args: SelectSubset<T, eventosFindUniqueArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventosFindFirstArgs>(args?: SelectSubset<T, eventosFindFirstArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventosWithIdOnly = await prisma.eventos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventosFindManyArgs>(args?: SelectSubset<T, eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos.
     * @param {eventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends eventosCreateArgs>(args: SelectSubset<T, eventosCreateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {eventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventosCreateManyArgs>(args?: SelectSubset<T, eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Eventos.
     * @param {eventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends eventosDeleteArgs>(args: SelectSubset<T, eventosDeleteArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos.
     * @param {eventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventosUpdateArgs>(args: SelectSubset<T, eventosUpdateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {eventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventosDeleteManyArgs>(args?: SelectSubset<T, eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventosUpdateManyArgs>(args: SelectSubset<T, eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Eventos.
     * @param {eventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends eventosUpsertArgs>(args: SelectSubset<T, eventosUpsertArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventosCountArgs>(
      args?: Subset<T, eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosGroupByArgs} args - Group by arguments.
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
      T extends eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventosGroupByArgs['orderBy'] }
        : { orderBy?: eventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos model
   */
  readonly fields: eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batches<T extends eventos$batchesArgs<ExtArgs> = {}>(args?: Subset<T, eventos$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends eventos$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, eventos$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends eventos$ordersArgs<ExtArgs> = {}>(args?: Subset<T, eventos$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the eventos model
   */
  interface eventosFieldRefs {
    readonly id: FieldRef<"eventos", 'String'>
    readonly tenantId: FieldRef<"eventos", 'String'>
    readonly titulo: FieldRef<"eventos", 'String'>
    readonly descricao: FieldRef<"eventos", 'String'>
    readonly linkSlug: FieldRef<"eventos", 'String'>
    readonly startDate: FieldRef<"eventos", 'DateTime'>
    readonly closingDate: FieldRef<"eventos", 'DateTime'>
    readonly status: FieldRef<"eventos", 'EventoStatus'>
    readonly createdAt: FieldRef<"eventos", 'DateTime'>
    readonly updatedAt: FieldRef<"eventos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * eventos findUnique
   */
  export type eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findUniqueOrThrow
   */
  export type eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findFirst
   */
  export type eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findFirstOrThrow
   */
  export type eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findMany
   */
  export type eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos create
   */
  export type eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to create a eventos.
     */
    data: XOR<eventosCreateInput, eventosUncheckedCreateInput>
  }

  /**
   * eventos createMany
   */
  export type eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos update
   */
  export type eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to update a eventos.
     */
    data: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
    /**
     * Choose, which eventos to update.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos updateMany
   */
  export type eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * eventos upsert
   */
  export type eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The filter to search for the eventos to update in case it exists.
     */
    where: eventosWhereUniqueInput
    /**
     * In case the eventos found by the `where` argument doesn't exist, create a new eventos with this data.
     */
    create: XOR<eventosCreateInput, eventosUncheckedCreateInput>
    /**
     * In case the eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
  }

  /**
   * eventos delete
   */
  export type eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter which eventos to delete.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos deleteMany
   */
  export type eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to delete.
     */
    limit?: number
  }

  /**
   * eventos.batches
   */
  export type eventos$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * eventos.tickets
   */
  export type eventos$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * eventos.orders
   */
  export type eventos$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * eventos without action
   */
  export type eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchAvgAggregateOutputType = {
    totalSold: number | null
    order: number | null
  }

  export type BatchSumAggregateOutputType = {
    totalSold: number | null
    order: number | null
  }

  export type BatchMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    totalSold: number | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BatchMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    totalSold: number | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    eventId: number
    name: number
    description: number
    startDate: number
    endDate: number
    isActive: number
    totalSold: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BatchAvgAggregateInputType = {
    totalSold?: true
    order?: true
  }

  export type BatchSumAggregateInputType = {
    totalSold?: true
    order?: true
  }

  export type BatchMinAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
    totalSold?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
    totalSold?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
    totalSold?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _avg?: BatchAvgAggregateInputType
    _sum?: BatchSumAggregateInputType
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: string
    eventId: string
    name: string
    description: string | null
    startDate: Date
    endDate: Date
    isActive: boolean
    totalSold: number
    order: number
    createdAt: Date
    updatedAt: Date
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    totalSold?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | eventosDefaultArgs<ExtArgs>
    batchTickets?: boolean | Batch$batchTicketsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>



  export type BatchSelectScalar = {
    id?: boolean
    eventId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    totalSold?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "name" | "description" | "startDate" | "endDate" | "isActive" | "totalSold" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventosDefaultArgs<ExtArgs>
    batchTickets?: boolean | Batch$batchTicketsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      event: Prisma.$eventosPayload<ExtArgs>
      batchTickets: Prisma.$BatchTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      name: string
      description: string | null
      startDate: Date
      endDate: Date
      isActive: boolean
      totalSold: number
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
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
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batchTickets<T extends Batch$batchTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$batchTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'String'>
    readonly eventId: FieldRef<"Batch", 'String'>
    readonly name: FieldRef<"Batch", 'String'>
    readonly description: FieldRef<"Batch", 'String'>
    readonly startDate: FieldRef<"Batch", 'DateTime'>
    readonly endDate: FieldRef<"Batch", 'DateTime'>
    readonly isActive: FieldRef<"Batch", 'Boolean'>
    readonly totalSold: FieldRef<"Batch", 'Int'>
    readonly order: FieldRef<"Batch", 'Int'>
    readonly createdAt: FieldRef<"Batch", 'DateTime'>
    readonly updatedAt: FieldRef<"Batch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.batchTickets
   */
  export type Batch$batchTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    where?: BatchTicketWhereInput
    orderBy?: BatchTicketOrderByWithRelationInput | BatchTicketOrderByWithRelationInput[]
    cursor?: BatchTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchTicketScalarFieldEnum | BatchTicketScalarFieldEnum[]
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Model TicketType
   */

  export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  export type TicketTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketType to aggregate.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTypes
    **/
    _count?: true | TicketTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTypeMaxAggregateInputType
  }

  export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketType[P]>
      : GetScalarType<T[P], AggregateTicketType[P]>
  }




  export type TicketTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithAggregationInput | TicketTypeOrderByWithAggregationInput[]
    by: TicketTypeScalarFieldEnum[] | TicketTypeScalarFieldEnum
    having?: TicketTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTypeCountAggregateInputType | true
    _min?: TicketTypeMinAggregateInputType
    _max?: TicketTypeMaxAggregateInputType
  }

  export type TicketTypeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketTypeCountAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
        }
      >
    >


  export type TicketTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchTickets?: boolean | TicketType$batchTicketsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>



  export type TicketTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketType"]>
  export type TicketTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batchTickets?: boolean | TicketType$batchTicketsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketType"
    objects: {
      batchTickets: Prisma.$BatchTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketType"]>
    composites: {}
  }

  type TicketTypeGetPayload<S extends boolean | null | undefined | TicketTypeDefaultArgs> = $Result.GetResult<Prisma.$TicketTypePayload, S>

  type TicketTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketTypeCountAggregateInputType | true
    }

  export interface TicketTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketType'], meta: { name: 'TicketType' } }
    /**
     * Find zero or one TicketType that matches the filter.
     * @param {TicketTypeFindUniqueArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTypeFindUniqueArgs>(args: SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTypeFindUniqueOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTypeFindFirstArgs>(args?: SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany()
     * 
     * // Get first 10 TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTypeFindManyArgs>(args?: SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketType.
     * @param {TicketTypeCreateArgs} args - Arguments to create a TicketType.
     * @example
     * // Create one TicketType
     * const TicketType = await prisma.ticketType.create({
     *   data: {
     *     // ... data to create a TicketType
     *   }
     * })
     * 
     */
    create<T extends TicketTypeCreateArgs>(args: SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketTypes.
     * @param {TicketTypeCreateManyArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTypeCreateManyArgs>(args?: SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketType.
     * @param {TicketTypeDeleteArgs} args - Arguments to delete one TicketType.
     * @example
     * // Delete one TicketType
     * const TicketType = await prisma.ticketType.delete({
     *   where: {
     *     // ... filter to delete one TicketType
     *   }
     * })
     * 
     */
    delete<T extends TicketTypeDeleteArgs>(args: SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketType.
     * @param {TicketTypeUpdateArgs} args - Arguments to update one TicketType.
     * @example
     * // Update one TicketType
     * const ticketType = await prisma.ticketType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTypeUpdateArgs>(args: SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketTypes.
     * @param {TicketTypeDeleteManyArgs} args - Arguments to filter TicketTypes to delete.
     * @example
     * // Delete a few TicketTypes
     * const { count } = await prisma.ticketType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTypeDeleteManyArgs>(args?: SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTypeUpdateManyArgs>(args: SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketType.
     * @param {TicketTypeUpsertArgs} args - Arguments to update or create a TicketType.
     * @example
     * // Update or create a TicketType
     * const ticketType = await prisma.ticketType.upsert({
     *   create: {
     *     // ... data to create a TicketType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketType we want to update
     *   }
     * })
     */
    upsert<T extends TicketTypeUpsertArgs>(args: SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeCountArgs} args - Arguments to filter TicketTypes to count.
     * @example
     * // Count the number of TicketTypes
     * const count = await prisma.ticketType.count({
     *   where: {
     *     // ... the filter for the TicketTypes we want to count
     *   }
     * })
    **/
    count<T extends TicketTypeCountArgs>(
      args?: Subset<T, TicketTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketTypeAggregateArgs>(args: Subset<T, TicketTypeAggregateArgs>): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>

    /**
     * Group by TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeGroupByArgs} args - Group by arguments.
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
      T extends TicketTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTypeGroupByArgs['orderBy'] }
        : { orderBy?: TicketTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketType model
   */
  readonly fields: TicketTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batchTickets<T extends TicketType$batchTicketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketType$batchTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TicketType model
   */
  interface TicketTypeFieldRefs {
    readonly id: FieldRef<"TicketType", 'String'>
    readonly name: FieldRef<"TicketType", 'String'>
    readonly description: FieldRef<"TicketType", 'String'>
    readonly createdAt: FieldRef<"TicketType", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketType findUnique
   */
  export type TicketTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findUniqueOrThrow
   */
  export type TicketTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findFirst
   */
  export type TicketTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findFirstOrThrow
   */
  export type TicketTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findMany
   */
  export type TicketTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketTypes to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType create
   */
  export type TicketTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketType.
     */
    data: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
  }

  /**
   * TicketType createMany
   */
  export type TicketTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketType update
   */
  export type TicketTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketType.
     */
    data: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
    /**
     * Choose, which TicketType to update.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType updateMany
   */
  export type TicketTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
  }

  /**
   * TicketType upsert
   */
  export type TicketTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketType to update in case it exists.
     */
    where: TicketTypeWhereUniqueInput
    /**
     * In case the TicketType found by the `where` argument doesn't exist, create a new TicketType with this data.
     */
    create: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
    /**
     * In case the TicketType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
  }

  /**
   * TicketType delete
   */
  export type TicketTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter which TicketType to delete.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType deleteMany
   */
  export type TicketTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTypes to delete
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to delete.
     */
    limit?: number
  }

  /**
   * TicketType.batchTickets
   */
  export type TicketType$batchTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    where?: BatchTicketWhereInput
    orderBy?: BatchTicketOrderByWithRelationInput | BatchTicketOrderByWithRelationInput[]
    cursor?: BatchTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchTicketScalarFieldEnum | BatchTicketScalarFieldEnum[]
  }

  /**
   * TicketType without action
   */
  export type TicketTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
  }


  /**
   * Model BatchTicket
   */

  export type AggregateBatchTicket = {
    _count: BatchTicketCountAggregateOutputType | null
    _avg: BatchTicketAvgAggregateOutputType | null
    _sum: BatchTicketSumAggregateOutputType | null
    _min: BatchTicketMinAggregateOutputType | null
    _max: BatchTicketMaxAggregateOutputType | null
  }

  export type BatchTicketAvgAggregateOutputType = {
    price: Decimal | null
    quantity: number | null
    soldQuantity: number | null
    reservedQuantity: number | null
  }

  export type BatchTicketSumAggregateOutputType = {
    price: Decimal | null
    quantity: number | null
    soldQuantity: number | null
    reservedQuantity: number | null
  }

  export type BatchTicketMinAggregateOutputType = {
    id: string | null
    batchId: string | null
    ticketTypeId: string | null
    price: Decimal | null
    quantity: number | null
    soldQuantity: number | null
    reservedQuantity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BatchTicketMaxAggregateOutputType = {
    id: string | null
    batchId: string | null
    ticketTypeId: string | null
    price: Decimal | null
    quantity: number | null
    soldQuantity: number | null
    reservedQuantity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BatchTicketCountAggregateOutputType = {
    id: number
    batchId: number
    ticketTypeId: number
    price: number
    quantity: number
    soldQuantity: number
    reservedQuantity: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BatchTicketAvgAggregateInputType = {
    price?: true
    quantity?: true
    soldQuantity?: true
    reservedQuantity?: true
  }

  export type BatchTicketSumAggregateInputType = {
    price?: true
    quantity?: true
    soldQuantity?: true
    reservedQuantity?: true
  }

  export type BatchTicketMinAggregateInputType = {
    id?: true
    batchId?: true
    ticketTypeId?: true
    price?: true
    quantity?: true
    soldQuantity?: true
    reservedQuantity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BatchTicketMaxAggregateInputType = {
    id?: true
    batchId?: true
    ticketTypeId?: true
    price?: true
    quantity?: true
    soldQuantity?: true
    reservedQuantity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BatchTicketCountAggregateInputType = {
    id?: true
    batchId?: true
    ticketTypeId?: true
    price?: true
    quantity?: true
    soldQuantity?: true
    reservedQuantity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BatchTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchTicket to aggregate.
     */
    where?: BatchTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchTickets to fetch.
     */
    orderBy?: BatchTicketOrderByWithRelationInput | BatchTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BatchTickets
    **/
    _count?: true | BatchTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchTicketMaxAggregateInputType
  }

  export type GetBatchTicketAggregateType<T extends BatchTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateBatchTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatchTicket[P]>
      : GetScalarType<T[P], AggregateBatchTicket[P]>
  }




  export type BatchTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchTicketWhereInput
    orderBy?: BatchTicketOrderByWithAggregationInput | BatchTicketOrderByWithAggregationInput[]
    by: BatchTicketScalarFieldEnum[] | BatchTicketScalarFieldEnum
    having?: BatchTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchTicketCountAggregateInputType | true
    _avg?: BatchTicketAvgAggregateInputType
    _sum?: BatchTicketSumAggregateInputType
    _min?: BatchTicketMinAggregateInputType
    _max?: BatchTicketMaxAggregateInputType
  }

  export type BatchTicketGroupByOutputType = {
    id: string
    batchId: string
    ticketTypeId: string
    price: Decimal
    quantity: number
    soldQuantity: number
    reservedQuantity: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BatchTicketCountAggregateOutputType | null
    _avg: BatchTicketAvgAggregateOutputType | null
    _sum: BatchTicketSumAggregateOutputType | null
    _min: BatchTicketMinAggregateOutputType | null
    _max: BatchTicketMaxAggregateOutputType | null
  }

  type GetBatchTicketGroupByPayload<T extends BatchTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchTicketGroupByOutputType[P]>
            : GetScalarType<T[P], BatchTicketGroupByOutputType[P]>
        }
      >
    >


  export type BatchTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    ticketTypeId?: boolean
    price?: boolean
    quantity?: boolean
    soldQuantity?: boolean
    reservedQuantity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    tickets?: boolean | BatchTicket$ticketsArgs<ExtArgs>
    orderItems?: boolean | BatchTicket$orderItemsArgs<ExtArgs>
    reservations?: boolean | BatchTicket$reservationsArgs<ExtArgs>
    _count?: boolean | BatchTicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batchTicket"]>



  export type BatchTicketSelectScalar = {
    id?: boolean
    batchId?: boolean
    ticketTypeId?: boolean
    price?: boolean
    quantity?: boolean
    soldQuantity?: boolean
    reservedQuantity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BatchTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchId" | "ticketTypeId" | "price" | "quantity" | "soldQuantity" | "reservedQuantity" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["batchTicket"]>
  export type BatchTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    tickets?: boolean | BatchTicket$ticketsArgs<ExtArgs>
    orderItems?: boolean | BatchTicket$orderItemsArgs<ExtArgs>
    reservations?: boolean | BatchTicket$reservationsArgs<ExtArgs>
    _count?: boolean | BatchTicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BatchTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BatchTicket"
    objects: {
      batch: Prisma.$BatchPayload<ExtArgs>
      ticketType: Prisma.$TicketTypePayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchId: string
      ticketTypeId: string
      price: Prisma.Decimal
      quantity: number
      soldQuantity: number
      reservedQuantity: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["batchTicket"]>
    composites: {}
  }

  type BatchTicketGetPayload<S extends boolean | null | undefined | BatchTicketDefaultArgs> = $Result.GetResult<Prisma.$BatchTicketPayload, S>

  type BatchTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchTicketCountAggregateInputType | true
    }

  export interface BatchTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BatchTicket'], meta: { name: 'BatchTicket' } }
    /**
     * Find zero or one BatchTicket that matches the filter.
     * @param {BatchTicketFindUniqueArgs} args - Arguments to find a BatchTicket
     * @example
     * // Get one BatchTicket
     * const batchTicket = await prisma.batchTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchTicketFindUniqueArgs>(args: SelectSubset<T, BatchTicketFindUniqueArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BatchTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchTicketFindUniqueOrThrowArgs} args - Arguments to find a BatchTicket
     * @example
     * // Get one BatchTicket
     * const batchTicket = await prisma.batchTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BatchTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchTicketFindFirstArgs} args - Arguments to find a BatchTicket
     * @example
     * // Get one BatchTicket
     * const batchTicket = await prisma.batchTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchTicketFindFirstArgs>(args?: SelectSubset<T, BatchTicketFindFirstArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BatchTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchTicketFindFirstOrThrowArgs} args - Arguments to find a BatchTicket
     * @example
     * // Get one BatchTicket
     * const batchTicket = await prisma.batchTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BatchTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BatchTickets
     * const batchTickets = await prisma.batchTicket.findMany()
     * 
     * // Get first 10 BatchTickets
     * const batchTickets = await prisma.batchTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchTicketWithIdOnly = await prisma.batchTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchTicketFindManyArgs>(args?: SelectSubset<T, BatchTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BatchTicket.
     * @param {BatchTicketCreateArgs} args - Arguments to create a BatchTicket.
     * @example
     * // Create one BatchTicket
     * const BatchTicket = await prisma.batchTicket.create({
     *   data: {
     *     // ... data to create a BatchTicket
     *   }
     * })
     * 
     */
    create<T extends BatchTicketCreateArgs>(args: SelectSubset<T, BatchTicketCreateArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BatchTickets.
     * @param {BatchTicketCreateManyArgs} args - Arguments to create many BatchTickets.
     * @example
     * // Create many BatchTickets
     * const batchTicket = await prisma.batchTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchTicketCreateManyArgs>(args?: SelectSubset<T, BatchTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BatchTicket.
     * @param {BatchTicketDeleteArgs} args - Arguments to delete one BatchTicket.
     * @example
     * // Delete one BatchTicket
     * const BatchTicket = await prisma.batchTicket.delete({
     *   where: {
     *     // ... filter to delete one BatchTicket
     *   }
     * })
     * 
     */
    delete<T extends BatchTicketDeleteArgs>(args: SelectSubset<T, BatchTicketDeleteArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BatchTicket.
     * @param {BatchTicketUpdateArgs} args - Arguments to update one BatchTicket.
     * @example
     * // Update one BatchTicket
     * const batchTicket = await prisma.batchTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchTicketUpdateArgs>(args: SelectSubset<T, BatchTicketUpdateArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BatchTickets.
     * @param {BatchTicketDeleteManyArgs} args - Arguments to filter BatchTickets to delete.
     * @example
     * // Delete a few BatchTickets
     * const { count } = await prisma.batchTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchTicketDeleteManyArgs>(args?: SelectSubset<T, BatchTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BatchTickets
     * const batchTicket = await prisma.batchTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchTicketUpdateManyArgs>(args: SelectSubset<T, BatchTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BatchTicket.
     * @param {BatchTicketUpsertArgs} args - Arguments to update or create a BatchTicket.
     * @example
     * // Update or create a BatchTicket
     * const batchTicket = await prisma.batchTicket.upsert({
     *   create: {
     *     // ... data to create a BatchTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BatchTicket we want to update
     *   }
     * })
     */
    upsert<T extends BatchTicketUpsertArgs>(args: SelectSubset<T, BatchTicketUpsertArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BatchTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchTicketCountArgs} args - Arguments to filter BatchTickets to count.
     * @example
     * // Count the number of BatchTickets
     * const count = await prisma.batchTicket.count({
     *   where: {
     *     // ... the filter for the BatchTickets we want to count
     *   }
     * })
    **/
    count<T extends BatchTicketCountArgs>(
      args?: Subset<T, BatchTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BatchTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchTicketAggregateArgs>(args: Subset<T, BatchTicketAggregateArgs>): Prisma.PrismaPromise<GetBatchTicketAggregateType<T>>

    /**
     * Group by BatchTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchTicketGroupByArgs} args - Group by arguments.
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
      T extends BatchTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchTicketGroupByArgs['orderBy'] }
        : { orderBy?: BatchTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BatchTicket model
   */
  readonly fields: BatchTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BatchTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketType<T extends TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketTypeDefaultArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends BatchTicket$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, BatchTicket$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends BatchTicket$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, BatchTicket$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends BatchTicket$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, BatchTicket$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BatchTicket model
   */
  interface BatchTicketFieldRefs {
    readonly id: FieldRef<"BatchTicket", 'String'>
    readonly batchId: FieldRef<"BatchTicket", 'String'>
    readonly ticketTypeId: FieldRef<"BatchTicket", 'String'>
    readonly price: FieldRef<"BatchTicket", 'Decimal'>
    readonly quantity: FieldRef<"BatchTicket", 'Int'>
    readonly soldQuantity: FieldRef<"BatchTicket", 'Int'>
    readonly reservedQuantity: FieldRef<"BatchTicket", 'Int'>
    readonly isActive: FieldRef<"BatchTicket", 'Boolean'>
    readonly createdAt: FieldRef<"BatchTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"BatchTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BatchTicket findUnique
   */
  export type BatchTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * Filter, which BatchTicket to fetch.
     */
    where: BatchTicketWhereUniqueInput
  }

  /**
   * BatchTicket findUniqueOrThrow
   */
  export type BatchTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * Filter, which BatchTicket to fetch.
     */
    where: BatchTicketWhereUniqueInput
  }

  /**
   * BatchTicket findFirst
   */
  export type BatchTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * Filter, which BatchTicket to fetch.
     */
    where?: BatchTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchTickets to fetch.
     */
    orderBy?: BatchTicketOrderByWithRelationInput | BatchTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchTickets.
     */
    cursor?: BatchTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchTickets.
     */
    distinct?: BatchTicketScalarFieldEnum | BatchTicketScalarFieldEnum[]
  }

  /**
   * BatchTicket findFirstOrThrow
   */
  export type BatchTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * Filter, which BatchTicket to fetch.
     */
    where?: BatchTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchTickets to fetch.
     */
    orderBy?: BatchTicketOrderByWithRelationInput | BatchTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchTickets.
     */
    cursor?: BatchTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchTickets.
     */
    distinct?: BatchTicketScalarFieldEnum | BatchTicketScalarFieldEnum[]
  }

  /**
   * BatchTicket findMany
   */
  export type BatchTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * Filter, which BatchTickets to fetch.
     */
    where?: BatchTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchTickets to fetch.
     */
    orderBy?: BatchTicketOrderByWithRelationInput | BatchTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BatchTickets.
     */
    cursor?: BatchTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchTickets.
     */
    skip?: number
    distinct?: BatchTicketScalarFieldEnum | BatchTicketScalarFieldEnum[]
  }

  /**
   * BatchTicket create
   */
  export type BatchTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a BatchTicket.
     */
    data: XOR<BatchTicketCreateInput, BatchTicketUncheckedCreateInput>
  }

  /**
   * BatchTicket createMany
   */
  export type BatchTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BatchTickets.
     */
    data: BatchTicketCreateManyInput | BatchTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchTicket update
   */
  export type BatchTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a BatchTicket.
     */
    data: XOR<BatchTicketUpdateInput, BatchTicketUncheckedUpdateInput>
    /**
     * Choose, which BatchTicket to update.
     */
    where: BatchTicketWhereUniqueInput
  }

  /**
   * BatchTicket updateMany
   */
  export type BatchTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BatchTickets.
     */
    data: XOR<BatchTicketUpdateManyMutationInput, BatchTicketUncheckedUpdateManyInput>
    /**
     * Filter which BatchTickets to update
     */
    where?: BatchTicketWhereInput
    /**
     * Limit how many BatchTickets to update.
     */
    limit?: number
  }

  /**
   * BatchTicket upsert
   */
  export type BatchTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the BatchTicket to update in case it exists.
     */
    where: BatchTicketWhereUniqueInput
    /**
     * In case the BatchTicket found by the `where` argument doesn't exist, create a new BatchTicket with this data.
     */
    create: XOR<BatchTicketCreateInput, BatchTicketUncheckedCreateInput>
    /**
     * In case the BatchTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchTicketUpdateInput, BatchTicketUncheckedUpdateInput>
  }

  /**
   * BatchTicket delete
   */
  export type BatchTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
    /**
     * Filter which BatchTicket to delete.
     */
    where: BatchTicketWhereUniqueInput
  }

  /**
   * BatchTicket deleteMany
   */
  export type BatchTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchTickets to delete
     */
    where?: BatchTicketWhereInput
    /**
     * Limit how many BatchTickets to delete.
     */
    limit?: number
  }

  /**
   * BatchTicket.tickets
   */
  export type BatchTicket$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * BatchTicket.orderItems
   */
  export type BatchTicket$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * BatchTicket.reservations
   */
  export type BatchTicket$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * BatchTicket without action
   */
  export type BatchTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchTicket
     */
    select?: BatchTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchTicket
     */
    omit?: BatchTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchTicketInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type TicketSumAggregateOutputType = {
    price: Decimal | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    eventId: string | null
    batchTicketId: string | null
    hash: string | null
    ownerName: string | null
    ownerEmail: string | null
    ownerDocument: string | null
    price: Decimal | null
    status: $Enums.TicketStatus | null
    checkedInAt: Date | null
    checkedInBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    eventId: string | null
    batchTicketId: string | null
    hash: string | null
    ownerName: string | null
    ownerEmail: string | null
    ownerDocument: string | null
    price: Decimal | null
    status: $Enums.TicketStatus | null
    checkedInAt: Date | null
    checkedInBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    orderId: number
    eventId: number
    batchTicketId: number
    hash: number
    ownerName: number
    ownerEmail: number
    ownerDocument: number
    price: number
    status: number
    checkedInAt: number
    checkedInBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    price?: true
  }

  export type TicketSumAggregateInputType = {
    price?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    orderId?: true
    eventId?: true
    batchTicketId?: true
    hash?: true
    ownerName?: true
    ownerEmail?: true
    ownerDocument?: true
    price?: true
    status?: true
    checkedInAt?: true
    checkedInBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    orderId?: true
    eventId?: true
    batchTicketId?: true
    hash?: true
    ownerName?: true
    ownerEmail?: true
    ownerDocument?: true
    price?: true
    status?: true
    checkedInAt?: true
    checkedInBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    orderId?: true
    eventId?: true
    batchTicketId?: true
    hash?: true
    ownerName?: true
    ownerEmail?: true
    ownerDocument?: true
    price?: true
    status?: true
    checkedInAt?: true
    checkedInBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    orderId: string
    eventId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument: string | null
    price: Decimal
    status: $Enums.TicketStatus
    checkedInAt: Date | null
    checkedInBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    eventId?: boolean
    batchTicketId?: boolean
    hash?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    ownerDocument?: boolean
    price?: boolean
    status?: boolean
    checkedInAt?: boolean
    checkedInBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    event?: boolean | eventosDefaultArgs<ExtArgs>
    batchTicket?: boolean | BatchTicketDefaultArgs<ExtArgs>
    checkedInUser?: boolean | Ticket$checkedInUserArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    orderId?: boolean
    eventId?: boolean
    batchTicketId?: boolean
    hash?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    ownerDocument?: boolean
    price?: boolean
    status?: boolean
    checkedInAt?: boolean
    checkedInBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "eventId" | "batchTicketId" | "hash" | "ownerName" | "ownerEmail" | "ownerDocument" | "price" | "status" | "checkedInAt" | "checkedInBy" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    event?: boolean | eventosDefaultArgs<ExtArgs>
    batchTicket?: boolean | BatchTicketDefaultArgs<ExtArgs>
    checkedInUser?: boolean | Ticket$checkedInUserArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      event: Prisma.$eventosPayload<ExtArgs>
      batchTicket: Prisma.$BatchTicketPayload<ExtArgs>
      checkedInUser: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      eventId: string
      batchTicketId: string
      hash: string
      ownerName: string
      ownerEmail: string
      ownerDocument: string | null
      price: Prisma.Decimal
      status: $Enums.TicketStatus
      checkedInAt: Date | null
      checkedInBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batchTicket<T extends BatchTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchTicketDefaultArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checkedInUser<T extends Ticket$checkedInUserArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$checkedInUserArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly orderId: FieldRef<"Ticket", 'String'>
    readonly eventId: FieldRef<"Ticket", 'String'>
    readonly batchTicketId: FieldRef<"Ticket", 'String'>
    readonly hash: FieldRef<"Ticket", 'String'>
    readonly ownerName: FieldRef<"Ticket", 'String'>
    readonly ownerEmail: FieldRef<"Ticket", 'String'>
    readonly ownerDocument: FieldRef<"Ticket", 'String'>
    readonly price: FieldRef<"Ticket", 'Decimal'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly checkedInAt: FieldRef<"Ticket", 'DateTime'>
    readonly checkedInBy: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.checkedInUser
   */
  export type Ticket$checkedInUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    cargo: $Enums.CargoUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    cargo: $Enums.CargoUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    tenantId: number
    nome: number
    email: number
    senhaHash: number
    cargo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    tenantId?: true
    nome?: true
    email?: true
    senhaHash?: true
    cargo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    tenantId?: true
    nome?: true
    email?: true
    senhaHash?: true
    cargo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    tenantId?: true
    nome?: true
    email?: true
    senhaHash?: true
    cargo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    tenantId: string | null
    nome: string
    email: string
    senhaHash: string
    cargo: $Enums.CargoUsuario
    createdAt: Date
    updatedAt: Date
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    cargo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | usuarios$tenantArgs<ExtArgs>
    orders?: boolean | usuarios$ordersArgs<ExtArgs>
    tickets?: boolean | usuarios$ticketsArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    tenantId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    cargo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "nome" | "email" | "senhaHash" | "cargo" | "createdAt" | "updatedAt", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | usuarios$tenantArgs<ExtArgs>
    orders?: boolean | usuarios$ordersArgs<ExtArgs>
    tickets?: boolean | usuarios$ticketsArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      tenant: Prisma.$tenantsPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string | null
      nome: string
      email: string
      senhaHash: string
      cargo: $Enums.CargoUsuario
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends usuarios$tenantArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$tenantArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends usuarios$ordersArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends usuarios$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'String'>
    readonly tenantId: FieldRef<"usuarios", 'String'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senhaHash: FieldRef<"usuarios", 'String'>
    readonly cargo: FieldRef<"usuarios", 'CargoUsuario'>
    readonly createdAt: FieldRef<"usuarios", 'DateTime'>
    readonly updatedAt: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.tenant
   */
  export type usuarios$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    where?: tenantsWhereInput
  }

  /**
   * usuarios.orders
   */
  export type usuarios$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * usuarios.tickets
   */
  export type usuarios$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model GlobalPaymentConfig
   */

  export type AggregateGlobalPaymentConfig = {
    _count: GlobalPaymentConfigCountAggregateOutputType | null
    _avg: GlobalPaymentConfigAvgAggregateOutputType | null
    _sum: GlobalPaymentConfigSumAggregateOutputType | null
    _min: GlobalPaymentConfigMinAggregateOutputType | null
    _max: GlobalPaymentConfigMaxAggregateOutputType | null
  }

  export type GlobalPaymentConfigAvgAggregateOutputType = {
    defaultPlatformFeePercent: Decimal | null
    defaultPlatformFeeFixed: Decimal | null
    defaultServiceFeePercent: Decimal | null
    defaultServiceFeeFixed: Decimal | null
    maxInstallments: number | null
    minInstallmentValue: Decimal | null
    interestFree: number | null
    refundDeadlineDays: number | null
  }

  export type GlobalPaymentConfigSumAggregateOutputType = {
    defaultPlatformFeePercent: Decimal | null
    defaultPlatformFeeFixed: Decimal | null
    defaultServiceFeePercent: Decimal | null
    defaultServiceFeeFixed: Decimal | null
    maxInstallments: number | null
    minInstallmentValue: Decimal | null
    interestFree: number | null
    refundDeadlineDays: number | null
  }

  export type GlobalPaymentConfigMinAggregateOutputType = {
    id: string | null
    defaultPlatformFeePercent: Decimal | null
    defaultPlatformFeeFixed: Decimal | null
    defaultServiceFeePercent: Decimal | null
    defaultServiceFeeFixed: Decimal | null
    defaultServiceFeePayerType: string | null
    acceptCreditCard: boolean | null
    acceptDebitCard: boolean | null
    acceptPix: boolean | null
    acceptBoleto: boolean | null
    maxInstallments: number | null
    minInstallmentValue: Decimal | null
    interestFree: number | null
    allowRefunds: boolean | null
    refundDeadlineDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalPaymentConfigMaxAggregateOutputType = {
    id: string | null
    defaultPlatformFeePercent: Decimal | null
    defaultPlatformFeeFixed: Decimal | null
    defaultServiceFeePercent: Decimal | null
    defaultServiceFeeFixed: Decimal | null
    defaultServiceFeePayerType: string | null
    acceptCreditCard: boolean | null
    acceptDebitCard: boolean | null
    acceptPix: boolean | null
    acceptBoleto: boolean | null
    maxInstallments: number | null
    minInstallmentValue: Decimal | null
    interestFree: number | null
    allowRefunds: boolean | null
    refundDeadlineDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalPaymentConfigCountAggregateOutputType = {
    id: number
    defaultPlatformFeePercent: number
    defaultPlatformFeeFixed: number
    defaultServiceFeePercent: number
    defaultServiceFeeFixed: number
    defaultServiceFeePayerType: number
    acceptCreditCard: number
    acceptDebitCard: number
    acceptPix: number
    acceptBoleto: number
    maxInstallments: number
    minInstallmentValue: number
    interestFree: number
    allowRefunds: number
    refundDeadlineDays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlobalPaymentConfigAvgAggregateInputType = {
    defaultPlatformFeePercent?: true
    defaultPlatformFeeFixed?: true
    defaultServiceFeePercent?: true
    defaultServiceFeeFixed?: true
    maxInstallments?: true
    minInstallmentValue?: true
    interestFree?: true
    refundDeadlineDays?: true
  }

  export type GlobalPaymentConfigSumAggregateInputType = {
    defaultPlatformFeePercent?: true
    defaultPlatformFeeFixed?: true
    defaultServiceFeePercent?: true
    defaultServiceFeeFixed?: true
    maxInstallments?: true
    minInstallmentValue?: true
    interestFree?: true
    refundDeadlineDays?: true
  }

  export type GlobalPaymentConfigMinAggregateInputType = {
    id?: true
    defaultPlatformFeePercent?: true
    defaultPlatformFeeFixed?: true
    defaultServiceFeePercent?: true
    defaultServiceFeeFixed?: true
    defaultServiceFeePayerType?: true
    acceptCreditCard?: true
    acceptDebitCard?: true
    acceptPix?: true
    acceptBoleto?: true
    maxInstallments?: true
    minInstallmentValue?: true
    interestFree?: true
    allowRefunds?: true
    refundDeadlineDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalPaymentConfigMaxAggregateInputType = {
    id?: true
    defaultPlatformFeePercent?: true
    defaultPlatformFeeFixed?: true
    defaultServiceFeePercent?: true
    defaultServiceFeeFixed?: true
    defaultServiceFeePayerType?: true
    acceptCreditCard?: true
    acceptDebitCard?: true
    acceptPix?: true
    acceptBoleto?: true
    maxInstallments?: true
    minInstallmentValue?: true
    interestFree?: true
    allowRefunds?: true
    refundDeadlineDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalPaymentConfigCountAggregateInputType = {
    id?: true
    defaultPlatformFeePercent?: true
    defaultPlatformFeeFixed?: true
    defaultServiceFeePercent?: true
    defaultServiceFeeFixed?: true
    defaultServiceFeePayerType?: true
    acceptCreditCard?: true
    acceptDebitCard?: true
    acceptPix?: true
    acceptBoleto?: true
    maxInstallments?: true
    minInstallmentValue?: true
    interestFree?: true
    allowRefunds?: true
    refundDeadlineDays?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalPaymentConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPaymentConfig to aggregate.
     */
    where?: GlobalPaymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPaymentConfigs to fetch.
     */
    orderBy?: GlobalPaymentConfigOrderByWithRelationInput | GlobalPaymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalPaymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPaymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPaymentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalPaymentConfigs
    **/
    _count?: true | GlobalPaymentConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalPaymentConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalPaymentConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalPaymentConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalPaymentConfigMaxAggregateInputType
  }

  export type GetGlobalPaymentConfigAggregateType<T extends GlobalPaymentConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalPaymentConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalPaymentConfig[P]>
      : GetScalarType<T[P], AggregateGlobalPaymentConfig[P]>
  }




  export type GlobalPaymentConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalPaymentConfigWhereInput
    orderBy?: GlobalPaymentConfigOrderByWithAggregationInput | GlobalPaymentConfigOrderByWithAggregationInput[]
    by: GlobalPaymentConfigScalarFieldEnum[] | GlobalPaymentConfigScalarFieldEnum
    having?: GlobalPaymentConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalPaymentConfigCountAggregateInputType | true
    _avg?: GlobalPaymentConfigAvgAggregateInputType
    _sum?: GlobalPaymentConfigSumAggregateInputType
    _min?: GlobalPaymentConfigMinAggregateInputType
    _max?: GlobalPaymentConfigMaxAggregateInputType
  }

  export type GlobalPaymentConfigGroupByOutputType = {
    id: string
    defaultPlatformFeePercent: Decimal
    defaultPlatformFeeFixed: Decimal
    defaultServiceFeePercent: Decimal
    defaultServiceFeeFixed: Decimal
    defaultServiceFeePayerType: string
    acceptCreditCard: boolean
    acceptDebitCard: boolean
    acceptPix: boolean
    acceptBoleto: boolean
    maxInstallments: number
    minInstallmentValue: Decimal
    interestFree: number
    allowRefunds: boolean
    refundDeadlineDays: number
    createdAt: Date
    updatedAt: Date
    _count: GlobalPaymentConfigCountAggregateOutputType | null
    _avg: GlobalPaymentConfigAvgAggregateOutputType | null
    _sum: GlobalPaymentConfigSumAggregateOutputType | null
    _min: GlobalPaymentConfigMinAggregateOutputType | null
    _max: GlobalPaymentConfigMaxAggregateOutputType | null
  }

  type GetGlobalPaymentConfigGroupByPayload<T extends GlobalPaymentConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalPaymentConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalPaymentConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalPaymentConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalPaymentConfigGroupByOutputType[P]>
        }
      >
    >


  export type GlobalPaymentConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defaultPlatformFeePercent?: boolean
    defaultPlatformFeeFixed?: boolean
    defaultServiceFeePercent?: boolean
    defaultServiceFeeFixed?: boolean
    defaultServiceFeePayerType?: boolean
    acceptCreditCard?: boolean
    acceptDebitCard?: boolean
    acceptPix?: boolean
    acceptBoleto?: boolean
    maxInstallments?: boolean
    minInstallmentValue?: boolean
    interestFree?: boolean
    allowRefunds?: boolean
    refundDeadlineDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalPaymentConfig"]>



  export type GlobalPaymentConfigSelectScalar = {
    id?: boolean
    defaultPlatformFeePercent?: boolean
    defaultPlatformFeeFixed?: boolean
    defaultServiceFeePercent?: boolean
    defaultServiceFeeFixed?: boolean
    defaultServiceFeePayerType?: boolean
    acceptCreditCard?: boolean
    acceptDebitCard?: boolean
    acceptPix?: boolean
    acceptBoleto?: boolean
    maxInstallments?: boolean
    minInstallmentValue?: boolean
    interestFree?: boolean
    allowRefunds?: boolean
    refundDeadlineDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlobalPaymentConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "defaultPlatformFeePercent" | "defaultPlatformFeeFixed" | "defaultServiceFeePercent" | "defaultServiceFeeFixed" | "defaultServiceFeePayerType" | "acceptCreditCard" | "acceptDebitCard" | "acceptPix" | "acceptBoleto" | "maxInstallments" | "minInstallmentValue" | "interestFree" | "allowRefunds" | "refundDeadlineDays" | "createdAt" | "updatedAt", ExtArgs["result"]["globalPaymentConfig"]>

  export type $GlobalPaymentConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalPaymentConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      defaultPlatformFeePercent: Prisma.Decimal
      defaultPlatformFeeFixed: Prisma.Decimal
      defaultServiceFeePercent: Prisma.Decimal
      defaultServiceFeeFixed: Prisma.Decimal
      defaultServiceFeePayerType: string
      acceptCreditCard: boolean
      acceptDebitCard: boolean
      acceptPix: boolean
      acceptBoleto: boolean
      maxInstallments: number
      minInstallmentValue: Prisma.Decimal
      interestFree: number
      allowRefunds: boolean
      refundDeadlineDays: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["globalPaymentConfig"]>
    composites: {}
  }

  type GlobalPaymentConfigGetPayload<S extends boolean | null | undefined | GlobalPaymentConfigDefaultArgs> = $Result.GetResult<Prisma.$GlobalPaymentConfigPayload, S>

  type GlobalPaymentConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalPaymentConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalPaymentConfigCountAggregateInputType | true
    }

  export interface GlobalPaymentConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalPaymentConfig'], meta: { name: 'GlobalPaymentConfig' } }
    /**
     * Find zero or one GlobalPaymentConfig that matches the filter.
     * @param {GlobalPaymentConfigFindUniqueArgs} args - Arguments to find a GlobalPaymentConfig
     * @example
     * // Get one GlobalPaymentConfig
     * const globalPaymentConfig = await prisma.globalPaymentConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalPaymentConfigFindUniqueArgs>(args: SelectSubset<T, GlobalPaymentConfigFindUniqueArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalPaymentConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalPaymentConfigFindUniqueOrThrowArgs} args - Arguments to find a GlobalPaymentConfig
     * @example
     * // Get one GlobalPaymentConfig
     * const globalPaymentConfig = await prisma.globalPaymentConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalPaymentConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalPaymentConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPaymentConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPaymentConfigFindFirstArgs} args - Arguments to find a GlobalPaymentConfig
     * @example
     * // Get one GlobalPaymentConfig
     * const globalPaymentConfig = await prisma.globalPaymentConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalPaymentConfigFindFirstArgs>(args?: SelectSubset<T, GlobalPaymentConfigFindFirstArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalPaymentConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPaymentConfigFindFirstOrThrowArgs} args - Arguments to find a GlobalPaymentConfig
     * @example
     * // Get one GlobalPaymentConfig
     * const globalPaymentConfig = await prisma.globalPaymentConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalPaymentConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalPaymentConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalPaymentConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPaymentConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalPaymentConfigs
     * const globalPaymentConfigs = await prisma.globalPaymentConfig.findMany()
     * 
     * // Get first 10 GlobalPaymentConfigs
     * const globalPaymentConfigs = await prisma.globalPaymentConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalPaymentConfigWithIdOnly = await prisma.globalPaymentConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalPaymentConfigFindManyArgs>(args?: SelectSubset<T, GlobalPaymentConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalPaymentConfig.
     * @param {GlobalPaymentConfigCreateArgs} args - Arguments to create a GlobalPaymentConfig.
     * @example
     * // Create one GlobalPaymentConfig
     * const GlobalPaymentConfig = await prisma.globalPaymentConfig.create({
     *   data: {
     *     // ... data to create a GlobalPaymentConfig
     *   }
     * })
     * 
     */
    create<T extends GlobalPaymentConfigCreateArgs>(args: SelectSubset<T, GlobalPaymentConfigCreateArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalPaymentConfigs.
     * @param {GlobalPaymentConfigCreateManyArgs} args - Arguments to create many GlobalPaymentConfigs.
     * @example
     * // Create many GlobalPaymentConfigs
     * const globalPaymentConfig = await prisma.globalPaymentConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalPaymentConfigCreateManyArgs>(args?: SelectSubset<T, GlobalPaymentConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GlobalPaymentConfig.
     * @param {GlobalPaymentConfigDeleteArgs} args - Arguments to delete one GlobalPaymentConfig.
     * @example
     * // Delete one GlobalPaymentConfig
     * const GlobalPaymentConfig = await prisma.globalPaymentConfig.delete({
     *   where: {
     *     // ... filter to delete one GlobalPaymentConfig
     *   }
     * })
     * 
     */
    delete<T extends GlobalPaymentConfigDeleteArgs>(args: SelectSubset<T, GlobalPaymentConfigDeleteArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalPaymentConfig.
     * @param {GlobalPaymentConfigUpdateArgs} args - Arguments to update one GlobalPaymentConfig.
     * @example
     * // Update one GlobalPaymentConfig
     * const globalPaymentConfig = await prisma.globalPaymentConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalPaymentConfigUpdateArgs>(args: SelectSubset<T, GlobalPaymentConfigUpdateArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalPaymentConfigs.
     * @param {GlobalPaymentConfigDeleteManyArgs} args - Arguments to filter GlobalPaymentConfigs to delete.
     * @example
     * // Delete a few GlobalPaymentConfigs
     * const { count } = await prisma.globalPaymentConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalPaymentConfigDeleteManyArgs>(args?: SelectSubset<T, GlobalPaymentConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalPaymentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPaymentConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalPaymentConfigs
     * const globalPaymentConfig = await prisma.globalPaymentConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalPaymentConfigUpdateManyArgs>(args: SelectSubset<T, GlobalPaymentConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GlobalPaymentConfig.
     * @param {GlobalPaymentConfigUpsertArgs} args - Arguments to update or create a GlobalPaymentConfig.
     * @example
     * // Update or create a GlobalPaymentConfig
     * const globalPaymentConfig = await prisma.globalPaymentConfig.upsert({
     *   create: {
     *     // ... data to create a GlobalPaymentConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalPaymentConfig we want to update
     *   }
     * })
     */
    upsert<T extends GlobalPaymentConfigUpsertArgs>(args: SelectSubset<T, GlobalPaymentConfigUpsertArgs<ExtArgs>>): Prisma__GlobalPaymentConfigClient<$Result.GetResult<Prisma.$GlobalPaymentConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalPaymentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPaymentConfigCountArgs} args - Arguments to filter GlobalPaymentConfigs to count.
     * @example
     * // Count the number of GlobalPaymentConfigs
     * const count = await prisma.globalPaymentConfig.count({
     *   where: {
     *     // ... the filter for the GlobalPaymentConfigs we want to count
     *   }
     * })
    **/
    count<T extends GlobalPaymentConfigCountArgs>(
      args?: Subset<T, GlobalPaymentConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalPaymentConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalPaymentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPaymentConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalPaymentConfigAggregateArgs>(args: Subset<T, GlobalPaymentConfigAggregateArgs>): Prisma.PrismaPromise<GetGlobalPaymentConfigAggregateType<T>>

    /**
     * Group by GlobalPaymentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalPaymentConfigGroupByArgs} args - Group by arguments.
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
      T extends GlobalPaymentConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalPaymentConfigGroupByArgs['orderBy'] }
        : { orderBy?: GlobalPaymentConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalPaymentConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalPaymentConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalPaymentConfig model
   */
  readonly fields: GlobalPaymentConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalPaymentConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalPaymentConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the GlobalPaymentConfig model
   */
  interface GlobalPaymentConfigFieldRefs {
    readonly id: FieldRef<"GlobalPaymentConfig", 'String'>
    readonly defaultPlatformFeePercent: FieldRef<"GlobalPaymentConfig", 'Decimal'>
    readonly defaultPlatformFeeFixed: FieldRef<"GlobalPaymentConfig", 'Decimal'>
    readonly defaultServiceFeePercent: FieldRef<"GlobalPaymentConfig", 'Decimal'>
    readonly defaultServiceFeeFixed: FieldRef<"GlobalPaymentConfig", 'Decimal'>
    readonly defaultServiceFeePayerType: FieldRef<"GlobalPaymentConfig", 'String'>
    readonly acceptCreditCard: FieldRef<"GlobalPaymentConfig", 'Boolean'>
    readonly acceptDebitCard: FieldRef<"GlobalPaymentConfig", 'Boolean'>
    readonly acceptPix: FieldRef<"GlobalPaymentConfig", 'Boolean'>
    readonly acceptBoleto: FieldRef<"GlobalPaymentConfig", 'Boolean'>
    readonly maxInstallments: FieldRef<"GlobalPaymentConfig", 'Int'>
    readonly minInstallmentValue: FieldRef<"GlobalPaymentConfig", 'Decimal'>
    readonly interestFree: FieldRef<"GlobalPaymentConfig", 'Int'>
    readonly allowRefunds: FieldRef<"GlobalPaymentConfig", 'Boolean'>
    readonly refundDeadlineDays: FieldRef<"GlobalPaymentConfig", 'Int'>
    readonly createdAt: FieldRef<"GlobalPaymentConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"GlobalPaymentConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalPaymentConfig findUnique
   */
  export type GlobalPaymentConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPaymentConfig to fetch.
     */
    where: GlobalPaymentConfigWhereUniqueInput
  }

  /**
   * GlobalPaymentConfig findUniqueOrThrow
   */
  export type GlobalPaymentConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPaymentConfig to fetch.
     */
    where: GlobalPaymentConfigWhereUniqueInput
  }

  /**
   * GlobalPaymentConfig findFirst
   */
  export type GlobalPaymentConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPaymentConfig to fetch.
     */
    where?: GlobalPaymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPaymentConfigs to fetch.
     */
    orderBy?: GlobalPaymentConfigOrderByWithRelationInput | GlobalPaymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPaymentConfigs.
     */
    cursor?: GlobalPaymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPaymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPaymentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPaymentConfigs.
     */
    distinct?: GlobalPaymentConfigScalarFieldEnum | GlobalPaymentConfigScalarFieldEnum[]
  }

  /**
   * GlobalPaymentConfig findFirstOrThrow
   */
  export type GlobalPaymentConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPaymentConfig to fetch.
     */
    where?: GlobalPaymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPaymentConfigs to fetch.
     */
    orderBy?: GlobalPaymentConfigOrderByWithRelationInput | GlobalPaymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalPaymentConfigs.
     */
    cursor?: GlobalPaymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPaymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPaymentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalPaymentConfigs.
     */
    distinct?: GlobalPaymentConfigScalarFieldEnum | GlobalPaymentConfigScalarFieldEnum[]
  }

  /**
   * GlobalPaymentConfig findMany
   */
  export type GlobalPaymentConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which GlobalPaymentConfigs to fetch.
     */
    where?: GlobalPaymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalPaymentConfigs to fetch.
     */
    orderBy?: GlobalPaymentConfigOrderByWithRelationInput | GlobalPaymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalPaymentConfigs.
     */
    cursor?: GlobalPaymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalPaymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalPaymentConfigs.
     */
    skip?: number
    distinct?: GlobalPaymentConfigScalarFieldEnum | GlobalPaymentConfigScalarFieldEnum[]
  }

  /**
   * GlobalPaymentConfig create
   */
  export type GlobalPaymentConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalPaymentConfig.
     */
    data: XOR<GlobalPaymentConfigCreateInput, GlobalPaymentConfigUncheckedCreateInput>
  }

  /**
   * GlobalPaymentConfig createMany
   */
  export type GlobalPaymentConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalPaymentConfigs.
     */
    data: GlobalPaymentConfigCreateManyInput | GlobalPaymentConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalPaymentConfig update
   */
  export type GlobalPaymentConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalPaymentConfig.
     */
    data: XOR<GlobalPaymentConfigUpdateInput, GlobalPaymentConfigUncheckedUpdateInput>
    /**
     * Choose, which GlobalPaymentConfig to update.
     */
    where: GlobalPaymentConfigWhereUniqueInput
  }

  /**
   * GlobalPaymentConfig updateMany
   */
  export type GlobalPaymentConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalPaymentConfigs.
     */
    data: XOR<GlobalPaymentConfigUpdateManyMutationInput, GlobalPaymentConfigUncheckedUpdateManyInput>
    /**
     * Filter which GlobalPaymentConfigs to update
     */
    where?: GlobalPaymentConfigWhereInput
    /**
     * Limit how many GlobalPaymentConfigs to update.
     */
    limit?: number
  }

  /**
   * GlobalPaymentConfig upsert
   */
  export type GlobalPaymentConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalPaymentConfig to update in case it exists.
     */
    where: GlobalPaymentConfigWhereUniqueInput
    /**
     * In case the GlobalPaymentConfig found by the `where` argument doesn't exist, create a new GlobalPaymentConfig with this data.
     */
    create: XOR<GlobalPaymentConfigCreateInput, GlobalPaymentConfigUncheckedCreateInput>
    /**
     * In case the GlobalPaymentConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalPaymentConfigUpdateInput, GlobalPaymentConfigUncheckedUpdateInput>
  }

  /**
   * GlobalPaymentConfig delete
   */
  export type GlobalPaymentConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
    /**
     * Filter which GlobalPaymentConfig to delete.
     */
    where: GlobalPaymentConfigWhereUniqueInput
  }

  /**
   * GlobalPaymentConfig deleteMany
   */
  export type GlobalPaymentConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalPaymentConfigs to delete
     */
    where?: GlobalPaymentConfigWhereInput
    /**
     * Limit how many GlobalPaymentConfigs to delete.
     */
    limit?: number
  }

  /**
   * GlobalPaymentConfig without action
   */
  export type GlobalPaymentConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalPaymentConfig
     */
    select?: GlobalPaymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalPaymentConfig
     */
    omit?: GlobalPaymentConfigOmit<ExtArgs> | null
  }


  /**
   * Model StripeAccount
   */

  export type AggregateStripeAccount = {
    _count: StripeAccountCountAggregateOutputType | null
    _min: StripeAccountMinAggregateOutputType | null
    _max: StripeAccountMaxAggregateOutputType | null
  }

  export type StripeAccountMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    accountId: string | null
    accountType: $Enums.StripeAccountType | null
    accountStatus: $Enums.StripeAccountStatus | null
    detailsSubmitted: boolean | null
    chargesEnabled: boolean | null
    payoutsEnabled: boolean | null
    country: string | null
    currency: string | null
    email: string | null
    businessType: $Enums.StripeAccountBusinessType | null
    onboardedAt: Date | null
    lastSyncAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StripeAccountMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    accountId: string | null
    accountType: $Enums.StripeAccountType | null
    accountStatus: $Enums.StripeAccountStatus | null
    detailsSubmitted: boolean | null
    chargesEnabled: boolean | null
    payoutsEnabled: boolean | null
    country: string | null
    currency: string | null
    email: string | null
    businessType: $Enums.StripeAccountBusinessType | null
    onboardedAt: Date | null
    lastSyncAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StripeAccountCountAggregateOutputType = {
    id: number
    tenantId: number
    accountId: number
    accountType: number
    accountStatus: number
    detailsSubmitted: number
    chargesEnabled: number
    payoutsEnabled: number
    country: number
    currency: number
    email: number
    businessType: number
    onboardedAt: number
    lastSyncAt: number
    requirementsData: number
    capabilitiesData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StripeAccountMinAggregateInputType = {
    id?: true
    tenantId?: true
    accountId?: true
    accountType?: true
    accountStatus?: true
    detailsSubmitted?: true
    chargesEnabled?: true
    payoutsEnabled?: true
    country?: true
    currency?: true
    email?: true
    businessType?: true
    onboardedAt?: true
    lastSyncAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StripeAccountMaxAggregateInputType = {
    id?: true
    tenantId?: true
    accountId?: true
    accountType?: true
    accountStatus?: true
    detailsSubmitted?: true
    chargesEnabled?: true
    payoutsEnabled?: true
    country?: true
    currency?: true
    email?: true
    businessType?: true
    onboardedAt?: true
    lastSyncAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StripeAccountCountAggregateInputType = {
    id?: true
    tenantId?: true
    accountId?: true
    accountType?: true
    accountStatus?: true
    detailsSubmitted?: true
    chargesEnabled?: true
    payoutsEnabled?: true
    country?: true
    currency?: true
    email?: true
    businessType?: true
    onboardedAt?: true
    lastSyncAt?: true
    requirementsData?: true
    capabilitiesData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StripeAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeAccount to aggregate.
     */
    where?: StripeAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeAccounts to fetch.
     */
    orderBy?: StripeAccountOrderByWithRelationInput | StripeAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StripeAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StripeAccounts
    **/
    _count?: true | StripeAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StripeAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StripeAccountMaxAggregateInputType
  }

  export type GetStripeAccountAggregateType<T extends StripeAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateStripeAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStripeAccount[P]>
      : GetScalarType<T[P], AggregateStripeAccount[P]>
  }




  export type StripeAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripeAccountWhereInput
    orderBy?: StripeAccountOrderByWithAggregationInput | StripeAccountOrderByWithAggregationInput[]
    by: StripeAccountScalarFieldEnum[] | StripeAccountScalarFieldEnum
    having?: StripeAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StripeAccountCountAggregateInputType | true
    _min?: StripeAccountMinAggregateInputType
    _max?: StripeAccountMaxAggregateInputType
  }

  export type StripeAccountGroupByOutputType = {
    id: string
    tenantId: string
    accountId: string
    accountType: $Enums.StripeAccountType
    accountStatus: $Enums.StripeAccountStatus
    detailsSubmitted: boolean
    chargesEnabled: boolean
    payoutsEnabled: boolean
    country: string
    currency: string
    email: string | null
    businessType: $Enums.StripeAccountBusinessType | null
    onboardedAt: Date | null
    lastSyncAt: Date | null
    requirementsData: JsonValue | null
    capabilitiesData: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: StripeAccountCountAggregateOutputType | null
    _min: StripeAccountMinAggregateOutputType | null
    _max: StripeAccountMaxAggregateOutputType | null
  }

  type GetStripeAccountGroupByPayload<T extends StripeAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StripeAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StripeAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StripeAccountGroupByOutputType[P]>
            : GetScalarType<T[P], StripeAccountGroupByOutputType[P]>
        }
      >
    >


  export type StripeAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    accountId?: boolean
    accountType?: boolean
    accountStatus?: boolean
    detailsSubmitted?: boolean
    chargesEnabled?: boolean
    payoutsEnabled?: boolean
    country?: boolean
    currency?: boolean
    email?: boolean
    businessType?: boolean
    onboardedAt?: boolean
    lastSyncAt?: boolean
    requirementsData?: boolean
    capabilitiesData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stripeAccount"]>



  export type StripeAccountSelectScalar = {
    id?: boolean
    tenantId?: boolean
    accountId?: boolean
    accountType?: boolean
    accountStatus?: boolean
    detailsSubmitted?: boolean
    chargesEnabled?: boolean
    payoutsEnabled?: boolean
    country?: boolean
    currency?: boolean
    email?: boolean
    businessType?: boolean
    onboardedAt?: boolean
    lastSyncAt?: boolean
    requirementsData?: boolean
    capabilitiesData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StripeAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "accountId" | "accountType" | "accountStatus" | "detailsSubmitted" | "chargesEnabled" | "payoutsEnabled" | "country" | "currency" | "email" | "businessType" | "onboardedAt" | "lastSyncAt" | "requirementsData" | "capabilitiesData" | "createdAt" | "updatedAt", ExtArgs["result"]["stripeAccount"]>
  export type StripeAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
  }

  export type $StripeAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StripeAccount"
    objects: {
      tenant: Prisma.$tenantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      accountId: string
      accountType: $Enums.StripeAccountType
      accountStatus: $Enums.StripeAccountStatus
      detailsSubmitted: boolean
      chargesEnabled: boolean
      payoutsEnabled: boolean
      country: string
      currency: string
      email: string | null
      businessType: $Enums.StripeAccountBusinessType | null
      onboardedAt: Date | null
      lastSyncAt: Date | null
      requirementsData: Prisma.JsonValue | null
      capabilitiesData: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stripeAccount"]>
    composites: {}
  }

  type StripeAccountGetPayload<S extends boolean | null | undefined | StripeAccountDefaultArgs> = $Result.GetResult<Prisma.$StripeAccountPayload, S>

  type StripeAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StripeAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StripeAccountCountAggregateInputType | true
    }

  export interface StripeAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StripeAccount'], meta: { name: 'StripeAccount' } }
    /**
     * Find zero or one StripeAccount that matches the filter.
     * @param {StripeAccountFindUniqueArgs} args - Arguments to find a StripeAccount
     * @example
     * // Get one StripeAccount
     * const stripeAccount = await prisma.stripeAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StripeAccountFindUniqueArgs>(args: SelectSubset<T, StripeAccountFindUniqueArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StripeAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StripeAccountFindUniqueOrThrowArgs} args - Arguments to find a StripeAccount
     * @example
     * // Get one StripeAccount
     * const stripeAccount = await prisma.stripeAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StripeAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, StripeAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeAccountFindFirstArgs} args - Arguments to find a StripeAccount
     * @example
     * // Get one StripeAccount
     * const stripeAccount = await prisma.stripeAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StripeAccountFindFirstArgs>(args?: SelectSubset<T, StripeAccountFindFirstArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeAccountFindFirstOrThrowArgs} args - Arguments to find a StripeAccount
     * @example
     * // Get one StripeAccount
     * const stripeAccount = await prisma.stripeAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StripeAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, StripeAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StripeAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StripeAccounts
     * const stripeAccounts = await prisma.stripeAccount.findMany()
     * 
     * // Get first 10 StripeAccounts
     * const stripeAccounts = await prisma.stripeAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stripeAccountWithIdOnly = await prisma.stripeAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StripeAccountFindManyArgs>(args?: SelectSubset<T, StripeAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StripeAccount.
     * @param {StripeAccountCreateArgs} args - Arguments to create a StripeAccount.
     * @example
     * // Create one StripeAccount
     * const StripeAccount = await prisma.stripeAccount.create({
     *   data: {
     *     // ... data to create a StripeAccount
     *   }
     * })
     * 
     */
    create<T extends StripeAccountCreateArgs>(args: SelectSubset<T, StripeAccountCreateArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StripeAccounts.
     * @param {StripeAccountCreateManyArgs} args - Arguments to create many StripeAccounts.
     * @example
     * // Create many StripeAccounts
     * const stripeAccount = await prisma.stripeAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StripeAccountCreateManyArgs>(args?: SelectSubset<T, StripeAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StripeAccount.
     * @param {StripeAccountDeleteArgs} args - Arguments to delete one StripeAccount.
     * @example
     * // Delete one StripeAccount
     * const StripeAccount = await prisma.stripeAccount.delete({
     *   where: {
     *     // ... filter to delete one StripeAccount
     *   }
     * })
     * 
     */
    delete<T extends StripeAccountDeleteArgs>(args: SelectSubset<T, StripeAccountDeleteArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StripeAccount.
     * @param {StripeAccountUpdateArgs} args - Arguments to update one StripeAccount.
     * @example
     * // Update one StripeAccount
     * const stripeAccount = await prisma.stripeAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StripeAccountUpdateArgs>(args: SelectSubset<T, StripeAccountUpdateArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StripeAccounts.
     * @param {StripeAccountDeleteManyArgs} args - Arguments to filter StripeAccounts to delete.
     * @example
     * // Delete a few StripeAccounts
     * const { count } = await prisma.stripeAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StripeAccountDeleteManyArgs>(args?: SelectSubset<T, StripeAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StripeAccounts
     * const stripeAccount = await prisma.stripeAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StripeAccountUpdateManyArgs>(args: SelectSubset<T, StripeAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StripeAccount.
     * @param {StripeAccountUpsertArgs} args - Arguments to update or create a StripeAccount.
     * @example
     * // Update or create a StripeAccount
     * const stripeAccount = await prisma.stripeAccount.upsert({
     *   create: {
     *     // ... data to create a StripeAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StripeAccount we want to update
     *   }
     * })
     */
    upsert<T extends StripeAccountUpsertArgs>(args: SelectSubset<T, StripeAccountUpsertArgs<ExtArgs>>): Prisma__StripeAccountClient<$Result.GetResult<Prisma.$StripeAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StripeAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeAccountCountArgs} args - Arguments to filter StripeAccounts to count.
     * @example
     * // Count the number of StripeAccounts
     * const count = await prisma.stripeAccount.count({
     *   where: {
     *     // ... the filter for the StripeAccounts we want to count
     *   }
     * })
    **/
    count<T extends StripeAccountCountArgs>(
      args?: Subset<T, StripeAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StripeAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StripeAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StripeAccountAggregateArgs>(args: Subset<T, StripeAccountAggregateArgs>): Prisma.PrismaPromise<GetStripeAccountAggregateType<T>>

    /**
     * Group by StripeAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeAccountGroupByArgs} args - Group by arguments.
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
      T extends StripeAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StripeAccountGroupByArgs['orderBy'] }
        : { orderBy?: StripeAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StripeAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripeAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StripeAccount model
   */
  readonly fields: StripeAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StripeAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StripeAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StripeAccount model
   */
  interface StripeAccountFieldRefs {
    readonly id: FieldRef<"StripeAccount", 'String'>
    readonly tenantId: FieldRef<"StripeAccount", 'String'>
    readonly accountId: FieldRef<"StripeAccount", 'String'>
    readonly accountType: FieldRef<"StripeAccount", 'StripeAccountType'>
    readonly accountStatus: FieldRef<"StripeAccount", 'StripeAccountStatus'>
    readonly detailsSubmitted: FieldRef<"StripeAccount", 'Boolean'>
    readonly chargesEnabled: FieldRef<"StripeAccount", 'Boolean'>
    readonly payoutsEnabled: FieldRef<"StripeAccount", 'Boolean'>
    readonly country: FieldRef<"StripeAccount", 'String'>
    readonly currency: FieldRef<"StripeAccount", 'String'>
    readonly email: FieldRef<"StripeAccount", 'String'>
    readonly businessType: FieldRef<"StripeAccount", 'StripeAccountBusinessType'>
    readonly onboardedAt: FieldRef<"StripeAccount", 'DateTime'>
    readonly lastSyncAt: FieldRef<"StripeAccount", 'DateTime'>
    readonly requirementsData: FieldRef<"StripeAccount", 'Json'>
    readonly capabilitiesData: FieldRef<"StripeAccount", 'Json'>
    readonly createdAt: FieldRef<"StripeAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"StripeAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StripeAccount findUnique
   */
  export type StripeAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * Filter, which StripeAccount to fetch.
     */
    where: StripeAccountWhereUniqueInput
  }

  /**
   * StripeAccount findUniqueOrThrow
   */
  export type StripeAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * Filter, which StripeAccount to fetch.
     */
    where: StripeAccountWhereUniqueInput
  }

  /**
   * StripeAccount findFirst
   */
  export type StripeAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * Filter, which StripeAccount to fetch.
     */
    where?: StripeAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeAccounts to fetch.
     */
    orderBy?: StripeAccountOrderByWithRelationInput | StripeAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeAccounts.
     */
    cursor?: StripeAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeAccounts.
     */
    distinct?: StripeAccountScalarFieldEnum | StripeAccountScalarFieldEnum[]
  }

  /**
   * StripeAccount findFirstOrThrow
   */
  export type StripeAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * Filter, which StripeAccount to fetch.
     */
    where?: StripeAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeAccounts to fetch.
     */
    orderBy?: StripeAccountOrderByWithRelationInput | StripeAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeAccounts.
     */
    cursor?: StripeAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeAccounts.
     */
    distinct?: StripeAccountScalarFieldEnum | StripeAccountScalarFieldEnum[]
  }

  /**
   * StripeAccount findMany
   */
  export type StripeAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * Filter, which StripeAccounts to fetch.
     */
    where?: StripeAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeAccounts to fetch.
     */
    orderBy?: StripeAccountOrderByWithRelationInput | StripeAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StripeAccounts.
     */
    cursor?: StripeAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeAccounts.
     */
    skip?: number
    distinct?: StripeAccountScalarFieldEnum | StripeAccountScalarFieldEnum[]
  }

  /**
   * StripeAccount create
   */
  export type StripeAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a StripeAccount.
     */
    data: XOR<StripeAccountCreateInput, StripeAccountUncheckedCreateInput>
  }

  /**
   * StripeAccount createMany
   */
  export type StripeAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StripeAccounts.
     */
    data: StripeAccountCreateManyInput | StripeAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeAccount update
   */
  export type StripeAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a StripeAccount.
     */
    data: XOR<StripeAccountUpdateInput, StripeAccountUncheckedUpdateInput>
    /**
     * Choose, which StripeAccount to update.
     */
    where: StripeAccountWhereUniqueInput
  }

  /**
   * StripeAccount updateMany
   */
  export type StripeAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StripeAccounts.
     */
    data: XOR<StripeAccountUpdateManyMutationInput, StripeAccountUncheckedUpdateManyInput>
    /**
     * Filter which StripeAccounts to update
     */
    where?: StripeAccountWhereInput
    /**
     * Limit how many StripeAccounts to update.
     */
    limit?: number
  }

  /**
   * StripeAccount upsert
   */
  export type StripeAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the StripeAccount to update in case it exists.
     */
    where: StripeAccountWhereUniqueInput
    /**
     * In case the StripeAccount found by the `where` argument doesn't exist, create a new StripeAccount with this data.
     */
    create: XOR<StripeAccountCreateInput, StripeAccountUncheckedCreateInput>
    /**
     * In case the StripeAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StripeAccountUpdateInput, StripeAccountUncheckedUpdateInput>
  }

  /**
   * StripeAccount delete
   */
  export type StripeAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
    /**
     * Filter which StripeAccount to delete.
     */
    where: StripeAccountWhereUniqueInput
  }

  /**
   * StripeAccount deleteMany
   */
  export type StripeAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeAccounts to delete
     */
    where?: StripeAccountWhereInput
    /**
     * Limit how many StripeAccounts to delete.
     */
    limit?: number
  }

  /**
   * StripeAccount without action
   */
  export type StripeAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeAccount
     */
    select?: StripeAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeAccount
     */
    omit?: StripeAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeAccountInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: Decimal | null
    serviceFee: Decimal | null
    platformFee: Decimal | null
    total: Decimal | null
    stripeApplicationFee: number | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: Decimal | null
    serviceFee: Decimal | null
    platformFee: Decimal | null
    total: Decimal | null
    stripeApplicationFee: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    eventId: string | null
    userId: string | null
    subtotal: Decimal | null
    serviceFee: Decimal | null
    platformFee: Decimal | null
    total: Decimal | null
    status: $Enums.OrderStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentProvider: string | null
    stripePaymentIntentId: string | null
    stripeClientSecret: string | null
    stripeTransferId: string | null
    stripeApplicationFee: number | null
    paymentUrl: string | null
    qrCodeData: string | null
    boletoBarcode: string | null
    paidAt: Date | null
    confirmedAt: Date | null
    canceledAt: Date | null
    refundedAt: Date | null
    expiresAt: Date | null
    notes: string | null
    cancelReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    eventId: string | null
    userId: string | null
    subtotal: Decimal | null
    serviceFee: Decimal | null
    platformFee: Decimal | null
    total: Decimal | null
    status: $Enums.OrderStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentProvider: string | null
    stripePaymentIntentId: string | null
    stripeClientSecret: string | null
    stripeTransferId: string | null
    stripeApplicationFee: number | null
    paymentUrl: string | null
    qrCodeData: string | null
    boletoBarcode: string | null
    paidAt: Date | null
    confirmedAt: Date | null
    canceledAt: Date | null
    refundedAt: Date | null
    expiresAt: Date | null
    notes: string | null
    cancelReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    tenantId: number
    eventId: number
    userId: number
    subtotal: number
    serviceFee: number
    platformFee: number
    total: number
    status: number
    paymentMethod: number
    paymentProvider: number
    stripePaymentIntentId: number
    stripeClientSecret: number
    stripeTransferId: number
    stripeApplicationFee: number
    paymentUrl: number
    qrCodeData: number
    boletoBarcode: number
    paidAt: number
    confirmedAt: number
    canceledAt: number
    refundedAt: number
    expiresAt: number
    notes: number
    cancelReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    serviceFee?: true
    platformFee?: true
    total?: true
    stripeApplicationFee?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    serviceFee?: true
    platformFee?: true
    total?: true
    stripeApplicationFee?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    tenantId?: true
    eventId?: true
    userId?: true
    subtotal?: true
    serviceFee?: true
    platformFee?: true
    total?: true
    status?: true
    paymentMethod?: true
    paymentProvider?: true
    stripePaymentIntentId?: true
    stripeClientSecret?: true
    stripeTransferId?: true
    stripeApplicationFee?: true
    paymentUrl?: true
    qrCodeData?: true
    boletoBarcode?: true
    paidAt?: true
    confirmedAt?: true
    canceledAt?: true
    refundedAt?: true
    expiresAt?: true
    notes?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    tenantId?: true
    eventId?: true
    userId?: true
    subtotal?: true
    serviceFee?: true
    platformFee?: true
    total?: true
    status?: true
    paymentMethod?: true
    paymentProvider?: true
    stripePaymentIntentId?: true
    stripeClientSecret?: true
    stripeTransferId?: true
    stripeApplicationFee?: true
    paymentUrl?: true
    qrCodeData?: true
    boletoBarcode?: true
    paidAt?: true
    confirmedAt?: true
    canceledAt?: true
    refundedAt?: true
    expiresAt?: true
    notes?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    tenantId?: true
    eventId?: true
    userId?: true
    subtotal?: true
    serviceFee?: true
    platformFee?: true
    total?: true
    status?: true
    paymentMethod?: true
    paymentProvider?: true
    stripePaymentIntentId?: true
    stripeClientSecret?: true
    stripeTransferId?: true
    stripeApplicationFee?: true
    paymentUrl?: true
    qrCodeData?: true
    boletoBarcode?: true
    paidAt?: true
    confirmedAt?: true
    canceledAt?: true
    refundedAt?: true
    expiresAt?: true
    notes?: true
    cancelReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    tenantId: string
    eventId: string
    userId: string
    subtotal: Decimal
    serviceFee: Decimal
    platformFee: Decimal
    total: Decimal
    status: $Enums.OrderStatus
    paymentMethod: $Enums.PaymentMethod | null
    paymentProvider: string | null
    stripePaymentIntentId: string | null
    stripeClientSecret: string | null
    stripeTransferId: string | null
    stripeApplicationFee: number | null
    paymentUrl: string | null
    qrCodeData: string | null
    boletoBarcode: string | null
    paidAt: Date | null
    confirmedAt: Date | null
    canceledAt: Date | null
    refundedAt: Date | null
    expiresAt: Date | null
    notes: string | null
    cancelReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    eventId?: boolean
    userId?: boolean
    subtotal?: boolean
    serviceFee?: boolean
    platformFee?: boolean
    total?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentProvider?: boolean
    stripePaymentIntentId?: boolean
    stripeClientSecret?: boolean
    stripeTransferId?: boolean
    stripeApplicationFee?: boolean
    paymentUrl?: boolean
    qrCodeData?: boolean
    boletoBarcode?: boolean
    paidAt?: boolean
    confirmedAt?: boolean
    canceledAt?: boolean
    refundedAt?: boolean
    expiresAt?: boolean
    notes?: boolean
    cancelReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    event?: boolean | eventosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    tickets?: boolean | Order$ticketsArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    tenantId?: boolean
    eventId?: boolean
    userId?: boolean
    subtotal?: boolean
    serviceFee?: boolean
    platformFee?: boolean
    total?: boolean
    status?: boolean
    paymentMethod?: boolean
    paymentProvider?: boolean
    stripePaymentIntentId?: boolean
    stripeClientSecret?: boolean
    stripeTransferId?: boolean
    stripeApplicationFee?: boolean
    paymentUrl?: boolean
    qrCodeData?: boolean
    boletoBarcode?: boolean
    paidAt?: boolean
    confirmedAt?: boolean
    canceledAt?: boolean
    refundedAt?: boolean
    expiresAt?: boolean
    notes?: boolean
    cancelReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "eventId" | "userId" | "subtotal" | "serviceFee" | "platformFee" | "total" | "status" | "paymentMethod" | "paymentProvider" | "stripePaymentIntentId" | "stripeClientSecret" | "stripeTransferId" | "stripeApplicationFee" | "paymentUrl" | "qrCodeData" | "boletoBarcode" | "paidAt" | "confirmedAt" | "canceledAt" | "refundedAt" | "expiresAt" | "notes" | "cancelReason" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    event?: boolean | eventosDefaultArgs<ExtArgs>
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    tickets?: boolean | Order$ticketsArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      tenant: Prisma.$tenantsPayload<ExtArgs>
      event: Prisma.$eventosPayload<ExtArgs>
      usuario: Prisma.$usuariosPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      eventId: string
      userId: string
      subtotal: Prisma.Decimal
      serviceFee: Prisma.Decimal
      platformFee: Prisma.Decimal
      total: Prisma.Decimal
      status: $Enums.OrderStatus
      paymentMethod: $Enums.PaymentMethod | null
      paymentProvider: string | null
      stripePaymentIntentId: string | null
      stripeClientSecret: string | null
      stripeTransferId: string | null
      stripeApplicationFee: number | null
      paymentUrl: string | null
      qrCodeData: string | null
      boletoBarcode: string | null
      paidAt: Date | null
      confirmedAt: Date | null
      canceledAt: Date | null
      refundedAt: Date | null
      expiresAt: Date | null
      notes: string | null
      cancelReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Order$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Order$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly tenantId: FieldRef<"Order", 'String'>
    readonly eventId: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly subtotal: FieldRef<"Order", 'Decimal'>
    readonly serviceFee: FieldRef<"Order", 'Decimal'>
    readonly platformFee: FieldRef<"Order", 'Decimal'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly paymentMethod: FieldRef<"Order", 'PaymentMethod'>
    readonly paymentProvider: FieldRef<"Order", 'String'>
    readonly stripePaymentIntentId: FieldRef<"Order", 'String'>
    readonly stripeClientSecret: FieldRef<"Order", 'String'>
    readonly stripeTransferId: FieldRef<"Order", 'String'>
    readonly stripeApplicationFee: FieldRef<"Order", 'Int'>
    readonly paymentUrl: FieldRef<"Order", 'String'>
    readonly qrCodeData: FieldRef<"Order", 'String'>
    readonly boletoBarcode: FieldRef<"Order", 'String'>
    readonly paidAt: FieldRef<"Order", 'DateTime'>
    readonly confirmedAt: FieldRef<"Order", 'DateTime'>
    readonly canceledAt: FieldRef<"Order", 'DateTime'>
    readonly refundedAt: FieldRef<"Order", 'DateTime'>
    readonly expiresAt: FieldRef<"Order", 'DateTime'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly cancelReason: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.tickets
   */
  export type Order$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    total: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    total: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    batchTicketId: string | null
    ticketTypeName: string | null
    batchName: string | null
    quantity: number | null
    price: Decimal | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    batchTicketId: string | null
    ticketTypeName: string | null
    batchName: string | null
    quantity: number | null
    price: Decimal | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    batchTicketId: number
    ticketTypeName: number
    batchName: number
    quantity: number
    price: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
    total?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
    total?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    batchTicketId?: true
    ticketTypeName?: true
    batchName?: true
    quantity?: true
    price?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    batchTicketId?: true
    ticketTypeName?: true
    batchName?: true
    quantity?: true
    price?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    batchTicketId?: true
    ticketTypeName?: true
    batchName?: true
    quantity?: true
    price?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    batchTicketId: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal
    total: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    batchTicketId?: boolean
    ticketTypeName?: boolean
    batchName?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    batchTicket?: boolean | BatchTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>



  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    batchTicketId?: boolean
    ticketTypeName?: boolean
    batchName?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "batchTicketId" | "ticketTypeName" | "batchName" | "quantity" | "price" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    batchTicket?: boolean | BatchTicketDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      batchTicket: Prisma.$BatchTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      batchTicketId: string
      ticketTypeName: string
      batchName: string
      quantity: number
      price: Prisma.Decimal
      total: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    batchTicket<T extends BatchTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchTicketDefaultArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly batchTicketId: FieldRef<"OrderItem", 'String'>
    readonly ticketTypeName: FieldRef<"OrderItem", 'String'>
    readonly batchName: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Decimal'>
    readonly total: FieldRef<"OrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ReservationSumAggregateOutputType = {
    quantity: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    batchTicketId: string | null
    userId: string | null
    quantity: number | null
    expiresAt: Date | null
    status: $Enums.ReservationStatus | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    batchTicketId: string | null
    userId: string | null
    quantity: number | null
    expiresAt: Date | null
    status: $Enums.ReservationStatus | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    batchTicketId: number
    userId: number
    quantity: number
    expiresAt: number
    status: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    quantity?: true
  }

  export type ReservationSumAggregateInputType = {
    quantity?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    batchTicketId?: true
    userId?: true
    quantity?: true
    expiresAt?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    batchTicketId?: true
    userId?: true
    quantity?: true
    expiresAt?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    batchTicketId?: true
    userId?: true
    quantity?: true
    expiresAt?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    batchTicketId: string
    userId: string
    quantity: number
    expiresAt: Date
    status: $Enums.ReservationStatus
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchTicketId?: boolean
    userId?: boolean
    quantity?: boolean
    expiresAt?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchTicket?: boolean | BatchTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>



  export type ReservationSelectScalar = {
    id?: boolean
    batchTicketId?: boolean
    userId?: boolean
    quantity?: boolean
    expiresAt?: boolean
    status?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchTicketId" | "userId" | "quantity" | "expiresAt" | "status" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batchTicket?: boolean | BatchTicketDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      batchTicket: Prisma.$BatchTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchTicketId: string
      userId: string
      quantity: number
      expiresAt: Date
      status: $Enums.ReservationStatus
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batchTicket<T extends BatchTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchTicketDefaultArgs<ExtArgs>>): Prisma__BatchTicketClient<$Result.GetResult<Prisma.$BatchTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly batchTicketId: FieldRef<"Reservation", 'String'>
    readonly userId: FieldRef<"Reservation", 'String'>
    readonly quantity: FieldRef<"Reservation", 'Int'>
    readonly expiresAt: FieldRef<"Reservation", 'DateTime'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly ipAddress: FieldRef<"Reservation", 'String'>
    readonly userAgent: FieldRef<"Reservation", 'String'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
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


  export const TenantsScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    telefone: 'telefone',
    email: 'email',
    site: 'site',
    slug: 'slug',
    status: 'status',
    createdAt: 'createdAt',
    updated_at: 'updated_at',
    logoUrl: 'logoUrl'
  };

  export type TenantsScalarFieldEnum = (typeof TenantsScalarFieldEnum)[keyof typeof TenantsScalarFieldEnum]


  export const EventosScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    titulo: 'titulo',
    descricao: 'descricao',
    linkSlug: 'linkSlug',
    startDate: 'startDate',
    closingDate: 'closingDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    totalSold: 'totalSold',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const TicketTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketTypeScalarFieldEnum = (typeof TicketTypeScalarFieldEnum)[keyof typeof TicketTypeScalarFieldEnum]


  export const BatchTicketScalarFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    ticketTypeId: 'ticketTypeId',
    price: 'price',
    quantity: 'quantity',
    soldQuantity: 'soldQuantity',
    reservedQuantity: 'reservedQuantity',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BatchTicketScalarFieldEnum = (typeof BatchTicketScalarFieldEnum)[keyof typeof BatchTicketScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    eventId: 'eventId',
    batchTicketId: 'batchTicketId',
    hash: 'hash',
    ownerName: 'ownerName',
    ownerEmail: 'ownerEmail',
    ownerDocument: 'ownerDocument',
    price: 'price',
    status: 'status',
    checkedInAt: 'checkedInAt',
    checkedInBy: 'checkedInBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash',
    cargo: 'cargo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const GlobalPaymentConfigScalarFieldEnum: {
    id: 'id',
    defaultPlatformFeePercent: 'defaultPlatformFeePercent',
    defaultPlatformFeeFixed: 'defaultPlatformFeeFixed',
    defaultServiceFeePercent: 'defaultServiceFeePercent',
    defaultServiceFeeFixed: 'defaultServiceFeeFixed',
    defaultServiceFeePayerType: 'defaultServiceFeePayerType',
    acceptCreditCard: 'acceptCreditCard',
    acceptDebitCard: 'acceptDebitCard',
    acceptPix: 'acceptPix',
    acceptBoleto: 'acceptBoleto',
    maxInstallments: 'maxInstallments',
    minInstallmentValue: 'minInstallmentValue',
    interestFree: 'interestFree',
    allowRefunds: 'allowRefunds',
    refundDeadlineDays: 'refundDeadlineDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlobalPaymentConfigScalarFieldEnum = (typeof GlobalPaymentConfigScalarFieldEnum)[keyof typeof GlobalPaymentConfigScalarFieldEnum]


  export const StripeAccountScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    accountId: 'accountId',
    accountType: 'accountType',
    accountStatus: 'accountStatus',
    detailsSubmitted: 'detailsSubmitted',
    chargesEnabled: 'chargesEnabled',
    payoutsEnabled: 'payoutsEnabled',
    country: 'country',
    currency: 'currency',
    email: 'email',
    businessType: 'businessType',
    onboardedAt: 'onboardedAt',
    lastSyncAt: 'lastSyncAt',
    requirementsData: 'requirementsData',
    capabilitiesData: 'capabilitiesData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StripeAccountScalarFieldEnum = (typeof StripeAccountScalarFieldEnum)[keyof typeof StripeAccountScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    eventId: 'eventId',
    userId: 'userId',
    subtotal: 'subtotal',
    serviceFee: 'serviceFee',
    platformFee: 'platformFee',
    total: 'total',
    status: 'status',
    paymentMethod: 'paymentMethod',
    paymentProvider: 'paymentProvider',
    stripePaymentIntentId: 'stripePaymentIntentId',
    stripeClientSecret: 'stripeClientSecret',
    stripeTransferId: 'stripeTransferId',
    stripeApplicationFee: 'stripeApplicationFee',
    paymentUrl: 'paymentUrl',
    qrCodeData: 'qrCodeData',
    boletoBarcode: 'boletoBarcode',
    paidAt: 'paidAt',
    confirmedAt: 'confirmedAt',
    canceledAt: 'canceledAt',
    refundedAt: 'refundedAt',
    expiresAt: 'expiresAt',
    notes: 'notes',
    cancelReason: 'cancelReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    batchTicketId: 'batchTicketId',
    ticketTypeName: 'ticketTypeName',
    batchName: 'batchName',
    quantity: 'quantity',
    price: 'price',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    batchTicketId: 'batchTicketId',
    userId: 'userId',
    quantity: 'quantity',
    expiresAt: 'expiresAt',
    status: 'status',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tenantsOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    telefone: 'telefone',
    email: 'email',
    site: 'site',
    slug: 'slug',
    logoUrl: 'logoUrl'
  };

  export type tenantsOrderByRelevanceFieldEnum = (typeof tenantsOrderByRelevanceFieldEnum)[keyof typeof tenantsOrderByRelevanceFieldEnum]


  export const eventosOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    titulo: 'titulo',
    descricao: 'descricao',
    linkSlug: 'linkSlug'
  };

  export type eventosOrderByRelevanceFieldEnum = (typeof eventosOrderByRelevanceFieldEnum)[keyof typeof eventosOrderByRelevanceFieldEnum]


  export const BatchOrderByRelevanceFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    description: 'description'
  };

  export type BatchOrderByRelevanceFieldEnum = (typeof BatchOrderByRelevanceFieldEnum)[keyof typeof BatchOrderByRelevanceFieldEnum]


  export const TicketTypeOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TicketTypeOrderByRelevanceFieldEnum = (typeof TicketTypeOrderByRelevanceFieldEnum)[keyof typeof TicketTypeOrderByRelevanceFieldEnum]


  export const BatchTicketOrderByRelevanceFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    ticketTypeId: 'ticketTypeId'
  };

  export type BatchTicketOrderByRelevanceFieldEnum = (typeof BatchTicketOrderByRelevanceFieldEnum)[keyof typeof BatchTicketOrderByRelevanceFieldEnum]


  export const TicketOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    eventId: 'eventId',
    batchTicketId: 'batchTicketId',
    hash: 'hash',
    ownerName: 'ownerName',
    ownerEmail: 'ownerEmail',
    ownerDocument: 'ownerDocument',
    checkedInBy: 'checkedInBy'
  };

  export type TicketOrderByRelevanceFieldEnum = (typeof TicketOrderByRelevanceFieldEnum)[keyof typeof TicketOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  export const GlobalPaymentConfigOrderByRelevanceFieldEnum: {
    id: 'id',
    defaultServiceFeePayerType: 'defaultServiceFeePayerType'
  };

  export type GlobalPaymentConfigOrderByRelevanceFieldEnum = (typeof GlobalPaymentConfigOrderByRelevanceFieldEnum)[keyof typeof GlobalPaymentConfigOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const StripeAccountOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    accountId: 'accountId',
    country: 'country',
    currency: 'currency',
    email: 'email'
  };

  export type StripeAccountOrderByRelevanceFieldEnum = (typeof StripeAccountOrderByRelevanceFieldEnum)[keyof typeof StripeAccountOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    eventId: 'eventId',
    userId: 'userId',
    paymentProvider: 'paymentProvider',
    stripePaymentIntentId: 'stripePaymentIntentId',
    stripeClientSecret: 'stripeClientSecret',
    stripeTransferId: 'stripeTransferId',
    paymentUrl: 'paymentUrl',
    qrCodeData: 'qrCodeData',
    boletoBarcode: 'boletoBarcode',
    notes: 'notes',
    cancelReason: 'cancelReason'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const OrderItemOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    batchTicketId: 'batchTicketId',
    ticketTypeName: 'ticketTypeName',
    batchName: 'batchName'
  };

  export type OrderItemOrderByRelevanceFieldEnum = (typeof OrderItemOrderByRelevanceFieldEnum)[keyof typeof OrderItemOrderByRelevanceFieldEnum]


  export const ReservationOrderByRelevanceFieldEnum: {
    id: 'id',
    batchTicketId: 'batchTicketId',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type ReservationOrderByRelevanceFieldEnum = (typeof ReservationOrderByRelevanceFieldEnum)[keyof typeof ReservationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'TenantStatus'
   */
  export type EnumTenantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TenantStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'EventoStatus'
   */
  export type EnumEventoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventoStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'CargoUsuario'
   */
  export type EnumCargoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoUsuario'>
    


  /**
   * Reference to a field of type 'StripeAccountType'
   */
  export type EnumStripeAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StripeAccountType'>
    


  /**
   * Reference to a field of type 'StripeAccountStatus'
   */
  export type EnumStripeAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StripeAccountStatus'>
    


  /**
   * Reference to a field of type 'StripeAccountBusinessType'
   */
  export type EnumStripeAccountBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StripeAccountBusinessType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tenantsWhereInput = {
    AND?: tenantsWhereInput | tenantsWhereInput[]
    OR?: tenantsWhereInput[]
    NOT?: tenantsWhereInput | tenantsWhereInput[]
    id?: StringFilter<"tenants"> | string
    nome?: StringFilter<"tenants"> | string
    cnpj?: StringFilter<"tenants"> | string
    telefone?: StringFilter<"tenants"> | string
    email?: StringFilter<"tenants"> | string
    site?: StringNullableFilter<"tenants"> | string | null
    slug?: StringFilter<"tenants"> | string
    status?: EnumTenantStatusFilter<"tenants"> | $Enums.TenantStatus
    createdAt?: DateTimeFilter<"tenants"> | Date | string
    updated_at?: DateTimeFilter<"tenants"> | Date | string
    logoUrl?: StringNullableFilter<"tenants"> | string | null
    usuarios?: UsuariosListRelationFilter
    eventos?: EventosListRelationFilter
    stripeAccount?: XOR<StripeAccountNullableScalarRelationFilter, StripeAccountWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type tenantsOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrderInput | SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByRelationAggregateInput
    eventos?: eventosOrderByRelationAggregateInput
    stripeAccount?: StripeAccountOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: tenantsOrderByRelevanceInput
  }

  export type tenantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    email?: string
    slug?: string
    AND?: tenantsWhereInput | tenantsWhereInput[]
    OR?: tenantsWhereInput[]
    NOT?: tenantsWhereInput | tenantsWhereInput[]
    nome?: StringFilter<"tenants"> | string
    telefone?: StringFilter<"tenants"> | string
    site?: StringNullableFilter<"tenants"> | string | null
    status?: EnumTenantStatusFilter<"tenants"> | $Enums.TenantStatus
    createdAt?: DateTimeFilter<"tenants"> | Date | string
    updated_at?: DateTimeFilter<"tenants"> | Date | string
    logoUrl?: StringNullableFilter<"tenants"> | string | null
    usuarios?: UsuariosListRelationFilter
    eventos?: EventosListRelationFilter
    stripeAccount?: XOR<StripeAccountNullableScalarRelationFilter, StripeAccountWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id" | "cnpj" | "email" | "slug">

  export type tenantsOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrderInput | SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    _count?: tenantsCountOrderByAggregateInput
    _max?: tenantsMaxOrderByAggregateInput
    _min?: tenantsMinOrderByAggregateInput
  }

  export type tenantsScalarWhereWithAggregatesInput = {
    AND?: tenantsScalarWhereWithAggregatesInput | tenantsScalarWhereWithAggregatesInput[]
    OR?: tenantsScalarWhereWithAggregatesInput[]
    NOT?: tenantsScalarWhereWithAggregatesInput | tenantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tenants"> | string
    nome?: StringWithAggregatesFilter<"tenants"> | string
    cnpj?: StringWithAggregatesFilter<"tenants"> | string
    telefone?: StringWithAggregatesFilter<"tenants"> | string
    email?: StringWithAggregatesFilter<"tenants"> | string
    site?: StringNullableWithAggregatesFilter<"tenants"> | string | null
    slug?: StringWithAggregatesFilter<"tenants"> | string
    status?: EnumTenantStatusWithAggregatesFilter<"tenants"> | $Enums.TenantStatus
    createdAt?: DateTimeWithAggregatesFilter<"tenants"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tenants"> | Date | string
    logoUrl?: StringNullableWithAggregatesFilter<"tenants"> | string | null
  }

  export type eventosWhereInput = {
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    id?: StringFilter<"eventos"> | string
    tenantId?: StringFilter<"eventos"> | string
    titulo?: StringFilter<"eventos"> | string
    descricao?: StringNullableFilter<"eventos"> | string | null
    linkSlug?: StringFilter<"eventos"> | string
    startDate?: DateTimeFilter<"eventos"> | Date | string
    closingDate?: DateTimeFilter<"eventos"> | Date | string
    status?: EnumEventoStatusFilter<"eventos"> | $Enums.EventoStatus
    createdAt?: DateTimeFilter<"eventos"> | Date | string
    updatedAt?: DateTimeFilter<"eventos"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    batches?: BatchListRelationFilter
    tickets?: TicketListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type eventosOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    linkSlug?: SortOrder
    startDate?: SortOrder
    closingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: tenantsOrderByWithRelationInput
    batches?: BatchOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: eventosOrderByRelevanceInput
  }

  export type eventosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    linkSlug?: string
    tenantId_linkSlug?: eventosTenantIdLinkSlugCompoundUniqueInput
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    tenantId?: StringFilter<"eventos"> | string
    titulo?: StringFilter<"eventos"> | string
    descricao?: StringNullableFilter<"eventos"> | string | null
    startDate?: DateTimeFilter<"eventos"> | Date | string
    closingDate?: DateTimeFilter<"eventos"> | Date | string
    status?: EnumEventoStatusFilter<"eventos"> | $Enums.EventoStatus
    createdAt?: DateTimeFilter<"eventos"> | Date | string
    updatedAt?: DateTimeFilter<"eventos"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    batches?: BatchListRelationFilter
    tickets?: TicketListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "linkSlug" | "tenantId_linkSlug">

  export type eventosOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    linkSlug?: SortOrder
    startDate?: SortOrder
    closingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: eventosCountOrderByAggregateInput
    _max?: eventosMaxOrderByAggregateInput
    _min?: eventosMinOrderByAggregateInput
  }

  export type eventosScalarWhereWithAggregatesInput = {
    AND?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    OR?: eventosScalarWhereWithAggregatesInput[]
    NOT?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"eventos"> | string
    tenantId?: StringWithAggregatesFilter<"eventos"> | string
    titulo?: StringWithAggregatesFilter<"eventos"> | string
    descricao?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    linkSlug?: StringWithAggregatesFilter<"eventos"> | string
    startDate?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    closingDate?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    status?: EnumEventoStatusWithAggregatesFilter<"eventos"> | $Enums.EventoStatus
    createdAt?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: StringFilter<"Batch"> | string
    eventId?: StringFilter<"Batch"> | string
    name?: StringFilter<"Batch"> | string
    description?: StringNullableFilter<"Batch"> | string | null
    startDate?: DateTimeFilter<"Batch"> | Date | string
    endDate?: DateTimeFilter<"Batch"> | Date | string
    isActive?: BoolFilter<"Batch"> | boolean
    totalSold?: IntFilter<"Batch"> | number
    order?: IntFilter<"Batch"> | number
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    updatedAt?: DateTimeFilter<"Batch"> | Date | string
    event?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    batchTickets?: BatchTicketListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    totalSold?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: eventosOrderByWithRelationInput
    batchTickets?: BatchTicketOrderByRelationAggregateInput
    _relevance?: BatchOrderByRelevanceInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    eventId?: StringFilter<"Batch"> | string
    name?: StringFilter<"Batch"> | string
    description?: StringNullableFilter<"Batch"> | string | null
    startDate?: DateTimeFilter<"Batch"> | Date | string
    endDate?: DateTimeFilter<"Batch"> | Date | string
    isActive?: BoolFilter<"Batch"> | boolean
    totalSold?: IntFilter<"Batch"> | number
    order?: IntFilter<"Batch"> | number
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    updatedAt?: DateTimeFilter<"Batch"> | Date | string
    event?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    batchTickets?: BatchTicketListRelationFilter
  }, "id">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    totalSold?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _avg?: BatchAvgOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
    _sum?: BatchSumOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Batch"> | string
    eventId?: StringWithAggregatesFilter<"Batch"> | string
    name?: StringWithAggregatesFilter<"Batch"> | string
    description?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Batch"> | boolean
    totalSold?: IntWithAggregatesFilter<"Batch"> | number
    order?: IntWithAggregatesFilter<"Batch"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
  }

  export type TicketTypeWhereInput = {
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    id?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    description?: StringNullableFilter<"TicketType"> | string | null
    createdAt?: DateTimeFilter<"TicketType"> | Date | string
    updatedAt?: DateTimeFilter<"TicketType"> | Date | string
    batchTickets?: BatchTicketListRelationFilter
  }

  export type TicketTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchTickets?: BatchTicketOrderByRelationAggregateInput
    _relevance?: TicketTypeOrderByRelevanceInput
  }

  export type TicketTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    name?: StringFilter<"TicketType"> | string
    description?: StringNullableFilter<"TicketType"> | string | null
    createdAt?: DateTimeFilter<"TicketType"> | Date | string
    updatedAt?: DateTimeFilter<"TicketType"> | Date | string
    batchTickets?: BatchTicketListRelationFilter
  }, "id">

  export type TicketTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketTypeCountOrderByAggregateInput
    _max?: TicketTypeMaxOrderByAggregateInput
    _min?: TicketTypeMinOrderByAggregateInput
  }

  export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    OR?: TicketTypeScalarWhereWithAggregatesInput[]
    NOT?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketType"> | string
    name?: StringWithAggregatesFilter<"TicketType"> | string
    description?: StringNullableWithAggregatesFilter<"TicketType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TicketType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketType"> | Date | string
  }

  export type BatchTicketWhereInput = {
    AND?: BatchTicketWhereInput | BatchTicketWhereInput[]
    OR?: BatchTicketWhereInput[]
    NOT?: BatchTicketWhereInput | BatchTicketWhereInput[]
    id?: StringFilter<"BatchTicket"> | string
    batchId?: StringFilter<"BatchTicket"> | string
    ticketTypeId?: StringFilter<"BatchTicket"> | string
    price?: DecimalFilter<"BatchTicket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"BatchTicket"> | number
    soldQuantity?: IntFilter<"BatchTicket"> | number
    reservedQuantity?: IntFilter<"BatchTicket"> | number
    isActive?: BoolFilter<"BatchTicket"> | boolean
    createdAt?: DateTimeFilter<"BatchTicket"> | Date | string
    updatedAt?: DateTimeFilter<"BatchTicket"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
    ticketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    tickets?: TicketListRelationFilter
    orderItems?: OrderItemListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type BatchTicketOrderByWithRelationInput = {
    id?: SortOrder
    batchId?: SortOrder
    ticketTypeId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    soldQuantity?: SortOrder
    reservedQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batch?: BatchOrderByWithRelationInput
    ticketType?: TicketTypeOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: BatchTicketOrderByRelevanceInput
  }

  export type BatchTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    batchId_ticketTypeId?: BatchTicketBatchIdTicketTypeIdCompoundUniqueInput
    AND?: BatchTicketWhereInput | BatchTicketWhereInput[]
    OR?: BatchTicketWhereInput[]
    NOT?: BatchTicketWhereInput | BatchTicketWhereInput[]
    batchId?: StringFilter<"BatchTicket"> | string
    ticketTypeId?: StringFilter<"BatchTicket"> | string
    price?: DecimalFilter<"BatchTicket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"BatchTicket"> | number
    soldQuantity?: IntFilter<"BatchTicket"> | number
    reservedQuantity?: IntFilter<"BatchTicket"> | number
    isActive?: BoolFilter<"BatchTicket"> | boolean
    createdAt?: DateTimeFilter<"BatchTicket"> | Date | string
    updatedAt?: DateTimeFilter<"BatchTicket"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
    ticketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    tickets?: TicketListRelationFilter
    orderItems?: OrderItemListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id" | "batchId_ticketTypeId">

  export type BatchTicketOrderByWithAggregationInput = {
    id?: SortOrder
    batchId?: SortOrder
    ticketTypeId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    soldQuantity?: SortOrder
    reservedQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BatchTicketCountOrderByAggregateInput
    _avg?: BatchTicketAvgOrderByAggregateInput
    _max?: BatchTicketMaxOrderByAggregateInput
    _min?: BatchTicketMinOrderByAggregateInput
    _sum?: BatchTicketSumOrderByAggregateInput
  }

  export type BatchTicketScalarWhereWithAggregatesInput = {
    AND?: BatchTicketScalarWhereWithAggregatesInput | BatchTicketScalarWhereWithAggregatesInput[]
    OR?: BatchTicketScalarWhereWithAggregatesInput[]
    NOT?: BatchTicketScalarWhereWithAggregatesInput | BatchTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BatchTicket"> | string
    batchId?: StringWithAggregatesFilter<"BatchTicket"> | string
    ticketTypeId?: StringWithAggregatesFilter<"BatchTicket"> | string
    price?: DecimalWithAggregatesFilter<"BatchTicket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"BatchTicket"> | number
    soldQuantity?: IntWithAggregatesFilter<"BatchTicket"> | number
    reservedQuantity?: IntWithAggregatesFilter<"BatchTicket"> | number
    isActive?: BoolWithAggregatesFilter<"BatchTicket"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BatchTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BatchTicket"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    orderId?: StringFilter<"Ticket"> | string
    eventId?: StringFilter<"Ticket"> | string
    batchTicketId?: StringFilter<"Ticket"> | string
    hash?: StringFilter<"Ticket"> | string
    ownerName?: StringFilter<"Ticket"> | string
    ownerEmail?: StringFilter<"Ticket"> | string
    ownerDocument?: StringNullableFilter<"Ticket"> | string | null
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    checkedInAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    checkedInBy?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    event?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    batchTicket?: XOR<BatchTicketScalarRelationFilter, BatchTicketWhereInput>
    checkedInUser?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventId?: SortOrder
    batchTicketId?: SortOrder
    hash?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerDocument?: SortOrderInput | SortOrder
    price?: SortOrder
    status?: SortOrder
    checkedInAt?: SortOrderInput | SortOrder
    checkedInBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    event?: eventosOrderByWithRelationInput
    batchTicket?: BatchTicketOrderByWithRelationInput
    checkedInUser?: usuariosOrderByWithRelationInput
    _relevance?: TicketOrderByRelevanceInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hash?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    orderId?: StringFilter<"Ticket"> | string
    eventId?: StringFilter<"Ticket"> | string
    batchTicketId?: StringFilter<"Ticket"> | string
    ownerName?: StringFilter<"Ticket"> | string
    ownerEmail?: StringFilter<"Ticket"> | string
    ownerDocument?: StringNullableFilter<"Ticket"> | string | null
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    checkedInAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    checkedInBy?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    event?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    batchTicket?: XOR<BatchTicketScalarRelationFilter, BatchTicketWhereInput>
    checkedInUser?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id" | "hash">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventId?: SortOrder
    batchTicketId?: SortOrder
    hash?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerDocument?: SortOrderInput | SortOrder
    price?: SortOrder
    status?: SortOrder
    checkedInAt?: SortOrderInput | SortOrder
    checkedInBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    orderId?: StringWithAggregatesFilter<"Ticket"> | string
    eventId?: StringWithAggregatesFilter<"Ticket"> | string
    batchTicketId?: StringWithAggregatesFilter<"Ticket"> | string
    hash?: StringWithAggregatesFilter<"Ticket"> | string
    ownerName?: StringWithAggregatesFilter<"Ticket"> | string
    ownerEmail?: StringWithAggregatesFilter<"Ticket"> | string
    ownerDocument?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    price?: DecimalWithAggregatesFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    checkedInAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    checkedInBy?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: StringFilter<"usuarios"> | string
    tenantId?: StringNullableFilter<"usuarios"> | string | null
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senhaHash?: StringFilter<"usuarios"> | string
    cargo?: EnumCargoUsuarioFilter<"usuarios"> | $Enums.CargoUsuario
    createdAt?: DateTimeFilter<"usuarios"> | Date | string
    updatedAt?: DateTimeFilter<"usuarios"> | Date | string
    tenant?: XOR<TenantsNullableScalarRelationFilter, tenantsWhereInput> | null
    orders?: OrderListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: tenantsOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: usuariosTenantIdEmailCompoundUniqueInput
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    tenantId?: StringNullableFilter<"usuarios"> | string | null
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senhaHash?: StringFilter<"usuarios"> | string
    cargo?: EnumCargoUsuarioFilter<"usuarios"> | $Enums.CargoUsuario
    createdAt?: DateTimeFilter<"usuarios"> | Date | string
    updatedAt?: DateTimeFilter<"usuarios"> | Date | string
    tenant?: XOR<TenantsNullableScalarRelationFilter, tenantsWhereInput> | null
    orders?: OrderListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "tenantId_email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"usuarios"> | string
    tenantId?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    senhaHash?: StringWithAggregatesFilter<"usuarios"> | string
    cargo?: EnumCargoUsuarioWithAggregatesFilter<"usuarios"> | $Enums.CargoUsuario
    createdAt?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type GlobalPaymentConfigWhereInput = {
    AND?: GlobalPaymentConfigWhereInput | GlobalPaymentConfigWhereInput[]
    OR?: GlobalPaymentConfigWhereInput[]
    NOT?: GlobalPaymentConfigWhereInput | GlobalPaymentConfigWhereInput[]
    id?: StringFilter<"GlobalPaymentConfig"> | string
    defaultPlatformFeePercent?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: StringFilter<"GlobalPaymentConfig"> | string
    acceptCreditCard?: BoolFilter<"GlobalPaymentConfig"> | boolean
    acceptDebitCard?: BoolFilter<"GlobalPaymentConfig"> | boolean
    acceptPix?: BoolFilter<"GlobalPaymentConfig"> | boolean
    acceptBoleto?: BoolFilter<"GlobalPaymentConfig"> | boolean
    maxInstallments?: IntFilter<"GlobalPaymentConfig"> | number
    minInstallmentValue?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    interestFree?: IntFilter<"GlobalPaymentConfig"> | number
    allowRefunds?: BoolFilter<"GlobalPaymentConfig"> | boolean
    refundDeadlineDays?: IntFilter<"GlobalPaymentConfig"> | number
    createdAt?: DateTimeFilter<"GlobalPaymentConfig"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalPaymentConfig"> | Date | string
  }

  export type GlobalPaymentConfigOrderByWithRelationInput = {
    id?: SortOrder
    defaultPlatformFeePercent?: SortOrder
    defaultPlatformFeeFixed?: SortOrder
    defaultServiceFeePercent?: SortOrder
    defaultServiceFeeFixed?: SortOrder
    defaultServiceFeePayerType?: SortOrder
    acceptCreditCard?: SortOrder
    acceptDebitCard?: SortOrder
    acceptPix?: SortOrder
    acceptBoleto?: SortOrder
    maxInstallments?: SortOrder
    minInstallmentValue?: SortOrder
    interestFree?: SortOrder
    allowRefunds?: SortOrder
    refundDeadlineDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: GlobalPaymentConfigOrderByRelevanceInput
  }

  export type GlobalPaymentConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalPaymentConfigWhereInput | GlobalPaymentConfigWhereInput[]
    OR?: GlobalPaymentConfigWhereInput[]
    NOT?: GlobalPaymentConfigWhereInput | GlobalPaymentConfigWhereInput[]
    defaultPlatformFeePercent?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: StringFilter<"GlobalPaymentConfig"> | string
    acceptCreditCard?: BoolFilter<"GlobalPaymentConfig"> | boolean
    acceptDebitCard?: BoolFilter<"GlobalPaymentConfig"> | boolean
    acceptPix?: BoolFilter<"GlobalPaymentConfig"> | boolean
    acceptBoleto?: BoolFilter<"GlobalPaymentConfig"> | boolean
    maxInstallments?: IntFilter<"GlobalPaymentConfig"> | number
    minInstallmentValue?: DecimalFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    interestFree?: IntFilter<"GlobalPaymentConfig"> | number
    allowRefunds?: BoolFilter<"GlobalPaymentConfig"> | boolean
    refundDeadlineDays?: IntFilter<"GlobalPaymentConfig"> | number
    createdAt?: DateTimeFilter<"GlobalPaymentConfig"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalPaymentConfig"> | Date | string
  }, "id">

  export type GlobalPaymentConfigOrderByWithAggregationInput = {
    id?: SortOrder
    defaultPlatformFeePercent?: SortOrder
    defaultPlatformFeeFixed?: SortOrder
    defaultServiceFeePercent?: SortOrder
    defaultServiceFeeFixed?: SortOrder
    defaultServiceFeePayerType?: SortOrder
    acceptCreditCard?: SortOrder
    acceptDebitCard?: SortOrder
    acceptPix?: SortOrder
    acceptBoleto?: SortOrder
    maxInstallments?: SortOrder
    minInstallmentValue?: SortOrder
    interestFree?: SortOrder
    allowRefunds?: SortOrder
    refundDeadlineDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalPaymentConfigCountOrderByAggregateInput
    _avg?: GlobalPaymentConfigAvgOrderByAggregateInput
    _max?: GlobalPaymentConfigMaxOrderByAggregateInput
    _min?: GlobalPaymentConfigMinOrderByAggregateInput
    _sum?: GlobalPaymentConfigSumOrderByAggregateInput
  }

  export type GlobalPaymentConfigScalarWhereWithAggregatesInput = {
    AND?: GlobalPaymentConfigScalarWhereWithAggregatesInput | GlobalPaymentConfigScalarWhereWithAggregatesInput[]
    OR?: GlobalPaymentConfigScalarWhereWithAggregatesInput[]
    NOT?: GlobalPaymentConfigScalarWhereWithAggregatesInput | GlobalPaymentConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalPaymentConfig"> | string
    defaultPlatformFeePercent?: DecimalWithAggregatesFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: DecimalWithAggregatesFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: DecimalWithAggregatesFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: DecimalWithAggregatesFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: StringWithAggregatesFilter<"GlobalPaymentConfig"> | string
    acceptCreditCard?: BoolWithAggregatesFilter<"GlobalPaymentConfig"> | boolean
    acceptDebitCard?: BoolWithAggregatesFilter<"GlobalPaymentConfig"> | boolean
    acceptPix?: BoolWithAggregatesFilter<"GlobalPaymentConfig"> | boolean
    acceptBoleto?: BoolWithAggregatesFilter<"GlobalPaymentConfig"> | boolean
    maxInstallments?: IntWithAggregatesFilter<"GlobalPaymentConfig"> | number
    minInstallmentValue?: DecimalWithAggregatesFilter<"GlobalPaymentConfig"> | Decimal | DecimalJsLike | number | string
    interestFree?: IntWithAggregatesFilter<"GlobalPaymentConfig"> | number
    allowRefunds?: BoolWithAggregatesFilter<"GlobalPaymentConfig"> | boolean
    refundDeadlineDays?: IntWithAggregatesFilter<"GlobalPaymentConfig"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GlobalPaymentConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalPaymentConfig"> | Date | string
  }

  export type StripeAccountWhereInput = {
    AND?: StripeAccountWhereInput | StripeAccountWhereInput[]
    OR?: StripeAccountWhereInput[]
    NOT?: StripeAccountWhereInput | StripeAccountWhereInput[]
    id?: StringFilter<"StripeAccount"> | string
    tenantId?: StringFilter<"StripeAccount"> | string
    accountId?: StringFilter<"StripeAccount"> | string
    accountType?: EnumStripeAccountTypeFilter<"StripeAccount"> | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFilter<"StripeAccount"> | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFilter<"StripeAccount"> | boolean
    chargesEnabled?: BoolFilter<"StripeAccount"> | boolean
    payoutsEnabled?: BoolFilter<"StripeAccount"> | boolean
    country?: StringFilter<"StripeAccount"> | string
    currency?: StringFilter<"StripeAccount"> | string
    email?: StringNullableFilter<"StripeAccount"> | string | null
    businessType?: EnumStripeAccountBusinessTypeNullableFilter<"StripeAccount"> | $Enums.StripeAccountBusinessType | null
    onboardedAt?: DateTimeNullableFilter<"StripeAccount"> | Date | string | null
    lastSyncAt?: DateTimeNullableFilter<"StripeAccount"> | Date | string | null
    requirementsData?: JsonNullableFilter<"StripeAccount">
    capabilitiesData?: JsonNullableFilter<"StripeAccount">
    createdAt?: DateTimeFilter<"StripeAccount"> | Date | string
    updatedAt?: DateTimeFilter<"StripeAccount"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }

  export type StripeAccountOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    accountId?: SortOrder
    accountType?: SortOrder
    accountStatus?: SortOrder
    detailsSubmitted?: SortOrder
    chargesEnabled?: SortOrder
    payoutsEnabled?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    email?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    onboardedAt?: SortOrderInput | SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    requirementsData?: SortOrderInput | SortOrder
    capabilitiesData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: tenantsOrderByWithRelationInput
    _relevance?: StripeAccountOrderByRelevanceInput
  }

  export type StripeAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    accountId?: string
    AND?: StripeAccountWhereInput | StripeAccountWhereInput[]
    OR?: StripeAccountWhereInput[]
    NOT?: StripeAccountWhereInput | StripeAccountWhereInput[]
    accountType?: EnumStripeAccountTypeFilter<"StripeAccount"> | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFilter<"StripeAccount"> | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFilter<"StripeAccount"> | boolean
    chargesEnabled?: BoolFilter<"StripeAccount"> | boolean
    payoutsEnabled?: BoolFilter<"StripeAccount"> | boolean
    country?: StringFilter<"StripeAccount"> | string
    currency?: StringFilter<"StripeAccount"> | string
    email?: StringNullableFilter<"StripeAccount"> | string | null
    businessType?: EnumStripeAccountBusinessTypeNullableFilter<"StripeAccount"> | $Enums.StripeAccountBusinessType | null
    onboardedAt?: DateTimeNullableFilter<"StripeAccount"> | Date | string | null
    lastSyncAt?: DateTimeNullableFilter<"StripeAccount"> | Date | string | null
    requirementsData?: JsonNullableFilter<"StripeAccount">
    capabilitiesData?: JsonNullableFilter<"StripeAccount">
    createdAt?: DateTimeFilter<"StripeAccount"> | Date | string
    updatedAt?: DateTimeFilter<"StripeAccount"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
  }, "id" | "tenantId" | "accountId">

  export type StripeAccountOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    accountId?: SortOrder
    accountType?: SortOrder
    accountStatus?: SortOrder
    detailsSubmitted?: SortOrder
    chargesEnabled?: SortOrder
    payoutsEnabled?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    email?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    onboardedAt?: SortOrderInput | SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    requirementsData?: SortOrderInput | SortOrder
    capabilitiesData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StripeAccountCountOrderByAggregateInput
    _max?: StripeAccountMaxOrderByAggregateInput
    _min?: StripeAccountMinOrderByAggregateInput
  }

  export type StripeAccountScalarWhereWithAggregatesInput = {
    AND?: StripeAccountScalarWhereWithAggregatesInput | StripeAccountScalarWhereWithAggregatesInput[]
    OR?: StripeAccountScalarWhereWithAggregatesInput[]
    NOT?: StripeAccountScalarWhereWithAggregatesInput | StripeAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StripeAccount"> | string
    tenantId?: StringWithAggregatesFilter<"StripeAccount"> | string
    accountId?: StringWithAggregatesFilter<"StripeAccount"> | string
    accountType?: EnumStripeAccountTypeWithAggregatesFilter<"StripeAccount"> | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusWithAggregatesFilter<"StripeAccount"> | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolWithAggregatesFilter<"StripeAccount"> | boolean
    chargesEnabled?: BoolWithAggregatesFilter<"StripeAccount"> | boolean
    payoutsEnabled?: BoolWithAggregatesFilter<"StripeAccount"> | boolean
    country?: StringWithAggregatesFilter<"StripeAccount"> | string
    currency?: StringWithAggregatesFilter<"StripeAccount"> | string
    email?: StringNullableWithAggregatesFilter<"StripeAccount"> | string | null
    businessType?: EnumStripeAccountBusinessTypeNullableWithAggregatesFilter<"StripeAccount"> | $Enums.StripeAccountBusinessType | null
    onboardedAt?: DateTimeNullableWithAggregatesFilter<"StripeAccount"> | Date | string | null
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"StripeAccount"> | Date | string | null
    requirementsData?: JsonNullableWithAggregatesFilter<"StripeAccount">
    capabilitiesData?: JsonNullableWithAggregatesFilter<"StripeAccount">
    createdAt?: DateTimeWithAggregatesFilter<"StripeAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StripeAccount"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    tenantId?: StringFilter<"Order"> | string
    eventId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentProvider?: StringNullableFilter<"Order"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"Order"> | string | null
    stripeClientSecret?: StringNullableFilter<"Order"> | string | null
    stripeTransferId?: StringNullableFilter<"Order"> | string | null
    stripeApplicationFee?: IntNullableFilter<"Order"> | number | null
    paymentUrl?: StringNullableFilter<"Order"> | string | null
    qrCodeData?: StringNullableFilter<"Order"> | string | null
    boletoBarcode?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    cancelReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    event?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    tickets?: TicketListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    subtotal?: SortOrder
    serviceFee?: SortOrder
    platformFee?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentProvider?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeClientSecret?: SortOrderInput | SortOrder
    stripeTransferId?: SortOrderInput | SortOrder
    stripeApplicationFee?: SortOrderInput | SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    qrCodeData?: SortOrderInput | SortOrder
    boletoBarcode?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: tenantsOrderByWithRelationInput
    event?: eventosOrderByWithRelationInput
    usuario?: usuariosOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePaymentIntentId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    tenantId?: StringFilter<"Order"> | string
    eventId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentProvider?: StringNullableFilter<"Order"> | string | null
    stripeClientSecret?: StringNullableFilter<"Order"> | string | null
    stripeTransferId?: StringNullableFilter<"Order"> | string | null
    stripeApplicationFee?: IntNullableFilter<"Order"> | number | null
    paymentUrl?: StringNullableFilter<"Order"> | string | null
    qrCodeData?: StringNullableFilter<"Order"> | string | null
    boletoBarcode?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    cancelReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    event?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    tickets?: TicketListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id" | "stripePaymentIntentId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    subtotal?: SortOrder
    serviceFee?: SortOrder
    platformFee?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentProvider?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeClientSecret?: SortOrderInput | SortOrder
    stripeTransferId?: SortOrderInput | SortOrder
    stripeApplicationFee?: SortOrderInput | SortOrder
    paymentUrl?: SortOrderInput | SortOrder
    qrCodeData?: SortOrderInput | SortOrder
    boletoBarcode?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    cancelReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    tenantId?: StringWithAggregatesFilter<"Order"> | string
    eventId?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    subtotal?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableWithAggregatesFilter<"Order"> | $Enums.PaymentMethod | null
    paymentProvider?: StringNullableWithAggregatesFilter<"Order"> | string | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    stripeClientSecret?: StringNullableWithAggregatesFilter<"Order"> | string | null
    stripeTransferId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    stripeApplicationFee?: IntNullableWithAggregatesFilter<"Order"> | number | null
    paymentUrl?: StringNullableWithAggregatesFilter<"Order"> | string | null
    qrCodeData?: StringNullableWithAggregatesFilter<"Order"> | string | null
    boletoBarcode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    cancelReason?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    batchTicketId?: StringFilter<"OrderItem"> | string
    ticketTypeName?: StringFilter<"OrderItem"> | string
    batchName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    batchTicket?: XOR<BatchTicketScalarRelationFilter, BatchTicketWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    batchTicketId?: SortOrder
    ticketTypeName?: SortOrder
    batchName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    batchTicket?: BatchTicketOrderByWithRelationInput
    _relevance?: OrderItemOrderByRelevanceInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    batchTicketId?: StringFilter<"OrderItem"> | string
    ticketTypeName?: StringFilter<"OrderItem"> | string
    batchName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    batchTicket?: XOR<BatchTicketScalarRelationFilter, BatchTicketWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    batchTicketId?: SortOrder
    ticketTypeName?: SortOrder
    batchName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    batchTicketId?: StringWithAggregatesFilter<"OrderItem"> | string
    ticketTypeName?: StringWithAggregatesFilter<"OrderItem"> | string
    batchName?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    batchTicketId?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    quantity?: IntFilter<"Reservation"> | number
    expiresAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    ipAddress?: StringNullableFilter<"Reservation"> | string | null
    userAgent?: StringNullableFilter<"Reservation"> | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    batchTicket?: XOR<BatchTicketScalarRelationFilter, BatchTicketWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    batchTicketId?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchTicket?: BatchTicketOrderByWithRelationInput
    _relevance?: ReservationOrderByRelevanceInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    batchTicketId?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    quantity?: IntFilter<"Reservation"> | number
    expiresAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    ipAddress?: StringNullableFilter<"Reservation"> | string | null
    userAgent?: StringNullableFilter<"Reservation"> | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    batchTicket?: XOR<BatchTicketScalarRelationFilter, BatchTicketWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    batchTicketId?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    batchTicketId?: StringWithAggregatesFilter<"Reservation"> | string
    userId?: StringWithAggregatesFilter<"Reservation"> | string
    quantity?: IntWithAggregatesFilter<"Reservation"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    ipAddress?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type tenantsCreateInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosCreateNestedManyWithoutTenantInput
    eventos?: eventosCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountCreateNestedOneWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type tenantsUncheckedCreateInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosUncheckedCreateNestedManyWithoutTenantInput
    eventos?: eventosUncheckedCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountUncheckedCreateNestedOneWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type tenantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateManyWithoutTenantNestedInput
    eventos?: eventosUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUpdateOneWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUncheckedUpdateManyWithoutTenantNestedInput
    eventos?: eventosUncheckedUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUncheckedUpdateOneWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type tenantsCreateManyInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
  }

  export type tenantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tenantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventosCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutEventosInput
    batches?: BatchCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type eventosUncheckedCreateInput = {
    id?: string
    tenantId: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutEventosNestedInput
    batches?: BatchUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type eventosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventosCreateManyInput = {
    id?: string
    tenantId: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type eventosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event: eventosCreateNestedOneWithoutBatchesInput
    batchTickets?: BatchTicketCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateInput = {
    id?: string
    eventId: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    batchTickets?: BatchTicketUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventosUpdateOneRequiredWithoutBatchesNestedInput
    batchTickets?: BatchTicketUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchTickets?: BatchTicketUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchCreateManyInput = {
    id?: string
    eventId: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchTickets?: BatchTicketCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchTickets?: BatchTicketUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchTickets?: BatchTicketUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchTickets?: BatchTicketUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchTicketCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: BatchCreateNestedOneWithoutBatchTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutBatchTicketsInput
    tickets?: TicketCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketUncheckedCreateInput = {
    id?: string
    batchId: string
    ticketTypeId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutBatchTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutBatchTicketsNestedInput
    tickets?: TicketUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketCreateManyInput = {
    id?: string
    batchId: string
    ticketTypeId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutTicketsInput
    event: eventosCreateNestedOneWithoutTicketsInput
    batchTicket: BatchTicketCreateNestedOneWithoutTicketsInput
    checkedInUser?: usuariosCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    orderId: string
    eventId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutTicketsNestedInput
    event?: eventosUpdateOneRequiredWithoutTicketsNestedInput
    batchTicket?: BatchTicketUpdateOneRequiredWithoutTicketsNestedInput
    checkedInUser?: usuariosUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyInput = {
    id?: string
    orderId: string
    eventId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: tenantsCreateNestedOneWithoutUsuariosInput
    orders?: OrderCreateNestedManyWithoutUsuarioInput
    tickets?: TicketCreateNestedManyWithoutCheckedInUserInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: string
    tenantId?: string | null
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUsuarioInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCheckedInUserInput
  }

  export type usuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneWithoutUsuariosNestedInput
    orders?: OrderUpdateManyWithoutUsuarioNestedInput
    tickets?: TicketUpdateManyWithoutCheckedInUserNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUsuarioNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCheckedInUserNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: string
    tenantId?: string | null
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPaymentConfigCreateInput = {
    id?: string
    defaultPlatformFeePercent?: Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: string
    acceptCreditCard?: boolean
    acceptDebitCard?: boolean
    acceptPix?: boolean
    acceptBoleto?: boolean
    maxInstallments?: number
    minInstallmentValue?: Decimal | DecimalJsLike | number | string
    interestFree?: number
    allowRefunds?: boolean
    refundDeadlineDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPaymentConfigUncheckedCreateInput = {
    id?: string
    defaultPlatformFeePercent?: Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: string
    acceptCreditCard?: boolean
    acceptDebitCard?: boolean
    acceptPix?: boolean
    acceptBoleto?: boolean
    maxInstallments?: number
    minInstallmentValue?: Decimal | DecimalJsLike | number | string
    interestFree?: number
    allowRefunds?: boolean
    refundDeadlineDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPaymentConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPlatformFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: StringFieldUpdateOperationsInput | string
    acceptCreditCard?: BoolFieldUpdateOperationsInput | boolean
    acceptDebitCard?: BoolFieldUpdateOperationsInput | boolean
    acceptPix?: BoolFieldUpdateOperationsInput | boolean
    acceptBoleto?: BoolFieldUpdateOperationsInput | boolean
    maxInstallments?: IntFieldUpdateOperationsInput | number
    minInstallmentValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestFree?: IntFieldUpdateOperationsInput | number
    allowRefunds?: BoolFieldUpdateOperationsInput | boolean
    refundDeadlineDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPaymentConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPlatformFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: StringFieldUpdateOperationsInput | string
    acceptCreditCard?: BoolFieldUpdateOperationsInput | boolean
    acceptDebitCard?: BoolFieldUpdateOperationsInput | boolean
    acceptPix?: BoolFieldUpdateOperationsInput | boolean
    acceptBoleto?: BoolFieldUpdateOperationsInput | boolean
    maxInstallments?: IntFieldUpdateOperationsInput | number
    minInstallmentValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestFree?: IntFieldUpdateOperationsInput | number
    allowRefunds?: BoolFieldUpdateOperationsInput | boolean
    refundDeadlineDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPaymentConfigCreateManyInput = {
    id?: string
    defaultPlatformFeePercent?: Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: string
    acceptCreditCard?: boolean
    acceptDebitCard?: boolean
    acceptPix?: boolean
    acceptBoleto?: boolean
    maxInstallments?: number
    minInstallmentValue?: Decimal | DecimalJsLike | number | string
    interestFree?: number
    allowRefunds?: boolean
    refundDeadlineDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalPaymentConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPlatformFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: StringFieldUpdateOperationsInput | string
    acceptCreditCard?: BoolFieldUpdateOperationsInput | boolean
    acceptDebitCard?: BoolFieldUpdateOperationsInput | boolean
    acceptPix?: BoolFieldUpdateOperationsInput | boolean
    acceptBoleto?: BoolFieldUpdateOperationsInput | boolean
    maxInstallments?: IntFieldUpdateOperationsInput | number
    minInstallmentValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestFree?: IntFieldUpdateOperationsInput | number
    allowRefunds?: BoolFieldUpdateOperationsInput | boolean
    refundDeadlineDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalPaymentConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultPlatformFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultPlatformFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultServiceFeePayerType?: StringFieldUpdateOperationsInput | string
    acceptCreditCard?: BoolFieldUpdateOperationsInput | boolean
    acceptDebitCard?: BoolFieldUpdateOperationsInput | boolean
    acceptPix?: BoolFieldUpdateOperationsInput | boolean
    acceptBoleto?: BoolFieldUpdateOperationsInput | boolean
    maxInstallments?: IntFieldUpdateOperationsInput | number
    minInstallmentValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interestFree?: IntFieldUpdateOperationsInput | number
    allowRefunds?: BoolFieldUpdateOperationsInput | boolean
    refundDeadlineDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeAccountCreateInput = {
    id?: string
    accountId: string
    accountType?: $Enums.StripeAccountType
    accountStatus?: $Enums.StripeAccountStatus
    detailsSubmitted?: boolean
    chargesEnabled?: boolean
    payoutsEnabled?: boolean
    country?: string
    currency?: string
    email?: string | null
    businessType?: $Enums.StripeAccountBusinessType | null
    onboardedAt?: Date | string | null
    lastSyncAt?: Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutStripeAccountInput
  }

  export type StripeAccountUncheckedCreateInput = {
    id?: string
    tenantId: string
    accountId: string
    accountType?: $Enums.StripeAccountType
    accountStatus?: $Enums.StripeAccountStatus
    detailsSubmitted?: boolean
    chargesEnabled?: boolean
    payoutsEnabled?: boolean
    country?: string
    currency?: string
    email?: string | null
    businessType?: $Enums.StripeAccountBusinessType | null
    onboardedAt?: Date | string | null
    lastSyncAt?: Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StripeAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountType?: EnumStripeAccountTypeFieldUpdateOperationsInput | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFieldUpdateOperationsInput | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    chargesEnabled?: BoolFieldUpdateOperationsInput | boolean
    payoutsEnabled?: BoolFieldUpdateOperationsInput | boolean
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumStripeAccountBusinessTypeFieldUpdateOperationsInput | $Enums.StripeAccountBusinessType | null
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutStripeAccountNestedInput
  }

  export type StripeAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountType?: EnumStripeAccountTypeFieldUpdateOperationsInput | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFieldUpdateOperationsInput | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    chargesEnabled?: BoolFieldUpdateOperationsInput | boolean
    payoutsEnabled?: BoolFieldUpdateOperationsInput | boolean
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumStripeAccountBusinessTypeFieldUpdateOperationsInput | $Enums.StripeAccountBusinessType | null
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeAccountCreateManyInput = {
    id?: string
    tenantId: string
    accountId: string
    accountType?: $Enums.StripeAccountType
    accountStatus?: $Enums.StripeAccountStatus
    detailsSubmitted?: boolean
    chargesEnabled?: boolean
    payoutsEnabled?: boolean
    country?: string
    currency?: string
    email?: string | null
    businessType?: $Enums.StripeAccountBusinessType | null
    onboardedAt?: Date | string | null
    lastSyncAt?: Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StripeAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountType?: EnumStripeAccountTypeFieldUpdateOperationsInput | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFieldUpdateOperationsInput | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    chargesEnabled?: BoolFieldUpdateOperationsInput | boolean
    payoutsEnabled?: BoolFieldUpdateOperationsInput | boolean
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumStripeAccountBusinessTypeFieldUpdateOperationsInput | $Enums.StripeAccountBusinessType | null
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountType?: EnumStripeAccountTypeFieldUpdateOperationsInput | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFieldUpdateOperationsInput | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    chargesEnabled?: BoolFieldUpdateOperationsInput | boolean
    payoutsEnabled?: BoolFieldUpdateOperationsInput | boolean
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumStripeAccountBusinessTypeFieldUpdateOperationsInput | $Enums.StripeAccountBusinessType | null
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutOrdersInput
    event: eventosCreateNestedOneWithoutOrdersInput
    usuario: usuariosCreateNestedOneWithoutOrdersInput
    tickets?: TicketCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    tenantId: string
    eventId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutOrdersNestedInput
    event?: eventosUpdateOneRequiredWithoutOrdersNestedInput
    usuario?: usuariosUpdateOneRequiredWithoutOrdersNestedInput
    tickets?: TicketUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    tenantId: string
    eventId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    batchTicket: BatchTicketCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    batchTicketId: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    batchTicket?: BatchTicketUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    batchTicketId: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    userId: string
    quantity: number
    expiresAt: Date | string
    status?: $Enums.ReservationStatus
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchTicket: BatchTicketCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    batchTicketId: string
    userId: string
    quantity: number
    expiresAt: Date | string
    status?: $Enums.ReservationStatus
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchTicket?: BatchTicketUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    batchTicketId: string
    userId: string
    quantity: number
    expiresAt: Date | string
    status?: $Enums.ReservationStatus
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumTenantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[]
    notIn?: $Enums.TenantStatus[]
    not?: NestedEnumTenantStatusFilter<$PrismaModel> | $Enums.TenantStatus
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

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type EventosListRelationFilter = {
    every?: eventosWhereInput
    some?: eventosWhereInput
    none?: eventosWhereInput
  }

  export type StripeAccountNullableScalarRelationFilter = {
    is?: StripeAccountWhereInput | null
    isNot?: StripeAccountWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tenantsOrderByRelevanceInput = {
    fields: tenantsOrderByRelevanceFieldEnum | tenantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tenantsCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
    logoUrl?: SortOrder
  }

  export type tenantsMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
    logoUrl?: SortOrder
  }

  export type tenantsMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    site?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
    logoUrl?: SortOrder
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

  export type EnumTenantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[]
    notIn?: $Enums.TenantStatus[]
    not?: NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel> | $Enums.TenantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantStatusFilter<$PrismaModel>
    _max?: NestedEnumTenantStatusFilter<$PrismaModel>
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

  export type EnumEventoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventoStatus | EnumEventoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventoStatus[]
    notIn?: $Enums.EventoStatus[]
    not?: NestedEnumEventoStatusFilter<$PrismaModel> | $Enums.EventoStatus
  }

  export type TenantsScalarRelationFilter = {
    is?: tenantsWhereInput
    isNot?: tenantsWhereInput
  }

  export type BatchListRelationFilter = {
    every?: BatchWhereInput
    some?: BatchWhereInput
    none?: BatchWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type BatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventosOrderByRelevanceInput = {
    fields: eventosOrderByRelevanceFieldEnum | eventosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type eventosTenantIdLinkSlugCompoundUniqueInput = {
    tenantId: string
    linkSlug: string
  }

  export type eventosCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    linkSlug?: SortOrder
    startDate?: SortOrder
    closingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type eventosMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    linkSlug?: SortOrder
    startDate?: SortOrder
    closingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type eventosMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    linkSlug?: SortOrder
    startDate?: SortOrder
    closingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEventoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventoStatus | EnumEventoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventoStatus[]
    notIn?: $Enums.EventoStatus[]
    not?: NestedEnumEventoStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventoStatusFilter<$PrismaModel>
    _max?: NestedEnumEventoStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EventosScalarRelationFilter = {
    is?: eventosWhereInput
    isNot?: eventosWhereInput
  }

  export type BatchTicketListRelationFilter = {
    every?: BatchTicketWhereInput
    some?: BatchTicketWhereInput
    none?: BatchTicketWhereInput
  }

  export type BatchTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchOrderByRelevanceInput = {
    fields: BatchOrderByRelevanceFieldEnum | BatchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    totalSold?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchAvgOrderByAggregateInput = {
    totalSold?: SortOrder
    order?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    totalSold?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    totalSold?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchSumOrderByAggregateInput = {
    totalSold?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TicketTypeOrderByRelevanceInput = {
    fields: TicketTypeOrderByRelevanceFieldEnum | TicketTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BatchScalarRelationFilter = {
    is?: BatchWhereInput
    isNot?: BatchWhereInput
  }

  export type TicketTypeScalarRelationFilter = {
    is?: TicketTypeWhereInput
    isNot?: TicketTypeWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchTicketOrderByRelevanceInput = {
    fields: BatchTicketOrderByRelevanceFieldEnum | BatchTicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BatchTicketBatchIdTicketTypeIdCompoundUniqueInput = {
    batchId: string
    ticketTypeId: string
  }

  export type BatchTicketCountOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    ticketTypeId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    soldQuantity?: SortOrder
    reservedQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchTicketAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    soldQuantity?: SortOrder
    reservedQuantity?: SortOrder
  }

  export type BatchTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    ticketTypeId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    soldQuantity?: SortOrder
    reservedQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchTicketMinOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    ticketTypeId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    soldQuantity?: SortOrder
    reservedQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BatchTicketSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    soldQuantity?: SortOrder
    reservedQuantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
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

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type BatchTicketScalarRelationFilter = {
    is?: BatchTicketWhereInput
    isNot?: BatchTicketWhereInput
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type TicketOrderByRelevanceInput = {
    fields: TicketOrderByRelevanceFieldEnum | TicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventId?: SortOrder
    batchTicketId?: SortOrder
    hash?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerDocument?: SortOrder
    price?: SortOrder
    status?: SortOrder
    checkedInAt?: SortOrder
    checkedInBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventId?: SortOrder
    batchTicketId?: SortOrder
    hash?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerDocument?: SortOrder
    price?: SortOrder
    status?: SortOrder
    checkedInAt?: SortOrder
    checkedInBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventId?: SortOrder
    batchTicketId?: SortOrder
    hash?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    ownerDocument?: SortOrder
    price?: SortOrder
    status?: SortOrder
    checkedInAt?: SortOrder
    checkedInBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
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

  export type EnumCargoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[]
    notIn?: $Enums.CargoUsuario[]
    not?: NestedEnumCargoUsuarioFilter<$PrismaModel> | $Enums.CargoUsuario
  }

  export type TenantsNullableScalarRelationFilter = {
    is?: tenantsWhereInput | null
    isNot?: tenantsWhereInput | null
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    cargo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCargoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[]
    notIn?: $Enums.CargoUsuario[]
    not?: NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.CargoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumCargoUsuarioFilter<$PrismaModel>
  }

  export type GlobalPaymentConfigOrderByRelevanceInput = {
    fields: GlobalPaymentConfigOrderByRelevanceFieldEnum | GlobalPaymentConfigOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GlobalPaymentConfigCountOrderByAggregateInput = {
    id?: SortOrder
    defaultPlatformFeePercent?: SortOrder
    defaultPlatformFeeFixed?: SortOrder
    defaultServiceFeePercent?: SortOrder
    defaultServiceFeeFixed?: SortOrder
    defaultServiceFeePayerType?: SortOrder
    acceptCreditCard?: SortOrder
    acceptDebitCard?: SortOrder
    acceptPix?: SortOrder
    acceptBoleto?: SortOrder
    maxInstallments?: SortOrder
    minInstallmentValue?: SortOrder
    interestFree?: SortOrder
    allowRefunds?: SortOrder
    refundDeadlineDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPaymentConfigAvgOrderByAggregateInput = {
    defaultPlatformFeePercent?: SortOrder
    defaultPlatformFeeFixed?: SortOrder
    defaultServiceFeePercent?: SortOrder
    defaultServiceFeeFixed?: SortOrder
    maxInstallments?: SortOrder
    minInstallmentValue?: SortOrder
    interestFree?: SortOrder
    refundDeadlineDays?: SortOrder
  }

  export type GlobalPaymentConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    defaultPlatformFeePercent?: SortOrder
    defaultPlatformFeeFixed?: SortOrder
    defaultServiceFeePercent?: SortOrder
    defaultServiceFeeFixed?: SortOrder
    defaultServiceFeePayerType?: SortOrder
    acceptCreditCard?: SortOrder
    acceptDebitCard?: SortOrder
    acceptPix?: SortOrder
    acceptBoleto?: SortOrder
    maxInstallments?: SortOrder
    minInstallmentValue?: SortOrder
    interestFree?: SortOrder
    allowRefunds?: SortOrder
    refundDeadlineDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPaymentConfigMinOrderByAggregateInput = {
    id?: SortOrder
    defaultPlatformFeePercent?: SortOrder
    defaultPlatformFeeFixed?: SortOrder
    defaultServiceFeePercent?: SortOrder
    defaultServiceFeeFixed?: SortOrder
    defaultServiceFeePayerType?: SortOrder
    acceptCreditCard?: SortOrder
    acceptDebitCard?: SortOrder
    acceptPix?: SortOrder
    acceptBoleto?: SortOrder
    maxInstallments?: SortOrder
    minInstallmentValue?: SortOrder
    interestFree?: SortOrder
    allowRefunds?: SortOrder
    refundDeadlineDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalPaymentConfigSumOrderByAggregateInput = {
    defaultPlatformFeePercent?: SortOrder
    defaultPlatformFeeFixed?: SortOrder
    defaultServiceFeePercent?: SortOrder
    defaultServiceFeeFixed?: SortOrder
    maxInstallments?: SortOrder
    minInstallmentValue?: SortOrder
    interestFree?: SortOrder
    refundDeadlineDays?: SortOrder
  }

  export type EnumStripeAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountType | EnumStripeAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountType[]
    notIn?: $Enums.StripeAccountType[]
    not?: NestedEnumStripeAccountTypeFilter<$PrismaModel> | $Enums.StripeAccountType
  }

  export type EnumStripeAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountStatus | EnumStripeAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountStatus[]
    notIn?: $Enums.StripeAccountStatus[]
    not?: NestedEnumStripeAccountStatusFilter<$PrismaModel> | $Enums.StripeAccountStatus
  }

  export type EnumStripeAccountBusinessTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountBusinessType | EnumStripeAccountBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.StripeAccountBusinessType[] | null
    notIn?: $Enums.StripeAccountBusinessType[] | null
    not?: NestedEnumStripeAccountBusinessTypeNullableFilter<$PrismaModel> | $Enums.StripeAccountBusinessType | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StripeAccountOrderByRelevanceInput = {
    fields: StripeAccountOrderByRelevanceFieldEnum | StripeAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StripeAccountCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    accountId?: SortOrder
    accountType?: SortOrder
    accountStatus?: SortOrder
    detailsSubmitted?: SortOrder
    chargesEnabled?: SortOrder
    payoutsEnabled?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    email?: SortOrder
    businessType?: SortOrder
    onboardedAt?: SortOrder
    lastSyncAt?: SortOrder
    requirementsData?: SortOrder
    capabilitiesData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StripeAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    accountId?: SortOrder
    accountType?: SortOrder
    accountStatus?: SortOrder
    detailsSubmitted?: SortOrder
    chargesEnabled?: SortOrder
    payoutsEnabled?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    email?: SortOrder
    businessType?: SortOrder
    onboardedAt?: SortOrder
    lastSyncAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StripeAccountMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    accountId?: SortOrder
    accountType?: SortOrder
    accountStatus?: SortOrder
    detailsSubmitted?: SortOrder
    chargesEnabled?: SortOrder
    payoutsEnabled?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    email?: SortOrder
    businessType?: SortOrder
    onboardedAt?: SortOrder
    lastSyncAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStripeAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountType | EnumStripeAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountType[]
    notIn?: $Enums.StripeAccountType[]
    not?: NestedEnumStripeAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.StripeAccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStripeAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumStripeAccountTypeFilter<$PrismaModel>
  }

  export type EnumStripeAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountStatus | EnumStripeAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountStatus[]
    notIn?: $Enums.StripeAccountStatus[]
    not?: NestedEnumStripeAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.StripeAccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStripeAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumStripeAccountStatusFilter<$PrismaModel>
  }

  export type EnumStripeAccountBusinessTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountBusinessType | EnumStripeAccountBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.StripeAccountBusinessType[] | null
    notIn?: $Enums.StripeAccountBusinessType[] | null
    not?: NestedEnumStripeAccountBusinessTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.StripeAccountBusinessType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStripeAccountBusinessTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumStripeAccountBusinessTypeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    subtotal?: SortOrder
    serviceFee?: SortOrder
    platformFee?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentProvider?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeClientSecret?: SortOrder
    stripeTransferId?: SortOrder
    stripeApplicationFee?: SortOrder
    paymentUrl?: SortOrder
    qrCodeData?: SortOrder
    boletoBarcode?: SortOrder
    paidAt?: SortOrder
    confirmedAt?: SortOrder
    canceledAt?: SortOrder
    refundedAt?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    serviceFee?: SortOrder
    platformFee?: SortOrder
    total?: SortOrder
    stripeApplicationFee?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    subtotal?: SortOrder
    serviceFee?: SortOrder
    platformFee?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentProvider?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeClientSecret?: SortOrder
    stripeTransferId?: SortOrder
    stripeApplicationFee?: SortOrder
    paymentUrl?: SortOrder
    qrCodeData?: SortOrder
    boletoBarcode?: SortOrder
    paidAt?: SortOrder
    confirmedAt?: SortOrder
    canceledAt?: SortOrder
    refundedAt?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    subtotal?: SortOrder
    serviceFee?: SortOrder
    platformFee?: SortOrder
    total?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    paymentProvider?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeClientSecret?: SortOrder
    stripeTransferId?: SortOrder
    stripeApplicationFee?: SortOrder
    paymentUrl?: SortOrder
    qrCodeData?: SortOrder
    boletoBarcode?: SortOrder
    paidAt?: SortOrder
    confirmedAt?: SortOrder
    canceledAt?: SortOrder
    refundedAt?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    cancelReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    serviceFee?: SortOrder
    platformFee?: SortOrder
    total?: SortOrder
    stripeApplicationFee?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type OrderItemOrderByRelevanceInput = {
    fields: OrderItemOrderByRelevanceFieldEnum | OrderItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    batchTicketId?: SortOrder
    ticketTypeName?: SortOrder
    batchName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    batchTicketId?: SortOrder
    ticketTypeName?: SortOrder
    batchName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    batchTicketId?: SortOrder
    ticketTypeName?: SortOrder
    batchName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type ReservationOrderByRelevanceInput = {
    fields: ReservationOrderByRelevanceFieldEnum | ReservationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    batchTicketId?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    batchTicketId?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    batchTicketId?: SortOrder
    userId?: SortOrder
    quantity?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type usuariosCreateNestedManyWithoutTenantInput = {
    create?: XOR<usuariosCreateWithoutTenantInput, usuariosUncheckedCreateWithoutTenantInput> | usuariosCreateWithoutTenantInput[] | usuariosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutTenantInput | usuariosCreateOrConnectWithoutTenantInput[]
    createMany?: usuariosCreateManyTenantInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type eventosCreateNestedManyWithoutTenantInput = {
    create?: XOR<eventosCreateWithoutTenantInput, eventosUncheckedCreateWithoutTenantInput> | eventosCreateWithoutTenantInput[] | eventosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTenantInput | eventosCreateOrConnectWithoutTenantInput[]
    createMany?: eventosCreateManyTenantInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type StripeAccountCreateNestedOneWithoutTenantInput = {
    create?: XOR<StripeAccountCreateWithoutTenantInput, StripeAccountUncheckedCreateWithoutTenantInput>
    connectOrCreate?: StripeAccountCreateOrConnectWithoutTenantInput
    connect?: StripeAccountWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<usuariosCreateWithoutTenantInput, usuariosUncheckedCreateWithoutTenantInput> | usuariosCreateWithoutTenantInput[] | usuariosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutTenantInput | usuariosCreateOrConnectWithoutTenantInput[]
    createMany?: usuariosCreateManyTenantInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type eventosUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<eventosCreateWithoutTenantInput, eventosUncheckedCreateWithoutTenantInput> | eventosCreateWithoutTenantInput[] | eventosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTenantInput | eventosCreateOrConnectWithoutTenantInput[]
    createMany?: eventosCreateManyTenantInputEnvelope
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
  }

  export type StripeAccountUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<StripeAccountCreateWithoutTenantInput, StripeAccountUncheckedCreateWithoutTenantInput>
    connectOrCreate?: StripeAccountCreateOrConnectWithoutTenantInput
    connect?: StripeAccountWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTenantStatusFieldUpdateOperationsInput = {
    set?: $Enums.TenantStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuariosUpdateManyWithoutTenantNestedInput = {
    create?: XOR<usuariosCreateWithoutTenantInput, usuariosUncheckedCreateWithoutTenantInput> | usuariosCreateWithoutTenantInput[] | usuariosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutTenantInput | usuariosCreateOrConnectWithoutTenantInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutTenantInput | usuariosUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: usuariosCreateManyTenantInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutTenantInput | usuariosUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutTenantInput | usuariosUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type eventosUpdateManyWithoutTenantNestedInput = {
    create?: XOR<eventosCreateWithoutTenantInput, eventosUncheckedCreateWithoutTenantInput> | eventosCreateWithoutTenantInput[] | eventosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTenantInput | eventosCreateOrConnectWithoutTenantInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutTenantInput | eventosUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: eventosCreateManyTenantInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutTenantInput | eventosUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutTenantInput | eventosUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type StripeAccountUpdateOneWithoutTenantNestedInput = {
    create?: XOR<StripeAccountCreateWithoutTenantInput, StripeAccountUncheckedCreateWithoutTenantInput>
    connectOrCreate?: StripeAccountCreateOrConnectWithoutTenantInput
    upsert?: StripeAccountUpsertWithoutTenantInput
    disconnect?: StripeAccountWhereInput | boolean
    delete?: StripeAccountWhereInput | boolean
    connect?: StripeAccountWhereUniqueInput
    update?: XOR<XOR<StripeAccountUpdateToOneWithWhereWithoutTenantInput, StripeAccountUpdateWithoutTenantInput>, StripeAccountUncheckedUpdateWithoutTenantInput>
  }

  export type OrderUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTenantInput | OrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTenantInput | OrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTenantInput | OrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type usuariosUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<usuariosCreateWithoutTenantInput, usuariosUncheckedCreateWithoutTenantInput> | usuariosCreateWithoutTenantInput[] | usuariosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutTenantInput | usuariosCreateOrConnectWithoutTenantInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutTenantInput | usuariosUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: usuariosCreateManyTenantInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutTenantInput | usuariosUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutTenantInput | usuariosUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type eventosUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<eventosCreateWithoutTenantInput, eventosUncheckedCreateWithoutTenantInput> | eventosCreateWithoutTenantInput[] | eventosUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: eventosCreateOrConnectWithoutTenantInput | eventosCreateOrConnectWithoutTenantInput[]
    upsert?: eventosUpsertWithWhereUniqueWithoutTenantInput | eventosUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: eventosCreateManyTenantInputEnvelope
    set?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    disconnect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    delete?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    connect?: eventosWhereUniqueInput | eventosWhereUniqueInput[]
    update?: eventosUpdateWithWhereUniqueWithoutTenantInput | eventosUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: eventosUpdateManyWithWhereWithoutTenantInput | eventosUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: eventosScalarWhereInput | eventosScalarWhereInput[]
  }

  export type StripeAccountUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<StripeAccountCreateWithoutTenantInput, StripeAccountUncheckedCreateWithoutTenantInput>
    connectOrCreate?: StripeAccountCreateOrConnectWithoutTenantInput
    upsert?: StripeAccountUpsertWithoutTenantInput
    disconnect?: StripeAccountWhereInput | boolean
    delete?: StripeAccountWhereInput | boolean
    connect?: StripeAccountWhereUniqueInput
    update?: XOR<XOR<StripeAccountUpdateToOneWithWhereWithoutTenantInput, StripeAccountUpdateWithoutTenantInput>, StripeAccountUncheckedUpdateWithoutTenantInput>
  }

  export type OrderUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTenantInput | OrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTenantInput | OrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTenantInput | OrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type tenantsCreateNestedOneWithoutEventosInput = {
    create?: XOR<tenantsCreateWithoutEventosInput, tenantsUncheckedCreateWithoutEventosInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutEventosInput
    connect?: tenantsWhereUniqueInput
  }

  export type BatchCreateNestedManyWithoutEventInput = {
    create?: XOR<BatchCreateWithoutEventInput, BatchUncheckedCreateWithoutEventInput> | BatchCreateWithoutEventInput[] | BatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutEventInput | BatchCreateOrConnectWithoutEventInput[]
    createMany?: BatchCreateManyEventInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<BatchCreateWithoutEventInput, BatchUncheckedCreateWithoutEventInput> | BatchCreateWithoutEventInput[] | BatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutEventInput | BatchCreateOrConnectWithoutEventInput[]
    createMany?: BatchCreateManyEventInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumEventoStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventoStatus
  }

  export type tenantsUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<tenantsCreateWithoutEventosInput, tenantsUncheckedCreateWithoutEventosInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutEventosInput
    upsert?: tenantsUpsertWithoutEventosInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutEventosInput, tenantsUpdateWithoutEventosInput>, tenantsUncheckedUpdateWithoutEventosInput>
  }

  export type BatchUpdateManyWithoutEventNestedInput = {
    create?: XOR<BatchCreateWithoutEventInput, BatchUncheckedCreateWithoutEventInput> | BatchCreateWithoutEventInput[] | BatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutEventInput | BatchCreateOrConnectWithoutEventInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutEventInput | BatchUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BatchCreateManyEventInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutEventInput | BatchUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutEventInput | BatchUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<BatchCreateWithoutEventInput, BatchUncheckedCreateWithoutEventInput> | BatchCreateWithoutEventInput[] | BatchUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutEventInput | BatchCreateOrConnectWithoutEventInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutEventInput | BatchUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BatchCreateManyEventInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutEventInput | BatchUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutEventInput | BatchUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type eventosCreateNestedOneWithoutBatchesInput = {
    create?: XOR<eventosCreateWithoutBatchesInput, eventosUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: eventosCreateOrConnectWithoutBatchesInput
    connect?: eventosWhereUniqueInput
  }

  export type BatchTicketCreateNestedManyWithoutBatchInput = {
    create?: XOR<BatchTicketCreateWithoutBatchInput, BatchTicketUncheckedCreateWithoutBatchInput> | BatchTicketCreateWithoutBatchInput[] | BatchTicketUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutBatchInput | BatchTicketCreateOrConnectWithoutBatchInput[]
    createMany?: BatchTicketCreateManyBatchInputEnvelope
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
  }

  export type BatchTicketUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<BatchTicketCreateWithoutBatchInput, BatchTicketUncheckedCreateWithoutBatchInput> | BatchTicketCreateWithoutBatchInput[] | BatchTicketUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutBatchInput | BatchTicketCreateOrConnectWithoutBatchInput[]
    createMany?: BatchTicketCreateManyBatchInputEnvelope
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type eventosUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<eventosCreateWithoutBatchesInput, eventosUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: eventosCreateOrConnectWithoutBatchesInput
    upsert?: eventosUpsertWithoutBatchesInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutBatchesInput, eventosUpdateWithoutBatchesInput>, eventosUncheckedUpdateWithoutBatchesInput>
  }

  export type BatchTicketUpdateManyWithoutBatchNestedInput = {
    create?: XOR<BatchTicketCreateWithoutBatchInput, BatchTicketUncheckedCreateWithoutBatchInput> | BatchTicketCreateWithoutBatchInput[] | BatchTicketUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutBatchInput | BatchTicketCreateOrConnectWithoutBatchInput[]
    upsert?: BatchTicketUpsertWithWhereUniqueWithoutBatchInput | BatchTicketUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: BatchTicketCreateManyBatchInputEnvelope
    set?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    disconnect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    delete?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    update?: BatchTicketUpdateWithWhereUniqueWithoutBatchInput | BatchTicketUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: BatchTicketUpdateManyWithWhereWithoutBatchInput | BatchTicketUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: BatchTicketScalarWhereInput | BatchTicketScalarWhereInput[]
  }

  export type BatchTicketUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<BatchTicketCreateWithoutBatchInput, BatchTicketUncheckedCreateWithoutBatchInput> | BatchTicketCreateWithoutBatchInput[] | BatchTicketUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutBatchInput | BatchTicketCreateOrConnectWithoutBatchInput[]
    upsert?: BatchTicketUpsertWithWhereUniqueWithoutBatchInput | BatchTicketUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: BatchTicketCreateManyBatchInputEnvelope
    set?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    disconnect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    delete?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    update?: BatchTicketUpdateWithWhereUniqueWithoutBatchInput | BatchTicketUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: BatchTicketUpdateManyWithWhereWithoutBatchInput | BatchTicketUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: BatchTicketScalarWhereInput | BatchTicketScalarWhereInput[]
  }

  export type BatchTicketCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<BatchTicketCreateWithoutTicketTypeInput, BatchTicketUncheckedCreateWithoutTicketTypeInput> | BatchTicketCreateWithoutTicketTypeInput[] | BatchTicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutTicketTypeInput | BatchTicketCreateOrConnectWithoutTicketTypeInput[]
    createMany?: BatchTicketCreateManyTicketTypeInputEnvelope
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
  }

  export type BatchTicketUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<BatchTicketCreateWithoutTicketTypeInput, BatchTicketUncheckedCreateWithoutTicketTypeInput> | BatchTicketCreateWithoutTicketTypeInput[] | BatchTicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutTicketTypeInput | BatchTicketCreateOrConnectWithoutTicketTypeInput[]
    createMany?: BatchTicketCreateManyTicketTypeInputEnvelope
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
  }

  export type BatchTicketUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<BatchTicketCreateWithoutTicketTypeInput, BatchTicketUncheckedCreateWithoutTicketTypeInput> | BatchTicketCreateWithoutTicketTypeInput[] | BatchTicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutTicketTypeInput | BatchTicketCreateOrConnectWithoutTicketTypeInput[]
    upsert?: BatchTicketUpsertWithWhereUniqueWithoutTicketTypeInput | BatchTicketUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: BatchTicketCreateManyTicketTypeInputEnvelope
    set?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    disconnect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    delete?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    update?: BatchTicketUpdateWithWhereUniqueWithoutTicketTypeInput | BatchTicketUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: BatchTicketUpdateManyWithWhereWithoutTicketTypeInput | BatchTicketUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: BatchTicketScalarWhereInput | BatchTicketScalarWhereInput[]
  }

  export type BatchTicketUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<BatchTicketCreateWithoutTicketTypeInput, BatchTicketUncheckedCreateWithoutTicketTypeInput> | BatchTicketCreateWithoutTicketTypeInput[] | BatchTicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: BatchTicketCreateOrConnectWithoutTicketTypeInput | BatchTicketCreateOrConnectWithoutTicketTypeInput[]
    upsert?: BatchTicketUpsertWithWhereUniqueWithoutTicketTypeInput | BatchTicketUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: BatchTicketCreateManyTicketTypeInputEnvelope
    set?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    disconnect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    delete?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    connect?: BatchTicketWhereUniqueInput | BatchTicketWhereUniqueInput[]
    update?: BatchTicketUpdateWithWhereUniqueWithoutTicketTypeInput | BatchTicketUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: BatchTicketUpdateManyWithWhereWithoutTicketTypeInput | BatchTicketUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: BatchTicketScalarWhereInput | BatchTicketScalarWhereInput[]
  }

  export type BatchCreateNestedOneWithoutBatchTicketsInput = {
    create?: XOR<BatchCreateWithoutBatchTicketsInput, BatchUncheckedCreateWithoutBatchTicketsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutBatchTicketsInput
    connect?: BatchWhereUniqueInput
  }

  export type TicketTypeCreateNestedOneWithoutBatchTicketsInput = {
    create?: XOR<TicketTypeCreateWithoutBatchTicketsInput, TicketTypeUncheckedCreateWithoutBatchTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutBatchTicketsInput
    connect?: TicketTypeWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutBatchTicketInput = {
    create?: XOR<TicketCreateWithoutBatchTicketInput, TicketUncheckedCreateWithoutBatchTicketInput> | TicketCreateWithoutBatchTicketInput[] | TicketUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBatchTicketInput | TicketCreateOrConnectWithoutBatchTicketInput[]
    createMany?: TicketCreateManyBatchTicketInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutBatchTicketInput = {
    create?: XOR<OrderItemCreateWithoutBatchTicketInput, OrderItemUncheckedCreateWithoutBatchTicketInput> | OrderItemCreateWithoutBatchTicketInput[] | OrderItemUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutBatchTicketInput | OrderItemCreateOrConnectWithoutBatchTicketInput[]
    createMany?: OrderItemCreateManyBatchTicketInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutBatchTicketInput = {
    create?: XOR<ReservationCreateWithoutBatchTicketInput, ReservationUncheckedCreateWithoutBatchTicketInput> | ReservationCreateWithoutBatchTicketInput[] | ReservationUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBatchTicketInput | ReservationCreateOrConnectWithoutBatchTicketInput[]
    createMany?: ReservationCreateManyBatchTicketInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBatchTicketInput = {
    create?: XOR<TicketCreateWithoutBatchTicketInput, TicketUncheckedCreateWithoutBatchTicketInput> | TicketCreateWithoutBatchTicketInput[] | TicketUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBatchTicketInput | TicketCreateOrConnectWithoutBatchTicketInput[]
    createMany?: TicketCreateManyBatchTicketInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutBatchTicketInput = {
    create?: XOR<OrderItemCreateWithoutBatchTicketInput, OrderItemUncheckedCreateWithoutBatchTicketInput> | OrderItemCreateWithoutBatchTicketInput[] | OrderItemUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutBatchTicketInput | OrderItemCreateOrConnectWithoutBatchTicketInput[]
    createMany?: OrderItemCreateManyBatchTicketInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutBatchTicketInput = {
    create?: XOR<ReservationCreateWithoutBatchTicketInput, ReservationUncheckedCreateWithoutBatchTicketInput> | ReservationCreateWithoutBatchTicketInput[] | ReservationUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBatchTicketInput | ReservationCreateOrConnectWithoutBatchTicketInput[]
    createMany?: ReservationCreateManyBatchTicketInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BatchUpdateOneRequiredWithoutBatchTicketsNestedInput = {
    create?: XOR<BatchCreateWithoutBatchTicketsInput, BatchUncheckedCreateWithoutBatchTicketsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutBatchTicketsInput
    upsert?: BatchUpsertWithoutBatchTicketsInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutBatchTicketsInput, BatchUpdateWithoutBatchTicketsInput>, BatchUncheckedUpdateWithoutBatchTicketsInput>
  }

  export type TicketTypeUpdateOneRequiredWithoutBatchTicketsNestedInput = {
    create?: XOR<TicketTypeCreateWithoutBatchTicketsInput, TicketTypeUncheckedCreateWithoutBatchTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutBatchTicketsInput
    upsert?: TicketTypeUpsertWithoutBatchTicketsInput
    connect?: TicketTypeWhereUniqueInput
    update?: XOR<XOR<TicketTypeUpdateToOneWithWhereWithoutBatchTicketsInput, TicketTypeUpdateWithoutBatchTicketsInput>, TicketTypeUncheckedUpdateWithoutBatchTicketsInput>
  }

  export type TicketUpdateManyWithoutBatchTicketNestedInput = {
    create?: XOR<TicketCreateWithoutBatchTicketInput, TicketUncheckedCreateWithoutBatchTicketInput> | TicketCreateWithoutBatchTicketInput[] | TicketUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBatchTicketInput | TicketCreateOrConnectWithoutBatchTicketInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBatchTicketInput | TicketUpsertWithWhereUniqueWithoutBatchTicketInput[]
    createMany?: TicketCreateManyBatchTicketInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBatchTicketInput | TicketUpdateWithWhereUniqueWithoutBatchTicketInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBatchTicketInput | TicketUpdateManyWithWhereWithoutBatchTicketInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutBatchTicketNestedInput = {
    create?: XOR<OrderItemCreateWithoutBatchTicketInput, OrderItemUncheckedCreateWithoutBatchTicketInput> | OrderItemCreateWithoutBatchTicketInput[] | OrderItemUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutBatchTicketInput | OrderItemCreateOrConnectWithoutBatchTicketInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutBatchTicketInput | OrderItemUpsertWithWhereUniqueWithoutBatchTicketInput[]
    createMany?: OrderItemCreateManyBatchTicketInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutBatchTicketInput | OrderItemUpdateWithWhereUniqueWithoutBatchTicketInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutBatchTicketInput | OrderItemUpdateManyWithWhereWithoutBatchTicketInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutBatchTicketNestedInput = {
    create?: XOR<ReservationCreateWithoutBatchTicketInput, ReservationUncheckedCreateWithoutBatchTicketInput> | ReservationCreateWithoutBatchTicketInput[] | ReservationUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBatchTicketInput | ReservationCreateOrConnectWithoutBatchTicketInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutBatchTicketInput | ReservationUpsertWithWhereUniqueWithoutBatchTicketInput[]
    createMany?: ReservationCreateManyBatchTicketInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutBatchTicketInput | ReservationUpdateWithWhereUniqueWithoutBatchTicketInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutBatchTicketInput | ReservationUpdateManyWithWhereWithoutBatchTicketInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutBatchTicketNestedInput = {
    create?: XOR<TicketCreateWithoutBatchTicketInput, TicketUncheckedCreateWithoutBatchTicketInput> | TicketCreateWithoutBatchTicketInput[] | TicketUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBatchTicketInput | TicketCreateOrConnectWithoutBatchTicketInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBatchTicketInput | TicketUpsertWithWhereUniqueWithoutBatchTicketInput[]
    createMany?: TicketCreateManyBatchTicketInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBatchTicketInput | TicketUpdateWithWhereUniqueWithoutBatchTicketInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBatchTicketInput | TicketUpdateManyWithWhereWithoutBatchTicketInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutBatchTicketNestedInput = {
    create?: XOR<OrderItemCreateWithoutBatchTicketInput, OrderItemUncheckedCreateWithoutBatchTicketInput> | OrderItemCreateWithoutBatchTicketInput[] | OrderItemUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutBatchTicketInput | OrderItemCreateOrConnectWithoutBatchTicketInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutBatchTicketInput | OrderItemUpsertWithWhereUniqueWithoutBatchTicketInput[]
    createMany?: OrderItemCreateManyBatchTicketInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutBatchTicketInput | OrderItemUpdateWithWhereUniqueWithoutBatchTicketInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutBatchTicketInput | OrderItemUpdateManyWithWhereWithoutBatchTicketInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutBatchTicketNestedInput = {
    create?: XOR<ReservationCreateWithoutBatchTicketInput, ReservationUncheckedCreateWithoutBatchTicketInput> | ReservationCreateWithoutBatchTicketInput[] | ReservationUncheckedCreateWithoutBatchTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBatchTicketInput | ReservationCreateOrConnectWithoutBatchTicketInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutBatchTicketInput | ReservationUpsertWithWhereUniqueWithoutBatchTicketInput[]
    createMany?: ReservationCreateManyBatchTicketInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutBatchTicketInput | ReservationUpdateWithWhereUniqueWithoutBatchTicketInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutBatchTicketInput | ReservationUpdateManyWithWhereWithoutBatchTicketInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutTicketsInput = {
    create?: XOR<OrderCreateWithoutTicketsInput, OrderUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTicketsInput
    connect?: OrderWhereUniqueInput
  }

  export type eventosCreateNestedOneWithoutTicketsInput = {
    create?: XOR<eventosCreateWithoutTicketsInput, eventosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: eventosCreateOrConnectWithoutTicketsInput
    connect?: eventosWhereUniqueInput
  }

  export type BatchTicketCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BatchTicketCreateWithoutTicketsInput, BatchTicketUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BatchTicketCreateOrConnectWithoutTicketsInput
    connect?: BatchTicketWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutTicketsInput = {
    create?: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTicketsInput
    connect?: usuariosWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrderUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<OrderCreateWithoutTicketsInput, OrderUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTicketsInput
    upsert?: OrderUpsertWithoutTicketsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutTicketsInput, OrderUpdateWithoutTicketsInput>, OrderUncheckedUpdateWithoutTicketsInput>
  }

  export type eventosUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<eventosCreateWithoutTicketsInput, eventosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: eventosCreateOrConnectWithoutTicketsInput
    upsert?: eventosUpsertWithoutTicketsInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutTicketsInput, eventosUpdateWithoutTicketsInput>, eventosUncheckedUpdateWithoutTicketsInput>
  }

  export type BatchTicketUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BatchTicketCreateWithoutTicketsInput, BatchTicketUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BatchTicketCreateOrConnectWithoutTicketsInput
    upsert?: BatchTicketUpsertWithoutTicketsInput
    connect?: BatchTicketWhereUniqueInput
    update?: XOR<XOR<BatchTicketUpdateToOneWithWhereWithoutTicketsInput, BatchTicketUpdateWithoutTicketsInput>, BatchTicketUncheckedUpdateWithoutTicketsInput>
  }

  export type usuariosUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutTicketsInput
    upsert?: usuariosUpsertWithoutTicketsInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutTicketsInput, usuariosUpdateWithoutTicketsInput>, usuariosUncheckedUpdateWithoutTicketsInput>
  }

  export type tenantsCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tenantsCreateWithoutUsuariosInput, tenantsUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutUsuariosInput
    connect?: tenantsWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrderCreateWithoutUsuarioInput, OrderUncheckedCreateWithoutUsuarioInput> | OrderCreateWithoutUsuarioInput[] | OrderUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUsuarioInput | OrderCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrderCreateManyUsuarioInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCheckedInUserInput = {
    create?: XOR<TicketCreateWithoutCheckedInUserInput, TicketUncheckedCreateWithoutCheckedInUserInput> | TicketCreateWithoutCheckedInUserInput[] | TicketUncheckedCreateWithoutCheckedInUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCheckedInUserInput | TicketCreateOrConnectWithoutCheckedInUserInput[]
    createMany?: TicketCreateManyCheckedInUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrderCreateWithoutUsuarioInput, OrderUncheckedCreateWithoutUsuarioInput> | OrderCreateWithoutUsuarioInput[] | OrderUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUsuarioInput | OrderCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrderCreateManyUsuarioInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCheckedInUserInput = {
    create?: XOR<TicketCreateWithoutCheckedInUserInput, TicketUncheckedCreateWithoutCheckedInUserInput> | TicketCreateWithoutCheckedInUserInput[] | TicketUncheckedCreateWithoutCheckedInUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCheckedInUserInput | TicketCreateOrConnectWithoutCheckedInUserInput[]
    createMany?: TicketCreateManyCheckedInUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumCargoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.CargoUsuario
  }

  export type tenantsUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<tenantsCreateWithoutUsuariosInput, tenantsUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutUsuariosInput
    upsert?: tenantsUpsertWithoutUsuariosInput
    disconnect?: tenantsWhereInput | boolean
    delete?: tenantsWhereInput | boolean
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutUsuariosInput, tenantsUpdateWithoutUsuariosInput>, tenantsUncheckedUpdateWithoutUsuariosInput>
  }

  export type OrderUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrderCreateWithoutUsuarioInput, OrderUncheckedCreateWithoutUsuarioInput> | OrderCreateWithoutUsuarioInput[] | OrderUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUsuarioInput | OrderCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUsuarioInput | OrderUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrderCreateManyUsuarioInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUsuarioInput | OrderUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUsuarioInput | OrderUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCheckedInUserNestedInput = {
    create?: XOR<TicketCreateWithoutCheckedInUserInput, TicketUncheckedCreateWithoutCheckedInUserInput> | TicketCreateWithoutCheckedInUserInput[] | TicketUncheckedCreateWithoutCheckedInUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCheckedInUserInput | TicketCreateOrConnectWithoutCheckedInUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCheckedInUserInput | TicketUpsertWithWhereUniqueWithoutCheckedInUserInput[]
    createMany?: TicketCreateManyCheckedInUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCheckedInUserInput | TicketUpdateWithWhereUniqueWithoutCheckedInUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCheckedInUserInput | TicketUpdateManyWithWhereWithoutCheckedInUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrderCreateWithoutUsuarioInput, OrderUncheckedCreateWithoutUsuarioInput> | OrderCreateWithoutUsuarioInput[] | OrderUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUsuarioInput | OrderCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUsuarioInput | OrderUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrderCreateManyUsuarioInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUsuarioInput | OrderUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUsuarioInput | OrderUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCheckedInUserNestedInput = {
    create?: XOR<TicketCreateWithoutCheckedInUserInput, TicketUncheckedCreateWithoutCheckedInUserInput> | TicketCreateWithoutCheckedInUserInput[] | TicketUncheckedCreateWithoutCheckedInUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCheckedInUserInput | TicketCreateOrConnectWithoutCheckedInUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCheckedInUserInput | TicketUpsertWithWhereUniqueWithoutCheckedInUserInput[]
    createMany?: TicketCreateManyCheckedInUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCheckedInUserInput | TicketUpdateWithWhereUniqueWithoutCheckedInUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCheckedInUserInput | TicketUpdateManyWithWhereWithoutCheckedInUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type tenantsCreateNestedOneWithoutStripeAccountInput = {
    create?: XOR<tenantsCreateWithoutStripeAccountInput, tenantsUncheckedCreateWithoutStripeAccountInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutStripeAccountInput
    connect?: tenantsWhereUniqueInput
  }

  export type EnumStripeAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.StripeAccountType
  }

  export type EnumStripeAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.StripeAccountStatus
  }

  export type NullableEnumStripeAccountBusinessTypeFieldUpdateOperationsInput = {
    set?: $Enums.StripeAccountBusinessType | null
  }

  export type tenantsUpdateOneRequiredWithoutStripeAccountNestedInput = {
    create?: XOR<tenantsCreateWithoutStripeAccountInput, tenantsUncheckedCreateWithoutStripeAccountInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutStripeAccountInput
    upsert?: tenantsUpsertWithoutStripeAccountInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutStripeAccountInput, tenantsUpdateWithoutStripeAccountInput>, tenantsUncheckedUpdateWithoutStripeAccountInput>
  }

  export type tenantsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<tenantsCreateWithoutOrdersInput, tenantsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutOrdersInput
    connect?: tenantsWhereUniqueInput
  }

  export type eventosCreateNestedOneWithoutOrdersInput = {
    create?: XOR<eventosCreateWithoutOrdersInput, eventosUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: eventosCreateOrConnectWithoutOrdersInput
    connect?: eventosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usuariosCreateWithoutOrdersInput, usuariosUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutOrdersInput
    connect?: usuariosWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutOrderInput = {
    create?: XOR<TicketCreateWithoutOrderInput, TicketUncheckedCreateWithoutOrderInput> | TicketCreateWithoutOrderInput[] | TicketUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderInput | TicketCreateOrConnectWithoutOrderInput[]
    createMany?: TicketCreateManyOrderInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<TicketCreateWithoutOrderInput, TicketUncheckedCreateWithoutOrderInput> | TicketCreateWithoutOrderInput[] | TicketUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderInput | TicketCreateOrConnectWithoutOrderInput[]
    createMany?: TicketCreateManyOrderInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tenantsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<tenantsCreateWithoutOrdersInput, tenantsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutOrdersInput
    upsert?: tenantsUpsertWithoutOrdersInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutOrdersInput, tenantsUpdateWithoutOrdersInput>, tenantsUncheckedUpdateWithoutOrdersInput>
  }

  export type eventosUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<eventosCreateWithoutOrdersInput, eventosUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: eventosCreateOrConnectWithoutOrdersInput
    upsert?: eventosUpsertWithoutOrdersInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutOrdersInput, eventosUpdateWithoutOrdersInput>, eventosUncheckedUpdateWithoutOrdersInput>
  }

  export type usuariosUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usuariosCreateWithoutOrdersInput, usuariosUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutOrdersInput
    upsert?: usuariosUpsertWithoutOrdersInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutOrdersInput, usuariosUpdateWithoutOrdersInput>, usuariosUncheckedUpdateWithoutOrdersInput>
  }

  export type TicketUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TicketCreateWithoutOrderInput, TicketUncheckedCreateWithoutOrderInput> | TicketCreateWithoutOrderInput[] | TicketUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderInput | TicketCreateOrConnectWithoutOrderInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrderInput | TicketUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TicketCreateManyOrderInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrderInput | TicketUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrderInput | TicketUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TicketCreateWithoutOrderInput, TicketUncheckedCreateWithoutOrderInput> | TicketCreateWithoutOrderInput[] | TicketUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrderInput | TicketCreateOrConnectWithoutOrderInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrderInput | TicketUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TicketCreateManyOrderInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrderInput | TicketUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrderInput | TicketUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type BatchTicketCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<BatchTicketCreateWithoutOrderItemsInput, BatchTicketUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: BatchTicketCreateOrConnectWithoutOrderItemsInput
    connect?: BatchTicketWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BatchTicketUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<BatchTicketCreateWithoutOrderItemsInput, BatchTicketUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: BatchTicketCreateOrConnectWithoutOrderItemsInput
    upsert?: BatchTicketUpsertWithoutOrderItemsInput
    connect?: BatchTicketWhereUniqueInput
    update?: XOR<XOR<BatchTicketUpdateToOneWithWhereWithoutOrderItemsInput, BatchTicketUpdateWithoutOrderItemsInput>, BatchTicketUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BatchTicketCreateNestedOneWithoutReservationsInput = {
    create?: XOR<BatchTicketCreateWithoutReservationsInput, BatchTicketUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: BatchTicketCreateOrConnectWithoutReservationsInput
    connect?: BatchTicketWhereUniqueInput
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type BatchTicketUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<BatchTicketCreateWithoutReservationsInput, BatchTicketUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: BatchTicketCreateOrConnectWithoutReservationsInput
    upsert?: BatchTicketUpsertWithoutReservationsInput
    connect?: BatchTicketWhereUniqueInput
    update?: XOR<XOR<BatchTicketUpdateToOneWithWhereWithoutReservationsInput, BatchTicketUpdateWithoutReservationsInput>, BatchTicketUncheckedUpdateWithoutReservationsInput>
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

  export type NestedEnumTenantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[]
    notIn?: $Enums.TenantStatus[]
    not?: NestedEnumTenantStatusFilter<$PrismaModel> | $Enums.TenantStatus
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

  export type NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TenantStatus | EnumTenantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TenantStatus[]
    notIn?: $Enums.TenantStatus[]
    not?: NestedEnumTenantStatusWithAggregatesFilter<$PrismaModel> | $Enums.TenantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTenantStatusFilter<$PrismaModel>
    _max?: NestedEnumTenantStatusFilter<$PrismaModel>
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

  export type NestedEnumEventoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventoStatus | EnumEventoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventoStatus[]
    notIn?: $Enums.EventoStatus[]
    not?: NestedEnumEventoStatusFilter<$PrismaModel> | $Enums.EventoStatus
  }

  export type NestedEnumEventoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventoStatus | EnumEventoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventoStatus[]
    notIn?: $Enums.EventoStatus[]
    not?: NestedEnumEventoStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventoStatusFilter<$PrismaModel>
    _max?: NestedEnumEventoStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
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

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
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

  export type NestedEnumCargoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[]
    notIn?: $Enums.CargoUsuario[]
    not?: NestedEnumCargoUsuarioFilter<$PrismaModel> | $Enums.CargoUsuario
  }

  export type NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoUsuario | EnumCargoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.CargoUsuario[]
    notIn?: $Enums.CargoUsuario[]
    not?: NestedEnumCargoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.CargoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumCargoUsuarioFilter<$PrismaModel>
  }

  export type NestedEnumStripeAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountType | EnumStripeAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountType[]
    notIn?: $Enums.StripeAccountType[]
    not?: NestedEnumStripeAccountTypeFilter<$PrismaModel> | $Enums.StripeAccountType
  }

  export type NestedEnumStripeAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountStatus | EnumStripeAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountStatus[]
    notIn?: $Enums.StripeAccountStatus[]
    not?: NestedEnumStripeAccountStatusFilter<$PrismaModel> | $Enums.StripeAccountStatus
  }

  export type NestedEnumStripeAccountBusinessTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountBusinessType | EnumStripeAccountBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.StripeAccountBusinessType[] | null
    notIn?: $Enums.StripeAccountBusinessType[] | null
    not?: NestedEnumStripeAccountBusinessTypeNullableFilter<$PrismaModel> | $Enums.StripeAccountBusinessType | null
  }

  export type NestedEnumStripeAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountType | EnumStripeAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountType[]
    notIn?: $Enums.StripeAccountType[]
    not?: NestedEnumStripeAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.StripeAccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStripeAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumStripeAccountTypeFilter<$PrismaModel>
  }

  export type NestedEnumStripeAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountStatus | EnumStripeAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StripeAccountStatus[]
    notIn?: $Enums.StripeAccountStatus[]
    not?: NestedEnumStripeAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.StripeAccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStripeAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumStripeAccountStatusFilter<$PrismaModel>
  }

  export type NestedEnumStripeAccountBusinessTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StripeAccountBusinessType | EnumStripeAccountBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.StripeAccountBusinessType[] | null
    notIn?: $Enums.StripeAccountBusinessType[] | null
    not?: NestedEnumStripeAccountBusinessTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.StripeAccountBusinessType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStripeAccountBusinessTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumStripeAccountBusinessTypeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | null
    notIn?: $Enums.PaymentMethod[] | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutTenantInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUsuarioInput
    tickets?: TicketCreateNestedManyWithoutCheckedInUserInput
  }

  export type usuariosUncheckedCreateWithoutTenantInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUsuarioInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCheckedInUserInput
  }

  export type usuariosCreateOrConnectWithoutTenantInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutTenantInput, usuariosUncheckedCreateWithoutTenantInput>
  }

  export type usuariosCreateManyTenantInputEnvelope = {
    data: usuariosCreateManyTenantInput | usuariosCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type eventosCreateWithoutTenantInput = {
    id?: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type eventosUncheckedCreateWithoutTenantInput = {
    id?: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventosCreateOrConnectWithoutTenantInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutTenantInput, eventosUncheckedCreateWithoutTenantInput>
  }

  export type eventosCreateManyTenantInputEnvelope = {
    data: eventosCreateManyTenantInput | eventosCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type StripeAccountCreateWithoutTenantInput = {
    id?: string
    accountId: string
    accountType?: $Enums.StripeAccountType
    accountStatus?: $Enums.StripeAccountStatus
    detailsSubmitted?: boolean
    chargesEnabled?: boolean
    payoutsEnabled?: boolean
    country?: string
    currency?: string
    email?: string | null
    businessType?: $Enums.StripeAccountBusinessType | null
    onboardedAt?: Date | string | null
    lastSyncAt?: Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StripeAccountUncheckedCreateWithoutTenantInput = {
    id?: string
    accountId: string
    accountType?: $Enums.StripeAccountType
    accountStatus?: $Enums.StripeAccountStatus
    detailsSubmitted?: boolean
    chargesEnabled?: boolean
    payoutsEnabled?: boolean
    country?: string
    currency?: string
    email?: string | null
    businessType?: $Enums.StripeAccountBusinessType | null
    onboardedAt?: Date | string | null
    lastSyncAt?: Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StripeAccountCreateOrConnectWithoutTenantInput = {
    where: StripeAccountWhereUniqueInput
    create: XOR<StripeAccountCreateWithoutTenantInput, StripeAccountUncheckedCreateWithoutTenantInput>
  }

  export type OrderCreateWithoutTenantInput = {
    id?: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: eventosCreateNestedOneWithoutOrdersInput
    usuario: usuariosCreateNestedOneWithoutOrdersInput
    tickets?: TicketCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTenantInput = {
    id?: string
    eventId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTenantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput>
  }

  export type OrderCreateManyTenantInputEnvelope = {
    data: OrderCreateManyTenantInput | OrderCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithWhereUniqueWithoutTenantInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutTenantInput, usuariosUncheckedUpdateWithoutTenantInput>
    create: XOR<usuariosCreateWithoutTenantInput, usuariosUncheckedCreateWithoutTenantInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutTenantInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutTenantInput, usuariosUncheckedUpdateWithoutTenantInput>
  }

  export type usuariosUpdateManyWithWhereWithoutTenantInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutTenantInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id?: StringFilter<"usuarios"> | string
    tenantId?: StringNullableFilter<"usuarios"> | string | null
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senhaHash?: StringFilter<"usuarios"> | string
    cargo?: EnumCargoUsuarioFilter<"usuarios"> | $Enums.CargoUsuario
    createdAt?: DateTimeFilter<"usuarios"> | Date | string
    updatedAt?: DateTimeFilter<"usuarios"> | Date | string
  }

  export type eventosUpsertWithWhereUniqueWithoutTenantInput = {
    where: eventosWhereUniqueInput
    update: XOR<eventosUpdateWithoutTenantInput, eventosUncheckedUpdateWithoutTenantInput>
    create: XOR<eventosCreateWithoutTenantInput, eventosUncheckedCreateWithoutTenantInput>
  }

  export type eventosUpdateWithWhereUniqueWithoutTenantInput = {
    where: eventosWhereUniqueInput
    data: XOR<eventosUpdateWithoutTenantInput, eventosUncheckedUpdateWithoutTenantInput>
  }

  export type eventosUpdateManyWithWhereWithoutTenantInput = {
    where: eventosScalarWhereInput
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyWithoutTenantInput>
  }

  export type eventosScalarWhereInput = {
    AND?: eventosScalarWhereInput | eventosScalarWhereInput[]
    OR?: eventosScalarWhereInput[]
    NOT?: eventosScalarWhereInput | eventosScalarWhereInput[]
    id?: StringFilter<"eventos"> | string
    tenantId?: StringFilter<"eventos"> | string
    titulo?: StringFilter<"eventos"> | string
    descricao?: StringNullableFilter<"eventos"> | string | null
    linkSlug?: StringFilter<"eventos"> | string
    startDate?: DateTimeFilter<"eventos"> | Date | string
    closingDate?: DateTimeFilter<"eventos"> | Date | string
    status?: EnumEventoStatusFilter<"eventos"> | $Enums.EventoStatus
    createdAt?: DateTimeFilter<"eventos"> | Date | string
    updatedAt?: DateTimeFilter<"eventos"> | Date | string
  }

  export type StripeAccountUpsertWithoutTenantInput = {
    update: XOR<StripeAccountUpdateWithoutTenantInput, StripeAccountUncheckedUpdateWithoutTenantInput>
    create: XOR<StripeAccountCreateWithoutTenantInput, StripeAccountUncheckedCreateWithoutTenantInput>
    where?: StripeAccountWhereInput
  }

  export type StripeAccountUpdateToOneWithWhereWithoutTenantInput = {
    where?: StripeAccountWhereInput
    data: XOR<StripeAccountUpdateWithoutTenantInput, StripeAccountUncheckedUpdateWithoutTenantInput>
  }

  export type StripeAccountUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountType?: EnumStripeAccountTypeFieldUpdateOperationsInput | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFieldUpdateOperationsInput | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    chargesEnabled?: BoolFieldUpdateOperationsInput | boolean
    payoutsEnabled?: BoolFieldUpdateOperationsInput | boolean
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumStripeAccountBusinessTypeFieldUpdateOperationsInput | $Enums.StripeAccountBusinessType | null
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeAccountUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accountType?: EnumStripeAccountTypeFieldUpdateOperationsInput | $Enums.StripeAccountType
    accountStatus?: EnumStripeAccountStatusFieldUpdateOperationsInput | $Enums.StripeAccountStatus
    detailsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    chargesEnabled?: BoolFieldUpdateOperationsInput | boolean
    payoutsEnabled?: BoolFieldUpdateOperationsInput | boolean
    country?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumStripeAccountBusinessTypeFieldUpdateOperationsInput | $Enums.StripeAccountBusinessType | null
    onboardedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requirementsData?: NullableJsonNullValueInput | InputJsonValue
    capabilitiesData?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutTenantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTenantInput, OrderUncheckedUpdateWithoutTenantInput>
    create: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTenantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTenantInput, OrderUncheckedUpdateWithoutTenantInput>
  }

  export type OrderUpdateManyWithWhereWithoutTenantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTenantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    tenantId?: StringFilter<"Order"> | string
    eventId?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentProvider?: StringNullableFilter<"Order"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"Order"> | string | null
    stripeClientSecret?: StringNullableFilter<"Order"> | string | null
    stripeTransferId?: StringNullableFilter<"Order"> | string | null
    stripeApplicationFee?: IntNullableFilter<"Order"> | number | null
    paymentUrl?: StringNullableFilter<"Order"> | string | null
    qrCodeData?: StringNullableFilter<"Order"> | string | null
    boletoBarcode?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    cancelReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type tenantsCreateWithoutEventosInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountCreateNestedOneWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type tenantsUncheckedCreateWithoutEventosInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosUncheckedCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountUncheckedCreateNestedOneWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type tenantsCreateOrConnectWithoutEventosInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutEventosInput, tenantsUncheckedCreateWithoutEventosInput>
  }

  export type BatchCreateWithoutEventInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    batchTickets?: BatchTicketCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    batchTickets?: BatchTicketUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutEventInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutEventInput, BatchUncheckedCreateWithoutEventInput>
  }

  export type BatchCreateManyEventInputEnvelope = {
    data: BatchCreateManyEventInput | BatchCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutEventInput = {
    id?: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutTicketsInput
    batchTicket: BatchTicketCreateNestedOneWithoutTicketsInput
    checkedInUser?: usuariosCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: string
    orderId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutEventInput = {
    id?: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutOrdersInput
    usuario: usuariosCreateNestedOneWithoutOrdersInput
    tickets?: TicketCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutEventInput = {
    id?: string
    tenantId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutEventInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderCreateManyEventInputEnvelope = {
    data: OrderCreateManyEventInput | OrderCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type tenantsUpsertWithoutEventosInput = {
    update: XOR<tenantsUpdateWithoutEventosInput, tenantsUncheckedUpdateWithoutEventosInput>
    create: XOR<tenantsCreateWithoutEventosInput, tenantsUncheckedCreateWithoutEventosInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutEventosInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutEventosInput, tenantsUncheckedUpdateWithoutEventosInput>
  }

  export type tenantsUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUpdateOneWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUncheckedUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUncheckedUpdateOneWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type BatchUpsertWithWhereUniqueWithoutEventInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutEventInput, BatchUncheckedUpdateWithoutEventInput>
    create: XOR<BatchCreateWithoutEventInput, BatchUncheckedCreateWithoutEventInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutEventInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutEventInput, BatchUncheckedUpdateWithoutEventInput>
  }

  export type BatchUpdateManyWithWhereWithoutEventInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutEventInput>
  }

  export type BatchScalarWhereInput = {
    AND?: BatchScalarWhereInput | BatchScalarWhereInput[]
    OR?: BatchScalarWhereInput[]
    NOT?: BatchScalarWhereInput | BatchScalarWhereInput[]
    id?: StringFilter<"Batch"> | string
    eventId?: StringFilter<"Batch"> | string
    name?: StringFilter<"Batch"> | string
    description?: StringNullableFilter<"Batch"> | string | null
    startDate?: DateTimeFilter<"Batch"> | Date | string
    endDate?: DateTimeFilter<"Batch"> | Date | string
    isActive?: BoolFilter<"Batch"> | boolean
    totalSold?: IntFilter<"Batch"> | number
    order?: IntFilter<"Batch"> | number
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    updatedAt?: DateTimeFilter<"Batch"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    orderId?: StringFilter<"Ticket"> | string
    eventId?: StringFilter<"Ticket"> | string
    batchTicketId?: StringFilter<"Ticket"> | string
    hash?: StringFilter<"Ticket"> | string
    ownerName?: StringFilter<"Ticket"> | string
    ownerEmail?: StringFilter<"Ticket"> | string
    ownerDocument?: StringNullableFilter<"Ticket"> | string | null
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    checkedInAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    checkedInBy?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
  }

  export type OrderUpdateManyWithWhereWithoutEventInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutEventInput>
  }

  export type eventosCreateWithoutBatchesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutEventosInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type eventosUncheckedCreateWithoutBatchesInput = {
    id?: string
    tenantId: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventosCreateOrConnectWithoutBatchesInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutBatchesInput, eventosUncheckedCreateWithoutBatchesInput>
  }

  export type BatchTicketCreateWithoutBatchInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketType: TicketTypeCreateNestedOneWithoutBatchTicketsInput
    tickets?: TicketCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketUncheckedCreateWithoutBatchInput = {
    id?: string
    ticketTypeId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketCreateOrConnectWithoutBatchInput = {
    where: BatchTicketWhereUniqueInput
    create: XOR<BatchTicketCreateWithoutBatchInput, BatchTicketUncheckedCreateWithoutBatchInput>
  }

  export type BatchTicketCreateManyBatchInputEnvelope = {
    data: BatchTicketCreateManyBatchInput | BatchTicketCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type eventosUpsertWithoutBatchesInput = {
    update: XOR<eventosUpdateWithoutBatchesInput, eventosUncheckedUpdateWithoutBatchesInput>
    create: XOR<eventosCreateWithoutBatchesInput, eventosUncheckedCreateWithoutBatchesInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutBatchesInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutBatchesInput, eventosUncheckedUpdateWithoutBatchesInput>
  }

  export type eventosUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutEventosNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type eventosUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type BatchTicketUpsertWithWhereUniqueWithoutBatchInput = {
    where: BatchTicketWhereUniqueInput
    update: XOR<BatchTicketUpdateWithoutBatchInput, BatchTicketUncheckedUpdateWithoutBatchInput>
    create: XOR<BatchTicketCreateWithoutBatchInput, BatchTicketUncheckedCreateWithoutBatchInput>
  }

  export type BatchTicketUpdateWithWhereUniqueWithoutBatchInput = {
    where: BatchTicketWhereUniqueInput
    data: XOR<BatchTicketUpdateWithoutBatchInput, BatchTicketUncheckedUpdateWithoutBatchInput>
  }

  export type BatchTicketUpdateManyWithWhereWithoutBatchInput = {
    where: BatchTicketScalarWhereInput
    data: XOR<BatchTicketUpdateManyMutationInput, BatchTicketUncheckedUpdateManyWithoutBatchInput>
  }

  export type BatchTicketScalarWhereInput = {
    AND?: BatchTicketScalarWhereInput | BatchTicketScalarWhereInput[]
    OR?: BatchTicketScalarWhereInput[]
    NOT?: BatchTicketScalarWhereInput | BatchTicketScalarWhereInput[]
    id?: StringFilter<"BatchTicket"> | string
    batchId?: StringFilter<"BatchTicket"> | string
    ticketTypeId?: StringFilter<"BatchTicket"> | string
    price?: DecimalFilter<"BatchTicket"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"BatchTicket"> | number
    soldQuantity?: IntFilter<"BatchTicket"> | number
    reservedQuantity?: IntFilter<"BatchTicket"> | number
    isActive?: BoolFilter<"BatchTicket"> | boolean
    createdAt?: DateTimeFilter<"BatchTicket"> | Date | string
    updatedAt?: DateTimeFilter<"BatchTicket"> | Date | string
  }

  export type BatchTicketCreateWithoutTicketTypeInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: BatchCreateNestedOneWithoutBatchTicketsInput
    tickets?: TicketCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketUncheckedCreateWithoutTicketTypeInput = {
    id?: string
    batchId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketCreateOrConnectWithoutTicketTypeInput = {
    where: BatchTicketWhereUniqueInput
    create: XOR<BatchTicketCreateWithoutTicketTypeInput, BatchTicketUncheckedCreateWithoutTicketTypeInput>
  }

  export type BatchTicketCreateManyTicketTypeInputEnvelope = {
    data: BatchTicketCreateManyTicketTypeInput | BatchTicketCreateManyTicketTypeInput[]
    skipDuplicates?: boolean
  }

  export type BatchTicketUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: BatchTicketWhereUniqueInput
    update: XOR<BatchTicketUpdateWithoutTicketTypeInput, BatchTicketUncheckedUpdateWithoutTicketTypeInput>
    create: XOR<BatchTicketCreateWithoutTicketTypeInput, BatchTicketUncheckedCreateWithoutTicketTypeInput>
  }

  export type BatchTicketUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: BatchTicketWhereUniqueInput
    data: XOR<BatchTicketUpdateWithoutTicketTypeInput, BatchTicketUncheckedUpdateWithoutTicketTypeInput>
  }

  export type BatchTicketUpdateManyWithWhereWithoutTicketTypeInput = {
    where: BatchTicketScalarWhereInput
    data: XOR<BatchTicketUpdateManyMutationInput, BatchTicketUncheckedUpdateManyWithoutTicketTypeInput>
  }

  export type BatchCreateWithoutBatchTicketsInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event: eventosCreateNestedOneWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutBatchTicketsInput = {
    id?: string
    eventId: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchCreateOrConnectWithoutBatchTicketsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutBatchTicketsInput, BatchUncheckedCreateWithoutBatchTicketsInput>
  }

  export type TicketTypeCreateWithoutBatchTicketsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketTypeUncheckedCreateWithoutBatchTicketsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketTypeCreateOrConnectWithoutBatchTicketsInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutBatchTicketsInput, TicketTypeUncheckedCreateWithoutBatchTicketsInput>
  }

  export type TicketCreateWithoutBatchTicketInput = {
    id?: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutTicketsInput
    event: eventosCreateNestedOneWithoutTicketsInput
    checkedInUser?: usuariosCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutBatchTicketInput = {
    id?: string
    orderId: string
    eventId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutBatchTicketInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBatchTicketInput, TicketUncheckedCreateWithoutBatchTicketInput>
  }

  export type TicketCreateManyBatchTicketInputEnvelope = {
    data: TicketCreateManyBatchTicketInput | TicketCreateManyBatchTicketInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutBatchTicketInput = {
    id?: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutBatchTicketInput = {
    id?: string
    orderId: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutBatchTicketInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutBatchTicketInput, OrderItemUncheckedCreateWithoutBatchTicketInput>
  }

  export type OrderItemCreateManyBatchTicketInputEnvelope = {
    data: OrderItemCreateManyBatchTicketInput | OrderItemCreateManyBatchTicketInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutBatchTicketInput = {
    id?: string
    userId: string
    quantity: number
    expiresAt: Date | string
    status?: $Enums.ReservationStatus
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUncheckedCreateWithoutBatchTicketInput = {
    id?: string
    userId: string
    quantity: number
    expiresAt: Date | string
    status?: $Enums.ReservationStatus
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutBatchTicketInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutBatchTicketInput, ReservationUncheckedCreateWithoutBatchTicketInput>
  }

  export type ReservationCreateManyBatchTicketInputEnvelope = {
    data: ReservationCreateManyBatchTicketInput | ReservationCreateManyBatchTicketInput[]
    skipDuplicates?: boolean
  }

  export type BatchUpsertWithoutBatchTicketsInput = {
    update: XOR<BatchUpdateWithoutBatchTicketsInput, BatchUncheckedUpdateWithoutBatchTicketsInput>
    create: XOR<BatchCreateWithoutBatchTicketsInput, BatchUncheckedCreateWithoutBatchTicketsInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutBatchTicketsInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutBatchTicketsInput, BatchUncheckedUpdateWithoutBatchTicketsInput>
  }

  export type BatchUpdateWithoutBatchTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventosUpdateOneRequiredWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutBatchTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeUpsertWithoutBatchTicketsInput = {
    update: XOR<TicketTypeUpdateWithoutBatchTicketsInput, TicketTypeUncheckedUpdateWithoutBatchTicketsInput>
    create: XOR<TicketTypeCreateWithoutBatchTicketsInput, TicketTypeUncheckedCreateWithoutBatchTicketsInput>
    where?: TicketTypeWhereInput
  }

  export type TicketTypeUpdateToOneWithWhereWithoutBatchTicketsInput = {
    where?: TicketTypeWhereInput
    data: XOR<TicketTypeUpdateWithoutBatchTicketsInput, TicketTypeUncheckedUpdateWithoutBatchTicketsInput>
  }

  export type TicketTypeUpdateWithoutBatchTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeUncheckedUpdateWithoutBatchTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutBatchTicketInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBatchTicketInput, TicketUncheckedUpdateWithoutBatchTicketInput>
    create: XOR<TicketCreateWithoutBatchTicketInput, TicketUncheckedCreateWithoutBatchTicketInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBatchTicketInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBatchTicketInput, TicketUncheckedUpdateWithoutBatchTicketInput>
  }

  export type TicketUpdateManyWithWhereWithoutBatchTicketInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBatchTicketInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutBatchTicketInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutBatchTicketInput, OrderItemUncheckedUpdateWithoutBatchTicketInput>
    create: XOR<OrderItemCreateWithoutBatchTicketInput, OrderItemUncheckedCreateWithoutBatchTicketInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutBatchTicketInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutBatchTicketInput, OrderItemUncheckedUpdateWithoutBatchTicketInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutBatchTicketInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutBatchTicketInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    batchTicketId?: StringFilter<"OrderItem"> | string
    ticketTypeName?: StringFilter<"OrderItem"> | string
    batchName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutBatchTicketInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutBatchTicketInput, ReservationUncheckedUpdateWithoutBatchTicketInput>
    create: XOR<ReservationCreateWithoutBatchTicketInput, ReservationUncheckedCreateWithoutBatchTicketInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutBatchTicketInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutBatchTicketInput, ReservationUncheckedUpdateWithoutBatchTicketInput>
  }

  export type ReservationUpdateManyWithWhereWithoutBatchTicketInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutBatchTicketInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    batchTicketId?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    quantity?: IntFilter<"Reservation"> | number
    expiresAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    ipAddress?: StringNullableFilter<"Reservation"> | string | null
    userAgent?: StringNullableFilter<"Reservation"> | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type OrderCreateWithoutTicketsInput = {
    id?: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutOrdersInput
    event: eventosCreateNestedOneWithoutOrdersInput
    usuario: usuariosCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTicketsInput = {
    id?: string
    tenantId: string
    eventId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTicketsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTicketsInput, OrderUncheckedCreateWithoutTicketsInput>
  }

  export type eventosCreateWithoutTicketsInput = {
    id?: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutEventosInput
    batches?: BatchCreateNestedManyWithoutEventInput
    orders?: OrderCreateNestedManyWithoutEventInput
  }

  export type eventosUncheckedCreateWithoutTicketsInput = {
    id?: string
    tenantId: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutEventInput
    orders?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventosCreateOrConnectWithoutTicketsInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutTicketsInput, eventosUncheckedCreateWithoutTicketsInput>
  }

  export type BatchTicketCreateWithoutTicketsInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: BatchCreateNestedOneWithoutBatchTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutBatchTicketsInput
    orderItems?: OrderItemCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketUncheckedCreateWithoutTicketsInput = {
    id?: string
    batchId: string
    ticketTypeId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketCreateOrConnectWithoutTicketsInput = {
    where: BatchTicketWhereUniqueInput
    create: XOR<BatchTicketCreateWithoutTicketsInput, BatchTicketUncheckedCreateWithoutTicketsInput>
  }

  export type usuariosCreateWithoutTicketsInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: tenantsCreateNestedOneWithoutUsuariosInput
    orders?: OrderCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutTicketsInput = {
    id?: string
    tenantId?: string | null
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosCreateOrConnectWithoutTicketsInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
  }

  export type OrderUpsertWithoutTicketsInput = {
    update: XOR<OrderUpdateWithoutTicketsInput, OrderUncheckedUpdateWithoutTicketsInput>
    create: XOR<OrderCreateWithoutTicketsInput, OrderUncheckedCreateWithoutTicketsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutTicketsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutTicketsInput, OrderUncheckedUpdateWithoutTicketsInput>
  }

  export type OrderUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutOrdersNestedInput
    event?: eventosUpdateOneRequiredWithoutOrdersNestedInput
    usuario?: usuariosUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type eventosUpsertWithoutTicketsInput = {
    update: XOR<eventosUpdateWithoutTicketsInput, eventosUncheckedUpdateWithoutTicketsInput>
    create: XOR<eventosCreateWithoutTicketsInput, eventosUncheckedCreateWithoutTicketsInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutTicketsInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutTicketsInput, eventosUncheckedUpdateWithoutTicketsInput>
  }

  export type eventosUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutEventosNestedInput
    batches?: BatchUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type eventosUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type BatchTicketUpsertWithoutTicketsInput = {
    update: XOR<BatchTicketUpdateWithoutTicketsInput, BatchTicketUncheckedUpdateWithoutTicketsInput>
    create: XOR<BatchTicketCreateWithoutTicketsInput, BatchTicketUncheckedCreateWithoutTicketsInput>
    where?: BatchTicketWhereInput
  }

  export type BatchTicketUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BatchTicketWhereInput
    data: XOR<BatchTicketUpdateWithoutTicketsInput, BatchTicketUncheckedUpdateWithoutTicketsInput>
  }

  export type BatchTicketUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutBatchTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutBatchTicketsNestedInput
    orderItems?: OrderItemUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutBatchTicketNestedInput
  }

  export type usuariosUpsertWithoutTicketsInput = {
    update: XOR<usuariosUpdateWithoutTicketsInput, usuariosUncheckedUpdateWithoutTicketsInput>
    create: XOR<usuariosCreateWithoutTicketsInput, usuariosUncheckedCreateWithoutTicketsInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutTicketsInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutTicketsInput, usuariosUncheckedUpdateWithoutTicketsInput>
  }

  export type usuariosUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneWithoutUsuariosNestedInput
    orders?: OrderUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type tenantsCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    eventos?: eventosCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountCreateNestedOneWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type tenantsUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    eventos?: eventosUncheckedCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountUncheckedCreateNestedOneWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type tenantsCreateOrConnectWithoutUsuariosInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutUsuariosInput, tenantsUncheckedCreateWithoutUsuariosInput>
  }

  export type OrderCreateWithoutUsuarioInput = {
    id?: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutOrdersInput
    event: eventosCreateNestedOneWithoutOrdersInput
    tickets?: TicketCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUsuarioInput = {
    id?: string
    tenantId: string
    eventId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUsuarioInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUsuarioInput, OrderUncheckedCreateWithoutUsuarioInput>
  }

  export type OrderCreateManyUsuarioInputEnvelope = {
    data: OrderCreateManyUsuarioInput | OrderCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCheckedInUserInput = {
    id?: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutTicketsInput
    event: eventosCreateNestedOneWithoutTicketsInput
    batchTicket: BatchTicketCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCheckedInUserInput = {
    id?: string
    orderId: string
    eventId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutCheckedInUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCheckedInUserInput, TicketUncheckedCreateWithoutCheckedInUserInput>
  }

  export type TicketCreateManyCheckedInUserInputEnvelope = {
    data: TicketCreateManyCheckedInUserInput | TicketCreateManyCheckedInUserInput[]
    skipDuplicates?: boolean
  }

  export type tenantsUpsertWithoutUsuariosInput = {
    update: XOR<tenantsUpdateWithoutUsuariosInput, tenantsUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tenantsCreateWithoutUsuariosInput, tenantsUncheckedCreateWithoutUsuariosInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutUsuariosInput, tenantsUncheckedUpdateWithoutUsuariosInput>
  }

  export type tenantsUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: eventosUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUpdateOneWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventos?: eventosUncheckedUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUncheckedUpdateOneWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUsuarioInput, OrderUncheckedUpdateWithoutUsuarioInput>
    create: XOR<OrderCreateWithoutUsuarioInput, OrderUncheckedCreateWithoutUsuarioInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUsuarioInput, OrderUncheckedUpdateWithoutUsuarioInput>
  }

  export type OrderUpdateManyWithWhereWithoutUsuarioInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutCheckedInUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCheckedInUserInput, TicketUncheckedUpdateWithoutCheckedInUserInput>
    create: XOR<TicketCreateWithoutCheckedInUserInput, TicketUncheckedCreateWithoutCheckedInUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCheckedInUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCheckedInUserInput, TicketUncheckedUpdateWithoutCheckedInUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutCheckedInUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCheckedInUserInput>
  }

  export type tenantsCreateWithoutStripeAccountInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosCreateNestedManyWithoutTenantInput
    eventos?: eventosCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type tenantsUncheckedCreateWithoutStripeAccountInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosUncheckedCreateNestedManyWithoutTenantInput
    eventos?: eventosUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type tenantsCreateOrConnectWithoutStripeAccountInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutStripeAccountInput, tenantsUncheckedCreateWithoutStripeAccountInput>
  }

  export type tenantsUpsertWithoutStripeAccountInput = {
    update: XOR<tenantsUpdateWithoutStripeAccountInput, tenantsUncheckedUpdateWithoutStripeAccountInput>
    create: XOR<tenantsCreateWithoutStripeAccountInput, tenantsUncheckedCreateWithoutStripeAccountInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutStripeAccountInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutStripeAccountInput, tenantsUncheckedUpdateWithoutStripeAccountInput>
  }

  export type tenantsUpdateWithoutStripeAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateManyWithoutTenantNestedInput
    eventos?: eventosUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateWithoutStripeAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUncheckedUpdateManyWithoutTenantNestedInput
    eventos?: eventosUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type tenantsCreateWithoutOrdersInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosCreateNestedManyWithoutTenantInput
    eventos?: eventosCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountCreateNestedOneWithoutTenantInput
  }

  export type tenantsUncheckedCreateWithoutOrdersInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    email: string
    site?: string | null
    slug: string
    status?: $Enums.TenantStatus
    createdAt?: Date | string
    updated_at?: Date | string
    logoUrl?: string | null
    usuarios?: usuariosUncheckedCreateNestedManyWithoutTenantInput
    eventos?: eventosUncheckedCreateNestedManyWithoutTenantInput
    stripeAccount?: StripeAccountUncheckedCreateNestedOneWithoutTenantInput
  }

  export type tenantsCreateOrConnectWithoutOrdersInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutOrdersInput, tenantsUncheckedCreateWithoutOrdersInput>
  }

  export type eventosCreateWithoutOrdersInput = {
    id?: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutEventosInput
    batches?: BatchCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type eventosUncheckedCreateWithoutOrdersInput = {
    id?: string
    tenantId: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: BatchUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventosCreateOrConnectWithoutOrdersInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutOrdersInput, eventosUncheckedCreateWithoutOrdersInput>
  }

  export type usuariosCreateWithoutOrdersInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: tenantsCreateNestedOneWithoutUsuariosInput
    tickets?: TicketCreateNestedManyWithoutCheckedInUserInput
  }

  export type usuariosUncheckedCreateWithoutOrdersInput = {
    id?: string
    tenantId?: string | null
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCheckedInUserInput
  }

  export type usuariosCreateOrConnectWithoutOrdersInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutOrdersInput, usuariosUncheckedCreateWithoutOrdersInput>
  }

  export type TicketCreateWithoutOrderInput = {
    id?: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event: eventosCreateNestedOneWithoutTicketsInput
    batchTicket: BatchTicketCreateNestedOneWithoutTicketsInput
    checkedInUser?: usuariosCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutOrderInput = {
    id?: string
    eventId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutOrderInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrderInput, TicketUncheckedCreateWithoutOrderInput>
  }

  export type TicketCreateManyOrderInputEnvelope = {
    data: TicketCreateManyOrderInput | TicketCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    batchTicket: BatchTicketCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    batchTicketId: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type tenantsUpsertWithoutOrdersInput = {
    update: XOR<tenantsUpdateWithoutOrdersInput, tenantsUncheckedUpdateWithoutOrdersInput>
    create: XOR<tenantsCreateWithoutOrdersInput, tenantsUncheckedCreateWithoutOrdersInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutOrdersInput, tenantsUncheckedUpdateWithoutOrdersInput>
  }

  export type tenantsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateManyWithoutTenantNestedInput
    eventos?: eventosUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUpdateOneWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    status?: EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUncheckedUpdateManyWithoutTenantNestedInput
    eventos?: eventosUncheckedUpdateManyWithoutTenantNestedInput
    stripeAccount?: StripeAccountUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type eventosUpsertWithoutOrdersInput = {
    update: XOR<eventosUpdateWithoutOrdersInput, eventosUncheckedUpdateWithoutOrdersInput>
    create: XOR<eventosCreateWithoutOrdersInput, eventosUncheckedCreateWithoutOrdersInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutOrdersInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutOrdersInput, eventosUncheckedUpdateWithoutOrdersInput>
  }

  export type eventosUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutEventosNestedInput
    batches?: BatchUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type eventosUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type usuariosUpsertWithoutOrdersInput = {
    update: XOR<usuariosUpdateWithoutOrdersInput, usuariosUncheckedUpdateWithoutOrdersInput>
    create: XOR<usuariosCreateWithoutOrdersInput, usuariosUncheckedCreateWithoutOrdersInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutOrdersInput, usuariosUncheckedUpdateWithoutOrdersInput>
  }

  export type usuariosUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneWithoutUsuariosNestedInput
    tickets?: TicketUpdateManyWithoutCheckedInUserNestedInput
  }

  export type usuariosUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCheckedInUserNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutOrderInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutOrderInput, TicketUncheckedUpdateWithoutOrderInput>
    create: XOR<TicketCreateWithoutOrderInput, TicketUncheckedCreateWithoutOrderInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutOrderInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutOrderInput, TicketUncheckedUpdateWithoutOrderInput>
  }

  export type TicketUpdateManyWithWhereWithoutOrderInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: tenantsCreateNestedOneWithoutOrdersInput
    event: eventosCreateNestedOneWithoutOrdersInput
    usuario: usuariosCreateNestedOneWithoutOrdersInput
    tickets?: TicketCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    tenantId: string
    eventId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type BatchTicketCreateWithoutOrderItemsInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: BatchCreateNestedOneWithoutBatchTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutBatchTicketsInput
    tickets?: TicketCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    batchId: string
    ticketTypeId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBatchTicketInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketCreateOrConnectWithoutOrderItemsInput = {
    where: BatchTicketWhereUniqueInput
    create: XOR<BatchTicketCreateWithoutOrderItemsInput, BatchTicketUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutOrdersNestedInput
    event?: eventosUpdateOneRequiredWithoutOrdersNestedInput
    usuario?: usuariosUpdateOneRequiredWithoutOrdersNestedInput
    tickets?: TicketUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type BatchTicketUpsertWithoutOrderItemsInput = {
    update: XOR<BatchTicketUpdateWithoutOrderItemsInput, BatchTicketUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<BatchTicketCreateWithoutOrderItemsInput, BatchTicketUncheckedCreateWithoutOrderItemsInput>
    where?: BatchTicketWhereInput
  }

  export type BatchTicketUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: BatchTicketWhereInput
    data: XOR<BatchTicketUpdateWithoutOrderItemsInput, BatchTicketUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BatchTicketUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutBatchTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutBatchTicketsNestedInput
    tickets?: TicketUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketCreateWithoutReservationsInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: BatchCreateNestedOneWithoutBatchTicketsInput
    ticketType: TicketTypeCreateNestedOneWithoutBatchTicketsInput
    tickets?: TicketCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketUncheckedCreateWithoutReservationsInput = {
    id?: string
    batchId: string
    ticketTypeId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBatchTicketInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutBatchTicketInput
  }

  export type BatchTicketCreateOrConnectWithoutReservationsInput = {
    where: BatchTicketWhereUniqueInput
    create: XOR<BatchTicketCreateWithoutReservationsInput, BatchTicketUncheckedCreateWithoutReservationsInput>
  }

  export type BatchTicketUpsertWithoutReservationsInput = {
    update: XOR<BatchTicketUpdateWithoutReservationsInput, BatchTicketUncheckedUpdateWithoutReservationsInput>
    create: XOR<BatchTicketCreateWithoutReservationsInput, BatchTicketUncheckedCreateWithoutReservationsInput>
    where?: BatchTicketWhereInput
  }

  export type BatchTicketUpdateToOneWithWhereWithoutReservationsInput = {
    where?: BatchTicketWhereInput
    data: XOR<BatchTicketUpdateWithoutReservationsInput, BatchTicketUncheckedUpdateWithoutReservationsInput>
  }

  export type BatchTicketUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutBatchTicketsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutBatchTicketsNestedInput
    tickets?: TicketUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutBatchTicketNestedInput
  }

  export type usuariosCreateManyTenantInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    cargo?: $Enums.CargoUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type eventosCreateManyTenantInput = {
    id?: string
    titulo: string
    descricao?: string | null
    linkSlug: string
    startDate?: Date | string
    closingDate: Date | string
    status?: $Enums.EventoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyTenantInput = {
    id?: string
    eventId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usuariosUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUsuarioNestedInput
    tickets?: TicketUpdateManyWithoutCheckedInUserNestedInput
  }

  export type usuariosUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUsuarioNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCheckedInUserNestedInput
  }

  export type usuariosUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    cargo?: EnumCargoUsuarioFieldUpdateOperationsInput | $Enums.CargoUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventosUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    orders?: OrderUpdateManyWithoutEventNestedInput
  }

  export type eventosUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: BatchUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    orders?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventosUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    linkSlug?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventoStatusFieldUpdateOperationsInput | $Enums.EventoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventosUpdateOneRequiredWithoutOrdersNestedInput
    usuario?: usuariosUpdateOneRequiredWithoutOrdersNestedInput
    tickets?: TicketUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateManyEventInput = {
    id?: string
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    totalSold?: number
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyEventInput = {
    id?: string
    orderId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyEventInput = {
    id?: string
    tenantId: string
    userId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchTickets?: BatchTicketUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchTickets?: BatchTicketUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalSold?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutTicketsNestedInput
    batchTicket?: BatchTicketUpdateOneRequiredWithoutTicketsNestedInput
    checkedInUser?: usuariosUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutOrdersNestedInput
    usuario?: usuariosUpdateOneRequiredWithoutOrdersNestedInput
    tickets?: TicketUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchTicketCreateManyBatchInput = {
    id?: string
    ticketTypeId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchTicketUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketType?: TicketTypeUpdateOneRequiredWithoutBatchTicketsNestedInput
    tickets?: TicketUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchTicketCreateManyTicketTypeInput = {
    id?: string
    batchId: string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    soldQuantity?: number
    reservedQuantity?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BatchTicketUpdateWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutBatchTicketsNestedInput
    tickets?: TicketUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBatchTicketNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutBatchTicketNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutBatchTicketNestedInput
  }

  export type BatchTicketUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    soldQuantity?: IntFieldUpdateOperationsInput | number
    reservedQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyBatchTicketInput = {
    id?: string
    orderId: string
    eventId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyBatchTicketInput = {
    id?: string
    orderId: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateManyBatchTicketInput = {
    id?: string
    userId: string
    quantity: number
    expiresAt: Date | string
    status?: $Enums.ReservationStatus
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutTicketsNestedInput
    event?: eventosUpdateOneRequiredWithoutTicketsNestedInput
    checkedInUser?: usuariosUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutBatchTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyUsuarioInput = {
    id?: string
    tenantId: string
    eventId: string
    subtotal: Decimal | DecimalJsLike | number | string
    serviceFee: Decimal | DecimalJsLike | number | string
    platformFee: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentProvider?: string | null
    stripePaymentIntentId?: string | null
    stripeClientSecret?: string | null
    stripeTransferId?: string | null
    stripeApplicationFee?: number | null
    paymentUrl?: string | null
    qrCodeData?: string | null
    boletoBarcode?: string | null
    paidAt?: Date | string | null
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
    refundedAt?: Date | string | null
    expiresAt?: Date | string | null
    notes?: string | null
    cancelReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyCheckedInUserInput = {
    id?: string
    orderId: string
    eventId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutOrdersNestedInput
    event?: eventosUpdateOneRequiredWithoutOrdersNestedInput
    tickets?: TicketUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    serviceFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    platformFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentProvider?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeApplicationFee?: NullableIntFieldUpdateOperationsInput | number | null
    paymentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    boletoBarcode?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutCheckedInUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutTicketsNestedInput
    event?: eventosUpdateOneRequiredWithoutTicketsNestedInput
    batchTicket?: BatchTicketUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCheckedInUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutCheckedInUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyOrderInput = {
    id?: string
    eventId: string
    batchTicketId: string
    hash: string
    ownerName: string
    ownerEmail: string
    ownerDocument?: string | null
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.TicketStatus
    checkedInAt?: Date | string | null
    checkedInBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    batchTicketId: string
    ticketTypeName: string
    batchName: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventosUpdateOneRequiredWithoutTicketsNestedInput
    batchTicket?: BatchTicketUpdateOneRequiredWithoutTicketsNestedInput
    checkedInUser?: usuariosUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerDocument?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkedInBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchTicket?: BatchTicketUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchTicketId?: StringFieldUpdateOperationsInput | string
    ticketTypeName?: StringFieldUpdateOperationsInput | string
    batchName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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