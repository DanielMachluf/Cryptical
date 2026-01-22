import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div className="PageNotFound">

            {/* Main content container */}
            <div className="card">

                {/* Big error code */}
                <h1>404</h1>

                {/* Funny but relevant message */}
                <h2>Looks like this block was never mined</h2>

                <p>
                    The page you're looking for doesn't exist or has been moved
                    to another blockchain.
                </p>

                {/* Call to action */}
                <button onClick={() => navigate("/")}>
                    Back to Home
                </button>

            </div>

        </div>
    );
}
