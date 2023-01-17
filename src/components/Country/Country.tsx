import Flags from 'country-flag-icons/react/3x2'
import { CheckmarkFilled, CloseFilled } from '@carbon/icons-react';
import './country.css';

interface CountryProps {
  name: string;
  code: keyof typeof Flags;
  iso3: string;
  otpInAppEnabled: boolean;
  dialCode: string;
  defaultTimezone: string;
}

const Country: React.FC<CountryProps> = (props) => {
  const {name, code, iso3, otpInAppEnabled, dialCode, defaultTimezone} = props;
  const Flag = Flags[code]
  return (
    <div className={'country' + (otpInAppEnabled ? " available" : "")}>
      <div className="countryFlag">
        <Flag className='flag' />
      </div>
      <div className='countryDetails'>
        <div className="countryName">
          <h3>{name}</h3>
          <div>Timezone: {defaultTimezone}</div>
        </div>
        <div className='countryCode'>Country Code: ({iso3})</div>
      </div>
      <div className="countryAvailability">
      {
        otpInAppEnabled ? 
          <CheckmarkFilled size='20' className='available' />:
          <CloseFilled size='20' className='unavailable' />
      }
      </div>
    </div>
  );
}

export default Country
