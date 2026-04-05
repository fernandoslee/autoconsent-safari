import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_metropoltheater.com_m66', ['https://www.metropoltheater.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
