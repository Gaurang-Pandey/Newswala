import axios from "axios";
import { useEffect, useState } from "react";
import {View, Text, StyleSheet,ActivityIndicator, FlatList} from "react-native"
import { NewsCard } from "../components/NewsCard";

export const HomeScreen = () => {

    const API_KEY = "23fd0dfabf234b85b4a43b6e1e546c80";
    const COUNTRY = "us";
    const [news,setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchNews();
    },[]);

    const fetchNews= async ()=>{
        const newsURL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;
        try {
            const res = await axios.get(newsURL);
            setNews(res.data.articles);
            setLoading(false);
        } catch (error) {
            console.log("News api failed to fetch news: ",error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Top Headlines in ${COUNTRY}`}</Text>

            {
                loading ? (
                    <ActivityIndicator 
                        size = "large"
                        color="red"
                    />
                ) : (
                    <FlatList
                        data={news}
                        keyExtractor={(item,index)=> index.toString()}
                        renderItem={({item})=> <NewsCard news={item}/>}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    splashCard: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 26,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: "#eee",
        padding: 20
    }
  });