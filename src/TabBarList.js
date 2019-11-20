import * as React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import SuperheroesList from "./superheroesList"
import * as actions from "./actions"
import { connect } from "react-redux";
 
const FirstRoute = () => (
    <Text>primero</Text>
);
 
const SecondRoute = () => (
<Text>segundo</Text>
);
const TerceraRuta = () => (
    <SuperheroesList/>
)
 
 class TabBarList extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'prmiero' },
      { key: 'second', title: 'segundo' },
      { key: 'tres', title: 'tercero'}
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          tres:TerceraRuta
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default connect(null, actions)(TabBarList)