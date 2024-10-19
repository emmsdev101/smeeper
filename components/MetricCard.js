import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export function MetricCard(){
    return (
        <View style={styles.card}>
            <ThemedText type="title">24</ThemedText>
            <ThemedText type="light">Temperature</ThemedText>

        </View>
    )
} 

const styles = StyleSheet.create({
    card: {
        flex:0,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 3,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
})