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

const ForgotPassword = () => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <FocusedStatusBar backgroundColor={COLORS.primary}/>

            <View style={styles.container}>
                <View style={styles.box}>
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
                        right: 20
                    }}/>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter your Secret Recovery Phrase"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        autoCapitalize="none"/>
                    <View style={{
                        marginTop: 30
                    }}>
                        <View style={styles.flex}>
                            <Text style={styles.flexText}>New Password</Text>
                            <Text style={styles.flexText}>Show</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="New Password"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            autoCapitalize="none"/>
                    </View>
                    <View style={{
                        marginTop: 30
                    }}>
                        <View style={styles.flex}>
                            <Text style={styles.flexText}>Confirm Password</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Confirm Password"
                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                            autoCapitalize="none"/>
                    </View>
                </View>
                <Pressable
                    style={{
                    marginTop: 10
                }}
                    onPress={() => navigation.navigate("ForgotPassword")}>
                    <Text style={styles.forgot}>Must be at least 8 characters</Text>
                    <Text style={styles.forgot}>Unlock with face ID ?</Text>
                </Pressable>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>
                        Import
                    </Text>
                </TouchableOpacity>
                <View style={styles.button}>
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
        </SafeAreaView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#21212A',
        paddingTop: 30,
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
        borderRadius: 5,
        paddingHorizontal: 0,
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
        marginTop: 2,
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
    },

    button: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})