import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_laenderbahn.com_kdr', ['https://www.laenderbahn.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
