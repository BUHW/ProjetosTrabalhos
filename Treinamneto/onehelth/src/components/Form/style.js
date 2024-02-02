import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContex:{
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#ff0043",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    button:{
        backgroundColor: "#ff0043",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    txtButton:{
        fontSize: 20,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})

export default styles