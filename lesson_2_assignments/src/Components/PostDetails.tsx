import { usePost } from './usePosts';
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Container, Button } from 'react-bootstrap'

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = usePost(id!);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data)

    return (
        <Container>
            <Button onClick={() => navigate('/')}>Go Back</Button>
            <Card>
                <Card.Body>
                    <Card.Text>User ID: {data.user.id} </Card.Text>
                    <Card.Title>{data.user.posts.data.title}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PostDetails;