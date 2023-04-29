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
        if (event.key === 'Enter') {
            addMessageFunc(value);
            setValue('');
        }
    }

    return (
        <>
            <InputGroup maxWidth="80%" justifySelf="center">
                <Input
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder='Here is a sample placeholder'
                    size='sm'
                    justifySelf="center" 
                />
                <InputRightElement children={<CheckIcon color='green.500' />} />
            </InputGroup>
        </>
    )
}

export default UserInput;
