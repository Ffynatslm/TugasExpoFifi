import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >

    
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 50,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
          marginBottom: 20,
        }}
      />

      <View
        style={{
          backgroundColor: "grey",
          borderRadius: 5,
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Fifiyana
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "pink",
          borderRadius: 50,
          paddingHorizontal: 30,
          paddingVertical: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "600", color: "black" }}>
          105841104522
        </Text>
      </View>

      {/* Lingkaran */}
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: "cyan",
          borderRadius: 30,
        }}
      />
    </View>
  );
}