import { wp } from "../utils/utils"
/* fonts */
export const FontFamily = {
    robotoRegular: "Roboto-Regular",
    robotoBold: "Roboto-Bold",
    poppinsRegular: "Poppins-Regular",
    notoSansMedium: "NotoSans-Medium",
};
/* font sizes */
export const FontSize = {
    xs: wp(2.6),
    s: wp(3.1),
    m: wp(3.6),
    l: wp(4.1),
    xl: wp(4.6),
    xxl: wp(5.1),
    xxxl: wp(5.6),
};

/* Colors */
export const Color = {
    darkBlue: "#002d72",
    blue: "#0086bf",
    lightBlue: "#b3dfef",
    adjustableLightBlue: (opacity) => `rgba(0,134,191,${opacity})`,
    


    green: '#52CC7B',
    gray: "#5B6770",
    coal: "#332e30",
    inputField: '#E0E0E0',
    inputText: '#AAAAAA',
    text: '#8E8E8E',
    pink: '#D9576F',
    yellow: '#F2C248',
    white: '#FFFFFF',
    black: 'black',
};
export const TextStyles = {
    error_msg: {
        fontSize: FontSize.s,
        fontFamily: FontFamily.robotoRegular,
        color: Color.pink,
    },
    m_r_text: {
        fontSize: FontSize.m,
        fontFamily: FontFamily.robotoRegular,
        color: Color.text,
    },
    xxxl_b_darkBlue: {
        fontSize: FontSize.xxxl,
        fontFamily: FontFamily.robotoBold,
        color: Color.darkBlue,
    },

}

export const paddingBottomForBottomTabScreens = wp(25)