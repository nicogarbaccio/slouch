import React from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
  return (
    <HeaderContainer>
        {/* Header left */}
        <HeaderLeft>
            <HeaderAvatar
                // TODO: Add onClick
            />
            <AccessTimeIcon />
        </HeaderLeft>
        {/* Header search */}
        <HeaderSearch>

        </HeaderSearch>
        {/* Header right */}
    </HeaderContainer>
  )
}

export default Header

const HeaderSearch = styled.div`
    
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

const HeaderAvatar = styled(AccountCircleIcon)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;