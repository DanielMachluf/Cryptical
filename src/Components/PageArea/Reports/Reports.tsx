import { JSX, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Reports.css";
import { AppState } from "../../../Redux/AppState";
import { liveReportsService } from "../../../Services/LiveReportsService";
import { Loading } from "../../SharedArea/Loading/Loading";
import { ReportChart } from "../../ReportChart/ReportChart";

export function Reports(): JSX.Element {

    // Read selected coin symbols from Redux
    const selectedCoins = useSelector(
        (state: AppState) => state.selectedCoins
    );

    // Holds chart data history
    const [chartData, setChartData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // Reset data if no coins selected
        if (selectedCoins.length === 0) {
            setChartData([]);
            setIsLoading(false);
            return;
        }

        // Clear previous data when selection changes
        setChartData([]);
        setIsLoading(true);

        // Function to fetch live data
        async function fetchReport() {
            try {
                const data = await liveReportsService.getLiveReport(selectedCoins);
                
                // Process data point
                const now = new Date();
                const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
                
                const newDataPoint: any = { time: timeStr };
                
                // Map API response to chart data format: { time: '...', BTC: 50000, ETH: 3000 }
                selectedCoins.forEach(symbol => {
                    if (data[symbol]) {
                        newDataPoint[symbol] = data[symbol].USD;
                    }
                });

                // Update state with new point, keep max 20 points
                setChartData(prev => {
                    const newData = [...prev, newDataPoint];
                    if (newData.length > 20) newData.shift();
                    return newData;
                });
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        // Initial fetch
        fetchReport();

        // Fetch every 2 seconds
        const intervalId = setInterval(fetchReport, 2000);

        // Cleanup on unmount or coins change
        return () => clearInterval(intervalId);

    }, [selectedCoins]);

    return (
        <div className="Reports">
            <h2>Live Reports</h2>
            <p>Real-time price monitoring for selected cryptocurrencies.</p>

            {selectedCoins.length === 0 ? (
                <div className="no-data-message">
                    <p>No coins selected. Please go back to Home and toggle the switch on coins you want to track.</p>
                </div>
            ) : isLoading && chartData.length === 0 ? (
                <Loading />
            ) : (
                <div className="reports-container">
                    <ReportChart data={chartData} selectedCoins={selectedCoins} />
                </div>
            )}
        </div>
    );
}