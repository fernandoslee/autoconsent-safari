import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wall-systems.com_pjv', ['https://www.wall-systems.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
