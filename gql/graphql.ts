/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  access_level: any;
  bigint: any;
  device_operation_image_type: any;
  device_operation_type: any;
  float8: any;
  jsonb: any;
  measurement_property_unit: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "access_level". All fields are combined with logical 'AND'. */
export type Access_Level_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['access_level']>;
  _gt?: InputMaybe<Scalars['access_level']>;
  _gte?: InputMaybe<Scalars['access_level']>;
  _in?: InputMaybe<Array<Scalars['access_level']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['access_level']>;
  _lte?: InputMaybe<Scalars['access_level']>;
  _neq?: InputMaybe<Scalars['access_level']>;
  _nin?: InputMaybe<Array<Scalars['access_level']>>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "connnector_type" */
export type Connnector_Type = {
  __typename?: 'connnector_type';
  code: Scalars['String'];
  /** An array relationship */
  device_configurations: Array<Device_Configuration>;
  /** An aggregate relationship */
  device_configurations_aggregate: Device_Configuration_Aggregate;
  id: Scalars['bigint'];
  name: Scalars['String'];
};


/** columns and relationships of "connnector_type" */
export type Connnector_TypeDevice_ConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


/** columns and relationships of "connnector_type" */
export type Connnector_TypeDevice_Configurations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};

/** aggregated selection of "connnector_type" */
export type Connnector_Type_Aggregate = {
  __typename?: 'connnector_type_aggregate';
  aggregate?: Maybe<Connnector_Type_Aggregate_Fields>;
  nodes: Array<Connnector_Type>;
};

/** aggregate fields of "connnector_type" */
export type Connnector_Type_Aggregate_Fields = {
  __typename?: 'connnector_type_aggregate_fields';
  avg?: Maybe<Connnector_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Connnector_Type_Max_Fields>;
  min?: Maybe<Connnector_Type_Min_Fields>;
  stddev?: Maybe<Connnector_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Connnector_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Connnector_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Connnector_Type_Sum_Fields>;
  var_pop?: Maybe<Connnector_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Connnector_Type_Var_Samp_Fields>;
  variance?: Maybe<Connnector_Type_Variance_Fields>;
};


/** aggregate fields of "connnector_type" */
export type Connnector_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Connnector_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Connnector_Type_Avg_Fields = {
  __typename?: 'connnector_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "connnector_type". All fields are combined with a logical 'AND'. */
export type Connnector_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Connnector_Type_Bool_Exp>>;
  _not?: InputMaybe<Connnector_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Connnector_Type_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  device_configurations?: InputMaybe<Device_Configuration_Bool_Exp>;
  device_configurations_aggregate?: InputMaybe<Device_Configuration_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Connnector_Type_Max_Fields = {
  __typename?: 'connnector_type_max_fields';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Connnector_Type_Min_Fields = {
  __typename?: 'connnector_type_min_fields';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "connnector_type". */
export type Connnector_Type_Order_By = {
  code?: InputMaybe<Order_By>;
  device_configurations_aggregate?: InputMaybe<Device_Configuration_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "connnector_type" */
export enum Connnector_Type_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate stddev on columns */
export type Connnector_Type_Stddev_Fields = {
  __typename?: 'connnector_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Connnector_Type_Stddev_Pop_Fields = {
  __typename?: 'connnector_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Connnector_Type_Stddev_Samp_Fields = {
  __typename?: 'connnector_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "connnector_type" */
export type Connnector_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Connnector_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Connnector_Type_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Connnector_Type_Sum_Fields = {
  __typename?: 'connnector_type_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Connnector_Type_Var_Pop_Fields = {
  __typename?: 'connnector_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Connnector_Type_Var_Samp_Fields = {
  __typename?: 'connnector_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Connnector_Type_Variance_Fields = {
  __typename?: 'connnector_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  customer_users: Array<Customer_User>;
  /** An aggregate relationship */
  customer_users_aggregate: Customer_User_Aggregate;
  /** An array relationship */
  device_groups: Array<Device_Group>;
  /** An aggregate relationship */
  device_groups_aggregate: Device_Group_Aggregate;
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  sites: Array<Site>;
  /** An aggregate relationship */
  sites_aggregate: Site_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "customer" */
export type CustomerCustomer_UsersArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerCustomer_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerDevice_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Order_By>>;
  where?: InputMaybe<Device_Group_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerDevice_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Order_By>>;
  where?: InputMaybe<Device_Group_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerSitesArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerSites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate';
  aggregate?: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields';
  avg?: Maybe<Customer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
  stddev?: Maybe<Customer_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Sum_Fields>;
  var_pop?: Maybe<Customer_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Var_Samp_Fields>;
  variance?: Maybe<Customer_Variance_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Customer_Avg_Fields = {
  __typename?: 'customer_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>;
  _not?: InputMaybe<Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_users?: InputMaybe<Customer_User_Bool_Exp>;
  customer_users_aggregate?: InputMaybe<Customer_User_Aggregate_Bool_Exp>;
  device_groups?: InputMaybe<Device_Group_Bool_Exp>;
  device_groups_aggregate?: InputMaybe<Device_Group_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sites?: InputMaybe<Site_Bool_Exp>;
  sites_aggregate?: InputMaybe<Site_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_users_aggregate?: InputMaybe<Customer_User_Aggregate_Order_By>;
  device_groups_aggregate?: InputMaybe<Device_Group_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sites_aggregate?: InputMaybe<Site_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Customer_Stddev_Fields = {
  __typename?: 'customer_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Customer_Stddev_Pop_Fields = {
  __typename?: 'customer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Customer_Stddev_Samp_Fields = {
  __typename?: 'customer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Customer_Sum_Fields = {
  __typename?: 'customer_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** columns and relationships of "customer_user" */
export type Customer_User = {
  __typename?: 'customer_user';
  access_level: Scalars['access_level'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  customer: Customer;
  customer_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['bigint'];
};

/** aggregated selection of "customer_user" */
export type Customer_User_Aggregate = {
  __typename?: 'customer_user_aggregate';
  aggregate?: Maybe<Customer_User_Aggregate_Fields>;
  nodes: Array<Customer_User>;
};

export type Customer_User_Aggregate_Bool_Exp = {
  count?: InputMaybe<Customer_User_Aggregate_Bool_Exp_Count>;
};

export type Customer_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Customer_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Customer_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "customer_user" */
export type Customer_User_Aggregate_Fields = {
  __typename?: 'customer_user_aggregate_fields';
  avg?: Maybe<Customer_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customer_User_Max_Fields>;
  min?: Maybe<Customer_User_Min_Fields>;
  stddev?: Maybe<Customer_User_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_User_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_User_Sum_Fields>;
  var_pop?: Maybe<Customer_User_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_User_Var_Samp_Fields>;
  variance?: Maybe<Customer_User_Variance_Fields>;
};


/** aggregate fields of "customer_user" */
export type Customer_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customer_user" */
export type Customer_User_Aggregate_Order_By = {
  avg?: InputMaybe<Customer_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customer_User_Max_Order_By>;
  min?: InputMaybe<Customer_User_Min_Order_By>;
  stddev?: InputMaybe<Customer_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Customer_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Customer_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Customer_User_Sum_Order_By>;
  var_pop?: InputMaybe<Customer_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Customer_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Customer_User_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Customer_User_Avg_Fields = {
  __typename?: 'customer_user_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "customer_user" */
export type Customer_User_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customer_user". All fields are combined with a logical 'AND'. */
export type Customer_User_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_User_Bool_Exp>>;
  _not?: InputMaybe<Customer_User_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_User_Bool_Exp>>;
  access_level?: InputMaybe<Access_Level_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Customer_User_Max_Fields = {
  __typename?: 'customer_user_max_fields';
  access_level?: Maybe<Scalars['access_level']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "customer_user" */
export type Customer_User_Max_Order_By = {
  access_level?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customer_User_Min_Fields = {
  __typename?: 'customer_user_min_fields';
  access_level?: Maybe<Scalars['access_level']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "customer_user" */
export type Customer_User_Min_Order_By = {
  access_level?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "customer_user". */
export type Customer_User_Order_By = {
  access_level?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "customer_user" */
export enum Customer_User_Select_Column {
  /** column name */
  AccessLevel = 'access_level',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Customer_User_Stddev_Fields = {
  __typename?: 'customer_user_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "customer_user" */
export type Customer_User_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Customer_User_Stddev_Pop_Fields = {
  __typename?: 'customer_user_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "customer_user" */
export type Customer_User_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Customer_User_Stddev_Samp_Fields = {
  __typename?: 'customer_user_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "customer_user" */
export type Customer_User_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "customer_user" */
export type Customer_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_User_Stream_Cursor_Value_Input = {
  access_level?: InputMaybe<Scalars['access_level']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Customer_User_Sum_Fields = {
  __typename?: 'customer_user_sum_fields';
  customer_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "customer_user" */
export type Customer_User_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Customer_User_Var_Pop_Fields = {
  __typename?: 'customer_user_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "customer_user" */
export type Customer_User_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Customer_User_Var_Samp_Fields = {
  __typename?: 'customer_user_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "customer_user" */
export type Customer_User_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Customer_User_Variance_Fields = {
  __typename?: 'customer_user_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "customer_user" */
export type Customer_User_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Customer_Var_Pop_Fields = {
  __typename?: 'customer_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Customer_Var_Samp_Fields = {
  __typename?: 'customer_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Customer_Variance_Fields = {
  __typename?: 'customer_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "device" */
export type Device = {
  __typename?: 'device';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  device_configurations: Array<Device_Configuration>;
  /** An aggregate relationship */
  device_configurations_aggregate: Device_Configuration_Aggregate;
  /** An array relationship */
  device_group_devices: Array<Device_Group_Device>;
  /** An aggregate relationship */
  device_group_devices_aggregate: Device_Group_Device_Aggregate;
  /** An array relationship */
  device_measurement_values: Array<Device_Measurement_Value>;
  /** An aggregate relationship */
  device_measurement_values_aggregate: Device_Measurement_Value_Aggregate;
  /** An array relationship */
  device_operations: Array<Device_Operation>;
  /** An aggregate relationship */
  device_operations_aggregate: Device_Operation_Aggregate;
  /** An array relationship */
  device_states: Array<Device_State>;
  /** An aggregate relationship */
  device_states_aggregate: Device_State_Aggregate;
  /** An object relationship */
  device_type: Device_Type;
  device_type_id: Scalars['bigint'];
  id: Scalars['bigint'];
  /** An object relationship */
  location?: Maybe<Location>;
  location_id?: Maybe<Scalars['bigint']>;
  name: Scalars['String'];
  remarks?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  /** An object relationship */
  site: Site;
  site_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "device" */
export type DeviceDevice_ConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_Configurations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_Group_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_Group_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_Measurement_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_Measurement_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_StatesArgs = {
  distinct_on?: InputMaybe<Array<Device_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_State_Order_By>>;
  where?: InputMaybe<Device_State_Bool_Exp>;
};


/** columns and relationships of "device" */
export type DeviceDevice_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_State_Order_By>>;
  where?: InputMaybe<Device_State_Bool_Exp>;
};

/** aggregated selection of "device" */
export type Device_Aggregate = {
  __typename?: 'device_aggregate';
  aggregate?: Maybe<Device_Aggregate_Fields>;
  nodes: Array<Device>;
};

export type Device_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Aggregate_Bool_Exp_Count>;
};

export type Device_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device" */
export type Device_Aggregate_Fields = {
  __typename?: 'device_aggregate_fields';
  avg?: Maybe<Device_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Max_Fields>;
  min?: Maybe<Device_Min_Fields>;
  stddev?: Maybe<Device_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Sum_Fields>;
  var_pop?: Maybe<Device_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Var_Samp_Fields>;
  variance?: Maybe<Device_Variance_Fields>;
};


/** aggregate fields of "device" */
export type Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device" */
export type Device_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Max_Order_By>;
  min?: InputMaybe<Device_Min_Order_By>;
  stddev?: InputMaybe<Device_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Avg_Fields = {
  __typename?: 'device_avg_fields';
  device_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  site_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device" */
export type Device_Avg_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export type Device_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Bool_Exp>>;
  _not?: InputMaybe<Device_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  device_configurations?: InputMaybe<Device_Configuration_Bool_Exp>;
  device_configurations_aggregate?: InputMaybe<Device_Configuration_Aggregate_Bool_Exp>;
  device_group_devices?: InputMaybe<Device_Group_Device_Bool_Exp>;
  device_group_devices_aggregate?: InputMaybe<Device_Group_Device_Aggregate_Bool_Exp>;
  device_measurement_values?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
  device_measurement_values_aggregate?: InputMaybe<Device_Measurement_Value_Aggregate_Bool_Exp>;
  device_operations?: InputMaybe<Device_Operation_Bool_Exp>;
  device_operations_aggregate?: InputMaybe<Device_Operation_Aggregate_Bool_Exp>;
  device_states?: InputMaybe<Device_State_Bool_Exp>;
  device_states_aggregate?: InputMaybe<Device_State_Aggregate_Bool_Exp>;
  device_type?: InputMaybe<Device_Type_Bool_Exp>;
  device_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  location?: InputMaybe<Location_Bool_Exp>;
  location_id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  remarks?: InputMaybe<String_Comparison_Exp>;
  serial_number?: InputMaybe<String_Comparison_Exp>;
  site?: InputMaybe<Site_Bool_Exp>;
  site_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "device_configuration" */
export type Device_Configuration = {
  __typename?: 'device_configuration';
  additional_configuration?: Maybe<Scalars['jsonb']>;
  awp_model?: Maybe<Scalars['String']>;
  camera_firmware_version?: Maybe<Scalars['String']>;
  camera_model?: Maybe<Scalars['String']>;
  connector_configuration: Scalars['String'];
  connector_type_id: Scalars['bigint'];
  /** An object relationship */
  connnector_type: Connnector_Type;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device: Device;
  device_id: Scalars['bigint'];
  id: Scalars['bigint'];
  is_active: Scalars['Boolean'];
  led_ring_model?: Maybe<Scalars['String']>;
  motor_controller_model?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "device_configuration" */
export type Device_ConfigurationAdditional_ConfigurationArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "device_configuration" */
export type Device_Configuration_Aggregate = {
  __typename?: 'device_configuration_aggregate';
  aggregate?: Maybe<Device_Configuration_Aggregate_Fields>;
  nodes: Array<Device_Configuration>;
};

export type Device_Configuration_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Device_Configuration_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Device_Configuration_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Device_Configuration_Aggregate_Bool_Exp_Count>;
};

export type Device_Configuration_Aggregate_Bool_Exp_Bool_And = {
  arguments: Device_Configuration_Select_Column_Device_Configuration_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Configuration_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Device_Configuration_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Device_Configuration_Select_Column_Device_Configuration_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Configuration_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Device_Configuration_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Configuration_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device_configuration" */
export type Device_Configuration_Aggregate_Fields = {
  __typename?: 'device_configuration_aggregate_fields';
  avg?: Maybe<Device_Configuration_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Configuration_Max_Fields>;
  min?: Maybe<Device_Configuration_Min_Fields>;
  stddev?: Maybe<Device_Configuration_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Configuration_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Configuration_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Configuration_Sum_Fields>;
  var_pop?: Maybe<Device_Configuration_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Configuration_Var_Samp_Fields>;
  variance?: Maybe<Device_Configuration_Variance_Fields>;
};


/** aggregate fields of "device_configuration" */
export type Device_Configuration_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_configuration" */
export type Device_Configuration_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Configuration_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Configuration_Max_Order_By>;
  min?: InputMaybe<Device_Configuration_Min_Order_By>;
  stddev?: InputMaybe<Device_Configuration_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Configuration_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Configuration_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Configuration_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Configuration_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Configuration_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Configuration_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Configuration_Avg_Fields = {
  __typename?: 'device_configuration_avg_fields';
  connector_type_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device_configuration" */
export type Device_Configuration_Avg_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device_configuration". All fields are combined with a logical 'AND'. */
export type Device_Configuration_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Configuration_Bool_Exp>>;
  _not?: InputMaybe<Device_Configuration_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Configuration_Bool_Exp>>;
  additional_configuration?: InputMaybe<Jsonb_Comparison_Exp>;
  awp_model?: InputMaybe<String_Comparison_Exp>;
  camera_firmware_version?: InputMaybe<String_Comparison_Exp>;
  camera_model?: InputMaybe<String_Comparison_Exp>;
  connector_configuration?: InputMaybe<String_Comparison_Exp>;
  connector_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  connnector_type?: InputMaybe<Connnector_Type_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Device_Bool_Exp>;
  device_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  led_ring_model?: InputMaybe<String_Comparison_Exp>;
  motor_controller_model?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Configuration_Max_Fields = {
  __typename?: 'device_configuration_max_fields';
  awp_model?: Maybe<Scalars['String']>;
  camera_firmware_version?: Maybe<Scalars['String']>;
  camera_model?: Maybe<Scalars['String']>;
  connector_configuration?: Maybe<Scalars['String']>;
  connector_type_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  led_ring_model?: Maybe<Scalars['String']>;
  motor_controller_model?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "device_configuration" */
export type Device_Configuration_Max_Order_By = {
  awp_model?: InputMaybe<Order_By>;
  camera_firmware_version?: InputMaybe<Order_By>;
  camera_model?: InputMaybe<Order_By>;
  connector_configuration?: InputMaybe<Order_By>;
  connector_type_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  led_ring_model?: InputMaybe<Order_By>;
  motor_controller_model?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Configuration_Min_Fields = {
  __typename?: 'device_configuration_min_fields';
  awp_model?: Maybe<Scalars['String']>;
  camera_firmware_version?: Maybe<Scalars['String']>;
  camera_model?: Maybe<Scalars['String']>;
  connector_configuration?: Maybe<Scalars['String']>;
  connector_type_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  led_ring_model?: Maybe<Scalars['String']>;
  motor_controller_model?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "device_configuration" */
export type Device_Configuration_Min_Order_By = {
  awp_model?: InputMaybe<Order_By>;
  camera_firmware_version?: InputMaybe<Order_By>;
  camera_model?: InputMaybe<Order_By>;
  connector_configuration?: InputMaybe<Order_By>;
  connector_type_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  led_ring_model?: InputMaybe<Order_By>;
  motor_controller_model?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device_configuration". */
export type Device_Configuration_Order_By = {
  additional_configuration?: InputMaybe<Order_By>;
  awp_model?: InputMaybe<Order_By>;
  camera_firmware_version?: InputMaybe<Order_By>;
  camera_model?: InputMaybe<Order_By>;
  connector_configuration?: InputMaybe<Order_By>;
  connector_type_id?: InputMaybe<Order_By>;
  connnector_type?: InputMaybe<Connnector_Type_Order_By>;
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Device_Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  led_ring_model?: InputMaybe<Order_By>;
  motor_controller_model?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "device_configuration" */
export enum Device_Configuration_Select_Column {
  /** column name */
  AdditionalConfiguration = 'additional_configuration',
  /** column name */
  AwpModel = 'awp_model',
  /** column name */
  CameraFirmwareVersion = 'camera_firmware_version',
  /** column name */
  CameraModel = 'camera_model',
  /** column name */
  ConnectorConfiguration = 'connector_configuration',
  /** column name */
  ConnectorTypeId = 'connector_type_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LedRingModel = 'led_ring_model',
  /** column name */
  MotorControllerModel = 'motor_controller_model',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "device_configuration_aggregate_bool_exp_bool_and_arguments_columns" columns of table "device_configuration" */
export enum Device_Configuration_Select_Column_Device_Configuration_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** select "device_configuration_aggregate_bool_exp_bool_or_arguments_columns" columns of table "device_configuration" */
export enum Device_Configuration_Select_Column_Device_Configuration_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** aggregate stddev on columns */
export type Device_Configuration_Stddev_Fields = {
  __typename?: 'device_configuration_stddev_fields';
  connector_type_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device_configuration" */
export type Device_Configuration_Stddev_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Configuration_Stddev_Pop_Fields = {
  __typename?: 'device_configuration_stddev_pop_fields';
  connector_type_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device_configuration" */
export type Device_Configuration_Stddev_Pop_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Configuration_Stddev_Samp_Fields = {
  __typename?: 'device_configuration_stddev_samp_fields';
  connector_type_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device_configuration" */
export type Device_Configuration_Stddev_Samp_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device_configuration" */
export type Device_Configuration_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Configuration_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Configuration_Stream_Cursor_Value_Input = {
  additional_configuration?: InputMaybe<Scalars['jsonb']>;
  awp_model?: InputMaybe<Scalars['String']>;
  camera_firmware_version?: InputMaybe<Scalars['String']>;
  camera_model?: InputMaybe<Scalars['String']>;
  connector_configuration?: InputMaybe<Scalars['String']>;
  connector_type_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  led_ring_model?: InputMaybe<Scalars['String']>;
  motor_controller_model?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Device_Configuration_Sum_Fields = {
  __typename?: 'device_configuration_sum_fields';
  connector_type_id?: Maybe<Scalars['bigint']>;
  device_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device_configuration" */
export type Device_Configuration_Sum_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Device_Configuration_Var_Pop_Fields = {
  __typename?: 'device_configuration_var_pop_fields';
  connector_type_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device_configuration" */
export type Device_Configuration_Var_Pop_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Configuration_Var_Samp_Fields = {
  __typename?: 'device_configuration_var_samp_fields';
  connector_type_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device_configuration" */
export type Device_Configuration_Var_Samp_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Configuration_Variance_Fields = {
  __typename?: 'device_configuration_variance_fields';
  connector_type_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device_configuration" */
export type Device_Configuration_Variance_Order_By = {
  connector_type_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "device_group" */
export type Device_Group = {
  __typename?: 'device_group';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  customer: Customer;
  customer_id: Scalars['bigint'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  device_group_devices: Array<Device_Group_Device>;
  /** An aggregate relationship */
  device_group_devices_aggregate: Device_Group_Device_Aggregate;
  id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "device_group" */
export type Device_GroupDevice_Group_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


/** columns and relationships of "device_group" */
export type Device_GroupDevice_Group_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};

/** aggregated selection of "device_group" */
export type Device_Group_Aggregate = {
  __typename?: 'device_group_aggregate';
  aggregate?: Maybe<Device_Group_Aggregate_Fields>;
  nodes: Array<Device_Group>;
};

export type Device_Group_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Group_Aggregate_Bool_Exp_Count>;
};

export type Device_Group_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Group_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device_group" */
export type Device_Group_Aggregate_Fields = {
  __typename?: 'device_group_aggregate_fields';
  avg?: Maybe<Device_Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Group_Max_Fields>;
  min?: Maybe<Device_Group_Min_Fields>;
  stddev?: Maybe<Device_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Group_Sum_Fields>;
  var_pop?: Maybe<Device_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Group_Var_Samp_Fields>;
  variance?: Maybe<Device_Group_Variance_Fields>;
};


/** aggregate fields of "device_group" */
export type Device_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_group" */
export type Device_Group_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Group_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Group_Max_Order_By>;
  min?: InputMaybe<Device_Group_Min_Order_By>;
  stddev?: InputMaybe<Device_Group_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Group_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Group_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Group_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Group_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Group_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Group_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Group_Avg_Fields = {
  __typename?: 'device_group_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device_group" */
export type Device_Group_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device_group". All fields are combined with a logical 'AND'. */
export type Device_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Group_Bool_Exp>>;
  _not?: InputMaybe<Device_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Group_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  device_group_devices?: InputMaybe<Device_Group_Device_Bool_Exp>;
  device_group_devices_aggregate?: InputMaybe<Device_Group_Device_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "device_group_device" */
export type Device_Group_Device = {
  __typename?: 'device_group_device';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device: Device;
  /** An object relationship */
  device_group: Device_Group;
  device_group_id: Scalars['bigint'];
  device_id: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "device_group_device" */
export type Device_Group_Device_Aggregate = {
  __typename?: 'device_group_device_aggregate';
  aggregate?: Maybe<Device_Group_Device_Aggregate_Fields>;
  nodes: Array<Device_Group_Device>;
};

export type Device_Group_Device_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Group_Device_Aggregate_Bool_Exp_Count>;
};

export type Device_Group_Device_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Group_Device_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device_group_device" */
export type Device_Group_Device_Aggregate_Fields = {
  __typename?: 'device_group_device_aggregate_fields';
  avg?: Maybe<Device_Group_Device_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Group_Device_Max_Fields>;
  min?: Maybe<Device_Group_Device_Min_Fields>;
  stddev?: Maybe<Device_Group_Device_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Group_Device_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Group_Device_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Group_Device_Sum_Fields>;
  var_pop?: Maybe<Device_Group_Device_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Group_Device_Var_Samp_Fields>;
  variance?: Maybe<Device_Group_Device_Variance_Fields>;
};


/** aggregate fields of "device_group_device" */
export type Device_Group_Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_group_device" */
export type Device_Group_Device_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Group_Device_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Group_Device_Max_Order_By>;
  min?: InputMaybe<Device_Group_Device_Min_Order_By>;
  stddev?: InputMaybe<Device_Group_Device_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Group_Device_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Group_Device_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Group_Device_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Group_Device_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Group_Device_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Group_Device_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Group_Device_Avg_Fields = {
  __typename?: 'device_group_device_avg_fields';
  device_group_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device_group_device" */
export type Device_Group_Device_Avg_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device_group_device". All fields are combined with a logical 'AND'. */
export type Device_Group_Device_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Group_Device_Bool_Exp>>;
  _not?: InputMaybe<Device_Group_Device_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Group_Device_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Device_Bool_Exp>;
  device_group?: InputMaybe<Device_Group_Bool_Exp>;
  device_group_id?: InputMaybe<Bigint_Comparison_Exp>;
  device_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Group_Device_Max_Fields = {
  __typename?: 'device_group_device_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_group_id?: Maybe<Scalars['bigint']>;
  device_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "device_group_device" */
export type Device_Group_Device_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Group_Device_Min_Fields = {
  __typename?: 'device_group_device_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_group_id?: Maybe<Scalars['bigint']>;
  device_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "device_group_device" */
export type Device_Group_Device_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device_group_device". */
export type Device_Group_Device_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Device_Order_By>;
  device_group?: InputMaybe<Device_Group_Order_By>;
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "device_group_device" */
export enum Device_Group_Device_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceGroupId = 'device_group_id',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Device_Group_Device_Stddev_Fields = {
  __typename?: 'device_group_device_stddev_fields';
  device_group_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device_group_device" */
export type Device_Group_Device_Stddev_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Group_Device_Stddev_Pop_Fields = {
  __typename?: 'device_group_device_stddev_pop_fields';
  device_group_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device_group_device" */
export type Device_Group_Device_Stddev_Pop_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Group_Device_Stddev_Samp_Fields = {
  __typename?: 'device_group_device_stddev_samp_fields';
  device_group_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device_group_device" */
export type Device_Group_Device_Stddev_Samp_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device_group_device" */
export type Device_Group_Device_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Group_Device_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Group_Device_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_group_id?: InputMaybe<Scalars['bigint']>;
  device_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Device_Group_Device_Sum_Fields = {
  __typename?: 'device_group_device_sum_fields';
  device_group_id?: Maybe<Scalars['bigint']>;
  device_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device_group_device" */
export type Device_Group_Device_Sum_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Device_Group_Device_Var_Pop_Fields = {
  __typename?: 'device_group_device_var_pop_fields';
  device_group_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device_group_device" */
export type Device_Group_Device_Var_Pop_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Group_Device_Var_Samp_Fields = {
  __typename?: 'device_group_device_var_samp_fields';
  device_group_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device_group_device" */
export type Device_Group_Device_Var_Samp_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Group_Device_Variance_Fields = {
  __typename?: 'device_group_device_variance_fields';
  device_group_id?: Maybe<Scalars['Float']>;
  device_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device_group_device" */
export type Device_Group_Device_Variance_Order_By = {
  device_group_id?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Device_Group_Max_Fields = {
  __typename?: 'device_group_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "device_group" */
export type Device_Group_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Group_Min_Fields = {
  __typename?: 'device_group_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "device_group" */
export type Device_Group_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device_group". */
export type Device_Group_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  device_group_devices_aggregate?: InputMaybe<Device_Group_Device_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "device_group" */
export enum Device_Group_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Device_Group_Stddev_Fields = {
  __typename?: 'device_group_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device_group" */
export type Device_Group_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Group_Stddev_Pop_Fields = {
  __typename?: 'device_group_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device_group" */
export type Device_Group_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Group_Stddev_Samp_Fields = {
  __typename?: 'device_group_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device_group" */
export type Device_Group_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device_group" */
export type Device_Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Group_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['bigint']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Device_Group_Sum_Fields = {
  __typename?: 'device_group_sum_fields';
  customer_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device_group" */
export type Device_Group_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Device_Group_Var_Pop_Fields = {
  __typename?: 'device_group_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device_group" */
export type Device_Group_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Group_Var_Samp_Fields = {
  __typename?: 'device_group_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device_group" */
export type Device_Group_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Group_Variance_Fields = {
  __typename?: 'device_group_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device_group" */
export type Device_Group_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Device_Max_Fields = {
  __typename?: 'device_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  device_type_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  location_id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "device" */
export type Device_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "device_measurement_property" */
export type Device_Measurement_Property = {
  __typename?: 'device_measurement_property';
  /** An array relationship */
  device_measurement_values: Array<Device_Measurement_Value>;
  /** An aggregate relationship */
  device_measurement_values_aggregate: Device_Measurement_Value_Aggregate;
  id: Scalars['bigint'];
  name: Scalars['String'];
  unit: Scalars['measurement_property_unit'];
};


/** columns and relationships of "device_measurement_property" */
export type Device_Measurement_PropertyDevice_Measurement_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


/** columns and relationships of "device_measurement_property" */
export type Device_Measurement_PropertyDevice_Measurement_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};

/** aggregated selection of "device_measurement_property" */
export type Device_Measurement_Property_Aggregate = {
  __typename?: 'device_measurement_property_aggregate';
  aggregate?: Maybe<Device_Measurement_Property_Aggregate_Fields>;
  nodes: Array<Device_Measurement_Property>;
};

/** aggregate fields of "device_measurement_property" */
export type Device_Measurement_Property_Aggregate_Fields = {
  __typename?: 'device_measurement_property_aggregate_fields';
  avg?: Maybe<Device_Measurement_Property_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Measurement_Property_Max_Fields>;
  min?: Maybe<Device_Measurement_Property_Min_Fields>;
  stddev?: Maybe<Device_Measurement_Property_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Measurement_Property_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Measurement_Property_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Measurement_Property_Sum_Fields>;
  var_pop?: Maybe<Device_Measurement_Property_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Measurement_Property_Var_Samp_Fields>;
  variance?: Maybe<Device_Measurement_Property_Variance_Fields>;
};


/** aggregate fields of "device_measurement_property" */
export type Device_Measurement_Property_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Measurement_Property_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Device_Measurement_Property_Avg_Fields = {
  __typename?: 'device_measurement_property_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "device_measurement_property". All fields are combined with a logical 'AND'. */
export type Device_Measurement_Property_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Measurement_Property_Bool_Exp>>;
  _not?: InputMaybe<Device_Measurement_Property_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Measurement_Property_Bool_Exp>>;
  device_measurement_values?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
  device_measurement_values_aggregate?: InputMaybe<Device_Measurement_Value_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  unit?: InputMaybe<Measurement_Property_Unit_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Measurement_Property_Max_Fields = {
  __typename?: 'device_measurement_property_max_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['measurement_property_unit']>;
};

/** aggregate min on columns */
export type Device_Measurement_Property_Min_Fields = {
  __typename?: 'device_measurement_property_min_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['measurement_property_unit']>;
};

/** Ordering options when selecting data from "device_measurement_property". */
export type Device_Measurement_Property_Order_By = {
  device_measurement_values_aggregate?: InputMaybe<Device_Measurement_Value_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
};

/** select columns of table "device_measurement_property" */
export enum Device_Measurement_Property_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Unit = 'unit'
}

/** aggregate stddev on columns */
export type Device_Measurement_Property_Stddev_Fields = {
  __typename?: 'device_measurement_property_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Device_Measurement_Property_Stddev_Pop_Fields = {
  __typename?: 'device_measurement_property_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Device_Measurement_Property_Stddev_Samp_Fields = {
  __typename?: 'device_measurement_property_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "device_measurement_property" */
export type Device_Measurement_Property_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Measurement_Property_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Measurement_Property_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['measurement_property_unit']>;
};

/** aggregate sum on columns */
export type Device_Measurement_Property_Sum_Fields = {
  __typename?: 'device_measurement_property_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Device_Measurement_Property_Var_Pop_Fields = {
  __typename?: 'device_measurement_property_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Device_Measurement_Property_Var_Samp_Fields = {
  __typename?: 'device_measurement_property_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Device_Measurement_Property_Variance_Fields = {
  __typename?: 'device_measurement_property_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "device_measurement_value" */
export type Device_Measurement_Value = {
  __typename?: 'device_measurement_value';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device: Device;
  device_id: Scalars['bigint'];
  /** An object relationship */
  device_measurement_property: Device_Measurement_Property;
  device_measurement_property_id: Scalars['bigint'];
  id: Scalars['bigint'];
  recorded_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['bigint'];
};

/** aggregated selection of "device_measurement_value" */
export type Device_Measurement_Value_Aggregate = {
  __typename?: 'device_measurement_value_aggregate';
  aggregate?: Maybe<Device_Measurement_Value_Aggregate_Fields>;
  nodes: Array<Device_Measurement_Value>;
};

export type Device_Measurement_Value_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Measurement_Value_Aggregate_Bool_Exp_Count>;
};

export type Device_Measurement_Value_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device_measurement_value" */
export type Device_Measurement_Value_Aggregate_Fields = {
  __typename?: 'device_measurement_value_aggregate_fields';
  avg?: Maybe<Device_Measurement_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Measurement_Value_Max_Fields>;
  min?: Maybe<Device_Measurement_Value_Min_Fields>;
  stddev?: Maybe<Device_Measurement_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Measurement_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Measurement_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Measurement_Value_Sum_Fields>;
  var_pop?: Maybe<Device_Measurement_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Measurement_Value_Var_Samp_Fields>;
  variance?: Maybe<Device_Measurement_Value_Variance_Fields>;
};


/** aggregate fields of "device_measurement_value" */
export type Device_Measurement_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_measurement_value" */
export type Device_Measurement_Value_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Measurement_Value_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Measurement_Value_Max_Order_By>;
  min?: InputMaybe<Device_Measurement_Value_Min_Order_By>;
  stddev?: InputMaybe<Device_Measurement_Value_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Measurement_Value_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Measurement_Value_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Measurement_Value_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Measurement_Value_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Measurement_Value_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Measurement_Value_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Measurement_Value_Avg_Fields = {
  __typename?: 'device_measurement_value_avg_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_measurement_property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Avg_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device_measurement_value". All fields are combined with a logical 'AND'. */
export type Device_Measurement_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Measurement_Value_Bool_Exp>>;
  _not?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Measurement_Value_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Device_Bool_Exp>;
  device_id?: InputMaybe<Bigint_Comparison_Exp>;
  device_measurement_property?: InputMaybe<Device_Measurement_Property_Bool_Exp>;
  device_measurement_property_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  recorded_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Measurement_Value_Max_Fields = {
  __typename?: 'device_measurement_value_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  device_measurement_property_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  recorded_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Measurement_Value_Min_Fields = {
  __typename?: 'device_measurement_value_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  device_measurement_property_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  recorded_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device_measurement_value". */
export type Device_Measurement_Value_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Device_Order_By>;
  device_id?: InputMaybe<Order_By>;
  device_measurement_property?: InputMaybe<Device_Measurement_Property_Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "device_measurement_value" */
export enum Device_Measurement_Value_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  DeviceMeasurementPropertyId = 'device_measurement_property_id',
  /** column name */
  Id = 'id',
  /** column name */
  RecordedAt = 'recorded_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Device_Measurement_Value_Stddev_Fields = {
  __typename?: 'device_measurement_value_stddev_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_measurement_property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Stddev_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Measurement_Value_Stddev_Pop_Fields = {
  __typename?: 'device_measurement_value_stddev_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_measurement_property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Stddev_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Measurement_Value_Stddev_Samp_Fields = {
  __typename?: 'device_measurement_value_stddev_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_measurement_property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Stddev_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device_measurement_value" */
export type Device_Measurement_Value_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Measurement_Value_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Measurement_Value_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id?: InputMaybe<Scalars['bigint']>;
  device_measurement_property_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  recorded_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Device_Measurement_Value_Sum_Fields = {
  __typename?: 'device_measurement_value_sum_fields';
  device_id?: Maybe<Scalars['bigint']>;
  device_measurement_property_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Sum_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Device_Measurement_Value_Var_Pop_Fields = {
  __typename?: 'device_measurement_value_var_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_measurement_property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Var_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Measurement_Value_Var_Samp_Fields = {
  __typename?: 'device_measurement_value_var_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_measurement_property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Var_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Measurement_Value_Variance_Fields = {
  __typename?: 'device_measurement_value_variance_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_measurement_property_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device_measurement_value" */
export type Device_Measurement_Value_Variance_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_measurement_property_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Min_Fields = {
  __typename?: 'device_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  device_type_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  location_id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "device" */
export type Device_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "device_operation" */
export type Device_Operation = {
  __typename?: 'device_operation';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device: Device;
  device_id: Scalars['bigint'];
  /** An object relationship */
  device_operation?: Maybe<Device_Operation>;
  /** An array relationship */
  device_operation_images: Array<Device_Operation_Image>;
  /** An aggregate relationship */
  device_operation_images_aggregate: Device_Operation_Image_Aggregate;
  /** An object relationship */
  device_operation_log?: Maybe<Device_Operation_Log>;
  device_operation_log_id?: Maybe<Scalars['bigint']>;
  device_operation_type: Scalars['device_operation_type'];
  /** An array relationship */
  device_operations: Array<Device_Operation>;
  /** An aggregate relationship */
  device_operations_aggregate: Device_Operation_Aggregate;
  end_at?: Maybe<Scalars['timestamp']>;
  error_code?: Maybe<Scalars['String']>;
  error_details?: Maybe<Scalars['String']>;
  id: Scalars['bigint'];
  parent_id?: Maybe<Scalars['bigint']>;
  remote_operation_uid: Scalars['String'];
  start_at: Scalars['timestamp'];
  success?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "device_operation" */
export type Device_OperationDevice_Operation_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Image_Order_By>>;
  where?: InputMaybe<Device_Operation_Image_Bool_Exp>;
};


/** columns and relationships of "device_operation" */
export type Device_OperationDevice_Operation_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Image_Order_By>>;
  where?: InputMaybe<Device_Operation_Image_Bool_Exp>;
};


/** columns and relationships of "device_operation" */
export type Device_OperationDevice_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


/** columns and relationships of "device_operation" */
export type Device_OperationDevice_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};

/** aggregated selection of "device_operation" */
export type Device_Operation_Aggregate = {
  __typename?: 'device_operation_aggregate';
  aggregate?: Maybe<Device_Operation_Aggregate_Fields>;
  nodes: Array<Device_Operation>;
};

export type Device_Operation_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Device_Operation_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Device_Operation_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Device_Operation_Aggregate_Bool_Exp_Count>;
};

export type Device_Operation_Aggregate_Bool_Exp_Bool_And = {
  arguments: Device_Operation_Select_Column_Device_Operation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Operation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Device_Operation_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Device_Operation_Select_Column_Device_Operation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Operation_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Device_Operation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Operation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Operation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device_operation" */
export type Device_Operation_Aggregate_Fields = {
  __typename?: 'device_operation_aggregate_fields';
  avg?: Maybe<Device_Operation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Operation_Max_Fields>;
  min?: Maybe<Device_Operation_Min_Fields>;
  stddev?: Maybe<Device_Operation_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Operation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Operation_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Operation_Sum_Fields>;
  var_pop?: Maybe<Device_Operation_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Operation_Var_Samp_Fields>;
  variance?: Maybe<Device_Operation_Variance_Fields>;
};


/** aggregate fields of "device_operation" */
export type Device_Operation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Operation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_operation" */
export type Device_Operation_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Operation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Operation_Max_Order_By>;
  min?: InputMaybe<Device_Operation_Min_Order_By>;
  stddev?: InputMaybe<Device_Operation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Operation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Operation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Operation_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Operation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Operation_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Operation_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Operation_Avg_Fields = {
  __typename?: 'device_operation_avg_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_operation_log_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device_operation" */
export type Device_Operation_Avg_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device_operation". All fields are combined with a logical 'AND'. */
export type Device_Operation_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Operation_Bool_Exp>>;
  _not?: InputMaybe<Device_Operation_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Operation_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Device_Bool_Exp>;
  device_id?: InputMaybe<Bigint_Comparison_Exp>;
  device_operation?: InputMaybe<Device_Operation_Bool_Exp>;
  device_operation_images?: InputMaybe<Device_Operation_Image_Bool_Exp>;
  device_operation_images_aggregate?: InputMaybe<Device_Operation_Image_Aggregate_Bool_Exp>;
  device_operation_log?: InputMaybe<Device_Operation_Log_Bool_Exp>;
  device_operation_log_id?: InputMaybe<Bigint_Comparison_Exp>;
  device_operation_type?: InputMaybe<Device_Operation_Type_Comparison_Exp>;
  device_operations?: InputMaybe<Device_Operation_Bool_Exp>;
  device_operations_aggregate?: InputMaybe<Device_Operation_Aggregate_Bool_Exp>;
  end_at?: InputMaybe<Timestamp_Comparison_Exp>;
  error_code?: InputMaybe<String_Comparison_Exp>;
  error_details?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  parent_id?: InputMaybe<Bigint_Comparison_Exp>;
  remote_operation_uid?: InputMaybe<String_Comparison_Exp>;
  start_at?: InputMaybe<Timestamp_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "device_operation_image" */
export type Device_Operation_Image = {
  __typename?: 'device_operation_image';
  blob_uid: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device_operation: Device_Operation;
  device_operation_id: Scalars['bigint'];
  file_name: Scalars['String'];
  id: Scalars['bigint'];
  meta_data?: Maybe<Scalars['jsonb']>;
  recorded_at: Scalars['timestamptz'];
  size: Scalars['bigint'];
  type: Scalars['device_operation_image_type'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "device_operation_image" */
export type Device_Operation_ImageMeta_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "device_operation_image" */
export type Device_Operation_Image_Aggregate = {
  __typename?: 'device_operation_image_aggregate';
  aggregate?: Maybe<Device_Operation_Image_Aggregate_Fields>;
  nodes: Array<Device_Operation_Image>;
};

export type Device_Operation_Image_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Operation_Image_Aggregate_Bool_Exp_Count>;
};

export type Device_Operation_Image_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Operation_Image_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device_operation_image" */
export type Device_Operation_Image_Aggregate_Fields = {
  __typename?: 'device_operation_image_aggregate_fields';
  avg?: Maybe<Device_Operation_Image_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Operation_Image_Max_Fields>;
  min?: Maybe<Device_Operation_Image_Min_Fields>;
  stddev?: Maybe<Device_Operation_Image_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Operation_Image_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Operation_Image_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Operation_Image_Sum_Fields>;
  var_pop?: Maybe<Device_Operation_Image_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Operation_Image_Var_Samp_Fields>;
  variance?: Maybe<Device_Operation_Image_Variance_Fields>;
};


/** aggregate fields of "device_operation_image" */
export type Device_Operation_Image_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_operation_image" */
export type Device_Operation_Image_Aggregate_Order_By = {
  avg?: InputMaybe<Device_Operation_Image_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Operation_Image_Max_Order_By>;
  min?: InputMaybe<Device_Operation_Image_Min_Order_By>;
  stddev?: InputMaybe<Device_Operation_Image_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_Operation_Image_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_Operation_Image_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_Operation_Image_Sum_Order_By>;
  var_pop?: InputMaybe<Device_Operation_Image_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_Operation_Image_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_Operation_Image_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_Operation_Image_Avg_Fields = {
  __typename?: 'device_operation_image_avg_fields';
  device_operation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device_operation_image" */
export type Device_Operation_Image_Avg_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device_operation_image". All fields are combined with a logical 'AND'. */
export type Device_Operation_Image_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Operation_Image_Bool_Exp>>;
  _not?: InputMaybe<Device_Operation_Image_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Operation_Image_Bool_Exp>>;
  blob_uid?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device_operation?: InputMaybe<Device_Operation_Bool_Exp>;
  device_operation_id?: InputMaybe<Bigint_Comparison_Exp>;
  file_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  recorded_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<Device_Operation_Image_Type_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Operation_Image_Max_Fields = {
  __typename?: 'device_operation_image_max_fields';
  blob_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_operation_id?: Maybe<Scalars['bigint']>;
  file_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  recorded_at?: Maybe<Scalars['timestamptz']>;
  size?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['device_operation_image_type']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "device_operation_image" */
export type Device_Operation_Image_Max_Order_By = {
  blob_uid?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_operation_id?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Operation_Image_Min_Fields = {
  __typename?: 'device_operation_image_min_fields';
  blob_uid?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  device_operation_id?: Maybe<Scalars['bigint']>;
  file_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  recorded_at?: Maybe<Scalars['timestamptz']>;
  size?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['device_operation_image_type']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "device_operation_image" */
export type Device_Operation_Image_Min_Order_By = {
  blob_uid?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_operation_id?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device_operation_image". */
export type Device_Operation_Image_Order_By = {
  blob_uid?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_operation?: InputMaybe<Device_Operation_Order_By>;
  device_operation_id?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meta_data?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "device_operation_image" */
export enum Device_Operation_Image_Select_Column {
  /** column name */
  BlobUid = 'blob_uid',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceOperationId = 'device_operation_id',
  /** column name */
  FileName = 'file_name',
  /** column name */
  Id = 'id',
  /** column name */
  MetaData = 'meta_data',
  /** column name */
  RecordedAt = 'recorded_at',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Device_Operation_Image_Stddev_Fields = {
  __typename?: 'device_operation_image_stddev_fields';
  device_operation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device_operation_image" */
export type Device_Operation_Image_Stddev_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Operation_Image_Stddev_Pop_Fields = {
  __typename?: 'device_operation_image_stddev_pop_fields';
  device_operation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device_operation_image" */
export type Device_Operation_Image_Stddev_Pop_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Operation_Image_Stddev_Samp_Fields = {
  __typename?: 'device_operation_image_stddev_samp_fields';
  device_operation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device_operation_image" */
export type Device_Operation_Image_Stddev_Samp_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device_operation_image" */
export type Device_Operation_Image_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Operation_Image_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Operation_Image_Stream_Cursor_Value_Input = {
  blob_uid?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_operation_id?: InputMaybe<Scalars['bigint']>;
  file_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  meta_data?: InputMaybe<Scalars['jsonb']>;
  recorded_at?: InputMaybe<Scalars['timestamptz']>;
  size?: InputMaybe<Scalars['bigint']>;
  type?: InputMaybe<Scalars['device_operation_image_type']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Device_Operation_Image_Sum_Fields = {
  __typename?: 'device_operation_image_sum_fields';
  device_operation_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  size?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device_operation_image" */
export type Device_Operation_Image_Sum_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "device_operation_image_type". All fields are combined with logical 'AND'. */
export type Device_Operation_Image_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['device_operation_image_type']>;
  _gt?: InputMaybe<Scalars['device_operation_image_type']>;
  _gte?: InputMaybe<Scalars['device_operation_image_type']>;
  _in?: InputMaybe<Array<Scalars['device_operation_image_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['device_operation_image_type']>;
  _lte?: InputMaybe<Scalars['device_operation_image_type']>;
  _neq?: InputMaybe<Scalars['device_operation_image_type']>;
  _nin?: InputMaybe<Array<Scalars['device_operation_image_type']>>;
};

/** aggregate var_pop on columns */
export type Device_Operation_Image_Var_Pop_Fields = {
  __typename?: 'device_operation_image_var_pop_fields';
  device_operation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device_operation_image" */
export type Device_Operation_Image_Var_Pop_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Operation_Image_Var_Samp_Fields = {
  __typename?: 'device_operation_image_var_samp_fields';
  device_operation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device_operation_image" */
export type Device_Operation_Image_Var_Samp_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Operation_Image_Variance_Fields = {
  __typename?: 'device_operation_image_variance_fields';
  device_operation_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device_operation_image" */
export type Device_Operation_Image_Variance_Order_By = {
  device_operation_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "device_operation_log" */
export type Device_Operation_Log = {
  __typename?: 'device_operation_log';
  blob_uid: Scalars['String'];
  /** An array relationship */
  device_operations: Array<Device_Operation>;
  /** An aggregate relationship */
  device_operations_aggregate: Device_Operation_Aggregate;
  id: Scalars['bigint'];
  size: Scalars['bigint'];
};


/** columns and relationships of "device_operation_log" */
export type Device_Operation_LogDevice_OperationsArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


/** columns and relationships of "device_operation_log" */
export type Device_Operation_LogDevice_Operations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};

/** aggregated selection of "device_operation_log" */
export type Device_Operation_Log_Aggregate = {
  __typename?: 'device_operation_log_aggregate';
  aggregate?: Maybe<Device_Operation_Log_Aggregate_Fields>;
  nodes: Array<Device_Operation_Log>;
};

/** aggregate fields of "device_operation_log" */
export type Device_Operation_Log_Aggregate_Fields = {
  __typename?: 'device_operation_log_aggregate_fields';
  avg?: Maybe<Device_Operation_Log_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Operation_Log_Max_Fields>;
  min?: Maybe<Device_Operation_Log_Min_Fields>;
  stddev?: Maybe<Device_Operation_Log_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Operation_Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Operation_Log_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Operation_Log_Sum_Fields>;
  var_pop?: Maybe<Device_Operation_Log_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Operation_Log_Var_Samp_Fields>;
  variance?: Maybe<Device_Operation_Log_Variance_Fields>;
};


/** aggregate fields of "device_operation_log" */
export type Device_Operation_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Operation_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Device_Operation_Log_Avg_Fields = {
  __typename?: 'device_operation_log_avg_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "device_operation_log". All fields are combined with a logical 'AND'. */
export type Device_Operation_Log_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Operation_Log_Bool_Exp>>;
  _not?: InputMaybe<Device_Operation_Log_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Operation_Log_Bool_Exp>>;
  blob_uid?: InputMaybe<String_Comparison_Exp>;
  device_operations?: InputMaybe<Device_Operation_Bool_Exp>;
  device_operations_aggregate?: InputMaybe<Device_Operation_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Operation_Log_Max_Fields = {
  __typename?: 'device_operation_log_max_fields';
  blob_uid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  size?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Device_Operation_Log_Min_Fields = {
  __typename?: 'device_operation_log_min_fields';
  blob_uid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  size?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "device_operation_log". */
export type Device_Operation_Log_Order_By = {
  blob_uid?: InputMaybe<Order_By>;
  device_operations_aggregate?: InputMaybe<Device_Operation_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** select columns of table "device_operation_log" */
export enum Device_Operation_Log_Select_Column {
  /** column name */
  BlobUid = 'blob_uid',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size'
}

/** aggregate stddev on columns */
export type Device_Operation_Log_Stddev_Fields = {
  __typename?: 'device_operation_log_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Device_Operation_Log_Stddev_Pop_Fields = {
  __typename?: 'device_operation_log_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Device_Operation_Log_Stddev_Samp_Fields = {
  __typename?: 'device_operation_log_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "device_operation_log" */
export type Device_Operation_Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Operation_Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Operation_Log_Stream_Cursor_Value_Input = {
  blob_uid?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  size?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Device_Operation_Log_Sum_Fields = {
  __typename?: 'device_operation_log_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  size?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Device_Operation_Log_Var_Pop_Fields = {
  __typename?: 'device_operation_log_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Device_Operation_Log_Var_Samp_Fields = {
  __typename?: 'device_operation_log_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Device_Operation_Log_Variance_Fields = {
  __typename?: 'device_operation_log_variance_fields';
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Device_Operation_Max_Fields = {
  __typename?: 'device_operation_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  device_operation_log_id?: Maybe<Scalars['bigint']>;
  device_operation_type?: Maybe<Scalars['device_operation_type']>;
  end_at?: Maybe<Scalars['timestamp']>;
  error_code?: Maybe<Scalars['String']>;
  error_details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  parent_id?: Maybe<Scalars['bigint']>;
  remote_operation_uid?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamp']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "device_operation" */
export type Device_Operation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  device_operation_type?: InputMaybe<Order_By>;
  end_at?: InputMaybe<Order_By>;
  error_code?: InputMaybe<Order_By>;
  error_details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  remote_operation_uid?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Operation_Min_Fields = {
  __typename?: 'device_operation_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  device_operation_log_id?: Maybe<Scalars['bigint']>;
  device_operation_type?: Maybe<Scalars['device_operation_type']>;
  end_at?: Maybe<Scalars['timestamp']>;
  error_code?: Maybe<Scalars['String']>;
  error_details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  parent_id?: Maybe<Scalars['bigint']>;
  remote_operation_uid?: Maybe<Scalars['String']>;
  start_at?: Maybe<Scalars['timestamp']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "device_operation" */
export type Device_Operation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  device_operation_type?: InputMaybe<Order_By>;
  end_at?: InputMaybe<Order_By>;
  error_code?: InputMaybe<Order_By>;
  error_details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  remote_operation_uid?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device_operation". */
export type Device_Operation_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Device_Order_By>;
  device_id?: InputMaybe<Order_By>;
  device_operation?: InputMaybe<Device_Operation_Order_By>;
  device_operation_images_aggregate?: InputMaybe<Device_Operation_Image_Aggregate_Order_By>;
  device_operation_log?: InputMaybe<Device_Operation_Log_Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  device_operation_type?: InputMaybe<Order_By>;
  device_operations_aggregate?: InputMaybe<Device_Operation_Aggregate_Order_By>;
  end_at?: InputMaybe<Order_By>;
  error_code?: InputMaybe<Order_By>;
  error_details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  remote_operation_uid?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "device_operation" */
export enum Device_Operation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  DeviceOperationLogId = 'device_operation_log_id',
  /** column name */
  DeviceOperationType = 'device_operation_type',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  ErrorCode = 'error_code',
  /** column name */
  ErrorDetails = 'error_details',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  RemoteOperationUid = 'remote_operation_uid',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  Success = 'success',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "device_operation_aggregate_bool_exp_bool_and_arguments_columns" columns of table "device_operation" */
export enum Device_Operation_Select_Column_Device_Operation_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** select "device_operation_aggregate_bool_exp_bool_or_arguments_columns" columns of table "device_operation" */
export enum Device_Operation_Select_Column_Device_Operation_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** aggregate stddev on columns */
export type Device_Operation_Stddev_Fields = {
  __typename?: 'device_operation_stddev_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_operation_log_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device_operation" */
export type Device_Operation_Stddev_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Operation_Stddev_Pop_Fields = {
  __typename?: 'device_operation_stddev_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_operation_log_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device_operation" */
export type Device_Operation_Stddev_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Operation_Stddev_Samp_Fields = {
  __typename?: 'device_operation_stddev_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_operation_log_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device_operation" */
export type Device_Operation_Stddev_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device_operation" */
export type Device_Operation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Operation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Operation_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id?: InputMaybe<Scalars['bigint']>;
  device_operation_log_id?: InputMaybe<Scalars['bigint']>;
  device_operation_type?: InputMaybe<Scalars['device_operation_type']>;
  end_at?: InputMaybe<Scalars['timestamp']>;
  error_code?: InputMaybe<Scalars['String']>;
  error_details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  parent_id?: InputMaybe<Scalars['bigint']>;
  remote_operation_uid?: InputMaybe<Scalars['String']>;
  start_at?: InputMaybe<Scalars['timestamp']>;
  success?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Device_Operation_Sum_Fields = {
  __typename?: 'device_operation_sum_fields';
  device_id?: Maybe<Scalars['bigint']>;
  device_operation_log_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  parent_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device_operation" */
export type Device_Operation_Sum_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "device_operation_type". All fields are combined with logical 'AND'. */
export type Device_Operation_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['device_operation_type']>;
  _gt?: InputMaybe<Scalars['device_operation_type']>;
  _gte?: InputMaybe<Scalars['device_operation_type']>;
  _in?: InputMaybe<Array<Scalars['device_operation_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['device_operation_type']>;
  _lte?: InputMaybe<Scalars['device_operation_type']>;
  _neq?: InputMaybe<Scalars['device_operation_type']>;
  _nin?: InputMaybe<Array<Scalars['device_operation_type']>>;
};

/** aggregate var_pop on columns */
export type Device_Operation_Var_Pop_Fields = {
  __typename?: 'device_operation_var_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_operation_log_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device_operation" */
export type Device_Operation_Var_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Operation_Var_Samp_Fields = {
  __typename?: 'device_operation_var_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_operation_log_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device_operation" */
export type Device_Operation_Var_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Operation_Variance_Fields = {
  __typename?: 'device_operation_variance_fields';
  device_id?: Maybe<Scalars['Float']>;
  device_operation_log_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device_operation" */
export type Device_Operation_Variance_Order_By = {
  device_id?: InputMaybe<Order_By>;
  device_operation_log_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device". */
export type Device_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  device_configurations_aggregate?: InputMaybe<Device_Configuration_Aggregate_Order_By>;
  device_group_devices_aggregate?: InputMaybe<Device_Group_Device_Aggregate_Order_By>;
  device_measurement_values_aggregate?: InputMaybe<Device_Measurement_Value_Aggregate_Order_By>;
  device_operations_aggregate?: InputMaybe<Device_Operation_Aggregate_Order_By>;
  device_states_aggregate?: InputMaybe<Device_State_Aggregate_Order_By>;
  device_type?: InputMaybe<Device_Type_Order_By>;
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Location_Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  site?: InputMaybe<Site_Order_By>;
  site_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "device" */
export enum Device_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DeviceTypeId = 'device_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  SiteId = 'site_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "device_state" */
export type Device_State = {
  __typename?: 'device_state';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device: Device;
  device_id: Scalars['bigint'];
  id: Scalars['bigint'];
  recorded_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** aggregated selection of "device_state" */
export type Device_State_Aggregate = {
  __typename?: 'device_state_aggregate';
  aggregate?: Maybe<Device_State_Aggregate_Fields>;
  nodes: Array<Device_State>;
};

export type Device_State_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_State_Aggregate_Bool_Exp_Count>;
};

export type Device_State_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_State_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device_state" */
export type Device_State_Aggregate_Fields = {
  __typename?: 'device_state_aggregate_fields';
  avg?: Maybe<Device_State_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_State_Max_Fields>;
  min?: Maybe<Device_State_Min_Fields>;
  stddev?: Maybe<Device_State_Stddev_Fields>;
  stddev_pop?: Maybe<Device_State_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_State_Stddev_Samp_Fields>;
  sum?: Maybe<Device_State_Sum_Fields>;
  var_pop?: Maybe<Device_State_Var_Pop_Fields>;
  var_samp?: Maybe<Device_State_Var_Samp_Fields>;
  variance?: Maybe<Device_State_Variance_Fields>;
};


/** aggregate fields of "device_state" */
export type Device_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_state" */
export type Device_State_Aggregate_Order_By = {
  avg?: InputMaybe<Device_State_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_State_Max_Order_By>;
  min?: InputMaybe<Device_State_Min_Order_By>;
  stddev?: InputMaybe<Device_State_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Device_State_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Device_State_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Device_State_Sum_Order_By>;
  var_pop?: InputMaybe<Device_State_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Device_State_Var_Samp_Order_By>;
  variance?: InputMaybe<Device_State_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Device_State_Avg_Fields = {
  __typename?: 'device_state_avg_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "device_state" */
export type Device_State_Avg_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "device_state". All fields are combined with a logical 'AND'. */
export type Device_State_Bool_Exp = {
  _and?: InputMaybe<Array<Device_State_Bool_Exp>>;
  _not?: InputMaybe<Device_State_Bool_Exp>;
  _or?: InputMaybe<Array<Device_State_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Device_Bool_Exp>;
  device_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  recorded_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_State_Max_Fields = {
  __typename?: 'device_state_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  recorded_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "device_state" */
export type Device_State_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_State_Min_Fields = {
  __typename?: 'device_state_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  recorded_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "device_state" */
export type Device_State_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "device_state". */
export type Device_State_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Device_Order_By>;
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recorded_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "device_state" */
export enum Device_State_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Id = 'id',
  /** column name */
  RecordedAt = 'recorded_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Device_State_Stddev_Fields = {
  __typename?: 'device_state_stddev_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device_state" */
export type Device_State_Stddev_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_State_Stddev_Pop_Fields = {
  __typename?: 'device_state_stddev_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device_state" */
export type Device_State_Stddev_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_State_Stddev_Samp_Fields = {
  __typename?: 'device_state_stddev_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device_state" */
export type Device_State_Stddev_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device_state" */
export type Device_State_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_State_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_State_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  recorded_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Device_State_Sum_Fields = {
  __typename?: 'device_state_sum_fields';
  device_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device_state" */
export type Device_State_Sum_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Device_State_Var_Pop_Fields = {
  __typename?: 'device_state_var_pop_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device_state" */
export type Device_State_Var_Pop_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_State_Var_Samp_Fields = {
  __typename?: 'device_state_var_samp_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device_state" */
export type Device_State_Var_Samp_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_State_Variance_Fields = {
  __typename?: 'device_state_variance_fields';
  device_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device_state" */
export type Device_State_Variance_Order_By = {
  device_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev on columns */
export type Device_Stddev_Fields = {
  __typename?: 'device_stddev_fields';
  device_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  site_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "device" */
export type Device_Stddev_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Device_Stddev_Pop_Fields = {
  __typename?: 'device_stddev_pop_fields';
  device_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  site_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "device" */
export type Device_Stddev_Pop_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Device_Stddev_Samp_Fields = {
  __typename?: 'device_stddev_samp_fields';
  device_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  site_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "device" */
export type Device_Stddev_Samp_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "device" */
export type Device_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  device_type_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  location_id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  remarks?: InputMaybe<Scalars['String']>;
  serial_number?: InputMaybe<Scalars['String']>;
  site_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Device_Sum_Fields = {
  __typename?: 'device_sum_fields';
  device_type_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  location_id?: Maybe<Scalars['bigint']>;
  site_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "device" */
export type Device_Sum_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "device_type" */
export type Device_Type = {
  __typename?: 'device_type';
  created_at: Scalars['timestamp'];
  /** An array relationship */
  devices: Array<Device>;
  /** An aggregate relationship */
  devices_aggregate: Device_Aggregate;
  id: Scalars['bigint'];
  model_number: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "device_type" */
export type Device_TypeDevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** columns and relationships of "device_type" */
export type Device_TypeDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};

/** aggregated selection of "device_type" */
export type Device_Type_Aggregate = {
  __typename?: 'device_type_aggregate';
  aggregate?: Maybe<Device_Type_Aggregate_Fields>;
  nodes: Array<Device_Type>;
};

/** aggregate fields of "device_type" */
export type Device_Type_Aggregate_Fields = {
  __typename?: 'device_type_aggregate_fields';
  avg?: Maybe<Device_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Device_Type_Max_Fields>;
  min?: Maybe<Device_Type_Min_Fields>;
  stddev?: Maybe<Device_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Device_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Device_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Device_Type_Sum_Fields>;
  var_pop?: Maybe<Device_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Device_Type_Var_Samp_Fields>;
  variance?: Maybe<Device_Type_Variance_Fields>;
};


/** aggregate fields of "device_type" */
export type Device_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Device_Type_Avg_Fields = {
  __typename?: 'device_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "device_type". All fields are combined with a logical 'AND'. */
export type Device_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Type_Bool_Exp>>;
  _not?: InputMaybe<Device_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Type_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  devices?: InputMaybe<Device_Bool_Exp>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  model_number?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Device_Type_Max_Fields = {
  __typename?: 'device_type_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  model_number?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Device_Type_Min_Fields = {
  __typename?: 'device_type_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['bigint']>;
  model_number?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "device_type". */
export type Device_Type_Order_By = {
  created_at?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  model_number?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "device_type" */
export enum Device_Type_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ModelNumber = 'model_number',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Device_Type_Stddev_Fields = {
  __typename?: 'device_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Device_Type_Stddev_Pop_Fields = {
  __typename?: 'device_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Device_Type_Stddev_Samp_Fields = {
  __typename?: 'device_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "device_type" */
export type Device_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Type_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['bigint']>;
  model_number?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Device_Type_Sum_Fields = {
  __typename?: 'device_type_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Device_Type_Var_Pop_Fields = {
  __typename?: 'device_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Device_Type_Var_Samp_Fields = {
  __typename?: 'device_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Device_Type_Variance_Fields = {
  __typename?: 'device_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_pop on columns */
export type Device_Var_Pop_Fields = {
  __typename?: 'device_var_pop_fields';
  device_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  site_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "device" */
export type Device_Var_Pop_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Device_Var_Samp_Fields = {
  __typename?: 'device_var_samp_fields';
  device_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  site_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "device" */
export type Device_Var_Samp_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Device_Variance_Fields = {
  __typename?: 'device_variance_fields';
  device_type_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  site_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "device" */
export type Device_Variance_Order_By = {
  device_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  site_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  devices: Array<Device>;
  /** An aggregate relationship */
  devices_aggregate: Device_Aggregate;
  id: Scalars['bigint'];
  latitude: Scalars['float8'];
  longitude: Scalars['float8'];
  /** An array relationship */
  sites: Array<Site>;
  /** An aggregate relationship */
  sites_aggregate: Site_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "location" */
export type LocationDevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationSitesArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationSites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate';
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields';
  avg?: Maybe<Location_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
  stddev?: Maybe<Location_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Sum_Fields>;
  var_pop?: Maybe<Location_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Var_Samp_Fields>;
  variance?: Maybe<Location_Variance_Fields>;
};


/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: 'location_avg_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>;
  _not?: InputMaybe<Location_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  devices?: InputMaybe<Device_Bool_Exp>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  latitude?: InputMaybe<Float8_Comparison_Exp>;
  longitude?: InputMaybe<Float8_Comparison_Exp>;
  sites?: InputMaybe<Site_Bool_Exp>;
  sites_aggregate?: InputMaybe<Site_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  created_at?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  sites_aggregate?: InputMaybe<Site_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: 'location_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: 'location_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: 'location_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "location" */
export type Location_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Location_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Location_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  latitude?: InputMaybe<Scalars['float8']>;
  longitude?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: 'location_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
};

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: 'location_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: 'location_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: 'location_variance_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "measurement_property_unit". All fields are combined with logical 'AND'. */
export type Measurement_Property_Unit_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['measurement_property_unit']>;
  _gt?: InputMaybe<Scalars['measurement_property_unit']>;
  _gte?: InputMaybe<Scalars['measurement_property_unit']>;
  _in?: InputMaybe<Array<Scalars['measurement_property_unit']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['measurement_property_unit']>;
  _lte?: InputMaybe<Scalars['measurement_property_unit']>;
  _neq?: InputMaybe<Scalars['measurement_property_unit']>;
  _nin?: InputMaybe<Array<Scalars['measurement_property_unit']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "connnector_type" */
  connnector_type: Array<Connnector_Type>;
  /** fetch aggregated fields from the table: "connnector_type" */
  connnector_type_aggregate: Connnector_Type_Aggregate;
  /** fetch data from the table: "connnector_type" using primary key columns */
  connnector_type_by_pk?: Maybe<Connnector_Type>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "customer_user" */
  customer_user: Array<Customer_User>;
  /** fetch aggregated fields from the table: "customer_user" */
  customer_user_aggregate: Customer_User_Aggregate;
  /** fetch data from the table: "customer_user" using primary key columns */
  customer_user_by_pk?: Maybe<Customer_User>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "device_configuration" */
  device_configuration: Array<Device_Configuration>;
  /** fetch aggregated fields from the table: "device_configuration" */
  device_configuration_aggregate: Device_Configuration_Aggregate;
  /** fetch data from the table: "device_configuration" using primary key columns */
  device_configuration_by_pk?: Maybe<Device_Configuration>;
  /** fetch data from the table: "device_group" */
  device_group: Array<Device_Group>;
  /** fetch aggregated fields from the table: "device_group" */
  device_group_aggregate: Device_Group_Aggregate;
  /** fetch data from the table: "device_group" using primary key columns */
  device_group_by_pk?: Maybe<Device_Group>;
  /** fetch data from the table: "device_group_device" */
  device_group_device: Array<Device_Group_Device>;
  /** fetch aggregated fields from the table: "device_group_device" */
  device_group_device_aggregate: Device_Group_Device_Aggregate;
  /** fetch data from the table: "device_group_device" using primary key columns */
  device_group_device_by_pk?: Maybe<Device_Group_Device>;
  /** fetch data from the table: "device_measurement_property" */
  device_measurement_property: Array<Device_Measurement_Property>;
  /** fetch aggregated fields from the table: "device_measurement_property" */
  device_measurement_property_aggregate: Device_Measurement_Property_Aggregate;
  /** fetch data from the table: "device_measurement_property" using primary key columns */
  device_measurement_property_by_pk?: Maybe<Device_Measurement_Property>;
  /** fetch data from the table: "device_measurement_value" */
  device_measurement_value: Array<Device_Measurement_Value>;
  /** fetch aggregated fields from the table: "device_measurement_value" */
  device_measurement_value_aggregate: Device_Measurement_Value_Aggregate;
  /** fetch data from the table: "device_measurement_value" using primary key columns */
  device_measurement_value_by_pk?: Maybe<Device_Measurement_Value>;
  /** fetch data from the table: "device_operation" */
  device_operation: Array<Device_Operation>;
  /** fetch aggregated fields from the table: "device_operation" */
  device_operation_aggregate: Device_Operation_Aggregate;
  /** fetch data from the table: "device_operation" using primary key columns */
  device_operation_by_pk?: Maybe<Device_Operation>;
  /** fetch data from the table: "device_operation_image" */
  device_operation_image: Array<Device_Operation_Image>;
  /** fetch aggregated fields from the table: "device_operation_image" */
  device_operation_image_aggregate: Device_Operation_Image_Aggregate;
  /** fetch data from the table: "device_operation_image" using primary key columns */
  device_operation_image_by_pk?: Maybe<Device_Operation_Image>;
  /** fetch data from the table: "device_operation_log" */
  device_operation_log: Array<Device_Operation_Log>;
  /** fetch aggregated fields from the table: "device_operation_log" */
  device_operation_log_aggregate: Device_Operation_Log_Aggregate;
  /** fetch data from the table: "device_operation_log" using primary key columns */
  device_operation_log_by_pk?: Maybe<Device_Operation_Log>;
  /** fetch data from the table: "device_state" */
  device_state: Array<Device_State>;
  /** fetch aggregated fields from the table: "device_state" */
  device_state_aggregate: Device_State_Aggregate;
  /** fetch data from the table: "device_state" using primary key columns */
  device_state_by_pk?: Maybe<Device_State>;
  /** fetch data from the table: "device_type" */
  device_type: Array<Device_Type>;
  /** fetch aggregated fields from the table: "device_type" */
  device_type_aggregate: Device_Type_Aggregate;
  /** fetch data from the table: "device_type" using primary key columns */
  device_type_by_pk?: Maybe<Device_Type>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootConnnector_TypeArgs = {
  distinct_on?: InputMaybe<Array<Connnector_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Connnector_Type_Order_By>>;
  where?: InputMaybe<Connnector_Type_Bool_Exp>;
};


export type Query_RootConnnector_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Connnector_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Connnector_Type_Order_By>>;
  where?: InputMaybe<Connnector_Type_Bool_Exp>;
};


export type Query_RootConnnector_Type_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCustomer_UserArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


export type Query_RootCustomer_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


export type Query_RootCustomer_User_By_PkArgs = {
  customer_id: Scalars['bigint'];
  user_id: Scalars['bigint'];
};


export type Query_RootDeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Query_RootDevice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Query_RootDevice_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_ConfigurationArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


export type Query_RootDevice_Configuration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


export type Query_RootDevice_Configuration_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_GroupArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Order_By>>;
  where?: InputMaybe<Device_Group_Bool_Exp>;
};


export type Query_RootDevice_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Order_By>>;
  where?: InputMaybe<Device_Group_Bool_Exp>;
};


export type Query_RootDevice_Group_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_Group_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


export type Query_RootDevice_Group_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


export type Query_RootDevice_Group_Device_By_PkArgs = {
  device_group_id: Scalars['bigint'];
  device_id: Scalars['bigint'];
};


export type Query_RootDevice_Measurement_PropertyArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Property_Order_By>>;
  where?: InputMaybe<Device_Measurement_Property_Bool_Exp>;
};


export type Query_RootDevice_Measurement_Property_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Property_Order_By>>;
  where?: InputMaybe<Device_Measurement_Property_Bool_Exp>;
};


export type Query_RootDevice_Measurement_Property_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_Measurement_ValueArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


export type Query_RootDevice_Measurement_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


export type Query_RootDevice_Measurement_Value_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_OperationArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


export type Query_RootDevice_Operation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


export type Query_RootDevice_Operation_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_Operation_ImageArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Image_Order_By>>;
  where?: InputMaybe<Device_Operation_Image_Bool_Exp>;
};


export type Query_RootDevice_Operation_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Image_Order_By>>;
  where?: InputMaybe<Device_Operation_Image_Bool_Exp>;
};


export type Query_RootDevice_Operation_Image_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_Operation_LogArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Log_Order_By>>;
  where?: InputMaybe<Device_Operation_Log_Bool_Exp>;
};


export type Query_RootDevice_Operation_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Log_Order_By>>;
  where?: InputMaybe<Device_Operation_Log_Bool_Exp>;
};


export type Query_RootDevice_Operation_Log_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_StateArgs = {
  distinct_on?: InputMaybe<Array<Device_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_State_Order_By>>;
  where?: InputMaybe<Device_State_Bool_Exp>;
};


export type Query_RootDevice_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_State_Order_By>>;
  where?: InputMaybe<Device_State_Bool_Exp>;
};


export type Query_RootDevice_State_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDevice_TypeArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};


export type Query_RootDevice_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};


export type Query_RootDevice_Type_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootSiteArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Query_RootSite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Query_RootSite_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "site" */
export type Site = {
  __typename?: 'site';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  customer: Customer;
  customer_id: Scalars['bigint'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  devices: Array<Device>;
  /** An aggregate relationship */
  devices_aggregate: Device_Aggregate;
  id: Scalars['bigint'];
  /** An object relationship */
  location: Location;
  location_id: Scalars['bigint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "site" */
export type SiteDevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** columns and relationships of "site" */
export type SiteDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};

/** aggregated selection of "site" */
export type Site_Aggregate = {
  __typename?: 'site_aggregate';
  aggregate?: Maybe<Site_Aggregate_Fields>;
  nodes: Array<Site>;
};

export type Site_Aggregate_Bool_Exp = {
  count?: InputMaybe<Site_Aggregate_Bool_Exp_Count>;
};

export type Site_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Site_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Site_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "site" */
export type Site_Aggregate_Fields = {
  __typename?: 'site_aggregate_fields';
  avg?: Maybe<Site_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Site_Max_Fields>;
  min?: Maybe<Site_Min_Fields>;
  stddev?: Maybe<Site_Stddev_Fields>;
  stddev_pop?: Maybe<Site_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Site_Stddev_Samp_Fields>;
  sum?: Maybe<Site_Sum_Fields>;
  var_pop?: Maybe<Site_Var_Pop_Fields>;
  var_samp?: Maybe<Site_Var_Samp_Fields>;
  variance?: Maybe<Site_Variance_Fields>;
};


/** aggregate fields of "site" */
export type Site_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Site_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "site" */
export type Site_Aggregate_Order_By = {
  avg?: InputMaybe<Site_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Site_Max_Order_By>;
  min?: InputMaybe<Site_Min_Order_By>;
  stddev?: InputMaybe<Site_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Site_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Site_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Site_Sum_Order_By>;
  var_pop?: InputMaybe<Site_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Site_Var_Samp_Order_By>;
  variance?: InputMaybe<Site_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Site_Avg_Fields = {
  __typename?: 'site_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "site" */
export type Site_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "site". All fields are combined with a logical 'AND'. */
export type Site_Bool_Exp = {
  _and?: InputMaybe<Array<Site_Bool_Exp>>;
  _not?: InputMaybe<Site_Bool_Exp>;
  _or?: InputMaybe<Array<Site_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Bigint_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  devices?: InputMaybe<Device_Bool_Exp>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  location?: InputMaybe<Location_Bool_Exp>;
  location_id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Site_Max_Fields = {
  __typename?: 'site_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  location_id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "site" */
export type Site_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Site_Min_Fields = {
  __typename?: 'site_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  location_id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "site" */
export type Site_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "site". */
export type Site_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Location_Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "site" */
export enum Site_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Site_Stddev_Fields = {
  __typename?: 'site_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "site" */
export type Site_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Site_Stddev_Pop_Fields = {
  __typename?: 'site_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "site" */
export type Site_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Site_Stddev_Samp_Fields = {
  __typename?: 'site_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "site" */
export type Site_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "site" */
export type Site_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Site_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Site_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['bigint']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  location_id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Site_Sum_Fields = {
  __typename?: 'site_sum_fields';
  customer_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  location_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "site" */
export type Site_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Site_Var_Pop_Fields = {
  __typename?: 'site_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "site" */
export type Site_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Site_Var_Samp_Fields = {
  __typename?: 'site_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "site" */
export type Site_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Site_Variance_Fields = {
  __typename?: 'site_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "site" */
export type Site_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "connnector_type" */
  connnector_type: Array<Connnector_Type>;
  /** fetch aggregated fields from the table: "connnector_type" */
  connnector_type_aggregate: Connnector_Type_Aggregate;
  /** fetch data from the table: "connnector_type" using primary key columns */
  connnector_type_by_pk?: Maybe<Connnector_Type>;
  /** fetch data from the table in a streaming manner: "connnector_type" */
  connnector_type_stream: Array<Connnector_Type>;
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>;
  /** fetch data from the table: "customer_user" */
  customer_user: Array<Customer_User>;
  /** fetch aggregated fields from the table: "customer_user" */
  customer_user_aggregate: Customer_User_Aggregate;
  /** fetch data from the table: "customer_user" using primary key columns */
  customer_user_by_pk?: Maybe<Customer_User>;
  /** fetch data from the table in a streaming manner: "customer_user" */
  customer_user_stream: Array<Customer_User>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "device_configuration" */
  device_configuration: Array<Device_Configuration>;
  /** fetch aggregated fields from the table: "device_configuration" */
  device_configuration_aggregate: Device_Configuration_Aggregate;
  /** fetch data from the table: "device_configuration" using primary key columns */
  device_configuration_by_pk?: Maybe<Device_Configuration>;
  /** fetch data from the table in a streaming manner: "device_configuration" */
  device_configuration_stream: Array<Device_Configuration>;
  /** fetch data from the table: "device_group" */
  device_group: Array<Device_Group>;
  /** fetch aggregated fields from the table: "device_group" */
  device_group_aggregate: Device_Group_Aggregate;
  /** fetch data from the table: "device_group" using primary key columns */
  device_group_by_pk?: Maybe<Device_Group>;
  /** fetch data from the table: "device_group_device" */
  device_group_device: Array<Device_Group_Device>;
  /** fetch aggregated fields from the table: "device_group_device" */
  device_group_device_aggregate: Device_Group_Device_Aggregate;
  /** fetch data from the table: "device_group_device" using primary key columns */
  device_group_device_by_pk?: Maybe<Device_Group_Device>;
  /** fetch data from the table in a streaming manner: "device_group_device" */
  device_group_device_stream: Array<Device_Group_Device>;
  /** fetch data from the table in a streaming manner: "device_group" */
  device_group_stream: Array<Device_Group>;
  /** fetch data from the table: "device_measurement_property" */
  device_measurement_property: Array<Device_Measurement_Property>;
  /** fetch aggregated fields from the table: "device_measurement_property" */
  device_measurement_property_aggregate: Device_Measurement_Property_Aggregate;
  /** fetch data from the table: "device_measurement_property" using primary key columns */
  device_measurement_property_by_pk?: Maybe<Device_Measurement_Property>;
  /** fetch data from the table in a streaming manner: "device_measurement_property" */
  device_measurement_property_stream: Array<Device_Measurement_Property>;
  /** fetch data from the table: "device_measurement_value" */
  device_measurement_value: Array<Device_Measurement_Value>;
  /** fetch aggregated fields from the table: "device_measurement_value" */
  device_measurement_value_aggregate: Device_Measurement_Value_Aggregate;
  /** fetch data from the table: "device_measurement_value" using primary key columns */
  device_measurement_value_by_pk?: Maybe<Device_Measurement_Value>;
  /** fetch data from the table in a streaming manner: "device_measurement_value" */
  device_measurement_value_stream: Array<Device_Measurement_Value>;
  /** fetch data from the table: "device_operation" */
  device_operation: Array<Device_Operation>;
  /** fetch aggregated fields from the table: "device_operation" */
  device_operation_aggregate: Device_Operation_Aggregate;
  /** fetch data from the table: "device_operation" using primary key columns */
  device_operation_by_pk?: Maybe<Device_Operation>;
  /** fetch data from the table: "device_operation_image" */
  device_operation_image: Array<Device_Operation_Image>;
  /** fetch aggregated fields from the table: "device_operation_image" */
  device_operation_image_aggregate: Device_Operation_Image_Aggregate;
  /** fetch data from the table: "device_operation_image" using primary key columns */
  device_operation_image_by_pk?: Maybe<Device_Operation_Image>;
  /** fetch data from the table in a streaming manner: "device_operation_image" */
  device_operation_image_stream: Array<Device_Operation_Image>;
  /** fetch data from the table: "device_operation_log" */
  device_operation_log: Array<Device_Operation_Log>;
  /** fetch aggregated fields from the table: "device_operation_log" */
  device_operation_log_aggregate: Device_Operation_Log_Aggregate;
  /** fetch data from the table: "device_operation_log" using primary key columns */
  device_operation_log_by_pk?: Maybe<Device_Operation_Log>;
  /** fetch data from the table in a streaming manner: "device_operation_log" */
  device_operation_log_stream: Array<Device_Operation_Log>;
  /** fetch data from the table in a streaming manner: "device_operation" */
  device_operation_stream: Array<Device_Operation>;
  /** fetch data from the table: "device_state" */
  device_state: Array<Device_State>;
  /** fetch aggregated fields from the table: "device_state" */
  device_state_aggregate: Device_State_Aggregate;
  /** fetch data from the table: "device_state" using primary key columns */
  device_state_by_pk?: Maybe<Device_State>;
  /** fetch data from the table in a streaming manner: "device_state" */
  device_state_stream: Array<Device_State>;
  /** fetch data from the table in a streaming manner: "device" */
  device_stream: Array<Device>;
  /** fetch data from the table: "device_type" */
  device_type: Array<Device_Type>;
  /** fetch aggregated fields from the table: "device_type" */
  device_type_aggregate: Device_Type_Aggregate;
  /** fetch data from the table: "device_type" using primary key columns */
  device_type_by_pk?: Maybe<Device_Type>;
  /** fetch data from the table in a streaming manner: "device_type" */
  device_type_stream: Array<Device_Type>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table in a streaming manner: "location" */
  location_stream: Array<Location>;
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
  /** fetch data from the table in a streaming manner: "site" */
  site_stream: Array<Site>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootConnnector_TypeArgs = {
  distinct_on?: InputMaybe<Array<Connnector_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Connnector_Type_Order_By>>;
  where?: InputMaybe<Connnector_Type_Bool_Exp>;
};


export type Subscription_RootConnnector_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Connnector_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Connnector_Type_Order_By>>;
  where?: InputMaybe<Connnector_Type_Bool_Exp>;
};


export type Subscription_RootConnnector_Type_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootConnnector_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Connnector_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Connnector_Type_Bool_Exp>;
};


export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootCustomer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_UserArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


export type Subscription_RootCustomer_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


export type Subscription_RootCustomer_User_By_PkArgs = {
  customer_id: Scalars['bigint'];
  user_id: Scalars['bigint'];
};


export type Subscription_RootCustomer_User_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


export type Subscription_RootDeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDevice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDevice_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_ConfigurationArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


export type Subscription_RootDevice_Configuration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Configuration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Configuration_Order_By>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


export type Subscription_RootDevice_Configuration_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Configuration_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Configuration_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Configuration_Bool_Exp>;
};


export type Subscription_RootDevice_GroupArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Order_By>>;
  where?: InputMaybe<Device_Group_Bool_Exp>;
};


export type Subscription_RootDevice_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Order_By>>;
  where?: InputMaybe<Device_Group_Bool_Exp>;
};


export type Subscription_RootDevice_Group_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Group_DeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


export type Subscription_RootDevice_Group_Device_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Group_Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Group_Device_Order_By>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


export type Subscription_RootDevice_Group_Device_By_PkArgs = {
  device_group_id: Scalars['bigint'];
  device_id: Scalars['bigint'];
};


export type Subscription_RootDevice_Group_Device_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Group_Device_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Group_Device_Bool_Exp>;
};


export type Subscription_RootDevice_Group_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Group_Bool_Exp>;
};


export type Subscription_RootDevice_Measurement_PropertyArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Property_Order_By>>;
  where?: InputMaybe<Device_Measurement_Property_Bool_Exp>;
};


export type Subscription_RootDevice_Measurement_Property_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Property_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Property_Order_By>>;
  where?: InputMaybe<Device_Measurement_Property_Bool_Exp>;
};


export type Subscription_RootDevice_Measurement_Property_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Measurement_Property_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Measurement_Property_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Measurement_Property_Bool_Exp>;
};


export type Subscription_RootDevice_Measurement_ValueArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


export type Subscription_RootDevice_Measurement_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Measurement_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Measurement_Value_Order_By>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


export type Subscription_RootDevice_Measurement_Value_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Measurement_Value_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Measurement_Value_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Measurement_Value_Bool_Exp>;
};


export type Subscription_RootDevice_OperationArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Order_By>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Operation_ImageArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Image_Order_By>>;
  where?: InputMaybe<Device_Operation_Image_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Image_Order_By>>;
  where?: InputMaybe<Device_Operation_Image_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_Image_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Operation_Image_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Operation_Image_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Operation_Image_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_LogArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Log_Order_By>>;
  where?: InputMaybe<Device_Operation_Log_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Operation_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Operation_Log_Order_By>>;
  where?: InputMaybe<Device_Operation_Log_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_Log_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Operation_Log_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Operation_Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Operation_Log_Bool_Exp>;
};


export type Subscription_RootDevice_Operation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Operation_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Operation_Bool_Exp>;
};


export type Subscription_RootDevice_StateArgs = {
  distinct_on?: InputMaybe<Array<Device_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_State_Order_By>>;
  where?: InputMaybe<Device_State_Bool_Exp>;
};


export type Subscription_RootDevice_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_State_Order_By>>;
  where?: InputMaybe<Device_State_Bool_Exp>;
};


export type Subscription_RootDevice_State_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_State_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_State_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_State_Bool_Exp>;
};


export type Subscription_RootDevice_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDevice_TypeArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};


export type Subscription_RootDevice_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Type_Order_By>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};


export type Subscription_RootDevice_Type_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDevice_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Type_Bool_Exp>;
};


export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootLocation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Location_Stream_Cursor_Input>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootSiteArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootSite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootSite_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootSite_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Site_Stream_Cursor_Input>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  customer_users: Array<Customer_User>;
  /** An aggregate relationship */
  customer_users_aggregate: Customer_User_Aggregate;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['bigint'];
  is_super_user: Scalars['Boolean'];
  last_name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "user" */
export type UserCustomer_UsersArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserCustomer_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_User_Order_By>>;
  where?: InputMaybe<Customer_User_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_users?: InputMaybe<Customer_User_Bool_Exp>;
  customer_users_aggregate?: InputMaybe<Customer_User_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_super_user?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_users_aggregate?: InputMaybe<Customer_User_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_super_user?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsSuperUser = 'is_super_user',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  is_super_user?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type ReadAllDevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadAllDevicesQuery = { __typename?: 'query_root', device: Array<{ __typename?: 'device', id: any, name: string, device_type: { __typename?: 'device_type', name: string } }> };

export type ReadDeviceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['bigint']>;
}>;


export type ReadDeviceQuery = { __typename?: 'query_root', device: Array<{ __typename?: 'device', id: any, name: string, description?: string | null }> };


export const ReadAllDevicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ReadAllDevices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"device_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ReadAllDevicesQuery, ReadAllDevicesQueryVariables>;
export const ReadDeviceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ReadDevice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"device"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<ReadDeviceQuery, ReadDeviceQueryVariables>;