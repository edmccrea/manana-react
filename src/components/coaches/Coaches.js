import React from 'react';
import Coach from './Coach';
import './Coaches.css';

const Coaches = () => {
  const coaches = [
    {
      name: 'Barte',
      discipline: 'Muay Thai',
      image:
        'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/131173023_2880896998852452_3993708020648109101_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=rRJF4dcpz2wAX82KTZG&_nc_ht=scontent-cph2-1.xx&oh=780f3673d435aa1dcbd6002db31cc329&oe=6141BF5B',
    },
    {
      name: 'Jin',
      discipline: 'Muay Thai',
      image:
        'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/50267691_10155698711891008_220239115415715840_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=41rmpN7eRBEAX_J9weZ&_nc_ht=scontent-cph2-1.xx&oh=63b4b4f65086e63888d4e9d0bf03e871&oe=61412033',
    },
    {
      name: 'Anders',
      discipline: 'BJJ',
      image:
        'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/130997100_2881905908751561_6519924290697785450_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=CQkapL69NDAAX9UKTzz&_nc_ht=scontent-cph2-1.xx&oh=2217ffb4cfa356ee8b0d1a22a53a0062&oe=61437AC6',
    },
    {
      name: 'Mattias',
      discipline: 'MMA',
      image:
        'https://www.mmaviking.com/wp-content/uploads/2015/05/MG_70911.jpg',
    },
    {
      name: 'Teddy',
      discipline: 'BJJ',
      image:
        'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/237260872_10223417657262637_2608128088462358957_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=acWMkAZKg4cAX9bP89j&tn=T6jAyVdEARiJTNTj&_nc_ht=scontent-cph2-1.xx&oh=04af4bf4b7746012ad94e9dfbd98d46e&oe=614300FB',
    },
    {
      name: 'Steve',
      discipline: 'MMA',
      image:
        'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/193161303_3024904541118363_1207977966798482076_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=e3GfQNFHerAAX_qo2yZ&_nc_ht=scontent-cph2-1.xx&oh=61641953041cbebb9344fda0e4db5261&oe=6142A7D4',
    },
    {
      name: 'Kim',
      discipline: 'MMA',
      image:
        'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/193161303_3024904541118363_1207977966798482076_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=a26aad&_nc_ohc=e3GfQNFHerAAX_qo2yZ&_nc_ht=scontent-cph2-1.xx&oh=61641953041cbebb9344fda0e4db5261&oe=6142A7D4',
    },
  ];
  return (
    <div className='coaches-container container'>
      <h1 className='page-title'>Coaches</h1>
      <div className='grid-wrapper'>
        {coaches.map((coach) => (
          <Coach coach={coach} key={coach.name} />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
