import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_toepferbedarf-brock.de_pp5', ['https://www.toepferbedarf-brock.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
