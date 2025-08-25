import { BlockToken } from './blockToken'
import { MarkdownParser } from './parser'

export class ListToken extends BlockToken {
	depth: number;
	constructor(content: string, depth: number) {
		super(content);
		this.depth = depth;
	}

	static match(line: string): boolean {
		return /^( *)-(?!-)\s*(.*)/.test(line);
	}

	static fromLine(line: string): ListToken {
		const match = line.match(/^( *)-(?!-)\s*(.*)/);
		if (!match) throw new Error(`List not found in line '${line}'.`);
		let depth = match[1].length + 1;
		let content = match[2];
		return new this(content, depth);
	}

	merge(next: ListToken): boolean {
		if(next.depth == this.depth) {
			this.content += `\n${next.rawContent}`;
			return true;
		}
		return false;
	}

	renderHTML(): string {
		super.renderHTML();
		let lines = this.content.split('\n');
		let htmlOutput = "";
		for(let i = 0; i < this.depth; i++) {
			htmlOutput += "<ul>";
		}
		lines.forEach((e) => {
			htmlOutput += `<li>${e}</li>`;
		})
		for(let i = 0; i < this.depth; i++) {
			htmlOutput += "</ul>";
		}
		return htmlOutput;
	}
}
