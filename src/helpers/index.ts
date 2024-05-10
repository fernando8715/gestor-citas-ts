export const formatData = (amount : number)=> {
    return Intl.NumberFormat('es-US', {style: 'currency', currency: 'USD'}).format(amount)
}

export const formatDate = (dateStr: string) : string => {
    const dateObj = new Date(dateStr);
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return Intl.DateTimeFormat('es-ES', options).format(dateObj)
}