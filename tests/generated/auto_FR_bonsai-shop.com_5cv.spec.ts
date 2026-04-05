import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bonsai-shop.com_5cv', ['https://www.bonsai-shop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
