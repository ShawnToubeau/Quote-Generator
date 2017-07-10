var quotes = [
  "His name is Garyl, like Gary and Darryl combined, he's a quasi, horse-like creature. -Justin(Taako)",
  "Look at those big, dead dogs. -?",
  "I'll be having my body back, you undead fuck. -Magnus Sideburns",
  "Abra ca-fuck you! -Taako",
  "I cast Zone Of Truth! -Merle Highchurch",
  "A witch kissed me and cursed me so that anytime anyone yells a secret word, I have to attend to their every need. And that word is my fucking name, Jenkins. -Jenkins",
  "No dogs on the moon, they just run off the goddamn thing. -Griffin",
  "Once you pop, the time control don't stop. -Griffin",
  "The memory of my grandpa's name died long before I was born. -Angus MacDonald",
   "I find that not killing people is very easy. -Angus MacDonald",
   "Liches Get Stitches. - Magnus Sideburns",
   "Hello Sirs! -Angus MacDonald",
   "Yo thug what's your name? I'm about to tentacle your dick! -Magnus Sideburns",
   "Taakos good out here. -Justin(Taako)",
   "Magnus rushes in. -Travis(Magnus)",
   "Explain to me how you can cleft someone in twain non-lethally? -Griffin",
   "You drown in snakes. -Griffin",
   "You know, it doesn't always have to be 'goof goof dildo' I'm travelling around with the boner squad and I never get a chance to say what I'm feeling. I have emotions! -Merle Highchurch",
   "I've done more work on Garyl's character development than my own. -Justin(Taako)",
   "I'm more invested in garyl than any of you. -Griffin",
   "Smell you later. -Jenkins",
   "Yeah! It's our first kill! ... So, why am I so horny? I'm broken inside... -Taako",
   "SOURCREAM! -Taako"
]

  function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
  }
