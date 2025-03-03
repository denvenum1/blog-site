export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('nl-BE', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })
}