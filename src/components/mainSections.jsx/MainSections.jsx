import "./mainsections.scss";
import TopSection from "../topSection/TopSection";
import MiddleSection from "../middleSection/MidddleSection";
import BottomSection from "../bottomSection/BottomSection";

const MainSections = () => {
  return (
    <div className="mainsection">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default MainSections;
