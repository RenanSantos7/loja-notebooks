export default function numToStr(num: number) {
    return num.toLocaleString(
        'pt-br',
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    )
}