# Алгоритмы работы с графами на Node.js

Этот репозиторий содержит реализации различных алгоритмов работы с графами на Node.js. Каждый алгоритм находится в отдельном файле и имеет краткое описание и теоретическое обоснование.

## Алгоритмы

1. **Алгоритм поиска в ширину (BFS)**
    - `bfs.js`
    - BFS используется для обхода или поиска в древовидных или графовых структурах данных. Начинается с корневого узла (или некоторого произвольного узла графа) и исследует соседние узлы на текущем уровне глубины перед переходом к узлам на следующем уровне глубины.

2. **Алгоритм поиска в глубину (DFS)**
    - `dfs.js`
    - DFS используется для обхода или поиска в древовидных или графовых структурах данных. Алгоритм начинает с корневого узла и идет как можно глубже вдоль каждой ветви перед возвратом назад.

3. **Алгоритм Дейкстры**
    - `dijkstra.js`
    - Алгоритм Дейкстры используется для нахождения кратчайших путей между узлами в графе, который может представлять, например, дорожные сети.

4. **Алгоритм Беллмана-Форда**
    - `bellmanFord.js`
    - Алгоритм Беллмана-Форда вычисляет кратчайшие пути от одной исходной вершины до всех других вершин в взвешенном ориентированном графе.

5. **Алгоритм Флойда-Уоршелла**
    - `floydWarshall.js`
    - Алгоритм Флойда-Уоршелла используется для нахождения кратчайших путей во взвешенном графе с положительными или отрицательными весами ребер (но без отрицательных циклов).

6. **Алгоритм Прима**
    - `prim.js`
    - Алгоритм Прима является жадным алгоритмом, который находит минимальное остовное дерево для взвешенного неориентированного графа.

7. **Алгоритм Краскала**
    - `kruskal.js`
    - Алгоритм Краскала находит минимальное остовное дерево для связного взвешенного графа, сортируя все ребра и добавляя их одно за другим, избегая циклов, с использованием структуры данных раздельных множеств.

## Как запустить

Каждый файл можно запустить с помощью Node.js. Например, чтобы запустить алгоритм BFS:

```bash
node algorithms/bfs.js
```

# Graph Algorithms in Node.js

This repository contains implementations of various graph algorithms in Node.js. Each algorithm is in a separate file and has a brief description and theoretical background.

## Algorithms

1. **Breadth-First Search (BFS)**
    - `bfs.js`
    - BFS is used for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

2. **Depth-First Search (DFS)**
    - `dfs.js`
    - DFS is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node and explores as far as possible along each branch before backtracking.

3. **Dijkstra's Algorithm**
    - `dijkstra.js`
    - Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.

4. **Bellman-Ford Algorithm**
    - `bellmanFord.js`
    - The Bellman-Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.

5. **Floyd-Warshall Algorithm**
    - `floydWarshall.js`
    - The Floyd-Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles).

6. **Prim's Algorithm**
    - `prim.js`
    - Prim's algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.

7. **Kruskal's Algorithm**
    - `kruskal.js`
    - Kruskal's algorithm is an algorithm in graph theory that finds a minimum spanning tree for a connected weighted graph.

## How to Run

Each file can be run using Node.js. For example, to run the BFS algorithm:

```bash
node algorithms/bfs.js
```