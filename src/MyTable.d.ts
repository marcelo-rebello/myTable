export type Metric = {
  title: string;
  value: number;
  trend?: string;
}
export type Data = {
  dimension: Record<string, string>;
  metrics: Metric[];
}
