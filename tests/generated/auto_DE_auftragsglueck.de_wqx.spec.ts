import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auftragsglueck.de_wqx', ['https://auftragsglueck.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
