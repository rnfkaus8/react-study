const memberArray = ['member1', 'member2', 'member3'];
console.log("memberArray[1] : " + memberArray[1]);

const memberObject = {
    manager: 'member1',
    developer: 'member2',
    designer: 'member33'
};
memberObject.designer = 'member3';
console.log(memberObject.manager);
console.log(memberObject['manager']);
console.log(memberObject.designer);
delete memberObject.manager;

console.log(memberObject);