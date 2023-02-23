export interface Stand {
  id: number;
  name: string;
  price: number;
  numExpositors: number;
  isAvailable: boolean;
  category: string;
}

interface CreateStand extends Omit<Stand, "id" | "isAvailable"> {}

interface UpdateStand {
  name: string | null;
  price: number | null;
  numExpositors: number | null;
}

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

export const updateStand = async (
  standId: number,
  updateFields: UpdateStand
) => {
  try {
    const response = await fetch(`${baseUrl}/${standId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateFields),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }
    const updatedStand = await response.json();
    console.log(updatedStand);
    return true;
  } catch (e) {
    console.error(e);
    throw new Error("Error updating Stand");
  }
};
