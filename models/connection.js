const e = require('express');
const {v4: uuidv4} = require('uuid');

const categories = [
    'Upcoming Events',
    'Club Events',
    'Indoor/Outdoor Activites',
];

const connections = [
    {
        id: '1',
        name: 'Pizza Party',
        category: 'Upcoming Events',
        img : '/media/pizza.png',
        hostName: 'John Doe',
        date: '2021-11-01',
        startTime: '12:30',
        endTime: '13:30',
        loc: 'Backyward of John Doe',
        details: 'Come meet other neighbors and for FREE pizza slice. Additional slices cost $50 each.',
    },
    {
        id: '2',
        name: 'Bbq Party',
        category: 'Upcoming Events',
        img : '/media/bbq.jpg',
        hostName: 'John Doe',
        date: '2021-11-20',
        startTime: '12:30',
        endTime: '13:30',
        loc: 'Backyward of John Doe',
        details: 'Come meet other neighbors and for bbq',
    },
    {
        id: '3',
        name: 'Karaoke Night',
        category: 'Upcoming Events',
        img : '/media/karaoke.jpg',
        hostName: 'Adele',
        date: '2021-10-28',
        startTime: '21:30',
        endTime: '22:30',
        loc: 'The streets',
        details: 'Karaoke Night all are welcome to sing. Adele will be hosting and charge a small fee of $5,000',
    },
    {
        id: '4',
        name: 'Garden Club Movie Night',
        category: 'Club Events',
        img : '/media/movies.jpg',
        hostName: 'Jane Doe',
        date: '2021-10-15',
        startTime: '19:00',
        endTime: '20:30',
        loc: 'Neighborhood Soccor Field',
        details: 'All those in the Garden Club, Lets watch a movie about PLANTS!!!',
    },
    {
        id: '5',
        name: 'Boxers Club training',
        category: 'Club Events',
        img : '/media/boxing.jpg',
        hostName: 'Manny Pacquiao',
        date: '2021-10-18',
        startTime: '14:00',
        endTime: '15:30',
        loc: 'local boxing ring',
        details: 'Train with Manny for a limited time only. Free session today, Following session $10,000',
    },
    {
        id: '6',
        name: 'Bird Watching Club ',
        category: 'Club Events',
        img : '/media/birdWatching.png',
        hostName: 'Kevin Hart',
        date: '2021-10-22',
        startTime: '08:00',
        endTime: '11:30',
        loc: 'The woods in the back',
        details: 'Lets go bird watching for the Ugliest Bird The ShoeBill. How Exciting with Kevin Hart',
    },
    {
        id: '7',
        name: 'Swimming Lesson',
        category: 'Indoor/Outdoor Activites',
        img : '/media/swim-lesson.jpg',
        hostName: 'George Lopez',
        date: '2021-10-16',
        startTime: '12:30',
        endTime: '13:30',
        loc: 'Neighborhood pool',
        details: 'Come all those in the neighborhood and learn how not to drown!!',
    },
    {
        id: '8',
        name: 'Soccor Match',
        category: 'Indoor/Outdoor Activites',
        img : '/media/soccor.jpg',
        hostName: 'Lionel Messi',
        date: '2021-11-11',
        startTime: '11:30',
        endTime: '14:00',
        loc: 'Neighborhood Soccor Field',
        details: 'Come out and watch/join soccor games against Lionel Messi',
    }
];

exports.categories = function () {
    return categories;
};

exports.find = function() {
    return connections;
};

exports.findById = function(id) {
    return connections.find(connection => connection.id === id);
};

exports.save = function(connection) {
    console.log(connection);
    if (categories.indexOf(connection.category) === -1){
        categories.push(connection.category);
    }
    connections.push(connection);
}

exports.updateById = function(id, updatedConnection) {
    let connection = connections.find(connection => connection.id === id);
    if(connection){
        connection.name = updatedConnection.name;
        connection.hostName = updatedConnection.hostName;
        connection.details = updatedConnection.details;
        connection.loc = updatedConnection.loc;
        connection.date = updatedConnection.date;
        connection.startTime = updatedConnection.startTime;
        connection.endTime = updatedConnection.endTime;
        connection.img = updatedConnection.img;
        return true;
    }
    else {
        return false;
    }
}

exports.deleteById = function(id) {
    let index = connections.findIndex(connection => connection.id === id);
    if (index !== -1) {
        connections.splice(index, 1);
        return true;
    }
    else {
        return false;
    }
}

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const categorySchema = new Schema({
//     category: String
// });
// const connectionSchema = new Schema ({
//     name: {type: String, required: [true, 'Name is required']},
//     category: {type: String, required: [true, 'category is required']},
//     img: {type: String, required: [true, 'img is required']},
//     hostName: {type: String, required: [true, 'hostName is required']},
//     date: {type: String, required: [true, 'date is required']},
//     startTime: {type: String, required: [true, 'start time is required']},
//     endTime: {type: String, required: [true, 'end time is required']},
//     loc: {type: String, required: [true, 'location is required']},
//     details: {type: String, required: [true, 'details is required']},
// },
// {timestamps: true}
// );

// // collection name categories
// module.exports = mongoose.model('Category', categorySchema);

// // collection name is connections
// module.exports = mongoose.model('Connection', connectionSchema);
