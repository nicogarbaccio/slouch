import React from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { auth } from '../../firebase';

function Header() {
    // const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar
                alt={auth.currentUser.displayName}
                src={auth.currentUser.photoURL}
                // alt={user?.displayName}
                // src={user?.photoURL}
                onClick={() => auth.signOut()}
            />
            <AccessTimeIcon />
        </HeaderLeft>
        <HeaderSearch>
            <SearchIcon />
            <input type="text" placeholder="Search"></input>
        </HeaderSearch>
        <HeaderRight>
            <HelpOutlineIcon />
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderSearch = styled.div`
    display: flex;
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;
    border: 1px solid gray;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin-left: 20px;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;