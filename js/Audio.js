class AudioPlayer {
    constructor()
    {
        // List of audio files
        this.audioList = [
            ["HAKK",    "sounds/hakk.ogg"],
            ["LAUGH",   "sounds/laugh.mp3"]
        ];
    }

    // Play audio if indentifier is found
    play(audio)
    {
        for (let i = 0; i < this.audioList.length; i++)
        {
            if (this.audioList[i][0] == audio)
            {
                var audioElement = document.createElement("audio");
                audioElement.setAttribute("src", this.audioList[i][1]);
                audioElement.load;
                audioElement.play();

            }
        }
    } 
}