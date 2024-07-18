// src/jokes-data.d.ts
declare module './jokes-data' {
  export interface Joke {
    type: string;
    setup: string;
    punchline: string;
  }

  const sourceOfJokes: Joke[];
  export default sourceOfJokes;
}
