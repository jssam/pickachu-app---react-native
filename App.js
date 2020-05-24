import { createAppContainer } from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";
import home from "./src/screens/home";
import listofcartoons from "./src/screens/listofcartoons";
import picscartoons from "./src/screens/picscartoons";


const sanyam = createStackNavigator(
  {
    Home : {
      screen:home
    },
    Home1 : {
      screen:listofcartoons
    },
    Home2 : {
      screen: picscartoons
    }

  },
  {
    intialRouteName: "Home",
    defaultNavigationOptions:{
      title: "picka"
    }
  }
);
export default createAppContainer(sanyam);