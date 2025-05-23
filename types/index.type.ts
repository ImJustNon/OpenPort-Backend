export type CorsOriginCallbackFunction = (err: Error | null, allow?: boolean) => void;
export type CorsOriginParam = string | undefined;


export type PortfolioSource = {
    cover: string;
    inner: string[];
}
export type PortfolioResult = {
    interview: boolean;
    pass: boolean;
}
export interface PortfolioConfig {
    enable: boolean;
    id: string;
    name: string;
    description: string;
    sources: PortfolioSource;
    tags: string[];
    university: string;
    faculty: string;
    branch: string[];
    program: string;
    author: string;
    language: string;
    pages: number;
    type: string;
    categories: string[];
    results: PortfolioResult;
    download?: {
        pdf?: string;
    };
}