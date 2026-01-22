import axios from "axios";
import { CoinModel } from "../Models/CoinModel";
import { appConfig } from "../Utils/AppConfig";
import { store } from "../Redux/Store";
import { coinsSlice } from "../Redux/CoinsSlice";
import { AiRecommendationModel } from "../Models/AiRecommendationModel";

class CoinService {
    getCoinById(_coinId: string): CoinModel | PromiseLike<CoinModel> {
        throw new Error("Method not implemented.");
    }
    getCoinMarketData(_coinId: string) {
        throw new Error("Method not implemented.");
    }
	//get the list of coins using axios from coingecko API:
    public async getAllCoins () : Promise<CoinModel[]> {

        //if we have coins in global state - return them:
        if(store.getState().coins.length > 0) {
            return store.getState().coins;
        }
        // Fetch coins data from the API
        const response = await axios.get<CoinModel[]>(appConfig.coinsApiUrl);
        // Return the array of coins
        const coins = response.data;
        //return the coins
        const action = coinsSlice.actions.initCoins(coins); //create the action to init coins
        store.dispatch(action); //dispatch the action to the global state.
        return coins;
    }
    
    //create a moreInfo function to get more info about a specific coin by its id:
public async getMoreInfo(coinId: string): Promise<CoinModel> {
    const url = `${appConfig.coinMoreInfoUrl}/${coinId}`;
    return (await axios.get(url)).data;
}

// Get only the data needed for AI recommendation
    public async getAiRecommendationData(
        coinId: string
    ): Promise<AiRecommendationModel> {

        // Call CoinGecko detailed coin endpoint
        const response = await axios.get<any>(appConfig.aiRecommendationApi + coinId + "?market_data=true");

        const data = response.data;

        // Map API response to AI model (clean and controlled)
        return {
            id: data.id,
            name: data.name,
            current_price_usd: data.market_data.current_price.usd,
            market_cap_usd: data.market_data.market_cap.usd,
            volume_24h_usd: data.market_data.total_volume.usd,
            price_change_percentage_30d_in_currency:
                data.market_data.price_change_percentage_30d_in_currency.usd,
            price_change_percentage_60d_in_currency:
                data.market_data.price_change_percentage_60d_in_currency.usd,
            price_change_percentage_200d_in_currency:
                data.market_data.price_change_percentage_200d_in_currency.usd
        };
    }


}

export const coinService = new CoinService();
