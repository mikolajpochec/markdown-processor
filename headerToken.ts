import { BlockToken } from './blockToken'

export class HeaderToken extends BlockToken {
	private depth: number;

	constructor(content: string, depth: number) {
		super(content);
		this.depth = depth;
	}

	static match(line: string): boolean {
		return /^(#{1,6})\s+/.test(line);
	}

	static fromLine(line: string): BlockToken {
		//const [,hashes,content] = line.match(/^(#{1,6})\s+(.*)$/);
		const out = line.match(/^(#{1,6})\s+(.*)$/);
		if(out != null) 
			return new HeaderToken(out[2], out[1].length);
		return new HeaderToken("Error", 1);
	}
	
	renderHTML(): string {
		return `<h${this.depth}>${this.content}</h${this.depth}>`;
	}
}
