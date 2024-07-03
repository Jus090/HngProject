function updateTime(){
    const currentTimeUTC = new Date().toUTCString();
    const currentDay = new Date().toLocaleDateString('en-Us',{weekday:'long'});

    document.querySelector('[data-testid ="currentTimeUTC"]').textContent = currentTimeUTC;

    document.querySelector('[data-testid ="currentDay"]').textContent = currentDay;
}

window.onload = function(){
    updateTime();
    setInterval(updateTime,1000);
}