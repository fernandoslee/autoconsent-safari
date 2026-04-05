import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wohnbedarf-pies.de_7jj', ['https://www.wohnbedarf-pies.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
