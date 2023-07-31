import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';


const Stack= createNativeStackNavigator();


export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}} // retirar os header da pagina
            />

            <Stack.Screen 
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}} // retirar os header da pagina
            />
            <Stack.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}} // retirar os header da pagina
            />
        </Stack.Navigator>
    )

}