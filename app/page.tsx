import React from "react";
import Card from "./components/Card";
import Gradient from "./components/Gradient";
import "./page.css";

export default function Home() {
  return (
    <div className="">
      
      <main className="flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 max-w-screen-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight pb-4 mt-[-40px] pt-5">
          Domaindle
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-extralight pb-4">
          the hub that has the collection of
          <span className="flex justify-center">
            {" "}
            all your favorite &quot;Le&apos;s&quot;
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 px-4">
          <Gradient />
          <Card
            href="https://www.nytimes.com/games/wordle/index.html"
            text="Wordle is a word puzzle game where players guess a hidden five-letter word within six attempts."
            title="Wordle"
          />
          <Card
            href="https://globle-game.com/"
            text="Your goal is to guess the country. After each guess, there will be a color indicating how close you are."
            title="Globle"
          />
          <Gradient />
          <Card
            href="https://likewisetv.com/arcade/moviedle"
            text="A fast clip of a movie, after each try, the clip gets longer, and you have to guess the movie within 5 tries."
            title="Moviedle"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 px-4">
          <Card
            href="https://polygonle.net/"
            text="Using different shapes that correspond to different letters, use patterns to help figure out the word."
            title="Polygonle"
          />
          <Card
            href="https://www.mathler.com/"
            text="Mathler requires you to use math operators to create an equation that equals the given answer."
            title="Mathler"
          />
          <Card
            href="https://contexto.me/"
            text="Find the secret word. You have unlimited guesses. The words were sorted by AI for word similarity."
            title="Contexto"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 px-4">
          <Gradient />
          <Card
            href="https://wafflegame.net/daily"
            text="Rearrange the letters into the correct word horizontally and vertically to match via dragging."
            title="Waffle"
          />
          <Card
            href="https://www.merriam-webster.com/games/quordle/#/"
            text="Guess four 5-letter words in 9 tries. Tiles change color after each guess to show correct letters."
            title="Quordle"
          />
          <Gradient />
        </div>
      </main>
    </div>
  );
}
