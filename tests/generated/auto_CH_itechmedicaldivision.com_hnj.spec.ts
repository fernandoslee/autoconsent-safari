import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_itechmedicaldivision.com_hnj', ['https://itechmedicaldivision.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
