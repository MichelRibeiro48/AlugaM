import { StyleSheet } from "react-native";

export default StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#EBF7FF'
  },
  loginText: {
    color: '#457495',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 75,
    alignSelf: 'flex-start',
    paddingLeft: 58,

  },
  marksButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 84,
  },
  marksAlignButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgetPassword: {
    color: '#E05A5A',
    textDecorationLine: 'underline'
  }
})