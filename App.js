import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import light from './assets/images/Light.png'
import sun from './assets/images/icons/Soleado.png'
import Box from './components/box_principal/Box';


export default function App() {

  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');
 

  useEffect(() => {
    const now = new Date();
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
    setCurrentDayOfWeek(dayOfWeek.slice(0,22));
  }, []);


  

  return (
    <View className="w-full h-full">
      <ImageBackground source={light} resizeMode='cover' style={styles.image}>

      <View className=' p-4 flex items-center justify-around flex-col mt-28'>
      <Text className='text font text-[#ffffff] mb-10 text-xl' >{currentDayOfWeek}</Text>
      <View className='w-full flex items-center justify-center flex-col relative'>
      <Text className='text font text-[#ffffff] text-8xl'>6°</Text>
      <View className='w-35 h-35 flex items-center justify-center mt-[-70px] ml-[60px]'>
      <Image source={sun} className='w-[150px] h-[150px]'/>
      </View>
      </View>
      <Text className='text font text-[#ffffff] p-4 text-xl '>Mar del plata, Buenos Aires</Text>
      </View>

      <Box/>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center',
    flexDirection:'column',


    
  },
});
