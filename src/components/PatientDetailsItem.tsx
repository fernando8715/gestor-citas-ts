type PatientDetailItemProps = {
    label: string
    data: string
}


export const PatientDetailsItem = ({label, data} : PatientDetailItemProps) => {
    return (
        <div className="flex gap-1">
            <p className="font-bold text-gray-700 mb-3 first-letter:uppercase">{label}: </p>
            <p className="first-letter:uppercase">{data}</p>
        </div>
    )
}
