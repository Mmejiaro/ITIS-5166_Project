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
        date: '2021-08-26',
        startTime: '17:30',
        endTime: '18:30',
        loc: 'earth',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officiis molestiae alias cum aspernatur reprehenderit cumque est in quis consequatur eveniet non aliquam dolorum molestias animi, solutaid sequi eligendi!',
    },
    {
        id: '2',
        name: 'Garden Club Movie Night',
        category: 'Club Events',
        img : '/media/pizza.png',
        hostName: 'Jane Doe',
        date: '2021-10-15',
        startTime: '14:00',
        endTime: '15:30',
        loc: 'earth',
        details: 'words',
    },
    {
        id: '3',
        name: 'Swimming Lesson',
        category: 'Indoor/Outdoor Activites',
        img : '/media/pizza.png',
        hostName: 'George Lopez',
        date: '2021-10-16',
        startTime: '12:30',
        endTime: '13:30',
        loc: 'earth',
        details: 'words',
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
    connection.id = uuidv4();
    connections.push(connection);
}