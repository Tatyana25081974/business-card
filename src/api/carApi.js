

const API_KEY = "3669336c28msh0e818a8c7dbb811p1ccaf3jsnce64cc2b044b";
const API_HOST = "car-api2.p.rapidapi.com";

export async function fetchCarMakes() {
  const response = await fetch('https://car-api2.p.rapidapi.com/api/makes', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch car makes');
  }

  const data = await response.json();
  return data;
}
