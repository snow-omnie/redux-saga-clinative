import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from '../../redux/actions/action';
import { AppDispatch } from '../../redux/store';
import { Props } from './HomeScreen';
import { COLORS } from '../theme';
// import { useAppSelector, useAppDispatch } from 'app/hooks'
// import { postInitState } from '../../redux/types';

const PostScreen = ({ navigation }: Props): JSX.Element => {
    const [alrticles, setArticles] = useState<IArticle[] | []>()
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: any) => state.articles.posts)

    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    useEffect(() => {
        setArticles(posts)
    }, [posts])
    return (
        <View style={styles.itemContainer}>
            <View><Text>Articles</Text>
                <Text style={styles.webViewButton} onPress={() => navigation.navigate("WebScreen")}>Check Web view</Text>
            </View>

            <View >
                {
                    alrticles?.map((item, index) => <Text key={index} style={styles.item}>{index + 1}:{item.title}</Text>)
                }
            </View>
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 4
    },
    item: { padding: 10 },
    webViewButton: {
        color: 'red',
        verticalAlign: 'middle',
    }
})