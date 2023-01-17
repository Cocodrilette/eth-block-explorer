import { useEffect, useState } from "react";

import Blocks from "./components/Blocks";
import Header from "./components/Header";
// import Search from "./components/Search";
import { provider } from "./lib/eth";

function App() {
  const [latestsBlocks, setLatestBlocks] = useState();

  useEffect(() => {
    async function getLatestsBlocks() {
      const latestsBlocks = await provider.getLatestBlocks();
      setLatestBlocks(latestsBlocks);
    }
    getLatestsBlocks();
  }, []);

  return (
    <div>
      <Header />
      <main>
        {/* <section>
          <Search />
        </section> */}
        <section className="flex flex-col gap-3 mb-20 bg-slate-50 shadow-md p-5 rounded-md">
          <h2 className="text-3xl">Latests blocks</h2>
          <Blocks latestsBlocks={latestsBlocks} />
        </section>
      </main>
    </div>
  );
}

export default App;
