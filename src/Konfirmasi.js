import {React} from 'react';
import {Text, StyleSheet, View, Button, StatusBar, Image } from 'react-native';
import Arrow from '../assets/Arrow.png'
import Pemesanan from './Pemesanan';

const Konfirmasi = ({ navigation, route  }) => {
    const {PelAwal, PelTujuan, PilLayanan, PilTanggal, PilJam} = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <Text style={styles.judul}>Konfirmasi Pemesanan</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.head}>
                        <Text style={styles.Cardtitle}>Kapalzy</Text>
                </View>

                <Text style={styles.subJudul}>Kuota Tersedia (10000)</Text>
                <Text style={styles.subJudul}>Rincian Tiket </Text>

                <View style={styles.SubCard}>
                    <View style={styles.Wrap}>
                        <View style= {styles.cardinModal}>
                            <Text style={styles.pelabuhan}>{JSON.stringify(PelAwal).replace(/["']/g, "")}</Text>
                        </View>

                        <View style= {styles.cardinModal}>
                            <Image source={Arrow} 
                               style={{width: 30, height:20}}
                            />
                        </View>

                        <View style= {styles.cardinModal}>
                            <Text style={styles.pelabuhan}>{JSON.stringify(PelTujuan).replace(/["']/g, "")}</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.subJudul}>Jadwal Masuk Pelabuhan </Text>
                    <Text style={styles.tanggal_masuk}>{JSON.stringify(PilTanggal).replace(/["']/g, "")}</Text>
                    <Text style={styles.jam_masuk}>{JSON.stringify(PilJam).replace(/["']/g, "")}</Text>
                    <Text style={styles.subJudul}>Layanan </Text> 
                    <Text style={styles.kelas_layanan}>{JSON.stringify(PilLayanan).replace(/["']/g, "")}</Text>
                    <View style={styles.garis}/>
                    <View style={styles.formInput}>
                        <Text style={styles.TextOnly}>Dewasa</Text>
                        <Text style={styles.TextOnly}>x 1 = Rp 65.000,00 </Text>
                    </View>   
                </View>

                <View style={styles.formText2}>
                        <Text style={styles.TextOnly2}>Total : </Text>
                        <Text style={styles.TextOnly2}>Rp 65.000,00</Text>
                </View>

                <View style={styles.tombol}>
                        <Button 
                            title="Kembali" 
                            onPress={() => navigation.navigate('Pemesanan')}
                        />
                        <Button 
                            color='#ED7D31' 
                            title="Buat Tiket" 
                            onPress={() => navigation.navigate('Detail',
                            {
                                PelAwal: PelAwal,
                                PelTujuan : PelTujuan,
                                PilLayanan : PilLayanan,
                                PilTanggal: PilTanggal,
                                PilJam : PilJam,  
                            }    
                            )}
                        />
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center'
    },
    head: {
        padding:10,
        alignItems: 'center',
    },
    Cardtitle: {
        textAlign: 'center',
        color: '#0025AA',
        fontSize: 25,
        fontWeight: 'bold',
    },
    judul: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 100,
        width: '90%',
        padding:10,
        borderRadius:10,
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
    tombol: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextOnly: {
        width: '70%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        justifyContent:'space-between',
    },
    TextOnly2: {
        width: '70%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        justifyContent:'space-between',
        fontSize:17,
    },
    formInput: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        justifyContent:'space-between',
    },
    Wrap: {
        backgroundColor: '#EBEBEB',
        margin: 'auto',
        width: '100%',
        flexDirection: 'row'
    },
    cardinModal: {
            backgroundColor: '#EBEBEB',
            margin: 'auto',
            width: '30%',
            alignItems:'center',
            height: 40,
    },
    formText: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        padding:20,
        justifyContent:'space-between',
    },
    formText2: {
        width: '110%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        padding:10

    },
  });
  
  export default Konfirmasi;
