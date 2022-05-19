import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
  Image,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import {
  Container,
  TemperatureText,
  Temperature,
  LocationText,
  ButtonRefresh,
  Card,
  InfoText,
  Info,
  InfoCard,
  ThemeButton,
  CircleButton,
  SquareButton,
} from './src/Styles/styles';

import MainCard from './src/components/MainCard';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InfoCardContent from './src/components/InfoCardContent';

import getCurrentWeather from './src/api/consultApi';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(true);

  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentHour, setCurrentHour] = useState('');
  const [location, setLocation] = useState('');

  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [icon, setIcon] = useState('');

  const [wind, setWind] = useState('');
  const [humidity, setHumidity] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');

  async function setCurrentWeather() {
    setLoading(true);
    getMyLocation();
  }

  function getPermission() {
    Platform.OS === 'android'
      ? PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ).then(() => {
          setCurrentWeather();
        })
      : '';
  }
  function getMyLocation() {
    Geolocation.getCurrentPosition(
      info => {
        const region = {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        };

        const data = new Date();

        getCurrentWeather(region).then(results => {
          setCurrentHour(data.getHours() + ':' + data.getMinutes());
          setCurrentTemperature(parseInt(results.currentTemperature - 273.15));
          setLocation(results.locationName);
          setTempMin(parseInt(results.tempMin - 273.15));
          setTempMax(parseInt(results.tempMax - 273.15));
          setHumidity(results.humidity);
          setWind(results.wind);
          setIcon(results.icon);
          setSunrise(results.sunrise);
          setSunset(results.sunset);

          setLoading(false);
        });
      },
      () => {
        console.log('DEU ALGUM ERRO');
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
      },
    );
  }

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: darkTheme ? '#232634' : '#03A9F4',
          }}>
          <StatusBar
            backgroundColor={darkTheme ? '#232634' : '#03A9F4'}
            barStyle="light-conten"
            translucent={false}
          />
          <ActivityIndicator
            size={50}
            color={darkTheme ? '#03A9F4' : '#232634'}
          />
        </View>
      ) : (
        <Container theme={darkTheme}>
          <StatusBar
            backgroundColor={darkTheme ? '#232634' : '#03A9F4'}
            barStyle="light-conten"
            translucent={false}
          />
          <ButtonRefresh onPress={() => setCurrentWeather()}>
            <EvilIcons name="refresh" size={30} color="#fff" />
          </ButtonRefresh>
          <ThemeButton>
            <SquareButton theme={darkTheme}>
              <CircleButton
                theme={darkTheme}
                onPress={() => setDarkTheme(!darkTheme)}></CircleButton>
            </SquareButton>
          </ThemeButton>
          <Image
            style={{width: 100, height: 100, marginTop: 25}}
            source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}
          />
          <Temperature theme={darkTheme}>
            <TemperatureText theme={darkTheme}>
              {currentTemperature}
            </TemperatureText>
            <TemperatureText theme={darkTheme} style={{fontSize: 15}}>
              °C
            </TemperatureText>
          </Temperature>
          <LocationText theme={darkTheme}>
            {location}, {currentHour}
          </LocationText>
          <Card theme={darkTheme}>
            <MainCard
              title={'Nascer do Sol'}
              backgroundColor={'#eebd52'}
              sun={sunrise.getHours() + ':' + sunrise.getMinutes()}
              icon={1}></MainCard>
            <MainCard
              title={'Pôr do Sol'}
              backgroundColor={'#ff873d'}
              sun={sunset.getHours() + ':' + sunset.getMinutes()}
              icon={2}></MainCard>
          </Card>

          <Info theme={darkTheme}>
            <InfoText theme={darkTheme}>Informações adicionais:</InfoText>
            <InfoCard>
              <InfoCardContent
                title={'Vento'}
                value={wind + ' km/h'}
                theme={darkTheme}
              />
              <InfoCardContent
                title={'Umidade'}
                value={humidity + '%'}
                theme={darkTheme}
              />
              <InfoCardContent
                title={'Temp. Min'}
                value={tempMin + '°'}
                theme={darkTheme}
              />
              <InfoCardContent
                title={'Temp. Max'}
                value={tempMax + '°'}
                theme={darkTheme}
              />
            </InfoCard>
          </Info>
        </Container>
      )}
    </>
  );
}
