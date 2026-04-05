import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_basisonderwijs.online_9aw', ['https://basisonderwijs.online/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
