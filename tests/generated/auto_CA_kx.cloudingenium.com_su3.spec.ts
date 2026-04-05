import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_kx.cloudingenium.com_su3', ['https://kx.cloudingenium.com/es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
