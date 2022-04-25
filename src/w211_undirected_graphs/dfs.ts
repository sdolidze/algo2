import { Graph } from "./Graph";

export function dfs(
  graph: Graph,
  vertex: number,
  fn: (vertex: number) => void,
  visited: Set<number> = new Set(),
): void {
  visited.add(vertex);
  fn(vertex);

  for (const neighbor of graph.adjacent(vertex)) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, fn, visited);
    }
  }
}
