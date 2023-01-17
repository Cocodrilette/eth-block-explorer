import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { provider } from "../lib/eth";

export default function Transactions({ txHash }) {
  const [isOpen, setIsOpen] = useState(false);
  const [txInfo, setTxInfo] = useState(null);

  const getTx = async (txHash) => {
    const tx = await provider.getTransactionByHash(txHash);
    console.log(tx);
    setTxInfo(tx);
  };

  const tx = () => {
    if (txInfo) {
      const { from, to, gasUsed, confirmations, effectiveGasPrice, byzantium } =
        txInfo;

      return (
        <div className="flex flex-col my-2 bg-slate-200 rounded-xl p-2">
          {byzantium && (
            <p className="py-1 px-3 rounded-xl max-w-max text-sm bg-sky-100">
              Byzantium
            </p>
          )}
          <p className="border-b border-slate-400 py-2">
            <span className="font-semibold">From:</span> {from}
          </p>
          <p className="border-b border-slate-400 py-2">
            <span className="font-semibold">To:</span> {to}
          </p>
          <p className="border-b border-slate-400 py-2">
            <span className="font-semibold">Confirmation:</span> {confirmations}
          </p>
          <p className="border-b border-slate-400 py-2">
            <span className="font-semibold">Gas used:</span>{" "}
            {gasUsed.toNumber()}
          </p>
          <p className="py-2">
            <span className="font-semibold">Gas price:</span>{" "}
            {effectiveGasPrice.toNumber()}
          </p>
        </div>
      );
    }

    return <p>Loading...</p>;
  };

  return (
    <div className={`bg-slate-100 px-2 gap-2 rounded-xl`}>
      <div className="flex justify-between items-center">
        <p className="font-medium pt-2">{txHash}</p>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            getTx(txHash);
          }}
        >
          {isOpen ? (
            <BiUpArrow className="toggleButtons text-xl" />
          ) : (
            <BiDownArrow className="toggleButtons text-xl" />
          )}
        </button>
      </div>
      {isOpen && tx()}
    </div>
  );
}
