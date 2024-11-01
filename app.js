console.log("hello world");

// fetch and display data for user 1
document
  .getElementById("fetchUser1")
  .addEventListener("click", async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    document.getElementById("user1Name").textContent = user.name;
    document.getElementById("user1Email").textContent = user.email;
  });

// fetch and display data for user 2
document
  .getElementById("fetchUser2")
  .addEventListener("click", async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const user = await response.json();
    document.getElementById("user2Name").textContent = user.name;
    document.getElementById("user2Email").textContent = user.email;
  });

// fetch and display data for user 3
document
  .getElementById("fetchUser3")
  .addEventListener("click", async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    const user = await response.json();
    document.getElementById("user3Name").textContent = user.name;
    document.getElementById("user3Email").textContent = user.email;
  });

// ===========================================================================================================
// refactoring attempt

async function getUserDetails(n) {
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${n}`;
  const response = await fetch(apiUrl);
  const user = await response.json();
  document.getElementById(`user${n}Name`).textContent = user.name;
  document.getElementById(`user${n}Email`).textContent = user.email;
}

async function getContent() {
  for (i = 1; i < 4; i++) {
    // const apiUrl = `https://jsonplaceholder.typicode.com/users/${i}`;
    // const response = await fetch(apiUrl);
    // const user = await response.json();
    // document.getElementById(`user${i}Name`).textContent = user.name;
    // document.getElementById(`user${i}Email`).textContent = user.email;

    getUserDetails(i);
  }
}

const myButton = document.getElementById("fetchAllUsers");
myButton.addEventListener("click", getContent);
