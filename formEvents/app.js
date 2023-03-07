const form = document.querySelector("#appForm");
const input = document.querySelector("#players");
const input2 = document.querySelector("#users");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = input2.value;
  const player = input.value;

  const newLi = document.createElement('li');
  const btag = document.createElement('b');

  btag.append(user);
  newLi.append(btag);
  newLi.append(`- ${player}`);
  list.append(newLi);

  input.value = "";
  input2.value = "";
}); 