import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import {loadCategory} from "../components/reducerSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Home({ navigation }) {
    const categories = useSelector(state => state.toolkit.category);
    const apiBase = useSelector((state) => state.toolkit.apiBase);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`${apiBase}/category/`);
                console.log(data);

                dispatch(loadCategory(data));
            } catch (error) {
                console.log(error);
            }

        };

        fetchData();
    }, []);


    return (
        <ScrollView>
            <View style={styles.page}>
                {!!categories &&
                    categories.map((category) => <CategoryCard key={category.id} {...category} navigation={navigation} />)}
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
});