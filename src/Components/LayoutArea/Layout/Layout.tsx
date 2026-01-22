import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Copyrights } from "../Copyrights/Copyrights";
import "./Layout.css";
import { Routing } from "../Routing/Routing";

export function Layout() {
    return (
        <div className="Layout">

            <nav>
                <Navbar />
            </nav>

			<header>
                <Header />
            </header>

            <main>
                <Routing />
            </main>

            <footer>
                <Copyrights />
            </footer>

        </div>
    );
}
