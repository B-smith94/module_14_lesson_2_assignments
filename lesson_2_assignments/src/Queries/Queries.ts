// Assignment 1
import { gql } from "urql";

// Task 1 and 2
export const GET_POSTS = gql`
query {
  posts {
    data {
      id
      title
      user {
        id
      }
    }
  }
}`

// Task 3
export const GET_POST = gql`
    query {
        user(id: $id) {
            posts {
                data {
                    id
                    user {
                        id
                    }
                    title
                }
            }
        }    
    }
`