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
        date: 'Thrusday, August 29, 2021',
        time: '5:30pm - 6:30pm',
        loc: 'earth',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officiis molestiae alias cum aspernatur reprehenderit cumque est in quis consequatur eveniet non aliquam dolorum molestias animi, solutaid sequi eligendi!',
    },
    {
        id: '2',
        name: 'Garden Club Movie Night',
        category: 'Club Events',
        img : '/media/pizza.png',
        hostName: 'Jane Doe',
        date: 'Friday, October 15, 2021',
        time: '2:30pm - 3:30pm',
        loc: 'earth',
        details: 'words',
    },
    {
        id: '3',
        name: 'Swimming Lesson',
        category: 'Indoor/Outdoor Activites',
        img : '/media/pizza.png',
        hostName: 'George Lopez',
        date: 'Saturday, October 16, 2021',
        time: '12:30pm - 1:30pm',
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