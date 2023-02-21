export interface Stand {
  id: number;
  name: string;
  price: number;
  numExpositors: number;
  isAvailable: boolean;
  category: string;
}

interface CreateStand extends Omit<Stand, "id" | "isAvailable"> {}

const baseUrl = "http://localhost:3001/stands";

export const createNewStand = async (stand: CreateStand) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stand),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllStands = async (): Promise<Array<Stand>> => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getStandsByCategory = async (
  category: Stand["category"]
): Promise<Array<Stand>> => {
  try {
    const response = await fetch(`${baseUrl}/categories/${category}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getStandById = async (standId: number) => {
  try {
    const response = await fetch(`${baseUrl}/${standId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
