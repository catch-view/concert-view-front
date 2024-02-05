import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// icons
import MapIcon from '@mui/icons-material/Map';

interface MenuList {
  showAppSidebar: boolean;
}
const MenuList = ({ showAppSidebar }: MenuList) => {
  const navigate = useNavigate();

  return (
    <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: showAppSidebar ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: showAppSidebar ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <MapIcon />
          </ListItemIcon>
          <ListItemText
            primary={'map'}
            sx={{ opacity: showAppSidebar ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </List>
  );
};

export default MenuList;
