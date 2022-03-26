import {React} from 'react';
import {Text, StyleSheet, View, SafeAreaView, FlatList, StatusBar, Image} from 'react-native';
import data from "../data.json"
import Arrow from '../assets/Arrow.png'

const Daftar = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.Wrap}>
                <View style= {styles.cardinModal}>
                    <Text style={styles.pelabuhan}>{item.pelabuhan_awal}</Text>
                </View>

                <View style= {styles.cardinModal}>
                    <Image source={Arrow} 
                    style={{width: 30, height:20}}
                    />
                </View>
            
                <View style= {styles.cardinModal}>
                    <Text style={styles.pelabuhan}>{item.pelabuhan_tujuan}</Text>
                </View>
                </View>
                <Text style={styles.subJudul}>Jadwal Masuk Pelabuhan </Text>
                <Text style={styles.tanggal_masuk}>{item.tanggal_masuk} </Text>
                <Text style={styles.jam_masuk}>{item.jam_masuk} </Text>
                <Text style={styles.subJudul}>Layanan </Text> 
                <Text style={styles.kelas_layanan}>{item.kelas_layanan} </Text>
                <View style={styles.garis}/>

                <View style={styles.formText}>
                    <Text style={styles.TextOnly}>Dewasa x 1 = </Text>
                    <Text style={styles.TextOnly}>Rp 65.000,00 </Text>
                </View>
            
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.judul}>Daftar Pemesanan</Text>
            </View>

            <SafeAreaView>
                    <FlatList 
                        data ={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
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
    },
    garis: {
        borderBottomWidth: 1,
        marginTop: 10,
        borderColor: '#000',
    },
    pelabuhan: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    formText: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginTop:5,
        justifyContent:'space-between',
    },
    TextOnly: {
        width: '80%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        borderRadius:3,
    },
    Wrap: {
        backgroundColor: '#fff',
        margin: 'auto',
        padding: 0,
        width: '100%',
        flexDirection: 'row'
    },
    cardinModal: {
        backgroundColor: '#fff',
        margin: 'auto',
        width: '30%',
        height: 40,
        alignItems :'center'
    },
  });
  
  export default Daftar;