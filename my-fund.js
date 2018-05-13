
import express   from 'express';

export function myFund() {
    var router = express.Router(); 
    
    router.get('/', function(req, res) {
        res.json([{"isDividendGuarantied":true,"isPeriodicalDividendPayments":true,"isLiquidityGuarantied":false,"id":"5a3a115f8a11ef239855b60e","fundInvestmentTypeId":"5a3a11388a11ef239855b60b","fundStructureTypeId":"5a3a11458a11ef239855b60c","instrument":{"title":"pishro","titleEn":"pirsho ltd","id":"5a3a115f8a11ef239855b60f","concreteId":"5a3a115f8a11ef239855b60e","concreteType":"Fund"},"fundInvestmentType":{"title":"inv2","id":"5a3a11388a11ef239855b60b"},"fundStructureType":{"title":"ETF","id":"5a3a11458a11ef239855b60c"}},{"isDividendGuarantied":true,"isPeriodicalDividendPayments":false,"isLossCompensationGuarantied":true,"isLiquidityGuarantied":false,"id":"5a3a119d8a11ef239855b610","fundInvestmentTypeId":"5a3a11388a11ef239855b60b","fundStructureTypeId":"5a3a11488a11ef239855b60d","instrument":{"title":"darivari","titleEn":"dariviarei","id":"5a3a119d8a11ef239855b611","concreteId":"5a3a119d8a11ef239855b610","concreteType":"Fund"},"fundInvestmentType":{"title":"inv2","id":"5a3a11388a11ef239855b60b"},"fundStructureType":{"title":"MF","id":"5a3a11488a11ef239855b60d"}}]);   
    });
    return router
}