import React from 'react';
import {AppRegistry, StyleSheet, View, Text, TextInput ,Button} from 'react-native';
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NamaKota: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }

  getWeather= () => {
       let url='http://api.openweathermap.org/data/2.5/weather?q=' + this.state.NamaKota + '&appid=31258d4eac6a8f41101a6f7046d6dfd1&units=metric';
       fetch (url)
       .then((response) => response.json())
       .then((responseJson) => {
          console.log(responseJson);
         this.setState({
           forecast: {
             main: responseJson.weather[0].main,
             description: responseJson.weather[0].description,
             temp: responseJson.main.temp
           }
         });
       }
     );
    }
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Weather</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Masukkan Nama kota</Text>
          <View style={styles.boxSearch} >
            <TextInput style = {{height: 50}}
            placeholder="Search"
            onChangeText={(NamaKota)=>this.setState({NamaKota})}
            />
          </View>

          <Button
          onPress={
                () => this.getWeather()
              }
            title="LIHAT"
            accessibilityLabel="Klik untuk mengecek"
          />

        </View>
        <View style={styles.box3}>
        <View>
            <Text style={{ padding: 10, fontSize: 20 }} >
              {this.state.NamaKota} {'\n'}
              Suhu{'\t'}{'\t'}: {this.state.forecast.temp} Celcius {'\n'}
              Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
              Deskripsi{'\t'}: {this.state.forecast.description}
            </Text>
        </View>

        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>copyright@adisatriawan022</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#FFFAF0',
      flex:1,
      flexDirection:'column'
    },
    box1:{
      flex: 1,
      backgroundColor: '#191970',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center'

    },
    box2:{
      flex: 2,
      backgroundColor: '#6A5ACD',
      flexDirection : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15,
    },
    box3: {
    flex: 4,
    margin: 15,
    backgroundColor: '#6A5ACD',
    flexDirection: 'row'

  },
    box4:{
      flex: 1,
      backgroundColor: '#191970',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize:20,
      color: 'white',
    },
    boxSearch: {
    padding:10,
    width: 250,
    height: 35,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'column'

  }
});
