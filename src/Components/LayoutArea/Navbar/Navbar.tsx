import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { searchActions } from "../../../Redux/SearchSlice";

export function Navbar() {
    const dispatch = useDispatch();
    const searchText = useSelector((state: AppState) => state.searchText);

    return (
        <div className="Navbar">

            {/* Left side: navigation links */}
            <div className="links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/reports">Reports</NavLink>
                <NavLink to="/recommendation">Recommendations</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            {/* Right side: search input */}
            <div className="search">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(args) =>
                        dispatch(searchActions.setSearchText(args.target.value))
                    }
                />
            </div>

        </div>
    );
}
