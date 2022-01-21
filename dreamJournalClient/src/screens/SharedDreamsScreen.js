import moment from 'moment';
import React, {useEffect, useState} from 'react';
import instance from '../api/axios';
import {SharedDreamCard} from '../components/SharedDreamCard';

export default function SharedDreamsScreen() {
  const [sharedDream, setSharedDream] = useState();
  const [category, setCategory] = useState();
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

  function getCategoryDream(category) {
    instance
      .get('shared-dreams/category/' + category.name)
      .then(function (response) {
        setSharedDream(response.data[0]);
        setCategory(category);
        console.log(response.data);
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
    if (category) {
      getCategoryDream(category);
    } else {
      getRandomDream();
    }
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
    if (category) {
      getCategoryDream(category);
    } else {
      getRandomDream();
    }
  }

  useEffect(() => {
    if (!sharedDream) {
      //getRandomDream();
    }
  }, [sharedDream]);

  return (
    <SharedDreamCard
      sharedOn={
        sharedDream && moment(sharedDream.sharedOn).format('YYYY-MM-DD HH:MM')
      }
      user={sharedDream && sharedDream.username}
      votes={sharedDream && sharedDream.votes}
      title={sharedDream && sharedDream.title}
      content={sharedDream && sharedDream.description}
      category={sharedDream && sharedDream.category}
      onVoteDown={() => decrement(sharedDream && sharedDream._id)}
      onVoteUp={() => increment(sharedDream && sharedDream._id)}
      onDraw={getRandomDream}
      onCategorySelect={category => getCategoryDream(category)}
    />
  );
}
