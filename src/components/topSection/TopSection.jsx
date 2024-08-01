import "./topsection.scss";

const TopSection = () => {
  return (
    <div className="topsection">
      <div className="wrapper">
        <div className="left">
          {/* BOX */}
          <div className="box">
            <div className="boxImg">
              <img src="/bag.png" alt="" />
            </div>
            <div className="boxCount">Total Orders</div>
            <div className="boxNum">
              <h1>75</h1>
              <h4 className="boxInc">▲5%</h4>
            </div>
          </div>
          {/* BOX1 */}
          <div className="box1">
            <div className="boxImg1">
              <img src="/bag.png" alt="" />
            </div>
            <div className="boxCount">Total Delivered</div>
            <div className="boxNum">
              <h1>70</h1>
              <h4 className="boxDec">▼3%</h4>
            </div>
          </div>
          {/* BOX2 */}
          <div className="box2">
            <div className="boxImg2">
              <img src="/bag.png" alt="" />
            </div>
            <div className="boxCount">Total Cancelled</div>
            <div className="boxNum">
              <h1>05</h1>
              <h4 className="boxInc">▲3%</h4>
            </div>
          </div>
          {/* BOX3 */}
          <div className="box3">
            <div className="boxImg3">
              <img src="/dollar.png" alt="" />
            </div>
            <div className="boxCount">Total Revenue</div>
            <div className="boxNum">
              <h1>$112k</h1>
              <h4 className="boxDec">▼3%</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightWrapper">
            <div className="leftSide">
              <p>Net Profit</p>
              <h1>$ 6749.25</h1>
              <h4 className="boxDec">▲3%</h4>
            </div>
            <div className="rightSide">
              <div className="circle">
                <div className="innerCircle">
                  100%
                  <span>Goal Completed</span>
                </div>
              </div>
              <div className="text">*The value here has been rounded off.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
