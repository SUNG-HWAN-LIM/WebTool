import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";


const Header = styled.header`;
color: white;
position: fixed;
top: 0;
left:0 ;
width: 100%;
height: 40px;
display: flex;
align-items: center;
background-color: rgba(20, 20, 20, 0.8);
z-index: 10;
box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  display: flex;

`;

const Item = styled.li`
  width: 200px; 
  height: 50px;
  text-align: center;
  border-bottom: 2px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 1.0s ease-in-out;
  `;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List >
            <Item current={pathname === "/"}>
                <SLink to="/">Home</SLink>
         </Item>
            <Item current={pathname === "/C2"}>
                <SLink to="/C2">Galaxy</SLink>
         </Item>
            <Item current={pathname === "/C3"}>
                <SLink to="/C3">Apple</SLink>
         </Item>
            <Item current={pathname === "/C4"}>
                <SLink to="/C4">LG</SLink>
         </Item>
            <Item current={pathname === "/C5"}>
                <SLink to="/C5">?</SLink>
         </Item>
         <Item current={pathname === "/C6"}>
                <SLink to="/C6">고객센터</SLink>
         </Item>
            <Item current={pathname === "/C7"}>
                <SLink to="/C7">마이페이지</SLink>
         </Item>
            <Item current={pathname === "/C8"}>
                <SLink to="/C8">Login</SLink>
         </Item>
        </List>
    </Header>



));