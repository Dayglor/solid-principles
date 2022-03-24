

interface IBank {
    bankDraft(accountId:string, amount:string):boolean;
    balance(accountId: string): string;
    
}

interface IMoneyIn {
    bankDeposit(accountId:string, amount:string):boolean;
}

class MyBankOne implements IBank, IMoneyIn {
    bankDraft(accountId: string, amount: string): boolean {
        /// make cash out

        return true;
    }

    balance(accountId: string): string {
        return '1000000';
    }

    bankDeposit(accountId: string, amount: string): boolean {
        /// make cash in

        return true;
    }
}

class MyBankTwo implements IBank {
    bankDraft(accountId: string, amount: string): boolean {
        return true;
    }

    balance(accountId: string): string {
        return '10050';
    }
}