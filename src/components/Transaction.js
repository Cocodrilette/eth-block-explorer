import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Transaction({ transaction }) {
  const render = () => {
    if (transaction) {
      return (
        <div className="border border-red-500">
          <p>Transaction</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <AiOutlineLoading3Quarters className="animate-spin m-auto" />
        <p className="m-auto">Getting transaction...</p>
      </div>
    );
  };

  return <div className="border border-red-500">{render()}</div>;
}
