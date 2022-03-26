import {React,useState} from 'react';
import {Text, StyleSheet, View, Button, ScrollView, SafeAreaView, FlatList, StatusBar, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from 'react-navigation'
import Modal from "react-native-modal";

import Cari from '../assets/Cari.png'
import Telpon from '../assets/Telpon.png'
import Riwayat from '../assets/Riwayat.png'
import Profil from '../assets/Profil.png'

const Lainnya = () => {
    const [isModalVisible, setModalVisible] = useState(true);
    // const alert = () => {
    //     setModalVisible(!isModalVisible);
    // };

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.judul}>Menu Lainnya</Text>
                </View>
                 <View style={styles.card}>
                     {/* <View style={styles.tombol}>
                         <View style={{ flex: 1, }}>  
                             <Button 
                                color='#ED7D31'
                                title="Menu" 
                                onPress={alert}
                            /> */}
                     <View style={styles.formText}>
                        <Image source={Profil} 
                            style={{width: 35, height:35}}
                        />
                        <Text style={styles.TextOnly}>  Detail Profile</Text>
                    </View>

                    <View style={styles.formText}>
                        <Image source={Cari} 
                            style={{width: 35, height:35}}
                        />
                        <Text style={styles.TextOnly}>  Cek Pesanan</Text>
                    </View>

                    <View style={styles.formText}>
                        <Image source={Riwayat} 
                            style={{width: 35, height:35}}
                        />
                        <Text style={styles.TextOnly}>  Riwayat Pemesanan</Text>
                    </View>

                    <View style={styles.formText}>
                        <Image source={Telpon} 
                            style={{width: 35, height:35}}
                        />
                        <Text style={styles.TextOnly}>  Hubungi Kami</Text>
                    </View>
                            <View style={styles.Modal}>
                                <Modal isVisible={isModalVisible}
                                    onBackdropPress={() => setModalVisible(false)}>
                                    <View style={styles.popUpcard}>
                                        <View style={styles.header}>
                                            <Text style={styles.judul}>MENU</Text>
                                        </View>

                                        <View style={styles.Wrap}>
                                            <View style= {styles.cardinModal}>
                                                <Image source={Cari} 
                                                    style={{width: 50, height:50}}
                                                />
                                                <Text style={styles.subJudul}>Cek Pesanan</Text>
                                            </View>

                                            <View style= {styles.cardinModal}>
                                                <Image source={Profil} 
                                                    style={{width: 50, height:50}}
                                                />
                                                <Text style={styles.subJudul}>Detail Profile</Text>
                                            </View>
                                        </View>
                                        <View style={styles.Wrap}>
                                            <View style= {styles.cardinModal}>
                                                <Image source={Telpon} 
                                                    style={{width: 50, height:50}}
                                                />
                                                <Text style={styles.subJudul}>Hubungi Kami</Text>
                                            </View>

                                            <View style= {styles.cardinModal}>
                                                <Image source={Riwayat} 
                                                    style={{width: 50, height:50}}
                                                />
                                                <Text style={styles.subJudul}>Riwayat Pemesanan</Text>
                                            </View>
                                        </View>
                                    </View>  
                                </Modal>
                            </View>
                         </View>
                     </View>
            //  </View>      
            // </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
    },
    head: {
        padding:10,
        alignItems: 'center',
    },
    Cardtitle: {
        // fontFamily: "Sans-Serif",
        textAlign: 'center',
        color: '#0025AA',
        fontSize: 25,
        fontWeight: 'bold',
    },
    judul: {
        // fontFamily: "Sans-Serif",
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        margin: 'auto',
        width: '100%',
        // boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
        padding:10,
        marginTop: 0,
    },
    SubCard: {
        backgroundColor: '#EBEBEB',
        margin: 'auto',
        marginTop : 10,
        width: '100%',
        padding:20,
        borderRadius:5,
        borderColor: '#E5E5E5',
        borderWidth: 1,
    },
    header:{
        width: '100%',
        backgroundColor: '#0025AA',
    },
    subJudul: {
        marginTop: 15,
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 17,
        // fontFamily: "Sans-Serif",  
    },
    subJudul2: {
        marginTop: 5,
        fontWeight: "bold",
        // fontFamily: "Sans-Serif", 
        fontSize: 12, 
    },
    Modal: {
        alignItems: 'center',
        padding: 10,
    },
    Wrap: {
        backgroundColor: '#fff',
        margin: 'auto',
        width: '100%',
        // boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
        borderRadius:7,
        // borderWidth: 1,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'space-between',
    },
    cardinModal: {
            backgroundColor: '#fff',
            margin: 'auto',
            width: '45%',
            // boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
            padding:10,
            borderRadius:10,
            borderWidth: 1,
            alignItems:'center',
            height: 120,
            marginHorizontal: 5,
    },
    popUpcard: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '100%',
        // boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
        padding: 10,
        borderRadius:10,
        alignItems: 'center',
    },
    popUpTeksHead: {
        // fontFamily: "Sans-Serif",
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 20,
    },
    popUpTeksBody: {
        // fontFamily: "Sans-Serif",
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
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
    tombol: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        textAlign: 'center',
    },
    TextOnly: {
        width: '100%',
        fontWeight:'bold',
        height: 40,
        marginTop: 30,
        padding: 0,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    form: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '80%',
        // boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
        padding:20,
        borderRadius:10,
    },
    formInput: {
        width: '100%',
        // flexDirection:'row',
        // alignItems: 'center',
        borderColor: '#E5E5E5',
        marginBottom:10,
        marginTop: 5,
        paddingLeft:10,
        borderWidth:1,
        borderRadius:3,
    },
    input: {
        width: '100%',
        // border:'none',
        height: 40,
        padding: 10,
        borderRadius:3,
    },
    formText: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        alignItems: 'center',
        marginBottom:10,
        marginTop:5,
        paddingRight :10,
        borderWidth:1,
        borderRadius:3,
    },
  });
  
  export default Lainnya;
