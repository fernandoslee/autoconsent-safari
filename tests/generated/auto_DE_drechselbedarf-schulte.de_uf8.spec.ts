import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_drechselbedarf-schulte.de_uf8', ['https://www.drechselbedarf-schulte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
