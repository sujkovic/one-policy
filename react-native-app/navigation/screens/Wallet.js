import React from "react";
import { View, ScrollView, scrollTo } from "react-native";
import { StyleSheet } from 'react-native';
// import { styles, windowWidth, windowHeight } from "../../styles/Styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Policy from './waller-screens/Policy';

const ROW_HEIGHT = 467;
export function scrollToEvent(index) {
  this._scrollView.scrollTo({ y: index * ROW_HEIGHT });
}

const policiesJSON = require('../../data/samplePolicies.json');
const policies = policiesJSON.policies;

export default function Wallet() {
  return (
      <View style={styles.container}>
        <ScrollView>
          {policies.map((policy, index) => (
            <View key={index}>
              <Policy policy={policy} />
            </View>
          ))}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    }
})