import { Box } from "@chakra-ui/react";

function UserResponseBubble({message}:{message:string}) {
    return (
        <Box justifySelf="end" textAlign="end" borderWidth='2px' bgColor="gray.100" borderRadius='lg' m="5px" p="4px" minW="250px" width="fit-content">
            {message}
        </Box>
    );
  }
  
  export default UserResponseBubble;