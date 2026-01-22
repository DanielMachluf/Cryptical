import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CoinModel } from "../../../Models/CoinModel";
import { coinService } from "../../../Services/CoinService";
import { MoreInfo } from "./MoreInfo/MoreInfo";
import { notify } from "../../../Utils/Notify";
import { AppState } from "../../../Redux/AppState";
import { selectedCoinsActions } from "../../../Redux/SelectedCoinsSlice";
import "./CoinCard.css";

type CoinCardProps = {
    coin: CoinModel;
    onLimitReached: (symbol: string) => void;
};

export function CoinCard({ coin, onLimitReached }: CoinCardProps) {

    // UI-only state (not global)
    const [isOpen, setIsOpen] = useState(false);
    const [info, setInfo] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    // Read selected coins from Redux (single source of truth)
    const selectedCoins = useSelector(
        (state: AppState) => state.selectedCoins
    );

    const symbol = coin.symbol.toUpperCase();

    // Determine switch state based on Redux
    const isSelected = selectedCoins.includes(symbol);

    function handleSwitchChange() {
        // UI does not decide business logic – only dispatches intent
        if (isSelected) {
            // dispatch plain action object so dispatch receives a valid Action
            dispatch(selectedCoinsActions.removeSelectedCoin(symbol));
        } else {
            // Check if limit is reached before adding
            if (selectedCoins.length >= 5) {
                onLimitReached(symbol);
                return;
            }
            dispatch(selectedCoinsActions.addSelectedCoin(symbol));
        }
    }

    function handleInfoClick() {
        notify.info("Selecting this coin enables real-time market reports and AI-powered performance reviews in the Reports/Recommendations pages.");
    }

    async function handleMoreInfoClick() {
        if (isOpen) {
            setIsOpen(false);
            return;
        }

        try {
            setIsLoading(true);
            const data = await coinService.getMoreInfo(coin.id);
            setInfo(data);
            setIsOpen(true);
        }
        catch (err) {
            notify.error(err);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={`CoinCard ${isSelected ? "premium" : ""}`}>

            {/* Header: icon + titles + switch */}
            <div className="card-header">
                <img src={coin.image} alt={coin.name} />

                <div className="titles">
                    <span className="symbol">{symbol}</span>
                    <span className="name">{coin.name}</span>
                </div>

                {/* Switch – controlled by Redux */}
                <div className="switch-container" title="Enable for Live Reports & AI Review">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={handleSwitchChange}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="info-icon" onClick={handleInfoClick}>ⓘ</span>
                </div>
            </div>

            <button
                className="more-info"
                onClick={handleMoreInfoClick}
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : isOpen ? "Hide Info" : "More Info"}
            </button>

            {isOpen && info && <MoreInfo info={info} />}
        </div>
    );
}