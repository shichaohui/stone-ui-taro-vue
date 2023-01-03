import Taro from "@tarojs/taro";

/**
 * 平台环境工具
 */
const platformUtils = {
  /**
   * 是否是 H5
   */
  isH5() {
    return process.env.TARO_ENV === "h5";
  },
  /**
   * 是否是微信小程序
   */
  isWeapp() {
    return process.env.TARO_ENV === "weapp";
  },
};

export default platformUtils;
