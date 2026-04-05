import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zap88.vosges.fr_85l', ['https://zap88.vosges.fr/Beneficiaires/Views/Accueil.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
