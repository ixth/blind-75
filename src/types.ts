export interface DataSet<F extends (...args: any) => any> {
    title?: string;
    caseTitle?: string;
    testCases: TestCase<F>[];
};

export interface TestCase<F extends (...args: any) => any> {
    args: Parameters<F>;
    result: ReturnType<F>;
};
