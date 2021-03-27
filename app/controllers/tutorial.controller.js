const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


// Create and save a new tutorial

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
};

// Save Tutorial in the database
Tutorial.create(tutorial)
.then(data => {

    res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."

        });
    });
};

// Retrieve all Tutorials from the database. 
// Retrieve objects (with condition). Retrieve all Tutorials, find by title from the database
exports.findAll = (req, res) => {
    const title = req.query.title; // we use req.query.title to get query string from the Request and consider it as a condition for findAll() method
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Tutorial.findAll({ where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving tutorials"
        });
    });
};

// Find a single Tutorial with an id // Retrieve a single object
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Tutorial with id=" + id
        });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => { // Update an object
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: { id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Tutorial was updated successfully"
            });
        } else {
            res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
    }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    });
};

// Delete all Tutorials from the database. Delete all objects
exports.deleteAll= (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!`});
})
.catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while removing all tutorials"
    });
});
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {  // Delete an object. Delete a tutorial with the specified id:
const id = req.params.id;

Tutorial.destroy({
    where: {id: id}
})
.then(num => {
    if (num == 1) {
        res.send({
            message: "Tutorial was deleted successfully" 
        });
    } else {
        res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
 });
    }
})
.catch(err => {
    res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
    });
});
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => { // Find all objects by condition. Find all Tutorials with published = true 
Tutorial.findAll({ where: {published: true}})
.then(data => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving tutorials"
    });
});
};




