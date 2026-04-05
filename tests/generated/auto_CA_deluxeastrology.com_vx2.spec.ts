import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_deluxeastrology.com_vx2', ['https://deluxeastrology.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
