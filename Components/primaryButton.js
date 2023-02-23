import { Pressable, Text, View, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {};

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        // Note that pressable style prop also takes a function which receives press data
        //  we can also add the array of styles
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    elevation: 2,
  },

  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: { color: "white", textAlign: "center" },
  pressed: { opacity: 0.75 },
});

export default PrimaryButton;
