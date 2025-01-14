// Assignment 2
import { gql } from "urql";
//Task 1
export const CREATE_POST = gql`
    mutation CreatePost(
        $input: CreatePostInput!
    ) {
        createPost(input: $input) {
            id
            title
            body
        }
    }
`;
//Task 2
export const UPDATE_POST = gql`
    mutation UpdatePost(
        $id: ID!,
        $input: UpdatePostInput!
    ) {
        updatePost(id: $id, input: $input) {
            id
            body
        }
    }
`;
// Task 3
export const DELETE_POST = gql`
    mutation DeletePost(
        $id: ID!
    ) {
        deletePost(id: $id)
    }
`