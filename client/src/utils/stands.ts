export interface Stand {
  id: number;
  name: string;
  price: number;
  numExpositors: number;
  isAvailable?: boolean;
  category: string;
}

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

export const getStandsByCategory = async (category: Stand["category"]): Promise<Array<Stand>> => {
  try {
    const response = await fetch(`http://localhost:3001/stands/${category}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};


