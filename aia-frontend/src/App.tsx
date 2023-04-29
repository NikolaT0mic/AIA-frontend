import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Input,
} from "@chakra-ui/react"
import ChatbotResponseBubble from "./components/ChatbotResponseBubble"
import UserResponseBubble from "./components/UserResponseBubble"
import WebsiteAppBar from "./components/Appbar"
import UserInput from "./components/UserInput"
import * as React from "react"

export function App() {
  const [chatMessages, setMessages] = React.useState<string[]>([]);
  const addMessageFunc = (message: string) => {
    setMessages([ ...chatMessages, message])
    console.log(chatMessages)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <WebsiteAppBar></WebsiteAppBar>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box justifySelf="center" justifyContent="center" width="800px" height="500px" overflowY="auto" borderWidth="1px" borderColor="gray.200"
            borderRadius="md" p={4} verticalAlign="middle">
            <ChatbotResponseBubble message="test1"/>
            <UserResponseBubble message="test1"/>
            <ChatbotResponseBubble message="test2"/>
            <UserResponseBubble message="test2"/>
            <ChatbotResponseBubble message="test3"/>
            <UserResponseBubble message="test3"/>
              {chatMessages.map(function (message, index) {
                if(index === 0 || index%2===0) {
                  return (
                    <ChatbotResponseBubble message={message} />
                  )
                }
                return (
                  <UserResponseBubble message={message} />
                )
              })}
              
          </Box>
          <UserInput addMessageFunc={addMessageFunc}/>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
