// 省略
import React, { useState,useEffect } from 'react';
import { StyleSheet, Button, Text, View, FlatList } from 'react-native';
import { List, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import format from 'date-fns/format';
import { loadAll } from './store';
// 省略
export const MainScreen = () => {
    const navigation = useNavigation();
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        const initialize = async() => {
            //　ここに更新表示処理を書く
            const newMemos = await loadAll();

            const nextMemos = newMemos.map(item=> JSON.parse(item[1]))
            console.log("nextMemos",nextMemos);
            setMemos(nextMemos);
       };

        const unsubscribe = navigation.addListener('focus', initialize);

        return unsubscribe;
    },[navigation]);

  const onPressAdd = () => {
    navigation.navigate('Compose'); // (3)
  };

  return (
    <View style={styles.container}>
        <FlatList
            style={styles.list}
            data={memos}
            keyExtractor={item => `${item.createdAt}`}
            renderItem={({ item }) => 
            //     <View>
            //     <List.Item
            //       title="aadf"
            //     />
            //     </View>
            //   )}
            // renderItem={({item}) => 
            //     // <List.Item
            //     // title={item.text}
            //     // titleNumberOfLines={5}
            //     // description={
            //     //   `作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`
            //     // }
            //     // descriptionStyle={{ textAlign: 'right' }}
            // //   />
                <View style={styles.textView}>
                    <View>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                    <View>
                        <Text style={styles.subText}>{ `作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`}</Text>
                    </View>
                </View>
            }

        />
      {/* (1) */}
      <FAB
        style={{
          // (2)
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        icon="plus"
        onPress={onPressAdd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    list:{
        flex:1,
        backgroundColor:'blue',
        padding:16,
        marginVertical:8,
        marginHorizontal:16,
    },
    textView: {
        backgroundColor: 'black',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      text: {
        fontSize: 30,
        color: "white"
      },
      subText: {
        fontSize: 20,
        color: "lightblue"
      },
  });