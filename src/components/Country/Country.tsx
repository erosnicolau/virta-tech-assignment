import Flags from 'country-flag-icons/react/3x2'
import { CheckmarkFilled, CloseFilled } from '@carbon/icons-react';

import './country.css';

interface Props {
  flagCode: keyof typeof Flags;
}

const Country: React.FC<Props> = (props) => {
  const {flagCode} = props;
  const Flag = Flags[flagCode]

  return (
    <div>
     Country
     <Flag className='flag' />
     <CheckmarkFilled size='20' className='available' />
     <CloseFilled size='20' className='unavailable' />
    </div>
  )
}

export default Country;