import Block from "./Block";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Blocks({ latestsBlocks }) {
  const mappedBlocks = () => {
    return latestsBlocks.map((block) => {
      return <Block block={block} />;
    });
  };

  const render = () => {
    if (latestsBlocks) {
      return mappedBlocks();
    }

    return (
      <div className="flex flex-col gap-2">
        <AiOutlineLoading3Quarters className="animate-spin m-auto" />
        <p className="m-auto">Getting blocks...</p>
      </div>
    );
  };

  return <div className="">{render()}</div>;
}
