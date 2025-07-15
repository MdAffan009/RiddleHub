import {Button, Field, Input, InputGroup, Stack } from "@chakra-ui/react"
import { LuUser } from "react-icons/lu"
import { RiMailLine } from "react-icons/ri"
import { PasswordInput } from "../../ui/password-input"


const SignIn = () => {
  return (
    <>

      <Stack justifyContent="center" marginX={60} gapY={10}>

        <Field.Root>

          <Field.Label>Name</Field.Label>
          <Input placeholder="Enter your Name" borderRadius={20} />

        </Field.Root>


        <Field.Root>

          <Field.Label>Username</Field.Label>

          <InputGroup startElement={<LuUser />}>
            <Input placeholder="Username" borderRadius={20} />
          </InputGroup>

        </Field.Root>


        <Field.Root>
          <Field.Label>Email</Field.Label>

          <InputGroup startElement={<RiMailLine />}>
            <Input placeholder="Enter your Email" borderRadius={20} />
          </InputGroup>

        </Field.Root>

        <Field.Root>
          <Field.Label>Password</Field.Label>
          <PasswordInput borderRadius={20} />
          <Field.ErrorText></Field.ErrorText>
        </Field.Root>

        <Button maxWidth="150px" marginLeft={40} borderRadius={20}>Submit</Button>

      </Stack>

    </>
  )
}

export default SignIn
