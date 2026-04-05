import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zum-kramerwirt-germering.de_l7s', ['https://www.zum-kramerwirt-germering.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
