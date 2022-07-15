// async function getJoke(){
//     // let joke =await fetch("https://v2.jokeapi.dev/joke/Programming")
//     fetch("https://v2.jokeapi.dev/joke/Programming")
//     .then((d) =>{
//         console.log(d);
//     })
//     .catch((e) =>{
//         console.log(e);
//     })
// };


async function getJoke(){
    let joke =await fetch("https://v2.jokeapi.dev/joke/Programming")
    let parseData = joke.json();//要自己化為json我們要的資料才會出現
    console.log(parseData);
};

getJoke();