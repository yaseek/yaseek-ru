/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncMyTypes = /* GraphQL */ `
  query SyncMyTypes(
    $filter: ModelMyTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMyTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        price
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMyType = /* GraphQL */ `
  query GetMyType($id: ID!) {
    getMyType(id: $id) {
      id
      title
      content
      price
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMyTypes = /* GraphQL */ `
  query ListMyTypes(
    $filter: ModelMyTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
