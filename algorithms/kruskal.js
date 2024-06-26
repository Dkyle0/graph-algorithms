// kruskal.js

/*
Алгоритм Краскала

Алгоритм Краскала также находит минимальное остовное дерево взвешенного
неориентированного графа, но делает это, сортируя все ребра и добавляя их одно за другим,
избегая циклов, с использованием структуры данных раздельных множеств.
Минимальное остовное дерево - это подграф, который соединяет все вершины графа с минимальной возможной общей стоимостью ребер.
Алгоритм Краскала является жадным алгоритмом, который последовательно добавляет ребра в
MST, начиная с наименьших, избегая циклов. Он использует структуру данных раздельных
множеств (disjoint-set) для отслеживания соединенных компонент и предотвращения циклов.

Плюсы:

Простой и понятный.
Хорошо работает на разреженных графах.
Эффективен при использовании с правильной структурой данных для раздельных множеств.
Минусы:

Требуется сортировка всех ребер, что занимает O(E log E) времени.
Менее эффективен для плотных графов по сравнению с алгоритмом Прима.
*/

// Реализация структуры раздельных множеств
const DisjointSet = (elements) => {
    const parent = {};
    elements.forEach(e => parent[e] = e);

    const find = (e) => {
        if (parent[e] === e) return e;
        return parent[e] = find(parent[e]);
    };

    const union = (e1, e2) => {
        const root1 = find(e1);
        const root2 = find(e2);
        if (root1 !== root2) {
            parent[root2] = root1;
        }
    };

    return { find, union };
};

const kruskal = (graph) => {
    const edges = Object.entries(graph).flatMap(([from, neighbors]) =>
        neighbors.map(edge => ({ ...edge, from }))
    );

    edges.sort((a, b) => a.weight - b.weight);

    const disjointSet = DisjointSet(Object.keys(graph));
    const mst = [];

    edges.forEach(edge => {
        if (disjointSet.find(edge.from) !== disjointSet.find(edge.vertex)) {
            mst.push(edge);
            disjointSet.union(edge.from, edge.vertex);
        }
    });

    return mst;
};

const graph = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'A', weight: 4 }, { vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'B', weight: 2 }],
    'E': [{ vertex: 'B', weight: 5 }, { vertex: 'F', weight: 1 }],
    'F': [{ vertex: 'C', weight: 3 }, { vertex: 'E', weight: 1 }]
};

console.log(kruskal(graph));

module.exports = kruskal;

