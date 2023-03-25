export async function createUserService(user) {
  const userResponse = await fetch('https://dev-futsapp.srtesthost.tk/api/users/create', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const userData = await userResponse.json();

  return userData;
}

export async function loginUser(user) {
  const loginResponse = await fetch('https://dev-futsapp.srtesthost.tk/api/users/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const userData = await loginResponse.json();

  if (loginResponse.status === 401) {
    alert("Ingreso no autorizado");
    throw userData;
  }

  return userData;
}

export async function getUsers() {
  const usersResponse = await fetch('https://dev-futsapp.srtesthost.tk/api/users');

  const usersData = await usersResponse.json();

  return usersData;
}