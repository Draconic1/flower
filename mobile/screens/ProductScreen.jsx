import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import axios from "axios";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadProduct} from "../components/reducerSlice";


export default function ProductScreen({route}) {

    const {id} = route.params;
    const products = useSelector((state) => state.toolkit.product);
    const apiBase = useSelector((state) => state.toolkit.apiBase);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`${apiBase}/products/category/${id}`);
                console.log(data);

                dispatch(loadProduct(data));
            } catch (error) {
                console.log(error);
            }

        };
        fetchData();
    }, []);


    return (
        <ScrollView>
            <View style={styles.page}>
                {!!products &&
                    products.map((props) => <View style={styles.card}>
                        <Image
                            style={styles.image}
                            source={{ uri: props.image}}
                        />
                        <View style={styles.container}>
                            <Text style={styles.brandTitle}>{props.name} - {props.price} руб.</Text>
                        </View>
                    </View>)}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    title:{
        color: 'black',
        fontSize: 25,
        fontWeight:'bold',
        padding:15,
        textAlign:'center'},
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
    brandTitle: { color: 'black', fontSize: 18, fontWeight:'bold',  textAlign:'center' },
});