import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_notarypublicstamps.com_j0y', ['https://www.notarypublicstamps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
