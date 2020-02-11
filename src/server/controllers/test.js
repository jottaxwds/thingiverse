async function testMethod({ myParameter }) {
  if (myParameter && myParameter === 'test') return 'Hello World!';
}

module.exports = {
  testMethod: testMethod
};
