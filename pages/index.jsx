import React from "react";
import TokensBalanceDisplay from "../components/tokensBalanceDisplay.jsx";
import TransactionsHistoryDisplay from "../components/transactionsHistoryDisplay.jsx";
 export default function MyComponent() {
  return (
    <div>
      <h1>My Component</h1>
      <TokensBalanceDisplay walletAddress={"0xshah.eth"} chain={"ETH_MAINNET"} />
    </div>
  );
}
<div>
      <h1>My Component</h1>
      <TransactionsHistoryDisplay walletAddress={"vitalik.eth"} />
    </div>