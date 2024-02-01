'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        caption: "Napping Outside is always fun...",
        author: 1,
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912033/Patchstagram/IMG_3394_fktg48.jpg",
        likes: 6,
        createdAt: new Date(2022, 2, 18), 
        updatedAt: new Date(2022, 2, 18),
      },
      {
        caption: "Napping inside is pretty awesome too...",
        author: 1,
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912403/Patchstagram/64865942444__2B7B1A74-ECAF-4798-BEAB-D4890B7164C4_hnmowy.jpg",
        likes: 9,
        createdAt: new Date(2022, 2, 19), 
        updatedAt: new Date(2022, 2, 19),
    },
    {
        caption: "I like my fish",
        author: 2,
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912006/Patchstagram/IMG_3437_u2frrk.jpg",
        likes: 14,
        createdAt: new Date(2022, 2, 10), 
        updatedAt: new Date(2022, 2, 10),
    },
    {
        caption: "Now THIS is a party!",
        author: 1,
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912056/Patchstagram/IMG_3389_i6czzx.jpg",
        likes: 11,
        createdAt: new Date(2022, 2, 24), 
        updatedAt: new Date(2022, 2, 24),
    },
    {
        caption: "This punk stole my tent! ⛺️",
        author: 2,
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912094/Patchstagram/IMG_3211_sy5wcy.jpg",
        likes: 9,
        createdAt: new Date(2022, 1, 24), 
        updatedAt: new Date(2022, 1, 24),
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
