import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const itens = [
  {
    name: "Cheese",
    image: "https://pngimg.com/uploads/cheese/cheese_PNG25292.png",
  },
  {
    name: "Tomato",
    image:
      "https://i.pinimg.com/originals/99/d5/b4/99d5b4cc0b8d2b89e9a3c333be8ab81e.png",
  },
  {
    name: "Bacon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png",
  },
  {
    name: "Picle",
    image:
      "https://s3-sa-east-1.amazonaws.com/loja2/6aa3b764ca65d15b07e55870fea0b6c4.png",
  },
  {
    name: "Hearts of palm",
    image:
      "https://mileidealimentos.com.br/wp-content/uploads/2017/10/img-o-palmito.png",
  },
];

export default function PizzaChoose() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.background}>
        <Image
          source={{
            uri: "https://www.seekpng.com/png/full/7-70471_fatia-pizza-png-pizza-massa-fina-png.png",
          }}
          style={styles.imagePizza}
        ></Image>
        <View style={styles.pizzaDetails}>
          <Text style={styles.pizzaName}>Margherita</Text>
          <Text style={styles.pizzaInfo}>540 gr · 3300 kcal </Text>
          <View style={styles.pizzaPriceRow}>
            <View style={styles.pizzaQuantity}>
              <TouchableOpacity style={styles.btnQuantity}>
                <Text style={styles.textQuantity}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textQuantity}>1</Text>
              <TouchableOpacity style={styles.btnQuantity}>
                <Text style={styles.textQuantity}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.pizzaPriceText}>$12,95</Text>
          </View>
          <View style={styles.itensRow}>
            <ScrollView horizontal={true} style={{ flex: 1 }}>
              {itens.map((item) => (
                <TouchableOpacity style={styles.btnItens}>
                  <Image
                    style={styles.itemImage}
                    source={{
                      uri: item.image,
                    }}
                  ></Image>
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.addText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0DAD2",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "#EBE7E1",
    height: "95%",
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
  },
  imagePizza: {
    height: 180,
    width: "90%",
    marginVertical: 20,
    resizeMode: "contain",
  },
  pizzaDetails: {
    width: "100%",
    height: "62%",
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  pizzaName: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 25,
    fontFamily: "AmericanTypewriter-Bold",
  },
  pizzaInfoRow: {
    flexDirection: "row",
  },
  pizzaInfo: {
    marginLeft: 25,
    marginTop: 5,
    fontSize: 15,
    fontFamily: "AmericanTypewriter",
    color: "grey",
  },
  pizzaPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 25,
    alignItems: "center",
  },
  pizzaQuantity: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    width: "40%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnQuantity: {
    marginHorizontal: 20,
  },
  textQuantity: {
    fontSize: 25,
    fontWeight: "bold",
  },
  pizzaPriceText: {
    fontFamily: "AmericanTypewriter-Bold",
    fontSize: 25,
  },
  itensRow: {
    flexDirection: "row",
    width: "100%",
    height: 110,
    marginTop: 20,
    padding: 5,
  },
  btnItens: {
    height: "90%",
    width: 100,
    backgroundColor: "#F6F4F0",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  itemText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  btnAdd: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC7246",
    width: "90%",
    height: 50,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  addText: {
    fontFamily: "AmericanTypewriter-Bold",
    fontSize: 20,
  },
});
