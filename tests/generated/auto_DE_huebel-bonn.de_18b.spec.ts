import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_huebel-bonn.de_18b', ['https://www.huebel-bonn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
