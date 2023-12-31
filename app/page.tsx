import React from "react";
import Card from "./components/Card";
import Gradient from "./components/Gradient";
import "./page.css";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="your-element-class">
      <main className="flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 max-w-screen-2xl">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold pb-4 mt-[-40px] pt-5 bg-gradient-to-r from-cyan-300 via-purple-600 to-pink-500 text-transparent bg-clip-text animate-gradient ">
          Domaindle
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light pb-4 text-white">
          the hub that has the collection of
          <span className="flex justify-center">
            {" "}
            all your favorite &quot;Le&apos;s&quot;
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 px-4 ">
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

          <Card
            href="https://likewisetv.com/arcade/moviedle"
            text="A fast clip of a movie, after each try, the clip gets longer, for you to guess the movie."
            title="Moviedle"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 px-4 max-w-s">
          <Card
            href="https://www.mathler.com/"
            text="Mathler requires you to use math symbols to create an equation that equals the given answer."
            title="Mathler"
          />
          <Card
            href="https://heardlewordle.io/"
            text="Listen to an intro of a song, then find the correct song in the list. Guess in as little tries as possible."
            title="Heardle"
          />

          <Card
            href="https://contexto.me/"
            text="Find the secret word. You have unlimited guesses. The words were sorted by AI for word similarity."
            title="Contexto"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 px-4">
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
          <Card
            href="https://polygonle.net/"
            text="Different shapes that correspond to different letters, use patterns to help figure out the word."
            title="Polygonle"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 px-4 max-w-s">
          <Card
            href="https://www.nytimes.com/games/connections"
            text="Find groups of four items that share something in common, match them to find the category."
            title="Connections"
          />

          <Card
            href="https://squabble.me/"
            text="Multiplayer Wordle-style game where you compete against others to guess the word first."
            title="Squabble"
          />

          <Card
            href="https://worldle.teuteuf.fr/"
            text="Guess the country based on its shaped outline, distance will determine how close you are."
            title="Worldle"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 px-4 max-w-s">
          <Card
            href="https://food-le.com/"
            text="Like Wordle but for food. Players will begin the game by attempting to guess the food term six times."
            title="Foodle"
          />

          <Card
            href="https://poeltl.dunk.town/"
            text="Guess a basketball player. You get eight guesses.  If you get stuck, try enabling silhouette mode!"
            title="Poeltl"
          />

          <Card
            href="https://playfootball.games/football-wordle"
            text="Guess the past or present footballer in 6 tries. After each guess the tiles change color"
            title="Football Wordle"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 px-4 max-w-s">
          <Card
            href="https://jackli.gg/chessle/"
            text="Guess the entire opening sequence with chess pieces, for both white and black!"
            title="Chessle"
          />
          <Analytics />
        </div>
      </main>
    </div>
  );
}
