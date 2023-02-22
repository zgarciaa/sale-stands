export interface Sale {
  standId: number;
  documentClient: number;
  nameClient: string;
  lastNameClient: string;
  price: number;
}

export interface ClientStand {
  standId: number;
  documentClient: number;
  nameClient: string;
  lastNameClient: string;
  addressClient: string;
  phoneNumberClient: number;
  emailClient?: string;
}

const salesUrl = "http://localhost:3001/sales";
const clientsUrl = "http://localhost:3001/clients";

export const createNewSale = async (sale: Sale) => {
  try {
    const response = await fetch(salesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sale),
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

export const createNewClientStand = async (clientStand: ClientStand) => {
  try {
    const response = await fetch(clientsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientStand),
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

export const getAllSales = async (): Promise<Array<Sale>> => {
  try {
    const response = await fetch(salesUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getAllClientStand = async (): Promise<Array<Sale>> => {
  try {
    const response = await fetch(clientsUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getSaleById = async (saleId: number) => {
  try {
    const response = await fetch(`${salesUrl}/${saleId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getClientStandById = async (clientStandId: number) => {
  try {
    const response = await fetch(`${clientsUrl}/${clientStandId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};