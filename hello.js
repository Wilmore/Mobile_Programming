/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
// import { style } from '../assets/style';

// export default function Hallo(props) {
//     const[nilai, rubahNilai]=useState(0)

//     return(
//         <View>

//             <Text style={style.tulisan}>Hallo apakabar bro, {props.nama}</Text>
//             <Tambah />
//             <Nilai />
//             <Kurang />
//         </View>
//     );
// }


// export function Tambah(props) {

//   return (


//     <View>
//       <Text style={style.tulisan}>Tambah</Text>
//     </View>

//   )
// }
// export function Nilai(props) {
//     return (

//       <View>
//         <Text style={style.tulisan}>nilai</Text>
//       </View>

//     )
//   }
//   export function Kurang(props) {
//     return (

//       <View>
//         <Text style={style.tulisan}>kurang</Text>
//       </View>

//     )
//   }

import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    tulisan: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center'
    },
    nomor:{
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },


});





export default function Hallo() {

  const [nilai, rubahNilai] = useState(0)

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => rubahNilai(nilai + 1)}>
        <View>
          <Text style={style.tulisan}>TAMBAH</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={style.nomor}> 
          {nilai}
        </Text>
      </View>
      <TouchableOpacity onPress={() => rubahNilai(nilai - 1)}>
        <View>
          <Text style={style.tulisan}>
            KURANG
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => rubahNilai(0)}>
        <View>
          <Text style={style.tulisan}>
            RESET
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}