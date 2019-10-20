import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Linking
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";
import {} from "expo";

const itemArray = new Array(9).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    //TODO: decide what to draw:circle or cross or default
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = !this.state.isCross;
      this.setState({ isCross: itemArray[itemNumber] }, () => {});
    }
    //TODO: check for win
    this.winGame();
  };
  chooseItemIcon = itemNumber => {
    //TODO: choose appropriate icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };
  chooseItemColor = itemNumber => {
    //TODO: choose color
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "#eb3b5a" : "#20bf6b";
    }
    return "#4b6584";
  };

  resetGame = () => {
    //TODO: reset all values and states
    itemArray.fill("empty");
    this.setState({ winMessage: "empty" });
    //force update to the component
    this.forceUpdate();
  };

  winGame = () => {
    //TODO: decide /check winner
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winMessage: itemArray[0] ? "Cross" : "Circle"
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winMessage: itemArray[0] ? "Cross" : "Circle"
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[6] == itemArray[8]
    ) {
      this.setState({
        winMessage: itemArray[6] ? "Cross" : "Circle"
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[3] == itemArray[0] &&
      itemArray[0] == itemArray[6]
    ) {
      this.setState({
        winMessage: itemArray[0] ? "Cross" : "Circle"
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[4] == itemArray[1] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winMessage: itemArray[1] ? "Cross" : "Circle"
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winMessage: itemArray[2] ? "Cross" : "Circle"
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[8] == itemArray[4]
    ) {
      this.setState({
        winMessage: itemArray[0] ? "Cross" : "Circle"
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[6] == itemArray[4]
    ) {
      this.setState({
        winMessage: itemArray[2] ? "Cross" : "Circle"
      });
    }
  };

  render() {
    if (this.state.winMessage && this.state.winMessage !== "empty") {
      Alert.alert(
        "Congratulation !!!🏆🏆🏆🏆!!!",
        `🥇${this.state.winMessage.toUpperCase()}🥇 is the winner 🍺🍺🍺🍻🥂`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Play Again", onPress: () => this.resetGame() }
        ],
        { cancelable: false }
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Tic Tac Toe</Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)}>
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Button
          onPress={() => this.resetGame()}
          full
          rounded
          primary
          style={styles.button}
        >
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
        <Text style={{ color: "#fff" }}>This is made with 💙 by pravash</Text>
        <Text
          style={{ color: "#fff" }}
          onPress={() => Linking.openURL("http://www.pravash.tech")}
        >
          <Text style={styles.myname}>www.pravash.tech</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 50,
    textShadowColor: "#20bf6b",
    textShadowOffset: { width: -1, height: 5 },
    textShadowRadius: 10
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    borderWidth: 2,
    borderColor: "#45aaf2",
    padding: 30,
    backgroundColor: "#fed330"
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "gray"
  },
  button: {
    color: "#fff",
    margin: 50,
    padding: 10,
    shadowColor: "#fc5c65",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  myname: {
    fontSize: 13,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 2,
    marginTop: 5
  }
});
