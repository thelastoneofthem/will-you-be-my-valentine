"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Jesteś pewien?",
      "DOPRAWDY?",
      "damn",
      "SKARBIE NOOO...",
      "proszę :3",
      "naprawdę ładnie proszę:3",
      "DLACZEGO",
      "czemu taki poważny...?",
      "to nie jest śmieszne:(",
      "IGOR NOOO...",
      "strasznie nie sigma",
      ":((((",
      "mega smutno :((((((",
      "NO BARDZO BARDZO ŁADNIE PROSZĘ :3",
      "smuteczek :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    // Load the Tenor embed script
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" />
          <div className="my-4 text-4xl font-bold">OMGGG MEGA SIGMA :333</div>
        </>
      ) : (
        <>
          <div className="tenor-gif-embed" data-postid="10508322235233729597" data-share-method="host" data-aspect-ratio="0.835341" data-width="20%">
            <a href="https://tenor.com/view/mohg-elden-ring-gif-10508322235233729597">Mohg Elden Ring Meme</a>
            from <a href="https://tenor.com/search/mohg-memes">Mohg Memes</a>
          </div>
          <h1 className="my-4 text-4xl">Skarbie, pytanko mam... będziesz moją walentynką?:3</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ofc:3
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

