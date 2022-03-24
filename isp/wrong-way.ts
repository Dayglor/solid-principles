

interface IBank {
    bankDraft(accountId:string, amount:string):boolean;
    bankDeposit(accountId:string, amount:string):boolean;
}

class MyBankOne implements IBank {
    bankDraft(accountId: string, amount: string): boolean {
        /// make cash out

        return true;
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

    bankDeposit(accountId: string, amount: string): boolean {
        // Cash in not exists at this bank.
    }
}