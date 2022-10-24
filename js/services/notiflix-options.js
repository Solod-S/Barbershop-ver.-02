//настройки Notiflix
export default {
  width: "280px",
  position: "left-bottom", // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: "10px",
  opacity: 1,
  borderRadius: "5px",
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: "rgba(0,0,0,0.5)",
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,

  ID: "NotiflixNotify",
  className: "notiflix-notify",
  zindex: 4001,
  fontFamily: "Quicksand",
  fontSize: "17px",
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: "fade" - "zoom", // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  closeButton: false,
  useIcon: false,
  useFontAwesome: true,
  fontAwesomeIconStyle: "basic" - "shadow", // 'basic' - 'shadow'
  fontAwesomeIconSize: "34px",

  success: {
    background: "#b95f76",
    textColor: "#fff",
    childClassName: "notiflix-notify-success",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-check-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(50,198,130,0.2)",
  },

  failure: {
    background: "#ff6c00",
    textColor: "#fff",
    childClassName: "notiflix-notify-failure",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-times-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(255,85,73,0.2)",
  },

  warning: {
    background: "#b95f76",
    textColor: "#fff",
    childClassName: "notiflix-notify-warning",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-exclamation-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(238,191,49,0.2)",
  },

  info: {
    background: "#9da4bd",
    textColor: "#FFFFFF",
    childClassName: "notiflix-notify-info",
    notiflixIconColor: "rgba(255,255,255)",
    fontAwesomeClassName: "fas fa-info-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(38,192,211,0.2)",
  },
};
