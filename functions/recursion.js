// function countToZero (startValue){
//     for (let i = startValue; i >= 0; i--) {
//         console.log(i)
//     }
// }

// function countToZero(startValue){
//     console.log(startValue)
//     if(startValue > 0){
//         countToZero(startValue - 1)
//     }
// }
//
// countToZero(3)
//

const tree = {
  id: 1,
  name: 'Root',
  children: [
    {
      id: 2,
      name: 'Node 1',
      children: [
        {
          id: 3,
          name: 'Node 1.1',
          children: [],
        },
        {
          id: 4,
          name: 'Node 1.2',
          children: [
            {
              id: 5,
              name: 'Node 1.2.1',
              children: [],
            },
            {
              id: 6,
              name: 'Node 1.2.2',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'Node 2',
      children: [],
    },
  ],
};

const processNode = (node) => {
  console.log(`ID: ${node.id}, Name: ${node.name}`);

  if (node.children.length > 0) {
    console.log('Children:');
    node.children.forEach((child) => processNode(child));
  }
};

processNode(tree);

function divide(num1, num2) {

}

try {
  divide(1, 5);
} catch (e) {

}

try {
  divide(0, 5);
} catch (e) {

}
