import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Input,
  Spinner,
} from "@chakra-ui/react"
import ChatbotResponseBubble from "./components/ChatbotResponseBubble"
import UserResponseBubble from "./components/UserResponseBubble"
import UserInput from "./components/UserInput"
import * as React from "react"
import SidebarWithHeader from "./components/SidebarWithHeader";
import { send_businesscase, send_url } from "./util/api_service";


export function App() {
  const [loading, setLoad] = React.useState<boolean>();
  const [chatMessages, setMessages] = React.useState<string[]>(["Enter a website url so I can find resources and understand what kind of Bussiness you have. If you do not have a website you can just input your businesscase"]);
  const [questions, setQuestions] = React.useState<string[]>([]);
  const [answers, setAnswer] = React.useState<string[]>([]);

  const addMessageFunc = (message: string) => {
    let result = [...chatMessages, message];
    setLoad(true);
    if (message.includes("https://")) {
      send_url(message).then(
        (response) => response.text()
      ).then(summary => {
        result = [...chatMessages, message, summary];
        setMessages(result);
        setLoad(false);
      }).catch((e => {
        result = [...chatMessages, message, "Error"];
        setMessages(result);
        setLoad(false);
      }));
    } else if (chatMessages.length <= 4 && questions.length === 0) {
      send_businesscase(message).then(
        (response) => response.text()
      ).then(summary => {
        interface QuestionObject {
          question: string;
          type: string;
        }

        const jsonArray: QuestionObject[] = JSON.parse(summary);

        const questions = jsonArray.map(obj => obj.question);

        console.log(questions);
        result = [...chatMessages, message, questions[0]];
        setQuestions(questions.slice(1));
        setMessages(result);
        setLoad(false);
      }).catch((e => {
        result = [...chatMessages, message, "Error"];
        setMessages(result);
        setLoad(false);
      }));
    } else if(questions.length > 1) {
      result = [...chatMessages, message, questions[0]];
      setAnswer([...answers, message])
      setQuestions(questions.slice(1));
      setMessages(result);
      console.log(answers);
      setLoad(false);
    } else {
      result = [...chatMessages, message, questions[0]];
      setAnswer([...answers, message])
      setQuestions(questions.slice(1));
      setMessages(result);
      console.log(answers);
      console.log("Now send to server")
      setLoad(false);
    }
  }

  const spinner = <Spinner
    justifySelf="center"
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />;

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
                  <ChatbotResponseBubble message={message} />
                )
              }
              return (
                <UserResponseBubble message={message} />
              )
            })
            }
            {loading ? spinner : <></>}
          </Box>
          <UserInput addMessageFunc={addMessageFunc} />
        </Grid>
      </SidebarWithHeader>
    </ChakraProvider>
  )
}
