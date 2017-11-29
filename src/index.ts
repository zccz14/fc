import * as d3 from "d3";

interface Data {
    nodes: Node[]
}
interface Node {
    title: string;
    nexts: string[];
}

const f = (select: d3.Selection<any, {}, Element, any>, node: Node) => {
    console.log(node);
}

d3.json('data.json', (err, data: Data) => {
    const svg = d3.select('body').append('svg');
    svg.selectAll('ddd').data(data.nodes).call(f);
    const title = svg.selectAll('text.t').data(data.nodes).enter().append('text').text(e => e.title)
        .attr('x', 10).attr('y', 20);
    const nodes = svg.selectAll('rect').data(data.nodes).enter().append('rect')
        .attr('width', 200).attr('height', 40).attr('fill', 'transparent').attr('stroke', 'black').attr('stroke-width', 1);
    const titles = nodes.append('text').text(e => e.title).attr('x', 10).attr('y', 10);
})
