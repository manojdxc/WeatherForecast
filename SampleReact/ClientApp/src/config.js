import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
    tenant: '85dd32d2-eb65-4709-a201-d99bebe871b1',
    clientId: '06158d01-cd63-4a0f-8c8d-ed41f8795e87',
    cacheLocation: 'localStorage',
    endpoints: {
        weather: {
            url: 'https://localhost:44383/api/SampleData/WeatherForecasts',
            scope: 'api://f2ba873e-3116-49ca-a704-18a9b24b5213'
        }
    }
};

export const config = {
    endpoints: {
        weather: {
            url: 'https://localhost:44383/api/SampleData/WeatherForecasts',
            scope: 'api://f2ba873e-3116-49ca-a704-18a9b24b5213'
        }
    }
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.clientId, fetch, url, options);