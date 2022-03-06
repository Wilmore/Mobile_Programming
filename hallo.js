import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { style } from '../assets/style';
//props ini adalah data yang bersifat ready only, hanya bisa di baca dan tidak bisa di rubah .
// dan props biasa di gunakan untuk komunikasi antar component
export default function Hallo(props) {
  return (
    <View>
      <Text style={{fontSize: 25,color: 'blue', alignSelf: 'center'}}>Pertandingan elclasico {props.nama}</Text>
    </View>
  );
}

export function Tambah(props) {
  return (
    <View>
      <Text style={{fontSize: 25,color: 'blue', alignSelf: 'center'}}>Pertandingan elclasico{props.tambah}</Text>
    </View>
  )
}
export function Nilai(props) {
  return (
    <View>
      <Text style={{fontSize: 25,color: 'black', alignSelf: 'center'}}>Final {props.nilai}</Text>
    </View>

  )
}



//contoh menggunakan state
//state = hanya bisa di satu componen dan tidak bisa di gunakan di komponent 
//lain tidak bisa berpindah pindah dan dia juga biasa berubah di component tersebut
export function Kallo() {

  const [angka, rubahNilai] = useState(0)

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => rubahNilai(angka + 1)}>
        <View>
          <Text style={{fontSize: 25,color: 'blue', alignSelf: 'center'}}>Tambah</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize: 25,color: 'black', alignSelf: 'center'}}>
          {angka}
        </Text>
      </View>
      <TouchableOpacity onPress={() => rubahNilai(angka - 1)}>
        <View>
          <Text style={{fontSize: 25,color: 'black', alignSelf: 'center'}}>
            kurang
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => rubahNilai(0)}>
        <View>
          <Text style={{fontSize: 25,color: 'blue', alignSelf: 'center'}}>
            Reset
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}