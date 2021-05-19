import "../css/homePage.css";
import { useSelector } from "react-redux";
import HomePageBackGround from "./HomePageBackGround";
import HomePageSearchDetails from "./HomePageSearchDetails";

interface HomePageProps {
  posterImgs: string[];
  backdropImgs: string[];
}

const HomePage = ({ posterImgs, backdropImgs }: HomePageProps) => {
  const homePageState = useSelector((state: any) => state.homePageReducer);

  if (homePageState.mode === 0) {
    return (
      <HomePageBackGround posterImgs={posterImgs} backdropImgs={backdropImgs} />
    );
  } else {
    return <HomePageSearchDetails />;
  }
};

export { HomePage };
