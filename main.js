function sayHello() {
    alert('Hello, choose your favorite emoji!');
}

const $emojigallery = document.getElementById('emojigallery')

const emojiArray = []

for (let i = 1; i < 12; i++){
    emojiArray.push(`<p><span class=emoji>&#${129409+i};</span><br>
    <code>${129409+i}</code></p>`)
}
  
$emojigallery.innerHTML += emojiArray.join('')

