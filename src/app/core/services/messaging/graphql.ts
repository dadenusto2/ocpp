export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /** 
 * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
 */
  Datetime: any;
  /** An IPv4 or IPv6 host address, and optionally its subnet. */
  InternetAddress: any;
};

export type Agreement = Node & {
   __typename?: 'Agreement';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  type: AgreementType;
  createdAt: Scalars['Datetime'];
};

/** 
 * A condition to be used against `Agreement` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AgreementCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `text` field. */
  text?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<AgreementType>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Agreement` object types. All fields are combined with a logical ‘and.’ */
export type AgreementFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `text` field. */
  text?: Maybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: Maybe<AgreementTypeFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<AgreementFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<AgreementFilter>>;
  /** Negates the expression. */
  not?: Maybe<AgreementFilter>;
};

/** An input for mutations affecting `Agreement` */
export type AgreementInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  type: AgreementType;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Agreement`. Fields that are set will be updated. */
export type AgreementPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<AgreementType>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `Agreement` values. */
export type AgreementsConnection = {
   __typename?: 'AgreementsConnection';
  /** A list of `Agreement` objects. */
  nodes: Array<Maybe<Agreement>>;
  /** A list of edges which contains the `Agreement` and cursor to aid in pagination. */
  edges: Array<AgreementsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Agreement` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Agreement` edge in the connection. */
export type AgreementsEdge = {
   __typename?: 'AgreementsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Agreement` at the end of the edge. */
  node?: Maybe<Agreement>;
};

/** Methods to use when ordering `Agreement`. */
export enum AgreementsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TextAsc = 'TEXT_ASC',
  TextDesc = 'TEXT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum AgreementType {
  UserAgreement = 'UserAgreement',
  Other = 'Other'
}

/** A filter to be used against AgreementType fields. All fields are combined with a logical ‘and.’ */
export type AgreementTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<AgreementType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<AgreementType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<AgreementType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<AgreementType>;
  /** Included in the specified list. */
  in?: Maybe<Array<AgreementType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<AgreementType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<AgreementType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<AgreementType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<AgreementType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<AgreementType>;
};

export type BalanceOperation = Node & {
   __typename?: 'BalanceOperation';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt: Scalars['Datetime'];
  /** Reads a single `Customer` that is related to this `BalanceOperation`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `CentralSystemUser` that is related to this `BalanceOperation`. */
  centralSystemUserBySystemUserIdToken?: Maybe<CentralSystemUser>;
  /** Reads a single `YandexPayment` that is related to this `BalanceOperation`. */
  yandexPaymentByBalanceOperationUuid?: Maybe<YandexPayment>;
  /** Reads and enables pagination through a set of `YandexPayment`. */
  yandexPaymentsByBalanceOperationUuid: YandexPaymentsConnection;
  /** Reads and enables pagination through a set of `Transaction`. */
  transactionsByBalanceOperationUuid: TransactionsConnection;
};


export type BalanceOperationYandexPaymentsByBalanceOperationUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<YandexPaymentsOrderBy>>;
  condition?: Maybe<YandexPaymentCondition>;
  filter?: Maybe<YandexPaymentFilter>;
};


export type BalanceOperationTransactionsByBalanceOperationUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
  condition?: Maybe<TransactionCondition>;
  filter?: Maybe<TransactionFilter>;
};

/** The fields on `balanceOperation` to look up the row to connect. */
export type BalanceOperationBalanceOperationsPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `balanceOperation` to look up the row to delete. */
export type BalanceOperationBalanceOperationsPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** 
 * A condition to be used against `BalanceOperation` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type BalanceOperationCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `change` field. */
  change?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `systemUserIdToken` field. */
  systemUserIdToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `reason` field. */
  reason?: Maybe<BalanceOperationReason>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `BalanceOperation` object types. All fields are combined with a logical ‘and.’ */
export type BalanceOperationFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<StringFilter>;
  /** Filter by the object’s `change` field. */
  change?: Maybe<FloatFilter>;
  /** Filter by the object’s `systemUserIdToken` field. */
  systemUserIdToken?: Maybe<StringFilter>;
  /** Filter by the object’s `reason` field. */
  reason?: Maybe<BalanceOperationReasonFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<BalanceOperationFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<BalanceOperationFilter>>;
  /** Negates the expression. */
  not?: Maybe<BalanceOperationFilter>;
};

/** An input for mutations affecting `BalanceOperation` */
export type BalanceOperationInput = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type BalanceOperationNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `balanceOperation` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type BalanceOperationNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `balanceOperation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type BalanceOperationOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `customer` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: CustomerPatch;
};

/** The fields on `balanceOperation` to look up the row to update. */
export type BalanceOperationOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyUsingBalanceOperationsPkeyUpdate = {
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: UpdateBalanceOperationOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type BalanceOperationOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `centralSystemUser` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `centralSystemUser` being updated. */
  centralSystemUserPatch: CentralSystemUserPatch;
};

/** The fields on `balanceOperation` to look up the row to update. */
export type BalanceOperationOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyUsingBalanceOperationsPkeyUpdate = {
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: UpdateBalanceOperationOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type BalanceOperationOnTransactionForTransactionsBalanceOperationUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `transaction` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** The fields on `balanceOperation` to look up the row to update. */
export type BalanceOperationOnTransactionForTransactionsBalanceOperationUuidFkeyUsingBalanceOperationsPkeyUpdate = {
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: UpdateBalanceOperationOnTransactionForTransactionsBalanceOperationUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type BalanceOperationOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `yandexPayment` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: YandexPaymentPatch;
};

/** The fields on `balanceOperation` to look up the row to update. */
export type BalanceOperationOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingBalanceOperationsPkeyUpdate = {
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: UpdateBalanceOperationOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `BalanceOperation`. Fields that are set will be updated. */
export type BalanceOperationPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

export enum BalanceOperationReason {
  ChargingPayment = 'ChargingPayment',
  BalanceRefill = 'BalanceRefill',
  OtherBalanceChange = 'OtherBalanceChange'
}

/** A filter to be used against BalanceOperationReason fields. All fields are combined with a logical ‘and.’ */
export type BalanceOperationReasonFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<BalanceOperationReason>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<BalanceOperationReason>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<BalanceOperationReason>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<BalanceOperationReason>;
  /** Included in the specified list. */
  in?: Maybe<Array<BalanceOperationReason>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<BalanceOperationReason>>;
  /** Less than the specified value. */
  lessThan?: Maybe<BalanceOperationReason>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<BalanceOperationReason>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<BalanceOperationReason>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<BalanceOperationReason>;
};

/** A connection to a list of `BalanceOperation` values. */
export type BalanceOperationsConnection = {
   __typename?: 'BalanceOperationsConnection';
  /** A list of `BalanceOperation` objects. */
  nodes: Array<Maybe<BalanceOperation>>;
  /** A list of edges which contains the `BalanceOperation` and cursor to aid in pagination. */
  edges: Array<BalanceOperationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BalanceOperation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** The `balanceOperation` to be created by this mutation. */
export type BalanceOperationsCustomerIdTokenFkeyBalanceOperationsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** The `customer` to be created by this mutation. */
export type BalanceOperationsCustomerIdTokenFkeyCustomersCreateInput = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** Input for the nested mutation of `customer` in the `BalanceOperationInput` mutation. */
export type BalanceOperationsCustomerIdTokenFkeyInput = {
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByIdToken?: Maybe<CustomerCustomersPkeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByNodeId?: Maybe<CustomerNodeIdConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CustomerCustomersPkeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByIdToken?: Maybe<CustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyUsingCustomersPkeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByPhoneNumber?: Maybe<CustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByNodeId?: Maybe<BalanceOperationOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyNodeIdUpdate>;
  /** A `CustomerInput` object that will be created and connected to this object. */
  create?: Maybe<BalanceOperationsCustomerIdTokenFkeyCustomersCreateInput>;
};

/** Input for the nested mutation of `balanceOperation` in the `CustomerInput` mutation. */
export type BalanceOperationsCustomerIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `balanceOperation` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<BalanceOperationBalanceOperationsPkeyConnect>>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<BalanceOperationNodeIdConnect>>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<BalanceOperationBalanceOperationsPkeyDelete>>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<BalanceOperationNodeIdDelete>>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<BalanceOperationOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyUsingBalanceOperationsPkeyUpdate>>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyNodeIdUpdate>>;
  /** A `BalanceOperationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<BalanceOperationsCustomerIdTokenFkeyBalanceOperationsCreateInput>>;
};

/** A `BalanceOperation` edge in the connection. */
export type BalanceOperationsEdge = {
   __typename?: 'BalanceOperationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `BalanceOperation` at the end of the edge. */
  node?: Maybe<BalanceOperation>;
};

/** Methods to use when ordering `BalanceOperation`. */
export enum BalanceOperationsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  CustomerIdTokenAsc = 'CUSTOMER_ID_TOKEN_ASC',
  CustomerIdTokenDesc = 'CUSTOMER_ID_TOKEN_DESC',
  ChangeAsc = 'CHANGE_ASC',
  ChangeDesc = 'CHANGE_DESC',
  SystemUserIdTokenAsc = 'SYSTEM_USER_ID_TOKEN_ASC',
  SystemUserIdTokenDesc = 'SYSTEM_USER_ID_TOKEN_DESC',
  ReasonAsc = 'REASON_ASC',
  ReasonDesc = 'REASON_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The `balanceOperation` to be created by this mutation. */
export type BalanceOperationsSystemUserIdTokenFkeyBalanceOperationsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** The `centralSystemUser` to be created by this mutation. */
export type BalanceOperationsSystemUserIdTokenFkeyCentralSystemUsersCreateInput = {
  idToken?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  type: SystemUserType;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** Input for the nested mutation of `centralSystemUser` in the `BalanceOperationInput` mutation. */
export type BalanceOperationsSystemUserIdTokenFkeyInput = {
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  connectByIdToken?: Maybe<CentralSystemUserCentralSystemUsersPkeyConnect>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  connectByNodeId?: Maybe<CentralSystemUserNodeIdConnect>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CentralSystemUserCentralSystemUsersPkeyDelete>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CentralSystemUserNodeIdDelete>;
  /** The primary key(s) and patch data for `centralSystemUser` for the far side of the relationship. */
  updateByIdToken?: Maybe<CentralSystemUserOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyUsingCentralSystemUsersPkeyUpdate>;
  /** The primary key(s) and patch data for `centralSystemUser` for the far side of the relationship. */
  updateByNodeId?: Maybe<BalanceOperationOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyNodeIdUpdate>;
  /** A `CentralSystemUserInput` object that will be created and connected to this object. */
  create?: Maybe<BalanceOperationsSystemUserIdTokenFkeyCentralSystemUsersCreateInput>;
};

/** Input for the nested mutation of `balanceOperation` in the `CentralSystemUserInput` mutation. */
export type BalanceOperationsSystemUserIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `balanceOperation` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<BalanceOperationBalanceOperationsPkeyConnect>>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<BalanceOperationNodeIdConnect>>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<BalanceOperationBalanceOperationsPkeyDelete>>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<BalanceOperationNodeIdDelete>>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<BalanceOperationOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyUsingBalanceOperationsPkeyUpdate>>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CentralSystemUserOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyNodeIdUpdate>>;
  /** A `BalanceOperationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<BalanceOperationsSystemUserIdTokenFkeyBalanceOperationsCreateInput>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Boolean']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Boolean']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
};

export type CentralSystemUser = Node & {
   __typename?: 'CentralSystemUser';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  idToken: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  type: SystemUserType;
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `IdTag` that is related to this `CentralSystemUser`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** Reads and enables pagination through a set of `ChargePoint`. */
  chargePointsByRegisteredBy: ChargePointsConnection;
  /** Reads and enables pagination through a set of `BalanceOperation`. */
  balanceOperationsBySystemUserIdToken: BalanceOperationsConnection;
};


export type CentralSystemUserChargePointsByRegisteredByArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointsOrderBy>>;
  condition?: Maybe<ChargePointCondition>;
  filter?: Maybe<ChargePointFilter>;
};


export type CentralSystemUserBalanceOperationsBySystemUserIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BalanceOperationsOrderBy>>;
  condition?: Maybe<BalanceOperationCondition>;
  filter?: Maybe<BalanceOperationFilter>;
};

/** The fields on `centralSystemUser` to look up the row to connect. */
export type CentralSystemUserCentralSystemUsersPkeyConnect = {
  idToken: Scalars['String'];
};

/** The fields on `centralSystemUser` to look up the row to delete. */
export type CentralSystemUserCentralSystemUsersPkeyDelete = {
  idToken: Scalars['String'];
};

/** 
 * A condition to be used against `CentralSystemUser` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CentralSystemUserCondition = {
  /** Checks for equality with the object’s `idToken` field. */
  idToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `password` field. */
  password?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<SystemUserType>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `CentralSystemUser` object types. All fields are combined with a logical ‘and.’ */
export type CentralSystemUserFilter = {
  /** Filter by the object’s `idToken` field. */
  idToken?: Maybe<StringFilter>;
  /** Filter by the object’s `email` field. */
  email?: Maybe<StringFilter>;
  /** Filter by the object’s `password` field. */
  password?: Maybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: Maybe<SystemUserTypeFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CentralSystemUserFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CentralSystemUserFilter>>;
  /** Negates the expression. */
  not?: Maybe<CentralSystemUserFilter>;
};

/** An input for mutations affecting `CentralSystemUser` */
export type CentralSystemUserInput = {
  idToken?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  type: SystemUserType;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type CentralSystemUserNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `centralSystemUser` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type CentralSystemUserNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `centralSystemUser` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type CentralSystemUserOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `balanceOperation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: BalanceOperationPatch;
};

/** The fields on `centralSystemUser` to look up the row to update. */
export type CentralSystemUserOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyUsingCentralSystemUsersPkeyUpdate = {
  /** An object where the defined keys will be set on the `centralSystemUser` being updated. */
  centralSystemUserPatch: UpdateCentralSystemUserOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type CentralSystemUserOnCentralSystemUserForCentralSystemUsersIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `idTag` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `idTag` being updated. */
  idTagPatch: IdTagPatch;
};

/** The fields on `centralSystemUser` to look up the row to update. */
export type CentralSystemUserOnCentralSystemUserForCentralSystemUsersIdTokenFkeyUsingCentralSystemUsersPkeyUpdate = {
  /** An object where the defined keys will be set on the `centralSystemUser` being updated. */
  centralSystemUserPatch: UpdateCentralSystemUserOnCentralSystemUserForCentralSystemUsersIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type CentralSystemUserOnChargePointForChargePointsRegisteredByFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** The fields on `centralSystemUser` to look up the row to update. */
export type CentralSystemUserOnChargePointForChargePointsRegisteredByFkeyUsingCentralSystemUsersPkeyUpdate = {
  /** An object where the defined keys will be set on the `centralSystemUser` being updated. */
  centralSystemUserPatch: UpdateCentralSystemUserOnChargePointForChargePointsRegisteredByFkeyPatch;
  idToken: Scalars['String'];
};

/** Represents an update to a `CentralSystemUser`. Fields that are set will be updated. */
export type CentralSystemUserPatch = {
  idToken?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  type?: Maybe<SystemUserType>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** A connection to a list of `CentralSystemUser` values. */
export type CentralSystemUsersConnection = {
   __typename?: 'CentralSystemUsersConnection';
  /** A list of `CentralSystemUser` objects. */
  nodes: Array<Maybe<CentralSystemUser>>;
  /** A list of edges which contains the `CentralSystemUser` and cursor to aid in pagination. */
  edges: Array<CentralSystemUsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CentralSystemUser` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `CentralSystemUser` edge in the connection. */
export type CentralSystemUsersEdge = {
   __typename?: 'CentralSystemUsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CentralSystemUser` at the end of the edge. */
  node?: Maybe<CentralSystemUser>;
};

/** The `centralSystemUser` to be created by this mutation. */
export type CentralSystemUsersIdTokenFkeyCentralSystemUsersCreateInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  type: SystemUserType;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** The `idTag` to be created by this mutation. */
export type CentralSystemUsersIdTokenFkeyIdTagsCreateInput = {
  parentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerUsingIdToken?: Maybe<CustomersIdTokenFkeyInverseInput>;
  centralSystemUserUsingIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInverseInput>;
};

/** Input for the nested mutation of `idTag` in the `CentralSystemUserInput` mutation. */
export type CentralSystemUsersIdTokenFkeyInput = {
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  connectByIdToken?: Maybe<IdTagIdTagsPkeyConnect>;
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  connectByNodeId?: Maybe<IdTagNodeIdConnect>;
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  deleteByIdToken?: Maybe<IdTagIdTagsPkeyDelete>;
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  deleteByNodeId?: Maybe<IdTagNodeIdDelete>;
  /** The primary key(s) and patch data for `idTag` for the far side of the relationship. */
  updateByIdToken?: Maybe<IdTagOnCentralSystemUserForCentralSystemUsersIdTokenFkeyUsingIdTagsPkeyUpdate>;
  /** The primary key(s) and patch data for `idTag` for the far side of the relationship. */
  updateByNodeId?: Maybe<CentralSystemUserOnCentralSystemUserForCentralSystemUsersIdTokenFkeyNodeIdUpdate>;
  /** A `IdTagInput` object that will be created and connected to this object. */
  create?: Maybe<CentralSystemUsersIdTokenFkeyIdTagsCreateInput>;
};

/** Input for the nested mutation of `centralSystemUser` in the `IdTagInput` mutation. */
export type CentralSystemUsersIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `centralSystemUser` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  connectByIdToken?: Maybe<CentralSystemUserCentralSystemUsersPkeyConnect>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  connectByNodeId?: Maybe<CentralSystemUserNodeIdConnect>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CentralSystemUserCentralSystemUsersPkeyDelete>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CentralSystemUserNodeIdDelete>;
  /** The primary key(s) and patch data for `centralSystemUser` for the far side of the relationship. */
  updateByIdToken?: Maybe<CentralSystemUserOnCentralSystemUserForCentralSystemUsersIdTokenFkeyUsingCentralSystemUsersPkeyUpdate>;
  /** The primary key(s) and patch data for `centralSystemUser` for the far side of the relationship. */
  updateByNodeId?: Maybe<IdTagOnCentralSystemUserForCentralSystemUsersIdTokenFkeyNodeIdUpdate>;
  /** A `CentralSystemUserInput` object that will be created and connected to this object. */
  create?: Maybe<Array<CentralSystemUsersIdTokenFkeyCentralSystemUsersCreateInput>>;
};

/** Methods to use when ordering `CentralSystemUser`. */
export enum CentralSystemUsersOrderBy {
  Natural = 'NATURAL',
  IdTokenAsc = 'ID_TOKEN_ASC',
  IdTokenDesc = 'ID_TOKEN_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ChargePoint = Node & {
   __typename?: 'ChargePoint';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `CentralSystemUser` that is related to this `ChargePoint`. */
  centralSystemUserByRegisteredBy?: Maybe<CentralSystemUser>;
  /** Reads a single `Counteragent` that is related to this `ChargePoint`. */
  counteragentByCounteragentUuid?: Maybe<Counteragent>;
  /** Reads and enables pagination through a set of `ChargePointSchedule`. */
  chargePointSchedulesByChargePointId: ChargePointSchedulesConnection;
  /** Reads and enables pagination through a set of `ChargePointHeartbeat`. */
  chargePointHeartbeatsByChargePointId: ChargePointHeartbeatsConnection;
  /** Reads and enables pagination through a set of `Connector`. */
  connectorsByChargePointId: ConnectorsConnection;
  /** Reads and enables pagination through a set of `ChargePointEnergySupplyPrice`. */
  chargePointEnergySupplyPricesByChargePointId: ChargePointEnergySupplyPricesConnection;
  /** Reads and enables pagination through a set of `Price`. */
  pricesByChargePointId: PricesConnection;
};


export type ChargePointChargePointSchedulesByChargePointIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointSchedulesOrderBy>>;
  condition?: Maybe<ChargePointScheduleCondition>;
  filter?: Maybe<ChargePointScheduleFilter>;
};


export type ChargePointChargePointHeartbeatsByChargePointIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointHeartbeatsOrderBy>>;
  condition?: Maybe<ChargePointHeartbeatCondition>;
  filter?: Maybe<ChargePointHeartbeatFilter>;
};


export type ChargePointConnectorsByChargePointIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ConnectorsOrderBy>>;
  condition?: Maybe<ConnectorCondition>;
  filter?: Maybe<ConnectorFilter>;
};


export type ChargePointChargePointEnergySupplyPricesByChargePointIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointEnergySupplyPricesOrderBy>>;
  condition?: Maybe<ChargePointEnergySupplyPriceCondition>;
  filter?: Maybe<ChargePointEnergySupplyPriceFilter>;
};


export type ChargePointPricesByChargePointIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PricesOrderBy>>;
  condition?: Maybe<PriceCondition>;
  filter?: Maybe<PriceFilter>;
};

/** The fields on `chargePoint` to look up the row to connect. */
export type ChargePointChargePointsPkeyConnect = {
  id: Scalars['String'];
};

/** The fields on `chargePoint` to look up the row to delete. */
export type ChargePointChargePointsPkeyDelete = {
  id: Scalars['String'];
};

/** 
 * A condition to be used against `ChargePoint` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ChargePointCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `chargePointModel` field. */
  chargePointModel?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `chargePointSerialNumber` field. */
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `chargePointVendor` field. */
  chargePointVendor?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `firmwareVersion` field. */
  firmwareVersion?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `meterSerialNumber` field. */
  meterSerialNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `meterType` field. */
  meterType?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `password` field. */
  password?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `interval` field. */
  interval?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `registeredBy` field. */
  registeredBy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `ip` field. */
  ip?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `chargeBoxSerialNumber` field. */
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `iccid` field. */
  iccid?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `imsi` field. */
  imsi?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `counteragentUuid` field. */
  counteragentUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `parkingPrice` field. */
  parkingPrice?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `objectsNearby` field. */
  objectsNearby?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `street` field. */
  street?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `building` field. */
  building?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `latitude` field. */
  latitude?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `longitude` field. */
  longitude?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `configurationKeysSet` field. */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

export type ChargePointEnergySupplyPrice = Node & {
   __typename?: 'ChargePointEnergySupplyPrice';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  chargePointId?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  createdAt: Scalars['Datetime'];
  /** Reads a single `ChargePoint` that is related to this `ChargePointEnergySupplyPrice`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
};

/** The fields on `chargePointEnergySupplyPrice` to look up the row to connect. */
export type ChargePointEnergySupplyPriceChargePointEnergySupplyPricePkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `chargePointEnergySupplyPrice` to look up the row to delete. */
export type ChargePointEnergySupplyPriceChargePointEnergySupplyPricePkeyDelete = {
  uuid: Scalars['UUID'];
};

/** The `chargePointEnergySupplyPrice` to be created by this mutation. */
export type ChargePointEnergySupplyPriceChargePointIdFkeyChargePointEnergySupplyPriceCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  value: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInput>;
};

/** The `chargePoint` to be created by this mutation. */
export type ChargePointEnergySupplyPriceChargePointIdFkeyChargePointsCreateInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** Input for the nested mutation of `chargePoint` in the `ChargePointEnergySupplyPriceInput` mutation. */
export type ChargePointEnergySupplyPriceChargePointIdFkeyInput = {
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectById?: Maybe<ChargePointChargePointsPkeyConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectByNodeId?: Maybe<ChargePointNodeIdConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteById?: Maybe<ChargePointChargePointsPkeyDelete>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ChargePointNodeIdDelete>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateById?: Maybe<ChargePointOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyUsingChargePointsPkeyUpdate>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargePointEnergySupplyPriceOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyNodeIdUpdate>;
  /** A `ChargePointInput` object that will be created and connected to this object. */
  create?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyChargePointsCreateInput>;
};

/** Input for the nested mutation of `chargePointEnergySupplyPrice` in the `ChargePointInput` mutation. */
export type ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput = {
  /** Flag indicating whether all other `chargePointEnergySupplyPrice` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargePointEnergySupplyPrice` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ChargePointEnergySupplyPriceChargePointEnergySupplyPricePkeyConnect>>;
  /** The primary key(s) for `chargePointEnergySupplyPrice` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargePointEnergySupplyPriceNodeIdConnect>>;
  /** The primary key(s) for `chargePointEnergySupplyPrice` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ChargePointEnergySupplyPriceChargePointEnergySupplyPricePkeyDelete>>;
  /** The primary key(s) for `chargePointEnergySupplyPrice` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargePointEnergySupplyPriceNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargePointEnergySupplyPrice` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ChargePointEnergySupplyPriceOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyUsingChargePointEnergySupplyPricePkeyUpdate>>;
  /** The primary key(s) and patch data for `chargePointEnergySupplyPrice` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ChargePointOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyNodeIdUpdate>>;
  /** A `ChargePointEnergySupplyPriceInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargePointEnergySupplyPriceChargePointIdFkeyChargePointEnergySupplyPriceCreateInput>>;
};

/** 
 * A condition to be used against `ChargePointEnergySupplyPrice` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type ChargePointEnergySupplyPriceCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `chargePointId` field. */
  chargePointId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `ChargePointEnergySupplyPrice` object types. All fields are combined with a logical ‘and.’ */
export type ChargePointEnergySupplyPriceFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `chargePointId` field. */
  chargePointId?: Maybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ChargePointEnergySupplyPriceFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ChargePointEnergySupplyPriceFilter>>;
  /** Negates the expression. */
  not?: Maybe<ChargePointEnergySupplyPriceFilter>;
};

/** An input for mutations affecting `ChargePointEnergySupplyPrice` */
export type ChargePointEnergySupplyPriceInput = {
  uuid?: Maybe<Scalars['UUID']>;
  chargePointId?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ChargePointEnergySupplyPriceNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `chargePointEnergySupplyPrice` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ChargePointEnergySupplyPriceNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `chargePointEnergySupplyPrice` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointEnergySupplyPriceOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** The fields on `chargePointEnergySupplyPrice` to look up the row to update. */
export type ChargePointEnergySupplyPriceOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyUsingChargePointEnergySupplyPricePkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePointEnergySupplyPrice` being updated. */
  chargePointEnergySupplyPricePatch: UpdateChargePointEnergySupplyPriceOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `ChargePointEnergySupplyPrice`. Fields that are set will be updated. */
export type ChargePointEnergySupplyPricePatch = {
  uuid?: Maybe<Scalars['UUID']>;
  chargePointId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInput>;
};

/** A connection to a list of `ChargePointEnergySupplyPrice` values. */
export type ChargePointEnergySupplyPricesConnection = {
   __typename?: 'ChargePointEnergySupplyPricesConnection';
  /** A list of `ChargePointEnergySupplyPrice` objects. */
  nodes: Array<Maybe<ChargePointEnergySupplyPrice>>;
  /** A list of edges which contains the `ChargePointEnergySupplyPrice` and cursor to aid in pagination. */
  edges: Array<ChargePointEnergySupplyPricesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChargePointEnergySupplyPrice` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ChargePointEnergySupplyPrice` edge in the connection. */
export type ChargePointEnergySupplyPricesEdge = {
   __typename?: 'ChargePointEnergySupplyPricesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChargePointEnergySupplyPrice` at the end of the edge. */
  node?: Maybe<ChargePointEnergySupplyPrice>;
};

/** Methods to use when ordering `ChargePointEnergySupplyPrice`. */
export enum ChargePointEnergySupplyPricesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  ChargePointIdAsc = 'CHARGE_POINT_ID_ASC',
  ChargePointIdDesc = 'CHARGE_POINT_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum ChargePointErrorCode {
  ConnectorLockFailure = 'ConnectorLockFailure',
  EvCommunicationError = 'EVCommunicationError',
  GroundFailure = 'GroundFailure',
  HighTemperature = 'HighTemperature',
  InternalError = 'InternalError',
  LocalListConflict = 'LocalListConflict',
  NoError = 'NoError',
  OtherError = 'OtherError',
  OverCurrentFailure = 'OverCurrentFailure',
  OverVoltage = 'OverVoltage',
  PowerMeterFailure = 'PowerMeterFailure',
  PowerSwitchFailure = 'PowerSwitchFailure',
  ReaderFailure = 'ReaderFailure',
  ResetFailure = 'ResetFailure',
  UnderVoltage = 'UnderVoltage',
  WeakSignal = 'WeakSignal'
}

/** A filter to be used against ChargePointErrorCode fields. All fields are combined with a logical ‘and.’ */
export type ChargePointErrorCodeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ChargePointErrorCode>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ChargePointErrorCode>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ChargePointErrorCode>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ChargePointErrorCode>;
  /** Included in the specified list. */
  in?: Maybe<Array<ChargePointErrorCode>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ChargePointErrorCode>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ChargePointErrorCode>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ChargePointErrorCode>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ChargePointErrorCode>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ChargePointErrorCode>;
};

/** A filter to be used against `ChargePoint` object types. All fields are combined with a logical ‘and.’ */
export type ChargePointFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>;
  /** Filter by the object’s `chargePointModel` field. */
  chargePointModel?: Maybe<StringFilter>;
  /** Filter by the object’s `chargePointSerialNumber` field. */
  chargePointSerialNumber?: Maybe<StringFilter>;
  /** Filter by the object’s `chargePointVendor` field. */
  chargePointVendor?: Maybe<StringFilter>;
  /** Filter by the object’s `firmwareVersion` field. */
  firmwareVersion?: Maybe<StringFilter>;
  /** Filter by the object’s `meterSerialNumber` field. */
  meterSerialNumber?: Maybe<StringFilter>;
  /** Filter by the object’s `meterType` field. */
  meterType?: Maybe<StringFilter>;
  /** Filter by the object’s `password` field. */
  password?: Maybe<StringFilter>;
  /** Filter by the object’s `interval` field. */
  interval?: Maybe<IntFilter>;
  /** Filter by the object’s `registeredBy` field. */
  registeredBy?: Maybe<StringFilter>;
  /** Filter by the object’s `chargeBoxSerialNumber` field. */
  chargeBoxSerialNumber?: Maybe<StringFilter>;
  /** Filter by the object’s `iccid` field. */
  iccid?: Maybe<StringFilter>;
  /** Filter by the object’s `imsi` field. */
  imsi?: Maybe<StringFilter>;
  /** Filter by the object’s `counteragentUuid` field. */
  counteragentUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `parkingPrice` field. */
  parkingPrice?: Maybe<FloatFilter>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `objectsNearby` field. */
  objectsNearby?: Maybe<StringFilter>;
  /** Filter by the object’s `country` field. */
  country?: Maybe<StringFilter>;
  /** Filter by the object’s `city` field. */
  city?: Maybe<StringFilter>;
  /** Filter by the object’s `street` field. */
  street?: Maybe<StringFilter>;
  /** Filter by the object’s `building` field. */
  building?: Maybe<StringFilter>;
  /** Filter by the object’s `latitude` field. */
  latitude?: Maybe<FloatFilter>;
  /** Filter by the object’s `longitude` field. */
  longitude?: Maybe<FloatFilter>;
  /** Filter by the object’s `configurationKeysSet` field. */
  configurationKeysSet?: Maybe<BooleanFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ChargePointFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ChargePointFilter>>;
  /** Negates the expression. */
  not?: Maybe<ChargePointFilter>;
};

export type ChargePointHeartbeat = Node & {
   __typename?: 'ChargePointHeartbeat';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointId: Scalars['String'];
  /** Reads a single `ChargePoint` that is related to this `ChargePointHeartbeat`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
};

/** The fields on `chargePointHeartbeat` to look up the row to connect. */
export type ChargePointHeartbeatChargePointHeartbeatsPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `chargePointHeartbeat` to look up the row to delete. */
export type ChargePointHeartbeatChargePointHeartbeatsPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** 
 * A condition to be used against `ChargePointHeartbeat` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type ChargePointHeartbeatCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `chargePointId` field. */
  chargePointId?: Maybe<Scalars['String']>;
};

/** A filter to be used against `ChargePointHeartbeat` object types. All fields are combined with a logical ‘and.’ */
export type ChargePointHeartbeatFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `chargePointId` field. */
  chargePointId?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ChargePointHeartbeatFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ChargePointHeartbeatFilter>>;
  /** Negates the expression. */
  not?: Maybe<ChargePointHeartbeatFilter>;
};

/** An input for mutations affecting `ChargePointHeartbeat` */
export type ChargePointHeartbeatInput = {
  uuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointId?: Maybe<Scalars['String']>;
  chargePointToChargePointId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ChargePointHeartbeatNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `chargePointHeartbeat` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ChargePointHeartbeatNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `chargePointHeartbeat` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointHeartbeatOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** The fields on `chargePointHeartbeat` to look up the row to update. */
export type ChargePointHeartbeatOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyUsingChargePointHeartbeatsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePointHeartbeat` being updated. */
  chargePointHeartbeatPatch: UpdateChargePointHeartbeatOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `ChargePointHeartbeat`. Fields that are set will be updated. */
export type ChargePointHeartbeatPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointId?: Maybe<Scalars['String']>;
  chargePointToChargePointId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInput>;
};

/** The `chargePointHeartbeat` to be created by this mutation. */
export type ChargePointHeartbeatsChargePointIdFkeyChargePointHeartbeatsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInput>;
};

/** The `chargePoint` to be created by this mutation. */
export type ChargePointHeartbeatsChargePointIdFkeyChargePointsCreateInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** Input for the nested mutation of `chargePoint` in the `ChargePointHeartbeatInput` mutation. */
export type ChargePointHeartbeatsChargePointIdFkeyInput = {
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectById?: Maybe<ChargePointChargePointsPkeyConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectByNodeId?: Maybe<ChargePointNodeIdConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteById?: Maybe<ChargePointChargePointsPkeyDelete>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ChargePointNodeIdDelete>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateById?: Maybe<ChargePointOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyUsingChargePointsPkeyUpdate>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargePointHeartbeatOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyNodeIdUpdate>;
  /** A `ChargePointInput` object that will be created and connected to this object. */
  create?: Maybe<ChargePointHeartbeatsChargePointIdFkeyChargePointsCreateInput>;
};

/** Input for the nested mutation of `chargePointHeartbeat` in the `ChargePointInput` mutation. */
export type ChargePointHeartbeatsChargePointIdFkeyInverseInput = {
  /** Flag indicating whether all other `chargePointHeartbeat` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargePointHeartbeat` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ChargePointHeartbeatChargePointHeartbeatsPkeyConnect>>;
  /** The primary key(s) for `chargePointHeartbeat` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargePointHeartbeatNodeIdConnect>>;
  /** The primary key(s) for `chargePointHeartbeat` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ChargePointHeartbeatChargePointHeartbeatsPkeyDelete>>;
  /** The primary key(s) for `chargePointHeartbeat` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargePointHeartbeatNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargePointHeartbeat` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ChargePointHeartbeatOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyUsingChargePointHeartbeatsPkeyUpdate>>;
  /** The primary key(s) and patch data for `chargePointHeartbeat` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ChargePointOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyNodeIdUpdate>>;
  /** A `ChargePointHeartbeatInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargePointHeartbeatsChargePointIdFkeyChargePointHeartbeatsCreateInput>>;
};

/** A connection to a list of `ChargePointHeartbeat` values. */
export type ChargePointHeartbeatsConnection = {
   __typename?: 'ChargePointHeartbeatsConnection';
  /** A list of `ChargePointHeartbeat` objects. */
  nodes: Array<Maybe<ChargePointHeartbeat>>;
  /** A list of edges which contains the `ChargePointHeartbeat` and cursor to aid in pagination. */
  edges: Array<ChargePointHeartbeatsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChargePointHeartbeat` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ChargePointHeartbeat` edge in the connection. */
export type ChargePointHeartbeatsEdge = {
   __typename?: 'ChargePointHeartbeatsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChargePointHeartbeat` at the end of the edge. */
  node?: Maybe<ChargePointHeartbeat>;
};

/** Methods to use when ordering `ChargePointHeartbeat`. */
export enum ChargePointHeartbeatsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  ChargePointIdAsc = 'CHARGE_POINT_ID_ASC',
  ChargePointIdDesc = 'CHARGE_POINT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `ChargePoint` */
export type ChargePointInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ChargePointNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ChargePointNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePointEnergySupplyPrice` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePointEnergySupplyPrice` being updated. */
  chargePointEnergySupplyPricePatch: ChargePointEnergySupplyPricePatch;
};

/** The fields on `chargePoint` to look up the row to update. */
export type ChargePointOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyUsingChargePointsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: UpdateChargePointOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyPatch;
  id: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointOnChargePointForChargePointsCounteragentUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `counteragent` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `counteragent` being updated. */
  counteragentPatch: CounteragentPatch;
};

/** The fields on `chargePoint` to look up the row to update. */
export type ChargePointOnChargePointForChargePointsCounteragentUuidFkeyUsingChargePointsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: UpdateChargePointOnChargePointForChargePointsCounteragentUuidFkeyPatch;
  id: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointOnChargePointForChargePointsRegisteredByFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `centralSystemUser` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `centralSystemUser` being updated. */
  centralSystemUserPatch: CentralSystemUserPatch;
};

/** The fields on `chargePoint` to look up the row to update. */
export type ChargePointOnChargePointForChargePointsRegisteredByFkeyUsingChargePointsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: UpdateChargePointOnChargePointForChargePointsRegisteredByFkeyPatch;
  id: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePointHeartbeat` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePointHeartbeat` being updated. */
  chargePointHeartbeatPatch: ChargePointHeartbeatPatch;
};

/** The fields on `chargePoint` to look up the row to update. */
export type ChargePointOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyUsingChargePointsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: UpdateChargePointOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyPatch;
  id: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePointSchedule` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePointSchedule` being updated. */
  chargePointSchedulePatch: ChargePointSchedulePatch;
};

/** The fields on `chargePoint` to look up the row to update. */
export type ChargePointOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyUsingChargePointsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: UpdateChargePointOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyPatch;
  id: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointOnConnectorForConnectorsChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connector` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: ConnectorPatch;
};

/** The fields on `chargePoint` to look up the row to update. */
export type ChargePointOnConnectorForConnectorsChargePointIdFkeyUsingChargePointsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: UpdateChargePointOnConnectorForConnectorsChargePointIdFkeyPatch;
  id: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointOnPriceForPricesChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `price` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: PricePatch;
};

/** The fields on `chargePoint` to look up the row to update. */
export type ChargePointOnPriceForPricesChargePointIdFkeyUsingChargePointsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: UpdateChargePointOnPriceForPricesChargePointIdFkeyPatch;
  id: Scalars['String'];
};

/** Represents an update to a `ChargePoint`. Fields that are set will be updated. */
export type ChargePointPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

export type ChargePointSchedule = Node & {
   __typename?: 'ChargePointSchedule';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  validStart?: Maybe<Scalars['Datetime']>;
  validEnd?: Maybe<Scalars['Datetime']>;
  /** 
 * Comma-separated list of days on which the schedule valid.
   *                                                     0 - monday. Example: 0,2,3,6
 */
  days?: Maybe<Scalars['String']>;
  chargePointId: Scalars['String'];
  /** Reads a single `ChargePoint` that is related to this `ChargePointSchedule`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
};

/** The fields on `chargePointSchedule` to look up the row to connect. */
export type ChargePointScheduleChargePointSchedulesPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `chargePointSchedule` to look up the row to delete. */
export type ChargePointScheduleChargePointSchedulesPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** 
 * A condition to be used against `ChargePointSchedule` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type ChargePointScheduleCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `validStart` field. */
  validStart?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `validEnd` field. */
  validEnd?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `days` field. */
  days?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `chargePointId` field. */
  chargePointId?: Maybe<Scalars['String']>;
};

/** A filter to be used against `ChargePointSchedule` object types. All fields are combined with a logical ‘and.’ */
export type ChargePointScheduleFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `validStart` field. */
  validStart?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `validEnd` field. */
  validEnd?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `days` field. */
  days?: Maybe<StringFilter>;
  /** Filter by the object’s `chargePointId` field. */
  chargePointId?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ChargePointScheduleFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ChargePointScheduleFilter>>;
  /** Negates the expression. */
  not?: Maybe<ChargePointScheduleFilter>;
};

/** An input for mutations affecting `ChargePointSchedule` */
export type ChargePointScheduleInput = {
  uuid?: Maybe<Scalars['UUID']>;
  validStart?: Maybe<Scalars['Datetime']>;
  validEnd?: Maybe<Scalars['Datetime']>;
  /** 
 * Comma-separated list of days on which the schedule valid.
   *                                                     0 - monday. Example: 0,2,3,6
 */
  days?: Maybe<Scalars['String']>;
  chargePointId?: Maybe<Scalars['String']>;
  chargePointToChargePointId?: Maybe<ChargePointSchedulesChargePointIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ChargePointScheduleNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `chargePointSchedule` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ChargePointScheduleNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `chargePointSchedule` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargePointScheduleOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** The fields on `chargePointSchedule` to look up the row to update. */
export type ChargePointScheduleOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyUsingChargePointSchedulesPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargePointSchedule` being updated. */
  chargePointSchedulePatch: UpdateChargePointScheduleOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `ChargePointSchedule`. Fields that are set will be updated. */
export type ChargePointSchedulePatch = {
  uuid?: Maybe<Scalars['UUID']>;
  validStart?: Maybe<Scalars['Datetime']>;
  validEnd?: Maybe<Scalars['Datetime']>;
  /** 
 * Comma-separated list of days on which the schedule valid.
   *                                                     0 - monday. Example: 0,2,3,6
 */
  days?: Maybe<Scalars['String']>;
  chargePointId?: Maybe<Scalars['String']>;
  chargePointToChargePointId?: Maybe<ChargePointSchedulesChargePointIdFkeyInput>;
};

/** The `chargePointSchedule` to be created by this mutation. */
export type ChargePointSchedulesChargePointIdFkeyChargePointSchedulesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  validStart?: Maybe<Scalars['Datetime']>;
  validEnd?: Maybe<Scalars['Datetime']>;
  /** 
 * Comma-separated list of days on which the schedule valid.
   *                                                     0 - monday. Example: 0,2,3,6
 */
  days?: Maybe<Scalars['String']>;
  chargePointToChargePointId?: Maybe<ChargePointSchedulesChargePointIdFkeyInput>;
};

/** The `chargePoint` to be created by this mutation. */
export type ChargePointSchedulesChargePointIdFkeyChargePointsCreateInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** Input for the nested mutation of `chargePoint` in the `ChargePointScheduleInput` mutation. */
export type ChargePointSchedulesChargePointIdFkeyInput = {
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectById?: Maybe<ChargePointChargePointsPkeyConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectByNodeId?: Maybe<ChargePointNodeIdConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteById?: Maybe<ChargePointChargePointsPkeyDelete>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ChargePointNodeIdDelete>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateById?: Maybe<ChargePointOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyUsingChargePointsPkeyUpdate>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargePointScheduleOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyNodeIdUpdate>;
  /** A `ChargePointInput` object that will be created and connected to this object. */
  create?: Maybe<ChargePointSchedulesChargePointIdFkeyChargePointsCreateInput>;
};

/** Input for the nested mutation of `chargePointSchedule` in the `ChargePointInput` mutation. */
export type ChargePointSchedulesChargePointIdFkeyInverseInput = {
  /** Flag indicating whether all other `chargePointSchedule` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargePointSchedule` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ChargePointScheduleChargePointSchedulesPkeyConnect>>;
  /** The primary key(s) for `chargePointSchedule` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargePointScheduleNodeIdConnect>>;
  /** The primary key(s) for `chargePointSchedule` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ChargePointScheduleChargePointSchedulesPkeyDelete>>;
  /** The primary key(s) for `chargePointSchedule` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargePointScheduleNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargePointSchedule` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ChargePointScheduleOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyUsingChargePointSchedulesPkeyUpdate>>;
  /** The primary key(s) and patch data for `chargePointSchedule` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ChargePointOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyNodeIdUpdate>>;
  /** A `ChargePointScheduleInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargePointSchedulesChargePointIdFkeyChargePointSchedulesCreateInput>>;
};

/** A connection to a list of `ChargePointSchedule` values. */
export type ChargePointSchedulesConnection = {
   __typename?: 'ChargePointSchedulesConnection';
  /** A list of `ChargePointSchedule` objects. */
  nodes: Array<Maybe<ChargePointSchedule>>;
  /** A list of edges which contains the `ChargePointSchedule` and cursor to aid in pagination. */
  edges: Array<ChargePointSchedulesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChargePointSchedule` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ChargePointSchedule` edge in the connection. */
export type ChargePointSchedulesEdge = {
   __typename?: 'ChargePointSchedulesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChargePointSchedule` at the end of the edge. */
  node?: Maybe<ChargePointSchedule>;
};

/** Methods to use when ordering `ChargePointSchedule`. */
export enum ChargePointSchedulesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  ValidStartAsc = 'VALID_START_ASC',
  ValidStartDesc = 'VALID_START_DESC',
  ValidEndAsc = 'VALID_END_ASC',
  ValidEndDesc = 'VALID_END_DESC',
  DaysAsc = 'DAYS_ASC',
  DaysDesc = 'DAYS_DESC',
  ChargePointIdAsc = 'CHARGE_POINT_ID_ASC',
  ChargePointIdDesc = 'CHARGE_POINT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `ChargePoint` values. */
export type ChargePointsConnection = {
   __typename?: 'ChargePointsConnection';
  /** A list of `ChargePoint` objects. */
  nodes: Array<Maybe<ChargePoint>>;
  /** A list of edges which contains the `ChargePoint` and cursor to aid in pagination. */
  edges: Array<ChargePointsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChargePoint` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** The `chargePoint` to be created by this mutation. */
export type ChargePointsCounteragentUuidFkeyChargePointsCreateInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** The `counteragent` to be created by this mutation. */
export type ChargePointsCounteragentUuidFkeyCounteragentsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  /** ИНН */
  tin?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  chargePointsUsingUuid?: Maybe<ChargePointsCounteragentUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `counteragent` in the `ChargePointInput` mutation. */
export type ChargePointsCounteragentUuidFkeyInput = {
  /** The primary key(s) for `counteragent` for the far side of the relationship. */
  connectByUuid?: Maybe<CounteragentCounteragentsPkeyConnect>;
  /** The primary key(s) for `counteragent` for the far side of the relationship. */
  connectByNodeId?: Maybe<CounteragentNodeIdConnect>;
  /** The primary key(s) for `counteragent` for the far side of the relationship. */
  deleteByUuid?: Maybe<CounteragentCounteragentsPkeyDelete>;
  /** The primary key(s) for `counteragent` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CounteragentNodeIdDelete>;
  /** The primary key(s) and patch data for `counteragent` for the far side of the relationship. */
  updateByUuid?: Maybe<CounteragentOnChargePointForChargePointsCounteragentUuidFkeyUsingCounteragentsPkeyUpdate>;
  /** The primary key(s) and patch data for `counteragent` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargePointOnChargePointForChargePointsCounteragentUuidFkeyNodeIdUpdate>;
  /** A `CounteragentInput` object that will be created and connected to this object. */
  create?: Maybe<ChargePointsCounteragentUuidFkeyCounteragentsCreateInput>;
};

/** Input for the nested mutation of `chargePoint` in the `CounteragentInput` mutation. */
export type ChargePointsCounteragentUuidFkeyInverseInput = {
  /** Flag indicating whether all other `chargePoint` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectById?: Maybe<Array<ChargePointChargePointsPkeyConnect>>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargePointNodeIdConnect>>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteById?: Maybe<Array<ChargePointChargePointsPkeyDelete>>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargePointNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateById?: Maybe<Array<ChargePointOnChargePointForChargePointsCounteragentUuidFkeyUsingChargePointsPkeyUpdate>>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CounteragentOnChargePointForChargePointsCounteragentUuidFkeyNodeIdUpdate>>;
  /** A `ChargePointInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargePointsCounteragentUuidFkeyChargePointsCreateInput>>;
};

/** A `ChargePoint` edge in the connection. */
export type ChargePointsEdge = {
   __typename?: 'ChargePointsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChargePoint` at the end of the edge. */
  node?: Maybe<ChargePoint>;
};

/** Methods to use when ordering `ChargePoint`. */
export enum ChargePointsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ChargePointModelAsc = 'CHARGE_POINT_MODEL_ASC',
  ChargePointModelDesc = 'CHARGE_POINT_MODEL_DESC',
  ChargePointSerialNumberAsc = 'CHARGE_POINT_SERIAL_NUMBER_ASC',
  ChargePointSerialNumberDesc = 'CHARGE_POINT_SERIAL_NUMBER_DESC',
  ChargePointVendorAsc = 'CHARGE_POINT_VENDOR_ASC',
  ChargePointVendorDesc = 'CHARGE_POINT_VENDOR_DESC',
  FirmwareVersionAsc = 'FIRMWARE_VERSION_ASC',
  FirmwareVersionDesc = 'FIRMWARE_VERSION_DESC',
  MeterSerialNumberAsc = 'METER_SERIAL_NUMBER_ASC',
  MeterSerialNumberDesc = 'METER_SERIAL_NUMBER_DESC',
  MeterTypeAsc = 'METER_TYPE_ASC',
  MeterTypeDesc = 'METER_TYPE_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  IntervalAsc = 'INTERVAL_ASC',
  IntervalDesc = 'INTERVAL_DESC',
  RegisteredByAsc = 'REGISTERED_BY_ASC',
  RegisteredByDesc = 'REGISTERED_BY_DESC',
  IpAsc = 'IP_ASC',
  IpDesc = 'IP_DESC',
  ChargeBoxSerialNumberAsc = 'CHARGE_BOX_SERIAL_NUMBER_ASC',
  ChargeBoxSerialNumberDesc = 'CHARGE_BOX_SERIAL_NUMBER_DESC',
  IccidAsc = 'ICCID_ASC',
  IccidDesc = 'ICCID_DESC',
  ImsiAsc = 'IMSI_ASC',
  ImsiDesc = 'IMSI_DESC',
  CounteragentUuidAsc = 'COUNTERAGENT_UUID_ASC',
  CounteragentUuidDesc = 'COUNTERAGENT_UUID_DESC',
  ParkingPriceAsc = 'PARKING_PRICE_ASC',
  ParkingPriceDesc = 'PARKING_PRICE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ObjectsNearbyAsc = 'OBJECTS_NEARBY_ASC',
  ObjectsNearbyDesc = 'OBJECTS_NEARBY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  StreetAsc = 'STREET_ASC',
  StreetDesc = 'STREET_DESC',
  BuildingAsc = 'BUILDING_ASC',
  BuildingDesc = 'BUILDING_DESC',
  LatitudeAsc = 'LATITUDE_ASC',
  LatitudeDesc = 'LATITUDE_DESC',
  LongitudeAsc = 'LONGITUDE_ASC',
  LongitudeDesc = 'LONGITUDE_DESC',
  ConfigurationKeysSetAsc = 'CONFIGURATION_KEYS_SET_ASC',
  ConfigurationKeysSetDesc = 'CONFIGURATION_KEYS_SET_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The `centralSystemUser` to be created by this mutation. */
export type ChargePointsRegisteredByFkeyCentralSystemUsersCreateInput = {
  idToken?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  type: SystemUserType;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** The `chargePoint` to be created by this mutation. */
export type ChargePointsRegisteredByFkeyChargePointsCreateInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** Input for the nested mutation of `centralSystemUser` in the `ChargePointInput` mutation. */
export type ChargePointsRegisteredByFkeyInput = {
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  connectByIdToken?: Maybe<CentralSystemUserCentralSystemUsersPkeyConnect>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  connectByNodeId?: Maybe<CentralSystemUserNodeIdConnect>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CentralSystemUserCentralSystemUsersPkeyDelete>;
  /** The primary key(s) for `centralSystemUser` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CentralSystemUserNodeIdDelete>;
  /** The primary key(s) and patch data for `centralSystemUser` for the far side of the relationship. */
  updateByIdToken?: Maybe<CentralSystemUserOnChargePointForChargePointsRegisteredByFkeyUsingCentralSystemUsersPkeyUpdate>;
  /** The primary key(s) and patch data for `centralSystemUser` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargePointOnChargePointForChargePointsRegisteredByFkeyNodeIdUpdate>;
  /** A `CentralSystemUserInput` object that will be created and connected to this object. */
  create?: Maybe<ChargePointsRegisteredByFkeyCentralSystemUsersCreateInput>;
};

/** Input for the nested mutation of `chargePoint` in the `CentralSystemUserInput` mutation. */
export type ChargePointsRegisteredByFkeyInverseInput = {
  /** Flag indicating whether all other `chargePoint` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectById?: Maybe<Array<ChargePointChargePointsPkeyConnect>>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargePointNodeIdConnect>>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteById?: Maybe<Array<ChargePointChargePointsPkeyDelete>>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargePointNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateById?: Maybe<Array<ChargePointOnChargePointForChargePointsRegisteredByFkeyUsingChargePointsPkeyUpdate>>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CentralSystemUserOnChargePointForChargePointsRegisteredByFkeyNodeIdUpdate>>;
  /** A `ChargePointInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargePointsRegisteredByFkeyChargePointsCreateInput>>;
};

export enum ChargePointStatus {
  Available = 'Available',
  Preparing = 'Preparing',
  Charging = 'Charging',
  SuspendedEvse = 'SuspendedEVSE',
  SuspendedEv = 'SuspendedEV',
  Finishing = 'Finishing',
  Reserved = 'Reserved',
  Unavailable = 'Unavailable',
  Faulted = 'Faulted'
}

/** A filter to be used against ChargePointStatus fields. All fields are combined with a logical ‘and.’ */
export type ChargePointStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ChargePointStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ChargePointStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ChargePointStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ChargePointStatus>;
  /** Included in the specified list. */
  in?: Maybe<Array<ChargePointStatus>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ChargePointStatus>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ChargePointStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ChargePointStatus>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ChargePointStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ChargePointStatus>;
};

export type ChargingPrice = {
   __typename?: 'ChargingPrice';
  score?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  matchedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ChargingPriceInput = {
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['String']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['String']>;
};

export type ChargingPricesConnection = {
   __typename?: 'ChargingPricesConnection';
  nodes: Array<Maybe<ChargingPrice>>;
};

export type ChargingProfile = Node & {
   __typename?: 'ChargingProfile';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  chargingProfileId: Scalars['Int'];
  transactionId?: Maybe<Scalars['Int']>;
  stackLevel: Scalars['Int'];
  chargingProfilePurpose: ChargingProfilePurposeType;
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  recurrencyKind?: Maybe<RecurrencyKindType>;
  validFrom?: Maybe<Scalars['Datetime']>;
  validTo?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Transaction` that is related to this `ChargingProfile`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** Reads and enables pagination through a set of `ChargingSchedule`. */
  chargingSchedulesByChargingProfileId: ChargingSchedulesConnection;
};


export type ChargingProfileChargingSchedulesByChargingProfileIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargingSchedulesOrderBy>>;
  condition?: Maybe<ChargingScheduleCondition>;
  filter?: Maybe<ChargingScheduleFilter>;
};

/** The fields on `chargingProfile` to look up the row to connect. */
export type ChargingProfileChargingProfilesPkeyConnect = {
  chargingProfileId: Scalars['Int'];
};

/** The fields on `chargingProfile` to look up the row to delete. */
export type ChargingProfileChargingProfilesPkeyDelete = {
  chargingProfileId: Scalars['Int'];
};

/** 
 * A condition to be used against `ChargingProfile` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ChargingProfileCondition = {
  /** Checks for equality with the object’s `chargingProfileId` field. */
  chargingProfileId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `transactionId` field. */
  transactionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `stackLevel` field. */
  stackLevel?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `chargingProfilePurpose` field. */
  chargingProfilePurpose?: Maybe<ChargingProfilePurposeType>;
  /** Checks for equality with the object’s `chargingProfileKind` field. */
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  /** Checks for equality with the object’s `recurrencyKind` field. */
  recurrencyKind?: Maybe<RecurrencyKindType>;
  /** Checks for equality with the object’s `validFrom` field. */
  validFrom?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `validTo` field. */
  validTo?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `ChargingProfile` object types. All fields are combined with a logical ‘and.’ */
export type ChargingProfileFilter = {
  /** Filter by the object’s `chargingProfileId` field. */
  chargingProfileId?: Maybe<IntFilter>;
  /** Filter by the object’s `transactionId` field. */
  transactionId?: Maybe<IntFilter>;
  /** Filter by the object’s `stackLevel` field. */
  stackLevel?: Maybe<IntFilter>;
  /** Filter by the object’s `chargingProfilePurpose` field. */
  chargingProfilePurpose?: Maybe<ChargingProfilePurposeTypeFilter>;
  /** Filter by the object’s `chargingProfileKind` field. */
  chargingProfileKind?: Maybe<ChargingProfileKindTypeFilter>;
  /** Filter by the object’s `recurrencyKind` field. */
  recurrencyKind?: Maybe<RecurrencyKindTypeFilter>;
  /** Filter by the object’s `validFrom` field. */
  validFrom?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `validTo` field. */
  validTo?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ChargingProfileFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ChargingProfileFilter>>;
  /** Negates the expression. */
  not?: Maybe<ChargingProfileFilter>;
};

/** An input for mutations affecting `ChargingProfile` */
export type ChargingProfileInput = {
  chargingProfileId?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  stackLevel?: Maybe<Scalars['Int']>;
  chargingProfilePurpose: ChargingProfilePurposeType;
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  recurrencyKind?: Maybe<RecurrencyKindType>;
  validFrom?: Maybe<Scalars['Datetime']>;
  validTo?: Maybe<Scalars['Datetime']>;
  transactionToTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInput>;
  chargingSchedulesUsingChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInverseInput>;
};

export enum ChargingProfileKindType {
  Absolute = 'Absolute',
  Recurring = 'Recurring',
  Relative = 'Relative'
}

/** A filter to be used against ChargingProfileKindType fields. All fields are combined with a logical ‘and.’ */
export type ChargingProfileKindTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ChargingProfileKindType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ChargingProfileKindType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ChargingProfileKindType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ChargingProfileKindType>;
  /** Included in the specified list. */
  in?: Maybe<Array<ChargingProfileKindType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ChargingProfileKindType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ChargingProfileKindType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ChargingProfileKindType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ChargingProfileKindType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ChargingProfileKindType>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ChargingProfileNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `chargingProfile` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ChargingProfileNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `chargingProfile` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargingProfileOnChargingProfileForChargingProfilesTransactionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `transaction` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** The fields on `chargingProfile` to look up the row to update. */
export type ChargingProfileOnChargingProfileForChargingProfilesTransactionIdFkeyUsingChargingProfilesPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargingProfile` being updated. */
  chargingProfilePatch: UpdateChargingProfileOnChargingProfileForChargingProfilesTransactionIdFkeyPatch;
  chargingProfileId: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargingProfileOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargingSchedule` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargingSchedule` being updated. */
  chargingSchedulePatch: ChargingSchedulePatch;
};

/** The fields on `chargingProfile` to look up the row to update. */
export type ChargingProfileOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyUsingChargingProfilesPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargingProfile` being updated. */
  chargingProfilePatch: UpdateChargingProfileOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyPatch;
  chargingProfileId: Scalars['Int'];
};

/** Represents an update to a `ChargingProfile`. Fields that are set will be updated. */
export type ChargingProfilePatch = {
  chargingProfileId?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  stackLevel?: Maybe<Scalars['Int']>;
  chargingProfilePurpose?: Maybe<ChargingProfilePurposeType>;
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  recurrencyKind?: Maybe<RecurrencyKindType>;
  validFrom?: Maybe<Scalars['Datetime']>;
  validTo?: Maybe<Scalars['Datetime']>;
  transactionToTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInput>;
  chargingSchedulesUsingChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInverseInput>;
};

export enum ChargingProfilePurposeType {
  ChargePointMaxProfile = 'ChargePointMaxProfile',
  TxDefaultProfile = 'TxDefaultProfile',
  TxProfile = 'TxProfile'
}

/** A filter to be used against ChargingProfilePurposeType fields. All fields are combined with a logical ‘and.’ */
export type ChargingProfilePurposeTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ChargingProfilePurposeType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ChargingProfilePurposeType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ChargingProfilePurposeType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ChargingProfilePurposeType>;
  /** Included in the specified list. */
  in?: Maybe<Array<ChargingProfilePurposeType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ChargingProfilePurposeType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ChargingProfilePurposeType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ChargingProfilePurposeType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ChargingProfilePurposeType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ChargingProfilePurposeType>;
};

/** A connection to a list of `ChargingProfile` values. */
export type ChargingProfilesConnection = {
   __typename?: 'ChargingProfilesConnection';
  /** A list of `ChargingProfile` objects. */
  nodes: Array<Maybe<ChargingProfile>>;
  /** A list of edges which contains the `ChargingProfile` and cursor to aid in pagination. */
  edges: Array<ChargingProfilesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChargingProfile` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ChargingProfile` edge in the connection. */
export type ChargingProfilesEdge = {
   __typename?: 'ChargingProfilesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChargingProfile` at the end of the edge. */
  node?: Maybe<ChargingProfile>;
};

/** Methods to use when ordering `ChargingProfile`. */
export enum ChargingProfilesOrderBy {
  Natural = 'NATURAL',
  ChargingProfileIdAsc = 'CHARGING_PROFILE_ID_ASC',
  ChargingProfileIdDesc = 'CHARGING_PROFILE_ID_DESC',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  StackLevelAsc = 'STACK_LEVEL_ASC',
  StackLevelDesc = 'STACK_LEVEL_DESC',
  ChargingProfilePurposeAsc = 'CHARGING_PROFILE_PURPOSE_ASC',
  ChargingProfilePurposeDesc = 'CHARGING_PROFILE_PURPOSE_DESC',
  ChargingProfileKindAsc = 'CHARGING_PROFILE_KIND_ASC',
  ChargingProfileKindDesc = 'CHARGING_PROFILE_KIND_DESC',
  RecurrencyKindAsc = 'RECURRENCY_KIND_ASC',
  RecurrencyKindDesc = 'RECURRENCY_KIND_DESC',
  ValidFromAsc = 'VALID_FROM_ASC',
  ValidFromDesc = 'VALID_FROM_DESC',
  ValidToAsc = 'VALID_TO_ASC',
  ValidToDesc = 'VALID_TO_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The `chargingProfile` to be created by this mutation. */
export type ChargingProfilesTransactionIdFkeyChargingProfilesCreateInput = {
  chargingProfileId?: Maybe<Scalars['Int']>;
  stackLevel?: Maybe<Scalars['Int']>;
  chargingProfilePurpose: ChargingProfilePurposeType;
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  recurrencyKind?: Maybe<RecurrencyKindType>;
  validFrom?: Maybe<Scalars['Datetime']>;
  validTo?: Maybe<Scalars['Datetime']>;
  transactionToTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInput>;
  chargingSchedulesUsingChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInverseInput>;
};

/** Input for the nested mutation of `transaction` in the `ChargingProfileInput` mutation. */
export type ChargingProfilesTransactionIdFkeyInput = {
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByTransactionId?: Maybe<TransactionTransactionsPkeyConnect>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByNodeId?: Maybe<TransactionNodeIdConnect>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByTransactionId?: Maybe<TransactionTransactionsPkeyDelete>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TransactionNodeIdDelete>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByTransactionId?: Maybe<TransactionOnChargingProfileForChargingProfilesTransactionIdFkeyUsingTransactionsPkeyUpdate>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargingProfileOnChargingProfileForChargingProfilesTransactionIdFkeyNodeIdUpdate>;
  /** A `TransactionInput` object that will be created and connected to this object. */
  create?: Maybe<ChargingProfilesTransactionIdFkeyTransactionsCreateInput>;
};

/** Input for the nested mutation of `chargingProfile` in the `TransactionInput` mutation. */
export type ChargingProfilesTransactionIdFkeyInverseInput = {
  /** Flag indicating whether all other `chargingProfile` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  connectByChargingProfileId?: Maybe<Array<ChargingProfileChargingProfilesPkeyConnect>>;
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargingProfileNodeIdConnect>>;
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  deleteByChargingProfileId?: Maybe<Array<ChargingProfileChargingProfilesPkeyDelete>>;
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargingProfileNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargingProfile` for the far side of the relationship. */
  updateByChargingProfileId?: Maybe<Array<ChargingProfileOnChargingProfileForChargingProfilesTransactionIdFkeyUsingChargingProfilesPkeyUpdate>>;
  /** The primary key(s) and patch data for `chargingProfile` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TransactionOnChargingProfileForChargingProfilesTransactionIdFkeyNodeIdUpdate>>;
  /** A `ChargingProfileInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargingProfilesTransactionIdFkeyChargingProfilesCreateInput>>;
};

/** The `transaction` to be created by this mutation. */
export type ChargingProfilesTransactionIdFkeyTransactionsCreateInput = {
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

export enum ChargingRateUnitType {
  W = 'W',
  A = 'A'
}

/** A filter to be used against ChargingRateUnitType fields. All fields are combined with a logical ‘and.’ */
export type ChargingRateUnitTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ChargingRateUnitType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ChargingRateUnitType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ChargingRateUnitType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ChargingRateUnitType>;
  /** Included in the specified list. */
  in?: Maybe<Array<ChargingRateUnitType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ChargingRateUnitType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ChargingRateUnitType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ChargingRateUnitType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ChargingRateUnitType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ChargingRateUnitType>;
};

export type ChargingSchedule = Node & {
   __typename?: 'ChargingSchedule';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  duration?: Maybe<Scalars['Int']>;
  startSchedule?: Maybe<Scalars['String']>;
  minChargingRate?: Maybe<Scalars['Float']>;
  chargingProfileId?: Maybe<Scalars['Int']>;
  chargingRateUnit: ChargingRateUnitType;
  /** Reads a single `ChargingProfile` that is related to this `ChargingSchedule`. */
  chargingProfileByChargingProfileId?: Maybe<ChargingProfile>;
  /** Reads and enables pagination through a set of `ChargingSchedulePeriod`. */
  chargingSchedulePeriodsByChargingScheduleUuid: ChargingSchedulePeriodsConnection;
};


export type ChargingScheduleChargingSchedulePeriodsByChargingScheduleUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargingSchedulePeriodsOrderBy>>;
  condition?: Maybe<ChargingSchedulePeriodCondition>;
  filter?: Maybe<ChargingSchedulePeriodFilter>;
};

/** The fields on `chargingSchedule` to look up the row to connect. */
export type ChargingScheduleChargingSchedulesPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `chargingSchedule` to look up the row to delete. */
export type ChargingScheduleChargingSchedulesPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** 
 * A condition to be used against `ChargingSchedule` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ChargingScheduleCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `duration` field. */
  duration?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `startSchedule` field. */
  startSchedule?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `minChargingRate` field. */
  minChargingRate?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `chargingProfileId` field. */
  chargingProfileId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `chargingRateUnit` field. */
  chargingRateUnit?: Maybe<ChargingRateUnitType>;
};

/** A filter to be used against `ChargingSchedule` object types. All fields are combined with a logical ‘and.’ */
export type ChargingScheduleFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `duration` field. */
  duration?: Maybe<IntFilter>;
  /** Filter by the object’s `startSchedule` field. */
  startSchedule?: Maybe<StringFilter>;
  /** Filter by the object’s `minChargingRate` field. */
  minChargingRate?: Maybe<FloatFilter>;
  /** Filter by the object’s `chargingProfileId` field. */
  chargingProfileId?: Maybe<IntFilter>;
  /** Filter by the object’s `chargingRateUnit` field. */
  chargingRateUnit?: Maybe<ChargingRateUnitTypeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ChargingScheduleFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ChargingScheduleFilter>>;
  /** Negates the expression. */
  not?: Maybe<ChargingScheduleFilter>;
};

/** An input for mutations affecting `ChargingSchedule` */
export type ChargingScheduleInput = {
  uuid?: Maybe<Scalars['UUID']>;
  duration?: Maybe<Scalars['Int']>;
  startSchedule?: Maybe<Scalars['String']>;
  minChargingRate?: Maybe<Scalars['Float']>;
  chargingProfileId?: Maybe<Scalars['Int']>;
  chargingRateUnit: ChargingRateUnitType;
  chargingProfileToChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInput>;
  chargingSchedulePeriodsUsingUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ChargingScheduleNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `chargingSchedule` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ChargingScheduleNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `chargingSchedule` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargingScheduleOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargingProfile` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargingProfile` being updated. */
  chargingProfilePatch: ChargingProfilePatch;
};

/** The fields on `chargingSchedule` to look up the row to update. */
export type ChargingScheduleOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyUsingChargingSchedulesPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargingSchedule` being updated. */
  chargingSchedulePatch: UpdateChargingScheduleOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargingScheduleOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargingSchedulePeriod` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargingSchedulePeriod` being updated. */
  chargingSchedulePeriodPatch: ChargingSchedulePeriodPatch;
};

/** The fields on `chargingSchedule` to look up the row to update. */
export type ChargingScheduleOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyUsingChargingSchedulesPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargingSchedule` being updated. */
  chargingSchedulePatch: UpdateChargingScheduleOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `ChargingSchedule`. Fields that are set will be updated. */
export type ChargingSchedulePatch = {
  uuid?: Maybe<Scalars['UUID']>;
  duration?: Maybe<Scalars['Int']>;
  startSchedule?: Maybe<Scalars['String']>;
  minChargingRate?: Maybe<Scalars['Float']>;
  chargingProfileId?: Maybe<Scalars['Int']>;
  chargingRateUnit?: Maybe<ChargingRateUnitType>;
  chargingProfileToChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInput>;
  chargingSchedulePeriodsUsingUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInverseInput>;
};

export type ChargingSchedulePeriod = Node & {
   __typename?: 'ChargingSchedulePeriod';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  chargingScheduleUuid?: Maybe<Scalars['UUID']>;
  limit: Scalars['Float'];
  numberPhases?: Maybe<Scalars['Int']>;
  startPeriod: Scalars['Int'];
  /** Reads a single `ChargingSchedule` that is related to this `ChargingSchedulePeriod`. */
  chargingScheduleByChargingScheduleUuid?: Maybe<ChargingSchedule>;
};

/** The fields on `chargingSchedulePeriod` to look up the row to connect. */
export type ChargingSchedulePeriodChargingSchedulePeriodsPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `chargingSchedulePeriod` to look up the row to delete. */
export type ChargingSchedulePeriodChargingSchedulePeriodsPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** 
 * A condition to be used against `ChargingSchedulePeriod` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type ChargingSchedulePeriodCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `chargingScheduleUuid` field. */
  chargingScheduleUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `limit` field. */
  limit?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `numberPhases` field. */
  numberPhases?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `startPeriod` field. */
  startPeriod?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `ChargingSchedulePeriod` object types. All fields are combined with a logical ‘and.’ */
export type ChargingSchedulePeriodFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `chargingScheduleUuid` field. */
  chargingScheduleUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `limit` field. */
  limit?: Maybe<FloatFilter>;
  /** Filter by the object’s `numberPhases` field. */
  numberPhases?: Maybe<IntFilter>;
  /** Filter by the object’s `startPeriod` field. */
  startPeriod?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ChargingSchedulePeriodFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ChargingSchedulePeriodFilter>>;
  /** Negates the expression. */
  not?: Maybe<ChargingSchedulePeriodFilter>;
};

/** An input for mutations affecting `ChargingSchedulePeriod` */
export type ChargingSchedulePeriodInput = {
  uuid?: Maybe<Scalars['UUID']>;
  chargingScheduleUuid?: Maybe<Scalars['UUID']>;
  limit: Scalars['Float'];
  numberPhases?: Maybe<Scalars['Int']>;
  startPeriod: Scalars['Int'];
  chargingScheduleToChargingScheduleUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ChargingSchedulePeriodNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `chargingSchedulePeriod` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ChargingSchedulePeriodNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `chargingSchedulePeriod` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ChargingSchedulePeriodOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargingSchedule` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargingSchedule` being updated. */
  chargingSchedulePatch: ChargingSchedulePatch;
};

/** The fields on `chargingSchedulePeriod` to look up the row to update. */
export type ChargingSchedulePeriodOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyUsingChargingSchedulePeriodsPkeyUpdate = {
  /** An object where the defined keys will be set on the `chargingSchedulePeriod` being updated. */
  chargingSchedulePeriodPatch: UpdateChargingSchedulePeriodOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `ChargingSchedulePeriod`. Fields that are set will be updated. */
export type ChargingSchedulePeriodPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  chargingScheduleUuid?: Maybe<Scalars['UUID']>;
  limit?: Maybe<Scalars['Float']>;
  numberPhases?: Maybe<Scalars['Int']>;
  startPeriod?: Maybe<Scalars['Int']>;
  chargingScheduleToChargingScheduleUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInput>;
};

/** The `chargingSchedulePeriod` to be created by this mutation. */
export type ChargingSchedulePeriodsChargingScheduleUuidFkeyChargingSchedulePeriodsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  limit: Scalars['Float'];
  numberPhases?: Maybe<Scalars['Int']>;
  startPeriod: Scalars['Int'];
  chargingScheduleToChargingScheduleUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInput>;
};

/** The `chargingSchedule` to be created by this mutation. */
export type ChargingSchedulePeriodsChargingScheduleUuidFkeyChargingSchedulesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  duration?: Maybe<Scalars['Int']>;
  startSchedule?: Maybe<Scalars['String']>;
  minChargingRate?: Maybe<Scalars['Float']>;
  chargingProfileId?: Maybe<Scalars['Int']>;
  chargingRateUnit: ChargingRateUnitType;
  chargingProfileToChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInput>;
  chargingSchedulePeriodsUsingUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `chargingSchedule` in the `ChargingSchedulePeriodInput` mutation. */
export type ChargingSchedulePeriodsChargingScheduleUuidFkeyInput = {
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  connectByUuid?: Maybe<ChargingScheduleChargingSchedulesPkeyConnect>;
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  connectByNodeId?: Maybe<ChargingScheduleNodeIdConnect>;
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  deleteByUuid?: Maybe<ChargingScheduleChargingSchedulesPkeyDelete>;
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ChargingScheduleNodeIdDelete>;
  /** The primary key(s) and patch data for `chargingSchedule` for the far side of the relationship. */
  updateByUuid?: Maybe<ChargingScheduleOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyUsingChargingSchedulesPkeyUpdate>;
  /** The primary key(s) and patch data for `chargingSchedule` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargingSchedulePeriodOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyNodeIdUpdate>;
  /** A `ChargingScheduleInput` object that will be created and connected to this object. */
  create?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyChargingSchedulesCreateInput>;
};

/** Input for the nested mutation of `chargingSchedulePeriod` in the `ChargingScheduleInput` mutation. */
export type ChargingSchedulePeriodsChargingScheduleUuidFkeyInverseInput = {
  /** Flag indicating whether all other `chargingSchedulePeriod` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargingSchedulePeriod` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ChargingSchedulePeriodChargingSchedulePeriodsPkeyConnect>>;
  /** The primary key(s) for `chargingSchedulePeriod` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargingSchedulePeriodNodeIdConnect>>;
  /** The primary key(s) for `chargingSchedulePeriod` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ChargingSchedulePeriodChargingSchedulePeriodsPkeyDelete>>;
  /** The primary key(s) for `chargingSchedulePeriod` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargingSchedulePeriodNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargingSchedulePeriod` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ChargingSchedulePeriodOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyUsingChargingSchedulePeriodsPkeyUpdate>>;
  /** The primary key(s) and patch data for `chargingSchedulePeriod` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ChargingScheduleOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyNodeIdUpdate>>;
  /** A `ChargingSchedulePeriodInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargingSchedulePeriodsChargingScheduleUuidFkeyChargingSchedulePeriodsCreateInput>>;
};

/** A connection to a list of `ChargingSchedulePeriod` values. */
export type ChargingSchedulePeriodsConnection = {
   __typename?: 'ChargingSchedulePeriodsConnection';
  /** A list of `ChargingSchedulePeriod` objects. */
  nodes: Array<Maybe<ChargingSchedulePeriod>>;
  /** A list of edges which contains the `ChargingSchedulePeriod` and cursor to aid in pagination. */
  edges: Array<ChargingSchedulePeriodsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChargingSchedulePeriod` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ChargingSchedulePeriod` edge in the connection. */
export type ChargingSchedulePeriodsEdge = {
   __typename?: 'ChargingSchedulePeriodsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChargingSchedulePeriod` at the end of the edge. */
  node?: Maybe<ChargingSchedulePeriod>;
};

/** Methods to use when ordering `ChargingSchedulePeriod`. */
export enum ChargingSchedulePeriodsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  ChargingScheduleUuidAsc = 'CHARGING_SCHEDULE_UUID_ASC',
  ChargingScheduleUuidDesc = 'CHARGING_SCHEDULE_UUID_DESC',
  LimitAsc = 'LIMIT_ASC',
  LimitDesc = 'LIMIT_DESC',
  NumberPhasesAsc = 'NUMBER_PHASES_ASC',
  NumberPhasesDesc = 'NUMBER_PHASES_DESC',
  StartPeriodAsc = 'START_PERIOD_ASC',
  StartPeriodDesc = 'START_PERIOD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The `chargingProfile` to be created by this mutation. */
export type ChargingSchedulesChargingProfileIdFkeyChargingProfilesCreateInput = {
  transactionId?: Maybe<Scalars['Int']>;
  stackLevel?: Maybe<Scalars['Int']>;
  chargingProfilePurpose: ChargingProfilePurposeType;
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  recurrencyKind?: Maybe<RecurrencyKindType>;
  validFrom?: Maybe<Scalars['Datetime']>;
  validTo?: Maybe<Scalars['Datetime']>;
  transactionToTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInput>;
  chargingSchedulesUsingChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInverseInput>;
};

/** The `chargingSchedule` to be created by this mutation. */
export type ChargingSchedulesChargingProfileIdFkeyChargingSchedulesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  duration?: Maybe<Scalars['Int']>;
  startSchedule?: Maybe<Scalars['String']>;
  minChargingRate?: Maybe<Scalars['Float']>;
  chargingRateUnit: ChargingRateUnitType;
  chargingProfileToChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInput>;
  chargingSchedulePeriodsUsingUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `chargingProfile` in the `ChargingScheduleInput` mutation. */
export type ChargingSchedulesChargingProfileIdFkeyInput = {
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  connectByChargingProfileId?: Maybe<ChargingProfileChargingProfilesPkeyConnect>;
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  connectByNodeId?: Maybe<ChargingProfileNodeIdConnect>;
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  deleteByChargingProfileId?: Maybe<ChargingProfileChargingProfilesPkeyDelete>;
  /** The primary key(s) for `chargingProfile` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ChargingProfileNodeIdDelete>;
  /** The primary key(s) and patch data for `chargingProfile` for the far side of the relationship. */
  updateByChargingProfileId?: Maybe<ChargingProfileOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyUsingChargingProfilesPkeyUpdate>;
  /** The primary key(s) and patch data for `chargingProfile` for the far side of the relationship. */
  updateByNodeId?: Maybe<ChargingScheduleOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyNodeIdUpdate>;
  /** A `ChargingProfileInput` object that will be created and connected to this object. */
  create?: Maybe<ChargingSchedulesChargingProfileIdFkeyChargingProfilesCreateInput>;
};

/** Input for the nested mutation of `chargingSchedule` in the `ChargingProfileInput` mutation. */
export type ChargingSchedulesChargingProfileIdFkeyInverseInput = {
  /** Flag indicating whether all other `chargingSchedule` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ChargingScheduleChargingSchedulesPkeyConnect>>;
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ChargingScheduleNodeIdConnect>>;
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ChargingScheduleChargingSchedulesPkeyDelete>>;
  /** The primary key(s) for `chargingSchedule` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ChargingScheduleNodeIdDelete>>;
  /** The primary key(s) and patch data for `chargingSchedule` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ChargingScheduleOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyUsingChargingSchedulesPkeyUpdate>>;
  /** The primary key(s) and patch data for `chargingSchedule` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ChargingProfileOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyNodeIdUpdate>>;
  /** A `ChargingScheduleInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ChargingSchedulesChargingProfileIdFkeyChargingSchedulesCreateInput>>;
};

/** A connection to a list of `ChargingSchedule` values. */
export type ChargingSchedulesConnection = {
   __typename?: 'ChargingSchedulesConnection';
  /** A list of `ChargingSchedule` objects. */
  nodes: Array<Maybe<ChargingSchedule>>;
  /** A list of edges which contains the `ChargingSchedule` and cursor to aid in pagination. */
  edges: Array<ChargingSchedulesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChargingSchedule` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ChargingSchedule` edge in the connection. */
export type ChargingSchedulesEdge = {
   __typename?: 'ChargingSchedulesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ChargingSchedule` at the end of the edge. */
  node?: Maybe<ChargingSchedule>;
};

/** Methods to use when ordering `ChargingSchedule`. */
export enum ChargingSchedulesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  StartScheduleAsc = 'START_SCHEDULE_ASC',
  StartScheduleDesc = 'START_SCHEDULE_DESC',
  MinChargingRateAsc = 'MIN_CHARGING_RATE_ASC',
  MinChargingRateDesc = 'MIN_CHARGING_RATE_DESC',
  ChargingProfileIdAsc = 'CHARGING_PROFILE_ID_ASC',
  ChargingProfileIdDesc = 'CHARGING_PROFILE_ID_DESC',
  ChargingRateUnitAsc = 'CHARGING_RATE_UNIT_ASC',
  ChargingRateUnitDesc = 'CHARGING_RATE_UNIT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CheckPaymentInput = {
  yandexId?: Maybe<Scalars['String']>;
};

export type CheckPaymentResponse = {
   __typename?: 'CheckPaymentResponse';
  status?: Maybe<YandexPaymentStatus>;
};

export type ConfigurationKey = Node & {
   __typename?: 'ConfigurationKey';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  isRequired: Scalars['Boolean'];
  accessibility: ConfigurationKeyAccessibility;
  type: Scalars['String'];
  description: Scalars['String'];
  defaultValue?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export enum ConfigurationKeyAccessibility {
  Rw = 'RW',
  R = 'R'
}

/** A filter to be used against ConfigurationKeyAccessibility fields. All fields are combined with a logical ‘and.’ */
export type ConfigurationKeyAccessibilityFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ConfigurationKeyAccessibility>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ConfigurationKeyAccessibility>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ConfigurationKeyAccessibility>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ConfigurationKeyAccessibility>;
  /** Included in the specified list. */
  in?: Maybe<Array<ConfigurationKeyAccessibility>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ConfigurationKeyAccessibility>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ConfigurationKeyAccessibility>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ConfigurationKeyAccessibility>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ConfigurationKeyAccessibility>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ConfigurationKeyAccessibility>;
};

/** 
 * A condition to be used against `ConfigurationKey` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ConfigurationKeyCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `isRequired` field. */
  isRequired?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `accessibility` field. */
  accessibility?: Maybe<ConfigurationKeyAccessibility>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `defaultValue` field. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `unit` field. */
  unit?: Maybe<Scalars['String']>;
};

/** A filter to be used against `ConfigurationKey` object types. All fields are combined with a logical ‘and.’ */
export type ConfigurationKeyFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `isRequired` field. */
  isRequired?: Maybe<BooleanFilter>;
  /** Filter by the object’s `accessibility` field. */
  accessibility?: Maybe<ConfigurationKeyAccessibilityFilter>;
  /** Filter by the object’s `type` field. */
  type?: Maybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `defaultValue` field. */
  defaultValue?: Maybe<StringFilter>;
  /** Filter by the object’s `unit` field. */
  unit?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ConfigurationKeyFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ConfigurationKeyFilter>>;
  /** Negates the expression. */
  not?: Maybe<ConfigurationKeyFilter>;
};

/** An input for mutations affecting `ConfigurationKey` */
export type ConfigurationKeyInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  isRequired: Scalars['Boolean'];
  accessibility: ConfigurationKeyAccessibility;
  type: Scalars['String'];
  description: Scalars['String'];
  defaultValue?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** Represents an update to a `ConfigurationKey`. Fields that are set will be updated. */
export type ConfigurationKeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  accessibility?: Maybe<ConfigurationKeyAccessibility>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

/** A connection to a list of `ConfigurationKey` values. */
export type ConfigurationKeysConnection = {
   __typename?: 'ConfigurationKeysConnection';
  /** A list of `ConfigurationKey` objects. */
  nodes: Array<Maybe<ConfigurationKey>>;
  /** A list of edges which contains the `ConfigurationKey` and cursor to aid in pagination. */
  edges: Array<ConfigurationKeysEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ConfigurationKey` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ConfigurationKey` edge in the connection. */
export type ConfigurationKeysEdge = {
   __typename?: 'ConfigurationKeysEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ConfigurationKey` at the end of the edge. */
  node?: Maybe<ConfigurationKey>;
};

/** Methods to use when ordering `ConfigurationKey`. */
export enum ConfigurationKeysOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IsRequiredAsc = 'IS_REQUIRED_ASC',
  IsRequiredDesc = 'IS_REQUIRED_DESC',
  AccessibilityAsc = 'ACCESSIBILITY_ASC',
  AccessibilityDesc = 'ACCESSIBILITY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DefaultValueAsc = 'DEFAULT_VALUE_ASC',
  DefaultValueDesc = 'DEFAULT_VALUE_DESC',
  UnitAsc = 'UNIT_ASC',
  UnitDesc = 'UNIT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Connector = Node & {
   __typename?: 'Connector';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  /** Reads a single `ChargePoint` that is related to this `Connector`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Connector`. */
  connectorTypeByTypeUuid?: Maybe<ConnectorType>;
  /** Reads and enables pagination through a set of `ConnectorStatus`. */
  connectorStatusesByConnectorUuid: ConnectorStatusesConnection;
  /** Reads and enables pagination through a set of `Transaction`. */
  transactionsByConnectorUuid: TransactionsConnection;
  /** Reads and enables pagination through a set of `Price`. */
  pricesByConnectorUuid: PricesConnection;
};


export type ConnectorConnectorStatusesByConnectorUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ConnectorStatusesOrderBy>>;
  condition?: Maybe<ConnectorStatusCondition>;
  filter?: Maybe<ConnectorStatusFilter>;
};


export type ConnectorTransactionsByConnectorUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
  condition?: Maybe<TransactionCondition>;
  filter?: Maybe<TransactionFilter>;
};


export type ConnectorPricesByConnectorUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PricesOrderBy>>;
  condition?: Maybe<PriceCondition>;
  filter?: Maybe<PriceFilter>;
};

/** 
 * A condition to be used against `Connector` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ConnectorCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `connectorId` field. */
  connectorId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `chargePointId` field. */
  chargePointId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `typeUuid` field. */
  typeUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `maxPower` field. */
  maxPower?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `maxCurrent` field. */
  maxCurrent?: Maybe<Scalars['Float']>;
};

/** The fields on `connector` to look up the row to connect. */
export type ConnectorConnectorsPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `connector` to look up the row to delete. */
export type ConnectorConnectorsPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** A filter to be used against `Connector` object types. All fields are combined with a logical ‘and.’ */
export type ConnectorFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `connectorId` field. */
  connectorId?: Maybe<IntFilter>;
  /** Filter by the object’s `chargePointId` field. */
  chargePointId?: Maybe<StringFilter>;
  /** Filter by the object’s `typeUuid` field. */
  typeUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `maxPower` field. */
  maxPower?: Maybe<FloatFilter>;
  /** Filter by the object’s `maxCurrent` field. */
  maxCurrent?: Maybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ConnectorFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ConnectorFilter>>;
  /** Negates the expression. */
  not?: Maybe<ConnectorFilter>;
};

/** An input for mutations affecting `Connector` */
export type ConnectorInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ConnectorNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `connector` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ConnectorNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `connector` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorOnConnectorForConnectorsChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** The fields on `connector` to look up the row to update. */
export type ConnectorOnConnectorForConnectorsChargePointIdFkeyUsingConnectorsPkeyUpdate = {
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: UpdateConnectorOnConnectorForConnectorsChargePointIdFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorOnConnectorForConnectorsTypeUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connectorType` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connectorType` being updated. */
  connectorTypePatch: ConnectorTypePatch;
};

/** The fields on `connector` to look up the row to update. */
export type ConnectorOnConnectorForConnectorsTypeUuidFkeyUsingConnectorsPkeyUpdate = {
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: UpdateConnectorOnConnectorForConnectorsTypeUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorOnConnectorStatusForConnectorStatusesConnectorUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connectorStatus` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connectorStatus` being updated. */
  connectorStatusPatch: ConnectorStatusPatch;
};

/** The fields on `connector` to look up the row to update. */
export type ConnectorOnConnectorStatusForConnectorStatusesConnectorUuidFkeyUsingConnectorsPkeyUpdate = {
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: UpdateConnectorOnConnectorStatusForConnectorStatusesConnectorUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorOnPriceForPricesConnectorUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `price` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: PricePatch;
};

/** The fields on `connector` to look up the row to update. */
export type ConnectorOnPriceForPricesConnectorUuidFkeyUsingConnectorsPkeyUpdate = {
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: UpdateConnectorOnPriceForPricesConnectorUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorOnTransactionForTransactionsConnectorUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `transaction` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** The fields on `connector` to look up the row to update. */
export type ConnectorOnTransactionForTransactionsConnectorUuidFkeyUsingConnectorsPkeyUpdate = {
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: UpdateConnectorOnTransactionForTransactionsConnectorUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `Connector`. Fields that are set will be updated. */
export type ConnectorPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** The `chargePoint` to be created by this mutation. */
export type ConnectorsChargePointIdFkeyChargePointsCreateInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** The `connector` to be created by this mutation. */
export type ConnectorsChargePointIdFkeyConnectorsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `chargePoint` in the `ConnectorInput` mutation. */
export type ConnectorsChargePointIdFkeyInput = {
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectById?: Maybe<ChargePointChargePointsPkeyConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectByNodeId?: Maybe<ChargePointNodeIdConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteById?: Maybe<ChargePointChargePointsPkeyDelete>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ChargePointNodeIdDelete>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateById?: Maybe<ChargePointOnConnectorForConnectorsChargePointIdFkeyUsingChargePointsPkeyUpdate>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateByNodeId?: Maybe<ConnectorOnConnectorForConnectorsChargePointIdFkeyNodeIdUpdate>;
  /** A `ChargePointInput` object that will be created and connected to this object. */
  create?: Maybe<ConnectorsChargePointIdFkeyChargePointsCreateInput>;
};

/** Input for the nested mutation of `connector` in the `ChargePointInput` mutation. */
export type ConnectorsChargePointIdFkeyInverseInput = {
  /** Flag indicating whether all other `connector` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ConnectorConnectorsPkeyConnect>>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ConnectorNodeIdConnect>>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ConnectorConnectorsPkeyDelete>>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ConnectorNodeIdDelete>>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ConnectorOnConnectorForConnectorsChargePointIdFkeyUsingConnectorsPkeyUpdate>>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ChargePointOnConnectorForConnectorsChargePointIdFkeyNodeIdUpdate>>;
  /** A `ConnectorInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ConnectorsChargePointIdFkeyConnectorsCreateInput>>;
};

/** A connection to a list of `Connector` values. */
export type ConnectorsConnection = {
   __typename?: 'ConnectorsConnection';
  /** A list of `Connector` objects. */
  nodes: Array<Maybe<Connector>>;
  /** A list of edges which contains the `Connector` and cursor to aid in pagination. */
  edges: Array<ConnectorsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Connector` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Connector` edge in the connection. */
export type ConnectorsEdge = {
   __typename?: 'ConnectorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Connector` at the end of the edge. */
  node?: Maybe<Connector>;
};

/** Methods to use when ordering `Connector`. */
export enum ConnectorsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  ConnectorIdAsc = 'CONNECTOR_ID_ASC',
  ConnectorIdDesc = 'CONNECTOR_ID_DESC',
  ChargePointIdAsc = 'CHARGE_POINT_ID_ASC',
  ChargePointIdDesc = 'CHARGE_POINT_ID_DESC',
  TypeUuidAsc = 'TYPE_UUID_ASC',
  TypeUuidDesc = 'TYPE_UUID_DESC',
  MaxPowerAsc = 'MAX_POWER_ASC',
  MaxPowerDesc = 'MAX_POWER_DESC',
  MaxCurrentAsc = 'MAX_CURRENT_ASC',
  MaxCurrentDesc = 'MAX_CURRENT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ConnectorStatus = Node & {
   __typename?: 'ConnectorStatus';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  connectorUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<ChargePointStatus>;
  errorCode?: Maybe<ChargePointErrorCode>;
  info?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
  vendorErrorCode?: Maybe<Scalars['String']>;
  timestamptz?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Connector` that is related to this `ConnectorStatus`. */
  connectorByConnectorUuid?: Maybe<Connector>;
};

/** 
 * A condition to be used against `ConnectorStatus` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ConnectorStatusCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `connectorUuid` field. */
  connectorUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<ChargePointStatus>;
  /** Checks for equality with the object’s `errorCode` field. */
  errorCode?: Maybe<ChargePointErrorCode>;
  /** Checks for equality with the object’s `info` field. */
  info?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `vendorId` field. */
  vendorId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `vendorErrorCode` field. */
  vendorErrorCode?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `timestamptz` field. */
  timestamptz?: Maybe<Scalars['Datetime']>;
};

/** The fields on `connectorStatus` to look up the row to connect. */
export type ConnectorStatusConnectorStatusesPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `connectorStatus` to look up the row to delete. */
export type ConnectorStatusConnectorStatusesPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** A connection to a list of `ConnectorStatus` values. */
export type ConnectorStatusesConnection = {
   __typename?: 'ConnectorStatusesConnection';
  /** A list of `ConnectorStatus` objects. */
  nodes: Array<Maybe<ConnectorStatus>>;
  /** A list of edges which contains the `ConnectorStatus` and cursor to aid in pagination. */
  edges: Array<ConnectorStatusesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ConnectorStatus` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** The `connector` to be created by this mutation. */
export type ConnectorStatusesConnectorUuidFkeyConnectorsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** The `connectorStatus` to be created by this mutation. */
export type ConnectorStatusesConnectorUuidFkeyConnectorStatusesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<ChargePointStatus>;
  errorCode?: Maybe<ChargePointErrorCode>;
  info?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
  vendorErrorCode?: Maybe<Scalars['String']>;
  timestamptz?: Maybe<Scalars['Datetime']>;
  connectorToConnectorUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInput>;
};

/** Input for the nested mutation of `connector` in the `ConnectorStatusInput` mutation. */
export type ConnectorStatusesConnectorUuidFkeyInput = {
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByUuid?: Maybe<ConnectorConnectorsPkeyConnect>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByNodeId?: Maybe<ConnectorNodeIdConnect>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByUuid?: Maybe<ConnectorConnectorsPkeyDelete>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ConnectorNodeIdDelete>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByUuid?: Maybe<ConnectorOnConnectorStatusForConnectorStatusesConnectorUuidFkeyUsingConnectorsPkeyUpdate>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByNodeId?: Maybe<ConnectorStatusOnConnectorStatusForConnectorStatusesConnectorUuidFkeyNodeIdUpdate>;
  /** A `ConnectorInput` object that will be created and connected to this object. */
  create?: Maybe<ConnectorStatusesConnectorUuidFkeyConnectorsCreateInput>;
};

/** Input for the nested mutation of `connectorStatus` in the `ConnectorInput` mutation. */
export type ConnectorStatusesConnectorUuidFkeyInverseInput = {
  /** Flag indicating whether all other `connectorStatus` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `connectorStatus` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ConnectorStatusConnectorStatusesPkeyConnect>>;
  /** The primary key(s) for `connectorStatus` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ConnectorStatusNodeIdConnect>>;
  /** The primary key(s) for `connectorStatus` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ConnectorStatusConnectorStatusesPkeyDelete>>;
  /** The primary key(s) for `connectorStatus` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ConnectorStatusNodeIdDelete>>;
  /** The primary key(s) and patch data for `connectorStatus` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ConnectorStatusOnConnectorStatusForConnectorStatusesConnectorUuidFkeyUsingConnectorStatusesPkeyUpdate>>;
  /** The primary key(s) and patch data for `connectorStatus` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ConnectorOnConnectorStatusForConnectorStatusesConnectorUuidFkeyNodeIdUpdate>>;
  /** A `ConnectorStatusInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ConnectorStatusesConnectorUuidFkeyConnectorStatusesCreateInput>>;
};

/** A `ConnectorStatus` edge in the connection. */
export type ConnectorStatusesEdge = {
   __typename?: 'ConnectorStatusesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ConnectorStatus` at the end of the edge. */
  node?: Maybe<ConnectorStatus>;
};

/** Methods to use when ordering `ConnectorStatus`. */
export enum ConnectorStatusesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  ConnectorUuidAsc = 'CONNECTOR_UUID_ASC',
  ConnectorUuidDesc = 'CONNECTOR_UUID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  ErrorCodeAsc = 'ERROR_CODE_ASC',
  ErrorCodeDesc = 'ERROR_CODE_DESC',
  InfoAsc = 'INFO_ASC',
  InfoDesc = 'INFO_DESC',
  VendorIdAsc = 'VENDOR_ID_ASC',
  VendorIdDesc = 'VENDOR_ID_DESC',
  VendorErrorCodeAsc = 'VENDOR_ERROR_CODE_ASC',
  VendorErrorCodeDesc = 'VENDOR_ERROR_CODE_DESC',
  TimestamptzAsc = 'TIMESTAMPTZ_ASC',
  TimestamptzDesc = 'TIMESTAMPTZ_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against `ConnectorStatus` object types. All fields are combined with a logical ‘and.’ */
export type ConnectorStatusFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `connectorUuid` field. */
  connectorUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<ChargePointStatusFilter>;
  /** Filter by the object’s `errorCode` field. */
  errorCode?: Maybe<ChargePointErrorCodeFilter>;
  /** Filter by the object’s `info` field. */
  info?: Maybe<StringFilter>;
  /** Filter by the object’s `vendorId` field. */
  vendorId?: Maybe<StringFilter>;
  /** Filter by the object’s `vendorErrorCode` field. */
  vendorErrorCode?: Maybe<StringFilter>;
  /** Filter by the object’s `timestamptz` field. */
  timestamptz?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ConnectorStatusFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ConnectorStatusFilter>>;
  /** Negates the expression. */
  not?: Maybe<ConnectorStatusFilter>;
};

/** An input for mutations affecting `ConnectorStatus` */
export type ConnectorStatusInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<ChargePointStatus>;
  errorCode?: Maybe<ChargePointErrorCode>;
  info?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
  vendorErrorCode?: Maybe<Scalars['String']>;
  timestamptz?: Maybe<Scalars['Datetime']>;
  connectorToConnectorUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ConnectorStatusNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `connectorStatus` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ConnectorStatusNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `connectorStatus` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorStatusOnConnectorStatusForConnectorStatusesConnectorUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connector` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: ConnectorPatch;
};

/** The fields on `connectorStatus` to look up the row to update. */
export type ConnectorStatusOnConnectorStatusForConnectorStatusesConnectorUuidFkeyUsingConnectorStatusesPkeyUpdate = {
  /** An object where the defined keys will be set on the `connectorStatus` being updated. */
  connectorStatusPatch: UpdateConnectorStatusOnConnectorStatusForConnectorStatusesConnectorUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `ConnectorStatus`. Fields that are set will be updated. */
export type ConnectorStatusPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<ChargePointStatus>;
  errorCode?: Maybe<ChargePointErrorCode>;
  info?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
  vendorErrorCode?: Maybe<Scalars['String']>;
  timestamptz?: Maybe<Scalars['Datetime']>;
  connectorToConnectorUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInput>;
};

/** The `connector` to be created by this mutation. */
export type ConnectorsTypeUuidFkeyConnectorsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** The `connectorType` to be created by this mutation. */
export type ConnectorsTypeUuidFkeyConnectorTypesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPower: Scalars['Float'];
  maxCurrent: Scalars['Float'];
  name: Scalars['String'];
  connectorsUsingUuid?: Maybe<ConnectorsTypeUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorTypeUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `connectorType` in the `ConnectorInput` mutation. */
export type ConnectorsTypeUuidFkeyInput = {
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  connectByUuid?: Maybe<ConnectorTypeConnectorTypesPkeyConnect>;
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  connectByNodeId?: Maybe<ConnectorTypeNodeIdConnect>;
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  deleteByUuid?: Maybe<ConnectorTypeConnectorTypesPkeyDelete>;
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ConnectorTypeNodeIdDelete>;
  /** The primary key(s) and patch data for `connectorType` for the far side of the relationship. */
  updateByUuid?: Maybe<ConnectorTypeOnConnectorForConnectorsTypeUuidFkeyUsingConnectorTypesPkeyUpdate>;
  /** The primary key(s) and patch data for `connectorType` for the far side of the relationship. */
  updateByNodeId?: Maybe<ConnectorOnConnectorForConnectorsTypeUuidFkeyNodeIdUpdate>;
  /** A `ConnectorTypeInput` object that will be created and connected to this object. */
  create?: Maybe<ConnectorsTypeUuidFkeyConnectorTypesCreateInput>;
};

/** Input for the nested mutation of `connector` in the `ConnectorTypeInput` mutation. */
export type ConnectorsTypeUuidFkeyInverseInput = {
  /** Flag indicating whether all other `connector` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<ConnectorConnectorsPkeyConnect>>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<ConnectorNodeIdConnect>>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<ConnectorConnectorsPkeyDelete>>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<ConnectorNodeIdDelete>>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<ConnectorOnConnectorForConnectorsTypeUuidFkeyUsingConnectorsPkeyUpdate>>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ConnectorTypeOnConnectorForConnectorsTypeUuidFkeyNodeIdUpdate>>;
  /** A `ConnectorInput` object that will be created and connected to this object. */
  create?: Maybe<Array<ConnectorsTypeUuidFkeyConnectorsCreateInput>>;
};

export type ConnectorType = Node & {
   __typename?: 'ConnectorType';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  imageUrl?: Maybe<Scalars['String']>;
  maxPower: Scalars['Float'];
  maxCurrent: Scalars['Float'];
  name: Scalars['String'];
  /** Reads and enables pagination through a set of `Connector`. */
  connectorsByTypeUuid: ConnectorsConnection;
  /** Reads and enables pagination through a set of `Price`. */
  pricesByConnectorTypeUuid: PricesConnection;
};


export type ConnectorTypeConnectorsByTypeUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ConnectorsOrderBy>>;
  condition?: Maybe<ConnectorCondition>;
  filter?: Maybe<ConnectorFilter>;
};


export type ConnectorTypePricesByConnectorTypeUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PricesOrderBy>>;
  condition?: Maybe<PriceCondition>;
  filter?: Maybe<PriceFilter>;
};

/** 
 * A condition to be used against `ConnectorType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ConnectorTypeCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `imageUrl` field. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `maxPower` field. */
  maxPower?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `maxCurrent` field. */
  maxCurrent?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** The fields on `connectorType` to look up the row to connect. */
export type ConnectorTypeConnectorTypesPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `connectorType` to look up the row to delete. */
export type ConnectorTypeConnectorTypesPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** A filter to be used against `ConnectorType` object types. All fields are combined with a logical ‘and.’ */
export type ConnectorTypeFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `imageUrl` field. */
  imageUrl?: Maybe<StringFilter>;
  /** Filter by the object’s `maxPower` field. */
  maxPower?: Maybe<FloatFilter>;
  /** Filter by the object’s `maxCurrent` field. */
  maxCurrent?: Maybe<FloatFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ConnectorTypeFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ConnectorTypeFilter>>;
  /** Negates the expression. */
  not?: Maybe<ConnectorTypeFilter>;
};

/** An input for mutations affecting `ConnectorType` */
export type ConnectorTypeInput = {
  uuid?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPower: Scalars['Float'];
  maxCurrent: Scalars['Float'];
  name: Scalars['String'];
  connectorsUsingUuid?: Maybe<ConnectorsTypeUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorTypeUuidFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type ConnectorTypeNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `connectorType` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type ConnectorTypeNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `connectorType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorTypeOnConnectorForConnectorsTypeUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connector` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: ConnectorPatch;
};

/** The fields on `connectorType` to look up the row to update. */
export type ConnectorTypeOnConnectorForConnectorsTypeUuidFkeyUsingConnectorTypesPkeyUpdate = {
  /** An object where the defined keys will be set on the `connectorType` being updated. */
  connectorTypePatch: UpdateConnectorTypeOnConnectorForConnectorsTypeUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type ConnectorTypeOnPriceForPricesConnectorTypeUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `price` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: PricePatch;
};

/** The fields on `connectorType` to look up the row to update. */
export type ConnectorTypeOnPriceForPricesConnectorTypeUuidFkeyUsingConnectorTypesPkeyUpdate = {
  /** An object where the defined keys will be set on the `connectorType` being updated. */
  connectorTypePatch: UpdateConnectorTypeOnPriceForPricesConnectorTypeUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `ConnectorType`. Fields that are set will be updated. */
export type ConnectorTypePatch = {
  uuid?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  connectorsUsingUuid?: Maybe<ConnectorsTypeUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorTypeUuidFkeyInverseInput>;
};

/** A connection to a list of `ConnectorType` values. */
export type ConnectorTypesConnection = {
   __typename?: 'ConnectorTypesConnection';
  /** A list of `ConnectorType` objects. */
  nodes: Array<Maybe<ConnectorType>>;
  /** A list of edges which contains the `ConnectorType` and cursor to aid in pagination. */
  edges: Array<ConnectorTypesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ConnectorType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ConnectorType` edge in the connection. */
export type ConnectorTypesEdge = {
   __typename?: 'ConnectorTypesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ConnectorType` at the end of the edge. */
  node?: Maybe<ConnectorType>;
};

/** Methods to use when ordering `ConnectorType`. */
export enum ConnectorTypesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  ImageUrlAsc = 'IMAGE_URL_ASC',
  ImageUrlDesc = 'IMAGE_URL_DESC',
  MaxPowerAsc = 'MAX_POWER_ASC',
  MaxPowerDesc = 'MAX_POWER_DESC',
  MaxCurrentAsc = 'MAX_CURRENT_ASC',
  MaxCurrentDesc = 'MAX_CURRENT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Counteragent = Node & {
   __typename?: 'Counteragent';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  /** ИНН */
  tin?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `ChargePoint`. */
  chargePointsByCounteragentUuid: ChargePointsConnection;
};


export type CounteragentChargePointsByCounteragentUuidArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointsOrderBy>>;
  condition?: Maybe<ChargePointCondition>;
  filter?: Maybe<ChargePointFilter>;
};

/** 
 * A condition to be used against `Counteragent` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CounteragentCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `tin` field. */
  tin?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<Scalars['String']>;
};

/** The fields on `counteragent` to look up the row to connect. */
export type CounteragentCounteragentsPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `counteragent` to look up the row to delete. */
export type CounteragentCounteragentsPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** A filter to be used against `Counteragent` object types. All fields are combined with a logical ‘and.’ */
export type CounteragentFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `tin` field. */
  tin?: Maybe<StringFilter>;
  /** Filter by the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CounteragentFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CounteragentFilter>>;
  /** Negates the expression. */
  not?: Maybe<CounteragentFilter>;
};

/** An input for mutations affecting `Counteragent` */
export type CounteragentInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  /** ИНН */
  tin?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  chargePointsUsingUuid?: Maybe<ChargePointsCounteragentUuidFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type CounteragentNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `counteragent` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type CounteragentNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `counteragent` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type CounteragentOnChargePointForChargePointsCounteragentUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** The fields on `counteragent` to look up the row to update. */
export type CounteragentOnChargePointForChargePointsCounteragentUuidFkeyUsingCounteragentsPkeyUpdate = {
  /** An object where the defined keys will be set on the `counteragent` being updated. */
  counteragentPatch: UpdateCounteragentOnChargePointForChargePointsCounteragentUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `Counteragent`. Fields that are set will be updated. */
export type CounteragentPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  /** ИНН */
  tin?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  chargePointsUsingUuid?: Maybe<ChargePointsCounteragentUuidFkeyInverseInput>;
};

/** A connection to a list of `Counteragent` values. */
export type CounteragentsConnection = {
   __typename?: 'CounteragentsConnection';
  /** A list of `Counteragent` objects. */
  nodes: Array<Maybe<Counteragent>>;
  /** A list of edges which contains the `Counteragent` and cursor to aid in pagination. */
  edges: Array<CounteragentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Counteragent` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Counteragent` edge in the connection. */
export type CounteragentsEdge = {
   __typename?: 'CounteragentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Counteragent` at the end of the edge. */
  node?: Maybe<Counteragent>;
};

/** Methods to use when ordering `Counteragent`. */
export enum CounteragentsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TinAsc = 'TIN_ASC',
  TinDesc = 'TIN_DESC',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Agreement` mutation. */
export type CreateAgreementInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Agreement` to be created by this mutation. */
  agreement: AgreementInput;
};

/** The output of our create `Agreement` mutation. */
export type CreateAgreementPayload = {
   __typename?: 'CreateAgreementPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Agreement` that was created by this mutation. */
  agreement?: Maybe<Agreement>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Agreement`. May be used by Relay 1. */
  agreementEdge?: Maybe<AgreementsEdge>;
};


/** The output of our create `Agreement` mutation. */
export type CreateAgreementPayloadAgreementEdgeArgs = {
  orderBy?: Maybe<Array<AgreementsOrderBy>>;
};

/** All input for the create `BalanceOperation` mutation. */
export type CreateBalanceOperationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BalanceOperation` to be created by this mutation. */
  balanceOperation: BalanceOperationInput;
};

/** The output of our create `BalanceOperation` mutation. */
export type CreateBalanceOperationPayload = {
   __typename?: 'CreateBalanceOperationPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BalanceOperation` that was created by this mutation. */
  balanceOperation?: Maybe<BalanceOperation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `BalanceOperation`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `CentralSystemUser` that is related to this `BalanceOperation`. */
  centralSystemUserBySystemUserIdToken?: Maybe<CentralSystemUser>;
  /** An edge for our `BalanceOperation`. May be used by Relay 1. */
  balanceOperationEdge?: Maybe<BalanceOperationsEdge>;
};


/** The output of our create `BalanceOperation` mutation. */
export type CreateBalanceOperationPayloadBalanceOperationEdgeArgs = {
  orderBy?: Maybe<Array<BalanceOperationsOrderBy>>;
};

/** All input for the create `CentralSystemUser` mutation. */
export type CreateCentralSystemUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CentralSystemUser` to be created by this mutation. */
  centralSystemUser: CentralSystemUserInput;
};

/** The output of our create `CentralSystemUser` mutation. */
export type CreateCentralSystemUserPayload = {
   __typename?: 'CreateCentralSystemUserPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CentralSystemUser` that was created by this mutation. */
  centralSystemUser?: Maybe<CentralSystemUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `IdTag` that is related to this `CentralSystemUser`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** An edge for our `CentralSystemUser`. May be used by Relay 1. */
  centralSystemUserEdge?: Maybe<CentralSystemUsersEdge>;
};


/** The output of our create `CentralSystemUser` mutation. */
export type CreateCentralSystemUserPayloadCentralSystemUserEdgeArgs = {
  orderBy?: Maybe<Array<CentralSystemUsersOrderBy>>;
};

/** All input for the create `ChargePointEnergySupplyPrice` mutation. */
export type CreateChargePointEnergySupplyPriceInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointEnergySupplyPrice` to be created by this mutation. */
  chargePointEnergySupplyPrice: ChargePointEnergySupplyPriceInput;
};

/** The output of our create `ChargePointEnergySupplyPrice` mutation. */
export type CreateChargePointEnergySupplyPricePayload = {
   __typename?: 'CreateChargePointEnergySupplyPricePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointEnergySupplyPrice` that was created by this mutation. */
  chargePointEnergySupplyPrice?: Maybe<ChargePointEnergySupplyPrice>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointEnergySupplyPrice`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointEnergySupplyPrice`. May be used by Relay 1. */
  chargePointEnergySupplyPriceEdge?: Maybe<ChargePointEnergySupplyPricesEdge>;
};


/** The output of our create `ChargePointEnergySupplyPrice` mutation. */
export type CreateChargePointEnergySupplyPricePayloadChargePointEnergySupplyPriceEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointEnergySupplyPricesOrderBy>>;
};

/** All input for the create `ChargePointHeartbeat` mutation. */
export type CreateChargePointHeartbeatInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointHeartbeat` to be created by this mutation. */
  chargePointHeartbeat: ChargePointHeartbeatInput;
};

/** The output of our create `ChargePointHeartbeat` mutation. */
export type CreateChargePointHeartbeatPayload = {
   __typename?: 'CreateChargePointHeartbeatPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointHeartbeat` that was created by this mutation. */
  chargePointHeartbeat?: Maybe<ChargePointHeartbeat>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointHeartbeat`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointHeartbeat`. May be used by Relay 1. */
  chargePointHeartbeatEdge?: Maybe<ChargePointHeartbeatsEdge>;
};


/** The output of our create `ChargePointHeartbeat` mutation. */
export type CreateChargePointHeartbeatPayloadChargePointHeartbeatEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointHeartbeatsOrderBy>>;
};

/** All input for the create `ChargePoint` mutation. */
export type CreateChargePointInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePoint` to be created by this mutation. */
  chargePoint: ChargePointInput;
};

/** The output of our create `ChargePoint` mutation. */
export type CreateChargePointPayload = {
   __typename?: 'CreateChargePointPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePoint` that was created by this mutation. */
  chargePoint?: Maybe<ChargePoint>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `CentralSystemUser` that is related to this `ChargePoint`. */
  centralSystemUserByRegisteredBy?: Maybe<CentralSystemUser>;
  /** Reads a single `Counteragent` that is related to this `ChargePoint`. */
  counteragentByCounteragentUuid?: Maybe<Counteragent>;
  /** An edge for our `ChargePoint`. May be used by Relay 1. */
  chargePointEdge?: Maybe<ChargePointsEdge>;
};


/** The output of our create `ChargePoint` mutation. */
export type CreateChargePointPayloadChargePointEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointsOrderBy>>;
};

/** All input for the create `ChargePointSchedule` mutation. */
export type CreateChargePointScheduleInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointSchedule` to be created by this mutation. */
  chargePointSchedule: ChargePointScheduleInput;
};

/** The output of our create `ChargePointSchedule` mutation. */
export type CreateChargePointSchedulePayload = {
   __typename?: 'CreateChargePointSchedulePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointSchedule` that was created by this mutation. */
  chargePointSchedule?: Maybe<ChargePointSchedule>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointSchedule`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointSchedule`. May be used by Relay 1. */
  chargePointScheduleEdge?: Maybe<ChargePointSchedulesEdge>;
};


/** The output of our create `ChargePointSchedule` mutation. */
export type CreateChargePointSchedulePayloadChargePointScheduleEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointSchedulesOrderBy>>;
};

/** All input for the create `ChargingProfile` mutation. */
export type CreateChargingProfileInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingProfile` to be created by this mutation. */
  chargingProfile: ChargingProfileInput;
};

/** The output of our create `ChargingProfile` mutation. */
export type CreateChargingProfilePayload = {
   __typename?: 'CreateChargingProfilePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingProfile` that was created by this mutation. */
  chargingProfile?: Maybe<ChargingProfile>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `ChargingProfile`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** An edge for our `ChargingProfile`. May be used by Relay 1. */
  chargingProfileEdge?: Maybe<ChargingProfilesEdge>;
};


/** The output of our create `ChargingProfile` mutation. */
export type CreateChargingProfilePayloadChargingProfileEdgeArgs = {
  orderBy?: Maybe<Array<ChargingProfilesOrderBy>>;
};

/** All input for the create `ChargingSchedule` mutation. */
export type CreateChargingScheduleInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedule` to be created by this mutation. */
  chargingSchedule: ChargingScheduleInput;
};

/** The output of our create `ChargingSchedule` mutation. */
export type CreateChargingSchedulePayload = {
   __typename?: 'CreateChargingSchedulePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedule` that was created by this mutation. */
  chargingSchedule?: Maybe<ChargingSchedule>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargingProfile` that is related to this `ChargingSchedule`. */
  chargingProfileByChargingProfileId?: Maybe<ChargingProfile>;
  /** An edge for our `ChargingSchedule`. May be used by Relay 1. */
  chargingScheduleEdge?: Maybe<ChargingSchedulesEdge>;
};


/** The output of our create `ChargingSchedule` mutation. */
export type CreateChargingSchedulePayloadChargingScheduleEdgeArgs = {
  orderBy?: Maybe<Array<ChargingSchedulesOrderBy>>;
};

/** All input for the create `ChargingSchedulePeriod` mutation. */
export type CreateChargingSchedulePeriodInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedulePeriod` to be created by this mutation. */
  chargingSchedulePeriod: ChargingSchedulePeriodInput;
};

/** The output of our create `ChargingSchedulePeriod` mutation. */
export type CreateChargingSchedulePeriodPayload = {
   __typename?: 'CreateChargingSchedulePeriodPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedulePeriod` that was created by this mutation. */
  chargingSchedulePeriod?: Maybe<ChargingSchedulePeriod>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargingSchedule` that is related to this `ChargingSchedulePeriod`. */
  chargingScheduleByChargingScheduleUuid?: Maybe<ChargingSchedule>;
  /** An edge for our `ChargingSchedulePeriod`. May be used by Relay 1. */
  chargingSchedulePeriodEdge?: Maybe<ChargingSchedulePeriodsEdge>;
};


/** The output of our create `ChargingSchedulePeriod` mutation. */
export type CreateChargingSchedulePeriodPayloadChargingSchedulePeriodEdgeArgs = {
  orderBy?: Maybe<Array<ChargingSchedulePeriodsOrderBy>>;
};

/** All input for the create `ConfigurationKey` mutation. */
export type CreateConfigurationKeyInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConfigurationKey` to be created by this mutation. */
  configurationKey: ConfigurationKeyInput;
};

/** The output of our create `ConfigurationKey` mutation. */
export type CreateConfigurationKeyPayload = {
   __typename?: 'CreateConfigurationKeyPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConfigurationKey` that was created by this mutation. */
  configurationKey?: Maybe<ConfigurationKey>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ConfigurationKey`. May be used by Relay 1. */
  configurationKeyEdge?: Maybe<ConfigurationKeysEdge>;
};


/** The output of our create `ConfigurationKey` mutation. */
export type CreateConfigurationKeyPayloadConfigurationKeyEdgeArgs = {
  orderBy?: Maybe<Array<ConfigurationKeysOrderBy>>;
};

/** All input for the create `Connector` mutation. */
export type CreateConnectorInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Connector` to be created by this mutation. */
  connector: ConnectorInput;
};

/** The output of our create `Connector` mutation. */
export type CreateConnectorPayload = {
   __typename?: 'CreateConnectorPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Connector` that was created by this mutation. */
  connector?: Maybe<Connector>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `Connector`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Connector`. */
  connectorTypeByTypeUuid?: Maybe<ConnectorType>;
  /** An edge for our `Connector`. May be used by Relay 1. */
  connectorEdge?: Maybe<ConnectorsEdge>;
};


/** The output of our create `Connector` mutation. */
export type CreateConnectorPayloadConnectorEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorsOrderBy>>;
};

/** All input for the create `ConnectorStatus` mutation. */
export type CreateConnectorStatusInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorStatus` to be created by this mutation. */
  connectorStatus: ConnectorStatusInput;
};

/** The output of our create `ConnectorStatus` mutation. */
export type CreateConnectorStatusPayload = {
   __typename?: 'CreateConnectorStatusPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorStatus` that was created by this mutation. */
  connectorStatus?: Maybe<ConnectorStatus>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Connector` that is related to this `ConnectorStatus`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** An edge for our `ConnectorStatus`. May be used by Relay 1. */
  connectorStatusEdge?: Maybe<ConnectorStatusesEdge>;
};


/** The output of our create `ConnectorStatus` mutation. */
export type CreateConnectorStatusPayloadConnectorStatusEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorStatusesOrderBy>>;
};

/** All input for the create `ConnectorType` mutation. */
export type CreateConnectorTypeInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorType` to be created by this mutation. */
  connectorType: ConnectorTypeInput;
};

/** The output of our create `ConnectorType` mutation. */
export type CreateConnectorTypePayload = {
   __typename?: 'CreateConnectorTypePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorType` that was created by this mutation. */
  connectorType?: Maybe<ConnectorType>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ConnectorType`. May be used by Relay 1. */
  connectorTypeEdge?: Maybe<ConnectorTypesEdge>;
};


/** The output of our create `ConnectorType` mutation. */
export type CreateConnectorTypePayloadConnectorTypeEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorTypesOrderBy>>;
};

/** All input for the create `Counteragent` mutation. */
export type CreateCounteragentInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Counteragent` to be created by this mutation. */
  counteragent: CounteragentInput;
};

/** The output of our create `Counteragent` mutation. */
export type CreateCounteragentPayload = {
   __typename?: 'CreateCounteragentPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Counteragent` that was created by this mutation. */
  counteragent?: Maybe<Counteragent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Counteragent`. May be used by Relay 1. */
  counteragentEdge?: Maybe<CounteragentsEdge>;
};


/** The output of our create `Counteragent` mutation. */
export type CreateCounteragentPayloadCounteragentEdgeArgs = {
  orderBy?: Maybe<Array<CounteragentsOrderBy>>;
};

/** All input for the create `Customer` mutation. */
export type CreateCustomerInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` to be created by this mutation. */
  customer: CustomerInput;
};

/** The output of our create `Customer` mutation. */
export type CreateCustomerPayload = {
   __typename?: 'CreateCustomerPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was created by this mutation. */
  customer?: Maybe<Customer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `IdTag` that is related to this `Customer`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
};


/** The output of our create `Customer` mutation. */
export type CreateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>;
};

/** All input for the create `CustomersPermission` mutation. */
export type CreateCustomersPermissionInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CustomersPermission` to be created by this mutation. */
  customersPermission: CustomersPermissionInput;
};

/** The output of our create `CustomersPermission` mutation. */
export type CreateCustomersPermissionPayload = {
   __typename?: 'CreateCustomersPermissionPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CustomersPermission` that was created by this mutation. */
  customersPermission?: Maybe<CustomersPermission>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `CustomersPermission`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** An edge for our `CustomersPermission`. May be used by Relay 1. */
  customersPermissionEdge?: Maybe<CustomersPermissionsEdge>;
};


/** The output of our create `CustomersPermission` mutation. */
export type CreateCustomersPermissionPayloadCustomersPermissionEdgeArgs = {
  orderBy?: Maybe<Array<CustomersPermissionsOrderBy>>;
};

/** All input for the create `IdTag` mutation. */
export type CreateIdTagInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `IdTag` to be created by this mutation. */
  idTag: IdTagInput;
};

/** The output of our create `IdTag` mutation. */
export type CreateIdTagPayload = {
   __typename?: 'CreateIdTagPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `IdTag` that was created by this mutation. */
  idTag?: Maybe<IdTag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `IdTag`. May be used by Relay 1. */
  idTagEdge?: Maybe<IdTagsEdge>;
};


/** The output of our create `IdTag` mutation. */
export type CreateIdTagPayloadIdTagEdgeArgs = {
  orderBy?: Maybe<Array<IdTagsOrderBy>>;
};

/** All input for the create `MeterValue` mutation. */
export type CreateMeterValueInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MeterValue` to be created by this mutation. */
  meterValue: MeterValueInput;
};

/** The output of our create `MeterValue` mutation. */
export type CreateMeterValuePayload = {
   __typename?: 'CreateMeterValuePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MeterValue` that was created by this mutation. */
  meterValue?: Maybe<MeterValue>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `MeterValue`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** An edge for our `MeterValue`. May be used by Relay 1. */
  meterValueEdge?: Maybe<MeterValuesEdge>;
};


/** The output of our create `MeterValue` mutation. */
export type CreateMeterValuePayloadMeterValueEdgeArgs = {
  orderBy?: Maybe<Array<MeterValuesOrderBy>>;
};

/** All input for the create `Price` mutation. */
export type CreatePriceInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Price` to be created by this mutation. */
  price: PriceInput;
};

/** The output of our create `Price` mutation. */
export type CreatePricePayload = {
   __typename?: 'CreatePricePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Price` that was created by this mutation. */
  price?: Maybe<Price>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `Price`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Price`. */
  connectorTypeByConnectorTypeUuid?: Maybe<ConnectorType>;
  /** Reads a single `Customer` that is related to this `Price`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Price`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** An edge for our `Price`. May be used by Relay 1. */
  priceEdge?: Maybe<PricesEdge>;
};


/** The output of our create `Price` mutation. */
export type CreatePricePayloadPriceEdgeArgs = {
  orderBy?: Maybe<Array<PricesOrderBy>>;
};

/** All input for the create `ShortMessage` mutation. */
export type CreateShortMessageInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ShortMessage` to be created by this mutation. */
  shortMessage: ShortMessageInput;
};

/** The output of our create `ShortMessage` mutation. */
export type CreateShortMessagePayload = {
   __typename?: 'CreateShortMessagePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ShortMessage` that was created by this mutation. */
  shortMessage?: Maybe<ShortMessage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ShortMessage`. May be used by Relay 1. */
  shortMessageEdge?: Maybe<ShortMessagesEdge>;
};


/** The output of our create `ShortMessage` mutation. */
export type CreateShortMessagePayloadShortMessageEdgeArgs = {
  orderBy?: Maybe<Array<ShortMessagesOrderBy>>;
};

/** All input for the create `Transaction` mutation. */
export type CreateTransactionInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` to be created by this mutation. */
  transaction: TransactionInput;
};

/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayload = {
   __typename?: 'CreateTransactionPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` that was created by this mutation. */
  transaction?: Maybe<Transaction>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `Transaction`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Transaction`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** Reads a single `BalanceOperation` that is related to this `Transaction`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
};


/** The output of our create `Transaction` mutation. */
export type CreateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
};

/** All input for the create `YandexPayment` mutation. */
export type CreateYandexPaymentInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `YandexPayment` to be created by this mutation. */
  yandexPayment: YandexPaymentInput;
};

/** The output of our create `YandexPayment` mutation. */
export type CreateYandexPaymentPayload = {
   __typename?: 'CreateYandexPaymentPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `YandexPayment` that was created by this mutation. */
  yandexPayment?: Maybe<YandexPayment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `YandexPayment`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `BalanceOperation` that is related to this `YandexPayment`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
  /** An edge for our `YandexPayment`. May be used by Relay 1. */
  yandexPaymentEdge?: Maybe<YandexPaymentsEdge>;
};


/** The output of our create `YandexPayment` mutation. */
export type CreateYandexPaymentPayloadYandexPaymentEdgeArgs = {
  orderBy?: Maybe<Array<YandexPaymentsOrderBy>>;
};


export type Customer = Node & {
   __typename?: 'Customer';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  idToken: Scalars['String'];
  phoneNumber: Scalars['String'];
  balance: Scalars['Float'];
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked: Scalars['Boolean'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `IdTag` that is related to this `Customer`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** Reads and enables pagination through a set of `CustomersPermission`. */
  customersPermissionsByCustomerIdToken: CustomersPermissionsConnection;
  /** Reads and enables pagination through a set of `BalanceOperation`. */
  balanceOperationsByCustomerIdToken: BalanceOperationsConnection;
  /** Reads and enables pagination through a set of `YandexPayment`. */
  yandexPaymentsByCustomerIdToken: YandexPaymentsConnection;
  /** Reads and enables pagination through a set of `Transaction`. */
  transactionsByCustomerIdToken: TransactionsConnection;
  /** Reads and enables pagination through a set of `Price`. */
  pricesByCustomerIdToken: PricesConnection;
};


export type CustomerCustomersPermissionsByCustomerIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CustomersPermissionsOrderBy>>;
  condition?: Maybe<CustomersPermissionCondition>;
  filter?: Maybe<CustomersPermissionFilter>;
};


export type CustomerBalanceOperationsByCustomerIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BalanceOperationsOrderBy>>;
  condition?: Maybe<BalanceOperationCondition>;
  filter?: Maybe<BalanceOperationFilter>;
};


export type CustomerYandexPaymentsByCustomerIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<YandexPaymentsOrderBy>>;
  condition?: Maybe<YandexPaymentCondition>;
  filter?: Maybe<YandexPaymentFilter>;
};


export type CustomerTransactionsByCustomerIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
  condition?: Maybe<TransactionCondition>;
  filter?: Maybe<TransactionFilter>;
};


export type CustomerPricesByCustomerIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PricesOrderBy>>;
  condition?: Maybe<PriceCondition>;
  filter?: Maybe<PriceFilter>;
};

/** 
 * A condition to be used against `Customer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CustomerCondition = {
  /** Checks for equality with the object’s `idToken` field. */
  idToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `balance` field. */
  balance?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `tokensValidSince` field. */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `isBlocked` field. */
  isBlocked?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** The fields on `customer` to look up the row to connect. */
export type CustomerCustomersPhoneNumberKeyConnect = {
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to delete. */
export type CustomerCustomersPhoneNumberKeyDelete = {
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to connect. */
export type CustomerCustomersPkeyConnect = {
  idToken: Scalars['String'];
};

/** The fields on `customer` to look up the row to delete. */
export type CustomerCustomersPkeyDelete = {
  idToken: Scalars['String'];
};

/** A filter to be used against `Customer` object types. All fields are combined with a logical ‘and.’ */
export type CustomerFilter = {
  /** Filter by the object’s `idToken` field. */
  idToken?: Maybe<StringFilter>;
  /** Filter by the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<StringFilter>;
  /** Filter by the object’s `balance` field. */
  balance?: Maybe<FloatFilter>;
  /** Filter by the object’s `tokensValidSince` field. */
  tokensValidSince?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `isBlocked` field. */
  isBlocked?: Maybe<BooleanFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CustomerFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CustomerFilter>>;
  /** Negates the expression. */
  not?: Maybe<CustomerFilter>;
};

/** An input for mutations affecting `Customer` */
export type CustomerInput = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type CustomerNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `customer` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type CustomerNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `customer` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type CustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `balanceOperation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: BalanceOperationPatch;
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyPatch;
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyUsingCustomersPkeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type CustomerOnCustomerForCustomersIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `idTag` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `idTag` being updated. */
  idTagPatch: IdTagPatch;
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnCustomerForCustomersIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnCustomerForCustomersIdTokenFkeyPatch;
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnCustomerForCustomersIdTokenFkeyUsingCustomersPkeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnCustomerForCustomersIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type CustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `customersPermission` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `customersPermission` being updated. */
  customersPermissionPatch: CustomersPermissionPatch;
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyPatch;
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyUsingCustomersPkeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type CustomerOnPriceForPricesCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `price` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: PricePatch;
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnPriceForPricesCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnPriceForPricesCustomerIdTokenFkeyPatch;
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnPriceForPricesCustomerIdTokenFkeyUsingCustomersPkeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnPriceForPricesCustomerIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type CustomerOnTransactionForTransactionsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `transaction` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnTransactionForTransactionsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnTransactionForTransactionsCustomerIdTokenFkeyPatch;
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnTransactionForTransactionsCustomerIdTokenFkeyUsingCustomersPkeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnTransactionForTransactionsCustomerIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type CustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `yandexPayment` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: YandexPaymentPatch;
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyPatch;
  phoneNumber: Scalars['String'];
};

/** The fields on `customer` to look up the row to update. */
export type CustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingCustomersPkeyUpdate = {
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: UpdateCustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** Represents an update to a `Customer`. Fields that are set will be updated. */
export type CustomerPatch = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** A connection to a list of `Customer` values. */
export type CustomersConnection = {
   __typename?: 'CustomersConnection';
  /** A list of `Customer` objects. */
  nodes: Array<Maybe<Customer>>;
  /** A list of edges which contains the `Customer` and cursor to aid in pagination. */
  edges: Array<CustomersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Customer` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Customer` edge in the connection. */
export type CustomersEdge = {
   __typename?: 'CustomersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Customer` at the end of the edge. */
  node?: Maybe<Customer>;
};

/** The `customer` to be created by this mutation. */
export type CustomersIdTokenFkeyCustomersCreateInput = {
  phoneNumber: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** The `idTag` to be created by this mutation. */
export type CustomersIdTokenFkeyIdTagsCreateInput = {
  parentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerUsingIdToken?: Maybe<CustomersIdTokenFkeyInverseInput>;
  centralSystemUserUsingIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInverseInput>;
};

/** Input for the nested mutation of `idTag` in the `CustomerInput` mutation. */
export type CustomersIdTokenFkeyInput = {
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  connectByIdToken?: Maybe<IdTagIdTagsPkeyConnect>;
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  connectByNodeId?: Maybe<IdTagNodeIdConnect>;
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  deleteByIdToken?: Maybe<IdTagIdTagsPkeyDelete>;
  /** The primary key(s) for `idTag` for the far side of the relationship. */
  deleteByNodeId?: Maybe<IdTagNodeIdDelete>;
  /** The primary key(s) and patch data for `idTag` for the far side of the relationship. */
  updateByIdToken?: Maybe<IdTagOnCustomerForCustomersIdTokenFkeyUsingIdTagsPkeyUpdate>;
  /** The primary key(s) and patch data for `idTag` for the far side of the relationship. */
  updateByNodeId?: Maybe<CustomerOnCustomerForCustomersIdTokenFkeyNodeIdUpdate>;
  /** A `IdTagInput` object that will be created and connected to this object. */
  create?: Maybe<CustomersIdTokenFkeyIdTagsCreateInput>;
};

/** Input for the nested mutation of `customer` in the `IdTagInput` mutation. */
export type CustomersIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `customer` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByIdToken?: Maybe<CustomerCustomersPkeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByNodeId?: Maybe<CustomerNodeIdConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CustomerCustomersPkeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByIdToken?: Maybe<CustomerOnCustomerForCustomersIdTokenFkeyUsingCustomersPkeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByPhoneNumber?: Maybe<CustomerOnCustomerForCustomersIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByNodeId?: Maybe<IdTagOnCustomerForCustomersIdTokenFkeyNodeIdUpdate>;
  /** A `CustomerInput` object that will be created and connected to this object. */
  create?: Maybe<Array<CustomersIdTokenFkeyCustomersCreateInput>>;
};

/** Methods to use when ordering `Customer`. */
export enum CustomersOrderBy {
  Natural = 'NATURAL',
  IdTokenAsc = 'ID_TOKEN_ASC',
  IdTokenDesc = 'ID_TOKEN_DESC',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  TokensValidSinceAsc = 'TOKENS_VALID_SINCE_ASC',
  TokensValidSinceDesc = 'TOKENS_VALID_SINCE_DESC',
  IsBlockedAsc = 'IS_BLOCKED_ASC',
  IsBlockedDesc = 'IS_BLOCKED_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CustomersPermission = Node & {
   __typename?: 'CustomersPermission';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  type: PermissionType;
  customerIdToken: Scalars['String'];
  /** Reads a single `Customer` that is related to this `CustomersPermission`. */
  customerByCustomerIdToken?: Maybe<Customer>;
};

/** 
 * A condition to be used against `CustomersPermission` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type CustomersPermissionCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `type` field. */
  type?: Maybe<PermissionType>;
  /** Checks for equality with the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<Scalars['String']>;
};

/** The fields on `customersPermission` to look up the row to connect. */
export type CustomersPermissionCustomersPermissionsPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `customersPermission` to look up the row to delete. */
export type CustomersPermissionCustomersPermissionsPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** A filter to be used against `CustomersPermission` object types. All fields are combined with a logical ‘and.’ */
export type CustomersPermissionFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `type` field. */
  type?: Maybe<PermissionTypeFilter>;
  /** Filter by the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CustomersPermissionFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CustomersPermissionFilter>>;
  /** Negates the expression. */
  not?: Maybe<CustomersPermissionFilter>;
};

/** An input for mutations affecting `CustomersPermission` */
export type CustomersPermissionInput = {
  uuid?: Maybe<Scalars['UUID']>;
  type: PermissionType;
  customerIdToken?: Maybe<Scalars['String']>;
  customerToCustomerIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type CustomersPermissionNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `customersPermission` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type CustomersPermissionNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `customersPermission` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type CustomersPermissionOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `customer` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: CustomerPatch;
};

/** The fields on `customersPermission` to look up the row to update. */
export type CustomersPermissionOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyUsingCustomersPermissionsPkeyUpdate = {
  /** An object where the defined keys will be set on the `customersPermission` being updated. */
  customersPermissionPatch: UpdateCustomersPermissionOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `CustomersPermission`. Fields that are set will be updated. */
export type CustomersPermissionPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<PermissionType>;
  customerIdToken?: Maybe<Scalars['String']>;
  customerToCustomerIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInput>;
};

/** A connection to a list of `CustomersPermission` values. */
export type CustomersPermissionsConnection = {
   __typename?: 'CustomersPermissionsConnection';
  /** A list of `CustomersPermission` objects. */
  nodes: Array<Maybe<CustomersPermission>>;
  /** A list of edges which contains the `CustomersPermission` and cursor to aid in pagination. */
  edges: Array<CustomersPermissionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CustomersPermission` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** The `customer` to be created by this mutation. */
export type CustomersPermissionsCustomerIdTokenFkeyCustomersCreateInput = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** The `customersPermission` to be created by this mutation. */
export type CustomersPermissionsCustomerIdTokenFkeyCustomersPermissionsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  type: PermissionType;
  customerToCustomerIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInput>;
};

/** Input for the nested mutation of `customer` in the `CustomersPermissionInput` mutation. */
export type CustomersPermissionsCustomerIdTokenFkeyInput = {
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByIdToken?: Maybe<CustomerCustomersPkeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByNodeId?: Maybe<CustomerNodeIdConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CustomerCustomersPkeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByIdToken?: Maybe<CustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyUsingCustomersPkeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByPhoneNumber?: Maybe<CustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByNodeId?: Maybe<CustomersPermissionOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyNodeIdUpdate>;
  /** A `CustomerInput` object that will be created and connected to this object. */
  create?: Maybe<CustomersPermissionsCustomerIdTokenFkeyCustomersCreateInput>;
};

/** Input for the nested mutation of `customersPermission` in the `CustomerInput` mutation. */
export type CustomersPermissionsCustomerIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `customersPermission` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `customersPermission` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<CustomersPermissionCustomersPermissionsPkeyConnect>>;
  /** The primary key(s) for `customersPermission` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<CustomersPermissionNodeIdConnect>>;
  /** The primary key(s) for `customersPermission` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<CustomersPermissionCustomersPermissionsPkeyDelete>>;
  /** The primary key(s) for `customersPermission` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<CustomersPermissionNodeIdDelete>>;
  /** The primary key(s) and patch data for `customersPermission` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<CustomersPermissionOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyUsingCustomersPermissionsPkeyUpdate>>;
  /** The primary key(s) and patch data for `customersPermission` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyNodeIdUpdate>>;
  /** A `CustomersPermissionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<CustomersPermissionsCustomerIdTokenFkeyCustomersPermissionsCreateInput>>;
};

/** A `CustomersPermission` edge in the connection. */
export type CustomersPermissionsEdge = {
   __typename?: 'CustomersPermissionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CustomersPermission` at the end of the edge. */
  node?: Maybe<CustomersPermission>;
};

/** Methods to use when ordering `CustomersPermission`. */
export enum CustomersPermissionsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  CustomerIdTokenAsc = 'CUSTOMER_ID_TOKEN_ASC',
  CustomerIdTokenDesc = 'CUSTOMER_ID_TOKEN_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}


/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Datetime']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Datetime']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
};

/** All input for the `deleteAgreementByName` mutation. */
export type DeleteAgreementByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteAgreementByUuid` mutation. */
export type DeleteAgreementByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteAgreement` mutation. */
export type DeleteAgreementInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Agreement` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Agreement` mutation. */
export type DeleteAgreementPayload = {
   __typename?: 'DeleteAgreementPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Agreement` that was deleted by this mutation. */
  agreement?: Maybe<Agreement>;
  deletedAgreementId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Agreement`. May be used by Relay 1. */
  agreementEdge?: Maybe<AgreementsEdge>;
};


/** The output of our delete `Agreement` mutation. */
export type DeleteAgreementPayloadAgreementEdgeArgs = {
  orderBy?: Maybe<Array<AgreementsOrderBy>>;
};

/** All input for the `deleteBalanceOperationByUuid` mutation. */
export type DeleteBalanceOperationByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteBalanceOperation` mutation. */
export type DeleteBalanceOperationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `BalanceOperation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `BalanceOperation` mutation. */
export type DeleteBalanceOperationPayload = {
   __typename?: 'DeleteBalanceOperationPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BalanceOperation` that was deleted by this mutation. */
  balanceOperation?: Maybe<BalanceOperation>;
  deletedBalanceOperationId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `BalanceOperation`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `CentralSystemUser` that is related to this `BalanceOperation`. */
  centralSystemUserBySystemUserIdToken?: Maybe<CentralSystemUser>;
  /** An edge for our `BalanceOperation`. May be used by Relay 1. */
  balanceOperationEdge?: Maybe<BalanceOperationsEdge>;
};


/** The output of our delete `BalanceOperation` mutation. */
export type DeleteBalanceOperationPayloadBalanceOperationEdgeArgs = {
  orderBy?: Maybe<Array<BalanceOperationsOrderBy>>;
};

/** All input for the `deleteCentralSystemUserByIdToken` mutation. */
export type DeleteCentralSystemUserByIdTokenInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  idToken: Scalars['String'];
};

/** All input for the `deleteCentralSystemUser` mutation. */
export type DeleteCentralSystemUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CentralSystemUser` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `CentralSystemUser` mutation. */
export type DeleteCentralSystemUserPayload = {
   __typename?: 'DeleteCentralSystemUserPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CentralSystemUser` that was deleted by this mutation. */
  centralSystemUser?: Maybe<CentralSystemUser>;
  deletedCentralSystemUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `IdTag` that is related to this `CentralSystemUser`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** An edge for our `CentralSystemUser`. May be used by Relay 1. */
  centralSystemUserEdge?: Maybe<CentralSystemUsersEdge>;
};


/** The output of our delete `CentralSystemUser` mutation. */
export type DeleteCentralSystemUserPayloadCentralSystemUserEdgeArgs = {
  orderBy?: Maybe<Array<CentralSystemUsersOrderBy>>;
};

/** All input for the `deleteChargePointById` mutation. */
export type DeleteChargePointByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

/** All input for the `deleteChargePointEnergySupplyPriceByUuid` mutation. */
export type DeleteChargePointEnergySupplyPriceByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteChargePointEnergySupplyPrice` mutation. */
export type DeleteChargePointEnergySupplyPriceInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePointEnergySupplyPrice` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChargePointEnergySupplyPrice` mutation. */
export type DeleteChargePointEnergySupplyPricePayload = {
   __typename?: 'DeleteChargePointEnergySupplyPricePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointEnergySupplyPrice` that was deleted by this mutation. */
  chargePointEnergySupplyPrice?: Maybe<ChargePointEnergySupplyPrice>;
  deletedChargePointEnergySupplyPriceId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointEnergySupplyPrice`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointEnergySupplyPrice`. May be used by Relay 1. */
  chargePointEnergySupplyPriceEdge?: Maybe<ChargePointEnergySupplyPricesEdge>;
};


/** The output of our delete `ChargePointEnergySupplyPrice` mutation. */
export type DeleteChargePointEnergySupplyPricePayloadChargePointEnergySupplyPriceEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointEnergySupplyPricesOrderBy>>;
};

/** All input for the `deleteChargePointHeartbeatByUuid` mutation. */
export type DeleteChargePointHeartbeatByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteChargePointHeartbeat` mutation. */
export type DeleteChargePointHeartbeatInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePointHeartbeat` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChargePointHeartbeat` mutation. */
export type DeleteChargePointHeartbeatPayload = {
   __typename?: 'DeleteChargePointHeartbeatPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointHeartbeat` that was deleted by this mutation. */
  chargePointHeartbeat?: Maybe<ChargePointHeartbeat>;
  deletedChargePointHeartbeatId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointHeartbeat`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointHeartbeat`. May be used by Relay 1. */
  chargePointHeartbeatEdge?: Maybe<ChargePointHeartbeatsEdge>;
};


/** The output of our delete `ChargePointHeartbeat` mutation. */
export type DeleteChargePointHeartbeatPayloadChargePointHeartbeatEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointHeartbeatsOrderBy>>;
};

/** All input for the `deleteChargePoint` mutation. */
export type DeleteChargePointInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePoint` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChargePoint` mutation. */
export type DeleteChargePointPayload = {
   __typename?: 'DeleteChargePointPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePoint` that was deleted by this mutation. */
  chargePoint?: Maybe<ChargePoint>;
  deletedChargePointId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `CentralSystemUser` that is related to this `ChargePoint`. */
  centralSystemUserByRegisteredBy?: Maybe<CentralSystemUser>;
  /** Reads a single `Counteragent` that is related to this `ChargePoint`. */
  counteragentByCounteragentUuid?: Maybe<Counteragent>;
  /** An edge for our `ChargePoint`. May be used by Relay 1. */
  chargePointEdge?: Maybe<ChargePointsEdge>;
};


/** The output of our delete `ChargePoint` mutation. */
export type DeleteChargePointPayloadChargePointEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointsOrderBy>>;
};

/** All input for the `deleteChargePointScheduleByUuid` mutation. */
export type DeleteChargePointScheduleByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteChargePointSchedule` mutation. */
export type DeleteChargePointScheduleInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePointSchedule` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChargePointSchedule` mutation. */
export type DeleteChargePointSchedulePayload = {
   __typename?: 'DeleteChargePointSchedulePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointSchedule` that was deleted by this mutation. */
  chargePointSchedule?: Maybe<ChargePointSchedule>;
  deletedChargePointScheduleId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointSchedule`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointSchedule`. May be used by Relay 1. */
  chargePointScheduleEdge?: Maybe<ChargePointSchedulesEdge>;
};


/** The output of our delete `ChargePointSchedule` mutation. */
export type DeleteChargePointSchedulePayloadChargePointScheduleEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointSchedulesOrderBy>>;
};

/** All input for the `deleteChargingProfileByChargingProfileId` mutation. */
export type DeleteChargingProfileByChargingProfileIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  chargingProfileId: Scalars['Int'];
};

/** All input for the `deleteChargingProfile` mutation. */
export type DeleteChargingProfileInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargingProfile` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChargingProfile` mutation. */
export type DeleteChargingProfilePayload = {
   __typename?: 'DeleteChargingProfilePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingProfile` that was deleted by this mutation. */
  chargingProfile?: Maybe<ChargingProfile>;
  deletedChargingProfileId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `ChargingProfile`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** An edge for our `ChargingProfile`. May be used by Relay 1. */
  chargingProfileEdge?: Maybe<ChargingProfilesEdge>;
};


/** The output of our delete `ChargingProfile` mutation. */
export type DeleteChargingProfilePayloadChargingProfileEdgeArgs = {
  orderBy?: Maybe<Array<ChargingProfilesOrderBy>>;
};

/** All input for the `deleteChargingScheduleByUuid` mutation. */
export type DeleteChargingScheduleByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteChargingSchedule` mutation. */
export type DeleteChargingScheduleInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargingSchedule` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChargingSchedule` mutation. */
export type DeleteChargingSchedulePayload = {
   __typename?: 'DeleteChargingSchedulePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedule` that was deleted by this mutation. */
  chargingSchedule?: Maybe<ChargingSchedule>;
  deletedChargingScheduleId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargingProfile` that is related to this `ChargingSchedule`. */
  chargingProfileByChargingProfileId?: Maybe<ChargingProfile>;
  /** An edge for our `ChargingSchedule`. May be used by Relay 1. */
  chargingScheduleEdge?: Maybe<ChargingSchedulesEdge>;
};


/** The output of our delete `ChargingSchedule` mutation. */
export type DeleteChargingSchedulePayloadChargingScheduleEdgeArgs = {
  orderBy?: Maybe<Array<ChargingSchedulesOrderBy>>;
};

/** All input for the `deleteChargingSchedulePeriodByUuid` mutation. */
export type DeleteChargingSchedulePeriodByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteChargingSchedulePeriod` mutation. */
export type DeleteChargingSchedulePeriodInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargingSchedulePeriod` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ChargingSchedulePeriod` mutation. */
export type DeleteChargingSchedulePeriodPayload = {
   __typename?: 'DeleteChargingSchedulePeriodPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedulePeriod` that was deleted by this mutation. */
  chargingSchedulePeriod?: Maybe<ChargingSchedulePeriod>;
  deletedChargingSchedulePeriodId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargingSchedule` that is related to this `ChargingSchedulePeriod`. */
  chargingScheduleByChargingScheduleUuid?: Maybe<ChargingSchedule>;
  /** An edge for our `ChargingSchedulePeriod`. May be used by Relay 1. */
  chargingSchedulePeriodEdge?: Maybe<ChargingSchedulePeriodsEdge>;
};


/** The output of our delete `ChargingSchedulePeriod` mutation. */
export type DeleteChargingSchedulePeriodPayloadChargingSchedulePeriodEdgeArgs = {
  orderBy?: Maybe<Array<ChargingSchedulePeriodsOrderBy>>;
};

/** All input for the `deleteConfigurationKeyByName` mutation. */
export type DeleteConfigurationKeyByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteConfigurationKeyByUuid` mutation. */
export type DeleteConfigurationKeyByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteConfigurationKey` mutation. */
export type DeleteConfigurationKeyInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ConfigurationKey` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ConfigurationKey` mutation. */
export type DeleteConfigurationKeyPayload = {
   __typename?: 'DeleteConfigurationKeyPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConfigurationKey` that was deleted by this mutation. */
  configurationKey?: Maybe<ConfigurationKey>;
  deletedConfigurationKeyId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ConfigurationKey`. May be used by Relay 1. */
  configurationKeyEdge?: Maybe<ConfigurationKeysEdge>;
};


/** The output of our delete `ConfigurationKey` mutation. */
export type DeleteConfigurationKeyPayloadConfigurationKeyEdgeArgs = {
  orderBy?: Maybe<Array<ConfigurationKeysOrderBy>>;
};

/** All input for the `deleteConnectorByUuid` mutation. */
export type DeleteConnectorByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteConnector` mutation. */
export type DeleteConnectorInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Connector` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Connector` mutation. */
export type DeleteConnectorPayload = {
   __typename?: 'DeleteConnectorPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Connector` that was deleted by this mutation. */
  connector?: Maybe<Connector>;
  deletedConnectorId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `Connector`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Connector`. */
  connectorTypeByTypeUuid?: Maybe<ConnectorType>;
  /** An edge for our `Connector`. May be used by Relay 1. */
  connectorEdge?: Maybe<ConnectorsEdge>;
};


/** The output of our delete `Connector` mutation. */
export type DeleteConnectorPayloadConnectorEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorsOrderBy>>;
};

/** All input for the `deleteConnectorStatusByUuid` mutation. */
export type DeleteConnectorStatusByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteConnectorStatus` mutation. */
export type DeleteConnectorStatusInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ConnectorStatus` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ConnectorStatus` mutation. */
export type DeleteConnectorStatusPayload = {
   __typename?: 'DeleteConnectorStatusPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorStatus` that was deleted by this mutation. */
  connectorStatus?: Maybe<ConnectorStatus>;
  deletedConnectorStatusId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Connector` that is related to this `ConnectorStatus`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** An edge for our `ConnectorStatus`. May be used by Relay 1. */
  connectorStatusEdge?: Maybe<ConnectorStatusesEdge>;
};


/** The output of our delete `ConnectorStatus` mutation. */
export type DeleteConnectorStatusPayloadConnectorStatusEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorStatusesOrderBy>>;
};

/** All input for the `deleteConnectorTypeByUuid` mutation. */
export type DeleteConnectorTypeByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteConnectorType` mutation. */
export type DeleteConnectorTypeInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ConnectorType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ConnectorType` mutation. */
export type DeleteConnectorTypePayload = {
   __typename?: 'DeleteConnectorTypePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorType` that was deleted by this mutation. */
  connectorType?: Maybe<ConnectorType>;
  deletedConnectorTypeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ConnectorType`. May be used by Relay 1. */
  connectorTypeEdge?: Maybe<ConnectorTypesEdge>;
};


/** The output of our delete `ConnectorType` mutation. */
export type DeleteConnectorTypePayloadConnectorTypeEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorTypesOrderBy>>;
};

/** All input for the `deleteCounteragentByUuid` mutation. */
export type DeleteCounteragentByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteCounteragent` mutation. */
export type DeleteCounteragentInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Counteragent` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Counteragent` mutation. */
export type DeleteCounteragentPayload = {
   __typename?: 'DeleteCounteragentPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Counteragent` that was deleted by this mutation. */
  counteragent?: Maybe<Counteragent>;
  deletedCounteragentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Counteragent`. May be used by Relay 1. */
  counteragentEdge?: Maybe<CounteragentsEdge>;
};


/** The output of our delete `Counteragent` mutation. */
export type DeleteCounteragentPayloadCounteragentEdgeArgs = {
  orderBy?: Maybe<Array<CounteragentsOrderBy>>;
};

/** All input for the `deleteCustomerByIdToken` mutation. */
export type DeleteCustomerByIdTokenInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  idToken: Scalars['String'];
};

/** All input for the `deleteCustomerByPhoneNumber` mutation. */
export type DeleteCustomerByPhoneNumberInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};

/** All input for the `deleteCustomer` mutation. */
export type DeleteCustomerInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Customer` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayload = {
   __typename?: 'DeleteCustomerPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was deleted by this mutation. */
  customer?: Maybe<Customer>;
  deletedCustomerId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `IdTag` that is related to this `Customer`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
};


/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>;
};

/** All input for the `deleteCustomersPermissionByUuid` mutation. */
export type DeleteCustomersPermissionByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteCustomersPermission` mutation. */
export type DeleteCustomersPermissionInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CustomersPermission` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `CustomersPermission` mutation. */
export type DeleteCustomersPermissionPayload = {
   __typename?: 'DeleteCustomersPermissionPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CustomersPermission` that was deleted by this mutation. */
  customersPermission?: Maybe<CustomersPermission>;
  deletedCustomersPermissionId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `CustomersPermission`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** An edge for our `CustomersPermission`. May be used by Relay 1. */
  customersPermissionEdge?: Maybe<CustomersPermissionsEdge>;
};


/** The output of our delete `CustomersPermission` mutation. */
export type DeleteCustomersPermissionPayloadCustomersPermissionEdgeArgs = {
  orderBy?: Maybe<Array<CustomersPermissionsOrderBy>>;
};

/** All input for the `deleteIdTagByIdToken` mutation. */
export type DeleteIdTagByIdTokenInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  idToken: Scalars['String'];
};

/** All input for the `deleteIdTag` mutation. */
export type DeleteIdTagInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `IdTag` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `IdTag` mutation. */
export type DeleteIdTagPayload = {
   __typename?: 'DeleteIdTagPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `IdTag` that was deleted by this mutation. */
  idTag?: Maybe<IdTag>;
  deletedIdTagId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `IdTag`. May be used by Relay 1. */
  idTagEdge?: Maybe<IdTagsEdge>;
};


/** The output of our delete `IdTag` mutation. */
export type DeleteIdTagPayloadIdTagEdgeArgs = {
  orderBy?: Maybe<Array<IdTagsOrderBy>>;
};

/** All input for the `deleteMeterValueByUuid` mutation. */
export type DeleteMeterValueByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteMeterValue` mutation. */
export type DeleteMeterValueInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MeterValue` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `MeterValue` mutation. */
export type DeleteMeterValuePayload = {
   __typename?: 'DeleteMeterValuePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MeterValue` that was deleted by this mutation. */
  meterValue?: Maybe<MeterValue>;
  deletedMeterValueId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `MeterValue`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** An edge for our `MeterValue`. May be used by Relay 1. */
  meterValueEdge?: Maybe<MeterValuesEdge>;
};


/** The output of our delete `MeterValue` mutation. */
export type DeleteMeterValuePayloadMeterValueEdgeArgs = {
  orderBy?: Maybe<Array<MeterValuesOrderBy>>;
};

/** All input for the `deletePriceByName` mutation. */
export type DeletePriceByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deletePriceByUuid` mutation. */
export type DeletePriceByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deletePrice` mutation. */
export type DeletePriceInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Price` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Price` mutation. */
export type DeletePricePayload = {
   __typename?: 'DeletePricePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Price` that was deleted by this mutation. */
  price?: Maybe<Price>;
  deletedPriceId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `Price`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Price`. */
  connectorTypeByConnectorTypeUuid?: Maybe<ConnectorType>;
  /** Reads a single `Customer` that is related to this `Price`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Price`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** An edge for our `Price`. May be used by Relay 1. */
  priceEdge?: Maybe<PricesEdge>;
};


/** The output of our delete `Price` mutation. */
export type DeletePricePayloadPriceEdgeArgs = {
  orderBy?: Maybe<Array<PricesOrderBy>>;
};

/** All input for the `deleteShortMessageByUuid` mutation. */
export type DeleteShortMessageByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteShortMessage` mutation. */
export type DeleteShortMessageInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ShortMessage` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `ShortMessage` mutation. */
export type DeleteShortMessagePayload = {
   __typename?: 'DeleteShortMessagePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ShortMessage` that was deleted by this mutation. */
  shortMessage?: Maybe<ShortMessage>;
  deletedShortMessageId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ShortMessage`. May be used by Relay 1. */
  shortMessageEdge?: Maybe<ShortMessagesEdge>;
};


/** The output of our delete `ShortMessage` mutation. */
export type DeleteShortMessagePayloadShortMessageEdgeArgs = {
  orderBy?: Maybe<Array<ShortMessagesOrderBy>>;
};

/** All input for the `deleteTransactionByTransactionId` mutation. */
export type DeleteTransactionByTransactionIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  transactionId: Scalars['Int'];
};

/** All input for the `deleteTransaction` mutation. */
export type DeleteTransactionInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayload = {
   __typename?: 'DeleteTransactionPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` that was deleted by this mutation. */
  transaction?: Maybe<Transaction>;
  deletedTransactionId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `Transaction`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Transaction`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** Reads a single `BalanceOperation` that is related to this `Transaction`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
};


/** The output of our delete `Transaction` mutation. */
export type DeleteTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
};

/** All input for the `deleteYandexPaymentByBalanceOperationUuid` mutation. */
export type DeleteYandexPaymentByBalanceOperationUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  balanceOperationUuid: Scalars['UUID'];
};

/** All input for the `deleteYandexPaymentByUuid` mutation. */
export type DeleteYandexPaymentByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  uuid: Scalars['UUID'];
};

/** All input for the `deleteYandexPaymentByYandexId` mutation. */
export type DeleteYandexPaymentByYandexIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  yandexId: Scalars['String'];
};

/** All input for the `deleteYandexPayment` mutation. */
export type DeleteYandexPaymentInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `YandexPayment` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `YandexPayment` mutation. */
export type DeleteYandexPaymentPayload = {
   __typename?: 'DeleteYandexPaymentPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `YandexPayment` that was deleted by this mutation. */
  yandexPayment?: Maybe<YandexPayment>;
  deletedYandexPaymentId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `YandexPayment`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `BalanceOperation` that is related to this `YandexPayment`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
  /** An edge for our `YandexPayment`. May be used by Relay 1. */
  yandexPaymentEdge?: Maybe<YandexPaymentsEdge>;
};


/** The output of our delete `YandexPayment` mutation. */
export type DeleteYandexPaymentPayloadYandexPaymentEdgeArgs = {
  orderBy?: Maybe<Array<YandexPaymentsOrderBy>>;
};

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Float']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Float']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Float']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Float']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Float']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Float']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Float']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Float']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Float']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Float']>;
};

export type IdTag = Node & {
   __typename?: 'IdTag';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  idToken: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `Customer` that is related to this `IdTag`. */
  customerByIdToken?: Maybe<Customer>;
  /** Reads and enables pagination through a set of `Customer`. */
  customersByIdToken: CustomersConnection;
  /** Reads a single `CentralSystemUser` that is related to this `IdTag`. */
  centralSystemUserByIdToken?: Maybe<CentralSystemUser>;
  /** Reads and enables pagination through a set of `CentralSystemUser`. */
  centralSystemUsersByIdToken: CentralSystemUsersConnection;
};


export type IdTagCustomersByIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CustomersOrderBy>>;
  condition?: Maybe<CustomerCondition>;
  filter?: Maybe<CustomerFilter>;
};


export type IdTagCentralSystemUsersByIdTokenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CentralSystemUsersOrderBy>>;
  condition?: Maybe<CentralSystemUserCondition>;
  filter?: Maybe<CentralSystemUserFilter>;
};

/** A condition to be used against `IdTag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type IdTagCondition = {
  /** Checks for equality with the object’s `idToken` field. */
  idToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `parentId` field. */
  parentId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `IdTag` object types. All fields are combined with a logical ‘and.’ */
export type IdTagFilter = {
  /** Filter by the object’s `idToken` field. */
  idToken?: Maybe<StringFilter>;
  /** Filter by the object’s `parentId` field. */
  parentId?: Maybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<IdTagFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<IdTagFilter>>;
  /** Negates the expression. */
  not?: Maybe<IdTagFilter>;
};

/** The fields on `idTag` to look up the row to connect. */
export type IdTagIdTagsPkeyConnect = {
  idToken: Scalars['String'];
};

/** The fields on `idTag` to look up the row to delete. */
export type IdTagIdTagsPkeyDelete = {
  idToken: Scalars['String'];
};

/** An input for mutations affecting `IdTag` */
export type IdTagInput = {
  idToken: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerUsingIdToken?: Maybe<CustomersIdTokenFkeyInverseInput>;
  centralSystemUserUsingIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type IdTagNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `idTag` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type IdTagNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `idTag` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type IdTagOnCentralSystemUserForCentralSystemUsersIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `centralSystemUser` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `centralSystemUser` being updated. */
  centralSystemUserPatch: CentralSystemUserPatch;
};

/** The fields on `idTag` to look up the row to update. */
export type IdTagOnCentralSystemUserForCentralSystemUsersIdTokenFkeyUsingIdTagsPkeyUpdate = {
  /** An object where the defined keys will be set on the `idTag` being updated. */
  idTagPatch: UpdateIdTagOnCentralSystemUserForCentralSystemUsersIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type IdTagOnCustomerForCustomersIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `customer` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: CustomerPatch;
};

/** The fields on `idTag` to look up the row to update. */
export type IdTagOnCustomerForCustomersIdTokenFkeyUsingIdTagsPkeyUpdate = {
  /** An object where the defined keys will be set on the `idTag` being updated. */
  idTagPatch: UpdateIdTagOnCustomerForCustomersIdTokenFkeyPatch;
  idToken: Scalars['String'];
};

/** Represents an update to a `IdTag`. Fields that are set will be updated. */
export type IdTagPatch = {
  idToken?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerUsingIdToken?: Maybe<CustomersIdTokenFkeyInverseInput>;
  centralSystemUserUsingIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInverseInput>;
};

/** A connection to a list of `IdTag` values. */
export type IdTagsConnection = {
   __typename?: 'IdTagsConnection';
  /** A list of `IdTag` objects. */
  nodes: Array<Maybe<IdTag>>;
  /** A list of edges which contains the `IdTag` and cursor to aid in pagination. */
  edges: Array<IdTagsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `IdTag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `IdTag` edge in the connection. */
export type IdTagsEdge = {
   __typename?: 'IdTagsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `IdTag` at the end of the edge. */
  node?: Maybe<IdTag>;
};

/** Methods to use when ordering `IdTag`. */
export enum IdTagsOrderBy {
  Natural = 'NATURAL',
  IdTokenAsc = 'ID_TOKEN_ASC',
  IdTokenDesc = 'ID_TOKEN_DESC',
  ParentIdAsc = 'PARENT_ID_ASC',
  ParentIdDesc = 'PARENT_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type InitPaymentInput = {
  value?: Maybe<Scalars['Float']>;
};

export type InitPaymentResponse = {
   __typename?: 'InitPaymentResponse';
  confirmationToken?: Maybe<Scalars['String']>;
  yandexId?: Maybe<Scalars['String']>;
};


/** A filter to be used against InternetAddress fields. All fields are combined with a logical ‘and.’ */
export type InternetAddressFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['InternetAddress']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['InternetAddress']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['InternetAddress']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['InternetAddress']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['InternetAddress']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['InternetAddress']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['InternetAddress']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['InternetAddress']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['InternetAddress']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['InternetAddress']>;
  /** Contains the specified internet address. */
  contains?: Maybe<Scalars['InternetAddress']>;
  /** Contains or equal to the specified internet address. */
  containsOrEqualTo?: Maybe<Scalars['InternetAddress']>;
  /** Contained by the specified internet address. */
  containedBy?: Maybe<Scalars['InternetAddress']>;
  /** Contained by or equal to the specified internet address. */
  containedByOrEqualTo?: Maybe<Scalars['InternetAddress']>;
  /** Contains or contained by the specified internet address. */
  containsOrContainedBy?: Maybe<Scalars['InternetAddress']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};

export enum Location {
  Body = 'Body',
  Cable = 'Cable',
  Ev = 'EV',
  Inlet = 'Inlet',
  Outlet = 'Outlet'
}

/** A filter to be used against Location fields. All fields are combined with a logical ‘and.’ */
export type LocationFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Location>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Location>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Location>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Location>;
  /** Included in the specified list. */
  in?: Maybe<Array<Location>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Location>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Location>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Location>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Location>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Location>;
};

export type MeterValue = Node & {
   __typename?: 'MeterValue';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  connectorId: Scalars['Int'];
  transactionId?: Maybe<Scalars['Int']>;
  timestamptz: Scalars['Datetime'];
  value: Scalars['String'];
  context?: Maybe<Scalars['String']>;
  format?: Maybe<ValueFormat>;
  measurand?: Maybe<Scalars['String']>;
  phase?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  unitOfMeasure?: Maybe<UnitOfMeasure>;
  /** Reads a single `Transaction` that is related to this `MeterValue`. */
  transactionByTransactionId?: Maybe<Transaction>;
};

/** 
 * A condition to be used against `MeterValue` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MeterValueCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `connectorId` field. */
  connectorId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `transactionId` field. */
  transactionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `timestamptz` field. */
  timestamptz?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `context` field. */
  context?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `format` field. */
  format?: Maybe<ValueFormat>;
  /** Checks for equality with the object’s `measurand` field. */
  measurand?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `phase` field. */
  phase?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `location` field. */
  location?: Maybe<Location>;
  /** Checks for equality with the object’s `unitOfMeasure` field. */
  unitOfMeasure?: Maybe<UnitOfMeasure>;
};

/** A filter to be used against `MeterValue` object types. All fields are combined with a logical ‘and.’ */
export type MeterValueFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `connectorId` field. */
  connectorId?: Maybe<IntFilter>;
  /** Filter by the object’s `transactionId` field. */
  transactionId?: Maybe<IntFilter>;
  /** Filter by the object’s `timestamptz` field. */
  timestamptz?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<StringFilter>;
  /** Filter by the object’s `context` field. */
  context?: Maybe<StringFilter>;
  /** Filter by the object’s `format` field. */
  format?: Maybe<ValueFormatFilter>;
  /** Filter by the object’s `measurand` field. */
  measurand?: Maybe<StringFilter>;
  /** Filter by the object’s `phase` field. */
  phase?: Maybe<StringFilter>;
  /** Filter by the object’s `location` field. */
  location?: Maybe<LocationFilter>;
  /** Filter by the object’s `unitOfMeasure` field. */
  unitOfMeasure?: Maybe<UnitOfMeasureFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<MeterValueFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<MeterValueFilter>>;
  /** Negates the expression. */
  not?: Maybe<MeterValueFilter>;
};

/** An input for mutations affecting `MeterValue` */
export type MeterValueInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId: Scalars['Int'];
  transactionId?: Maybe<Scalars['Int']>;
  timestamptz: Scalars['Datetime'];
  value: Scalars['String'];
  context?: Maybe<Scalars['String']>;
  format?: Maybe<ValueFormat>;
  measurand?: Maybe<Scalars['String']>;
  phase?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  unitOfMeasure?: Maybe<UnitOfMeasure>;
  transactionToTransactionId?: Maybe<MeterValuesTransactionIdFkeyInput>;
};

/** The fields on `meterValue` to look up the row to connect. */
export type MeterValueMeterValuesPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `meterValue` to look up the row to delete. */
export type MeterValueMeterValuesPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to connect. */
export type MeterValueNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `meterValue` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type MeterValueNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `meterValue` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type MeterValueOnMeterValueForMeterValuesTransactionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `transaction` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** The fields on `meterValue` to look up the row to update. */
export type MeterValueOnMeterValueForMeterValuesTransactionIdFkeyUsingMeterValuesPkeyUpdate = {
  /** An object where the defined keys will be set on the `meterValue` being updated. */
  meterValuePatch: UpdateMeterValueOnMeterValueForMeterValuesTransactionIdFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `MeterValue`. Fields that are set will be updated. */
export type MeterValuePatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  timestamptz?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['String']>;
  context?: Maybe<Scalars['String']>;
  format?: Maybe<ValueFormat>;
  measurand?: Maybe<Scalars['String']>;
  phase?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  unitOfMeasure?: Maybe<UnitOfMeasure>;
  transactionToTransactionId?: Maybe<MeterValuesTransactionIdFkeyInput>;
};

/** A connection to a list of `MeterValue` values. */
export type MeterValuesConnection = {
   __typename?: 'MeterValuesConnection';
  /** A list of `MeterValue` objects. */
  nodes: Array<Maybe<MeterValue>>;
  /** A list of edges which contains the `MeterValue` and cursor to aid in pagination. */
  edges: Array<MeterValuesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MeterValue` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `MeterValue` edge in the connection. */
export type MeterValuesEdge = {
   __typename?: 'MeterValuesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MeterValue` at the end of the edge. */
  node?: Maybe<MeterValue>;
};

/** Methods to use when ordering `MeterValue`. */
export enum MeterValuesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  ConnectorIdAsc = 'CONNECTOR_ID_ASC',
  ConnectorIdDesc = 'CONNECTOR_ID_DESC',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  TimestamptzAsc = 'TIMESTAMPTZ_ASC',
  TimestamptzDesc = 'TIMESTAMPTZ_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
  ContextAsc = 'CONTEXT_ASC',
  ContextDesc = 'CONTEXT_DESC',
  FormatAsc = 'FORMAT_ASC',
  FormatDesc = 'FORMAT_DESC',
  MeasurandAsc = 'MEASURAND_ASC',
  MeasurandDesc = 'MEASURAND_DESC',
  PhaseAsc = 'PHASE_ASC',
  PhaseDesc = 'PHASE_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  UnitOfMeasureAsc = 'UNIT_OF_MEASURE_ASC',
  UnitOfMeasureDesc = 'UNIT_OF_MEASURE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Input for the nested mutation of `transaction` in the `MeterValueInput` mutation. */
export type MeterValuesTransactionIdFkeyInput = {
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByTransactionId?: Maybe<TransactionTransactionsPkeyConnect>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByNodeId?: Maybe<TransactionNodeIdConnect>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByTransactionId?: Maybe<TransactionTransactionsPkeyDelete>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByNodeId?: Maybe<TransactionNodeIdDelete>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByTransactionId?: Maybe<TransactionOnMeterValueForMeterValuesTransactionIdFkeyUsingTransactionsPkeyUpdate>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByNodeId?: Maybe<MeterValueOnMeterValueForMeterValuesTransactionIdFkeyNodeIdUpdate>;
  /** A `TransactionInput` object that will be created and connected to this object. */
  create?: Maybe<MeterValuesTransactionIdFkeyTransactionsCreateInput>;
};

/** Input for the nested mutation of `meterValue` in the `TransactionInput` mutation. */
export type MeterValuesTransactionIdFkeyInverseInput = {
  /** Flag indicating whether all other `meterValue` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `meterValue` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<MeterValueMeterValuesPkeyConnect>>;
  /** The primary key(s) for `meterValue` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<MeterValueNodeIdConnect>>;
  /** The primary key(s) for `meterValue` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<MeterValueMeterValuesPkeyDelete>>;
  /** The primary key(s) for `meterValue` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<MeterValueNodeIdDelete>>;
  /** The primary key(s) and patch data for `meterValue` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<MeterValueOnMeterValueForMeterValuesTransactionIdFkeyUsingMeterValuesPkeyUpdate>>;
  /** The primary key(s) and patch data for `meterValue` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<TransactionOnMeterValueForMeterValuesTransactionIdFkeyNodeIdUpdate>>;
  /** A `MeterValueInput` object that will be created and connected to this object. */
  create?: Maybe<Array<MeterValuesTransactionIdFkeyMeterValuesCreateInput>>;
};

/** The `meterValue` to be created by this mutation. */
export type MeterValuesTransactionIdFkeyMeterValuesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId: Scalars['Int'];
  timestamptz: Scalars['Datetime'];
  value: Scalars['String'];
  context?: Maybe<Scalars['String']>;
  format?: Maybe<ValueFormat>;
  measurand?: Maybe<Scalars['String']>;
  phase?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  unitOfMeasure?: Maybe<UnitOfMeasure>;
  transactionToTransactionId?: Maybe<MeterValuesTransactionIdFkeyInput>;
};

/** The `transaction` to be created by this mutation. */
export type MeterValuesTransactionIdFkeyTransactionsCreateInput = {
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
   __typename?: 'Mutation';
  /** Creates a single `Agreement`. */
  createAgreement?: Maybe<CreateAgreementPayload>;
  /** Creates a single `BalanceOperation`. */
  createBalanceOperation?: Maybe<CreateBalanceOperationPayload>;
  /** Creates a single `CentralSystemUser`. */
  createCentralSystemUser?: Maybe<CreateCentralSystemUserPayload>;
  /** Creates a single `ChargePointEnergySupplyPrice`. */
  createChargePointEnergySupplyPrice?: Maybe<CreateChargePointEnergySupplyPricePayload>;
  /** Creates a single `ChargePointHeartbeat`. */
  createChargePointHeartbeat?: Maybe<CreateChargePointHeartbeatPayload>;
  /** Creates a single `ChargePointSchedule`. */
  createChargePointSchedule?: Maybe<CreateChargePointSchedulePayload>;
  /** Creates a single `ChargePoint`. */
  createChargePoint?: Maybe<CreateChargePointPayload>;
  /** Creates a single `ChargingProfile`. */
  createChargingProfile?: Maybe<CreateChargingProfilePayload>;
  /** Creates a single `ChargingSchedulePeriod`. */
  createChargingSchedulePeriod?: Maybe<CreateChargingSchedulePeriodPayload>;
  /** Creates a single `ChargingSchedule`. */
  createChargingSchedule?: Maybe<CreateChargingSchedulePayload>;
  /** Creates a single `ConfigurationKey`. */
  createConfigurationKey?: Maybe<CreateConfigurationKeyPayload>;
  /** Creates a single `ConnectorStatus`. */
  createConnectorStatus?: Maybe<CreateConnectorStatusPayload>;
  /** Creates a single `ConnectorType`. */
  createConnectorType?: Maybe<CreateConnectorTypePayload>;
  /** Creates a single `Connector`. */
  createConnector?: Maybe<CreateConnectorPayload>;
  /** Creates a single `Counteragent`. */
  createCounteragent?: Maybe<CreateCounteragentPayload>;
  /** Creates a single `Customer`. */
  createCustomer?: Maybe<CreateCustomerPayload>;
  /** Creates a single `CustomersPermission`. */
  createCustomersPermission?: Maybe<CreateCustomersPermissionPayload>;
  /** Creates a single `IdTag`. */
  createIdTag?: Maybe<CreateIdTagPayload>;
  /** Creates a single `MeterValue`. */
  createMeterValue?: Maybe<CreateMeterValuePayload>;
  /** Creates a single `Price`. */
  createPrice?: Maybe<CreatePricePayload>;
  /** Creates a single `ShortMessage`. */
  createShortMessage?: Maybe<CreateShortMessagePayload>;
  /** Creates a single `Transaction`. */
  createTransaction?: Maybe<CreateTransactionPayload>;
  /** Creates a single `YandexPayment`. */
  createYandexPayment?: Maybe<CreateYandexPaymentPayload>;
  /** Updates a single `Agreement` using its globally unique id and a patch. */
  updateAgreement?: Maybe<UpdateAgreementPayload>;
  /** Updates a single `Agreement` using a unique key and a patch. */
  updateAgreementByUuid?: Maybe<UpdateAgreementPayload>;
  /** Updates a single `Agreement` using a unique key and a patch. */
  updateAgreementByName?: Maybe<UpdateAgreementPayload>;
  /** Updates a single `BalanceOperation` using its globally unique id and a patch. */
  updateBalanceOperation?: Maybe<UpdateBalanceOperationPayload>;
  /** Updates a single `BalanceOperation` using a unique key and a patch. */
  updateBalanceOperationByUuid?: Maybe<UpdateBalanceOperationPayload>;
  /** Updates a single `CentralSystemUser` using its globally unique id and a patch. */
  updateCentralSystemUser?: Maybe<UpdateCentralSystemUserPayload>;
  /** Updates a single `CentralSystemUser` using a unique key and a patch. */
  updateCentralSystemUserByIdToken?: Maybe<UpdateCentralSystemUserPayload>;
  /** Updates a single `ChargePointEnergySupplyPrice` using its globally unique id and a patch. */
  updateChargePointEnergySupplyPrice?: Maybe<UpdateChargePointEnergySupplyPricePayload>;
  /** Updates a single `ChargePointEnergySupplyPrice` using a unique key and a patch. */
  updateChargePointEnergySupplyPriceByUuid?: Maybe<UpdateChargePointEnergySupplyPricePayload>;
  /** Updates a single `ChargePointHeartbeat` using its globally unique id and a patch. */
  updateChargePointHeartbeat?: Maybe<UpdateChargePointHeartbeatPayload>;
  /** Updates a single `ChargePointHeartbeat` using a unique key and a patch. */
  updateChargePointHeartbeatByUuid?: Maybe<UpdateChargePointHeartbeatPayload>;
  /** Updates a single `ChargePointSchedule` using its globally unique id and a patch. */
  updateChargePointSchedule?: Maybe<UpdateChargePointSchedulePayload>;
  /** Updates a single `ChargePointSchedule` using a unique key and a patch. */
  updateChargePointScheduleByUuid?: Maybe<UpdateChargePointSchedulePayload>;
  /** Updates a single `ChargePoint` using its globally unique id and a patch. */
  updateChargePoint?: Maybe<UpdateChargePointPayload>;
  /** Updates a single `ChargePoint` using a unique key and a patch. */
  updateChargePointById?: Maybe<UpdateChargePointPayload>;
  /** Updates a single `ChargingProfile` using its globally unique id and a patch. */
  updateChargingProfile?: Maybe<UpdateChargingProfilePayload>;
  /** Updates a single `ChargingProfile` using a unique key and a patch. */
  updateChargingProfileByChargingProfileId?: Maybe<UpdateChargingProfilePayload>;
  /** Updates a single `ChargingSchedulePeriod` using its globally unique id and a patch. */
  updateChargingSchedulePeriod?: Maybe<UpdateChargingSchedulePeriodPayload>;
  /** Updates a single `ChargingSchedulePeriod` using a unique key and a patch. */
  updateChargingSchedulePeriodByUuid?: Maybe<UpdateChargingSchedulePeriodPayload>;
  /** Updates a single `ChargingSchedule` using its globally unique id and a patch. */
  updateChargingSchedule?: Maybe<UpdateChargingSchedulePayload>;
  /** Updates a single `ChargingSchedule` using a unique key and a patch. */
  updateChargingScheduleByUuid?: Maybe<UpdateChargingSchedulePayload>;
  /** Updates a single `ConfigurationKey` using its globally unique id and a patch. */
  updateConfigurationKey?: Maybe<UpdateConfigurationKeyPayload>;
  /** Updates a single `ConfigurationKey` using a unique key and a patch. */
  updateConfigurationKeyByUuid?: Maybe<UpdateConfigurationKeyPayload>;
  /** Updates a single `ConfigurationKey` using a unique key and a patch. */
  updateConfigurationKeyByName?: Maybe<UpdateConfigurationKeyPayload>;
  /** Updates a single `ConnectorStatus` using its globally unique id and a patch. */
  updateConnectorStatus?: Maybe<UpdateConnectorStatusPayload>;
  /** Updates a single `ConnectorStatus` using a unique key and a patch. */
  updateConnectorStatusByUuid?: Maybe<UpdateConnectorStatusPayload>;
  /** Updates a single `ConnectorType` using its globally unique id and a patch. */
  updateConnectorType?: Maybe<UpdateConnectorTypePayload>;
  /** Updates a single `ConnectorType` using a unique key and a patch. */
  updateConnectorTypeByUuid?: Maybe<UpdateConnectorTypePayload>;
  /** Updates a single `Connector` using its globally unique id and a patch. */
  updateConnector?: Maybe<UpdateConnectorPayload>;
  /** Updates a single `Connector` using a unique key and a patch. */
  updateConnectorByUuid?: Maybe<UpdateConnectorPayload>;
  /** Updates a single `Counteragent` using its globally unique id and a patch. */
  updateCounteragent?: Maybe<UpdateCounteragentPayload>;
  /** Updates a single `Counteragent` using a unique key and a patch. */
  updateCounteragentByUuid?: Maybe<UpdateCounteragentPayload>;
  /** Updates a single `Customer` using its globally unique id and a patch. */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Customer` using a unique key and a patch. */
  updateCustomerByIdToken?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `Customer` using a unique key and a patch. */
  updateCustomerByPhoneNumber?: Maybe<UpdateCustomerPayload>;
  /** Updates a single `CustomersPermission` using its globally unique id and a patch. */
  updateCustomersPermission?: Maybe<UpdateCustomersPermissionPayload>;
  /** Updates a single `CustomersPermission` using a unique key and a patch. */
  updateCustomersPermissionByUuid?: Maybe<UpdateCustomersPermissionPayload>;
  /** Updates a single `IdTag` using its globally unique id and a patch. */
  updateIdTag?: Maybe<UpdateIdTagPayload>;
  /** Updates a single `IdTag` using a unique key and a patch. */
  updateIdTagByIdToken?: Maybe<UpdateIdTagPayload>;
  /** Updates a single `MeterValue` using its globally unique id and a patch. */
  updateMeterValue?: Maybe<UpdateMeterValuePayload>;
  /** Updates a single `MeterValue` using a unique key and a patch. */
  updateMeterValueByUuid?: Maybe<UpdateMeterValuePayload>;
  /** Updates a single `Price` using its globally unique id and a patch. */
  updatePrice?: Maybe<UpdatePricePayload>;
  /** Updates a single `Price` using a unique key and a patch. */
  updatePriceByUuid?: Maybe<UpdatePricePayload>;
  /** Updates a single `Price` using a unique key and a patch. */
  updatePriceByName?: Maybe<UpdatePricePayload>;
  /** Updates a single `ShortMessage` using its globally unique id and a patch. */
  updateShortMessage?: Maybe<UpdateShortMessagePayload>;
  /** Updates a single `ShortMessage` using a unique key and a patch. */
  updateShortMessageByUuid?: Maybe<UpdateShortMessagePayload>;
  /** Updates a single `Transaction` using its globally unique id and a patch. */
  updateTransaction?: Maybe<UpdateTransactionPayload>;
  /** Updates a single `Transaction` using a unique key and a patch. */
  updateTransactionByTransactionId?: Maybe<UpdateTransactionPayload>;
  /** Updates a single `YandexPayment` using its globally unique id and a patch. */
  updateYandexPayment?: Maybe<UpdateYandexPaymentPayload>;
  /** Updates a single `YandexPayment` using a unique key and a patch. */
  updateYandexPaymentByUuid?: Maybe<UpdateYandexPaymentPayload>;
  /** Updates a single `YandexPayment` using a unique key and a patch. */
  updateYandexPaymentByBalanceOperationUuid?: Maybe<UpdateYandexPaymentPayload>;
  /** Updates a single `YandexPayment` using a unique key and a patch. */
  updateYandexPaymentByYandexId?: Maybe<UpdateYandexPaymentPayload>;
  /** Deletes a single `Agreement` using its globally unique id. */
  deleteAgreement?: Maybe<DeleteAgreementPayload>;
  /** Deletes a single `Agreement` using a unique key. */
  deleteAgreementByUuid?: Maybe<DeleteAgreementPayload>;
  /** Deletes a single `Agreement` using a unique key. */
  deleteAgreementByName?: Maybe<DeleteAgreementPayload>;
  /** Deletes a single `BalanceOperation` using its globally unique id. */
  deleteBalanceOperation?: Maybe<DeleteBalanceOperationPayload>;
  /** Deletes a single `BalanceOperation` using a unique key. */
  deleteBalanceOperationByUuid?: Maybe<DeleteBalanceOperationPayload>;
  /** Deletes a single `CentralSystemUser` using its globally unique id. */
  deleteCentralSystemUser?: Maybe<DeleteCentralSystemUserPayload>;
  /** Deletes a single `CentralSystemUser` using a unique key. */
  deleteCentralSystemUserByIdToken?: Maybe<DeleteCentralSystemUserPayload>;
  /** Deletes a single `ChargePointEnergySupplyPrice` using its globally unique id. */
  deleteChargePointEnergySupplyPrice?: Maybe<DeleteChargePointEnergySupplyPricePayload>;
  /** Deletes a single `ChargePointEnergySupplyPrice` using a unique key. */
  deleteChargePointEnergySupplyPriceByUuid?: Maybe<DeleteChargePointEnergySupplyPricePayload>;
  /** Deletes a single `ChargePointHeartbeat` using its globally unique id. */
  deleteChargePointHeartbeat?: Maybe<DeleteChargePointHeartbeatPayload>;
  /** Deletes a single `ChargePointHeartbeat` using a unique key. */
  deleteChargePointHeartbeatByUuid?: Maybe<DeleteChargePointHeartbeatPayload>;
  /** Deletes a single `ChargePointSchedule` using its globally unique id. */
  deleteChargePointSchedule?: Maybe<DeleteChargePointSchedulePayload>;
  /** Deletes a single `ChargePointSchedule` using a unique key. */
  deleteChargePointScheduleByUuid?: Maybe<DeleteChargePointSchedulePayload>;
  /** Deletes a single `ChargePoint` using its globally unique id. */
  deleteChargePoint?: Maybe<DeleteChargePointPayload>;
  /** Deletes a single `ChargePoint` using a unique key. */
  deleteChargePointById?: Maybe<DeleteChargePointPayload>;
  /** Deletes a single `ChargingProfile` using its globally unique id. */
  deleteChargingProfile?: Maybe<DeleteChargingProfilePayload>;
  /** Deletes a single `ChargingProfile` using a unique key. */
  deleteChargingProfileByChargingProfileId?: Maybe<DeleteChargingProfilePayload>;
  /** Deletes a single `ChargingSchedulePeriod` using its globally unique id. */
  deleteChargingSchedulePeriod?: Maybe<DeleteChargingSchedulePeriodPayload>;
  /** Deletes a single `ChargingSchedulePeriod` using a unique key. */
  deleteChargingSchedulePeriodByUuid?: Maybe<DeleteChargingSchedulePeriodPayload>;
  /** Deletes a single `ChargingSchedule` using its globally unique id. */
  deleteChargingSchedule?: Maybe<DeleteChargingSchedulePayload>;
  /** Deletes a single `ChargingSchedule` using a unique key. */
  deleteChargingScheduleByUuid?: Maybe<DeleteChargingSchedulePayload>;
  /** Deletes a single `ConfigurationKey` using its globally unique id. */
  deleteConfigurationKey?: Maybe<DeleteConfigurationKeyPayload>;
  /** Deletes a single `ConfigurationKey` using a unique key. */
  deleteConfigurationKeyByUuid?: Maybe<DeleteConfigurationKeyPayload>;
  /** Deletes a single `ConfigurationKey` using a unique key. */
  deleteConfigurationKeyByName?: Maybe<DeleteConfigurationKeyPayload>;
  /** Deletes a single `ConnectorStatus` using its globally unique id. */
  deleteConnectorStatus?: Maybe<DeleteConnectorStatusPayload>;
  /** Deletes a single `ConnectorStatus` using a unique key. */
  deleteConnectorStatusByUuid?: Maybe<DeleteConnectorStatusPayload>;
  /** Deletes a single `ConnectorType` using its globally unique id. */
  deleteConnectorType?: Maybe<DeleteConnectorTypePayload>;
  /** Deletes a single `ConnectorType` using a unique key. */
  deleteConnectorTypeByUuid?: Maybe<DeleteConnectorTypePayload>;
  /** Deletes a single `Connector` using its globally unique id. */
  deleteConnector?: Maybe<DeleteConnectorPayload>;
  /** Deletes a single `Connector` using a unique key. */
  deleteConnectorByUuid?: Maybe<DeleteConnectorPayload>;
  /** Deletes a single `Counteragent` using its globally unique id. */
  deleteCounteragent?: Maybe<DeleteCounteragentPayload>;
  /** Deletes a single `Counteragent` using a unique key. */
  deleteCounteragentByUuid?: Maybe<DeleteCounteragentPayload>;
  /** Deletes a single `Customer` using its globally unique id. */
  deleteCustomer?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Customer` using a unique key. */
  deleteCustomerByIdToken?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `Customer` using a unique key. */
  deleteCustomerByPhoneNumber?: Maybe<DeleteCustomerPayload>;
  /** Deletes a single `CustomersPermission` using its globally unique id. */
  deleteCustomersPermission?: Maybe<DeleteCustomersPermissionPayload>;
  /** Deletes a single `CustomersPermission` using a unique key. */
  deleteCustomersPermissionByUuid?: Maybe<DeleteCustomersPermissionPayload>;
  /** Deletes a single `IdTag` using its globally unique id. */
  deleteIdTag?: Maybe<DeleteIdTagPayload>;
  /** Deletes a single `IdTag` using a unique key. */
  deleteIdTagByIdToken?: Maybe<DeleteIdTagPayload>;
  /** Deletes a single `MeterValue` using its globally unique id. */
  deleteMeterValue?: Maybe<DeleteMeterValuePayload>;
  /** Deletes a single `MeterValue` using a unique key. */
  deleteMeterValueByUuid?: Maybe<DeleteMeterValuePayload>;
  /** Deletes a single `Price` using its globally unique id. */
  deletePrice?: Maybe<DeletePricePayload>;
  /** Deletes a single `Price` using a unique key. */
  deletePriceByUuid?: Maybe<DeletePricePayload>;
  /** Deletes a single `Price` using a unique key. */
  deletePriceByName?: Maybe<DeletePricePayload>;
  /** Deletes a single `ShortMessage` using its globally unique id. */
  deleteShortMessage?: Maybe<DeleteShortMessagePayload>;
  /** Deletes a single `ShortMessage` using a unique key. */
  deleteShortMessageByUuid?: Maybe<DeleteShortMessagePayload>;
  /** Deletes a single `Transaction` using its globally unique id. */
  deleteTransaction?: Maybe<DeleteTransactionPayload>;
  /** Deletes a single `Transaction` using a unique key. */
  deleteTransactionByTransactionId?: Maybe<DeleteTransactionPayload>;
  /** Deletes a single `YandexPayment` using its globally unique id. */
  deleteYandexPayment?: Maybe<DeleteYandexPaymentPayload>;
  /** Deletes a single `YandexPayment` using a unique key. */
  deleteYandexPaymentByUuid?: Maybe<DeleteYandexPaymentPayload>;
  /** Deletes a single `YandexPayment` using a unique key. */
  deleteYandexPaymentByBalanceOperationUuid?: Maybe<DeleteYandexPaymentPayload>;
  /** Deletes a single `YandexPayment` using a unique key. */
  deleteYandexPaymentByYandexId?: Maybe<DeleteYandexPaymentPayload>;
  remoteStartTransaction?: Maybe<RemoteStartTransactionResponse>;
  remoteStopTransaction?: Maybe<RemoteStopTransactionResponse>;
  initPayment?: Maybe<InitPaymentResponse>;
  checkPayment?: Maybe<CheckPaymentResponse>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAgreementArgs = {
  input: CreateAgreementInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBalanceOperationArgs = {
  input: CreateBalanceOperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCentralSystemUserArgs = {
  input: CreateCentralSystemUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChargePointEnergySupplyPriceArgs = {
  input: CreateChargePointEnergySupplyPriceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChargePointHeartbeatArgs = {
  input: CreateChargePointHeartbeatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChargePointScheduleArgs = {
  input: CreateChargePointScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChargePointArgs = {
  input: CreateChargePointInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChargingProfileArgs = {
  input: CreateChargingProfileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChargingSchedulePeriodArgs = {
  input: CreateChargingSchedulePeriodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChargingScheduleArgs = {
  input: CreateChargingScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateConfigurationKeyArgs = {
  input: CreateConfigurationKeyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateConnectorStatusArgs = {
  input: CreateConnectorStatusInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateConnectorTypeArgs = {
  input: CreateConnectorTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateConnectorArgs = {
  input: CreateConnectorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCounteragentArgs = {
  input: CreateCounteragentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCustomersPermissionArgs = {
  input: CreateCustomersPermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateIdTagArgs = {
  input: CreateIdTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMeterValueArgs = {
  input: CreateMeterValueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePriceArgs = {
  input: CreatePriceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateShortMessageArgs = {
  input: CreateShortMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateYandexPaymentArgs = {
  input: CreateYandexPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAgreementArgs = {
  input: UpdateAgreementInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAgreementByUuidArgs = {
  input: UpdateAgreementByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAgreementByNameArgs = {
  input: UpdateAgreementByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBalanceOperationArgs = {
  input: UpdateBalanceOperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBalanceOperationByUuidArgs = {
  input: UpdateBalanceOperationByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCentralSystemUserArgs = {
  input: UpdateCentralSystemUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCentralSystemUserByIdTokenArgs = {
  input: UpdateCentralSystemUserByIdTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointEnergySupplyPriceArgs = {
  input: UpdateChargePointEnergySupplyPriceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointEnergySupplyPriceByUuidArgs = {
  input: UpdateChargePointEnergySupplyPriceByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointHeartbeatArgs = {
  input: UpdateChargePointHeartbeatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointHeartbeatByUuidArgs = {
  input: UpdateChargePointHeartbeatByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointScheduleArgs = {
  input: UpdateChargePointScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointScheduleByUuidArgs = {
  input: UpdateChargePointScheduleByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointArgs = {
  input: UpdateChargePointInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargePointByIdArgs = {
  input: UpdateChargePointByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargingProfileArgs = {
  input: UpdateChargingProfileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargingProfileByChargingProfileIdArgs = {
  input: UpdateChargingProfileByChargingProfileIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargingSchedulePeriodArgs = {
  input: UpdateChargingSchedulePeriodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargingSchedulePeriodByUuidArgs = {
  input: UpdateChargingSchedulePeriodByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargingScheduleArgs = {
  input: UpdateChargingScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChargingScheduleByUuidArgs = {
  input: UpdateChargingScheduleByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConfigurationKeyArgs = {
  input: UpdateConfigurationKeyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConfigurationKeyByUuidArgs = {
  input: UpdateConfigurationKeyByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConfigurationKeyByNameArgs = {
  input: UpdateConfigurationKeyByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConnectorStatusArgs = {
  input: UpdateConnectorStatusInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConnectorStatusByUuidArgs = {
  input: UpdateConnectorStatusByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConnectorTypeArgs = {
  input: UpdateConnectorTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConnectorTypeByUuidArgs = {
  input: UpdateConnectorTypeByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConnectorArgs = {
  input: UpdateConnectorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateConnectorByUuidArgs = {
  input: UpdateConnectorByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCounteragentArgs = {
  input: UpdateCounteragentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCounteragentByUuidArgs = {
  input: UpdateCounteragentByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerByIdTokenArgs = {
  input: UpdateCustomerByIdTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerByPhoneNumberArgs = {
  input: UpdateCustomerByPhoneNumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomersPermissionArgs = {
  input: UpdateCustomersPermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomersPermissionByUuidArgs = {
  input: UpdateCustomersPermissionByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateIdTagArgs = {
  input: UpdateIdTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateIdTagByIdTokenArgs = {
  input: UpdateIdTagByIdTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMeterValueArgs = {
  input: UpdateMeterValueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMeterValueByUuidArgs = {
  input: UpdateMeterValueByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePriceArgs = {
  input: UpdatePriceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePriceByUuidArgs = {
  input: UpdatePriceByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePriceByNameArgs = {
  input: UpdatePriceByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateShortMessageArgs = {
  input: UpdateShortMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateShortMessageByUuidArgs = {
  input: UpdateShortMessageByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTransactionByTransactionIdArgs = {
  input: UpdateTransactionByTransactionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateYandexPaymentArgs = {
  input: UpdateYandexPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateYandexPaymentByUuidArgs = {
  input: UpdateYandexPaymentByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateYandexPaymentByBalanceOperationUuidArgs = {
  input: UpdateYandexPaymentByBalanceOperationUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateYandexPaymentByYandexIdArgs = {
  input: UpdateYandexPaymentByYandexIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAgreementArgs = {
  input: DeleteAgreementInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAgreementByUuidArgs = {
  input: DeleteAgreementByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAgreementByNameArgs = {
  input: DeleteAgreementByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBalanceOperationArgs = {
  input: DeleteBalanceOperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBalanceOperationByUuidArgs = {
  input: DeleteBalanceOperationByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCentralSystemUserArgs = {
  input: DeleteCentralSystemUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCentralSystemUserByIdTokenArgs = {
  input: DeleteCentralSystemUserByIdTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointEnergySupplyPriceArgs = {
  input: DeleteChargePointEnergySupplyPriceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointEnergySupplyPriceByUuidArgs = {
  input: DeleteChargePointEnergySupplyPriceByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointHeartbeatArgs = {
  input: DeleteChargePointHeartbeatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointHeartbeatByUuidArgs = {
  input: DeleteChargePointHeartbeatByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointScheduleArgs = {
  input: DeleteChargePointScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointScheduleByUuidArgs = {
  input: DeleteChargePointScheduleByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointArgs = {
  input: DeleteChargePointInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargePointByIdArgs = {
  input: DeleteChargePointByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargingProfileArgs = {
  input: DeleteChargingProfileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargingProfileByChargingProfileIdArgs = {
  input: DeleteChargingProfileByChargingProfileIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargingSchedulePeriodArgs = {
  input: DeleteChargingSchedulePeriodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargingSchedulePeriodByUuidArgs = {
  input: DeleteChargingSchedulePeriodByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargingScheduleArgs = {
  input: DeleteChargingScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChargingScheduleByUuidArgs = {
  input: DeleteChargingScheduleByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConfigurationKeyArgs = {
  input: DeleteConfigurationKeyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConfigurationKeyByUuidArgs = {
  input: DeleteConfigurationKeyByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConfigurationKeyByNameArgs = {
  input: DeleteConfigurationKeyByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConnectorStatusArgs = {
  input: DeleteConnectorStatusInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConnectorStatusByUuidArgs = {
  input: DeleteConnectorStatusByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConnectorTypeArgs = {
  input: DeleteConnectorTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConnectorTypeByUuidArgs = {
  input: DeleteConnectorTypeByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConnectorArgs = {
  input: DeleteConnectorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteConnectorByUuidArgs = {
  input: DeleteConnectorByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCounteragentArgs = {
  input: DeleteCounteragentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCounteragentByUuidArgs = {
  input: DeleteCounteragentByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerByIdTokenArgs = {
  input: DeleteCustomerByIdTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerByPhoneNumberArgs = {
  input: DeleteCustomerByPhoneNumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomersPermissionArgs = {
  input: DeleteCustomersPermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomersPermissionByUuidArgs = {
  input: DeleteCustomersPermissionByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteIdTagArgs = {
  input: DeleteIdTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteIdTagByIdTokenArgs = {
  input: DeleteIdTagByIdTokenInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMeterValueArgs = {
  input: DeleteMeterValueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMeterValueByUuidArgs = {
  input: DeleteMeterValueByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePriceArgs = {
  input: DeletePriceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePriceByUuidArgs = {
  input: DeletePriceByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePriceByNameArgs = {
  input: DeletePriceByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteShortMessageArgs = {
  input: DeleteShortMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteShortMessageByUuidArgs = {
  input: DeleteShortMessageByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTransactionArgs = {
  input: DeleteTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTransactionByTransactionIdArgs = {
  input: DeleteTransactionByTransactionIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteYandexPaymentArgs = {
  input: DeleteYandexPaymentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteYandexPaymentByUuidArgs = {
  input: DeleteYandexPaymentByUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteYandexPaymentByBalanceOperationUuidArgs = {
  input: DeleteYandexPaymentByBalanceOperationUuidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteYandexPaymentByYandexIdArgs = {
  input: DeleteYandexPaymentByYandexIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRemoteStartTransactionArgs = {
  input?: Maybe<RemoteStartTransactionInput>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRemoteStopTransactionArgs = {
  input?: Maybe<RemoteStopTransactionInput>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationInitPaymentArgs = {
  input?: Maybe<InitPaymentInput>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCheckPaymentArgs = {
  input?: Maybe<CheckPaymentInput>;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

export enum PermissionType {
  MultipleChargingSessions = 'MultipleChargingSessions'
}

/** A filter to be used against PermissionType fields. All fields are combined with a logical ‘and.’ */
export type PermissionTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<PermissionType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<PermissionType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<PermissionType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<PermissionType>;
  /** Included in the specified list. */
  in?: Maybe<Array<PermissionType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<PermissionType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<PermissionType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<PermissionType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<PermissionType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<PermissionType>;
};

export type Price = Node & {
   __typename?: 'Price';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt: Scalars['Datetime'];
  /** Reads a single `ChargePoint` that is related to this `Price`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Price`. */
  connectorTypeByConnectorTypeUuid?: Maybe<ConnectorType>;
  /** Reads a single `Customer` that is related to this `Price`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Price`. */
  connectorByConnectorUuid?: Maybe<Connector>;
};

/** A condition to be used against `Price` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PriceCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `value` field. */
  value?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `chargePointId` field. */
  chargePointId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `connectorTypeUuid` field. */
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `connectorUuid` field. */
  connectorUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Price` object types. All fields are combined with a logical ‘and.’ */
export type PriceFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: Maybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: Maybe<FloatFilter>;
  /** Filter by the object’s `chargePointId` field. */
  chargePointId?: Maybe<StringFilter>;
  /** Filter by the object’s `connectorTypeUuid` field. */
  connectorTypeUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<StringFilter>;
  /** Filter by the object’s `connectorUuid` field. */
  connectorUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PriceFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PriceFilter>>;
  /** Negates the expression. */
  not?: Maybe<PriceFilter>;
};

/** An input for mutations affecting `Price` */
export type PriceInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type PriceNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `price` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type PriceNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `price` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PriceOnPriceForPricesChargePointIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargePoint` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesChargePointIdFkeyUsingPricesNameKeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesChargePointIdFkeyPatch;
  name: Scalars['String'];
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesChargePointIdFkeyUsingPricesPkeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesChargePointIdFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PriceOnPriceForPricesConnectorTypeUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connectorType` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connectorType` being updated. */
  connectorTypePatch: ConnectorTypePatch;
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesConnectorTypeUuidFkeyUsingPricesNameKeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesConnectorTypeUuidFkeyPatch;
  name: Scalars['String'];
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesConnectorTypeUuidFkeyUsingPricesPkeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesConnectorTypeUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PriceOnPriceForPricesConnectorUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connector` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: ConnectorPatch;
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesConnectorUuidFkeyUsingPricesNameKeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesConnectorUuidFkeyPatch;
  name: Scalars['String'];
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesConnectorUuidFkeyUsingPricesPkeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesConnectorUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PriceOnPriceForPricesCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `customer` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: CustomerPatch;
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesCustomerIdTokenFkeyUsingPricesNameKeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesCustomerIdTokenFkeyPatch;
  name: Scalars['String'];
};

/** The fields on `price` to look up the row to update. */
export type PriceOnPriceForPricesCustomerIdTokenFkeyUsingPricesPkeyUpdate = {
  /** An object where the defined keys will be set on the `price` being updated. */
  pricePatch: UpdatePriceOnPriceForPricesCustomerIdTokenFkeyPatch;
  uuid: Scalars['UUID'];
};

/** Represents an update to a `Price`. Fields that are set will be updated. */
export type PricePatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** The fields on `price` to look up the row to connect. */
export type PricePricesNameKeyConnect = {
  name: Scalars['String'];
};

/** The fields on `price` to look up the row to delete. */
export type PricePricesNameKeyDelete = {
  name: Scalars['String'];
};

/** The fields on `price` to look up the row to connect. */
export type PricePricesPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `price` to look up the row to delete. */
export type PricePricesPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** The `chargePoint` to be created by this mutation. */
export type PricesChargePointIdFkeyChargePointsCreateInput = {
  id: Scalars['String'];
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** Input for the nested mutation of `chargePoint` in the `PriceInput` mutation. */
export type PricesChargePointIdFkeyInput = {
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectById?: Maybe<ChargePointChargePointsPkeyConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  connectByNodeId?: Maybe<ChargePointNodeIdConnect>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteById?: Maybe<ChargePointChargePointsPkeyDelete>;
  /** The primary key(s) for `chargePoint` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ChargePointNodeIdDelete>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateById?: Maybe<ChargePointOnPriceForPricesChargePointIdFkeyUsingChargePointsPkeyUpdate>;
  /** The primary key(s) and patch data for `chargePoint` for the far side of the relationship. */
  updateByNodeId?: Maybe<PriceOnPriceForPricesChargePointIdFkeyNodeIdUpdate>;
  /** A `ChargePointInput` object that will be created and connected to this object. */
  create?: Maybe<PricesChargePointIdFkeyChargePointsCreateInput>;
};

/** Input for the nested mutation of `price` in the `ChargePointInput` mutation. */
export type PricesChargePointIdFkeyInverseInput = {
  /** Flag indicating whether all other `price` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<PricePricesPkeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByName?: Maybe<Array<PricePricesNameKeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PriceNodeIdConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<PricePricesPkeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByName?: Maybe<Array<PricePricesNameKeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PriceNodeIdDelete>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<PriceOnPriceForPricesChargePointIdFkeyUsingPricesPkeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByName?: Maybe<Array<PriceOnPriceForPricesChargePointIdFkeyUsingPricesNameKeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ChargePointOnPriceForPricesChargePointIdFkeyNodeIdUpdate>>;
  /** A `PriceInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PricesChargePointIdFkeyPricesCreateInput>>;
};

/** The `price` to be created by this mutation. */
export type PricesChargePointIdFkeyPricesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** A connection to a list of `Price` values. */
export type PricesConnection = {
   __typename?: 'PricesConnection';
  /** A list of `Price` objects. */
  nodes: Array<Maybe<Price>>;
  /** A list of edges which contains the `Price` and cursor to aid in pagination. */
  edges: Array<PricesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Price` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** The `connectorType` to be created by this mutation. */
export type PricesConnectorTypeUuidFkeyConnectorTypesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPower: Scalars['Float'];
  maxCurrent: Scalars['Float'];
  name: Scalars['String'];
  connectorsUsingUuid?: Maybe<ConnectorsTypeUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorTypeUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `connectorType` in the `PriceInput` mutation. */
export type PricesConnectorTypeUuidFkeyInput = {
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  connectByUuid?: Maybe<ConnectorTypeConnectorTypesPkeyConnect>;
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  connectByNodeId?: Maybe<ConnectorTypeNodeIdConnect>;
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  deleteByUuid?: Maybe<ConnectorTypeConnectorTypesPkeyDelete>;
  /** The primary key(s) for `connectorType` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ConnectorTypeNodeIdDelete>;
  /** The primary key(s) and patch data for `connectorType` for the far side of the relationship. */
  updateByUuid?: Maybe<ConnectorTypeOnPriceForPricesConnectorTypeUuidFkeyUsingConnectorTypesPkeyUpdate>;
  /** The primary key(s) and patch data for `connectorType` for the far side of the relationship. */
  updateByNodeId?: Maybe<PriceOnPriceForPricesConnectorTypeUuidFkeyNodeIdUpdate>;
  /** A `ConnectorTypeInput` object that will be created and connected to this object. */
  create?: Maybe<PricesConnectorTypeUuidFkeyConnectorTypesCreateInput>;
};

/** Input for the nested mutation of `price` in the `ConnectorTypeInput` mutation. */
export type PricesConnectorTypeUuidFkeyInverseInput = {
  /** Flag indicating whether all other `price` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<PricePricesPkeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByName?: Maybe<Array<PricePricesNameKeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PriceNodeIdConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<PricePricesPkeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByName?: Maybe<Array<PricePricesNameKeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PriceNodeIdDelete>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<PriceOnPriceForPricesConnectorTypeUuidFkeyUsingPricesPkeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByName?: Maybe<Array<PriceOnPriceForPricesConnectorTypeUuidFkeyUsingPricesNameKeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ConnectorTypeOnPriceForPricesConnectorTypeUuidFkeyNodeIdUpdate>>;
  /** A `PriceInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PricesConnectorTypeUuidFkeyPricesCreateInput>>;
};

/** The `price` to be created by this mutation. */
export type PricesConnectorTypeUuidFkeyPricesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  chargePointId?: Maybe<Scalars['String']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** The `connector` to be created by this mutation. */
export type PricesConnectorUuidFkeyConnectorsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `connector` in the `PriceInput` mutation. */
export type PricesConnectorUuidFkeyInput = {
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByUuid?: Maybe<ConnectorConnectorsPkeyConnect>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByNodeId?: Maybe<ConnectorNodeIdConnect>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByUuid?: Maybe<ConnectorConnectorsPkeyDelete>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ConnectorNodeIdDelete>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByUuid?: Maybe<ConnectorOnPriceForPricesConnectorUuidFkeyUsingConnectorsPkeyUpdate>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByNodeId?: Maybe<PriceOnPriceForPricesConnectorUuidFkeyNodeIdUpdate>;
  /** A `ConnectorInput` object that will be created and connected to this object. */
  create?: Maybe<PricesConnectorUuidFkeyConnectorsCreateInput>;
};

/** Input for the nested mutation of `price` in the `ConnectorInput` mutation. */
export type PricesConnectorUuidFkeyInverseInput = {
  /** Flag indicating whether all other `price` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<PricePricesPkeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByName?: Maybe<Array<PricePricesNameKeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PriceNodeIdConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<PricePricesPkeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByName?: Maybe<Array<PricePricesNameKeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PriceNodeIdDelete>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<PriceOnPriceForPricesConnectorUuidFkeyUsingPricesPkeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByName?: Maybe<Array<PriceOnPriceForPricesConnectorUuidFkeyUsingPricesNameKeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ConnectorOnPriceForPricesConnectorUuidFkeyNodeIdUpdate>>;
  /** A `PriceInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PricesConnectorUuidFkeyPricesCreateInput>>;
};

/** The `price` to be created by this mutation. */
export type PricesConnectorUuidFkeyPricesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** The `customer` to be created by this mutation. */
export type PricesCustomerIdTokenFkeyCustomersCreateInput = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** Input for the nested mutation of `customer` in the `PriceInput` mutation. */
export type PricesCustomerIdTokenFkeyInput = {
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByIdToken?: Maybe<CustomerCustomersPkeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByNodeId?: Maybe<CustomerNodeIdConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CustomerCustomersPkeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByIdToken?: Maybe<CustomerOnPriceForPricesCustomerIdTokenFkeyUsingCustomersPkeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByPhoneNumber?: Maybe<CustomerOnPriceForPricesCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByNodeId?: Maybe<PriceOnPriceForPricesCustomerIdTokenFkeyNodeIdUpdate>;
  /** A `CustomerInput` object that will be created and connected to this object. */
  create?: Maybe<PricesCustomerIdTokenFkeyCustomersCreateInput>;
};

/** Input for the nested mutation of `price` in the `CustomerInput` mutation. */
export type PricesCustomerIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `price` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<PricePricesPkeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByName?: Maybe<Array<PricePricesNameKeyConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<PriceNodeIdConnect>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<PricePricesPkeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByName?: Maybe<Array<PricePricesNameKeyDelete>>;
  /** The primary key(s) for `price` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<PriceNodeIdDelete>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<PriceOnPriceForPricesCustomerIdTokenFkeyUsingPricesPkeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByName?: Maybe<Array<PriceOnPriceForPricesCustomerIdTokenFkeyUsingPricesNameKeyUpdate>>;
  /** The primary key(s) and patch data for `price` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CustomerOnPriceForPricesCustomerIdTokenFkeyNodeIdUpdate>>;
  /** A `PriceInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PricesCustomerIdTokenFkeyPricesCreateInput>>;
};

/** The `price` to be created by this mutation. */
export type PricesCustomerIdTokenFkeyPricesCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** A `Price` edge in the connection. */
export type PricesEdge = {
   __typename?: 'PricesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Price` at the end of the edge. */
  node?: Maybe<Price>;
};

/** Methods to use when ordering `Price`. */
export enum PricesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
  ChargePointIdAsc = 'CHARGE_POINT_ID_ASC',
  ChargePointIdDesc = 'CHARGE_POINT_ID_DESC',
  ConnectorTypeUuidAsc = 'CONNECTOR_TYPE_UUID_ASC',
  ConnectorTypeUuidDesc = 'CONNECTOR_TYPE_UUID_DESC',
  CustomerIdTokenAsc = 'CUSTOMER_ID_TOKEN_ASC',
  CustomerIdTokenDesc = 'CUSTOMER_ID_TOKEN_DESC',
  ConnectorUuidAsc = 'CONNECTOR_UUID_ASC',
  ConnectorUuidDesc = 'CONNECTOR_UUID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
   __typename?: 'Query';
  /** 
 * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
 */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Agreement`. */
  allAgreements?: Maybe<AgreementsConnection>;
  /** Reads and enables pagination through a set of `BalanceOperation`. */
  allBalanceOperations?: Maybe<BalanceOperationsConnection>;
  /** Reads and enables pagination through a set of `CentralSystemUser`. */
  allCentralSystemUsers?: Maybe<CentralSystemUsersConnection>;
  /** Reads and enables pagination through a set of `ChargePointEnergySupplyPrice`. */
  allChargePointEnergySupplyPrices?: Maybe<ChargePointEnergySupplyPricesConnection>;
  /** Reads and enables pagination through a set of `ChargePointHeartbeat`. */
  allChargePointHeartbeats?: Maybe<ChargePointHeartbeatsConnection>;
  /** Reads and enables pagination through a set of `ChargePointSchedule`. */
  allChargePointSchedules?: Maybe<ChargePointSchedulesConnection>;
  /** Reads and enables pagination through a set of `ChargePoint`. */
  allChargePoints?: Maybe<ChargePointsConnection>;
  /** Reads and enables pagination through a set of `ChargingProfile`. */
  allChargingProfiles?: Maybe<ChargingProfilesConnection>;
  /** Reads and enables pagination through a set of `ChargingSchedulePeriod`. */
  allChargingSchedulePeriods?: Maybe<ChargingSchedulePeriodsConnection>;
  /** Reads and enables pagination through a set of `ChargingSchedule`. */
  allChargingSchedules?: Maybe<ChargingSchedulesConnection>;
  /** Reads and enables pagination through a set of `ConfigurationKey`. */
  allConfigurationKeys?: Maybe<ConfigurationKeysConnection>;
  /** Reads and enables pagination through a set of `ConnectorStatus`. */
  allConnectorStatuses?: Maybe<ConnectorStatusesConnection>;
  /** Reads and enables pagination through a set of `ConnectorType`. */
  allConnectorTypes?: Maybe<ConnectorTypesConnection>;
  /** Reads and enables pagination through a set of `Connector`. */
  allConnectors?: Maybe<ConnectorsConnection>;
  /** Reads and enables pagination through a set of `Counteragent`. */
  allCounteragents?: Maybe<CounteragentsConnection>;
  /** Reads and enables pagination through a set of `Customer`. */
  allCustomers?: Maybe<CustomersConnection>;
  /** Reads and enables pagination through a set of `CustomersPermission`. */
  allCustomersPermissions?: Maybe<CustomersPermissionsConnection>;
  /** Reads and enables pagination through a set of `IdTag`. */
  allIdTags?: Maybe<IdTagsConnection>;
  /** Reads and enables pagination through a set of `MeterValue`. */
  allMeterValues?: Maybe<MeterValuesConnection>;
  /** Reads and enables pagination through a set of `Price`. */
  allPrices?: Maybe<PricesConnection>;
  /** Reads and enables pagination through a set of `ShortMessage`. */
  allShortMessages?: Maybe<ShortMessagesConnection>;
  /** Reads and enables pagination through a set of `Transaction`. */
  allTransactions?: Maybe<TransactionsConnection>;
  /** Reads and enables pagination through a set of `YandexPayment`. */
  allYandexPayments?: Maybe<YandexPaymentsConnection>;
  agreementByUuid?: Maybe<Agreement>;
  agreementByName?: Maybe<Agreement>;
  balanceOperationByUuid?: Maybe<BalanceOperation>;
  centralSystemUserByIdToken?: Maybe<CentralSystemUser>;
  chargePointEnergySupplyPriceByUuid?: Maybe<ChargePointEnergySupplyPrice>;
  chargePointHeartbeatByUuid?: Maybe<ChargePointHeartbeat>;
  chargePointScheduleByUuid?: Maybe<ChargePointSchedule>;
  chargePointById?: Maybe<ChargePoint>;
  chargingProfileByChargingProfileId?: Maybe<ChargingProfile>;
  chargingSchedulePeriodByUuid?: Maybe<ChargingSchedulePeriod>;
  chargingScheduleByUuid?: Maybe<ChargingSchedule>;
  configurationKeyByUuid?: Maybe<ConfigurationKey>;
  configurationKeyByName?: Maybe<ConfigurationKey>;
  connectorStatusByUuid?: Maybe<ConnectorStatus>;
  connectorTypeByUuid?: Maybe<ConnectorType>;
  connectorByUuid?: Maybe<Connector>;
  counteragentByUuid?: Maybe<Counteragent>;
  customerByIdToken?: Maybe<Customer>;
  customerByPhoneNumber?: Maybe<Customer>;
  customersPermissionByUuid?: Maybe<CustomersPermission>;
  idTagByIdToken?: Maybe<IdTag>;
  meterValueByUuid?: Maybe<MeterValue>;
  priceByUuid?: Maybe<Price>;
  priceByName?: Maybe<Price>;
  shortMessageByUuid?: Maybe<ShortMessage>;
  transactionByTransactionId?: Maybe<Transaction>;
  yandexPaymentByUuid?: Maybe<YandexPayment>;
  yandexPaymentByBalanceOperationUuid?: Maybe<YandexPayment>;
  yandexPaymentByYandexId?: Maybe<YandexPayment>;
  /** Reads a single `Agreement` using its globally unique `ID`. */
  agreement?: Maybe<Agreement>;
  /** Reads a single `BalanceOperation` using its globally unique `ID`. */
  balanceOperation?: Maybe<BalanceOperation>;
  /** Reads a single `CentralSystemUser` using its globally unique `ID`. */
  centralSystemUser?: Maybe<CentralSystemUser>;
  /** Reads a single `ChargePointEnergySupplyPrice` using its globally unique `ID`. */
  chargePointEnergySupplyPrice?: Maybe<ChargePointEnergySupplyPrice>;
  /** Reads a single `ChargePointHeartbeat` using its globally unique `ID`. */
  chargePointHeartbeat?: Maybe<ChargePointHeartbeat>;
  /** Reads a single `ChargePointSchedule` using its globally unique `ID`. */
  chargePointSchedule?: Maybe<ChargePointSchedule>;
  /** Reads a single `ChargePoint` using its globally unique `ID`. */
  chargePoint?: Maybe<ChargePoint>;
  /** Reads a single `ChargingProfile` using its globally unique `ID`. */
  chargingProfile?: Maybe<ChargingProfile>;
  /** Reads a single `ChargingSchedulePeriod` using its globally unique `ID`. */
  chargingSchedulePeriod?: Maybe<ChargingSchedulePeriod>;
  /** Reads a single `ChargingSchedule` using its globally unique `ID`. */
  chargingSchedule?: Maybe<ChargingSchedule>;
  /** Reads a single `ConfigurationKey` using its globally unique `ID`. */
  configurationKey?: Maybe<ConfigurationKey>;
  /** Reads a single `ConnectorStatus` using its globally unique `ID`. */
  connectorStatus?: Maybe<ConnectorStatus>;
  /** Reads a single `ConnectorType` using its globally unique `ID`. */
  connectorType?: Maybe<ConnectorType>;
  /** Reads a single `Connector` using its globally unique `ID`. */
  connector?: Maybe<Connector>;
  /** Reads a single `Counteragent` using its globally unique `ID`. */
  counteragent?: Maybe<Counteragent>;
  /** Reads a single `Customer` using its globally unique `ID`. */
  customer?: Maybe<Customer>;
  /** Reads a single `CustomersPermission` using its globally unique `ID`. */
  customersPermission?: Maybe<CustomersPermission>;
  /** Reads a single `IdTag` using its globally unique `ID`. */
  idTag?: Maybe<IdTag>;
  /** Reads a single `MeterValue` using its globally unique `ID`. */
  meterValue?: Maybe<MeterValue>;
  /** Reads a single `Price` using its globally unique `ID`. */
  price?: Maybe<Price>;
  /** Reads a single `ShortMessage` using its globally unique `ID`. */
  shortMessage?: Maybe<ShortMessage>;
  /** Reads a single `Transaction` using its globally unique `ID`. */
  transaction?: Maybe<Transaction>;
  /** Reads a single `YandexPayment` using its globally unique `ID`. */
  yandexPayment?: Maybe<YandexPayment>;
  allChargingPrices?: Maybe<ChargingPricesConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAgreementsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AgreementsOrderBy>>;
  condition?: Maybe<AgreementCondition>;
  filter?: Maybe<AgreementFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBalanceOperationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BalanceOperationsOrderBy>>;
  condition?: Maybe<BalanceOperationCondition>;
  filter?: Maybe<BalanceOperationFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCentralSystemUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CentralSystemUsersOrderBy>>;
  condition?: Maybe<CentralSystemUserCondition>;
  filter?: Maybe<CentralSystemUserFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargePointEnergySupplyPricesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointEnergySupplyPricesOrderBy>>;
  condition?: Maybe<ChargePointEnergySupplyPriceCondition>;
  filter?: Maybe<ChargePointEnergySupplyPriceFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargePointHeartbeatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointHeartbeatsOrderBy>>;
  condition?: Maybe<ChargePointHeartbeatCondition>;
  filter?: Maybe<ChargePointHeartbeatFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargePointSchedulesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointSchedulesOrderBy>>;
  condition?: Maybe<ChargePointScheduleCondition>;
  filter?: Maybe<ChargePointScheduleFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargePointsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargePointsOrderBy>>;
  condition?: Maybe<ChargePointCondition>;
  filter?: Maybe<ChargePointFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargingProfilesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargingProfilesOrderBy>>;
  condition?: Maybe<ChargingProfileCondition>;
  filter?: Maybe<ChargingProfileFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargingSchedulePeriodsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargingSchedulePeriodsOrderBy>>;
  condition?: Maybe<ChargingSchedulePeriodCondition>;
  filter?: Maybe<ChargingSchedulePeriodFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargingSchedulesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargingSchedulesOrderBy>>;
  condition?: Maybe<ChargingScheduleCondition>;
  filter?: Maybe<ChargingScheduleFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllConfigurationKeysArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ConfigurationKeysOrderBy>>;
  condition?: Maybe<ConfigurationKeyCondition>;
  filter?: Maybe<ConfigurationKeyFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllConnectorStatusesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ConnectorStatusesOrderBy>>;
  condition?: Maybe<ConnectorStatusCondition>;
  filter?: Maybe<ConnectorStatusFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllConnectorTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ConnectorTypesOrderBy>>;
  condition?: Maybe<ConnectorTypeCondition>;
  filter?: Maybe<ConnectorTypeFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllConnectorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ConnectorsOrderBy>>;
  condition?: Maybe<ConnectorCondition>;
  filter?: Maybe<ConnectorFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCounteragentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CounteragentsOrderBy>>;
  condition?: Maybe<CounteragentCondition>;
  filter?: Maybe<CounteragentFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CustomersOrderBy>>;
  condition?: Maybe<CustomerCondition>;
  filter?: Maybe<CustomerFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCustomersPermissionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CustomersPermissionsOrderBy>>;
  condition?: Maybe<CustomersPermissionCondition>;
  filter?: Maybe<CustomersPermissionFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllIdTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<IdTagsOrderBy>>;
  condition?: Maybe<IdTagCondition>;
  filter?: Maybe<IdTagFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMeterValuesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MeterValuesOrderBy>>;
  condition?: Maybe<MeterValueCondition>;
  filter?: Maybe<MeterValueFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPricesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PricesOrderBy>>;
  condition?: Maybe<PriceCondition>;
  filter?: Maybe<PriceFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllShortMessagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ShortMessagesOrderBy>>;
  condition?: Maybe<ShortMessageCondition>;
  filter?: Maybe<ShortMessageFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
  condition?: Maybe<TransactionCondition>;
  filter?: Maybe<TransactionFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllYandexPaymentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<YandexPaymentsOrderBy>>;
  condition?: Maybe<YandexPaymentCondition>;
  filter?: Maybe<YandexPaymentFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAgreementByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAgreementByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBalanceOperationByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCentralSystemUserByIdTokenArgs = {
  idToken: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointEnergySupplyPriceByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointHeartbeatByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointScheduleByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointByIdArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargingProfileByChargingProfileIdArgs = {
  chargingProfileId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargingSchedulePeriodByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargingScheduleByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConfigurationKeyByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConfigurationKeyByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConnectorStatusByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConnectorTypeByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConnectorByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCounteragentByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerByIdTokenArgs = {
  idToken: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerByPhoneNumberArgs = {
  phoneNumber: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomersPermissionByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIdTagByIdTokenArgs = {
  idToken: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMeterValueByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPriceByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPriceByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryShortMessageByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionByTransactionIdArgs = {
  transactionId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryYandexPaymentByUuidArgs = {
  uuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryYandexPaymentByBalanceOperationUuidArgs = {
  balanceOperationUuid: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryYandexPaymentByYandexIdArgs = {
  yandexId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAgreementArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBalanceOperationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCentralSystemUserArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointEnergySupplyPriceArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointHeartbeatArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointScheduleArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargePointArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargingProfileArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargingSchedulePeriodArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChargingScheduleArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConfigurationKeyArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConnectorStatusArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConnectorTypeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryConnectorArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCounteragentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomerArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCustomersPermissionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIdTagArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMeterValueArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPriceArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryShortMessageArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransactionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryYandexPaymentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllChargingPricesArgs = {
  input?: Maybe<Array<Maybe<ChargingPriceInput>>>;
};

export enum RecurrencyKindType {
  Daily = 'Daily',
  Weekly = 'Weekly'
}

/** A filter to be used against RecurrencyKindType fields. All fields are combined with a logical ‘and.’ */
export type RecurrencyKindTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<RecurrencyKindType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<RecurrencyKindType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<RecurrencyKindType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<RecurrencyKindType>;
  /** Included in the specified list. */
  in?: Maybe<Array<RecurrencyKindType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<RecurrencyKindType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<RecurrencyKindType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<RecurrencyKindType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<RecurrencyKindType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<RecurrencyKindType>;
};

export type RemoteStartTransactionInput = {
  customerIdToken: Scalars['String'];
  chargePointId: Scalars['String'];
  connectorId: Scalars['Int'];
};

export type RemoteStartTransactionResponse = {
   __typename?: 'RemoteStartTransactionResponse';
  status: Scalars['String'];
};

export type RemoteStopTransactionInput = {
  transactionId: Scalars['Int'];
  chargePointId: Scalars['String'];
};

export type RemoteStopTransactionResponse = {
   __typename?: 'RemoteStopTransactionResponse';
  status: Scalars['String'];
};

export type ShortMessage = Node & {
   __typename?: 'ShortMessage';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  phoneNumber: Scalars['String'];
  verifyAttempts: Scalars['Int'];
  text: Scalars['String'];
  clientIpAddress: Scalars['InternetAddress'];
  createdAt: Scalars['Datetime'];
};

/** 
 * A condition to be used against `ShortMessage` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ShortMessageCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `verifyAttempts` field. */
  verifyAttempts?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `text` field. */
  text?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `clientIpAddress` field. */
  clientIpAddress?: Maybe<Scalars['InternetAddress']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `ShortMessage` object types. All fields are combined with a logical ‘and.’ */
export type ShortMessageFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `phoneNumber` field. */
  phoneNumber?: Maybe<StringFilter>;
  /** Filter by the object’s `verifyAttempts` field. */
  verifyAttempts?: Maybe<IntFilter>;
  /** Filter by the object’s `text` field. */
  text?: Maybe<StringFilter>;
  /** Filter by the object’s `clientIpAddress` field. */
  clientIpAddress?: Maybe<InternetAddressFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ShortMessageFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ShortMessageFilter>>;
  /** Negates the expression. */
  not?: Maybe<ShortMessageFilter>;
};

/** An input for mutations affecting `ShortMessage` */
export type ShortMessageInput = {
  uuid?: Maybe<Scalars['UUID']>;
  phoneNumber: Scalars['String'];
  verifyAttempts?: Maybe<Scalars['Int']>;
  text: Scalars['String'];
  clientIpAddress: Scalars['InternetAddress'];
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `ShortMessage`. Fields that are set will be updated. */
export type ShortMessagePatch = {
  uuid?: Maybe<Scalars['UUID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  verifyAttempts?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  clientIpAddress?: Maybe<Scalars['InternetAddress']>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `ShortMessage` values. */
export type ShortMessagesConnection = {
   __typename?: 'ShortMessagesConnection';
  /** A list of `ShortMessage` objects. */
  nodes: Array<Maybe<ShortMessage>>;
  /** A list of edges which contains the `ShortMessage` and cursor to aid in pagination. */
  edges: Array<ShortMessagesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ShortMessage` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ShortMessage` edge in the connection. */
export type ShortMessagesEdge = {
   __typename?: 'ShortMessagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ShortMessage` at the end of the edge. */
  node?: Maybe<ShortMessage>;
};

/** Methods to use when ordering `ShortMessage`. */
export enum ShortMessagesOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  PhoneNumberAsc = 'PHONE_NUMBER_ASC',
  PhoneNumberDesc = 'PHONE_NUMBER_DESC',
  VerifyAttemptsAsc = 'VERIFY_ATTEMPTS_ASC',
  VerifyAttemptsDesc = 'VERIFY_ATTEMPTS_DESC',
  TextAsc = 'TEXT_ASC',
  TextDesc = 'TEXT_DESC',
  ClientIpAddressAsc = 'CLIENT_IP_ADDRESS_ASC',
  ClientIpAddressDesc = 'CLIENT_IP_ADDRESS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /** 
 * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
 */
  like?: Maybe<Scalars['String']>;
  /** 
 * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
 */
  notLike?: Maybe<Scalars['String']>;
  /** 
 * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
 */
  likeInsensitive?: Maybe<Scalars['String']>;
  /** 
 * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
 */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern using the SQL standard's definition of a regular expression. */
  similarTo?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern using the SQL standard's definition of a regular expression. */
  notSimilarTo?: Maybe<Scalars['String']>;
};

export enum SystemUserType {
  Admin = 'Admin',
  Viewer = 'Viewer',
  Operator = 'Operator'
}

/** A filter to be used against SystemUserType fields. All fields are combined with a logical ‘and.’ */
export type SystemUserTypeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<SystemUserType>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<SystemUserType>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<SystemUserType>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<SystemUserType>;
  /** Included in the specified list. */
  in?: Maybe<Array<SystemUserType>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<SystemUserType>>;
  /** Less than the specified value. */
  lessThan?: Maybe<SystemUserType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<SystemUserType>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<SystemUserType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<SystemUserType>;
};

export type Transaction = Node & {
   __typename?: 'Transaction';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  transactionId: Scalars['Int'];
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue: Scalars['Float'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  /** Reads a single `Customer` that is related to this `Transaction`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Transaction`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** Reads a single `BalanceOperation` that is related to this `Transaction`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
  /** Reads and enables pagination through a set of `ChargingProfile`. */
  chargingProfilesByTransactionId: ChargingProfilesConnection;
  /** Reads and enables pagination through a set of `MeterValue`. */
  meterValuesByTransactionId: MeterValuesConnection;
};


export type TransactionChargingProfilesByTransactionIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ChargingProfilesOrderBy>>;
  condition?: Maybe<ChargingProfileCondition>;
  filter?: Maybe<ChargingProfileFilter>;
};


export type TransactionMeterValuesByTransactionIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MeterValuesOrderBy>>;
  condition?: Maybe<MeterValueCondition>;
  filter?: Maybe<MeterValueFilter>;
};

/** 
 * A condition to be used against `Transaction` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TransactionCondition = {
  /** Checks for equality with the object’s `transactionId` field. */
  transactionId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `meterStart` field. */
  meterStart?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `meterStop` field. */
  meterStop?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `connectorUuid` field. */
  connectorUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `startTimestamp` field. */
  startTimestamp?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `stopTimestamp` field. */
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `consumptionWh` field. */
  consumptionWh?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `reason` field. */
  reason?: Maybe<TransactionStopReason>;
  /** Checks for equality with the object’s `priceValue` field. */
  priceValue?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `balanceOperationUuid` field. */
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Transaction` object types. All fields are combined with a logical ‘and.’ */
export type TransactionFilter = {
  /** Filter by the object’s `transactionId` field. */
  transactionId?: Maybe<IntFilter>;
  /** Filter by the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<StringFilter>;
  /** Filter by the object’s `meterStart` field. */
  meterStart?: Maybe<IntFilter>;
  /** Filter by the object’s `meterStop` field. */
  meterStop?: Maybe<IntFilter>;
  /** Filter by the object’s `connectorUuid` field. */
  connectorUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `startTimestamp` field. */
  startTimestamp?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `stopTimestamp` field. */
  stopTimestamp?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `consumptionWh` field. */
  consumptionWh?: Maybe<FloatFilter>;
  /** Filter by the object’s `reason` field. */
  reason?: Maybe<TransactionStopReasonFilter>;
  /** Filter by the object’s `priceValue` field. */
  priceValue?: Maybe<FloatFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `balanceOperationUuid` field. */
  balanceOperationUuid?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TransactionFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TransactionFilter>>;
  /** Negates the expression. */
  not?: Maybe<TransactionFilter>;
};

/** An input for mutations affecting `Transaction` */
export type TransactionInput = {
  transactionId?: Maybe<Scalars['Int']>;
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type TransactionNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `transaction` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type TransactionNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `transaction` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type TransactionOnChargingProfileForChargingProfilesTransactionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `chargingProfile` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `chargingProfile` being updated. */
  chargingProfilePatch: ChargingProfilePatch;
};

/** The fields on `transaction` to look up the row to update. */
export type TransactionOnChargingProfileForChargingProfilesTransactionIdFkeyUsingTransactionsPkeyUpdate = {
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: UpdateTransactionOnChargingProfileForChargingProfilesTransactionIdFkeyPatch;
  transactionId: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TransactionOnMeterValueForMeterValuesTransactionIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `meterValue` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `meterValue` being updated. */
  meterValuePatch: MeterValuePatch;
};

/** The fields on `transaction` to look up the row to update. */
export type TransactionOnMeterValueForMeterValuesTransactionIdFkeyUsingTransactionsPkeyUpdate = {
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: UpdateTransactionOnMeterValueForMeterValuesTransactionIdFkeyPatch;
  transactionId: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TransactionOnTransactionForTransactionsBalanceOperationUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `balanceOperation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: BalanceOperationPatch;
};

/** The fields on `transaction` to look up the row to update. */
export type TransactionOnTransactionForTransactionsBalanceOperationUuidFkeyUsingTransactionsPkeyUpdate = {
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: UpdateTransactionOnTransactionForTransactionsBalanceOperationUuidFkeyPatch;
  transactionId: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TransactionOnTransactionForTransactionsConnectorUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `connector` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `connector` being updated. */
  connectorPatch: ConnectorPatch;
};

/** The fields on `transaction` to look up the row to update. */
export type TransactionOnTransactionForTransactionsConnectorUuidFkeyUsingTransactionsPkeyUpdate = {
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: UpdateTransactionOnTransactionForTransactionsConnectorUuidFkeyPatch;
  transactionId: Scalars['Int'];
};

/** The globally unique `ID` look up for the row to update. */
export type TransactionOnTransactionForTransactionsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `customer` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: CustomerPatch;
};

/** The fields on `transaction` to look up the row to update. */
export type TransactionOnTransactionForTransactionsCustomerIdTokenFkeyUsingTransactionsPkeyUpdate = {
  /** An object where the defined keys will be set on the `transaction` being updated. */
  transactionPatch: UpdateTransactionOnTransactionForTransactionsCustomerIdTokenFkeyPatch;
  transactionId: Scalars['Int'];
};

/** Represents an update to a `Transaction`. Fields that are set will be updated. */
export type TransactionPatch = {
  transactionId?: Maybe<Scalars['Int']>;
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** The `balanceOperation` to be created by this mutation. */
export type TransactionsBalanceOperationUuidFkeyBalanceOperationsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `balanceOperation` in the `TransactionInput` mutation. */
export type TransactionsBalanceOperationUuidFkeyInput = {
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByUuid?: Maybe<BalanceOperationBalanceOperationsPkeyConnect>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByNodeId?: Maybe<BalanceOperationNodeIdConnect>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByUuid?: Maybe<BalanceOperationBalanceOperationsPkeyDelete>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<BalanceOperationNodeIdDelete>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByUuid?: Maybe<BalanceOperationOnTransactionForTransactionsBalanceOperationUuidFkeyUsingBalanceOperationsPkeyUpdate>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByNodeId?: Maybe<TransactionOnTransactionForTransactionsBalanceOperationUuidFkeyNodeIdUpdate>;
  /** A `BalanceOperationInput` object that will be created and connected to this object. */
  create?: Maybe<TransactionsBalanceOperationUuidFkeyBalanceOperationsCreateInput>;
};

/** Input for the nested mutation of `transaction` in the `BalanceOperationInput` mutation. */
export type TransactionsBalanceOperationUuidFkeyInverseInput = {
  /** Flag indicating whether all other `transaction` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByTransactionId?: Maybe<Array<TransactionTransactionsPkeyConnect>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TransactionNodeIdConnect>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByTransactionId?: Maybe<Array<TransactionTransactionsPkeyDelete>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TransactionNodeIdDelete>>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByTransactionId?: Maybe<Array<TransactionOnTransactionForTransactionsBalanceOperationUuidFkeyUsingTransactionsPkeyUpdate>>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<BalanceOperationOnTransactionForTransactionsBalanceOperationUuidFkeyNodeIdUpdate>>;
  /** A `TransactionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TransactionsBalanceOperationUuidFkeyTransactionsCreateInput>>;
};

/** The `transaction` to be created by this mutation. */
export type TransactionsBalanceOperationUuidFkeyTransactionsCreateInput = {
  transactionId?: Maybe<Scalars['Int']>;
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** A connection to a list of `Transaction` values. */
export type TransactionsConnection = {
   __typename?: 'TransactionsConnection';
  /** A list of `Transaction` objects. */
  nodes: Array<Maybe<Transaction>>;
  /** A list of edges which contains the `Transaction` and cursor to aid in pagination. */
  edges: Array<TransactionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Transaction` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** The `connector` to be created by this mutation. */
export type TransactionsConnectorUuidFkeyConnectorsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `connector` in the `TransactionInput` mutation. */
export type TransactionsConnectorUuidFkeyInput = {
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByUuid?: Maybe<ConnectorConnectorsPkeyConnect>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  connectByNodeId?: Maybe<ConnectorNodeIdConnect>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByUuid?: Maybe<ConnectorConnectorsPkeyDelete>;
  /** The primary key(s) for `connector` for the far side of the relationship. */
  deleteByNodeId?: Maybe<ConnectorNodeIdDelete>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByUuid?: Maybe<ConnectorOnTransactionForTransactionsConnectorUuidFkeyUsingConnectorsPkeyUpdate>;
  /** The primary key(s) and patch data for `connector` for the far side of the relationship. */
  updateByNodeId?: Maybe<TransactionOnTransactionForTransactionsConnectorUuidFkeyNodeIdUpdate>;
  /** A `ConnectorInput` object that will be created and connected to this object. */
  create?: Maybe<TransactionsConnectorUuidFkeyConnectorsCreateInput>;
};

/** Input for the nested mutation of `transaction` in the `ConnectorInput` mutation. */
export type TransactionsConnectorUuidFkeyInverseInput = {
  /** Flag indicating whether all other `transaction` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByTransactionId?: Maybe<Array<TransactionTransactionsPkeyConnect>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TransactionNodeIdConnect>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByTransactionId?: Maybe<Array<TransactionTransactionsPkeyDelete>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TransactionNodeIdDelete>>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByTransactionId?: Maybe<Array<TransactionOnTransactionForTransactionsConnectorUuidFkeyUsingTransactionsPkeyUpdate>>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<ConnectorOnTransactionForTransactionsConnectorUuidFkeyNodeIdUpdate>>;
  /** A `TransactionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TransactionsConnectorUuidFkeyTransactionsCreateInput>>;
};

/** The `transaction` to be created by this mutation. */
export type TransactionsConnectorUuidFkeyTransactionsCreateInput = {
  transactionId?: Maybe<Scalars['Int']>;
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** The `customer` to be created by this mutation. */
export type TransactionsCustomerIdTokenFkeyCustomersCreateInput = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** Input for the nested mutation of `customer` in the `TransactionInput` mutation. */
export type TransactionsCustomerIdTokenFkeyInput = {
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByIdToken?: Maybe<CustomerCustomersPkeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByNodeId?: Maybe<CustomerNodeIdConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CustomerCustomersPkeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByIdToken?: Maybe<CustomerOnTransactionForTransactionsCustomerIdTokenFkeyUsingCustomersPkeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByPhoneNumber?: Maybe<CustomerOnTransactionForTransactionsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByNodeId?: Maybe<TransactionOnTransactionForTransactionsCustomerIdTokenFkeyNodeIdUpdate>;
  /** A `CustomerInput` object that will be created and connected to this object. */
  create?: Maybe<TransactionsCustomerIdTokenFkeyCustomersCreateInput>;
};

/** Input for the nested mutation of `transaction` in the `CustomerInput` mutation. */
export type TransactionsCustomerIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `transaction` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByTransactionId?: Maybe<Array<TransactionTransactionsPkeyConnect>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<TransactionNodeIdConnect>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByTransactionId?: Maybe<Array<TransactionTransactionsPkeyDelete>>;
  /** The primary key(s) for `transaction` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<TransactionNodeIdDelete>>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByTransactionId?: Maybe<Array<TransactionOnTransactionForTransactionsCustomerIdTokenFkeyUsingTransactionsPkeyUpdate>>;
  /** The primary key(s) and patch data for `transaction` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CustomerOnTransactionForTransactionsCustomerIdTokenFkeyNodeIdUpdate>>;
  /** A `TransactionInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TransactionsCustomerIdTokenFkeyTransactionsCreateInput>>;
};

/** The `transaction` to be created by this mutation. */
export type TransactionsCustomerIdTokenFkeyTransactionsCreateInput = {
  transactionId?: Maybe<Scalars['Int']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** A `Transaction` edge in the connection. */
export type TransactionsEdge = {
   __typename?: 'TransactionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Transaction` at the end of the edge. */
  node?: Maybe<Transaction>;
};

/** Methods to use when ordering `Transaction`. */
export enum TransactionsOrderBy {
  Natural = 'NATURAL',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  CustomerIdTokenAsc = 'CUSTOMER_ID_TOKEN_ASC',
  CustomerIdTokenDesc = 'CUSTOMER_ID_TOKEN_DESC',
  MeterStartAsc = 'METER_START_ASC',
  MeterStartDesc = 'METER_START_DESC',
  MeterStopAsc = 'METER_STOP_ASC',
  MeterStopDesc = 'METER_STOP_DESC',
  ConnectorUuidAsc = 'CONNECTOR_UUID_ASC',
  ConnectorUuidDesc = 'CONNECTOR_UUID_DESC',
  StartTimestampAsc = 'START_TIMESTAMP_ASC',
  StartTimestampDesc = 'START_TIMESTAMP_DESC',
  StopTimestampAsc = 'STOP_TIMESTAMP_ASC',
  StopTimestampDesc = 'STOP_TIMESTAMP_DESC',
  ConsumptionWhAsc = 'CONSUMPTION_WH_ASC',
  ConsumptionWhDesc = 'CONSUMPTION_WH_DESC',
  ReasonAsc = 'REASON_ASC',
  ReasonDesc = 'REASON_DESC',
  PriceValueAsc = 'PRICE_VALUE_ASC',
  PriceValueDesc = 'PRICE_VALUE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  BalanceOperationUuidAsc = 'BALANCE_OPERATION_UUID_ASC',
  BalanceOperationUuidDesc = 'BALANCE_OPERATION_UUID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum TransactionStopReason {
  DeAuthorized = 'DeAuthorized',
  EmergencyStop = 'EmergencyStop',
  EvDisconnected = 'EVDisconnected',
  HardReset = 'HardReset',
  Local = 'Local',
  Other = 'Other',
  PowerLoss = 'PowerLoss',
  Reboot = 'Reboot',
  Remote = 'Remote',
  SoftReset = 'SoftReset',
  UnlockCommand = 'UnlockCommand'
}

/** A filter to be used against TransactionStopReason fields. All fields are combined with a logical ‘and.’ */
export type TransactionStopReasonFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<TransactionStopReason>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<TransactionStopReason>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<TransactionStopReason>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<TransactionStopReason>;
  /** Included in the specified list. */
  in?: Maybe<Array<TransactionStopReason>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<TransactionStopReason>>;
  /** Less than the specified value. */
  lessThan?: Maybe<TransactionStopReason>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<TransactionStopReason>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<TransactionStopReason>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<TransactionStopReason>;
};

/** The fields on `transaction` to look up the row to connect. */
export type TransactionTransactionsPkeyConnect = {
  transactionId: Scalars['Int'];
};

/** The fields on `transaction` to look up the row to delete. */
export type TransactionTransactionsPkeyDelete = {
  transactionId: Scalars['Int'];
};

export enum UnitOfMeasure {
  Wh = 'Wh',
  KWh = 'kWh',
  Varh = 'varh',
  Kvarh = 'kvarh',
  W = 'W',
  KW = 'kW',
  Va = 'VA',
  KVa = 'kVA',
  Var = 'var',
  Kvar = 'kvar',
  A = 'A',
  V = 'V',
  Celsius = 'Celsius',
  Fahrenheit = 'Fahrenheit',
  K = 'K',
  Percent = 'Percent'
}

/** A filter to be used against UnitOfMeasure fields. All fields are combined with a logical ‘and.’ */
export type UnitOfMeasureFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<UnitOfMeasure>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<UnitOfMeasure>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<UnitOfMeasure>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<UnitOfMeasure>;
  /** Included in the specified list. */
  in?: Maybe<Array<UnitOfMeasure>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<UnitOfMeasure>>;
  /** Less than the specified value. */
  lessThan?: Maybe<UnitOfMeasure>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<UnitOfMeasure>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<UnitOfMeasure>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<UnitOfMeasure>;
};

/** All input for the `updateAgreementByName` mutation. */
export type UpdateAgreementByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Agreement` being updated. */
  agreementPatch: AgreementPatch;
  name: Scalars['String'];
};

/** All input for the `updateAgreementByUuid` mutation. */
export type UpdateAgreementByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Agreement` being updated. */
  agreementPatch: AgreementPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateAgreement` mutation. */
export type UpdateAgreementInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Agreement` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Agreement` being updated. */
  agreementPatch: AgreementPatch;
};

/** The output of our update `Agreement` mutation. */
export type UpdateAgreementPayload = {
   __typename?: 'UpdateAgreementPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Agreement` that was updated by this mutation. */
  agreement?: Maybe<Agreement>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Agreement`. May be used by Relay 1. */
  agreementEdge?: Maybe<AgreementsEdge>;
};


/** The output of our update `Agreement` mutation. */
export type UpdateAgreementPayloadAgreementEdgeArgs = {
  orderBy?: Maybe<Array<AgreementsOrderBy>>;
};

/** All input for the `updateBalanceOperationByUuid` mutation. */
export type UpdateBalanceOperationByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `BalanceOperation` being updated. */
  balanceOperationPatch: BalanceOperationPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateBalanceOperation` mutation. */
export type UpdateBalanceOperationInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `BalanceOperation` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `BalanceOperation` being updated. */
  balanceOperationPatch: BalanceOperationPatch;
};

/** An object where the defined keys will be set on the `balanceOperation` being updated. */
export type UpdateBalanceOperationOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `balanceOperation` being updated. */
export type UpdateBalanceOperationOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `balanceOperation` being updated. */
export type UpdateBalanceOperationOnTransactionForTransactionsBalanceOperationUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `balanceOperation` being updated. */
export type UpdateBalanceOperationOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** The output of our update `BalanceOperation` mutation. */
export type UpdateBalanceOperationPayload = {
   __typename?: 'UpdateBalanceOperationPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `BalanceOperation` that was updated by this mutation. */
  balanceOperation?: Maybe<BalanceOperation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `BalanceOperation`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `CentralSystemUser` that is related to this `BalanceOperation`. */
  centralSystemUserBySystemUserIdToken?: Maybe<CentralSystemUser>;
  /** An edge for our `BalanceOperation`. May be used by Relay 1. */
  balanceOperationEdge?: Maybe<BalanceOperationsEdge>;
};


/** The output of our update `BalanceOperation` mutation. */
export type UpdateBalanceOperationPayloadBalanceOperationEdgeArgs = {
  orderBy?: Maybe<Array<BalanceOperationsOrderBy>>;
};

/** All input for the `updateCentralSystemUserByIdToken` mutation. */
export type UpdateCentralSystemUserByIdTokenInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `CentralSystemUser` being updated. */
  centralSystemUserPatch: CentralSystemUserPatch;
  idToken: Scalars['String'];
};

/** All input for the `updateCentralSystemUser` mutation. */
export type UpdateCentralSystemUserInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CentralSystemUser` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `CentralSystemUser` being updated. */
  centralSystemUserPatch: CentralSystemUserPatch;
};

/** An object where the defined keys will be set on the `centralSystemUser` being updated. */
export type UpdateCentralSystemUserOnBalanceOperationForBalanceOperationsSystemUserIdTokenFkeyPatch = {
  idToken?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  type?: Maybe<SystemUserType>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `centralSystemUser` being updated. */
export type UpdateCentralSystemUserOnCentralSystemUserForCentralSystemUsersIdTokenFkeyPatch = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  type?: Maybe<SystemUserType>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `centralSystemUser` being updated. */
export type UpdateCentralSystemUserOnChargePointForChargePointsRegisteredByFkeyPatch = {
  idToken?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  type?: Maybe<SystemUserType>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInput>;
  chargePointsUsingIdToken?: Maybe<ChargePointsRegisteredByFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInverseInput>;
};

/** The output of our update `CentralSystemUser` mutation. */
export type UpdateCentralSystemUserPayload = {
   __typename?: 'UpdateCentralSystemUserPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CentralSystemUser` that was updated by this mutation. */
  centralSystemUser?: Maybe<CentralSystemUser>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `IdTag` that is related to this `CentralSystemUser`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** An edge for our `CentralSystemUser`. May be used by Relay 1. */
  centralSystemUserEdge?: Maybe<CentralSystemUsersEdge>;
};


/** The output of our update `CentralSystemUser` mutation. */
export type UpdateCentralSystemUserPayloadCentralSystemUserEdgeArgs = {
  orderBy?: Maybe<Array<CentralSystemUsersOrderBy>>;
};

/** All input for the `updateChargePointById` mutation. */
export type UpdateChargePointByIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
  id: Scalars['String'];
};

/** All input for the `updateChargePointEnergySupplyPriceByUuid` mutation. */
export type UpdateChargePointEnergySupplyPriceByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChargePointEnergySupplyPrice` being updated. */
  chargePointEnergySupplyPricePatch: ChargePointEnergySupplyPricePatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateChargePointEnergySupplyPrice` mutation. */
export type UpdateChargePointEnergySupplyPriceInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePointEnergySupplyPrice` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChargePointEnergySupplyPrice` being updated. */
  chargePointEnergySupplyPricePatch: ChargePointEnergySupplyPricePatch;
};

/** An object where the defined keys will be set on the `chargePointEnergySupplyPrice` being updated. */
export type UpdateChargePointEnergySupplyPriceOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  value?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInput>;
};

/** The output of our update `ChargePointEnergySupplyPrice` mutation. */
export type UpdateChargePointEnergySupplyPricePayload = {
   __typename?: 'UpdateChargePointEnergySupplyPricePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointEnergySupplyPrice` that was updated by this mutation. */
  chargePointEnergySupplyPrice?: Maybe<ChargePointEnergySupplyPrice>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointEnergySupplyPrice`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointEnergySupplyPrice`. May be used by Relay 1. */
  chargePointEnergySupplyPriceEdge?: Maybe<ChargePointEnergySupplyPricesEdge>;
};


/** The output of our update `ChargePointEnergySupplyPrice` mutation. */
export type UpdateChargePointEnergySupplyPricePayloadChargePointEnergySupplyPriceEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointEnergySupplyPricesOrderBy>>;
};

/** All input for the `updateChargePointHeartbeatByUuid` mutation. */
export type UpdateChargePointHeartbeatByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChargePointHeartbeat` being updated. */
  chargePointHeartbeatPatch: ChargePointHeartbeatPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateChargePointHeartbeat` mutation. */
export type UpdateChargePointHeartbeatInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePointHeartbeat` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChargePointHeartbeat` being updated. */
  chargePointHeartbeatPatch: ChargePointHeartbeatPatch;
};

/** An object where the defined keys will be set on the `chargePointHeartbeat` being updated. */
export type UpdateChargePointHeartbeatOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInput>;
};

/** The output of our update `ChargePointHeartbeat` mutation. */
export type UpdateChargePointHeartbeatPayload = {
   __typename?: 'UpdateChargePointHeartbeatPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointHeartbeat` that was updated by this mutation. */
  chargePointHeartbeat?: Maybe<ChargePointHeartbeat>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointHeartbeat`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointHeartbeat`. May be used by Relay 1. */
  chargePointHeartbeatEdge?: Maybe<ChargePointHeartbeatsEdge>;
};


/** The output of our update `ChargePointHeartbeat` mutation. */
export type UpdateChargePointHeartbeatPayloadChargePointHeartbeatEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointHeartbeatsOrderBy>>;
};

/** All input for the `updateChargePoint` mutation. */
export type UpdateChargePointInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePoint` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChargePoint` being updated. */
  chargePointPatch: ChargePointPatch;
};

/** An object where the defined keys will be set on the `chargePoint` being updated. */
export type UpdateChargePointOnChargePointEnergySupplyPriceForChargePointEnergySupplyPriceChargePointIdFkeyPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargePoint` being updated. */
export type UpdateChargePointOnChargePointForChargePointsCounteragentUuidFkeyPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargePoint` being updated. */
export type UpdateChargePointOnChargePointForChargePointsRegisteredByFkeyPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargePoint` being updated. */
export type UpdateChargePointOnChargePointHeartbeatForChargePointHeartbeatsChargePointIdFkeyPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargePoint` being updated. */
export type UpdateChargePointOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargePoint` being updated. */
export type UpdateChargePointOnConnectorForConnectorsChargePointIdFkeyPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargePoint` being updated. */
export type UpdateChargePointOnPriceForPricesChargePointIdFkeyPatch = {
  id?: Maybe<Scalars['String']>;
  chargePointModel?: Maybe<Scalars['String']>;
  chargePointSerialNumber?: Maybe<Scalars['String']>;
  chargePointVendor?: Maybe<Scalars['String']>;
  firmwareVersion?: Maybe<Scalars['String']>;
  meterSerialNumber?: Maybe<Scalars['String']>;
  meterType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Heartbeat interval in seconds */
  interval?: Maybe<Scalars['Int']>;
  registeredBy?: Maybe<Scalars['String']>;
  /** a charge point IP address in VPN network */
  ip?: Maybe<Scalars['String']>;
  chargeBoxSerialNumber?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  counteragentUuid?: Maybe<Scalars['UUID']>;
  parkingPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  objectsNearby?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  /** 
 * If true, default configuration
   *                                                           keys values were set on the charge point
 */
  configurationKeysSet?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  centralSystemUserToRegisteredBy?: Maybe<ChargePointsRegisteredByFkeyInput>;
  counteragentToCounteragentUuid?: Maybe<ChargePointsCounteragentUuidFkeyInput>;
  chargePointSchedulesUsingId?: Maybe<ChargePointSchedulesChargePointIdFkeyInverseInput>;
  chargePointHeartbeatsUsingId?: Maybe<ChargePointHeartbeatsChargePointIdFkeyInverseInput>;
  connectorsUsingId?: Maybe<ConnectorsChargePointIdFkeyInverseInput>;
  chargePointEnergySupplyPricesUsingId?: Maybe<ChargePointEnergySupplyPriceChargePointIdFkeyInverseInput>;
  pricesUsingId?: Maybe<PricesChargePointIdFkeyInverseInput>;
};

/** The output of our update `ChargePoint` mutation. */
export type UpdateChargePointPayload = {
   __typename?: 'UpdateChargePointPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePoint` that was updated by this mutation. */
  chargePoint?: Maybe<ChargePoint>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `CentralSystemUser` that is related to this `ChargePoint`. */
  centralSystemUserByRegisteredBy?: Maybe<CentralSystemUser>;
  /** Reads a single `Counteragent` that is related to this `ChargePoint`. */
  counteragentByCounteragentUuid?: Maybe<Counteragent>;
  /** An edge for our `ChargePoint`. May be used by Relay 1. */
  chargePointEdge?: Maybe<ChargePointsEdge>;
};


/** The output of our update `ChargePoint` mutation. */
export type UpdateChargePointPayloadChargePointEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointsOrderBy>>;
};

/** All input for the `updateChargePointScheduleByUuid` mutation. */
export type UpdateChargePointScheduleByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChargePointSchedule` being updated. */
  chargePointSchedulePatch: ChargePointSchedulePatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateChargePointSchedule` mutation. */
export type UpdateChargePointScheduleInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargePointSchedule` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChargePointSchedule` being updated. */
  chargePointSchedulePatch: ChargePointSchedulePatch;
};

/** An object where the defined keys will be set on the `chargePointSchedule` being updated. */
export type UpdateChargePointScheduleOnChargePointScheduleForChargePointSchedulesChargePointIdFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  validStart?: Maybe<Scalars['Datetime']>;
  validEnd?: Maybe<Scalars['Datetime']>;
  /** 
 * Comma-separated list of days on which the schedule valid.
   *                                                     0 - monday. Example: 0,2,3,6
 */
  days?: Maybe<Scalars['String']>;
  chargePointToChargePointId?: Maybe<ChargePointSchedulesChargePointIdFkeyInput>;
};

/** The output of our update `ChargePointSchedule` mutation. */
export type UpdateChargePointSchedulePayload = {
   __typename?: 'UpdateChargePointSchedulePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargePointSchedule` that was updated by this mutation. */
  chargePointSchedule?: Maybe<ChargePointSchedule>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `ChargePointSchedule`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** An edge for our `ChargePointSchedule`. May be used by Relay 1. */
  chargePointScheduleEdge?: Maybe<ChargePointSchedulesEdge>;
};


/** The output of our update `ChargePointSchedule` mutation. */
export type UpdateChargePointSchedulePayloadChargePointScheduleEdgeArgs = {
  orderBy?: Maybe<Array<ChargePointSchedulesOrderBy>>;
};

/** All input for the `updateChargingProfileByChargingProfileId` mutation. */
export type UpdateChargingProfileByChargingProfileIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChargingProfile` being updated. */
  chargingProfilePatch: ChargingProfilePatch;
  chargingProfileId: Scalars['Int'];
};

/** All input for the `updateChargingProfile` mutation. */
export type UpdateChargingProfileInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargingProfile` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChargingProfile` being updated. */
  chargingProfilePatch: ChargingProfilePatch;
};

/** An object where the defined keys will be set on the `chargingProfile` being updated. */
export type UpdateChargingProfileOnChargingProfileForChargingProfilesTransactionIdFkeyPatch = {
  chargingProfileId?: Maybe<Scalars['Int']>;
  stackLevel?: Maybe<Scalars['Int']>;
  chargingProfilePurpose?: Maybe<ChargingProfilePurposeType>;
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  recurrencyKind?: Maybe<RecurrencyKindType>;
  validFrom?: Maybe<Scalars['Datetime']>;
  validTo?: Maybe<Scalars['Datetime']>;
  transactionToTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInput>;
  chargingSchedulesUsingChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargingProfile` being updated. */
export type UpdateChargingProfileOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyPatch = {
  transactionId?: Maybe<Scalars['Int']>;
  stackLevel?: Maybe<Scalars['Int']>;
  chargingProfilePurpose?: Maybe<ChargingProfilePurposeType>;
  chargingProfileKind?: Maybe<ChargingProfileKindType>;
  recurrencyKind?: Maybe<RecurrencyKindType>;
  validFrom?: Maybe<Scalars['Datetime']>;
  validTo?: Maybe<Scalars['Datetime']>;
  transactionToTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInput>;
  chargingSchedulesUsingChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInverseInput>;
};

/** The output of our update `ChargingProfile` mutation. */
export type UpdateChargingProfilePayload = {
   __typename?: 'UpdateChargingProfilePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingProfile` that was updated by this mutation. */
  chargingProfile?: Maybe<ChargingProfile>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `ChargingProfile`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** An edge for our `ChargingProfile`. May be used by Relay 1. */
  chargingProfileEdge?: Maybe<ChargingProfilesEdge>;
};


/** The output of our update `ChargingProfile` mutation. */
export type UpdateChargingProfilePayloadChargingProfileEdgeArgs = {
  orderBy?: Maybe<Array<ChargingProfilesOrderBy>>;
};

/** All input for the `updateChargingScheduleByUuid` mutation. */
export type UpdateChargingScheduleByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChargingSchedule` being updated. */
  chargingSchedulePatch: ChargingSchedulePatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateChargingSchedule` mutation. */
export type UpdateChargingScheduleInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargingSchedule` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChargingSchedule` being updated. */
  chargingSchedulePatch: ChargingSchedulePatch;
};

/** An object where the defined keys will be set on the `chargingSchedule` being updated. */
export type UpdateChargingScheduleOnChargingScheduleForChargingSchedulesChargingProfileIdFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  duration?: Maybe<Scalars['Int']>;
  startSchedule?: Maybe<Scalars['String']>;
  minChargingRate?: Maybe<Scalars['Float']>;
  chargingRateUnit?: Maybe<ChargingRateUnitType>;
  chargingProfileToChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInput>;
  chargingSchedulePeriodsUsingUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `chargingSchedule` being updated. */
export type UpdateChargingScheduleOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  duration?: Maybe<Scalars['Int']>;
  startSchedule?: Maybe<Scalars['String']>;
  minChargingRate?: Maybe<Scalars['Float']>;
  chargingProfileId?: Maybe<Scalars['Int']>;
  chargingRateUnit?: Maybe<ChargingRateUnitType>;
  chargingProfileToChargingProfileId?: Maybe<ChargingSchedulesChargingProfileIdFkeyInput>;
  chargingSchedulePeriodsUsingUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInverseInput>;
};

/** The output of our update `ChargingSchedule` mutation. */
export type UpdateChargingSchedulePayload = {
   __typename?: 'UpdateChargingSchedulePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedule` that was updated by this mutation. */
  chargingSchedule?: Maybe<ChargingSchedule>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargingProfile` that is related to this `ChargingSchedule`. */
  chargingProfileByChargingProfileId?: Maybe<ChargingProfile>;
  /** An edge for our `ChargingSchedule`. May be used by Relay 1. */
  chargingScheduleEdge?: Maybe<ChargingSchedulesEdge>;
};


/** The output of our update `ChargingSchedule` mutation. */
export type UpdateChargingSchedulePayloadChargingScheduleEdgeArgs = {
  orderBy?: Maybe<Array<ChargingSchedulesOrderBy>>;
};

/** All input for the `updateChargingSchedulePeriodByUuid` mutation. */
export type UpdateChargingSchedulePeriodByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ChargingSchedulePeriod` being updated. */
  chargingSchedulePeriodPatch: ChargingSchedulePeriodPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateChargingSchedulePeriod` mutation. */
export type UpdateChargingSchedulePeriodInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ChargingSchedulePeriod` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ChargingSchedulePeriod` being updated. */
  chargingSchedulePeriodPatch: ChargingSchedulePeriodPatch;
};

/** An object where the defined keys will be set on the `chargingSchedulePeriod` being updated. */
export type UpdateChargingSchedulePeriodOnChargingSchedulePeriodForChargingSchedulePeriodsChargingScheduleUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  limit?: Maybe<Scalars['Float']>;
  numberPhases?: Maybe<Scalars['Int']>;
  startPeriod?: Maybe<Scalars['Int']>;
  chargingScheduleToChargingScheduleUuid?: Maybe<ChargingSchedulePeriodsChargingScheduleUuidFkeyInput>;
};

/** The output of our update `ChargingSchedulePeriod` mutation. */
export type UpdateChargingSchedulePeriodPayload = {
   __typename?: 'UpdateChargingSchedulePeriodPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ChargingSchedulePeriod` that was updated by this mutation. */
  chargingSchedulePeriod?: Maybe<ChargingSchedulePeriod>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargingSchedule` that is related to this `ChargingSchedulePeriod`. */
  chargingScheduleByChargingScheduleUuid?: Maybe<ChargingSchedule>;
  /** An edge for our `ChargingSchedulePeriod`. May be used by Relay 1. */
  chargingSchedulePeriodEdge?: Maybe<ChargingSchedulePeriodsEdge>;
};


/** The output of our update `ChargingSchedulePeriod` mutation. */
export type UpdateChargingSchedulePeriodPayloadChargingSchedulePeriodEdgeArgs = {
  orderBy?: Maybe<Array<ChargingSchedulePeriodsOrderBy>>;
};

/** All input for the `updateConfigurationKeyByName` mutation. */
export type UpdateConfigurationKeyByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ConfigurationKey` being updated. */
  configurationKeyPatch: ConfigurationKeyPatch;
  name: Scalars['String'];
};

/** All input for the `updateConfigurationKeyByUuid` mutation. */
export type UpdateConfigurationKeyByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ConfigurationKey` being updated. */
  configurationKeyPatch: ConfigurationKeyPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateConfigurationKey` mutation. */
export type UpdateConfigurationKeyInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ConfigurationKey` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ConfigurationKey` being updated. */
  configurationKeyPatch: ConfigurationKeyPatch;
};

/** The output of our update `ConfigurationKey` mutation. */
export type UpdateConfigurationKeyPayload = {
   __typename?: 'UpdateConfigurationKeyPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConfigurationKey` that was updated by this mutation. */
  configurationKey?: Maybe<ConfigurationKey>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ConfigurationKey`. May be used by Relay 1. */
  configurationKeyEdge?: Maybe<ConfigurationKeysEdge>;
};


/** The output of our update `ConfigurationKey` mutation. */
export type UpdateConfigurationKeyPayloadConfigurationKeyEdgeArgs = {
  orderBy?: Maybe<Array<ConfigurationKeysOrderBy>>;
};

/** All input for the `updateConnectorByUuid` mutation. */
export type UpdateConnectorByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Connector` being updated. */
  connectorPatch: ConnectorPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateConnector` mutation. */
export type UpdateConnectorInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Connector` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Connector` being updated. */
  connectorPatch: ConnectorPatch;
};

/** An object where the defined keys will be set on the `connector` being updated. */
export type UpdateConnectorOnConnectorForConnectorsChargePointIdFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `connector` being updated. */
export type UpdateConnectorOnConnectorForConnectorsTypeUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `connector` being updated. */
export type UpdateConnectorOnConnectorStatusForConnectorStatusesConnectorUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `connector` being updated. */
export type UpdateConnectorOnPriceForPricesConnectorUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `connector` being updated. */
export type UpdateConnectorOnTransactionForTransactionsConnectorUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  chargePointId?: Maybe<Scalars['String']>;
  typeUuid?: Maybe<Scalars['UUID']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  chargePointToChargePointId?: Maybe<ConnectorsChargePointIdFkeyInput>;
  connectorTypeToTypeUuid?: Maybe<ConnectorsTypeUuidFkeyInput>;
  connectorStatusesUsingUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsConnectorUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorUuidFkeyInverseInput>;
};

/** The output of our update `Connector` mutation. */
export type UpdateConnectorPayload = {
   __typename?: 'UpdateConnectorPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Connector` that was updated by this mutation. */
  connector?: Maybe<Connector>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `Connector`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Connector`. */
  connectorTypeByTypeUuid?: Maybe<ConnectorType>;
  /** An edge for our `Connector`. May be used by Relay 1. */
  connectorEdge?: Maybe<ConnectorsEdge>;
};


/** The output of our update `Connector` mutation. */
export type UpdateConnectorPayloadConnectorEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorsOrderBy>>;
};

/** All input for the `updateConnectorStatusByUuid` mutation. */
export type UpdateConnectorStatusByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ConnectorStatus` being updated. */
  connectorStatusPatch: ConnectorStatusPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateConnectorStatus` mutation. */
export type UpdateConnectorStatusInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ConnectorStatus` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ConnectorStatus` being updated. */
  connectorStatusPatch: ConnectorStatusPatch;
};

/** An object where the defined keys will be set on the `connectorStatus` being updated. */
export type UpdateConnectorStatusOnConnectorStatusForConnectorStatusesConnectorUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<ChargePointStatus>;
  errorCode?: Maybe<ChargePointErrorCode>;
  info?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
  vendorErrorCode?: Maybe<Scalars['String']>;
  timestamptz?: Maybe<Scalars['Datetime']>;
  connectorToConnectorUuid?: Maybe<ConnectorStatusesConnectorUuidFkeyInput>;
};

/** The output of our update `ConnectorStatus` mutation. */
export type UpdateConnectorStatusPayload = {
   __typename?: 'UpdateConnectorStatusPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorStatus` that was updated by this mutation. */
  connectorStatus?: Maybe<ConnectorStatus>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Connector` that is related to this `ConnectorStatus`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** An edge for our `ConnectorStatus`. May be used by Relay 1. */
  connectorStatusEdge?: Maybe<ConnectorStatusesEdge>;
};


/** The output of our update `ConnectorStatus` mutation. */
export type UpdateConnectorStatusPayloadConnectorStatusEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorStatusesOrderBy>>;
};

/** All input for the `updateConnectorTypeByUuid` mutation. */
export type UpdateConnectorTypeByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ConnectorType` being updated. */
  connectorTypePatch: ConnectorTypePatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateConnectorType` mutation. */
export type UpdateConnectorTypeInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ConnectorType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ConnectorType` being updated. */
  connectorTypePatch: ConnectorTypePatch;
};

/** An object where the defined keys will be set on the `connectorType` being updated. */
export type UpdateConnectorTypeOnConnectorForConnectorsTypeUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  connectorsUsingUuid?: Maybe<ConnectorsTypeUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorTypeUuidFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `connectorType` being updated. */
export type UpdateConnectorTypeOnPriceForPricesConnectorTypeUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  imageUrl?: Maybe<Scalars['String']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  connectorsUsingUuid?: Maybe<ConnectorsTypeUuidFkeyInverseInput>;
  pricesUsingUuid?: Maybe<PricesConnectorTypeUuidFkeyInverseInput>;
};

/** The output of our update `ConnectorType` mutation. */
export type UpdateConnectorTypePayload = {
   __typename?: 'UpdateConnectorTypePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ConnectorType` that was updated by this mutation. */
  connectorType?: Maybe<ConnectorType>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ConnectorType`. May be used by Relay 1. */
  connectorTypeEdge?: Maybe<ConnectorTypesEdge>;
};


/** The output of our update `ConnectorType` mutation. */
export type UpdateConnectorTypePayloadConnectorTypeEdgeArgs = {
  orderBy?: Maybe<Array<ConnectorTypesOrderBy>>;
};

/** All input for the `updateCounteragentByUuid` mutation. */
export type UpdateCounteragentByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Counteragent` being updated. */
  counteragentPatch: CounteragentPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateCounteragent` mutation. */
export type UpdateCounteragentInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Counteragent` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Counteragent` being updated. */
  counteragentPatch: CounteragentPatch;
};

/** An object where the defined keys will be set on the `counteragent` being updated. */
export type UpdateCounteragentOnChargePointForChargePointsCounteragentUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  /** ИНН */
  tin?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  chargePointsUsingUuid?: Maybe<ChargePointsCounteragentUuidFkeyInverseInput>;
};

/** The output of our update `Counteragent` mutation. */
export type UpdateCounteragentPayload = {
   __typename?: 'UpdateCounteragentPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Counteragent` that was updated by this mutation. */
  counteragent?: Maybe<Counteragent>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Counteragent`. May be used by Relay 1. */
  counteragentEdge?: Maybe<CounteragentsEdge>;
};


/** The output of our update `Counteragent` mutation. */
export type UpdateCounteragentPayloadCounteragentEdgeArgs = {
  orderBy?: Maybe<Array<CounteragentsOrderBy>>;
};

/** All input for the `updateCustomerByIdToken` mutation. */
export type UpdateCustomerByIdTokenInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Customer` being updated. */
  customerPatch: CustomerPatch;
  idToken: Scalars['String'];
};

/** All input for the `updateCustomerByPhoneNumber` mutation. */
export type UpdateCustomerByPhoneNumberInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Customer` being updated. */
  customerPatch: CustomerPatch;
  phoneNumber: Scalars['String'];
};

/** All input for the `updateCustomer` mutation. */
export type UpdateCustomerInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Customer` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Customer` being updated. */
  customerPatch: CustomerPatch;
};

/** An object where the defined keys will be set on the `customer` being updated. */
export type UpdateCustomerOnBalanceOperationForBalanceOperationsCustomerIdTokenFkeyPatch = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `customer` being updated. */
export type UpdateCustomerOnCustomerForCustomersIdTokenFkeyPatch = {
  phoneNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `customer` being updated. */
export type UpdateCustomerOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyPatch = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `customer` being updated. */
export type UpdateCustomerOnPriceForPricesCustomerIdTokenFkeyPatch = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `customer` being updated. */
export type UpdateCustomerOnTransactionForTransactionsCustomerIdTokenFkeyPatch = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `customer` being updated. */
export type UpdateCustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyPatch = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayload = {
   __typename?: 'UpdateCustomerPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Customer` that was updated by this mutation. */
  customer?: Maybe<Customer>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `IdTag` that is related to this `Customer`. */
  idTagByIdToken?: Maybe<IdTag>;
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>;
};


/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>;
};

/** All input for the `updateCustomersPermissionByUuid` mutation. */
export type UpdateCustomersPermissionByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `CustomersPermission` being updated. */
  customersPermissionPatch: CustomersPermissionPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateCustomersPermission` mutation. */
export type UpdateCustomersPermissionInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CustomersPermission` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `CustomersPermission` being updated. */
  customersPermissionPatch: CustomersPermissionPatch;
};

/** An object where the defined keys will be set on the `customersPermission` being updated. */
export type UpdateCustomersPermissionOnCustomersPermissionForCustomersPermissionsCustomerIdTokenFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  type?: Maybe<PermissionType>;
  customerToCustomerIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInput>;
};

/** The output of our update `CustomersPermission` mutation. */
export type UpdateCustomersPermissionPayload = {
   __typename?: 'UpdateCustomersPermissionPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `CustomersPermission` that was updated by this mutation. */
  customersPermission?: Maybe<CustomersPermission>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `CustomersPermission`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** An edge for our `CustomersPermission`. May be used by Relay 1. */
  customersPermissionEdge?: Maybe<CustomersPermissionsEdge>;
};


/** The output of our update `CustomersPermission` mutation. */
export type UpdateCustomersPermissionPayloadCustomersPermissionEdgeArgs = {
  orderBy?: Maybe<Array<CustomersPermissionsOrderBy>>;
};

/** All input for the `updateIdTagByIdToken` mutation. */
export type UpdateIdTagByIdTokenInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `IdTag` being updated. */
  idTagPatch: IdTagPatch;
  idToken: Scalars['String'];
};

/** All input for the `updateIdTag` mutation. */
export type UpdateIdTagInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `IdTag` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `IdTag` being updated. */
  idTagPatch: IdTagPatch;
};

/** An object where the defined keys will be set on the `idTag` being updated. */
export type UpdateIdTagOnCentralSystemUserForCentralSystemUsersIdTokenFkeyPatch = {
  parentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerUsingIdToken?: Maybe<CustomersIdTokenFkeyInverseInput>;
  centralSystemUserUsingIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `idTag` being updated. */
export type UpdateIdTagOnCustomerForCustomersIdTokenFkeyPatch = {
  parentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerUsingIdToken?: Maybe<CustomersIdTokenFkeyInverseInput>;
  centralSystemUserUsingIdToken?: Maybe<CentralSystemUsersIdTokenFkeyInverseInput>;
};

/** The output of our update `IdTag` mutation. */
export type UpdateIdTagPayload = {
   __typename?: 'UpdateIdTagPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `IdTag` that was updated by this mutation. */
  idTag?: Maybe<IdTag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `IdTag`. May be used by Relay 1. */
  idTagEdge?: Maybe<IdTagsEdge>;
};


/** The output of our update `IdTag` mutation. */
export type UpdateIdTagPayloadIdTagEdgeArgs = {
  orderBy?: Maybe<Array<IdTagsOrderBy>>;
};

/** All input for the `updateMeterValueByUuid` mutation. */
export type UpdateMeterValueByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MeterValue` being updated. */
  meterValuePatch: MeterValuePatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateMeterValue` mutation. */
export type UpdateMeterValueInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MeterValue` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MeterValue` being updated. */
  meterValuePatch: MeterValuePatch;
};

/** An object where the defined keys will be set on the `meterValue` being updated. */
export type UpdateMeterValueOnMeterValueForMeterValuesTransactionIdFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  connectorId?: Maybe<Scalars['Int']>;
  timestamptz?: Maybe<Scalars['Datetime']>;
  value?: Maybe<Scalars['String']>;
  context?: Maybe<Scalars['String']>;
  format?: Maybe<ValueFormat>;
  measurand?: Maybe<Scalars['String']>;
  phase?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  unitOfMeasure?: Maybe<UnitOfMeasure>;
  transactionToTransactionId?: Maybe<MeterValuesTransactionIdFkeyInput>;
};

/** The output of our update `MeterValue` mutation. */
export type UpdateMeterValuePayload = {
   __typename?: 'UpdateMeterValuePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MeterValue` that was updated by this mutation. */
  meterValue?: Maybe<MeterValue>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Transaction` that is related to this `MeterValue`. */
  transactionByTransactionId?: Maybe<Transaction>;
  /** An edge for our `MeterValue`. May be used by Relay 1. */
  meterValueEdge?: Maybe<MeterValuesEdge>;
};


/** The output of our update `MeterValue` mutation. */
export type UpdateMeterValuePayloadMeterValueEdgeArgs = {
  orderBy?: Maybe<Array<MeterValuesOrderBy>>;
};

/** All input for the `updatePriceByName` mutation. */
export type UpdatePriceByNameInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Price` being updated. */
  pricePatch: PricePatch;
  name: Scalars['String'];
};

/** All input for the `updatePriceByUuid` mutation. */
export type UpdatePriceByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Price` being updated. */
  pricePatch: PricePatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updatePrice` mutation. */
export type UpdatePriceInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Price` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Price` being updated. */
  pricePatch: PricePatch;
};

/** An object where the defined keys will be set on the `price` being updated. */
export type UpdatePriceOnPriceForPricesChargePointIdFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** An object where the defined keys will be set on the `price` being updated. */
export type UpdatePriceOnPriceForPricesConnectorTypeUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  chargePointId?: Maybe<Scalars['String']>;
  customerIdToken?: Maybe<Scalars['String']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** An object where the defined keys will be set on the `price` being updated. */
export type UpdatePriceOnPriceForPricesConnectorUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** An object where the defined keys will be set on the `price` being updated. */
export type UpdatePriceOnPriceForPricesCustomerIdTokenFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  chargePointId?: Maybe<Scalars['String']>;
  connectorTypeUuid?: Maybe<Scalars['UUID']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  chargePointToChargePointId?: Maybe<PricesChargePointIdFkeyInput>;
  connectorTypeToConnectorTypeUuid?: Maybe<PricesConnectorTypeUuidFkeyInput>;
  customerToCustomerIdToken?: Maybe<PricesCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<PricesConnectorUuidFkeyInput>;
};

/** The output of our update `Price` mutation. */
export type UpdatePricePayload = {
   __typename?: 'UpdatePricePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Price` that was updated by this mutation. */
  price?: Maybe<Price>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ChargePoint` that is related to this `Price`. */
  chargePointByChargePointId?: Maybe<ChargePoint>;
  /** Reads a single `ConnectorType` that is related to this `Price`. */
  connectorTypeByConnectorTypeUuid?: Maybe<ConnectorType>;
  /** Reads a single `Customer` that is related to this `Price`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Price`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** An edge for our `Price`. May be used by Relay 1. */
  priceEdge?: Maybe<PricesEdge>;
};


/** The output of our update `Price` mutation. */
export type UpdatePricePayloadPriceEdgeArgs = {
  orderBy?: Maybe<Array<PricesOrderBy>>;
};

/** All input for the `updateShortMessageByUuid` mutation. */
export type UpdateShortMessageByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ShortMessage` being updated. */
  shortMessagePatch: ShortMessagePatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateShortMessage` mutation. */
export type UpdateShortMessageInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ShortMessage` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ShortMessage` being updated. */
  shortMessagePatch: ShortMessagePatch;
};

/** The output of our update `ShortMessage` mutation. */
export type UpdateShortMessagePayload = {
   __typename?: 'UpdateShortMessagePayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ShortMessage` that was updated by this mutation. */
  shortMessage?: Maybe<ShortMessage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `ShortMessage`. May be used by Relay 1. */
  shortMessageEdge?: Maybe<ShortMessagesEdge>;
};


/** The output of our update `ShortMessage` mutation. */
export type UpdateShortMessagePayloadShortMessageEdgeArgs = {
  orderBy?: Maybe<Array<ShortMessagesOrderBy>>;
};

/** All input for the `updateTransactionByTransactionId` mutation. */
export type UpdateTransactionByTransactionIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  transactionPatch: TransactionPatch;
  transactionId: Scalars['Int'];
};

/** All input for the `updateTransaction` mutation. */
export type UpdateTransactionInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Transaction` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Transaction` being updated. */
  transactionPatch: TransactionPatch;
};

/** An object where the defined keys will be set on the `transaction` being updated. */
export type UpdateTransactionOnChargingProfileForChargingProfilesTransactionIdFkeyPatch = {
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `transaction` being updated. */
export type UpdateTransactionOnMeterValueForMeterValuesTransactionIdFkeyPatch = {
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `transaction` being updated. */
export type UpdateTransactionOnTransactionForTransactionsBalanceOperationUuidFkeyPatch = {
  transactionId?: Maybe<Scalars['Int']>;
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `transaction` being updated. */
export type UpdateTransactionOnTransactionForTransactionsConnectorUuidFkeyPatch = {
  transactionId?: Maybe<Scalars['Int']>;
  customerIdToken?: Maybe<Scalars['String']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `transaction` being updated. */
export type UpdateTransactionOnTransactionForTransactionsCustomerIdTokenFkeyPatch = {
  transactionId?: Maybe<Scalars['Int']>;
  meterStart?: Maybe<Scalars['Int']>;
  meterStop?: Maybe<Scalars['Int']>;
  connectorUuid?: Maybe<Scalars['UUID']>;
  startTimestamp?: Maybe<Scalars['Datetime']>;
  stopTimestamp?: Maybe<Scalars['Datetime']>;
  consumptionWh?: Maybe<Scalars['Float']>;
  reason?: Maybe<TransactionStopReason>;
  /** Price which was calculated at a transaction start */
  priceValue?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  customerToCustomerIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInput>;
  connectorToConnectorUuid?: Maybe<TransactionsConnectorUuidFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInput>;
  chargingProfilesUsingTransactionId?: Maybe<ChargingProfilesTransactionIdFkeyInverseInput>;
  meterValuesUsingTransactionId?: Maybe<MeterValuesTransactionIdFkeyInverseInput>;
};

/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayload = {
   __typename?: 'UpdateTransactionPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Transaction` that was updated by this mutation. */
  transaction?: Maybe<Transaction>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `Transaction`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `Connector` that is related to this `Transaction`. */
  connectorByConnectorUuid?: Maybe<Connector>;
  /** Reads a single `BalanceOperation` that is related to this `Transaction`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
  /** An edge for our `Transaction`. May be used by Relay 1. */
  transactionEdge?: Maybe<TransactionsEdge>;
};


/** The output of our update `Transaction` mutation. */
export type UpdateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>;
};

/** All input for the `updateYandexPaymentByBalanceOperationUuid` mutation. */
export type UpdateYandexPaymentByBalanceOperationUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `YandexPayment` being updated. */
  yandexPaymentPatch: YandexPaymentPatch;
  balanceOperationUuid: Scalars['UUID'];
};

/** All input for the `updateYandexPaymentByUuid` mutation. */
export type UpdateYandexPaymentByUuidInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `YandexPayment` being updated. */
  yandexPaymentPatch: YandexPaymentPatch;
  uuid: Scalars['UUID'];
};

/** All input for the `updateYandexPaymentByYandexId` mutation. */
export type UpdateYandexPaymentByYandexIdInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `YandexPayment` being updated. */
  yandexPaymentPatch: YandexPaymentPatch;
  yandexId: Scalars['String'];
};

/** All input for the `updateYandexPayment` mutation. */
export type UpdateYandexPaymentInput = {
  /** 
 * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `YandexPayment` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `YandexPayment` being updated. */
  yandexPaymentPatch: YandexPaymentPatch;
};

/** An object where the defined keys will be set on the `yandexPayment` being updated. */
export type UpdateYandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  status?: Maybe<YandexPaymentStatus>;
  amountValue?: Maybe<Scalars['Float']>;
  amountCurrency?: Maybe<Scalars['String']>;
  yandexId?: Maybe<Scalars['String']>;
  checks?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInput>;
};

/** An object where the defined keys will be set on the `yandexPayment` being updated. */
export type UpdateYandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  status?: Maybe<YandexPaymentStatus>;
  amountValue?: Maybe<Scalars['Float']>;
  amountCurrency?: Maybe<Scalars['String']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  yandexId?: Maybe<Scalars['String']>;
  checks?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInput>;
};

/** The output of our update `YandexPayment` mutation. */
export type UpdateYandexPaymentPayload = {
   __typename?: 'UpdateYandexPaymentPayload';
  /** 
 * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
 */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `YandexPayment` that was updated by this mutation. */
  yandexPayment?: Maybe<YandexPayment>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Customer` that is related to this `YandexPayment`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `BalanceOperation` that is related to this `YandexPayment`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
  /** An edge for our `YandexPayment`. May be used by Relay 1. */
  yandexPaymentEdge?: Maybe<YandexPaymentsEdge>;
};


/** The output of our update `YandexPayment` mutation. */
export type UpdateYandexPaymentPayloadYandexPaymentEdgeArgs = {
  orderBy?: Maybe<Array<YandexPaymentsOrderBy>>;
};


/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['UUID']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['UUID']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['UUID']>;
};

export enum ValueFormat {
  Raw = 'Raw',
  SignedData = 'SignedData'
}

/** A filter to be used against ValueFormat fields. All fields are combined with a logical ‘and.’ */
export type ValueFormatFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<ValueFormat>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<ValueFormat>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<ValueFormat>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<ValueFormat>;
  /** Included in the specified list. */
  in?: Maybe<Array<ValueFormat>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<ValueFormat>>;
  /** Less than the specified value. */
  lessThan?: Maybe<ValueFormat>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<ValueFormat>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<ValueFormat>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<ValueFormat>;
};

export type YandexPayment = Node & {
   __typename?: 'YandexPayment';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uuid: Scalars['UUID'];
  customerIdToken: Scalars['String'];
  status: YandexPaymentStatus;
  amountValue: Scalars['Float'];
  amountCurrency: Scalars['String'];
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  yandexId?: Maybe<Scalars['String']>;
  checks: Scalars['Int'];
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `Customer` that is related to this `YandexPayment`. */
  customerByCustomerIdToken?: Maybe<Customer>;
  /** Reads a single `BalanceOperation` that is related to this `YandexPayment`. */
  balanceOperationByBalanceOperationUuid?: Maybe<BalanceOperation>;
};

/** 
 * A condition to be used against `YandexPayment` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type YandexPaymentCondition = {
  /** Checks for equality with the object’s `uuid` field. */
  uuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `status` field. */
  status?: Maybe<YandexPaymentStatus>;
  /** Checks for equality with the object’s `amountValue` field. */
  amountValue?: Maybe<Scalars['Float']>;
  /** Checks for equality with the object’s `amountCurrency` field. */
  amountCurrency?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `balanceOperationUuid` field. */
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `yandexId` field. */
  yandexId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `checks` field. */
  checks?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `YandexPayment` object types. All fields are combined with a logical ‘and.’ */
export type YandexPaymentFilter = {
  /** Filter by the object’s `uuid` field. */
  uuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `customerIdToken` field. */
  customerIdToken?: Maybe<StringFilter>;
  /** Filter by the object’s `status` field. */
  status?: Maybe<YandexPaymentStatusFilter>;
  /** Filter by the object’s `amountValue` field. */
  amountValue?: Maybe<FloatFilter>;
  /** Filter by the object’s `amountCurrency` field. */
  amountCurrency?: Maybe<StringFilter>;
  /** Filter by the object’s `balanceOperationUuid` field. */
  balanceOperationUuid?: Maybe<UuidFilter>;
  /** Filter by the object’s `yandexId` field. */
  yandexId?: Maybe<StringFilter>;
  /** Filter by the object’s `checks` field. */
  checks?: Maybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<YandexPaymentFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<YandexPaymentFilter>>;
  /** Negates the expression. */
  not?: Maybe<YandexPaymentFilter>;
};

/** An input for mutations affecting `YandexPayment` */
export type YandexPaymentInput = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  status: YandexPaymentStatus;
  amountValue: Scalars['Float'];
  amountCurrency?: Maybe<Scalars['String']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  yandexId?: Maybe<Scalars['String']>;
  checks?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type YandexPaymentNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `yandexPayment` to be connected. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type YandexPaymentNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `yandexPayment` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `balanceOperation` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `balanceOperation` being updated. */
  balanceOperationPatch: BalanceOperationPatch;
};

/** The fields on `yandexPayment` to look up the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingYandexPaymentsBalanceOperationUuidKeyUpdate = {
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: UpdateYandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyPatch;
  balanceOperationUuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingYandexPaymentsPkeyUpdate = {
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: UpdateYandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingYandexPaymentsYandexIdKeyUpdate = {
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: UpdateYandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyPatch;
  yandexId: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `customer` to be connected. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `customer` being updated. */
  customerPatch: CustomerPatch;
};

/** The fields on `yandexPayment` to look up the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingYandexPaymentsBalanceOperationUuidKeyUpdate = {
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: UpdateYandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyPatch;
  balanceOperationUuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingYandexPaymentsPkeyUpdate = {
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: UpdateYandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyPatch;
  uuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to update. */
export type YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingYandexPaymentsYandexIdKeyUpdate = {
  /** An object where the defined keys will be set on the `yandexPayment` being updated. */
  yandexPaymentPatch: UpdateYandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyPatch;
  yandexId: Scalars['String'];
};

/** Represents an update to a `YandexPayment`. Fields that are set will be updated. */
export type YandexPaymentPatch = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  status?: Maybe<YandexPaymentStatus>;
  amountValue?: Maybe<Scalars['Float']>;
  amountCurrency?: Maybe<Scalars['String']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  yandexId?: Maybe<Scalars['String']>;
  checks?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInput>;
};

/** The `balanceOperation` to be created by this mutation. */
export type YandexPaymentsBalanceOperationUuidFkeyBalanceOperationsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  /** value on which a user balance changed may be positive a negative */
  change?: Maybe<Scalars['Float']>;
  systemUserIdToken?: Maybe<Scalars['String']>;
  reason?: Maybe<BalanceOperationReason>;
  createdAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInput>;
  centralSystemUserToSystemUserIdToken?: Maybe<BalanceOperationsSystemUserIdTokenFkeyInput>;
  yandexPaymentUsingUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInverseInput>;
  transactionsUsingUuid?: Maybe<TransactionsBalanceOperationUuidFkeyInverseInput>;
};

/** Input for the nested mutation of `balanceOperation` in the `YandexPaymentInput` mutation. */
export type YandexPaymentsBalanceOperationUuidFkeyInput = {
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByUuid?: Maybe<BalanceOperationBalanceOperationsPkeyConnect>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  connectByNodeId?: Maybe<BalanceOperationNodeIdConnect>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByUuid?: Maybe<BalanceOperationBalanceOperationsPkeyDelete>;
  /** The primary key(s) for `balanceOperation` for the far side of the relationship. */
  deleteByNodeId?: Maybe<BalanceOperationNodeIdDelete>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByUuid?: Maybe<BalanceOperationOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingBalanceOperationsPkeyUpdate>;
  /** The primary key(s) and patch data for `balanceOperation` for the far side of the relationship. */
  updateByNodeId?: Maybe<YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyNodeIdUpdate>;
  /** A `BalanceOperationInput` object that will be created and connected to this object. */
  create?: Maybe<YandexPaymentsBalanceOperationUuidFkeyBalanceOperationsCreateInput>;
};

/** Input for the nested mutation of `yandexPayment` in the `BalanceOperationInput` mutation. */
export type YandexPaymentsBalanceOperationUuidFkeyInverseInput = {
  /** Flag indicating whether all other `yandexPayment` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByUuid?: Maybe<YandexPaymentYandexPaymentsPkeyConnect>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByBalanceOperationUuid?: Maybe<YandexPaymentYandexPaymentsBalanceOperationUuidKeyConnect>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByYandexId?: Maybe<YandexPaymentYandexPaymentsYandexIdKeyConnect>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByNodeId?: Maybe<YandexPaymentNodeIdConnect>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByUuid?: Maybe<YandexPaymentYandexPaymentsPkeyDelete>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByBalanceOperationUuid?: Maybe<YandexPaymentYandexPaymentsBalanceOperationUuidKeyDelete>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByYandexId?: Maybe<YandexPaymentYandexPaymentsYandexIdKeyDelete>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByNodeId?: Maybe<YandexPaymentNodeIdDelete>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByUuid?: Maybe<YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingYandexPaymentsPkeyUpdate>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByBalanceOperationUuid?: Maybe<YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingYandexPaymentsBalanceOperationUuidKeyUpdate>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByYandexId?: Maybe<YandexPaymentOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyUsingYandexPaymentsYandexIdKeyUpdate>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByNodeId?: Maybe<BalanceOperationOnYandexPaymentForYandexPaymentsBalanceOperationUuidFkeyNodeIdUpdate>;
  /** A `YandexPaymentInput` object that will be created and connected to this object. */
  create?: Maybe<Array<YandexPaymentsBalanceOperationUuidFkeyYandexPaymentsCreateInput>>;
};

/** The `yandexPayment` to be created by this mutation. */
export type YandexPaymentsBalanceOperationUuidFkeyYandexPaymentsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  customerIdToken?: Maybe<Scalars['String']>;
  status: YandexPaymentStatus;
  amountValue: Scalars['Float'];
  amountCurrency?: Maybe<Scalars['String']>;
  yandexId?: Maybe<Scalars['String']>;
  checks?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInput>;
};

/** A connection to a list of `YandexPayment` values. */
export type YandexPaymentsConnection = {
   __typename?: 'YandexPaymentsConnection';
  /** A list of `YandexPayment` objects. */
  nodes: Array<Maybe<YandexPayment>>;
  /** A list of edges which contains the `YandexPayment` and cursor to aid in pagination. */
  edges: Array<YandexPaymentsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `YandexPayment` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** The `customer` to be created by this mutation. */
export type YandexPaymentsCustomerIdTokenFkeyCustomersCreateInput = {
  idToken?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
  /** 
 * issued JWT tokens
   *     valid since this timestamptz.
   *     When we need to invalidate all tokens issued before some date we can update this field
 */
  tokensValidSince?: Maybe<Scalars['Datetime']>;
  /** 
 * In order not to
   *     allow malicious user to register again in the system
   *     with the same phoneNumber user may be marked as blocked
 */
  isBlocked?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  idTagToIdToken?: Maybe<CustomersIdTokenFkeyInput>;
  customersPermissionsUsingIdToken?: Maybe<CustomersPermissionsCustomerIdTokenFkeyInverseInput>;
  balanceOperationsUsingIdToken?: Maybe<BalanceOperationsCustomerIdTokenFkeyInverseInput>;
  yandexPaymentsUsingIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInverseInput>;
  transactionsUsingIdToken?: Maybe<TransactionsCustomerIdTokenFkeyInverseInput>;
  pricesUsingIdToken?: Maybe<PricesCustomerIdTokenFkeyInverseInput>;
};

/** Input for the nested mutation of `customer` in the `YandexPaymentInput` mutation. */
export type YandexPaymentsCustomerIdTokenFkeyInput = {
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByIdToken?: Maybe<CustomerCustomersPkeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  connectByNodeId?: Maybe<CustomerNodeIdConnect>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByIdToken?: Maybe<CustomerCustomersPkeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByPhoneNumber?: Maybe<CustomerCustomersPhoneNumberKeyDelete>;
  /** The primary key(s) for `customer` for the far side of the relationship. */
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByIdToken?: Maybe<CustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingCustomersPkeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByPhoneNumber?: Maybe<CustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingCustomersPhoneNumberKeyUpdate>;
  /** The primary key(s) and patch data for `customer` for the far side of the relationship. */
  updateByNodeId?: Maybe<YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyNodeIdUpdate>;
  /** A `CustomerInput` object that will be created and connected to this object. */
  create?: Maybe<YandexPaymentsCustomerIdTokenFkeyCustomersCreateInput>;
};

/** Input for the nested mutation of `yandexPayment` in the `CustomerInput` mutation. */
export type YandexPaymentsCustomerIdTokenFkeyInverseInput = {
  /** Flag indicating whether all other `yandexPayment` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByUuid?: Maybe<Array<YandexPaymentYandexPaymentsPkeyConnect>>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByBalanceOperationUuid?: Maybe<Array<YandexPaymentYandexPaymentsBalanceOperationUuidKeyConnect>>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByYandexId?: Maybe<Array<YandexPaymentYandexPaymentsYandexIdKeyConnect>>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  connectByNodeId?: Maybe<Array<YandexPaymentNodeIdConnect>>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByUuid?: Maybe<Array<YandexPaymentYandexPaymentsPkeyDelete>>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByBalanceOperationUuid?: Maybe<Array<YandexPaymentYandexPaymentsBalanceOperationUuidKeyDelete>>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByYandexId?: Maybe<Array<YandexPaymentYandexPaymentsYandexIdKeyDelete>>;
  /** The primary key(s) for `yandexPayment` for the far side of the relationship. */
  deleteByNodeId?: Maybe<Array<YandexPaymentNodeIdDelete>>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByUuid?: Maybe<Array<YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingYandexPaymentsPkeyUpdate>>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByBalanceOperationUuid?: Maybe<Array<YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingYandexPaymentsBalanceOperationUuidKeyUpdate>>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByYandexId?: Maybe<Array<YandexPaymentOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyUsingYandexPaymentsYandexIdKeyUpdate>>;
  /** The primary key(s) and patch data for `yandexPayment` for the far side of the relationship. */
  updateByNodeId?: Maybe<Array<CustomerOnYandexPaymentForYandexPaymentsCustomerIdTokenFkeyNodeIdUpdate>>;
  /** A `YandexPaymentInput` object that will be created and connected to this object. */
  create?: Maybe<Array<YandexPaymentsCustomerIdTokenFkeyYandexPaymentsCreateInput>>;
};

/** The `yandexPayment` to be created by this mutation. */
export type YandexPaymentsCustomerIdTokenFkeyYandexPaymentsCreateInput = {
  uuid?: Maybe<Scalars['UUID']>;
  status: YandexPaymentStatus;
  amountValue: Scalars['Float'];
  amountCurrency?: Maybe<Scalars['String']>;
  balanceOperationUuid?: Maybe<Scalars['UUID']>;
  yandexId?: Maybe<Scalars['String']>;
  checks?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  customerToCustomerIdToken?: Maybe<YandexPaymentsCustomerIdTokenFkeyInput>;
  balanceOperationToBalanceOperationUuid?: Maybe<YandexPaymentsBalanceOperationUuidFkeyInput>;
};

/** A `YandexPayment` edge in the connection. */
export type YandexPaymentsEdge = {
   __typename?: 'YandexPaymentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `YandexPayment` at the end of the edge. */
  node?: Maybe<YandexPayment>;
};

/** Methods to use when ordering `YandexPayment`. */
export enum YandexPaymentsOrderBy {
  Natural = 'NATURAL',
  UuidAsc = 'UUID_ASC',
  UuidDesc = 'UUID_DESC',
  CustomerIdTokenAsc = 'CUSTOMER_ID_TOKEN_ASC',
  CustomerIdTokenDesc = 'CUSTOMER_ID_TOKEN_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  AmountValueAsc = 'AMOUNT_VALUE_ASC',
  AmountValueDesc = 'AMOUNT_VALUE_DESC',
  AmountCurrencyAsc = 'AMOUNT_CURRENCY_ASC',
  AmountCurrencyDesc = 'AMOUNT_CURRENCY_DESC',
  BalanceOperationUuidAsc = 'BALANCE_OPERATION_UUID_ASC',
  BalanceOperationUuidDesc = 'BALANCE_OPERATION_UUID_DESC',
  YandexIdAsc = 'YANDEX_ID_ASC',
  YandexIdDesc = 'YANDEX_ID_DESC',
  ChecksAsc = 'CHECKS_ASC',
  ChecksDesc = 'CHECKS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum YandexPaymentStatus {
  Pending = 'pending',
  WaitingForCapture = 'waiting_for_capture',
  Succeeded = 'succeeded',
  Canceled = 'canceled'
}

/** A filter to be used against YandexPaymentStatus fields. All fields are combined with a logical ‘and.’ */
export type YandexPaymentStatusFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<YandexPaymentStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<YandexPaymentStatus>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<YandexPaymentStatus>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<YandexPaymentStatus>;
  /** Included in the specified list. */
  in?: Maybe<Array<YandexPaymentStatus>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<YandexPaymentStatus>>;
  /** Less than the specified value. */
  lessThan?: Maybe<YandexPaymentStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<YandexPaymentStatus>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<YandexPaymentStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<YandexPaymentStatus>;
};

/** The fields on `yandexPayment` to look up the row to connect. */
export type YandexPaymentYandexPaymentsBalanceOperationUuidKeyConnect = {
  balanceOperationUuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to delete. */
export type YandexPaymentYandexPaymentsBalanceOperationUuidKeyDelete = {
  balanceOperationUuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to connect. */
export type YandexPaymentYandexPaymentsPkeyConnect = {
  uuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to delete. */
export type YandexPaymentYandexPaymentsPkeyDelete = {
  uuid: Scalars['UUID'];
};

/** The fields on `yandexPayment` to look up the row to connect. */
export type YandexPaymentYandexPaymentsYandexIdKeyConnect = {
  yandexId: Scalars['String'];
};

/** The fields on `yandexPayment` to look up the row to delete. */
export type YandexPaymentYandexPaymentsYandexIdKeyDelete = {
  yandexId: Scalars['String'];
};

