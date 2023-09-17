import {StyleSheet} from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const Style = StyleSheet.create ({
    container: {
        flex: 1,
        opacity: 1,
        alignItems: "center",
        justifyContent: "center",
        
    },
    scrollView: {
        width: 300,
        height:'auto',
        backgroundColor: "#f9f9f9",
        marginTop: -10,
    },
    timeLine:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column-reverse',
        width:'auto',
    },
    containerTime:{
        width:290,
        height:105,
        marginBottom:52,
    },
    calendarTime:{
        marginLeft: 15,
        marginTop: -10,
        marginBottom: 0,
        color:colors.purple
    },
    lineResultTimeLine:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f2f2f2',
        borderRadius:25,
        marginLeft:20,
    },
    titleTime:{
        fontSize: fonts.size.font14,
        //fontFamily:'Montserrat-SemiBold',
        color: colors.purple,
        height:'auto',
        width:'auto',
        marginBottom:5,
    },
    titleTimeUrsula:{
        fontSize: fonts.size.font13,
        //fontFamily:'Montserrat-SemiBold',
        color: colors.purple,
        height:'auto',
        width:'auto',
        marginLeft: 30,
        marginTop: 20,
        top: 10,
        marginBottom: 17,
    },  
    clockTime:{
        fontSize: fonts.size.font14,
        fontFamily:fonts.family.regular,
        color: colors.purple,
    },
    idTime:{
        fontSize: fonts.size.font12,
        fontFamily:fonts.family.regular,    
        color: colors.gray6,
        marginTop:5,
    },
    imageIconTime:{
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginLeft: -10,
        marginRight: -3,
    },  
    notAssessments: {
        color:colors.purple,
        //fontFamily:'Montserrat-Regular',
        fontSize: fonts.size.font10,
        marginBottom:10,
    },
    logo: {
        marginTop: 10,
        marginRight: 250,
    },
});

export default Style;