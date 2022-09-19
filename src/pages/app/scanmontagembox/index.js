import React, { useEffect, useState, useMemo } from 'react';
import { RouteContext } from '../../../context';
import Header from '../../../components/Header';
import Colors from '../../../utils/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes, faTruck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { width, height, totalSize } from 'react-native-dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import Scanner from '../../../components/Scanbox';
import api from '../../../services/api';
import { showMessage, hideMessage } from "react-native-flash-message";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Scanmountbox = (props) => {
    const { cli } = props.route.params

    const navigation = useNavigation();
    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [open, setOpen] = useState(false);
    const isFocused = useIsFocused();
    const routeContext = React.useMemo(() => {
    });

    useEffect(() => {
    }, []);

    useEffect(() => {
        return () => {
        };
    }, []);

    const renderLoading = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    };

    async function readbox(box) {
        props.navigation.navigate('Scanrequest', { box: box, idroute: props.route.params.idroute });

    }

    const backHome = () => {
        props.navigation.navigate('Route', { idroute: props.route.params.idroute });
    }

    return (
        <RouteContext.Provider value={routeContext}>
            <View style={styles.main}>
                <View style={styles.page}>
                    {isFocused && <Scanner handle={readbox} idroute={props.route.params.idroute} />}
                </View>
            </View>
        </RouteContext.Provider>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.blue,
    },
    page: {
        backgroundColor: Colors.white,
        height: height(100),
        width: width(100),
    },

    scroll: {
        marginBottom: 30,
    },
    header: {
        marginBottom: 5,
    },
    iconstbn: {
        marginTop: 5,
        marginLeft: 5,
        color: Colors.graygeneral,
    },
    containertitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    titlepage: {
        fontSize: 22,
        marginBottom: 20,
        marginTop: -5,
        color: Colors.graygeneral,
    },
    iconstitle: {
        marginRight: 10,
        color: Colors.graygeneral,
    },
    wait: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height(80),
    },
    empty: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: height(60),
    },
    textempty: {
        textAlign: 'center',
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: height(60),
    },
});

export default Scanmountbox;