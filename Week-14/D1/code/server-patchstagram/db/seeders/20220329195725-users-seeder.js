'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: "Patchenator",
        fullName: "Patch",
        email: "patch_the_cat@gmail.com",
        password: "ILuvFud",
        profilePic: "https://res.cloudinary.com/app-academy4/image/upload/v1647912257/Patchstagram/IMG_3074_ubqe1e.jpg",
        bio: "I love naps and food",
        age: 5,
        createdAt: new Date(), 
        updatedAt: new Date(),
      },
      {
        username: "Blueberry44",
        fullName: "Blue",
        email: "blue@aol.com",
        password: "meowmeow",
        profilePic: "https://res.cloudinary.com/app-academy4/image/upload/v1647912128/Patchstagram/66346842095__0566A55A-DF10-4E86-A59A-F5694436FA4E_wmoi1w.jpg",
        bio: "I am a ninja! 🥷🏻",
        age: 5,
        createdAt: new Date(), 
        updatedAt: new Date(),
      },
      {
        username: "brads213",
        fullName: "Brad Simpson",
        email: "brad@gmail.com",
        password: "password",
        profilePic: "https://ca.slack-edge.com/T03GU501J-USQFVK3GT-941e867a316f-512",
        bio: "I am the father of 2 crazy cats",
        age: 44,
        createdAt: new Date(), 
        updatedAt: new Date(),
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  
  }
};
