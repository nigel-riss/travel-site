import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");