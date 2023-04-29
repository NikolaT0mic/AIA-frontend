import { Box } from "@chakra-ui/react";

function UserResponseBubble({message}:{message:string}) {
    return (
        <Box textAlign="end" borderWidth='2px' bgColor="gray.100" borderRadius='lg' m="5px" p="2px">
            {message}
        </Box>
    );
  }
  
  export default UserResponseBubble;