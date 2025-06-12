import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CoinCard from "./components/coinCard";
import SearchFilters from "./components/SearchFilter";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCap, setFilterCap] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoins();
  }, []);
  async function fetchCoins() {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://thingproxy.freeboard.io/fetch/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
      );
      console.log("Coins:", res.data);
      setCoins(res.data);
    } catch (err) {
      console.error("Error fetching coins", err);
    } finally {
      setLoading(false);
    }
  }
  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) &&
      coin.market_cap > filterCap
  );

  return (
    <div className="w-full text-black bg-gray-100">
      <div className="min-h-screen   ">
        <h1 className="text-3xl text-center mb-4 font-bold">
          Crypto Dashboard
        </h1>
        <div className="flex justify-center">
          <SearchFilters
            search={search}
            setSearch={setSearch}
            filterCap={filterCap}
            setFilterCap={setFilterCap}
          />
        </div>

        <div className="flex justify-center mx-2 text-black">
          <div className="">
            {loading ? (
              <div className="text-center py-10 text-xl font-medium animate-pulse">
                Loading coins...
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-5 shadow-5xl border-1 rounded-2xl p-10 bg-gray-50">
                {filteredCoins.map((coin) => (
                  <CoinCard
                    key={coin.id}
                    coin={coin}
                    isFavorite={favorites.includes(coin.id)}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
