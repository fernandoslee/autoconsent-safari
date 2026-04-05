import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thewildlifetrustsshop.com_4qr', ['https://thewildlifetrustsshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
