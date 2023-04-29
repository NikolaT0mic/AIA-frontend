import {
    Text,
    Input,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'

import * as React from "react"

export type UserInputProps = {
    addMessageFunc: (message: string) => void;
}

function UserInput({ addMessageFunc }: UserInputProps) {
    const [value, setValue] = React.useState('')
    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => setValue(event.target.value)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && value !== "") {
            addMessageFunc(value);
            setValue('');
        }
    }

    const iconClick = () => {
        if (value !== "") {
            addMessageFunc(value);
            setValue('');
        }
    }

    return (
        <>
            <InputGroup maxWidth="80%" justifySelf="center" alignContent="center">
                <Input
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder='Here is a sample placeholder'
                    size='sm'
                    justifySelf="center"
                    bg="white"
                />
                <InputRightElement onClick={iconClick} children={<CheckIcon color='green.500' alignSelf="center" />} />
            </InputGroup>
        </>
    )
}

export default UserInput;
