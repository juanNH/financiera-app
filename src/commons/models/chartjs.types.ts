type TooltipContextTitle<T> = {
    dataIndex: number;
    datasetIndex: number;
    dataset: T;
    label: string;
    parsed: { [key: string]: any }; // Parsed data for each element
};


export type { TooltipContextTitle }