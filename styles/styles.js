import { Platform, StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#30687A',
    },
    container1:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop: Platform.OS == 'ios'
    },
    containerHeader:{
        marginTop:"35%",
        marginBottom:"8%",
        paddingStart:"5%",
    },
    containerHeaderCadastro:{
        marginTop:"5%",
        marginBottom:"8%",
        paddingStart:"5%",
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color:"#fff"
    },
    containerForm:{
        backgroundColor: "#fff",
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title:{
        fontSize:20,
        marginTop:28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: "#30687A",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf: "center"
    },
    registerText:{
        color:"#a1a1a1"
    },
    content:{
        alignSelf: "center",
        flex: 1,
        width:"98%",
        height:120,
        marginBottom: 20,
        backgroundColor:"#f1f1f1",
        alignItems: 'center',
        justifyContent:'center'
    }
  });

export default styles