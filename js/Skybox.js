class ExtendingCircle
{
    constructor(color)
    {
        //alert();
        let mainBody = document.getElementById("mainBody");
        let clientWidth = mainBody.clientWidth;
        let clientHeight = mainBody.clientHeight;
        

        let canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.left = "0px";
        canvas.style.top = "0px";
        //canvas.style.width = "200";
        canvas.style.width = `${clientWidth}px`;
        canvas.style.height = `${clientHeight}px`;
        canvas.style.zIndex = "0";
        //canvas.style.backgroundColor = "red";
      
        
        mainBody.appendChild(canvas);

        let context = canvas.getContext("2d");
        context.globalCompositeOperation = 'destination-over';
        let centerX = (canvas.width / 2) - 30;
        let centerY = canvas.height / 2;

        let radius = 0;
        
/*         context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = "Green";
        context.fill();

        radius = 40;
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fill(); */

        let timer = setInterval(function()
        {
            // test
             //centerX = Math.floor(Math.random() * 500);
             //centerY = Math.floor(Math.random() * 500);


            radius += 0.4;
            context.beginPath();
            context.arc(centerX, canvas.height, radius, 0, 2 * Math.PI, false);

            context.fillStyle = color;//`#${radius}0000`;
            context.fill();
            
        }, 50)

        setTimeout(function()
        {
            canvas.remove();
            clearInterval(timer);
        }, 40000)
    }
}

class Skybox
{
    constructor()
    {
        setInterval(function()
        {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            //alert(r);
            //new ExtendingCircle(`#${r}${g}${b}`);
            //`#${radius}0000`


        }, 1000)



        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        //alert(r);
        new ExtendingCircle(`#${r}${g}${b}`);
        //new ExtendingCircle();
        /* let mainBody = document.getElementById("mainBody");
        let clientWidth = mainBody.clientWidth;
        let clientHeight = mainBody.clientHeight;
        

        let canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.left = "0px";
        canvas.style.top = "0px";
        //canvas.style.width = "200";
        canvas.style.width = `${clientWidth}px`;
        canvas.style.height = `${clientHeight}px`;
 
        //canvas.style.backgroundColor = "red";
      
        
        mainBody.appendChild(canvas);

        let context = canvas.getContext("2d");
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;

        let radius = 10;
        
/*         context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = "Green";
        context.fill();

        radius = 40;
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fill(); */

        setInterval(function()
        {
            // test
             centerX = Math.floor(Math.random() * 500);
             centerY = Math.floor(Math.random() * 500);


            radius++;
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = "Green";
            context.fill();
        }, 100) 
    }
}