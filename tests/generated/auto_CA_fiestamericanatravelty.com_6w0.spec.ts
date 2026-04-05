import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fiestamericanatravelty.com_6w0', ['https://www.fiestamericanatravelty.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
