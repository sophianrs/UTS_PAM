import {React,useState} from 'react';
import {Image, Text, StyleSheet, View, TextInput, Button} from 'react-native';

import Awal from '../assets/Awal.png';
import Tujuan from '../assets/Tujuan.png';
import Layanan from '../assets/Layanan.png';
import Tanggal from '../assets/Tanggal.png';
import Jam from '../assets/Jam.png';

const Pemesanan = ({ navigation }) => {
    const [PelAwal, setAwal] = useState("");
    const [PelTujuan, setTujuan] = useState(""); 
    const [PilLayanan, setLayanan] = useState("");
    const [PilTanggal, setTanggal] = useState("");
    const [PilJam, setJam] = useState("");

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.head}>
                        <Text style={styles.judul}>Kapalzy</Text>
                    </View>

                    <Text style={styles.subJudul}>Pelabuhan Awal</Text>
                    <View style={styles.formInput}>
                        <Image source={Awal} 
                        style={{width: 25, height:25}}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pilih Pelabuhan Awal"
                            onChangeText={setAwal}
                            value={PelAwal}
                        />                    
                    </View>

                    <Text style={styles.subJudul}>Pelabuhan Tujuan</Text>
                    <View style={styles.formInput}>
                        <Image source={Tujuan} 
                            style={{width: 25, height:25}}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pilih Pelabuhan Tujuan"
                            onChangeText={setTujuan}
                            value={PelTujuan}
                            
                        />
                    </View>

                    <Text style={styles.subJudul}>Kelas Layanan</Text> 
                    <View style={styles.formInput}>
                        <Image source={Layanan} 
                            style={{width: 25, height:25}}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pilih Layanan"
                            onChangeText={setLayanan}
                            value={PilLayanan}
                            
                        />
                    </View>

                    <Text style={styles.subJudul}>Tanggal Masuk Pelabuhan</Text> 
                    <View style={styles.formInput}>
                        <Image source={Tanggal} 
                            style={{width: 25, height:25}}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pilih Tanggal Masuk"
                            onChangeText={setTanggal}
                            value={PilTanggal}
                            
                        />
                    </View>

                    <Text style={styles.subJudul}>Jam Masuk Pelabuhan</Text> 
                    <View style={styles.formInput}>
                        <Image source={Jam} 
                            style={{width: 25, height:25}}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pilih Jam Masuk"
                            onChangeText={setJam}
                            value={PilJam}
                            
                        />
                    </View>

                    <View style={styles.formText}>
                        <Text style={styles.TextOnly}>Dewasa : </Text>
                        <Text style={styles.TextOnly}>1 Orang </Text>
                    </View>

                    <Button 
                        color='#ED7D31' 
                        title="Buat Tiket" 
                        onPress={() => {navigation.navigate('Konfirmasi',
                        {
                            PelAwal: PelAwal,
                            PelTujuan : PelTujuan,
                            PilLayanan : PilLayanan,
                            PilTanggal: PilTanggal,
                            PilJam : PilJam,
                        });
                    }}
                    />
                </View>     
            </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow : "hidden",
        backgroundColor: '#0025AA',
        alignItems: 'center',
    },
    head: {
        padding:10,
        alignItems: 'center',
    },
    judul: {
        textAlign: 'center',
        color: '#0025AA',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subJudul: {
        fontWeight: "bold",
    },
    form: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '80%',
        padding:20,
        borderRadius:10,
        marginTop: 100,
        
    },
    formText: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        paddingRight : -10,
        borderWidth:1,
        borderRadius:3,
        justifyContent: 'space-between'
    },
    formInput: {
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        paddingLeft:10,
        borderWidth:1,
        borderRadius:3,
    },
    
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        borderRadius:3,
    },
    TextOnly: {
        width: '75%',
        fontWeight:'bold',
        height: 40,
        padding: 10,
        borderRadius:3,
        justifyContent: 'space-between',
      },
  });
  
  export default Pemesanan;
