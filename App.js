/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import type {Node} from 'react';
 import Hallo, { Kallo, Nilai, Nama } from './component/hallo';
 import {
   SafeAreaView,
   TouchableOpacity,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';


 const App: () => Node = () => {
   return (
     <View style={styles.container}> 
       <Nilai nilai="MENGGUNAKAN PROPS"/>
       <Kallo />
       <Nama nama="Italilpessy, Wilmore" />
       <Nama nama="Izaac, Bryan" />
       <Nama nama="Sangari, Richard" />
       <Nama nama="Tangka, Perkins" />
       <Nama nama="Thomas, Marchel " />
     </View>

   )
 };

 const styles = StyleSheet.create({
   container : {
     padding : 25,
    },
 });
 
 export default App;
