import { Button } from '@chakra-ui/react';
interface ButtonAlbaProps {
  text: string;
  borderColor?: string;
}

const ButtonAlba: React.FC<ButtonAlbaProps> = ({ text, borderColor }) => {
  return (
    <Button
      w={['100px', '124px', '144px', '188px']}
      h={['47px', '43px', '57px', '57px']}
      bgColor="albaPrimary"
      _hover={{ boxShadow: '12px 7px 24px -5px rgba(255,206,7,1)' }}
      borderRadius="30px"
      border={!borderColor ? '1px solid #FFCE07' : '1px solid black'}
      fontSize={['12px', '14px', '14px', '14px']}
    >
      {text}
    </Button>
  );
};

export default ButtonAlba;
