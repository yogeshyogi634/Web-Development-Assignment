import "./sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <div className="wrapper"> */}
      <div className="top">
        <blockquote className="block">
          <HomeIcon className="icon" id="iconBlue" />
        </blockquote>
        <InsertChartOutlinedIcon className="icon" />
        <BookmarkAddedOutlinedIcon className="icon" />
        <AccountBalanceWalletOutlinedIcon className="icon" />
        <LibraryAddCheckOutlinedIcon className="icon" />
      </div>
      <div className="bottom">
        <PowerSettingsNewIcon className="icon" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
