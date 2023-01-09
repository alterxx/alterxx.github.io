// set the title for site
const siteTitle = 'home '.concat('#'+1);
document.title = siteTitle;

/* create variables that will shortify the time
on work on element and title names*/
const element_global = 'element_name: ';
const page_global = 'page_title: ';
const on_click_global = 'on_click: ';

// enter the position of #1 button
function mouseEnterChannelButton() {
    document.getElementById('title-id').innerText = element_global+document.getElementById('channel-btn').innerText+';';
}
// enter the position of #2 button
function mouseEnterGameJoltButton() {
    document.getElementById('title-id').innerText = element_global+document.getElementById('gamejolt-btn').innerText+';';
}

// leave the position of buttons
function mouseLeaveIdG() {
    document.getElementById('title-id').innerText = page_global+siteTitle+';';
}

// we have clicked to channel button
function channelButton() {
    document.getElementById('title-id').innerText = on_click_global+document.getElementById('channel-btn').innerText+';';
}
// we have clicked to gamejolt button
function gameJoltButton() {
    document.getElementById('title-id').innerText = on_click_global+document.getElementById('gamejolt-btn').innerText+';';
}

function pageHide() {
    console.log('Page was hidden');
    document.title = 'hidden';
    document.getElementById('title-id').innerText = 'page_status: hidden'+';';
}

// audio
var x = document.getElementById('myAudio');
function music() {
    document.music
}