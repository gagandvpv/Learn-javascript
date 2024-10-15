const includeUpperCase = true;
const includeLowerCase = true;
const lengthOfText = 12;

function generatePass(lengthOfText, includeUpperCase, includeLowerCase) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let allowed = "";
  let password  = "";

  if (includeUpperCase) {
    allowed = allowed + upperCase;
  }

  if (includeLowerCase) {
    allowed = allowed + lowerCase;
  }

  for (let i = 0; i < lengthOfText; i++) {
    randomIndex = Math.floor(Math.random() * allowed.length);
    password = password+allowed[randomIndex];
  }
  return password;
}


const ans = generatePass(lengthOfText ,includeUpperCase,includeLowerCase);

console.log(ans);