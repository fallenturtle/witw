var jPM = $.jPanelMenu({
    menu: '#main-nav',
    trigger: '.main-nav--toggle',
    openPosition: '300px',
    closeOnContentClick: 'true'
});
jPM.on();
document.getElementById("close-nav").addEventListener("click", function(){
    jPM.close();
});


