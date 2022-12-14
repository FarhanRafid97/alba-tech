import { Button, Text, Flex, Heading, Box } from '@chakra-ui/react';
import progres from './progres.json';
import CountUp from 'react-countup';
interface ProgresProps {}

const Progres: React.FC<ProgresProps> = ({}) => {
  return (
    <Flex
      mt="60px"
      w="100vw"
      p={['41px 20px', '41px 20px', '21px', '41px']}
      direction="column"
      alignItems="center"
      bg="#272727"
      height={['330px', '290px', '271px', '271px']}
      justifyContent="space-between"
    >
      <Text
        w={['full', 'full', '682px', '682px']}
        color="albaPrimary"
        fontWeight="bold"
        fontSize={['18px', '18px', '22px', '24px']}
        textAlign="center"
      >
        Our Progress Come With a Collabortaion Between Creativity,Ideas and Technology
      </Text>
      <Flex
        direction={['column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        gap="15px"
        w={['80%', '100%', '90%', '80%']}
      >
        {progres.map((prog) => (
          <Flex
            direction="column"
            fontSize={['14px', '14px', '20px', '26px']}
            alignItems="center"
            key={prog.name}
            color="white"
          >
            <Text fontWeight="medium">
              <CountUp
                start={prog.start}
                end={prog.progres}
                duration={1.5}
                enableScrollSpy={true}
                scrollSpyDelay={100}
              />
              +
            </Text>
            <Text fontWeight="light">{prog.name}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Progres;
