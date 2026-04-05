import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_quartz-healthcare.com_4ne', ['https://quartz-healthcare.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
