import { Button } from '@chakra-ui/react';
interface ButtonAlbaProps {
  text: string;
}

const ButtonAlba: React.FC<ButtonAlbaProps> = ({ text }) => {
  return (
    <Button
      w={['100px', '124px', '144px', '188px']}
      h={['47px', '43px', '57px', '57px']}
      bg="#FFCE07"
      _hover={{ boxShadow: '12px 7px 24px -5px rgba(255,206,7,1)' }}
      borderRadius="30px"
      fontSize={['12px', '14px', '14px', '14px']}
    >
      {text}
    </Button>
  );
};

export default ButtonAlba;
