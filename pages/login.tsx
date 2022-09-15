import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getCsrfToken, signIn } from 'next-auth/react';
import { FormLabel, Button, Heading, Flex, Box, Input, useToast } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layouts/Layout';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};

const Login: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ csrfToken }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useRouter().query;
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: 'Email Or Password Invalid',
        status: 'error',
        duration: 9000,
        position: 'top',
        isClosable: true,
      });
    }
  }, [error, toast]);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profile',
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <Layout>
      <Head>
        <title>Login - Alba Tech</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={`login page for alba tech `} />
        <link rel="shortcut icon" sizes="1x2" href="/assets/logo.png" />
      </Head>
      <Flex
        w="full"
        direction="column"
        h="100vh"
        bgImage="/assets/texutre.png"
        bgRepeat="no-repeat"
        pt="200px"
        rowGap="25px"
        alignItems="center"
      >
        <Box bg="white" p="35px" boxShadow="md" borderRadius="8px">
          <Heading textAlign="center" mb={4}>
            Login
          </Heading>
          <form onSubmit={onSubmit}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Box w="400px">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@email.com"
                name="email"
                type="email"
                id="email"
              />
              <FormLabel mt={4} htmlFor="password">
                Password
              </FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="********"
                name="password"
                type="password"
                id="password"
              />
            </Box>
            <Button type="submit" isLoading={loading} bg="albaPrimary" mt={4} w="full">
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Login;
