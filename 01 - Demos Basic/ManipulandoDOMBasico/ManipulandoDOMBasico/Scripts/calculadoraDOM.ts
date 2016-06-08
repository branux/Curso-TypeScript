window.onload = (): void => {
    var calc = new CalculadoraDOM('X', 'Y', 'Output');
}

class CalculadoraDOM {
    private _x: HTMLInputElement;
    private _y: HTMLInputElement;
    private _output: HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        this._x = <HTMLInputElement>document.getElementById(xId);
        this._y = <HTMLInputElement>document.getElementById(yId);
        this._output = <HTMLSpanElement>document.getElementById(outputId);
        this.dispararEventos();
    }

    dispararEventos(): void {
        document.getElementById('Add').addEventListener('click', () => {
            this._output.innerHTML = this.somar(parseInt(this._x.value), parseInt(this._y.value)).toString()
        });

        document.getElementById('Subtract').addEventListener('click', (): void => {
            this._output.innerHTML = this.subtrair(parseInt(this._x.value), parseInt(this._y.value)).toString()
        });
    }

    somar(x: number, y: number) {
        return x + y;
    }

    subtrair(x: number, y: number) {
        return x - y;
    }

}