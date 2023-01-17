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
    <div className={otpInAppEnabled ? "enabled" : ""}>
      <Flag className='flag' />
      <p>Name: {name}</p>
      <p>Code: {code}</p>
      <p>ISO3: {iso3}</p>
      <p>Dial Code: {dialCode}</p>
      <p>Timezone: {defaultTimezone}</p>
      {otpInAppEnabled ? 
      <CheckmarkFilled size='20' className='available' />:
      <CloseFilled size='20' className='unavailable' />}
    </div>
  );
}

export default Country
