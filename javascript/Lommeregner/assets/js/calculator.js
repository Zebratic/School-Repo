class Calculator {
    constructor() {
        this._num1 = 0;
        this._num2 = 0;
        this._operator = "";
        this._start_negative = false;
        this._last_operation = [];
    }

    Calculate() {
        // Do the calculations
        switch(this._operator) {
            case "+": return Number(this._num1) + Number(this._num2);
            case "-": return Number(this._num1) - Number(this._num2);
            case "×": return Number(this._num1) * Number(this._num2);
            case "÷": return Number(this._num1) / Number(this._num2);
            default: return "Error: Invalid operator";
        }
    }

    GetResult() {
        // Redo calculation if = is clicked again
        if (this._num2 === 0 && this._operator === "" && this._num1 === this._last_operation[3])
        {
            this.SetOperator(this._last_operation[1]);
            this.SetNumber(this._last_operation[2]);
            return this.GetResult();
        }

        if (this._num1 === 0) return 0;
        if (this._operator === "") return this._num1;

        var result = this.Calculate();
        this._last_operation = [this._num1, this._operator, this._num2, result];
        this.Clear();
        this.SetNumber(result);
        return result;
    }

    Clear() {
        this._num1 = 0;
        this._num2 = 0;
        this._operator = "";
    }

    SetOperator(operator) {
        if (this._num1 === 0 && operator === "-")
            this._start_negative = true;
        else
            this._operator = operator;
    }

    SetNumber(num) {
        // if start negative, set num to negative and turn off start negative flag
        if (this._start_negative) {
            num = -num;
            console.log("negative: " + num);
            this._start_negative = false;
        }

        if (this._operator === "")
            this._num1 = num;
        else
            this._num2 = num;
    }

    AddNumber(num) {
        // decimal point
        if (num === ".") {
            if (this.GetCurrentNumber().toString().includes("."))
                return;
            num = ".";
        }

        if (this._operator === "")
            this.SetNumber(this._num1 + num);
        else
            this.SetNumber(this._num2 + num);
    }

    GetCurrentNumber() {
        if (this._operator === "")
            return this._num1;
        else
            return this._num2;
    }
}