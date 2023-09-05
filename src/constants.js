const baseURL = "https://restcountries.com/v3.1";

export const API_URL = {
  all: `${baseURL}/all?fields=name,flags,population,region,capital`,
  countries: `${baseURL}/all?fields=name`,
  country(name) {
    return `${baseURL}/name/${name}?fullText=true&fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flags`;
  },
  borders(code) {
    return `${baseURL}/alpha/${code}?fields=name`;
  },
};
