class DiamondOre {
    constructor()
    {
        // Animation variables
        let turnDegree = 10;
        let turnPerFrame = 0.1;
        let updateSpeed = 30;
        let maxShake = 2;
        let scale = 1;

        let rotation = Math.floor(Math.random() * turnDegree);
        let direction = "Right";

        // Draw image
        let img = new Image();
        img.src = "img/DiamondOre.png";
        img.id = "DiamondOre";
        img.style.userSelect = "none";
        //img.style.pointerEvents = "none";
        //img.setAttribute("draggable", false);
        img.style.position = "absolute";
        img.style.left = "100px";
        img.style.bottom = "150px"
        img.style.transformOrigin = "50% 70%";
        
        let doc = document.getElementById("mainBody");
        doc.appendChild(img);

        // Rotate and shake
        setInterval(function()
        {
            // Turning
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

            // Shaking
            let shake = (Math.floor(Math.random() * maxShake) - (maxShake/2));

            // Scaling
            if (scale < 1)
                scale += 0.1;

            // Set transform
            img.style.transform = `rotate(${rotation+shake}deg) scale(${scale})`;

        }, updateSpeed);

        // Make cursor big/small on mouseover
        img.addEventListener("mouseenter", function(Event)
        {
            cursor.makeBig();
        });

        img.addEventListener("mouseout", function(Event)
        {
            cursor.makeSmall();
           // cursor.pickUp();
        });

        // On click
        img.addEventListener("mousedown", function(Event)
        {
            scale = 0.7;

            let pickAxeLevel = sessionStorage.getItem("pickaxeM");
            increaseDiamonds(pickAxeLevel * 1);

            createDiamondParticles(Event.pageX, Event.pageY, 1);

            audioPlayer.play("HAKK");

          
            cursor.pickDown();
        });

        img.addEventListener("mouseup", function(Event)
        {
            cursor.pickUp();
        });

    }    
}