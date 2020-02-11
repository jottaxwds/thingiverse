const express = require('express');
const router = express.Router();
const testController = require('./../../controllers/test');

const DEFAULT_PARAMETER = 'SOMETHING FAILED!';

// @route   GET api/test/test
// @desc    Test GET method to check if everything its OK!
// @access  Public
router.get('/test/:myParameter?', async (req, res) => {
  const {
    params: { myParameter = DEFAULT_PARAMETER }
  } = req;

  const result = await testController.testMethod({ myParameter });

  res.json(
    { testData: result } || {
      err: 'NO_TEST_SUCCESS',
      msg: 'Something went wrong testing this...'
    }
  );
});

module.exports = router;
