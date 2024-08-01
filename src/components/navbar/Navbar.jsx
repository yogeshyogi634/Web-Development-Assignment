import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <GridViewRoundedIcon className="logo" />
      </div>
      {/* <div className="wrapper"> */}
      <div className="search">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon className="searchIcon" />
      </div>
      <div className="userIcons">
        <div className="userIcon">
          <MailOutlineOutlinedIcon className="icon" />
        </div>
        <div className="userIcon">
          <SettingsOutlinedIcon className="icon" />
        </div>
        <div className="userIcon">
          <NotificationsNoneOutlinedIcon className="icon" />
        </div>
        <div className="userIcon">
          <img
            src="https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg"
            alt="profile"
            className="imgIcon"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
