import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  background: gray;
  flex: 1;
`;

function Sidebar() {
  return (
    <>
      <StyledSidebar>사이드바 영역</StyledSidebar>
    </>
  )
}

export default Sidebar;
// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import SidebarItem from "components/SidebarItem";
// import profile from "img/profile";


// const Side = styled.div`
//   display: flex;
//   border-right: 1px solid #e0e0e0;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 20%;
// `
// const Profile = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 100%;
// `
// const Menu = styled.div`
//   margin-top: 30px;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
// `

// function Sidebar() {
//   const menus = [
//     { name: "홈", path: "/" },
//     { name: "/uses/my", path: "/uses/my" },
//     { name: "/uses/create", path: "/uses/create" },
//     { name: "설정", path: "/"}
//   ];
//   return (
//     <Side>
//       <Profile src={profile}></Profile>
//       <Menu>
//         {menus.map((menu, index) => {
//           return (
//             <NavLink
//               exact
//               style={{color: "gray", textDecoration: "none"}}
//               to={menu.path}
//               key={index}
//               activeStyle={{color: "black"}}
//             >
//               <SidebarItem
//                 menu={menu}
//               />
//             </NavLink>
//           );
//         })}
//       </Menu>
//     </Side>
//   );
// }

// export default Sidebar;