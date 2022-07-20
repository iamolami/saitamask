import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Pressable
} from 'react-native';

import FocusedStatusBar from '../components/FocusedStatusBar';
import {COLORS} from '../constants/theme'
import {assets} from '../constants'

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <FocusedStatusBar backgroundColor={COLORS.primary}/>

            <View style={styles.container}>
                <View style={styles.box}>
                    <Image
                        style={{
                        width: 120,
                        height: 120,
                        resizeMode: 'contain'
                    }}
                        source={{
                        uri: 'https://play-lh.googleusercontent.com/HmXjCZa048la55QfEg_6CJo8Qt7NN0HVUR2cu8uk5gm5BoNhEXulPrgT0Qbnoaf3tHfl'
                    }}/>
                    <Text style={styles.header}>
                        <Text style={styles.title}>saita</Text>mask</Text>
                    <Text style={styles.login}>Import from Seed</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.flex}>
                        <Text style={styles.flexText}>Secret Recovery Phrase</Text>
                        <Text style={styles.flexText}>Show</Text>
                    </View>
                    <Image
                        source={assets.scan}
                        resizeMode="contain"
                        style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        top: 78,
                        right: 35
                    }}/>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter your Secret Recovery Phrase"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        autoCapitalize="none"/>
                </View>
                <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgot}>Forgot Password ?</Text>
                </Pressable>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.register}>Don't have an account yet ?
                        <Text style={styles.title}>
                            Register</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#21212A',
        paddingTop: 50,
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
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        marginTop: 10,
        textTransform: 'uppercase'
    },

    title: {
        color: '#CF459A'
    },

    login: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 30,
        color: '#fff'
    },

    form: {
        width: '100%',
        paddingBottom: 25,
        backgroundColor: '#101015',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 25
    },

    input: {
        marginTop: 15,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 2,
        fontSize: 15,
        color: '#fff'
    },

    forgot: {
        marginTop: 20,
        fontSize: 15,
        color: '#CF459A'
    },

    submitButton: {
        backgroundColor: '#CF459A',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        marginTop: 35
    },
    submitButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    register: {
        fontSize: 15,
        marginTop: 30,
        color: '#fff'
    },

    flex: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    flexText: {
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: 18
    }
});

export default Login