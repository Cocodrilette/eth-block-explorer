import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Transaction from "./Transaction";

export default function Transactions({ transactions }) {
  const mappedTransactions = () => {
    return transactions.map((transaction) => {
      return <Transaction transaction={transaction} />;
    });
  };

  const render = () => {
    if (transactions) {
      return mappedTransactions();
    }

    return (
      <div className="flex flex-col">
        <AiOutlineLoading3Quarters className="animate-spin m-auto" />
        <p className="m-auto">Getting transactions...</p>
      </div>
    );
  };

  return <div className="border border-red-500">{render()}</div>;
}
