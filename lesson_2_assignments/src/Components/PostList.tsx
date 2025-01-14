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

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await deletePost({ variables: { id }});
                refetch();
                console.log('Deletion successful.')
            } catch (error) {
                console.error("Error deleting post:", error)
            }
        };    
    }

    return (
        <Container>
            <h1>Posts</h1>
            <Button variant="primary" className="position-fixed top-0 end-0" onClick={() => navigate('/create')}>
                Create Post
            </Button>
            <ListGroup>
                {data.posts.data.map((post: any) => (
                    <ListGroup.Item key={post.id}>
                        <Link to={`/post/${post.id}`}>Post by User ID {post.user.id}</Link> - <strong>{post.title}</strong> - {post.body}
                        <Button variant="info" className="m-2" onClick={() => navigate(`/update/${post.id}`)}>Update Post</Button>
                        <Button variant="danger" className="m-2" onClick={() => handleDelete(post.id.toString())}>Delete Post</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}

export default PostList;