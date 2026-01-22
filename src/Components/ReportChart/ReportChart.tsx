import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import "./ReportChart.css";

type ReportChartProps = {
    data: any[];
    selectedCoins: string[];
};

// Colors for different lines
const COLORS = [
  "#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088fe", 
  "#00C49F", "#FFBB28", "#FF8042", "#a05195", "#d45087"
];

export function ReportChart({ data, selectedCoins }: ReportChartProps) {
    return (
        <div className="ReportChart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                    <Legend />
                    
                    {selectedCoins.map((symbol, index) => (
                        <Line
                            key={symbol}
                            type="monotone"
                            dataKey={symbol}
                            stroke={COLORS[index % COLORS.length]}
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 8 }}
                            animationDuration={500}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
