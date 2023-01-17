import { getCountries } from '../../utils/countries';
import Country from '../Country/Country';
import { useState, useEffect } from 'react';
import Flags from 'country-flag-icons/react/3x2'

interface ICountry {
  code: string;
  name: string;
  iso3: string;
  otpInAppEnabled: boolean;
  dialCode: string;
  defaultTimezone: string;
}

export const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getCountries();
        setCountries(data.data.countryResolver);
      } catch (err) {
        if (typeof err === 'string') {
          setError(err);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const convertCode = (code: string): keyof typeof Flags => {
    return code.toUpperCase() as keyof typeof Flags;
  }

  return (
    <div>
      {countries?.map((country: ICountry) => (
        <Country
          key={country.code}
          name={country.name}
          code={convertCode(country.code)}
          iso3={country.iso3}
          otpInAppEnabled={country.otpInAppEnabled}
          dialCode={country.dialCode}
          defaultTimezone={country.defaultTimezone}
        />
      ))}
    </div>
  );
}