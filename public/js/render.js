function render(data){
    const div = document.createElement("div");
    div.innerHTML = data.senderId + ": " + data.message;

    messageDisplay.appendChild(div);
}