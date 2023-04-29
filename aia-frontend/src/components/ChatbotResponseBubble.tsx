import { Box } from "@chakra-ui/react";

function ChatbotResponseBubble({message}:{message:string}) {
  return (
    <Box textAlign="start" borderWidth='2px' borderRadius='lg' bgColor="orange.100" m="5px" p="2px">
            {message}
          </Box>
  );
}

export default ChatbotResponseBubble;

