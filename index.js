const bfs = require('./algorithms/bfs');
const dfs = require('./algorithms/dfs');
const dijkstra = require('./algorithms/dijkstra');
const bellmanFord = require('./algorithms/bellmanFord');
const prim = require('./algorithms/prim');
const kruskal = require('./algorithms/kruskal');
const floydWarshall = require('./algorithms/floydWarshall');

// Пример графов
let graphBfs = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

let graphDfs = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

let graphDijkstra = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'A', weight: 4 }, { vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'B', weight: 2 }],
    'E': [{ vertex: 'B', weight: 5 }, { vertex: 'F', weight: 1 }],
    'F': [{ vertex: 'C', weight: 3 }, { vertex: 'E', weight: 1 }]
};

let graphBellmanFord = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'E', weight: -3 }],
    'E': [{ vertex: 'F', weight: 1 }],
    'F': []
};

let graphPrim = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'A', weight: 4 }, { vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'B', weight: 2 }],
    'E': [{ vertex: 'B', weight: 5 }, { vertex: 'F', weight: 1 }],
    'F': [{ vertex: 'C', weight: 3 }, { vertex: 'E', weight: 1 }]
};

let graphKruskal = {
    'A': [{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 4 }],
    'B': [{ vertex: 'A', weight: 1 }, { vertex: 'D', weight: 2 }, { vertex: 'E', weight: 5 }],
    'C': [{ vertex: 'A', weight: 4 }, { vertex: 'F', weight: 3 }],
    'D': [{ vertex: 'B', weight: 2 }],
    'E': [{ vertex: 'B', weight: 5 }, { vertex: 'F', weight: 1 }],
    'F': [{ vertex: 'C', weight: 3 }, { vertex: 'E', weight: 1 }]
};

let graphFloydWarshall = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'D': 2, 'E': 5 },
    'C': { 'A': 4, 'F': 3 },
    'D': { 'B': 2, 'E': -3 },
    'E': { 'B': 5, 'F': 1 },
    'F': { 'C': 3, 'E': 1 }
};


// Запуск каждого алгоритма с тестовым графом
console.log('Breadth-First Search (BFS):');
bfs(graphBfs, 'A')
console.log('Depth-First Search (DFS):');
dfs(graphDfs, 'A')
console.log('Dijkstra\'s Algorithm:\n', dijkstra(graphDijkstra, 'A'));
console.log('Bellman-Ford Algorithm:\n', bellmanFord(graphBellmanFord, 'A'));
console.log('Prim\'s Algorithm:', prim(graphPrim));
console.log('Kruskal\'s Algorithm:', kruskal(graphKruskal));
console.log('Floyd-Warshall Algorithm:', floydWarshall(graphFloydWarshall));
