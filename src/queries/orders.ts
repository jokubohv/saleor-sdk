import gql from "graphql-tag";

import { orderDetailFragment } from "../fragments/order";

export const ordersByUser = gql`
  query OrdersByUser($perPage: Int!, $after: String) {
    me {
      id
      orders(first: $perPage, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            token
            number
            statusDisplay
            created
            metadata {
              key
              value
            }
            privateMetadata {
              key
              value
            }
            total {
              gross {
                amount
                currency
              }
              net {
                amount
                currency
              }
            }
            lines {
              id
              variant {
                id
                product {
                  name
                  id
                }
              }
              thumbnail {
                alt
                url
              }
              thumbnail2x: thumbnail(size: 510) {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const orderDetailsByTokenQuery = gql`
  ${orderDetailFragment}
  query OrderByToken($token: UUID!) {
    orderByToken(token: $token) {
      ...OrderDetail
    }
  }
`;

export const userOrderDetailsByTokenQuery = gql`
  ${orderDetailFragment}
  query UserOrderByToken($token: UUID!) {
    orderByToken(token: $token) {
      ...OrderDetail
    }
  }
`;
