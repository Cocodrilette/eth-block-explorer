import { useEffect, useState } from "react";

import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { parsedTimeElapsed } from "../lib/utils";

export default function Block({ block }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState("");

  const mappedBlock = () => {
    const { number, hash, miner, parentHash, gasLimit, gasUsed } = block;

    return (
      <div className="flex flex-col my-3 p-3 border-2 gap-3">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-5">
              <div className="bg-slate-200 p-3 rounded-lg">BK</div>
              <div>
                <p className="font-bold">#{number}</p>
                <p>{timeElapsed}</p>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <BiUpArrow className="toggleButtons" />
            ) : (
              <BiDownArrow className="toggleButtons" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="dropdown inline-block border-t-2 pt-3">
            <p className="border-b py-2">
              <span className="font-semibold">Block Hash:</span> {hash}
            </p>
            <p className="border-b py-2">
              <span className="font-semibold">Parent Hash:</span> {parentHash}
            </p>
            <p className="border-b py-2">
              <span className="font-semibold">Miner:</span> {miner}
            </p>
            <p className="border-b py-2">
              <span className="font-semibold">Gas limit:</span>{" "}
              {gasLimit.toNumber()}
            </p>
            <p className="border-b py-2">
              <span className="font-semibold">Gas used:</span>{" "}
              {gasUsed.toNumber()}
            </p>
            <p className="border-b py-2">
              <a
                href={`transactions/block/${""}`}
                className="text-blue-600 font-semibold"
              >
                Transactions
              </a>
            </p>
          </div>
        )}
      </div>
    );
  };

  const render = () => {
    if (block) {
      return mappedBlock();
    }

    return <p>Loading...</p>;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(parsedTimeElapsed(block.timestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, [block]);

  return <div className="">{render()}</div>;
}
