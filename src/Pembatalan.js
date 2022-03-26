import {React} from 'react';
import {Text, StyleSheet, View, StatusBar, Image } from 'react-native';

import VectorBatal from '../assets/VectorBatal.png';

const Pembatalan = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.judul}>Daftar Pembatalan</Text>
            </View>

            <View style={styles.form}>
                <Image source={VectorBatal} 
                    style={{width: 250, height:250}}
                />
                <Text style={styles.subJudul}> Tidak Ada Aktivitas Pembatalan Tiket </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight || 0,
    },
    judul: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },
    header:{
        width: '100%',
        backgroundColor: '#0025AA',
    },
    subJudul: {
        marginTop: 10,
        fontWeight: "bold",
        textAlign: 'center',
        color : '#0025AA',
    },
    form: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextOnly: {
        width: '100%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        borderRadius:3,
      },
  });
  
  export default Pembatalan;