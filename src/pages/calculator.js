import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const keys = [
  "AC",
  "X",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
];

export default function Calculator() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContent}>
        <Text style={styles.resultText}>0</Text>
      </View>
      <View style={styles.keyboard}>
        {keys.map((key, i) => (
          <TouchableOpacity style={styles.keyboardButton}>
            <Text
              style={
                i === 0 ||
                i === 1 ||
                i === 2 ||
                i === 3 ||
                i === 7 ||
                i === 11 ||
                i === 15
                  ? styles.buttonTextEspecial
                  : styles.buttonText
              }
            >
              {key}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            styles.keyboardButton,
            { width: "40%", backgroundColor: "#ECDBBA" },
          ]}
        >
          <Text style={styles.buttonTextEspecial}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "flex-end",
  },
  resultContent: {
    margin: 20,
  },
  resultText: {
    color: "#fff",
    fontSize: 100,
  },
  keyboard: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  keyboardButton: {
    height: 70,
    width: "20%",
    backgroundColor: "#2D4263",
    shadowOffset: { width: 1, height: 13 },
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonTextEspecial: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#C84B31",
  },
});
