// bellmanFord.js

/*
Алгоритм Беллмана-Форда

Алгоритм Беллмана-Форда вычисляет кратчайшие пути от одной исходной вершины до всех
других вершин в взвешенном ориентированном графе. В отличие от алгоритма Дейкстры, он
может обрабатывать графы с отрицательными весами ребер.

Алгоритм применим для графов с произвольными весами ребер (в том числе с отрицательными), но при
этом требует O(V*E) времени, где V - количество вершин, а E - количество ребер.

Плюсы:

Работает с графами с произвольными весами ребер, включая отрицательные.
Обнаруживает наличие отрицательных циклов в графе.
Прост в реализации и понимании.
Минусы:

Требует O(V*E) времени для выполнения, что делает его неэффективным для больших графов с большим числом ребер.
Не так эффективен как алгоритмы для графов без отрицательных весов (например, Дейкстры) на разреженных графах.
*/

function bellmanFord(graph, start) {
    let distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let u in graph) {
            for (let { vertex: v, weight } of graph[u]) {
                if (distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                }
            }
        }
    }

    // Проверка на отрицательные циклы
    for (let u in graph) {
        for (let { vertex: v, weight } of graph[u]) {
            if (distances[u] + weight < distances[v]) {
                throw new Error("Граф содержит отрицательные циклы");
            }
        }
    }

    return distances;
}

let graph = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'E', weight: -3 }],
    'E': [{ vertex: 'F', weight: 1 }],
    'F': []
};

console.log(bellmanFord(graph, 'A'));

module.exports = bellmanFord;