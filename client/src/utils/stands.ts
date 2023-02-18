export interface Stand {
  id: number;
  name: string;
  price: number;
  numExpositors: number;
  isAvailable?: boolean;
  category: string;
}

interface StandData {
  name: string;
  price: number;
  numExpositors: number;
  category: string;
}

export const createNewStand = async (stand: StandData) => {
  try {
    const response = await fetch("http://localhost:3001/stands", {
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
    const response = await fetch("http://localhost:3001/stands");
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
    const response = await fetch(`http://localhost:3001/stands/${category}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
