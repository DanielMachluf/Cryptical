import { JSX, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import { aiRecommendationService } from "../../../Services/AiRecommendationService";
import { coinService } from "../../../Services/CoinService";
import { notify } from "../../../Utils/Notify";
import "./Recommendations.css";

export function Recommendations(): JSX.Element {

    // Read selected coin Symbols (e.g. 'BTC', 'ETH') from Redux
    const selectedCoins = useSelector(
        (state: AppState) => state.selectedCoins
    );

    // Read full coin list to map Symbol -> ID
    const coins = useSelector((state: AppState) => state.coins);

    // Holds AI results per coinId (cached)
    const [aiReviews, setAiReviews] = useState<Record<string, string>>({});

    // Holds which coin is currently being analyzed
    const [loadingCoinId, setLoadingCoinId] = useState<string | null>(null);

    // Ensure we have coins loaded to map symbols to IDs
    useEffect(() => {
        if (coins.length === 0) {
            coinService.getAllCoins()
                .catch(err => notify.error(err));
        }
    }, [coins.length]);

    // Get AI recommendation for a specific coin
    async function getAiRecommendation(coinId: string) {
        try {
            setLoadingCoinId(coinId);

            // Call AI service with correct coin ID (e.g. 'bitcoin')
            const review =
                await aiRecommendationService.getAiRecommendation(coinId);

            // Save result per coin
            setAiReviews(prev => ({
                ...prev,
                [coinId]: review
            }));
        }
        catch (err) {
            console.error(err);
            notify.error(err);
        }
        finally {
            setLoadingCoinId(null);
        }
    }

    // No coins selected state
    if (selectedCoins.length === 0) {
        return (
            <div className="Recommendations">
                <h2>AI Recommendations</h2>
                <p>Please select at least one coin to get AI recommendations.</p>
            </div>
        );
    }

    return (
        <div className="Recommendations">
            <h2>AI Recommendations</h2>

            {selectedCoins.map(symbol => {
                // Find the coin object to get the real ID (e.g. Symbol "BTC" -> ID "bitcoin")
                const coin = coins.find(c => c.symbol.toUpperCase() === symbol);
                
                // If coin data isn't loaded yet, skip rendering this card momentarily
                if (!coin) return null;

                return (
                    <div key={coin.id} className="ai-coin-card">

                        <h3>{coin.name} ({symbol})</h3>

                        <button
                            onClick={() => getAiRecommendation(coin.id)}
                            disabled={loadingCoinId === coin.id}
                        >
                            {loadingCoinId === coin.id
                                ? "Analyzing..."
                                : "Get AI Recommendation"}
                        </button>

                        {aiReviews[coin.id] && (
                            <div className="ai-result">
                                {aiReviews[coin.id]}
                            </div>
                        )}

                    </div>
                );
            })}
        </div>
    );
}