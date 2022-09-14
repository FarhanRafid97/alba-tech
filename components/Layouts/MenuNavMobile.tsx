import {
  Menu,
  MenuButton,
  MenuItem,
  Text,
  MenuList,
  Link,
} from '@chakra-ui/react';
import { HiMenuAlt3 } from 'react-icons/hi';
import navMenu from './navMenu.json';
interface MenuNavMobileProps {}

const MenuNavMobile: React.FC<MenuNavMobileProps> = ({}) => {
  return (
    <Menu direction="rtl">
      <MenuButton>
        <HiMenuAlt3 />
      </MenuButton>
      <MenuList fontSize="14px" columnGap="15px">
        {navMenu.map((menu) => (
          <MenuItem key={menu.name}>
            <Text>{menu.name}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuNavMobile;
