import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CoinCard({
  coin,
  isFavorite,
  toggleFavorite,
  currency,
}) {
  const getSymbol = (currency) => {
    switch (currency) {
      case "usd":
        return "$";
      case "inr":
        return "₹";
      case "eur":
        return "€";
      case "gbp":
        return "£";
      default:
        return "$";
    }
  };
  return (
    <Card className=" shadow-2xl rounded-xl border-1 bg-gray-100">
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <div>
              <div className="font-semibold">{coin.name} </div>
              <div className="text-sm text-gray-500">
                {coin.symbol.toUpperCase()}
              </div>
            </div>
          </div>
          <Button onClick={() => toggleFavorite(coin.id)} variant="outline">
            {isFavorite ? "★" : "☆"}
          </Button>
        </div>
        <div className="mt-2 font-bold text-xl">
          {getSymbol(currency)}
          {coin.current_price.toLocaleString()}
        </div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={coin.sparkline_in_7d.price.map((p, i) => ({ i, p }))}
            >
              <Line type="monotone" dataKey="p" stroke="#8884d8" dot={false} />
              <XAxis dataKey="i" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
