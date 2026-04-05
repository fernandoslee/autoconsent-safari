import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_transaktionsgebuehren.com_ij8', ['https://transaktionsgebuehren.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
