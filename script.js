var question = document.getElementById("question");
var answer = document.getElementById("answer");

var apiUrl = `https://widipe.com/openai`;


async function sendReq() {
    try {
        const url = `${apiUrl}?text=${question.value}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`
            );
        }
        const data = await response.json();
        answer.innerHTML = data.result;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}