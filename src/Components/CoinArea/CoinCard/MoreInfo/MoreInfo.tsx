import "./MoreInfo.css";

type MoreInfoProps = {
    // Raw response from CoinGecko coin details API
    info: any;
};

export function MoreInfo({ info }: MoreInfoProps) {

    const prices = info.market_data.current_price;
    return (
        <div className="MoreInfo">

            <div className="row">
                <span>USD</span>
                <span>${prices.usd.toLocaleString()}</span>
            </div>

            <div className="row">
                <span>EUR</span>
                <span>€{prices.eur.toLocaleString()}</span>
            </div>

            <div className="row">
                <span>ILS</span>
                <span>₪{prices.ils.toLocaleString()}</span>
            </div>

        </div>
    );
}