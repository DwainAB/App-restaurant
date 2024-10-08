import react from "react";
import {View, Text, StyleSheet, TouchableOpacity, Linking, Platform} from "react-native"
import MapView, { Marker } from 'react-native-maps';
import {useFonts} from "expo-font"


function Hourly(){

    const openMapDirections = () => {
        const latitude = 48.885366;
        const longitude = 2.481337;
        const label = 'Wok Grill Rosny-sous-bois';
        const url = Platform.select({
            ios: `maps:${latitude},${longitude}?q=${label}`,
            android: `geo:${latitude},${longitude}?q=${label}`
        });
        
        Linking.openURL(url);
    };



    return(
        <View style={styles.containerHourly}>
            <Text style={styles.titleHourly}>Horaires :</Text>
            <View style={styles.listHourly}>
                <Text style={styles.day}>Lundi</Text>
                <Text style={styles.hour}>12:00 - 14h30 / 19:00 - 22:30</Text>
                <Text style={styles.day}>Mardi</Text>
                <Text style={styles.hour}>Fermé</Text>
                <Text style={styles.day}>Mercredi</Text>
                <Text style={styles.hour}>12:00 - 14h30 / 19:00 - 22:30</Text>
                <Text style={styles.day}>Jeudi</Text>
                <Text style={styles.hour}>12:00 - 14h30 / 19:00 - 22:30</Text>
                <Text style={styles.day}>Vendredi</Text>
                <Text style={styles.hour}>12:00 - 14h30 / 19:00 - 22:30</Text>
                <Text style={styles.day}>Samedi</Text>
                <Text style={styles.hour}>12:00 - 14h30 / 19:00 - 22:30</Text>
                <Text style={styles.day}>Dimanche</Text>
                <Text style={styles.hour}>12:00 - 14h30 / 19:00 - 22:30</Text>
            </View>

            <View style={styles.containerMapFull}>
                <View style={styles.containerMap}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: 48.885366, // Coordonnées mises à jour
                        longitude: 2.481337,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.009,
                        }}
                        onCalloutPress={openMapDirections} 
                    >
                    <Marker
                        coordinate={{ latitude: 48.885366, longitude: 2.481337 }} // Coordonnées mises à jour
                        title={"Wok Grill Rosny-sous-bois"}
                        description={"1 Rue Gustave Eiffel, Rosny-sous-bois"}
                        />
                    </MapView>
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    titleHourly: {
        fontSize:35,
        textAlign:"center",
    },
    containerHourly:{
        marginTop:70
    },
    listHourly :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        gap: 5
    },
    day:{
        fontWeight:"700",
        fontSize: 18,
        marginTop: 10
    },
    hour:{
        color:"#FF9A00",
        fontSize: 18
    },
    containerMapFull:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 9, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 18,
        borderRadius: 20,
    },
    containerMap:{
        marginTop: 70,
        shadowColor: "#000",
        overflow: "hidden",
        width: "80%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius: 20
    },
    map:{
        height:400,
        width: "100%",
        borderRadius: 20,
        
    }
})

export default Hourly