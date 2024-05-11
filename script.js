"use strict";

const KwspAccount3Calculator = class {
    static acc1Bal;
    static acc2Bal;
    static acc2ErrorMessage;
    static newAcc1Bal;
    static newAcc2Bal;
    static newAcc3Bal;

    static initialise() {
        this.acc1Bal = parseFloat(document.getElementById("acc1").value);
        this.acc2Bal = parseFloat(document.getElementById("acc2").value);

        if(!this.acc1Bal)
            this.acc1Bal = 0;

        this.calculate();
        this.showResult();
    }
    static calculate() {
        if (this.acc2Bal>=3000) {
            this.newAcc1Bal = (5/30) * this.acc2Bal + this.acc1Bal;
            this.newAcc2Bal = (15/30) * this.acc2Bal;
            this.newAcc3Bal = (10/30) * this.acc2Bal;

            if(this.acc1Bal === 0)
                this.newAcc1Bal = `${round(this.newAcc1Bal, 2).toFixed(2)} + Initial account balance`;

        } else if (this.acc2Bal > 1000) {
            this.newAcc1Bal = this.acc1Bal;
            this.newAcc2Bal = this.acc2Bal - 1000;
            this.newAcc3Bal = 1000;
        } else {
            this.newAcc1Bal = this.acc1Bal;
            this.newAcc2Bal = 0;
            this.newAcc3Bal = this.acc2Bal;
        }

        if(this.acc1Bal === this.newAcc1Bal)
            this.newAcc1Bal = (round(this.newAcc1Bal, 2)).toFixed(2);

        this.newAcc2Bal = (round(this.newAcc2Bal, 2)).toFixed(2);
        this.newAcc3Bal = (round(this.newAcc3Bal, 2)).toFixed(2);
    }
    static showResult() {
        document.getElementById("new-acc1-bal").innerText = this.newAcc1Bal;
        document.getElementById("new-acc2-bal").innerText = this.newAcc2Bal;
        document.getElementById("new-acc3-bal").innerText = this.newAcc3Bal;
    }
    static checkValidity() {
        this.acc2ErrorMessage = document.getElementById("acc2-error");
        this.acc2ErrorMessage.style.display = "none";
        this.acc2Bal = parseFloat(document.getElementById("acc2").value);
        if(!this.acc2Bal)
        {
            const x = document.querySelector('#acc2').getBoundingClientRect().left;
            this.acc2ErrorMessage.style.display = "block";
            this.acc2ErrorMessage.style.left = `${x}px`;

            throw new Error("No number given for account 2.");
        }
    }
};

function calculate() {
    KwspAccount3Calculator.checkValidity();
    KwspAccount3Calculator.initialise();
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}