import React from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import { createStore } from "redux";
import Reducers from "./reducers";
import TabBarList from "./TabBarList"

const App = () => {
    return(
    <Provider store={createStore(Reducers)}>
         <View style={{flex: 1}}>
         <TabBarList/>
         </View>
    </Provider>
    )
}
export default App