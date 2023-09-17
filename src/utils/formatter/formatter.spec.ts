import * as formatter from './index';

describe('Testing formatter util', () => {
	describe('limitText', () => {
		it('should add "..." to text when length more than maxLength', () => {
			const limited = formatter.limitText('This is a big text');
			expect(limited).toBe('This is a b...');
		});

		it('should not limit text when length less than maxLength', () => {
			const limited = formatter.limitText('Small text');
			expect(limited).toBe('Small text');
		});
	});

	describe('onlyNumbers', () => {
		it('should returns empty string when text is empty', () => {
			expect(formatter.onlyNumbers('')).toBe('');
		});

		it('should returns empty string when no numbers in text', () => {
			expect(formatter.onlyNumbers('String without number')).toBe('');
		});

		it('should returns only numbers when text has numbers in text', () => {
			expect(formatter.onlyNumbers('123.456.789')).toBe('123456789');
		});

		it('should returns a float number when withDecimal is true', () => {
			expect(formatter.onlyNumbers('12.354,32', true)).toBe('12354.32');
		});
	});

	describe('capitalize', () => {
		it('should returns empty string', () => {
			expect(formatter.capitalize('')).toBe('');
		});

		it('should returns capitalized string', () => {
			expect(formatter.capitalize('lorem')).toBe('Lorem');
		});

		it('should returns original string when isActive false', () => {
			expect(formatter.capitalize('ipsum', false)).toBe('ipsum');
		});
	});

	describe('removeEspecialChars', () => {
		it('should remove special chars from string', () => {
			const result = formatter.removeEspecialChars('Sp4ci@l ch@rs: !@#!@#!@#');
			expect(result).toBe('Sp4cilchrs');
		});
	});

	describe('removeAccents', () => {
		it('should remove accents from string', () => {
			const result = formatter.removeAccents('áêìõú');
			expect(result).toBe('aeiou');
		});
	});

	describe('showHideText', () => {
		it('should be able to show and hide a text', () => {
			const text = 'A cool text to hide';
			const hidden = formatter.showHideText(text, false);
			const showing = formatter.showHideText(text, true);

			expect(hidden).toBe('*******************');
			expect(showing).toBe(text);
		});
	});

	describe('toPlural', () => {
		it('should returns a plural word when value is greater than 1', () => {
			const result1 = formatter.toPlural(2, 'singular_word', 'plural_word');
			const result2 = formatter.toPlural(
				['item1', 'item2', 'item3'],
				'singular_word',
				'plural_word',
			);

			expect(result1).toBe('plural_word');
			expect(result2).toBe('plural_word');
		});

		it('should returns a singular word when value is 1', () => {
			const result1 = formatter.toPlural(1, 'singular_word', 'plural_word');
			const result2 = formatter.toPlural(
				['item'],
				'singular_word',
				'plural_word',
			);

			expect(result1).toBe('singular_word');
			expect(result2).toBe('singular_word');
		});
	});

	describe('toPluralWithQuantity', () => {
		it('should returns a plural word with quantity when value is greater than 1', () => {
			const quantity = 5;
			const items = ['item1', 'item2'];

			const result1 = formatter.toPluralWithQuantity(
				quantity,
				'singular_word',
				'plural_word',
			);
			const result2 = formatter.toPluralWithQuantity(
				items,
				'singular_word',
				'plural_word',
			);

			expect(result1).toBe(`${quantity} plural_word`);
			expect(result2).toBe(`${items.length} plural_word`);
		});

		it('should returns a singular word with quantity when value is 1', () => {
			const quantity = 1;
			const items = ['item1'];

			const result1 = formatter.toPluralWithQuantity(
				quantity,
				'singular_word',
				'plural_word',
			);
			const result2 = formatter.toPluralWithQuantity(
				items,
				'singular_word',
				'plural_word',
			);

			expect(result1).toBe(`${quantity} singular_word`);
			expect(result2).toBe(`${items.length} singular_word`);
		});

		it('should returns a singular word with quantity when value is 1 and has stringToBeReplacedByQuantity', () => {
			const quantity = 1;
			const items = ['item1'];

			const result1 = formatter.toPluralWithQuantity(
				quantity,
				'has only {quantity} missing approval',
				'has {quantity} missing approvals',
				'{quantity}',
			);
			const result2 = formatter.toPluralWithQuantity(
				items,
				'has only {quantity} missing approval',
				'has {quantity} missing approvals',
				'{quantity}',
			);

			expect(result1).toBe(`has only ${quantity} missing approval`);
			expect(result2).toBe(`has only ${items.length} missing approval`);
		});

		it('should returns a plural word with quantity when value greater than 1 and has stringToBeReplacedByQuantity', () => {
			const quantity = 5;
			const items = ['item1', 'item2', 'item3'];

			const result1 = formatter.toPluralWithQuantity(
				quantity,
				'has only {quantity} missing approval',
				'has {quantity} missing approvals',
				'{quantity}',
			);
			const result2 = formatter.toPluralWithQuantity(
				items,
				'has only {quantity} missing approval',
				'has {quantity} missing approvals',
				'{quantity}',
			);

			expect(result1).toBe(`has ${quantity} missing approvals`);
			expect(result2).toBe(`has ${items.length} missing approvals`);
		});
	});

	describe('getInitials', () => {
		it('should return empty string when name is empty', () => {
			const initials = formatter.getInitials('');
			expect(initials).toBe('');
		});
		it('should be able to get name initials', () => {
			const name = 'Lorem Ipsum da Silva';
			const initials = formatter.getInitials(name);
			expect(initials).toBe('LS');
		});

		it('should be able to get name initials when have only one name', () => {
			const name = 'José';
			const initials = formatter.getInitials(name);
			expect(initials).toBe('J');
		});
	});

	describe('removeInitialFinalSpaces', () => {
		it('should return empty string when text is empty', () => {
			const text = formatter.removeInitialFinalSpaces('');
			expect(text).toBe('');
		});

		it('should return string without spaces', () => {
			const text = formatter.removeInitialFinalSpaces('   << text >>   ');
			expect(text).toBe('<< text >>');
		});
	});

	describe('formatAddress', () => {
		it('should return empty string when address is empty', () => {
			const address = undefined;
			const formatted = formatter.formatAddress(address);
			expect(formatted).toBe('');
		});

		it('should return formatted address', () => {
			const address = {
				street: 'Rua Joaquim Vilac',
				number: '501',
				cep: '13032-385',
				city: 'Campinas',
				state: 'SP',
				neighborhood: 'Vila Teixeira',
				complement: 'A',
			};

			const formatted = formatter.formatAddress(address);
			expect(formatted).toBe(
				'Rua Joaquim Vilac, 501 - A - Vila Teixeira, Campinas - SP',
			);
		});
	});
});
