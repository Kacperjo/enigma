let pol_na_enigme = {
'a': "x",
'b': "u",
'c': "g",
'd': "s",
'e': "q",
'f': "k",
'g': "n",
'h': "t",
'i': "p",
'j': "y",
'k': "m",
'l': "f",
'm': "z",
'n': "r",
'o': "j",
'p': "e",
'q': "l",
'r': "o",
's': "w",
't': "v",
'u': "b",
'v': "a",
'w': "c",
'x': "h",
'z': "i",
'y': "d",
' ': " "
};
let enigma_na_pol = {
'x': "a",
'u': "b",
'g': "c",
's': "d",
'q': "e",
'k': "f",
'n': "g",
't': "h",
'p': "i",
'y': "j",
'm': "k",
'f': "l",
'z': "m",
'r': "n",
'j': "o",
'e': "p",
'l': "q",
'o': "r",
'w': "s",
'v': "t",
'b': "u",
'a': "v",
'c': "w",
'h': "x",
'i': "z",
'd': "y",
' ': " "
};
function zak() {
  let input = document.getElementById("text").value.toLowerCase();
  let ciąg = ' ';
  let leter;
  for (leter in input) {
    if (leter in pol_na_enigme) {
      ciąg += string(pol_na_enigme[leter]);
    } else {
      ciąg += leter
    }
  }
}
function wyswietl() {
  document.getElementById("output").innerText = ciąg;
}
