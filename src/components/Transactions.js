import { Suspense, lazy, useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

// import Transaction from "./Transaction";

export default function Transactions({ transactions }) {
  const [isOpen, setIsOpen] = useState(false);
  const LazyTransaction = lazy(() => import("./Transaction"));

  const txsMapped = () => {
    return transactions.map((tx) => (
      <Suspense fallback={<></>}>
        <LazyTransaction txHash={tx} />
      </Suspense>
    ));
  };

  return (
    <div className={`max-h-96 ${isOpen && "overflow-y-scroll"} pr-2`}>
      <div className="flex justify-between">
        <p className="font-semibold pt-2">Transactions</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <BiUpArrow className="toggleButtons text-xl" />
          ) : (
            <BiDownArrow className="toggleButtons text-xl" />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-2">{isOpen && txsMapped()}</div>
    </div>
  );
}
