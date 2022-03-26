import {React,useState} from 'react';
import { Image, Text, SytleSheet, View, TouchableOpacity, StatusBar, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Modal from 'react-native-modal';
// import 'react-native-gesture-handler';
 
import Pemesanan from './src/Pemesanan';
import Konfirmasi from './src/Konfirmasi';
import Detail from './src/Detail';

import Daftar from './src/Daftar';
import Pembatalan from './src/Pembatalan';
import Lainnya from './src/Lainnya';

import HomeIcon from './assets/HomeIcon.png'
import HomePress from './assets/HomePress.png'
import DaftarIcon from './assets/DaftarIcon.png'
import DaftarPress from './assets/DaftarPress.png'
import PembatalanPress from './assets/PembatalanPress.png'
import PembatalanIcon from './assets/PembatalanIcon.png'
import LainnyaIcon from './assets/LainnyaIcon.png'
import LainnyaPress from './assets/LainnyaPress.png'

// import Cari from './assets/Cari.png'
// import Telpon from './assets/Telpon.png'
// import Riwayat from './assets/Riwayat.png'
// import Profil from './assets/Profil.png'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
    return ( 
            <Stack.Navigator initialRouteName='Pemesanan' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Pemesanan' component={Pemesanan}/>
                <Stack.Screen name='Daftar' component={Daftar}/>
                <Stack.Screen name='Konfirmasi' component={Konfirmasi}/>
                <Stack.Screen name='Detail' component={Detail}/>
                <Stack.Screen name='Pembatalan' component={Pembatalan}/>
            </Stack.Navigator>
    );
};

// const Coba = () => {
//     const [isModalVisible, setModalVisible] = useState(true);
//     return (
//                     <Modal isVisible={isModalVisible}
//                         onBackdropPress={() => setModalVisible(false)}>
//                         <View style={styles.popUpcard}>
//                             <View style={styles.header}>
//                                 <Text style={styles.judul}>MENU</Text>
//                             </View>

//                             <View style={styles.Wrap}>
//                                 <View style= {styles.cardinModal}>
//                                     <Image source={Cari} 
//                                         style={{width: 50, height:50}}
//                                     />
//                                     <Text style={styles.subJudul}>Cek Pesanan</Text>
//                                 </View>

//                                 <View style= {styles.cardinModal}>
//                                     <Image source={Profil} 
//                                         style={{width: 50, height:50}}
//                                     />
//                                     <Text style={styles.subJudul}>Detail Profile</Text>
//                                 </View>
//                             </View>
//                             <View style={styles.Wrap}>
//                                 <View style= {styles.cardinModal}>
//                                     <Image source={Telpon} 
//                                         style={{width: 50, height:50}}
//                                     />
//                                     <Text style={styles.subJudul}>Hubungi Kami</Text>
//                                 </View>

//                                 <View style= {styles.cardinModal}>
//                                     <Image source={Riwayat} 
//                                         style={{width: 50, height:50}}
//                                     />
//                                     <Text style={styles.subJudul}>Riwayat Pemesanan</Text>
//                                 </View>
//                             </View>
//                         </View>  
//                     </Modal>
//     )
// }

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ activeTintColor : '#00579C', }}>
                <Tab.Screen name="Beranda" component={HomeStack} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => (
                        <Image source={
                            focused
                            ? HomePress : HomeIcon
                        } 
                        style={{width: size, height:size,}}
                        />
                    ),
                }}
                />

                <Tab.Screen name="Pesanan Saya" component={Daftar} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => (
                        <Image source={
                            focused
                            ?  DaftarPress : DaftarIcon
                        } 
                        style={{width: size, height:size,}}
                        />
                    ),
                }}
                />
                <Tab.Screen name="Pembatalan" component={Pembatalan} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => (
                        <Image source={
                            focused
                            ? PembatalanPress : PembatalanIcon
                        } 
                        style={{width: 21, height:25}}
                        />
                    ),
                }}
                />
                <Tab.Screen name="Lainnya" component={Lainnya} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => (
                        <Image source={
                            focused
                            ? LainnyaPress : LainnyaIcon 
                        } 
                        style={{width: size, height:size,}}
                        />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;