import "./Loading.css";

export function Loading() {
    return (
        <div className="Loading">

            {/* Loader container */}
            <div className="loader">

                {/* Animated dots */}
                <span></span>
                <span></span>
                <span></span>

            </div>

            {/* Optional text */}
            <p>Mining bitcoin...</p>

        </div>
    );
}
