import { Flex, Text, Button } from '@radix-ui/themes';
import MultiChainCall from './components/multichain';

export default function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
      <MultiChainCall />
    </Flex>
  );
}
