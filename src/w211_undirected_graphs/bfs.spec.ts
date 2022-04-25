import { bfs } from "./bfs";
import { Graph } from "./Graph";

describe("bfs", () => {
  it("connected", () => {
    const graph = new Graph(6);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(1, 4);
    graph.addEdge(2, 4);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);

    expect(bfs(graph, 0)).toEqual([0, 1, 1, 2, 2, 3]);
  });

  it("disconnected", () => {
    const graph = new Graph(6);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(4, 5);

    expect(bfs(graph, 0)).toEqual([+0, +1, +1, +2, -1, -1]);
    expect(bfs(graph, 5)).toEqual([-1, -1, -1, -1, +1, +0]);
  });
});
