var colors = require('colors');

var quots = {
    socratis : "Know thyself."  ,
    descartes : "The only certainty is that nothing is certain",
    kant : "to be is to do ",
    spinoza : "I can control my passions and emotions if I can understand their nature",
    aristotie : "The unexamined life is not the life for a human being",
    durant : "We are what we repeatedly do. Excellence, then, is not an act, but a habit",
    karlMax : "I think; therefore, I am... I am what I think",
    sarter : "Man is condemned to be free",
    plato : "He who is not a good servant will not be a good master",
    nietzsche : "Without music, life would be a mistake.",
    chamfort : "A day without laughter is a day wasted.",
}
var jokes = {
    joke1 : "What do kids play when their mom is using the phone? Bored games.",
    joke2 : "Why are snails slow? Because they’re carrying a house on their back.",
    joke3 : "What’s the smartest insect? A spelling bee!",
    joke4 : "What does a storm cloud wear under his raincoat? Thunderwear.",
    joke5 : "What is fast, loud and crunchy? A rocket chip",
    joke6 : " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates."
}
var as = {
    quot1 : "Stars impel but they don’t compel",
    quot2 : "When we pass judgment, we hit a dead end. When we analyze something with an open mind, we can explore a concept into infinity.",
    quot3 : "The starry vault of heaven is in truth the open book of cosmic projection…",
    quot4 : "The soul of the newly born baby is marked for life by the pattern of the stars at the moment it comes into the world, unconsciously remembers it, and remains sensitive to the return of configurations of a similar kind."
}
var list_philosophy = [quots.socratis , quots.descartes , quots.kant , quots.spinoza , quots.aristotie , quots.durant , quots.karlMax , quots.sarter , quots.plato , quots.nietzsche , quots.chamfort];
var list_jokes = [jokes.joke1 , jokes.joke2 , jokes.joke3 , jokes.joke4 , jokes.joke5 , jokes.joke6];
var list_as = [as.quot1 , as.quot2 , as.quot3 , as.quot4];
var list_main = [list_philosophy , list_jokes , list_as];
var list_length = list_philosophy.length ;
const randomn = function(random_length){
    let random = Math.floor(Math.random()*random_length);
    return random ;
}
const randomp = function(){
    let randlist = list_main[randomn(list_main.length)];
    let number = randlist.length ;
    return randlist[randomn(number)];
}
colors.enable();
console.log(randomp().cyan);