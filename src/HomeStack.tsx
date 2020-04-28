import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { List } from './List';
import { Add } from './Add';

const screens = {
    List: {
        screen: List
    },
    Add: {
        screen: Add
    }
}

const HomeStack = createStackNavigator(screens)


export default createAppContainer(HomeStack);