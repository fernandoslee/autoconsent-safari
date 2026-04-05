import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_careers.jdirving.com_o2b', ['https://careers.jdirving.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
