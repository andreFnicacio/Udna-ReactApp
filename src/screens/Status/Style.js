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
    timeLine:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        height:'auto',
        width:'auto',
        marginTop:15
    },
    containerTime:{
        width:290,
        height:105,
        backgroundColor:colors.gray3,
        borderRadius:15,
        marginTop:5,
        marginBottom:10,
        shadowOpacity:0.1,
        shadowRadius:0.1,
        shadowOffset: {width: 0,height: 3},
        shadowColor: colors.gray1,
    },
    calendarTime:{
        marginLeft: 15,
        marginBottom: 5,
        color:colors.purple
    },
    lineResultTimeLine:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.gray,
        borderRadius:15,
        margin:1
    },
    lineResultTimeLineLaudo:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:colors.gray,
        borderRadius:15,
        margin:1
    },
    lineResultTimeLineReports:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:colors.white,
        borderRadius:10,
    },
    titleTime:{
        fontSize: fonts.size.font16,
        //fontFamily:'Montserrat-SemiBold',
        color: colors.purple,
        height:'auto',
        width:'auto',
        marginBottom:5,
    },
    clockTime:{
        fontSize: fonts.size.font14,
        //fontFamily:'Montserrat-Regular',
        color: colors.purple,
    },
    borderButton:{
        marginTop:5,
        borderRadius:20,
        backgroundColor:colors.blue1,
        
    },
    borderButtonDesable:{
        marginTop:5,
        borderRadius:20,
        backgroundColor:colors.blue2,
        
    },
    borderButtonUdna:{
        marginTop:5,
        borderRadius:20,
        backgroundColor:colors.gray,
        
    },    
    borderButtonOne:{
        backgroundColor:colors.white,
        borderRadius:20,
        margin:1,
    },
    idTime1:{
        fontSize: fonts.size.font12,
        //fontFamily:'Montserrat-Regular',
        color: colors.black,
        margin:5,
    },
    idTime2:{
        fontSize: fonts.size.font14,
        //fontFamily:'Montserrat-Regular',
        color: colors.blue1,
        margin:5,
        textAlign:'center'
    },
    idTimeUdna:{
        fontSize: fonts.size.font14,
        //fontFamily:'Montserrat-Regular',
        color: colors.gray,
        margin:5,
        textAlign:'center'
    },    
    idTime:{
        fontSize: fonts.size.font12,
        //fontFamily:'Montserrat-Regular',
        color: colors.purple,
        marginTop:5,
    },
    imageIconTime:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        left: 20,
        marginLeft: 20,
        borderRadius:20,
    },  
    notAssessments: {
        color:colors.purple,
        //fontFamily:'Montserrat-Regular',
        fontSize: fonts.size.font12,
        marginBottom:10,
    },
    logo: {
        marginTop: 10,
        marginRight: 250,
    },
    
});

export default Style;