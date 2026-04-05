import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_smart-repair.de_y7v', ['https://www.smart-repair.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
