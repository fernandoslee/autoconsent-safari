import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_moocit.de_c0j', ['https://moocit.de/index.php/Hauptseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
