async function fetchCountry(code) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const [data] = await response.json();
  return data;
}

fetchCountry("ata").then((data) => console.log(data.name));
fetchCountry("bvt").then((data) => console.log(data.name));
fetchCountry("hmd").then((data) => console.log(data.name));
