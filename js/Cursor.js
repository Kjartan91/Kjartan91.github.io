class Cursor {
    constructor()
    {
        this.cursorList = [
            [0, "img/Pickaxe_0.png"],
            [1, "img/Pickaxe_1.png"],
            [2, "img/Pickaxe_2.png"],
            [3, "img/Pickaxe_3.png"],
            [4, "img/Pickaxe_4.png"],
            [5, "img/Pickaxe_5.png"]
        ];

        this.xAlign = 20;
        this.yAlign = 30;

        // Draw image
        this.img = new Image();
        this.img.src = "img/Pickaxe_0.png";
        this.img.id = "Pickaxe";
        this.img.style.userSelect = "none";
        this.img.style.pointerEvents = "none";
        this.img.style.position = "fixed";
        this.img.style.top = "10000px"
        this.img.style.left = "10000px";
        this.img.style.transformOrigin = "20px 25px";
        this.img.style.scale = "0.5";
        this.img.style.zIndex = 100;
        
        let doc = document.getElementById("mainBody");
        doc.appendChild(this.img);

        let cursorImg = this.img;


        function mousemove (Event)
        {

            cursorImg.style.left = `${Event.pageX - this.xAlign}px`;
            cursorImg.style.top = `${Event.pageY - this.yAlign}px`;
        }

        doc.addEventListener("mousemove", mousemove.bind(this), false);





        this.pickingInterv;

    }

    setCursor(cursorId)
    {
        for (let i = 0; i < this.cursorList.length; i++)
        {
            if (this.cursorList[i][0] == cursorId)
            {
            
                this.img.src = this.cursorList[i][1];

            }
        }
    }

    makeBig()
    {
        this.img.style.scale = "1";
        this.xAlign = -20;
        this.yAlign = 170;
    }

    makeSmall()
    {
        this.img.style.scale = "0.5";
        this.xAlign = 20;
        this.yAlign = 30;
        this.img.style.transformOrigin = "20px 25px";
        
    }



    pickUp()
    {
        
       // this.img.style.transformOrigin = "bottom right";
        this.img.style.rotate = "0deg";
        //this.img.style.transformOrigin = "20px 25px";
    }

    pickDown()
    {
       
        this.img.style.transformOrigin = "bottom right";
        this.img.style.rotate = "-45deg";
        //this.img.style.transformOrigin = "20px 25px";

        //pickingInterv = setTimeout(pickUp.bind(this), 1000);
    }
}