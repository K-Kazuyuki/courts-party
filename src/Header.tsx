import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0, paddingY: 1 }}>
      <Toolbar sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          最高裁判所
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
