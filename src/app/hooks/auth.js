const API_URL = process.env.NEXT_PUBLIC_API_URL;

const userRegister = async (fullname, email, password) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullname, email, password })
  });

  const result = await response.json();
  return { response, result };
};

const userLogin = async (email, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({  email, password })
  });

  const result = await response.json();
  return { response, result}
};

export { userRegister, userLogin };
