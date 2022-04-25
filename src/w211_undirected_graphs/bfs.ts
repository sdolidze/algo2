import { ArrayQueue } from "../w121_stacks_and_queues/ArrayQueue";
import { Graph } from "./Graph";

export function bfs(graph: Graph, startVertex: number): number[] {
  const weights = new Array(graph.numVertices()).fill(-1);
  const queue = new ArrayQueue<number>();

  weights[startVertex] = 0;
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const vertex = queue.dequeue();

    for (const neighbor of graph.adjacent(vertex)) {
      if (weights[neighbor] === -1) {
        weights[neighbor] = weights[vertex] + 1;
        queue.enqueue(neighbor);
      }
    }
  }

  return weights;
}
