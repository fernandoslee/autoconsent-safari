import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hansgrohe.be_5ul', ['https://www.hansgrohe.be/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
