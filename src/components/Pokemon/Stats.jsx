import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Stats = ({ stats }) => {
  const percentage = (statNumber) => {
    return {
      width: statNumber >= 100 ? "100%" : `${statNumber}%`,
      backgroundColor: statNumber >= 50 ? "#00ac17" : "#ff3e3e",
    };
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.statsContainer}>
          <Text style={styles.statName}>{item.stat.name}</Text>
          <Text style={styles.statNumber}>{item.base_stat}</Text>
          <View style={styles.statBarGrey}>
            <View
              style={{
                ...styles.statBarPercentage,
                ...percentage(item.base_stat),
              }}
            ></View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  statName: {
    width: "30%",
    textTransform: "capitalize",
  },
  statNumber: {
    width: "10%",
    fontWeight: "bold",
  },
  statBarGrey: {
    width: "60%",
    height: 10,
    backgroundColor: "#dedede",
    borderRadius: 8,
  },
  statBarPercentage: {
    width: "50%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#000",
  },
});
export { Stats };
