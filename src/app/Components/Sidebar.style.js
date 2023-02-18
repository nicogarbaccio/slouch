import styled from 'styled-components'

export const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 46px;
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 2rem;
        background-color: white; 
        border-radius: 999px;
        margin-top: 10px;
    }
`;

export const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
        padding: 5px;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;