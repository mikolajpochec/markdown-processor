import { BlockToken } from './blockToken'

export class SeparatorToken extends BlockToken {
	constructor() {
		super('');
	}

	static match(line: string): boolean {
		return /^ *-{3,} *$/.test(line.trim());
	}

	static fromLine(line: string): BlockToken {
		return new SeparatorToken();
	}
	
	renderHTML(): string {
		return `<hr/>`;
	}
}
