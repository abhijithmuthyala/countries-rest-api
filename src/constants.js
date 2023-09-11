const baseURL = "https://restcountries.com/v3.1";

export const API_URL = {
  all: `${baseURL}/all?fields=name,flags,population,region,capital,cca3`,
  countries: `${baseURL}/all?fields=cca3`,
  country(code) {
    return `${baseURL}/alpha/${code}?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flags,cca3`;
  },
  borders(code) {
    return `${baseURL}/alpha/${code}?fields=name,cca3`;
  },
};

export const EAGER_LOAD_THRESHOLD = 12;
export const DEBOUNCE_THRESHOLD = 350;
