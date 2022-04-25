import { dfs } from "./dfs";
import { Graph } from "./Graph";

function dfsPath(graph: Graph, vertex: number): number[] {
  const xs: number[] = [];
  dfs(graph, vertex, vertex => xs.push(vertex));
  return xs;
}

describe("dfs", () => {
  it("connected", () => {
    const graph = new Graph(10);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(0, 3);

    graph.addEdge(1, 4);
    graph.addEdge(2, 5);
    graph.addEdge(3, 6);

    graph.addEdge(4, 7);
    graph.addEdge(5, 8);
    graph.addEdge(6, 9);

    expect(dfsPath(graph, 0)).toEqual([0, 1, 4, 7, 2, 5, 8, 3, 6, 9]);
  });

  it("disconnected", () => {
    const graph = new Graph(6);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(4, 5);

    expect(dfsPath(graph, 0)).toEqual([0, 1, 2, 3]);
    expect(dfsPath(graph, 5)).toEqual([5, 4]);
  });
});
