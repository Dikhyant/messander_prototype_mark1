const messageDisplay = document.querySelector(".message-display");
const ui = document.querySelector(".ui");

ui.addEventListener("submit", e=>{
    e.preventDefault();
    //accuire the texts
    const senderId = ui.sender.value;
    const message = ui.message.value;

    console.log(senderId+": "+message);
    sendData({
        senderId: senderId,
        message: message
    });
    
    ui.sender.value = "";
    ui.message.value = "";
})