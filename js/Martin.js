class Martin {
    constructor()
    {
        // Animation variables
        let turnDegree = 20;
        let turnPerFrame = 0.2;
        let updateSpeed = 30;

        let rotation = Math.floor(Math.random() * turnDegree);;
        let direction = "Right";
        let imgOrig = "img/Martin.png";
        let imgSmil = "img/MartinStortSmil.png";

        let smiling = false;

        // Draw image
        let img = new Image(475, 570);
        img.src = imgOrig;
        img.id = "martinImage";
        img.style.userSelect = "none";
        img.style.position = "absolute";
        img.style.left = "300px";
        img.style.transformOrigin = "bottom";
        let doc = document.getElementById("mainBody");
        doc.appendChild(img);

        // Rotate
        setInterval(function()
        {
            if (direction == "Right")
            {
                rotation += turnPerFrame;

                if (rotation > turnDegree)
                {
                    direction = "Left";
                }
            }
            else
            {
                rotation -= turnPerFrame;

                if (rotation < -turnDegree)
                {
                    direction = "Right";
            }
            }
           
            img.style.transform = `rotate(${rotation}deg)`;

        }, updateSpeed);

        // Smile on click
        img.addEventListener("click", function()
        {
            
            if (!smiling)
            {
                smiling = true;
                document.getElementById("martinImage").src = imgSmil;
                setTimeout(function(){
                    document.getElementById("martinImage").src = imgOrig;
                    smiling = false;
                }, 2500);
    
                audioPlayer.play("LAUGH");

            }
        });
    }    
}