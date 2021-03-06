import Metrics from './Metrics';
import Colors from './Colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

let ApplicationStyles: {
  groupContainer: {
    margin: number;
    alignItems: string;
    flexDirection: string;
    justifyContent: string;
  };
  sectionTitle: {
    padding: number;
    marginHorizontal: number;
    backgroundColor: string;
    borderColor: string;
    color: string;
    alignItems: string;
    textAlign: string;
    borderWidth: number;
    marginTop: number;
  };
  darkLabelContainer: {
    borderBottomColor: string;
    padding: number;
    paddingBottom: number;
    marginBottom: number;
    borderBottomWidth: number;
  };
  darkLabel: {color: string};
  screen: {
    mainContainer: {backgroundColor: string; flex: number};
    container: {backgroundColor: string; flex: number; paddingTop: number};
    sectionText: {
      paddingVertical: number;
      color: string;
      marginVertical: number;
      textAlign: string;
    };
    backgroundImage: {
      top: number;
      left: number;
      bottom: number;
      position: string;
      right: number;
    };
    subtitle: {
      padding: number;
      marginHorizontal: number;
      color: string;
      marginBottom: number;
    };
    titleText: {color: string; fontSize: number};
    section: {padding: number; margin: number};
  };
};

ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
    },
    sectionText: {
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
    titleText: {
      fontSize: 14,
      color: Colors.text,
    },
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  },
  darkLabel: {
    // fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sectionTitle: {
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center',
  },
};

export default ApplicationStyles;
