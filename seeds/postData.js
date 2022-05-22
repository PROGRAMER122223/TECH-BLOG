const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Java",
    "postContent": "Java is one of the Greater Sunda Islands in Indonesia",
    "userId": 1
  },
  {
    "postTitle": "React",
    "postContent": "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    "userId": 2
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;