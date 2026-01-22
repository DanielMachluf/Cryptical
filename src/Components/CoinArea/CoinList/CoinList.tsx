import { useEffect, useState } from "react";
import "./CoinList.css";
import { coinService } from "../../../Services/CoinService";
import { Loading } from "../../SharedArea/Loading/Loading";
import { CoinCard } from "../CoinCard/CoinCard";
import { notify } from "../../../Utils/Notify";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { MaxCoinsDialog } from "../../SharedArea/MaxCoinsDialog/MaxCoinsDialog";

export function CoinList() {

    const coins = useSelector((state: AppState) => state.coins);
    const searchText = useSelector((state: AppState) => state.searchText);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [pendingCoinSymbol, setPendingCoinSymbol] = useState<string>("");

    useEffect(() => {
        if (coins.length > 0) return;

        coinService.getAllCoins() // fetch all coins from the service
            .catch(error => notify.error(error)); // notify any errors
    }, [coins.length])

    const normalizedSearchText = searchText.trim().toLowerCase();
    const filteredCoins = normalizedSearchText.length === 0
        ? coins
        : coins.filter(coin =>
            coin.name.toLowerCase().includes(normalizedSearchText) ||
            coin.symbol.toLowerCase().includes(normalizedSearchText)
        );

    return (
        <div className="CoinList">

            <div className="intro">
                <h1>Market Overview</h1>
                <p>Live tracking of the world's top cryptocurrencies. Analyze trends, check prices, and make informed decisions.</p>
            </div>
			
            {coins.length === 0 ? (<Loading />) : (
                <div className="container">
                    {filteredCoins.map(coin => (
                        <CoinCard
                            key={coin.id}
                            coin={coin}
                            onLimitReached={(symbol) => {
                                setPendingCoinSymbol(symbol);
                                setIsDialogOpen(true);
                            }}
                        />
                    ))}
                </div>
            )}

            <MaxCoinsDialog
                open={isDialogOpen}
                pendingCoinSymbol={pendingCoinSymbol}
                onClose={() => setIsDialogOpen(false)}
            />
          
        </div>
    );
}
