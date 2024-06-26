// dijkstra.js

/*
Алгоритм Дейкстры

Алгоритм Дейкстры находит кратчайший путь между начальным узлом и всеми другими узлами
в графе с неотрицательными весами ребер. Использует очередь с приоритетом для жадного
выбора кратчайшего пути к еще не обработанному узлу.

Плюсы:

Эффективен для графов с неотрицательными весами ребер.
Находит кратчайшие пути от одной из вершин до всех остальных.
Прост в реализации и понимании.
Минусы:

Не работает с графами, содержащими ребра отрицательного веса (включая циклы).
Может потребовать дополнительной работы для обработки графов с изменяющимися весами ребер.
*/

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift().element;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, start) {
    let distances = {};
    let visited = new Set();
    let pq = new PriorityQueue();

    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        let vertex = pq.dequeue();
        if (!visited.has(vertex)) {
            visited.add(vertex);
            graph[vertex].forEach(neighbor => {
                let distance = distances[vertex] + neighbor.weight;
                if (distance < distances[neighbor.vertex]) {
                    distances[neighbor.vertex] = distance;
                    pq.enqueue(neighbor.vertex, distance);
                }
            });
        }
    }
    return distances;
}

let graph = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'A', weight: 4 }, { vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'B', weight: 2 }],
    'E': [{ vertex: 'B', weight: 5 }, { vertex: 'F', weight: 1 }],
    'F': [{ vertex: 'C', weight: 3 }, { vertex: 'E', weight: 1 }]
};

console.log(dijkstra(graph, 'A'));

module.exports = dijkstra;