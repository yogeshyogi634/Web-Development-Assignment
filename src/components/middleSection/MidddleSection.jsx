import "./middlesection.scss";

const MiddleSection = () => {
  return (
    <div className="middlesection">
      <div className="wrapper">
        <div className="left">
          <div className="top">
            <p>Activity</p>
            <button>Weekly</button>
          </div>
          <div className="bottom">
            <div className="graph">
              <p>15k</p>
              <hr />
            </div>
            <div className="graph">
              <p>10k</p>
              <hr />
            </div>
            <div className="graph">
              <p>5k</p>
              <hr />
            </div>
          </div>
          <div className="graphWrapper">
            <div className="graph">
              <p>0</p>
              <hr />
            </div>
            <div className="number">
              <span>5</span>
              <span>9</span>
              <span>13</span>
              <span>15</span>
              <span>17</span>
              <span>19</span>
              <span>21</span>
              <span>23</span>
              <span>25</span>
              <span>27</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightContainer">
            <div className="rightImgText">
              <div className="rightImg1">
                <img src="/goals.png" alt="" />
              </div>
              <p>Goals</p>
            </div>
            <div className="arrow">
              <span>&gt;</span>
            </div>
          </div>
          <div className="rightContainer">
            <div className="rightImgText">
              <div className="rightImg2">
                <img src="/burger.png" alt="" />
              </div>
              <p>Popular Dishes</p>
            </div>
            <div className="arrow">
              <span>&gt;</span>
            </div>
          </div>
          <div className="rightContainer">
            <div className="rightImgText">
              <div className="rightImg3">
                <img src="/menus.png" alt="" />
              </div>
              <p>Menus</p>
            </div>
            <div className="arrow">
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
