import {
    ChakraProvider,
    Box,
    Grid,
    theme,
    Input,
} from "@chakra-ui/react"
import ChatbotResponseBubble from "./components/ChatbotResponseBubble"
import UserResponseBubble from "./components/UserResponseBubble"
import UserInput from "./components/UserInput"
import * as React from "react"
import SidebarWithHeader from "./components/SidebarWithHeader";
import {send_url} from "./util/api_service";


export function App() {
    const [chatMessages, setMessages] = React.useState<string[]>([]);
    const addMessageFunc = (message: string) => {
        let result = [...chatMessages, message];
        send_url(message).then(
            (response) => response.text()
        ).then(summary => {
            result = [...chatMessages, message, summary];
            setMessages(result);
        }).catch((e => {
            result = [...chatMessages, message, e];
            setMessages(result);
        }));
    }

    return (
        <ChakraProvider theme={theme}>
            <SidebarWithHeader>
                <Grid minH="100vh" p={3}>

                    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
                    <Box display="flex" flexDirection="column" justifySelf="center" width="800px" height="500px"
                         overflowY="auto" borderWidth="1px" borderRadius="20px" borderColor="gray.200"
                         p={4} bg="white">
                        {chatMessages.map(function (message, index) {
                            if (index === 0 || index % 2 === 0) {
                                return (
                                    <ChatbotResponseBubble message={message}/>
                                )
                            }
                            return (
                                <UserResponseBubble message={message}/>
                            )
                        })}
                    </Box>
                    <UserInput addMessageFunc={addMessageFunc}/>
                </Grid>
            </SidebarWithHeader>
        </ChakraProvider>
    )
}
