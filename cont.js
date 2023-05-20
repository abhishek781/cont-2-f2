const users = [
    {id: 1, name: "John", age: "18", profession: "developer"},
    {id: 2, name: "Jack", age: "20", profession: "developer"},
    {id: 3, name: "Karen", age: "19", profession: "admin"}
  ];

  function renderUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `<p>ID: ${user.id}</p>
                      <p>Name: ${user.name}</p>
                      <p>Age: ${user.age}</p>
                      <p>Profession: ${user.profession}</p>`;
    document.getElementById('userList').appendChild(card);
  }

  function renderAllUsers() {
    users.forEach(user => {
      renderUserCard(user);
    });
  }

  function filterUsers() {
    const selectedProfession = document.getElementById('profession').value;
    const userList = document.getElementById('userList');

    if (selectedProfession === "") {
      userList.innerHTML = "";
      renderAllUsers();
      return;
    }

    userList.innerHTML = "";
    const filteredUsers = users.filter(user => user.profession === selectedProfession);
    filteredUsers.forEach(user => {
      renderUserCard(user);
    });
  }

  function addUser() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('newProfession').value;

    const newUser = {
      id: users.length + 1,
      name: name,
      age: age,
      profession: profession
    };

    users.push(newUser);

    // Clear input fields
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('newProfession').value = "";

    renderUserCard(newUser);
  }

  // Initial render
  renderAllUsers();