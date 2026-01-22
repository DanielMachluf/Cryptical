import "./About.css";
import danielImage from "../../../assets/images/danielMachluf.jpeg";

export function About() {
    return (
        <div className="About">
            
            <div className="about-header">
                <h1>About Cryptical</h1>
                <p>A smart, interactive way to track the crypto market.</p>
            </div>

            <div className="about-content">
                
                {/* Project Description */}
                <section className="about-section project-info">
                    <h2>What is Cryptical?</h2>
                    <p>
                        Cryptical is a web-based crypto tracking application built as a school project, 
                        designed for regular users who want a clear and interactive way to explore cryptocurrency data.
                    </p>
                    <p>
                        The project allows users to browse live cryptocurrency information, select up to five coins 
                        for comparison, and view real-time price updates and visual reports. A key focus is distinct from just 
                        viewing data—it's about interaction. We enforce clear business rules, like the five-coin selection limit, 
                        in a user-friendly way that doesn't silently block you but guides you.
                    </p>
                </section>

                {/* Tech & Features Grid */}
                <div className="info-grid">
                    <section className="about-section">
                        <h3>Technologies Used</h3>
                        <ul className="tech-list">
                            <li>⚛️ React & TypeScript</li>
                            <li>🔄 Redux Toolkit</li>
                            <li>🎨 Material UI (MUI)</li>
                            <li>📊 CoinGecko API</li>
                            <li>⚡ Real-time Data</li>
                            <li>💾 LocalStorage Persistence</li>
                        </ul>
                    </section>

                    <section className="about-section">
                        <h3>Key Features</h3>
                        <ul className="feature-list">
                            <li>📈 Live market data</li>
                            <li>⚖️ Compare up to 5 coins</li>
                            <li>⏱️ Real-time chart reports</li>
                            <li>🛑 Smart limit handling</li>
                            <li>📱 Responsive Design</li>
                        </ul>
                    </section>
                </div>

                {/* Challenges & Future */}
                <section className="about-section challenges">
                    <h3>Challenges & Solutions</h3>
                    <p>
                        The main challenge was handling the <b>five-coin limit</b> naturally. 
                        Instead of a harsh error message, we implemented a smart dialog that lets you 
                        instantly swap a coin, keeping the flow smooth and intuitive.
                    </p>
                </section>
                
                <section className="about-section future">
                    <h3>Future Improvements</h3>
                    <p>
                        With more time, I'd love to add <b>price alerts</b>, a personal <b>portfolio tracker</b>, 
                        and automatic <b>asset value calculation</b>.
                    </p>
                </section>

                {/* Developer Profile */}
                <section className="about-section developer-card">
                    <div className="dev-image-container">
                        <img src={danielImage} alt="Daniel Machluf" />
                    </div>
                    <div className="dev-info">
                        <h3>About the Developer</h3>
                        <h4>Daniel Machluf</h4>
                        <p className="role">Full-Stack Student @ John Bryce Academy</p>
                        <p>
                            Hi, I'm Daniel, 21 years old from Tel Aviv. This project represents my journey 
                            into clean architecture and modern frontend practices.
                        </p>
                        <a 
                            href="https://github.com/DanielMachluf" 
                            target="_blank" 
                            rel="noreferrer"
                            className="github-btn"
                        >
                            View on GitHub
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
}
