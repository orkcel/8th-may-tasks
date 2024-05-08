const characters = 'qwertyuiop[]asdfghjkl;zxcvbnm,./1234567890-=QWERTYUIOP{}ASDFGGHJKL:ZXCVBNM<>?!@#$%^&*(()_+';
let result = '';
for (let i = 0; i < 6; i++) {
  result += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(result);
