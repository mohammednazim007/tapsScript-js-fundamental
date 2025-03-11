const userGuesNumber = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const userNumber = Number(prompt("Enter your gues number"));

  if (randomNumber === userNumber)
    return console.log("Oh, both are same number");

  if (randomNumber > userNumber)
    return console.log(`Computer number is getter the ${userNumber}`);

  if (randomNumber < userNumber)
    return console.log(`Congratulation you are win number is ${userNumber}`);
};
userGuesNumber();
