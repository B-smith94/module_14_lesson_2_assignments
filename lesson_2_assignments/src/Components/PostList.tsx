import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../Queries/Mutations";
import { usePosts } from "./usePosts";
import { ListGroup, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const PostList = () => {
    const { loading, error, data, refetch } = usePosts();
    const [deletePost] = useMutation(DELETE_POST);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    console.log(data.posts.data)

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await deletePost({ variables: { id }});
                refetch();
            } catch (error) {
                console.error("Error deleting post:", error)
            }
        };    
    }

    return (
        <Container>
            <h1>Posts</h1>
            <ListGroup>
                {data.posts.data.map((post: any) => (
                    <ListGroup.Item key={post.id} as={Link} to={`/post/${post.id}`}>
                        Post #{post.id} - {post.title}
                        <Button variant="info" onClick={() => navigate(`/update/${post.id.toString()}`)}>Update Post</Button>
                        <Button variant="danger" onClick={() => handleDelete(post.id.toString())}>Delete Post</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="primary"  onClick={() => navigate('/create')}>
                Create Post
            </Button>
        </Container>
    )
}

export default PostList;