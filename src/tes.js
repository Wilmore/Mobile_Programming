/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class tes extends Component {
    constructor(props) {
      super(props)
    

      //state
      this.state = {
         mataKuliah : 'Mobile Programming',
      }
    }

    tes(){
        this.setState({
            mataKuliah: 'MoPro',
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Moblie Programming</Text>
        
        <View style={styles.garis} />

        <View style={styles.isi}>

            {/* diambil dari fungsi state */}
            <Text>State : {this.state.mataKuliah} </Text>

            {/* ke fungsi props */}
            <Props props={'Props : Mobile Programming'}/>

            {/* button */}
            <TouchableOpacity style={styles.button}
             onPress={() => this.tes()}>
                <Text style={{textAlign: 'center', fontWeight:'bold'}}> TES </Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

//props
export function Props({props}) {
    return(
        <View>
            <Text>{props}  </Text>
        </View>
    )
}


// styles
const styles = StyleSheet.create({
    container : {padding : 25},
    title :{
        fontSize :20,
        fontWeight : 'bold',
        textAlign : 'center',
    },
    garis :{
        borderBottomWidth:2,
        marginTop: 1,
    },
    isi :{
        marginTop: 25,
    },
    button :{
        backgroundColor: 'skyblue',
        padding : 7,
        borderRadius: 10,
        marginTop: 15,
    },
})