import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinTickers } from "./api";
import styled from "styled-components";

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const OverviewItemTwo = styled(OverviewItem)`
  width: 50%;
`;

function Price() {
  const { coinId } = useParams();
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId as string),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <>
      {tickersLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Overview>
            <OverviewItemTwo>
              <span>ath_date:</span>
              <span>{tickersData?.quotes?.USD?.ath_date}</span>
            </OverviewItemTwo>
            <OverviewItemTwo>
              <span>ath_price:</span>
              <span>{tickersData?.quotes?.USD?.ath_price.toFixed(3)}</span>
            </OverviewItemTwo>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>market_cap :</span>
              <span>{tickersData?.quotes?.USD?.market_cap}</span>
            </OverviewItem>
            <OverviewItem>
              <span>market_cap_change_24h :</span>
              <span>{tickersData?.quotes?.USD?.market_cap_change_24h}</span>
            </OverviewItem>
            <OverviewItem>
              <span>percent_change_1h :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_1h}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>percent_change_1y :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_1y}</span>
            </OverviewItem>
            <OverviewItem>
              <span>percent_change_6h :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_6h}</span>
            </OverviewItem>
            <OverviewItem>
              <span>percent_change_7d :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_7d}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>percent_change_12h :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_12h}</span>
            </OverviewItem>
            <OverviewItem>
              <span>percent_change_15m :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_15m}</span>
            </OverviewItem>
            <OverviewItem>
              <span>percent_change_24h :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_24h}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>percent_change_30d :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_30d}</span>
            </OverviewItem>
            <OverviewItem>
              <span>percent_change_30m :</span>
              <span>{tickersData?.quotes?.USD?.percent_change_30m}</span>
            </OverviewItem>
            <OverviewItem>
              <span>percent_from_price_ath :</span>
              <span>{tickersData?.quotes?.USD?.percent_from_price_ath}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>price :</span>
              <span>{tickersData?.quotes?.USD?.price.toFixed(3)}</span>
            </OverviewItem>
            <OverviewItem>
              <span>volume_24h :</span>
              <span>{tickersData?.quotes?.USD?.volume_24h.toFixed(2)}</span>
            </OverviewItem>
            <OverviewItem>
              <span>volume_24h_change_24h :</span>
              <span>{tickersData?.quotes?.USD?.volume_24h_change_24h}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </>
  );
}

export default Price;
