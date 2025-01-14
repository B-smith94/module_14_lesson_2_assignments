import { usePost } from '../Hooks/usePosts';
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Container, Button } from 'react-bootstrap'

const UserPosts: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = usePost(id!);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data)

    return (
        <Container>
            <Button onClick={() => navigate('/')}>Go Back</Button>
            {data.user.posts.data.map((post: any) => (
                <Card>
                <Card.Body>
                    <Card.Text>User ID: {id} </Card.Text>
                        <Card.Text key={post.it} ><strong>{post.title}</strong> - {post.body}</Card.Text>
                        
                </Card.Body> 
            </Card>
        ))}
        </Container>
    );
};

export default UserPosts;