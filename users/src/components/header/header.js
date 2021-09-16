import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolbar} from "./styled"
import {useHistory} from "react-router-dom"
import { goToPage2 } from '../../routes/coordinator';

const Header = () => {
 const history = useHistory()
  return (
    
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToPage2(history)} color="inherit">Proxima Página</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}
export default Header
