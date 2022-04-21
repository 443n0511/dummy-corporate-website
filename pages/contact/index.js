import { Layout } from "../../components/templates/Layout";
import { useState, memo } from "react";
import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

const validations = {
  name: {
    maxLength: 20,
    minLength: 3,
    isValid: (e) => {
      return (
        validations.name.maxLength > e.target.value.length &&
        e.target.value.length > validations.name.minLength
      );
    },
  },
  email: {
    isValid: (e) => /.+@.+\..+/.test(e.target.value),
  },
};

const ContactHome = memo(() => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [isError, setIsError] = useState({
    name: false,
    email: false,
  });
  //const mailCheck = (input) => /.+@.+\..+/.test(input);
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    console.log(validations[e.target.id].isValid(e));
    validations[e.target.id].isValid(e) && e.target.value !== ""
      ? setIsError({ ...isError, [e.target.id]: false })
      : setIsError({ ...isError, [e.target.id]: true });
  };
  return (
    <Layout
      title='お問い合わせ | 株式会社Sample'
      description='株式会社Sampleのお問い合わせページ'>
      <Box
        as='section'
        bg='white'
        w='90%'
        p={5}
        align='center'
        py={{ base: "40px", lg: "80px" }}
        mx='auto'>
        <Heading
          as='h2'
          fontWeight='bold'
          m={10}
          fontSize={{ base: "4xl", md: "6xl" }}>
          Contact
        </Heading>
        <Box
          as='form'
          w='70%'
          p={10}
          borderRadius={20}
          mx='auto'
          bgColor='gray.100'>
          <FormControl
            mx='auto'
            pb={4}
            id='emailBox'
            isInvalid={isError.email}
            isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              bgColor='white'
              id='email'
              type='email'
              placeholder='hogehoge@hoge.com'
              value={input.email}
              onChange={handleInputChange}
            />
            {isError.email && (
              <FormErrorMessage>
                メールアドレスが空欄・もしくは形式が異なっています。
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            id='nameBox'
            mx='auto'
            pb={4}
            isInvalid={isError.name}
            isRequired>
            <FormLabel htmlFor='name'>お名前</FormLabel>
            <Input
              id='name'
              type='name'
              bgColor='white'
              value={input.name}
              onChange={handleInputChange}
              placeholder='山田太郎'
            />
            {isError.name && (
              <FormErrorMessage>
                3文字以上20文字以下にしてください
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl id='formClassification' pb={4}>
            <FormLabel htmlFor='classification'>お問い合わせの種類</FormLabel>
            <Select
              bgColor='white'
              id='classification'
              placeholder='お問い合わせの種類'>
              <option>商品について</option>
              <option>それ以外</option>
            </Select>
          </FormControl>
          <FormControl mx='auto' pb={4} id='textareaBox' isRequired>
            <FormLabel htmlFor='textarea'>お問い合わせ内容</FormLabel>
            <Textarea
              bgColor='white'
              id='textarea'
              type='textarea'
              placeholder='お問い合わせの内容'
            />
          </FormControl>
          <Button mt={4} colorScheme='teal' type='submit'>
            送信する
          </Button>
        </Box>
      </Box>
    </Layout>
  );
});

export default ContactHome;
