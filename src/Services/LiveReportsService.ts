import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { LiveReportModel } from "../Models/LiveReportModel";

class LiveReportsService {

    // Fetch live prices for selected coin symbols (USD only)
    public async getLiveReport(symbols: string[]): Promise<LiveReportModel> {

        if (symbols.length === 0) {
            return {};
        }

        const symbolsQuery = symbols.join(",");
        const url = `${appConfig.realTimeReportUrl}?fsyms=${symbolsQuery}&tsyms=USD`;

        const response = await axios.get<any>(url);
        const data = response.data;

        // Guard: API returned no data
        if (!data) {
            return {};
        }

        return data;
    }
}

export const liveReportsService = new LiveReportsService();