class MessageBox
{
    constructor(title, message, duration)
    {
        
        
        let messageBox = document.createElement("div");
        messageBox.style.position = "absolute";
        messageBox.style.left = "150px";
        messageBox.style.top = "150px";
        messageBox.style.width = "500px";
        messageBox.style.border = "2px solid gray";
        messageBox.style.backgroundImage = "url('img/Wall.png')";
        
        messageBox.style.backgroundColor = "red";
        messageBox.style.zIndex = "9";
        
        let mainBody = document.getElementById("mainBody");
        mainBody.appendChild(messageBox);

        let titleTxt = document.createElement("h1");
        titleTxt.innerHTML = title;
        titleTxt.style.textAlign = "center";
        titleTxt.style.opacity = "0";
        titleTxt.style.color = "white";
        titleTxt.style.fontSize = "40px";
        messageBox.appendChild(titleTxt);

        let messageTxt = document.createElement("p");
        messageTxt.innerHTML = message;
        messageTxt.style.textAlign = "center";
        messageTxt.style.opacity = "0";
        messageTxt.style.color = "white";
        messageTxt.style.fontSize = "20px";
        messageBox.appendChild(messageTxt);
        //let titleTxt = messageBox.createElement("h3");
        //titleTxt.innerHTML = "Test";

        let origWidth = messageBox.clientWidth;
        let origHeight = messageBox.clientHeight;
        let curWidth = 0;
        let curHeight = 0;

        messageBox.style.width = "0px";
        messageBox.style.height = "0px";

        let curOpacity = 0;

        setInterval(function()
        {
            // Increase size
            if (curWidth < origWidth)
                curWidth += 100;
            if (curHeight < origHeight)
                curHeight += 30;

            // Reduce size if beyond original size
            if (curWidth > origWidth)
                curWidth = origWidth;
            if (curHeight > origHeight)
                curHeight = origHeight;

            // Increase opacity if size is reached
            if ((curWidth == origWidth) && (curHeight == origHeight))
            {
                curOpacity += 0.1;
                titleTxt.style.opacity = curOpacity;
                messageTxt.style.opacity = curOpacity;
            }

            messageBox.style.width = `${curWidth}px`;
            messageBox.style.height = `${curHeight}px`;
        }, 10);

        // delete messageBox
        setTimeout(function()
        {
            messageBox.remove();
        }, duration);

    }
}