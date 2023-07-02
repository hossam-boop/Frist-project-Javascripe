




var container = [
    {
        Quote: `"You miss 100% of the shots you don't take." `,
        person: `--Wayne Gretzy`
    },

    {
        Quote: `"Resentment is like drinking poison and waiting for your enemies to die." `,
        person: `--Nelson Mandela`
    },

    {
        Quote: `"The best revenge is massive success." `,
        person: `--Frank Sinatra`
    },

    {
        Quote: `"If you tell the truth, you don't have to remember anything." `,
        person: `-- Mark Twain`
    },

    {
        Quote: `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ." `,
        person: `-- C.S. Lewis`
    },

    {
        Quote: `"Always forgive your enemies; nothing annoys them so much." `,
        person: `-- Oscar Wilde`
    },

    {
        Quote: `"Good friends, good books, and a sleepy conscience: this is the ideal life." `,
        person: `-- Mark Twain`
    },

    {
        Quote: `"It is better to be hated for what you are than to be loved for what you are not." `,
        person: `-- Andre Gide`
    },

    {
        Quote: `"We accept the love we think we deserve." `,
        person: `-- Stephen Chbosky`
    },


    {
        Quote: `"It's not what happens to you, but how you react to it that matters." `,
        person: `--Epictetus`
    }

];





function dataciick() {
    var i = Math.floor(Math.random() * 10);

    var temp1 = container[i].Quote;
    document.getElementById('Quote1').innerHTML = temp1;



    var temp2 = container[i].person;
    document.getElementById('Quote2').innerHTML = temp2;

}






