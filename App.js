import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [keys, setKeys] = useState([]);
  const [result, setResult] = useState("calcapps");

  let combine = "";

  function getResult() {
    for (let i = 0; i < keys.length; i++) {
      combine = combine + keys[i];
    }
    let calcResult = eval(combine);
    setResult(`= ${calcResult}`);
  }

  function acHandler() {
    setKeys([]);
    setResult("");
  }

  function percentHandler() {
    let a = parseFloat(...keys);
    let resPer = a / 100;
    setKeys([resPer]);
  }

  function zeroHandler() {
    if (keys.length != 0) {
      setKeys([...keys, "0"]);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.output}>
          <Text style={styles.outputNumber}>
            {result == "" ? keys : result}
          </Text>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "1"])}
          >
            <Text style={styles.keysNumber}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "2"])}
          >
            <Text style={styles.keysNumber}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opButton}
            onPress={() => setKeys([...keys, "-"])}
          >
            <Text style={styles.keysOp}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opButton}
            onPress={() => setKeys([...keys, "+"])}
          >
            <Text style={styles.keysOp}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "3"])}
          >
            <Text style={styles.keysNumber}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "4"])}
          >
            <Text style={styles.keysNumber}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opButton}
            onPress={() => setKeys([...keys, "/"])}
          >
            <Text style={styles.keysOp}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opButton}
            onPress={() => setKeys([...keys, "*"])}
          >
            <Text style={styles.keysOp}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "5"])}
          >
            <Text style={styles.keysNumber}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "6"])}
          >
            <Text style={styles.keysNumber}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opButton}
            onPress={() => percentHandler()}
          >
            <Text style={styles.keysOp}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opButton} onPress={() => getResult()}>
            <Text style={styles.keysOp}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "7"])}
          >
            <Text style={styles.keysNumber}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "8"])}
          >
            <Text style={styles.keysNumber}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => setKeys([...keys, "9"])}
          >
            <Text style={styles.keysNumber}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysButton}
            onPress={() => zeroHandler()}
          >
            <Text style={styles.keysNumber}>0</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.acButton} onPress={() => acHandler()}>
          <Text style={styles.keysAC}>AC</Text>
        </TouchableOpacity>
        <Text style={styles.noteText}>Press AC to Start</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
    alignItems: "center",
    justifyContent: "center",
  },
  containerKeys: {
    display: "flex",
    flexDirection: "row",
  },
  keysButton: {
    backgroundColor: "#930707",
    width: 80,
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  keysNumber: {
    display: "flex",
    backgroundColor: "#FF5757",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 50,
    borderRadius: 10,
    textAlign: "center",
  },
  opButton: {
    backgroundColor: "#FF5757",
    width: 80,
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  keysOp: {
    display: "flex",
    backgroundColor: "#930707",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 50,
    borderRadius: 10,
    textAlign: "center",
  },
  output: {
    backgroundColor: "#ECECEC",
    width: 350,
    height: 90,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 7,
  },
  outputNumber: {
    fontSize: 50,
  },
  acButton: {
    backgroundColor: "#930707",
    width: 350,
    height: 90,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  keysAC: {
    display: "flex",
    backgroundColor: "#FF5757",
    width: 320,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 50,
    borderRadius: 10,
    margin: 5,
    textAlign: "center",
  },
  noteText: {
    fontSize: 15,
  },
});
