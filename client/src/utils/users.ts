interface User {
  name: string;
  lastName: string;
  document: number | null;
  roleId: number;
}

const baseUrl = "http://localhost:3001/users";
export const createNewUser = async (user: User) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`HTTP error. Status code: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return false;
  }
};
