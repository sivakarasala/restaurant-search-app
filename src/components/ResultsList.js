import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        keyExtractor={result => result.id}
        data={results}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
        sc
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultsList;
