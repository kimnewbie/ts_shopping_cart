import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

export function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Home</h1>
            <p></p>
            <p></p>
            <p>
                <Button onClick={() => navigate('./store')}>Go to Store</Button>
            </p>
        </>
    )
}