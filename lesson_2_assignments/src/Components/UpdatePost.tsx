import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../Queries/Mutations";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap'
import { useRef, FormEvent } from "react";

const UpdatePost: React.FC = () => {
    const inputBody = useRef<HTMLTextAreaElement>(null);
    const { id } = useParams();
    const [updatePost, { loading, error }] = useMutation(UPDATE_POST, {
        variables: { id, }
    })
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputBody.current) {
            updatePost({
                variables: {
                    body: inputBody.current.value,
                },
            });
            inputBody.current.value = '';
            navigate('/');
        }
    };

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Update Post</h1>
                <Form.Group controlId="formBody">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                     as='textarea'
                     placeholder='Enter post body'
                     rows={3}
                     ref={inputBody}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Create Post</Button>
            </Form>
        </Container>
    )
}

export default UpdatePost