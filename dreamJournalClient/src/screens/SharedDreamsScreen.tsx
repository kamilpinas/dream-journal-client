import moment from 'moment';
import React from 'react';

import {SharedDreamCard} from '../components/SharedDream';

export default function SharedDreamsScreen() {
  return (
    <SharedDreamCard
      sharedOn={moment().format('YYYY-MM-DD HH:mm')}
      user="andrzej serwotka"
      votes={143}
      title="Fajny sen bardzo fajny"
      content="snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo f i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo f i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo f i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo f i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo fajnie i duzo rzeczy byly fajnych tam snilo mi sie ze bylo bardzo f "
    />
  );
}
