import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
 
  return (
    <AppBar position="static">
      <Container maxWidth='xl'>
        <Toolbar >
          <Typography variant="h5" color="rgba(194, 105, 255, 1)" flexGrow="1" textAlign="center">
           Mortgage Calculator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;