
class Diamond {
    constructor(x, y)
    {
        // Random initial position
        let curX = x - 20 - Math.floor(Math.random() * 10);
        let curY = y - 20 - Math.floor(Math.random() * 10);

        // Image css styles
        let img = new Image(40, 40);
        img.src = "img/Diamond.png";
        img.style.position = "fixed";
        img.style.top = `${curY}px`;
        img.style.left = `${curX}px`;
        img.style.zIndex = 5;
        img.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;        //img.style.backgroundColor = "red";
        img.style.pointerEvents = "none";

        // Random velocity
        let yVelocity = -Math.floor(Math.random() * 20);
        let xVelocity = -Math.floor(Math.random() * 10);
        
        document.body.appendChild(img);

        // Move diamonds
        let move = setInterval(function(){
                curY += yVelocity;
                curX += xVelocity;
                img.style.top = `${curY}px`;
                img.style.left = `${curX}px`;
                yVelocity++;
        }, 20);

        // Delete interval after 1 second
        setTimeout(function(){
            clearInterval(move);
            img.remove();
        }, 1000);
    }
}


function createDiamondParticles(x, y, numDiamonds)
{
    // Creates numDiamonds Diamond objects
    for (let i = 0; i < numDiamonds; ++i)
    {
        let newDiamond = new Diamond(x, y);
    }
}