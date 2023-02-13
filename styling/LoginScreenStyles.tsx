import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2a2438",
  },

  inputContainer: {
    width: "86%",
  },

  inputLeftIcon: {
    paddingRight: 10,
  },

  inputText: {
    color: "#afa8bf",
  },

  button: {
    backgroundColor: "#afa8bf",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  buttonTitle: {
    color: "#2a2438",
    paddingHorizontal: 6,
    fontWeight: "bold",
    fontSize: 18,
  },

  notRegisteredText: {
    fontSize: 20,
    paddingHorizontal: 60,
    textAlign: "center",
    marginTop: "6%",
    color: "#afa8bf",
  },
});