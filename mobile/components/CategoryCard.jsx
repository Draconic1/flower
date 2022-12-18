import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React from 'react';

export default function DeviceCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Товары', { id: props.id });
    };

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: props.image}}
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{props.name}</Text>
            </View>
            <Button title='Посмотреть' onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        borderRadius: 12,
        padding: 10,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: 'black', fontSize: 18, fontWeight:'bold', textAlign:'center' },
});
