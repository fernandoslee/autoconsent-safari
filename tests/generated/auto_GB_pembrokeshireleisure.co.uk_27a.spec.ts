import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pembrokeshireleisure.co.uk_27a', ['https://pembrokeshireleisure.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
