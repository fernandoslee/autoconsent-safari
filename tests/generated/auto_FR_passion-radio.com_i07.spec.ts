import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_passion-radio.com_i07', ['https://www.passion-radio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
