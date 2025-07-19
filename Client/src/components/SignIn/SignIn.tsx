import { Button, Box, Field, Flex, Input, InputGroup, Stack, Text } from "@chakra-ui/react"
import { LuUser } from "react-icons/lu"
import { RiMailLine } from "react-icons/ri"
import { PasswordInput } from "../../ui/password-input"
import { type FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  username: z.string().min(3, { message: "Username must be at least 3 characters." }),
  email: z.email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
});

type FormData = z.infer<typeof schema>;



const SignIn = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  }


  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Stack justifyContent="center" marginX={60} gapY={8}>

          <Box>

            <Field.Root>

              <Field.Label>Name</Field.Label>
              <Input {...register("name")} placeholder="Enter your Name" borderRadius={20} />

            </Field.Root>

            <Text color="red.400" fontSize="sm" minHeight="1.5rem">
              {errors.name?.message ?? ""}
            </Text>

          </Box>

          <Box>

            <Field.Root>

              <Field.Label>Username</Field.Label>

              <InputGroup startElement={<LuUser />}>
                <Input {...register("username")} placeholder="Username" borderRadius={20} />
              </InputGroup>

            </Field.Root>

            <Text color="red.400" fontSize="sm" minHeight="1.5rem">
              {errors.username?.message ?? ""}
            </Text>

          </Box>

          <Box>

            <Field.Root>

              <Field.Label>Email</Field.Label>

              <InputGroup startElement={<RiMailLine />}>
                <Input {...register("email")} type="email" placeholder="Enter your Email" borderRadius={20} />
              </InputGroup>

            </Field.Root>

            <Text color="red.400" fontSize="sm" minHeight="1.5rem">
              {errors.email?.message ?? ""}
            </Text>

          </Box>

          <Box>

            <Field.Root>

              <Field.Label>Password</Field.Label>
              <PasswordInput {...register("password")} borderRadius={20} placeholder="Enter your password" />

            </Field.Root>

            <Text color="red.400" fontSize="sm" minHeight="1.5rem">
              {errors.password?.message ?? ""}
            </Text>

          </Box>


          <Flex justifyContent={"center"}>
            <Button type="submit" width="150px" borderRadius={20}>Submit</Button>
          </Flex>

        </Stack>
      </form>

    </>
  )
}

export default SignIn;
