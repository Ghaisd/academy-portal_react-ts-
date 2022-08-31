import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

export default function LanguageMenu() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };
  return (
    <Box maxHeight={0} display='inline' zIndex={100000}>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='info'
      >
        {t('Language')}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ color: 'black' }} onClick={() => changeLanguage('en')}>
          {t('English')}
        </MenuItem>
        <MenuItem sx={{ color: 'black' }} onClick={() => changeLanguage('no')}>
          {t('Norwegian')}
        </MenuItem>
      </Menu>
    </Box>
  );
}
