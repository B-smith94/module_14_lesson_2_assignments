// Assignment 1
import { gql } from "urql";

// Task 1 and 2
export const GET_POSTS = gql`
query {
  posts {
    data {
      id
      title
      body
      user {
        id
      }
    }
  }
}`

// Task 3
export const GET_USER_POSTS = gql`
    query($id: ID!) {
        user(id: $id) {
            posts {
                data {
                    id
                    title
                    body
                }
            }
        }    
    }
`

export const GET_POST = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`