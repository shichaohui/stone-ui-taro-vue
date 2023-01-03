const taroComponentList = [
  "view",
  "icon",
  "progress",
  "rich-text",
  "text",
  "button",
  "checkbox",
  "checkbox-group",
  "form",
  "input",
  "label",
  "picker",
  "picker-view",
  "picker-view-column",
  "radio",
  "radio-group",
  "slider",
  "switch",
  "cover-image",
  "textarea",
  "cover-view",
  "movable-area",
  "movable-view",
  "scroll-view",
  "swiper",
  "swiper-item",
  "navigator",
  "audio",
  "camera",
  "image",
  "live-player",
  "video",
  "canvas",
  "ad",
  "web-view",
  "block",
  "map",
  "open-data",
  "custom-wrapper",
  "canvas",
  "editor",
  "navigation-bar",
  "official-account",
  "functional-page-navigator",
];

const taroComponentRegExpList = taroComponentList.map((item) => ({
  regExp: new RegExp(`createElementBlock\\("${item}"`, "g"),
  replace: `createElementBlock\(platformUtils.isH5() ? "taro-${item}-core" : "${item}"`,
}));

function transformTag(code) {
  taroComponentRegExpList.forEach(({ regExp, replace }) => {
    code = code.replace(regExp, replace);
  });
  return code;
}

function transformTap(code) {
  const tapList = code.match(/onTap: [a-zA-z0-9-]+/g) || [];
  tapList.forEach((item) => {
    code = code.replace(item, `${item.replace("onTap:", "onClick:")}, ${item}`);
  });
  return code;
}

module.exports = function () {
  return {
    name: "rollup-plugin-taro-transform",
    transform(code) {
      code = transformTag(code);
      code = transformTap(code);
      return code;
    },
  };
};
