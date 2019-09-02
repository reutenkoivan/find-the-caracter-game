const backgrounds = [
  {
    id: 11,
    url: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/05/Thor-4-Movie.jpg',
    answer: 'Thor'
  },
  {
    id: 256,
    url: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/the-hulk.jpg',
    answer: 'Hulk'
  }
];

const scoresConfig = {
  '0': 5,
  '1': 5,
  '2': 5,
  '3': 4,
  '4': 3,
  '5': 2,
  '6': 2,
  '7': 1
};

export const store = {
  backgrounds,
  user: {
    clickCount: 0,
    currentBackgroundIndex: 0,
    completedId: [],
    score: 0
  },
  global: {
    maxClicks: 7,
    table: {
      lines: 6,
      columns: 6
    },
    scoresConfig
  }
};
