import "./Header.css";

export function Header() {
    return (
        <div className="Header">
            
            {/* Overlay layer for better text readability */}
            <div className="overlay"></div>

            {/* Content must be above the overlay */}
            <div className="content">
                <h1 className="title">Cryptical</h1>
                <h2 className="subtitle">Track. Analyze. Decide.</h2>
                <div className="accent-line"></div>
            </div>

        </div>
    );
}
