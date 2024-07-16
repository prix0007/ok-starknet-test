// Import necessary modules
import { Sheet } from "@okcontract/cells";
import {
  MultiChainRPC,
  LocalRPCSubscriber,
  Address,
  EVMAddress,
} from "@okcontract/multichain";
import { Box, Button } from "@radix-ui/themes";

import ercAbi from "./abi.json"

const MultiChainCall = () => {

  // Create a cells proxy
  const proxy = new Sheet().newProxy();

  // Initialize a multichain instance
  const multi = new MultiChainRPC(proxy);
  // Initialize a local instance -- doing reference counting
  const local = new LocalRPCSubscriber(proxy, multi);

  // Create cells for ABI, contract, method, and args
  const abi = proxy.new(ercAbi);
  const contract = proxy.new({
    chain: "starknet",
    addr: new Address(
      "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
      "strk" 
    )
  });
  const method = proxy.new("symbol");
  const args = proxy.new([]);

  const callFn = () => {
    const data = local.call(contract, abi, method, args);
    console.log(data)
    const next = data.map(v => console.log(v)) 
    console.log(next)
  }

  return <Box>
    <Button onClick={callFn}>Call Multi</Button>
  </Box>
}

export default MultiChainCall
