module.exports = (sequelize, Sequelize) => { // the Sequelize model represents tutorials table in MYSQL db.  
    const Tutorial = sequelize.define("tutorial", { // After initializing Sequelize, we don't need to write CRUD functions, Sequelize supports all of them. 
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };