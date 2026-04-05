import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_zepbound.lilly.com_dye', ['https://zepbound.lilly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
