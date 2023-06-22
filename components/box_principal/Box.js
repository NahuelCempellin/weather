import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { hoy } from './data';


const Box = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.navbar}>
      <Text style={styles.text}>Hoy</Text>
      <Text style={styles.text}>Mañana</Text>
      <Text style={styles.text}>Semana</Text>
      </View>

      <View style={styles.cardContainer}>
        {
          hoy.map((el,indx)=>{
            return(
              <View style={styles.card} key={indx}>
                <Text style={styles.text}>{el.hora}</Text>
                <Image source={el.image} style={styles.cardImage}/>
                <Text style={styles.text}>{el.clima}</Text>
              </View>
            )
          })
        }
      </View>
      </View>
  )
}


const styles = StyleSheet.create({
  cardContainer:{
    width:'100%',
    height: 100,
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    marginTop: -200,


  },
  card:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
    padding:3,
  },
  cardImage:{
    width:50,
    height:50
  },
  contenedor:{
    width: '98%',
    height:150,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    position: 'relative',
  },
  backdropFilter: {
    backdropFilter: 'blur(5px)',
    '-webkit-backdrop-filter': 'blur(5px)',
  },

  navbar:{
    
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-around',
    flexDirection:'row',
    width:'100%',
    marginTop:-100,
  },
  text:{
    fontWeight:'bold',
    color:'white',
    fontSize:18,
  }


})

export default Box