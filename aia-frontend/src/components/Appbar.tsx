import { Box, Flex, Spacer, Image, Text } from "@chakra-ui/react";
import { Logo } from "../Logo";

function WebsiteAppBar() {
  return (
    <Box bg="gray.100" px={4} py={3} h="50px">
      <Flex alignItems="center">
        <Logo h="20px" pointerEvents="none" />
        <Spacer />
        <Text fontSize="m">Website Name</Text>
        <Spacer />
      </Flex>
    </Box>
  );
}

export default WebsiteAppBar;