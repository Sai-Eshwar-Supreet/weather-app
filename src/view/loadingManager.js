const loadingPanel = document.querySelector('#loading-panel'); 

function setLoader(active){
    active = Boolean(active);
    if(active) loadingPanel.showModal();
    else loadingPanel.close();
}

export { setLoader };
