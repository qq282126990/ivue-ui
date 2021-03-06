import Vue from 'vue';
import VueRouter from 'vue-router';
import Directives from '../src/utils/directives';

// 注册全局指令
// ripple resize touch click-outside
Object.keys(Directives).forEach(key => {
    Vue.directive(key, Directives[key]);
});

import "../src/styles/index.scss";
// import "./components/IvueButton.test";
// import "./components/IvueIcon.test";
// import "./components/IvueList.test";
// import "./components/IvueListItem.test";
// import "./components/IvueSpin.test";
// import "./components/IvueCarousel.test";
// import "./components/IvueSwitch.test";
// import "./components/IvueBottomNav.test";
// import "./components/IvueBreadcrumbs.test";
// import "./components/IvueSelect.test";
// import "./components/IvueAutoComplete.test";
// import "./components/IvueInput.test";
// import "./components/IvueStepper.test";
// import "./components/IvueUpLoad.test";
// import "./components/IvueProgress.test";
// import "./components/IvueNotice.test";
// import "./components/IvueMessage.test";
// import "./components/IvueTabs.test";
// import "./components/IvueLoadingBar.test";
// import "./components/IvueBadge.test";
// import "./components/IvueDatePicker/index";
// import "./components/IVueVirtualCollection/index";
// import "./components/IVueCollapse.test";
// import "./components/IvueCascader.test";
// import "./components/IVueTooltip.test";
// import "./components/IVueChip.test.js";
// import "./components/IVueRadio.test.js";
// import "./components/IVueCheckBox.test.js";
// import "./components/IVueAvatar.test.js";
import "./components/IVuePage.test.js";
