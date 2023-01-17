interface Country {
  code: string;
  name: string;
  iso3: string;
  otpInAppEnabled: boolean;
  dialCode: string;
  defaultTimezone: string;
}

interface CountriesData {
  data: {
    countryResolver: Country[]
  }
}

export const getCountries = async (): Promise<CountriesData> => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://admin-core.test.virtaglobal.com/public', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Origin', 'http://localhost:3000');
  xhr.send(JSON.stringify({
    operationName: null,
    variables: {},
    query: `{
      countryResolver {
        code
        name
        iso3
        otpInAppEnabled
        dialCode
        defaultTimezone
      }
    }`
  }));
  return new Promise((resolve, reject) => {
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
  });
};