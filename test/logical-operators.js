/* eslint-disable no-unused-vars */
const logicalOperators = {
  'and-or-xor': {
    'functionsName': ['and', 'or', 'xor'],
    'tests': {
      'true': {
        'test': [true],
        'results': {
          'and': true,
          'or': true,
          'xor': true,
        },
      },
      'false': {
        'test': [false],
        'results': {
          'and': false,
          'or': false,
          'xor': false,
        },
      },
      'true, false': {
        'test': [true, false],
        'results': {
          'and': false,
          'or': true,
          'xor': true,
        },
      },
      'false, true': {
        'test': [false, true],
        'results': {
          'and': false,
          'or': true,
          'xor': true,
        },
      },
      'true, true': {
        'test': [true, true],
        'results': {
          'and': true,
          'or': true,
          'xor': false,
        },
      },
      'false, false': {
        'test': [false, false],
        'results': {
          'and': false,
          'or': false,
          'xor': false,
        },
      },
    },
  },
};
/* eslint-disable no-unused-vars */
