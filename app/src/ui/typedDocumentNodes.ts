import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** mutation to add a new task */
  addTask?: Maybe<Task>;
  /** mutation to update a task entity */
  updateTask?: Maybe<Task>;
};

export type MutationAddTaskArgs = {
  name: Scalars['String'];
  description: Scalars['String'];
};

export type MutationUpdateTaskArgs = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** query that returns all tasks */
  viewTasks?: Maybe<Array<Maybe<Task>>>;
};

export type QueryViewTasksArgs = {
  status?: Maybe<Scalars['String']>;
};

/** entity representing a task */
export type Task = {
  __typename?: 'Task';
  /** task id */
  id: Scalars['Int'];
  /** the name of the task */
  name: Scalars['String'];
  /** a description of the task */
  description: Scalars['String'];
  /** the status of the task (TODO, IN_PROGRESS, COMPLETE) */
  status: Scalars['String'];
};

export type TaskCardDataFragment = { __typename?: 'Task' } & Pick<
  Task,
  'id' | 'name' | 'description' | 'status'
>;

export type TaskListDataFragment = { __typename?: 'Query' } & {
  viewTasks?: Maybe<
    Array<Maybe<{ __typename?: 'Task' } & TaskCardDataFragment>>
  >;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never }>;

export type HomePageQuery = { __typename?: 'Query' } & TaskListDataFragment;

export const TaskCardDataFragmentDoc: DocumentNode<
  TaskCardDataFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TaskCardData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Task' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
        ],
      },
    },
  ],
};
export const TaskListDataFragmentDoc: DocumentNode<
  TaskListDataFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TaskListData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Query' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'viewTasks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TaskCardData' },
                },
              ],
            },
          },
        ],
      },
    },
    ...TaskCardDataFragmentDoc.definitions,
  ],
};
export const HomePageDocument: DocumentNode<
  HomePageQuery,
  HomePageQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HomePage' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'TaskListData' },
          },
        ],
      },
    },
    ...TaskListDataFragmentDoc.definitions,
  ],
};
