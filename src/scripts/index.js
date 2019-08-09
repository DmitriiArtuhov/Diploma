import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import modalToggle from './modules/modalToggle';
import scrollMenu from './modules/scrollMenu';
import scrollSnap from './modules/scrollSnap';
import arrowScrollSnap from './modules/arrowScrollSnap';
import showStickyMenu from './modules/showStickyMenu';
import calc from './modules/calc';
import postEdit from './modules/post.js';
import sliderClients from './modules/sliderClients';

// menus popup
modalToggle('.modal_support', 'modal_support_active', '.support-header img');
modalToggle('.modal_offer', 'modal_support_active', '.support-header img');
// scroll anchor
scrollMenu('.two', 'a');
scrollMenu('.two-mini', 'a');
scrollMenu('.footer-top', 'a');
// scroll snap
scrollSnap('body','section');
arrowScrollSnap('body', '.arrow-down-link');
// mini menu
showStickyMenu('.two-mini');
//calc
calc('.calc-container', '#select-calc', '.radio-btn-parent', '#total-price');
// posts editing 
postEdit();
//client slider
sliderClients('.btn-client-right', '.btn-client-left', '#client-slider', '.sl2-slide');