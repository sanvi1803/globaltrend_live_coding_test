class Graph{
    constructor(V){
        this.V = V;

        this.adj = new Array(V);
        for(let i =0;i < V; i++){
            this.adj[i] = new Array();
        }
    }

    Edgeaddition(u,v,w){
        this.adj[u].push([v,w]);
        this.adj[v].push([u,w]);
    }

    shortestPath(source){
        let priority_queue = [];
        let distance = new Array(V).fill(Infinity);

        priority_queue.push([0,source]);
        distance[source] = 0;

        while (priority_queue.length > 0) {
            let u  = priority_queue[0][1];
            priority_queue.shift();

            for(let i= 0; i <this.adj[u].length;i++){
                let v = this.adj[u][i][0];
                let weight = this.adj[u][i][1];

                if (distance[v] > distance[u] + weight) {
                    distance[v] = distance[u] + weight;
                    priority_queue.push([distance[v],v]);
                    priority_queue.sort((a,b) => {
                        if (a[0] === b[0]) {
                            return a[1] - b[1];
                        }
                        return a[0] - b[0];
                    })
                }
            }
        }

        for (let i = 0; i < V; i++) {
            console.log(i,":" ,distance[i])
            
        }
    }
}

let V = 4;
let g = new Graph(V);
g.Edgeaddition(0,1,4)
g.Edgeaddition(0,2,1)
g.Edgeaddition(1,3,1)
g.Edgeaddition(2,1,2)
g.Edgeaddition(2,3,5)

g.shortestPath(0);