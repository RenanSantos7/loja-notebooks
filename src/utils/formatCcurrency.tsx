/**
 * Converts a number to currency in Brazilian Real format.
 * @param currency 
 * @returns {string}
 */
export default function formatCurrency(currency: number): string {
	return currency.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});
}
