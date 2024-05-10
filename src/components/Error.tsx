
export const Error = ({children} : {children: React.ReactNode}) => {
  return (
    <p className="my-2 bg-red-600 text-white font-bold uppercase p-2">{children}</p>
  )
}
