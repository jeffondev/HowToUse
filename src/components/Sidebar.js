import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";


import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import "Sidebar.css";
const App = () => {
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={<MenuRoundedIcon onClick={() =>{collapseSidebar();}}/>}
          >
            <h2>sidebar</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="/" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            홈페이지
          </MenuItem>
          
          <MenuItem
            component={<Link to="/uses/my" className="link" />}
            icon={<ReceiptRoundedIcon />}
          >
            나의 글
          </MenuItem>
          
          <MenuItem
            component={<Link to="/uses/create" className="link" />}
            icon={<BarChartRoundedIcon />}
          >
            글 작성
          </MenuItem>

          <MenuItem
            component={<Link to="/" className="link" />}
            icon={<WalletRoundedIcon />}
          >
            내 정보
          </MenuItem>

          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="/logout" className="link" />}
            icon={<LogoutRoundedIcon />}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>

    </div>
  );
};
export default App;




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const StyledSidebar = styled.div`
//   background: gray;
//   flex: 1;
// `;

// function Sidebar() {
//   const navigate = useNavigate();
//   const onClick = (event) => {
//     const {
//       target : {name},
//     } = event;
//     if(name === "home") {
//       navigate("/");
//     } else if(name ==="myuse") {
//       navigate("/uses/my");
//     } else if(name ==="create") {
//         navigate("/uses/create");
//     } else if(name ==="profile") {
//       navigate("/profile");
//     }
    
//   };
//   return (
//     <>
//       <StyledSidebar>
//         사이드바 영역

//         <ul>
//           <li>
//             <input
//               onClick={onClick}
//               name="home"
//                 type="submit"
//                 value="홈"
//             />
//           </li>
//           <li>
//             <input
//             onClick={onClick}
//             name="myuse"
//               type="submit"
//               value="나의 글"
//             />
//           </li>
//           <li>
//             <input
//             onClick={onClick}
//             name="create"
//               type="submit"
//               value="글 작성"
//             />
//           </li>
//           <li>
//             <input
//               onClick={onClick}
//               name="profile"
//               type="submit"
//               value="내 정보"
//             />
//           </li>
          
//         </ul>
//       </StyledSidebar>
      
//     </>
//   )
// }

// export default Sidebar;