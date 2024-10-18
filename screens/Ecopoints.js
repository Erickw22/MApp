import * as React from 'react';
import { Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from "../styles/styles";

export default function Ecopoints() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MapView 
          style={{width: "100%", height: "100%"}}
          initialRegion={{
            latitude:-7.939101,
            longitude:-34.879947,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,
          }}
        >
          <Marker
            coordinate={{latitude:-7.939101,longitude:-34.879947}}
            title='Uninassau-Paulista'
            description='Unidade Uninassau de Paulista'
          />
        </MapView>
      </View>
    );
  }