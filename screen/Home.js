import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

import FocusedStatusBar from '../components/FocusedStatusBar';
import {COLORS} from '../constants/theme'

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <FocusedStatusBar backgroundColor={COLORS.primary}/>

            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.header}>
                        <Text style={styles.title}>saita</Text>mask
                    </Text>
                    <Text style={styles.login}>Wallet setup</Text>
                    <Text style={styles.wallet}>Import an existing wallet or create a new one</Text>
                </View>
                <View
                    style={{
                    width: '100%',
                    height: '55%',
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                        width: 150,
                        height: 150,
                        resizeMode: 'contain'
                    }}
                        source={{
                        uri: 'https://play-lh.googleusercontent.com/HmXjCZa048la55QfEg_6CJo8Qt7NN0HVUR2cu8uk5gm5BoNhEXulPrgT0Qbnoaf3tHfl'
                    }}/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.submitButton2}
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.submitButtonText2}>
                            Import using Secret Recovery Phrase
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={styles.submitButtonText}>
                            Create a new Wallet
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                        marginTop: 10,
                        marginLeft: 20
                    }}>
                        <Text
                            style={{
                            fontSize: 12,
                            color: '#fff'
                        }}>By proceeding, you agree to these
                            <Text
                                style={{
                                color: '#CF459A'
                            }}>
                                Terms and Conditions</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#21212A',
        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 0
    },

    box: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        fontSize: 30,
        fontWeight: '700',
        color: '#fff',
        marginTop: 10,
        textTransform: 'uppercase'
    },

    title: {
        color: '#CF459A'
    },

    login: {
        fontSize: 27,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 10,
        color: '#fff'
    },

    wallet: {
        fontSize: 17,
        color: '#fff'
    },

    button: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitButton: {
        width: '100%',
        backgroundColor: '#CF459A',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        marginTop: 20,
        marginLeft: 30,
        marginBottom: 30
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    },

    submitButton2: {
        width: '100%',
        backgroundColor: 'transparent',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        marginLeft: 30,
        borderColor: '#CF459A',
        borderStyle: 'solid',
        borderWidth: 1
    },
    submitButtonText2: {
        color: '#CF459A',
        fontSize: 18,
        fontWeight: '700'
    }
})