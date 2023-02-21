export interface Operator {
  username: string;
  password: string;
}

const baseUrl = "http://localhost:3001/operators";
const loginUrl = "http://localhost:3001/login";

export const createOperator = async (operator: Operator) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operator),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllOperators = async () => {
  try {
    const response = await fetch(baseUrl);
  } catch (e) {
    console.error(e);
  }
};

export const loginOperator = async (operator: Operator) => {
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operator),
    });
    if (!response.ok) {
      // Si la respuesta no es exitosa, arrojar un error y manejarlo en el controlador de la ruta de Express
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Si la respuesta tiene un código de estado exitoso (por ejemplo, 200), devolver los datos de la respuesta
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
