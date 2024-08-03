import "./bottomsection.scss";
import { customers, lists } from "./data";
import GradeIcon from "@mui/icons-material/Grade";

const BottomSection = () => {
  return (
    <div className="bottomsection">
      <div className="wrapper">
        <div className="left">
          <h1>Recent Orders</h1>
          {lists.map((list) => (
            <div className="detailsContainer" key={list.id}>
              <div className="details">
                <div className="detailsNameImg">
                  {/* <div className="detailsImg">
                    <img src={list.img} alt="" />
                  </div> */}
                  {list.img && (
                    <div className="detailsImg">
                      <img src={list.img} alt={list.name} />
                    </div>
                  )}
                  <p>{list.name}</p>
                </div>
                <p>{list.orderNo}</p>
                <p>{list.amount}</p>
                <p
                  style={{
                    color:
                      list.status === "Delivered"
                        ? "green"
                        : list.status === "Status"
                        ? "white"
                        : "red",
                  }}
                >
                  {list.status}
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="right">
          <div className="rightWrapper">
            <h1>Customer's Feedback</h1>
            {customers.map((customer) => (
              <div className="rightContainer">
                <div className="rightImgtext">
                  <div className="imgText">
                    <img src={customer.img} alt="" />
                  </div>
                  <p>{customer.name}</p>
                </div>
                <div className="ratings">
                  <GradeIcon />
                  <GradeIcon />
                  <GradeIcon />
                  <GradeIcon />
                  <GradeIcon />
                </div>
                <div className="desc">{customer.desc}</div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
