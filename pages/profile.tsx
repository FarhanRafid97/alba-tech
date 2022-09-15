import { Avatar, Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layouts/Layout';
import { authOptions } from './api/auth/[...nextauth]';
import { signOut } from 'next-auth/react';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);

  const hidetoken = session?.user.token
    .split('')
    .map((d) => '*')
    .join('');
  console.log(hidetoken);

  return (
    <Layout>
      <Head>
        <title>Dan Abrahmov - Alba Tech</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={`Porifle from dan abramov`} />
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
        <Box maxW="320px" w="full" bg="white" boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
          <Box w="full">
            <Image
              height="130px"
              width="320px"
              src={
                'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              }
              alt="banner"
              objectFit="cover"
            />
          </Box>
          <Flex justify="center" mt={-12}>
            <Avatar
              size="xl"
              src={'https://bit.ly/dan-abramov'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align="center" mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily="body">
                Dan Abrahmov
              </Heading>
              <Text color="gray.500">Frontend Developer</Text>
            </Stack>

            <Stack direction="row" justify="center" spacing={6}>
              <Text>{show ? session?.user.token : hidetoken}</Text>
            </Stack>

            <Button
              w="full"
              mt={8}
              bg="albaPrimary"
              color="black"
              rounded="md"
              onClick={() => setShow(!show)}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              {show ? 'Hide Token' : 'Show Token'}
            </Button>
            <Button
              w="full"
              mt={4}
              colorScheme="red"
              color="white"
              rounded="md"
              onClick={() => signOut()}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Profile;
