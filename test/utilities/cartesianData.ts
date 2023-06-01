export class CartesianData{
    
    private readonly _args: any[][];

    public constructor(...args: any[][]) {
        this._args = args;
    }

    public toTestCases(): any[][] {
        let combinations : any[][] = [];

        for(const parameterValue of this._args[0]){
            combinations.push([parameterValue]);
        }

        for(const extraParameter of this._args.slice(1))
            combinations = this.addParameter(combinations, extraParameter);

        return combinations;
    }

    private addParameter (combinations : any[][], parameter: any[]) : any[][]
    {
        let result : any[][] = [];

        for (const value of parameter) {
            for (const combination of combinations) {
                let lineResult: any[] = [];

                for (const element of combination){
                    lineResult.push(element);
                }

                lineResult.push(value);
                result.push(lineResult);
            }
        }

        return result;
    }
}