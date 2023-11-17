import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function DetalleEventoScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.headingText}> Evento </Text>
        <View style={[styles.card,styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    Evento name
                </Text>
            </View>
            <View style={styles.bodyContainer} >
                <Text numberOfLines={4}>
                    Como cada año, el evento se celebra en la Iglesia de St Patrick. Este año
                    será un evento especial ya que acudiran los mayores artistas del pais.
                </Text>
            </View>
            <View style={styles.bodyContainer} >
                {/* <TouchableOpacity
                    onPress={() => Linking.openURL('https:cosasdigitales.com/articulos-diseno-web/es2021-es12-novedades-de-la-ultima-version-de-javascript/')}
                >
                    <Text style={styles.socialLinks}>Mas Info</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06232c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#fff'
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#84b6f4',
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }
})