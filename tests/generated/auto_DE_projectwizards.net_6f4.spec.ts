import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_projectwizards.net_6f4', ['https://www.projectwizards.net/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
