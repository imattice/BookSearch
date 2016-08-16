/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'

var Search = require('./Search')

import Featured from './Featured'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

class BookSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'featured'
    }
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          title='Featured'
          selected={this.state.selectedTab === 'featured'}
          systemIcon='featured'
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            })
          }}>
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Search'
          selected={this.state.selectedTab === 'search'}
          systemIcon='search'
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            })
          }}>
          <Search />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BookSearch', () => BookSearch);
