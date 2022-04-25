import { bfs } from "./bfs";
import { Graph } from "./Graph";

describe("Graph", () => {
  it("Graph", () => {
    const graph = new Graph(4);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);

    expect(graph.numVertices()).toBe(4);
    expect(graph.adjacent(0)).toEqual([1, 2]);
    expect(graph.adjacent(1)).toEqual([0, 2]);
    expect(graph.adjacent(2)).toEqual([0, 1]);
    expect(graph.adjacent(3)).toEqual([]);
  });
});
