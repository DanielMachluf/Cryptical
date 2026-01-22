import "./Copyrights.css";

export function Copyrights() {
    const year = new Date().getFullYear(); // Get the current year for the copyright notice
    return (
        <div className="Copyrights">
			<p>&copy; {year} Cryptical App. All rights reserved.</p>
        </div>
    );
}
