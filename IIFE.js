var KegManager = (function($){
	var kegs = [];
	return{
	addKeg: function(keg) { kegs.push(keg); },
	getKegs: function() { return kegs; }
	}
})(jQuery);
var sodaKeg = new Keg("Soda",100.0);
KegManager.addKeg(sodaKeg);
var kegs = KegManager.getKegs();





var BankManager = (function($){
    var bankAccountList = [];
    return{
        addBankEntry: function(entry) { bankAccountList.push(entry)},
        getBankEntry: function() { return bankAccountList; }
    }
})(jQuery);
var bank= new BankAcc(accNo,accBal,accName);
BankManager.addBankEntry(bank);
var bankAccountList = BankManager.getBankEntry();