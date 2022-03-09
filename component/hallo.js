/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

// mengambil nilai menggunakan props dari app.js
export function Nilai(props) {
  return (
    <View>
      <Text style={styles.title}>TAMBAH KURANG NILAI {props.nilai}</Text>
    </View>

  )
}

// mengambil nama menggunakan props dari app.js
export function Nama(props) {
  return (
    <View>
      <Text  style={styles.center}>{props.nama}</Text>
    </View>
  )
}

export function Kallo() {

  const [angka, rubahNilai] = useState(0)

  return (
    <SafeAreaView >


      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:30}}>
        <TouchableOpacity onPress={() => rubahNilai(angka - 1)}>
          <View>
            <Text style={styles.icon}>
              (-)
            </Text>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>
            {angka}
          </Text>
        </View>

        <TouchableOpacity onPress={() => rubahNilai(angka + 1)}>
          <View>
            <Text style={styles.icon}>(+)</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginBottom:20, alignSelf:'center'}}>
        <TouchableOpacity onPress={() => rubahNilai(0)}>
          <View style={{marginTop:10}}>
            <Text style={styles.reset}>
              Reset
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container : {padding : 25},
    // flex : {
    //   flexDirection: 'row',
    // },
    icon : {
      fontSize: 25,
      color: 'skyblue',
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    center : {
      textAlign: 'center',
      fontSize: 15,
      fontWeight:'bold',
    },
    title :{
        fontSize :20,
        fontWeight : 'bold',
        textAlign : 'center',
    },
    garis :{
        borderBottomWidth:2,
        marginTop: 1,
    },
    button :{
        backgroundColor: 'skyblue',
        padding : 7,
        borderRadius: 10,
        marginTop: 15,
    },
    reset :{
      textAlign: 'center',
      color: 'white',
      fontSize : 18,
      marginTop: 15,
      backgroundColor: 'red',
      padding : 7,
      borderRadius: 10,
      width:80,
    },
})