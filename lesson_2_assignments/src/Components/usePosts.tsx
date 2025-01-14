import { useQuery } from "@apollo/client";
import { GET_POSTS, GET_POST } from "../Queries/Queries";

export const usePosts = () => {
    const { loading, error, data, refetch } = useQuery(GET_POSTS);
    return { loading, error, data, refetch}
}

export const usePost = (id: string) => {
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { id }
    });
    return { loading, error, data }
}