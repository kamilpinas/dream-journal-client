import moment from 'moment';
import React, {useEffect, useState} from 'react';
import instance from '../api/axios';
import {SharedDreamCard} from '../components/SharedDream';

export default function SharedDreamsScreen() {
  //const [sharedDreams, setSharedDreams] = useState([]);
  const [sharedDream, setSharedDream] = useState();
  function getRandomDream() {
    instance
      .get('shared-dreams/random')
      .then(function (response) {
        setSharedDream(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function increment(id) {
    instance
      .patch('shared-dreams/vote-up/' + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    getRandomDream();
  }

  function decrement(id) {
    instance
      .patch('shared-dreams/vote-down/' + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    getRandomDream();
  }

  useEffect(() => {
    if (!sharedDream) {
      getRandomDream();
    }
  }, [sharedDream]);

  return (
    <SharedDreamCard
      sharedOn={
        sharedDream && moment(sharedDream.sharedOn).format('YYYY-MM-DD HH:MM')
      }
      user={sharedDream && sharedDream.username}
      votes={sharedDream && sharedDream.votes}
      title={sharedDream && sharedDream.dream.title}
      content={sharedDream && sharedDream.dream.description}
      onVoteDown={() => decrement(sharedDream && sharedDream._id)}
      onVoteUp={() => increment(sharedDream && sharedDream._id)}
      onCategorySelect={() => null}
      onDraw={getRandomDream}
    />
  );
}
