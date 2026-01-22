import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../PageArea/Home/Home";
import { About } from "../../PageArea/About/About";
import { Reports } from "../../PageArea/Reports/Reports";
import { Recommendations } from "../../PageArea/Recommendations/Recommendations";
import { PageNotFound } from "../../PageArea/PageNotFound/PageNotFound";

export function Routing() {
    return (
        <div className="Routing">

			<Routes>
                
                <Route path="/" element={<Navigate to ="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/recommendation" element={<Recommendations />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>

        </div>
    );
}
