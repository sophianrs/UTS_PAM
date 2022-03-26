import {React,useState} from 'react';
import {Text, StyleSheet, View, Button, StatusBar, TextInput, Image } from 'react-native';
import Modal from "react-native-modal";
import Arrow from '../assets/Arrow.png'

const Detail = ({ navigation, route }) => {
    const [nama, setNama] = useState("");
    const [identitas, setIdentitas] = useState(""); 
    const [umur, setUmur] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    const alert = () => {
        setModalVisible(!isModalVisible);
    };

    const {PelAwal, PelTujuan, PilLayanan, PilTanggal, PilJam} = route.params;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.judul}>Detail Pemesanan</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.head}>
                            <Text style={styles.Cardtitle}>Kapalzy</Text>
                    </View>

                    <Text style={styles.subJudul}>Informasi Pemesanan</Text>

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
                        <View style={styles.formText}>
                            <Text style={styles.TextOnly}>Dewasa</Text>
                            <Text style={styles.TextOnly}>x 1 = Rp 65.000,00</Text>
                        </View> 
                    </View>

                    <Text style={styles.subJudul}>Data Pemesan</Text>
                    <Text style={styles.subJudul2}>Nama Lengkap</Text>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Masukkan Nama Anda"
                            onChangeText={setNama}
                            value={nama}
                        />
                    </View>
                    

                    <Text style={styles.subJudul2}>Identitas</Text>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Masukkan Identitas Anda"
                            onChangeText={setIdentitas}
                            value={identitas}
                        />
                    </View>

                    <Text style={styles.subJudul2}>Umur</Text>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Masukkan Umur Anda"
                            onChangeText={setUmur}
                            value={umur}
                        />
                    </View>

                    <View style={styles.tombol}>
                        <View style={{ flex: 1 }}>  
                            <Button 
                                color='#ED7D31'
                                title="Submit" 
                                onPress={alert}
                            />
                            <View style={styles.Modal}>
                                <Modal isVisible={isModalVisible}>
                                    
                                    <View style={styles.popUpcard}>
                                        <View style={styles.header}>
                                            <Text style={styles.judul}>PEMBAYARAN</Text>
                                        </View>
                                        <Text style={styles.popUpTeksHead}>TRANSFER KE NOMOR REKENING</Text>
                                        <Text style={styles.popUpTeksBody}>89172xxxxx</Text>
                                        <Text style={styles.popUpTeksBody}>BANK BAC</Text>
                                        <Button 
                                            color='#ED7D31'
                                            title="Selesai" 
                                            onPress={() => {navigation.navigate('Pemesanan')}}
                                        />
                                    </View>  
                                </Modal>
                            </View>
                        </View>
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
        alignItems: 'center',
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
        margin: 'auto',
        width: '90%',
        padding:10,
        borderRadius:10,
        marginTop: 20,
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
    },
    subJudul2: {
        marginTop: 5,
        fontWeight: "bold", 
        fontSize: 12, 
    },
    Modal: {
        alignItems: 'center',
        padding: 10,
    },
    popUpcard: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '100%',
        padding: 10,
        borderRadius:10,
        alignItems: 'center',
    },
    popUpTeksHead: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 20,
    },
    popUpTeksBody: {
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
        width: '70%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
    },
    form: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '80%',
        padding:20,
        borderRadius:10,
    },
    formInput: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:10,
        marginTop: 5,
        paddingLeft:10,
        borderWidth:1,
        borderRadius:3,
    },
    formText: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        paddingRight : -10,
        borderRadius:3,
        justifyContent: 'space-between'
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        borderRadius:3,
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
  });
  
  export default Detail;
