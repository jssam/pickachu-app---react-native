import { createAppContainer } from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";
import home from "./src/screens/home";

const sanyam = createStackNavigator(
  {
    Home : {
      screen:home
    }
  },
  {
    intialRouteNAme: "Home",
    defaultNavigationOption:{
      title:"picka"
    }
  }
);
export default createAppContainer(sanyam);