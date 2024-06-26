// prim.js

/*
Алгоритм Прима

Алгоритм Прима находит минимальное остовное дерево взвешенного неориентированного
графа. Начинается с произвольного узла и расширяет остовное дерево, добавляя наименьшее
ребро, соединяющее дерево с новой вершиной.

Алгоритм Прима является жадным алгоритмом, который начинает с одной произвольной
вершины и постепенно строит MST, добавляя к нему ребра с минимальным весом, которые
соединяют MST с новой вершиной. Он использует минимальную кучу (min-heap) для 
эффективного выбора следующего ребра.

Плюсы:

Прост в понимании и реализации.
Эффективен на плотных графах.
Может быть легко адаптирован для поиска MST в графах с изменяющимися весами ребер.
Минусы:

Требует минимальной кучи для эффективности, что может потребовать дополнительной памяти.
Менее эффективен на разреженных графах по сравнению с алгоритмом Краскала.
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

function prim(graph) {
    let mst = [];
    let visited = new Set();
    let pq = new PriorityQueue();
    let start = Object.keys(graph)[0];

    visited.add(start);
    graph[start].forEach(edge => pq.enqueue(edge, edge.weight));

    while (!pq.isEmpty()) {
        let edge = pq.dequeue();
        if (!visited.has(edge.vertex)) {
            visited.add(edge.vertex);
            mst.push(edge);
            graph[edge.vertex].forEach(nextEdge => {
                if (!visited.has(nextEdge.vertex)) {
                    pq.enqueue(nextEdge, nextEdge.weight);
                }
            });
        }
    }

    return mst;
}

let graph = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'A', weight: 4 }, { vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'B', weight: 2 }],
    'E': [{ vertex: 'B', weight: 5 }, { vertex: 'F', weight: 1 }],
    'F': [{ vertex: 'C', weight: 3 }, { vertex: 'E', weight: 1 }]
};

console.log(prim(graph));

module.exports = prim;