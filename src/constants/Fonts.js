import {moderateScale} from '../utilities/responsive-fonts';

const Fonts = {
  extraLarge: {
    fontFamily: 'OpenSans-Regular',
    fontSize: moderateScale(18),
  },
  extraLargeBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(18),
  },
  header: {
    fontFamily: 'OpenSans-Regular',
    fontSize: moderateScale(20),
  },
  headerBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(20),
  },
  large: {
    fontFamily: 'OpenSans-Regular',
    fontSize: moderateScale(16),
  },
  largeBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(16),
  },
  regular: {
    fontFamily: 'OpenSans-Regular',
    fontSize: moderateScale(14),
  },
  regularBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(14),
  },
  smallBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: moderateScale(12),
  },
  Roboto: {
    small: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(11),
    },

    tiny: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(12),
    },

    regularSmall: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(12),
    },

    regularSmallBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(12),
    },

    regular: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(14),
    },

    regularBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(14),
    },

    medium: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(15),
    },

    mediumBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(15),
    },
    mediumRegular: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(16),
    },

    large: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(17),
    },

    largeBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(17),
    },

    extraLarge: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(18),
    },

    extraLargeBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(18),
    },

    huge: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(26),
    },

    hugeBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(26),
    },

    headerSmall: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(22),
    },

    headerSmallBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(22),
    },


    header: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto_Regular',
      fontSize: moderateScale(34),
    },

    headerBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Bold',
      fontSize: moderateScale(34),
    },
    headerSemiBold: {
      fontFamily: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto_Regular',
      fontSize: moderateScale(22),
    }
  },
  MavenPro: {
    small: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(11),
    },

    tiny: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(12),
    },

    tinyBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(12),
    },
    tinySemiBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-SemiBold' : 'MavenPro_SemiBold',
      fontSize: moderateScale(12),
    },

    regularSmall: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(13),
    },

    regularSmallBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(13),
    },

    regular: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(14),
    },

    regularBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(14),
    },

    medium: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(15),
    },

    mediumBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(15),
    },
    mediumSemiBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-SemiBold' : 'MavenPro_SemiBold',
      fontSize: moderateScale(16),
    },
    mediumLarge: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(16),
    },

    large: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(17),
    },

    largeBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(17),
    },

    extraLarge: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(18),
    },

    extraLargeBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(18),
    },

    huge: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(26),
    },

    hugeBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(26),
    },

    headerSmall: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(22),
    },

    headerSmallBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(22),
    },

    header: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Regular' : 'MavenPro_Regular',
      fontSize: moderateScale(34),
    },
    headerBold: {
      fontFamily: Platform.OS === 'ios' ? 'MavenPro-Bold' : 'MavenPro_Bold',
      fontSize: moderateScale(34),
    },
  },
  SourceSansPro: {
    regular: {
      fontFamily: Platform.OS === 'ios' ? 'SourceSansPro-Regular' : 'SourceSansPro_Regular',
      fontSize: moderateScale(14),
    },
  },
  OpenSans: {
    maxSmallRegular: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular',
      fontSize: moderateScale(8),
    },
    extraSmallRegular: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular',
      fontSize: moderateScale(11),
    },
    extraSmallBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans_Bold',
      fontSize: moderateScale(11),
    },
    extraLarge: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular',
      fontSize: moderateScale(18),
    },
    extraLargeBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans_Bold',
      fontSize: moderateScale(18),
    },
    header: {
      fontFamily: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular',
      fontSize: moderateScale(20),
    },
    headerBold: {
      fontFamily:  Platform.OS === 'ios' ?  'OpenSans-Bold' :  'OpenSans_Bold',
      fontSize: moderateScale(20),
    },
    large: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular',
      fontSize: moderateScale(16),
    },
    largeBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans_Bold',
      fontSize: moderateScale(16),
    },
    regular: {
      fontFamily: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular',
      fontSize: moderateScale(14),
    },
    regularBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans_Bold',
      fontSize: moderateScale(14),
    },
    smallRegular: {
      fontFamily: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans_Regular',
      fontSize: moderateScale(12),
    },
    smallBold: {
      fontFamily: Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans_Bold',
      fontSize: moderateScale(12),
    },
    mediumSemiBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-SemiBold' : 'OpenSans_SemiBold',
      fontSize: moderateScale(14),
    },
    smallSemiBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-SemiBold' : 'OpenSans_SemiBold',
      fontSize: moderateScale(11),
    },
    largeHeaderBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-SemiBold' : 'OpenSans_SemiBold',
      fontSize: moderateScale(24),
    },
    semiSmallBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-SemiBold' : 'OpenSans_SemiBold',
      fontSize: moderateScale(12),
    },
    mediumSemiBold: {
      fontFamily:  Platform.OS === 'ios' ? 'OpenSans-SemiBold' : 'OpenSans_SemiBold',
      fontSize: moderateScale(14),
    },
  },
  Helvetica: {
    regular: {
      fontFamily:  Platform.OS === 'ios' ? 'HelveticaLt' : 'HelveticaLt',
      fontSize: moderateScale(12),
    },
    regular: {
      fontFamily:  Platform.OS === 'ios' ? 'HelveticaLt' : 'HelveticaLt',
      fontSize: moderateScale(14),
    },
    large: {
      fontFamily:  Platform.OS === 'ios' ? 'HelveticaLt' : 'HelveticaLt',
      fontSize: moderateScale(12),
    },
    extraLargeBold: {
      fontFamily:  Platform.OS === 'ios' ? 'HelveticaLt' : 'HelveticaLt',
      fontSize: moderateScale(18),
    },
    large: {
      fontFamily:  Platform.OS === 'ios' ? 'HelveticaLt' : 'HelveticaLt',
      fontSize: moderateScale(24),
    },
    
  }

};

module.exports = Fonts;
