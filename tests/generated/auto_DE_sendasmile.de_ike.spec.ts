import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sendasmile.de_ike', ['https://www.sendasmile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
