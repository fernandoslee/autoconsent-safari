import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hotel-ami.com_oak', ['https://www.hotel-ami.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
